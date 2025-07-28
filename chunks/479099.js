(t.d(e, {
    Z: () => M,
    f: () => I
}),
    t(388685));
var n,
    r = t(255367),
    l = t(73800),
    i = t(120356),
    s = t.n(i),
    a = t(91192),
    o = t(442837),
    g = t(481060),
    f = t(239091),
    v = t(596454),
    c = t(607070),
    h = t(339085),
    E = t(695346),
    u = t(572004),
    d = t(388032),
    C = t(559297);
function B(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
function w(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
var D = (((n = D || {})[(n.SMALL = 0)] = 'SMALL'), (n[(n.MEDIUM = 1)] = 'MEDIUM'), n);
function M(A) {
    let { tag: e, size: n = 1, disabled: i, className: D, onClick: M, onRemove: I, selected: p, ariaLabel: H } = A,
        { name: b, emojiId: Q, emojiName: O } = e,
        P = null != I,
        [V, j] = l.useState(!1),
        T = (0, o.e7)([h.ZP], () => (null != Q ? h.ZP.getUsableCustomEmojiById(Q) : null)),
        y = P || null != M,
        m = (!P || !V) && (null != Q || null != O),
        L = 0 === n,
        x = l.useRef(null),
        Z = (0, o.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        N = (A) => {
            let n = E.Sb.getSetting();
            u.wS &&
                n &&
                (0, f.jW)(A, async () => {
                    let { default: A } = await t.e('29646').then(t.bind(t, 955116));
                    return (t) => (0, r.jsx)(A, w(B({}, t), { tag: e }));
                });
        },
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                m
                    ? (0, r.jsx)(v.Z, {
                          className: s()(C.emoji, { [C.small]: L }),
                          emojiId: Q,
                          emojiName: O,
                          animated: !!(null == T ? void 0 : T.animated),
                          size: 'reaction'
                      })
                    : null,
                V &&
                    P &&
                    (0, r.jsx)('div', {
                        className: C.closeCircle,
                        children: (0, r.jsx)(g.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.close
                        })
                    }),
                (0, r.jsx)(g.Text, {
                    variant: L ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: b
                })
            ]
        }),
        R = {
            key: e.id,
            className: s()(
                C.pill,
                {
                    [C.disabled]: i,
                    [C.clickable]: y,
                    [C.small]: L,
                    [C.selected]: p,
                    [C[e.color]]: null != e.color && !y
                },
                D
            ),
            onClick: (A) => {
                (null == M || M(A), null == I || I(e), Z || null == x.current || x.current.blur());
            },
            onContextMenu: (A) => N(A),
            onMouseEnter: () => P && j(!0),
            onMouseLeave: () => P && j(!1)
        },
        G = (0, a.JA)('forum-tag-'.concat(e.id));
    return y
        ? (0, r.jsx)(
              g.P3F,
              w(
                  B(
                      w(B({}, G), {
                          innerRef: x,
                          focusProps: { ringTarget: x },
                          'aria-label': null != H ? H : d.intl.formatToPlainString(d.t.iyRTLi, { tagName: b }),
                          role: 'button',
                          'aria-pressed': p
                      }),
                      R
                  ),
                  { children: S }
              )
          )
        : (0, r.jsx)('div', w(B({}, R), { children: S }));
}
function I(A) {
    let { tags: e, count: t, size: n = 1 } = A,
        l = 0 === n;
    return (0, r.jsx)(g.ua7, {
        'aria-label': d.intl.string(d.t['P/y+sr']),
        text: (0, r.jsx)(r.Fragment, {
            children: e.map((A) =>
                (0, r.jsx)(
                    M,
                    {
                        tag: A,
                        className: C.tooltipPill,
                        size: M.Sizes.SMALL
                    },
                    A.id
                )
            )
        }),
        children: (A) =>
            (0, r.jsx)(
                'div',
                w(B({}, A), {
                    className: s()(C.pill, { [C.small]: l }),
                    children: (0, r.jsxs)(g.Text, {
                        variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', t]
                    })
                })
            )
    });
}
M.Sizes = D;
