n.d(t, {
    Z: () => v,
    f: () => O
}),
    n(47120);
var a,
    i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(91192),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    m = n(596454),
    p = n(607070),
    g = n(339085),
    h = n(695346),
    _ = n(572004),
    f = n(388032),
    b = n(559297);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var C = (((a = C || {})[(a.SMALL = 0)] = 'SMALL'), (a[(a.MEDIUM = 1)] = 'MEDIUM'), a);
function v(e) {
    let { tag: t, size: a = 1, disabled: o, className: C, onClick: v, onRemove: O, selected: j, ariaLabel: T } = e,
        { name: P, emojiId: E, emojiName: I } = t,
        w = null != O,
        [S, M] = r.useState(!1),
        A = (0, c.e7)([g.ZP], () => (null != E ? g.ZP.getUsableCustomEmojiById(E) : null)),
        D = w || null != v,
        N = (!w || !S) && (null != E || null != I),
        k = 0 === a,
        z = r.useRef(null),
        L = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        Z = (e) => {
            let a = h.Sb.getSetting();
            _.wS &&
                a &&
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, i.jsx)(e, x(y({}, n), { tag: t }));
                });
        },
        R = (0, i.jsxs)(i.Fragment, {
            children: [
                N
                    ? (0, i.jsx)(m.Z, {
                          className: l()(b.emoji, { [b.small]: k }),
                          emojiId: E,
                          emojiName: I,
                          animated: !!(null == A ? void 0 : A.animated),
                          size: 'reaction'
                      })
                    : null,
                S &&
                    w &&
                    (0, i.jsx)('div', {
                        className: b.closeCircle,
                        children: (0, i.jsx)(d.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.close
                        })
                    }),
                (0, i.jsx)(d.Text, {
                    variant: k ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: P
                })
            ]
        }),
        U = {
            key: t.id,
            className: l()(
                b.pill,
                {
                    [b.disabled]: o,
                    [b.clickable]: D,
                    [b.small]: k,
                    [b.selected]: j
                },
                C
            ),
            onClick: (e) => {
                null == v || v(e), null == O || O(t), L || null == z.current || z.current.blur();
            },
            onContextMenu: (e) => Z(e),
            onMouseEnter: () => w && M(!0),
            onMouseLeave: () => w && M(!1)
        },
        B = (0, s.JA)('forum-tag-'.concat(t.id));
    return D
        ? (0, i.jsx)(
              d.P3F,
              x(
                  y(
                      x(y({}, B), {
                          innerRef: z,
                          focusProps: { ringTarget: z },
                          'aria-label': null != T ? T : f.NW.formatToPlainString(f.t.iyRTLi, { tagName: P }),
                          role: 'button',
                          'aria-pressed': j
                      }),
                      U
                  ),
                  { children: R }
              )
          )
        : (0, i.jsx)('div', x(y({}, U), { children: R }));
}
function O(e) {
    let { tags: t, count: n, size: a = 1 } = e,
        r = 0 === a;
    return (0, i.jsx)(d.ua7, {
        'aria-label': f.NW.string(f.t['P/y+sr']),
        text: (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    v,
                    {
                        tag: e,
                        className: b.tooltipPill,
                        size: v.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, i.jsx)(
                'div',
                x(y({}, e), {
                    className: l()(b.pill, { [b.small]: r }),
                    children: (0, i.jsxs)(d.Text, {
                        variant: r ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
v.Sizes = C;
