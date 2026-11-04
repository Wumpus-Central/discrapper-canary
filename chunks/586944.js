(l.r(t), l.d(t, { Search: () => tt, default: () => tl }));
var r,
    n = l(477900),
    s = l(582128),
    a = l(64015),
    o = l.n(a),
    i = l(855986),
    c = l(192308),
    u = l(775602),
    d = l(138298),
    h = l(799704),
    f = l(734057),
    m = l(71393),
    g = l(309010),
    x = l(256796),
    p = l(517381),
    S = l(822382),
    y = l(902008),
    A = l(617713),
    E = l(616252),
    b = l(753806),
    I = l(775427),
    R = l(145331);
l(321073);
var C = l(503698),
    T = l.n(C),
    j = l(719442),
    L = l(235599),
    v = l(765178),
    _ = l(265872),
    N = l(559106),
    F = l(884496),
    O = l(955572),
    k = l(915089),
    M = l(188567),
    P = l(224467),
    W = l(65600),
    w = l(536637),
    H = l.n(w),
    D = l(95362),
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
    eo = l(988665),
    ei = l(652215),
    ec = l(792996);
function eu(e, t) {
    return { type: e, data: t };
}
function ed(e) {
    switch (e) {
        case ei.x2k.HISTORY:
            return ec.intl.string(ec.t.tSZd5c);
        case ei.LWr.FILTER_FROM:
            return ec.intl.string(ec.t.catERA);
        case ei.LWr.FILTER_MENTIONS:
            return ec.intl.string(ec.t["l3K4B/"]);
        case ei.LWr.FILTER_IN:
            return ec.intl.string(ec.t.vHyCgl);
        case ei.LWr.FILTER_HAS:
            return ec.intl.string(ec.t.IC7gHM);
        default:
            return "";
    }
}
function eh(e) {
    let { modeType: t, result: l, group: r } = e,
        { text: n, channel: s, group: a } = l,
        o = n;
    if ((null != s && (o = (0, S.TZ)(o)), t === ei.o$q.FILTER_ALL)) {
        let e = P.Ay[a ?? r];
        e?.key != null && e?.key !== "" && (o = `${e.key} ${o}`);
    }
    return o;
}
var ef = l(768570),
    em = l(676068);
