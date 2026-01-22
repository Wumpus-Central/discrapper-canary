n.d(t, { A: () => m }), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(490040),
    o = n(613306),
    l = n(249431),
    c = n(675841),
    u = n(562650),
    d = n(206314);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t, n) {
    var i, l;
    let { attributes: u, children: f, element: _, decorations: m } = e,
        b = E(null != (i = null == m ? void 0 : m[0]) ? i : {});
    switch (_.type) {
        case "line":
            if (null == (l = _.codeBlockState) ? void 0 : l.isInCodeBlock)
                return (0, r.jsx)(
                    "div",
                    h(
                        p(
                            {
                                className: c.codeLine,
                                spellCheck: null == _.codeBlockState || null == _.codeBlockState.lang,
                            },
                            u,
                        ),
                        { children: f },
                    ),
                );
            return (0, r.jsx)("div", h(p({}, u), { children: f }));
        case "blockQuote": {
            let e = a()(d.h, d.MN);
            return (0, r.jsxs)(
                "div",
                h(p({}, u), {
                    className: e,
                    children: [
                        (0, r.jsx)("span", {
                            contentEditable: !1,
                            className: d.r,
                        }),
                        (0, r.jsx)("blockquote", { children: f }),
                    ],
                }),
            );
        }
        case "emoji":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(o.zT, { emoji: _.emoji }), f],
            });
        case "customEmoji":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(o.QT, { emoji: _.emoji }), f],
            });
        case "textMention":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(o.wN, { text: _.name }), f],
            });
        case "userMention":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(o.M9, {
                        id: _.userId,
                        channelId: n,
                        guildId: t,
                    }),
                    f,
                ],
            });
        case "roleMention":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(o.ti, {
                        id: _.roleId,
                        guildId: t,
                    }),
                    f,
                ],
            });
        case "channelMention":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(o.Cn, { id: _.channelId }), f],
            });
        case "staticRouteLink":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(o.sQ, {
                        id: _.id,
                        itemId: _.itemId,
                        guildId: t,
                    }),
                    f,
                ],
            });
        case "soundboard":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(s.LF, { soundId: _.soundId }), f],
            });
        case "commandMention":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(o.gn, {
                        text: _.commandName,
                        id: _.commandId,
                    }),
                    f,
                ],
            });
        case "timestamp":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(o.Dc, { timestamp: _.parsed }), f],
            });
        case "gameMention":
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(o.NH, { id: _.applicationId }), f],
            });
        default:
            return null;
    }
}
let g = (e) => {
    let { className: t, attributes: n, children: i } = e,
        s = a()(u.S0, u.Cj, t);
    return (0, r.jsx)(
        "span",
        h(p({}, n), {
            className: s,
            contentEditable: !1,
            children: i,
        }),
    );
};
function E(e) {
    return Object.entries(e)
        .filter((e) => {
            let [t] = e;
            return "anchor" !== t && "focus" !== t;
        })
        .map((e) => {
            let [t, n] = e;
            return !0 === n && t in l.Y ? l.Y[t] : null;
        })
        .filter((e) => null != e)
        .join(" ");
}
