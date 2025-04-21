n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
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
function _(e, t) {
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
let v = function (e) {
    var t, l, v, O, C;
    let { guildId: y, action: N, actionIndex: I, onChange: E, onDelete: S, onDragStart: T, onDragComplete: P, onDragReset: w } = e,
        R = (0, a.e7)([p.Z], () => p.Z.getChannel(N.channelId)),
        Z = (0, a.e7)([h.Z], () => h.Z.getGuild(y)),
        { customEmoji: D, unicodeEmoji: A } = (0, u.Z)(null == (t = N.emoji) ? void 0 : t.id, null == (l = N.emoji) ? void 0 : l.name),
        k = null == N.emoji || null != D || null != A,
        L = f.ZP.getNewMemberActionIconURL({
            channelId: N.channelId,
            icon: N.icon
        }),
        M = null;
    null != R && (0, m.kb)(R) ? k || (M = x.intl.string(x.t.wAkIZW)) : (M = x.intl.string(x.t.CbTEKC));
    let {
            drag: G,
            dragSourcePosition: U,
            drop: B,
            setIsDraggable: F
        } = (0, d.Z)({
            type: 'NEW_MEMBER_ACTION',
            index: I,
            optionId: N.channelId,
            onDragStart: T,
            onDragComplete: P,
            onDragReset: w
        }),
        z = i.useCallback(() => {
            if (null != y)
                return (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            _(j({}, t), {
                                guildId: y,
                                action: N,
                                onSave: (e, t, n) => E(I, e, t, n),
                                onDelete: () => S(I)
                            })
                        );
                });
        }, [y, N, I, E, S]);
    if (null == R || null == Z) return null;
    let H = null != (C = (0, c.KS)(R)) ? C : o.VL1;
    return (0, r.jsxs)('div', {
        className: b.actionItemContainer,
        children: [
            (0, r.jsxs)('div', {
                className: s()(b.actionItem, {
                    [b.dropIndicatorBefore]: null != U && I < U,
                    [b.dropIndicatorAfter]: null != U && I > U,
                    [b.actionItemError]: null != M
                }),
                ref: (e) => {
                    G(B(e));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: b.dragContainer,
                        onMouseEnter: () => F(!0),
                        onMouseLeave: () => F(!1),
                        children: (0, r.jsx)(o.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.dragIcon
                        })
                    }),
                    null != L
                        ? (0, r.jsx)('div', {
                              className: b.iconWrapper,
                              children: (0, r.jsx)('img', {
                                  src: L,
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
                                  emojiId: null == (v = N.emoji) ? void 0 : v.id,
                                  emojiName: null == (O = N.emoji) ? void 0 : O.name,
                                  size: g.R.MEDIUM,
                                  defaultComponent: (0, r.jsx)(H, {})
                              })
                          }),
                    (0, r.jsxs)('div', {
                        className: b.actionItemText,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: N.title
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: x.intl.format(x.t.Ngk8Nj, { channelName: R.name })
                            })
                        ]
                    }),
                    (0, r.jsx)(o.ua7, {
                        text: x.intl.string(x.t.bt75u7),
                        children: (e) =>
                            (0, r.jsxs)(
                                o.zxk,
                                _(j({}, e), {
                                    className: b.actionItemEditButton,
                                    innerClassName: b.actionItemEditButtonInner,
                                    size: o.zxk.Sizes.MIN,
                                    onClick: z,
                                    children: [
                                        (0, r.jsx)(o.vdY, {
                                            size: 'md',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(o.nn4, { children: x.intl.string(x.t.bt75u7) })
                                    ]
                                })
                            )
                    })
                ]
            }),
            null != M &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    children: M
                })
        ]
    });
};
