n.d(t, {
    w: () => l,
}),
    n(747238),
    n(64700);
var r = n(348275);

function i(e, t, n) {
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

function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}

function s(e, t) {
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

function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function l(e, t, n, i, s, l, c) {
    if (!e) return null;
    let u = l
        ? n
        : o(a({}, n), {
              onFocus: (0, r.cy)(n.onFocus, (e) => {
                  let t = e.target;
                  if (null != t) {
                      var n;
                      let e = (0, r.iO)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, s);
                      t.setAttribute("aria-describedby", e);
                  }
              }),
              onBlur: (0, r.cy)(n.onBlur, (e) => {
                  let t = e.target;
                  if (null != t) {
                      let e = t.getAttribute("aria-describedby");
                      if (null != e) {
                          let n = e.split(" ").filter((e) => e !== s);
                          n.length > 0
                              ? t.setAttribute("aria-describedby", n.join(" "))
                              : t.removeAttribute("aria-describedby");
                      }
                  }
              }),
          });
    return (0, r.EE)({
        tag: c,
        children: t,
        triggerHandlers: u,
        triggerRef: i,
    });
}
