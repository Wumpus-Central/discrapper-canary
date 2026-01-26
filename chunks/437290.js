n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(397927),
    c = n(854627),
    u = n(429974);

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

function p(e) {
    var t;
    let { user: n, checked: a, onChange: d, disabled: p, tooltipConfig: _ } = e,
        h = i.useRef(null),
        { avatarSrc: m, eventHandlers: g } = (0, c.A)({
            userId: null == n ? void 0 : n.id,
            size: l._3J.SIZE_32,
        }),
        E = null != (t = n.globalName) ? t : n.username;
    return (0, r.jsx)(o.m, {
        text: (null == _ ? void 0 : _.isActive(n, p)) ? _.text(n) : null,
        position: "top",
        anchorRef: h,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: u.kL,
            children: [
                (0, r.jsx)("div", {
                    className: u.dj,
                    children: (0, r.jsx)(
                        l.euF,
                        f(
                            {
                                className: s()({
                                    [u.SU]: p,
                                }),
                                src: m,
                                "aria-label": E,
                                size: l._3J.SIZE_32,
                            },
                            g,
                        ),
                    ),
                }),
                (0, r.jsxs)("div", {
                    className: u.QV,
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: u.nT,
                            color: p ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: E,
                        }),
                        (0, r.jsx)(l.Text, {
                            className: u.nT,
                            color: p ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: n.username,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    ref: h,
                    className: u.kv,
                    children: (0, r.jsx)(l.Checkbox, {
                        disabled: p,
                        checked: a,
                        onChange: (e) => d(n, e),
                        label: "",
                    }),
                }),
            ],
        }),
    });
}
