n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(979554),
    u = n(442837),
    d = n(481060),
    f = n(987209),
    _ = n(678135),
    p = n(484459),
    h = n(594174),
    m = n(583434),
    g = n(922347),
    E = n(212161),
    b = n(473608),
    y = n(29121),
    O = n(388032),
    v = n(855646);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
    let { skuId: t, isSelected: n, price: a, onSelect: s, shouldDisplayHeader: I = !1, className: S } = e,
        { product: C } = (0, m.T)(t, !0),
        { giftRecipient: N, giftRecipientError: R } = (0, f.wD)(),
        P = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        w = (0, y.kd)(C),
        D = i.useRef(null);
    if (null == C) return null;
    let [x] = C.items;
    l()(null != x, "Product item should not be empty");
    let L = () => {
            if ((null == C ? void 0 : C.type) === c.Z.BUNDLE) return null;
            switch (x.type) {
                case c.Z.AVATAR_DECORATION:
                    return O.intl.string(O.t["7v0T9P"]);
                case c.Z.PROFILE_EFFECT:
                    return O.intl.string(O.t.wR5wOj);
                case c.Z.NAMEPLATE:
                    return O.intl.string(O.t.x5CoXV);
                default:
                    return null;
            }
        },
        M =
            null != N &&
            N.id !== (null == P ? void 0 : P.id) &&
            (x.type === c.Z.AVATAR_DECORATION || x.type === c.Z.PROFILE_EFFECT),
        k = () => {
            null != t && null != s && s(t);
        };
    return (0, r.jsxs)("div", {
        className: S,
        children: [
            I &&
                (0, r.jsx)("div", {
                    className: v.previewTitleContainer,
                    children: (0, r.jsx)(d.gNt, {
                        label: O.intl.string(O.t.PpoJzs),
                        children:
                            M &&
                            (0, r.jsx)(
                                d.yRy,
                                {
                                    targetElementRef: D,
                                    preload: () => (0, p.Z)(N.id, N.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            _.Z,
                                            A(T({}, e), {
                                                user: N,
                                                pendingAvatar: N.getAvatarURL(null, (0, d.pxk)(d.EFr.SIZE_80)),
                                                pendingAvatarDecoration: (0, g.M)(x) ? x : null,
                                                pendingProfileEffect: (0, E.H)(x) ? x : null,
                                                canUsePremiumCustomization: !0,
                                                disabledInputs: !0,
                                                hideExampleButton: !0,
                                            }),
                                        ),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            d.P3F,
                                            A(T({}, e), {
                                                className: v.previewLink,
                                                innerRef: D,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: O.intl.string(O.t["2GnJQE"]),
                                                }),
                                            }),
                                        ),
                                },
                                N.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.P3F, {
                tag: "div",
                onClick: k,
                className: o()(v.previewContainer, {
                    [v.previewContainerSelected]: n && null == R,
                    [v.previewContainerError]: n && null != R,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: v.giftInfoContainer,
                        children: [
                            (0, r.jsx)(b.O, {
                                product: C,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: v.previewTextContainer,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        children: w,
                                    }),
                                    (0, r.jsx)(d.X6q, {
                                        variant: "heading-sm/medium",
                                        color: "header-secondary",
                                        children: L(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                children: a,
                            }),
                        ],
                    }),
                    n &&
                        null != R &&
                        (0, r.jsx)("div", {
                            className: v.recipientError,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "status-danger",
                                children: R,
                            }),
                        }),
                ],
            }),
        ],
    });
};
