"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(116833),
    s = n(704640),
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
            body: g,
            progressCircleText: E,
            progressCirclePercent: A,
            progressCircleUrgency: I,
            actions: T,
            onShow: y,
            estimatedTooltipHeight: S = 300,
        } = e,
        v = c.VD[t].nameUnformattedNitro,
        C = _.intl.string(v).toLocaleUpperCase(),
        b = (0, s.A)(t),
        N = (0, o.I)(t);
    (0, i.useEffect)(() => {
        a.m[a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = N);
    }, [N]);
    let R = (0, i.useCallback)(() => {
            n?.(d.i.USER_DISMISS);
        }, [n]),
        O = {
            gradientColor: b,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: N, alt: C, progressCircleText: E, progressCirclePercent: A, progressCircleUrgency: I },
            },
            title: C,
            body: g,
            actions: T,
        };
    return "tooltip" === p
        ? (0, r.jsx)(u.A, { targetElementRef: m, estimatedTooltipHeight: S, delay: h, onShow: y, ...O, children: f })
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
