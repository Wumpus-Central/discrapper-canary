n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    _ = n(63995),
    m = n(69407),
    g = n(616356),
    p = n(734057),
    f = n(287809),
    x = n(607567),
    E = n(403362),
    I = n(661191),
    C = n(181079),
    N = n(652215),
    T = n(985018),
    S = n(826427);
function b(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: S.nM,
              children: [
                  (0, i.jsx)(e, { className: S.RI, color: "currentColor" }),
                  (0, i.jsx)(A.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function y() {
    let e = (0, c.yK)([C.A, p.A], () =>
            I.default
                .keys(C.A.getFavoriteChannels())
                .map((e) => p.A.getChannel(e))
                .filter(E.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === N.rbe.GUILD_VOICE),
        l = e.filter((e) => e.type === N.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, c.yK)(
            [x.Ay],
            () =>
                o().flatMap(n, (e) =>
                    x.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, c.yK)([_.A], () =>
            o().flatMap(l, (e) =>
                _.A.getMutableParticipants(e, m.ip.SPEAKER)
                    .filter((e) => e.type === m.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        r = (0, c.bG)([_.A], () => {
            let e = 0;
            for (let t of l) e += _.A.getParticipantCount(t, m.ip.AUDIENCE);
            return e;
        }),
        d = (0, c.yK)(
            [g.A],
            () =>
                g.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        T = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        y = (0, c.yK)([f.default], () => T.map((e) => f.default.getUser(e)), [T]),
        v = (0, c.yK)([f.default], () => d.map((e) => f.default.getUser(e)), [d]),
        j = b(
            u.HKD,
            s.filter((e) => !d.includes(e.id) && !T.includes(e.id)),
        ),
        R =
            0 === a.length
                ? null
                : (0, i.jsxs)("div", {
                      className: S.nM,
                      children: [
                          (0, i.jsx)(u.qux, { size: "lg", color: "currentColor", className: S.RI }),
                          (0, i.jsx)(A.Ay, { guildId: void 0, users: a, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: S.GZ,
                              children: [
                                  (0, i.jsx)(u.LoC, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(u.Text, {
                                      className: S._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: r,
                                  }),
                              ],
                          }),
                      ],
                  }),
        O = b(
            u.Fzq,
            v.filter((e) => null != e && !T.includes(e.id)),
        ),
        L = b(u.k9F, y);
    return (0, i.jsxs)(i.Fragment, { children: [R, j, O, L] });
}
function v() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(S.nM, S.Dl),
                children: (0, i.jsx)("span", { className: a()(S.cN, S.NT), children: T.intl.string(T.t.wMWyci) }),
            }),
            (0, i.jsx)(y, {}),
        ],
    });
}
function j(e) {
    let { "aria-label": t = !1, children: n } = e,
        s = l.useMemo(() => (0, i.jsx)("div", { className: S.A_, children: (0, i.jsx)(v, {}) }), []);
    return (0, i.jsx)(d.m_, {
        __unsupportedReactNodeAsText: s,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
