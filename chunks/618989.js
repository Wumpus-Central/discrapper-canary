s.d(t, { A: () => eN });
var l,
    r = s(477900),
    n = s(582128),
    a = s(503698),
    i = s.n(a),
    c = s(989349),
    o = s.n(c),
    u = s(17928),
    d = s(765178),
    h = s(364522),
    x = s(939538),
    m = s(734057),
    g = s(309010),
    p = s(692986),
    f = s(822382),
    S = s(753806);
s(321073);
var A = s(783977),
    R = s(834730),
    I = s(7689),
    y = s(778712),
    E = s(351906),
    C = s(625494),
    b = s(5990),
    j = s(304578),
    T = s(939249),
    N = s(866665),
    _ = s(241326),
    v = s(97808),
    L = s(276293),
    k = s(950305),
    M = s(935063),
    O = s(967198),
    F = s(287809),
    H = s(562153),
    w = s(616252),
    P = s(315059),
    W = s(121806),
    q = s(988665),
    D = s(652215),
    G = s(375708);
function z(e, t) {
    return { type: e, data: t };
}
function $(e) {
    switch (e) {
        case D.x2k.HISTORY:
            return G.intl.string(G.t.tSZd5c);
        case D.LWr.FILTER_FROM:
            return G.intl.string(G.t.catERA);
        case D.LWr.FILTER_MENTIONS:
            return G.intl.string(G.t["l3K4B/"]);
        case D.LWr.FILTER_IN:
            return G.intl.string(G.t.vHyCgl);
        case D.LWr.FILTER_HAS:
            return G.intl.string(G.t.IC7gHM);
        default:
            return "";
    }
}
function Q(e) {
    let { modeType: t, result: s, group: l } = e,
        { text: r, channel: n, group: a } = s,
        i = r;
    if ((null != n && (i = (0, f.TZ)(i)), t === D.o$q.FILTER_ALL)) {
        let e = j.Ay[a ?? l];
        e?.key != null && e?.key !== "" && (i = `${e.key} ${i}`);
    }
    return i;
}
var U = s(768570),
    B = s(462315);
