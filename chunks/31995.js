"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(442433),
    d = n(409626),
    _ = n(611656),
    f = n(52129),
    p = n(734057),
    h = n(760751),
    m = n(486020),
    g = n(332173),
    E = n(936755),
    A = n(985018),
    I = n(670567);
let T = function (e) {
    let { gameId: t, channelId: a } = e,
        T = i.useRef(null),
        y = (0, o.bG)([h.A], () => h.A.getDetectableGame(t)),
        S = (0, o.bG)([p.A], () => p.A.getChannel(a)),
        v = null != S ? S.getGuildId() : null,
        C =
            null != y
                ? (e) => {
                      (0, c.L3)(e, async () => {
                          let { default: e } = await n.e("24843").then(n.bind(n, 348902));
                          return (t) => (0, r.jsx)(e, { ...t, game: y, guildId: v });
                      });
                  }
                : void 0,
        b =
            null != y
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: s()(I.Kk, I.FP),
                      src: m.Ay.getApplicationIconURL({ id: y.id, icon: y.icon, size: 32 }),
                  })
                : null,
        N = (0, _.Ay)({
            applicationId: t,
            location: "GameMention",
            source: d.Ob.GameMention,
            trackEntryPointImpression: !1,
            autoTrackExposure: !1,
        }),
        R = i.useCallback(() => {
            (0, u.mMO)(async () => {
                let { default: e } = await n.e("56466").then(n.bind(n, 188841));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        O = null != y ? `@game ${y.name}` : void 0;
    return (0, r.jsx)(f.A, {
        applicationId: t,
        targetElementRef: T,
        source: d.Ob.GameMention,
        children: (e) =>
            (0, r.jsx)(l.m, {
                asContainer: !0,
                tag: "span",
                text: O,
                "aria-label": O,
                delay: 750,
                children: (0, r.jsxs)(g.A, {
                    onContextMenu: C,
                    ref: T,
                    ...e,
                    onClick: (n) => {
                        N.shouldOpenGameProfile && null != t ? e.onClick?.(n) : R();
                    },
                    children: [
                        (0, r.jsx)(E.A, { children: b }),
                        (0, r.jsx)("span", { className: I.UU, children: y?.name ?? A.intl.string(A.t["11pdXZ"]) }),
                    ],
                }),
            }),
    });
};
