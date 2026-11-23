n(321073);
var r = n(477900),
    l = n(582128),
    a = n(347347),
    s = n(312138),
    i = n(939249),
    u = n(138399),
    o = n(697530),
    c = n(775602),
    d = n(964167),
    f = n(954403),
    h = n(81437),
    m = n(976860),
    g = n(734057),
    x = n(994500),
    p = n(822382),
    E = n(876689),
    C = n(222),
    A = n(652215),
    T = n(792996),
    N = n(979882);
let v = l.memo(function (e) {
    let {
            search: t,
            renderEmbeds: n,
            scrollTo: v,
            messages: I,
            blockCount: _,
            ignoreCount: P,
            onPageChange: j,
            onClick: S,
            paginationTotalCount: b,
            renderPageWrapper: D,
            onBlockedResultsClick: y,
            searchRequestAnalyticsId: k,
            searchResultsQuery: R,
        } = e,
        { offset: M, totalResults: U, isSearching: L, showBlockedResults: O } = t,
        X = l.useCallback(
            (e, t) => {
                function n() {
                    let t = g.A.getChannel(e.channel_id),
                        n = null != t ? t.getGuildId() : null;
                    u.A.trackJump(e.channel_id, e.id, "Search Results", { search_id: k });
                    let r = A.BVt.CHANNEL(n, e.channel_id, e.id);
                    (0, m.pX)(t?.type === A.rbe.GUILD_APP ? (0, d.gu)(r) : r);
                }
                (S?.(e, t), (0, h.A)(e, n) && n());
            },
            [S, k],
        ),
        G = l.useMemo(() => {
            let e,
                t = 0;
            return I.reduce((n, r) => {
                if (!O && (x.A.isBlockedForMessage(r) || x.A.isIgnoredForMessage(r))) return n;
                let l = g.A.getChannel(r.channel_id);
                return (
                    null == l ||
                        ((null == e || e !== l.id) && n.push({ channel: l, messages: [], startIndex: t }),
                        (t += 1),
                        n[n.length - 1].messages.push(r),
                        (e = l?.id)),
                    n
                );
            }, []);
        }, [I, O]),
        $ = l.useRef([]),
        w = G.reduce((e, t) => e + 1 + t.messages.length, 0),
        F = l.useCallback(
            (e, t) => {
                if (!c.Ay.keyboardModeEnabled) return;
                let n = $.current,
                    r = null != t ? n[t] : void 0;
                if (null == r || null == r.hitRef.current) return;
                let l = r.hitRef.current.getClientRects()[0];
                v(l.top - 0.5 * l.height, !1, () => {
                    document.getElementById(e)?.focus();
                });
            },
            [v],
        ),
        V = l.useCallback((e) => {
            let t = $.current[e];
            t?.jumpTo();
        }, []),
        W = (0, a.Ay)({ navId: "search-results", itemCount: w, focusedIndex: 0, setFocus: F, onSelect: V }),
        B = (0, p.dX)(R) ?? "",
        K = (0, o.wG)(B),
        z = l.useMemo(() => (0, o.th)(B), [B]),
        J = G.map((e) => {
            let { channel: t, messages: l, startIndex: a } = e;
            return (0, r.jsx)(
                C.l,
                {
                    channel: t,
                    messages: l,
                    highlighter: K,
                    startIndex: a,
                    resultRefs: $,
                    totalResults: U,
                    scrollTo: v,
                    renderEmbeds: n,
                    offset: M,
                    jumpToMessage: X,
                    listNavigator: W,
                },
                `${t.id}-${a}`,
            );
        });
    J.push();
    let H = l.useRef(null);
    l.useLayoutEffect(() => {
        H.current?.focus();
    }, [I]);
    let q = (0, s.R7)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: H,
                ...W.getContainerProps(),
                ...q,
                "aria-busy": L,
                children: (0, r.jsx)(f.G.Provider, { value: z, children: J }),
            }),
            _ > 0 || P > 0
                ? (0, r.jsxs)(i.D, {
                      tag: "div",
                      className: N.P,
                      onClick: function () {
                          y?.(!O);
                      },
                      children: [
                          (0, r.jsx)("div", { className: N.y }),
                          (0, r.jsx)("div", {
                              className: N.__invalid_resultsBlockedText,
                              children: O
                                  ? _ > 0 && P > 0
                                      ? T.intl.formatToPlainString(T.t.OvJs9w, { count: _ + P })
                                      : _ > 0
                                        ? T.intl.formatToPlainString(T.t["n/1QFS"], { count: _ })
                                        : T.intl.formatToPlainString(T.t.ypezTA, { count: P })
                                  : _ > 0 && P > 0
                                    ? T.intl.formatToPlainString(T.t.EJHRcV, { count: _ + P })
                                    : _ > 0
                                      ? T.intl.formatToPlainString(T.t.HTE8JP, { count: _ })
                                      : T.intl.formatToPlainString(T.t.e7f8r9, { count: P }),
                          }),
                      ],
                  })
                : null,
            null != j &&
                !L &&
                (0, r.jsx)(E.A, { renderPageWrapper: D, onPageChange: j, offset: M, totalCount: b ?? U, pageSize: 25 }),
        ],
    });
});
n.d(t, {}, { A: v });
