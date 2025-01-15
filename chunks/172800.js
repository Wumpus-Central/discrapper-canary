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
    E = r(598804),
    v = r(675478),
    I = r(819758),
    T = r(626135),
    b = r(392552),
    y = r(784222),
    S = r(926243),
    A = r(149203),
    N = r(981631),
    C = r(388032),
    R = r(858400);
let O = (e) => {
    let { emojiDescriptors: n, emojiSize: i, onSelect: o, onSelectSoundmoji: O, onInspect: D, surrogateCodePoint: L, getEmojiItemProps: x, getEmojiRowProps: w, isScrolling: P, isUsingKeyboardNavigation: M, rowIndex: k, allowAnimatedEmoji: U, showEmojiFavoriteTooltip: B, channelGuildId: G, category: F, selectedItemClassName: Z, channelId: V, messageId: j, isBurstReaction: H, inNitroLockedSection: Y, handleScrollUpOnSectionCollapse: W } = e,
        { enabled: K } = b.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
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
        [ei, ea] = s.useState(er.inspectedExpressionPosition),
        [es, eo] = (0, d.Z)(null, 300),
        el = s.useRef(null);
    s.useEffect(
        () =>
            m.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => ea(e)
            ),
        []
    ),
        s.useEffect(() => {
            v.DZ.loadIfNecessary();
        }, []);
    let eu = i === A.Su.LARGE,
        ec = i === A.Su.MEDIUM,
        ed = (e) => {
            let n = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                r = function () {
                    var r;
                    let { onMouseEnter: i, onMouseLeave: o, handleSelect: u, icon: d, ariaLabel: f, shouldShowRoundHighlight: _ } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: h, columnIndex: p } = e,
                        { ref: m, tabIndex: g, onFocus: E, ...v } = null !== (r = x(p, k)) && void 0 !== r ? r : {},
                        I = ei.rowIndex === h && ei.columnIndex === p,
                        T = () => {
                            !P.current && !M.current && D(e);
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
                                className: l()(R.emojiItem, {
                                    [R.emojiItemLarge]: eu,
                                    [R.emojiItemMedium]: ec,
                                    [R.emojiItemSelected]: I && !_,
                                    [null != Z ? Z : '']: I,
                                    [R.showPulse]: es === n
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
                case y.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: n, columnIndex: i } = e,
                        s = ei.rowIndex === n && ei.columnIndex === i,
                        l = (n) => {
                            n.stopPropagation(),
                                !P.current &&
                                    !M.current &&
                                    (o(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, _.D)(e.guildId),
                                    !e.sectionCollapsedToThreeRows && W(),
                                    T.default.track(N.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        c = e.sectionCollapsedToThreeRows ? (s ? ((0, u.wj)(en) ? $ : et) : (0, u.wj)(en) ? z : q) : s ? ((0, u.wj)(en) ? J : ee) : (0, u.wj)(en) ? Q : X,
                        d = C.intl.string(e.sectionCollapsedToThreeRows ? C.t.NZI2Zm : C.t['/K2RDA']);
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
                case y.ld.CREATE_EMOJI: {
                    let n = (n) => {
                            n.stopPropagation(),
                                !P.current &&
                                    !M.current &&
                                    (o(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    g.Z.open(e.guildId, N.pNK.EMOJI, N.jXE.EMOJI_PICKER_POPOUT));
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
                        ariaLabel: C.intl.string(C.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case y.ld.EMOJI: {
                    var i;
                    let { columnIndex: r, visibleRowIndex: s } = e,
                        l = ei.rowIndex === s && ei.columnIndex === r;
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
                            selectedItemClassName: Z,
                            onSelect: o,
                            onInspect: D,
                            channelGuildId: G,
                            getEmojiItemProps: x,
                            isMediumSize: ec,
                            isLargeSize: eu,
                            pulseItemKey: es,
                            setPulseItemKey: eo,
                            showEmojiFavoriteTooltip: B,
                            messageId: j,
                            isBurstReaction: H,
                            rowPosition: null == el ? void 0 : null === (i = el.current) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                            inNitroLockedSection: Y
                        },
                        n
                    );
                }
                case y.ld.SOUNDMOJI:
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
    if (F === A.UX.SOUNDMOJI)
        return (0, a.jsx)('ul', {
            className: l()(R.emojiListRow),
            ref: el,
            children: (0, a.jsx)(E.Z, {
                channelGuildId: G,
                channelId: V,
                onSelectSoundmoji: O
            })
        });
    if (F !== A.En.TOP_GUILD_EMOJI) return ef(n);
    let e_ = n.filter((e) => {
            if (K && e.type === y.ld.CREATE_EMOJI) return !0;
            let n = e;
            return n.subCategory === A.t0.TOP_GUILD_EMOJI || (n.subCategory === A.t0.NEWLY_ADDED_EMOJI && n.emoji.type === h.B.GUILD && !p.Z.isNewerThanLastSeen(n.emoji.guildId, n.emoji.id));
        }),
        eh = n.filter((e) => {
            let n = e;
            return n.subCategory === A.t0.NEWLY_ADDED_EMOJI && n.emoji.type === h.B.GUILD && p.Z.isNewerThanLastSeen(n.emoji.guildId, n.emoji.id);
        });
    return 0 === eh.length
        ? ef(n)
        : (0, a.jsxs)('div', {
              className: R.topEmojiSectionContainer,
              children: [
                  (0, a.jsx)('div', {
                      className: l()(R.topEmojiContainer, { [R.noEmojis]: 0 === e_.length }),
                      children: ef(e_)
                  }),
                  (0, a.jsxs)('div', {
                      className: R.newlyAddedHighlightContainer,
                      children: [
                          (0, a.jsx)('div', {
                              className: l()(R.newlyAddedHighlight, {
                                  [R.oneItem]: 1 === eh.length,
                                  [R.alignRight]: e_.length > 0
                              }),
                              children: ef(eh)
                          }),
                          (0, a.jsxs)('div', {
                              className: l()(R.newlyAddedBadge, {
                                  [R.newlyAddedBadgeLarge]: eu,
                                  [R.newlyAddedBadgeMedium]: ec,
                                  [R.alignRight]: e_.length > 0
                              }),
                              children: [
                                  (0, a.jsx)(I.Z, { foreground: R.newlyAddedBadgeStar }),
                                  (0, a.jsx)(c.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: C.intl.string(C.t.y2b7CA)
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
n.Z = O;
