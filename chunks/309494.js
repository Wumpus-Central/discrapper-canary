n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(320161),
    l = n(572004),
    c = n(51144),
    u = n(785717),
    d = n(388032),
    f = n(508929);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { user: t, isHovering: n } = e,
        { trackUserProfileAction: i } = (0, u.KZ)();
    return l.wS
        ? (0, r.jsx)(s.Z, {
              text: d.intl.string(d.t.y5MwJy),
              delay: 0,
              "aria-label": !1,
              copyValue: c.ZP.getUserTag(t, {
                  decoration: "never",
                  identifiable: "always",
              }),
              onCopy: () => i({ action: "COPY_USERNAME" }),
              children: (e) =>
                  (0, r.jsx)(
                      o.P3F,
                      m(p({}, e), {
                          className: a()(f.copyButton, { [f.visible]: n }),
                          "aria-label": d.intl.string(d.t.y5MwJy),
                          children: (0, r.jsx)(o.TIy, {
                              size: "xs",
                              color: "currentColor",
                          }),
                      }),
                  ),
          })
        : null;
}
