n.d(t, {
    xp: () => d,
}),
    n(228524);
var r = n(627968);
n(64700), n(417597);
var i = n(397927);
n(775602);
var a = n(985018);
n(333354);
var s = n(329431);

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
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = u(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function d(e) {
    let { heading: t, description: n, label: o, isEnabled: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Heading, {
                className: s.zQ,
                variant: "heading-lg/extrabold",
                children: t,
            }),
            (0, r.jsx)(i.Text, {
                className: s.LW,
                variant: "text-sm/normal",
                children: n,
            }),
            (0, r.jsxs)("div", {
                className: s.XN,
                children: [
                    null != o &&
                        (0, r.jsxs)("div", {
                            className: s.qB,
                            children: [
                                (0, r.jsx)(i._Jp, {
                                    size: "sm",
                                    color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    children: o,
                                }),
                            ],
                        }),
                    l &&
                        (0, r.jsxs)("div", {
                            className: s.qB,
                            children: [
                                (0, r.jsx)(i.yr3, {
                                    size: "custom",
                                    height: 14,
                                    width: 14,
                                    color: "currentColor",
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: "text-sm/semibold",
                                    color: "currentColor",
                                    children: a.intl.string(a.t.pCMkDb),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
n(676611), n(772324), n(696403), n(538510);
