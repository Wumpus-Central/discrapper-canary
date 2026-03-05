"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(397927),
    u = n(442433),
    c = n(212245),
    d = n(304072),
    _ = n(60587),
    f = n(954571),
    p = n(361670),
    h = n(842086),
    m = n(378058),
    E = n(148355),
    g = n(256698),
    A = n(652215),
    I = n(985018),
    T = n(122079);
let S = 250,
    y = i.memo(function (e) {
        let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: s = !0,
                getStickerItemProps: y,
                getStickerRowProps: v,
                gutterWidth: N,
                inspectedStickerPosition: C,
                isScrolling: R,
                isUsingKeyboardNavigation: O,
                onInspect: b,
                onSelect: D,
                rowIndex: L,
                stickerClassName: w,
                stickerDescriptors: M,
                stickerPadding: x,
                stickerSize: P,
                ownedStickerPacks: k,
                enlargeOnInteraction: U = !1,
                channel: G,
                currentUser: F,
                checkSendability: V = !0,
            } = e,
            { location: B } = (0, c.p)(),
            H = P + 2 * x,
            j = i.useMemo(
                () => ({
                    gridColumnGap: N,
                    gridTemplateColumns: `repeat(auto-fill, ${H}px)`,
                    height: H,
                    paddingRight: t ? void 0 : H,
                }),
                [t, N, H],
            ),
            Y = i.useMemo(() => ({ width: P, height: P, padding: x }), [x, P]),
            [W, K] = (0, d.A)(null, 300);
        return (0, r.jsx)("div", {
            className: T.nM,
            style: j,
            ...v?.(L),
            children: M.map((e) => {
                let c = e.visibleRowIndex === C?.rowIndex && e.columnIndex === C?.columnIndex,
                    d = e.type === h.op.STICKER && U && c,
                    v = (t) => {
                        if (R?.current === !0 || O?.current === !0) return;
                        let n = t.altKey;
                        n && e.type === h.op.STICKER && !(0, m.o1)(e.sticker.id) && K(e.sticker.id), D?.(e, n);
                    },
                    N = (0, o.throttle)(() => {
                        R?.current === !0 || O?.current === !0 || c || b?.(e);
                    }, S),
                    M = () => {
                        e.type === h.op.CREATE_STICKER &&
                            (f.default.track(A.HAw.OPEN_MODAL, { type: A.JJy.CREATE_STICKER_MODAL, location: B }),
                            (0, l.mMO)(async () => {
                                let { default: t } = await Promise.all([n.e("29143"), n.e("8414")]).then(
                                    n.bind(n, 445002),
                                );
                                return (n) => (0, r.jsx)(t, { guildId: e.guild_id, ...n });
                            }));
                    },
                    { ref: x, tabIndex: H, onFocus: j, ...$ } = y?.(e.columnIndex, L) ?? {};
                switch (e.type) {
                    case h.op.CREATE_STICKER:
                        return (0, r.jsx)(
                            "div",
                            {
                                ...$,
                                children: (0, r.jsxs)(l.DUT, {
                                    "aria-label": e.name,
                                    className: a()(T.wP, w, { [T.Kj]: c }),
                                    innerRef: x,
                                    tabIndex: H,
                                    onFocus: j ?? N,
                                    onMouseMove: N,
                                    onClick: M,
                                    style: Y,
                                    children: [
                                        !U && (0, r.jsx)("div", { className: T.fw }),
                                        (0, r.jsx)("div", {
                                            className: T.P0,
                                            children: (0, r.jsx)(l.j96, {
                                                size: "md",
                                                color: "currentColor",
                                                className: T.Kk,
                                            }),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            color: "interactive-text-active",
                                            variant: "text-xs/normal",
                                            children: I.intl.string(I.t["+nEuqr"]),
                                        }),
                                    ],
                                }),
                            },
                            e.guild_id,
                        );
                    case h.op.STICKER: {
                        let o = t && null != k && (0, m.FD)(e.sticker) && !k.has(e.sticker.pack_id),
                            f = (e) => {
                                (0, u.L3)(e, async () => {
                                    let { default: e } = await n.e("46132").then(n.bind(n, 233503));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            };
                        return (0, i.createElement)(
                            "div",
                            { ...$, key: e.sticker.id },
                            (0, r.jsxs)(l.DUT, {
                                className: a()(T.yI, w, { [T.PV]: c, [T.TV]: W === e.sticker.id }),
                                innerRef: x,
                                tabIndex: H,
                                onFocus: j ?? N,
                                onMouseMove: N,
                                onClick: v,
                                onContextMenu: f,
                                style: Y,
                                "data-type": _.g.STICKER,
                                "data-id": e.sticker.id,
                                "data-name": e.sticker.name,
                                "data-format-type": e.sticker.format_type,
                                children: [
                                    (0, r.jsx)(l.AC4, { children: (0, E.h)(e.sticker) }),
                                    (0, r.jsxs)("div", {
                                        "aria-hidden": !0,
                                        children: [
                                            !U && (0, r.jsx)("div", { className: T.fw }),
                                            (0, r.jsx)(E.A, {
                                                className: a()(T.SI, {
                                                    [T.ot]:
                                                        U &&
                                                        !c &&
                                                        null != C &&
                                                        -1 !== C.rowIndex &&
                                                        -1 !== C.columnIndex,
                                                    [T.Q$]: d,
                                                    [T.No]: V && !(0, p.G7)(e.sticker, F, G),
                                                }),
                                                disableAnimation: !c && !s,
                                                enlargeOnInteraction: U,
                                                isInteracting: c,
                                                maskAsset: c,
                                                sticker: e.sticker,
                                                size: P,
                                            }),
                                            o ? (0, r.jsx)(g.A, { size: 20 }) : null,
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
