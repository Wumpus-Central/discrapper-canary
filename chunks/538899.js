n.d(t, { default: () => R });
var a = n(627968),
    i = n(64700),
    l = n(189213),
    s = n(311907),
    r = n(562465),
    o = n(123292),
    c = n(843472),
    d = n(608299),
    u = n(425059),
    m = n(390248),
    _ = n(946274),
    h = n(734057),
    p = n(31717),
    g = n(71393),
    f = n(320501),
    A = n(453771),
    b = n(661191),
    T = n(292348),
    I = n(518960),
    C = n(382287),
    S = n(853742),
    E = n(835369),
    y = n(218152),
    x = n(652215),
    v = n(818348),
    w = n(985018),
    M = n(158482);
async function j(e) {
    let t,
        { thread: n, attachments: a, setIsUploading: i, guild: l, onClose: s } = e,
        o = b.default.castChannelIdAsMessageId(n.id),
        _ = new u.A();
    _.on("progress", (e) => {
        let t = (0, A.o2)(l.id);
        e.currentSize > t && (_.cancel(), i(!1), s(), (0, I.V)(n, (0, C.LJ)(a)));
    });
    let h = f.A.getMessage(n.id, o),
        g = null != h ? h.attachments : [];
    i(!0);
    try {
        t = await _.uploadFiles(a);
    } catch (e) {
        i(!1);
        return;
    }
    let S = [...g, ...(t.map((e, t) => (0, T.OW)(e, t)) ?? [])];
    try {
        await r.Bo.patch({ url: x.Rsh.MESSAGE(n.id, o), body: { attachments: S }, rejectWithError: !1 }),
            s(),
            d.A.clearAll(n.id, p.C.ChannelMessage);
    } catch (e) {
        i(!1),
            e.body?.code === x.t02.EXPLICIT_CONTENT &&
                (s(),
                c.A.sendExplicitMediaClydeError(
                    n.id,
                    e.body?.attachments,
                    m.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                d.A.clearAll(n.id, p.C.ChannelMessage));
    }
}
function R(e) {
    let { threadId: t, attachments: n, sendMessage: r, transitionState: c, onClose: d } = e,
        u = (0, s.bG)([h.A], () => h.A.getChannel(t), [t]),
        m = (0, s.bG)([g.A], () => g.A.getGuild(u?.getGuildId()), [u]),
        p = (0, s.bG)([h.A], () => h.A.getChannel(u?.parent_id), [u]),
        f = n[0]?.item,
        [A, b] = i.useState(null);
    i.useEffect(() => {
        null != f && (0, _.JF)(f.file, (e, t) => b(e), v.tE);
    }, [f]);
    let T =
            null != f && null != A
                ? { src: A, width: E.T5, height: E.Co, spoiler: n[0].spoiler, alt: n[0].description }
                : null,
        [I, C] = i.useState(!1),
        x = i.useCallback(() => {
            (0, S.jh)({ added: !1 }), r(), d();
        }, [r, d]),
        R = i.useCallback(() => {
            null != u &&
                null != m &&
                ((0, S.jh)({ added: !0 }), j({ thread: u, attachments: n, setIsUploading: C, guild: m, onClose: d }));
        }, [u, n, C, m, d]);
    return null == p
        ? null
        : (0, a.jsx)(l.Modal, {
              title: w.intl.string(w.t["+SZF6S"]),
              subtitle: w.intl.string(w.t["0Ycgw5"]),
              transitionState: c,
              onClose: d,
              actionBarInput: (0, a.jsx)(o.Q, {
                  variant: "secondary",
                  disabled: I,
                  onClick: d,
                  text: w.intl.string(w.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: w.intl.string(w.t["8rKVHL"]), disabled: I, onClick: x },
                  { variant: "primary", text: w.intl.string(w.t.d611xH), loading: I, onClick: R, autoFocus: !0 },
              ],
              children: (0, a.jsx)(y.Cp, {
                  channel: p,
                  children: (0, a.jsx)(E.Ay, { threadId: t, goToThread: v.tE, overrideMedia: T, className: M.u }),
              }),
          });
}
