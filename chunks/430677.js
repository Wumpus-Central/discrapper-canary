n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(755721),
    c = n(481060),
    d = n(471445),
    u = n(603211),
    m = n(307707),
    g = n(734893),
    p = n(216701),
    f = n(592125),
    h = n(430824),
    x = n(768581),
    b = n(388032),
    j = n(773100);
function _(e) {
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
function v(e, t) {
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
let O = function (e) {
    var t, l, O, C, y;
    let { guildId: N, action: I, actionIndex: E, onChange: S, onDelete: T, onDragStart: P, onDragComplete: w, onDragReset: R } = e,
        Z = (0, a.e7)([f.Z], () => f.Z.getChannel(I.channelId)),
        D = (0, a.e7)([h.Z], () => h.Z.getGuild(N)),
        { customEmoji: A, unicodeEmoji: L } = (0, m.Z)(null == (t = I.emoji) ? void 0 : t.id, null == (l = I.emoji) ? void 0 : l.name),
        k = null == I.emoji || null != A || null != L,
        M = x.ZP.getNewMemberActionIconURL({
            channelId: I.channelId,
            icon: I.icon
        }),
        G = null;
    null != Z && (0, g.kb)(Z) ? k || (G = b.intl.string(b.t.wAkIZW)) : (G = b.intl.string(b.t.CbTEKC));
    let {
            drag: U,
            dragSourcePosition: B,
            drop: F,
            setIsDraggable: z
        } = (0, u.Z)({
            type: 'NEW_MEMBER_ACTION',
            index: E,
            optionId: I.channelId,
            onDragStart: P,
            onDragComplete: w,
            onDragReset: R
        }),
        H = i.useCallback(() => {
            if (null != N)
                return (0, c.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            v(_({}, t), {
                                guildId: N,
                                action: I,
                                onSave: (e, t, n) => S(E, e, t, n),
                                onDelete: () => T(E)
                            })
                        );
                });
        }, [N, I, E, S, T]);
    if (null == Z || null == D) return null;
    let V = null != (y = (0, d.KS)(Z)) ? y : c.VL1;
    return (0, r.jsxs)('div', {
        className: j.actionItemContainer,
        children: [
            (0, r.jsxs)('div', {
                className: s()(j.actionItem, {
                    [j.dropIndicatorBefore]: null != B && E < B,
                    [j.dropIndicatorAfter]: null != B && E > B,
                    [j.actionItemError]: null != G
                }),
                ref: (e) => {
                    U(F(e));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: j.dragContainer,
                        onMouseEnter: () => z(!0),
                        onMouseLeave: () => z(!1),
                        children: (0, r.jsx)(c.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: j.dragIcon
                        })
                    }),
                    null != M
                        ? (0, r.jsx)('div', {
                              className: j.iconWrapper,
                              children: (0, r.jsx)('img', {
                                  src: M,
                                  className: j.icon,
                                  width: 48,
                                  height: 48,
                                  alt: '',
                                  'aria-hidden': !0
                              })
                          })
                        : (0, r.jsx)('div', {
                              className: j.actionItemEmojiWrapper,
                              children: (0, r.jsx)(p.Z, {
                                  emojiId: null == (O = I.emoji) ? void 0 : O.id,
                                  emojiName: null == (C = I.emoji) ? void 0 : C.name,
                                  size: p.R.MEDIUM,
                                  defaultComponent: (0, r.jsx)(V, {})
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: j.actionItemText,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: I.title
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: b.intl.format(b.t.Ngk8Nj, { channelName: Z.name })
                            })
                        ]
                    }),
                    (0, r.jsx)(c.ua7, {
                        text: b.intl.string(b.t.bt75u7),
                        children: (e) =>
                            (0, r.jsxs)(
                                o.zx,
                                v(_({}, e), {
                                    className: j.actionItemEditButton,
                                    innerClassName: j.actionItemEditButtonInner,
                                    size: o.zx.Sizes.MIN,
                                    onClick: H,
                                    children: [
                                        (0, r.jsx)(c.vdY, {
                                            size: 'md',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(c.nn4, { children: b.intl.string(b.t.bt75u7) })
                                    ]
                                })
                            )
                    })
                ]
            }),
            null != G &&
                (0, r.jsx)(c.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    children: G
                })
        ]
    });
};
