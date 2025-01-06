var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(780384),
    c = r(481060),
    d = r(330726),
    f = r(410030),
    _ = r(255963),
    h = r(906411),
    p = r(438332),
    m = r(806966),
    g = r(434404),
    E = r(675478),
    v = r(819758),
    I = r(626135),
    T = r(392552),
    b = r(784222),
    y = r(926243),
    S = r(149203),
    A = r(981631),
    N = r(388032),
    C = r(538891);
let R = (e) => {
    let { emojiDescriptors: n, emojiSize: i, onSelect: o, onInspect: R, surrogateCodePoint: O, getEmojiItemProps: D, getEmojiRowProps: L, isScrolling: x, isUsingKeyboardNavigation: w, rowIndex: P, allowAnimatedEmoji: M, showEmojiFavoriteTooltip: k, channelGuildId: U, category: B, selectedItemClassName: G, messageId: Z, isBurstReaction: F, inNitroLockedSection: V, handleScrollUpOnSectionCollapse: j } = e,
        { enabled: H } = T.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        Y = r(187119),
        W = r(39874),
        K = r(853871),
        z = r(63149),
        q = r(263112),
        Q = r(490567),
        X = r(292795),
        J = r(7940),
        $ = (0, f.ZP)(),
        ee = m.kJ.getState(),
        [et, en] = s.useState(ee.inspectedExpressionPosition),
        [er, ei] = (0, d.Z)(null, 300),
        ea = s.useRef(null);
    s.useEffect(
        () =>
            m.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => en(e)
            ),
        []
    ),
        s.useEffect(() => {
            E.DZ.loadIfNecessary();
        }, []);
    let es = i === S.Su.LARGE,
        eo = i === S.Su.MEDIUM,
        el = (e) => {
            let n = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                r = function () {
                    var r;
                    let { onMouseEnter: i, onMouseLeave: o, handleSelect: u, icon: d, ariaLabel: f, shouldShowRoundHighlight: _ } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: p } = e,
                        { ref: m, tabIndex: g, onFocus: E, ...v } = null !== (r = D(p, P)) && void 0 !== r ? r : {},
                        I = et.rowIndex === h && et.columnIndex === p,
                        T = () => {
                            !x.current && !w.current && R(e);
                        };
                    return (0, s.createElement)(
                        'li',
                        {
                            ...v,
                            key: n
                        },
                        (0, a.jsx)(c.FocusRing, {
                            children: (0, a.jsx)('button', {
                                'aria-label': f,
                                ref: m,
                                className: l()(C.emojiItem, {
                                    [C.emojiItemLarge]: es,
                                    [C.emojiItemMedium]: eo,
                                    [C.emojiItemSelected]: I && !_,
                                    [null != G ? G : '']: I,
                                    [C.showPulse]: er === n
                                }),
                                onFocus: null != E ? E : T,
                                onMouseOver: T,
                                onMouseEnter: i,
                                onMouseLeave: o,
                                onClick: u,
                                tabIndex: g,
                                children: d
                            })
                        })
                    );
                };
            switch (e.type) {
                case b.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: i } = e,
                        s = et.rowIndex === n && et.columnIndex === i,
                        l = (n) => {
                            n.stopPropagation(),
                                !x.current &&
                                    !w.current &&
                                    (o(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, _.D)(e.guildId),
                                    !e.sectionCollapsedToThreeRows && j(),
                                    I.default.track(A.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        c = e.sectionCollapsedToThreeRows ? (s ? ((0, u.wj)($) ? Q : J) : (0, u.wj)($) ? Y : W) : s ? ((0, u.wj)($) ? q : X) : (0, u.wj)($) ? K : z,
                        d = N.intl.string(e.sectionCollapsedToThreeRows ? N.t.NZI2Zm : N.t['/K2RDA']);
                    return r({
                        handleSelect: l,
                        icon: (0, a.jsx)('img', {
                            className: C.icon,
                            src: c,
                            alt: ''
                        }),
                        ariaLabel: d,
                        shouldShowRoundHighlight: !0
                    });
                }
                case b.ld.CREATE_EMOJI: {
                    let n = (n) => {
                            n.stopPropagation(),
                                !x.current &&
                                    !w.current &&
                                    (o(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    g.Z.open(e.guildId, A.pNK.EMOJI, A.jXE.EMOJI_PICKER_POPOUT));
                        },
                        i = (0, a.jsx)(c.CirclePlusIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.icon,
                            colorClass: C.icon
                        });
                    return r({
                        handleSelect: n,
                        icon: i,
                        ariaLabel: N.intl.string(N.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case b.ld.EMOJI: {
                    var i;
                    let { columnIndex: r, visibleRowIndex: s } = e,
                        l = et.rowIndex === s && et.columnIndex === r;
                    return (0, a.jsx)(
                        y.Z,
                        {
                            rowIndex: P,
                            descriptor: e,
                            emojiItemKey: n,
                            isInspected: l,
                            isScrolling: x,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: O,
                            allowAnimatedEmoji: M,
                            selectedItemClassName: G,
                            onSelect: o,
                            onInspect: R,
                            channelGuildId: U,
                            getEmojiItemProps: D,
                            isMediumSize: eo,
                            isLargeSize: es,
                            pulseItemKey: er,
                            setPulseItemKey: ei,
                            showEmojiFavoriteTooltip: k,
                            messageId: Z,
                            isBurstReaction: F,
                            rowPosition: null == ea ? void 0 : null === (i = ea.current) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                            inNitroLockedSection: V
                        },
                        n
                    );
                }
            }
        },
        eu = (e) =>
            (0, a.jsx)('ul', {
                ...L(P),
                className: l()(C.emojiListRow, {
                    [C.emojiListRowLargeSize]: es,
                    [C.emojiListRowMediumSize]: eo
                }),
                ref: ea,
                children: e.map(el)
            });
    if (B !== S.En.TOP_GUILD_EMOJI) return eu(n);
    let ec = n.filter((e) => {
            if (H && e.type === b.ld.CREATE_EMOJI) return !0;
            let n = e;
            return n.subCategory === S.t0.TOP_GUILD_EMOJI || (n.subCategory === S.t0.NEWLY_ADDED_EMOJI && n.emoji.type === h.B.GUILD && !p.Z.isNewerThanLastSeen(n.emoji.guildId, n.emoji.id));
        }),
        ed = n.filter((e) => {
            let n = e;
            return n.subCategory === S.t0.NEWLY_ADDED_EMOJI && n.emoji.type === h.B.GUILD && p.Z.isNewerThanLastSeen(n.emoji.guildId, n.emoji.id);
        });
    return 0 === ed.length
        ? eu(n)
        : (0, a.jsxs)('div', {
              className: C.topEmojiSectionContainer,
              children: [
                  (0, a.jsx)('div', {
                      className: l()(C.topEmojiContainer, { [C.noEmojis]: 0 === ec.length }),
                      children: eu(ec)
                  }),
                  (0, a.jsxs)('div', {
                      className: C.newlyAddedHighlightContainer,
                      children: [
                          (0, a.jsx)('div', {
                              className: l()(C.newlyAddedHighlight, {
                                  [C.oneItem]: 1 === ed.length,
                                  [C.alignRight]: ec.length > 0
                              }),
                              children: eu(ed)
                          }),
                          (0, a.jsxs)('div', {
                              className: l()(C.newlyAddedBadge, {
                                  [C.newlyAddedBadgeLarge]: es,
                                  [C.newlyAddedBadgeMedium]: eo,
                                  [C.alignRight]: ec.length > 0
                              }),
                              children: [
                                  (0, a.jsx)(v.Z, { foreground: C.newlyAddedBadgeStar }),
                                  (0, a.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: N.intl.string(N.t.y2b7CA)
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
n.Z = R;
