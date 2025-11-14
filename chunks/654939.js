n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(198168),
    o = n(848572),
    s = n(863504),
    l = n(787528),
    c = n(645917),
    u = n(799607),
    d = n(474936),
    f = n(921944),
    _ = n(388032);
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
function h(e) {
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
function g(e, t) {
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
let E = (e) => {
    var t, n;
    let {
            markAsDismissed: p,
            children: m,
            mode: E = "popover",
            tooltipDelay: b = 300,
            targetElementRef: y,
            body: O,
            progressCircleText: v,
            progressCirclePercent: I,
            progressCircleUrgency: T,
            actions: S,
            onShow: A,
        } = e,
        C = (0, o.Rw)(),
        N = null != (t = null == C ? void 0 : C.id) ? t : d.VU.PREMIUM_TENURE_1_MONTH,
        R =
            null != (n = null == C ? void 0 : C.nameUnformatted)
                ? n
                : d.vK[d.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        P = (_.intl.string(_.t.lG6a5x) + " " + _.intl.string(R)).toLocaleUpperCase(),
        D = (0, s.Z)(N),
        w = (0, l.J)(N, { ambient: !0 }),
        x = (0, i.useCallback)(() => {
            null == p || p(f.L.USER_DISMISS);
        }, [p]),
        L = {
            gradientColor: D,
            size: "lg",
            graphic: {
                type: "dynamic",
                component: a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: {
                    src: w,
                    alt: P,
                    progressCircleText: v,
                    progressCirclePercent: I,
                    progressCircleUrgency: T,
                },
            },
            title: P,
            body: O,
            actions: S,
        };
    return "tooltip" === E
        ? (0, r.jsx)(
              u.Z,
              g(
                  h(
                      {
                          targetElementRef: y,
                          tooltipHeight: 300,
                          delay: b,
                          onShow: A,
                      },
                      L,
                  ),
                  { children: m },
              ),
          )
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  m,
                  (0, r.jsx)(
                      c.ZP,
                      h(
                          {
                              targetElementRef: y,
                              shouldShow: !0,
                              onRequestClose: x,
                              align: "right",
                              position: "top",
                              caretConfig: { align: "center" },
                          },
                          L,
                      ),
                  ),
              ],
          });
};
