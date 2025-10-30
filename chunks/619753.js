n.d(t, { Z: () => k }), n(35282), n(539854), n(388685);
var r = n(951288),
    l = n(647438),
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
    T = n(905405),
    I = n(255269),
    m = n(937889),
    g = n(804063),
    N = n(703656),
    h = n(359110),
    O = n(411405),
    f = n(695346),
    R = n(131704),
    S = n(592125),
    p = n(430824),
    C = n(496675),
    D = n(699516),
    U = n(944486),
    L = n(594174),
    M = n(607802),
    b = n(101695),
    x = n(683101),
    v = n(981631),
    P = n(388032),
    j = n(944106);
function y(e) {
    let { parentChannel: t, onSelectChannel: n } = e;
    if ((null == t ? void 0 : t.name) == null) return null;
    let l = null != t ? (0, A.KS)(t) : null;
    if (null == l) return null;
    let i = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l, {
                className: j.parentChannelNameIcon,
                size: "xxs",
                color: "currentColor",
            }),
            (0, r.jsx)(u.Text, {
                className: j.parentChannelNameText,
                variant: "text-xs/medium",
                color: "header-secondary",
                children: t.name,
            }),
        ],
    });
    return (0, R.Em)(t.type)
        ? (0, r.jsx)(u.P3F, {
              className: s()(j.parentChannelName, j.parentChannelNameClickable),
              onClick: (e) => {
                  e.stopPropagation(), n(t.id);
              },
              children: i,
          })
        : (0, r.jsx)("div", {
              className: j.parentChannelName,
              children: i,
          });
}
function G(e) {
    var t, n, i;
    let {
            channel: s,
            messages: a,
            highlighter: c,
            startIndex: E,
            resultRefs: d,
            totalResults: g,
            scrollTo: N,
            renderEmbeds: R,
            offset: M,
            jumpToMessage: b,
            listNavigator: P,
            favoriteSearch: G,
        } = e,
        k = f.cC.useSetting(),
        F = (0, T.p)(),
        w = l.useCallback((e) => {
            if (e === U.Z.getChannelId()) return;
            let t = S.Z.getChannel(e);
            null != t && (C.Z.can(v.Plq.VIEW_CHANNEL, t) || t.isPrivate()) && (0, h.Kh)(t.id);
        }, []),
        z = null != s ? (0, _.F6)(s, L.default, D.Z, !1) : "???",
        V = G && null != s.guild_id ? (null == (t = p.Z.getGuild(s.guild_id)) ? void 0 : t.name) : null,
        Z = (null == s ? void 0 : s.parent_id) != null ? S.Z.getChannel(s.parent_id) : null,
        B = null != (n = null == Z ? void 0 : Z.name) ? n : null,
        H = null != (i = (0, A.KS)(s)) ? i : u.VL1,
        K = C.Z.can(v.Plq.MANAGE_MESSAGES, s),
        { content: W } = (0, m.ZP)(
            {
                content: z,
                embeds: [],
            },
            {
                postProcessor: c,
                shouldFilterKeywords: F,
            },
        ),
        q = l.useRef(null),
        [Y, X] = l.useState(!1);
    l.useEffect(() => {
        let e = q.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && X(e.offsetWidth < e.scrollWidth);
    }, []);
    let J = [z, B, V].filter((e) => null != e).join(", ");
    return (0, r.jsx)(O.aQ.Provider, {
        value: (0, I.Z)(k, K),
        children: (0, r.jsxs)("ul", {
            role: "group",
            className: j.searchResultGroup,
            "aria-label": J,
            children: [
                (0, r.jsx)(u.P3F, {
                    onClick: () => w(s.id),
                    children: (0, r.jsxs)("div", {
                        className: j.channelNameContainer,
                        children: [
                            (0, r.jsx)(H, {
                                className: j.channelNameIcon,
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(o.u, {
                                asContainer: !0,
                                text: z,
                                shouldShow: Y,
                                children: (0, r.jsxs)("span", {
                                    ref: q,
                                    className: j.channelNameText,
                                    children: [G && null !== V && "".concat(V, " : "), W],
                                }),
                            }),
                            (0, r.jsx)(y, {
                                parentChannel: Z,
                                onSelectChannel: w,
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
                            totalResults: g,
                            scrollTo: N,
                            renderEmbeds: R,
                            searchOffset: M,
                            pageResultsLength: a.length,
                            message: e,
                            index: n,
                            onJump: b,
                            listItemProps: P.getItemProps({ index: n }),
                        },
                        "search-result-".concat(n),
                    );
                }),
            ],
        }),
    });
}
let k = l.memo(function (e) {
    var t, n, i;
    let {
            search: s,
            renderEmbeds: o,
            scrollTo: _,
            messages: A,
            blockCount: T,
            ignoreCount: I,
            onPageChange: m,
            onClick: h,
            paginationTotalCount: O,
            renderPageWrapper: f,
            onBlockedResultsClick: R,
            searchRequestAnalyticsId: p,
            searchResultsQuery: C,
            isFavoritesSearch: U,
        } = e,
        { offset: L, totalResults: x, isSearching: y, showBlockedResults: k } = s,
        F = l.useCallback(
            (e, t) => {
                if ((null == h || h(e, t), (0, g.Z)(e))) {
                    let t = S.Z.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    c.Z.trackJump(e.channel_id, e.id, "Search Results", { search_id: p }),
                        (0, N.uL)(v.Z5c.CHANNEL(n, e.channel_id, e.id));
                }
            },
            [h, p],
        ),
        w = l.useMemo(() => {
            let e,
                t = 0;
            return A.reduce((n, r) => {
                if (!k && (D.Z.isBlockedForMessage(r) || D.Z.isIgnoredForMessage(r))) return n;
                let l = S.Z.getChannel(r.channel_id);
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
        K = (0, E.nC)(null != (t = (0, M.UP)(C)) ? t : ""),
        W = w.map((e) => {
            let { channel: t, messages: n, startIndex: l } = e;
            return (0, r.jsx)(
                G,
                {
                    channel: t,
                    messages: n,
                    highlighter: K,
                    startIndex: l,
                    resultRefs: z,
                    totalResults: x,
                    scrollTo: _,
                    renderEmbeds: o,
                    offset: L,
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
                        "aria-busy": y,
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
                      className: j.resultsBlocked,
                      onClick: () => {
                          null == R || R(!k);
                      },
                      children: [
                          (0, r.jsx)("div", { className: j.resultsBlockedImage }),
                          (0, r.jsx)("div", {
                              className: j.__invalid_resultsBlockedText,
                              children: k
                                  ? T > 0 && I > 0
                                      ? P.intl.formatToPlainString(P.t.OvJs9w, { count: T + I })
                                      : T > 0
                                        ? P.intl.formatToPlainString(P.t["n/1QFS"], { count: T })
                                        : P.intl.formatToPlainString(P.t.ypezTA, { count: I })
                                  : T > 0 && I > 0
                                    ? P.intl.formatToPlainString(P.t.EJHRcV, { count: T + I })
                                    : T > 0
                                      ? P.intl.formatToPlainString(P.t.HTE8JP, { count: T })
                                      : P.intl.formatToPlainString(P.t.e7f8r9, { count: I }),
                          }),
                      ],
                  })
                : null,
            !y &&
                !U &&
                (0, r.jsx)(b.Z, {
                    renderPageWrapper: f,
                    onPageChange: m,
                    offset: L,
                    totalCount: null != O ? O : x,
                    pageSize: v.vpv,
                }),
        ],
    });
});