function eg(e) {
    let { icon: t, label: l, sublabel: r, onSelect: s, navId: a, index: o, selected: i } = e;
    return (0, n.jsx)(K.D, {
        className: em.DB,
        onClick: function () {
            s({ searchAutocompleteSelectAction: ef.oi.CLICK, selectedIndex: o });
        },
        ...(function (e) {
            let { navId: t, index: l, selected: r } = e;
            return { id: `${t}-${l}`, role: "option", tabIndex: -1, "aria-selected": r };
        })({ navId: a, index: o, selected: i }),
        children: (0, n.jsxs)("div", {
            className: em.AS,
            children: [t, null == r ? l : (0, n.jsxs)("div", { children: [l, r] })],
        }),
    });
}
function ex(e) {
    let { label: t, className: l } = e;
    return (0, n.jsx)(G.E, { variant: "body-sm/medium", color: "text-strong", className: l, children: t });
}
function ep(e) {
    let { searchTokenType: t, answer: l } = e,
        r = P.Ay[t]?.key ?? "",
        s = l ?? (0, S.sh)(t);
    return (0, n.jsxs)("div", {
        className: em.Xq,
        children: [
            (0, n.jsx)(G.E, { variant: "body-sm/semibold", color: "text-subtle", children: r }),
            (0, n.jsx)(G.E, { variant: "body-sm/medium", color: "text-muted", children: s }),
        ],
    });
}
function eS(e) {
    let t = (0, S.E3)(e);
    return (0, n.jsxs)("div", {
        className: em.aT,
        children: [
            (0, n.jsx)(es.A, { channel: e, avatarSize: U._3.SIZE_16, iconClassName: em.er, iconSize: "xs" }),
            (0, n.jsx)(G.E, { variant: "body-sm/semibold", color: "text-strong", className: em.HA, children: t }),
        ],
    });
}
function ey(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(Z.m, {
        asContainer: !0,
        text: ec.intl.string(ec.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(K.D, {
            onClick: () => E.A.clearSearchHistory(t),
            className: em.Wf,
            title: ec.intl.string(ec.t.dwAvX1),
            "aria-label": ec.intl.string(ec.t.dwAvX1),
            children: (0, n.jsx)(V.TrashIcon, { size: "sm", color: "currentColor", className: em.f }),
        }),
    });
}
function eA(e) {
    let { title: t, showDivider: l, children: r } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            l && (0, n.jsx)("div", { className: em.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": `${t}-header`, className: em.jw, children: r }, t),
        ],
    });
}
function eE(e) {
    let { headerId: t, titleText: l, trailingIcon: r } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: em.x_,
        children: [(0, n.jsx)(G.E, { variant: "body-xs/semibold", color: "text-subtle", children: l }), r],
    });
}
function eb(e) {
    let { navId: t, item: l, startingIndex: r, selectedIndex: s } = e,
        a = r,
        { rows: o, title: i, trailingIcon: c } = l.data;
    return (0, n.jsxs)(eA, {
        title: i,
        showDivider: r > 0,
        children: [
            (0, n.jsx)(eE, { headerId: i, titleText: i, trailingIcon: c }),
            o.map((e) => {
                let { icon: r, label: o, sublabel: c, onSelect: u } = e.data,
                    d = s === a,
                    h = a;
                return (
                    (a += 1),
                    (0, n.jsx)(
                        eg,
                        { icon: r, label: o, sublabel: c, onSelect: u, navId: t, index: h, selected: d },
                        `${l.type}-${i}-${h}`,
                    )
                );
            }),
        ],
    });
}
function eI(e) {
    let { size: t, user: l, className: r } = e,
        s = (0, i.bG)([el.A], () => el.A.getGuildId()),
        a = (0, U.FT)(t);
    return (0, n.jsx)(X.eu, { size: t, src: l.getAvatarURL(s, a), "aria-label": l.username, className: r });
}
function eR(e) {
    let { user: t } = e,
        { selectedGuildId: l, selectedChannelId: r } = (0, i.cf)([el.A, g.Ay], () => {
            let e = el.A.getGuildId(),
                t = g.Ay.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        s = en.Ay.useName(l, r, t);
    return (0, n.jsx)(G.E, { variant: "body-sm/semibold", color: "text-default", children: s });
}
function eC(e) {
    let { value: t, avatarSize: l, iconSize: r } = e,
        s = "",
        a = (0, S._o)(t)
            .map((e, t, l) => (ei.l90.test(e.type) || (0, S.Zh)(e, l[t + 1]) ? e : new eo.ou(e.getFullMatch(), eo.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                s += a;
                let o = ei.l90.test(e.type),
                    i = ei.T2E.test(e.type),
                    c = `${e.type}-${a}-${t}`;
                if (i)
                    switch (e.type) {
                        case ei.LWr.ANSWER_USERNAME_FROM:
                        case ei.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, n.jsx)(ej, { token: e, avatarSize: l }, c);
                        case ei.LWr.ANSWER_IN:
                            return (0, n.jsx)(eL, { token: e, avatarSize: l, iconSize: r }, c);
                        default:
                            return (0, n.jsx)(eT, { text: a, className: em.Mj }, c);
                    }
                return (0, n.jsx)(eT, { text: a, className: o ? em._y : em.Lc }, c);
            });
    return { label: (0, n.jsx)("div", { className: em.fH, children: a }), ariaLabel: s };
}
function eT(e) {
    let { text: t, className: l } = e;
    return (0, n.jsx)(G.E, { variant: "body-sm/semibold", color: "text-strong", className: l, children: t });
}
function ej(e) {
    let { token: t, avatarSize: l } = e,
        r = t.getFullMatch(),
        s = t.getData("userId"),
        a = (0, i.bG)([er.default], () => er.default.getUser(s));
    return null == a
        ? (0, n.jsx)(eT, { text: r, className: em.Mj })
        : (0, n.jsxs)("div", {
              className: em.Mj,
              children: [
                  (0, n.jsx)(eI, { size: l, user: a }),
                  (0, n.jsx)(G.E, { variant: "body-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function eL(e) {
    let { token: t, avatarSize: l, iconSize: r } = e,
        s = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        o = (0, i.bG)([f.A], () => f.A.getChannel(a[0]));
    if (null == o) return (0, n.jsx)(eT, { text: s, className: em.Mj });
    let c = (0, S.E3)(o);
    return (0, n.jsxs)("div", {
        className: T()(em.Mj, em.JG),
        children: [
            (0, n.jsx)(es.A, { channel: o, avatarSize: l, iconClassName: em.Wh, iconSize: r }),
            (0, n.jsx)(G.E, { variant: "body-sm/semibold", color: "text-strong", children: c }),
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
    eO = l(73153);
let ek = ef.nC,
    eM = !1,
    eP = {};
class eW extends i.Ay.Store {
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
let ew = new eW(eO.h, {
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
                    let { icon: t, label: a, onSelect: o } = e.data,
                        i = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            eg,
                            { icon: t, label: a, onSelect: o, navId: l, index: i, selected: r === i },
                            `${e.type}-${i}`,
                        )
                    );
                case eN.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = s;
                    return (
                        (s += c.length),
                        (0, n.jsx)(
                            eb,
                            { navId: l, item: e, startingIndex: d, selectedIndex: r },
                            `${e.type}--${u}-${d}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
function eq(e) {
    let { searchContext: t, navId: l, resultsState: r, onSelectedIndexChanged: a, selectedChannel: o, ref: c } = e,
        [u, d] = s.useState(-1),
        h = s.useCallback(
            (e) => {
                (d(e), a(e));
                let t = document.getElementById(`${l}-${e}`);
                null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
            },
            [l, a],
        ),
        f = s.useCallback(
            (e) => {
                let { query: t, performSearch: l, replace: n } = e;
                (b.A.setSearchQuery({
                    query: t,
                    performSearch: l,
                    replace: n,
                    resultsState: r,
                    searchQuerySource: ef.Q_.SEARCH_POPOUT,
                }),
                    h(-1));
            },
            [r, h],
        ),
        { items: m, itemsData: x } = (function (e) {
            let { resultsState: t, searchContext: l, selectedChannel: r, setSearchQuery: a } = e,
                { autocompletes: o, mode: c } = t,
                u = (function (e) {
                    let { autocompletes: t, mode: l } = e;
                    return s.useCallback(
                        (e) => {
                            let { getAutocompleteRowItem: r, getAutocompleteGroupItem: n } = e,
                                s = 0,
                                a = [],
                                o = [];
                            for (let e of t) {
                                let t = [],
                                    { group: i, results: c } = e;
                                if (e.results.length > 0) {
                                    for (let e of c) {
                                        let n = r({ result: e, modeType: l.type, group: i });
                                        t.push(n);
                                    }
                                    s += c.length;
                                    let e = n({ group: i, rows: t });
                                    (a.push(e), o.push(...t));
                                }
                            }
                            return { autocompleteCount: s, autocompleteGroups: a, allAutocompleteRows: o };
                        },
                        [t, l.type],
                    );
                })({ autocompletes: o, mode: c }),
                d = (function (e) {
                    let { setSearchQuery: t, searchContext: l, mode: r } = e,
                        a = (0, eD.o)(l);
                    return s.useMemo(() => {
                        let e = [
                            {
                                type: ei.LWr.FILTER_FROM,
                                isEligible: a.has(ei.LWr.FILTER_FROM),
                                icon: ee.UserIcon,
                                label: ec.intl.string(ec.t.ktr6z5),
                            },
                            {
                                type: ei.LWr.FILTER_IN,
                                isEligible: a.has(ei.LWr.FILTER_IN),
                                icon: J.N,
                                label: ec.intl.string(ec.t.VMjDvS),
                            },
                            {
                                type: ei.LWr.FILTER_HAS,
                                isEligible: a.has(ei.LWr.FILTER_HAS),
                                icon: eH.P,
                                label: ec.intl.string(ec.t.IhIpc7),
                            },
                            {
                                type: ei.LWr.FILTER_MENTIONS,
                                isEligible: a.has(ei.LWr.FILTER_MENTIONS),
                                icon: et.X,
                                label: ec.intl.string(ec.t.fpKv9Y),
                            },
                        ];
                        return e
                            .filter((e) => e.isEligible)
                            .map((s) => {
                                let { icon: a, label: o, type: i } = s;
                                return eu(eN.ROW, {
                                    icon: (0, n.jsx)(a, { size: "sm", color: "currentColor", className: em.Fx }),
                                    label: (0, n.jsx)(ex, { label: o }),
                                    sublabel: (0, n.jsx)(ep, { searchTokenType: i }),
                                    onSelect: function (n) {
                                        let { selectedIndex: s, searchAutocompleteSelectAction: a } = n,
                                            o = P.Ay[i]?.key ?? "",
                                            c = (0, S.bS)(l);
                                        ((0, R.kc)({
                                            searchContext: l,
                                            searchQuery: W.A.getSearchResultsQuery(c),
                                            searchQueryString: b.A.getSearchInputText(l),
                                            searchTokenType: i,
                                            searchAutocompleteGroup: i,
                                            searchAutocompleteMode: r,
                                            searchAutocompleteResultIndex: s - 1,
                                            searchAutocompleteTotalResults: e.length,
                                            isSearchFilterPrefix: !0,
                                            isSearchFilterAnswer: !1,
                                            isSearchFilterComplete: !1,
                                            isInFilterForSelectedChannel: !1,
                                            searchAutocompleteSelectAction: a,
                                        }),
                                            t({ query: `${o} `, performSearch: !1, replace: !1 }));
                                    },
                                });
                            });
                    }, [a, l, r, t]);
                })({ setSearchQuery: a, searchContext: l, mode: c }),
                h = (0, i.yK)([B.A, g.Ay, ew], () => {
                    if (B.A.hidePersonalInformation) return eQ;
                    let e = (0, S.Jl)(l, g.Ay);
                    if (null == e) return eQ;
                    let t = ew.getHistory(e);
                    if (null == t) return eQ;
                    let r = new Set(),
                        n = [];
                    return (
                        t.forEach((e) => {
                            let t = l.type === ei.I4_.CHANNEL ? (0, S.EH)(e) : e;
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
                    o = c.type,
                    i = c.filter,
                    { token: u, group: d } = s,
                    h = null != d && (0, P.If)(d) ? d : null,
                    f = u ?? i ?? h,
                    m = s.channel,
                    x = f === ei.LWr.FILTER_IN && null != m && m.id === g.Ay.getChannelId(),
                    p = (0, S.bS)(l);
                (0, R.kc)({
                    searchContext: l,
                    searchQuery: W.A.getSearchResultsQuery(p),
                    searchQueryString: b.A.getSearchInputText(l),
                    searchTokenType: f,
                    searchAutocompleteGroup: a,
                    searchAutocompleteMode: c,
                    searchAutocompleteResultIndex: r,
                    searchAutocompleteTotalResults: t,
                    isSearchFilterPrefix: o === ei.o$q.EMPTY,
                    isSearchFilterAnswer: o === ei.o$q.FILTER,
                    isSearchFilterComplete: o === ei.o$q.FILTER_ALL,
                    isInFilterForSelectedChannel: x,
                    searchAutocompleteSelectAction: n,
                });
            }
            let m = s.useCallback(
                    (e) => {
                        let { hasOtherSearchFiltersVisible: t } = e,
                            r = t ? ec.intl.string(ec.t.diOL4i) : ec.intl.string(ec.t["M1tf+7"]);
                        return eu(eN.ROW, {
                            icon: (0, n.jsx)($.R, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: em.Fx,
                            }),
                            label: (0, n.jsx)(ex, { label: r }),
                            sublabel: t
                                ? (0, n.jsx)(G.E, {
                                      variant: "body-sm/medium",
                                      color: "text-muted",
                                      children: ec.intl.string(ec.t["1axf1T"]),
                                  })
                                : void 0,
                            onSelect: () => b.A.openSearchFiltersModal(l),
                        });
                    },
                    [l],
                ),
                x = (0,
                {
                    [ei.o$q.EMPTY]: () => {
                        let e = [];
                        if (null != r && (0, Y.HM)(l) && l.type === ei.I4_.DMS) {
                            let t = eS(r),
                                s = eu(eN.ROW, {
                                    icon: (0, n.jsx)(q.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: em.Fx,
                                    }),
                                    label: (0, n.jsx)(ex, {
                                        label: ec.intl.format(ec.t["VGEH/0"], { channelName: t }),
                                        className: em.YL,
                                    }),
                                    onSelect: (e) => {
                                        let { searchAutocompleteSelectAction: t } = e;
                                        return (function (e) {
                                            let { selectedChannel: t, searchAutocompleteSelectAction: r } = e;
                                            (0, R.rE)({ searchContext: l, searchAutocompleteSelectAction: r });
                                            let n = ei.LWr.FILTER_IN,
                                                s = P.Ay[n],
                                                o = (0, S.Rt)(t);
                                            a({
                                                query: `${s?.key ?? n.toString()} ${o}`,
                                                performSearch: !0,
                                                replace: !1,
                                            });
                                        })({ selectedChannel: r, searchAutocompleteSelectAction: t });
                                    },
                                });
                            e.push(s);
                        }
                        let t = m({ hasOtherSearchFiltersVisible: !0 }),
                            s = [...d, t];
                        if ((e.push(eu(eN.GROUP, { rows: s, title: ec.intl.string(ec.t.UdhTtk) })), h.length > 0)) {
                            let t = h.map((e, t) => {
                                    let { label: r, ariaLabel: s } = eC({
                                        value: e,
                                        avatarSize: U._3.SIZE_16,
                                        iconSize: "xs",
                                    });
                                    return eu(eN.ROW, {
                                        icon: (0, n.jsx)(q.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: em.Fx,
                                        }),
                                        label: r,
                                        ariaLabel: ec.intl.formatToPlainString(ec.t.WoiGrV, { suggestion: s }),
                                        resultText: e,
                                        onSelect: () => {
                                            ((0, R.oR)({
                                                searchContext: l,
                                                searchHistoryIndex: t,
                                                searchHistoryTotalResults: h.length,
                                            }),
                                                a({ query: e, performSearch: !0, replace: !1 }));
                                        },
                                    });
                                }),
                                r = eu(eN.GROUP, {
                                    rows: t,
                                    trailingIcon: (0, n.jsx)(ey, { searchContext: l }),
                                    title: ed(ei.x2k.HISTORY),
                                });
                            e.push(r);
                        }
                        return e;
                    },
                    [ei.o$q.FILTER_ALL]: () => {
                        let e = [];
                        if ("" !== t.query.trim()) {
                            let { label: l } = eC({ value: t.query, avatarSize: U._3.SIZE_16, iconSize: "xs" }),
                                r = eu(eN.ROW, {
                                    icon: (0, n.jsx)(q.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: em.Fx,
                                    }),
                                    label: (0, n.jsx)(ex, {
                                        label: ec.intl.format(ec.t.rCnaoo, { value: l }),
                                        className: em.YL,
                                    }),
                                    ariaLabel: ec.intl.formatToPlainString(ec.t.rCnaoo, { value: t.query }),
                                    onSelect: () =>
                                        (function (e) {
                                            let { searchEverywhere: t } = e;
                                            M._.dispatch(ei.jej.PERFORM_SEARCH, {
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
                                    o = eh({ modeType: r, result: t, group: s }),
                                    i = (function (e) {
                                        let { result: t, group: l } = e;
                                        switch (l) {
                                            case ei.x2k.HISTORY:
                                                return (0, n.jsx)(q.MagnifyingGlassIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: em.Fx,
                                                });
                                            case ei.LWr.FILTER_IN:
                                                return (0, n.jsx)(J.N, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: em.Fx,
                                                });
                                            case ei.LWr.FILTER_FROM:
                                                return (0, n.jsx)(ee.UserIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: em.Fx,
                                                });
                                            case ei.LWr.FILTER_MENTIONS:
                                                return (0, n.jsx)(et.X, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: em.Fx,
                                                });
                                            case ei.LWr.FILTER_HAS:
                                                return (0, n.jsx)(ev, { text: t.text, size: "sm", className: em.Fx });
                                            default:
                                                return null;
                                        }
                                    })({ result: t, group: s }),
                                    { label: c, ariaLabel: u } = (function (e) {
                                        let { channel: t, user: l, text: r } = e;
                                        return null != t
                                            ? {
                                                  label: (0, n.jsxs)("div", {
                                                      className: em.YL,
                                                      children: [
                                                          (0, n.jsx)(G.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-strong",
                                                              children: P.Ay[ei.LWr.FILTER_IN].key ?? "",
                                                          }),
                                                          eS(t),
                                                      ],
                                                  }),
                                                  ariaLabel: (0, S.E3)(t),
                                              }
                                            : null != l
                                              ? {
                                                    label: (0, n.jsxs)("div", {
                                                        className: em.YL,
                                                        children: [
                                                            (0, n.jsx)(eI, { size: U._3.SIZE_16, user: l }),
                                                            (0, n.jsx)(eR, { user: l }),
                                                        ],
                                                    }),
                                                    ariaLabel: l.username,
                                                }
                                              : { label: (0, n.jsx)(ex, { label: r }), ariaLabel: r };
                                    })(t),
                                    d =
                                        s === ei.LWr.FILTER_FROM || s === ei.LWr.FILTER_MENTIONS
                                            ? (0, n.jsx)(ep, { searchTokenType: s, answer: t.user?.username })
                                            : void 0;
                                return eu(eN.ROW, {
                                    icon: i,
                                    label: c,
                                    sublabel: d,
                                    ariaLabel: u,
                                    resultText: o,
                                    onSelect: function (e) {
                                        let { selectedIndex: r, searchAutocompleteSelectAction: n } = e;
                                        (f({
                                            selectedIndex: r,
                                            searchAutocompleteSelectAction: n,
                                            selectedAutocomplete: t,
                                            selectedAutocompleteGroup: s,
                                            autocompleteCount: l,
                                        }),
                                            a({ query: o, performSearch: !1, replace: !1 }));
                                    },
                                });
                            },
                            getAutocompleteGroupItem: (e) => {
                                let { group: t, rows: l } = e,
                                    r = ed(t);
                                return eu(eN.GROUP, { rows: l, title: r });
                            },
                        });
                        if (0 === l) {
                            let t = m({ hasOtherSearchFiltersVisible: !0 }),
                                l = [...d, t];
                            e.push(eu(eN.GROUP, { rows: l, title: ec.intl.string(ec.t.UdhTtk) }));
                        } else {
                            let t = m({ hasOtherSearchFiltersVisible: !1 });
                            e.push(t);
                        }
                        return (l > 0 && e.push(...r), e);
                    },
                    [ei.o$q.FILTER]: () => {
                        let { autocompleteCount: e, autocompleteGroups: t } = u({
                            getAutocompleteRowItem: (t) => {
                                let { result: l, modeType: r, group: s } = t,
                                    o = eh({ modeType: r, result: l, group: s }),
                                    i = (function (e) {
                                        let { result: t, group: l } = e,
                                            { channel: r, user: s } = t;
                                        return null != r
                                            ? (0, n.jsx)(es.A, {
                                                  channel: r,
                                                  avatarSize: U._3.SIZE_20,
                                                  iconClassName: em.Fx,
                                                  iconSize: "refresh_sm",
                                              })
                                            : null != s
                                              ? (0, n.jsx)(eI, { size: U._3.SIZE_20, user: s, className: em.Fx })
                                              : l === ei.LWr.FILTER_HAS
                                                ? (0, n.jsx)(ev, { size: "sm", text: t.text, className: em.Fx })
                                                : l === ei.LWr.FILTER_AUTHOR_TYPE
                                                  ? (0, n.jsx)(e_, { size: "sm", text: t.text, className: em.Fx })
                                                  : null;
                                    })({ result: l, group: s }),
                                    { label: c, ariaLabel: u } = (function (e) {
                                        let { channel: t, user: l, text: r } = e;
                                        if (null != t) {
                                            let e = (0, S.E3)(t);
                                            return {
                                                label: (0, n.jsx)(G.E, {
                                                    variant: "body-sm/semibold",
                                                    color: "text-strong",
                                                    children: e,
                                                }),
                                                ariaLabel: (0, S.E3)(t),
                                            };
                                        }
                                        return null != l
                                            ? {
                                                  label: (0, n.jsxs)("div", {
                                                      className: em.YL,
                                                      children: [
                                                          (0, n.jsx)(eR, { user: l }),
                                                          (0, n.jsx)(G.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-subtle",
                                                              children: l.username,
                                                          }),
                                                      ],
                                                  }),
                                                  ariaLabel: l.username,
                                              }
                                            : { label: (0, n.jsx)(ex, { label: r }), ariaLabel: r };
                                    })(l);
                                return eu(eN.ROW, {
                                    icon: i,
                                    label: c,
                                    ariaLabel: u,
                                    resultText: o,
                                    onSelect: function (t) {
                                        let { selectedIndex: r, searchAutocompleteSelectAction: n } = t;
                                        (f({
                                            selectedIndex: r,
                                            searchAutocompleteSelectAction: n,
                                            selectedAutocomplete: l,
                                            selectedAutocompleteGroup: s,
                                            autocompleteCount: e,
                                        }),
                                            a({ query: o, performSearch: !0, replace: !1 }));
                                    },
                                });
                            },
                            getAutocompleteGroupItem: (e) => {
                                let { group: t, rows: l } = e,
                                    r = ed(t);
                                return eu(eN.GROUP, { rows: l, title: r });
                            },
                        });
                        return [...t];
                    },
                }[c.type])(),
                p = s.useMemo(() => {
                    let e = [];
                    return (
                        x.forEach((t) => {
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
                }, [x]);
            return { items: x, itemsData: p };
        })({ resultsState: r, searchContext: t, selectedChannel: o, setSearchQuery: f });
    function p(e) {
        let { newSelectedIndex: t, searchAutocompleteSelectAction: l } = e,
            r = t;
        return (
            null == r && (r = u),
            !(r < 0) &&
                !(r > x.length - 1) &&
                (x[r].data.onSelect({ searchAutocompleteSelectAction: l, selectedIndex: r }), !0)
        );
    }
    function y(e) {
        let t;
        ((t = u + e) > x.length - 1 ? (t = 0) : t < 0 && (t = x.length - 1), h(t));
    }
    let A = s.useRef({ itemsData: [], selectedIndex: -1, modeType: r.mode.type, query: r.query });
    s.useEffect(() => {
        let { itemsData: e, selectedIndex: t, modeType: l, query: n } = A.current,
            s = r.mode.type,
            a = r.query;
        if (s !== l) s === ei.o$q.FILTER ? h(0) : h(-1);
        else if (s === ei.o$q.FILTER && r.query !== n && x.length > 0) h(0);
        else if (s === ei.o$q.FILTER && 0 === e.length && x.length > 0) h(0);
        else if (t >= 0 && (t === u || e.length !== x.length)) {
            let l = e[t],
                r = l?.data.resultText;
            if (null != r) {
                let e = x.findIndex((e) => e.data.resultText === r);
                -1 !== e ? h(e) : t >= x.length && h(Math.max(0, x.length - 1));
            } else t >= x.length && h(Math.max(0, x.length - 1));
        }
        A.current = { itemsData: x, selectedIndex: u, modeType: s, query: a };
    }, [x, u, r.mode.type, r.query, h]);
    let E = s.useRef(null),
        I = r.query;
    return (
        s.useEffect(() => {
            if ("" === I) {
                E.current = null;
                return;
            }
            let e = x.length;
            E.current !== e &&
                ((E.current = e), v.O.announce(ec.intl.formatToPlainString(ec.t.ZGVL3g, { count: e }), "polite"));
        }, [x.length, I]),
        s.useImperativeHandle(c, () => ({
            selectedIndex: u,
            focusNextOption: () => {
                y(1);
            },
            focusPreviousOption: () => {
                y(-1);
            },
            selectOption: p,
        })),
        (0, n.jsx)(D.d_, {
            onMouseDown: function (e) {
                (e.stopPropagation(), e.preventDefault());
            },
            role: "listbox",
            id: l,
            tabIndex: -1,
            "aria-activedescendant": `${l}-${u}`,
            className: m.length > 0 ? ez.kL : void 0,
            children: (0, n.jsx)(eG, { items: m, navId: l, selectedIndex: u }),
        })
    );
}
function eU(e) {
    let { navId: t, resultsState: l, searchContext: r, ref: a } = e;
    return (
        s.useImperativeHandle(a, () => ({
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
            id: t,
            tabIndex: -1,
            "aria-activedescendant": `${t}--1`,
            className: T()(ez.kL, ez.Wl),
            children: (0, n.jsx)(Q.CalendarPicker, {
                onSelect: function (e) {
                    let t = (0, S.bS)(r);
                    ((0, R.kc)({
                        searchContext: r,
                        searchQuery: W.A.getSearchResultsQuery(t),
                        searchQueryString: b.A.getSearchInputText(r),
                        searchTokenType: l.mode.filter,
                        searchAutocompleteGroup: ei.x2k.DATES,
                        searchAutocompleteMode: l.mode,
                        isSearchFilterPrefix: !1,
                        isSearchFilterAnswer: !0,
                        isSearchFilterComplete: !1,
                        searchAutocompleteSelectAction: ef.oi.CLICK,
                    }),
                        b.A.setSearchQuery({
                            query: e.format(ei.ump) + " ",
                            performSearch: !0,
                            replace: !1,
                            resultsState: l,
                            searchQuerySource: ef.Q_.SEARCH_POPOUT,
                        }));
                },
                maxDate: H()().local(),
                minDate: e$,
                calendarClassName: ez.BJ,
            }),
        })
    );
}
let eB = function (e) {
    let { searchContext: t, navId: l, onSelectedIndexChanged: r, ref: s } = e,
        [a, o] = (0, i.yK)([z.A, g.Ay, f.A], () => {
            let e = z.A.getState(t),
                l = g.Ay.getChannelId();
            return [e, f.A.getChannel(l)];
        });
    return (0, S.av)(a.mode.filter)
        ? (0, n.jsx)(eU, { navId: l, resultsState: a, searchContext: t })
        : (0, n.jsx)(eq, {
              ref: s,
              searchContext: t,
              navId: l,
              onSelectedIndexChanged: r,
              resultsState: a,
              selectedChannel: o,
          });
};
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
    return W.A.getQueryText(e) ?? "";
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
function e7(e) {
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
function e9(e) {
    return (0, n.jsx)(eZ, { ...e });
}
function e2(e) {
    let { children: t, attributes: l } = e;
    return (0, n.jsx)("span", { ...l, style: { ...l.style, opacity: 1 }, children: t });
}
let e3 = s.memo(function (e) {
    let {
        editor: t,
        initialValue: l,
        placeholder: r,
        navId: s,
        isShown: a,
        onChange: o,
        onKeyDown: i,
        onFocus: c,
        onBlur: u,
    } = e;
    return (0, n.jsx)(L.A, {
        editor: t,
        value: l,
        onChange: o,
        children: (0, n.jsx)(L.Fo, {
            className: eX.E,
            style: e6,
            placeholder: r,
            decorate: e7,
            renderLeaf: e9,
            renderPlaceholder: e2,
            onKeyDown: i,
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
            keyboardModeEnabled: o,
            onSearch: c,
            placeholder: u,
        } = e,
        d = (0, S.bS)(l),
        h = e1(d),
        [m] = s.useState(() => {
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
            return ((e.children = [{ type: "line", children: [{ text: h }] }]), (e.selection = null), e);
        }),
        [p] = s.useState(() => [...m.children]),
        [y, I] = s.useState(!1),
        [C, k] = s.useState(() => h.length > 0),
        w = s.useRef(null),
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
        $ = s.useCallback(() => j.bP.string(m), [m]),
        G = s.useCallback(() => {
            Promise.resolve().then(() => {
                (null == m.selection && j.gB.select(m, j.KE.end(m, [])), L.rL.focus(m));
            });
        }, [m]),
        q = s.useCallback(() => {
            Promise.resolve().then(() => L.rL.blur(m));
        }, [m]),
        U = s.useCallback(() => {
            b.A.cleanUpSearchState(l);
        }, [l]),
        B = s.useCallback(
            (e) => {
                if (!Q.current) return;
                let t = e?.relatedTarget,
                    r = document.getElementById(eJ);
                (null != t && null != r && r.contains(t)) ||
                    (A.A.setFocused(l, !1), I(!1), 0 === $().length && 0 === e1(d).length && U());
            },
            [U, d, $, l],
        ),
        Y = s.useCallback(
            (e) => {
                (j.KE.withoutNormalizing(m, () => {
                    (j.gB.select(m, { anchor: j.KE.start(m, []), focus: j.KE.end(m, []) }),
                        j.gB.delete(m),
                        j.gB.insertText(m, e.replace(/\n/g, "").slice(0, 512)));
                }),
                    j.gB.select(m, j.KE.end(m, [])));
            },
            [m],
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
            !z.current && L.rL.isFocused(m) && I(!0);
            let e = $();
            (k(e.length > 0), E.A.updateSearchQueryText(l, e));
            let t = (0, S._o)(e),
                { selection: r } = m,
                n = null != r ? j.Q6.end(r).offset : e.length,
                s = null != r ? j.Q6.start(r).offset : e.length,
                a = (0, S.zZ)(t, n, s);
            (x.A.updateAutocompleteQuery({ searchContext: l, tokens: t, cursorScope: a, queryString: e }),
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
                })(m));
        }, [m, $, l]),
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
                        if (o) return;
                        (e.stopPropagation(), (0, O.uS)());
                        return;
                }
            },
            [q, $, V, o, Y],
        ),
        J = s.useCallback(
            (e) => {
                let { query: t, anchor: l, focus: r, performSearch: n, replace: s, searchQuerySource: a } = e,
                    o = $();
                (" " !== t.charAt(t.length - 1) && (t += " "),
                    null != l && 0 !== l && " " !== o.charAt(l - 1) && " " !== t.charAt(0) && (t = " " + t),
                    (t = t.replace(/\n/g, "")),
                    (z.current = !0));
                try {
                    (!0 !== n && L.rL.focus(m),
                        !0 === s
                            ? Y(t)
                            : null != l
                              ? (j.gB.select(m, { anchor: e0(m, l), focus: e0(m, r ?? l) }),
                                j.gB.insertText(m, t.slice(0, 512)))
                              : j.gB.insertText(m, t),
                        !0 !== n && I(!0),
                        !0 === n && K({ queryString: $(), searchQuerySource: a }));
                } finally {
                    Promise.resolve().then(() => {
                        z.current = !1;
                    });
                }
            },
            [m, $, Y, K],
        ),
        ee = s.useCallback(
            (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!0 !== t) return void G();
                let r = f.A.getChannel(g.Ay.getChannelId()),
                    n = null != r ? (0, S.Rt)(r) : null;
                null == r || (r.isPrivate() && l.type !== ei.I4_.DMS) || r.isObfuscated() || null == n
                    ? G()
                    : ((0, R.Tf)({ searchContext: l }),
                      Promise.resolve().then(() => {
                          (L.rL.focus(m),
                              J({
                                  query: P.Ay[ei.LWr.FILTER_IN].key + `${n} `,
                                  replace: !0,
                                  searchQuerySource: ef.Q_.SEARCH_TEXT_INPUT,
                              }));
                      }));
            },
            [m, G, J, l],
        );
    s.useEffect(() => {
        (0, S.Pe)();
    }, [l]);
    let et = (0, i.bG)([W.A], () => W.A.getQueryText(d) ?? "");
    (s.useEffect(() => {
        j.bP.string(m) !== et && Y(et);
    }, [et, m, Y]),
        s.useEffect(() => {
            let { selection: e } = m;
            if (null == e) return;
            let t = j.bP.string(m).length;
            (j.Q6.start(e).offset > t || j.Q6.end(e).offset > t) && j.gB.deselect(m);
        }, [d, m]));
    let el = (0, i.bG)([W.A], () => W.A.getIsSearchTokensInitialized());
    (s.useEffect(() => {
        el && m.onChange();
    }, [m, el]),
        s.useEffect(
            () => (
                M._.subscribe(ei.jej.PERFORM_SEARCH, K),
                M._.subscribe(ei.jej.SET_SEARCH_QUERY, J),
                M._.subscribe(ei.jej.FOCUS_SEARCH, ee),
                () => {
                    (M._.unsubscribe(ei.jej.PERFORM_SEARCH, K),
                        M._.unsubscribe(ei.jej.SET_SEARCH_QUERY, J),
                        M._.unsubscribe(ei.jej.FOCUS_SEARCH, ee));
                }
            ),
            [ee, J, K],
        ));
    let er = s.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), 0 === $().length)
                    ? G()
                    : (Y(""), (0, R.iK)({ searchContext: l }), U(), y || q());
            },
            [q, U, y, G, $, Y, l],
        ),
        en = s.useCallback(
            (e) => {
                let t = L.rL.toDOMNode(m, m);
                null != e
                    ? t.setAttribute("aria-activedescendant", `${eJ}-${e}`)
                    : t.removeAttribute("aria-activedescendant");
            },
            [m],
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
        eo = s.useCallback(() => {
            (L.rL.toDOMNode(m, m).removeAttribute("aria-activedescendant"),
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
                })(m),
                I(!0),
                A.A.setFocused(l, !0),
                v.O.announce(ec.intl.string(ec.t["5h0QOP"])));
        }, [m, l]),
        eu = u ?? ec.intl.string(ec.t["5h0QOP"]);
    return (0, n.jsx)(_.Y, {
        targetElementRef: w,
        renderPopout: ea,
        position: "bottom",
        animation: _.Y.Animation.NONE,
        shouldShow: y,
        autoInvert: !1,
        children: (e, r) => {
            let { isShown: s } = r;
            return (0, n.jsx)("div", {
                className: t,
                ref: w,
                children: (0, n.jsx)("div", {
                    className: T()(eV.$P, { [eV.ho]: C || y, [eV.in]: y }),
                    children: (0, n.jsx)(N.vN, {
                        ringTarget: H,
                        children: (0, n.jsxs)(
                            "div",
                            {
                                className: T()(eV.ON, eX.O),
                                ref: H,
                                children: [
                                    (0, n.jsx)(e3, {
                                        editor: m,
                                        initialValue: p,
                                        placeholder: eu,
                                        navId: eJ,
                                        isShown: s,
                                        onChange: Z,
                                        onKeyDown: X,
                                        onFocus: eo,
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
let te = o()(b.A.fetchMessages, 500);
function tt(e) {
    let { searchContext: t, className: l } = e,
        r = (0, S.bS)(t),
        a = (0, i.bG)([u.Ay], () => u.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        x.A.initializeAutocomplete(t);
    }, [t]),
        s.useEffect(
            () => (
                d.A.setSelectedSearchContext(r),
                () => {
                    d.A.setSelectedSearchContext(null);
                }
            ),
            [r],
        ));
    let { isSearching: o, hasResults: b } = (0, i.cf)([p.A], () => {
            let e = p.A.getTotalCount(r);
            return { hasResults: null != e && e > 0, isSearching: p.A.getIsFetching(r) };
        }),
        I = (0, i.bG)([h.Ay, g.Ay, f.A], () => {
            let e = g.Ay.getCurrentlySelectedChannelId(),
                t = f.A.getChannel(e);
            return h.Ay.getSection(e, t?.isDM()) === ei.YvQ.SEARCH;
        });
    s.useEffect(() => {
        A.A.setSidebarOpen(t, I);
    }, [t, I]);
    let C = (0, c.Ry)(e4.b);
    s.useEffect(() => {
        A.A.setFiltersModalOpen(t, C);
    }, [t, C]);
    let T = s.useCallback(
            (e) => {
                let { queryString: l, query: r, searchEverywhere: n, searchQuerySource: s } = e;
                (A.A.refreshQueryId(t),
                    (0, R.fd)({ searchContext: t, query: r, queryString: l, searchQuerySource: s }),
                    E.A.updateSearchMode(t, ei.BBH.NEWEST),
                    te({ searchContext: t, searchQueryString: l, searchEverywhere: n, offset: 0 }));
            },
            [t],
        ),
        j = (0, i.bG)([m.A, f.A], () => {
            let e = (0, y._)(t) ? t.guildId : null;
            if (null != e) {
                let t = m.A.getGuild(e);
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
                t.type === ei.I4_.DMS
                    ? ec.intl.string(ec.t.m7OrlR)
                    : null != j
                      ? ec.intl.formatToPlainString(ec.t.LDZtFO, { name: j })
                      : ec.intl.string(ec.t["5h0QOP"]),
            [t.type, j],
        );
    return (0, n.jsx)(e8, {
        className: l,
        searchContext: t,
        isSearching: o,
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
