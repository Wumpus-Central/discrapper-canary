n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(979554),
    o = n(442837),
    l = n(481060),
    u = n(987209),
    c = n(921813),
    d = n(484459),
    f = n(594174),
    _ = n(583434),
    p = n(905357),
    h = n(473608),
    m = n(388032),
    g = n(928605);
let E = (e) => {
    let { skuId: t, isSelected: n, price: r, onSelect: E, shouldDisplayHeader: v = !1, className: y } = e,
        { product: I } = (0, _.T)(t),
        { giftRecipient: T, giftRecipientError: b } = (0, u.wD)(),
        S = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        A = (0, p.k)(I);
    if (null == I) return null;
    let [N] = I.items,
        C = () => (N.type === s.Z.AVATAR_DECORATION ? m.intl.string(m.t['7v0T9P']) : N.type === s.Z.PROFILE_EFFECT ? m.intl.string(m.t.wR5wOj) : null),
        R = null != T && T.id !== (null == S ? void 0 : S.id),
        O = () => {
            null != t && null != E && E(t);
        };
    return (0, i.jsxs)('div', {
        className: y,
        children: [
            v &&
                (0, i.jsxs)('div', {
                    className: g.previewTitleContainer,
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: g.previewTitle,
                            children: m.intl.string(m.t.PpoJzs)
                        }),
                        R &&
                            (0, i.jsx)(
                                l.yRy,
                                {
                                    preload: () => (0, d.Z)(T.id, T.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, i.jsx)(c.Z, {
                                            ...e,
                                            user: T,
                                            pendingAvatar: T.getAvatarURL(null, (0, l.pxk)(l.EFr.SIZE_80)),
                                            pendingAvatarDecoration: N.type === s.Z.AVATAR_DECORATION ? N : null,
                                            pendingProfileEffectId: N.type === s.Z.PROFILE_EFFECT ? N.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, i.jsx)(l.P3F, {
                                            ...e,
                                            className: g.previewLink,
                                            children: (0, i.jsx)(l.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: m.intl.string(m.t['2GnJQE'])
                                            })
                                        })
                                },
                                T.id
                            )
                    ]
                }),
            (0, i.jsxs)(l.P3F, {
                tag: 'div',
                onClick: O,
                className: a()(g.previewContainer, {
                    [g.previewContainerSelected]: n && null == b,
                    [g.previewContainerError]: n && null != b
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: g.giftInfoContainer,
                        children: [
                            (0, i.jsx)(h.O, {
                                product: I,
                                fallbackLabel: null
                            }),
                            (0, i.jsxs)('div', {
                                className: g.previewTextContainer,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-md/semibold',
                                        children: A
                                    }),
                                    (0, i.jsx)(l.X6q, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: C()
                                    })
                                ]
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: r
                            })
                        ]
                    }),
                    n &&
                        null != b &&
                        (0, i.jsx)('div', {
                            className: g.recipientError,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: b
                            })
                        })
                ]
            })
        ]
    });
};
