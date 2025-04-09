n.d(t, {
    Z: () => b,
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
    S = n(572004),
    O = n(388032),
    I = n(559297);
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
var h = (((r = h || {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.MEDIUM = 1)] = 'MEDIUM'), r);
function b(e) {
    let { tag: t, size: r = 1, disabled: o, className: h, onClick: b, onRemove: N, selected: C, ariaLabel: y } = e,
        { name: m, emojiId: P, emojiName: A } = t,
        v = null != N,
        [L, j] = l.useState(!1),
        F = (0, s.e7)([E.ZP], () => (null != P ? E.ZP.getUsableCustomEmojiById(P) : null)),
        D = v || null != b,
        R = (!v || !L) && (null != P || null != A),
        w = 0 === r,
        U = l.useRef(null),
        M = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        G = (e) => {
            let r = _.Sb.getSetting();
            S.wS &&
                r &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, i.jsx)(e, T(g({}, n), { tag: t }));
                });
        },
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                R
                    ? (0, i.jsx)(p.Z, {
                          className: a()(I.emoji, { [I.small]: w }),
                          emojiId: P,
                          emojiName: A,
                          animated: !!(null == F ? void 0 : F.animated),
                          size: 'reaction'
                      })
                    : null,
                L &&
                    v &&
                    (0, i.jsx)('div', {
                        className: I.closeCircle,
                        children: (0, i.jsx)(c.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.close
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
                I.pill,
                {
                    [I.disabled]: o,
                    [I.clickable]: D,
                    [I.small]: w,
                    [I.selected]: C
                },
                h
            ),
            onClick: (e) => {
                null == b || b(e), null == N || N(t), M || null == U.current || U.current.blur();
            },
            onContextMenu: (e) => G(e),
            onMouseEnter: () => v && j(!0),
            onMouseLeave: () => v && j(!1)
        },
        H = (0, u.JA)('forum-tag-'.concat(t.id));
    return D
        ? (0, i.jsx)(
              c.P3F,
              T(
                  g(
                      T(g({}, H), {
                          innerRef: U,
                          focusProps: { ringTarget: U },
                          'aria-label': null != y ? y : O.NW.formatToPlainString(O.t.iyRTLi, { tagName: m }),
                          role: 'button',
                          'aria-pressed': C
                      }),
                      Z
                  ),
                  { children: x }
              )
          )
        : (0, i.jsx)('div', T(g({}, Z), { children: x }));
}
function N(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        l = 0 === r;
    return (0, i.jsx)(c.ua7, {
        'aria-label': O.NW.string(O.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    b,
                    {
                        tag: e,
                        className: I.tooltipPill,
                        size: b.Sizes.SMALL
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
                    children: (0, i.jsxs)(c.Text, {
                        variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
b.Sizes = h;
