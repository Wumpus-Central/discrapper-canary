n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(481060),
    c = n(330726),
    u = n(410030),
    d = n(255963),
    f = n(906411),
    p = n(438332),
    _ = n(806966),
    m = n(598804),
    h = n(675478),
    g = n(819758),
    E = n(626135),
    b = n(784222),
    y = n(926243),
    O = n(149203),
    v = n(981631),
    S = n(388032),
    I = n(8905);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = (e) => {
    let {
            emojiDescriptors: t,
            emojiSize: a,
            onSelect: T,
            onSelectSoundmoji: A,
            onInspect: R,
            surrogateCodePoint: w,
            getEmojiItemProps: D,
            getEmojiRowProps: x,
            isScrolling: L,
            isUsingKeyboardNavigation: j,
            rowIndex: M,
            allowAnimatedEmoji: k,
            showEmojiFavoriteTooltip: U,
            channelGuildId: G,
            category: Z,
            selectedItemClassName: F,
            channelId: B,
            messageId: V,
            isBurstReaction: H,
            inNitroLockedSection: Y,
            handleScrollUpOnSectionCollapse: W,
        } = e,
        K = n(187119),
        z = n(39874),
        q = n(853871),
        Q = n(63149),
        X = n(263112),
        J = n(490567),
        $ = n(292795),
        ee = n(7940),
        et = (0, u.ZP)(),
        en = _.kJ.getState(),
        [er, ei] = i.useState(en.inspectedExpressionPosition),
        [ea, eo] = (0, c.Z)(null, 300),
        es = i.useRef(null);
    i.useEffect(
        () =>
            _.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => ei(e),
            ),
        [],
    ),
        i.useEffect(() => {
            h.DZ.loadIfNecessary();
        }, []);
    let el = a === O.Su.LARGE,
        ec = a === O.Su.MEDIUM,
        eu = (e) => {
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
                        m = null != (n = D(_, M)) ? n : {},
                        { ref: h, tabIndex: g, onFocus: E } = m,
                        b = P(m, ["ref", "tabIndex", "onFocus"]),
                        y = er.rowIndex === p && er.columnIndex === _,
                        O = () => {
                            L.current || j.current || R(e);
                        };
                    return (0, i.createElement)(
                        "li",
                        N(C({}, b), { key: t }),
                        (0, r.jsx)(l.tEY, {
                            children: (0, r.jsx)("button", {
                                "aria-label": d,
                                ref: h,
                                className: o()(I.emojiItem, {
                                    [I.emojiItemLarge]: el,
                                    [I.emojiItemMedium]: ec,
                                    [I.emojiItemSelected]: y && !f,
                                    [null != F ? F : ""]: y,
                                    [I.showPulse]: ea === t,
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
                case b.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = er.rowIndex === t && er.columnIndex === i,
                        o = (t) => {
                            t.stopPropagation(),
                                L.current ||
                                    j.current ||
                                    (T(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1,
                                    }),
                                    (0, d.D)(e.guildId),
                                    e.sectionCollapsedToThreeRows || W(),
                                    E.default.track(v.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId,
                                    }));
                        },
                        l = e.sectionCollapsedToThreeRows
                            ? a
                                ? (0, s.wj)(et)
                                    ? J
                                    : ee
                                : (0, s.wj)(et)
                                  ? K
                                  : z
                            : a
                              ? (0, s.wj)(et)
                                  ? X
                                  : $
                              : (0, s.wj)(et)
                                ? q
                                : Q,
                        c = S.intl.string(e.sectionCollapsedToThreeRows ? S.t.NZI2Zk : S.t["/K2RDH"]);
                    return n({
                        handleSelect: o,
                        icon: (0, r.jsx)("img", {
                            className: I.icon,
                            src: l,
                            alt: "",
                        }),
                        ariaLabel: c,
                        shouldShowRoundHighlight: !0,
                    });
                }
                case b.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        o = er.rowIndex === i && er.columnIndex === n;
                    return (0, r.jsx)(
                        y.Z,
                        {
                            rowIndex: M,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: o,
                            isScrolling: L,
                            isUsingKeyboardNavigation: j,
                            surrogateCodePoint: w,
                            allowAnimatedEmoji: k,
                            selectedItemClassName: F,
                            onSelect: T,
                            onInspect: R,
                            channelGuildId: G,
                            getEmojiItemProps: D,
                            isMediumSize: ec,
                            isLargeSize: el,
                            pulseItemKey: ea,
                            setPulseItemKey: eo,
                            showEmojiFavoriteTooltip: U,
                            messageId: V,
                            isBurstReaction: H,
                            rowPosition: null == es || null == (a = es.current) ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: Y,
                        },
                        t,
                    );
                }
                case b.ld.SOUNDMOJI:
                    return;
            }
        },
        ed = (e) =>
            (0, r.jsx)(
                "ul",
                N(C({}, x(M)), {
                    className: o()(I.emojiListRow, {
                        [I.emojiListRowLargeSize]: el,
                        [I.emojiListRowMediumSize]: ec,
                    }),
                    ref: es,
                    children: e.map(eu),
                }),
            );
    if (Z === O.UX.SOUNDMOJI)
        return (0, r.jsx)("ul", {
            className: I.emojiListRow,
            ref: es,
            children: (0, r.jsx)(m.Z, {
                channelId: B,
                onSelectSoundmoji: A,
            }),
        });
    if (Z !== O.En.TOP_GUILD_EMOJI) return ed(t);
    let ef = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === O.t0.TOP_GUILD_EMOJI ||
                (t.subCategory === O.t0.NEWLY_ADDED_EMOJI &&
                    t.emoji.type === f.B.GUILD &&
                    !p.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id))
            );
        }),
        ep = t.filter((e) => {
            let t = e;
            return (
                t.subCategory === O.t0.NEWLY_ADDED_EMOJI &&
                t.emoji.type === f.B.GUILD &&
                p.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id)
            );
        });
    return 0 === ep.length
        ? ed(t)
        : (0, r.jsxs)("div", {
              className: I.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: o()(I.topEmojiContainer, { [I.noEmojis]: 0 === ef.length }),
                      children: ed(ef),
                  }),
                  (0, r.jsxs)("div", {
                      className: I.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)("div", {
                              className: o()(I.newlyAddedHighlight, {
                                  [I.oneItem]: 1 === ep.length,
                                  [I.alignRight]: ef.length > 0,
                              }),
                              children: ed(ep),
                          }),
                          (0, r.jsxs)("div", {
                              className: o()(I.newlyAddedBadge, {
                                  [I.newlyAddedBadgeLarge]: el,
                                  [I.newlyAddedBadgeMedium]: ec,
                                  [I.alignRight]: ef.length > 0,
                              }),
                              children: [
                                  (0, r.jsx)(g.Z, { foreground: I.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-xs/semibold",
                                      color: "always-white",
                                      children: S.intl.string(S.t.y2b7CA),
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
