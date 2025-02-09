n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    c = n(471445),
    d = n(603211),
    u = n(307707),
    m = n(734893),
    h = n(216701),
    g = n(592125),
    x = n(430824),
    p = n(768581),
    _ = n(388032),
    C = n(767837);
let f = function (e) {
    var t, l, f, v, N;
    let { guildId: j, action: I, actionIndex: E, onChange: b, onDelete: T, onDragStart: S, onDragComplete: R, onDragReset: Z } = e,
        y = (0, a.e7)([g.Z], () => g.Z.getChannel(I.channelId)),
        A = (0, a.e7)([x.Z], () => x.Z.getGuild(j)),
        { customEmoji: L, unicodeEmoji: D } = (0, u.Z)(null === (t = I.emoji) || void 0 === t ? void 0 : t.id, null === (l = I.emoji) || void 0 === l ? void 0 : l.name),
        O = null == I.emoji || null != L || null != D,
        k = p.ZP.getNewMemberActionIconURL({
            channelId: I.channelId,
            icon: I.icon
        }),
        P = null;
    null != y && (0, m.kb)(y) ? O || (P = _.intl.string(_.t.wAkIZW)) : (P = _.intl.string(_.t.CbTEKC));
    let {
            drag: w,
            dragSourcePosition: M,
            drop: U,
            setIsDraggable: G
        } = (0, d.Z)({
            type: 'NEW_MEMBER_ACTION',
            index: E,
            optionId: I.channelId,
            onDragStart: S,
            onDragComplete: R,
            onDragReset: Z
        }),
        B = r.useCallback(() => {
            if (null != j)
                return (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('14653').then(n.bind(n, 380716));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guildId: j,
                            action: I,
                            onSave: (e, t, n) => b(E, e, t, n),
                            onDelete: () => T(E)
                        });
                });
        }, [j, I, E, b, T]);
    if (null == y || null == A) return null;
    let F = null !== (N = (0, c.KS)(y)) && void 0 !== N ? N : o.VL1;
    return (0, i.jsxs)('div', {
        className: s()(C.actionItemContainer),
        children: [
            (0, i.jsxs)('div', {
                className: s()(C.actionItem, {
                    [C.dropIndicatorBefore]: null != M && E < M,
                    [C.dropIndicatorAfter]: null != M && E > M,
                    [C.actionItemError]: null != P
                }),
                ref: (e) => w(U(e)),
                children: [
                    (0, i.jsx)('div', {
                        className: C.dragContainer,
                        onMouseEnter: () => G(!0),
                        onMouseLeave: () => G(!1),
                        children: (0, i.jsx)(o.Vni, {
                            size: 'xs',
                            color: 'currentColor',
                            className: C.dragIcon
                        })
                    }),
                    null != k
                        ? (0, i.jsx)('div', {
                              className: C.iconWrapper,
                              children: (0, i.jsx)('img', {
                                  src: k,
                                  className: C.icon,
                                  width: 48,
                                  height: 48,
                                  alt: '',
                                  'aria-hidden': !0
                              })
                          })
                        : (0, i.jsx)('div', {
                              className: C.actionItemEmojiWrapper,
                              children: (0, i.jsx)(h.Z, {
                                  emojiId: null === (f = I.emoji) || void 0 === f ? void 0 : f.id,
                                  emojiName: null === (v = I.emoji) || void 0 === v ? void 0 : v.name,
                                  size: h.R.MEDIUM,
                                  defaultComponent: (0, i.jsx)(F, {})
                              })
                          }),
                    (0, i.jsxs)('div', {
                        className: C.actionItemText,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: I.title
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                children: _.intl.format(_.t.Ngk8Nj, { channelName: y.name })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.ua7, {
                        text: _.intl.string(_.t.bt75u7),
                        children: (e) =>
                            (0, i.jsxs)(o.zxk, {
                                ...e,
                                className: C.actionItemEditButton,
                                innerClassName: C.actionItemEditButtonInner,
                                size: o.zxk.Sizes.MIN,
                                onClick: B,
                                children: [
                                    (0, i.jsx)(o.vdY, {
                                        size: 'md',
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)(o.nn4, { children: _.intl.string(_.t.bt75u7) })
                                ]
                            })
                    })
                ]
            }),
            null != P &&
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    children: P
                })
        ]
    });
};
