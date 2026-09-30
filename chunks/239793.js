(l.r(t), l.d(t, { default: () => tl, Search: () => tt }));
var r,
    n = l(477900),
    s = l(582128),
    a = l(64015),
    i = l.n(a),
    o = l(17928),
    c = l(192308),
    u = l(775602),
    h = l(138298),
    d = l(761640),
    f = l(734057),
    x = l(71393),
    m = l(309010),
    g = l(256796),
    p = l(517381),
    S = l(822382),
    A = l(902008),
    E = l(443390),
    y = l(616252),
    b = l(753806),
    I = l(775427),
    R = l(145331);
l(321073);
var C = l(503698),
    T = l.n(C),
    j = l(719442),
    L = l(235599),
    v = l(765178),
    _ = l(922016),
    N = l(559106),
    F = l(884496),
    O = l(955572),
    k = l(915089),
    M = l(625494),
    P = l(304578),
    w = l(65600),
    W = l(536637),
    H = l.n(W),
    D = l(364522),
    Q = l(939538),
    z = l(692986),
    $ = l(783977),
    G = l(834730),
    q = l(7689),
    U = l(778712),
    B = l(351906),
    Y = l(5990),
    K = l(939249),
    Z = l(866665),
    V = l(241326),
    X = l(97808),
    J = l(276293),
    ee = l(950305),
    et = l(935063),
    el = l(967198),
    er = l(287809),
    en = l(562153),
    es = l(315059),
    ea = l(121806),
    ei = l(988665),
    eo = l(652215),
    ec = l(375708);
function eu(e, t) {
    return { type: e, data: t };
}
function eh(e) {
    switch (e) {
        case eo.x2k.HISTORY:
            return ec.intl.string(ec.t.tSZd5c);
        case eo.LWr.FILTER_FROM:
            return ec.intl.string(ec.t.catERA);
        case eo.LWr.FILTER_MENTIONS:
            return ec.intl.string(ec.t["l3K4B/"]);
        case eo.LWr.FILTER_IN:
            return ec.intl.string(ec.t.vHyCgl);
        case eo.LWr.FILTER_HAS:
            return ec.intl.string(ec.t.IC7gHM);
        default:
            return "";
    }
}
function ed(e) {
    let { modeType: t, result: l, group: r } = e,
        { text: n, channel: s, group: a } = l,
        i = n;
    if ((null != s && (i = (0, S.TZ)(i)), t === eo.o$q.FILTER_ALL)) {
        let e = P.Ay[a ?? r];
        e?.key != null && e?.key !== "" && (i = `${e.key} ${i}`);
    }
    return i;
}
var ef = l(768570),
    ex = l(676068);
