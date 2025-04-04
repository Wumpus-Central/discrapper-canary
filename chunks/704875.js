n.d(t, { Z: () => m }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(628692),
    s = n(845537),
    l = n(653309),
    c = n(227473),
    u = n(112360),
    d = n(73433);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
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
function h(e, t) {
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
function m(e, t, n) {
    var i, l;
    let { attributes: u, children: f, element: p, decorations: m } = e,
        b = E(null != (i = null == m ? void 0 : m[0]) ? i : {});
    switch (p.type) {
        case 'line':
            if (null == (l = p.codeBlockState) ? void 0 : l.isInCodeBlock)
                return (0, r.jsx)(
                    'div',
                    h(
                        _(
                            {
                                className: c.codeLine,
                                spellCheck: null == p.codeBlockState || null == p.codeBlockState.lang
                            },
                            u
                        ),
                        { children: f }
                    )
                );
            return (0, r.jsx)('div', h(_({}, u), { children: f }));
        case 'blockQuote': {
            let e = o()(d.blockquoteContainer, d.slateBlockquoteContainer);
            return (0, r.jsxs)(
                'div',
                h(_({}, u), {
                    className: e,
                    children: [
                        (0, r.jsx)('span', {
                            contentEditable: !1,
                            className: d.blockquoteDivider
                        }),
                        (0, r.jsx)('blockquote', { children: f })
                    ]
                })
            );
        }
        case 'emoji':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(s.dy, { emoji: p.emoji }), f]
            });
        case 'customEmoji':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(s.wP, { emoji: p.emoji }), f]
            });
        case 'textMention':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(s.Ox, {
                        text: p.name,
                        channelId: n,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'userMention':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(s.cB, {
                        id: p.userId,
                        channelId: n,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'roleMention':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(s.Vq, {
                        id: p.roleId,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'channelMention':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(s.Io, { id: p.channelId }), f]
            });
        case 'staticRouteLink':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(s.NY, {
                        id: p.id,
                        itemId: p.itemId,
                        guildId: t
                    }),
                    f
                ]
            });
        case 'soundboard':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(a.ku, { soundId: p.soundId }), f]
            });
        case 'commandMention':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [
                    (0, r.jsx)(s.Wf, {
                        text: p.commandName,
                        id: p.commandId
                    }),
                    f
                ]
            });
        case 'timestamp':
            return (0, r.jsxs)(g, {
                attributes: u,
                className: b,
                children: [(0, r.jsx)(s.EK, { timestamp: p.parsed }), f]
            });
        default:
            return null;
    }
}
let g = (e) => {
    let { className: t, attributes: n, children: i } = e,
        a = o()(u.inlineElement, u.inlineVoid, t);
    return (0, r.jsx)(
        'span',
        h(_({}, n), {
            className: a,
            contentEditable: !1,
            children: i
        })
    );
};
function E(e) {
    return Object.entries(e)
        .filter((e) => {
            let [t] = e;
            return 'anchor' !== t && 'focus' !== t;
        })
        .map((e) => {
            let [t, n] = e;
            return !0 === n && t in l.U ? l.U[t] : null;
        })
        .filter((e) => null != e)
        .join(' ');
}
