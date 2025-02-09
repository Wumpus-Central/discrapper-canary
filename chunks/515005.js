n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n(468194),
    u = n(481060),
    c = n(239091),
    d = n(2052),
    f = n(330726),
    _ = n(691251),
    p = n(626135),
    h = n(285651),
    m = n(373228),
    g = n(378233),
    E = n(419922),
    v = n(490095),
    y = n(981631),
    I = n(388032),
    T = n(742068);
let b = (0, l.Mg)(T.__invalid_stickerPickerPreviewDimensions),
    S = (0, l.Mg)(T.__invalid_stickerPickerPreviewPadding),
    A = 250,
    N = r.memo(function (e) {
        let { isDisplayingIndividualStickers: t = !1, preferAnimation: a = !0, getStickerItemProps: l, getStickerRowProps: N, gutterWidth: C, inspectedStickerPosition: R, isScrolling: O, isUsingKeyboardNavigation: D, onInspect: L, onSelect: x, rowIndex: w, stickerClassName: P, stickerDescriptors: M, stickerPadding: k = S, stickerSize: U = b, ownedStickerPacks: G, enlargeOnInteraction: B = !1, channel: Z, currentUser: F, checkSendability: V = !0 } = e,
            { location: j } = (0, d.O)(),
            H = U + 2 * k,
            Y = r.useMemo(
                () => ({
                    gridColumnGap: C,
                    gridTemplateColumns: 'repeat(auto-fill, '.concat(H, 'px)'),
                    height: H,
                    paddingRight: t ? void 0 : H
                }),
                [t, C, H]
            ),
            W = r.useMemo(
                () => ({
                    width: U,
                    height: U,
                    padding: k
                }),
                [k, U]
            ),
            [K, z] = (0, f.Z)(null, 300);
        return (0, i.jsx)('div', {
            className: T.row,
            style: Y,
            ...(null == N ? void 0 : N(w)),
            children: M.map((e) => {
                var d;
                let f = e.visibleRowIndex === (null == R ? void 0 : R.rowIndex) && e.columnIndex === (null == R ? void 0 : R.columnIndex),
                    b = e.type === m.al.STICKER && B && f,
                    S = (t) => {
                        if ((null == O ? void 0 : O.current) === !0 || (null == D ? void 0 : D.current) === !0) return;
                        let n = t.altKey;
                        n && e.type === m.al.STICKER && !(0, g.gM)(e.sticker.id) && z(e.sticker.id), null == x || x(e, n);
                    },
                    N = (0, o.throttle)(() => {
                        (null == O ? void 0 : O.current) === !0 || (null == D ? void 0 : D.current) === !0 || f || null == L || L(e);
                    }, A),
                    C = () => {
                        e.type === m.al.CREATE_STICKER &&
                            (p.default.track(y.rMx.OPEN_MODAL, {
                                type: y.jXE.CREATE_STICKER_MODAL,
                                location: j
                            }),
                            (0, u.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e('93626'), n.e('98082')]).then(n.bind(n, 136735));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        guildId: e.guild_id,
                                        ...n
                                    });
                            }));
                    },
                    { ref: M, tabIndex: k, onFocus: H, ...Y } = null !== (d = null == l ? void 0 : l(e.columnIndex, w)) && void 0 !== d ? d : {};
                switch (e.type) {
                    case m.al.CREATE_STICKER:
                        return (0, i.jsx)(
                            'div',
                            {
                                ...Y,
                                children: (0, i.jsxs)(u.P3F, {
                                    'aria-label': e.name,
                                    className: s()(T.createSticker, P, { [T.createInspected]: f }),
                                    innerRef: M,
                                    tabIndex: k,
                                    onFocus: null != H ? H : N,
                                    onMouseMove: N,
                                    onClick: C,
                                    style: W,
                                    children: [
                                        !B && (0, i.jsx)('div', { className: T.inspectedIndicator }),
                                        (0, i.jsx)('div', {
                                            className: T.iconWrapper,
                                            children: (0, i.jsx)(u.qJs, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: T.icon
                                            })
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            color: 'interactive-active',
                                            variant: 'text-xs/normal',
                                            children: I.intl.string(I.t['+nEuqq'])
                                        })
                                    ]
                                })
                            },
                            e.guild_id
                        );
                    case m.al.STICKER: {
                        let o = t && null != G && (0, g.jl)(e.sticker) && !G.has(e.sticker.pack_id),
                            l = (e) => {
                                (0, c.jW)(e, async () => {
                                    let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            };
                        return (0, r.createElement)(
                            'div',
                            {
                                ...Y,
                                key: e.sticker.id
                            },
                            (0, i.jsxs)(u.P3F, {
                                className: s()(T.sticker, P, {
                                    [T.stickerInspected]: f,
                                    [T.showPulse]: K === e.sticker.id
                                }),
                                innerRef: M,
                                tabIndex: k,
                                onFocus: null != H ? H : N,
                                onMouseMove: N,
                                onClick: S,
                                onContextMenu: l,
                                style: W,
                                'data-type': _.S.STICKER,
                                'data-id': e.sticker.id,
                                children: [
                                    (0, i.jsx)(u.nn4, { children: (0, E.Co)(e.sticker) }),
                                    (0, i.jsxs)('div', {
                                        'aria-hidden': !0,
                                        children: [
                                            !B && (0, i.jsx)('div', { className: T.inspectedIndicator }),
                                            (0, i.jsx)(E.ZP, {
                                                className: s()(T.stickerNode, {
                                                    [T.stickerNodeDimmed]: B && !f && null != R && -1 !== R.rowIndex && -1 !== R.columnIndex,
                                                    [T.stickerNodeHidden]: b,
                                                    [T.stickerUnsendable]: V && !(0, h.kl)(e.sticker, F, Z)
                                                }),
                                                disableAnimation: !f && !a,
                                                enlargeOnInteraction: B,
                                                isInteracting: f,
                                                maskAsset: f,
                                                sticker: e.sticker,
                                                size: U
                                            }),
                                            o ? (0, i.jsx)(v.Z, { size: 20 }) : null
                                        ]
                                    })
                                ]
                            })
                        );
                    }
                }
            })
        });
    });
