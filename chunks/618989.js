r.d(t, { A: () => eN });
var l,
    n = r(477900),
    s = r(582128),
    a = r(503698),
    i = r.n(a),
    c = r(536637),
    o = r.n(c),
    u = r(17928),
    h = r(765178),
    d = r(364522),
    x = r(939538),
    m = r(734057),
    f = r(309010),
    p = r(692986),
    I = r(822382),
    g = r(753806);
r(321073);
var S = r(783977),
    y = r(834730),
    E = r(7689),
    A = r(778712),
    R = r(351906),
    j = r(625494),
    T = r(5990),
    L = r(304578),
    b = r(939249),
    N = r(866665),
    v = r(241326),
    F = r(97808),
    _ = r(276293),
    C = r(950305),
    O = r(935063),
    M = r(967198),
    W = r(287809),
    k = r(562153),
    w = r(616252),
    z = r(315059),
    H = r(121806),
    $ = r(988665),
    G = r(652215),
    P = r(375708);
function q(e, t) {
    return { type: e, data: t };
}
function U(e) {
    switch (e) {
        case G.x2k.HISTORY:
            return P.intl.string(P.t.tSZd5c);
        case G.LWr.FILTER_FROM:
            return P.intl.string(P.t.catERA);
        case G.LWr.FILTER_MENTIONS:
            return P.intl.string(P.t["l3K4B/"]);
        case G.LWr.FILTER_IN:
            return P.intl.string(P.t.vHyCgl);
        case G.LWr.FILTER_HAS:
            return P.intl.string(P.t.IC7gHM);
        default:
            return "";
    }
}
function D(e) {
    let { modeType: t, result: r, group: l } = e,
        { text: n, channel: s, group: a } = r,
        i = n;
    if ((null != s && (i = (0, I.TZ)(i)), t === G.o$q.FILTER_ALL)) {
        let e = L.Ay[a ?? l];
        e?.key != null && e?.key !== "" && (i = `${e.key} ${i}`);
    }
    return i;
}
var Q = r(768570),
    Y = r(676068);
