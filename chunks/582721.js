"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n(192308),
    c = n(939249),
    u = n(307301),
    d = n(834730),
    h = n(140735),
    m = n(442433),
    p = n(212245),
    f = n(304072),
    g = n(60587),
    _ = n(954571),
    x = n(361670),
    A = n(842086),
    C = n(378058),
    E = n(148355),
    I = n(256698),
    v = n(652215),
    y = n(985018),
    S = n(584176);
let b = l.memo(function (e) {
    let {
            isDisplayingIndividualStickers: t = !1,
            preferAnimation: s = !0,
            getStickerItemProps: b,
            getStickerRowProps: N,
            gutterWidth: T,
            inspectedStickerPosition: j,
            isScrolling: R,
            isUsingKeyboardNavigation: w,
            onInspect: L,
            onSelect: M,
            rowIndex: k,
            stickerClassName: O,
            stickerDescriptors: P,
            stickerPadding: D,
            stickerSize: U,
            ownedStickerPacks: V,
            enlargeOnInteraction: G = !1,
            channel: F,
            currentUser: B,
            checkSendability: H = !0,
        } = e,
        { location: W } = (0, p.p)(),
        K = U + 2 * D,
        z = l.useMemo(
            () => ({
                gridColumnGap: T,
                gridTemplateColumns: `repeat(auto-fill, ${K}px)`,
                height: K,
                paddingRight: t ? void 0 : K,
            }),
            [t, T, K],
        ),
        Z = l.useMemo(() => ({ width: U, height: U, padding: D }), [D, U]),
        [q, Y] = (0, f.A)(null, 300);
    return (0, i.jsx)("div", {
        className: S.nM,
        style: z,
        ...N?.(k),
        children: P.map((e) => {
            let p = e.visibleRowIndex === j?.rowIndex && e.columnIndex === j?.columnIndex,
                f = e.type === A.op.STICKER && G && p,
                N = (0, a.throttle)(() => {
                    R?.current === !0 || w?.current === !0 || p || L?.(e);
                }, 250),
                { ref: T, tabIndex: P, onFocus: D, ...K } = b?.(e.columnIndex, k) ?? {};
            switch (e.type) {
                case A.op.CREATE_STICKER:
                    return (0, i.jsx)(
                        "div",
                        {
                            ...K,
                            children: (0, i.jsxs)(c.D, {
                                "aria-label": e.name,
                                className: r()(S.wP, O, { [S.Kj]: p }),
                                innerRef: T,
                                tabIndex: P,
                                onFocus: D ?? N,
                                onMouseMove: N,
                                onClick: () => {
                                    e.type === A.op.CREATE_STICKER &&
                                        (_.default.track(v.HAw.OPEN_MODAL, {
                                            type: v.JJy.CREATE_STICKER_MODAL,
                                            location: W,
                                        }),
                                        (0, o.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([n.e("29143"), n.e("93796")]).then(
                                                n.bind(n, 445002),
                                            );
                                            return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                                        }));
                                },
                                style: Z,
                                children: [
                                    !G && (0, i.jsx)("div", { className: S.fw }),
                                    (0, i.jsx)("div", {
                                        className: S.P0,
                                        children: (0, i.jsx)(u.j, {
                                            size: "md",
                                            color: "currentColor",
                                            className: S.Kk,
                                        }),
                                    }),
                                    (0, i.jsx)(d.E, {
                                        color: "interactive-text-active",
                                        variant: "text-xs/normal",
                                        children: y.intl.string(y.t["+nEuqr"]),
                                    }),
                                ],
                            }),
                        },
                        e.guild_id,
                    );
                case A.op.STICKER: {
                    let a = t && null != V && (0, C.FD)(e.sticker) && !V.has(e.sticker.pack_id);
                    return (0, l.createElement)(
                        "div",
                        { ...K, key: e.sticker.id },
                        (0, i.jsxs)(c.D, {
                            className: r()(S.yI, O, { [S.PV]: p, [S.TV]: q === e.sticker.id }),
                            innerRef: T,
                            tabIndex: P,
                            onFocus: D ?? N,
                            onMouseMove: N,
                            onClick: (t) => {
                                if (R?.current === !0 || w?.current === !0) return;
                                let n = t.altKey;
                                n && e.type === A.op.STICKER && !(0, C.o1)(e.sticker.id) && Y(e.sticker.id), M?.(e, n);
                            },
                            onContextMenu: (e) => {
                                (0, m.L3)(e, async () => {
                                    let { default: e } = await n.e("23751").then(n.bind(n, 233503));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            style: Z,
                            "data-type": g.g.STICKER,
                            "data-id": e.sticker.id,
                            "data-name": e.sticker.name,
                            "data-format-type": e.sticker.format_type,
                            children: [
                                (0, i.jsx)(h.A, { children: (0, E.h)(e.sticker) }),
                                (0, i.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [
                                        !G && (0, i.jsx)("div", { className: S.fw }),
                                        (0, i.jsx)(E.A, {
                                            className: r()(S.SI, {
                                                [S.ot]:
                                                    G && !p && null != j && -1 !== j.rowIndex && -1 !== j.columnIndex,
                                                [S.Q$]: f,
                                                [S.No]: H && !(0, x.G7)(e.sticker, B, F),
                                            }),
                                            disableAnimation: !p && !s,
                                            enlargeOnInteraction: G,
                                            isInteracting: p,
                                            maskAsset: p,
                                            sticker: e.sticker,
                                            size: U,
                                        }),
                                        a ? (0, i.jsx)(I.A, { size: 20 }) : null,
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
