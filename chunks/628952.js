n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    i = n(473749),
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
    let {
            skuId: t,
            isSelected: n,
            price: a,
            onSelect: s,
            shouldDisplayHeader: I = !1,
            className: S,
            previewHeaderClassName: C,
            hideProfilePreview: N = !1,
        } = e,
        { product: R } = (0, m.T)(t, !0),
        { giftRecipient: P, giftRecipientError: D } = (0, f.wD)(),
        w = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        L = (0, y.kd)(R),
        x = i.useRef(null);
    if (null == R) return null;
    let [M] = R.items;
    l()(null != M, "Product item should not be empty");
    let k = () => {
            if ((null == R ? void 0 : R.type) === c.Z.BUNDLE) return null;
            switch (M.type) {
                case c.Z.AVATAR_DECORATION:
                    return O.intl.string(O.t["7v0T9P"]);
                case c.Z.PROFILE_EFFECT:
                    return O.intl.string(O.t.wR5wOo);
                case c.Z.NAMEPLATE:
                    return O.intl.string(O.t.x5CoXR);
                default:
                    return null;
            }
        },
        j =
            null != P &&
            P.id !== (null == w ? void 0 : w.id) &&
            R.type !== c.Z.BUNDLE &&
            M.type !== c.Z.NAMEPLATE &&
            !N,
        U = () => {
            null != t && null != s && s(t);
        };
    return (0, r.jsxs)("div", {
        className: S,
        children: [
            I &&
                (0, r.jsx)("div", {
                    className: o()(v.previewTitleContainer, C),
                    children: (0, r.jsx)(d.gNt, {
                        label: O.intl.string(O.t.PpoJzt),
                        children:
                            j &&
                            (0, r.jsx)(
                                d.yRy,
                                {
                                    targetElementRef: x,
                                    preload: () => (0, p.Z)(P.id, P.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            _.Z,
                                            A(T({}, e), {
                                                user: P,
                                                pendingAvatar: P.getAvatarURL(null, (0, d.pxk)(d.EFr.SIZE_80)),
                                                pendingAvatarDecoration: (0, g.M)(M) ? M : null,
                                                pendingProfileEffect: (0, E.H)(M) ? M : null,
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
                                                innerRef: x,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: O.intl.string(O.t["2GnJQL"]),
                                                }),
                                            }),
                                        ),
                                },
                                P.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.P3F, {
                tag: "div",
                onClick: U,
                className: o()(v.previewContainer, {
                    [v.previewContainerSelected]: n && null == D,
                    [v.previewContainerError]: n && null != D,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: v.giftInfoContainer,
                        children: [
                            (0, r.jsx)(b.O, {
                                product: R,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: v.previewTextContainer,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        children: L,
                                    }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "header-secondary",
                                        children: k(),
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
                        null != D &&
                        (0, r.jsx)("div", {
                            className: v.recipientError,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "status-danger",
                                children: D,
                            }),
                        }),
                ],
            }),
        ],
    });
};
