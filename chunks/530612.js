n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(518950),
    c = n(897868);
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
function f(e) {
    var t;
    let { user: n, checked: i, onChange: u, disabled: f } = e,
        { avatarSrc: _, eventHandlers: p } = (0, l.Z)({
            userId: null == n ? void 0 : n.id,
            size: s.EFr.SIZE_32,
        }),
        h = null != (t = n.globalName) ? t : n.username;
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsx)("div", {
                className: c.userAvatar,
                children: (0, r.jsx)(
                    s.qEK,
                    d(
                        {
                            className: a()({ [c.muted]: f }),
                            src: _,
                            "aria-label": h,
                            size: s.EFr.SIZE_32,
                        },
                        p,
                    ),
                ),
            }),
            (0, r.jsxs)("div", {
                className: c.usernameContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        className: c.userName,
                        color: f ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: h,
                    }),
                    (0, r.jsx)(s.Text, {
                        className: c.userName,
                        color: f ? "text-muted" : "text-secondary",
                        variant: "text-xs/normal",
                        children: n.username,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: c.checkbox,
                children: (0, r.jsx)(o.$q, {
                    disabled: f,
                    value: i,
                    onChange: (e, t) => u(n, t),
                }),
            }),
        ],
    });
}
