"use strict";
n.d(t, { A: () => S, p: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(40153),
    o = n(435371),
    l = n(397927),
    u = n(688810),
    c = n(531260),
    d = n(313375),
    _ = n(473145),
    f = n(987144),
    h = n(963894),
    p = n(652215),
    g = n(788868),
    E = n(985018),
    A = n(333354),
    I = n(195450);
function T(e) {
    switch (e) {
        case p.TVA.TIER_3:
            return p.AnalyticsObjectTypes.TIER_3;
        case p.TVA.TIER_2:
            return p.AnalyticsObjectTypes.TIER_2;
        case p.TVA.TIER_1:
            return p.AnalyticsObjectTypes.TIER_1;
        default:
            throw Error(`Unsupported Boosting tier: ${e}`);
    }
}
let y = { [p.TVA.NONE]: 0, [p.TVA.TIER_1]: 1 / 3, [p.TVA.TIER_2]: 2 / 3, [p.TVA.TIER_3]: 1 },
    S = function (e) {
        let {
                children: t,
                confettiTriggerRef: n,
                guild: i,
                isProgressBarAnimationComplete: S,
                setConfettiCount: v,
                setShouldFireConfetti: C,
                tier: b,
                tierMarkerAnimationPosition: N,
                totalAvailableBoostsCount: R,
            } = e,
            { analyticsLocations: O } = (0, u.Ay)(),
            D = (0, c.A)(),
            L = p.M2T[b],
            w = L - R,
            x = b <= N || S,
            P = x && b <= i.premiumTier,
            M = x && b < i.premiumTier,
            k = x && b === i.premiumTier,
            U = i.premiumTier < b && R >= L,
            { scaleFactor: G } = (0, l.zhh)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: N >= b || (S && N + 1 === b) || (S && -1 === N && b === p.TVA.NONE) ? 1 : 0 },
                config: { tension: 360, friction: 12 },
            }),
            F = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.animated.div, {
                        className: I.sO,
                        style: { transform: G.to((e) => `translate(-50%, -50%) scale(${e})`) },
                    }),
                    b !== p.TVA.NONE
                        ? U
                            ? (0, r.jsx)(l.x8N, { className: a()(I.Wo, I.GV), size: "xxs", color: "currentColor" })
                            : (0, r.jsx)(d.A, { tier: b, color: "currentColor", className: I.Wo })
                        : void 0,
                ],
            });
        function V() {
            !x ||
                U ||
                (0, f.g)({
                    analyticsLocations: O,
                    analyticsLocation: {
                        page: p.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: p.JJy.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: p.ZSU.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: T(b),
                    },
                    numberOfBoostsToAdd: w,
                    guild: i,
                });
        }
        let B = !P && D.fractionalState === g.xc.NONE,
            j = B ? l.DUT : "div",
            H = B ? { onClick: V } : {},
            Y = P
                ? E.intl.formatToPlainString(E.t["1o48ki"], { tierName: (0, _.gb)(b, { useLevels: !1 }) })
                : U
                  ? E.intl.formatToPlainString(A.default["9CtPjt"], { perk: (0, _.gb)(b, { useLevels: !1 }) })
                  : E.intl.formatToPlainString(E.t.r6NN6Q, {
                        numBoostsRequired: w,
                        tierName: (0, _.gb)(b, { useLevels: !1 }),
                    }),
            W = (0, r.jsxs)(j, {
                className: a()(I.Ll, { [I.kZ]: P, [I.ng]: B, [I.uZ]: M, [I.Ue]: k }),
                style: { left: `${100 * y[b]}%` },
                ...H,
                children: [
                    !P && (0, r.jsx)("div", { className: I.cj }),
                    P && b === p.TVA.TIER_3
                        ? (0, r.jsx)(h.H, {
                              confettiTriggerRef: n,
                              setConfettiCount: v,
                              setShouldFireConfetti: C,
                              children: F,
                          })
                        : F,
                    (0, r.jsxs)(l.Text, {
                        className: I.Td,
                        variant: "text-md/normal",
                        children: [
                            P &&
                                b !== p.TVA.NONE &&
                                (0, r.jsx)(l.A9s, { size: "md", color: "currentColor", className: I.ZI }),
                            t,
                        ],
                    }),
                ],
            });
        return b !== p.TVA.NONE ? (0, r.jsx)(o.m_, { text: Y, children: W }) : W;
    };
