n.d(t, { Z: () => O }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(979554),
    s = n(442837),
    l = n(481060),
    c = n(987209),
    u = n(921813),
    d = n(484459),
    f = n(594174),
    _ = n(583434),
    p = n(905357),
    h = n(473608),
    m = n(388032),
    g = n(664549);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = (e) => {
    let { skuId: t, isSelected: n, price: i, onSelect: E, shouldDisplayHeader: y = !1, className: O } = e,
        { product: I } = (0, _.T)(t),
        { giftRecipient: S, giftRecipientError: T } = (0, c.wD)(),
        N = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        A = (0, p.k)(I);
    if (null == I) return null;
    let [C] = I.items,
        R = () => (C.type === a.Z.AVATAR_DECORATION ? m.NW.string(m.t['7v0T9P']) : C.type === a.Z.PROFILE_EFFECT ? m.NW.string(m.t.wR5wOj) : null),
        P = null != S && S.id !== (null == N ? void 0 : N.id),
        w = () => {
            null != t && null != E && E(t);
        };
    return (0, r.jsxs)('div', {
        className: O,
        children: [
            y &&
                (0, r.jsxs)('div', {
                    className: g.previewTitleContainer,
                    children: [
                        (0, r.jsx)(l.vwX, {
                            className: g.previewTitle,
                            children: m.NW.string(m.t.PpoJzs)
                        }),
                        P &&
                            (0, r.jsx)(
                                l.yRy,
                                {
                                    preload: () => (0, d.Z)(S.id, S.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            u.Z,
                                            v(b({}, e), {
                                                user: S,
                                                pendingAvatar: S.getAvatarURL(null, (0, l.pxk)(l.EFr.SIZE_80)),
                                                pendingAvatarDecoration: C.type === a.Z.AVATAR_DECORATION ? C : null,
                                                pendingProfileEffectId: C.type === a.Z.PROFILE_EFFECT ? C.id : null,
                                                canUsePremiumCustomization: !0,
                                                disabledInputs: !0
                                            })
                                        ),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, r.jsx)(
                                            l.P3F,
                                            v(b({}, e), {
                                                className: g.previewLink,
                                                children: (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-link',
                                                    children: m.NW.string(m.t['2GnJQE'])
                                                })
                                            })
                                        )
                                },
                                S.id
                            )
                    ]
                }),
            (0, r.jsxs)(l.P3F, {
                tag: 'div',
                onClick: w,
                className: o()(g.previewContainer, {
                    [g.previewContainerSelected]: n && null == T,
                    [g.previewContainerError]: n && null != T
                }),
                children: [
                    (0, r.jsxs)('div', {
                        className: g.giftInfoContainer,
                        children: [
                            (0, r.jsx)(h.O, {
                                product: I,
                                fallbackLabel: null
                            }),
                            (0, r.jsxs)('div', {
                                className: g.previewTextContainer,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/semibold',
                                        children: A
                                    }),
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: R()
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                children: i
                            })
                        ]
                    }),
                    n &&
                        null != T &&
                        (0, r.jsx)('div', {
                            className: g.recipientError,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: T
                            })
                        })
                ]
            })
        ]
    });
};
