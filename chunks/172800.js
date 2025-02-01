n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(330726),
    c = n(410030),
    d = n(255963),
    f = n(906411),
    _ = n(438332),
    p = n(806966),
    h = n(434404),
    m = n(598804),
    g = n(675478),
    E = n(819758),
    v = n(626135),
    y = n(392552),
    I = n(784222),
    T = n(926243),
    b = n(149203),
    S = n(981631),
    A = n(388032),
    N = n(538891);
let C = (e) => {
    let { emojiDescriptors: t, emojiSize: a, onSelect: C, onSelectSoundmoji: R, onInspect: O, surrogateCodePoint: D, getEmojiItemProps: x, getEmojiRowProps: L, isScrolling: P, isUsingKeyboardNavigation: w, rowIndex: M, allowAnimatedEmoji: k, showEmojiFavoriteTooltip: U, channelGuildId: G, category: B, selectedItemClassName: Z, channelId: F, messageId: V, isBurstReaction: j, inNitroLockedSection: H, handleScrollUpOnSectionCollapse: Y } = e,
        { enabled: W } = y.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        K = n(187119),
        z = n(39874),
        q = n(853871),
        Q = n(63149),
        X = n(263112),
        J = n(490567),
        $ = n(292795),
        ee = n(7940),
        et = (0, c.ZP)(),
        en = p.kJ.getState(),
        [ei, er] = r.useState(en.inspectedExpressionPosition),
        [ea, es] = (0, u.Z)(null, 300),
        eo = r.useRef(null);
    r.useEffect(
        () =>
            p.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => er(e)
            ),
        []
    ),
        r.useEffect(() => {
            g.DZ.loadIfNecessary();
        }, []);
    let el = a === b.Su.LARGE,
        eu = a === b.Su.MEDIUM,
        ec = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: o, handleSelect: u, icon: c, ariaLabel: d, shouldShowRoundHighlight: f } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: p } = e,
                        { ref: h, tabIndex: m, onFocus: g, ...E } = null !== (n = x(p, M)) && void 0 !== n ? n : {},
                        v = ei.rowIndex === _ && ei.columnIndex === p,
                        y = () => {
                            P.current || w.current || O(e);
                        };
                    return (0, r.createElement)(
                        'li',
                        {
                            ...E,
                            key: t
                        },
                        (0, i.jsx)(l.tEY, {
                            children: (0, i.jsx)('button', {
                                'aria-label': d,
                                ref: h,
                                className: s()(N.emojiItem, {
                                    [N.emojiItemLarge]: el,
                                    [N.emojiItemMedium]: eu,
                                    [N.emojiItemSelected]: v && !f,
                                    [null != Z ? Z : '']: v,
                                    [N.showPulse]: ea === t
                                }),
                                onFocus: null != g ? g : y,
                                onMouseOver: y,
                                onMouseEnter: a,
                                onMouseLeave: o,
                                onClick: u,
                                tabIndex: m,
                                children: c
                            })
                        })
                    );
                };
            switch (e.type) {
                case I.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: r } = e,
                        a = ei.rowIndex === t && ei.columnIndex === r,
                        s = (t) => {
                            t.stopPropagation(),
                                P.current ||
                                    w.current ||
                                    (C(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, d.D)(e.guildId),
                                    e.sectionCollapsedToThreeRows || Y(),
                                    v.default.track(S.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows ? (a ? ((0, o.wj)(et) ? J : ee) : (0, o.wj)(et) ? K : z) : a ? ((0, o.wj)(et) ? X : $) : (0, o.wj)(et) ? q : Q,
                        u = A.intl.string(e.sectionCollapsedToThreeRows ? A.t.NZI2Zm : A.t['/K2RDA']);
                    return n({
                        handleSelect: s,
                        icon: (0, i.jsx)('img', {
                            className: N.icon,
                            src: l,
                            alt: ''
                        }),
                        ariaLabel: u,
                        shouldShowRoundHighlight: !0
                    });
                }
                case I.ld.CREATE_EMOJI: {
                    let t = (t) => {
                        t.stopPropagation(),
                            P.current ||
                                w.current ||
                                (C(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }),
                                h.Z.open(e.guildId, S.pNK.EMOJI, S.jXE.EMOJI_PICKER_POPOUT));
                    };
                    return n({
                        handleSelect: t,
                        icon: (0, i.jsx)(l.oFk, {
                            size: 'md',
                            color: 'currentColor',
                            className: N.icon,
                            colorClass: N.icon
                        }),
                        ariaLabel: A.intl.string(A.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case I.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: r } = e,
                        s = ei.rowIndex === r && ei.columnIndex === n;
                    return (0, i.jsx)(
                        T.Z,
                        {
                            rowIndex: M,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: P,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: D,
                            allowAnimatedEmoji: k,
                            selectedItemClassName: Z,
                            onSelect: C,
                            onInspect: O,
                            channelGuildId: G,
                            getEmojiItemProps: x,
                            isMediumSize: eu,
                            isLargeSize: el,
                            pulseItemKey: ea,
                            setPulseItemKey: es,
                            showEmojiFavoriteTooltip: U,
                            messageId: V,
                            isBurstReaction: j,
                            rowPosition: null == eo ? void 0 : null === (a = eo.current) || void 0 === a ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: H
                        },
                        t
                    );
                }
                case I.ld.SOUNDMOJI:
                    return;
            }
        },
        ed = (e) =>
            (0, i.jsx)('ul', {
                ...L(M),
                className: s()(N.emojiListRow, {
                    [N.emojiListRowLargeSize]: el,
                    [N.emojiListRowMediumSize]: eu
                }),
                ref: eo,
                children: e.map(ec)
            });
    if (B === b.UX.SOUNDMOJI)
        return (0, i.jsx)('ul', {
            className: s()(N.emojiListRow),
            ref: eo,
            children: (0, i.jsx)(m.Z, {
                channelId: F,
                onSelectSoundmoji: R
            })
        });
    if (B !== b.En.TOP_GUILD_EMOJI) return ed(t);
    let ef = t.filter((e) => {
            if (W && e.type === I.ld.CREATE_EMOJI) return !0;
            let t = e;
            return t.subCategory === b.t0.TOP_GUILD_EMOJI || (t.subCategory === b.t0.NEWLY_ADDED_EMOJI && t.emoji.type === f.B.GUILD && !_.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id));
        }),
        e_ = t.filter((e) => {
            let t = e;
            return t.subCategory === b.t0.NEWLY_ADDED_EMOJI && t.emoji.type === f.B.GUILD && _.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id);
        });
    return 0 === e_.length
        ? ed(t)
        : (0, i.jsxs)('div', {
              className: N.topEmojiSectionContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: s()(N.topEmojiContainer, { [N.noEmojis]: 0 === ef.length }),
                      children: ed(ef)
                  }),
                  (0, i.jsxs)('div', {
                      className: N.newlyAddedHighlightContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: s()(N.newlyAddedHighlight, {
                                  [N.oneItem]: 1 === e_.length,
                                  [N.alignRight]: ef.length > 0
                              }),
                              children: ed(e_)
                          }),
                          (0, i.jsxs)('div', {
                              className: s()(N.newlyAddedBadge, {
                                  [N.newlyAddedBadgeLarge]: el,
                                  [N.newlyAddedBadgeMedium]: eu,
                                  [N.alignRight]: ef.length > 0
                              }),
                              children: [
                                  (0, i.jsx)(E.Z, { foreground: N.newlyAddedBadgeStar }),
                                  (0, i.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: A.intl.string(A.t.y2b7CA)
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
