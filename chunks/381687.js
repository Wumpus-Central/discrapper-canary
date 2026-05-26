r.r(t), r.d(t, { Search: () => e0, default: () => e1, MAX_LENGTH: () => eK });
var l,
    n = r(627968),
    s = r(64700),
    a = r(503698),
    i = r.n(a),
    u = r(271830),
    o = r(985623),
    c = r.n(o),
    h = r(17928),
    d = r(765178),
    f = r(922016),
    p = r(187322),
    E = r(884496),
    g = r(192308),
    S = r(988665),
    m = r(955572),
    R = r(775602),
    A = r(915089),
    I = r(138298),
    x = r(761640),
    L = r(734057),
    _ = r(71393),
    T = r(309010),
    y = r(625494),
    b = r(504531),
    N = r(77277),
    F = r(256796),
    v = r(517381),
    C = r(822382),
    j = r(443390),
    O = r(304578),
    W = r(616252),
    k = r(753806),
    M = r(775427),
    P = r(65600),
    D = r(145331),
    H = r(989349),
    $ = r.n(H),
    w = r(364522),
    z = r(939538),
    U = r(692986);
r(321073);
var q = r(783977),
    G = r(834730),
    B = r(7689),
    Q = r(778712),
    Y = r(351906),
    Z = r(5990),
    K = r(990078),
    X = r(939249),
    V = r(241326),
    J = r(97808),
    ee = r(276293),
    et = r(950305),
    er = r(935063),
    el = r(967198),
    en = r(287809),
    es = r(562153),
    ea = r(315059),
    ei = r(121806),
    eu = r(652215),
    eo = r(375708);
function ec(e, t) {
    return { type: e, data: t };
}
function eh(e) {
    switch (e) {
        case eu.x2k.HISTORY:
            return eo.intl.string(eo.t.tSZd5c);
        case eu.LWr.FILTER_FROM:
            return eo.intl.string(eo.t.catERA);
        case eu.LWr.FILTER_MENTIONS:
            return eo.intl.string(eo.t["l3K4B/"]);
        case eu.LWr.FILTER_IN:
            return eo.intl.string(eo.t.vHyCgl);
        case eu.LWr.FILTER_HAS:
            return eo.intl.string(eo.t.IC7gHM);
        default:
            return "";
    }
}
function ed(e) {
    let { modeType: t, result: r, group: l } = e,
        { text: n, channel: s, group: a } = r,
        i = n;
    if ((null != s && (i = (0, C.TZ)(i)), t === eu.o$q.FILTER_ALL)) {
        let e = O.Ay[a ?? l];
        e?.key != null && e?.key !== "" && (i = `${e.key} ${i}`);
    }
    return i;
}
var ef = r(768570),
    ep = r(611027);
