var i = r(47120);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(979554),
    u = r(442837),
    c = r(481060),
    d = r(987209),
    f = r(921813),
    p = r(484459),
    h = r(594174),
    _ = r(583434),
    m = r(905357),
    g = r(473608),
    E = r(388032),
    v = r(505069);
let y = (e) => {
    let { skuId: n, isSelected: r, price: i, onSelect: o, shouldDisplayHeader: y = !1, className: b } = e,
        { product: I } = (0, _.T)(n),
        { giftRecipient: T, giftRecipientError: S } = (0, d.wD)(),
        A = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        C = (0, m.k)(I);
    if (null == I) return null;
    let [N] = I.items,
        R = () => (N.type === l.Z.AVATAR_DECORATION ? E.intl.string(E.t['7v0T9P']) : N.type === l.Z.PROFILE_EFFECT ? E.intl.string(E.t.wR5wOj) : null),
        O = null != T && T.id !== (null == A ? void 0 : A.id),
        D = () => {
            null != n && null != o && o(n);
        };
    return (0, a.jsxs)('div', {
        className: b,
        children: [
            y &&
                (0, a.jsxs)('div', {
                    className: v.previewTitleContainer,
                    children: [
                        (0, a.jsx)(c.FormTitle, {
                            className: v.previewTitle,
                            children: E.intl.string(E.t.PpoJzs)
                        }),
                        O &&
                            (0, a.jsx)(
                                c.Popout,
                                {
                                    preload: () => (0, p.Z)(T.id, T.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, a.jsx)(f.Z, {
                                            ...e,
                                            user: T,
                                            pendingAvatar: T.getAvatarURL(null, (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80)),
                                            pendingAvatarDecoration: N.type === l.Z.AVATAR_DECORATION ? N : null,
                                            pendingProfileEffectId: N.type === l.Z.PROFILE_EFFECT ? N.id : null,
                                            canUsePremiumCustomization: !0,
                                            disabledInputs: !0
                                        }),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, a.jsx)(c.Clickable, {
                                            ...e,
                                            className: v.previewLink,
                                            children: (0, a.jsx)(c.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-link',
                                                children: E.intl.string(E.t['2GnJQE'])
                                            })
                                        })
                                },
                                T.id
                            )
                    ]
                }),
            (0, a.jsxs)(c.Clickable, {
                tag: 'div',
                onClick: D,
                className: s()(v.previewContainer, {
                    [v.previewContainerSelected]: r && null == S,
                    [v.previewContainerError]: r && null != S
                }),
                children: [
                    (0, a.jsxs)('div', {
                        className: v.giftInfoContainer,
                        children: [
                            (0, a.jsx)(g.O, {
                                product: I,
                                fallbackLabel: null
                            }),
                            (0, a.jsxs)('div', {
                                className: v.previewTextContainer,
                                children: [
                                    (0, a.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        children: C
                                    }),
                                    (0, a.jsx)(c.Heading, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: R()
                                    })
                                ]
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                children: i
                            })
                        ]
                    }),
                    r &&
                        null != S &&
                        (0, a.jsx)('div', {
                            className: v.recipientError,
                            children: (0, a.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: S
                            })
                        })
                ]
            })
        ]
    });
};
n.Z = y;
