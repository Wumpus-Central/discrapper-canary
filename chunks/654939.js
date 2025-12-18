n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(198168),
    o = n(863504),
    s = n(787528),
    l = n(645917),
    c = n(799607),
    u = n(474936),
    d = n(921944),
    f = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
    let {
            badgeId: t = u.VU.PREMIUM_TENURE_1_MONTH,
            markAsDismissed: n,
            children: p,
            mode: m = "popover",
            tooltipDelay: g = 300,
            targetElementRef: E,
            body: b,
            progressCircleText: y,
            progressCirclePercent: O,
            progressCircleUrgency: v,
            actions: S,
            onShow: I,
            estimatedTooltipHeight: T = 300,
        } = e,
        C = u.vK[t].nameUnformattedNitro,
        A = f.intl.string(C).toLocaleUpperCase(),
        N = (0, o.Z)(t),
        P = (0, s.J)(t);
    (0, i.useEffect)(() => {
        a.a[a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = P);
    }, [P]);
    let R = (0, i.useCallback)(() => {
            null == n || n(d.L.USER_DISMISS);
        }, [n]),
        w = {
            gradientColor: N,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: {
                    src: P,
                    alt: A,
                    progressCircleText: y,
                    progressCirclePercent: O,
                    progressCircleUrgency: v,
                },
            },
            title: A,
            body: b,
            actions: S,
        };
    return "tooltip" === m
        ? (0, r.jsx)(
              c.Z,
              h(
                  _(
                      {
                          targetElementRef: E,
                          estimatedTooltipHeight: T,
                          delay: g,
                          onShow: I,
                      },
                      w,
                  ),
                  { children: p },
              ),
          )
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  p,
                  (0, r.jsx)(
                      l.Z,
                      _(
                          {
                              targetElementRef: E,
                              shouldShow: !0,
                              onRequestClose: R,
                              align: "right",
                              position: "top",
                              caretConfig: { align: "center" },
                          },
                          w,
                      ),
                  ),
              ],
          });
};
