"use strict";
n.d(t, { A: () => y });
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
    h = n(734057),
    p = n(760751),
    g = n(486020),
    E = n(332173),
    A = n(936755),
    I = n(985018),
    T = n(670567);
let y = function (e) {
    let { gameId: t, channelId: a } = e,
        y = i.useRef(null),
        S = (0, o.bG)([p.A], () => p.A.getDetectableGame(t)),
        v = (0, o.bG)([h.A], () => h.A.getChannel(a)),
        C = null != v ? v.getGuildId() : null,
        b =
            null != S
                ? (e) => {
                      (0, c.L3)(e, async () => {
                          let { default: e } = await n.e("24843").then(n.bind(n, 348902));
                          return (t) => (0, r.jsx)(e, { ...t, game: S, guildId: C });
                      });
                  }
                : void 0,
        N =
            null != S
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: s()(T.Kk, T.FP),
                      src: g.Ay.getApplicationIconURL({ id: S.id, icon: S.icon, size: 32 }),
                  })
                : null,
        R = (0, _.Ay)({
            applicationId: t,
            location: "GameMention",
            source: d.Ob.GameMention,
            trackEntryPointImpression: !1,
            autoTrackExposure: !1,
        }),
        O = i.useCallback(() => {
            (0, u.mMO)(async () => {
                let { default: e } = await n.e("56466").then(n.bind(n, 188841));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        D = null != S ? `@game ${S.name}` : void 0;
    return (0, r.jsx)(f.A, {
        applicationId: t,
        targetElementRef: y,
        source: d.Ob.GameMention,
        children: (e) =>
            (0, r.jsx)(l.m, {
                asContainer: !0,
                tag: "span",
                text: D,
                "aria-label": D,
                delay: 750,
                children: (0, r.jsxs)(E.A, {
                    onContextMenu: b,
                    ref: y,
                    ...e,
                    onClick: (n) => {
                        R.shouldOpenGameProfile && null != t ? e.onClick?.(n) : O();
                    },
                    children: [
                        (0, r.jsx)(A.A, { children: N }),
                        (0, r.jsx)("span", { className: T.UU, children: S?.name ?? I.intl.string(I.t["11pdXZ"]) }),
                    ],
                }),
            }),
    });
};
