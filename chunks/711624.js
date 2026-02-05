"use strict";
n.d(t, { A: () => y, p: () => T });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(92674),
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
    g = n(985018),
    E = n(333354),
    A = n(195450);
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
    y = function (e) {
        let {
                children: t,
                confettiTriggerRef: n,
                guild: i,
                isProgressBarAnimationComplete: y,
                setConfettiCount: S,
                setShouldFireConfetti: v,
                tier: C,
                tierMarkerAnimationPosition: b,
                totalAvailableBoostsCount: N,
            } = e,
            { analyticsLocations: R } = (0, u.Ay)(),
            O = (0, c.A)(),
            D = h.M2T[C],
            L = D - N,
            w = C <= b || y,
            x = w && C <= i.premiumTier,
            P = w && C < i.premiumTier,
            M = w && C === i.premiumTier,
            k = i.premiumTier < C && N >= D,
            { scaleFactor: U } = (0, l.zhh)({
                from: { scaleFactor: 0 },
                to: { scaleFactor: b >= C || (y && b + 1 === C) || (y && -1 === b && C === h.TVA.NONE) ? 1 : 0 },
                config: { tension: 360, friction: 12 },
            }),
            G = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.animated.div, {
                        className: A.sO,
                        style: { transform: U.to((e) => `translate(-50%, -50%) scale(${e})`) },
                    }),
                    C !== h.TVA.NONE
                        ? k
                            ? (0, r.jsx)(l.x8N, { className: a()(A.Wo, A.GV), size: "xxs", color: "currentColor" })
                            : (0, r.jsx)(d.A, { tier: C, color: "currentColor", className: A.Wo })
                        : void 0,
                ],
            });
        function V() {
            !w ||
                k ||
                (0, f.g)({
                    analyticsLocations: R,
                    analyticsLocation: {
                        page: h.liQ.PREMIUM_GUILD_USER_MODAL,
                        section: h.JJy.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
                        object: h.ZSU.SUBSCRIBE_TO_TIER_BUTTON,
                        objectType: I(C),
                    },
                    numberOfBoostsToAdd: L,
                    guild: i,
                });
        }
        let F = !x && O.fractionalState === m.xc.NONE,
            B = F ? l.DUT : "div",
            j = F ? { onClick: V } : {},
            H = x
                ? g.intl.formatToPlainString(g.t["1o48ki"], { tierName: (0, _.gb)(C, { useLevels: !1 }) })
                : k
                  ? g.intl.formatToPlainString(E.default["9CtPjt"], { perk: (0, _.gb)(C, { useLevels: !1 }) })
                  : g.intl.formatToPlainString(g.t.r6NN6Q, {
                        numBoostsRequired: L,
                        tierName: (0, _.gb)(C, { useLevels: !1 }),
                    }),
            Y = (0, r.jsxs)(B, {
                className: a()(A.Ll, { [A.kZ]: x, [A.ng]: F, [A.uZ]: P, [A.Ue]: M }),
                style: { left: `${100 * T[C]}%` },
                ...j,
                children: [
                    !x && (0, r.jsx)("div", { className: A.cj }),
                    x && C === h.TVA.TIER_3
                        ? (0, r.jsx)(p.H, {
                              confettiTriggerRef: n,
                              setConfettiCount: S,
                              setShouldFireConfetti: v,
                              children: G,
                          })
                        : G,
                    (0, r.jsxs)(l.Text, {
                        className: A.Td,
                        variant: "text-md/normal",
                        children: [
                            x &&
                                C !== h.TVA.NONE &&
                                (0, r.jsx)(l.A9s, { size: "md", color: "currentColor", className: A.ZI }),
                            t,
                        ],
                    }),
                ],
            });
        return C !== h.TVA.NONE ? (0, r.jsx)(o.m_, { text: H, children: Y }) : Y;
    };