function eE(e) {
    let { icon: t, label: r, sublabel: l, onSelect: s, navId: a, index: i, selected: u } = e;
    return (0, n.jsx)(X.D, {
        className: ep.DB,
        onClick: () => {
            s({ searchAutocompleteSelectAction: ef.oi.CLICK, selectedIndex: i });
        },
        ...(function (e) {
            let { navId: t, index: r, selected: l } = e;
            return { id: `${t}-${r}`, role: "option", tabIndex: -1, "aria-selected": l };
        })({ navId: a, index: i, selected: u }),
        children: (0, n.jsxs)("div", {
            className: ep.AS,
            children: [t, null == l ? r : (0, n.jsxs)("div", { children: [r, l] })],
        }),
    });
}
function eg(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-strong", className: r, children: t });
}
function eS(e) {
    let { searchTokenType: t, answer: r } = e,
        l = O.Ay[t]?.key ?? "",
        s = r ?? (0, C.sh)(t);
    return (0, n.jsxs)("div", {
        className: ep.Xq,
        children: [
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-subtle", children: l }),
            (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
        ],
    });
}
function em(e) {
    let t = (0, C.E3)(e);
    return (0, n.jsxs)("div", {
        className: ep.aT,
        children: [
            (0, n.jsx)(ea.A, { channel: e, avatarSize: Q._3.SIZE_16, iconClassName: ep.er, iconSize: "xs" }),
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", className: ep.HA, children: t }),
        ],
    });
}
function eR(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(K.m, {
        asContainer: !0,
        text: eo.intl.string(eo.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(X.D, {
            onClick: () => W.A.clearSearchHistory(t),
            className: ep.Wf,
            title: eo.intl.string(eo.t.dwAvX1),
            "aria-label": eo.intl.string(eo.t.dwAvX1),
            children: (0, n.jsx)(V.u, { size: "sm", color: "currentColor", className: ep.f }),
        }),
    });
}
function eA(e) {
    let { title: t, showDivider: r, children: l } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r && (0, n.jsx)("div", { className: ep.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: ep.jw, children: l }, t),
        ],
    });
}
function eI(e) {
    let { headerId: t, titleText: r, trailingIcon: l } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: ep.x_,
        children: [(0, n.jsx)(G.E, { variant: "text-xs/semibold", color: "text-subtle", children: r }), l],
    });
}
function ex(e) {
    let { navId: t, item: r, startingIndex: l, selectedIndex: s } = e,
        a = l,
        { rows: i, title: u, trailingIcon: o } = r.data;
    return (0, n.jsxs)(eA, {
        title: u,
        showDivider: l > 0,
        children: [
            (0, n.jsx)(eI, { headerId: u, titleText: u, trailingIcon: o }),
            i.map((e) => {
                let { icon: l, label: i, sublabel: o, onSelect: c } = e.data,
                    h = s === a,
                    d = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        eE,
                        { icon: l, label: i, sublabel: o, onSelect: c, navId: t, index: d, selected: h },
                        `${r.type}-${u}-${d}`,
                    )
                );
            }),
        ],
    });
}
function eL(e) {
    let { size: t, user: r, className: l } = e,
        s = (0, h.bG)([el.A], () => el.A.getGuildId()),
        a = (0, Q.FT)(t);
    return (0, n.jsx)(J.eu, { size: t, src: r.getAvatarURL(s, a), "aria-label": r.username, className: l });
}
function e_(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: l } = (0, h.cf)([el.A, T.A], () => {
            let e = el.A.getGuildId(),
                t = T.A.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        s = es.Ay.useName(r, l, t);
    return (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-default", children: s });
}
function eT(e) {
    let { value: t, avatarSize: r, iconSize: l } = e,
        s = "",
        a = (0, C._o)(t)
            .map((e, t, r) => (eu.l90.test(e.type) || (0, C.Zh)(e, r[t + 1]) ? e : new S.ou(e.getFullMatch(), S.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                s += a;
                let i = eu.l90.test(e.type),
                    u = eu.T2E.test(e.type),
                    o = `${e.type}-${a}-${t}`;
                if (u)
                    switch (e.type) {
                        case eu.LWr.ANSWER_USERNAME_FROM:
                        case eu.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, n.jsx)(eb, { token: e, avatarSize: r }, o);
                        case eu.LWr.ANSWER_IN:
                            return (0, n.jsx)(eN, { token: e, avatarSize: r, iconSize: l }, o);
                        default:
                            return (0, n.jsx)(ey, { text: a, className: ep.Mj }, o);
                    }
                return (0, n.jsx)(ey, { text: a, className: i ? ep._y : ep.Lc }, o);
            });
    return { label: (0, n.jsx)("div", { className: ep.fH, children: a }), ariaLabel: s };
}
function ey(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", className: r, children: t });
}
function eb(e) {
    let { token: t, avatarSize: r } = e,
        l = t.getFullMatch(),
        s = t.getData("userId"),
        a = (0, h.bG)([en.default], () => en.default.getUser(s));
    return null == a
        ? (0, n.jsx)(ey, { text: l, className: ep.Mj })
        : (0, n.jsxs)("div", {
              className: ep.Mj,
              children: [
                  (0, n.jsx)(eL, { size: r, user: a }),
                  (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function eN(e) {
    let { token: t, avatarSize: r, iconSize: l } = e,
        s = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        u = (0, h.bG)([L.A], () => L.A.getChannel(a[0]));
    if (null == u) return (0, n.jsx)(ey, { text: s, className: ep.Mj });
    let o = (0, C.E3)(u);
    return (0, n.jsxs)("div", {
        className: i()(ep.Mj, ep.JG),
        children: [
            (0, n.jsx)(ea.A, { channel: u, avatarSize: r, iconClassName: ep.Wh, iconSize: l }),
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", children: o }),
        ],
    });
}
function eF(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, ei.KD)(t);
    return null != s ? (0, n.jsx)(s, { size: l, color: "currentColor", className: r }) : null;
}
function ev(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, ei.Ht)(t);
    return null != s ? (0, n.jsx)(s, { size: l, color: "currentColor", className: r }) : null;
}
var eC = (((l = {}).ROW = "row"), (l.GROUP = "group"), l);
r(667532);
var ej = r(506774),
    eO = r(228366);
let eW = ef.nC,
    ek = !1,
    eM = {};
class eP extends h.Ay.Store {
    static displayName = ef.yQ;
    initialize() {
        var e;
        let t = ej.w.get(eW);
        t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t];
            }),
            (eM = e)),
            (ek = !!ej.w.get("tokenized"));
    }
    isTokenized() {
        return ek;
    }
    getHistory(e) {
        return eM[e];
    }
}
let eD = new eP(eO.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        delete eM[t], ej.w.set(ef.nC, { history: eM });
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: r } = e;
        null != eM[t] && ((eM[t] = eM[t].filter((e) => e !== r)), ej.w.set(ef.nC, { history: eM }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: r } = e;
        if ("string" != typeof r || "" === (r = r.trim())) return;
        let l = (eM[t] = eM[t] ?? []),
            n = l.indexOf(r);
        -1 !== n
            ? (l.splice(n, 1), l.unshift(r))
            : null != l[0] && "" !== l[0] && r.startsWith(l[0])
              ? (l[0] = r)
              : n < 0 && l.unshift(r),
            l.length > 5 && l.splice(5, l.length),
            ej.w.set(ef.nC, { history: eM });
    },
    LOGOUT: function () {
        ej.w.remove(ef.nC), (eM = {});
    },
});
var eH = r(588975),
    e$ = r(674142);
