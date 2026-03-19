"use strict";
n.d(t, { A: () => S, p: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(497766),
    o = n(435371),
    l = n(397927),
    u = n(688810),
    c = n(531260),
    d = n(313375),
    _ = n(473145),
    f = n(987144),
    p = n(963894),
    h = n(652215),
    m = n(788868),
    E = n(985018),
    g = n(136708),
    A = n(68748);
function I(e) {
    switch (e) {
        case h.TVA.TIER_3:
            return h.AnalyticsObjectTypes.TIER_3;
        case h.TVA.TIER_2:
            return h.AnalyticsObjectTypes.TIER_2;
        case h.TVA.TIER_1:
            return h.AnalyticsObjectTypes.TIER_1;
        default:
            throw Error(`Unsupported Boosting tier: ${e}`);
    }
}
let T = { [h.TVA.NONE]: 0, [h.TVA.TIER_1]: 1 / 3, [h.TVA.TIER_2]: 2 / 3, [h.TVA.TIER_3]: 1 },
    S = function (e) {
        let {
                children: t,
                confettiTriggerRef: n,
                guild: i,
                isProgressBarAnimationComplete: S,
                setConfettiCount: y,
                setShouldFireConfetti: v,
                tier: N,
                tierMarkerAnimationPosition: C,
                totalAvailableBoostsCount: R,
            } = e,
            { analyticsLocations: O } = (0, u.Ay)(),
            b = (0, c.A)(),
            D = h.M2T[N],
            L = D - R,
            w = N <= C || S,
            M = w && N <= i.premiumTier,
            x = w && N < i.premiumTier,
            P = w && N === i.premiumTier,
            k = i.premiumTier < N && R >= D,
            { scaleFactor: U } = (0, l.zhh)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: C >= N || (S && C + 1 === N) || (S && -1 === C && N === h.TVA.NONE) ? 1 : 0 },
                config: { tension: 360, friction: 12 },
            }),
            G = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.animated.div, {
                        className: A.sO,
                        style: { transform: U.to((e) => `translate(-50%, -50%) scale(${e})`) },
                    }),
                    N !== h.TVA.NONE
                        ? k
                            ? (0, r.jsx)(l.x8N, { className: s()(A.Wo, A.GV), size: "xxs", color: "currentColor" })
                            : (0, r.jsx)(d.A, { tier: N, color: "currentColor", className: A.Wo })
                        : void 0,
                ],
            });
        function F() {
            !w ||
                k ||
                (0, f.g)({
                    analyticsLocations: O,
                    analyticsLocation: {
                        page: h.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: h.JJy.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: h.ZSU.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: I(N),
                    },
                    numberOfBoostsToAdd: L,
                    guild: i,
                });
        }
        let V = !M && b.fractionalState === m.xc.NONE,
            B = V ? l.DUT : "div",
            H = V ? { onClick: F } : {},
            j = M
                ? E.intl.formatToPlainString(E.t["1o48ki"], { tierName: (0, _.gb)(N, { useLevels: !1 }) })
                : k
                  ? E.intl.formatToPlainString(g.default["9CtPjt"], { perk: (0, _.gb)(N, { useLevels: !1 }) })
                  : E.intl.formatToPlainString(E.t.r6NN6Q, {
                        numBoostsRequired: L,
                        tierName: (0, _.gb)(N, { useLevels: !1 }),
                    }),
            Y = (0, r.jsxs)(B, {
                className: s()(A.Ll, { [A.kZ]: M, [A.ng]: V, [A.uZ]: x, [A.Ue]: P }),
                style: { left: `${100 * T[N]}%` },
                ...H,
                children: [
                    !M && (0, r.jsx)("div", { className: A.cj }),
                    M && N === h.TVA.TIER_3
                        ? (0, r.jsx)(p.H, {
                              confettiTriggerRef: n,
                              setConfettiCount: y,
                              setShouldFireConfetti: v,
                              children: G,
                          })
                        : G,
                    (0, r.jsxs)(l.Text, {
                        className: A.Td,
                        variant: "text-md/normal",
                        children: [
                            M &&
                                N !== h.TVA.NONE &&
                                (0, r.jsx)(l.A9s, { size: "md", color: "currentColor", className: A.ZI }),
                            t,
                        ],
                    }),
                ],
            });
        return N !== h.TVA.NONE ? (0, r.jsx)(o.m_, { text: j, children: Y }) : Y;
    };
