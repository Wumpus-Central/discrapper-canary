n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(854627),
    l = n(429974);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e) {
    var t;
    let { user: n, checked: i, onChange: c, disabled: d } = e,
        { avatarSrc: f, eventHandlers: p } = (0, o.A)({
            userId: null == n ? void 0 : n.id,
            size: s._3J.SIZE_32,
        }),
        _ = null != (t = n.globalName) ? t : n.username;
    return (0, r.jsxs)("div", {
        className: l.kL,
        children: [
            (0, r.jsx)("div", {
                className: l.dj,
                children: (0, r.jsx)(
                    s.euF,
                    u(
                        {
                            className: a()({
                                [l.SU]: d,
                            }),
                            src: f,
                            "aria-label": _,
                            size: s._3J.SIZE_32,
                        },
                        p,
                    ),
                ),
            }),
            (0, r.jsxs)("div", {
                className: l.QV,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: l.nT,
                        color: d ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: _,
                    }),
                    (0, r.jsx)(s.Text, {
                        className: l.nT,
                        color: d ? "text-muted" : "text-subtle",
                        variant: "text-xs/normal",
                        children: n.username,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: l.kv,
                children: (0, r.jsx)(s.Checkbox, {
                    disabled: d,
                    checked: i,
                    onChange: (e) => c(n, e),
                    label: "",
                }),
            }),
        ],
    });
}
