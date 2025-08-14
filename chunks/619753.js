n.d(t, { Z: () => k }), n(35282), n(539854), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
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
    N = n(703656),
    h = n(359110),
    f = n(695346),
    O = n(131704),
    p = n(592125),
    R = n(430824),
    S = n(496675),
    C = n(699516),
    D = n(944486),
    L = n(594174),
    U = n(607802),
    M = n(101695),
    v = n(683101),
    b = n(981631),
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
              className: s()(P.parentChannelName, P.parentChannelNameClickable),
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
            channel: s,
            results: a,
            highlighter: u,
            startIndex: c,
            resultRefs: E,
            totalResults: g,
            scrollTo: N,
            renderEmbeds: O,
            offset: U,
            jumpToMessage: M,
            listNavigator: x,
            favoriteSearch: G,
        } = e,
        k = f.cC.useSetting(),
        F = (0, T.p)(),
        z = l.useCallback((e) => {
            if (e === D.Z.getChannelId()) return;
            let t = p.Z.getChannel(e);
            null != t && (S.Z.can(b.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.Kh)(t.id);
        }, []),
        Z = null != s ? (0, d.F6)(s, L.default, C.Z, !1) : "???",
        B = G && null != s.guild_id ? (null == (t = R.Z.getGuild(s.guild_id)) ? void 0 : t.name) : null,
        V = (null == s ? void 0 : s.parent_id) != null ? p.Z.getChannel(s.parent_id) : null,
        H = null != (n = null == V ? void 0 : V.name) ? n : null,
        K = null != (i = (0, _.KS)(s)) ? i : o.VL1,
        W = S.Z.can(b.Plq.MANAGE_MESSAGES, s),
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
                    onClick: () => z(s.id),
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
                        v.Z,
                        {
                            ref: (e) => {
                                E.current[n] = e;
                            },
                            totalResults: g,
                            scrollTo: N,
                            renderEmbeds: O,
                            searchOffset: U,
                            pageResultsLength: a.length,
                            result: e,
                            index: n,
                            onJump: M,
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
            scrollTo: s,
            searchResults: d,
            blockCount: _,
            ignoreCount: A,
            onPageChange: T,
            onClick: m,
            paginationTotalCount: I,
            renderPageWrapper: h,
            onBlockedResultsClick: f,
            searchRequestAnalyticsId: O,
            searchResultsQuery: R,
            isFavoritesSearch: S,
        } = e,
        { offset: D, totalResults: L, isSearching: v, showBlockedResults: w } = n,
        k = l.useCallback(
            (e, t) => {
                if ((null == m || m(e, t), (0, g.Z)(e))) {
                    let t = p.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.Z.trackJump(e.channel_id, e.id, "Search Results", { search_id: O }),
                        (0, N.uL)(b.Z5c.CHANNEL(n, e.channel_id, e.id));
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
                let i = p.Z.getChannel(r[0].channel_id);
                return (
                    null == i ||
                        ((null == e || e !== i.id) &&
                            n.push({
                                channel: i,
                                results: [],
                                startIndex: t,
                            }),
                        (t += 1),
                        n[n.length - 1].results.push(r),
                        (e = null == i ? void 0 : i.id)),
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
                s(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [s],
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
        K = (0, c.nC)(null != (t = (0, U.UP)(R)) ? t : ""),
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
                    totalResults: L,
                    scrollTo: s,
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
    }, [d]);
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
                          null == f || f(!w);
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
                (0, r.jsx)(M.Z, {
                    renderPageWrapper: h,
                    onPageChange: T,
                    offset: D,
                    totalCount: null != I ? I : L,
                    pageSize: b.vpv,
                }),
        ],
    });
});
