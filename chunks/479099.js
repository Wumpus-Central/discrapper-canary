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
    c = n(442837),
    s = n(481060),
    d = n(239091),
    p = n(596454),
    E = n(607070),
    f = n(339085),
    _ = n(695346),
    S = n(572004),
    O = n(388032),
    I = n(467345);
function g(e) {
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
function T(e, t) {
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
var b = (((r = b || {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), r);
function h(e) {
    let { tag: t, size: r = 1, disabled: o, className: b, onClick: h, onRemove: N, selected: C, ariaLabel: y } = e,
        { name: P, emojiId: m, emojiName: A } = t,
        v = null != N,
        [L, j] = l.useState(!1),
        F = (0, c.e7)([f.ZP], () => (null != m ? f.ZP.getUsableCustomEmojiById(m) : null)),
        D = v || null != h,
        R = (!v || !L) && (null != m || null != A),
        w = 0 === r,
        M = l.useRef(null),
        U = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled),
        G = (e) => {
            let r = _.Sb.getSetting();
            S.wS &&
                r &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, i.jsx)(e, T(g({}, n), { tag: t }));
                });
        },
        Z = (0, i.jsxs)(i.Fragment, {
            children: [
                R
                    ? (0, i.jsx)(p.Z, {
                          className: a()(I.emoji, { [I.small]: w }),
                          emojiId: m,
                          emojiName: A,
                          animated: !!(null == F ? void 0 : F.animated),
                          size: 'reaction'
                      })
                    : null,
                L &&
                    v &&
                    (0, i.jsx)('div', {
                        className: I.closeCircle,
                        children: (0, i.jsx)(s.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.close
                        })
                    }),
                (0, i.jsx)(s.Text, {
                    variant: w ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: P
                })
            ]
        }),
        x = {
            key: t.id,
            className: a()(
                I.pill,
                {
                    [I.disabled]: o,
                    [I.clickable]: D,
                    [I.small]: w,
                    [I.selected]: C
                },
                b
            ),
            onClick: (e) => {
                null == h || h(e), null == N || N(t), U || null == M.current || M.current.blur();
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => v && j(!0),
            onMouseLeave: () => v && j(!1)
        },
        H = (0, u.JA)('forum-tag-'.concat(t.id));
    return D
        ? (0, i.jsx)(
              s.P3F,
              T(
                  g(
                      T(g({}, H), {
                          innerRef: M,
                          focusProps: { ringTarget: M },
                          'aria-label': null != y ? y : O.NW.formatToPlainString(O.t.iyRTLi, { tagName: P }),
                          role: 'button',
                          'aria-pressed': C
                      }),
                      x
                  ),
                  { children: Z }
              )
          )
        : (0, i.jsx)('div', T(g({}, x), { children: Z }));
}
function N(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        l = 0 === r;
    return (0, i.jsx)(s.ua7, {
        'aria-label': O.NW.string(O.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    h,
                    {
                        tag: e,
                        className: I.tooltipPill,
                        size: h.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, i.jsx)(
                'div',
                T(g({}, e), {
                    className: a()(I.pill, { [I.small]: l }),
                    children: (0, i.jsxs)(s.Text, {
                        variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
h.Sizes = b;
