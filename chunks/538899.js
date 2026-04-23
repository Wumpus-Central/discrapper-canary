n.d(t, { default: () => M });
var a = n(627968),
    i = n(64700),
    l = n(189213),
    r = n(17928),
    s = n(636537),
    o = n(123292),
    c = n(720149),
    d = n(608299),
    u = n(425059),
    m = n(390248),
    _ = n(946274),
    h = n(734057),
    p = n(31717),
    g = n(71393),
    f = n(232835),
    A = n(453771),
    b = n(935208),
    T = n(292348),
    I = n(518960),
    E = n(382287),
    C = n(853742),
    S = n(350527),
    y = n(218152),
    x = n(652215),
    v = n(818348),
    O = n(985018),
    N = n(158482);
async function w(e) {
    let t,
        { thread: n, attachments: a, setIsUploading: i, guild: l, onClose: r } = e,
        o = b.default.castChannelIdAsMessageId(n.id),
        _ = new u.A();
    _.on("progress", (e) => {
        let t = (0, A.o2)(l.id);
        e.currentSize > t && (_.cancel(), i(!1), r(), (0, I.V)(n, (0, E.LJ)(a)));
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
    let C = [...g, ...(t.map((e, t) => (0, T.OW)(e, t)) ?? [])];
    try {
        await s.Bo.patch({ url: x.Rsh.MESSAGE(n.id, o), body: { attachments: C }, rejectWithError: !1 }),
            r(),
            d.A.clearAll(n.id, p.C.ChannelMessage);
    } catch (e) {
        i(!1),
            e.body?.code === x.t02.EXPLICIT_CONTENT &&
                (r(),
                c.A.sendExplicitMediaClydeError(
                    n.id,
                    e.body?.attachments,
                    m.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                d.A.clearAll(n.id, p.C.ChannelMessage));
    }
}
function M(e) {
    let { threadId: t, attachments: n, sendMessage: s, transitionState: c, onClose: d } = e,
        u = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
        m = (0, r.bG)([g.A], () => g.A.getGuild(u?.getGuildId()), [u]),
        p = (0, r.bG)([h.A], () => h.A.getChannel(u?.parent_id), [u]),
        f = n[0]?.item,
        [A, b] = i.useState(null);
    i.useEffect(() => {
        null != f && (0, _.JF)(f.file, (e, t) => b(e), v.tE);
    }, [f]);
    let T =
            null != f && null != A
                ? { src: A, width: S.T5, height: S.Co, spoiler: n[0].spoiler, alt: n[0].description }
                : null,
        [I, E] = i.useState(!1),
        x = i.useCallback(() => {
            (0, C.jh)({ added: !1 }), s(), d();
        }, [s, d]),
        M = i.useCallback(() => {
            null != u &&
                null != m &&
                ((0, C.jh)({ added: !0 }), w({ thread: u, attachments: n, setIsUploading: E, guild: m, onClose: d }));
        }, [u, n, E, m, d]);
    return null == p
        ? null
        : (0, a.jsx)(l.Modal, {
              title: O.intl.string(O.t["+SZF6S"]),
              subtitle: O.intl.string(O.t["0Ycgw5"]),
              transitionState: c,
              onClose: d,
              actionBarInput: (0, a.jsx)(o.Q, {
                  variant: "secondary",
                  disabled: I,
                  onClick: d,
                  text: O.intl.string(O.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: O.intl.string(O.t["8rKVHL"]), disabled: I, onClick: x },
                  { variant: "primary", text: O.intl.string(O.t.d611xH), loading: I, onClick: M, autoFocus: !0 },
              ],
              children: (0, a.jsx)(y.Cp, {
                  channel: p,
                  children: (0, a.jsx)(S.Ay, { threadId: t, goToThread: v.tE, overrideMedia: T, className: N.u }),
              }),
          });
}
