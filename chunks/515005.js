n.d(t, { Z: () => D }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(468194),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    f = n(330726),
    p = n(691251),
    _ = n(626135),
    m = n(285651),
    h = n(373228),
    g = n(378233),
    E = n(419922),
    b = n(490095),
    y = n(981631),
    O = n(388032),
    v = n(806512);
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
function C(e, t) {
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
function A(e, t) {
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
let P = (0, l.Mg)(v.__invalid_stickerPickerPreviewDimensions),
    R = (0, l.Mg)(v.__invalid_stickerPickerPreviewPadding),
    w = 250,
    D = i.memo(function (e) {
        let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: a = !0,
                getStickerItemProps: l,
                getStickerRowProps: S,
                gutterWidth: T,
                inspectedStickerPosition: N,
                isScrolling: D,
                isUsingKeyboardNavigation: x,
                onInspect: L,
                onSelect: j,
                rowIndex: M,
                stickerClassName: k,
                stickerDescriptors: U,
                stickerPadding: G = R,
                stickerSize: Z = P,
                ownedStickerPacks: F,
                enlargeOnInteraction: B = !1,
                channel: V,
                currentUser: H,
                checkSendability: Y = !0,
            } = e,
            { location: W } = (0, d.O)(),
            K = Z + 2 * G,
            z = i.useMemo(
                () => ({
                    gridColumnGap: T,
                    gridTemplateColumns: "repeat(auto-fill, ".concat(K, "px)"),
                    height: K,
                    paddingRight: t ? void 0 : K,
                }),
                [t, T, K],
            ),
            q = i.useMemo(
                () => ({
                    width: Z,
                    height: Z,
                    padding: G,
                }),
                [G, Z],
            ),
            [Q, X] = (0, f.Z)(null, 300);
        return (0, r.jsx)(
            "div",
            C(
                I(
                    {
                        className: v.row,
                        style: z,
                    },
                    null == S ? void 0 : S(M),
                ),
                {
                    children: U.map((e) => {
                        var d;
                        let f =
                                e.visibleRowIndex === (null == N ? void 0 : N.rowIndex) &&
                                e.columnIndex === (null == N ? void 0 : N.columnIndex),
                            S = e.type === h.al.STICKER && B && f,
                            T = (t) => {
                                if ((null == D ? void 0 : D.current) === !0 || (null == x ? void 0 : x.current) === !0)
                                    return;
                                let n = t.altKey;
                                n && e.type === h.al.STICKER && !(0, g.gM)(e.sticker.id) && X(e.sticker.id),
                                    null == j || j(e, n);
                            },
                            P = (0, s.throttle)(() => {
                                (null == D ? void 0 : D.current) === !0 ||
                                    (null == x ? void 0 : x.current) === !0 ||
                                    f ||
                                    null == L ||
                                    L(e);
                            }, w),
                            R = () => {
                                e.type === h.al.CREATE_STICKER &&
                                    (_.default.track(y.rMx.OPEN_MODAL, {
                                        type: y.jXE.CREATE_STICKER_MODAL,
                                        location: W,
                                    }),
                                    (0, c.ZDy)(async () => {
                                        let { default: t } = await Promise.all([n.e("93626"), n.e("47985")]).then(
                                            n.bind(n, 136735),
                                        );
                                        return (n) => (0, r.jsx)(t, I({ guildId: e.guild_id }, n));
                                    }));
                            },
                            U = null != (d = null == l ? void 0 : l(e.columnIndex, M)) ? d : {},
                            { ref: G, tabIndex: K, onFocus: z } = U,
                            J = A(U, ["ref", "tabIndex", "onFocus"]);
                        switch (e.type) {
                            case h.al.CREATE_STICKER:
                                return (0, r.jsx)(
                                    "div",
                                    C(I({}, J), {
                                        children: (0, r.jsxs)(c.P3F, {
                                            "aria-label": e.name,
                                            className: o()(v.createSticker, k, { [v.createInspected]: f }),
                                            innerRef: G,
                                            tabIndex: K,
                                            onFocus: null != z ? z : P,
                                            onMouseMove: P,
                                            onClick: R,
                                            style: q,
                                            children: [
                                                !B && (0, r.jsx)("div", { className: v.inspectedIndicator }),
                                                (0, r.jsx)("div", {
                                                    className: v.iconWrapper,
                                                    children: (0, r.jsx)(c.qJs, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: v.icon,
                                                    }),
                                                }),
                                                (0, r.jsx)(c.Text, {
                                                    color: "interactive-text-active",
                                                    variant: "text-xs/normal",
                                                    children: O.intl.string(O.t["+nEuqr"]),
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.guild_id,
                                );
                            case h.al.STICKER: {
                                let s = t && null != F && (0, g.jl)(e.sticker) && !F.has(e.sticker.pack_id),
                                    l = (e) => {
                                        (0, u.jW)(e, async () => {
                                            let { default: e } = await n.e("39010").then(n.bind(n, 269254));
                                            return (t) => (0, r.jsx)(e, I({}, t));
                                        });
                                    };
                                return (0, i.createElement)(
                                    "div",
                                    C(I({}, J), { key: e.sticker.id }),
                                    (0, r.jsxs)(c.P3F, {
                                        className: o()(v.sticker, k, {
                                            [v.stickerInspected]: f,
                                            [v.showPulse]: Q === e.sticker.id,
                                        }),
                                        innerRef: G,
                                        tabIndex: K,
                                        onFocus: null != z ? z : P,
                                        onMouseMove: P,
                                        onClick: T,
                                        onContextMenu: l,
                                        style: q,
                                        "data-type": p.S.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [
                                            (0, r.jsx)(c.nn4, { children: (0, E.C)(e.sticker) }),
                                            (0, r.jsxs)("div", {
                                                "aria-hidden": !0,
                                                children: [
                                                    !B && (0, r.jsx)("div", { className: v.inspectedIndicator }),
                                                    (0, r.jsx)(E.Z, {
                                                        className: o()(v.stickerNode, {
                                                            [v.stickerNodeDimmed]:
                                                                B &&
                                                                !f &&
                                                                null != N &&
                                                                -1 !== N.rowIndex &&
                                                                -1 !== N.columnIndex,
                                                            [v.stickerNodeHidden]: S,
                                                            [v.stickerUnsendable]: Y && !(0, m.kl)(e.sticker, H, V),
                                                        }),
                                                        disableAnimation: !f && !a,
                                                        enlargeOnInteraction: B,
                                                        isInteracting: f,
                                                        maskAsset: f,
                                                        sticker: e.sticker,
                                                        size: Z,
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
