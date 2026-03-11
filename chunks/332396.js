"use strict";
n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(933958),
    A = n(104171),
    m = n(63995),
    p = n(69407),
    g = n(616356),
    _ = n(734057),
    f = n(287809),
    x = n(607567),
    C = n(403362),
    E = n(661191),
    I = n(181079),
    N = n(652215),
    b = n(985018),
    S = n(653750);
function T(e, t) {
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
function v() {
    let e = (0, c.yK)([I.A, _.A], () =>
            E.default
                .keys(I.A.getFavoriteChannels())
                .map((e) => _.A.getChannel(e))
                .filter(C.Vq),
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === N.rbe.GUILD_VOICE),
        s = e.filter((e) => e.type === N.rbe.GUILD_STAGE_VOICE).map((e) => e.id),
        l = (0, c.yK)(
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
        r = (0, c.yK)([m.A], () =>
            o().flatMap(s, (e) =>
                m.A.getMutableParticipants(e, p.ip.SPEAKER)
                    .filter((e) => e.type === p.wY.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    }),
            ),
        ),
        a = (0, c.bG)([m.A], () => {
            let e = 0;
            for (let t of s) e += m.A.getParticipantCount(t, p.ip.AUDIENCE);
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
        b = (0, c.yK)([h.Ay], () => {
            let e = h.Ay.getEmbeddedActivitiesByChannel(),
                n = [];
            for (let i of t) n.push(...(e.get(i)?.flatMap((e) => Array.from(e.userIds)) ?? []));
            return n;
        }, [t]),
        v = (0, c.yK)([f.default], () => b.map((e) => f.default.getUser(e)), [b]),
        y = (0, c.yK)([f.default], () => d.map((e) => f.default.getUser(e)), [d]),
        j = T(
            u.HKD,
            l.filter((e) => !d.includes(e.id) && !b.includes(e.id)),
        ),
        R =
            0 === r.length
                ? null
                : (0, i.jsxs)("div", {
                      className: S.nM,
                      children: [
                          (0, i.jsx)(u.qux, { size: "lg", color: "currentColor", className: S.RI }),
                          (0, i.jsx)(A.Ay, { guildId: void 0, users: r, max: 3 }),
                          (0, i.jsxs)("div", {
                              className: S.GZ,
                              children: [
                                  (0, i.jsx)(u.LoC, { size: "xs", color: "currentColor" }),
                                  (0, i.jsx)(u.Text, {
                                      className: S._I,
                                      color: "text-default",
                                      variant: "text-xs/medium",
                                      children: a,
                                  }),
                              ],
                          }),
                      ],
                  }),
        O = T(
            u.Fzq,
            y.filter((e) => null != e && !b.includes(e.id)),
        ),
        L = T(u.k9F, v);
    return (0, i.jsxs)(i.Fragment, { children: [R, j, O, L] });
}
function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: r()(S.nM, S.Dl),
                children: (0, i.jsx)("span", { className: r()(S.cN, S.NT), children: b.intl.string(b.t.wMWyci) }),
            }),
            (0, i.jsx)(v, {}),
        ],
    });
}
function j(e) {
    let { "aria-label": t = !1, children: n } = e,
        l = s.useMemo(() => (0, i.jsx)("div", { className: S.A_, children: (0, i.jsx)(y, {}) }), []);
    return (0, i.jsx)(d.m_, {
        __unsupportedReactNodeAsText: l,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        "aria-label": !1 === t ? void 0 : t,
        asContainer: !0,
        children: n,
    });
}
