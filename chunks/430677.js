n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(399606),
    o = n(481060),
    c = n(471445),
    d = n(603211),
    u = n(307707),
    m = n(734893),
    g = n(216701),
    p = n(592125),
    h = n(430824),
    f = n(768581),
    x = n(388032),
    b = n(773100);
function j(e) {
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
function N(e, t) {
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
let _ = function (e) {
    var t, s, _, v, O;
    let { guildId: C, action: y, actionIndex: I, onChange: E, onDelete: S, onDragStart: T, onDragComplete: P, onDragReset: w } = e,
        R = (0, a.e7)([p.Z], () => p.Z.getChannel(y.channelId)),
        Z = (0, a.e7)([h.Z], () => h.Z.getGuild(C)),
        { customEmoji: D, unicodeEmoji: A } = (0, u.Z)(null == (t = y.emoji) ? void 0 : t.id, null == (s = y.emoji) ? void 0 : s.name),
        k = null == y.emoji || null != D || null != A,
        W = f.ZP.getNewMemberActionIconURL({
            channelId: y.channelId,
            icon: y.icon
        }),
        L = null;
    null != R && (0, m.kb)(R) ? k || (L = x.NW.string(x.t.wAkIZW)) : (L = x.NW.string(x.t.CbTEKC));
    let {
            drag: M,
            dragSourcePosition: G,
            drop: U,
            setIsDraggable: B
        } = (0, d.Z)({
            type: 'NEW_MEMBER_ACTION',
            index: I,
            optionId: y.channelId,
            onDragStart: T,
            onDragComplete: P,
            onDragReset: w
        }),
        F = i.useCallback(() => {
            if (null != C)
                return (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            N(j({}, t), {
                                guildId: C,
                                action: y,
                                onSave: (e, t, n) => E(I, e, t, n),
                                onDelete: () => S(I)
                            })
                        );
                });
        }, [C, y, I, E, S]);
    if (null == R || null == Z) return null;
    let z = null != (O = (0, c.KS)(R)) ? O : o.VL1;
    return (0, r.jsxs)('div', {
        className: b.actionItemContainer,
        children: [
            (0, r.jsxs)('div', {
                className: l()(b.actionItem, {
                    [b.dropIndicatorBefore]: null != G && I < G,
                    [b.dropIndicatorAfter]: null != G && I > G,
                    [b.actionItemError]: null != L
                }),
                ref: (e) => {
                    M(U(e));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: b.dragContainer,
                        onMouseEnter: () => B(!0),
                        onMouseLeave: () => B(!1),
                        children: (0, r.jsx)(o.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.dragIcon
                        })
                    }),
                    null != W
                        ? (0, r.jsx)('div', {
                              className: b.iconWrapper,
                              children: (0, r.jsx)('img', {
                                  src: W,
                                  className: b.icon,
                                  width: 48,
                                  height: 48,
                                  alt: '',
                                  'aria-hidden': !0
                              })
                          })
                        : (0, r.jsx)('div', {
                              className: b.actionItemEmojiWrapper,
                              children: (0, r.jsx)(g.Z, {
                                  emojiId: null == (_ = y.emoji) ? void 0 : _.id,
                                  emojiName: null == (v = y.emoji) ? void 0 : v.name,
                                  size: g.R.MEDIUM,
                                  defaultComponent: (0, r.jsx)(z, {})
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: b.actionItemText,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: y.title
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: x.NW.format(x.t.Ngk8Nj, { channelName: R.name })
                            })
                        ]
                    }),
                    (0, r.jsx)(o.ua7, {
                        text: x.NW.string(x.t.bt75u7),
                        children: (e) =>
                            (0, r.jsxs)(
                                o.zxk,
                                N(j({}, e), {
                                    className: b.actionItemEditButton,
                                    innerClassName: b.actionItemEditButtonInner,
                                    size: o.zxk.Sizes.MIN,
                                    onClick: F,
                                    children: [
                                        (0, r.jsx)(o.vdY, {
                                            size: 'md',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(o.nn4, { children: x.NW.string(x.t.bt75u7) })
                                    ]
                                })
                            )
                    })
                ]
            }),
            null != L &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    children: L
                })
        ]
    });
};
