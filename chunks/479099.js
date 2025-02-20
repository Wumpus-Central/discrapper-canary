n.d(t, {
    Z: () => _,
    f: () => b
}),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(91192),
    u = n(442837),
    d = n(481060),
    c = n(239091),
    h = n(596454),
    f = n(607070),
    p = n(339085),
    g = n(695346),
    v = n(572004),
    C = n(388032),
    E = n(250486);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var S = (((i = S || {})[(i.SMALL = 0)] = 'SMALL'), (i[(i.MEDIUM = 1)] = 'MEDIUM'), i);
function _(e) {
    let { tag: t, size: i = 1, disabled: o, className: S, onClick: _, onRemove: b, selected: I, ariaLabel: y } = e,
        { name: N, emojiId: T, emojiName: P } = t,
        w = null != b,
        [A, j] = l.useState(!1),
        L = (0, u.e7)([p.ZP], () => (null != T ? p.ZP.getUsableCustomEmojiById(T) : null)),
        D = w || null != _,
        R = (!w || !A) && (null != T || null != P),
        Z = 0 === i,
        M = l.useRef(null),
        U = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        x = (e) => {
            let i = g.Sb.getSetting();
            v.wS &&
                i &&
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('29646').then(n.bind(n, 955116));
                    return (n) => (0, r.jsx)(e, m(O({}, n), { tag: t }));
                });
        },
        G = (0, r.jsxs)(r.Fragment, {
            children: [
                R
                    ? (0, r.jsx)(h.Z, {
                          className: s()(E.emoji, { [E.small]: Z }),
                          emojiId: T,
                          emojiName: P,
                          animated: !!(null == L ? void 0 : L.animated),
                          size: 'reaction'
                      })
                    : null,
                A &&
                    w &&
                    (0, r.jsx)('div', {
                        className: E.closeCircle,
                        children: (0, r.jsx)(d.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.close
                        })
                    }),
                (0, r.jsx)(d.Text, {
                    variant: Z ? 'text-xs/semibold' : 'text-sm/semibold',
                    lineClamp: 1,
                    color: 'currentColor',
                    children: N
                })
            ]
        }),
        F = {
            key: t.id,
            className: s()(
                E.pill,
                {
                    [E.disabled]: o,
                    [E.clickable]: D,
                    [E.small]: Z,
                    [E.selected]: I
                },
                S
            ),
            onClick: (e) => {
                null == _ || _(e), null == b || b(t), U || null == M.current || M.current.blur();
            },
            onContextMenu: (e) => x(e),
            onMouseEnter: () => w && j(!0),
            onMouseLeave: () => w && j(!1)
        },
        H = (0, a.JA)('forum-tag-'.concat(t.id));
    return D
        ? (0, r.jsx)(
              d.P3F,
              m(
                  O(
                      m(O({}, H), {
                          innerRef: M,
                          focusProps: { ringTarget: M },
                          'aria-label': null != y ? y : C.NW.formatToPlainString(C.t.iyRTLi, { tagName: N }),
                          role: 'button',
                          'aria-pressed': I
                      }),
                      F
                  ),
                  { children: G }
              )
          )
        : (0, r.jsx)('div', m(O({}, F), { children: G }));
}
function b(e) {
    let { tags: t, count: n, size: i = 1 } = e,
        l = 0 === i;
    return (0, r.jsx)(d.ua7, {
        'aria-label': C.NW.string(C.t['P/y+sr']),
        text: (0, r.jsx)(r.Fragment, {
            children: t.map((e) =>
                (0, r.jsx)(
                    _,
                    {
                        tag: e,
                        className: E.tooltipPill,
                        size: _.Sizes.SMALL
                    },
                    e.id
                )
            )
        }),
        children: (e) =>
            (0, r.jsx)(
                'div',
                m(O({}, e), {
                    className: s()(E.pill, { [E.small]: l }),
                    children: (0, r.jsxs)(d.Text, {
                        variant: l ? 'text-xs/semibold' : 'text-sm/semibold',
                        children: ['+', n]
                    })
                })
            )
    });
}
_.Sizes = S;
