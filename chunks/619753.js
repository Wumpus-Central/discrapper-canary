t.d(e, { Z: () => S }), t(35282), t(539854), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    s = t(837969),
    a = t(481060),
    o = t(904245),
    g = t(963374),
    c = t(607070),
    f = t(933557),
    v = t(471445),
    h = t(95398),
    u = t(905405),
    d = t(255269),
    E = t(937889),
    C = t(804063),
    B = t(703656),
    w = t(359110),
    D = t(695346),
    M = t(131704),
    p = t(592125),
    I = t(430824),
    H = t(496675),
    b = t(699516),
    Q = t(944486),
    O = t(594174),
    P = t(607802),
    V = t(101695),
    j = t(683101),
    m = t(981631),
    T = t(388032),
    y = t(858283);
function L(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function x(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
function N(A) {
    let { parentChannel: e, onSelectChannel: t } = A;
    if ((null == e ? void 0 : e.name) == null) return null;
    let r = null != e ? (0, v.KS)(e) : null;
    if (null == r) return null;
    let l = (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r, {
                className: y.parentChannelNameIcon,
                size: "xxs",
                color: "currentColor",
            }),
            (0, n.jsx)(a.Text, {
                className: y.parentChannelNameText,
                variant: "text-xs/medium",
                color: "header-secondary",
                children: e.name,
            }),
        ],
    });
    return (0, M.Em)(e.type)
        ? (0, n.jsx)(a.P3F, {
              className: i()(y.parentChannelName, y.parentChannelNameClickable),
              onClick: (A) => {
                  A.stopPropagation(), t(e.id);
              },
              children: l,
          })
        : (0, n.jsx)("div", {
              className: y.parentChannelName,
              children: l,
          });
}
function Z(A) {
    var e, t, l;
    let {
            channel: i,
            results: s,
            highlighter: o,
            startIndex: g,
            resultRefs: c,
            totalResults: C,
            scrollTo: B,
            renderEmbeds: M,
            offset: P,
            jumpToMessage: V,
            listNavigator: T,
            favoriteSearch: Z,
        } = A,
        S = D.cC.useSetting(),
        R = (0, u.p)(),
        G = r.useCallback((A) => {
            if (A === Q.Z.getChannelId()) return;
            let e = p.Z.getChannel(A);
            null != e && (H.Z.can(m.Plq.VIEW_CHANNEL, e) || e.isPrivate()) && (0, w.Kh)(e.id);
        }, []),
        U = null != i ? (0, f.F6)(i, O.default, b.Z, !1) : "???",
        F = Z && null != i.guild_id ? (null == (e = I.Z.getGuild(i.guild_id)) ? void 0 : e.name) : null,
        k = (null == i ? void 0 : i.parent_id) != null ? p.Z.getChannel(i.parent_id) : null,
        X = null != (t = null == k ? void 0 : k.name) ? t : null,
        z = null != (l = (0, v.KS)(i)) ? l : a.VL1,
        K = H.Z.can(m.Plq.MANAGE_MESSAGES, i),
        { content: Y } = (0, E.ZP)(
            {
                content: U,
                embeds: [],
            },
            {
                postProcessor: o,
                shouldFilterKeywords: R,
            },
        ),
        W = r.useRef(null),
        [J, q] = r.useState(!1);
    r.useEffect(() => {
        let A = W.current;
        null != A && null != A.offsetWidth && null != A.scrollWidth && q(A.offsetWidth < A.scrollWidth);
    }, []);
    let _ = [U, X, F].filter((A) => null != A).join(", ");
    return (0, n.jsx)(h.aQ.Provider, {
        value: (0, d.Z)(S, K),
        children: (0, n.jsxs)("ul", {
            role: "group",
            className: y.searchResultGroup,
            "aria-label": _,
            children: [
                (0, n.jsx)(a.P3F, {
                    onClick: () => G(i.id),
                    children: (0, n.jsxs)("div", {
                        className: y.channelNameContainer,
                        children: [
                            (0, n.jsx)(z, {
                                className: y.channelNameIcon,
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, n.jsx)(a.ua7, {
                                text: U,
                                shouldShow: J,
                                children: (A) =>
                                    (0, n.jsxs)(
                                        "span",
                                        x(L({}, A), {
                                            ref: W,
                                            className: y.channelNameText,
                                            children: [Z && null !== F && "".concat(F, " : "), Y],
                                        }),
                                    ),
                            }),
                            (0, n.jsx)(N, {
                                parentChannel: k,
                                onSelectChannel: G,
                            }),
                        ],
                    }),
                }),
                s.map((A, e) => {
                    let t = g + e;
                    return (0, n.jsx)(
                        j.Z,
                        {
                            ref: (A) => {
                                c.current[t] = A;
                            },
                            totalResults: C,
                            scrollTo: B,
                            renderEmbeds: M,
                            searchOffset: P,
                            pageResultsLength: s.length,
                            result: A,
                            index: t,
                            onJump: V,
                            listItemProps: T.getItemProps({ index: t }),
                        },
                        "search-result-".concat(t),
                    );
                }),
            ],
        }),
    });
}
let S = r.memo(function (A) {
    var e;
    let {
            search: t,
            renderEmbeds: l,
            scrollTo: i,
            searchResults: f,
            blockCount: v,
            ignoreCount: h,
            onPageChange: u,
            onClick: d,
            paginationTotalCount: E,
            renderPageWrapper: w,
            onBlockedResultsClick: D,
            searchRequestAnalyticsId: M,
            searchResultsQuery: I,
            isFavoritesSearch: H,
        } = A,
        { offset: Q, totalResults: O, isSearching: j, showBlockedResults: N } = t,
        S = r.useCallback(
            (A, e) => {
                if ((null == d || d(A, e), (0, C.Z)(A))) {
                    let e = p.Z.getChannel(A.channel_id),
                        t = null != e ? e.getGuildId() : null;
                    o.Z.trackJump(A.channel_id, A.id, "Search Results", { search_id: M }),
                        (0, B.uL)(m.Z5c.CHANNEL(t, A.channel_id, A.id));
                }
            },
            [d, M],
        ),
        R = r.useMemo(() => {
            let A;
            if (null == f) return [];
            let e = 0;
            return f.reduce((t, n) => {
                let r = n.find((A) => A.isSearchHit);
                if (!N && null != r && (b.Z.isBlockedForMessage(r) || b.Z.isIgnoredForMessage(r))) return t;
                let l = p.Z.getChannel(n[0].channel_id);
                return (
                    null == l ||
                        ((null == A || A !== l.id) &&
                            t.push({
                                channel: l,
                                results: [],
                                startIndex: e,
                            }),
                        (e += 1),
                        t[t.length - 1].results.push(n),
                        (A = null == l ? void 0 : l.id)),
                    t
                );
            }, []);
        }, [f, N]),
        G = r.useRef([]),
        U = R.reduce((A, e) => A + 1 + e.results.length, 0),
        F = r.useCallback(
            (A, e) => {
                if (!c.Z.keyboardModeEnabled) return;
                let t = G.current,
                    n = null != e ? t[e] : void 0;
                if (null == n || null == n.hitRef.current) return;
                let r = n.hitRef.current.getClientRects()[0];
                i(r.top - 0.5 * r.height, !1, () => {
                    var e;
                    null == (e = document.getElementById(A)) || e.focus();
                });
            },
            [i],
        ),
        k = r.useCallback((A) => {
            let e = G.current[A];
            null == e || e.jumpTo();
        }, []),
        X = (0, s.ZP)({
            navId: "search-results",
            itemCount: U,
            focusedIndex: 0,
            setFocus: F,
            onSelect: k,
        }),
        z = (0, g.nC)(null != (e = (0, P.UP)(I)) ? e : ""),
        K = R.map((A) => {
            let { channel: e, results: t, startIndex: r } = A;
            return (0, n.jsx)(
                Z,
                {
                    channel: e,
                    results: t,
                    highlighter: z,
                    startIndex: r,
                    resultRefs: G,
                    totalResults: O,
                    scrollTo: i,
                    renderEmbeds: l,
                    offset: Q,
                    jumpToMessage: S,
                    listNavigator: X,
                    favoriteSearch: null != H && H,
                },
                "".concat(e.id, "-").concat(r),
            );
        });
    K.push();
    let Y = r.useRef(null);
    r.useLayoutEffect(() => {
        var A;
        null == (A = Y.current) || A.focus();
    }, [f]);
    let W = (0, a.mFp)();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(
                "div",
                x(L({ ref: Y }, X.getContainerProps(), W), {
                    "aria-busy": j,
                    children: K,
                }),
            ),
            v > 0 || h > 0
                ? (0, n.jsxs)(a.P3F, {
                      tag: "div",
                      className: y.resultsBlocked,
                      onClick: () => {
                          null == D || D(!N);
                      },
                      children: [
                          (0, n.jsx)("div", { className: y.resultsBlockedImage }),
                          (0, n.jsx)("div", {
                              className: y.__invalid_resultsBlockedText,
                              children: N
                                  ? v > 0 && h > 0
                                      ? T.intl.formatToPlainString(T.t["OvJs9/"], { count: v + h })
                                      : v > 0
                                        ? T.intl.formatToPlainString(T.t["n/1QFR"], { count: v })
                                        : T.intl.formatToPlainString(T.t.ypezTE, { count: h })
                                  : v > 0 && h > 0
                                    ? T.intl.formatToPlainString(T.t.EJHRcX, { count: v + h })
                                    : v > 0
                                      ? T.intl.formatToPlainString(T.t.HTE8JC, { count: v })
                                      : T.intl.formatToPlainString(T.t.e7f8r6, { count: h }),
                          }),
                      ],
                  })
                : null,
            !j &&
                !H &&
                (0, n.jsx)(V.Z, {
                    renderPageWrapper: w,
                    onPageChange: u,
                    offset: Q,
                    totalCount: null != E ? E : O,
                    pageSize: m.vpv,
                }),
        ],
    });
});
