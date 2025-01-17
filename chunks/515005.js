var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711);
var c = r(468194),
    d = r(481060),
    f = r(239091),
    _ = r(2052),
    h = r(330726),
    p = r(691251),
    m = r(626135),
    g = r(285651),
    E = r(373228),
    v = r(378233),
    I = r(419922),
    T = r(490095),
    b = r(981631),
    y = r(388032),
    S = r(834219);
let A = (0, c.Mg)(S.__invalid_stickerPickerPreviewDimensions),
    N = (0, c.Mg)(S.__invalid_stickerPickerPreviewPadding),
    C = 250,
    R = s.memo(function (e) {
        let { isDisplayingIndividualStickers: n = !1, preferAnimation: i = !0, getStickerItemProps: o, getStickerRowProps: c, gutterWidth: R, inspectedStickerPosition: O, isScrolling: D, isUsingKeyboardNavigation: L, onInspect: x, onSelect: w, rowIndex: P, stickerClassName: M, stickerDescriptors: k, stickerPadding: U = N, stickerSize: B = A, ownedStickerPacks: G, enlargeOnInteraction: Z = !1, channel: F, currentUser: V, checkSendability: j = !0 } = e,
            { location: H } = (0, _.O)(),
            Y = B + 2 * U,
            W = s.useMemo(
                () => ({
                    gridColumnGap: R,
                    gridTemplateColumns: 'repeat(auto-fill, '.concat(Y, 'px)'),
                    height: Y,
                    paddingRight: n ? void 0 : Y
                }),
                [n, R, Y]
            ),
            K = s.useMemo(
                () => ({
                    width: B,
                    height: B,
                    padding: U
                }),
                [U, B]
            ),
            [z, q] = (0, h.Z)(null, 300);
        return (0, a.jsx)('div', {
            className: S.row,
            style: W,
            ...(null == c ? void 0 : c(P)),
            children: k.map((e) => {
                var c;
                let _ = e.visibleRowIndex === (null == O ? void 0 : O.rowIndex) && e.columnIndex === (null == O ? void 0 : O.columnIndex),
                    h = e.type === E.al.STICKER && Z && _,
                    A = (n) => {
                        if ((null == D ? void 0 : D.current) === !0 || (null == L ? void 0 : L.current) === !0) return;
                        let r = n.altKey;
                        r && e.type === E.al.STICKER && !(0, v.gM)(e.sticker.id) && q(e.sticker.id), null == w || w(e, r);
                    },
                    N = (0, u.throttle)(() => {
                        (null == D ? void 0 : D.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && !_ && (null == x || x(e));
                    }, C),
                    R = () => {
                        e.type === E.al.CREATE_STICKER &&
                            (m.default.track(b.rMx.OPEN_MODAL, {
                                type: b.jXE.CREATE_STICKER_MODAL,
                                location: H
                            }),
                            (0, d.openModalLazy)(async () => {
                                let { default: n } = await Promise.all([r.e('93626'), r.e('28189')]).then(r.bind(r, 136735));
                                return (r) =>
                                    (0, a.jsx)(n, {
                                        guildId: e.guild_id,
                                        ...r
                                    });
                            }));
                    },
                    { ref: k, tabIndex: U, onFocus: Y, ...W } = null !== (c = null == o ? void 0 : o(e.columnIndex, P)) && void 0 !== c ? c : {};
                switch (e.type) {
                    case E.al.CREATE_STICKER:
                        return (0, a.jsx)(
                            'div',
                            {
                                ...W,
                                children: (0, a.jsxs)(d.Clickable, {
                                    'aria-label': e.name,
                                    className: l()(S.createSticker, M, { [S.createInspected]: _ }),
                                    innerRef: k,
                                    tabIndex: U,
                                    onFocus: null != Y ? Y : N,
                                    onMouseMove: N,
                                    onClick: R,
                                    style: K,
                                    children: [
                                        !Z && (0, a.jsx)('div', { className: S.inspectedIndicator }),
                                        (0, a.jsx)('div', {
                                            className: S.iconWrapper,
                                            children: (0, a.jsx)(d.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: S.icon
                                            })
                                        }),
                                        (0, a.jsx)(d.Text, {
                                            color: 'interactive-active',
                                            variant: 'text-xs/normal',
                                            children: y.intl.string(y.t['+nEuqq'])
                                        })
                                    ]
                                })
                            },
                            e.guild_id
                        );
                    case E.al.STICKER: {
                        let o = n && null != G && (0, v.jl)(e.sticker) && !G.has(e.sticker.pack_id),
                            u = (e) => {
                                (0, f.jW)(e, async () => {
                                    let { default: e } = await r.e('39010').then(r.bind(r, 269254));
                                    return (n) => (0, a.jsx)(e, { ...n });
                                });
                            };
                        return (0, s.createElement)(
                            'div',
                            {
                                ...W,
                                key: e.sticker.id
                            },
                            (0, a.jsxs)(d.Clickable, {
                                className: l()(S.sticker, M, {
                                    [S.stickerInspected]: _,
                                    [S.showPulse]: z === e.sticker.id
                                }),
                                innerRef: k,
                                tabIndex: U,
                                onFocus: null != Y ? Y : N,
                                onMouseMove: N,
                                onClick: A,
                                onContextMenu: u,
                                style: K,
                                'data-type': p.S.STICKER,
                                'data-id': e.sticker.id,
                                children: [
                                    (0, a.jsx)(d.HiddenVisually, { children: (0, I.Co)(e.sticker) }),
                                    (0, a.jsxs)('div', {
                                        'aria-hidden': !0,
                                        children: [
                                            !Z && (0, a.jsx)('div', { className: S.inspectedIndicator }),
                                            (0, a.jsx)(I.ZP, {
                                                className: l()(S.stickerNode, {
                                                    [S.stickerNodeDimmed]: Z && !_ && null != O && -1 !== O.rowIndex && -1 !== O.columnIndex,
                                                    [S.stickerNodeHidden]: h,
                                                    [S.stickerUnsendable]: j && !(0, g.kl)(e.sticker, V, F)
                                                }),
                                                disableAnimation: !_ && !i,
                                                enlargeOnInteraction: Z,
                                                isInteracting: _,
                                                maskAsset: _,
                                                sticker: e.sticker,
                                                size: B
                                            }),
                                            o ? (0, a.jsx)(T.Z, { size: 20 }) : null
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
n.Z = R;
