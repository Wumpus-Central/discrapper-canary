n.d(t, {
    GM: () => f,
    wZ: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(580424);
n(148355);
var s = n(985018);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    let {
            titleWithQuery: t,
            titleWithoutQuery: n,
            query: i,
            getQuery: o,
            headerClassName: l,
            headerTrailingContent: c,
        } = e,
        u = i.length > 0 ? s.intl.formatToPlainString(t, { prefix: o(i) }) : n;
    return (0, r.jsx)(
        a.Ay.Title,
        {
            className: l,
            title: u,
            children: c,
        },
        "autocomplete-title-".concat(u),
    );
}
function f(e) {
    let {
        query: t,
        selectedIndex: n,
        autocompletes: a,
        onHover: s,
        onClick: o,
        titleWithQuery: c,
        titleWithoutQuery: f,
        Component: p,
        getProps: _,
        getQuery: h,
        key: m,
        indexOffset: g = 0,
        headerClassName: E,
        headerTrailingContent: b,
        footer: y,
    } = e;
    if (null == y && (null == a || 0 === a.length)) return null;
    let O =
        null == a
            ? void 0
            : a.map((e, t) => {
                  let r = t + g,
                      a = _(e, r);
                  return (0, i.createElement)(
                      p,
                      u(
                          l(
                              {
                                  onClick: o,
                                  onHover: s,
                                  selected: n === r,
                                  index: r,
                              },
                              a,
                          ),
                          { key: a.key },
                      ),
                  );
              });
    return (0, r.jsxs)(
        i.Fragment,
        {
            children: [
                null != c && null != f
                    ? d({
                          titleWithQuery: c,
                          titleWithoutQuery: f,
                          query: t,
                          getQuery: h,
                          headerClassName: E,
                          headerTrailingContent: b,
                      })
                    : null,
                O,
                y,
            ],
        },
        m,
    );
}
