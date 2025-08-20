n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(946273),
    s = n(441110),
    l = n(388032),
    c = n(334090);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { guild: t, message: n } = e,
        u = i.useRef(null);
    return (0, o.vV)(t.id, n.author.id)
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: u,
              animation: a.yRy.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(s.Z, {
                      guild: t,
                      message: n,
                      onClose: i,
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(a.P3F, {
                      onClick: t,
                      tag: "span",
                      innerRef: u,
                      children: (0, r.jsx)(a.ua7, {
                          text: l.intl.string(l.t["v/OYd3"]),
                          children: (e) =>
                              (0, r.jsx)(
                                  "div",
                                  _(d({ className: c.newMemberBadge }, e), {
                                      children: (0, r.jsx)(a.hg2, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                          height: 20,
                                      }),
                                  }),
                              ),
                      }),
                  });
              },
          })
        : null;
}
