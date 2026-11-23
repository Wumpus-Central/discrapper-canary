(l.r(t), l.d(t, { Search: () => ti, default: () => to }));
var r,
    n = l(477900),
    s = l(582128),
    a = l(64015),
    i = l.n(a),
    o = l(855986),
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
    b = l(616252),
    E = l(753806),
    I = l(775427),
    R = l(145331);
l(321073);
var T = l(503698),
    j = l.n(T),
    C = l(719442),
    v = l(235599),
    L = l(765178),
    N = l(265872),
    _ = l(559106),
    F = l(884496),
    O = l(955572),
    M = l(915089),
    k = l(188567),
    P = l(224467),
    W = l(65600),
    w = l(536637),
    H = l.n(w),
    D = l(95362),
    Q = l(939538),
    z = l(692986),
    $ = l(783977),
    q = l(834730),
    G = l(7689),
    U = l(778712),
    B = l(705912),
    Y = l(133986),
    K = l(894880),
    Z = l(624018),
    V = l(351906),
    X = l(5990),
    J = l(939249),
    ee = l(676068);
function et(e) {
    let { icon: t, label: l, sublabel: r, onClick: s, itemProps: a } = e;
    return (0, n.jsx)(J.D, {
        className: ee.DB,
        onClick: s,
        ...a,
        children: (0, n.jsxs)("div", {
            className: ee.AS,
            children: [t, null == r ? l : (0, n.jsxs)("div", { children: [l, r] })],
        }),
    });
}
var el = l(866665),
    er = l(241326),
    en = l(97808),
    es = l(276293),
    ea = l(950305),
    ei = l(935063),
    eo = l(114212),
    ec = l(967198),
    eu = l(287809),
    ed = l(562153),
    eh = l(315059),
    ef = l(121806),
    em = l(988665),
    eg = l(652215),
    ex = l(792996);
