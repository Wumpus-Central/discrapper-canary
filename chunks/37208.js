n.d(t, { default: () => b });
var r = n(951288),
    a = n(481060),
    o = n(703656),
    i = n(666083),
    c = n(943970),
    l = n(981631),
    s = n(176505),
    u = n(401561),
    f = n(388032),
    p = n(477487),
    d = n(438957);
function b(e) {
    var { portkeyGame: t, guildId: n, status: b } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["portkeyGame", "guildId", "status"]);
    let g = (0, c.Z)(t.gameId, "cover");
    return (0, r.jsx)(
        i.default,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                title: f.intl.string("created" === b ? u.default.hcBOZW : u.default.mFefx8),
                description: f.intl.formatToPlainString(u.default.KCgZMj, { provider: "Portkey" }),
                image: (0, r.jsx)("div", {
                    className: d.imageContainer,
                    children: (0, r.jsx)("img", {
                        className: d.image,
                        alt: "",
                        src: null != g ? g : "",
                    }),
                }),
                button: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p.button,
                    children: (0, r.jsx)(a.zxk, {
                        variant: "primary",
                        text: f.intl.string(u.default.AS3n8v),
                        onClick: () => {
                            (0, o.uL)(l.Z5c.CHANNEL(n, s.oC.PORTKEY)), m.onClose();
                        },
                    }),
                }),
            },
            m,
        ),
    );
}
