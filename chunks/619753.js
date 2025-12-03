n.d(t, { Z: () => G }), n(35282), n(539854), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    a = n(837969),
    o = n(681715),
    u = n(481060),
    c = n(904245),
    E = n(963374),
    d = n(607070),
    _ = n(933557),
    A = n(471445),
    T = n(255269),
    I = n(937889),
    m = n(804063),
    g = n(703656),
    N = n(359110),
    h = n(411405),
    O = n(695346),
    f = n(131704),
    R = n(592125),
    S = n(430824),
    p = n(496675),
    C = n(699516),
    D = n(944486),
    U = n(594174),
    L = n(607802),
    M = n(101695),
    x = n(683101),
    b = n(981631),
    v = n(388032),
    P = n(858283);
function j(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, A.KS)(t) : null;
    if (null == l) return null;
    let i = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, {
                className: P.parentChannelNameIcon,
                size: "xxs",
                color: "currentColor",
            }),
            (0, r.jsx)(u.Text, {
                className: P.parentChannelNameText,
                variant: "text-xs/medium",
                color: "header-secondary",
                children: t.name,
            }),
        ],
    });
    return (0, f.Em)(t.type)
        ? (0, r.jsx)(u.P3F, {
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
function y(e) {
    var t, n, i;
    let {
            channel: s,
            messages: a,
            highlighter: c,
            startIndex: E,
            resultRefs: d,
            totalResults: m,
            scrollTo: g,
            renderEmbeds: f,
            offset: L,
            jumpToMessage: M,
            listNavigator: v,
            favoriteSearch: y,
        } = e,
        G = O.cC.useSetting(),
        k = l.useCallback((e) => {
            if (e === D.Z.getChannelId()) return;
            let t = R.Z.getChannel(e);
            null != t && (p.Z.can(b.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, N.Kh)(t.id);
        }, []),
        F = null != s ? (0, _.F6)(s, U.default, C.Z, !1) : "???",
        w = y && null != s.guild_id ? (null == (t = S.Z.getGuild(s.guild_id)) ? void 0 : t.name) : null,
        z = (null == s ? void 0 : s.parent_id) != null ? R.Z.getChannel(s.parent_id) : null,
        V = null != (n = null == z ? void 0 : z.name) ? n : null,
        Z = null != (i = (0, A.KS)(s)) ? i : u.VL1,
        B = p.Z.can(b.Plq.MANAGE_MESSAGES, s),
        { content: H } = (0, I.ZP)(
            {
                content: F,
                embeds: [],
            },
            { postProcessor: c },
        ),
        K = l.useRef(null),
        [W, q] = l.useState(!1);
    l.useEffect(() => {
        let e = K.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && q(e.offsetWidth < e.scrollWidth);
    }, []);
    let Y = [F, V, w].filter((e) => null != e).join(", ");
    return (0, r.jsx)(h.aQ.Provider, {
        value: (0, T.Z)(G, B),
        children: (0, r.jsxs)("ul", {
            role: "group",
            className: P.searchResultGroup,
            "aria-label": Y,
            children: [
                (0, r.jsx)(u.P3F, {
                    onClick: () => k(s.id),
                    children: (0, r.jsxs)("div", {
                        className: P.channelNameContainer,
                        children: [
                            (0, r.jsx)(Z, {
                                className: P.channelNameIcon,
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(o.u, {
                                asContainer: !0,
                                text: F,
                                shouldShow: W,
                                children: (0, r.jsxs)("span", {
                                    ref: K,
                                    className: P.channelNameText,
                                    children: [y && null !== w && "".concat(w, " : "), H],
                                }),
                            }),
                            (0, r.jsx)(j, {
                                parentChannel: z,
                                onSelectChannel: k,
                            }),
                        ],
                    }),
                }),
                a.map((e, t) => {
                    let n = E + t;
                    return (0, r.jsx)(
                        x.Z,
                        {
                            ref: (e) => {
                                d.current[n] = e;
                            },
                            totalResults: m,
                            scrollTo: g,
                            renderEmbeds: f,
                            searchOffset: L,
                            pageResultsLength: a.length,
                            message: e,
                            index: n,
                            onJump: M,
                            listItemProps: v.getItemProps({ index: n }),
                        },
                        "search-result-".concat(n),
                    );
                }),
            ],
        }),
    });
}
let G = l.memo(function (e) {
    var t, n, i;
    let {
            search: s,
            renderEmbeds: o,
            scrollTo: _,
            messages: A,
            blockCount: T,
            ignoreCount: I,
            onPageChange: N,
            onClick: h,
            paginationTotalCount: O,
            renderPageWrapper: f,
            onBlockedResultsClick: S,
            searchRequestAnalyticsId: p,
            searchResultsQuery: D,
            isFavoritesSearch: U,
        } = e,
        { offset: x, totalResults: j, isSearching: G, showBlockedResults: k } = s,
        F = l.useCallback(
            (e, t) => {
                null == h || h(e, t);
                let n = () => {
                    let t = R.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    c.Z.trackJump(e.channel_id, e.id, "Search Results", { search_id: p }),
                        (0, g.uL)(b.Z5c.CHANNEL(n, e.channel_id, e.id));
                };
                (0, m.Z)(e, n) && n();
            },
            [h, p],
        ),
        w = l.useMemo(() => {
            let e,
                t = 0;
            return A.reduce((n, r) => {
                if (!k && (C.Z.isBlockedForMessage(r) || C.Z.isIgnoredForMessage(r))) return n;
                let l = R.Z.getChannel(r.channel_id);
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
        }, [A, k]),
        z = l.useRef([]),
        V = w.reduce((e, t) => e + 1 + t.messages.length, 0),
        Z = l.useCallback(
            (e, t) => {
                if (!d.Z.keyboardModeEnabled) return;
                let n = z.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let l = r.hitRef.current.getClientRects()[0];
                _(l.top - 0.5 * l.height, !1, () => {
                    var t;
                    null == (t = document.getElementById(e)) || t.focus();
                });
            },
            [_],
        ),
        B = l.useCallback((e) => {
            let t = z.current[e];
            null == t || t.jumpTo();
        }, []),
        H = (0, a.ZP)({
            navId: "search-results",
            itemCount: V,
            focusedIndex: 0,
            setFocus: Z,
            onSelect: B,
        }),
        K = (0, E.nC)(null != (t = (0, L.UP)(D)) ? t : ""),
        W = w.map((e) => {
            let { channel: t, messages: n, startIndex: l } = e;
            return (0, r.jsx)(
                y,
                {
                    channel: t,
                    messages: n,
                    highlighter: K,
                    startIndex: l,
                    resultRefs: z,
                    totalResults: j,
                    scrollTo: _,
                    renderEmbeds: o,
                    offset: x,
                    jumpToMessage: F,
                    listNavigator: H,
                    favoriteSearch: null != U && U,
                },
                "".concat(t.id, "-").concat(l),
            );
        });
    W.push();
    let q = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        null == (e = q.current) || e.focus();
    }, [A]);
    let Y = (0, u.mFp)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(
                "div",
                ((n = (function (e) {
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
                })({ ref: q }, H.getContainerProps(), Y)),
                (i = i =
                    {
                        "aria-busy": G,
                        children: W,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
            ),
            T > 0 || I > 0
                ? (0, r.jsxs)(u.P3F, {
                      tag: "div",
                      className: P.resultsBlocked,
                      onClick: () => {
                          null == S || S(!k);
                      },
                      children: [
                          (0, r.jsx)("div", { className: P.resultsBlockedImage }),
                          (0, r.jsx)("div", {
                              className: P.__invalid_resultsBlockedText,
                              children: k
                                  ? T > 0 && I > 0
                                      ? v.intl.formatToPlainString(v.t.OvJs9w, { count: T + I })
                                      : T > 0
                                        ? v.intl.formatToPlainString(v.t["n/1QFS"], { count: T })
                                        : v.intl.formatToPlainString(v.t.ypezTA, { count: I })
                                  : T > 0 && I > 0
                                    ? v.intl.formatToPlainString(v.t.EJHRcV, { count: T + I })
                                    : T > 0
                                      ? v.intl.formatToPlainString(v.t.HTE8JP, { count: T })
                                      : v.intl.formatToPlainString(v.t.e7f8r9, { count: I }),
                          }),
                      ],
                  })
                : null,
            !G &&
                !U &&
                (0, r.jsx)(M.Z, {
                    renderPageWrapper: f,
                    onPageChange: N,
                    offset: x,
                    totalCount: null != O ? O : j,
                    pageSize: b.vpv,
                }),
        ],
    });
});
