(n.d(t, {
    Z: () => N,
    f: () => p
}),
    n(388685));
var r,
    l = n(255367),
    i = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(91192),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    E = n(596454),
    _ = n(607070),
    A = n(339085),
    m = n(695346),
    T = n(572004),
    f = n(388032),
    g = n(559297);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var O = (((r = O || {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), r);
function N(e) {
    let { tag: t, size: r = 1, disabled: s, className: O, onClick: N, onRemove: p, selected: R, ariaLabel: S } = e,
        { name: C, emojiId: b, emojiName: v } = t,
        D = null != p,
        [x, M] = i.useState(!1),
        L = (0, u.e7)([A.ZP], () => (null != b ? A.ZP.getUsableCustomEmojiById(b) : null)),
        U = D || null != N,
        P = (!D || !x) && (null != b || null != v),
        j = 0 === r,
        y = i.useRef(null),
        w = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        G = (e) => {
            let r = m.Sb.getSetting();
            T.wS &&
                r &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, l.jsx)(e, h(I({}, n), { tag: t }));
                });
        },
        k = (0, l.jsxs)(l.Fragment, {
            children: [
                P
                    ? (0, l.jsx)(E.Z, {
                          className: a()(g.emoji, { [g.small]: j }),
                          emojiId: b,
                          emojiName: v,
                          animated: !!(null == L ? void 0 : L.animated),
                          size: 'reaction'
                      })
                    : null,
                x &&
                    D &&
                    (0, l.jsx)('div', {
                        className: g.closeCircle,
                        children: (0, l.jsx)(c.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: g.close
                        })
                    }),
                (0, l.jsx)(c.Text, {
                    variant: j ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: C
                })
            ]
        }),
        F = {
            key: t.id,
            className: a()(
                g.pill,
                {
                    [g.disabled]: s,
                    [g.clickable]: U,
                    [g.small]: j,
                    [g.selected]: R,
                    [g[t.color]]: null != t.color && !U
                },
                O
            ),
            onClick: (e) => {
                (null == N || N(e), null == p || p(t), w || null == y.current || y.current.blur());
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => D && M(!0),
            onMouseLeave: () => D && M(!1)
        },
        Z = (0, o.JA)('forum-tag-'.concat(t.id));
    return U
        ? (0, l.jsx)(
              c.P3F,
              h(
                  I(
                      h(I({}, Z), {
                          innerRef: y,
                          focusProps: { ringTarget: y },
                          'aria-label': null != S ? S : f.intl.formatToPlainString(f.t.iyRTLi, { tagName: C }),
                          role: 'button',
                          'aria-pressed': R
                      }),
                      F
                  ),
                  { children: k }
              )
          )
        : (0, l.jsx)('div', h(I({}, F), { children: k }));
}
function p(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        i = 0 === r;
    return (0, l.jsx)(c.ua7, {
        'aria-label': f.intl.string(f.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    N,
                    {
                        tag: e,
                        className: g.tooltipPill,
                        size: N.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)(
                'div',
                h(I({}, e), {
                    className: a()(g.pill, { [g.small]: i }),
                    children: (0, l.jsxs)(c.Text, {
                        variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
N.Sizes = O;
