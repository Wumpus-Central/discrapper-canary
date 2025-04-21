n.d(t, { Z: () => L }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(481060),
    c = n(330726),
    u = n(410030),
    d = n(255963),
    f = n(906411),
    _ = n(438332),
    p = n(806966),
    h = n(434404),
    m = n(598804),
    g = n(675478),
    E = n(819758),
    b = n(626135),
    y = n(392552),
    v = n(784222),
    O = n(926243),
    I = n(149203),
    S = n(981631),
    T = n(388032),
    A = n(139642);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = (e) => {
    let { emojiDescriptors: t, emojiSize: a, onSelect: N, onSelectSoundmoji: R, onInspect: D, surrogateCodePoint: L, getEmojiItemProps: x, getEmojiRowProps: M, isScrolling: k, isUsingKeyboardNavigation: j, rowIndex: U, allowAnimatedEmoji: G, showEmojiFavoriteTooltip: B, channelGuildId: F, category: V, selectedItemClassName: Z, channelId: H, messageId: Y, isBurstReaction: W, inNitroLockedSection: K, handleScrollUpOnSectionCollapse: z } = e,
        { enabled: q } = y.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        Q = n(187119),
        X = n(39874),
        J = n(853871),
        $ = n(63149),
        ee = n(263112),
        et = n(490567),
        en = n(292795),
        er = n(7940),
        ei = (0, u.ZP)(),
        ea = p.kJ.getState(),
        [eo, es] = i.useState(ea.inspectedExpressionPosition),
        [el, ec] = (0, c.Z)(null, 300),
        eu = i.useRef(null);
    i.useEffect(
        () =>
            p.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => es(e)
            ),
        []
    ),
        i.useEffect(() => {
            g.DZ.loadIfNecessary();
        }, []);
    let ed = a === I.Su.LARGE,
        ef = a === I.Su.MEDIUM,
        e_ = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: s, handleSelect: c, icon: u, ariaLabel: d, shouldShowRoundHighlight: f } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: p } = e,
                        h = null != (n = x(p, U)) ? n : {},
                        { ref: m, tabIndex: g, onFocus: E } = h,
                        b = w(h, ['ref', 'tabIndex', 'onFocus']),
                        y = eo.rowIndex === _ && eo.columnIndex === p,
                        v = () => {
                            k.current || j.current || D(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        P(C({}, b), { key: t }),
                        (0, r.jsx)(l.tEY, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: m,
                                className: o()(A.emojiItem, {
                                    [A.emojiItemLarge]: ed,
                                    [A.emojiItemMedium]: ef,
                                    [A.emojiItemSelected]: y && !f,
                                    [null != Z ? Z : '']: y,
                                    [A.showPulse]: el === t
                                }),
                                onFocus: null != E ? E : v,
                                onMouseOver: v,
                                onMouseEnter: a,
                                onMouseLeave: s,
                                onClick: c,
                                tabIndex: g,
                                children: u
                            })
                        })
                    );
                };
            switch (e.type) {
                case v.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = eo.rowIndex === t && eo.columnIndex === i,
                        o = (t) => {
                            t.stopPropagation(),
                                k.current ||
                                    j.current ||
                                    (N(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, d.D)(e.guildId),
                                    e.sectionCollapsedToThreeRows || z(),
                                    b.default.track(S.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows ? (a ? ((0, s.wj)(ei) ? et : er) : (0, s.wj)(ei) ? Q : X) : a ? ((0, s.wj)(ei) ? ee : en) : (0, s.wj)(ei) ? J : $,
                        c = T.intl.string(e.sectionCollapsedToThreeRows ? T.t.NZI2Zm : T.t['/K2RDA']);
                    return n({
                        handleSelect: o,
                        icon: (0, r.jsx)('img', {
                            className: A.icon,
                            src: l,
                            alt: ''
                        }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0
                    });
                }
                case v.ld.CREATE_EMOJI: {
                    let t = (t) => {
                        t.stopPropagation(),
                            k.current ||
                                j.current ||
                                (N(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }),
                                h.Z.open(e.guildId, S.pNK.EMOJI, S.jXE.EMOJI_PICKER_POPOUT));
                    };
                    return n({
                        handleSelect: t,
                        icon: (0, r.jsx)(l.oFk, {
                            size: 'md',
                            color: 'currentColor',
                            className: A.icon,
                            colorClass: A.icon
                        }),
                        ariaLabel: T.intl.string(T.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case v.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        o = eo.rowIndex === i && eo.columnIndex === n;
                    return (0, r.jsx)(
                        O.Z,
                        {
                            rowIndex: U,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: o,
                            isScrolling: k,
                            isUsingKeyboardNavigation: j,
                            surrogateCodePoint: L,
                            allowAnimatedEmoji: G,
                            selectedItemClassName: Z,
                            onSelect: N,
                            onInspect: D,
                            channelGuildId: F,
                            getEmojiItemProps: x,
                            isMediumSize: ef,
                            isLargeSize: ed,
                            pulseItemKey: el,
                            setPulseItemKey: ec,
                            showEmojiFavoriteTooltip: B,
                            messageId: Y,
                            isBurstReaction: W,
                            rowPosition: null == eu || null == (a = eu.current) ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: K
                        },
                        t
                    );
                }
                case v.ld.SOUNDMOJI:
                    return;
            }
        },
        ep = (e) =>
            (0, r.jsx)(
                'ul',
                P(C({}, M(U)), {
                    className: o()(A.emojiListRow, {
                        [A.emojiListRowLargeSize]: ed,
                        [A.emojiListRowMediumSize]: ef
                    }),
                    ref: eu,
                    children: e.map(e_)
                })
            );
    if (V === I.UX.SOUNDMOJI)
        return (0, r.jsx)('ul', {
            className: A.emojiListRow,
            ref: eu,
            children: (0, r.jsx)(m.Z, {
                channelId: H,
                onSelectSoundmoji: R
            })
        });
    if (V !== I.En.TOP_GUILD_EMOJI) return ep(t);
    let eh = t.filter((e) => {
            if (q && e.type === v.ld.CREATE_EMOJI) return !0;
            let t = e;
            return t.subCategory === I.t0.TOP_GUILD_EMOJI || (t.subCategory === I.t0.NEWLY_ADDED_EMOJI && t.emoji.type === f.B.GUILD && !_.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id));
        }),
        em = t.filter((e) => {
            let t = e;
            return t.subCategory === I.t0.NEWLY_ADDED_EMOJI && t.emoji.type === f.B.GUILD && _.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id);
        });
    return 0 === em.length
        ? ep(t)
        : (0, r.jsxs)('div', {
              className: A.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(A.topEmojiContainer, { [A.noEmojis]: 0 === eh.length }),
                      children: ep(eh)
                  }),
                  (0, r.jsxs)('div', {
                      className: A.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: o()(A.newlyAddedHighlight, {
                                  [A.oneItem]: 1 === em.length,
                                  [A.alignRight]: eh.length > 0
                              }),
                              children: ep(em)
                          }),
                          (0, r.jsxs)('div', {
                              className: o()(A.newlyAddedBadge, {
                                  [A.newlyAddedBadgeLarge]: ed,
                                  [A.newlyAddedBadgeMedium]: ef,
                                  [A.alignRight]: eh.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(E.Z, { foreground: A.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: T.intl.string(T.t.y2b7CA)
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
