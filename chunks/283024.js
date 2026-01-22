n.d(t, {
    L: () => h,
});
var r = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(555115);

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

function d(e, t) {
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
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = 10,
    _ = (e, t) => {
        let n = {
                opacity: 0,
                transform: "",
            },
            r = {
                opacity: 1,
                transform: "translate3d(0px, 0px, 0)",
            },
            i = {
                opacity: 0,
                transform: "",
            };
        if (t)
            return {
                from: {
                    opacity: 0,
                },
                enter: {
                    opacity: 1,
                },
                leave: {
                    opacity: 0,
                },
                config: {
                    duration: 150,
                },
            };
        switch (e) {
            case "top":
                (n.transform = "translate3d(0, -".concat(p, "px, 0)")),
                    (i.transform = "translate3d(0, -".concat(p, "px, 0)"));
                break;
            case "bottom":
                (n.transform = "translate3d(0, ".concat(p, "px, 0)")),
                    (i.transform = "translate3d(0, ".concat(p, "px, 0)"));
                break;
            case "left":
                (n.transform = "translate3d(-".concat(p, "px, 0, 0)")),
                    (i.transform = "translate3d(-".concat(p, "px, 0, 0)"));
                break;
            case "right":
                (n.transform = "translate3d(".concat(p, "px, 0, 0)")),
                    (i.transform = "translate3d(".concat(p, "px, 0, 0)"));
        }
        return {
            from: n,
            enter: r,
            leave: i,
            config: void 0,
        };
    };

function h(e) {
    let { shouldShow: t, caretPosition: n, onExitComplete: o } = e,
        { reducedMotion: c } = r.useContext(i.CZY),
        f = _(n, c.enabled),
        { config: p } = f,
        h = d(f, ["config"]);
    return (0, a.pnh)(
        t,
        u(l({}, h), {
            config: null != p ? p : (e, n) => (t ? s.n : s.t),
            onRest: () => {
                t || null == o || o();
            },
        }),
        "animate-always",
    );
}
