n.d(t, {
    Z: () => h,
    f: () => y
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
    f = n(607070),
    E = n(339085),
    O = n(695346),
    S = n(572004),
    _ = n(388032),
    T = n(559297);
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
function I(e, t) {
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
    let { tag: t, size: r = 1, disabled: o, className: b, onClick: h, onRemove: y, selected: C, ariaLabel: N } = e,
        { name: P, emojiId: m, emojiName: v } = t,
        A = null != y,
        [j, L] = l.useState(!1),
        R = (0, c.e7)([E.ZP], () => (null != m ? E.ZP.getUsableCustomEmojiById(m) : null)),
        D = A || null != h,
        F = (!A || !j) && (null != m || null != v),
        w = 0 === r,
        M = l.useRef(null),
        U = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        Z = (e) => {
            let r = O.Sb.getSetting();
            S.wS &&
                r &&
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, i.jsx)(e, I(g({}, n), { tag: t }));
                });
        },
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                F
                    ? (0, i.jsx)(p.Z, {
                          className: a()(T.emoji, { [T.small]: w }),
                          emojiId: m,
                          emojiName: v,
                          animated: !!(null == R ? void 0 : R.animated),
                          size: 'reaction'
                      })
                    : null,
                j &&
                    A &&
                    (0, i.jsx)('div', {
                        className: T.closeCircle,
                        children: (0, i.jsx)(s.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: T.close
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
        G = {
            key: t.id,
            className: a()(
                T.pill,
                {
                    [T.disabled]: o,
                    [T.clickable]: D,
                    [T.small]: w,
                    [T.selected]: C
                },
                b
            ),
            onClick: (e) => {
                null == h || h(e), null == y || y(t), U || null == M.current || M.current.blur();
            },
            onContextMenu: (e) => Z(e),
            onMouseEnter: () => A && L(!0),
            onMouseLeave: () => A && L(!1)
        },
        H = (0, u.JA)('forum-tag-'.concat(t.id));
    return D
        ? (0, i.jsx)(
              s.P3F,
              I(
                  g(
                      I(g({}, H), {
                          innerRef: M,
                          focusProps: { ringTarget: M },
                          'aria-label': null != N ? N : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: P }),
                          role: 'button',
                          'aria-pressed': C
                      }),
                      G
                  ),
                  { children: x }
              )
          )
        : (0, i.jsx)('div', I(g({}, G), { children: x }));
}
function y(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        l = 0 === r;
    return (0, i.jsx)(s.ua7, {
        'aria-label': _.intl.string(_.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    h,
                    {
                        tag: e,
                        className: T.tooltipPill,
                        size: h.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, i.jsx)(
                'div',
                I(g({}, e), {
                    className: a()(T.pill, { [T.small]: l }),
                    children: (0, i.jsxs)(s.Text, {
                        variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
h.Sizes = b;
