"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(23339),
    u = n(397927),
    c = n(442433),
    d = n(212245),
    _ = n(304072),
    f = n(60587),
    h = n(954571),
    p = n(361670),
    g = n(842086),
    E = n(378058),
    A = n(148355),
    I = n(256698),
    T = n(652215),
    y = n(985018),
    S = n(664445);
let v = (0, l.xI)(S.__invalid_stickerPickerPreviewDimensions),
    C = (0, l.xI)(S.__invalid_stickerPickerPreviewPadding),
    b = 250,
    N = i.memo(function (e) {
        let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: a = !0,
                getStickerItemProps: l,
                getStickerRowProps: N,
                gutterWidth: R,
                inspectedStickerPosition: O,
                isScrolling: D,
                isUsingKeyboardNavigation: L,
                onInspect: w,
                onSelect: x,
                rowIndex: P,
                stickerClassName: M,
                stickerDescriptors: k,
                stickerPadding: U = C,
                stickerSize: G = v,
                ownedStickerPacks: F,
                enlargeOnInteraction: V = !1,
                channel: B,
                currentUser: j,
                checkSendability: H = !0,
            } = e,
            { location: Y } = (0, d.p)(),
            W = G + 2 * U,
            K = i.useMemo(
                () => ({
                    gridColumnGap: R,
                    gridTemplateColumns: `repeat(auto-fill, ${W}px)`,
                    height: W,
                    paddingRight: t ? void 0 : W,
                }),
                [t, R, W],
            ),
            $ = i.useMemo(() => ({ width: G, height: G, padding: U }), [U, G]),
            [z, q] = (0, _.A)(null, 300);
        return (0, r.jsx)("div", {
            className: S.nM,
            style: K,
            ...N?.(P),
            children: k.map((e) => {
                let d = e.visibleRowIndex === O?.rowIndex && e.columnIndex === O?.columnIndex,
                    _ = e.type === g.op.STICKER && V && d,
                    v = (t) => {
                        if (D?.current === !0 || L?.current === !0) return;
                        let n = t.altKey;
                        n && e.type === g.op.STICKER && !(0, E.o1)(e.sticker.id) && q(e.sticker.id), x?.(e, n);
                    },
                    C = (0, o.throttle)(() => {
                        D?.current === !0 || L?.current === !0 || d || w?.(e);
                    }, b),
                    N = () => {
                        e.type === g.op.CREATE_STICKER &&
                            (h.default.track(T.HAw.OPEN_MODAL, { type: T.JJy.CREATE_STICKER_MODAL, location: Y }),
                            (0, u.mMO)(async () => {
                                let { default: t } = await Promise.all([n.e("29143"), n.e("64800")]).then(
                                    n.bind(n, 445002),
                                );
                                return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                            }));
                    },
                    { ref: R, tabIndex: k, onFocus: U, ...W } = l?.(e.columnIndex, P) ?? {};
                switch (e.type) {
                    case g.op.CREATE_STICKER:
                        return (0, r.jsx)(
                            "div",
                            {
                                ...W,
                                children: (0, r.jsxs)(u.DUT, {
                                    "aria-label": e.name,
                                    className: s()(S.wP, M, { [S.Kj]: d }),
                                    innerRef: R,
                                    tabIndex: k,
                                    onFocus: U ?? C,
                                    onMouseMove: C,
                                    onClick: N,
                                    style: $,
                                    children: [
                                        !V && (0, r.jsx)("div", { className: S.fw }),
                                        (0, r.jsx)("div", {
                                            className: S.P0,
                                            children: (0, r.jsx)(u.j96, {
                                                size: "md",
                                                color: "currentColor",
                                                className: S.Kk,
                                            }),
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: "interactive-text-active",
                                            variant: "text-xs/normal",
                                            children: y.intl.string(y.t["+nEuqr"]),
                                        }),
                                    ],
                                }),
                            },
                            e.guild_id,
                        );
                    case g.op.STICKER: {
                        let o = t && null != F && (0, E.FD)(e.sticker) && !F.has(e.sticker.pack_id),
                            l = (e) => {
                                (0, c.L3)(e, async () => {
                                    let { default: e } = await n.e("46132").then(n.bind(n, 233503));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            };
                        return (0, i.createElement)(
                            "div",
                            { ...W, key: e.sticker.id },
                            (0, r.jsxs)(u.DUT, {
                                className: s()(S.yI, M, { [S.PV]: d, [S.TV]: z === e.sticker.id }),
                                innerRef: R,
                                tabIndex: k,
                                onFocus: U ?? C,
                                onMouseMove: C,
                                onClick: v,
                                onContextMenu: l,
                                style: $,
                                "data-type": f.g.STICKER,
                                "data-id": e.sticker.id,
                                "data-name": e.sticker.name,
                                "data-format-type": e.sticker.format_type,
                                children: [
                                    (0, r.jsx)(u.AC4, { children: (0, A.h)(e.sticker) }),
                                    (0, r.jsxs)("div", {
                                        "aria-hidden": !0,
                                        children: [
                                            !V && (0, r.jsx)("div", { className: S.fw }),
                                            (0, r.jsx)(A.A, {
                                                className: s()(S.SI, {
                                                    [S.ot]:
                                                        V &&
                                                        !d &&
                                                        null != O &&
                                                        -1 !== O.rowIndex &&
                                                        -1 !== O.columnIndex,
                                                    [S.Q$]: _,
                                                    [S.No]: H && !(0, p.G7)(e.sticker, j, B),
                                                }),
                                                disableAnimation: !d && !a,
                                                enlargeOnInteraction: V,
                                                isInteracting: d,
                                                maskAsset: d,
                                                sticker: e.sticker,
                                                size: G,
                                            }),
                                            o ? (0, r.jsx)(I.A, { size: 20 }) : null,
                                        ],
                                    }),
                                ],
                            }),
                        );
                    }
                }
            }),
        });
    });
