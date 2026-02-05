"use strict";
n.d(t, { A: () => b });
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
    p = n(954571),
    h = n(361670),
    m = n(842086),
    g = n(378058),
    E = n(148355),
    A = n(256698),
    I = n(652215),
    T = n(985018),
    y = n(664445);
let S = (0, l.xI)(y.__invalid_stickerPickerPreviewDimensions),
    v = (0, l.xI)(y.__invalid_stickerPickerPreviewPadding),
    C = 250,
    b = i.memo(function (e) {
        let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: a = !0,
                getStickerItemProps: l,
                getStickerRowProps: b,
                gutterWidth: N,
                inspectedStickerPosition: R,
                isScrolling: O,
                isUsingKeyboardNavigation: D,
                onInspect: L,
                onSelect: w,
                rowIndex: x,
                stickerClassName: P,
                stickerDescriptors: M,
                stickerPadding: k = v,
                stickerSize: U = S,
                ownedStickerPacks: G,
                enlargeOnInteraction: V = !1,
                channel: F,
                currentUser: B,
                checkSendability: j = !0,
            } = e,
            { location: H } = (0, d.p)(),
            Y = U + 2 * k,
            W = i.useMemo(
                () => ({
                    gridColumnGap: N,
                    gridTemplateColumns: `repeat(auto-fill, ${Y}px)`,
                    height: Y,
                    paddingRight: t ? void 0 : Y,
                }),
                [t, N, Y],
            ),
            K = i.useMemo(() => ({ width: U, height: U, padding: k }), [k, U]),
            [z, $] = (0, _.A)(null, 300);
        return (0, r.jsx)("div", {
            className: y.nM,
            style: W,
            ...b?.(x),
            children: M.map((e) => {
                let d = e.visibleRowIndex === R?.rowIndex && e.columnIndex === R?.columnIndex,
                    _ = e.type === m.op.STICKER && V && d,
                    S = (t) => {
                        if (O?.current === !0 || D?.current === !0) return;
                        let n = t.altKey;
                        n && e.type === m.op.STICKER && !(0, g.o1)(e.sticker.id) && $(e.sticker.id), w?.(e, n);
                    },
                    v = (0, o.throttle)(() => {
                        O?.current === !0 || D?.current === !0 || d || L?.(e);
                    }, C),
                    b = () => {
                        e.type === m.op.CREATE_STICKER &&
                            (p.default.track(I.HAw.OPEN_MODAL, { type: I.JJy.CREATE_STICKER_MODAL, location: H }),
                            (0, u.mMO)(async () => {
                                let { default: t } = await Promise.all([n.e("29143"), n.e("64800")]).then(
                                    n.bind(n, 445002),
                                );
                                return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                            }));
                    },
                    { ref: N, tabIndex: M, onFocus: k, ...Y } = l?.(e.columnIndex, x) ?? {};
                switch (e.type) {
                    case m.op.CREATE_STICKER:
                        return (0, r.jsx)(
                            "div",
                            {
                                ...Y,
                                children: (0, r.jsxs)(u.DUT, {
                                    "aria-label": e.name,
                                    className: s()(y.wP, P, { [y.Kj]: d }),
                                    innerRef: N,
                                    tabIndex: M,
                                    onFocus: k ?? v,
                                    onMouseMove: v,
                                    onClick: b,
                                    style: K,
                                    children: [
                                        !V && (0, r.jsx)("div", { className: y.fw }),
                                        (0, r.jsx)("div", {
                                            className: y.P0,
                                            children: (0, r.jsx)(u.j96, {
                                                size: "md",
                                                color: "currentColor",
                                                className: y.Kk,
                                            }),
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: "interactive-text-active",
                                            variant: "text-xs/normal",
                                            children: T.intl.string(T.t["+nEuqr"]),
                                        }),
                                    ],
                                }),
                            },
                            e.guild_id,
                        );
                    case m.op.STICKER: {
                        let o = t && null != G && (0, g.FD)(e.sticker) && !G.has(e.sticker.pack_id),
                            l = (e) => {
                                (0, c.L3)(e, async () => {
                                    let { default: e } = await n.e("46132").then(n.bind(n, 233503));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            };
                        return (0, i.createElement)(
                            "div",
                            { ...Y, key: e.sticker.id },
                            (0, r.jsxs)(u.DUT, {
                                className: s()(y.yI, P, { [y.PV]: d, [y.TV]: z === e.sticker.id }),
                                innerRef: N,
                                tabIndex: M,
                                onFocus: k ?? v,
                                onMouseMove: v,
                                onClick: S,
                                onContextMenu: l,
                                style: K,
                                "data-type": f.g.STICKER,
                                "data-id": e.sticker.id,
                                "data-name": e.sticker.name,
                                "data-format-type": e.sticker.format_type,
                                children: [
                                    (0, r.jsx)(u.AC4, { children: (0, E.h)(e.sticker) }),
                                    (0, r.jsxs)("div", {
                                        "aria-hidden": !0,
                                        children: [
                                            !V && (0, r.jsx)("div", { className: y.fw }),
                                            (0, r.jsx)(E.A, {
                                                className: s()(y.SI, {
                                                    [y.ot]:
                                                        V &&
                                                        !d &&
                                                        null != R &&
                                                        -1 !== R.rowIndex &&
                                                        -1 !== R.columnIndex,
                                                    [y.Q$]: _,
                                                    [y.No]: j && !(0, h.G7)(e.sticker, B, F),
                                                }),
                                                disableAnimation: !d && !a,
                                                enlargeOnInteraction: V,
                                                isInteracting: d,
                                                maskAsset: d,
                                                sticker: e.sticker,
                                                size: U,
                                            }),
                                            o ? (0, r.jsx)(A.A, { size: 20 }) : null,
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
