(s.r(t), s.d(t, { default: () => e_ }));
var n = s(477900),
    r = s(582128),
    l = s(503698),
    o = s.n(l),
    i = s(17928),
    a = s(554146),
    c = s(689175),
    d = s(512950),
    u = s(964486),
    h = s(131607),
    p = s(106430),
    x = s(885386),
    k = s(734057),
    g = s(625494),
    m = s(517381),
    j = s(822382),
    f = s(868974),
    M = s(304578),
    S = s(616252),
    A = s(753806),
    E = s(775427);
s(321073);
var C = s(738768),
    R = s(457699),
    L = s(521981),
    b = s(383233),
    y = s(994500),
    F = s(65600);
let I = [];
var v = s(477654),
    N = s(145331),
    _ = s(43105),
    T = s(821609),
    z = s(783977),
    W = s(289873),
    H = s(866665),
    D = s(834730),
    O = s(28863),
    P = s(922016),
    w = s(980707),
    B = s(477782),
    q = s(408278),
    Q = s(625903),
    V = s(112173),
    G = s(93055),
    U = s(975571),
    Y = s(121806),
    Z = s(652215),
    $ = s(49999),
    X = s(375708),
    J = s(898029);
function K(e) {
    let t,
        {
            searchContext: s,
            searchMode: l,
            onSearchModeChange: c,
            totalResults: d,
            isIndexing: u,
            isSearching: p,
            documentsIndexed: x,
            selectedChannelId: k,
        } = e,
        g =
            ((t = (0, i.bG)([F.A], () => {
                let e = (0, j.bS)(s);
                return F.A.getSearchResultsQueryString(e);
            })),
            r.useMemo(() => (0, j._o)(t ?? ""), [t])),
        { totalFilters: m } = (0, Y.vj)(g, s),
        f = r.useMemo(() => {
            if (s.type === Z.I4_.DMS) {
                let e = (0, j.Zf)(g),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? X.intl.format(X.t.A2dqWG, { filterCount: t }) : X.intl.string(X.t.tc619d);
            }
            return null;
        }, [s.type, g]),
        [M, S] = r.useState(null),
        E = r.useMemo(() => (p ? [] : [a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [p]),
        [C, R] = (0, h.kn)(E),
        L = C === a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        b = r.useCallback(
            (e) => {
                (null != e && L && R($.i.USER_DISMISS), S(e));
            },
            [L, R, S],
        ),
        y = r.useCallback(
            (e) => {
                R("user:explicit" === e ? $.i.USER_DISMISS : $.i.AUTO_DISMISS);
            },
            [R],
        ),
        I = r.useCallback(() => {
            (b(null), A.A.openSearchFiltersModal(s));
        }, [b, s]),
        v = r.useMemo(() => (m > 0 ? X.intl.format(X.t.uaR4sI, { filterCount: m }) : X.intl.string(X.t.UdhTtk)), [m]),
        N = !(0, G.DZ)() && (s.type === Z.I4_.DMS || s.type === Z.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: o()(J.wL, { [J.g$]: null != f }),
        children: [
            (0, n.jsx)("div", {
                className: J.TN,
                role: "status",
                children: (0, n.jsx)(ee, {
                    totalResults: d,
                    subtitle: f,
                    isIndexing: u,
                    isSearching: p,
                    documentsIndexed: x,
                }),
            }),
            (0, n.jsxs)("div", {
                className: J.vd,
                children: [
                    (0, n.jsx)(T.$, { variant: "secondary", onClick: I, text: v, icon: z.R, size: "sm" }),
                    (0, n.jsx)(eo, {
                        searchMode: l,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === M,
                        setOpenPopout: b,
                    }),
                    N &&
                        (0, n.jsx)(el, {
                            searchContext: s,
                            selectedChannelId: k,
                            isPopoutOpen: "settings" === M,
                            setOpenPopout: b,
                            isPopoverVisible: L,
                            onPopoverRequestClose: y,
                        }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { totalResults: t, subtitle: s, isSearching: r, isIndexing: l, documentsIndexed: o } = e;
    return l
        ? (0, n.jsx)(es, { documentsIndexed: o })
        : r
          ? (0, n.jsx)(en, {})
          : (0, n.jsx)(er, { totalResults: t, subtitle: s });
}
function et() {
    return (0, n.jsx)("div", {
        className: J.zp,
        children: (0, n.jsx)(W.y, { type: W.y.Type.SPINNING_CIRCLE, className: J.u1, itemClassName: J.pu }),
    });
}
function es(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(H.m, {
        asContainer: !0,
        text: X.intl.formatToPlainString(X.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: J.q_,
            children: [
                (0, n.jsx)(D.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(O.Anchor, {
                        className: J.Zd,
                        href: U.A.getArticleURL(Z.MVz.SEARCH_INDEXING),
                        children: X.intl.string(X.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(et, {}),
            ],
        }),
    });
}
function en() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(D.E, { variant: "text-md/medium", color: "text-default", children: X.intl.string(X.t.uixzLf) }),
            (0, n.jsx)(et, {}),
        ],
    });
}
function er(e) {
    let { totalResults: t, subtitle: s } = e,
        r = (0, n.jsx)(D.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: X.intl.format(X.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: J.hy,
              children: [r, (0, n.jsx)(D.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : r;
}
function el(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: l,
            setOpenPopout: o,
            onPopoverRequestClose: i,
            isPopoverVisible: a,
        } = e,
        c = r.useRef(null),
        d = x.Hu.useSetting(),
        u = r.useCallback(
            (e) => {
                if (d !== e) {
                    if (
                        ((0, N._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: x.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: N.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: Z.I4_.DMS };
                        A.A.transitionStateToSearchContext(t, e, A.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: Z.I4_.CHANNEL, channelId: s };
                        A.A.transitionStateToSearchContext(t, e);
                    }
                    (o(null), x.Hu.updateSetting(e));
                }
            },
            [d, o, t, s],
        ),
        [h, p] = r.useMemo(
            () => [
                d ? X.intl.string(X.t["8lklch"]) : X.intl.string(X.t.ji3jTF),
                d ? X.intl.string(X.t.RMQZCa) : X.intl.string(X.t["v/PagC"]),
            ],
            [d],
        ),
        k = r.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(P.Y, {
                targetElementRef: c,
                shouldShow: l,
                animation: P.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => o(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(w.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": X.intl.string(X.t.fb59v0),
                        onSelect: () => o(null),
                        children: (0, n.jsxs)(
                            B.rX,
                            {
                                label: X.intl.string(X.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(B.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t.jRkYAh),
                                        checked: !d,
                                        action: () => u(!1),
                                    }),
                                    (0, n.jsx)(B.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: X.intl.string(X.t["lWpJ/t"]),
                                        checked: d,
                                        action: () => u(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(q.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: Q.SettingsIcon,
                        onClick: () => {
                            o(l ? null : "settings");
                        },
                        "aria-label": X.intl.string(X.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(_.A, {
                targetElementRef: c,
                shouldShow: a,
                onRequestClose: i,
                title: h,
                body: p,
                caretConfig: k,
                badge: "new",
            }),
        ],
    });
}
function eo(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: l, setOpenPopout: o } = e,
        i = r.useRef(null),
        a = r.useMemo(
            () => [
                { label: X.intl.string(X.t.CbaapP), value: Z.BBH.NEWEST },
                { label: X.intl.string(X.t.OukXZj), value: Z.BBH.OLDEST },
                { label: X.intl.string(X.t.q8gB52), value: Z.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = r.useCallback(
            (e) => {
                (o(null), s(e));
            },
            [o, s],
        );
    return (0, n.jsx)(P.Y, {
        targetElementRef: i,
        shouldShow: l,
        animation: P.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => o(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(w.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": X.intl.string(X.t.utp2hS),
                onSelect: () => o(null),
                children: (0, n.jsx)(
                    B.rX,
                    {
                        children: a.map((e) => {
                            let { label: s, value: r } = e;
                            return (0, n.jsx)(
                                B.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${r}`,
                                    label: s,
                                    action: () => c(r),
                                    checked: t === r,
                                },
                                r,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(T.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: V.J,
                onClick: () => {
                    o(l ? null : "sort");
                },
                text: X.intl.string(X.t.XvNMNk),
                "aria-label": X.intl.string(X.t.XvNMNk),
                size: "sm",
            }),
    });
}
var ei = s(481613),
    ea = s.n(ei),
    ec = s(615300),
    ed = s(775602),
    eu = s(346905);
function eh(e) {
    function t(e) {
        return e.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] });
    }
    return { transform: [{ translateX: t(e.x) }, { translateY: t(e.y) }] };
}
class ep extends r.Component {
    state = { x: new ec.A.Value(0), y: new ec.A.Value(0) };
    _isMounted = !1;
    componentDidMount() {
        ((this._isMounted = !0), this.startAnimations());
    }
    componentDidUpdate(e) {
        e.reducedMotion !== this.props.reducedMotion &&
            (this.props.reducedMotion ? (this.state.x.setValue(0), this.state.y.setValue(0)) : this.startAnimations());
    }
    componentWillUnmount() {
        this._isMounted = !1;
    }
    shouldLoop = () => this._isMounted && !this.props.reducedMotion && "Firefox" !== ea().name;
    startAnimations() {
        if (!this.shouldLoop()) return;
        let { x: e, y: t } = this.state;
        (ec.A.animate(e, {
            loop: !0,
            toValueMin: -74,
            toValueMax: 95,
            overshootClamping: !0,
            friction: 5,
            tension: 1,
            shouldLoop: this.shouldLoop,
        }),
            ec.A.animate(t, {
                loop: !0,
                toValueMin: -59,
                toValueMax: 75,
                overshootClamping: !0,
                friction: 5,
                tension: 1,
                shouldLoop: this.shouldLoop,
            }));
    }
    render() {
        return (0, n.jsxs)("div", {
            className: eu.dJ,
            children: [
                (0, n.jsx)("div", { className: eu.LU }),
                (0, n.jsxs)("svg", {
                    className: eu.GR,
                    width: "320",
                    height: "280",
                    children: [
                        (0, n.jsx)("defs", {
                            children: (0, n.jsx)("rect", {
                                id: "search-index-foreground-mask-a",
                                width: "80",
                                height: "80",
                                rx: "40",
                            }),
                        }),
                        (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [
                                (0, n.jsxs)("g", {
                                    transform: "translate(120 80)",
                                    children: [
                                        (0, n.jsx)("mask", {
                                            id: "search-index-foreground-mask-b",
                                            fill: "#fff",
                                            children: (0, n.jsx)(ec.A.use, {
                                                style: eh(this.state),
                                                className: eu.dK,
                                                xlinkHref: "#search-index-foreground-mask-a",
                                            }),
                                        }),
                                        (0, n.jsxs)("g", {
                                            mask: "url(#search-index-foreground-mask-b)",
                                            children: [
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-15.0267 170.8361c0 6.311-5.116 11.427-11.428 11.427-6.31 0-11.426-5.116-11.426-11.427s5.116-11.427 11.426-11.427c6.312 0 11.428 5.116 11.428 11.427z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-12.39 165.5622c-6.311 0-11.427-5.116-11.427-11.427s5.116-11.427 11.427-11.427 11.427 5.116 11.427 11.427c0 2.727-.955 5.231-2.55 7.196",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-23.8168 129.5232c6.311 0 11.427 5.116 11.427 11.427s-5.116 11.427-11.427 11.427c-6.312 0-11.427-5.116-11.427-11.427",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M110.2125-35.5789c.556 6.286-4.089 11.833-10.375 12.39-6.287.556-11.834-4.089-12.391-10.375-.555-6.286 4.089-11.834 10.376-12.39",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#C2FFF9",
                                                    d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671zm-18.6982 25.5654l33.402-19.788",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-93.1889 132.2868l23.272 20.241-6.571-30.135",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#C2FFF9",
                                                    d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M135.6949-69.0003l-.625 26.692 16.447-21.032m-27.3679 1.6701l31.645 11.319",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#7687B2",
                                                    d: "M45.3502-64.8382c-.602-2.453-3.078-3.954-5.532-3.353l-102.171 25.056c-2.454.601-3.954 3.078-3.353 5.531l3.489 14.228 111.056-27.234-3.489-14.228z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532zM-62.2172-23.3763l111.057-27.234m-95.9164 3.7287l-8.367 21.844m30.0096-27.1517l-8.366 21.844m30.0096-27.1516l-8.366 21.844M17.8522-62.804L9.4862-40.96m30.0095-27.1516l-8.366 21.844",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FF7B78",
                                                    d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#5871B7",
                                                    d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123zM64.1588 1.2805h-43.147m21.5738-8.1114h-21.574m91.3894 0H49.816m33.9815-8.1118h-62.786",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#5865f2",
                                                    d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-26.3637 22.2653h48.67M6.0826 30.3767h68.309m-100.7553 0h22.799m53.1942 8.1118h14.942m-24.3346 0h4.534m-71.1346 0h54.093m-54.093 8.1113h63.186",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#98AFED",
                                                    d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-60.6225 77.6657h99.433m-23.4398 8.1114h7.949m-19.6892 0h-64.253m0 8.1118h47.398m-47.398 8.1113h116.122",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#7687B2",
                                                    d: "M42.4547-33.7181v-14.743c0-2.527-2.048-4.574-4.574-4.574h-105.198c-2.527 0-4.575 2.047-4.575 4.574v14.743h114.347z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574zM-71.892-33.8123H42.455m-94.0442-19.2231l-13.328 19.223m35.6121-19.223l-13.328 19.223m35.6132-19.223l-13.328 19.223m35.6122-19.223l-13.328 19.223m35.6121-19.223l-13.328 19.223",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FF7B78",
                                                    d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-26.6293-25.6136v33.584l31.445-16.792",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-26.6293-25.6136v33.584l31.445-16.792zM184.3375 8.3772v6.43m3.2149-3.2152h-6.43m-292.9079 79.082v6.43m3.2148-3.2151h-6.43M195.901-43.6692l-1.516 1.515m-6.0611 6.0621l-1.516 1.516m9.0931-.0004l-1.516-1.516m-6.0611-6.0616l-1.516-1.515M-88.642 168.9265l-1.516 1.516m-6.0621 6.0616l-1.516 1.515m9.0941.0001l-1.516-1.515m-6.0621-6.0621l-1.516-1.516M174.3463-8.8211c0 1.775-1.439 3.215-3.215 3.215-1.776 0-3.215-1.44-3.215-3.215s1.439-3.215 3.215-3.215c1.776 0 3.215 1.44 3.215 3.215z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(ec.A.g, {
                                    className: eu.KS,
                                    style: eh(this.state),
                                    children: [
                                        (0, n.jsx)("path", {
                                            fill: "#C9D2F0",
                                            d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            fill: "#9F7373",
                                            d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            fill: "#F3F9FF",
                                            d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0m63.895-63.895c-19.667-19.667-51.554-19.667-71.221 0s-19.667 51.554 0 71.221 51.554 19.667 71.221 0 19.667-51.554 0-71.221",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M196.0069 155.9708c-19.667 19.667-51.554 19.667-71.221 0s-19.667-51.554 0-71.221 51.554-19.667 71.221 0 19.667 51.554 0 71.221z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", { d: "M84 66h130v130H84z" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function ex() {
    let e = (0, i.bG)([ed.Ay], () => ed.Ay.useReducedMotion);
    return (0, n.jsx)(ep, { reducedMotion: e });
}
var ek = s(876689),
    eg = s(187654),
    em = s(148795),
    ej = s(53788),
    ef = s(939249),
    eM = s(192308),
    eS = s(670455),
    eA = s(596500);
function eE(e) {
    let { rating: t, onClick: s } = e,
        l = t === eS.P0.BAD ? em.d : ej.G,
        o = r.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, n.jsx)(ef.D, {
        onClick: o,
        className: eA.zc,
        children: (0, n.jsx)(l, { size: "md", color: "currentColor", className: eA.Kk }),
    });
}
let eC = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: l } = e;
    r.useEffect(() => {
        (0, N.J$)({ searchContext: t });
    }, [t]);
    let o = r.useCallback(
        (e) => {
            (l(),
                (0, eM.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([s.e("36395"), s.e("155925"), s.e("444908")]).then(
                        s.bind(s, 774567),
                    );
                    return (s) => (0, n.jsx)(r, { ...s, searchContext: t, rating: e });
                }));
        },
        [l, t],
    );
    return (0, n.jsxs)("div", {
        className: eA.kL,
        children: [
            (0, n.jsx)(D.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: X.intl.string(X.t["I+4OJC"]),
            }),
            (0, n.jsxs)("div", {
                className: eA.Pt,
                children: [
                    (0, n.jsx)(eE, { rating: eS.P0.GOOD, onClick: o }),
                    (0, n.jsx)(eE, { rating: eS.P0.BAD, onClick: o }),
                ],
            }),
        ],
    });
};
var eR = s(36537);
class eL extends r.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    autoAnalytics = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (null == e.props.searchRequestAnalyticsId || e.props.isSearching) return;
            let s = 0,
                n = 0,
                r = 0,
                l = 0;
            e.props.messages.forEach((e) => {
                (null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                    null != e.embeds && e.embeds.length > 0 && r++,
                    null != e.attachments && e.attachments.length > 0 && n++);
            });
            let o = (0, j.bS)(e.props.searchContext);
            0 === s
                ? (0, N.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: A.A.getSearchInputText(e.props.searchContext),
                      searchQuery: F.A.getSearchResultsQuery(o),
                  })
                : (0, N.H9)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      prevSearchRequestAnalyticsId: t !== e.props.searchRequestAnalyticsId ? t : null,
                      isError: e.props.searchHasError,
                      limit: e.props.searchLimit,
                      offset: e.props.searchOffset,
                      page: Math.floor(e.props.searchOffset / e.props.searchLimit) + 1,
                      totalResults: e.props.searchTotalResults,
                      pageResults: null != e.props.messages ? e.props.messages.length : null,
                      isIndexing: e.props.searchIsIndexing,
                      pageNumMessages: s,
                      pageNumLinks: l,
                      pageNumEmbeds: r,
                      pageNumAttachments: n,
                      searchQueryString: A.A.getSearchInputText(e.props.searchContext),
                      searchQuery: F.A.getSearchResultsQuery(o),
                  });
        };
    })();
    render() {
        return null;
    }
}
function eb(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: eR.Oq, children: (0, n.jsx)("div", { className: eR.de, children: t }) });
}
function ey(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: r } = e;
    return s ? (0, n.jsx)(eC, { searchContext: t, dismissFeedbackEntrypoint: r }) : null;
}
function eF(e) {
    let {
            messages: t,
            blockCount: s,
            ignoreCount: r,
            search: l,
            searchContext: i,
            renderEmbeds: a,
            onClick: c,
            onScrollTo: d,
            onBlockedResultsClick: u,
            searchRequestAnalyticsId: h,
            searchResultsQuery: p,
        } = e,
        { totalResults: x, isSearching: k, isIndexing: g, hasError: m } = l;
    if (m)
        return (0, n.jsxs)(eb, {
            children: [
                (0, n.jsx)("div", { className: eR.M6 }),
                (0, n.jsx)("div", { className: o()(eR.pZ, eR.gJ), children: X.intl.string(X.t.uvDZBZ) }),
            ],
        });
    if (g) {
        let e = (0, j.Y7)(i);
        return (0, n.jsxs)(eb, {
            children: [(0, n.jsx)(ex, {}), (0, n.jsx)("div", { className: (eR.pZ, eR.Jy), children: e })],
        });
    }
    if (k) return null;
    if (x > 0)
        return (0, n.jsx)(eg.A, {
            search: l,
            messages: t,
            onClick: c,
            blockCount: s,
            ignoreCount: r,
            renderEmbeds: a,
            scrollTo: d,
            onBlockedResultsClick: u,
            searchRequestAnalyticsId: h,
            searchResultsQuery: p,
        });
    let { showNoResultsAlt: f } = l,
        M = f ? X.intl.string(X.t["VrK/2R"]) : X.intl.string(X.t.V6nAfF);
    return (0, n.jsxs)(eb, {
        children: [
            (0, n.jsx)("div", { className: o()(eR.$l, { [eR.CC]: f }) }),
            (0, n.jsx)("div", { className: o()(eR.pZ, eR.wV, { [eR.CC]: f }), children: M }),
        ],
    });
}
let eI = [],
    ev = r.memo(function (e) {
        let {
                searchContext: t,
                search: s,
                renderEmbeds: l,
                searchRequestAnalyticsId: o,
                messages: u,
                blockCount: p,
                ignoreCount: x,
                isFeedbackVisible: m,
                dismissFeedbackEntrypoint: f,
                onSearchModeChange: S,
                onPageChange: E,
                searchMode: C,
                onBlockedResultsClick: R,
                searchResultsQuery: L,
                searchResultsQueryString: b,
                selectedChannelId: y,
            } = e,
            I = r.useRef(null),
            _ = r.useCallback(() => {
                A.A.cleanUpSearchState(t);
            }, [t]);
        r.useEffect(
            () => (
                g._.subscribe(Z.jej.SEARCH_RESULTS_CLOSE, _),
                () => {
                    g._.unsubscribe(Z.jej.SEARCH_RESULTS_CLOSE, _);
                }
            ),
            [_],
        );
        let T = r.useRef(s.showBlockedResults);
        r.useEffect(() => {
            if (T.current !== s.showBlockedResults) {
                T.current = s.showBlockedResults;
                let e = I.current;
                null != e && e.scrollToBottom();
            }
        }, [s.showBlockedResults]);
        let z = r.useCallback((e, t, s) => {
                let n = I.current;
                if (null == n) return;
                let r = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: r, animate: t, callback: s });
            }, []),
            W = null != b ? `${C}:${b}` : void 0,
            {
                paginationTotalCount: H,
                paginationMaxVisiblePage: D,
                isMaxVisiblePageWarningVisible: O,
                renderPageWrapper: P,
            } = (0, v.o)({
                totalResults: s.totalResults,
                isSearching: s.isSearching,
                offset: s.offset,
                searchResultsPaginationKey: W,
            }),
            w = r.useCallback(
                (e) => {
                    e === C ||
                        s.isSearching ||
                        ((0, N.L6)({ searchContext: t, searchRequestAnalyticsId: o, mode: e }), S(e));
                },
                [S, s.isSearching, t, C, o],
            ),
            B = r.useCallback(
                (e, n) => {
                    let r = k.A.getChannel(e.channel_id),
                        l = null != r ? r.getGuildId() : null,
                        i = (0, j.bS)(t),
                        { offset: a, totalResults: c } = s;
                    (0, N.i4)({
                        searchContext: t,
                        searchRequestAnalyticsId: o,
                        guildId: l,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != u ? u.length : null,
                        totalResults: c,
                        limit: Z.T_y,
                        page: Math.floor(a / Z.T_y) + 1,
                        offset: a,
                        index: n,
                        searchQueryString: A.A.getSearchInputText(t),
                        searchQuery: F.A.getSearchResultsQuery(i),
                    });
                },
                [s, t, o, u],
            ),
            q = r.useCallback(
                (e) => {
                    ((0, N.kq)({ searchContext: t, searchRequestAnalyticsId: o, newPageIndex: e }), E(e));
                },
                [E, t, o],
            ),
            Q = H > Z.T_y,
            V = (0, i.yK)([F.A], () => {
                if (0 !== s.offset) return eI;
                let e = u.length;
                if (e < 10) return eI;
                let n = 0;
                if (
                    (u.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && n++;
                    }),
                    n / e < 0.75)
                )
                    return eI;
                let r = (0, j.bS)(t),
                    l = F.A.getSearchResultsQueryString(r);
                return (0, j._o)(l ?? "").some((e) => e.type === Z.LWr.FILTER_AUTHOR_TYPE)
                    ? eI
                    : [a.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [G, U] = (0, h.kn)(V),
            Y = G === a.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            $ = r.useCallback(() => {
                if (s.isSearching) return;
                let e = `${M.Ay[Z.LWr.FILTER_AUTHOR_TYPE].key} ${X.intl.string(X.t.tPZo4p)} `;
                A.A.appendToSearchInputText(t, e);
            }, [t, s.isSearching]);
        return (0, n.jsxs)("section", {
            className: eR.zt,
            "aria-label": X.intl.string(X.t["zkoeq/"]),
            children: [
                (0, n.jsx)(K, {
                    searchContext: t,
                    searchMode: C,
                    onSearchModeChange: w,
                    totalResults: s.totalResults,
                    isSearching: s.isSearching,
                    isIndexing: s.isHistoricalIndexing,
                    documentsIndexed: s.documentsIndexed,
                    selectedChannelId: y,
                }),
                (0, n.jsxs)(c.Ch, {
                    ref: I,
                    className: eR.XG,
                    children: [
                        O &&
                            !s.isSearching &&
                            (0, n.jsx)(d.p, {
                                className: eR.VC,
                                messageType: d.Y.WARNING,
                                children: X.intl.formatToPlainString(X.t["E+2azY"], { maxPages: D }),
                            }),
                        Y &&
                            (0, n.jsx)(d.p, {
                                className: eR.QR,
                                messageType: d.Y.INFO,
                                children: X.intl.format(X.t["gQeg/R"], { handleClick: $ }),
                            }),
                        (0, n.jsx)(eF, {
                            messages: u,
                            blockCount: p,
                            ignoreCount: x,
                            search: s,
                            searchContext: t,
                            renderEmbeds: l,
                            onClick: B,
                            onScrollTo: z,
                            onBlockedResultsClick: R,
                            searchRequestAnalyticsId: o,
                            searchResultsQuery: L,
                        }),
                    ],
                }),
                (0, n.jsx)(ey, { searchContext: t, isFeedbackVisible: m, dismissFeedbackEntrypoint: f }),
                Q &&
                    (0, n.jsx)(ek.A, {
                        className: eR.cu,
                        onPageChange: q,
                        offset: s.offset,
                        totalCount: H,
                        pageSize: Z.T_y,
                        renderPageWrapper: P,
                    }),
            ],
        });
    });
function eN(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: l, dismissFeedbackEntrypoint: o } = (function () {
            let [e, t] = r.useState(!1),
                s = (0, f.H)({ location: "SearchResults" });
            return (
                (0, u.Ay)(() => {
                    s &&
                        p.A.possiblyShowFeedbackModal(
                            eS.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: r.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        a = (0, j.bS)(t),
        c = (0, i.cf)([m.A, F.A], () => ({
            isSearching: m.A.getIsFetching(a) ?? !1,
            isIndexing: m.A.getIsIndexing(a) ?? !1,
            isHistoricalIndexing: m.A.getIsHistoricalIndexing(a) ?? !1,
            documentsIndexed: m.A.getDocumentsIndexed(a),
            offset: F.A.getSearchResultsOffset(a) ?? 0,
            totalResults: m.A.getTotalCount(a) ?? 0,
            hasError: null != m.A.getError(a),
            showBlockedResults: F.A.shouldShowBlockedResults(a),
            showNoResultsAlt: F.A.shouldShowNoResultsAlt(a),
        })),
        d = (0, i.bG)([m.A], () => m.A.getAnalyticsId(a)),
        {
            renderedMessages: h,
            ignoreCount: k,
            blockCount: g,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, i.bG)(
                    [F.A, m.A, R.A],
                    () => {
                        let e = (0, j.bS)(t),
                            s = F.A.getSearchResultsQuery(e),
                            n = m.A.getMessages(e);
                        if (null == s || null == n || 0 === n.length) return I;
                        let r = (0, C.wG)((0, j.dX)(s) ?? ""),
                            l = [];
                        return (
                            n.forEach((e) => {
                                let t = new b.Ay(e);
                                ((t = (t = (function (e, t) {
                                    let [s] = t,
                                        n = s.getMessage(e.id, e.channel_id);
                                    return (
                                        null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e
                                    );
                                })(t, [R.A])).set(
                                    "customRenderedContent",
                                    (0, L.Ay)(t, {
                                        postProcessor: r,
                                        allowHeading: !0,
                                        allowList: !0,
                                        allowGameMentions: !0,
                                    }),
                                )),
                                    l.push(t));
                            }),
                            l
                        );
                    },
                    [t],
                    i.My,
                ),
                { blockCount: n, ignoreCount: r } = (0, i.cf)([y.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        s.forEach((s) => {
                            let n = y.A.isBlockedForMessage(s),
                                r = y.A.isIgnoredForMessage(s);
                            n ? e++ : r && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: s, blockCount: n, ignoreCount: r };
        })({ searchContext: t }),
        M = (0, i.bG)([F.A], () => F.A.getSearchMode(a) ?? Z.BBH.NEWEST),
        E = r.useCallback(
            (e) => {
                if (c.isSearching) return;
                S.A.updateSearchMode(t, e);
                let s = A.A.getSearchInputText(t);
                null != s && A.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [c.isSearching, t],
        ),
        v = r.useCallback(
            (e) => {
                let s = A.A.getSearchInputText(t);
                null != s && A.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: e * Z.T_y });
            },
            [t],
        ),
        N = (0, i.bG)([F.A], () => {
            let e = (0, j.bS)(t);
            return F.A.getSearchResultsQuery(e);
        }),
        _ = (0, i.bG)([F.A], () => {
            let e = (0, j.bS)(t);
            return F.A.getSearchResultsQueryString(e);
        }),
        T = r.useCallback((e) => S.A.setShowBlockedResults(t, e), [t]),
        z = r.useDeferredValue(h),
        W = r.useDeferredValue(c),
        H = r.useDeferredValue(d);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ev, {
                searchContext: t,
                search: W,
                searchRequestAnalyticsId: H,
                messages: z,
                ignoreCount: k,
                blockCount: g,
                renderEmbeds: x.rs.useSetting(),
                isFeedbackVisible: l,
                dismissFeedbackEntrypoint: o,
                onPageChange: v,
                onSearchModeChange: E,
                searchMode: M,
                onBlockedResultsClick: T,
                searchResultsQuery: N,
                searchResultsQueryString: _,
                selectedChannelId: s,
            }),
            (0, n.jsx)(eL, {
                searchContext: t,
                searchRequestAnalyticsId: H,
                messages: z,
                searchOffset: W.offset,
                searchLimit: Z.T_y,
                searchHasError: W.hasError,
                searchTotalResults: W.totalResults,
                searchIsIndexing: W.isHistoricalIndexing,
                isSearching: W.isSearching,
            }),
        ],
    });
}
function e_(e) {
    let { guildId: t, channelId: s } = e,
        r = (0, E.J)({ guildId: t, channelId: s });
    return null == r ? null : (0, n.jsx)(eN, { searchContext: r, selectedChannelId: s });
}
