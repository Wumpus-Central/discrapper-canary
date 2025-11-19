n.d(t, { default: () => g });
var r = n(54381),
    a = n(481060),
    i = n(703656),
    o = n(666083),
    c = n(162190),
    l = n(669460),
    s = n(981631),
    u = n(176505),
    f = n(719662),
    d = n(388032),
    p = n(500254),
    b = n(671957);
function g(e) {
    var { gameServerGame: t, guildId: n, status: g } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["gameServerGame", "guildId", "status"]);
    let O = (0, c.Z)(t.gameId, "cover");
    return (0, r.jsx)(
        o.default,
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
                title: d.intl.string("created" === g ? f.default["4lLdBM"] : f.default.VPDgHa),
                description: d.intl.formatToPlainString(f.default.yL6BiH, { provider: (0, l.Z)(t.provider) }),
                image: (0, r.jsx)("div", {
                    className: b.imageContainer,
                    children: (0, r.jsx)("img", {
                        className: b.image,
                        alt: "",
                        src: null != O ? O : "",
                    }),
                }),
                button: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: p.button,
                    children: (0, r.jsx)(a.Button, {
                        variant: "primary",
                        text: d.intl.string(f.default.VkItSr),
                        onClick: () => {
                            (0, i.uL)(s.Z5c.CHANNEL(n, u.oC.GAME_SERVERS)), m.onClose();
                        },
                    }),
                }),
            },
            m,
        ),
    );
}