function ep(e, t) {
    return { type: e, data: t };
}
function eS(e) {
    switch (e) {
        case eg.x2k.HISTORY:
            return ex.intl.string(ex.t.tSZd5c);
        case eg.LWr.FILTER_FROM:
            return ex.intl.string(ex.t.catERA);
        case eg.LWr.FILTER_MENTIONS:
            return ex.intl.string(ex.t["l3K4B/"]);
        case eg.LWr.FILTER_IN:
            return ex.intl.string(ex.t.vHyCgl);
        case eg.LWr.FILTER_HAS:
            return ex.intl.string(ex.t.IC7gHM);
        default:
            return "";
    }
}
function ey(e) {
    let { modeType: t, result: l, group: r } = e,
        { text: n, channel: s, group: a } = l,
        i = n;
    if ((null != s && (i = (0, S.TZ)(i)), t === eg.o$q.FILTER_ALL)) {
        let e = P.Ay[a ?? r];
        e?.key != null && e?.key !== "" && (i = `${e.key} ${i}`);
    }
    return i;
}
var eA = l(768570);
function eb(e) {
    let { icon: t, label: l, sublabel: r, onSelect: s, navId: a, index: i, selected: o } = e;
    return (0, n.jsx)(et, {
        icon: t,
        label: l,
        sublabel: r,
        onClick: function () {
            s({ searchAutocompleteSelectAction: eA.oi.CLICK, selectedIndex: i });
        },
        itemProps: (function (e) {
            let { navId: t, index: l, selected: r } = e;
            return { id: `${t}-${l}`, role: "option", tabIndex: -1, "aria-selected": r };
        })({ navId: a, index: i, selected: o }),
    });
}
function eE(e) {
    let { label: t, className: l } = e;
    return (0, n.jsx)(q.E, { variant: "body-sm/medium", color: "text-strong", className: l, children: t });
}
function eI(e) {
    let { searchTokenType: t, answer: l } = e,
        r = P.Ay[t]?.key ?? "",
        s = l ?? (0, S.sh)(t);
    return (0, n.jsxs)("div", {
        className: ee.Xq,
        children: [
            (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-subtle", children: r }),
            (0, n.jsx)(q.E, { variant: "body-sm/medium", color: "text-muted", children: s }),
        ],
    });
}
function eR(e) {
    let t = (0, S.E3)(e);
    return (0, n.jsxs)("div", {
        className: ee.aT,
        children: [
            (0, n.jsx)(eh.A, { channel: e, avatarSize: U._3.SIZE_16, iconClassName: ee.er, iconSize: "xs" }),
            (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", className: ee.HA, children: t }),
        ],
    });
}
function eT(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(el.m, {
        asContainer: !0,
        text: ex.intl.string(ex.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(J.D, {
            onClick: () => b.A.clearSearchHistory(t),
            className: ee.Wf,
            title: ex.intl.string(ex.t.dwAvX1),
            "aria-label": ex.intl.string(ex.t.dwAvX1),
            children: (0, n.jsx)(er.TrashIcon, { size: "sm", color: "currentColor", className: ee.f }),
        }),
    });
}
function ej(e) {
    let { title: t, headerId: l, showDivider: r, children: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            r && (0, n.jsx)("div", { className: ee.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": l, className: ee.jw, children: s }, t),
        ],
    });
}
function eC(e) {
    let { headerId: t, titleText: l, trailingIcon: r } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: ee.x_,
        children: [(0, n.jsx)(q.E, { variant: "body-xs/semibold", color: "text-subtle", children: l }), r],
    });
}
function ev(e) {
    let { navId: t, item: l, startingIndex: r, selectedIndex: a } = e,
        i = s.useId(),
        o = r,
        { rows: c, title: u, trailingIcon: d, isLoading: h = !1 } = l.data;
    return (0, n.jsxs)(ej, {
        title: u,
        headerId: i,
        showDivider: r > 0,
        children: [
            (0, n.jsx)(eC, { headerId: i, titleText: u, trailingIcon: d }),
            h &&
                Array.from({ length: 3 }, (e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: ee.AS,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("div", {
                                    className: ee.Fx,
                                    children: (0, n.jsx)(eo.F, { width: 20, height: 20, className: ee.WX }),
                                }),
                                (0, n.jsx)("div", {
                                    className: ee.mQ,
                                    children: (0, n.jsx)(eo.F, { width: 160, height: 16, className: ee.WX }),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            c.map((e) => {
                let { icon: r, label: s, sublabel: i, onSelect: c } = e.data,
                    d = a === o,
                    h = o;
                return (
                    (o += 1),
                    (0, n.jsx)(
                        eb,
                        { icon: r, label: s, sublabel: i, onSelect: c, navId: t, index: h, selected: d },
                        `${l.type}-${u}-${h}`,
                    )
                );
            }),
        ],
    });
}
function eL(e) {
    let { size: t, user: l, className: r } = e,
        s = (0, o.bG)([ec.A], () => ec.A.getGuildId()),
        a = (0, U.FT)(t);
    return (0, n.jsx)(en.eu, { size: t, src: l.getAvatarURL(s, a), "aria-label": l.username, className: r });
}
function eN(e) {
    let { user: t } = e,
        { selectedGuildId: l, selectedChannelId: r } = (0, o.cf)([ec.A, g.Ay], () => {
            let e = ec.A.getGuildId(),
                t = g.Ay.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        s = ed.Ay.useName(l, r, t);
    return (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-default", children: s });
}
function e_(e) {
    let { value: t, avatarSize: l, iconSize: r } = e,
        s = "",
        a = (0, S._o)(t)
            .map((e, t, l) => (eg.l90.test(e.type) || (0, S.Zh)(e, l[t + 1]) ? e : new em.ou(e.getFullMatch(), em.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                s += a;
                let i = eg.l90.test(e.type),
                    o = eg.T2E.test(e.type),
                    c = `${e.type}-${a}-${t}`;
                if (o)
                    switch (e.type) {
                        case eg.LWr.ANSWER_USERNAME_FROM:
                        case eg.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, n.jsx)(eO, { token: e, avatarSize: l }, c);
                        case eg.LWr.ANSWER_IN:
                            return (0, n.jsx)(eM, { token: e, avatarSize: l, iconSize: r }, c);
                        default:
                            return (0, n.jsx)(eF, { text: a, className: ee.Mj }, c);
                    }
                return (0, n.jsx)(eF, { text: a, className: i ? ee._y : ee.Lc }, c);
            });
    return { label: (0, n.jsx)("div", { className: ee.fH, children: a }), ariaLabel: s };
}
function eF(e) {
    let { text: t, className: l } = e;
    return (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", className: l, children: t });
}
function eO(e) {
    let { token: t, avatarSize: l } = e,
        r = t.getFullMatch(),
        s = t.getData("userId"),
        a = (0, o.bG)([eu.default], () => eu.default.getUser(s));
    return null == a
        ? (0, n.jsx)(eF, { text: r, className: ee.Mj })
        : (0, n.jsxs)("div", {
              className: ee.Mj,
              children: [
                  (0, n.jsx)(eL, { size: l, user: a }),
                  (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function eM(e) {
    let { token: t, avatarSize: l, iconSize: r } = e,
        s = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        i = (0, o.bG)([f.A], () => f.A.getChannel(a[0]));
    if (null == i) return (0, n.jsx)(eF, { text: s, className: ee.Mj });
    let c = (0, S.E3)(i);
    return (0, n.jsxs)("div", {
        className: j()(ee.Mj, ee.JG),
        children: [
            (0, n.jsx)(eh.A, { channel: i, avatarSize: l, iconClassName: ee.Wh, iconSize: r }),
            (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", children: c }),
        ],
    });
}
function ek(e) {
    let { text: t, className: l, size: r } = e,
        s = (0, ef.KD)(t);
    return null != s ? (0, n.jsx)(s, { size: r, color: "currentColor", className: l }) : null;
}
function eP(e) {
    let { text: t, className: l, size: r } = e,
        s = (0, ef.Ht)(t);
    return null != s ? (0, n.jsx)(s, { size: r, color: "currentColor", className: l }) : null;
}
l(163839);
var eW = (((r = {}).ROW = "row"), (r.GROUP = "group"), r);
l(667532);
var ew = l(506774),
    eH = l(73153);
let eD = eA.nC,
    eQ = !1,
    ez = {};
class e$ extends o.Ay.Store {
    static displayName = eA.yQ;
    initialize() {
        var e;
        let t = ew.w.get(eD);
        (t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && "" !== e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
            }),
            (ez = e)),
            (eQ = !!ew.w.get("tokenized")));
    }
    isTokenized() {
        return eQ;
    }
    getHistory(e) {
        return ez[e];
    }
}
let eq = new e$(eH.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        (delete ez[t], ew.w.set(eA.nC, { history: ez }));
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: l } = e;
        null != ez[t] && ((ez[t] = ez[t].filter((e) => e !== l)), ew.w.set(eA.nC, { history: ez }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: l } = e;
        if ("string" != typeof l || "" === (l = l.trim())) return;
        let r = (ez[t] = ez[t] ?? []),
            n = r.indexOf(l);
        (-1 !== n
            ? (r.splice(n, 1), r.unshift(l))
            : null != r[0] && "" !== r[0] && l.startsWith(r[0])
              ? (r[0] = l)
              : r.unshift(l),
            r.length > 5 && r.splice(5, r.length),
            ew.w.set(eA.nC, { history: ez }));
    },
    LOGOUT: function () {
        (ew.w.remove(eA.nC), (ez = {}));
    },
});
var eG = l(588975),
    eU = l(674142);
let eB = [];
var eY = l(948914);
let eK = H()("2015-05-15").local();
function eZ(e) {
    let { items: t, navId: l, selectedIndex: r } = e,
        s = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case eW.ROW:
                    let { icon: t, label: a, onSelect: i } = e.data,
                        o = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            eb,
                            { icon: t, label: a, onSelect: i, navId: l, index: o, selected: r === o },
                            `${e.type}-${o}`,
                        )
                    );
                case eW.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = s;
                    return (
                        (s += c.length),
                        (0, n.jsx)(
                            ev,
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
function eV(e) {
    let { searchContext: t, navId: l, resultsState: r, onSelectedIndexChanged: a, selectedChannel: i, ref: c } = e,
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
                (E.A.setSearchQuery({
                    query: t,
                    performSearch: l,
                    replace: n,
                    resultsState: r,
                    searchQuerySource: eA.Q_.SEARCH_POPOUT,
                }),
                    h(-1));
            },
            [r, h],
        ),
        { items: m, itemsData: x } = (function (e) {
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
                d = (function (e) {
                    let { setSearchQuery: t, searchContext: l, mode: r } = e,
                        a = (0, eU.o)(l);
                    return s.useMemo(() => {
                        let e = [
                            {
                                type: eg.LWr.FILTER_FROM,
                                isEligible: a.has(eg.LWr.FILTER_FROM),
                                icon: ea.UserIcon,
                                label: ex.intl.string(ex.t.ktr6z5),
                            },
                            {
                                type: eg.LWr.FILTER_IN,
                                isEligible: a.has(eg.LWr.FILTER_IN),
                                icon: es.TextIcon,
                                label: ex.intl.string(ex.t.VMjDvS),
                            },
                            {
                                type: eg.LWr.FILTER_HAS,
                                isEligible: a.has(eg.LWr.FILTER_HAS),
                                icon: eG.AttachmentIcon,
                                label: ex.intl.string(ex.t.IhIpc7),
                            },
                            {
                                type: eg.LWr.FILTER_MENTIONS,
                                isEligible: a.has(eg.LWr.FILTER_MENTIONS),
                                icon: ei.AtIcon,
                                label: ex.intl.string(ex.t.fpKv9Y),
                            },
                        ];
                        return e
                            .filter((e) => e.isEligible)
                            .map((s) => {
                                let { icon: a, label: i, type: o } = s;
                                return ep(eW.ROW, {
                                    icon: (0, n.jsx)(a, { size: "sm", color: "currentColor", className: ee.Fx }),
                                    label: (0, n.jsx)(eE, { label: i }),
                                    sublabel: (0, n.jsx)(eI, { searchTokenType: o }),
                                    onSelect: function (n) {
                                        let { selectedIndex: s, searchAutocompleteSelectAction: a } = n,
                                            i = P.Ay[o]?.key ?? "",
                                            c = (0, S.bS)(l);
                                        ((0, R.kc)({
                                            searchContext: l,
                                            searchQuery: W.A.getSearchResultsQuery(c),
                                            searchQueryString: E.A.getSearchInputText(l),
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
                h = (0, B.fu)((0, S.mt)(l), "guild_suggestions"),
                f = s.useMemo(
                    () => (h && c.type === eg.o$q.EMPTY && "" === t.query.trim() ? (0, Z.W)(l, "") : null),
                    [h, c.type, t.query, l],
                ),
                { suggestedSearches: m, isLoadingSuggestedSearches: x } = (0, K.H)(f, { source: "guild_suggestions" });
            s.useLayoutEffect(() => {
                null != f && (0, Y.E)(f, A.A);
            }, [f]);
            let p = (0, o.yK)([V.A, g.Ay, eq], () => {
                if (V.A.hidePersonalInformation) return eB;
                let e = (0, S.Jl)(l, g.Ay);
                if (null == e) return eB;
                let t = eq.getHistory(e);
                if (null == t) return eB;
                let r = new Set(),
                    n = [];
                return (
                    t.forEach((e) => {
                        let t = l.type === eg.I4_.CHANNEL ? (0, S.EH)(e) : e;
                        "" === t || r.has(t) || (r.add(t), n.push(t));
                    }),
                    n
                );
            });
            function y(e) {
                let {
                        autocompleteCount: t,
                        selectedIndex: r,
                        searchAutocompleteSelectAction: n,
                        selectedAutocomplete: s,
                        selectedAutocompleteGroup: a,
                    } = e,
                    i = c.type,
                    o = c.filter,
                    { token: u, group: d } = s,
                    h = null != d && (0, P.If)(d) ? d : null,
                    f = u ?? o ?? h,
                    m = s.channel,
                    x = f === eg.LWr.FILTER_IN && null != m && m.id === g.Ay.getChannelId(),
                    p = (0, S.bS)(l);
                (0, R.kc)({
                    searchContext: l,
                    searchQuery: W.A.getSearchResultsQuery(p),
                    searchQueryString: E.A.getSearchInputText(l),
                    searchTokenType: f,
                    searchAutocompleteGroup: a,
                    searchAutocompleteMode: c,
                    searchAutocompleteResultIndex: r,
                    searchAutocompleteTotalResults: t,
                    isSearchFilterPrefix: i === eg.o$q.EMPTY,
                    isSearchFilterAnswer: i === eg.o$q.FILTER,
                    isSearchFilterComplete: i === eg.o$q.FILTER_ALL,
                    isInFilterForSelectedChannel: x,
                    searchAutocompleteSelectAction: n,
                });
            }
            let b = s.useCallback(
                    (e) => {
                        let { hasOtherSearchFiltersVisible: t } = e,
                            r = t ? ex.intl.string(ex.t.diOL4i) : ex.intl.string(ex.t["M1tf+7"]);
                        return ep(eW.ROW, {
                            icon: (0, n.jsx)($.FiltersHorizontalIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: ee.Fx,
                            }),
                            label: (0, n.jsx)(eE, { label: r }),
                            sublabel: t
                                ? (0, n.jsx)(q.E, {
                                      variant: "body-sm/medium",
                                      color: "text-muted",
                                      children: ex.intl.string(ex.t["1axf1T"]),
                                  })
                                : void 0,
                            onSelect: () => E.A.openSearchFiltersModal(l),
                        });
                    },
                    [l],
                ),
                I = (0,
                {
                    [eg.o$q.EMPTY]: () => {
                        let e = [];
                        if (null != r && (0, X.HM)(l) && l.type === eg.I4_.DMS) {
                            let t = eR(r),
                                s = ep(eW.ROW, {
                                    icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: ee.Fx,
                                    }),
                                    label: (0, n.jsx)(eE, {
                                        label: ex.intl.format(ex.t["VGEH/0"], { channelName: t }),
                                        className: ee.YL,
                                    }),
                                    onSelect: (e) => {
                                        let { searchAutocompleteSelectAction: t } = e;
                                        return (function (e) {
                                            let { selectedChannel: t, searchAutocompleteSelectAction: r } = e;
                                            (0, R.rE)({ searchContext: l, searchAutocompleteSelectAction: r });
                                            let n = eg.LWr.FILTER_IN,
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
                        let t = b({ hasOtherSearchFiltersVisible: !0 }),
                            s = [...d, t];
                        if (
                            (e.push(ep(eW.GROUP, { rows: s, title: ex.intl.string(ex.t.UdhTtk) })),
                            null != f && (m.length > 0 || x))
                        ) {
                            let t = m.map((e) => {
                                var t;
                                return ep(eW.ROW, {
                                    ...((t = e.suggestedSearchText),
                                    {
                                        icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: ee.Fx,
                                        }),
                                        label: (0, n.jsx)(q.E, {
                                            variant: "body-sm/medium",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t,
                                        }),
                                    }),
                                    ariaLabel: ex.intl.formatToPlainString(ex.t.WoiGrV, {
                                        suggestion: e.suggestedSearchText,
                                    }),
                                    resultText: e.suggestedSearchText,
                                    selectionId: `suggestion:${e.suggestionId}`,
                                    onSelect: () => {
                                        (a({ query: e.suggestedSearchText, performSearch: !0, replace: !0 }),
                                            (0, Y.A)(f, A.A, 3));
                                    },
                                });
                            });
                            e.push(
                                ep(eW.GROUP, {
                                    rows: t,
                                    title: ex.intl.string(ex.t.HbJ7eD),
                                    isLoading: x && 0 === m.length,
                                }),
                            );
                        }
                        if (p.length > 0) {
                            let t = p.map((e, t) => {
                                    let { label: r, ariaLabel: s } = e_({
                                        value: e,
                                        avatarSize: U._3.SIZE_16,
                                        iconSize: "xs",
                                    });
                                    return ep(eW.ROW, {
                                        icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: ee.Fx,
                                        }),
                                        label: r,
                                        ariaLabel: ex.intl.formatToPlainString(ex.t.WoiGrV, { suggestion: s }),
                                        resultText: e,
                                        selectionId: `history:${e}`,
                                        onSelect: () => {
                                            ((0, R.oR)({
                                                searchContext: l,
                                                searchHistoryIndex: t,
                                                searchHistoryTotalResults: p.length,
                                            }),
                                                a({ query: e, performSearch: !0, replace: !1 }));
                                        },
                                    });
                                }),
                                r = ep(eW.GROUP, {
                                    rows: t,
                                    trailingIcon: (0, n.jsx)(eT, { searchContext: l }),
                                    title: eS(eg.x2k.HISTORY),
                                });
                            e.push(r);
                        }
                        return e;
                    },
                    [eg.o$q.FILTER_ALL]: () => {
                        let e = [];
                        if ("" !== t.query.trim()) {
                            let { label: l } = e_({ value: t.query, avatarSize: U._3.SIZE_16, iconSize: "xs" }),
                                r = ep(eW.ROW, {
                                    icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: ee.Fx,
                                    }),
                                    label: (0, n.jsx)(eE, {
                                        label: ex.intl.format(ex.t.rCnaoo, { value: l }),
                                        className: ee.YL,
                                    }),
                                    ariaLabel: ex.intl.formatToPlainString(ex.t.rCnaoo, { value: t.query }),
                                    onSelect: () =>
                                        (function (e) {
                                            let { searchEverywhere: t } = e;
                                            k._.dispatch(eg.jej.PERFORM_SEARCH, {
                                                searchEverywhere: t,
                                                searchQuerySource: eA.Q_.SEARCH_POPOUT,
                                            });
                                        })({ searchEverywhere: !1 }),
                                });
                            e.push(r);
                        }
                        let { autocompleteCount: l, autocompleteGroups: r } = u({
                            getAutocompleteRowItem: (e) => {
                                let { result: t, modeType: r, group: s } = e,
                                    i = ey({ modeType: r, result: t, group: s }),
                                    o = (function (e) {
                                        let { result: t, group: l } = e;
                                        switch (l) {
                                            case eg.x2k.HISTORY:
                                                return (0, n.jsx)(G.MagnifyingGlassIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: ee.Fx,
                                                });
                                            case eg.LWr.FILTER_IN:
                                                return (0, n.jsx)(es.TextIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: ee.Fx,
                                                });
                                            case eg.LWr.FILTER_FROM:
                                                return (0, n.jsx)(ea.UserIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: ee.Fx,
                                                });
                                            case eg.LWr.FILTER_MENTIONS:
                                                return (0, n.jsx)(ei.AtIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: ee.Fx,
                                                });
                                            case eg.LWr.FILTER_HAS:
                                                return (0, n.jsx)(ek, { text: t.text, size: "sm", className: ee.Fx });
                                            default:
                                                return null;
                                        }
                                    })({ result: t, group: s }),
                                    { label: c, ariaLabel: u } = (function (e) {
                                        let { channel: t, user: l, text: r } = e;
                                        return null != t
                                            ? {
                                                  label: (0, n.jsxs)("div", {
                                                      className: ee.YL,
                                                      children: [
                                                          (0, n.jsx)(q.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-strong",
                                                              children: P.Ay[eg.LWr.FILTER_IN].key ?? "",
                                                          }),
                                                          eR(t),
                                                      ],
                                                  }),
                                                  ariaLabel: (0, S.E3)(t),
                                              }
                                            : null != l
                                              ? {
                                                    label: (0, n.jsxs)("div", {
                                                        className: ee.YL,
                                                        children: [
                                                            (0, n.jsx)(eL, { size: U._3.SIZE_16, user: l }),
                                                            (0, n.jsx)(eN, { user: l }),
                                                        ],
                                                    }),
                                                    ariaLabel: l.username,
                                                }
                                              : { label: (0, n.jsx)(eE, { label: r }), ariaLabel: r };
                                    })(t),
                                    d =
                                        s === eg.LWr.FILTER_FROM || s === eg.LWr.FILTER_MENTIONS
                                            ? (0, n.jsx)(eI, { searchTokenType: s, answer: t.user?.username })
                                            : void 0;
                                return ep(eW.ROW, {
                                    icon: o,
                                    label: c,
                                    sublabel: d,
                                    ariaLabel: u,
                                    resultText: i,
                                    onSelect: function (e) {
                                        let { selectedIndex: r, searchAutocompleteSelectAction: n } = e;
                                        (y({
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
                                    r = eS(t);
                                return ep(eW.GROUP, { rows: l, title: r });
                            },
                        });
                        if (0 === l) {
                            let t = b({ hasOtherSearchFiltersVisible: !0 }),
                                l = [...d, t];
                            e.push(ep(eW.GROUP, { rows: l, title: ex.intl.string(ex.t.UdhTtk) }));
                        } else {
                            let t = b({ hasOtherSearchFiltersVisible: !1 });
                            e.push(t);
                        }
                        return (l > 0 && e.push(...r), e);
                    },
                    [eg.o$q.FILTER]: () => {
                        let { autocompleteCount: e, autocompleteGroups: t } = u({
                            getAutocompleteRowItem: (t) => {
                                let { result: l, modeType: r, group: s } = t,
                                    i = ey({ modeType: r, result: l, group: s }),
                                    o = (function (e) {
                                        let { result: t, group: l } = e,
                                            { channel: r, user: s } = t;
                                        return null != r
                                            ? (0, n.jsx)(eh.A, {
                                                  channel: r,
                                                  avatarSize: U._3.SIZE_20,
                                                  iconClassName: ee.Fx,
                                                  iconSize: "refresh_sm",
                                              })
                                            : null != s
                                              ? (0, n.jsx)(eL, { size: U._3.SIZE_20, user: s, className: ee.Fx })
                                              : l === eg.LWr.FILTER_HAS
                                                ? (0, n.jsx)(ek, { size: "sm", text: t.text, className: ee.Fx })
                                                : l === eg.LWr.FILTER_AUTHOR_TYPE
                                                  ? (0, n.jsx)(eP, { size: "sm", text: t.text, className: ee.Fx })
                                                  : null;
                                    })({ result: l, group: s }),
                                    { label: c, ariaLabel: u } = (function (e) {
                                        let { channel: t, user: l, text: r } = e;
                                        if (null != t) {
                                            let e = (0, S.E3)(t);
                                            return {
                                                label: (0, n.jsx)(q.E, {
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
                                                      className: ee.YL,
                                                      children: [
                                                          (0, n.jsx)(eN, { user: l }),
                                                          (0, n.jsx)(q.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-subtle",
                                                              children: l.username,
                                                          }),
                                                      ],
                                                  }),
                                                  ariaLabel: l.username,
                                              }
                                            : { label: (0, n.jsx)(eE, { label: r }), ariaLabel: r };
                                    })(l);
                                return ep(eW.ROW, {
                                    icon: o,
                                    label: c,
                                    ariaLabel: u,
                                    resultText: i,
                                    onSelect: function (t) {
                                        let { selectedIndex: r, searchAutocompleteSelectAction: n } = t;
                                        (y({
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
                                    r = eS(t);
                                return ep(eW.GROUP, { rows: l, title: r });
                            },
                        });
                        return [...t];
                    },
                }[c.type])(),
                T = s.useMemo(() => {
                    let e = [];
                    return (
                        I.forEach((t) => {
                            switch (t.type) {
                                case eW.ROW:
                                    e.push(t);
                                    break;
                                case eW.GROUP:
                                    t.data.rows.forEach((t) => e.push(t));
                            }
                        }),
                        e
                    );
                }, [I]);
            return { items: I, itemsData: T };
        })({ resultsState: r, searchContext: t, selectedChannel: i, setSearchQuery: f });
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
    let b = s.useRef({ itemsData: [], selectedIndex: -1, modeType: r.mode.type, query: r.query });
    s.useEffect(() => {
        let { itemsData: e, selectedIndex: t, modeType: l, query: n } = b.current,
            s = r.mode.type,
            a = r.query;
        if (s !== l) s === eg.o$q.FILTER ? h(0) : h(-1);
        else if (s === eg.o$q.FILTER && r.query !== n && x.length > 0) h(0);
        else if (s === eg.o$q.FILTER && 0 === e.length && x.length > 0) h(0);
        else if (t >= 0 && (t === u || e.length !== x.length)) {
            let l = e[t],
                r = l?.data.selectionId ?? l?.data.resultText;
            if (null != r) {
                let e = x.findIndex((e) => (e.data.selectionId ?? e.data.resultText) === r);
                -1 !== e ? h(e) : s === eg.o$q.EMPTY ? h(-1) : t >= x.length && h(Math.max(0, x.length - 1));
            } else t >= x.length && h(Math.max(0, x.length - 1));
        }
        b.current = { itemsData: x, selectedIndex: u, modeType: s, query: a };
    }, [x, u, r.mode.type, r.query, h]);
    let I = s.useRef(null),
        T = r.query;
    return (
        s.useEffect(() => {
            if ("" === T) {
                I.current = null;
                return;
            }
            let e = x.length;
            I.current !== e &&
                ((I.current = e), L.O.announce(ex.intl.formatToPlainString(ex.t.ZGVL3g, { count: e }), "polite"));
        }, [x.length, T]),
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
            className: m.length > 0 ? eY.kL : void 0,
            children: (0, n.jsx)(eZ, { items: m, navId: l, selectedIndex: u }),
        })
    );
}
function eX(e) {
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
            className: j()(eY.kL, eY.Wl),
            children: (0, n.jsx)(Q.CalendarPicker, {
                onSelect: function (e) {
                    let t = (0, S.bS)(r);
                    ((0, R.kc)({
                        searchContext: r,
                        searchQuery: W.A.getSearchResultsQuery(t),
                        searchQueryString: E.A.getSearchInputText(r),
                        searchTokenType: l.mode.filter,
                        searchAutocompleteGroup: eg.x2k.DATES,
                        searchAutocompleteMode: l.mode,
                        isSearchFilterPrefix: !1,
                        isSearchFilterAnswer: !0,
                        isSearchFilterComplete: !1,
                        searchAutocompleteSelectAction: eA.oi.CLICK,
                    }),
                        E.A.setSearchQuery({
                            query: e.format(eg.ump) + " ",
                            performSearch: !0,
                            replace: !1,
                            resultsState: l,
                            searchQuerySource: eA.Q_.SEARCH_POPOUT,
                        }));
                },
                maxDate: H()().local(),
                minDate: eK,
                calendarClassName: eY.BJ,
            }),
        })
    );
}
let eJ = function (e) {
    let { searchContext: t, navId: l, onSelectedIndexChanged: r, ref: s } = e,
        [a, i] = (0, o.yK)([z.A, g.Ay, f.A], () => {
            let e = z.A.getState(t),
                l = g.Ay.getChannelId();
            return [e, f.A.getChannel(l)];
        });
    return (0, S.av)(a.mode.filter)
        ? (0, n.jsx)(eX, { navId: l, resultsState: a, searchContext: t })
        : (0, n.jsx)(eV, {
              ref: s,
              searchContext: t,
              navId: l,
              onSelectedIndexChanged: r,
              resultsState: a,
              selectedChannel: i,
          });
};
var e0 = l(798549);
let e1 = "searchToken";
function e5(e) {
    let { attributes: t, children: l, leaf: r } = e,
        s = r[e1];
    return s === P.v1.FILTER
        ? (0, n.jsx)("span", { ...t, className: e0.nM, children: l })
        : s === P.v1.ANSWER
          ? (0, n.jsx)("span", { ...t, className: e0.pB, children: l })
          : (0, n.jsx)("span", { ...t, children: l });
}
l(76497);
var e6 = l(935675),
    e2 = l(372492);
let e3 = (0, M.Ld)();
function e7(e, t) {
    return { path: [0, 0], offset: Math.min(Math.max(t, 0), C.bP.string(e).length) };
}
function e9(e) {
    return W.A.getQueryText(e) ?? "";
}
function e8(e, t) {
    let { selection: l } = e;
    if (null == l || !C.Q6.isCollapsed(l)) return !1;
    let r = C.Q6.start(l).offset;
    for (let l of (0, S._o)(C.bP.string(e))) {
        let n = P.Ay[l.type];
        if (null != n && !0 !== n.mutable && (t ? r >= l.start && r < l.end : r > l.start && r <= l.end))
            return (C.gB.delete(e, { at: { anchor: e7(e, l.start), focus: e7(e, l.end) } }), !0);
    }
    return !1;
}
let e4 = { whiteSpace: "pre", wordWrap: "normal" };
function te(e) {
    let [t, l] = e,
        r = [];
    if (!C.EY.isText(t) || 0 === t.text.length) return r;
    for (let e of (0, S._o)(t.text)) {
        let t = P.Ay[e.type];
        null != t &&
            r.push({ anchor: { path: l, offset: e.start }, focus: { path: l, offset: e.end }, [e1]: t.componentType });
    }
    return r;
}
function tt(e) {
    return (0, n.jsx)(e5, { ...e });
}
function tl(e) {
    let { children: t, attributes: l } = e;
    return (0, n.jsx)("span", { ...l, style: { ...l.style, opacity: 1 }, children: t });
}
let tr = s.memo(function (e) {
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
    return (0, n.jsx)(v.A, {
        editor: t,
        value: l,
        onChange: i,
        children: (0, n.jsx)(v.Fo, {
            className: e2.E,
            style: e4,
            placeholder: r,
            decorate: te,
            renderLeaf: tt,
            renderPlaceholder: tl,
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
function tn(e) {
    let {
            className: t,
            searchContext: l,
            isSearching: r,
            hasResults: a,
            keyboardModeEnabled: i,
            onSearch: c,
            placeholder: u,
        } = e,
        d = (0, S.bS)(l),
        h = e9(d),
        [m] = s.useState(() => {
            let e = (function (e) {
                let { insertText: t, deleteBackward: l, deleteForward: r } = e;
                return (
                    (e.insertBreak = () => {}),
                    (e.deleteBackward = (t) => {
                        e8(e, !1) || l(t);
                    }),
                    (e.deleteForward = (t) => {
                        e8(e, !0) || r(t);
                    }),
                    (e.insertText = (l) => {
                        let { selection: r } = e,
                            n = null != r ? C.KE.string(e, r).length : 0,
                            s = 512 - (C.bP.string(e).length - n);
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
            })((0, v.o$)((0, C.ie)()));
            return ((e.children = [{ type: "line", children: [{ text: h }] }]), (e.selection = null), e);
        }),
        [p] = s.useState(() => [...m.children]),
        [y, I] = s.useState(!1),
        [T, M] = s.useState(() => h.length > 0),
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
        $ = s.useCallback(() => C.bP.string(m), [m]),
        q = s.useCallback(() => {
            Promise.resolve().then(() => {
                (null == m.selection && C.gB.select(m, C.KE.end(m, [])), v.rL.focus(m));
            });
        }, [m]),
        G = s.useCallback(() => {
            Promise.resolve().then(() => v.rL.blur(m));
        }, [m]),
        U = s.useCallback(() => {
            E.A.cleanUpSearchState(l);
        }, [l]),
        B = s.useCallback(
            (e) => {
                if (!Q.current) return;
                let t = e?.relatedTarget,
                    r = document.getElementById(e3);
                (null != t && null != r && r.contains(t)) ||
                    (A.A.setFocused(l, !1),
                    I(!1),
                    v.rL.toDOMNode(m, m).removeAttribute("aria-activedescendant"),
                    0 === $().length && 0 === e9(d).length && U());
            },
            [U, d, m, $, l],
        ),
        Y = s.useCallback(
            (e) => {
                (C.KE.withoutNormalizing(m, () => {
                    (C.gB.select(m, { anchor: C.KE.start(m, []), focus: C.KE.end(m, []) }),
                        C.gB.delete(m),
                        C.gB.insertText(m, e.replace(/\n/g, "").slice(0, 512)));
                }),
                    C.gB.select(m, C.KE.end(m, [])));
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
                        searchQuerySource: n ?? eA.Q_.SEARCH_TEXT_INPUT,
                    }),
                    L.O.announce(ex.intl.string(ex.t.pKCxWP)),
                    B(),
                    !0)
                );
            },
            [$, B, r, c],
        ),
        Z = s.useCallback(() => {
            if (!Q.current) return;
            !z.current && v.rL.isFocused(m) && I(!0);
            let e = $();
            (M(e.length > 0), b.A.updateSearchQueryText(l, e));
            let t = (0, S._o)(e),
                { selection: r } = m,
                n = null != r ? C.Q6.end(r).offset : e.length,
                s = null != r ? C.Q6.start(r).offset : e.length,
                a = (0, S.zZ)(t, n, s);
            (x.A.updateAutocompleteQuery({ searchContext: l, tokens: t, cursorScope: a, queryString: e }),
                (function (e) {
                    let t;
                    try {
                        t = v.rL.toDOMNode(e, e);
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
            !0 !== D.current?.selectOption({ searchAutocompleteSelectAction: eA.oi.KEY_PRESS }) &&
                K({ searchQuerySource: eA.Q_.SEARCH_TEXT_INPUT });
        }, [K]),
        X = s.useCallback(
            (e) => {
                switch (e.key) {
                    case "Enter":
                        (e.preventDefault(), V());
                        return;
                    case "Escape":
                        (e.preventDefault(), e.stopPropagation(), 0 === $().length ? G() : (Y(""), I(!0)));
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
            [G, $, V, i, Y],
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
                    (!0 !== n && v.rL.focus(m),
                        !0 === s
                            ? Y(t)
                            : null != l
                              ? (C.gB.select(m, { anchor: e7(m, l), focus: e7(m, r ?? l) }),
                                C.gB.insertText(m, t.slice(0, 512)))
                              : C.gB.insertText(m, t),
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
                if (!0 !== t) return void q();
                let r = f.A.getChannel(g.Ay.getChannelId()),
                    n = null != r ? (0, S.Rt)(r) : null;
                null == r || (r.isPrivate() && l.type !== eg.I4_.DMS) || r.isObfuscated() || null == n
                    ? q()
                    : ((0, R.Tf)({ searchContext: l }),
                      Promise.resolve().then(() => {
                          (v.rL.focus(m),
                              J({
                                  query: P.Ay[eg.LWr.FILTER_IN].key + `${n} `,
                                  replace: !0,
                                  searchQuerySource: eA.Q_.SEARCH_TEXT_INPUT,
                              }));
                      }));
            },
            [m, q, J, l],
        );
    s.useEffect(() => {
        (0, S.Pe)();
    }, [l]);
    let et = (0, o.bG)([W.A], () => W.A.getQueryText(d) ?? "");
    (s.useEffect(() => {
        C.bP.string(m) !== et && Y(et);
    }, [et, m, Y]),
        s.useEffect(() => {
            let { selection: e } = m;
            if (null == e) return;
            let t = C.bP.string(m).length;
            (C.Q6.start(e).offset > t || C.Q6.end(e).offset > t) && C.gB.deselect(m);
        }, [d, m]));
    let el = (0, o.bG)([W.A], () => W.A.getIsSearchTokensInitialized());
    (s.useEffect(() => {
        el && m.onChange();
    }, [m, el]),
        s.useEffect(
            () => (
                k._.subscribe(eg.jej.PERFORM_SEARCH, K),
                k._.subscribe(eg.jej.SET_SEARCH_QUERY, J),
                k._.subscribe(eg.jej.FOCUS_SEARCH, ee),
                () => {
                    (k._.unsubscribe(eg.jej.PERFORM_SEARCH, K),
                        k._.unsubscribe(eg.jej.SET_SEARCH_QUERY, J),
                        k._.unsubscribe(eg.jej.FOCUS_SEARCH, ee));
                }
            ),
            [ee, J, K],
        ));
    let er = s.useCallback(
            (e) => {
                if ((e.preventDefault(), e.stopPropagation(), 0 === $().length)) return void q();
                let t = v.rL.isFocused(m);
                (Y(""),
                    v.rL.toDOMNode(m, m).removeAttribute("aria-activedescendant"),
                    (0, R.iK)({ searchContext: l }),
                    U(),
                    t ? q() : G());
            },
            [G, U, m, q, $, Y, l],
        ),
        en = s.useCallback(
            (e) => {
                let t = v.rL.toDOMNode(m, m);
                null != e && e >= 0
                    ? t.setAttribute("aria-activedescendant", `${e3}-${e}`)
                    : t.removeAttribute("aria-activedescendant");
            },
            [m],
        ),
        es = s.useCallback(
            (e) => {
                let t = e.relatedTarget;
                if (null != t) {
                    let e = document.getElementById(e3);
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
                    children: (0, n.jsx)(eJ, { ref: D, searchContext: l, navId: e3, onSelectedIndexChanged: en }),
                }),
            [es, en, l],
        ),
        ei = s.useCallback(() => {
            (v.rL.toDOMNode(m, m).removeAttribute("aria-activedescendant"),
                (function (e) {
                    if (null != e.selection) return;
                    let t = v.rL.findDocumentOrShadowRoot(e),
                        l = "getSelection" in t ? t.getSelection() : null,
                        r = null;
                    if (null != l && l.rangeCount > 0) {
                        let { anchorNode: t, focusNode: n } = l;
                        null != t &&
                            null != n &&
                            v.rL.hasDOMNode(e, t) &&
                            v.rL.hasDOMNode(e, n) &&
                            (r = v.rL.toSlateRange(e, l, { exactMatch: !1, suppressThrow: !0 }));
                    }
                    C.gB.select(e, r ?? C.KE.end(e, []));
                })(m),
                I(!0),
                A.A.setFocused(l, !0),
                L.O.announce(ex.intl.string(ex.t["5h0QOP"])));
        }, [m, l]),
        eo = u ?? ex.intl.string(ex.t["5h0QOP"]);
    return (0, n.jsx)(N.Y, {
        targetElementRef: w,
        renderPopout: ea,
        position: "bottom",
        animation: N.Y.Animation.NONE,
        shouldShow: y,
        onRequestClose: () => B(),
        autoInvert: !1,
        children: (e, r) => {
            let { isShown: s } = r;
            return (0, n.jsx)("div", {
                className: t,
                ref: w,
                children: (0, n.jsx)("div", {
                    className: j()(e6.$P, { [e6.ho]: T || y, [e6.in]: y }),
                    children: (0, n.jsx)(_.vN, {
                        ringTarget: H,
                        children: (0, n.jsxs)(
                            "div",
                            {
                                className: j()(e6.ON, e2.O),
                                ref: H,
                                children: [
                                    (0, n.jsx)(tr, {
                                        editor: m,
                                        initialValue: p,
                                        placeholder: eo,
                                        navId: e3,
                                        isShown: s,
                                        onChange: Z,
                                        onKeyDown: X,
                                        onFocus: ei,
                                        onBlur: B,
                                    }),
                                    (0, n.jsx)(F.B, {
                                        onClear: er,
                                        hasContent: T || a,
                                        className: e6.Kk,
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
var ts = l(921242);
let ta = i()(E.A.fetchMessages, 500);
function ti(e) {
    let { searchContext: t, className: l } = e,
        r = (0, S.bS)(t),
        a = (0, o.bG)([u.Ay], () => u.Ay.keyboardModeEnabled);
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
    let { isSearching: i, hasResults: E } = (0, o.cf)([p.A], () => {
            let e = p.A.getTotalCount(r);
            return { hasResults: null != e && e > 0, isSearching: p.A.getIsFetching(r) };
        }),
        I = (0, o.bG)([h.Ay, g.Ay, f.A], () => {
            let e = g.Ay.getCurrentlySelectedChannelId(),
                t = f.A.getChannel(e);
            return h.Ay.getSection(e, t?.isDM()) === eg.YvQ.SEARCH;
        });
    s.useEffect(() => {
        A.A.setSidebarOpen(t, I);
    }, [t, I]);
    let T = (0, c.Ry)(ts.b);
    s.useEffect(() => {
        A.A.setFiltersModalOpen(t, T);
    }, [t, T]);
    let j = s.useCallback(
            (e) => {
                let { queryString: l, query: r, searchEverywhere: n, searchQuerySource: s } = e;
                (A.A.refreshQueryId(t),
                    (0, R.fd)({ searchContext: t, query: r, queryString: l, searchQuerySource: s }),
                    b.A.updateSearchMode(t, eg.BBH.NEWEST),
                    ta({
                        searchContext: t,
                        searchQueryString: l,
                        searchEverywhere: n,
                        offset: 0,
                        includeSmartSearch: !0,
                    }));
            },
            [t],
        ),
        C = (0, o.bG)([m.A, f.A], () => {
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
        v = s.useMemo(
            () =>
                t.type === eg.I4_.DMS
                    ? ex.intl.string(ex.t.m7OrlR)
                    : null != C
                      ? ex.intl.formatToPlainString(ex.t.LDZtFO, { name: C })
                      : ex.intl.string(ex.t["5h0QOP"]),
            [t.type, C],
        );
    return (0, n.jsx)(tn, {
        className: l,
        searchContext: t,
        isSearching: i,
        hasResults: E,
        keyboardModeEnabled: a,
        onSearch: j,
        placeholder: v,
    });
}
function to(e) {
    let { className: t, guildId: l, channelId: r } = e,
        s = (0, I.J)({ guildId: l, channelId: r });
    return null == s ? null : (0, n.jsx)(ti, { className: t, searchContext: s });
}
