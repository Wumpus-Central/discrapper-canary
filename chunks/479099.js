n.d(t, {
    Z: () => h,
    f: () => N
}),
    n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    u = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(239091),
    p = n(596454),
    f = n(607070),
    E = n(339085),
    _ = n(695346),
    O = n(572004),
    g = n(388032),
    S = n(559297);
function I(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
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
var T = (((r = T || {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), r);
function h(e) {
    let { tag: t, size: r = 1, disabled: o, className: T, onClick: h, onRemove: N, selected: C, ariaLabel: y } = e,
        { name: m, emojiId: P, emojiName: A } = t,
        v = null != N,
        [j, L] = l.useState(!1),
        D = (0, s.e7)([E.ZP], () => (null != P ? E.ZP.getUsableCustomEmojiById(P) : null)),
        F = v || null != h,
        R = (!v || !j) && (null != P || null != A),
        w = 0 === r,
        U = l.useRef(null),
        M = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        G = (e) => {
            let r = _.Sb.getSetting();
            O.wS &&
                r &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, i.jsx)(e, b(I({}, n), { tag: t }));
                });
        },
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                R
                    ? (0, i.jsx)(p.Z, {
                          className: a()(S.emoji, { [S.small]: w }),
                          emojiId: P,
                          emojiName: A,
                          animated: !!(null == D ? void 0 : D.animated),
                          size: 'reaction'
                      })
                    : null,
                j &&
                    v &&
                    (0, i.jsx)('div', {
                        className: S.closeCircle,
                        children: (0, i.jsx)(c.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: S.close
                        })
                    }),
                (0, i.jsx)(c.Text, {
                    variant: w ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: m
                })
            ]
        }),
        Z = {
            key: t.id,
            className: a()(
                S.pill,
                {
                    [S.disabled]: o,
                    [S.clickable]: F,
                    [S.small]: w,
                    [S.selected]: C
                },
                T
            ),
            onClick: (e) => {
                null == h || h(e), null == N || N(t), M || null == U.current || U.current.blur();
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => v && L(!0),
            onMouseLeave: () => v && L(!1)
        },
        k = (0, u.JA)('forum-tag-'.concat(t.id));
    return F
        ? (0, i.jsx)(
              c.P3F,
              b(
                  I(
                      b(I({}, k), {
                          innerRef: U,
                          focusProps: { ringTarget: U },
                          'aria-label': null != y ? y : g.NW.formatToPlainString(g.t.iyRTLi, { tagName: m }),
                          role: 'button',
                          'aria-pressed': C
                      }),
                      Z
                  ),
                  { children: x }
              )
          )
        : (0, i.jsx)('div', b(I({}, Z), { children: x }));
}
function N(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        l = 0 === r;
    return (0, i.jsx)(c.ua7, {
        'aria-label': g.NW.string(g.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    h,
                    {
                        tag: e,
                        className: S.tooltipPill,
                        size: h.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, i.jsx)(
                'div',
                b(I({}, e), {
                    className: a()(S.pill, { [S.small]: l }),
                    children: (0, i.jsxs)(c.Text, {
                        variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
h.Sizes = T;
