n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(755721),
    a = n(481060),
    s = n(911969),
    l = n(970184),
    c = n(293979),
    u = n(290829);
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
function _(e) {
    let t,
        { type: n, style: d, label: _, placeholder: p, minLength: h, maxLength: m, required: g, value: E } = e,
        [b, y] = i.useState(null != E ? E : ""),
        {
            state: O,
            executeStateUpdate: v,
            error: I,
        } = (0, l.Ee)(
            e,
            null != E
                ? {
                      type: n,
                      value: E,
                  }
                : void 0,
        ),
        T = (0, c.hz)(e.id);
    i.useEffect(() => {
        (null == O ? void 0 : O.type) === n && y(O.value);
    }, [n, O]);
    let S = {
        value: b,
        placeholder: p,
        minLength: h,
        maxLength: m,
        required: g,
        onChange: (e) => {
            y(e),
                v({
                    type: n,
                    value: e,
                });
        },
        autoFocus: T,
    };
    switch (d) {
        case s.PT.SMALL:
            t = (0, r.jsx)(a.oil, f({}, S));
            break;
        case s.PT.PARAGRAPH:
            t = (0, r.jsx)(o.iS, f({ autosize: !0 }, S));
    }
    return null != _
        ? (0, r.jsx)(a.xJW, {
              title: _,
              required: g,
              className: u.formItem,
              error: I,
              children: t,
          })
        : t;
}
