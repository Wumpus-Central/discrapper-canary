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
            targetElementRef: m,
            body: E,
            progressCircleText: g,
            progressCirclePercent: A,
            progressCircleUrgency: I,
            actions: T,
            onShow: S,
            estimatedTooltipHeight: y = 300,
        } = e,
        v = c.VD[t].nameUnformattedNitro,
        N = _.intl.string(v).toLocaleUpperCase(),
        C = (0, a.A)(t),
        b = (0, o.I)(t).standard;
    (0, i.useEffect)(() => {
        s.m[s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = b);
    }, [b]);
    let R = (0, i.useCallback)(() => {
            n?.(d.i.USER_DISMISS);
        }, [n]),
        O = {
            gradientColor: C,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: b, alt: N, progressCircleText: g, progressCirclePercent: A, progressCircleUrgency: I },
            },
            title: N,
            body: E,
            actions: T,
        };
    return "tooltip" === p
        ? (0, r.jsx)(u.A, { targetElementRef: m, estimatedTooltipHeight: y, delay: h, onShow: S, ...O, children: f })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  f,
                  (0, r.jsx)(l.A, {
                      targetElementRef: m,
                      shouldShow: !0,
                      onRequestClose: R,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...O,
                  }),
              ],
          });
};
