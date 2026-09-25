(l.d(t, { default: () => R }), l(323874), l(14289), l(35956));
var a = l(477900),
    n = l(582128),
    i = l(17928),
    s = l(636537),
    r = l(189213),
    d = l(123292),
    c = l(346055),
    u = l(148494),
    o = l(608299),
    h = l(395780),
    C = l(390248),
    A = l(946274),
    p = l(409481),
    g = l(867455),
    E = l(734057),
    b = l(31717),
    T = l(71393),
    y = l(232835),
    I = l(453771),
    f = l(935208),
    M = l(292348),
    x = l(518960),
    _ = l(382287),
    j = l(256265),
    k = l(853742),
    m = l(350527),
    S = l(218152),
    v = l(652215),
    L = l(818348),
    w = l(375708),
    O = l(821737);
async function G(e) {
    let t,
        { thread: l, attachments: a, setIsUploading: n, guild: i, onClose: r } = e,
        d = f.default.castChannelIdAsMessageId(l.id),
        c = new h.A();
    c.on("progress", (e) => {
        let t = (0, p.C)((0, I.o2)(i.id));
        e.currentSize > t && (c.cancel(), n(!1), r(), (0, x.V)(l, (0, _.LJ)(a)));
    });
    let A = y.A.getMessage(l.id, d),
        E = null != A ? A.attachments : [];
    n(!0);
    try {
        t = await c.uploadFiles(a);
    } catch (e) {
        n(!1);
        return;
    }
    let T = [...E, ...(t.map((e, t) => (0, M.OW)(e, t)) ?? [])];
    try {
        await g.A.unarchiveThreadIfNecessary(l.id);
    } catch {
        (n(!1), r());
        return;
    }
    try {
        (await s.Bo.patch({ url: v.Rsh.MESSAGE(l.id, d), body: { attachments: T }, rejectWithError: (0, s.fT)() }),
            r(),
            o.A.clearAll(l.id, b.C.ChannelMessage));
    } catch (e) {
        (n(!1),
            e.body?.code === v.t02.EXPLICIT_CONTENT &&
                (r(),
                u.A.sendExplicitMediaClydeError(
                    l.id,
                    e.body?.attachments,
                    C.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                o.A.clearAll(l.id, b.C.ChannelMessage)));
    }
}
function R(e) {
    let { threadId: t, attachments: l, sendMessage: s, transitionState: u, onClose: o } = e,
        h = (0, i.bG)([E.A], () => E.A.getChannel(t), [t]),
        C = (0, i.bG)([T.A], () => T.A.getGuild(h?.getGuildId()), [h]),
        p = (0, i.bG)([E.A], () => E.A.getChannel(h?.parent_id), [h]),
        g = l[0],
        b = g?.item,
        y = g?.isVideo ?? !1,
        I = b?.file,
        f = n.useMemo(() => (y && null != I ? URL.createObjectURL(I) : null), [I, y]);
    n.useEffect(() => {
        if (null != f) return () => URL.revokeObjectURL(f);
    }, [f]);
    let [M, x] = n.useState(null);
    n.useEffect(() => {
        y || null == b || (0, A.JF)(b.file, (e, t) => x(e), L.tE);
    }, [b, y]);
    let _ = y ? f : M,
        v =
            null != g && null != _
                ? {
                      type: j.vV.ATTACHMENT,
                      src: _,
                      width: m.T5,
                      height: m.Co,
                      spoiler: g.spoiler,
                      alt: g.description ?? void 0,
                      isVideo: y,
                      mediaIndex: 0,
                      srcIsAnimated: !1,
                  }
                : null,
        [R, D] = n.useState(!1),
        F = n.useCallback(() => {
            ((0, k.jh)({ added: !1 }), s(), o());
        }, [s, o]),
        N = n.useCallback(() => {
            null != h &&
                null != C &&
                ((0, k.jh)({ added: !0 }), G({ thread: h, attachments: l, setIsUploading: D, guild: C, onClose: o }));
        }, [h, l, D, C, o]);
    return null == p
        ? null
        : (0, a.jsx)(r.a, {
              title: w.intl.string(w.t["+SZF6S"]),
              subtitle: w.intl.string(w.t["0Ycgw5"]),
              transitionState: u,
              onClose: o,
              actionBarInput: (0, a.jsx)(d.Q, {
                  variant: "secondary",
                  disabled: R,
                  onClick: o,
                  text: w.intl.string(w.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: w.intl.string(w.t["8rKVHL"]), disabled: R, onClick: F },
                  { variant: "primary", text: w.intl.string(w.t.d611xH), loading: R, onClick: N, autoFocus: !0 },
              ],
              children: (0, a.jsx)(S.Cp, {
                  channel: p,
                  children: (0, a.jsx)(c.M, {
                      children: (0, a.jsx)(m.Ay, { threadId: t, goToThread: L.tE, overrideMedia: v, className: O.u }),
                  }),
              }),
          });
}
