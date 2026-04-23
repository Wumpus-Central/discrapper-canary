"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(116833),
    a = n(704640),
    o = n(149757),
    l = n(642481),
    u = n(301679),
    c = n(788868),
    d = n(49999),
    _ = n(985018);
let f = (e) => {
    let {
            badgeId: t = c.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: f,
            mode: p = "popover",
            tooltipDelay: h = 300,
            targetElementRef: E,
            body: m,
            progressCircleText: g,
            progressCirclePercent: A,
            progressCircleUrgency: I,
            actions: T,
            onShow: S,
            estimatedTooltipHeight: y = 300,
        } = e,
        N = c.VD[t].nameUnformattedNitro,
        v = _.intl.string(N).toLocaleUpperCase(),
        C = (0, a.A)(t),
        O = (0, o.I)(t).standard;
    (0, i.useEffect)(() => {
        s.m[s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = O);
    }, [O]);
    let R = (0, i.useCallback)(() => {
            n?.(d.i.USER_DISMISS);
        }, [n]),
        b = {
            gradientColor: C,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: O, alt: v, progressCircleText: g, progressCirclePercent: A, progressCircleUrgency: I },
            },
            title: v,
            body: m,
            actions: T,
        };
    return "tooltip" === p
        ? (0, r.jsx)(u.A, { targetElementRef: E, estimatedTooltipHeight: y, delay: h, onShow: S, ...b, children: f })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  f,
                  (0, r.jsx)(l.A, {
                      targetElementRef: E,
                      shouldShow: !0,
                      onRequestClose: R,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...b,
                  }),
              ],
          });
};
