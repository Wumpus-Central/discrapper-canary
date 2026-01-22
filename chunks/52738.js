n.d(t, {
    B: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(545442),
    c = n(486020),
    u = n(658122);

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

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function g(e, t, n) {
    let { emojiId: r, src: i, animated: a = !1 } = e;
    return null != r
        ? c.Ay.getEmojiURL({
              id: r,
              animated: a && (!n || t),
              size: 18,
          })
        : i;
}

function E(e) {
    let { accessory: t, isFocused: n } = e,
        { reducedMotion: a } = i.useContext(o.CZY);
    switch (t.type) {
        case "icon": {
            let { type: e, icon: n, color: i = "currentColor", className: a } = t,
                o = h(t, ["type", "icon", "color", "className"]);
            return (0, r.jsx)("div", {
                className: u.iconContainerLeft,
                children: (0, r.jsx)(
                    n,
                    _(
                        f(
                            {
                                "aria-hidden": !0,
                                color: i,
                            },
                            o,
                        ),
                        {
                            className: s()(u.icon, a),
                        },
                    ),
                ),
            });
        }
        case "emoji": {
            let e = g(t, n, a.enabled);
            return (0, r.jsx)("div", {
                className: u.iconContainerLeft,
                children: (0, r.jsx)("img", {
                    "aria-hidden": !0,
                    alt: "",
                    src: e,
                    className: u.icon,
                }),
            });
        }
        case "image":
            return (0, r.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                src: t.src,
                className: u.imageAccessory,
            });
        case "avatar":
            return (0, r.jsx)("img", {
                "aria-hidden": !0,
                alt: "",
                src: t.src,
                className: u.avatarAccessory,
            });
        case "roleDot": {
            let { variant: e, color: n, colors: i } = t;
            return (0, r.jsx)("div", {
                className: u.roleDotAccessory,
                children:
                    "dot" === e
                        ? (0, r.jsx)(l.W, {
                              color: n,
                              colors: i,
                              background: !1,
                              tooltip: !1,
                          })
                        : (0, r.jsx)(l.R, {
                              color: n,
                              colors: null != i ? i : null,
                          }),
            });
        }
    }
}
