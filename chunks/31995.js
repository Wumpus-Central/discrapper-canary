"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(332173),
    g = n(936755),
    A = n(985018),
    I = n(670567);
let T = function (e) {
    let { gameId: t, channelId: s } = e,
        T = i.useRef(null),
        S = (0, o.bG)([h.A], () => h.A.getDetectableGame(t)),
        y = (0, o.bG)([p.A], () => p.A.getChannel(s)),
        v = null != y ? y.getGuildId() : null,
        N =
            null != S
                ? (e) => {
                      (0, c.L3)(e, async () => {
                          let { default: e } = await n.e("24843").then(n.bind(n, 348902));
                          return (t) => (0, r.jsx)(e, { ...t, game: S, guildId: v });
                      });
                  }
                : void 0,
        C =
            null != S
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: a()(I.Kk, I.FP),
                      src: m.Ay.getApplicationIconURL({ id: S.id, icon: S.icon, size: 32 }),
                  })
                : null,
        b = (0, _.Ay)({
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
        O = null != S ? `@game ${S.name}` : void 0;
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
                children: (0, r.jsxs)(E.A, {
                    onContextMenu: N,
                    ref: T,
                    ...e,
                    onClick: (n) => {
                        b.shouldOpenGameProfile && null != t ? e.onClick?.(n) : R();
                    },
                    children: [
                        (0, r.jsx)(g.A, { children: C }),
                        (0, r.jsx)("span", { className: I.UU, children: S?.name ?? A.intl.string(A.t["11pdXZ"]) }),
                    ],
                }),
            }),
    });
};
