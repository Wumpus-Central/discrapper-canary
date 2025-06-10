n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(979554),
    l = n(442837),
    c = n(481060),
    u = n(987209),
    d = n(678135),
    f = n(484459),
    _ = n(594174),
    p = n(583434),
    h = n(905357),
    m = n(473608),
    g = n(388032),
    E = n(664549);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
    let { skuId: t, isSelected: n, price: a, onSelect: b, shouldDisplayHeader: O = !1, className: I } = e,
        { product: S } = (0, p.T)(t),
        { giftRecipient: T, giftRecipientError: A } = (0, u.wD)(),
        N = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        C = (0, h.k)(S),
        R = i.useRef(null);
    if (null == S) return null;
    let [P] = S.items,
        w = () => {
            switch (P.type) {
                case s.Z.AVATAR_DECORATION:
                    return g.intl.string(g.t['7v0T9P']);
                case s.Z.PROFILE_EFFECT:
                    return g.intl.string(g.t.wR5wOj);
                case s.Z.NAMEPLATE:
                    return g.intl.string(g.t.x5CoXV);
                default:
                    return null;
            }
        },
        D = null != T && T.id !== (null == N ? void 0 : N.id) && P.type !== s.Z.NAMEPLATE,
        L = () => {
            null != t && null != b && b(t);
        };
    return (0, r.jsxs)('div', {
        className: I,
        children: [
            O &&
                (0, r.jsxs)('div', {
                    className: E.previewTitleContainer,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            className: E.previewTitle,
                            children: g.intl.string(g.t.PpoJzs)
                        }),
                        D &&
                            (0, r.jsx)(
                                c.yRy,
                                {
                                    targetElementRef: R,
                                    preload: () => (0, f.Z)(T.id, T.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            d.Z,
                                            v(y({}, e), {
                                                user: T,
                                                pendingAvatar: T.getAvatarURL(null, (0, c.pxk)(c.EFr.SIZE_80)),
                                                pendingAvatarDecoration: P.type === s.Z.AVATAR_DECORATION ? P : null,
                                                pendingProfileEffectId: P.type === s.Z.PROFILE_EFFECT ? P.id : null,
                                                canUsePremiumCustomization: !0,
                                                disabledInputs: !0
                                            })
                                        ),
                                    align: 'center',
                                    position: 'right',
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            v(y({}, e), {
                                                className: E.previewLink,
                                                innerRef: R,
                                                children: (0, r.jsx)(c.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-link',
                                                    children: g.intl.string(g.t['2GnJQE'])
                                                })
                                            })
                                        )
                                },
                                T.id
                            )
                    ]
                }),
            (0, r.jsxs)(c.P3F, {
                tag: 'div',
                onClick: L,
                className: o()(E.previewContainer, {
                    [E.previewContainerSelected]: n && null == A,
                    [E.previewContainerError]: n && null != A
                }),
                children: [
                    (0, r.jsxs)('div', {
                        className: E.giftInfoContainer,
                        children: [
                            (0, r.jsx)(m.O, {
                                product: S,
                                fallbackLabel: null
                            }),
                            (0, r.jsxs)('div', {
                                className: E.previewTextContainer,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        children: C
                                    }),
                                    (0, r.jsx)(c.X6q, {
                                        variant: 'heading-sm/medium',
                                        color: 'header-secondary',
                                        children: w()
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-md/semibold',
                                children: a
                            })
                        ]
                    }),
                    n &&
                        null != A &&
                        (0, r.jsx)('div', {
                            className: E.recipientError,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'status-danger-background',
                                children: A
                            })
                        })
                ]
            })
        ]
    });
};