function Z(e) {
    let { icon: t, label: r, sublabel: l, onSelect: s, navId: a, index: i, selected: c } = e;
    return (0, n.jsx)(b.D, {
        className: Y.DB,
        onClick: function () {
            s({ searchAutocompleteSelectAction: Q.oi.CLICK, selectedIndex: i });
        },
        ...(function (e) {
            let { navId: t, index: r, selected: l } = e;
            return { id: `${t}-${r}`, role: "option", tabIndex: -1, "aria-selected": l };
        })({ navId: a, index: i, selected: c }),
        children: (0, n.jsxs)("div", {
            className: Y.AS,
            children: [t, null == l ? r : (0, n.jsxs)("div", { children: [r, l] })],
        }),
    });
}
function V(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(y.E, { variant: "text-sm/medium", color: "text-strong", className: r, children: t });
}
function B(e) {
    let { searchTokenType: t, answer: r } = e,
        l = L.Ay[t]?.key ?? "",
        s = r ?? (0, I.sh)(t);
    return (0, n.jsxs)("div", {
        className: Y.Xq,
        children: [
            (0, n.jsx)(y.E, { variant: "text-sm/semibold", color: "text-subtle", children: l }),
            (0, n.jsx)(y.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
        ],
    });
}
function K(e) {
    let t = (0, I.E3)(e);
    return (0, n.jsxs)("div", {
        className: Y.aT,
        children: [
            (0, n.jsx)(z.A, { channel: e, avatarSize: A._3.SIZE_16, iconClassName: Y.er, iconSize: "xs" }),
            (0, n.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", className: Y.HA, children: t }),
        ],
    });
}
function X(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(N.m, {
        asContainer: !0,
        text: P.intl.string(P.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(b.D, {
            onClick: () => w.A.clearSearchHistory(t),
            className: Y.Wf,
            title: P.intl.string(P.t.dwAvX1),
            "aria-label": P.intl.string(P.t.dwAvX1),
            children: (0, n.jsx)(v.TrashIcon, { size: "sm", color: "currentColor", className: Y.f }),
        }),
    });
}
function J(e) {
    let { title: t, showDivider: r, children: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r && (0, n.jsx)("div", { className: Y.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: Y.jw, children: l }, t),
        ],
    });
}
function ee(e) {
    let { headerId: t, titleText: r, trailingIcon: l } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: Y.x_,
        children: [(0, n.jsx)(y.E, { variant: "text-xs/semibold", color: "text-subtle", children: r }), l],
    });
}
function et(e) {
    let { navId: t, item: r, startingIndex: l, selectedIndex: s } = e,
        a = l,
        { rows: i, title: c, trailingIcon: o } = r.data;
    return (0, n.jsxs)(J, {
        title: c,
        showDivider: l > 0,
        children: [
            (0, n.jsx)(ee, { headerId: c, titleText: c, trailingIcon: o }),
            i.map((e) => {
                let { icon: l, label: i, sublabel: o, onSelect: u } = e.data,
                    h = s === a,
                    d = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        Z,
                        { icon: l, label: i, sublabel: o, onSelect: u, navId: t, index: d, selected: h },
                        `${r.type}-${c}-${d}`,
                    )
                );
            }),
        ],
    });
}
function er(e) {
    let { size: t, user: r, className: l } = e,
        s = (0, u.bG)([M.A], () => M.A.getGuildId()),
        a = (0, A.FT)(t);
    return (0, n.jsx)(F.eu, { size: t, src: r.getAvatarURL(s, a), "aria-label": r.username, className: l });
}
function el(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: l } = (0, u.cf)([M.A, f.Ay], () => {
            let e = M.A.getGuildId(),
                t = f.Ay.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        s = k.Ay.useName(r, l, t);
    return (0, n.jsx)(y.E, { variant: "text-sm/semibold", color: "text-default", children: s });
}
function en(e) {
    let { value: t, avatarSize: r, iconSize: l } = e,
        s = "",
        a = (0, I._o)(t)
            .map((e, t, r) => (G.l90.test(e.type) || (0, I.Zh)(e, r[t + 1]) ? e : new $.ou(e.getFullMatch(), $.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                s += a;
                let i = G.l90.test(e.type),
                    c = G.T2E.test(e.type),
                    o = `${e.type}-${a}-${t}`;
                if (c)
                    switch (e.type) {
                        case G.LWr.ANSWER_USERNAME_FROM:
                        case G.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, n.jsx)(ea, { token: e, avatarSize: r }, o);
                        case G.LWr.ANSWER_IN:
                            return (0, n.jsx)(ei, { token: e, avatarSize: r, iconSize: l }, o);
                        default:
                            return (0, n.jsx)(es, { text: a, className: Y.Mj }, o);
                    }
                return (0, n.jsx)(es, { text: a, className: i ? Y._y : Y.Lc }, o);
            });
    return { label: (0, n.jsx)("div", { className: Y.fH, children: a }), ariaLabel: s };
}
function es(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", className: r, children: t });
}
function ea(e) {
    let { token: t, avatarSize: r } = e,
        l = t.getFullMatch(),
        s = t.getData("userId"),
        a = (0, u.bG)([W.default], () => W.default.getUser(s));
    return null == a
        ? (0, n.jsx)(es, { text: l, className: Y.Mj })
        : (0, n.jsxs)("div", {
              className: Y.Mj,
              children: [
                  (0, n.jsx)(er, { size: r, user: a }),
                  (0, n.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function ei(e) {
    let { token: t, avatarSize: r, iconSize: l } = e,
        s = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        c = (0, u.bG)([m.A], () => m.A.getChannel(a[0]));
    if (null == c) return (0, n.jsx)(es, { text: s, className: Y.Mj });
    let o = (0, I.E3)(c);
    return (0, n.jsxs)("div", {
        className: i()(Y.Mj, Y.JG),
        children: [
            (0, n.jsx)(z.A, { channel: c, avatarSize: r, iconClassName: Y.Wh, iconSize: l }),
            (0, n.jsx)(y.E, { variant: "text-sm/semibold", color: "text-strong", children: o }),
        ],
    });
}
function ec(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, H.KD)(t);
    return null != s ? (0, n.jsx)(s, { size: l, color: "currentColor", className: r }) : null;
}
function eo(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, H.Ht)(t);
    return null != s ? (0, n.jsx)(s, { size: l, color: "currentColor", className: r }) : null;
}
var eu = (((l = {}).ROW = "row"), (l.GROUP = "group"), l);
r(667532);
var eh = r(506774),
    ed = r(228366);
let ex = Q.nC,
    em = !1,
    ef = {};
class ep extends u.Ay.Store {
    static displayName = Q.yQ;
    initialize() {
        var e;
        let t = eh.w.get(ex);
        t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && "" !== e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
            }),
            (ef = e)),
            (em = !!eh.w.get("tokenized"));
    }
    isTokenized() {
        return em;
    }
    getHistory(e) {
        return ef[e];
    }
}
let eI = new ep(ed.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        delete ef[t], eh.w.set(Q.nC, { history: ef });
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: r } = e;
        null != ef[t] && ((ef[t] = ef[t].filter((e) => e !== r)), eh.w.set(Q.nC, { history: ef }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: r } = e;
        if ("string" != typeof r || "" === (r = r.trim())) return;
        let l = (ef[t] = ef[t] ?? []),
            n = l.indexOf(r);
        -1 !== n
            ? (l.splice(n, 1), l.unshift(r))
            : null != l[0] && "" !== l[0] && r.startsWith(l[0])
              ? (l[0] = r)
              : l.unshift(r),
            l.length > 5 && l.splice(5, l.length),
            eh.w.set(Q.nC, { history: ef });
    },
    LOGOUT: function () {
        eh.w.remove(Q.nC), (ef = {});
    },
});
var eg = r(65600),
    eS = r(145331),
    ey = r(588975),
    eE = r(674142);
