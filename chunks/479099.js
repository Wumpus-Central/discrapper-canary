n.d(t, {
    Z: () => S,
    f: () => h
}),
    n(388685);
var r,
    l = n(255367),
    s = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(91192),
    E = n(442837),
    c = n(481060),
    u = n(239091),
    _ = n(596454),
    d = n(607070),
    A = n(339085),
    T = n(695346),
    I = n(572004),
    O = n(388032),
    N = n(559297);
function R(e) {
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
function g(e, t) {
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
var f = (((r = f || {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), r);
function S(e) {
    let { tag: t, size: r = 1, disabled: i, className: f, onClick: S, onRemove: h, selected: p, ariaLabel: U } = e,
        { name: L, emojiId: D, emojiName: C } = t,
        M = null != h,
        [m, v] = s.useState(!1),
        b = (0, E.e7)([A.ZP], () => (null != D ? A.ZP.getUsableCustomEmojiById(D) : null)),
        P = M || null != S,
        x = (!M || !m) && (null != D || null != C),
        j = 0 === r,
        y = s.useRef(null),
        G = (0, E.e7)([d.Z], () => d.Z.keyboardModeEnabled),
        F = (e) => {
            let r = T.Sb.getSetting();
            I.wS &&
                r &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, l.jsx)(e, g(R({}, n), { tag: t }));
                });
        },
        z = (0, l.jsxs)(l.Fragment, {
            children: [
                x
                    ? (0, l.jsx)(_.Z, {
                          className: a()(N.emoji, { [N.small]: j }),
                          emojiId: D,
                          emojiName: C,
                          animated: !!(null == b ? void 0 : b.animated),
                          size: 'reaction'
                      })
                    : null,
                m &&
                    M &&
                    (0, l.jsx)('div', {
                        className: N.closeCircle,
                        children: (0, l.jsx)(c.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: N.close
                        })
                    }),
                (0, l.jsx)(c.Text, {
                    variant: j ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: L
                })
            ]
        }),
        B = {
            key: t.id,
            className: a()(
                N.pill,
                {
                    [N.disabled]: i,
                    [N.clickable]: P,
                    [N.small]: j,
                    [N.selected]: p,
                    [N[t.color]]: null != t.color && !P
                },
                f
            ),
            onClick: (e) => {
                null == S || S(e), null == h || h(t), G || null == y.current || y.current.blur();
            },
            onContextMenu: (e) => F(e),
            onMouseEnter: () => M && v(!0),
            onMouseLeave: () => M && v(!1)
        },
        w = (0, o.JA)('forum-tag-'.concat(t.id));
    return P
        ? (0, l.jsx)(
              c.P3F,
              g(
                  R(
                      g(R({}, w), {
                          innerRef: y,
                          focusProps: { ringTarget: y },
                          'aria-label': null != U ? U : O.intl.formatToPlainString(O.t.iyRTLi, { tagName: L }),
                          role: 'button',
                          'aria-pressed': p
                      }),
                      B
                  ),
                  { children: z }
              )
          )
        : (0, l.jsx)('div', g(R({}, B), { children: z }));
}
function h(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        s = 0 === r;
    return (0, l.jsx)(c.ua7, {
        'aria-label': O.intl.string(O.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    S,
                    {
                        tag: e,
                        className: N.tooltipPill,
                        size: S.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)(
                'div',
                g(R({}, e), {
                    className: a()(N.pill, { [N.small]: s }),
                    children: (0, l.jsxs)(c.Text, {
                        variant: s ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
S.Sizes = f;
