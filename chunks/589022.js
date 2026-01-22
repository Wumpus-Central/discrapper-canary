n.d(t, { A: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(215530),
    s = n(697668),
    o = n(634409),
    l = n(650218),
    c = n(39407);
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
function p(e, t) {
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
function _(e) {
    let { user: t, onClickContainer: n } = e,
        u = i.useCallback(
            (e) => {
                null == n || n(e), e.stopPropagation();
            },
            [n],
        ),
        [f, _] = (0, a.A)(t.id);
    return f
        ? (0, r.jsx)(
              l.A,
              p(d({}, e), {
                  onHide: _,
                  onClickContainer: u,
              }),
          )
        : t.isNonUserBot()
          ? (0, r.jsx)(o.A, p(d({}, e), { onClickContainer: u }))
          : t.bot
            ? (0, r.jsx)(s.A, p(d({}, e), { onClickContainer: u }))
            : (0, r.jsx)(c.A, p(d({}, e), { onClickContainer: u }));
}