let eA = [];
var eR = r(948914);
let ej = o()("2015-05-15").local();
function eT(e) {
    let { items: t, navId: r, selectedIndex: l } = e,
        s = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case eu.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        c = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            Z,
                            { icon: t, label: a, onSelect: i, navId: r, index: c, selected: l === c },
                            `${e.type}-${c}`,
                        )
                    );
                case eu.GROUP:
                    let { rows: o, title: u } = e.data,
                        h = s;
                    return (
                        (s += o.length),
                        (0, n.jsx)(
                            et,
                            { navId: r, item: e, startingIndex: h, selectedIndex: l },
                            `${e.type}--${u}-${h}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let eL = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, resultsState: a, onSelectedIndexChanged: i, selectedChannel: c } = e,
            [o, x] = s.useState(-1),
            m = s.useCallback(
                (e) => {
                    x(e), i(e);
                    let t = document.getElementById(`${l}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [l, i],
            ),
            p = s.useCallback(
                (e) => {
                    let { query: t, performSearch: r, replace: l } = e;
                    g.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: l,
                        resultsState: a,
                        searchQuerySource: Q.Q_.SEARCH_POPOUT,
                    }),
                        m(-1);
                },
                [a, m],
            ),
            { items: b, itemsData: N } = (function (e) {
                let { resultsState: t, searchContext: r, selectedChannel: l, setSearchQuery: a } = e,
                    { autocompletes: i, mode: c } = t,
                    o = (function (e) {
                        let { autocompletes: t, mode: r } = e;
                        return s.useCallback(
                            (e) => {
                                let { getAutocompleteRowItem: l, getAutocompleteGroupItem: n } = e,
                                    s = 0,
                                    a = [],
                                    i = [];
                                for (let e of t) {
                                    let t = [],
                                        { group: c, results: o } = e;
                                    if (e.results.length > 0) {
                                        for (let e of o) {
                                            let n = l({ result: e, modeType: r.type, group: c });
                                            t.push(n);
                                        }
                                        s += o.length;
                                        let e = n({ group: c, rows: t });
                                        a.push(e), i.push(...t);
                                    }
                                }
                                return { autocompleteCount: s, autocompleteGroups: a, allAutocompleteRows: i };
                            },
                            [t, r.type],
                        );
                    })({ autocompletes: i, mode: c }),
                    h = (function (e) {
                        let { setSearchQuery: t, searchContext: r, mode: l } = e,
                            a = (0, eE.o)(r);
                        return s.useMemo(() => {
                            let e = [
                                {
                                    type: G.LWr.FILTER_FROM,
                                    isEligible: a.has(G.LWr.FILTER_FROM),
                                    icon: C.UserIcon,
                                    label: P.intl.string(P.t.ktr6z5),
                                },
                                {
                                    type: G.LWr.FILTER_IN,
                                    isEligible: a.has(G.LWr.FILTER_IN),
                                    icon: _.N,
                                    label: P.intl.string(P.t.VMjDvS),
                                },
                                {
                                    type: G.LWr.FILTER_HAS,
                                    isEligible: a.has(G.LWr.FILTER_HAS),
                                    icon: ey.P,
                                    label: P.intl.string(P.t.IhIpc7),
                                },
                                {
                                    type: G.LWr.FILTER_MENTIONS,
                                    isEligible: a.has(G.LWr.FILTER_MENTIONS),
                                    icon: O.X,
                                    label: P.intl.string(P.t.fpKv9Y),
                                },
                            ];
                            return e
                                .filter((e) => e.isEligible)
                                .map((s) => {
                                    let { icon: a, label: i, type: c } = s;
                                    return q(eu.ROW, {
                                        icon: (0, n.jsx)(a, { size: "sm", color: "currentColor", className: Y.Fx }),
                                        label: (0, n.jsx)(V, { label: i }),
                                        sublabel: (0, n.jsx)(B, { searchTokenType: c }),
                                        onSelect: function (n) {
                                            let { selectedIndex: s, searchAutocompleteSelectAction: a } = n,
                                                i = L.Ay[c]?.key ?? "",
                                                o = (0, I.bS)(r);
                                            (0, eS.kc)({
                                                searchContext: r,
                                                searchQuery: eg.A.getSearchResultsQuery(o),
                                                searchQueryString: g.A.getSearchInputText(r),
                                                searchTokenType: c,
                                                searchAutocompleteGroup: c,
                                                searchAutocompleteMode: l,
                                                searchAutocompleteResultIndex: s - 1,
                                                searchAutocompleteTotalResults: e.length,
                                                isSearchFilterPrefix: !0,
                                                isSearchFilterAnswer: !1,
                                                isSearchFilterComplete: !1,
                                                isInFilterForSelectedChannel: !1,
                                                searchAutocompleteSelectAction: a,
                                            }),
                                                t({ query: `${i} `, performSearch: !1, replace: !1 });
                                        },
                                    });
                                });
                        }, [a, r, l, t]);
                    })({ setSearchQuery: a, searchContext: r, mode: c }),
                    d = (0, u.yK)([R.A, f.Ay, eI], () => {
                        if (R.A.hidePersonalInformation) return eA;
                        let e = (0, I.Jl)(r, f.Ay);
                        if (null == e) return eA;
                        let t = eI.getHistory(e);
                        if (null == t) return eA;
                        let l = new Set(),
                            n = [];
                        return (
                            t.forEach((e) => {
                                let t = r.type === G.I4_.CHANNEL ? (0, I.EH)(e) : e;
                                "" === t || l.has(t) || (l.add(t), n.push(t));
                            }),
                            n
                        );
                    });
                function x(e) {
                    let {
                            autocompleteCount: t,
                            selectedIndex: l,
                            searchAutocompleteSelectAction: n,
                            selectedAutocomplete: s,
                            selectedAutocompleteGroup: a,
                        } = e,
                        i = c.type,
                        o = c.filter,
                        { token: u, group: h } = s,
                        d = null != h && (0, L.If)(h) ? h : null,
                        x = u ?? o ?? d,
                        m = s.channel,
                        p = x === G.LWr.FILTER_IN && null != m && m.id === f.Ay.getChannelId(),
                        S = (0, I.bS)(r);
                    (0, eS.kc)({
                        searchContext: r,
                        searchQuery: eg.A.getSearchResultsQuery(S),
                        searchQueryString: g.A.getSearchInputText(r),
                        searchTokenType: x,
                        searchAutocompleteGroup: a,
                        searchAutocompleteMode: c,
                        searchAutocompleteResultIndex: l,
                        searchAutocompleteTotalResults: t,
                        isSearchFilterPrefix: i === G.o$q.EMPTY,
                        isSearchFilterAnswer: i === G.o$q.FILTER,
                        isSearchFilterComplete: i === G.o$q.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: n,
                    });
                }
                let m = s.useCallback(
                        (e) => {
                            let { hasOtherSearchFiltersVisible: t } = e,
                                l = t ? P.intl.string(P.t.diOL4i) : P.intl.string(P.t["M1tf+7"]);
                            return q(eu.ROW, {
                                icon: (0, n.jsx)(S.R, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: Y.Fx,
                                }),
                                label: (0, n.jsx)(V, { label: l }),
                                sublabel: t
                                    ? (0, n.jsx)(y.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          children: P.intl.string(P.t["1axf1T"]),
                                      })
                                    : void 0,
                                onSelect: () => g.A.openSearchFiltersModal(r),
                            });
                        },
                        [r],
                    ),
                    p = (0,
                    {
                        [G.o$q.EMPTY]: () => {
                            let e = [];
                            if (null != l && (0, T.HM)(r) && r.type === G.I4_.DMS) {
                                let t = K(l),
                                    s = q(eu.ROW, {
                                        icon: (0, n.jsx)(E.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: Y.Fx,
                                        }),
                                        label: (0, n.jsx)(V, {
                                            label: P.intl.format(P.t["VGEH/0"], { channelName: t }),
                                            className: Y.YL,
                                        }),
                                        onSelect: (e) => {
                                            let { searchAutocompleteSelectAction: t } = e;
                                            return (function (e) {
                                                let { selectedChannel: t, searchAutocompleteSelectAction: l } = e;
                                                (0, eS.rE)({ searchContext: r, searchAutocompleteSelectAction: l });
                                                let n = G.LWr.FILTER_IN,
                                                    s = L.Ay[n],
                                                    i = (0, I.Rt)(t);
                                                a({
                                                    query: `${s?.key ?? n.toString()} ${i}`,
                                                    performSearch: !0,
                                                    replace: !1,
                                                });
                                            })({ selectedChannel: l, searchAutocompleteSelectAction: t });
                                        },
                                    });
                                e.push(s);
                            }
                            let t = [...h, m({ hasOtherSearchFiltersVisible: !0 })];
                            if ((e.push(q(eu.GROUP, { rows: t, title: P.intl.string(P.t.UdhTtk) })), d.length > 0)) {
                                let t = d.map((e, t) => {
                                        let { label: l, ariaLabel: s } = en({
                                            value: e,
                                            avatarSize: A._3.SIZE_16,
                                            iconSize: "xs",
                                        });
                                        return q(eu.ROW, {
                                            icon: (0, n.jsx)(E.MagnifyingGlassIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: Y.Fx,
                                            }),
                                            label: l,
                                            ariaLabel: P.intl.formatToPlainString(P.t.WoiGrV, { suggestion: s }),
                                            resultText: e,
                                            onSelect: () => {
                                                (0, eS.oR)({
                                                    searchContext: r,
                                                    searchHistoryIndex: t,
                                                    searchHistoryTotalResults: d.length,
                                                }),
                                                    a({ query: e, performSearch: !0, replace: !1 });
                                            },
                                        });
                                    }),
                                    l = q(eu.GROUP, {
                                        rows: t,
                                        trailingIcon: (0, n.jsx)(X, { searchContext: r }),
                                        title: U(G.x2k.HISTORY),
                                    });
                                e.push(l);
                            }
                            return e;
                        },
                        [G.o$q.FILTER_ALL]: () => {
                            let e = [];
                            if ("" !== t.query.trim()) {
                                let { label: r } = en({ value: t.query, avatarSize: A._3.SIZE_16, iconSize: "xs" }),
                                    l = q(eu.ROW, {
                                        icon: (0, n.jsx)(E.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: Y.Fx,
                                        }),
                                        label: (0, n.jsx)(V, {
                                            label: P.intl.format(P.t.rCnaoo, { value: r }),
                                            className: Y.YL,
                                        }),
                                        ariaLabel: P.intl.formatToPlainString(P.t.rCnaoo, { value: t.query }),
                                        onSelect: () =>
                                            (function (e) {
                                                let { searchEverywhere: t } = e;
                                                j._.dispatch(G.jej.PERFORM_SEARCH, {
                                                    searchEverywhere: t,
                                                    searchQuerySource: Q.Q_.SEARCH_POPOUT,
                                                });
                                            })({ searchEverywhere: !1 }),
                                    });
                                e.push(l);
                            }
                            let { autocompleteCount: r, autocompleteGroups: l } = o({
                                getAutocompleteRowItem: (e) => {
                                    let { result: t, modeType: l, group: s } = e,
                                        i = D({ modeType: l, result: t, group: s }),
                                        c = (function (e) {
                                            let { result: t, group: r } = e;
                                            switch (r) {
                                                case G.x2k.HISTORY:
                                                    return (0, n.jsx)(E.MagnifyingGlassIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: Y.Fx,
                                                    });
                                                case G.LWr.FILTER_IN:
                                                    return (0, n.jsx)(_.N, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: Y.Fx,
                                                    });
                                                case G.LWr.FILTER_FROM:
                                                    return (0, n.jsx)(C.UserIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: Y.Fx,
                                                    });
                                                case G.LWr.FILTER_MENTIONS:
                                                    return (0, n.jsx)(O.X, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: Y.Fx,
                                                    });
                                                case G.LWr.FILTER_HAS:
                                                    return (0, n.jsx)(ec, {
                                                        text: t.text,
                                                        size: "sm",
                                                        className: Y.Fx,
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })({ result: t, group: s }),
                                        { label: o, ariaLabel: u } = (function (e) {
                                            let { channel: t, user: r, text: l } = e;
                                            return null != t
                                                ? {
                                                      label: (0, n.jsxs)("div", {
                                                          className: Y.YL,
                                                          children: [
                                                              (0, n.jsx)(y.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-strong",
                                                                  children: L.Ay[G.LWr.FILTER_IN].key ?? "",
                                                              }),
                                                              K(t),
                                                          ],
                                                      }),
                                                      ariaLabel: (0, I.E3)(t),
                                                  }
                                                : null != r
                                                  ? {
                                                        label: (0, n.jsxs)("div", {
                                                            className: Y.YL,
                                                            children: [
                                                                (0, n.jsx)(er, { size: A._3.SIZE_16, user: r }),
                                                                (0, n.jsx)(el, { user: r }),
                                                            ],
                                                        }),
                                                        ariaLabel: r.username,
                                                    }
                                                  : { label: (0, n.jsx)(V, { label: l }), ariaLabel: l };
                                        })(t),
                                        h =
                                            s === G.LWr.FILTER_FROM || s === G.LWr.FILTER_MENTIONS
                                                ? (0, n.jsx)(B, { searchTokenType: s, answer: t.user?.username })
                                                : void 0;
                                    return q(eu.ROW, {
                                        icon: c,
                                        label: o,
                                        sublabel: h,
                                        ariaLabel: u,
                                        resultText: i,
                                        onSelect: function (e) {
                                            let { selectedIndex: l, searchAutocompleteSelectAction: n } = e;
                                            x({
                                                selectedIndex: l,
                                                searchAutocompleteSelectAction: n,
                                                selectedAutocomplete: t,
                                                selectedAutocompleteGroup: s,
                                                autocompleteCount: r,
                                            }),
                                                a({ query: i, performSearch: !1, replace: !1 });
                                        },
                                    });
                                },
                                getAutocompleteGroupItem: (e) => {
                                    let { group: t, rows: r } = e,
                                        l = U(t);
                                    return q(eu.GROUP, { rows: r, title: l });
                                },
                            });
                            if (0 === r) {
                                let t = [...h, m({ hasOtherSearchFiltersVisible: !0 })];
                                e.push(q(eu.GROUP, { rows: t, title: P.intl.string(P.t.UdhTtk) }));
                            } else {
                                let t = m({ hasOtherSearchFiltersVisible: !1 });
                                e.push(t);
                            }
                            return r > 0 && e.push(...l), e;
                        },
                        [G.o$q.FILTER]: () => {
                            let { autocompleteCount: e, autocompleteGroups: t } = o({
                                getAutocompleteRowItem: (t) => {
                                    let { result: r, modeType: l, group: s } = t,
                                        i = D({ modeType: l, result: r, group: s }),
                                        c = (function (e) {
                                            let { result: t, group: r } = e,
                                                { channel: l, user: s } = t;
                                            return null != l
                                                ? (0, n.jsx)(z.A, {
                                                      channel: l,
                                                      avatarSize: A._3.SIZE_20,
                                                      iconClassName: Y.Fx,
                                                      iconSize: "refresh_sm",
                                                  })
                                                : null != s
                                                  ? (0, n.jsx)(er, { size: A._3.SIZE_20, user: s, className: Y.Fx })
                                                  : r === G.LWr.FILTER_HAS
                                                    ? (0, n.jsx)(ec, { size: "sm", text: t.text, className: Y.Fx })
                                                    : r === G.LWr.FILTER_AUTHOR_TYPE
                                                      ? (0, n.jsx)(eo, { size: "sm", text: t.text, className: Y.Fx })
                                                      : null;
                                        })({ result: r, group: s }),
                                        { label: o, ariaLabel: u } = (function (e) {
                                            let { channel: t, user: r, text: l } = e;
                                            if (null != t) {
                                                let e = (0, I.E3)(t);
                                                return {
                                                    label: (0, n.jsx)(y.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-strong",
                                                        children: e,
                                                    }),
                                                    ariaLabel: (0, I.E3)(t),
                                                };
                                            }
                                            return null != r
                                                ? {
                                                      label: (0, n.jsxs)("div", {
                                                          className: Y.YL,
                                                          children: [
                                                              (0, n.jsx)(el, { user: r }),
                                                              (0, n.jsx)(y.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-subtle",
                                                                  children: r.username,
                                                              }),
                                                          ],
                                                      }),
                                                      ariaLabel: r.username,
                                                  }
                                                : { label: (0, n.jsx)(V, { label: l }), ariaLabel: l };
                                        })(r);
                                    return q(eu.ROW, {
                                        icon: c,
                                        label: o,
                                        ariaLabel: u,
                                        resultText: i,
                                        onSelect: function (t) {
                                            let { selectedIndex: l, searchAutocompleteSelectAction: n } = t;
                                            x({
                                                selectedIndex: l,
                                                searchAutocompleteSelectAction: n,
                                                selectedAutocomplete: r,
                                                selectedAutocompleteGroup: s,
                                                autocompleteCount: e,
                                            }),
                                                a({ query: i, performSearch: !0, replace: !1 });
                                        },
                                    });
                                },
                                getAutocompleteGroupItem: (e) => {
                                    let { group: t, rows: r } = e,
                                        l = U(t);
                                    return q(eu.GROUP, { rows: r, title: l });
                                },
                            });
                            return [...t];
                        },
                    }[c.type])(),
                    b = s.useMemo(() => {
                        let e = [];
                        return (
                            p.forEach((t) => {
                                switch (t.type) {
                                    case eu.ROW:
                                        e.push(t);
                                        break;
                                    case eu.GROUP:
                                        t.data.rows.forEach((t) => e.push(t));
                                }
                            }),
                            e
                        );
                    }, [p]);
                return { items: p, itemsData: b };
            })({ resultsState: a, searchContext: r, selectedChannel: c, setSearchQuery: p });
        function v(e) {
            let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                l = t;
            return (
                null == l && (l = o),
                !(l < 0) &&
                    !(l > N.length - 1) &&
                    (N[l].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: l }), !0)
            );
        }
        function F(e) {
            let t;
            (t = o + e) > N.length - 1 ? (t = 0) : t < 0 && (t = N.length - 1), m(t);
        }
        let M = s.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        s.useEffect(() => {
            let { itemsData: e, selectedIndex: t, modeType: r, query: l } = M.current,
                n = a.mode.type,
                s = a.query;
            if (n !== r) n === G.o$q.FILTER ? m(0) : m(-1);
            else if (n === G.o$q.FILTER && a.query !== l && N.length > 0) m(0);
            else if (n === G.o$q.FILTER && 0 === e.length && N.length > 0) m(0);
            else if (t >= 0 && (t === o || e.length !== N.length)) {
                let r = e[t],
                    l = r?.data.resultText;
                if (null != l) {
                    let e = N.findIndex((e) => e.data.resultText === l);
                    -1 !== e ? m(e) : t >= N.length && m(Math.max(0, N.length - 1));
                } else t >= N.length && m(Math.max(0, N.length - 1));
            }
            M.current = { itemsData: N, selectedIndex: o, modeType: n, query: s };
        }, [N, o, a.mode.type, a.query, m]);
        let W = s.useRef(null),
            k = a.query;
        return (
            s.useEffect(() => {
                if ("" === k) {
                    W.current = null;
                    return;
                }
                let e = N.length;
                W.current !== e &&
                    ((W.current = e), h.O.announce(P.intl.formatToPlainString(P.t.ZGVL3g, { count: e }), "polite"));
            }, [N.length, k]),
            s.useImperativeHandle(t, () => ({
                selectedIndex: o,
                focusNextOption: () => {
                    F(1);
                },
                focusPreviousOption: () => {
                    F(-1);
                },
                selectOption: v,
            })),
            (0, n.jsx)(d.d_, {
                onMouseDown: function (e) {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${o}`,
                className: b.length > 0 ? eR.kL : void 0,
                children: (0, n.jsx)(eT, { items: b, navId: l, selectedIndex: o }),
            })
        );
    }),
    eb = s.forwardRef(function (e, t) {
        let { navId: r, resultsState: l, searchContext: a } = e;
        return (
            s.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, n.jsx)(d.d_, {
                onMouseDown: function (e) {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}--1`,
                className: i()(eR.kL, eR.Wl),
                children: (0, n.jsx)(x.CalendarPicker, {
                    onSelect: function (e) {
                        let t = (0, I.bS)(a);
                        (0, eS.kc)({
                            searchContext: a,
                            searchQuery: eg.A.getSearchResultsQuery(t),
                            searchQueryString: g.A.getSearchInputText(a),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: G.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: Q.oi.CLICK,
                        }),
                            g.A.setSearchQuery({
                                query: e.format(G.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: Q.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: ej,
                    calendarClassName: eR.BJ,
                }),
            })
        );
    }),
    eN = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, onSelectedIndexChanged: s } = e,
            [a, i] = (0, u.yK)([p.A, f.Ay, m.A], () => {
                let e = p.A.getState(r),
                    t = f.Ay.getChannelId();
                return [e, m.A.getChannel(t)];
            });
        return (0, I.av)(a.mode.filter)
            ? (0, n.jsx)(eb, { navId: l, resultsState: a, searchContext: r })
            : (0, n.jsx)(eL, {
                  ref: t,
                  searchContext: r,
                  navId: l,
                  onSelectedIndexChanged: s,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