function em(e) {
    let { icon: t, label: l, sublabel: r, onSelect: s, navId: a, index: i, selected: o } = e;
    return (0, n.jsx)(K.D, {
        className: ex.DB,
        onClick: function () {
            s({ searchAutocompleteSelectAction: ef.oi.CLICK, selectedIndex: i });
        },
        ...(function (e) {
            let { navId: t, index: l, selected: r } = e;
            return { id: `${t}-${l}`, role: "option", tabIndex: -1, "aria-selected": r };
        })({ navId: a, index: i, selected: o }),
        children: (0, n.jsxs)("div", {
            className: ex.AS,
            children: [t, null == r ? l : (0, n.jsxs)("div", { children: [l, r] })],
        }),
    });
}
function eg(e) {
    let { label: t, className: l } = e;
    return (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-strong", className: l, children: t });
}
function ep(e) {
    let { searchTokenType: t, answer: l } = e,
        r = P.Ay[t]?.key ?? "",
        s = l ?? (0, S.sh)(t);
    return (0, n.jsxs)("div", {
        className: ex.Xq,
        children: [
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-subtle", children: r }),
            (0, n.jsx)(G.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
        ],
    });
}
function eS(e) {
    let t = (0, S.E3)(e);
    return (0, n.jsxs)("div", {
        className: ex.aT,
        children: [
            (0, n.jsx)(es.A, { channel: e, avatarSize: U._3.SIZE_16, iconClassName: ex.er, iconSize: "xs" }),
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", className: ex.HA, children: t }),
        ],
    });
}
function eA(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(Z.m, {
        asContainer: !0,
        text: ec.intl.string(ec.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(K.D, {
            onClick: () => y.A.clearSearchHistory(t),
            className: ex.Wf,
            title: ec.intl.string(ec.t.dwAvX1),
            "aria-label": ec.intl.string(ec.t.dwAvX1),
            children: (0, n.jsx)(V.TrashIcon, { size: "sm", color: "currentColor", className: ex.f }),
        }),
    });
}
function eE(e) {
    let { title: t, showDivider: l, children: r } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            l && (0, n.jsx)("div", { className: ex.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: ex.jw, children: r }, t),
        ],
    });
}
function ey(e) {
    let { headerId: t, titleText: l, trailingIcon: r } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: ex.x_,
        children: [(0, n.jsx)(G.E, { variant: "text-xs/semibold", color: "text-subtle", children: l }), r],
    });
}
function eb(e) {
    let { navId: t, item: l, startingIndex: r, selectedIndex: s } = e,
        a = r,
        { rows: i, title: o, trailingIcon: c } = l.data;
    return (0, n.jsxs)(eE, {
        title: o,
        showDivider: r > 0,
        children: [
            (0, n.jsx)(ey, { headerId: o, titleText: o, trailingIcon: c }),
            i.map((e) => {
                let { icon: r, label: i, sublabel: c, onSelect: u } = e.data,
                    h = s === a,
                    d = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        em,
                        { icon: r, label: i, sublabel: c, onSelect: u, navId: t, index: d, selected: h },
                        `${l.type}-${o}-${d}`,
                    )
                );
            }),
        ],
    });
}
function eI(e) {
    let { size: t, user: l, className: r } = e,
        s = (0, o.bG)([el.A], () => el.A.getGuildId()),
        a = (0, U.FT)(t);
    return (0, n.jsx)(X.eu, { size: t, src: l.getAvatarURL(s, a), "aria-label": l.username, className: r });
}
function eR(e) {
    let { user: t } = e,
        { selectedGuildId: l, selectedChannelId: r } = (0, o.cf)([el.A, m.Ay], () => {
            let e = el.A.getGuildId(),
                t = m.Ay.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        s = en.Ay.useName(l, r, t);
    return (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-default", children: s });
}
function eC(e) {
    let { value: t, avatarSize: l, iconSize: r } = e,
        s = "",
        a = (0, S._o)(t)
            .map((e, t, l) => (eo.l90.test(e.type) || (0, S.Zh)(e, l[t + 1]) ? e : new ei.ou(e.getFullMatch(), ei.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                s += a;
                let i = eo.l90.test(e.type),
                    o = eo.T2E.test(e.type),
                    c = `${e.type}-${a}-${t}`;
                if (o)
                    switch (e.type) {
                        case eo.LWr.ANSWER_USERNAME_FROM:
                        case eo.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, n.jsx)(ej, { token: e, avatarSize: l }, c);
                        case eo.LWr.ANSWER_IN:
                            return (0, n.jsx)(eL, { token: e, avatarSize: l, iconSize: r }, c);
                        default:
                            return (0, n.jsx)(eT, { text: a, className: ex.Mj }, c);
                    }
                return (0, n.jsx)(eT, { text: a, className: i ? ex._y : ex.Lc }, c);
            });
    return { label: (0, n.jsx)("div", { className: ex.fH, children: a }), ariaLabel: s };
}
function eT(e) {
    let { text: t, className: l } = e;
    return (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", className: l, children: t });
}
function ej(e) {
    let { token: t, avatarSize: l } = e,
        r = t.getFullMatch(),
        s = t.getData("userId"),
        a = (0, o.bG)([er.default], () => er.default.getUser(s));
    return null == a
        ? (0, n.jsx)(eT, { text: r, className: ex.Mj })
        : (0, n.jsxs)("div", {
              className: ex.Mj,
              children: [
                  (0, n.jsx)(eI, { size: l, user: a }),
                  (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function eL(e) {
    let { token: t, avatarSize: l, iconSize: r } = e,
        s = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        i = (0, o.bG)([f.A], () => f.A.getChannel(a[0]));
    if (null == i) return (0, n.jsx)(eT, { text: s, className: ex.Mj });
    let c = (0, S.E3)(i);
    return (0, n.jsxs)("div", {
        className: T()(ex.Mj, ex.JG),
        children: [
            (0, n.jsx)(es.A, { channel: i, avatarSize: l, iconClassName: ex.Wh, iconSize: r }),
            (0, n.jsx)(G.E, { variant: "text-sm/semibold", color: "text-strong", children: c }),
        ],
    });
}
function ev(e) {
    let { text: t, className: l, size: r } = e,
        s = (0, ea.KD)(t);
    return null != s ? (0, n.jsx)(s, { size: r, color: "currentColor", className: l }) : null;
}
function e_(e) {
    let { text: t, className: l, size: r } = e,
        s = (0, ea.Ht)(t);
    return null != s ? (0, n.jsx)(s, { size: r, color: "currentColor", className: l }) : null;
}
var eN = (((r = {}).ROW = "row"), (r.GROUP = "group"), r);
l(667532);
var eF = l(506774),
    eO = l(228366);
let ek = ef.nC,
    eM = !1,
    eP = {};
class ew extends o.Ay.Store {
    static displayName = ef.yQ;
    initialize() {
        var e;
        let t = eF.w.get(ek);
        (t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && "" !== e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
            }),
            (eP = e)),
            (eM = !!eF.w.get("tokenized")));
    }
    isTokenized() {
        return eM;
    }
    getHistory(e) {
        return eP[e];
    }
}
let eW = new ew(eO.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        (delete eP[t], eF.w.set(ef.nC, { history: eP }));
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: l } = e;
        null != eP[t] && ((eP[t] = eP[t].filter((e) => e !== l)), eF.w.set(ef.nC, { history: eP }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: l } = e;
        if ("string" != typeof l || "" === (l = l.trim())) return;
        let r = (eP[t] = eP[t] ?? []),
            n = r.indexOf(l);
        (-1 !== n
            ? (r.splice(n, 1), r.unshift(l))
            : null != r[0] && "" !== r[0] && l.startsWith(r[0])
              ? (r[0] = l)
              : r.unshift(l),
            r.length > 5 && r.splice(5, r.length),
            eF.w.set(ef.nC, { history: eP }));
    },
    LOGOUT: function () {
        (eF.w.remove(ef.nC), (eP = {}));
    },
});
var eH = l(588975),
    eD = l(674142);
let eQ = [];
var ez = l(948914);
let e$ = H()("2015-05-15").local();
function eG(e) {
    let { items: t, navId: l, selectedIndex: r } = e,
        s = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case eN.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            em,
                            { icon: t, label: a, onSelect: i, navId: l, index: o, selected: r === o },
                            `${e.type}-${o}`,
                        )
                    );
                case eN.GROUP:
                    let { rows: c, title: u } = e.data,
                        h = s;
                    return (
                        (s += c.length),
                        (0, n.jsx)(
                            eb,
                            { navId: l, item: e, startingIndex: h, selectedIndex: r },
                            `${e.type}--${u}-${h}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
let eq = s.forwardRef(function (e, t) {
        let { searchContext: l, navId: r, resultsState: a, onSelectedIndexChanged: i, selectedChannel: c } = e,
            [u, h] = s.useState(-1),
            d = s.useCallback(
                (e) => {
                    (h(e), i(e));
                    let t = document.getElementById(`${r}-${e}`);
                    null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
                },
                [r, i],
            ),
            f = s.useCallback(
                (e) => {
                    let { query: t, performSearch: l, replace: r } = e;
                    (b.A.setSearchQuery({
                        query: t,
                        performSearch: l,
                        replace: r,
                        resultsState: a,
                        searchQuerySource: ef.Q_.SEARCH_POPOUT,
                    }),
                        d(-1));
                },
                [a, d],
            ),
            { items: x, itemsData: g } = (function (e) {
                let { resultsState: t, searchContext: l, selectedChannel: r, setSearchQuery: a } = e,
                    { autocompletes: i, mode: c } = t,
                    u = (function (e) {
                        let { autocompletes: t, mode: l } = e;
                        return s.useCallback(
                            (e) => {
                                let { getAutocompleteRowItem: r, getAutocompleteGroupItem: n } = e,
                                    s = 0,
                                    a = [],
                                    i = [];
                                for (let e of t) {
                                    let t = [],
                                        { group: o, results: c } = e;
                                    if (e.results.length > 0) {
                                        for (let e of c) {
                                            let n = r({ result: e, modeType: l.type, group: o });
                                            t.push(n);
                                        }
                                        s += c.length;
                                        let e = n({ group: o, rows: t });
                                        (a.push(e), i.push(...t));
                                    }
                                }
                                return { autocompleteCount: s, autocompleteGroups: a, allAutocompleteRows: i };
                            },
                            [t, l.type],
                        );
                    })({ autocompletes: i, mode: c }),
                    h = (function (e) {
                        let { setSearchQuery: t, searchContext: l, mode: r } = e,
                            a = (0, eD.o)(l);
                        return s.useMemo(() => {
                            let e = [
                                {
                                    type: eo.LWr.FILTER_FROM,
                                    isEligible: a.has(eo.LWr.FILTER_FROM),
                                    icon: ee.UserIcon,
                                    label: ec.intl.string(ec.t.ktr6z5),
                                },
                                {
                                    type: eo.LWr.FILTER_IN,
                                    isEligible: a.has(eo.LWr.FILTER_IN),
                                    icon: J.N,
                                    label: ec.intl.string(ec.t.VMjDvS),
                                },
                                {
                                    type: eo.LWr.FILTER_HAS,
                                    isEligible: a.has(eo.LWr.FILTER_HAS),
                                    icon: eH.P,
                                    label: ec.intl.string(ec.t.IhIpc7),
                                },
                                {
                                    type: eo.LWr.FILTER_MENTIONS,
                                    isEligible: a.has(eo.LWr.FILTER_MENTIONS),
                                    icon: et.X,
                                    label: ec.intl.string(ec.t.fpKv9Y),
                                },
                            ];
                            return e
                                .filter((e) => e.isEligible)
                                .map((s) => {
                                    let { icon: a, label: i, type: o } = s;
                                    return eu(eN.ROW, {
                                        icon: (0, n.jsx)(a, { size: "sm", color: "currentColor", className: ex.Fx }),
                                        label: (0, n.jsx)(eg, { label: i }),
                                        sublabel: (0, n.jsx)(ep, { searchTokenType: o }),
                                        onSelect: function (n) {
                                            let { selectedIndex: s, searchAutocompleteSelectAction: a } = n,
                                                i = P.Ay[o]?.key ?? "",
                                                c = (0, S.bS)(l);
                                            ((0, R.kc)({
                                                searchContext: l,
                                                searchQuery: w.A.getSearchResultsQuery(c),
                                                searchQueryString: b.A.getSearchInputText(l),
                                                searchTokenType: o,
                                                searchAutocompleteGroup: o,
                                                searchAutocompleteMode: r,
                                                searchAutocompleteResultIndex: s - 1,
                                                searchAutocompleteTotalResults: e.length,
                                                isSearchFilterPrefix: !0,
                                                isSearchFilterAnswer: !1,
                                                isSearchFilterComplete: !1,
                                                isInFilterForSelectedChannel: !1,
                                                searchAutocompleteSelectAction: a,
                                            }),
                                                t({ query: `${i} `, performSearch: !1, replace: !1 }));
                                        },
                                    });
                                });
                        }, [a, l, r, t]);
                    })({ setSearchQuery: a, searchContext: l, mode: c }),
                    d = (0, o.yK)([B.A, m.Ay, eW], () => {
                        if (B.A.hidePersonalInformation) return eQ;
                        let e = (0, S.Jl)(l, m.Ay);
                        if (null == e) return eQ;
                        let t = eW.getHistory(e);
                        if (null == t) return eQ;
                        let r = new Set(),
                            n = [];
                        return (
                            t.forEach((e) => {
                                let t = l.type === eo.I4_.CHANNEL ? (0, S.EH)(e) : e;
                                "" === t || r.has(t) || (r.add(t), n.push(t));
                            }),
                            n
                        );
                    });
                function f(e) {
                    let {
                            autocompleteCount: t,
                            selectedIndex: r,
                            searchAutocompleteSelectAction: n,
                            selectedAutocomplete: s,
                            selectedAutocompleteGroup: a,
                        } = e,
                        i = c.type,
                        o = c.filter,
                        { token: u, group: h } = s,
                        d = null != h && (0, P.If)(h) ? h : null,
                        f = u ?? o ?? d,
                        x = s.channel,
                        g = f === eo.LWr.FILTER_IN && null != x && x.id === m.Ay.getChannelId(),
                        p = (0, S.bS)(l);
                    (0, R.kc)({
                        searchContext: l,
                        searchQuery: w.A.getSearchResultsQuery(p),
                        searchQueryString: b.A.getSearchInputText(l),
                        searchTokenType: f,
                        searchAutocompleteGroup: a,
                        searchAutocompleteMode: c,
                        searchAutocompleteResultIndex: r,
                        searchAutocompleteTotalResults: t,
                        isSearchFilterPrefix: i === eo.o$q.EMPTY,
                        isSearchFilterAnswer: i === eo.o$q.FILTER,
                        isSearchFilterComplete: i === eo.o$q.FILTER_ALL,
                        isInFilterForSelectedChannel: g,
                        searchAutocompleteSelectAction: n,
                    });
                }
                let x = s.useCallback(
                        (e) => {
                            let { hasOtherSearchFiltersVisible: t } = e,
                                r = t ? ec.intl.string(ec.t.diOL4i) : ec.intl.string(ec.t["M1tf+7"]);
                            return eu(eN.ROW, {
                                icon: (0, n.jsx)($.R, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 20,
                                    height: 20,
                                    className: ex.Fx,
                                }),
                                label: (0, n.jsx)(eg, { label: r }),
                                sublabel: t
                                    ? (0, n.jsx)(G.E, {
                                          variant: "text-sm/medium",
                                          color: "text-muted",
                                          children: ec.intl.string(ec.t["1axf1T"]),
                                      })
                                    : void 0,
                                onSelect: () => b.A.openSearchFiltersModal(l),
                            });
                        },
                        [l],
                    ),
                    g = (0,
                    {
                        [eo.o$q.EMPTY]: () => {
                            let e = [];
                            if (null != r && (0, Y.HM)(l) && l.type === eo.I4_.DMS) {
                                let t = eS(r),
                                    s = eu(eN.ROW, {
                                        icon: (0, n.jsx)(q.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: ex.Fx,
                                        }),
                                        label: (0, n.jsx)(eg, {
                                            label: ec.intl.format(ec.t["VGEH/0"], { channelName: t }),
                                            className: ex.YL,
                                        }),
                                        onSelect: (e) => {
                                            let { searchAutocompleteSelectAction: t } = e;
                                            return (function (e) {
                                                let { selectedChannel: t, searchAutocompleteSelectAction: r } = e;
                                                (0, R.rE)({ searchContext: l, searchAutocompleteSelectAction: r });
                                                let n = eo.LWr.FILTER_IN,
                                                    s = P.Ay[n],
                                                    i = (0, S.Rt)(t);
                                                a({
                                                    query: `${s?.key ?? n.toString()} ${i}`,
                                                    performSearch: !0,
                                                    replace: !1,
                                                });
                                            })({ selectedChannel: r, searchAutocompleteSelectAction: t });
                                        },
                                    });
                                e.push(s);
                            }
                            let t = [...h, x({ hasOtherSearchFiltersVisible: !0 })];
                            if ((e.push(eu(eN.GROUP, { rows: t, title: ec.intl.string(ec.t.UdhTtk) })), d.length > 0)) {
                                let t = d.map((e, t) => {
                                        let { label: r, ariaLabel: s } = eC({
                                            value: e,
                                            avatarSize: U._3.SIZE_16,
                                            iconSize: "xs",
                                        });
                                        return eu(eN.ROW, {
                                            icon: (0, n.jsx)(q.MagnifyingGlassIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: ex.Fx,
                                            }),
                                            label: r,
                                            ariaLabel: ec.intl.formatToPlainString(ec.t.WoiGrV, { suggestion: s }),
                                            resultText: e,
                                            onSelect: () => {
                                                ((0, R.oR)({
                                                    searchContext: l,
                                                    searchHistoryIndex: t,
                                                    searchHistoryTotalResults: d.length,
                                                }),
                                                    a({ query: e, performSearch: !0, replace: !1 }));
                                            },
                                        });
                                    }),
                                    r = eu(eN.GROUP, {
                                        rows: t,
                                        trailingIcon: (0, n.jsx)(eA, { searchContext: l }),
                                        title: eh(eo.x2k.HISTORY),
                                    });
                                e.push(r);
                            }
                            return e;
                        },
                        [eo.o$q.FILTER_ALL]: () => {
                            let e = [];
                            if ("" !== t.query.trim()) {
                                let { label: l } = eC({ value: t.query, avatarSize: U._3.SIZE_16, iconSize: "xs" }),
                                    r = eu(eN.ROW, {
                                        icon: (0, n.jsx)(q.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: ex.Fx,
                                        }),
                                        label: (0, n.jsx)(eg, {
                                            label: ec.intl.format(ec.t.rCnaoo, { value: l }),
                                            className: ex.YL,
                                        }),
                                        ariaLabel: ec.intl.formatToPlainString(ec.t.rCnaoo, { value: t.query }),
                                        onSelect: () =>
                                            (function (e) {
                                                let { searchEverywhere: t } = e;
                                                M._.dispatch(eo.jej.PERFORM_SEARCH, {
                                                    searchEverywhere: t,
                                                    searchQuerySource: ef.Q_.SEARCH_POPOUT,
                                                });
                                            })({ searchEverywhere: !1 }),
                                    });
                                e.push(r);
                            }
                            let { autocompleteCount: l, autocompleteGroups: r } = u({
                                getAutocompleteRowItem: (e) => {
                                    let { result: t, modeType: r, group: s } = e,
                                        i = ed({ modeType: r, result: t, group: s }),
                                        o = (function (e) {
                                            let { result: t, group: l } = e;
                                            switch (l) {
                                                case eo.x2k.HISTORY:
                                                    return (0, n.jsx)(q.MagnifyingGlassIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ex.Fx,
                                                    });
                                                case eo.LWr.FILTER_IN:
                                                    return (0, n.jsx)(J.N, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ex.Fx,
                                                    });
                                                case eo.LWr.FILTER_FROM:
                                                    return (0, n.jsx)(ee.UserIcon, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ex.Fx,
                                                    });
                                                case eo.LWr.FILTER_MENTIONS:
                                                    return (0, n.jsx)(et.X, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                        className: ex.Fx,
                                                    });
                                                case eo.LWr.FILTER_HAS:
                                                    return (0, n.jsx)(ev, {
                                                        text: t.text,
                                                        size: "sm",
                                                        className: ex.Fx,
                                                    });
                                                default:
                                                    return null;
                                            }
                                        })({ result: t, group: s }),
                                        { label: c, ariaLabel: u } = (function (e) {
                                            let { channel: t, user: l, text: r } = e;
                                            return null != t
                                                ? {
                                                      label: (0, n.jsxs)("div", {
                                                          className: ex.YL,
                                                          children: [
                                                              (0, n.jsx)(G.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-strong",
                                                                  children: P.Ay[eo.LWr.FILTER_IN].key ?? "",
                                                              }),
                                                              eS(t),
                                                          ],
                                                      }),
                                                      ariaLabel: (0, S.E3)(t),
                                                  }
                                                : null != l
                                                  ? {
                                                        label: (0, n.jsxs)("div", {
                                                            className: ex.YL,
                                                            children: [
                                                                (0, n.jsx)(eI, { size: U._3.SIZE_16, user: l }),
                                                                (0, n.jsx)(eR, { user: l }),
                                                            ],
                                                        }),
                                                        ariaLabel: l.username,
                                                    }
                                                  : { label: (0, n.jsx)(eg, { label: r }), ariaLabel: r };
                                        })(t),
                                        h =
                                            s === eo.LWr.FILTER_FROM || s === eo.LWr.FILTER_MENTIONS
                                                ? (0, n.jsx)(ep, { searchTokenType: s, answer: t.user?.username })
                                                : void 0;
                                    return eu(eN.ROW, {
                                        icon: o,
                                        label: c,
                                        sublabel: h,
                                        ariaLabel: u,
                                        resultText: i,
                                        onSelect: function (e) {
                                            let { selectedIndex: r, searchAutocompleteSelectAction: n } = e;
                                            (f({
                                                selectedIndex: r,
                                                searchAutocompleteSelectAction: n,
                                                selectedAutocomplete: t,
                                                selectedAutocompleteGroup: s,
                                                autocompleteCount: l,
                                            }),
                                                a({ query: i, performSearch: !1, replace: !1 }));
                                        },
                                    });
                                },
                                getAutocompleteGroupItem: (e) => {
                                    let { group: t, rows: l } = e,
                                        r = eh(t);
                                    return eu(eN.GROUP, { rows: l, title: r });
                                },
                            });
                            if (0 === l) {
                                let t = [...h, x({ hasOtherSearchFiltersVisible: !0 })];
                                e.push(eu(eN.GROUP, { rows: t, title: ec.intl.string(ec.t.UdhTtk) }));
                            } else {
                                let t = x({ hasOtherSearchFiltersVisible: !1 });
                                e.push(t);
                            }
                            return (l > 0 && e.push(...r), e);
                        },
                        [eo.o$q.FILTER]: () => {
                            let { autocompleteCount: e, autocompleteGroups: t } = u({
                                getAutocompleteRowItem: (t) => {
                                    let { result: l, modeType: r, group: s } = t,
                                        i = ed({ modeType: r, result: l, group: s }),
                                        o = (function (e) {
                                            let { result: t, group: l } = e,
                                                { channel: r, user: s } = t;
                                            return null != r
                                                ? (0, n.jsx)(es.A, {
                                                      channel: r,
                                                      avatarSize: U._3.SIZE_20,
                                                      iconClassName: ex.Fx,
                                                      iconSize: "refresh_sm",
                                                  })
                                                : null != s
                                                  ? (0, n.jsx)(eI, { size: U._3.SIZE_20, user: s, className: ex.Fx })
                                                  : l === eo.LWr.FILTER_HAS
                                                    ? (0, n.jsx)(ev, { size: "sm", text: t.text, className: ex.Fx })
                                                    : l === eo.LWr.FILTER_AUTHOR_TYPE
                                                      ? (0, n.jsx)(e_, { size: "sm", text: t.text, className: ex.Fx })
                                                      : null;
                                        })({ result: l, group: s }),
                                        { label: c, ariaLabel: u } = (function (e) {
                                            let { channel: t, user: l, text: r } = e;
                                            if (null != t) {
                                                let e = (0, S.E3)(t);
                                                return {
                                                    label: (0, n.jsx)(G.E, {
                                                        variant: "text-sm/semibold",
                                                        color: "text-strong",
                                                        children: e,
                                                    }),
                                                    ariaLabel: (0, S.E3)(t),
                                                };
                                            }
                                            return null != l
                                                ? {
                                                      label: (0, n.jsxs)("div", {
                                                          className: ex.YL,
                                                          children: [
                                                              (0, n.jsx)(eR, { user: l }),
                                                              (0, n.jsx)(G.E, {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-subtle",
                                                                  children: l.username,
                                                              }),
                                                          ],
                                                      }),
                                                      ariaLabel: l.username,
                                                  }
                                                : { label: (0, n.jsx)(eg, { label: r }), ariaLabel: r };
                                        })(l);
                                    return eu(eN.ROW, {
                                        icon: o,
                                        label: c,
                                        ariaLabel: u,
                                        resultText: i,
                                        onSelect: function (t) {
                                            let { selectedIndex: r, searchAutocompleteSelectAction: n } = t;
                                            (f({
                                                selectedIndex: r,
                                                searchAutocompleteSelectAction: n,
                                                selectedAutocomplete: l,
                                                selectedAutocompleteGroup: s,
                                                autocompleteCount: e,
                                            }),
                                                a({ query: i, performSearch: !0, replace: !1 }));
                                        },
                                    });
                                },
                                getAutocompleteGroupItem: (e) => {
                                    let { group: t, rows: l } = e,
                                        r = eh(t);
                                    return eu(eN.GROUP, { rows: l, title: r });
                                },
                            });
                            return [...t];
                        },
                    }[c.type])(),
                    p = s.useMemo(() => {
                        let e = [];
                        return (
                            g.forEach((t) => {
                                switch (t.type) {
                                    case eN.ROW:
                                        e.push(t);
                                        break;
                                    case eN.GROUP:
                                        t.data.rows.forEach((t) => e.push(t));
                                }
                            }),
                            e
                        );
                    }, [g]);
                return { items: g, itemsData: p };
            })({ resultsState: a, searchContext: l, selectedChannel: c, setSearchQuery: f });
        function p(e) {
            let { newSelectedIndex: t, searchAutocompleteSelectAction: l } = e,
                r = t;
            return (
                null == r && (r = u),
                !(r < 0) &&
                    !(r > g.length - 1) &&
                    (g[r].data.onSelect({ searchAutocompleteSelectAction: l, selectedIndex: r }), !0)
            );
        }
        function A(e) {
            let t;
            ((t = u + e) > g.length - 1 ? (t = 0) : t < 0 && (t = g.length - 1), d(t));
        }
        let E = s.useRef({ itemsData: [], selectedIndex: -1, modeType: a.mode.type, query: a.query });
        s.useEffect(() => {
            let { itemsData: e, selectedIndex: t, modeType: l, query: r } = E.current,
                n = a.mode.type,
                s = a.query;
            if (n !== l) n === eo.o$q.FILTER ? d(0) : d(-1);
            else if (n === eo.o$q.FILTER && a.query !== r && g.length > 0) d(0);
            else if (n === eo.o$q.FILTER && 0 === e.length && g.length > 0) d(0);
            else if (t >= 0 && (t === u || e.length !== g.length)) {
                let l = e[t],
                    r = l?.data.resultText;
                if (null != r) {
                    let e = g.findIndex((e) => e.data.resultText === r);
                    -1 !== e ? d(e) : t >= g.length && d(Math.max(0, g.length - 1));
                } else t >= g.length && d(Math.max(0, g.length - 1));
            }
            E.current = { itemsData: g, selectedIndex: u, modeType: n, query: s };
        }, [g, u, a.mode.type, a.query, d]);
        let y = s.useRef(null),
            I = a.query;
        return (
            s.useEffect(() => {
                if ("" === I) {
                    y.current = null;
                    return;
                }
                let e = g.length;
                y.current !== e &&
                    ((y.current = e), v.O.announce(ec.intl.formatToPlainString(ec.t.ZGVL3g, { count: e }), "polite"));
            }, [g.length, I]),
            s.useImperativeHandle(t, () => ({
                selectedIndex: u,
                focusNextOption: () => {
                    A(1);
                },
                focusPreviousOption: () => {
                    A(-1);
                },
                selectOption: p,
            })),
            (0, n.jsx)(D.d_, {
                onMouseDown: function (e) {
                    (e.stopPropagation(), e.preventDefault());
                },
                role: "listbox",
                id: r,
                tabIndex: -1,
                "aria-activedescendant": `${r}-${u}`,
                className: x.length > 0 ? ez.kL : void 0,
                children: (0, n.jsx)(eG, { items: x, navId: r, selectedIndex: u }),
            })
        );
    }),
    eU = s.forwardRef(function (e, t) {
        let { navId: l, resultsState: r, searchContext: a } = e;
        return (
            s.useImperativeHandle(t, () => ({
                selectedIndex: -1,
                focusNextOption: () => {},
                focusPreviousOption: () => {},
                selectOption: () => {},
            })),
            (0, n.jsx)(D.d_, {
                onMouseDown: function (e) {
                    (e.stopPropagation(), e.preventDefault());
                },
                role: "listbox",
                id: l,
                tabIndex: -1,
                "aria-activedescendant": `${l}--1`,
                className: T()(ez.kL, ez.Wl),
                children: (0, n.jsx)(Q.CalendarPicker, {
                    onSelect: function (e) {
                        let t = (0, S.bS)(a);
                        ((0, R.kc)({
                            searchContext: a,
                            searchQuery: w.A.getSearchResultsQuery(t),
                            searchQueryString: b.A.getSearchInputText(a),
                            searchTokenType: r.mode.filter,
                            searchAutocompleteGroup: eo.x2k.DATES,
                            searchAutocompleteMode: r.mode,
                            isSearchFilterPrefix: !1,
                            isSearchFilterAnswer: !0,
                            isSearchFilterComplete: !1,
                            searchAutocompleteSelectAction: ef.oi.CLICK,
                        }),
                            b.A.setSearchQuery({
                                query: e.format(eo.ump) + " ",
                                performSearch: !0,
                                replace: !1,
                                resultsState: r,
                                searchQuerySource: ef.Q_.SEARCH_POPOUT,
                            }));
                    },
                    maxDate: H()().local(),
                    minDate: e$,
                    calendarClassName: ez.BJ,
                }),
            })
        );
    }),
    eB = s.forwardRef(function (e, t) {
        let { searchContext: l, navId: r, onSelectedIndexChanged: s } = e,
            [a, i] = (0, o.yK)([z.A, m.Ay, f.A], () => {
                let e = z.A.getState(l),
                    t = m.Ay.getChannelId();
                return [e, f.A.getChannel(t)];
            });
        return (0, S.av)(a.mode.filter)
            ? (0, n.jsx)(eU, { navId: r, resultsState: a, searchContext: l })
            : (0, n.jsx)(eq, {
                  ref: t,
                  searchContext: l,
                  navId: r,
                  onSelectedIndexChanged: s,
                  resultsState: a,
                  selectedChannel: i,
              });
    });
var eY = l(798549);
let eK = "searchToken";
function eZ(e) {
    let { attributes: t, children: l, leaf: r } = e,
        s = r[eK];
    return s === P.v1.FILTER
        ? (0, n.jsx)("span", { ...t, className: eY.nM, children: l })
        : s === P.v1.ANSWER
          ? (0, n.jsx)("span", { ...t, className: eY.pB, children: l })
          : (0, n.jsx)("span", { ...t, children: l });
}
l(76497);
var eV = l(935675),
    eX = l(372492);
let eJ = (0, k.Ld)();
function e0(e, t) {
    return { path: [0, 0], offset: Math.min(Math.max(t, 0), j.bP.string(e).length) };
}
function e1(e) {
    return w.A.getQueryText(e) ?? "";
}
function e5(e, t) {
    let { selection: l } = e;
    if (null == l || !j.Q6.isCollapsed(l)) return !1;
    let r = j.Q6.start(l).offset;
    for (let l of (0, S._o)(j.bP.string(e))) {
        let n = P.Ay[l.type];
        if (null != n && !0 !== n.mutable && (t ? r >= l.start && r < l.end : r > l.start && r <= l.end))
            return (j.gB.delete(e, { at: { anchor: e0(e, l.start), focus: e0(e, l.end) } }), !0);
    }
    return !1;
}
let e6 = { whiteSpace: "pre", wordWrap: "normal" };
function e2(e) {
    let [t, l] = e,
        r = [];
    if (!j.EY.isText(t) || 0 === t.text.length) return r;
    for (let e of (0, S._o)(t.text)) {
        let t = P.Ay[e.type];
        null != t &&
            r.push({ anchor: { path: l, offset: e.start }, focus: { path: l, offset: e.end }, [eK]: t.componentType });
    }
    return r;
}
function e3(e) {
    return (0, n.jsx)(eZ, { ...e });
}
function e7(e) {
    let { children: t, attributes: l } = e;
    return (0, n.jsx)("span", { ...l, style: { ...l.style, opacity: 1 }, children: t });
}
let e9 = s.memo(function (e) {
    let {
        editor: t,
        initialValue: l,
        placeholder: r,
        navId: s,
        isShown: a,
        onChange: i,
        onKeyDown: o,
        onFocus: c,
        onBlur: u,
    } = e;
    return (0, n.jsx)(L.A, {
        editor: t,
        value: l,
        onChange: i,
        children: (0, n.jsx)(L.Fo, {
            className: eX.E,
            style: e6,
            placeholder: r,
            decorate: e2,
            renderLeaf: e3,
            renderPlaceholder: e7,
            onKeyDown: o,
            onFocus: c,
            onBlur: u,
            onPasteCapture: function (e) {
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
            },
            role: "combobox",
            "aria-expanded": a,
            "aria-controls": a ? s : void 0,
            "aria-label": r,
            "aria-autocomplete": "list",
            autoCorrect: "off",
            spellCheck: !1,
        }),
    });
});
function e8(e) {
    let {
            className: t,
            searchContext: l,
            isSearching: r,
            hasResults: a,
            keyboardModeEnabled: i,
            onSearch: c,
            placeholder: u,
        } = e,
        h = (0, S.bS)(l),
        d = e1(h),
        [x] = s.useState(() => {
            let e = (function (e) {
                let { insertText: t, deleteBackward: l, deleteForward: r } = e;
                return (
                    (e.insertBreak = () => {}),
                    (e.deleteBackward = (t) => {
                        e5(e, !1) || l(t);
                    }),
                    (e.deleteForward = (t) => {
                        e5(e, !0) || r(t);
                    }),
                    (e.insertText = (l) => {
                        let { selection: r } = e,
                            n = null != r ? j.KE.string(e, r).length : 0,
                            s = 512 - (j.bP.string(e).length - n);
                        if (s <= 0) return;
                        let a = l.replace(/\n/g, "");
                        t(a.length > s ? a.slice(0, s) : a);
                    }),
                    (e.insertData = (t) => {
                        let l = t.getData("text/plain");
                        "" !== l && e.insertText(l);
                    }),
                    e
                );
            })((0, L.o$)((0, j.ie)()));
            return ((e.children = [{ type: "line", children: [{ text: d }] }]), (e.selection = null), e);
        }),
        [p] = s.useState(() => [...x.children]),
        [A, I] = s.useState(!1),
        [C, k] = s.useState(() => d.length > 0),
        W = s.useRef(null),
        H = s.useRef(null),
        D = s.useRef(null),
        Q = s.useRef(!0);
    s.useEffect(
        () => () => {
            Q.current = !1;
        },
        [],
    );
    let z = s.useRef(!1),
        $ = s.useCallback(() => j.bP.string(x), [x]),
        G = s.useCallback(() => {
            Promise.resolve().then(() => {
                (null == x.selection && j.gB.select(x, j.KE.end(x, [])), L.rL.focus(x));
            });
        }, [x]),
        q = s.useCallback(() => {
            Promise.resolve().then(() => L.rL.blur(x));
        }, [x]),
        U = s.useCallback(() => {
            b.A.cleanUpSearchState(l);
        }, [l]),
        B = s.useCallback(
            (e) => {
                if (!Q.current) return;
                let t = e?.relatedTarget,
                    r = document.getElementById(eJ);
                (null != t && null != r && r.contains(t)) ||
                    (E.A.setFocused(l, !1), I(!1), 0 === $().length && 0 === e1(h).length && U());
            },
            [U, h, $, l],
        ),
        Y = s.useCallback(
            (e) => {
                (j.KE.withoutNormalizing(x, () => {
                    (j.gB.select(x, { anchor: j.KE.start(x, []), focus: j.KE.end(x, []) }),
                        j.gB.delete(x),
                        j.gB.insertText(x, e.replace(/\n/g, "").slice(0, 512)));
                }),
                    j.gB.select(x, j.KE.end(x, [])));
            },
            [x],
        ),
        K = s.useCallback(
            (e) => {
                if (r) return !1;
                let { queryString: t, searchEverywhere: l, searchQuerySource: n } = e ?? {};
                (null == t || "" === t) && (t = $());
                let s = (0, S._o)(t),
                    a = (0, S.Zf)(s);
                for (let e = 0; e < s.length; e++)
                    (0, S.Zh)(s[e], s[e + 1]) || (t = t.substring(0, s[e].start) + t.substring(s[e].end));
                return (
                    0 !== s.length &&
                    0 !== Object.keys(a).length &&
                    (c({
                        queryString: t,
                        query: a,
                        searchEverywhere: l ?? !1,
                        searchQuerySource: n ?? ef.Q_.SEARCH_TEXT_INPUT,
                    }),
                    v.O.announce(ec.intl.string(ec.t.pKCxWP)),
                    B(),
                    !0)
                );
            },
            [$, B, r, c],
        ),
        Z = s.useCallback(() => {
            if (!Q.current) return;
            !z.current && L.rL.isFocused(x) && I(!0);
            let e = $();
            (k(e.length > 0), y.A.updateSearchQueryText(l, e));
            let t = (0, S._o)(e),
                { selection: r } = x,
                n = null != r ? j.Q6.end(r).offset : e.length,
                s = null != r ? j.Q6.start(r).offset : e.length,
                a = (0, S.zZ)(t, n, s);
            (g.A.updateAutocompleteQuery({ searchContext: l, tokens: t, cursorScope: a, queryString: e }),
                (function (e) {
                    let t;
                    try {
                        t = L.rL.toDOMNode(e, e);
                    } catch {
                        return;
                    }
                    requestAnimationFrame(() => {
                        let e = t.ownerDocument.getSelection();
                        if (null == e || "Caret" !== e.type || 0 === e.rangeCount) return;
                        let l = e.getRangeAt(0);
                        if (!t.contains(l.commonAncestorContainer)) return;
                        let r = l.getClientRects()[0],
                            n = t.getClientRects()[0];
                        if (null == r || null == n) return;
                        let s = r.left - n.left + t.scrollLeft;
                        s < t.scrollLeft
                            ? (t.scrollLeft = s - 10)
                            : s > t.scrollLeft + t.offsetWidth && (t.scrollLeft = s - t.offsetWidth + 3);
                    });
                })(x));
        }, [x, $, l]),
        V = s.useCallback(() => {
            !0 !== D.current?.selectOption({ searchAutocompleteSelectAction: ef.oi.KEY_PRESS }) &&
                K({ searchQuerySource: ef.Q_.SEARCH_TEXT_INPUT });
        }, [K]),
        X = s.useCallback(
            (e) => {
                switch (e.key) {
                    case "Enter":
                        (e.preventDefault(), V());
                        return;
                    case "Escape":
                        (e.preventDefault(), e.stopPropagation(), 0 === $().length ? q() : (Y(""), I(!0)));
                        return;
                    case "ArrowUp":
                        (e.preventDefault(), e.stopPropagation(), D.current?.focusPreviousOption());
                        return;
                    case "ArrowDown":
                        (e.preventDefault(), e.stopPropagation(), D.current?.focusNextOption());
                        return;
                    case "Tab":
                        if (i) return;
                        (e.stopPropagation(), (0, O.uS)());
                        return;
                }
            },
            [q, $, V, i, Y],
        ),
        J = s.useCallback(
            (e) => {
                let { query: t, anchor: l, focus: r, performSearch: n, replace: s, searchQuerySource: a } = e,
                    i = $();
                (" " !== t.charAt(t.length - 1) && (t += " "),
                    null != l && 0 !== l && " " !== i.charAt(l - 1) && " " !== t.charAt(0) && (t = " " + t),
                    (t = t.replace(/\n/g, "")),
                    (z.current = !0));
                try {
                    (!0 !== n && L.rL.focus(x),
                        !0 === s
                            ? Y(t)
                            : null != l
                              ? (j.gB.select(x, { anchor: e0(x, l), focus: e0(x, r ?? l) }),
                                j.gB.insertText(x, t.slice(0, 512)))
                              : j.gB.insertText(x, t),
                        !0 !== n && I(!0),
                        !0 === n && K({ queryString: $(), searchQuerySource: a }));
                } finally {
                    Promise.resolve().then(() => {
                        z.current = !1;
                    });
                }
            },
            [x, $, Y, K],
        ),
        ee = s.useCallback(
            (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!0 !== t) return void G();
                let r = f.A.getChannel(m.Ay.getChannelId()),
                    n = null != r ? (0, S.Rt)(r) : null;
                null == r || (r.isPrivate() && l.type !== eo.I4_.DMS) || r.isObfuscated() || null == n
                    ? G()
                    : ((0, R.Tf)({ searchContext: l }),
                      Promise.resolve().then(() => {
                          (L.rL.focus(x),
                              J({
                                  query: P.Ay[eo.LWr.FILTER_IN].key + `${n} `,
                                  replace: !0,
                                  searchQuerySource: ef.Q_.SEARCH_TEXT_INPUT,
                              }));
                      }));
            },
            [x, G, J, l],
        );
    s.useEffect(() => {
        (0, S.Pe)();
    }, [l]);
    let et = (0, o.bG)([w.A], () => w.A.getQueryText(h) ?? "");
    (s.useEffect(() => {
        j.bP.string(x) !== et && Y(et);
    }, [et, x, Y]),
        s.useEffect(() => {
            let { selection: e } = x;
            if (null == e) return;
            let t = j.bP.string(x).length;
            (j.Q6.start(e).offset > t || j.Q6.end(e).offset > t) && j.gB.deselect(x);
        }, [h, x]));
    let el = (0, o.bG)([w.A], () => w.A.getIsSearchTokensInitialized());
    (s.useEffect(() => {
        el && x.onChange();
    }, [x, el]),
        s.useEffect(
            () => (
                M._.subscribe(eo.jej.PERFORM_SEARCH, K),
                M._.subscribe(eo.jej.SET_SEARCH_QUERY, J),
                M._.subscribe(eo.jej.FOCUS_SEARCH, ee),
                () => {
                    (M._.unsubscribe(eo.jej.PERFORM_SEARCH, K),
                        M._.unsubscribe(eo.jej.SET_SEARCH_QUERY, J),
                        M._.unsubscribe(eo.jej.FOCUS_SEARCH, ee));
                }
            ),
            [ee, J, K],
        ));
    let er = s.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), 0 === $().length)
                    ? G()
                    : (Y(""), (0, R.iK)({ searchContext: l }), U(), A || q());
            },
            [q, U, A, G, $, Y, l],
        ),
        en = s.useCallback(
            (e) => {
                let t = L.rL.toDOMNode(x, x);
                null != e
                    ? t.setAttribute("aria-activedescendant", `${eJ}-${e}`)
                    : t.removeAttribute("aria-activedescendant");
            },
            [x],
        ),
        es = s.useCallback(
            (e) => {
                let t = e.relatedTarget;
                if (null != t) {
                    let e = document.getElementById(eJ);
                    if ((null != e && e.contains(t)) || (null != H.current && H.current.contains(t))) return;
                }
                B();
            },
            [B],
        ),
        ea = s.useCallback(
            () =>
                (0, n.jsx)("div", {
                    onBlur: es,
                    children: (0, n.jsx)(eB, { ref: D, searchContext: l, navId: eJ, onSelectedIndexChanged: en }),
                }),
            [es, en, l],
        ),
        ei = s.useCallback(() => {
            (L.rL.toDOMNode(x, x).removeAttribute("aria-activedescendant"),
                (function (e) {
                    if (null != e.selection) return;
                    let t = L.rL.findDocumentOrShadowRoot(e),
                        l = "getSelection" in t ? t.getSelection() : null,
                        r = null;
                    if (null != l && l.rangeCount > 0) {
                        let { anchorNode: t, focusNode: n } = l;
                        null != t &&
                            null != n &&
                            L.rL.hasDOMNode(e, t) &&
                            L.rL.hasDOMNode(e, n) &&
                            (r = L.rL.toSlateRange(e, l, { exactMatch: !1, suppressThrow: !0 }));
                    }
                    j.gB.select(e, r ?? j.KE.end(e, []));
                })(x),
                I(!0),
                E.A.setFocused(l, !0),
                v.O.announce(ec.intl.string(ec.t["5h0QOP"])));
        }, [x, l]),
        eu = u ?? ec.intl.string(ec.t["5h0QOP"]);
    return (0, n.jsx)(_.Y, {
        targetElementRef: W,
        renderPopout: ea,
        position: "bottom",
        animation: _.Y.Animation.NONE,
        shouldShow: A,
        autoInvert: !1,
        children: (e, r) => {
            let { isShown: s } = r;
            return (0, n.jsx)("div", {
                className: t,
                ref: W,
                children: (0, n.jsx)("div", {
                    className: T()(eV.$P, { [eV.ho]: C || A, [eV.in]: A }),
                    children: (0, n.jsx)(N.vN, {
                        ringTarget: H,
                        children: (0, n.jsxs)(
                            "div",
                            {
                                className: T()(eV.ON, eX.O),
                                ref: H,
                                children: [
                                    (0, n.jsx)(e9, {
                                        editor: x,
                                        initialValue: p,
                                        placeholder: eu,
                                        navId: eJ,
                                        isShown: s,
                                        onChange: Z,
                                        onKeyDown: X,
                                        onFocus: ei,
                                        onBlur: B,
                                    }),
                                    (0, n.jsx)(F.B, {
                                        onClear: er,
                                        hasContent: C || a,
                                        className: eV.Kk,
                                        isLoading: !1,
                                    }),
                                ],
                            },
                            (0, S.bS)(l),
                        ),
                    }),
                }),
            });
        },
    });
}
var e4 = l(921242);
let te = i()(b.A.fetchMessages, 500);
function tt(e) {
    let { searchContext: t, className: l } = e,
        r = (0, S.bS)(t),
        a = (0, o.bG)([u.Ay], () => u.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        g.A.initializeAutocomplete(t);
    }, [t]),
        s.useEffect(
            () => (
                h.A.setSelectedSearchContext(r),
                () => {
                    h.A.setSelectedSearchContext(null);
                }
            ),
            [r],
        ));
    let { isSearching: i, hasResults: b } = (0, o.cf)([p.A], () => {
            let e = p.A.getTotalCount(r);
            return { hasResults: null != e && e > 0, isSearching: p.A.getIsFetching(r) };
        }),
        I = (0, o.bG)([d.Ay, m.Ay, f.A], () => {
            let e = m.Ay.getCurrentlySelectedChannelId(),
                t = f.A.getChannel(e);
            return d.Ay.getSection(e, t?.isDM()) === eo.YvQ.SEARCH;
        });
    s.useEffect(() => {
        E.A.setSidebarOpen(t, I);
    }, [t, I]);
    let C = (0, c.useHasModalOpen)(e4.b);
    s.useEffect(() => {
        E.A.setFiltersModalOpen(t, C);
    }, [t, C]);
    let T = s.useCallback(
            (e) => {
                let { queryString: l, query: r, searchEverywhere: n, searchQuerySource: s } = e;
                (E.A.refreshQueryId(t),
                    (0, R.fd)({ searchContext: t, query: r, queryString: l, searchQuerySource: s }),
                    y.A.updateSearchMode(t, eo.BBH.NEWEST),
                    te({ searchContext: t, searchQueryString: l, searchEverywhere: n, offset: 0 }));
            },
            [t],
        ),
        j = (0, o.bG)([x.A, f.A], () => {
            let e = (0, A._)(t) ? t.guildId : null;
            if (null != e) {
                let t = x.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let l = (0, S._b)(t);
            if (null != l) {
                let e = f.A.getChannel(l);
                return null == e ? null : (0, S.E3)(e);
            }
            return null;
        }),
        L = s.useMemo(
            () =>
                t.type === eo.I4_.DMS
                    ? ec.intl.string(ec.t.m7OrlR)
                    : null != j
                      ? ec.intl.formatToPlainString(ec.t.LDZtFO, { name: j })
                      : ec.intl.string(ec.t["5h0QOP"]),
            [t.type, j],
        );
    return (0, n.jsx)(e8, {
        className: l,
        searchContext: t,
        isSearching: i,
        hasResults: b,
        keyboardModeEnabled: a,
        onSearch: T,
        placeholder: L,
    });
}
function tl(e) {
    let { className: t, guildId: l, channelId: r } = e,
        s = (0, I.J)({ guildId: l, channelId: r });
    return null == s ? null : (0, n.jsx)(tt, { className: t, searchContext: s });
}
