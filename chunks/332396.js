n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(990078),
    u = n(451394),
    h = n(597601),
    A = n(834730),
    _ = n(983851),
    m = n(183623),
    g = n(323384),
    p = n(933958),
    f = n(104171),
    E = n(63995),
    x = n(69407),
    I = n(616356),
    C = n(734057),
    b = n(287809),
    N = n(607567),
    S = n(403362),
    v = n(661191),
    T = n(181079),
    y = n(652215),
    R = n(985018),
    j = n(621035);
function L(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: j.nM,
              children: [
                  (0, i.jsx)(e, { className: j.RI, color: "currentColor" }),
                  (0, i.jsx)(f.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function O() {
    let e = (0, d.yK)([T.A, C.A], () =>
            v.default
                .keys(T.A.getFavoriteChannels())
                .map((e) => C.A.getChannel(e))
                .filter(S.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === y.rbe.GUILD_VOICE),
        l = e.filter((e) => e.type === y.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, d.yK)(
            [N.Ay],
            () =>
                o().flatMap(n, (e) =>
                    N.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, d.yK)([E.A], () =>
            o().flatMap(l, (e) =>
                E.A.getMutableParticipants(e, x.ip.SPEAKER)
                    .filter((e) => e.type === x.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        r = (0, d.bG)([E.A], () => {
            let e = 0;
            for (let t of l) e += E.A.getParticipantCount(t, x.ip.AUDIENCE);
            return e;
        }),
        c = (0, d.yK)(
            [I.A],
            () =>
                I.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        R = (0, d.yK)([p.Ay], () => {
            let e = p.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        O = (0, d.yK)([b.default], () => R.map((e) => b.default.getUser(e)), [R]),
        G = (0, d.yK)([b.default], () => c.map((e) => b.default.getUser(e)), [c]),
        D = L(
            _.H,
            s.filter((e) => !c.includes(e.id) && !R.includes(e.id)),
        ),
        M =
            0 === a.length
                ? null
                : (0, i.jsxs)("div", {
                      className: j.nM,
                      children: [
                          (0, i.jsx)(u.q, { size: "lg", color: "currentColor", className: j.RI }),
                          (0, i.jsx)(f.Ay, { guildId: void 0, users: a, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: j.GZ,
                              children: [
                                  (0, i.jsx)(h.L, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(A.E, {
                                      className: j._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: r,
                                  }),
                              ],
                          }),
                      ],
                  }),
        U = L(
            m.F,
            G.filter((e) => null != e && !R.includes(e.id)),
        ),
        P = L(g.k, O);
    return (0, i.jsxs)(i.Fragment, { children: [M, D, U, P] });
}
function G() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(j.nM, j.Dl),
                children: (0, i.jsx)("span", { className: a()(j.cN, j.NT), children: R.intl.string(R.t.wMWyci) }),
            }),
            (0, i.jsx)(O, {}),
        ],
    });
}
function D(e) {
    let { "aria-label": t = !1, children: n } = e,
        s = l.useMemo(() => (0, i.jsx)("div", { className: j.A_, children: (0, i.jsx)(G, {}) }), []);
    return (0, i.jsx)(c.m, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
