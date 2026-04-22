t.d(n, { A: () => p });
var l = t(627968),
    r = t(64700),
    i = t(116833),
    a = t(704640),
    s = t(149757),
    o = t(642481),
    d = t(301679),
    u = t(788868),
    c = t(49999),
    m = t(985018);
let p = (e) => {
    let {
            badgeId: n = u.Ac.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: t,
            children: p,
            mode: f = "popover",
            tooltipDelay: g = 300,
            targetElementRef: h,
            body: x,
            progressCircleText: A,
            progressCirclePercent: E,
            progressCircleUrgency: j,
            actions: v,
            onShow: C,
            estimatedTooltipHeight: b = 300,
        } = e,
        R = u.VD[n].nameUnformattedNitro,
        _ = m.intl.string(R).toLocaleUpperCase(),
        y = (0, a.A)(n),
        k = (0, s.I)(n).standard;
    (0, r.useEffect)(() => {
        i.m[i.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = k);
    }, [k]);
    let N = (0, r.useCallback)(() => {
            t?.(c.i.USER_DISMISS);
        }, [t]),
        I = {
            gradientColor: y,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: i.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: { src: k, alt: _, progressCircleText: A, progressCirclePercent: E, progressCircleUrgency: j },
            },
            title: _,
            body: x,
            actions: v,
        };
    return "tooltip" === f
        ? (0, l.jsx)(d.A, { targetElementRef: h, estimatedTooltipHeight: b, delay: g, onShow: C, ...I, children: p })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  p,
                  (0, l.jsx)(o.A, {
                      targetElementRef: h,
                      shouldShow: !0,
                      onRequestClose: N,
                      align: "right",
                      position: "top",
                      caretConfig: { align: "center" },
                      ...I,
                  }),
              ],
          });
};
