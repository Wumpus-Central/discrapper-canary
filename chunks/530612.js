n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(518950),
    l = n(44093);
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
        { avatarSrc: f, eventHandlers: p } = (0, s.Z)({
            userId: null == n ? void 0 : n.id,
            size: a.EFr.SIZE_32,
        }),
        _ = null != (t = n.globalName) ? t : n.username;
    return (0, r.jsxs)("div", {
        className: l.container,
        children: [
            (0, r.jsx)("div", {
                className: l.userAvatar,
                children: (0, r.jsx)(
                    a.qEK,
                    u(
                        {
                            className: o()({ [l.muted]: d }),
                            src: f,
                            "aria-label": _,
                            size: a.EFr.SIZE_32,
                        },
                        p,
                    ),
                ),
            }),
            (0, r.jsxs)("div", {
                className: l.usernameContainer,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: l.userName,
                        color: d ? "text-muted" : "text-default",
                        variant: "text-md/semibold",
                        children: _,
                    }),
                    (0, r.jsx)(a.Text, {
                        className: l.userName,
                        color: d ? "text-muted" : "text-subtle",
                        variant: "text-xs/normal",
                        children: n.username,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: l.checkbox,
                children: (0, r.jsx)(a.Checkbox, {
                    disabled: d,
                    checked: i,
                    onChange: (e) => c(n, e),
                    label: "",
                }),
            }),
        ],
    });
}
