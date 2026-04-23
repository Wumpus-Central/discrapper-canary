"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(192308),
    u = n(939249),
    c = n(307301),
    d = n(834730),
    _ = n(140735),
    f = n(442433),
    p = n(212245),
    h = n(304072),
    E = n(60587),
    m = n(954571),
    g = n(361670),
    A = n(842086),
    I = n(378058),
    T = n(148355),
    S = n(256698),
    y = n(652215),
    N = n(985018),
    v = n(584176);
let C = i.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: C,
            getStickerRowProps: O,
            gutterWidth: R,
            inspectedStickerPosition: b,
            isScrolling: D,
            isUsingKeyboardNavigation: L,
            onInspect: w,
            onSelect: M,
            rowIndex: P,
            stickerClassName: x,
            stickerDescriptors: k,
            stickerPadding: U,
            stickerSize: G,
            ownedStickerPacks: F,
            enlargeOnInteraction: V = !1,
            channel: B,
            currentUser: H,
            checkSendability: j = !0,
        } = e,
        { location: Y } = (0, p.p)(),
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
        [z, q] = (0, h.A)(null, 300);
    return (0, r.jsx)("div", {
        className: v.nM,
        style: K,
        ...O?.(P),
        children: k.map((e) => {
            let p = e.visibleRowIndex === b?.rowIndex && e.columnIndex === b?.columnIndex,
                h = e.type === A.op.STICKER && V && p,
                O = (0, o.throttle)(() => {
                    D?.current === !0 || L?.current === !0 || p || w?.(e);
                }, 250),
                { ref: R, tabIndex: k, onFocus: U, ...W } = C?.(e.columnIndex, P) ?? {};
            switch (e.type) {
                case A.op.CREATE_STICKER:
                    return (0, r.jsx)(
                        "div",
                        {
                            ...W,
                            children: (0, r.jsxs)(u.D, {
                                "aria-label": e.name,
                                className: a()(v.wP, x, { [v.Kj]: p }),
                                innerRef: R,
                                tabIndex: k,
                                onFocus: U ?? O,
                                onMouseMove: O,
                                onClick: () => {
                                    e.type === A.op.CREATE_STICKER &&
                                        (m.default.track(y.HAw.OPEN_MODAL, {
                                            type: y.JJy.CREATE_STICKER_MODAL,
                                            location: Y,
                                        }),
                                        (0, l.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                                n.bind(n, 445002),
                                            );
                                            return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: $,
                                children: [
                                    !V && (0, r.jsx)("div", { className: v.fw }),
                                    (0, r.jsx)("div", {
                                        className: v.P0,
                                        children: (0, r.jsx)(c.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: v.Kk,
                                        }),
                                    }),
                                    (0, r.jsx)(d.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: N.intl.string(N.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case A.op.STICKER: {
                    let o = t && null != F && (0, I.FD)(e.sticker) && !F.has(e.sticker.pack_id);
                    return (0, i.createElement)(
                        "div",
                        { ...W, key: e.sticker.id },
                        (0, r.jsxs)(u.D, {
                            className: a()(v.yI, x, { [v.PV]: p, [v.TV]: z === e.sticker.id }),
                            innerRef: R,
                            tabIndex: k,
                            onFocus: U ?? O,
                            onMouseMove: O,
                            onClick: (t) => {
                                if (D?.current === !0 || L?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === A.op.STICKER && !(0, I.o1)(e.sticker.id) && q(e.sticker.id), M?.(e, n);
                            },
                            onContextMenu: (e) => {
                                (0, f.L3)(e, async () => {
                                    let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                            style: $,
                            "data-type": E.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, r.jsx)(_.A, { children: (0, T.h)(e.sticker) }),
                                (0, r.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !V && (0, r.jsx)("div", { className: v.fw }),
                                        (0, r.jsx)(T.A, {
                                            className: a()(v.SI, {
                                                [v.ot]:
                                                    V && !p && null != b && -1 !== b.rowIndex && -1 !== b.columnIndex,
                                                [v.Q$]: h,
                                                [v.No]: j && !(0, g.G7)(e.sticker, H, B),
                                            }),
                                            disableAnimation: !p && !s,
                                            enlargeOnInteraction: V,
                                            isInteracting: p,
                                            maskAsset: p,
                                            sticker: e.sticker,
                                            size: G,
                                        }),
                                        o ? (0, r.jsx)(S.A, { size: 20 }) : null,
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
