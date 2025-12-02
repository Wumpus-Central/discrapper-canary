n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(481060),
    c = n(330726),
    u = n(410030),
    d = n(556019),
    f = n(255963),
    p = n(906411),
    _ = n(438332),
    m = n(806966),
    h = n(434404),
    g = n(598804),
    E = n(675478),
    b = n(819758),
    y = n(626135),
    O = n(392552),
    v = n(784222),
    S = n(926243),
    I = n(149203),
    T = n(981631),
    A = n(388032),
    C = n(999642);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function w(e, t) {
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
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: a,
            onSelect: N,
            onSelectSoundmoji: R,
            onInspect: x,
            surrogateCodePoint: L,
            getEmojiItemProps: j,
            getEmojiRowProps: M,
            isScrolling: k,
            isUsingKeyboardNavigation: U,
            rowIndex: G,
            allowAnimatedEmoji: Z,
            showEmojiFavoriteTooltip: B,
            channelGuildId: F,
            category: V,
            selectedItemClassName: H,
            channelId: Y,
            messageId: W,
            isBurstReaction: K,
            inNitroLockedSection: z,
            handleScrollUpOnSectionCollapse: q,
        } = e,
        { enabled: X } = O.Z.useExperiment({ location: "EmojiPicker" }, { autoTrackExposure: !1 }),
        { enabled: Q } = (0, d.qt)({
            location: "emoji_picker_list_row",
            autoTrackExposure: !1,
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
        es = m.kJ.getState(),
        [el, ec] = i.useState(es.inspectedExpressionPosition),
        [eu, ed] = (0, c.Z)(null, 300),
        ef = i.useRef(null);
    i.useEffect(
        () =>
            m.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => ec(e),
            ),
        [],
    ),
        i.useEffect(() => {
            E.DZ.loadIfNecessary();
        }, []);
    let ep = a === I.Su.LARGE,
        e_ = a === I.Su.MEDIUM,
        em = (e) => {
            let t = "".concat(e.rowIndex, "c").concat(e.columnIndex),
                n = function () {
                    var n;
                    let {
                            onMouseEnter: a,
                            onMouseLeave: s,
                            handleSelect: c,
                            icon: u,
                            ariaLabel: d,
                            shouldShowRoundHighlight: f,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: p, columnIndex: _ } = e,
                        m = null != (n = j(_, G)) ? n : {},
                        { ref: h, tabIndex: g, onFocus: E } = m,
                        b = D(m, ["ref", "tabIndex", "onFocus"]),
                        y = el.rowIndex === p && el.columnIndex === _,
                        O = () => {
                            k.current || U.current || x(e);
                        };
                    return (0, i.createElement)(
                        "li",
                        w(P({}, b), { key: t }),
                        (0, r.jsx)(l.tEY, {
                            children: (0, r.jsx)("button", {
                                "aria-label": d,
                                ref: h,
                                className: o()(C.emojiItem, {
                                    [C.emojiItemLarge]: ep,
                                    [C.emojiItemMedium]: e_,
                                    [C.emojiItemSelected]: y && !f,
                                    [null != H ? H : ""]: y,
                                    [C.showPulse]: eu === t,
                                }),
                                onFocus: null != E ? E : O,
                                onMouseOver: O,
                                onMouseEnter: a,
                                onMouseLeave: s,
                                onClick: c,
                                tabIndex: g,
                                children: u,
                            }),
                        }),
                    );
                };
            switch (e.type) {
                case v.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = el.rowIndex === t && el.columnIndex === i,
                        o = (t) => {
                            t.stopPropagation(),
                                k.current ||
                                    U.current ||
                                    (N(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1,
                                    }),
                                    (0, f.D)(e.guildId),
                                    e.sectionCollapsedToThreeRows || q(),
                                    y.default.track(T.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, s.wj)(eo)
                                    ? er
                                    : ea
                                : (0, s.wj)(eo)
                                  ? J
                                  : $
                            : a
                              ? (0, s.wj)(eo)
                                  ? en
                                  : ei
                              : (0, s.wj)(eo)
                                ? ee
                                : et,
                        c = A.intl.string(e.sectionCollapsedToThreeRows ? A.t.NZI2Zk : A.t["/K2RDH"]);
                    return n({
                        handleSelect: o,
                        icon: (0, r.jsx)("img", {
                            className: C.icon,
                            src: l,
                            alt: "",
                        }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case v.ld.CREATE_EMOJI: {
                    if (Q) return null;
                    let t = (t) => {
                        t.stopPropagation(),
                            k.current ||
                                U.current ||
                                (N(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1,
                                }),
                                h.Z.open(e.guildId, T.pNK.EMOJI, T.jXE.EMOJI_PICKER_POPOUT));
                    };
                    return n({
                        handleSelect: t,
                        icon: (0, r.jsx)(l.oFk, {
                            size: "md",
                            color: "currentColor",
                            className: C.icon,
                            colorClass: C.icon,
                        }),
                        ariaLabel: A.intl.string(A.t["Z/r7IS"]),
                        shouldShowRoundHighlight: !1,
                    });
                }
                case v.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        o = el.rowIndex === i && el.columnIndex === n;
                    return (0, r.jsx)(
                        S.Z,
                        {
                            rowIndex: G,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: o,
                            isScrolling: k,
                            isUsingKeyboardNavigation: U,
                            surrogateCodePoint: L,
                            allowAnimatedEmoji: Z,
                            selectedItemClassName: H,
                            onSelect: N,
                            onInspect: x,
                            channelGuildId: F,
                            getEmojiItemProps: j,
                            isMediumSize: e_,
                            isLargeSize: ep,
                            pulseItemKey: eu,
                            setPulseItemKey: ed,
                            showEmojiFavoriteTooltip: B,
                            messageId: W,
                            isBurstReaction: K,
                            rowPosition: null == ef || null == (a = ef.current) ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: z,
                        },
                        t,
                    );
                }
                case v.ld.SOUNDMOJI:
                    return;
            }
        },
        eh = (e) =>
            (0, r.jsx)(
                "ul",
                w(P({}, M(G)), {
                    className: o()(C.emojiListRow, {
                        [C.emojiListRowLargeSize]: ep,
                        [C.emojiListRowMediumSize]: e_,
                    }),
                    ref: ef,
                    children: e.map(em),
                }),
            );
    if (V === I.UX.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: C.emojiListRow,
            ref: ef,
            children: (0, r.jsx)(g.Z, {
                channelId: Y,
                onSelectSoundmoji: R,
            }),
        });
    if (V !== I.En.TOP_GUILD_EMOJI) return eh(t);
    let eg = t.filter((e) => {
            if (X && e.type === v.ld.CREATE_EMOJI) return !0;
            let t = e;
            return (
                t.subCategory === I.t0.TOP_GUILD_EMOJI ||
                (t.subCategory === I.t0.NEWLY_ADDED_EMOJI &&
                    t.emoji.type === p.B.GUILD &&
                    !_.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id))
            );
        }),
        eE = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === I.t0.NEWLY_ADDED_EMOJI &&
                t.emoji.type === p.B.GUILD &&
                _.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
            );
        });
    return 0 === eE.length
        ? eh(t)
        : (0, r.jsxs)("div", {
              className: C.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: o()(C.topEmojiContainer, { [C.noEmojis]: 0 === eg.length }),
                      children: eh(eg),
                  }),
                  (0, r.jsxs)("div", {
                      className: C.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)("div", {
                              className: o()(C.newlyAddedHighlight, {
                                  [C.oneItem]: 1 === eE.length,
                                  [C.alignRight]: eg.length > 0,
                              }),
                              children: eh(eE),
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(C.newlyAddedBadge, {
                                  [C.newlyAddedBadgeLarge]: ep,
                                  [C.newlyAddedBadgeMedium]: e_,
                                  [C.alignRight]: eg.length > 0,
                              }),
                              children: [
                                  (0, r.jsx)(b.Z, { foreground: C.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: A.intl.string(A.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
