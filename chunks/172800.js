n.d(t, { Z: () => M }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(780384),
    l = n(481060),
    c = n(330726),
    u = n(410030),
    d = n(556019),
    f = n(375727),
    _ = n(255963),
    p = n(906411),
    h = n(438332),
    m = n(806966),
    g = n(434404),
    E = n(598804),
    b = n(675478),
    y = n(819758),
    O = n(626135),
    v = n(392552),
    I = n(784222),
    S = n(926243),
    T = n(149203),
    A = n(981631),
    N = n(388032),
    C = n(139642);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let M = (e) => {
    let { emojiDescriptors: t, emojiSize: o, onSelect: R, onSelectSoundmoji: w, onInspect: x, surrogateCodePoint: M, getEmojiItemProps: k, getEmojiRowProps: j, isScrolling: U, isUsingKeyboardNavigation: G, rowIndex: B, allowAnimatedEmoji: V, showEmojiFavoriteTooltip: F, channelGuildId: Z, category: H, selectedItemClassName: Y, channelId: W, messageId: K, isBurstReaction: z, inNitroLockedSection: q, handleScrollUpOnSectionCollapse: Q } = e,
        { enabled: X } = v.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        J = (0, d.h)({
            location: 'EmojiPicker',
            autoTrackExposure: !1
        }),
        $ = n(187119),
        ee = n(39874),
        et = n(853871),
        en = n(63149),
        er = n(263112),
        ei = n(490567),
        eo = n(292795),
        ea = n(7940),
        es = (0, u.ZP)(),
        el = m.kJ.getState(),
        [ec, eu] = i.useState(el.inspectedExpressionPosition),
        [ed, ef] = (0, c.Z)(null, 300),
        e_ = i.useRef(null);
    i.useEffect(
        () =>
            m.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => eu(e)
            ),
        []
    ),
        i.useEffect(() => {
            b.DZ.loadIfNecessary();
        }, []);
    let ep = o === T.Su.LARGE,
        eh = o === T.Su.MEDIUM,
        em = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: o, onMouseLeave: s, handleSelect: c, icon: u, ariaLabel: d, shouldShowRoundHighlight: f } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: p } = e,
                        h = null != (n = k(p, B)) ? n : {},
                        { ref: m, tabIndex: g, onFocus: E } = h,
                        b = L(h, ['ref', 'tabIndex', 'onFocus']),
                        y = ec.rowIndex === _ && ec.columnIndex === p,
                        O = () => {
                            U.current || G.current || x(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        D(P({}, b), { key: t }),
                        (0, r.jsx)(l.tEY, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: m,
                                className: a()(C.emojiItem, {
                                    [C.emojiItemLarge]: ep,
                                    [C.emojiItemMedium]: eh,
                                    [C.emojiItemSelected]: y && !f,
                                    [null != Y ? Y : '']: y,
                                    [C.showPulse]: ed === t
                                }),
                                onFocus: null != E ? E : O,
                                onMouseOver: O,
                                onMouseEnter: o,
                                onMouseLeave: s,
                                onClick: c,
                                tabIndex: g,
                                children: u
                            })
                        })
                    );
                };
            switch (e.type) {
                case I.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        o = ec.rowIndex === t && ec.columnIndex === i,
                        a = (t) => {
                            t.stopPropagation(),
                                U.current ||
                                    G.current ||
                                    (R(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, _.D)(e.guildId),
                                    e.sectionCollapsedToThreeRows || Q(),
                                    O.default.track(A.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows ? (o ? ((0, s.wj)(es) ? ei : ea) : (0, s.wj)(es) ? $ : ee) : o ? ((0, s.wj)(es) ? er : eo) : (0, s.wj)(es) ? et : en,
                        c = N.intl.string(e.sectionCollapsedToThreeRows ? N.t.NZI2Zm : N.t['/K2RDA']);
                    return n({
                        handleSelect: a,
                        icon: (0, r.jsx)('img', {
                            className: C.icon,
                            src: l,
                            alt: ''
                        }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0
                    });
                }
                case I.ld.CREATE_EMOJI: {
                    let t = (t) => {
                        if ((t.stopPropagation(), !U.current && !G.current)) {
                            if (!J) {
                                R(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }),
                                    g.Z.open(e.guildId, A.pNK.EMOJI, A.jXE.EMOJI_PICKER_POPOUT);
                                return;
                            }
                            (0, f.i)();
                        }
                    };
                    return n({
                        handleSelect: t,
                        icon: (0, r.jsx)(l.oFk, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.icon,
                            colorClass: C.icon
                        }),
                        ariaLabel: N.intl.string(N.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case I.ld.EMOJI: {
                    var o;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        a = ec.rowIndex === i && ec.columnIndex === n;
                    return (0, r.jsx)(
                        S.Z,
                        {
                            rowIndex: B,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: a,
                            isScrolling: U,
                            isUsingKeyboardNavigation: G,
                            surrogateCodePoint: M,
                            allowAnimatedEmoji: V,
                            selectedItemClassName: Y,
                            onSelect: R,
                            onInspect: x,
                            channelGuildId: Z,
                            getEmojiItemProps: k,
                            isMediumSize: eh,
                            isLargeSize: ep,
                            pulseItemKey: ed,
                            setPulseItemKey: ef,
                            showEmojiFavoriteTooltip: F,
                            messageId: K,
                            isBurstReaction: z,
                            rowPosition: null == e_ || null == (o = e_.current) ? void 0 : o.getBoundingClientRect(),
                            inNitroLockedSection: q
                        },
                        t
                    );
                }
                case I.ld.SOUNDMOJI:
                    return;
            }
        },
        eg = (e) =>
            (0, r.jsx)(
                'ul',
                D(P({}, j(B)), {
                    className: a()(C.emojiListRow, {
                        [C.emojiListRowLargeSize]: ep,
                        [C.emojiListRowMediumSize]: eh
                    }),
                    ref: e_,
                    children: e.map(em)
                })
            );
    if (H === T.UX.SOUNDMOJI)
        return (0, r.jsx)('ul', {
            className: C.emojiListRow,
            ref: e_,
            children: (0, r.jsx)(E.Z, {
                channelId: W,
                onSelectSoundmoji: w
            })
        });
    if (H !== T.En.TOP_GUILD_EMOJI) return eg(t);
    let eE = t.filter((e) => {
            if (X && e.type === I.ld.CREATE_EMOJI) return !0;
            let t = e;
            return t.subCategory === T.t0.TOP_GUILD_EMOJI || (t.subCategory === T.t0.NEWLY_ADDED_EMOJI && t.emoji.type === p.B.GUILD && !h.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id));
        }),
        eb = t.filter((e) => {
            let t = e;
            return t.subCategory === T.t0.NEWLY_ADDED_EMOJI && t.emoji.type === p.B.GUILD && h.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id);
        });
    return 0 === eb.length
        ? eg(t)
        : (0, r.jsxs)('div', {
              className: C.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: a()(C.topEmojiContainer, { [C.noEmojis]: 0 === eE.length }),
                      children: eg(eE)
                  }),
                  (0, r.jsxs)('div', {
                      className: C.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: a()(C.newlyAddedHighlight, {
                                  [C.oneItem]: 1 === eb.length,
                                  [C.alignRight]: eE.length > 0
                              }),
                              children: eg(eb)
                          }),
                          (0, r.jsxs)('div', {
                              className: a()(C.newlyAddedBadge, {
                                  [C.newlyAddedBadgeLarge]: ep,
                                  [C.newlyAddedBadgeMedium]: eh,
                                  [C.alignRight]: eE.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(y.Z, { foreground: C.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
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
