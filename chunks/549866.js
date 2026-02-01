n.d(t, {
    b: () => m,
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(46054),
    u = n(190012),
    c = n(465364),
    d = n(665524);

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function p(e) {
    let { icon: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.getOwnPropertyNames(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l;
        })(e, ["icon"]);
    switch (t) {
        case "image":
            return (0, i.jsx)(s.xfq, h({}, n));
        case "video":
            return (0, i.jsx)(s.npA, h({}, n));
        case "audio":
            return (0, i.jsx)(s.T7G, h({}, n));
        case "attachment":
            return (0, i.jsx)(s.PtA, h({}, n));
        case "link":
            return (0, i.jsx)(s.qYV, h({}, n));
        case "sticker":
            return (0, i.jsx)(s.tEP, h({}, n));
        case "call-active":
            return (0, i.jsx)(s._jp, h({}, n));
        case "call-ended":
            return (0, i.jsx)(s.zWQ, h({}, n));
    }
}
let f = r.memo(function (e) {
        let { message: t } = e;
        return (0, c.Ay)(t, {
            formatInline: !0,
            noStyleAndInteraction: !0,
        }).content;
    }),
    g = r.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, c.jp)(o.A.parseInlineReply, {
            content: t,
            channelId: n,
        });
    });

function m(e) {
    let t,
        { channel: n, message: r } = e,
        l = (0, u.BC)(r, n);
    if (null == l) return null;
    let { authorLabel: s, color: o, trailingIcon: c } = l;
    return (
        "text" === l.type
            ? (t = l.text)
            : "markup" === l.type
              ? (t = (0, i.jsx)(g, {
                    markup: l.markup,
                    channelId: r.channel_id,
                }))
              : "message" === l.type &&
                (t = (0, i.jsx)(f, {
                    message: l.message,
                })),
        (0, i.jsxs)("div", {
            className: a()(d.Sl, {
                [d.Vz]: "text-feedback-positive" === o,
            }),
            children: [
                (0, i.jsxs)("span", {
                    className: d.BK,
                    children: [null != s && "".concat(s, ": "), t],
                }),
                null != c &&
                    (0, i.jsx)(p, {
                        icon: c,
                        size: "xxs",
                        color: "currentColor",
                        className: d.sl,
                    }),
            ],
        })
    );
}
