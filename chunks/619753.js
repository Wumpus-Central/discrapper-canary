n.d(t, { Z: () => k }), n(35282), n(539854), n(388685);
var r = n(255367),
    l = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(837969),
    o = n(481060),
    u = n(904245),
    c = n(963374),
    E = n(607070),
    d = n(933557),
    _ = n(471445),
    A = n(95398),
    T = n(905405),
    m = n(255269),
    I = n(937889),
    g = n(804063),
    f = n(703656),
    N = n(359110),
    h = n(695346),
    O = n(131704),
    p = n(592125),
    R = n(430824),
    S = n(496675),
    C = n(699516),
    v = n(944486),
    D = n(594174),
    b = n(607802),
    L = n(101695),
    x = n(683101),
    U = n(981631),
    M = n(388032),
    P = n(100094);
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
    let s = (0, r.jsxs)(r.Fragment, {
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
              className: i()(P.parentChannelName, P.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: s,
          })
        : (0, r.jsx)("div", {
              className: P.parentChannelName,
              children: s,
          });
}
function G(e) {
    var t, n, s;
    let {
            channel: i,
            results: a,
            highlighter: u,
            startIndex: c,
            resultRefs: E,
            totalResults: g,
            scrollTo: f,
            renderEmbeds: O,
            offset: b,
            jumpToMessage: L,
            listNavigator: M,
            favoriteSearch: G,
        } = e,
        k = h.cC.useSetting(),
        F = (0, T.p)(),
        z = l.useCallback((e) => {
            if (e === v.Z.getChannelId()) return;
            let t = p.Z.getChannel(e);
            null != t && (S.Z.can(U.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, N.Kh)(t.id);
        }, []),
        Z = null != i ? (0, d.F6)(i, D.default, C.Z, !1) : "???",
        B = G && null != i.guild_id ? (null == (t = R.Z.getGuild(i.guild_id)) ? void 0 : t.name) : null,
        V = (null == i ? void 0 : i.parent_id) != null ? p.Z.getChannel(i.parent_id) : null,
        H = null != (n = null == V ? void 0 : V.name) ? n : null,
        K = null != (s = (0, _.KS)(i)) ? s : o.VL1,
        W = S.Z.can(U.Plq.MANAGE_MESSAGES, i),
        { content: q } = (0, I.ZP)(
            {
                content: Z,
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
    let Q = [Z, H, B].filter((e) => null != e).join(", ");
    return (0, r.jsx)(A.aQ.Provider, {
        value: (0, m.Z)(k, W),
        children: (0, r.jsxs)("ul", {
            role: "group",
            className: P.searchResultGroup,
            "aria-label": Q,
            children: [
                (0, r.jsx)(o.P3F, {
                    onClick: () => z(i.id),
                    children: (0, r.jsxs)("div", {
                        className: P.channelNameContainer,
                        children: [
                            (0, r.jsx)(K, {
                                className: P.channelNameIcon,
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(o.ua7, {
                                text: Z,
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
                                onSelectChannel: z,
                            }),
                        ],
                    }),
                }),
                a.map((e, t) => {
                    let n = c + t;
                    return (0, r.jsx)(
                        x.Z,
                        {
                            ref: (e) => {
                                E.current[n] = e;
                            },
                            totalResults: g,
                            scrollTo: f,
                            renderEmbeds: O,
                            searchOffset: b,
                            pageResultsLength: a.length,
                            result: e,
                            index: n,
                            onJump: L,
                            listItemProps: M.getItemProps({ index: n }),
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
            renderEmbeds: s,
            scrollTo: i,
            searchResults: d,
            blockCount: _,
            ignoreCount: A,
            onPageChange: T,
            onClick: m,
            paginationTotalCount: I,
            renderPageWrapper: N,
            onBlockedResultsClick: h,
            searchRequestAnalyticsId: O,
            searchResultsQuery: R,
            isFavoritesSearch: S,
        } = e,
        { offset: v, totalResults: D, isSearching: x, showBlockedResults: w } = n,
        k = l.useCallback(
            (e, t) => {
                if ((null == m || m(e, t), (0, g.Z)(e))) {
                    let t = p.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, "Search Results", { search_id: O }),
                        (0, f.uL)(U.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [m, O],
        ),
        F = l.useMemo(() => {
            let e;
            if (null == d) return [];
            let t = 0;
            return d.reduce((n, r) => {
                let l = r.find((e) => e.isSearchHit);
                if (!w && null != l && (C.Z.isBlockedForMessage(l) || C.Z.isIgnoredForMessage(l))) return n;
                let s = p.Z.getChannel(r[0].channel_id);
                return (
                    null == s ||
                        ((null == e || e !== s.id) &&
                            n.push({
                                channel: s,
                                results: [],
                                startIndex: t,
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(r),
                        (e = null == s ? void 0 : s.id)),
                    n
                );
            }, []);
        }, [d, w]),
        z = l.useRef([]),
        Z = F.reduce((e, t) => e + 1 + t.results.length, 0),
        B = l.useCallback(
            (e, t) => {
                if (!E.Z.keyboardModeEnabled) return;
                let n = z.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let l = r.hitRef.current.getClientRects()[0];
                i(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [i],
        ),
        V = l.useCallback((e) => {
            let t = z.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, a.ZP)({
            navId: "search-results",
            itemCount: Z,
            focusedIndex: 0,
            setFocus: B,
            onSelect: V,
        }),
        K = (0, c.nC)(null != (t = (0, b.UP)(R)) ? t : ""),
        W = F.map((e) => {
            let { channel: t, results: n, startIndex: l } = e;
            return (0, r.jsx)(
                G,
                {
                    channel: t,
                    results: n,
                    highlighter: K,
                    startIndex: l,
                    resultRefs: z,
                    totalResults: D,
                    scrollTo: i,
                    renderEmbeds: s,
                    offset: v,
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
    }, [d]);
    let Y = (0, o.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                "div",
                y(j({ ref: q }, H.getContainerProps(), Y), {
                    "aria-busy": x,
                    children: W,
                }),
            ),
            _ > 0 || A > 0
                ? (0, r.jsxs)(o.P3F, {
                      tag: "div",
                      className: P.resultsBlocked,
                      onClick: () => {
                          null == h || h(!w);
                      },
                      children: [
                          (0, r.jsx)("div", { className: P.resultsBlockedImage }),
                          (0, r.jsx)("div", {
                              className: P.__invalid_resultsBlockedText,
                              children: w
                                  ? _ > 0 && A > 0
                                      ? M.intl.formatToPlainString(M.t["OvJs9/"], { count: _ + A })
                                      : _ > 0
                                        ? M.intl.formatToPlainString(M.t["n/1QFR"], { count: _ })
                                        : M.intl.formatToPlainString(M.t.ypezTE, { count: A })
                                  : _ > 0 && A > 0
                                    ? M.intl.formatToPlainString(M.t.EJHRcX, { count: _ + A })
                                    : _ > 0
                                      ? M.intl.formatToPlainString(M.t.HTE8JC, { count: _ })
                                      : M.intl.formatToPlainString(M.t.e7f8r6, { count: A }),
                          }),
                      ],
                  })
                : null,
            !x &&
                !S &&
                (0, r.jsx)(L.Z, {
                    renderPageWrapper: N,
                    onPageChange: T,
                    offset: v,
                    totalCount: null != I ? I : D,
                    pageSize: U.vpv,
                }),
        ],
    });
});
