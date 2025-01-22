var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(780384),
    c = r(481060),
    d = r(330726),
    f = r(410030),
    p = r(255963),
    h = r(906411),
    _ = r(438332),
    m = r(806966),
    g = r(434404),
    E = r(598804),
    v = r(675478),
    y = r(819758),
    b = r(626135),
    I = r(392552),
    T = r(784222),
    S = r(926243),
    A = r(149203),
    C = r(981631),
    N = r(388032),
    R = r(538891);
let O = (e) => {
    let { emojiDescriptors: n, emojiSize: i, onSelect: s, onSelectSoundmoji: O, onInspect: D, surrogateCodePoint: L, getEmojiItemProps: x, getEmojiRowProps: w, isScrolling: P, isUsingKeyboardNavigation: M, rowIndex: k, allowAnimatedEmoji: U, showEmojiFavoriteTooltip: B, channelGuildId: G, category: Z, selectedItemClassName: F, channelId: V, messageId: j, isBurstReaction: H, inNitroLockedSection: Y, handleScrollUpOnSectionCollapse: W } = e,
        { enabled: K } = I.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        z = r(187119),
        q = r(39874),
        Q = r(853871),
        X = r(63149),
        J = r(263112),
        $ = r(490567),
        ee = r(292795),
        et = r(7940),
        en = (0, f.ZP)(),
        er = m.kJ.getState(),
        [ei, ea] = o.useState(er.inspectedExpressionPosition),
        [eo, es] = (0, d.Z)(null, 300),
        el = o.useRef(null);
    o.useEffect(
        () =>
            m.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => ea(e)
            ),
        []
    ),
        o.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []);
    let eu = i === A.Su.LARGE,
        ec = i === A.Su.MEDIUM,
        ed = (e) => {
            let n = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                r = function () {
                    var r;
                    let { onMouseEnter: i, onMouseLeave: s, handleSelect: u, icon: d, ariaLabel: f, shouldShowRoundHighlight: p } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: _ } = e,
                        { ref: m, tabIndex: g, onFocus: E, ...v } = null !== (r = x(_, k)) && void 0 !== r ? r : {},
                        y = ei.rowIndex === h && ei.columnIndex === _,
                        b = () => {
                            !P.current && !M.current && D(e);
                        };
                    return (0, o.createElement)(
                        'li',
                        {
                            ...v,
                            key: n
                        },
                        (0, a.jsx)(c.FocusRing, {
                            children: (0, a.jsx)('button', {
                                'aria-label': f,
                                ref: m,
                                className: l()(R.emojiItem, {
                                    [R.emojiItemLarge]: eu,
                                    [R.emojiItemMedium]: ec,
                                    [R.emojiItemSelected]: y && !p,
                                    [null != F ? F : '']: y,
                                    [R.showPulse]: eo === n
                                }),
                                onFocus: null != E ? E : b,
                                onMouseOver: b,
                                onMouseEnter: i,
                                onMouseLeave: s,
                                onClick: u,
                                tabIndex: g,
                                children: d
                            })
                        })
                    );
                };
            switch (e.type) {
                case T.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: i } = e,
                        o = ei.rowIndex === n && ei.columnIndex === i,
                        l = (n) => {
                            n.stopPropagation(),
                                !P.current &&
                                    !M.current &&
                                    (s(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, p.D)(e.guildId),
                                    !e.sectionCollapsedToThreeRows && W(),
                                    b.default.track(C.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        c = e.sectionCollapsedToThreeRows ? (o ? ((0, u.wj)(en) ? $ : et) : (0, u.wj)(en) ? z : q) : o ? ((0, u.wj)(en) ? J : ee) : (0, u.wj)(en) ? Q : X,
                        d = N.intl.string(e.sectionCollapsedToThreeRows ? N.t.NZI2Zm : N.t['/K2RDA']);
                    return r({
                        handleSelect: l,
                        icon: (0, a.jsx)('img', {
                            className: R.icon,
                            src: c,
                            alt: ''
                        }),
                        ariaLabel: d,
                        shouldShowRoundHighlight: !0
                    });
                }
                case T.ld.CREATE_EMOJI: {
                    let n = (n) => {
                            n.stopPropagation(),
                                !P.current &&
                                    !M.current &&
                                    (s(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    g.Z.open(e.guildId, C.pNK.EMOJI, C.jXE.EMOJI_PICKER_POPOUT));
                        },
                        i = (0, a.jsx)(c.CirclePlusIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: R.icon,
                            colorClass: R.icon
                        });
                    return r({
                        handleSelect: n,
                        icon: i,
                        ariaLabel: N.intl.string(N.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case T.ld.EMOJI: {
                    var i;
                    let { columnIndex: r, visibleRowIndex: o } = e,
                        l = ei.rowIndex === o && ei.columnIndex === r;
                    return (0, a.jsx)(
                        S.Z,
                        {
                            rowIndex: k,
                            descriptor: e,
                            emojiItemKey: n,
                            isInspected: l,
                            isScrolling: P,
                            isUsingKeyboardNavigation: M,
                            surrogateCodePoint: L,
                            allowAnimatedEmoji: U,
                            selectedItemClassName: F,
                            onSelect: s,
                            onInspect: D,
                            channelGuildId: G,
                            getEmojiItemProps: x,
                            isMediumSize: ec,
                            isLargeSize: eu,
                            pulseItemKey: eo,
                            setPulseItemKey: es,
                            showEmojiFavoriteTooltip: B,
                            messageId: j,
                            isBurstReaction: H,
                            rowPosition: null == el ? void 0 : null === (i = el.current) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                            inNitroLockedSection: Y
                        },
                        n
                    );
                }
                case T.ld.SOUNDMOJI:
                    return;
            }
        },
        ef = (e) =>
            (0, a.jsx)('ul', {
                ...w(k),
                className: l()(R.emojiListRow, {
                    [R.emojiListRowLargeSize]: eu,
                    [R.emojiListRowMediumSize]: ec
                }),
                ref: el,
                children: e.map(ed)
            });
    if (Z === A.UX.SOUNDMOJI)
        return (0, a.jsx)('ul', {
            className: l()(R.emojiListRow),
            ref: el,
            children: (0, a.jsx)(E.Z, {
                channelId: V,
                onSelectSoundmoji: O
            })
        });
    if (Z !== A.En.TOP_GUILD_EMOJI) return ef(n);
    let ep = n.filter((e) => {
            if (K && e.type === T.ld.CREATE_EMOJI) return !0;
            let n = e;
            return n.subCategory === A.t0.TOP_GUILD_EMOJI || (n.subCategory === A.t0.NEWLY_ADDED_EMOJI && n.emoji.type === h.B.GUILD && !_.Z.isNewerThanLastSeen(n.emoji.guildId, n.emoji.id));
        }),
        eh = n.filter((e) => {
            let n = e;
            return n.subCategory === A.t0.NEWLY_ADDED_EMOJI && n.emoji.type === h.B.GUILD && _.Z.isNewerThanLastSeen(n.emoji.guildId, n.emoji.id);
        });
    return 0 === eh.length
        ? ef(n)
        : (0, a.jsxs)('div', {
              className: R.topEmojiSectionContainer,
              children: [
                  (0, a.jsx)('div', {
                      className: l()(R.topEmojiContainer, { [R.noEmojis]: 0 === ep.length }),
                      children: ef(ep)
                  }),
                  (0, a.jsxs)('div', {
                      className: R.newlyAddedHighlightContainer,
                      children: [
                          (0, a.jsx)('div', {
                              className: l()(R.newlyAddedHighlight, {
                                  [R.oneItem]: 1 === eh.length,
                                  [R.alignRight]: ep.length > 0
                              }),
                              children: ef(eh)
                          }),
                          (0, a.jsxs)('div', {
                              className: l()(R.newlyAddedBadge, {
                                  [R.newlyAddedBadgeLarge]: eu,
                                  [R.newlyAddedBadgeMedium]: ec,
                                  [R.alignRight]: ep.length > 0
                              }),
                              children: [
                                  (0, a.jsx)(y.Z, { foreground: R.newlyAddedBadgeStar }),
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
n.Z = O;
