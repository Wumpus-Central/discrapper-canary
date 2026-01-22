n.d(t, {
    EG: () => _,
    Gu: () => m,
    JI: () => b,
    Lp: () => E,
    SC: () => O,
    fk: () => y,
    hV: () => g,
    o6: () => h,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(668016);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
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
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = {
    ROUND: o.rS,
    ROUND_LEFT: o.Q2,
    ROUND_RIGHT: o.Hg,
    SQUARE: "",
};

function h(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}

function m(e) {
    return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+");
}
let g = (e) => {
        let {
                count: t,
                color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                disableColor: i = !1,
                shape: l = _.ROUND,
                className: u,
                style: p,
                renderBadgeCount: g = m,
            } = e,
            E = f(e, ["count", "color", "disableColor", "shape", "className", "style", "renderBadgeCount"]);
        return (0, r.jsx)(
            "div",
            d(
                c(
                    {
                        className: a()(u, o.Do, l),
                        style: c(
                            {
                                backgroundColor: i ? void 0 : n,
                                width: h(t),
                            },
                            p,
                        ),
                    },
                    E,
                ),
                {
                    children: g(t),
                },
            ),
        );
    },
    E = (e) => {
        let {
                text: t,
                className: n,
                color: i = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                shape: l = _.ROUND,
                disableColor: u = !1,
                style: p,
            } = e,
            h = f(e, ["text", "className", "color", "shape", "disableColor", "style"]);
        return (0, r.jsx)(
            "div",
            d(
                c(
                    {
                        className: a()(n, o.U1, l),
                        style: c(
                            {
                                backgroundColor: u ? void 0 : i,
                            },
                            p,
                        ),
                    },
                    h,
                ),
                {
                    children: t,
                },
            ),
        );
    },
    b = (e) => {
        let { text: t, className: n } = e,
            i = f(e, ["text", "className"]);
        return (0, r.jsx)(
            E,
            c(
                {
                    className: a()(o.BE, n),
                    text: t,
                },
                i,
            ),
        );
    },
    y = (e) => {
        let {
            icon: t,
            className: n,
            color: i = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: l = _.ROUND,
            disableColor: u = !1,
            style: d,
        } = e;
        return (0, r.jsx)("div", {
            className: a()(n, o.u3, l),
            style: c(
                {
                    backgroundColor: u ? void 0 : i,
                },
                d,
            ),
            children: (0, r.jsx)(t, {
                className: o.Kk,
                color: "currentColor",
            }),
        });
    },
    O = (e) => {
        let {
                className: t,
                color: n = s.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
                shape: i = _.ROUND,
                disableColor: l = !1,
                style: u,
            } = e,
            d = f(e, ["className", "color", "shape", "disableColor", "style"]);
        return (0, r.jsx)(
            "div",
            c(
                {
                    className: a()(t, o.Ky, i),
                    style: c(
                        {
                            backgroundColor: l ? void 0 : n,
                        },
                        u,
                    ),
                },
                d,
            ),
        );
    };
