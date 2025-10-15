n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(28664),
    o = n(481060),
    s = n(239091),
    l = n(299206),
    c = n(858042),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { applicationId: t, className: n, viewId: d } = e,
        _ = i.useRef(null),
        h = (0, l.Z)({
            id: t,
            label: u.intl.string(u.t["FfCL+/"]),
        }),
        m = (0, c.M)({
            applicationId: t,
            viewId: d,
        });
    return null == h && null == m
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: _,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, s.Zy)(), t();
                      },
                      "aria-label": u.intl.string(u.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(o.kSQ, { children: h }), (0, r.jsx)(o.kSQ, { children: m })],
                      }),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(a.u, {
                      text: u.intl.string(u.t.UKOtz8),
                      children: (0, r.jsx)(
                          o.P3F,
                          p(
                              f(
                                  {
                                      innerRef: _,
                                      className: n,
                                  },
                                  e,
                              ),
                              {
                                  children: (0, r.jsx)(o.xhG, {
                                      size: "xs",
                                      color: o.TVs.colors.WHITE,
                                  }),
                              },
                          ),
                      ),
                  }),
          });
}
