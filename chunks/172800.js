(n.d(t, { Z: () => x }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(481060),
    c = n(330726),
    u = n(410030),
    d = n(556019),
    f = n(255963),
    _ = n(906411),
    p = n(438332),
    h = n(806966),
    m = n(434404),
    g = n(598804),
    E = n(675478),
    b = n(819758),
    y = n(626135),
    O = n(392552),
    v = n(784222),
    I = n(926243),
    T = n(149203),
    S = n(981631),
    A = n(388032),
    N = n(139642);
function C(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            }));
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let x = (e) => {
    let { emojiDescriptors: t, emojiSize: a, onSelect: C, onSelectSoundmoji: P, onInspect: L, surrogateCodePoint: x, getEmojiItemProps: M, getEmojiRowProps: k, isScrolling: j, isUsingKeyboardNavigation: U, rowIndex: G, allowAnimatedEmoji: B, showEmojiFavoriteTooltip: V, channelGuildId: F, category: Z, selectedItemClassName: H, channelId: Y, messageId: W, isBurstReaction: K, inNitroLockedSection: z, handleScrollUpOnSectionCollapse: q } = e,
        { enabled: X } = O.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        { enabled: Q } = (0, d.q)({
            location: 'emoji_picker_list_row',
            autoTrackExposure: !1
        }),
        J = n(187119),
        $ = n(39874),
        ee = n(853871),
        et = n(63149),
        en = n(263112),
        er = n(490567),
        ei = n(292795),
        ea = n(7940),
        eo = (0, u.ZP)(),
        es = h.kJ.getState(),
        [el, ec] = i.useState(es.inspectedExpressionPosition),
        [eu, ed] = (0, c.Z)(null, 300),
        ef = i.useRef(null);
    (i.useEffect(
        () =>
            h.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => ec(e)
            ),
        []
    ),
        i.useEffect(() => {
            E.DZ.loadIfNecessary();
        }, []));
    let e_ = a === T.Su.LARGE,
        ep = a === T.Su.MEDIUM,
        eh = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: s, handleSelect: c, icon: u, ariaLabel: d, shouldShowRoundHighlight: f } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: p } = e,
                        h = null != (n = M(p, G)) ? n : {},
                        { ref: m, tabIndex: g, onFocus: E } = h,
                        b = D(h, ['ref', 'tabIndex', 'onFocus']),
                        y = el.rowIndex === _ && el.columnIndex === p,
                        O = () => {
                            j.current || U.current || L(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        w(R({}, b), { key: t }),
                        (0, r.jsx)(l.tEY, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: m,
                                className: o()(N.emojiItem, {
                                    [N.emojiItemLarge]: e_,
                                    [N.emojiItemMedium]: ep,
                                    [N.emojiItemSelected]: y && !f,
                                    [null != H ? H : '']: y,
                                    [N.showPulse]: eu === t
                                }),
                                onFocus: null != E ? E : O,
                                onMouseOver: O,
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
                        a = el.rowIndex === t && el.columnIndex === i,
                        o = (t) => {
                            (t.stopPropagation(),
                                j.current ||
                                    U.current ||
                                    (C(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, f.D)(e.guildId),
                                    e.sectionCollapsedToThreeRows || q(),
                                    y.default.track(S.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    })));
                        },
                        l = e.sectionCollapsedToThreeRows ? (a ? ((0, s.wj)(eo) ? er : ea) : (0, s.wj)(eo) ? J : $) : a ? ((0, s.wj)(eo) ? en : ei) : (0, s.wj)(eo) ? ee : et,
                        c = A.intl.string(e.sectionCollapsedToThreeRows ? A.t.NZI2Zm : A.t['/K2RDA']);
                    return n({
                        handleSelect: o,
                        icon: (0, r.jsx)('img', {
                            className: N.icon,
                            src: l,
                            alt: ''
                        }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0
                    });
                }
                case v.ld.CREATE_EMOJI: {
                    if (Q) return null;
                    let t = (t) => {
                        (t.stopPropagation(),
                            j.current ||
                                U.current ||
                                (C(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }),
                                m.Z.open(e.guildId, S.pNK.EMOJI, S.jXE.EMOJI_PICKER_POPOUT)));
                    };
                    return n({
                        handleSelect: t,
                        icon: (0, r.jsx)(l.oFk, {
                            size: 'md',
                            color: 'currentColor',
                            className: N.icon,
                            colorClass: N.icon
                        }),
                        ariaLabel: A.intl.string(A.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case v.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        o = el.rowIndex === i && el.columnIndex === n;
                    return (0, r.jsx)(
                        I.Z,
                        {
                            rowIndex: G,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: o,
                            isScrolling: j,
                            isUsingKeyboardNavigation: U,
                            surrogateCodePoint: x,
                            allowAnimatedEmoji: B,
                            selectedItemClassName: H,
                            onSelect: C,
                            onInspect: L,
                            channelGuildId: F,
                            getEmojiItemProps: M,
                            isMediumSize: ep,
                            isLargeSize: e_,
                            pulseItemKey: eu,
                            setPulseItemKey: ed,
                            showEmojiFavoriteTooltip: V,
                            messageId: W,
                            isBurstReaction: K,
                            rowPosition: null == ef || null == (a = ef.current) ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: z
                        },
                        t
                    );
                }
                case v.ld.SOUNDMOJI:
                    return;
            }
        },
        em = (e) =>
            (0, r.jsx)(
                'ul',
                w(R({}, k(G)), {
                    className: o()(N.emojiListRow, {
                        [N.emojiListRowLargeSize]: e_,
                        [N.emojiListRowMediumSize]: ep
                    }),
                    ref: ef,
                    children: e.map(eh)
                })
            );
    if (Z === T.UX.SOUNDMOJI)
        return (0, r.jsx)('ul', {
            className: N.emojiListRow,
            ref: ef,
            children: (0, r.jsx)(g.Z, {
                channelId: Y,
                onSelectSoundmoji: P
            })
        });
    if (Z !== T.En.TOP_GUILD_EMOJI) return em(t);
    let eg = t.filter((e) => {
            if (X && e.type === v.ld.CREATE_EMOJI) return !0;
            let t = e;
            return t.subCategory === T.t0.TOP_GUILD_EMOJI || (t.subCategory === T.t0.NEWLY_ADDED_EMOJI && t.emoji.type === _.B.GUILD && !p.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id));
        }),
        eE = t.filter((e) => {
            let t = e;
            return t.subCategory === T.t0.NEWLY_ADDED_EMOJI && t.emoji.type === _.B.GUILD && p.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id);
        });
    return 0 === eE.length
        ? em(t)
        : (0, r.jsxs)('div', {
              className: N.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(N.topEmojiContainer, { [N.noEmojis]: 0 === eg.length }),
                      children: em(eg)
                  }),
                  (0, r.jsxs)('div', {
                      className: N.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: o()(N.newlyAddedHighlight, {
                                  [N.oneItem]: 1 === eE.length,
                                  [N.alignRight]: eg.length > 0
                              }),
                              children: em(eE)
                          }),
                          (0, r.jsxs)('div', {
                              className: o()(N.newlyAddedBadge, {
                                  [N.newlyAddedBadgeLarge]: e_,
                                  [N.newlyAddedBadgeMedium]: ep,
                                  [N.alignRight]: eg.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(b.Z, { foreground: N.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
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
