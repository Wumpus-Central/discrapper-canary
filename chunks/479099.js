(n.d(t, {
    Z: () => h,
    f: () => R
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
    E = n(239091),
    d = n(596454),
    _ = n(607070),
    A = n(339085),
    T = n(695346),
    I = n(572004),
    g = n(388032),
    m = n(559297);
function f(e) {
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
function O(e, t) {
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
var N = (((r = N || {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), r);
function h(e) {
    let { tag: t, size: r = 1, disabled: s, className: N, onClick: h, onRemove: R, selected: p, ariaLabel: S } = e,
        { name: C, emojiId: b, emojiName: D } = t,
        v = null != R,
        [U, L] = i.useState(!1),
        M = (0, u.e7)([A.ZP], () => (null != b ? A.ZP.getUsableCustomEmojiById(b) : null)),
        x = v || null != h,
        P = (!v || !U) && (null != b || null != D),
        j = 0 === r,
        y = i.useRef(null),
        w = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        G = (e) => {
            let r = T.Sb.getSetting();
            I.wS &&
                r &&
                (0, E.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, l.jsx)(e, O(f({}, n), { tag: t }));
                });
        },
        z = (0, l.jsxs)(l.Fragment, {
            children: [
                P
                    ? (0, l.jsx)(d.Z, {
                          className: a()(m.emoji, { [m.small]: j }),
                          emojiId: b,
                          emojiName: D,
                          animated: !!(null == M ? void 0 : M.animated),
                          size: 'reaction'
                      })
                    : null,
                U &&
                    v &&
                    (0, l.jsx)('div', {
                        className: m.closeCircle,
                        children: (0, l.jsx)(c.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: m.close
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
        Z = {
            key: t.id,
            className: a()(
                m.pill,
                {
                    [m.disabled]: s,
                    [m.clickable]: x,
                    [m.small]: j,
                    [m.selected]: p,
                    [m[t.color]]: null != t.color && !x
                },
                N
            ),
            onClick: (e) => {
                (null == h || h(e), null == R || R(t), w || null == y.current || y.current.blur());
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => v && L(!0),
            onMouseLeave: () => v && L(!1)
        },
        B = (0, o.JA)('forum-tag-'.concat(t.id));
    return x
        ? (0, l.jsx)(
              c.P3F,
              O(
                  f(
                      O(f({}, B), {
                          innerRef: y,
                          focusProps: { ringTarget: y },
                          'aria-label': null != S ? S : g.intl.formatToPlainString(g.t.iyRTLi, { tagName: C }),
                          role: 'button',
                          'aria-pressed': p
                      }),
                      Z
                  ),
                  { children: z }
              )
          )
        : (0, l.jsx)('div', O(f({}, Z), { children: z }));
}
function R(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        i = 0 === r;
    return (0, l.jsx)(c.ua7, {
        'aria-label': g.intl.string(g.t['P/y+sr']),
        text: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    h,
                    {
                        tag: e,
                        className: m.tooltipPill,
                        size: h.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, l.jsx)(
                'div',
                O(f({}, e), {
                    className: a()(m.pill, { [m.small]: i }),
                    children: (0, l.jsxs)(c.Text, {
                        variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
h.Sizes = N;
