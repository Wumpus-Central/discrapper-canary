n.d(t, { default: () => R });
var a = n(627968),
    i = n(64700),
    l = n(189213),
    r = n(311907),
    s = n(562465),
    o = n(123292),
    c = n(843472),
    u = n(608299),
    d = n(425059),
    m = n(390248),
    _ = n(946274),
    h = n(734057),
    p = n(31717),
    f = n(71393),
    g = n(320501),
    A = n(453771),
    b = n(661191),
    I = n(292348),
    S = n(518960),
    T = n(382287),
    C = n(853742),
    x = n(835369),
    E = n(218152),
    y = n(652215),
    v = n(818348),
    M = n(985018),
    w = n(158482);
async function L(e) {
    let t,
        { thread: n, attachments: a, setIsUploading: i, guild: l, onClose: r } = e,
        o = b.default.castChannelIdAsMessageId(n.id),
        _ = new d.A();
    _.on("progress", (e) => {
        let t = (0, A.o2)(l.id);
        e.currentSize > t && (_.cancel(), i(!1), r(), (0, S.V)(n, (0, T.LJ)(a)));
    });
    let h = g.A.getMessage(n.id, o),
        f = null != h ? h.attachments : [];
    i(!0);
    try {
        t = await _.uploadFiles(a);
    } catch (e) {
        i(!1);
        return;
    }
    let C = [...f, ...(t.map((e, t) => (0, I.OW)(e, t)) ?? [])];
    try {
        await s.Bo.patch({ url: y.Rsh.MESSAGE(n.id, o), body: { attachments: C }, rejectWithError: !1 }),
            r(),
            u.A.clearAll(n.id, p.C.ChannelMessage);
    } catch (e) {
        i(!1),
            e.body?.code === y.t02.EXPLICIT_CONTENT &&
                (r(),
                c.A.sendExplicitMediaClydeError(
                    n.id,
                    e.body?.attachments,
                    m.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                u.A.clearAll(n.id, p.C.ChannelMessage));
    }
}
function R(e) {
    let { threadId: t, attachments: n, sendMessage: s, transitionState: c, onClose: u } = e,
        d = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
        m = (0, r.bG)([f.A], () => f.A.getGuild(d?.getGuildId()), [d]),
        p = (0, r.bG)([h.A], () => h.A.getChannel(d?.parent_id), [d]),
        g = n[0]?.item,
        [A, b] = i.useState(null);
    i.useEffect(() => {
        null != g && (0, _.JF)(g.file, (e, t) => b(e), v.tE);
    }, [g]);
    let I =
            null != g && null != A
                ? { src: A, width: x.T5, height: x.Co, spoiler: n[0].spoiler, alt: n[0].description }
                : null,
        [S, T] = i.useState(!1),
        y = i.useCallback(() => {
            (0, C.jh)({ added: !1 }), s(), u();
        }, [s, u]),
        R = i.useCallback(() => {
            null != d &&
                null != m &&
                ((0, C.jh)({ added: !0 }), L({ thread: d, attachments: n, setIsUploading: T, guild: m, onClose: u }));
        }, [d, n, T, m, u]);
    return null == p
        ? null
        : (0, a.jsx)(l.Modal, {
              title: M.intl.string(M.t["+SZF6S"]),
              subtitle: M.intl.string(M.t["0Ycgw5"]),
              transitionState: c,
              onClose: u,
              actionBarInput: (0, a.jsx)(o.Q, {
                  variant: "secondary",
                  disabled: S,
                  onClick: u,
                  text: M.intl.string(M.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: M.intl.string(M.t["8rKVHL"]), disabled: S, onClick: y },
                  { variant: "primary", text: M.intl.string(M.t.d611xH), loading: S, onClick: R, autoFocus: !0 },
              ],
              children: (0, a.jsx)(E.Cp, {
                  channel: p,
                  children: (0, a.jsx)(x.Ay, { threadId: t, goToThread: v.tE, overrideMedia: I, className: w.u }),
              }),
          });
}
