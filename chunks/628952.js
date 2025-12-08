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
    p = n(678135),
    _ = n(484459),
    m = n(594174),
    h = n(583434),
    g = n(922347),
    E = n(212161),
    b = n(473608),
    y = n(29121),
    O = n(388032),
    v = n(855646);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
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
            shouldDisplayHeader: S = !1,
            className: T,
            previewHeaderClassName: C,
            hideProfilePreview: N = !1,
        } = e,
        { product: P } = (0, h.T)(t, !0),
        { giftRecipient: R, giftRecipientError: w } = (0, f.wD)(),
        D = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
        x = (0, y.kd)(P),
        L = i.useRef(null);
    if (null == P) return null;
    let [j] = P.items;
    l()(null != j, "Product item should not be empty");
    let M = () => {
            if ((null == P ? void 0 : P.type) === c.Z.BUNDLE) return null;
            switch (j.type) {
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
        k =
            null != R &&
            R.id !== (null == D ? void 0 : D.id) &&
            P.type !== c.Z.BUNDLE &&
            j.type !== c.Z.NAMEPLATE &&
            !N,
        U = () => {
            null != t && null != s && s(t);
        };
    return (0, r.jsxs)("div", {
        className: T,
        children: [
            S &&
                (0, r.jsx)("div", {
                    className: o()(v.previewTitleContainer, C),
                    children: (0, r.jsx)(d.gNt, {
                        label: O.intl.string(O.t.PpoJzt),
                        children:
                            k &&
                            (0, r.jsx)(
                                d.yRy,
                                {
                                    targetElementRef: L,
                                    preload: () => (0, _.Z)(R.id, R.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            p.Z,
                                            A(I({}, e), {
                                                user: R,
                                                pendingAvatar: R.getAvatarURL(null, (0, d.dcp)(d.EFr.SIZE_80)),
                                                pendingAvatarDecoration: (0, g.M)(j) ? j : null,
                                                pendingProfileEffect: (0, E.H)(j) ? j : null,
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
                                            A(I({}, e), {
                                                className: v.previewLink,
                                                innerRef: L,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: O.intl.string(O.t["2GnJQL"]),
                                                }),
                                            }),
                                        ),
                                },
                                R.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.P3F, {
                tag: "div",
                onClick: U,
                className: o()(v.previewContainer, {
                    [v.previewContainerSelected]: n && null == w,
                    [v.previewContainerError]: n && null != w,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: v.giftInfoContainer,
                        children: [
                            (0, r.jsx)(b.O, {
                                product: P,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: v.previewTextContainer,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        children: x,
                                    }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: M(),
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
                        null != w &&
                        (0, r.jsx)("div", {
                            className: v.recipientError,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "status-danger",
                                children: w,
                            }),
                        }),
                ],
            }),
        ],
    });
};
