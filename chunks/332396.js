n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    g = n(63995),
    m = n(69407),
    p = n(616356),
    _ = n(734057),
    x = n(287809),
    f = n(607567),
    E = n(403362),
    C = n(661191),
    I = n(181079),
    S = n(652215),
    b = n(985018),
    N = n(653750);
function T(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: N.nM,
              children: [
                  (0, i.jsx)(e, { className: N.RI, color: "currentColor" }),
                  (0, i.jsx)(A.Ay, { guildId: void 0, users: t, max: 6 }),
              ],
          });
}
function j() {
    let e = (0, d.yK)([I.A, _.A], () =>
            C.default
                .keys(I.A.getFavoriteChannels())
                .map((e) => _.A.getChannel(e))
                .filter(E.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === S.rbe.GUILD_VOICE),
        l = e.filter((e) => e.type === S.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        s = (0, d.yK)(
            [f.Ay],
            () =>
                o().flatMap(n, (e) =>
                    f.Ay.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
                ),
            [n],
        ),
        a = (0, d.yK)([g.A], () =>
            o().flatMap(l, (e) =>
                g.A.getMutableParticipants(e, m.ip.SPEAKER)
                    .filter((e) => e.type === m.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        r = (0, d.bG)([g.A], () => {
            let e = 0;
            for (let t of l) e += g.A.getParticipantCount(t, m.ip.AUDIENCE);
            return e;
        }),
        c = (0, d.yK)(
            [p.A],
            () =>
                p.A.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t],
        ),
        b = (0, d.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        j = (0, d.yK)([x.default], () => b.map((e) => x.default.getUser(e)), [b]),
        v = (0, d.yK)([x.default], () => c.map((e) => x.default.getUser(e)), [c]),
        y = T(
            u.HKD,
            s.filter((e) => !c.includes(e.id) && !b.includes(e.id)),
        ),
        R =
            0 === a.length
                ? null
                : (0, i.jsxs)("div", {
                      className: N.nM,
                      children: [
                          (0, i.jsx)(u.qux, { size: "lg", color: "currentColor", className: N.RI }),
                          (0, i.jsx)(A.Ay, { guildId: void 0, users: a, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: N.GZ,
                              children: [
                                  (0, i.jsx)(u.LoC, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(u.Text, {
                                      className: N._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: r,
                                  }),
                              ],
                          }),
                      ],
                  }),
        O = T(
            u.Fzq,
            v.filter((e) => null != e && !b.includes(e.id)),
        ),
        L = T(u.k9F, j);
    return (0, i.jsxs)(i.Fragment, { children: [R, y, O, L] });
}
function v() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: a()(N.nM, N.Dl),
                children: (0, i.jsx)("span", { className: a()(N.cN, N.NT), children: b.intl.string(b.t.wMWyci) }),
            }),
            (0, i.jsx)(j, {}),
        ],
    });
}
function y(e) {
    let { "aria-label": t = !1, onShow: n, children: s } = e,
        a = l.useMemo(() => (0, i.jsx)("div", { className: N.A_, children: (0, i.jsx)(v, {}) }), []);
    return (0, i.jsx)(c.m_, {
        __unsupportedReactNodeAsText: a,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        onTooltipShow: n,
        asContainer: !0,
        children: s,
    });
}
