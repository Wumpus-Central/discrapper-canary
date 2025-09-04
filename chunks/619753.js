n.d(t, { Z: () => k }), n(35282), n(539854), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(837969),
    o = n(481060),
    u = n(904245),
    c = n(963374),
    d = n(607070),
    E = n(933557),
    _ = n(471445),
    A = n(95398),
    m = n(905405),
    T = n(255269),
    I = n(937889),
    g = n(804063),
    f = n(703656),
    h = n(359110),
    N = n(695346),
    O = n(131704),
    p = n(592125),
    R = n(430824),
    S = n(496675),
    C = n(699516),
    D = n(944486),
    L = n(594174),
    b = n(607802),
    U = n(101695),
    v = n(683101),
    M = n(981631),
    x = n(388032),
    P = n(858283);
function j(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, _.KS)(t) : null;
    if (null == l) return null;
    let i = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, {
                className: P.parentChannelNameIcon,
                size: "xxs",
                color: "currentColor",
            }),
            (0, r.jsx)(o.Text, {
                className: P.parentChannelNameText,
                variant: "text-xs/medium",
                color: "header-secondary",
                children: t.name,
            }),
        ],
    });
    return (0, O.Em)(t.type)
        ? (0, r.jsx)(o.P3F, {
              className: a()(P.parentChannelName, P.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: i,
          })
        : (0, r.jsx)("div", {
              className: P.parentChannelName,
              children: i,
          });
}
function G(e) {
    var t, n, i;
    let {
            channel: a,
            messages: s,
            highlighter: u,
            startIndex: c,
            resultRefs: d,
            totalResults: g,
            scrollTo: f,
            renderEmbeds: O,
            offset: b,
            jumpToMessage: U,
            listNavigator: x,
            favoriteSearch: G,
        } = e,
        k = N.cC.useSetting(),
        F = (0, m.p)(),
        Z = l.useCallback((e) => {
            if (e === D.Z.getChannelId()) return;
            let t = p.Z.getChannel(e);
            null != t && (S.Z.can(M.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.Kh)(t.id);
        }, []),
        z = null != a ? (0, E.F6)(a, L.default, C.Z, !1) : "???",
        B = G && null != a.guild_id ? (null == (t = R.Z.getGuild(a.guild_id)) ? void 0 : t.name) : null,
        V = (null == a ? void 0 : a.parent_id) != null ? p.Z.getChannel(a.parent_id) : null,
        H = null != (n = null == V ? void 0 : V.name) ? n : null,
        K = null != (i = (0, _.KS)(a)) ? i : o.VL1,
        W = S.Z.can(M.Plq.MANAGE_MESSAGES, a),
        { content: q } = (0, I.ZP)(
            {
                content: z,
                embeds: [],
            },
            {
                postProcessor: u,
                shouldFilterKeywords: F,
            },
        ),
        Y = l.useRef(null),
        [J, X] = l.useState(!1);
    l.useEffect(() => {
        let e = Y.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let Q = [z, H, B].filter((e) => null != e).join(", ");
    return (0, r.jsx)(A.aQ.Provider, {
        value: (0, T.Z)(k, W),
        children: (0, r.jsxs)("ul", {
            role: "group",
            className: P.searchResultGroup,
            "aria-label": Q,
            children: [
                (0, r.jsx)(o.P3F, {
                    onClick: () => Z(a.id),
                    children: (0, r.jsxs)("div", {
                        className: P.channelNameContainer,
                        children: [
                            (0, r.jsx)(K, {
                                className: P.channelNameIcon,
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(o.ua7, {
                                text: z,
                                shouldShow: J,
                                children: (e) =>
                                    (0, r.jsxs)(
                                        "span",
                                        y(j({}, e), {
                                            ref: Y,
                                            className: P.channelNameText,
                                            children: [G && null !== B && "".concat(B, " : "), q],
                                        }),
                                    ),
                            }),
                            (0, r.jsx)(w, {
                                parentChannel: V,
                                onSelectChannel: Z,
                            }),
                        ],
                    }),
                }),
                s.map((e, t) => {
                    let n = c + t;
                    return (0, r.jsx)(
                        v.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: g,
                            scrollTo: f,
                            renderEmbeds: O,
                            searchOffset: b,
                            pageResultsLength: s.length,
                            message: e,
                            index: n,
                            onJump: U,
                            listItemProps: x.getItemProps({ index: n }),
                        },
                        "search-result-".concat(n),
                    );
                }),
            ],
        }),
    });
}
let k = l.memo(function (e) {
    var t;
    let {
            search: n,
            renderEmbeds: i,
            scrollTo: a,
            messages: E,
            blockCount: _,
            ignoreCount: A,
            onPageChange: m,
            onClick: T,
            paginationTotalCount: I,
            renderPageWrapper: h,
            onBlockedResultsClick: N,
            searchRequestAnalyticsId: O,
            searchResultsQuery: R,
            isFavoritesSearch: S,
        } = e,
        { offset: D, totalResults: L, isSearching: v, showBlockedResults: w } = n,
        k = l.useCallback(
            (e, t) => {
                if ((null == T || T(e, t), (0, g.Z)(e))) {
                    let t = p.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, "Search Results", { search_id: O }),
                        (0, f.uL)(M.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [T, O],
        ),
        F = l.useMemo(() => {
            let e,
                t = 0;
            return E.reduce((n, r) => {
                if (!w && (C.Z.isBlockedForMessage(r) || C.Z.isIgnoredForMessage(r))) return n;
                let l = p.Z.getChannel(r.channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) &&
                            n.push({
                                channel: l,
                                messages: [],
                                startIndex: t,
                            }),
                        (t += 1),
                        n[n.length - 1].messages.push(r),
                        (e = null == l ? void 0 : l.id)),
                    n
                );
            }, []);
        }, [E, w]),
        Z = l.useRef([]),
        z = F.reduce((e, t) => e + 1 + t.messages.length, 0),
        B = l.useCallback(
            (e, t) => {
                if (!d.Z.keyboardModeEnabled) return;
                let n = Z.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let l = r.hitRef.current.getClientRects()[0];
                a(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [a],
        ),
        V = l.useCallback((e) => {
            let t = Z.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, s.ZP)({
            navId: "search-results",
            itemCount: z,
            focusedIndex: 0,
            setFocus: B,
            onSelect: V,
        }),
        K = (0, c.nC)(null != (t = (0, b.UP)(R)) ? t : ""),
        W = F.map((e) => {
            let { channel: t, messages: n, startIndex: l } = e;
            return (0, r.jsx)(
                G,
                {
                    channel: t,
                    messages: n,
                    highlighter: K,
                    startIndex: l,
                    resultRefs: Z,
                    totalResults: L,
                    scrollTo: a,
                    renderEmbeds: i,
                    offset: D,
                    jumpToMessage: k,
                    listNavigator: H,
                    favoriteSearch: null != S && S,
                },
                "".concat(t.id, "-").concat(l),
            );
        });
    W.push();
    let q = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null == (e = q.current) || e.focus();
    }, [E]);
    let Y = (0, o.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                "div",
                y(j({ ref: q }, H.getContainerProps(), Y), {
                    "aria-busy": v,
                    children: W,
                }),
            ),
            _ > 0 || A > 0
                ? (0, r.jsxs)(o.P3F, {
                      tag: "div",
                      className: P.resultsBlocked,
                      onClick: () => {
                          null == N || N(!w);
                      },
                      children: [
                          (0, r.jsx)("div", { className: P.resultsBlockedImage }),
                          (0, r.jsx)("div", {
                              className: P.__invalid_resultsBlockedText,
                              children: w
                                  ? _ > 0 && A > 0
                                      ? x.intl.formatToPlainString(x.t["OvJs9/"], { count: _ + A })
                                      : _ > 0
                                        ? x.intl.formatToPlainString(x.t["n/1QFR"], { count: _ })
                                        : x.intl.formatToPlainString(x.t.ypezTE, { count: A })
                                  : _ > 0 && A > 0
                                    ? x.intl.formatToPlainString(x.t.EJHRcX, { count: _ + A })
                                    : _ > 0
                                      ? x.intl.formatToPlainString(x.t.HTE8JC, { count: _ })
                                      : x.intl.formatToPlainString(x.t.e7f8r6, { count: A }),
                          }),
                      ],
                  })
                : null,
            !v &&
                !S &&
                (0, r.jsx)(U.Z, {
                    renderPageWrapper: h,
                    onPageChange: m,
                    offset: D,
                    totalCount: null != I ? I : L,
                    pageSize: M.vpv,
                }),
        ],
    });
});
