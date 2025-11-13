n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(468194),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    f = n(330726),
    _ = n(691251),
    p = n(626135),
    h = n(285651),
    m = n(373228),
    g = n(378233),
    E = n(419922),
    b = n(490095),
    y = n(981631),
    O = n(388032),
    v = n(940992);
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
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = (0, l.Mg)(v.__invalid_stickerPickerPreviewDimensions),
    P = (0, l.Mg)(v.__invalid_stickerPickerPreviewPadding),
    D = 250,
    w = i.memo(function (e) {
        let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: a = !0,
                getStickerItemProps: l,
                getStickerRowProps: I,
                gutterWidth: S,
                inspectedStickerPosition: N,
                isScrolling: w,
                isUsingKeyboardNavigation: x,
                onInspect: L,
                onSelect: M,
                rowIndex: j,
                stickerClassName: k,
                stickerDescriptors: U,
                stickerPadding: G = P,
                stickerSize: B = R,
                ownedStickerPacks: Z,
                enlargeOnInteraction: F = !1,
                channel: V,
                currentUser: H,
                checkSendability: Y = !0,
            } = e,
            { location: W } = (0, d.O)(),
            K = B + 2 * G,
            z = i.useMemo(
                () => ({
                    gridColumnGap: S,
                    gridTemplateColumns: "repeat(auto-fill, ".concat(K, "px)"),
                    height: K,
                    paddingRight: t ? void 0 : K,
                }),
                [t, S, K],
            ),
            q = i.useMemo(
                () => ({
                    width: B,
                    height: B,
                    padding: G,
                }),
                [G, B],
            ),
            [X, Q] = (0, f.Z)(null, 300);
        return (0, r.jsx)(
            "div",
            A(
                T(
                    {
                        className: v.row,
                        style: z,
                    },
                    null == I ? void 0 : I(j),
                ),
                {
                    children: U.map((e) => {
                        var d;
                        let f =
                                e.visibleRowIndex === (null == N ? void 0 : N.rowIndex) &&
                                e.columnIndex === (null == N ? void 0 : N.columnIndex),
                            I = e.type === m.al.STICKER && F && f,
                            S = (t) => {
                                if ((null == w ? void 0 : w.current) === !0 || (null == x ? void 0 : x.current) === !0)
                                    return;
                                let n = t.altKey;
                                n && e.type === m.al.STICKER && !(0, g.gM)(e.sticker.id) && Q(e.sticker.id),
                                    null == M || M(e, n);
                            },
                            R = (0, s.throttle)(() => {
                                (null == w ? void 0 : w.current) === !0 ||
                                    (null == x ? void 0 : x.current) === !0 ||
                                    f ||
                                    null == L ||
                                    L(e);
                            }, D),
                            P = () => {
                                e.type === m.al.CREATE_STICKER &&
                                    (p.default.track(y.rMx.OPEN_MODAL, {
                                        type: y.jXE.CREATE_STICKER_MODAL,
                                        location: W,
                                    }),
                                    (0, c.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e("93626"), n.e("97162")]).then(
                                            n.bind(n, 136735),
                                        );
                                        return (n) => (0, r.jsx)(t, T({ guildId: e.guild_id }, n));
                                    }));
                            },
                            U = null != (d = null == l ? void 0 : l(e.columnIndex, j)) ? d : {},
                            { ref: G, tabIndex: K, onFocus: z } = U,
                            J = C(U, ["ref", "tabIndex", "onFocus"]);
                        switch (e.type) {
                            case m.al.CREATE_STICKER:
                                return (0, r.jsx)(
                                    "div",
                                    A(T({}, J), {
                                        children: (0, r.jsxs)(c.P3F, {
                                            "aria-label": e.name,
                                            className: o()(v.createSticker, k, { [v.createInspected]: f }),
                                            innerRef: G,
                                            tabIndex: K,
                                            onFocus: null != z ? z : R,
                                            onMouseMove: R,
                                            onClick: P,
                                            style: q,
                                            children: [
                                                !F && (0, r.jsx)("div", { className: v.inspectedIndicator }),
                                                (0, r.jsx)("div", {
                                                    className: v.iconWrapper,
                                                    children: (0, r.jsx)(c.qJs, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: v.icon,
                                                    }),
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    color: "interactive-active",
                                                    variant: "text-xs/normal",
                                                    children: O.intl.string(O.t["+nEuqr"]),
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.guild_id,
                                );
                            case m.al.STICKER: {
                                let s = t && null != Z && (0, g.jl)(e.sticker) && !Z.has(e.sticker.pack_id),
                                    l = (e) => {
                                        (0, u.jW)(e, async () => {
                                            let { default: e } = await n.e("39010").then(n.bind(n, 269254));
                                            return (t) => (0, r.jsx)(e, T({}, t));
                                        });
                                    };
                                return (0, i.createElement)(
                                    "div",
                                    A(T({}, J), { key: e.sticker.id }),
                                    (0, r.jsxs)(c.P3F, {
                                        className: o()(v.sticker, k, {
                                            [v.stickerInspected]: f,
                                            [v.showPulse]: X === e.sticker.id,
                                        }),
                                        innerRef: G,
                                        tabIndex: K,
                                        onFocus: null != z ? z : R,
                                        onMouseMove: R,
                                        onClick: S,
                                        onContextMenu: l,
                                        style: q,
                                        "data-type": _.S.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [
                                            (0, r.jsx)(c.nn4, { children: (0, E.C)(e.sticker) }),
                                            (0, r.jsxs)("div", {
                                                "aria-hidden": !0,
                                                children: [
                                                    !F && (0, r.jsx)("div", { className: v.inspectedIndicator }),
                                                    (0, r.jsx)(E.Z, {
                                                        className: o()(v.stickerNode, {
                                                            [v.stickerNodeDimmed]:
                                                                F &&
                                                                !f &&
                                                                null != N &&
                                                                -1 !== N.rowIndex &&
                                                                -1 !== N.columnIndex,
                                                            [v.stickerNodeHidden]: I,
                                                            [v.stickerUnsendable]: Y && !(0, h.kl)(e.sticker, H, V),
                                                        }),
                                                        disableAnimation: !f && !a,
                                                        enlargeOnInteraction: F,
                                                        isInteracting: f,
                                                        maskAsset: f,
                                                        sticker: e.sticker,
                                                        size: B,
                                                    }),
                                                    s ? (0, r.jsx)(b.Z, { size: 20 }) : null,
                                                ],
                                            }),
                                        ],
                                    }),
                                );
                            }
                        }
                    }),
                },
            ),
        );
    });