let ew = [];
var ez = r(21799);
let eU = $()("2015-05-15").local();
function eq(e) {
    let { items: t, navId: r, selectedIndex: l } = e,
        s = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case eC.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        u = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            eE,
                            { icon: t, label: a, onSelect: i, navId: r, index: u, selected: l === u },
                            `${e.type}-${u}`,
                        )
                    );
                case eC.GROUP:
                    let { rows: o, title: c } = e.data,
                        h = s;
                    return (
                        (s += o.length),
                        (0, n.jsx)(
                            ex,
                            { navId: r, item: e, startingIndex: h, selectedIndex: l },
                            `${e.type}--${c}-${h}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let eG = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, resultsState: a, onSelectedIndexChanged: i, selectedChannel: u } = e,
            [o, c] = s.useState(-1),
            f = s.useCallback(
                (e) => {
                    c(e), i(e);
                    let t = document.getElementById(`${l}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [l, i],
            ),
            p = s.useCallback(
                (e) => {
                    let { query: t, performSearch: r, replace: l } = e;
                    k.A.setSearchQuery({
                        query: t,
                        performSearch: r,
                        replace: l,
                        resultsState: a,
                        searchQuerySource: ef.Q_.SEARCH_POPOUT,
                    }),
                        f(-1);
                },
                [a, f],
            ),
            { items: E, itemsData: g } = (function (e) {
                let { resultsState: t, searchContext: r, selectedChannel: l, setSearchQuery: a } = e,
                    { autocompletes: i, mode: u } = t,
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
                                        { group: u, results: o } = e;
                                    if (e.results.length > 0) {
                                        for (let e of o) {
                                            let n = l({ result: e, modeType: r.type, group: u });
                                            t.push(n);
                                        }
                                        s += o.length;
                                        let e = n({ group: u, rows: t });
                                        a.push(e), i.push(...t);
                                    }
                                }
                                return { autocompleteCount: s, autocompleteGroups: a, allAutocompleteRows: i };
                            },
                            [t, r.type],
                        );
                    })({ autocompletes: i, mode: u }),
                    c = (function (e) {
                        let { setSearchQuery: t, searchContext: r, mode: l } = e,
                            a = (0, e$.o)(r);
                        return s.useMemo(() => {
                            let e = [
                                {
                                    type: eu.LWr.FILTER_FROM,
                                    isEligible: a.has(eu.LWr.FILTER_FROM),
                                    icon: et.n,
                                    label: eo.intl.string(eo.t.ktr6z5),
                                },
                                {
                                    type: eu.LWr.FILTER_IN,
                                    isEligible: a.has(eu.LWr.FILTER_IN),
                                    icon: ee.N,
                                    label: eo.intl.string(eo.t.VMjDvS),
                                },
                                {
                                    type: eu.LWr.FILTER_HAS,
                                    isEligible: a.has(eu.LWr.FILTER_HAS),
                                    icon: eH.P,
                                    label: eo.intl.string(eo.t.IhIpc7),
                                },
                                {
                                    type: eu.LWr.FILTER_MENTIONS,
                                    isEligible: a.has(eu.LWr.FILTER_MENTIONS),
                                    icon: er.X,
                                    label: eo.intl.string(eo.t.fpKv9Y),
                                },
                            ];
                            return e
                                .filter((e) => e.isEligible)
                                .map((s) => {
                                    let { icon: a, label: i, type: u } = s;
                                    return ec(eC.ROW, {
                                        icon: (0, n.jsx)(a, { size: "sm", color: "currentColor", className: ep.Fx }),
                                        label: (0, n.jsx)(eg, { label: i }),
                                        sublabel: (0, n.jsx)(eS, { searchTokenType: u }),
                                        onSelect: (n) => {
                                            let { selectedIndex: s, searchAutocompleteSelectAction: a } = n,
                                                i = O.Ay[u]?.key ?? "",
                                                o = (0, C.bS)(r);
                                            (0, D.kc)({
                                                searchContext: r,
                                                searchQuery: P.A.getSearchResultsQuery(o),
                                                searchQueryString: k.A.getSearchInputText(r),
                                                searchTokenType: u,
                                                searchAutocompleteGroup: u,
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
                    })({ setSearchQuery: a, searchContext: r, mode: u }),
                    d = (0, h.yK)([Y.A, T.A, eD], () => {
                        if (Y.A.hidePersonalInformation) return ew;
                        let e = (0, C.Jl)(r, T.A);
                        if (null == e) return ew;
                        let t = eD.getHistory(e);
                        if (null == t) return ew;
                        let l = new Set(),
                            n = [];
                        return (
                            t.forEach((e) => {
                                let t = r.type === eu.I4_.CHANNEL ? (0, C.EH)(e) : e;
                                "" === t || l.has(t) || (l.add(t), n.push(t));
                            }),
                            n
                        );
                    }),
                    f = (e) => {
                        let {
                                autocompleteCount: t,
                                selectedIndex: l,
                                searchAutocompleteSelectAction: n,
                                selectedAutocomplete: s,
                                selectedAutocompleteGroup: a,
                            } = e,
                            i = u.type,
                            o = u.filter,
                            { token: c, group: h } = s,
                            d = null != h && (0, O.If)(h) ? h : null,
                            f = c ?? o ?? d,
                            p = s.channel,
                            E = f === eu.LWr.FILTER_IN && null != p && p.id === T.A.getChannelId(),
                            g = (0, C.bS)(r);
                        (0, D.kc)({
                            searchContext: r,
                            searchQuery: P.A.getSearchResultsQuery(g),
                            searchQueryString: k.A.getSearchInputText(r),
                            searchTokenType: f,
                            searchAutocompleteGroup: a,
                            searchAutocompleteMode: u,
                            searchAutocompleteResultIndex: l,
                            searchAutocompleteTotalResults: t,
                            isSearchFilterPrefix: i === eu.o$q.EMPTY,
                            isSearchFilterAnswer: i === eu.o$q.FILTER,
                            isSearchFilterComplete: i === eu.o$q.FILTER_ALL,
                            isInFilterForSelectedChannel: E,
                            searchAutocompleteSelectAction: n,
                        });
                    },
                    p = s.useCallback(
                        (e) => {
                            let { hasOtherSearchFiltersVisible: t } = e,
                                l = t ? eo.intl.string(eo.t.diOL4i) : eo.intl.string(eo.t["M1tf+7"]);
                            return ec(eC.ROW, {
                                icon: (0, n.jsx)(q.R, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: ep.Fx,
                                }),
                                label: (0, n.jsx)(eg, { label: l }),
                                sublabel: t
                                    ? (0, n.jsx)(G.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          children: eo.intl.string(eo.t["1axf1T"]),
                                      })
                                    : void 0,
                                onSelect: () => k.A.openSearchFiltersModal(r),
                            });
                        },
                        [r],
                    ),
                    E = (0,
                    {
                        [eu.o$q.EMPTY]: () => {
                            let e = [];
                            if (null != l && (0, Z.HM)(r) && r.type === eu.I4_.DMS) {
                                let t = em(l),
                                    s = ec(eC.ROW, {
                                        icon: (0, n.jsx)(B.$, { size: "sm", color: "currentColor", className: ep.Fx }),
                                        label: (0, n.jsx)(eg, {
                                            label: eo.intl.format(eo.t["VGEH/0"], { channelName: t }),
                                            className: ep.YL,
                                        }),
                                        onSelect: (e) => {
                                            let { searchAutocompleteSelectAction: t } = e;
                                            return ((e) => {
                                                let { selectedChannel: t, searchAutocompleteSelectAction: l } = e;
                                                (0, D.rE)({ searchContext: r, searchAutocompleteSelectAction: l });
                                                let n = eu.LWr.FILTER_IN,
                                                    s = O.Ay[n],
                                                    i = (0, C.Rt)(t);
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
                            let t = [...c, p({ hasOtherSearchFiltersVisible: !0 })];
                            if ((e.push(ec(eC.GROUP, { rows: t, title: eo.intl.string(eo.t.UdhTtk) })), d.length > 0)) {
                                let t = d.map((e, t) => {
                                        let { label: l, ariaLabel: s } = eT({
                                            value: e,
                                            avatarSize: Q._3.SIZE_16,
                                            iconSize: "xs",
                                        });
                                        return ec(eC.ROW, {
                                            icon: (0, n.jsx)(B.$, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: ep.Fx,
                                            }),
                                            label: l,
                                            ariaLabel: eo.intl.formatToPlainString(eo.t.WoiGrV, { suggestion: s }),
                                            resultText: e,
                                            onSelect: () => {
                                                (0, D.oR)({
                                                    searchContext: r,
                                                    searchHistoryIndex: t,
                                                    searchHistoryTotalResults: d.length,
                                                }),
                                                    a({ query: e, performSearch: !0, replace: !1 });
                                            },
                                        });
                                    }),
                                    l = ec(eC.GROUP, {
                                        rows: t,
                                        trailingIcon: (0, n.jsx)(eR, { searchContext: r }),
                                        title: eh(eu.x2k.HISTORY),
                                    });
                                e.push(l);
                            }
                            return e;
                        },
                        [eu.o$q.FILTER_ALL]: () => {
                            let e = [];
                            if ("" !== t.query.trim()) {
                                let { label: r } = eT({ value: t.query, avatarSize: Q._3.SIZE_16, iconSize: "xs" }),
                                    l = ec(eC.ROW, {
                                        icon: (0, n.jsx)(B.$, { size: "sm", color: "currentColor", className: ep.Fx }),
                                        label: (0, n.jsx)(eg, {
                                            label: eo.intl.format(eo.t.rCnaoo, { value: r }),
                                            className: ep.YL,
                                        }),
                                        ariaLabel: eo.intl.formatToPlainString(eo.t.rCnaoo, { value: t.query }),
                                        onSelect: () =>
                                            ((e) => {
                                                let { searchEverywhere: t } = e;
                                                y._.dispatch(eu.jej.PERFORM_SEARCH, {
                                                    searchEverywhere: t,
                                                    searchQuerySource: ef.Q_.SEARCH_POPOUT,
                                                });
                                            })({ searchEverywhere: !1 }),
                                    });
                                e.push(l);
                            }
                            let { autocompleteCount: r, autocompleteGroups: l } = o({
                                getAutocompleteRowItem: (e) => {
                                    let { result: t, modeType: l, group: s } = e,
                                        i = ed({ modeType: l, result: t, group: s }),
                                        u = (function (e) {
                                            let { result: t, group: r } = e;
                                            switch (r) {
                                                case eu.x2k.HISTORY:
                                                    return (0, n.jsx)(B.$, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ep.Fx,
                                                    });
                                                case eu.LWr.FILTER_IN:
                                                    return (0, n.jsx)(ee.N, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ep.Fx,
                                                    });
                                                case eu.LWr.FILTER_FROM:
                                                    return (0, n.jsx)(et.n, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ep.Fx,
                                                    });
                                                case eu.LWr.FILTER_MENTIONS:
                                                    return (0, n.jsx)(er.X, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ep.Fx,
                                                    });
                                                case eu.LWr.FILTER_HAS:
                                                    return (0, n.jsx)(eF, {
                                                        text: t.text,
                                                        size: "sm",
                                                        className: ep.Fx,
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })({ result: t, group: s }),
                                        { label: o, ariaLabel: c } = (function (e) {
                                            let { channel: t, user: r, text: l } = e;
                                            return null != t
                                                ? {
                                                      label: (0, n.jsxs)("div", {
                                                          className: ep.YL,
                                                          children: [
                                                              (0, n.jsx)(G.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-strong",
                                                                  children: O.Ay[eu.LWr.FILTER_IN].key ?? "",
                                                              }),
                                                              em(t),
                                                          ],
                                                      }),
                                                      ariaLabel: (0, C.E3)(t),
                                                  }
                                                : null != r
                                                  ? {
                                                        label: (0, n.jsxs)("div", {
                                                            className: ep.YL,
                                                            children: [
                                                                (0, n.jsx)(eL, { size: Q._3.SIZE_16, user: r }),
                                                                (0, n.jsx)(e_, { user: r }),
                                                            ],
                                                        }),
                                                        ariaLabel: r.username,
                                                    }
                                                  : { label: (0, n.jsx)(eg, { label: l }), ariaLabel: l };
                                        })(t),
                                        h =
                                            s === eu.LWr.FILTER_FROM || s === eu.LWr.FILTER_MENTIONS
                                                ? (0, n.jsx)(eS, { searchTokenType: s, answer: t.user?.username })
                                                : void 0;
                                    return ec(eC.ROW, {
                                        icon: u,
                                        label: o,
                                        sublabel: h,
                                        ariaLabel: c,
                                        resultText: i,
                                        onSelect: (e) => {
                                            let { selectedIndex: l, searchAutocompleteSelectAction: n } = e;
                                            f({
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
                                        l = eh(t);
                                    return ec(eC.GROUP, { rows: r, title: l });
                                },
                            });
                            if (0 === r) {
                                let t = [...c, p({ hasOtherSearchFiltersVisible: !0 })];
                                e.push(ec(eC.GROUP, { rows: t, title: eo.intl.string(eo.t.UdhTtk) }));
                            } else {
                                let t = p({ hasOtherSearchFiltersVisible: !1 });
                                e.push(t);
                            }
                            return r > 0 && e.push(...l), e;
                        },
                        [eu.o$q.FILTER]: () => {
                            let { autocompleteCount: e, autocompleteGroups: t } = o({
                                getAutocompleteRowItem: (t) => {
                                    let { result: r, modeType: l, group: s } = t,
                                        i = ed({ modeType: l, result: r, group: s }),
                                        u = (function (e) {
                                            let { result: t, group: r } = e,
                                                { channel: l, user: s } = t;
                                            return null != l
                                                ? (0, n.jsx)(ea.A, {
                                                      channel: l,
                                                      avatarSize: Q._3.SIZE_20,
                                                      iconClassName: ep.Fx,
                                                      iconSize: "refresh_sm",
                                                  })
                                                : null != s
                                                  ? (0, n.jsx)(eL, { size: Q._3.SIZE_20, user: s, className: ep.Fx })
                                                  : r === eu.LWr.FILTER_HAS
                                                    ? (0, n.jsx)(eF, { size: "sm", text: t.text, className: ep.Fx })
                                                    : r === eu.LWr.FILTER_AUTHOR_TYPE
                                                      ? (0, n.jsx)(ev, { size: "sm", text: t.text, className: ep.Fx })
                                                      : null;
                                        })({ result: r, group: s }),
                                        { label: o, ariaLabel: c } = (function (e) {
                                            let { channel: t, user: r, text: l } = e;
                                            if (null != t) {
                                                let e = (0, C.E3)(t);
                                                return {
                                                    label: (0, n.jsx)(G.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-strong",
                                                        children: e,
                                                    }),
                                                    ariaLabel: (0, C.E3)(t),
                                                };
                                            }
                                            return null != r
                                                ? {
                                                      label: (0, n.jsxs)("div", {
                                                          className: ep.YL,
                                                          children: [
                                                              (0, n.jsx)(e_, { user: r }),
                                                              (0, n.jsx)(G.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-subtle",
                                                                  children: r.username,
                                                              }),
                                                          ],
                                                      }),
                                                      ariaLabel: r.username,
                                                  }
                                                : { label: (0, n.jsx)(eg, { label: l }), ariaLabel: l };
                                        })(r);
                                    return ec(eC.ROW, {
                                        icon: u,
                                        label: o,
                                        ariaLabel: c,
                                        resultText: i,
                                        onSelect: (t) => {
                                            let { selectedIndex: l, searchAutocompleteSelectAction: n } = t;
                                            f({
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
                                        l = eh(t);
                                    return ec(eC.GROUP, { rows: r, title: l });
                                },
                            });
                            return [...t];
                        },
                    }[u.type])(),
                    g = s.useMemo(() => {
                        let e = [];
                        return (
                            E.forEach((t) => {
                                switch (t.type) {
                                    case eC.ROW:
                                        e.push(t);
                                        break;
                                    case eC.GROUP:
                                        t.data.rows.forEach((t) => e.push(t));
                                }
                            }),
                            e
                        );
                    }, [E]);
                return { items: E, itemsData: g };
            })({ resultsState: a, searchContext: r, selectedChannel: u, setSearchQuery: p }),
            S = (e) => {
                let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
                    l = t;
                return (
                    null == l && (l = o),
                    !(l < 0) &&
                        !(l > g.length - 1) &&
                        (g[l].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: l }), !0)
                );
            },
            m = (e) => {
                let t;
                (t = o + e) > g.length - 1 ? (t = 0) : t < 0 && (t = g.length - 1), f(t);
            },
            R = s.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        s.useEffect(() => {
            let { itemsData: e, selectedIndex: t, modeType: r, query: l } = R.current,
                n = a.mode.type,
                s = a.query;
            if (n !== r) n === eu.o$q.FILTER ? f(0) : f(-1);
            else if (n === eu.o$q.FILTER && a.query !== l && g.length > 0) f(0);
            else if (n === eu.o$q.FILTER && 0 === e.length && g.length > 0) f(0);
            else if (t >= 0 && (t === o || e.length !== g.length)) {
                let r = e[t],
                    l = r?.data.resultText;
                if (null != l) {
                    let e = g.findIndex((e) => e.data.resultText === l);
                    -1 !== e ? f(e) : t >= g.length && f(Math.max(0, g.length - 1));
                } else t >= g.length && f(Math.max(0, g.length - 1));
            }
            R.current = { itemsData: g, selectedIndex: o, modeType: n, query: s };
        }, [g, o, a.mode.type, a.query, f]);
        let A = s.useRef(null),
            I = a.query;
        return (
            s.useEffect(() => {
                if ("" === I) {
                    A.current = null;
                    return;
                }
                let e = g.length;
                A.current !== e &&
                    ((A.current = e), d.O.announce(eo.intl.formatToPlainString(eo.t.ZGVL3g, { count: e }), "polite"));
            }, [g.length, I]),
            s.useImperativeHandle(t, () => ({
                selectedIndex: o,
                focusNextOption: () => {
                    m(1);
                },
                focusPreviousOption: () => {
                    m(-1);
                },
                selectOption: S,
            })),
            (0, n.jsx)(w.d_, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}-${o}`,
                className: E.length > 0 ? ez.kL : void 0,
                children: (0, n.jsx)(eq, { items: E, navId: l, selectedIndex: o }),
            })
        );
    }),
    eB = s.forwardRef(function (e, t) {
        let { navId: r, resultsState: l, searchContext: a } = e;
        return (
            s.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, n.jsx)(w.d_, {
                onMouseDown: (e) => {
                    e.stopPropagation(), e.preventDefault();
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}--1`,
                className: i()(ez.kL, ez.Wl),
                children: (0, n.jsx)(z.CalendarPicker, {
                    onSelect: (e) => {
                        let t = (0, C.bS)(a);
                        (0, D.kc)({
                            searchContext: a,
                            searchQuery: P.A.getSearchResultsQuery(t),
                            searchQueryString: k.A.getSearchInputText(a),
                            searchTokenType: l.mode.filter,
                            searchAutocompleteGroup: eu.x2k.DATES,
                            searchAutocompleteMode: l.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: ef.oi.CLICK,
                        }),
                            k.A.setSearchQuery({
                                query: e.format(eu.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: l,
                                searchQuerySource: ef.Q_.SEARCH_POPOUT,
                            });
                    },
                    maxDate: $()().local(),
                    minDate: eU,
                    calendarClassName: ez.BJ,
                }),
            })
        );
    }),
    eQ = s.forwardRef(function (e, t) {
        let { searchContext: r, navId: l, onSelectedIndexChanged: s } = e,
            [a, i] = (0, h.yK)([U.A, T.A, L.A], () => {
                let e = U.A.getState(r),
                    t = T.A.getChannelId();
                return [e, L.A.getChannel(t)];
            });
        return (0, C.av)(a.mode.filter)
            ? (0, n.jsx)(eB, { navId: l, resultsState: a, searchContext: r })
            : (0, n.jsx)(eG, {
                  ref: t,
                  searchContext: r,
                  navId: l,
                  onSelectedIndexChanged: s,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
var eY = r(921242),
    eZ = r(85486);
let eK = 512,
    eX = (0, A.Ld)(),
    eV = c()(k.A.fetchMessages, 500);
class eJ extends s.PureComponent {
    state = { focused: !1, selectedIndex: void 0 };
    _editorRef;
    _containerRef = s.createRef();
    _searchBarRef = s.createRef();
    _searchPopoutRef = s.createRef();
    constructor(e) {
        super(e), (0, C.Pe)();
    }
    componentDidMount() {
        y._.subscribe(eu.jej.PERFORM_SEARCH, this.search),
            y._.subscribe(eu.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y._.subscribe(eu.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    handleCutEvent = (e) => {
        if ((e.preventDefault(), null == e.clipboardData)) return;
        let { editorState: t } = this.props,
            r = t.getSelection();
        if (r.isCollapsed()) return;
        let l = b.pe(t),
            n = r.getStartOffset(),
            s = r.getEndOffset(),
            a = l.substring(n, s);
        e.clipboardData.setData("text/plain", a);
        let i = b.vE("delete", t);
        (i = this.tokenize(i)), this.setEditorState(i);
    };
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = b.pe(t),
                l = (0, C._o)(b.pe(t)),
                n = N.zZ(l, t);
            F.A.updateAutocompleteQuery({ searchContext: r, tokens: l, cursorScope: n, queryString: e }),
                null != this._editorRef && b.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        y._.unsubscribe(eu.jej.PERFORM_SEARCH, this.search),
            y._.unsubscribe(eu.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            y._.unsubscribe(eu.jej.FOCUS_SEARCH, this.handleFocusSearch),
            this._editorRef?.editor?.removeEventListener?.("cut", this.handleCutEvent);
    }
    handleSetSearchQuery = (e) => {
        let { query: t, anchor: r, focus: l, performSearch: n, replace: s, searchQuerySource: a } = e,
            { editorState: i } = this.props,
            u = b.pe(i);
        " " !== t.charAt(t.length - 1) && (t += " "),
            null != r && 0 !== r && " " !== u.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
            s ? ((i = b.t7(t, i)), (r = 0)) : (i = b.le(t, i, r, l)),
            (i = b.a4(i, eK)),
            (i = this.tokenize(i));
        let o = Number(r) + t.length;
        (i = b.UO(o, i)), this.setEditorState(i), n && this.search({ queryString: b.pe(i), searchQuerySource: a });
    };
    handleSelectedIndexChanged = (e) => {
        this._editorRef?.editor?.setAttribute("aria-activedescendant", null != e ? `${eX}-${e}` : void 0),
            this.setState({ selectedIndex: e });
    };
    handlePopoutBlur = (e) => {
        let t = e.relatedTarget,
            r = document.getElementById(eX),
            l = this._searchBarRef.current;
        (null != t && ((null != r && r.contains(t)) || (null != l && l.contains(t)))) || this.handleBlur();
    };
    renderPopout = () =>
        (0, n.jsx)("div", {
            onBlur: this.handlePopoutBlur,
            children: (0, n.jsx)(eQ, {
                ref: this._searchPopoutRef,
                searchContext: this.props.searchContext,
                navId: eX,
                onSelectedIndexChanged: this.handleSelectedIndexChanged,
            }),
        });
    tokenize(e) {
        let t = (0, C._o)(b.pe(e)).filter((e) => e.type !== S.Ay.NON_TOKEN_TYPE);
        return b.uD(t, e, O.Ay);
    }
    search = (e) => {
        let { isSearching: t } = this.props,
            { queryString: r, searchEverywhere: l, searchQuerySource: n } = e ?? {};
        if (null == r || "" === r) {
            let { editorState: e } = this.props;
            r = b.pe(e);
        }
        if (!t) {
            let e = (0, C._o)(r),
                t = (0, C.Zf)(e);
            for (let t = 0; t < e.length; t++)
                (0, C.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
            if (0 === e.length || 0 === Object.keys(t).length) return !1;
            this.props.onSearch({ queryString: r, query: t, searchEverywhere: l ?? !1, searchQuerySource: n }),
                d.O.announce(eo.intl.string(eo.t.pKCxWP)),
                this.handleBlur();
        }
        return !0;
    };
    clearSearch() {
        let { searchContext: e } = this.props;
        k.A.cleanUpSearchState(e);
    }
    handleClearSearch = (e) => {
        let { editorState: t, searchContext: r } = this.props,
            { focused: l } = this.state;
        (e.preventDefault(), e.stopPropagation(), "" === b.pe(t))
            ? this.focusEditor()
            : ((t = b.a4(t, 0)),
              this.setEditorState(t),
              (0, D.iK)({ searchContext: r }),
              l || Promise.resolve().then(() => this.blurEditor()));
    };
    handleFocusSearch = (e) => {
        let { prefillCurrentChannel: t } = e;
        if (!t) return void this.focusEditor();
        let r = T.A.getChannelId(),
            l = L.A.getChannel(r);
        if (null == l) return void this.focusEditor();
        let { searchContext: n } = this.props;
        if ((l.isPrivate() && n.type !== eu.I4_.DMS) || l.isObfuscated()) return void this.focusEditor();
        let s = (0, C.Rt)(l);
        null == s
            ? this.focusEditor()
            : ((0, D.Tf)({ searchContext: n }),
              Promise.resolve().then(() => {
                  let { _editorRef: e } = this;
                  e?.focus(),
                      this.handleSetSearchQuery({
                          query: O.Ay[eu.LWr.FILTER_IN].key + `${s} `,
                          replace: !0,
                          searchQuerySource: ef.Q_.SEARCH_TEXT_INPUT,
                      });
              }));
    };
    focusEditor = () => {
        let { _editorRef: e } = this;
        null != e && Promise.resolve().then(() => e.focus());
    };
    blurEditor = () => {
        let { _editorRef: e } = this;
        null != e && Promise.resolve().then(() => e.blur());
    };
    setEditorRef = (e) => {
        this._editorRef?.editor?.removeEventListener("cut", this.handleCutEvent),
            (this._editorRef = e),
            this._editorRef?.editor?.setAttribute("aria-haspopup", "listbox"),
            this._editorRef?.editor?.addEventListener("cut", this.handleCutEvent);
    };
    onFocus = () => {
        let { searchContext: e } = this.props;
        this.setState({ focused: !0 }), j.A.setFocused(e, !0), d.O.announce(eo.intl.string(eo.t["5h0QOP"]));
    };
    handleBlur = () => {
        let { searchContext: e } = this.props;
        j.A.setFocused(e, !1),
            this.setState({ focused: !1 }, () => {
                b.Im(this.props.editorState) && this.clearSearch();
            });
    };
    onBlur = (e) => {
        let t = e.relatedTarget,
            r = document.getElementById(eX);
        (null != t && null != r && r.contains(t)) || this.handleBlur();
    };
    handleOption = () => {
        let { current: e } = this._searchPopoutRef;
        return null != e && e.selectOption({ searchAutocompleteSelectAction: ef.oi.KEY_PRESS });
    };
    handleReturn = (e) => (
        e.preventDefault(),
        this.handleOption() || this.search({ searchQuerySource: ef.Q_.SEARCH_TEXT_INPUT }),
        "handled"
    );
    handleBeforeInput = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            b.pe(t).length >= eK ||
                ((t = b.le(e, t)),
                (t = b.a4(t, eK)),
                (t = this.tokenize(t)),
                this.setEditorState(t),
                r || this.setState({ focused: !0 })),
            "handled"
        );
    };
    handleKeyCommand = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        switch (e) {
            case "backspace":
            case "backspace-word":
            case "backspace-to-start-of-line":
            case "delete":
            case "delete-word":
                return (
                    (t = b.vE(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    r || this.setState({ focused: !0 }),
                    "handled"
                );
            case "transpose-characters":
            case "move-selection-to-start-of-block":
            case "move-selection-to-end-of-block":
                return (t = b.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
            case "split-block":
            case "underline":
            case "bold":
            case "italic":
                return "handled";
        }
        return "not-handled";
    };
    handlePastedText = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            (e = null != e ? e.replace(/\n/g, "") : ""),
            (t = b.le(e, t)),
            (t = b.a4(t, eK)),
            (t = this.tokenize(t)),
            r || this.setState({ focused: !0 }),
            this.setEditorState(t),
            "handled"
        );
    };
    handlePastedFiles() {
        return "handled";
    }
    handleDroppedFiles() {
        return "handled";
    }
    handleDrop() {
        return "handled";
    }
    setEditorState = (e) => {
        let { searchContext: t } = this.props;
        W.A.updateSearchEditorState(t, e);
    };
    getPopoutRef = () => {
        let { current: e } = this._searchPopoutRef;
        return e;
    };
    handleKeyBind = (e) => {
        let { key: t, metaKey: r, shiftKey: l, ctrlKey: n } = e,
            { editorState: s, searchContext: a, keyboardModeEnabled: i } = this.props;
        if ((r || n) && "a" === t.toLowerCase()) {
            e.stopPropagation(), e.preventDefault();
            let t = b.y8(s);
            return this.setEditorState(t), this.setState({ focused: !0 }), !0;
        }
        if ("Escape" === t) {
            if ((e.stopPropagation(), e.preventDefault(), b.Im(s))) this.blurEditor();
            else {
                let e = b.Xq(s);
                W.A.updateSearchEditorState(a, e), this.setState({ focused: !0 });
            }
            return !0;
        }
        if ("ArrowUp" === t) {
            e.stopPropagation(), e.preventDefault();
            let t = this.getPopoutRef();
            return null != t && t.focusPreviousOption(), !0;
        }
        if ("ArrowDown" === t) {
            e.stopPropagation(), e.preventDefault();
            let t = this.getPopoutRef();
            return null != t && t.focusNextOption(), !0;
        }
        if ("Tab" === t) {
            if (i) return;
            return e.stopPropagation(), (0, m.uS)(), !0;
        }
        if ("Home" === t || ("ArrowLeft" === t && r))
            return e.stopPropagation(), e.preventDefault(), (s = l ? b.mQ(s) : b.aB(s)), this.setEditorState(s), !0;
        if ("End" === t || ("ArrowRight" === t && r))
            return e.stopPropagation(), e.preventDefault(), (s = l ? b.Le(s) : b.Tj(s)), this.setEditorState(s), !0;
        if ("Delete" === t && r) {
            e.stopPropagation();
            let t = b.Xq(s);
            return this.setEditorState(t), !0;
        }
        if ("Backspace" === t && r) {
            e.stopPropagation(), e.preventDefault();
            let t = s.getSelection().getEndOffset();
            return (
                t > 0 && ((s = b.le("", s, 0, t)), (s = this.tokenize(s)), (s = b.aB(s))), this.setEditorState(s), !0
            );
        }
        let u = b.K6(e);
        return null != u && e.stopPropagation(), u;
    };
    renderInput(e) {
        let { editorState: t, placeholder: r } = this.props;
        return (0, n.jsx)(u.Editor, {
            autoCorrect: "off",
            ref: this.setEditorRef,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            handleReturn: this.handleReturn,
            handleBeforeInput: this.handleBeforeInput,
            handleKeyCommand: this.handleKeyCommand,
            handlePastedText: this.handlePastedText,
            handlePastedFiles: this.handlePastedFiles,
            handleDroppedFiles: this.handleDroppedFiles,
            handleDrop: this.handleDrop,
            keyBindingFn: this.handleKeyBind,
            placeholder: r ?? eo.intl.string(eo.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? eX : void 0,
            ariaLabel: eo.intl.string(eo.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: r, className: l } = this.props,
            { focused: s } = this.state,
            a = b.pe(t).length > 0;
        return (0, n.jsx)(f.Y, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: f.Y.Animation.NONE,
            shouldShow: s,
            autoInvert: !1,
            children: (t, u) => {
                let { isShown: o } = u;
                return (0, n.jsx)("div", {
                    className: l,
                    ref: this._containerRef,
                    children: (0, n.jsx)("div", {
                        className: i()(eZ.$P, { [eZ.ho]: a || s, [eZ.in]: s }),
                        children: (0, n.jsx)(p.vN, {
                            focusTarget: { current: this._editorRef?.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, n.jsxs)(
                                "div",
                                {
                                    className: eZ.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(o),
                                        (0, n.jsx)(E.B, {
                                            onClear: this.handleClearSearch,
                                            hasContent: a || r,
                                            className: eZ.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, C.bS)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
}
function e0(e) {
    let { searchContext: t, className: r } = e,
        l = (0, C.bS)(t),
        a = (0, h.bG)([R.A], () => R.A.keyboardModeEnabled),
        i = (0, h.bG)([P.A], () => P.A.getEditorState(l)),
        u = s.useMemo(() => (null != i ? i : b.e_(N.ys(O.Ay))), [i]);
    s.useEffect(() => {
        F.A.initializeAutocomplete(t);
    }, [t]);
    let o = (0, h.bG)([P.A], () => P.A.getIsSearchTokensInitialized()),
        c = s.useRef(o);
    s.useEffect(() => {
        o && c.current !== o && ((c.current = o), k.A.ensureSearchInputDecorators(t));
    }, [o, t]),
        s.useEffect(
            () => (
                I.A.setSelectedSearchContext(l),
                () => {
                    I.A.setSelectedSearchContext(null);
                }
            ),
            [l],
        );
    let { isSearching: d, hasResults: f } = (0, h.cf)([v.A], () => {
            let e = v.A.getTotalCount(l);
            return { hasResults: null != e && e > 0, isSearching: v.A.getIsFetching(l) };
        }),
        p = (0, h.bG)([x.Ay, T.A, L.A], () => {
            let e = T.A.getCurrentlySelectedChannelId(),
                t = L.A.getChannel(e);
            return x.Ay.getSection(e, t?.isDM()) === eu.YvQ.SEARCH;
        });
    s.useEffect(() => {
        j.A.setSidebarOpen(t, p);
    }, [t, p]);
    let E = (0, g.useHasModalOpen)(eY.b);
    s.useEffect(() => {
        j.A.setFiltersModalOpen(t, E);
    }, [t, E]);
    let S = s.useCallback(
            (e) => {
                let { queryString: r, query: l, searchEverywhere: n, searchQuerySource: s } = e;
                j.A.refreshQueryId(t),
                    (0, D.fd)({ searchContext: t, query: l, queryString: r, searchQuerySource: s }),
                    W.A.updateSearchMode(t, eu.BBH.NEWEST),
                    eV({ searchContext: t, searchQueryString: r, searchEverywhere: n, offset: 0 });
            },
            [t],
        ),
        m = (0, h.bG)([_.A, L.A], () => {
            let e = (0, C._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = _.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, C._b)(t);
            if (null != r) {
                let e = L.A.getChannel(r);
                return null == e ? null : (0, C.E3)(e);
            }
            return null;
        }),
        A = s.useMemo(
            () =>
                t.type === eu.I4_.DMS
                    ? eo.intl.string(eo.t.m7OrlR)
                    : null != m
                      ? eo.intl.formatToPlainString(eo.t.LDZtFO, { name: m })
                      : eo.intl.string(eo.t["5h0QOP"]),
            [t.type, m],
        );
    return (0, n.jsx)(eJ, {
        className: r,
        searchContext: t,
        isSearching: d,
        editorState: u,
        hasResults: f,
        keyboardModeEnabled: a,
        onSearch: S,
        placeholder: A,
    });
}
function e1(e) {
    let { className: t, guildId: r, channelId: l } = e,
        s = (0, M.J)({ guildId: r, channelId: l });
    return null == s ? null : (0, n.jsx)(e0, { className: t, searchContext: s });
}
