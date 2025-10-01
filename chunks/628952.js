n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
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
    h = n(922347),
    m = n(212161),
    g = n(473608),
    E = n(29121),
    b = n(388032),
    y = n(942501);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
    let { skuId: t, isSelected: n, price: a, onSelect: O, shouldDisplayHeader: I = !1, className: S } = e,
        { product: A } = (0, p.T)(t),
        { giftRecipient: C, giftRecipientError: N } = (0, u.wD)(),
        R = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        P = (0, E.kd)(A),
        w = i.useRef(null);
    if (null == A) return null;
    let [D] = A.items,
        L = () => {
            switch (D.type) {
                case s.Z.AVATAR_DECORATION:
                    return b.intl.string(b.t["7v0T9P"]);
                case s.Z.PROFILE_EFFECT:
                    return b.intl.string(b.t.wR5wOj);
                case s.Z.NAMEPLATE:
                    return b.intl.string(b.t.x5CoXV);
                default:
                    return null;
            }
        },
        x = null != C && C.id !== (null == R ? void 0 : R.id) && D.type !== s.Z.NAMEPLATE,
        j = () => {
            null != t && null != O && O(t);
        };
    return (0, r.jsxs)("div", {
        className: S,
        children: [
            I &&
                (0, r.jsxs)("div", {
                    className: y.previewTitleContainer,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            className: y.previewTitle,
                            children: b.intl.string(b.t.PpoJzs),
                        }),
                        x &&
                            (0, r.jsx)(
                                c.yRy,
                                {
                                    targetElementRef: w,
                                    preload: () => (0, f.Z)(C.id, C.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            d.Z,
                                            T(v({}, e), {
                                                user: C,
                                                pendingAvatar: C.getAvatarURL(null, (0, c.pxk)(c.EFr.SIZE_80)),
                                                pendingAvatarDecoration: (0, h.M)(D) ? D : null,
                                                pendingProfileEffect: (0, m.H)(D) ? D : null,
                                                canUsePremiumCustomization: !0,
                                                disabledInputs: !0,
                                                hideExampleButton: !0,
                                            }),
                                        ),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            T(v({}, e), {
                                                className: y.previewLink,
                                                innerRef: w,
                                                children: (0, r.jsx)(c.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: b.intl.string(b.t["2GnJQE"]),
                                                }),
                                            }),
                                        ),
                                },
                                C.id,
                            ),
                    ],
                }),
            (0, r.jsxs)(c.P3F, {
                tag: "div",
                onClick: j,
                className: o()(y.previewContainer, {
                    [y.previewContainerSelected]: n && null == N,
                    [y.previewContainerError]: n && null != N,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: y.giftInfoContainer,
                        children: [
                            (0, r.jsx)(g.O, {
                                product: A,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: y.previewTextContainer,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        children: P,
                                    }),
                                    (0, r.jsx)(c.X6q, {
                                        variant: "heading-sm/medium",
                                        color: "header-secondary",
                                        children: L(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                children: a,
                            }),
                        ],
                    }),
                    n &&
                        null != N &&
                        (0, r.jsx)("div", {
                            className: y.recipientError,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "status-danger",
                                children: N,
                            }),
                        }),
                ],
            }),
        ],
    });
};