function Y(e) {
    let { icon: t, label: s, sublabel: l, onSelect: n, navId: a, index: i, selected: c } = e;
    return (0, r.jsx)(T.D, {
        className: B.DB,
        onClick: function () {
            n({ searchAutocompleteSelectAction: U.oi.CLICK, selectedIndex: i });
        },
        ...(function (e) {
            let { navId: t, index: s, selected: l } = e;
            return { id: `${t}-${s}`, role: "option", tabIndex: -1, "aria-selected": l };
        })({ navId: a, index: i, selected: c }),
        children: (0, r.jsxs)("div", {
            className: B.AS,
            children: [t, null == l ? s : (0, r.jsxs)("div", { children: [s, l] })],
        }),
    });
}
function V(e) {
    let { label: t, className: s } = e;
    return (0, r.jsx)(R.E, { variant: "text-sm/medium", color: "text-strong", className: s, children: t });
}
function Z(e) {
    let { searchTokenType: t, answer: s } = e,
        l = j.Ay[t]?.key ?? "",
        n = s ?? (0, f.sh)(t);
    return (0, r.jsxs)("div", {
        className: B.Xq,
        children: [
            (0, r.jsx)(R.E, { variant: "text-sm/semibold", color: "text-subtle", children: l }),
            (0, r.jsx)(R.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
        ],
    });
}
function X(e) {
    let t = (0, f.E3)(e);
    return (0, r.jsxs)("div", {
        className: B.aT,
        children: [
            (0, r.jsx)(P.A, { channel: e, avatarSize: y._3.SIZE_16, iconClassName: B.er, iconSize: "xs" }),
            (0, r.jsx)(R.E, { variant: "text-sm/semibold", color: "text-strong", className: B.HA, children: t }),
        ],
    });
}
function K(e) {
    let { searchContext: t } = e;
    return (0, r.jsx)(N.m, {
        asContainer: !0,
        text: G.intl.string(G.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)(T.D, {
            onClick: () => w.A.clearSearchHistory(t),
            className: B.Wf,
            title: G.intl.string(G.t.dwAvX1),
            "aria-label": G.intl.string(G.t.dwAvX1),
            children: (0, r.jsx)(_.TrashIcon, { size: "sm", color: "currentColor", className: B.f }),
        }),
    });
}
function J(e) {
    let { title: t, showDivider: s, children: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s && (0, r.jsx)("div", { className: B.yF }),
            (0, r.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: B.jw, children: l }, t),
        ],
    });
}
function ee(e) {
    let { headerId: t, titleText: s, trailingIcon: l } = e;
    return (0, r.jsxs)("div", {
        id: t,
        className: B.x_,
        children: [(0, r.jsx)(R.E, { variant: "text-xs/semibold", color: "text-subtle", children: s }), l],
    });
}
function et(e) {
    let { navId: t, item: s, startingIndex: l, selectedIndex: n } = e,
        a = l,
        { rows: i, title: c, trailingIcon: o } = s.data;
    return (0, r.jsxs)(J, {
        title: c,
        showDivider: l > 0,
        children: [
            (0, r.jsx)(ee, { headerId: c, titleText: c, trailingIcon: o }),
            i.map((e) => {
                let { icon: l, label: i, sublabel: o, onSelect: u } = e.data,
                    d = n === a,
                    h = a;
                return (
                    (a += 1),
                    (0, r.jsx)(
                        Y,
                        { icon: l, label: i, sublabel: o, onSelect: u, navId: t, index: h, selected: d },
                        `${s.type}-${c}-${h}`,
                    )
                );
            }),
        ],
    });
}
function es(e) {
    let { size: t, user: s, className: l } = e,
        n = (0, u.bG)([O.A], () => O.A.getGuildId()),
        a = (0, y.FT)(t);
    return (0, r.jsx)(v.eu, { size: t, src: s.getAvatarURL(n, a), "aria-label": s.username, className: l });
}
function el(e) {
    let { user: t } = e,
        { selectedGuildId: s, selectedChannelId: l } = (0, u.cf)([O.A, g.Ay], () => {
            let e = O.A.getGuildId(),
                t = g.Ay.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        n = H.Ay.useName(s, l, t);
    return (0, r.jsx)(R.E, { variant: "text-sm/semibold", color: "text-default", children: n });
}
function er(e) {
    let { value: t, avatarSize: s, iconSize: l } = e,
        n = "",
        a = (0, f._o)(t)
            .map((e, t, s) => (D.l90.test(e.type) || (0, f.Zh)(e, s[t + 1]) ? e : new q.ou(e.getFullMatch(), q.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                n += a;
                let i = D.l90.test(e.type),
                    c = D.T2E.test(e.type),
                    o = `${e.type}-${a}-${t}`;
                if (c)
                    switch (e.type) {
                        case D.LWr.ANSWER_USERNAME_FROM:
                        case D.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, r.jsx)(ea, { token: e, avatarSize: s }, o);
                        case D.LWr.ANSWER_IN:
                            return (0, r.jsx)(ei, { token: e, avatarSize: s, iconSize: l }, o);
                        default:
                            return (0, r.jsx)(en, { text: a, className: B.Mj }, o);
                    }
                return (0, r.jsx)(en, { text: a, className: i ? B._y : B.Lc }, o);
            });
    return { label: (0, r.jsx)("div", { className: B.fH, children: a }), ariaLabel: n };
}
function en(e) {
    let { text: t, className: s } = e;
    return (0, r.jsx)(R.E, { variant: "text-sm/semibold", color: "text-strong", className: s, children: t });
}
function ea(e) {
    let { token: t, avatarSize: s } = e,
        l = t.getFullMatch(),
        n = t.getData("userId"),
        a = (0, u.bG)([F.default], () => F.default.getUser(n));
    return null == a
        ? (0, r.jsx)(en, { text: l, className: B.Mj })
        : (0, r.jsxs)("div", {
              className: B.Mj,
              children: [
                  (0, r.jsx)(es, { size: s, user: a }),
                  (0, r.jsx)(R.E, { variant: "text-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function ei(e) {
    let { token: t, avatarSize: s, iconSize: l } = e,
        n = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        c = (0, u.bG)([m.A], () => m.A.getChannel(a[0]));
    if (null == c) return (0, r.jsx)(en, { text: n, className: B.Mj });
    let o = (0, f.E3)(c);
    return (0, r.jsxs)("div", {
        className: i()(B.Mj, B.JG),
        children: [
            (0, r.jsx)(P.A, { channel: c, avatarSize: s, iconClassName: B.Wh, iconSize: l }),
            (0, r.jsx)(R.E, { variant: "text-sm/semibold", color: "text-strong", children: o }),
        ],
    });
}
function ec(e) {
    let { text: t, className: s, size: l } = e,
        n = (0, W.KD)(t);
    return null != n ? (0, r.jsx)(n, { size: l, color: "currentColor", className: s }) : null;
}
function eo(e) {
    let { text: t, className: s, size: l } = e,
        n = (0, W.Ht)(t);
    return null != n ? (0, r.jsx)(n, { size: l, color: "currentColor", className: s }) : null;
}
var eu = (((l = {}).ROW = "row"), (l.GROUP = "group"), l);
s(667532);
var ed = s(506774),
    eh = s(228366);
let ex = U.nC,
    em = !1,
    eg = {};
class ep extends u.Ay.Store {
    static displayName = U.yQ;
    initialize() {
        var e;
        let t = ed.w.get(ex);
        t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && "" !== e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
            }),
            (eg = e)),
            (em = !!ed.w.get("tokenized"));
    }
    isTokenized() {
        return em;
    }
    getHistory(e) {
        return eg[e];
    }
}
let ef = new ep(eh.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        delete eg[t], ed.w.set(U.nC, { history: eg });
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: s } = e;
        null != eg[t] && ((eg[t] = eg[t].filter((e) => e !== s)), ed.w.set(U.nC, { history: eg }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: s } = e;
        if ("string" != typeof s || "" === (s = s.trim())) return;
        let l = (eg[t] = eg[t] ?? []),
            r = l.indexOf(s);
        -1 !== r
            ? (l.splice(r, 1), l.unshift(s))
            : null != l[0] && "" !== l[0] && s.startsWith(l[0])
              ? (l[0] = s)
              : l.unshift(s),
            l.length > 5 && l.splice(5, l.length),
            ed.w.set(U.nC, { history: eg });
    },
    LOGOUT: function () {
        ed.w.remove(U.nC), (eg = {});
    },
});
var eS = s(65600),
    eA = s(145331),
    eR = s(588975),
    eI = s(674142);
let ey = [];
var eE = s(205615);
let eC = o()("2015-05-15").local();
function eb(e) {
    let { items: t, navId: s, selectedIndex: l } = e,
        n = 0;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case eu.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        c = n;
                    return (
                        (n += 1),
                        (0, r.jsx)(
                            Y,
                            { icon: t, label: a, onSelect: i, navId: s, index: c, selected: l === c },
                            `${e.type}-${c}`,
                        )
                    );
                case eu.GROUP:
                    let { rows: o, title: u } = e.data,
                        d = n;
                    return (
                        (n += o.length),
                        (0, r.jsx)(
                            et,
                            { navId: s, item: e, startingIndex: d, selectedIndex: l },
                            `${e.type}--${u}-${d}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let ej = n.forwardRef(function (e, t) {
        let { searchContext: s, navId: l, resultsState: a, onSelectedIndexChanged: i, selectedChannel: c } = e,
            [o, x] = n.useState(-1),
            m = n.useCallback(
                (e) => {
                    x(e), i(e);
                    let t = document.getElementById(`${l}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [l, i],
            ),
            p = n.useCallback(
                (e) => {
                    let { query: t, performSearch: s, replace: l } = e;
                    S.A.setSearchQuery({
                        query: t,
                        performSearch: s,
                        replace: l,
                        resultsState: a,
                        searchQuerySource: U.Q_.SEARCH_POPOUT,
                    }),
                        m(-1);
                },
                [a, m],
            ),
            { items: T, itemsData: N } = (function (e) {
                let { resultsState: t, searchContext: s, selectedChannel: l, setSearchQuery: a } = e,
                    { autocompletes: i, mode: c } = t,
                    o = (function (e) {
                        let { autocompletes: t, mode: s } = e;
                        return n.useCallback(
                            (e) => {
                                let { getAutocompleteRowItem: l, getAutocompleteGroupItem: r } = e,
                                    n = 0,
                                    a = [],
                                    i = [];
                                for (let e of t) {
                                    let t = [],
                                        { group: c, results: o } = e;
                                    if (e.results.length > 0) {
                                        for (let e of o) {
                                            let r = l({ result: e, modeType: s.type, group: c });
                                            t.push(r);
                                        }
                                        n += o.length;
                                        let e = r({ group: c, rows: t });
                                        a.push(e), i.push(...t);
                                    }
                                }
                                return { autocompleteCount: n, autocompleteGroups: a, allAutocompleteRows: i };
                            },
                            [t, s.type],
                        );
                    })({ autocompletes: i, mode: c }),
                    d = (function (e) {
                        let { setSearchQuery: t, searchContext: s, mode: l } = e,
                            a = (0, eI.o)(s);
                        return n.useMemo(() => {
                            let e = [
                                {
                                    type: D.LWr.FILTER_FROM,
                                    isEligible: a.has(D.LWr.FILTER_FROM),
                                    icon: k.UserIcon,
                                    label: G.intl.string(G.t.ktr6z5),
                                },
                                {
                                    type: D.LWr.FILTER_IN,
                                    isEligible: a.has(D.LWr.FILTER_IN),
                                    icon: L.N,
                                    label: G.intl.string(G.t.VMjDvS),
                                },
                                {
                                    type: D.LWr.FILTER_HAS,
                                    isEligible: a.has(D.LWr.FILTER_HAS),
                                    icon: eR.P,
                                    label: G.intl.string(G.t.IhIpc7),
                                },
                                {
                                    type: D.LWr.FILTER_MENTIONS,
                                    isEligible: a.has(D.LWr.FILTER_MENTIONS),
                                    icon: M.X,
                                    label: G.intl.string(G.t.fpKv9Y),
                                },
                            ];
                            return e
                                .filter((e) => e.isEligible)
                                .map((n) => {
                                    let { icon: a, label: i, type: c } = n;
                                    return z(eu.ROW, {
                                        icon: (0, r.jsx)(a, { size: "sm", color: "currentColor", className: B.Fx }),
                                        label: (0, r.jsx)(V, { label: i }),
                                        sublabel: (0, r.jsx)(Z, { searchTokenType: c }),
                                        onSelect: function (r) {
                                            let { selectedIndex: n, searchAutocompleteSelectAction: a } = r,
                                                i = j.Ay[c]?.key ?? "",
                                                o = (0, f.bS)(s);
                                            (0, eA.kc)({
                                                searchContext: s,
                                                searchQuery: eS.A.getSearchResultsQuery(o),
                                                searchQueryString: S.A.getSearchInputText(s),
                                                searchTokenType: c,
                                                searchAutocompleteGroup: c,
                                                searchAutocompleteMode: l,
                                                searchAutocompleteResultIndex: n - 1,
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
                        }, [a, s, l, t]);
                    })({ setSearchQuery: a, searchContext: s, mode: c }),
                    h = (0, u.yK)([E.A, g.Ay, ef], () => {
                        if (E.A.hidePersonalInformation) return ey;
                        let e = (0, f.Jl)(s, g.Ay);
                        if (null == e) return ey;
                        let t = ef.getHistory(e);
                        if (null == t) return ey;
                        let l = new Set(),
                            r = [];
                        return (
                            t.forEach((e) => {
                                let t = s.type === D.I4_.CHANNEL ? (0, f.EH)(e) : e;
                                "" === t || l.has(t) || (l.add(t), r.push(t));
                            }),
                            r
                        );
                    });
                function x(e) {
                    let {
                            autocompleteCount: t,
                            selectedIndex: l,
                            searchAutocompleteSelectAction: r,
                            selectedAutocomplete: n,
                            selectedAutocompleteGroup: a,
                        } = e,
                        i = c.type,
                        o = c.filter,
                        { token: u, group: d } = n,
                        h = null != d && (0, j.If)(d) ? d : null,
                        x = u ?? o ?? h,
                        m = n.channel,
                        p = x === D.LWr.FILTER_IN && null != m && m.id === g.Ay.getChannelId(),
                        A = (0, f.bS)(s);
                    (0, eA.kc)({
                        searchContext: s,
                        searchQuery: eS.A.getSearchResultsQuery(A),
                        searchQueryString: S.A.getSearchInputText(s),
                        searchTokenType: x,
                        searchAutocompleteGroup: a,
                        searchAutocompleteMode: c,
                        searchAutocompleteResultIndex: l,
                        searchAutocompleteTotalResults: t,
                        isSearchFilterPrefix: i === D.o$q.EMPTY,
                        isSearchFilterAnswer: i === D.o$q.FILTER,
                        isSearchFilterComplete: i === D.o$q.FILTER_ALL,
                        isInFilterForSelectedChannel: p,
                        searchAutocompleteSelectAction: r,
                    });
                }
                let m = n.useCallback(
                        (e) => {
                            let { hasOtherSearchFiltersVisible: t } = e,
                                l = t ? G.intl.string(G.t.diOL4i) : G.intl.string(G.t["M1tf+7"]);
                            return z(eu.ROW, {
                                icon: (0, r.jsx)(A.R, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: B.Fx,
                                }),
                                label: (0, r.jsx)(V, { label: l }),
                                sublabel: t
                                    ? (0, r.jsx)(R.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          children: G.intl.string(G.t["1axf1T"]),
                                      })
                                    : void 0,
                                onSelect: () => S.A.openSearchFiltersModal(s),
                            });
                        },
                        [s],
                    ),
                    p = (0,
                    {
                        [D.o$q.EMPTY]: () => {
                            let e = [];
                            if (null != l && (0, b.HM)(s) && s.type === D.I4_.DMS) {
                                let t = X(l),
                                    n = z(eu.ROW, {
                                        icon: (0, r.jsx)(I.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: B.Fx,
                                        }),
                                        label: (0, r.jsx)(V, {
                                            label: G.intl.format(G.t["VGEH/0"], { channelName: t }),
                                            className: B.YL,
                                        }),
                                        onSelect: (e) => {
                                            let { searchAutocompleteSelectAction: t } = e;
                                            return (function (e) {
                                                let { selectedChannel: t, searchAutocompleteSelectAction: l } = e;
                                                (0, eA.rE)({ searchContext: s, searchAutocompleteSelectAction: l });
                                                let r = D.LWr.FILTER_IN,
                                                    n = j.Ay[r],
                                                    i = (0, f.Rt)(t);
                                                a({
                                                    query: `${n?.key ?? r.toString()} ${i}`,
                                                    performSearch: !0,
                                                    replace: !1,
                                                });
                                            })({ selectedChannel: l, searchAutocompleteSelectAction: t });
                                        },
                                    });
                                e.push(n);
                            }
                            let t = [...d, m({ hasOtherSearchFiltersVisible: !0 })];
                            if ((e.push(z(eu.GROUP, { rows: t, title: G.intl.string(G.t.UdhTtk) })), h.length > 0)) {
                                let t = h.map((e, t) => {
                                        let { label: l, ariaLabel: n } = er({
                                            value: e,
                                            avatarSize: y._3.SIZE_16,
                                            iconSize: "xs",
                                        });
                                        return z(eu.ROW, {
                                            icon: (0, r.jsx)(I.MagnifyingGlassIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: B.Fx,
                                            }),
                                            label: l,
                                            ariaLabel: G.intl.formatToPlainString(G.t.WoiGrV, { suggestion: n }),
                                            resultText: e,
                                            onSelect: () => {
                                                (0, eA.oR)({
                                                    searchContext: s,
                                                    searchHistoryIndex: t,
                                                    searchHistoryTotalResults: h.length,
                                                }),
                                                    a({ query: e, performSearch: !0, replace: !1 });
                                            },
                                        });
                                    }),
                                    l = z(eu.GROUP, {
                                        rows: t,
                                        trailingIcon: (0, r.jsx)(K, { searchContext: s }),
                                        title: $(D.x2k.HISTORY),
                                    });
                                e.push(l);
                            }
                            return e;
                        },
                        [D.o$q.FILTER_ALL]: () => {
                            let e = [];
                            if ("" !== t.query.trim()) {
                                let { label: s } = er({ value: t.query, avatarSize: y._3.SIZE_16, iconSize: "xs" }),
                                    l = z(eu.ROW, {
                                        icon: (0, r.jsx)(I.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: B.Fx,
                                        }),
                                        label: (0, r.jsx)(V, {
                                            label: G.intl.format(G.t.rCnaoo, { value: s }),
                                            className: B.YL,
                                        }),
                                        ariaLabel: G.intl.formatToPlainString(G.t.rCnaoo, { value: t.query }),
                                        onSelect: () =>
                                            (function (e) {
                                                let { searchEverywhere: t } = e;
                                                C._.dispatch(D.jej.PERFORM_SEARCH, {
                                                    searchEverywhere: t,
                                                    searchQuerySource: U.Q_.SEARCH_POPOUT,
                                                });
                                            })({ searchEverywhere: !1 }),
                                    });
                                e.push(l);
                            }
                            let { autocompleteCount: s, autocompleteGroups: l } = o({
                                getAutocompleteRowItem: (e) => {
                                    let { result: t, modeType: l, group: n } = e,
                                        i = Q({ modeType: l, result: t, group: n }),
                                        c = (function (e) {
                                            let { result: t, group: s } = e;
                                            switch (s) {
                                                case D.x2k.HISTORY:
                                                    return (0, r.jsx)(I.MagnifyingGlassIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: B.Fx,
                                                    });
                                                case D.LWr.FILTER_IN:
                                                    return (0, r.jsx)(L.N, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: B.Fx,
                                                    });
                                                case D.LWr.FILTER_FROM:
                                                    return (0, r.jsx)(k.UserIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: B.Fx,
                                                    });
                                                case D.LWr.FILTER_MENTIONS:
                                                    return (0, r.jsx)(M.X, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: B.Fx,
                                                    });
                                                case D.LWr.FILTER_HAS:
                                                    return (0, r.jsx)(ec, {
                                                        text: t.text,
                                                        size: "sm",
                                                        className: B.Fx,
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })({ result: t, group: n }),
                                        { label: o, ariaLabel: u } = (function (e) {
                                            let { channel: t, user: s, text: l } = e;
                                            return null != t
                                                ? {
                                                      label: (0, r.jsxs)("div", {
                                                          className: B.YL,
                                                          children: [
                                                              (0, r.jsx)(R.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-strong",
                                                                  children: j.Ay[D.LWr.FILTER_IN].key ?? "",
                                                              }),
                                                              X(t),
                                                          ],
                                                      }),
                                                      ariaLabel: (0, f.E3)(t),
                                                  }
                                                : null != s
                                                  ? {
                                                        label: (0, r.jsxs)("div", {
                                                            className: B.YL,
                                                            children: [
                                                                (0, r.jsx)(es, { size: y._3.SIZE_16, user: s }),
                                                                (0, r.jsx)(el, { user: s }),
                                                            ],
                                                        }),
                                                        ariaLabel: s.username,
                                                    }
                                                  : { label: (0, r.jsx)(V, { label: l }), ariaLabel: l };
                                        })(t),
                                        d =
                                            n === D.LWr.FILTER_FROM || n === D.LWr.FILTER_MENTIONS
                                                ? (0, r.jsx)(Z, { searchTokenType: n, answer: t.user?.username })
                                                : void 0;
                                    return z(eu.ROW, {
                                        icon: c,
                                        label: o,
                                        sublabel: d,
                                        ariaLabel: u,
                                        resultText: i,
                                        onSelect: function (e) {
                                            let { selectedIndex: l, searchAutocompleteSelectAction: r } = e;
                                            x({
                                                selectedIndex: l,
                                                searchAutocompleteSelectAction: r,
                                                selectedAutocomplete: t,
                                                selectedAutocompleteGroup: n,
                                                autocompleteCount: s,
                                            }),
                                                a({ query: i, performSearch: !1, replace: !1 });
                                        },
                                    });
                                },
                                getAutocompleteGroupItem: (e) => {
                                    let { group: t, rows: s } = e,
                                        l = $(t);
                                    return z(eu.GROUP, { rows: s, title: l });
                                },
                            });
                            if (0 === s) {
                                let t = [...d, m({ hasOtherSearchFiltersVisible: !0 })];
                                e.push(z(eu.GROUP, { rows: t, title: G.intl.string(G.t.UdhTtk) }));
                            } else {
                                let t = m({ hasOtherSearchFiltersVisible: !1 });
                                e.push(t);
                            }
                            return s > 0 && e.push(...l), e;
                        },
                        [D.o$q.FILTER]: () => {
                            let { autocompleteCount: e, autocompleteGroups: t } = o({
                                getAutocompleteRowItem: (t) => {
                                    let { result: s, modeType: l, group: n } = t,
                                        i = Q({ modeType: l, result: s, group: n }),
                                        c = (function (e) {
                                            let { result: t, group: s } = e,
                                                { channel: l, user: n } = t;
                                            return null != l
                                                ? (0, r.jsx)(P.A, {
                                                      channel: l,
                                                      avatarSize: y._3.SIZE_20,
                                                      iconClassName: B.Fx,
                                                      iconSize: "refresh_sm",
                                                  })
                                                : null != n
                                                  ? (0, r.jsx)(es, { size: y._3.SIZE_20, user: n, className: B.Fx })
                                                  : s === D.LWr.FILTER_HAS
                                                    ? (0, r.jsx)(ec, { size: "sm", text: t.text, className: B.Fx })
                                                    : s === D.LWr.FILTER_AUTHOR_TYPE
                                                      ? (0, r.jsx)(eo, { size: "sm", text: t.text, className: B.Fx })
                                                      : null;
                                        })({ result: s, group: n }),
                                        { label: o, ariaLabel: u } = (function (e) {
                                            let { channel: t, user: s, text: l } = e;
                                            if (null != t) {
                                                let e = (0, f.E3)(t);
                                                return {
                                                    label: (0, r.jsx)(R.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-strong",
                                                        children: e,
                                                    }),
                                                    ariaLabel: (0, f.E3)(t),
                                                };
                                            }
                                            return null != s
                                                ? {
                                                      label: (0, r.jsxs)("div", {
                                                          className: B.YL,
                                                          children: [
                                                              (0, r.jsx)(el, { user: s }),
                                                              (0, r.jsx)(R.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-subtle",
                                                                  children: s.username,
                                                              }),
                                                          ],
                                                      }),
                                                      ariaLabel: s.username,
                                                  }
                                                : { label: (0, r.jsx)(V, { label: l }), ariaLabel: l };
                                        })(s);
                                    return z(eu.ROW, {
                                        icon: c,
                                        label: o,
                                        ariaLabel: u,
                                        resultText: i,
                                        onSelect: function (t) {
                                            let { selectedIndex: l, searchAutocompleteSelectAction: r } = t;
                                            x({
                                                selectedIndex: l,
                                                searchAutocompleteSelectAction: r,
                                                selectedAutocomplete: s,
                                                selectedAutocompleteGroup: n,
                                                autocompleteCount: e,
                                            }),
                                                a({ query: i, performSearch: !0, replace: !1 });
                                        },
                                    });
                                },
                                getAutocompleteGroupItem: (e) => {
                                    let { group: t, rows: s } = e,
                                        l = $(t);
                                    return z(eu.GROUP, { rows: s, title: l });
                                },
                            });
                            return [...t];
                        },
                    }[c.type])(),
                    T = n.useMemo(() => {
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
                return { items: p, itemsData: T };
            })({ resultsState: a, searchContext: s, selectedChannel: c, setSearchQuery: p });
        function _(e) {
            let { newSelectedIndex: t, searchAutocompleteSelectAction: s } = e,
                l = t;
            return (
                null == l && (l = o),
                !(l < 0) &&
                    !(l > N.length - 1) &&
                    (N[l].data.onSelect({ searchAutocompleteSelectAction: s, selectedIndex: l }), !0)
            );
        }
        function v(e) {
            let t;
            (t = o + e) > N.length - 1 ? (t = 0) : t < 0 && (t = N.length - 1), m(t);
        }
        let O = n.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        n.useEffect(() => {
            let { itemsData: e, selectedIndex: t, modeType: s, query: l } = O.current,
                r = a.mode.type,
                n = a.query;
            if (r !== s) r === D.o$q.FILTER ? m(0) : m(-1);
            else if (r === D.o$q.FILTER && a.query !== l && N.length > 0) m(0);
            else if (r === D.o$q.FILTER && 0 === e.length && N.length > 0) m(0);
            else if (t >= 0 && (t === o || e.length !== N.length)) {
                let s = e[t],
                    l = s?.data.resultText;
                if (null != l) {
                    let e = N.findIndex((e) => e.data.resultText === l);
                    -1 !== e ? m(e) : t >= N.length && m(Math.max(0, N.length - 1));
                } else t >= N.length && m(Math.max(0, N.length - 1));
            }
            O.current = { itemsData: N, selectedIndex: o, modeType: r, query: n };
        }, [N, o, a.mode.type, a.query, m]);
        let F = n.useRef(null),
            H = a.query;
        return (
            n.useEffect(() => {
                if ("" === H) {
                    F.current = null;
                    return;
                }
                let e = N.length;
                F.current !== e &&
                    ((F.current = e), d.O.announce(G.intl.formatToPlainString(G.t.ZGVL3g, { count: e }), "polite"));
            }, [N.length, H]),
            n.useImperativeHandle(t, () => ({
                selectedIndex: o,
                focusNextOption: () => {
                    v(1);
                },
                focusPreviousOption: () => {
                    v(-1);
                },
                selectOption: _,
            })),
            (0, r.jsx)(h.d_, {
                onMouseDown: function (e) {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${o}`,
                className: T.length > 0 ? eE.kL : void 0,
                children: (0, r.jsx)(eb, { items: T, navId: l, selectedIndex: o }),
            })
        );
    }),
    eT = n.forwardRef(function (e, t) {
        let { navId: s, resultsState: l, searchContext: a } = e;
        return (
            n.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, r.jsx)(h.d_, {
                onMouseDown: function (e) {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: s,
                tabIndex: -1,
                "aria-activedescendant": `${s}--1`,
                className: i()(eE.kL, eE.Wl),
                children: (0, r.jsx)(x.CalendarPicker, {
                    onSelect: function (e) {
                        let t = (0, f.bS)(a);
                        (0, eA.kc)({
                            searchContext: a,
                            searchQuery: eS.A.getSearchResultsQuery(t),
                            searchQueryString: S.A.getSearchInputText(a),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: D.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: U.oi.CLICK,
                        }),
                            S.A.setSearchQuery({
                                query: e.format(D.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: U.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: o()().local(),
                    minDate: eC,
                    calendarClassName: eE.BJ,
                }),
            })
        );
    }),
    eN = n.forwardRef(function (e, t) {
        let { searchContext: s, navId: l, onSelectedIndexChanged: n } = e,
            [a, i] = (0, u.yK)([p.A, g.Ay, m.A], () => {
                let e = p.A.getState(s),
                    t = g.Ay.getChannelId();
                return [e, m.A.getChannel(t)];
            });
        return (0, f.av)(a.mode.filter)
            ? (0, r.jsx)(eT, { navId: l, resultsState: a, searchContext: s })
            : (0, r.jsx)(ej, {
                  ref: t,
                  searchContext: s,
                  navId: l,
                  onSelectedIndexChanged: n,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
