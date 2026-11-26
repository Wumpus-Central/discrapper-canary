(l.r(t), l.d(t, { default: () => iQ }));
var i = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(435558),
    o = l.n(r),
    c = l(855986),
    d = l(548411),
    u = l(323384),
    m = l(534514),
    h = l(417098),
    p = l(111159),
    g = l(834730),
    x = l(899647),
    v = l(770472),
    j = l(737823);
l(651266);
var A = l(876622),
    C = l(521974),
    I = l(965660),
    f = l(430783),
    N = l(976860),
    y = l(46653),
    b = l(287809),
    E = l(129230),
    _ = l(503406),
    S = l(416730),
    R = l(212534),
    P = l(38181),
    T = l(684249);
(l(323874), l(14289), l(35956));
var L = l(323125),
    D = l(310419),
    O = l(652215);
function k(e, t) {
    let l = D.h.getField("sessionId"),
        i = D.h.getField("guildId"),
        n = D.h.getField("entrypoint")?.name,
        s = b.default.getCurrentUser(),
        a = { ...t, guild_id: i, directory_session_id: l, source: n, user_id: s?.id };
    return E.default.track(e, a);
}
function U() {
    return (0, c.bG)([y.default], () => y.default.isAuthenticated());
}
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let l in e) {
        let i = e[l];
        t.searchParams.set(l, i);
    }
    let l = t.pathname + t.search,
        i = (0, L.T2)(l, !1);
    (0, N.pX)(i);
}
var M = l(435220),
    G = l(792996);
function V() {
    return { id: 0, name: G.intl.string(G.t.ijDDwz) };
}
function F() {
    let { query: e, categoryId: t, page: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = { previousView: (0, D.R4)() },
        n = new URLSearchParams();
    (null != e && "" !== e && n.set("q", e),
        null != t && 0 !== t && n.set("category_id", t.toString()),
        null != l && l > 1 && n.set("page", l.toString()),
        (0, N.pX)(O.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: i, search: n.toString() }));
}
function H(e) {
    let {
        location: { state: t },
    } = (0, N.JK)();
    (0, N.bG)(e, t);
}
var z = l(23815),
    B = l(701508),
    Y = l(979590),
    X = l(783531),
    K = l(558611);
let W = "/assets/3aa7e375b23dc56f.svg";
function $(e) {
    let { heading: t = G.intl.string(G.t.NGw8v2), body: l = G.intl.string(G.t["1XZRY4"]), className: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(K.kL, n),
        children: [
            (0, i.jsx)("div", {
                className: K.ZS,
                children: (0, i.jsx)("img", { className: K.Sl, src: W, alt: G.intl.string(G.t["/UJaI2"]) }),
            }),
            (0, i.jsx)(m.D, { variant: "heading-xl/semibold", className: K.wx, children: t }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: l }),
        ],
    });
}
var Z = l(819169),
    q = l(935573),
    J = l(164636),
    Q = l(662203),
    ee = l(111042),
    et = l(651753),
    el = l(289873),
    ei = l(311543);
function en(e) {
    let { loading: t, children: l } = e;
    return (0, i.jsxs)("div", {
        className: ei.kL,
        children: [
            t
                ? (0, i.jsx)("div", {
                      className: ei.dc,
                      children: (0, i.jsx)(el.y, { className: ei.u1, type: el.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, i.jsx)("div", { className: a()({ [ei.Lq]: t }), children: l }),
        ],
    });
}
var es = l(831259),
    ea = l(735991),
    er = l(635350),
    eo = l(486020),
    ec = l(775602),
    ed = l(435582),
    eu = l(283488),
    em = l(607470),
    eh = l(654107),
    ep = l(36667);
let eg = 16 / 9,
    ex = 325 / 72;
function ev(e) {
    let { application: t, isHovered: l, botBannerUrl: s, botBannerUrlAnimated: r, iconURL: o } = e,
        c = (0, eu.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = n.useMemo(() => {
            let e = (0, ea.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ed.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: m } = n.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: s, imageUrlAnimated: r }),
            [c.state, c.url, s, r],
        ),
        h = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    h
                        ? (0, i.jsx)(ej, { isHovered: l, url: u, animatedUrl: void 0 })
                        : (0, i.jsx)(em.A, { src: d, className: a()(ep._e, ep.IH), muted: !0 }),
                    (0, i.jsx)(eA, { isHovered: l, url: d, isVideo: !0 }),
                ],
            })
          : h
            ? (0, i.jsx)(ej, { isHovered: l, url: u, animatedUrl: m })
            : (0, i.jsx)(eC, { iconURL: o });
}
function ej(e) {
    let { isHovered: t, url: l, animatedUrl: s } = e,
        [r, o] = n.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: l, alt: "", className: a()(ep._e, ep.IH, { [ep.Kc]: r }), onLoad: () => o(!0) }),
            null != s ? (0, i.jsx)(eA, { isHovered: t, url: s, isVideo: !1 }) : null,
        ],
    });
}
function eA(e) {
    let { isHovered: t, url: l, isVideo: s } = e,
        [r, o] = n.useState(!1),
        [c, d] = n.useState(t);
    return (n.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)("div", {
              className: a()(ep.hY, { [ep.Q]: !t, [ep.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: s
                  ? (0, i.jsx)(em.A, {
                        src: l,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: ep.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, i.jsx)("img", { src: l, alt: "", className: ep.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eC(e) {
    let { iconURL: t } = e,
        { backgroundGradient: l, hasFetchedColors: n } = (function (e) {
            let [t, l, i] = (0, eh.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${i ?? l})`, hasFetchedColors: (0, eh.D1)(e) };
        })(t);
    return (0, i.jsx)("div", { className: a()(ep.IH, ep.nY, { [ep.Kc]: n }), style: { backgroundImage: l } });
}
let eI = function (e) {
    let { application: t, bannerType: l, iconURL: s } = e,
        a = (0, c.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
        [r, o] = n.useState(!1),
        d = n.useCallback(() => {
            o(!0);
        }, []),
        u = n.useCallback(() => o(!1), []),
        m = (0, ea.Z$)(t),
        h = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: g } = n.useMemo(
            () =>
                h?.id == null || h?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, eo.z)({ id: h.id, banner: h.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: a
                              ? void 0
                              : (0, eo.z)({ id: h.id, banner: h.banner, canAnimate: !0, size: 600 }),
                      },
            [h?.id, h?.banner, a],
        );
    return (0, i.jsx)("div", {
        className: ep.cI,
        style: { aspectRatio: "card" === l ? eg : ex },
        onMouseEnter: d,
        onFocus: d,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === l && m
                ? (0, i.jsx)(ev, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == g ? void 0 : g,
                  })
                : null != p
                  ? (0, i.jsx)(ej, { isHovered: r, url: p, animatedUrl: g })
                  : (0, i.jsx)(eC, { iconURL: s }),
    });
};
var ef = l(240795);
let eN = function (e) {
    let { application: t, onSelectApplication: l, showCategory: s = !1 } = e,
        a = n.useRef(null),
        r = t.categories?.[0],
        [o, c] = n.useState(!1),
        d = n.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, ea.NO)(t),
        h = n.useCallback(() => {
            l(t.id);
        }, [l, t.id]),
        p = n.useMemo(() => (o ? eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        x = s && null != r;
    return (0, i.jsx)(es.L, {
        innerRef: a,
        onChange: d,
        active: !o,
        children: (0, i.jsx)("div", {
            ref: a,
            className: ef.kL,
            children: (0, i.jsxs)(er.A, {
                className: ef.Nr,
                onClick: h,
                onContextMenu: () => {},
                "aria-label": G.intl.string(G.t.np1Wru),
                children: [
                    (0, i.jsxs)("div", {
                        className: ef.wx,
                        children: [
                            (0, i.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, i.jsx)(eI, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, i.jsx)("div", {
                                className: ef.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, i.jsx)("img", {
                                          src: p,
                                          alt: "",
                                          className: ef.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: ef.eV,
                        children: [
                            (0, i.jsx)("div", {
                                className: ef.gn,
                                children: (0, i.jsx)("div", {
                                    className: ef.DD,
                                    children: (0, i.jsx)(m.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        className: ef.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            x || u
                                ? (0, i.jsxs)("div", {
                                      className: ef.op,
                                      children: [
                                          x
                                              ? (0, i.jsx)(g.E, {
                                                    className: ef.m4,
                                                    variant: "body-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          x && u
                                              ? (0, i.jsx)(g.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          u
                                              ? (0, i.jsx)(g.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-subtle",
                                                    children: G.intl.string(G.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(g.E, {
                                className: ef.h_,
                                variant: "body-sm/medium",
                                color: "text-default",
                                lineClamp: x || u ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var ey = l(297439);
let eb = { results: [], totalPages: 0, loadId: "" },
    eE = function (e) {
        let { categoryId: t, onSelectApplication: l, resetScroll: s } = e,
            [a, r] = n.useState(1),
            o = n.useCallback((e) => {
                r(e);
            }, []);
        n.useEffect(() => {
            r(1);
        }, [t]);
        let c = n.useMemo(() => ({ query: "", page: a, pageSize: 48, categoryId: t }), [a, t]),
            d = (0, J.bG)([et.A], () => et.A.getFetchState({ query: "", page: a, pageSize: 48, categoryId: t })),
            u = (0, J.cf)([et.A], () => et.A.getSearchResults(c) ?? eb),
            m = (0, Z.A)(u) ?? eb,
            { results: h, totalPages: p, loadId: g } = n.useMemo(() => (d === ee.e.FETCHING ? m : u), [d, m, u]),
            x = n.useMemo(() => h?.filter((e) => e.type === q.j.APPLICATION), [h]),
            v = n.useCallback((e) => {
                let { page: t, activeCategoryId: l, onSuccessCallback: i, guildId: n, fetchCounts: s } = e;
                (s && _.$P({ query: "", guildId: n }),
                    _.$P({
                        query: "",
                        guildId: n,
                        options: { page: t, pageSize: 48, categoryId: l },
                        onSuccessCallback: i,
                    }));
            }, []);
        n.useEffect(() => {
            (s(), v({ page: a, activeCategoryId: t, onSuccessCallback: () => {} }));
        }, [t, s, v, a]);
        let j = n.useCallback(
            (e, t) => {
                (k(O.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: D.ev.SEARCH,
                    application_id: e,
                    load_id: g,
                    position: t,
                }),
                    l(e));
            },
            [g, l],
        );
        return d === ee.e.ERROR
            ? (0, i.jsx)("div", { className: ey.Un, children: (0, i.jsx)($, { className: ey.z3 }) })
            : (0, i.jsxs)(en, {
                  loading: d === ee.e.FETCHING,
                  children: [
                      (0, i.jsx)("div", {
                          className: ey.Qs,
                          children: x?.map((e, t) => {
                              if (e.type !== q.j.APPLICATION) return (e.type, null);
                              {
                                  let l = e.data;
                                  return (0, i.jsx)(eN, { application: l, onSelectApplication: (e) => j(e, t) }, l.id);
                              }
                          }),
                      }),
                      (0, i.jsx)(Q.m, {
                          className: ey.JV,
                          totalCount: Math.min(48 * p, 4800),
                          pageSize: 48,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: a,
                          onPageChange: o,
                      }),
                  ],
              });
    };
var e_ = l(289456);
let eS = function (e) {
    let { tabId: t, onSelectApplication: l, onScroll: s } = e,
        a = n.useRef(null),
        r = n.useCallback(() => {
            a.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, c.bG)([P.A], () => P.A.getCategories()),
        d = n.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = n.useMemo(
            () =>
                null != d
                    ? (function (e) {
                          switch (e.id) {
                              case 4:
                                  return G.intl.string(G.t["3m9Egb"]);
                              case 6:
                                  return G.intl.string(G.t.VJRr3Y);
                              case 8:
                                  return G.intl.string(G.t.Uv7mFd);
                              case 9:
                                  return G.intl.string(G.t.TEK9Ax);
                              case 10:
                                  return G.intl.string(G.t.lfBt2T);
                          }
                          return "";
                      })(d)
                    : "",
            [d],
        );
    return (0, i.jsxs)(X.A, {
        onScroll: s,
        ref: a,
        children: [
            (0, i.jsx)(B.A, { title: d?.name ?? "", description: u, children: (0, i.jsx)(z.A, {}) }),
            (0, i.jsx)(Y.A, {
                children:
                    null == d
                        ? (0, i.jsx)("div", { className: e_.U, children: (0, i.jsx)($, { className: e_.z }) })
                        : (0, i.jsx)(eE, { categoryId: d.id, onSelectApplication: l, resetScroll: r }),
            }),
        ],
    });
};
var eR = l(123791),
    eP = l(761508),
    eT = l(149050);
let eL = function (e) {
    let { tabs: t, onTabSelect: l, selectedTab: n, className: s } = e;
    return (0, i.jsx)(eP.V, {
        type: "top-pill",
        selectedItem: n,
        onItemSelect: l,
        className: s,
        children: t.map((e, t) => {
            let { id: l, label: n, count: s } = e;
            return (0, i.jsx)(
                eP.V.Item,
                {
                    id: l,
                    className: a()(eT.V, { [eT.r]: 0 === t }),
                    "aria-label": n,
                    children: null != s && s > 0 ? `${n} (${s})` : n,
                },
                l,
            );
        }),
    });
};
var eD = l(82293),
    eO = l(403362),
    ek = l(939249),
    eU = l(693942),
    ew = l(265705),
    eM = l(451988),
    eG = l(408278),
    eV = l(921853),
    eF = l(477155),
    eH = l(320448),
    ez = l(935286),
    eB = l(73153),
    eY = l(725951),
    eX = l(188567),
    eK = l(1671);
let eW = 16 / 9;
class e$ extends n.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        (eX._.subscribe(O.jej.CAROUSEL_PREV, this.handlePrevious),
            eX._.subscribe(O.jej.CAROUSEL_NEXT, this.handleNext));
    }
    componentWillUnmount() {
        (eX._.unsubscribe(O.jej.CAROUSEL_PREV, this.handlePrevious),
            eX._.unsubscribe(O.jej.CAROUSEL_NEXT, this.handleNext));
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: l,
                arrowClassName: n,
                paginationDotClassName: s,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            d = a()(eK.sb, { [eK.JU]: l }, n);
        return (0, i.jsxs)("div", {
            className: a()(eK.ne, this.props.className),
            children: [
                (0, i.jsx)("div", {
                    className: d,
                    children: (0, i.jsx)(eG.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eV.ChevronSmallLeftIcon : eF.ArrowSmallLeftIcon,
                        "aria-label": G.intl.string(G.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: eK.r$,
                    children: o().times(t, (t) =>
                        (0, i.jsx)(
                            ek.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? a()(eK.NU, r) : a()(eK.Lw, s),
                                "aria-label": G.intl.formatToPlainString(G.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: d,
                    children: (0, i.jsx)(eG.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eH.ChevronSmallRightIcon : ez.ArrowSmallRightIcon,
                        "aria-label": G.intl.string(G.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: l, current: i } = this.props;
        (l?.(i, e, "jump"), t(e));
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            i = l(1);
        e?.(t, i, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            i = l(-1);
        e?.(t, i, "previous");
    };
}
class eZ extends n.PureComponent {
    timer = new eM.IX();
    static defaultProps = { aspectRatio: eW };
    constructor(e) {
        (super(e),
            (this.state = {
                visibleIndex: !0 === e.randomize ? o().random(0, e.items.length - 1) : 0,
                direction: eY.f.LEFT,
                paused: !1,
            }));
    }
    handleWindowFocusChange = (e) => {
        let { focused: t } = e;
        this.setState({ paused: !t });
    };
    componentDidMount() {
        (eB.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer());
    }
    componentWillUnmount() {
        (this.stopTimer(), eB.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange));
    }
    componentDidUpdate(e, t) {
        function l(e, t) {
            return !e.initialPaused && !t.paused;
        }
        let i = l(this.props, this.state),
            n = l(e, t);
        i && !n ? this.startTimer() : !i && n && this.stopTimer();
        let { items: s } = this.props,
            { visibleIndex: a } = this.state;
        null == s[a] && this.changeItem(s, 1);
    }
    startTimer() {
        null != this.props.delay && this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        null != this.props.delay && this.timer.stop();
    }
    changeItem(e, t) {
        let l = this.state.visibleIndex + t;
        l < 0 ? (l = e.length - 1) : l > e.length - 1 && (l = 0);
        let { onChangeItem: i } = this.props;
        i?.(e[l], this.state.visibleIndex, l);
        let n = t > 0 ? eY.f.LEFT : eY.f.RIGHT;
        return (this.setState({ visibleIndex: l, direction: n }), l);
    }
    getCurrentDirection = () => this.state.direction;
    nextItem = () => {
        let { items: e } = this.props;
        this.changeItem(e, 1);
    };
    previousItem = () => {
        let { items: e } = this.props;
        this.changeItem(e, -1);
    };
    render() {
        let {
                items: e,
                renderItem: t,
                className: l,
                slideAnimatorClassName: n,
                slideAnimatorSpringSettings: s,
                slideAnimatorFadeInOut: r,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: m,
                themedPagination: h,
                includeHitboxPadding: p,
                style: g,
                aspectRatio: x,
                children: v,
            } = this.props,
            { visibleIndex: j } = this.state;
        return (0, i.jsxs)("div", {
            className: eK.zr,
            children: [
                (0, i.jsxs)("div", {
                    className: a()(eK.Cf, l),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, i.jsx)("div", {
                            style: { aspectRatio: x },
                            children: (0, i.jsx)(eY.A, {
                                className: a()(eK.Dk, n),
                                step: j,
                                direction: this.getCurrentDirection(),
                                springSettings: s,
                                fadeInOut: r,
                                children: t(e[j], j),
                            }),
                        }),
                        e.length > 1 &&
                            (0, i.jsx)(e$, {
                                className: a()(o, h ? eK.S$ : eK.X$),
                                arrowClassName: c,
                                includeHitboxPadding: p,
                                current: j,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: m,
                            }),
                    ],
                }),
                null != v && v({ step: j, direction: this.getCurrentDirection() }),
            ],
        });
    }
    handleSetItem = (e) => {
        let { visibleIndex: t } = this.state,
            { items: l } = this.props;
        this.changeItem(l, e - t);
    };
    handleMouseEnter = () => {
        this.setState({ paused: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ paused: !1 });
    };
    handleIntentionalChange = (e, t, l) => {
        let { items: i, onIntentionalChange: n } = this.props;
        return n?.(i[t], e, t, l);
    };
}
var eq = l(619517),
    eJ = l(248643),
    eQ = l(383055),
    e0 = l(615300),
    e1 = l(456412),
    e8 = l(133296),
    e7 = l(516521),
    e4 = l(532197),
    e6 = l(837344);
let e5 = { CENTER: e6.Hu, LEFT: e6.Vl };
class e3 extends n.PureComponent {
    static Align = e5;
    static defaultProps = { scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 }, align: e5.CENTER };
    _scrollerRef = null;
    _paginationItemRefs = [];
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    handleSetScrollerRef = (e) => {
        this._scrollerRef = e;
    };
    handleSelectedIndexChange = (e) => {
        let t = this._scrollerRef;
        if (null == t) return;
        let l = this._paginationItemRefs[e];
        null != l && t.scrollIntoViewNode({ node: l, animate: !0, padding: this.props.scrollToPadding });
    };
    handlePageClick = (e) => {
        let { onSetItem: t } = this.props;
        t(e);
    };
    render() {
        let { renderItem: e, items: t, vertical: l, paginationContainerClass: s, align: r } = this.props,
            o = l ? e6.XA : e6.BU;
        return (0, i.jsx)(e7.Gt, {
            orientation: l ? "vertical" : "horizontal",
            className: a()(o, s, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, l) =>
                n.cloneElement(e(t, l), {
                    onClick: () => this.handlePageClick(l),
                    key: l,
                    ref: (e) => {
                        this._paginationItemRefs[l] = e;
                    },
                }),
            ),
        });
    }
}
class e2 extends n.PureComponent {
    handlePrevClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(ek.D, {
            className: a()(e6.t1, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(e4.A, { className: e6.UE, direction: e4.A.Directions.LEFT }),
        });
    }
}
class e9 extends n.PureComponent {
    handleNextClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(ek.D, {
            className: a()(e6.XS, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(e4.A, { className: e6.UE, direction: e4.A.Directions.RIGHT }),
        });
    }
}
var te = l(452282),
    tt = l(875149),
    tl = l(811306);
let ti = { width: 640, height: 360, margin: 15 },
    tn = { width: 880, height: 495, margin: 20 },
    ts = { width: 1920, height: 1080 },
    ta = { width: 1280, height: 720 };
function tr(e) {
    return (0, eQ.$o)({ ...e, className: tl.tN, mediaPlayerClassName: tl.yf });
}
function to(e) {
    return (0, i.jsx)(eq.Ay, { ...e });
}
function tc(e) {
    let t,
        l,
        n,
        {
            item: s,
            size: a,
            onPlay: r,
            onEnded: o,
            onClick: c,
            playable: d,
            volume: u,
            isMuted: m,
            onVolumeChange: h,
            onMute: p,
        } = e;
    if (s.type === O.geh.YOUTUBE_VIDEO)
        ((t = { url: (0, O.PE$)(s.youtubeVideoId), ...ts }),
            (l = {
                url: `${(0, O.uJ2)(s.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                ...ta,
            }),
            (n = eU.mt.YOUTUBE));
    else {
        let e = null != s.width ? s.width : 0,
            i = null != s.height ? s.height : 0;
        ((t = { url: s.thumbnailSrc, width: e, height: i }),
            (l = { url: s.src, proxyURL: s.src, width: e, height: i }));
    }
    let g = (0, i.jsx)(ew.rr, {
        href: null,
        thumbnail: t,
        video: l,
        provider: n,
        allowFullScreen: !0,
        maxHeight: a.height,
        maxWidth: a.width,
        onPlay: r,
        onEnded: o,
        playable: d,
        className: tl.Ki,
        volume: u,
        onVolumeChange: h,
        autoMute: m,
        onMute: p,
        autoPlay: d,
        renderVideoComponent: tr,
        renderImageComponent: to,
        renderLinkComponent: eQ.bU,
    });
    return d ? g : (0, i.jsx)(ek.D, { className: tl.AU, onClick: c, children: g });
}
function td() {
    return (0, i.jsx)("div", {
        className: tl.eM,
        children: (0, i.jsx)(tt.A, { inactive: !0, className: tl.J6, renderLinkComponent: eQ.bU }),
    });
}
class tu extends n.PureComponent {
    static defaultProps = { autoplayInterval: 8e3, paused: !1 };
    state = {
        currentIndex: 0,
        animate: !0,
        playingVideo: !1,
        hasInteracted: !1,
        hoveringPreviousItem: !1,
        hoveringNextItem: !1,
        volume: 1,
        isMuted: !0,
    };
    componentDidMount() {
        (eX._.subscribe(O.jej.CAROUSEL_PREV, this.manualPrevious),
            eX._.subscribe(O.jej.CAROUSEL_NEXT, this.manualNext));
    }
    componentWillUnmount() {
        (eX._.unsubscribe(O.jej.CAROUSEL_PREV, this.manualPrevious),
            eX._.unsubscribe(O.jej.CAROUSEL_NEXT, this.manualNext));
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = tn;
        return (null != e && e < t.width && (t = ti), t);
    };
    getStyle(e, t) {
        let l = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: e0.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: e0.A.Extrapolate.CLAMP }),
            filter: e0.A.template`grayscale(${l})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: l, onIntentionalChange: i },
                state: { currentIndex: n },
            } = this,
            s = (0, te.U3)(n, l.length),
            a = (0, te.U3)(e, l.length),
            r = 1 === Math.abs(e - s) || (e === l.length - 1 && 0 === s) || (0 === e && s === l.length - 1);
        (this.setState({ playingVideo: !1, currentIndex: a, animate: r, hasInteracted: t }),
            t && null != i && i(l[a], s, a));
    };
    autoNext = () => {
        this.setItem(this.state.currentIndex + 1, !1);
    };
    manualNext = () => {
        this.setItem(this.state.currentIndex + 1, !0);
    };
    manualPrevious = () => {
        this.setItem(this.state.currentIndex - 1, !0);
    };
    handlePlay = (e) => this.setState({ playingVideo: !0, hasInteracted: !e });
    handleEnded = () => {
        this.state.hasInteracted || this.autoNext();
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleVideoClick = (e) => {
        this.setItem(e, !0);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: l } = this.props;
        (null != l && l(e, t), this.setState({ hasInteracted: !0 }));
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    handleEdgeItemMouseLeave = () => {
        this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
    };
    renderCarouselImage = (e, t, l) =>
        l
            ? (0, i.jsx)(ek.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: tl.AU,
                  children: (0, i.jsx)("img", { src: e.src, alt: "", className: tl.NP }),
              })
            : (0, i.jsx)(ek.D, {
                  onClick: () => this.setItem(t, !0),
                  className: tl.AU,
                  children: (0, i.jsx)("img", { alt: "", className: tl.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, l) => {
        let { currentIndex: n, volume: s, isMuted: r } = this.state,
            o = t === (0, te.U3)(n, this.props.items.length);
        return (0, i.jsx)(e0.A.div, {
            className: a()(tl.AS, { [tl.Xt]: o }),
            style: null != l ? this.getStyle(t, l) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === O.geh.VIDEO || e.type === O.geh.YOUTUBE_VIDEO
                    ? (0, i.jsx)(tc, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: s,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: r,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: l, hoveringPreviousItem: n, hoveringNextItem: s } = this.state,
            r = (0, i.jsx)(te.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: l,
                edgeItems: 2,
            });
        return e.length <= 1
            ? r
            : (0, i.jsxs)("div", {
                  className: tl.HY,
                  children: [
                      r,
                      (0, i.jsx)(e2, { onClick: this.manualPrevious, className: a()(tl.UE, { [tl.h_]: n }) }),
                      (0, i.jsx)(e9, { onClick: this.manualNext, className: a()(tl.UE, { [tl.h_]: s }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        switch (e.type) {
            case O.geh.YOUTUBE_VIDEO:
                return (0, O.PE$)(e.youtubeVideoId);
            case O.geh.IMG:
                return e.src;
            case O.geh.VIDEO:
                return e.thumbnailSrc;
            default:
                return;
        }
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: l } = this.state,
            n = l === t;
        return (0, i.jsxs)(
            "div",
            {
                className: a()(tl.Yw, n ? tl.sM : tl.N7),
                children: [
                    (0, i.jsx)("img", {
                        alt: e.alt ?? String(t),
                        className: tl.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === O.geh.YOUTUBE_VIDEO || e.type === O.geh.VIDEO ? (0, i.jsx)(td, {}) : null,
                    n ? (0, i.jsx)("div", { className: tl.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: l, paused: n } = this.props,
            { currentIndex: s, playingVideo: a, hasInteracted: r } = this.state;
        return (0, i.jsxs)(e8.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: l,
            className: t,
            disable: a || r || n,
            children: [
                this.renderCarousel(),
                (0, i.jsx)("div", {
                    className: tl.X$,
                    children: (0, i.jsx)(e3, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: s,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: tl.XG,
                        align: e.length < 6 ? e3.Align.LEFT : e3.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e1.A)(tu);
var tm = l(882188);
function th(e) {
    let { className: t, ...l } = e;
    return (0, i.jsx)(eJ.A, {
        ...l,
        className: a()(tm.Zy, t),
        mediaPlayerClassName: tm.Zy,
        renderLinkComponent: eQ.bU,
    });
}
function tp(e) {
    let { containerClassName: t, className: l, ...n } = e;
    return (0, i.jsx)(eq.Ay, { ...n, className: a()(l, t) });
}
let tg = { width: 1280, height: 720 },
    tx = { width: 640, height: 360 },
    tv = (e) => {
        let t,
            l,
            n,
            { item: s, onPlay: a, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (s.type === O.geh.YOUTUBE_VIDEO)
            ((t = { url: (0, O.PE$)(s.youtubeVideoId), ...tg }),
                (l = {
                    url: `${(0, O.uJ2)(s.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                    ...tx,
                }),
                (n = eU.mt.YOUTUBE));
        else {
            let e = null != s.width ? s.width : 0,
                i = null != s.height ? s.height : 0;
            ((t = { url: s.thumbnailSrc, width: e, height: i }),
                (l = { url: s.src, proxyURL: s.src, width: e, height: i }));
        }
        return (0, i.jsx)("div", {
            className: tm.x,
            children: (0, i.jsx)(ew.rr, {
                className: tm.Zy,
                iframeWrapperClassName: tm.Zy,
                href: null,
                thumbnail: t,
                video: l,
                provider: n,
                maxHeight: ti.height,
                maxWidth: "small",
                onPlay: a,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: d,
                onMute: c,
                autoPlay: u,
                renderImageComponent: tp,
                renderVideoComponent: th,
                renderLinkComponent: eQ.bU,
            }),
        });
    };
class tj extends n.PureComponent {
    static defaultProps = { paused: !1, videoAutoPlay: !0 };
    state = {
        hasInteracted: !1,
        isVideoPlaying: !1,
        isMuted: !0,
        volume: 1,
        status: new Map(),
        imageLoadingStartTime: new Map(),
    };
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 &&
            e[0].type === O.geh.IMG &&
            this.setState({
                imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()),
            });
    }
    handlePlay = (e) => {
        this.setState({ isVideoPlaying: !0, hasInteracted: !e });
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleChangeItem = (e) => {
        (this.setState({ isVideoPlaying: !1 }),
            e.type === O.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                }));
    };
    handleIntentionalChange = (e, t, l, i) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: n } = this.props;
        null != n && n(e, t, l, i);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: l } = this.props;
        (null != l && l(e, t), this.setState({ hasInteracted: !0 }));
    }
    handleOnErrorImg = (e) => {
        this.setState({ status: new Map(this.state.status).set(e.target.src, "errored") });
    };
    handleOnLoadImg = (e) => {
        let { onImageLoad: t } = this.props;
        this.setState({ status: new Map(this.state.status).set(e.target.src, "loaded") });
        let l = this.state.imageLoadingStartTime.get(e.target.src),
            i = null != l ? Date.now() - l : void 0;
        t?.({ src: e.target.src, loadTimeMs: i });
    };
    renderItem = (e, t) => {
        let l,
            { isMuted: n, volume: s } = this.state,
            { videoAutoPlay: r } = this.props;
        switch (e.type) {
            case O.geh.YOUTUBE_VIDEO:
            case O.geh.VIDEO:
                l = (0, i.jsx)(tv, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: n,
                    volume: s,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                });
                break;
            case O.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t.UvDfMz) });
                    return (0, i.jsx)("div", {
                        className: tm.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? G.intl.string(G.t.X4IxWL);
                    l = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(el.y, {
                                className: a()(tm.u1, { [tm.R]: void 0 !== this.state.status.get(e.src) }),
                                type: el.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, i.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: a()(tm.JD, { [tm.R]: "loaded" !== this.state.status.get(e.src) }),
                                src: e.src,
                                alt: t,
                            }),
                        ],
                    });
                }
                break;
            default:
                throw Error("Unexpected MediaType");
        }
        return (0, i.jsx)(ek.D, { className: tm.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: l });
    };
    render() {
        let { items: e, autoplayInterval: t, className: l, paused: n, themedPagination: s } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(eZ, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: n || r,
            renderItem: this.renderItem,
            className: a()(tm.Gt, l),
            themedPagination: s,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var tA = l(256905),
    tC = l(531685),
    tI = l(173018);
function tf(e) {
    let { application: t, carouselItems: l } = e,
        s = (0, c.bG)([tC.A], () => tC.A.isFocused()),
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { className: tI.M, src: W, "aria-hidden": !0, alt: "" }),
                (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: G.intl.string(G.t.UvDfMz) }),
            ],
        });
    l.forEach((e, i) => {
        e.alt = G.intl.formatToPlainString(G.t.sSEhHb, { index: i + 1, totalImages: l.length, name: t.name });
    });
    let r = n.useCallback(
        (e, t) => {
            if (e.type === O.geh.IMG) {
                let t = l.filter((e) => e.type === O.geh.IMG),
                    i = t.findIndex((t) => t === e);
                if (i < 0) return;
                let n = t.map((e) => {
                    var t;
                    return {
                        url: ((t = e.src), `${t.split("?")[0]}?size=2048`),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: "IMAGE",
                    };
                });
                (0, tA.R)({
                    items: n,
                    startingIndex: i,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [l],
    );
    return 0 === l.length
        ? null
        : (0, i.jsx)(tj, {
              className: tI.D,
              themedPagination: !0,
              items: l,
              autoplayInterval: 8e3,
              paused: !s,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: a,
          });
}
var tN = l(168186);
l(827669);
var ty = l(853618);
function tb(e) {
    let { application: t } = e,
        l = n.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tN.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              className: ty.hd,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: G.intl.string(G.t.swIgTL),
                  }),
                  (0, i.jsx)("div", {
                      className: ty.hQ,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: ty.dO,
                                  children: [
                                      (0, i.jsxs)(g.E, {
                                          className: ty.p6,
                                          variant: "mono-md/bold",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, i.jsx)(g.E, {
                                          variant: "body-md/normal",
                                          color: "text-default",
                                          children: e.displayDescription,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var tE = l(534890),
    t_ = l(812991),
    tS = l(177953),
    tR = l(152249),
    tP = l(975571),
    tT = l(889558),
    tL = l(98490);
let tD = tP.A.getArticleURL(O.MVz.BOT_DATA_ACCESS);
function tO(e) {
    let { application: t } = e,
        { hasMessageContent: l, hasGuildPresences: s, hasGuildMembers: a, hasIntents: r } = (0, tR.Z)(t),
        o = n.useCallback(() => {
            null != t.privacy_policy_url && (0, tT.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, i.jsxs)("div", {
        className: tL.hd,
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: G.intl.string(G.t.QzDgMq),
            }),
            (0, i.jsxs)("div", {
                className: tL.hQ,
                children: [
                    r &&
                        (0, i.jsxs)("ul", {
                            className: tL.In,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-default",
                                    children: G.intl.string(G.t.U6KH5S),
                                }),
                                l &&
                                    (0, i.jsx)(tk, {
                                        icon: tE.ChatIcon,
                                        heading: G.intl.string(G.t.gJpBO2),
                                        body: G.intl.string(G.t["L+QVbh"]),
                                    }),
                                s &&
                                    (0, i.jsx)(tk, {
                                        icon: t_.UserCircleStatusIcon,
                                        heading: G.intl.string(G.t["jo0oj/"]),
                                        body: G.intl.string(G.t.Dm0jqx),
                                    }),
                                a &&
                                    (0, i.jsx)(tk, {
                                        icon: tS.GroupIcon,
                                        heading: G.intl.string(G.t.QZql7O),
                                        body: G.intl.string(G.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, i.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: G.intl.format(G.t.b6nqk0, { helpCenterUrl: tD }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, i.jsx)(g.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            className: tL.hM,
                            children: G.intl.format(G.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tk(e) {
    let { icon: t, heading: l, body: n } = e;
    return (0, i.jsxs)("li", {
        className: tL.KT,
        children: [
            (0, i.jsx)(t, { color: "currentColor", size: "md" }),
            (0, i.jsxs)("div", {
                className: tL.D6,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: n }),
                ],
            }),
        ],
    });
}
var tU = l(692617),
    tw = l(664121),
    tM = l(682163),
    tG = l(773669),
    tV = l(596477);
function tF(e) {
    let {
            application: t,
            mutualGuilds: l,
            className: n,
            textVariant: s = "body-sm/normal",
            guildsClassName: r,
            children: o,
        } = e,
        d = (0, c.bG)([tG.default], () => tG.default.locale),
        u = new Intl.ListFormat(d),
        m = t.directory_entry?.guild_count ?? 0,
        h = l ?? [],
        p = h.length,
        x = Math.max(0, m - p),
        v = (function (e, t, l, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === l) return G.intl.formatToPlainString(G.t.pnzE1t, { mutualGuildCount: t });
            let n = t > 0 ? G.t.YR8PSL : G.t.GQjq6c,
                s = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" });
            return G.intl.formatToPlainString(n, {
                guildCount: s.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: s.format(l),
            });
        })(m, p, x, d),
        j =
            h.length > 3
                ? G.intl.formatToPlainString(G.t.m6oRrA, { appNames: u.format(h.slice(2).map((e) => e.name)) })
                : void 0;
    return 0 === h.length && null == v
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  o,
                  (0, i.jsxs)("div", {
                      className: a()(n, tV.iE),
                      children: [
                          (0, i.jsx)("div", {
                              className: a()(tV.Pt, r),
                              children:
                                  h.length > 0
                                      ? (0, i.jsx)(tU.A, {
                                            guilds: h,
                                            maxGuilds: 3,
                                            size: tM.Ay.Sizes.SMOL,
                                            overflowTooltip: j,
                                        })
                                      : (0, i.jsx)(tw.ServerIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 16,
                                            height: 16,
                                            className: tV.DE,
                                        }),
                          }),
                          null != v ? (0, i.jsx)(g.E, { variant: s, color: "text-default", children: v }) : null,
                      ],
                  }),
              ],
          });
}
var tH = l(973172),
    tz = l(68316);
function tB(e) {
    let { application: t, className: l } = e,
        s = n.useCallback((e) => {
            (k(O.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: D.ev.APPLICATION,
            }),
                F({ categoryId: e.id }));
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, i.jsxs)("div", {
              className: l,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: G.intl.string(G.t.s7iald),
                  }),
                  (0, i.jsx)("div", {
                      className: tz.L,
                      children: t.categories.map((e) =>
                          (0, i.jsx)(
                              ek.D,
                              {
                                  className: tz.c,
                                  onClick: () => s(e),
                                  children: (0, i.jsx)(g.E, {
                                      variant: "body-sm/semibold",
                                      color: "redesign-button-tertiary-text",
                                      children: e.name,
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var tY = l(462887),
    tX = l(514042),
    tK = l(194261),
    tW = l(173936),
    t$ = l(9578),
    tZ = l(736653),
    tq = l(573648),
    tJ = l(194047);
function tQ(e) {
    let { application: t, className: l, innerClassName: n } = e,
        s = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || s.length > 0
        ? (0, i.jsxs)("div", {
              className: a()(tJ.kL, l),
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: G.intl.string(G.t.l6DP2n),
                  }),
                  (0, i.jsxs)("div", {
                      className: a()(tJ.p_, n),
                      children: [
                          s.map((e, t) => (0, i.jsx)(t0, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, i.jsx)(t1, {
                                    icon: tX.FileIcon,
                                    url: t.terms_of_service_url,
                                    children: G.intl.string(G.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, i.jsx)(t1, {
                                    icon: tK.LockIcon,
                                    url: t.privacy_policy_url,
                                    children: G.intl.string(G.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function t0(e) {
    let { url: t, children: l } = e,
        n = (0, tZ.Ay)(),
        s = tq.A.getByUrl(t),
        a = (0, tY.M)(n) ? s?.icon?.darkSVG : s?.icon?.lightSVG;
    return (0, i.jsx)(t1, { icon: void 0 === a ? tW.LinkIcon : void 0, imageSrc: a, url: t, children: l });
}
function t1(e) {
    let { icon: t, imageSrc: l, iconColor: n, url: s, children: r } = e,
        o = U(),
        c = null;
    null != t
        ? (c = (0, i.jsx)(t, { className: tJ.GU, color: n ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != l && (c = (0, i.jsx)("img", { className: tJ.GR, src: l, alt: "" }));
    let d = (0, i.jsxs)(i.Fragment, {
        children: [c, (0, i.jsx)(g.E, { className: tJ.so, variant: "body-sm/medium", selectable: !0, children: r })],
    });
    return (0, i.jsx)(t$.A, {
        href: s,
        className: a()(tJ.Aw, tJ.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t8 = l(449054),
    t7 = l(664343),
    t4 = l(950305),
    t6 = l(573435),
    t5 = l(714991),
    t3 = l(776231),
    t2 = l(537975),
    t9 = l(882553),
    le = l(937495),
    lt = l(517061);
function ll(e) {
    let { guild: t, className: l, onClick: n } = e,
        s = (0, tZ.Ay)(),
        r = (0, t2.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = eo.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t3.mZ)() }),
        c =
            null != o
                ? o
                : (function (e) {
                      switch (e) {
                          case O.NJ8.DARK:
                              return le;
                          case O.NJ8.LIGHT:
                              return lt;
                      }
                  })(s),
        d = eo.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, i.jsxs)(ek.D, {
        className: a()(t9.Nr, l),
        onClick: n,
        "aria-label": G.intl.string(G.t.RB4L2x),
        children: [
            (0, i.jsxs)("div", {
                className: t9.MY,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: t9.j0 }),
                    (0, i.jsx)("div", {
                        className: t9.$f,
                        children: (0, i.jsx)(t6.Ay, {
                            mask: t6.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)("div", {
                                className: t9.SA,
                                children: (0, i.jsx)(tM.Ay, {
                                    className: t9.__invalid_icon,
                                    iconSrc: d,
                                    guild: r,
                                    size: tM.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: t9.RN,
                children: [
                    (0, i.jsxs)("div", {
                        className: t9.Y_,
                        children: [
                            (0, i.jsx)(t5.A, { className: t9.n2, guild: t, tooltipColor: t7.ST.Colors.PRIMARY }),
                            (0, i.jsx)(m.D, { variant: "heading-sm/semibold", className: t9.J5, children: t.name }),
                        ],
                    }),
                    (0, i.jsx)(g.E, {
                        className: t9.eF,
                        variant: "body-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, i.jsx)("div", {
                        className: t9.Fj,
                        children: (0, i.jsxs)("div", {
                            className: t9.FG,
                            children: [
                                (0, i.jsx)(t4.UserIcon, { color: "currentColor", className: t9.NP, size: "xs" }),
                                (0, i.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    children: G.intl.format(G.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let li = "redirect_to_support_server";
function ln(e) {
    var t;
    let l,
        s,
        a,
        { application: r, className: o } = e,
        { onGoToSupportServer: d } =
            ((t = r),
            (l = U()),
            (s = (0, c.bG)([y.default], () => y.default.getSessionId())),
            (a = n.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        k(O.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let l = { page: O.liQ.APPLICATION_DIRECTORY };
                        await (0, t8.Z2)(e, l);
                    }
                } catch {}
            }, [t])),
            n.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && l && null != s && "true" === e.searchParams.get(li)) {
                    e.searchParams.delete(li);
                    let t = e.pathname + e.search;
                    ((0, N.bG)(t), a());
                }
            }, [l, a, s, t]),
            {
                onGoToSupportServer: n.useCallback(() => {
                    null != t?.guild?.id && (l ? a() : w({ [li]: "true" }));
                }, [t, a, l]),
            });
    return null != r.guild && r.guild.features.includes(O.GuildFeatures.DISCOVERABLE)
        ? (0, i.jsxs)("div", {
              className: o,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: G.intl.string(G.t.KJEO27),
                  }),
                  (0, i.jsx)(ll, { guild: r.guild, onClick: d }),
              ],
          })
        : null;
}
var ls = l(412645);
let la = (0, G.getAvailableLocales)();
function lr(e) {
    let { application: t, className: l } = e,
        s = (0, c.bG)([tG.default], () => tG.default.locale),
        { supportedLanguages: r, usersLanguageIsFirst: o } = n.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    l = e.has(s),
                    i = la.filter((t) => e.has(t.value));
                return (
                    l && i.sort((e, t) => (e.value === s ? -1 : +(t.value === s))),
                    { supportedLanguages: i.map((e) => G.intl.string(e.localizedName)), usersLanguageIsFirst: l }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, s]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-xs/semibold",
                color: "text-strong",
                children: G.intl.string(G.t.Fbjlu3),
            }),
            (0, i.jsx)("ul", {
                className: ls.nw,
                children: r.map((e, t) =>
                    (0, i.jsx)(
                        "li",
                        {
                            className: a()(ls.WH, ls.O6),
                            children: (0, i.jsx)(g.E, {
                                variant: 0 === t && o ? "body-sm/semibold" : "body-sm/normal",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
            " ",
        ],
    });
}
var lo = l(527308);
function lc(e) {
    let { className: t, view: l, application: n } = e,
        s = "embedded" === l,
        r = (0, tH.A)({ application: n });
    return (0, i.jsxs)("div", {
        className: a()(t, { [lo.PD]: !s, [lo.UT]: s }),
        children: [
            (0, i.jsxs)("div", {
                className: a()(lo.hd, { [lo.d5]: s }),
                children: [
                    (0, i.jsx)("div", {
                        className: lo.iY,
                        children: (0, i.jsx)(tF, {
                            application: n,
                            mutualGuilds: r,
                            className: lo.wu,
                            guildsClassName: lo.HG,
                            children: (0, i.jsx)(m.D, {
                                variant: "heading-xs/semibold",
                                color: "text-strong",
                                children: G.intl.string(G.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, i.jsx)(tB, { application: n, className: lo.iY }),
                    (0, i.jsx)(lr, { application: n, className: lo.iY }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(lo.hd, { [lo.d5]: s }),
                children: [
                    (0, i.jsx)(tQ, { application: n, className: lo.iY, innerClassName: s ? lo.RU : void 0 }),
                    (0, i.jsx)(ln, { application: n, className: lo.iY }),
                ],
            }),
        ],
    });
}
var ld = l(478676),
    lu = l.n(ld),
    lm = l(900797),
    lh = l(847374),
    lp = l(558179),
    lg = l(28863),
    lx = l(574332),
    lv = l(167189),
    lj = l(780788),
    lA = l(481859),
    lC = l(143145);
let lI = /^discord.gg\/[a-zA-Z0-9-]+/,
    lf = {
        ...lp.A.rules,
        heading: {
            ...lp.A.rules.heading,
            react(e, t, l) {
                let n = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, i.jsx)(lA.A, { tag: n, children: t(e.content, l) }, l.key);
            },
        },
        image: { ...lu().defaultRules.image },
        inviteLink: {
            order: lp.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? lI.exec(e) : null),
            parse: (e, t, l) => {
                let i = (0, lj.br)(e[0]);
                return null == i || i.type !== lv.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              (lx.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: i.code,
                                  context: { location: "Application Directory" },
                              }),
                                  l.closeModal?.());
                          },
                      };
            },
            react: (e, t, l) =>
                (0, i.jsx)(
                    lg.Anchor,
                    {
                        onClick: (t) => {
                            (t.preventDefault(), e.onClick());
                        },
                        children: (0, lC.tj)(e, t, l),
                    },
                    l.key,
                ),
        },
    };
var lN = l(148323);
let ly = lu().parserFor(lf),
    lb = lu().reactFor(lu().ruleOutput(lf, "react"));
function lE(e) {
    let { description: t, supportsMarkdown: l } = e,
        [s, r] = n.useState(!1),
        o = n.useRef(null);
    n.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return (e.observe(o.current), () => e.disconnect());
    }, []);
    let [c, d] = n.useState(!1),
        u = n.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: o,
                onFocus: () => {
                    s && d(!0);
                },
                className: a()({ [lN.mA]: !c, [lN.ii]: !c && "Safari" === platform.name }),
                children: l
                    ? (0, i.jsx)(lp.A, {
                          className: lN.R4,
                          parser: ly,
                          output: lb,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: t }),
            }),
            s || c ? (0, i.jsx)(l_, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function l_(e) {
    let { onToggle: t, isShowingMore: l } = e,
        s = n.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: lN.eR,
                    children: [
                        (0, i.jsx)(g.E, {
                            variant: "body-md/semibold",
                            color: "interactive-text-default",
                            children: l ? G.intl.string(G.t["vtfc4+"]) : G.intl.string(G.t.ZDRyuq),
                        }),
                        l
                            ? (0, i.jsx)(lm.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: lN.ys })
                            : (0, i.jsx)(lh.ChevronSmallDownIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: lN.ys,
                              }),
                    ],
                }),
            [l],
        );
    return (0, i.jsxs)(ek.D, {
        className: lN.dO,
        onClick: t,
        children: [(0, i.jsx)("div", { className: lN.yF }), s, (0, i.jsx)("div", { className: lN.yF })],
    });
}
let lS = function (e) {
    let { application: t } = e,
        l = t.directory_entry?.detailed_description,
        s = t.directory_entry?.short_description,
        a = n.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, i.jsx)(lE, { description: l, supportsMarkdown: !0 })
                    : null != s && s.length > 0
                      ? (0, i.jsx)(lE, { description: s, supportsMarkdown: !1 })
                      : null,
            [l, s],
        );
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              className: lN.l4,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: G.intl.string(G.t.txraKS),
                  }),
                  a,
              ],
          });
};
var lR = l(136722),
    lP = l(376092),
    lT = l(760711),
    lL = l(263442);
let lD = function (e) {
    let { application: t } = e,
        l = n.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return lP.Q.filter((t) => lR.zy(lR.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != l && l.length > 0
        ? (0, i.jsxs)("div", {
              className: lL.A,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: G.intl.string(G.t.runNF8),
                  }),
                  (0, i.jsx)(lT.A, {
                      className: lL.h,
                      grantedPermissions: l,
                      grantedPermissionsHeader: G.intl.string(G.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var lO = l(644647);
function lk(e) {
    let { application: t } = e,
        l = n.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(T.xb).filter(eO.Vq) ?? [], [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: lO.Xb,
                children: [
                    (0, i.jsx)(tf, { application: t, carouselItems: l }),
                    (0, i.jsx)(lS, { application: t }),
                    (0, i.jsx)(tb, { application: t }),
                    (0, i.jsx)(lD, { application: t }),
                    (0, i.jsx)(tO, { application: t }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lO.Q9,
                children: [
                    (0, i.jsx)("div", { className: lO.yF }),
                    (0, i.jsx)(m.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: G.intl.string(G.t["mD+J/i"]),
                    }),
                    (0, i.jsx)(lc, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
l(321073);
var lU = l(607399),
    lw = l(858899),
    lM = l(165862),
    lG = l(477782),
    lV = l(138134),
    lF = l(265872),
    lH = l(365199),
    lz = l(663341),
    lB = l(821609),
    lY = l(782134),
    lX = l(787389),
    lK = l(688810),
    lW = l(361926),
    l$ = l(48726),
    lZ = l(587895),
    lq = l(204776),
    lJ = l(260498),
    lQ = l(50268),
    l0 = l(25451),
    l1 = l(928658),
    l8 = l(327891),
    l7 = l(957565),
    l4 = l(692848),
    l6 = l(108861);
let l5 = "start_application_install",
    l3 = "launch_activity";
function l2(e) {
    let { renderDropdown: t, size: l } = e,
        s = n.useRef(null);
    return (0, i.jsx)(lF.Y, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return t(l);
        },
        position: "left",
        align: "top",
        animation: lF.Y.Animation.NONE,
        children: (e) =>
            (0, i.jsx)(eG.K, {
                buttonRef: s,
                variant: "secondary",
                size: l,
                icon: lH.MoreHorizontalIcon,
                "aria-label": G.intl.string(G.t["UKOtz+"]),
                ...e,
            }),
    });
}
function l9(e) {
    var t;
    let l,
        s,
        a,
        { application: r, variant: o, size: c, contentWidth: d } = e,
        { onClickInstallApplication: u, canInstall: m } =
            ((t = r),
            (l = U()),
            (s = (0, l$.A)(n.useMemo(() => (0, ea.SU)(t), [t]))),
            (a = n.useCallback(() => {
                let e = D.h.getField("guildId") ?? void 0;
                (0, l4.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            n.useEffect(() => {
                let e = new URL(location.href);
                if (l && "true" === e.searchParams.get(l5)) {
                    e.searchParams.delete(l5);
                    let t = e.pathname + e.search;
                    ((0, N.bG)(t), s && a());
                }
            }, [l, a, s]),
            {
                onClickInstallApplication: n.useCallback(() => {
                    if (
                        (k(O.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (lU.Fr || lU.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, l4.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (l) a();
                    else {
                        let e = D.h.getField("guildId");
                        (E.default.track(O.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: lU.Fr ? "mobile_web" : "desktop_web",
                        }),
                            w({ [l5]: "true" }));
                    }
                }, [t, a, l]),
                canInstall: s,
            });
    return "icon" === d
        ? (0, i.jsx)(eG.K, {
              variant: o,
              icon: lz.PlusLargeIcon,
              size: c,
              onClick: u,
              "aria-label": G.intl.string(G.t.NgXl3C),
              disabled: !m,
          })
        : (0, i.jsx)(lB.$, {
              variant: o,
              size: c,
              text: "small" === d ? G.intl.string(G.t.qRZ35t) : G.intl.string(G.t.NgXl3C),
              onClick: u,
              disabled: !m,
          });
}
function ie(e) {
    let { size: t, contentWidth: l, onClick: n, isSubmitting: s } = e;
    return "icon" === l
        ? (0, i.jsx)(eG.K, {
              variant: "primary",
              icon: lY.PlayIcon,
              size: t,
              onClick: n,
              loading: s,
              "aria-label": G.intl.string(G.t.QO7rO6),
          })
        : (0, i.jsx)(lB.$, { variant: "primary", size: t, text: G.intl.string(G.t.QO7rO6), onClick: n, loading: s });
}
let it = function (e) {
    var t, l;
    let { application: s, size: r, ref: o } = e,
        { analyticsLocations: d } = (0, lK.Ay)(),
        u = n.useCallback(() => {
            var e;
            (k(O.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: s.id }),
                (0, l7.C)(
                    ((e = s.id), `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, lw.P0)({ text: G.intl.string(G.t["L/PwZf"]), variant: "success" }),
                ));
        }, [s.id]),
        m = n.useCallback(() => {
            let e = l8.Ay.createFromServer(s);
            (0, l1.r3)({ application: e, entrypoint: "app_directory" });
        }, [s]),
        h = (0, lQ.A)({
            id: s.id,
            label: G.intl.string(G.t["FfCL+6"]),
            onSuccess: () => (0, lw.P0)({ text: G.intl.string(G.t.eNjAah), variant: "success" }),
        }),
        p = n.useCallback(
            (e, t) =>
                (0, i.jsxs)(lM.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": G.intl.string(G.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(lG.rX, {
                                  children: (0, i.jsx)(lG.Dr, {
                                      id: "copy",
                                      label: G.intl.string(G.t.z4sP5J),
                                      action: u,
                                      icon: tW.LinkIcon,
                                      leadingAccessory: { type: "icon", icon: tW.LinkIcon },
                                  }),
                              })
                            : null,
                        (0, i.jsx)(lG.rX, {
                            children: (0, i.jsx)(lG.Dr, {
                                id: "report",
                                label: G.intl.string(G.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: lV.FlagIcon },
                                action: m,
                            }),
                        }),
                        null != h ? (0, i.jsx)(lG.rX, { children: h }) : null,
                    ],
                }),
            [h, m, u],
        ),
        { onClickLaunchActivity: g, isSubmitting: x } = (function (e, t) {
            let l = e.id,
                i = e?.bot?.id,
                s = (0, l0.X)(e),
                a = (0, lW.Vr)({ context: { type: "contextless" }, applicationId: l, botUserId: i }),
                r = null != i && (0, ea.$B)(e) && (0, ea.Z$)(e) && (s || a),
                [o, d] = n.useState(!1),
                u = U(),
                m = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
                h = (0, lX.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => d(!0),
                    runAfterLaunchAttempt: () => d(!1),
                });
            n.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(l3);
                if (u && r && t && null != i && null != m) {
                    e.searchParams.delete(l3);
                    let t = e.pathname + e.search;
                    ((0, N.bG)(t), h());
                }
            }, [u, r, i, m, h]);
            let p = n.useCallback(async () => {
                if (null != i) {
                    if ((k(O.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: l }), !u))
                        return void w({ [l3]: "true" });
                    await h();
                }
            }, [l, i, u, h]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(s, d),
        v = null != g,
        j = v ? "secondary" : "primary",
        A =
            ((t = s.id),
            (l = (0, ea.Zd)(s)),
            !(0, c.bG)([lZ.A, lJ.Ay], () => (0, lq.iv)({ id: t, conjureProjectId: l }), [t, l]));
    return (0, i.jsxs)("div", {
        ref: o,
        children: [
            (0, i.jsxs)("div", {
                className: a()(l6.Ik, l6.U),
                children: [
                    v && (0, i.jsx)(ie, { size: r, contentWidth: "normal", onClick: g, isSubmitting: x }),
                    A && (0, i.jsx)(l9, { application: s, size: r, contentWidth: "normal", variant: j }),
                    l7.p5
                        ? (0, i.jsx)(eG.K, {
                              variant: "secondary",
                              size: r,
                              icon: tW.LinkIcon,
                              onClick: u,
                              "aria-label": G.intl.string(G.t.z4sP5J),
                          })
                        : null,
                    (0, i.jsx)(l2, { renderDropdown: (e) => p(!1, e), size: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(l6.Ik, l6.EX),
                children: [
                    v && (0, i.jsx)(ie, { size: r, contentWidth: "small", onClick: g, isSubmitting: x }),
                    A && (0, i.jsx)(l9, { application: s, size: r, contentWidth: "small", variant: j }),
                    (0, i.jsx)(l2, { renderDropdown: (e) => p(l7.p5, e), size: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(l6.Ik, l6.nU),
                children: [
                    v && (0, i.jsx)(ie, { size: r, contentWidth: "icon", onClick: g, isSubmitting: x }),
                    A && (0, i.jsx)(l9, { application: s, size: r, contentWidth: "icon", variant: j }),
                    (0, i.jsx)(l2, { renderDropdown: (e) => p(l7.p5, e), size: r }),
                ],
            }),
        ],
    });
};
var il = l(973489);
let ii = function (e) {
    let { application: t, onButtonsVisibilityChange: l } = e,
        s = n.useRef(null),
        a = n.useMemo(() => eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = n.useMemo(() => {
            let e = [];
            return (
                (0, ea.b7)(t) && e.push(G.intl.string(G.t.LO4f0P)),
                (0, ea.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(G.intl.string(G.t["8z5B2U"]))),
                (0, ea.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(G.intl.string(G.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eI, { application: t, bannerType: "detail", iconURL: a }),
            (0, i.jsx)("div", {
                className: il.H,
                style: { height: 52 },
                children: (0, i.jsx)("img", {
                    src: a,
                    alt: "",
                    className: il.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, i.jsxs)("div", {
                className: il.op,
                children: [
                    (0, i.jsxs)("div", {
                        className: il.tJ,
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, i.jsx)("div", {
                                className: il.A7,
                                children: r.map((e, t) =>
                                    (0, i.jsx)(
                                        g.E,
                                        {
                                            className: il.MO,
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: e,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, i.jsx)(es.L, {
                        innerRef: s,
                        onChange: l,
                        active: !0,
                        children: (0, i.jsx)(it, { ref: s, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var is = l(172218),
    ia = l(268951);
function ir(e) {
    let { applicationId: t, similarApplications: l, onSelectApplication: s, similarLoadId: a } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: l } = e,
                [i, s] = n.useState(),
                a = (0, is.K)(function (e) {
                    e && s(t);
                });
            return (
                n.useEffect(() => {
                    i === t &&
                        k(O.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: l,
                        });
                }, [i, t, l]),
                a
            );
        })({ applicationId: t, similarAppIds: n.useMemo(() => l.map((e) => e.id), [l]) });
    return (0, i.jsx)("div", {
        className: ia.hQ,
        ref: r,
        children: l.map((e, l) =>
            (0, i.jsx)(
                io,
                { applicationId: t, similarApplication: e, onSelectApplication: s, similarLoadId: a, position: l },
                e.id,
            ),
        ),
    });
}
function io(e) {
    let { applicationId: t, similarApplication: l, onSelectApplication: s, position: a, similarLoadId: r } = e,
        o = (0, tH.A)({ application: l }),
        c = l.categories?.[0],
        d = n.useMemo(() => eo.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 48 }), [l]),
        u = n.useCallback(() => {
            (k(O.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: l.id,
                position: a,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                s(l.id));
        }, [s, l.id, t, o.length, r, a]);
    return (0, i.jsxs)(ek.D, {
        onClick: u,
        className: ia.vU,
        children: [
            (0, i.jsxs)("div", {
                className: ia.nT,
                children: [
                    (0, i.jsx)("img", { src: d, alt: "", className: ia.my, height: 48, width: 48 }),
                    (0, i.jsxs)("div", {
                        className: ia.gn,
                        children: [
                            (0, i.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, i.jsx)(m.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: ia.JB,
                                    children: l.name,
                                }),
                            }),
                            null != c
                                ? (0, i.jsx)(g.E, {
                                      className: ia.m4,
                                      variant: "body-xs/medium",
                                      color: "text-muted",
                                      children: c.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(g.E, {
                className: ia.i3,
                variant: "body-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: l.directory_entry?.short_description ?? l.description,
            }),
            (0, i.jsx)(tF, { application: l, textVariant: "body-xs/medium", mutualGuilds: o }),
        ],
    });
}
let ic = function (e) {
    let { applicationId: t, fetchState: l, similarApplications: n, onSelectApplication: s, similarLoadId: a } = e;
    return l !== eD.e.FETCHING && (null == n || 0 === n.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ia.hd,
              children: [
                  (0, i.jsx)("div", { className: ia.yF }),
                  (0, i.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      className: ia.bV,
                      children: G.intl.string(G.t.E8wCnk),
                  }),
                  (0, i.jsx)(en, {
                      loading: l === eD.e.FETCHING,
                      children:
                          null != n
                              ? (0, i.jsx)(ir, {
                                    applicationId: t,
                                    similarApplications: n,
                                    onSelectApplication: s,
                                    similarLoadId: a,
                                })
                              : null,
                  }),
              ],
          });
};
l(938796);
var id = l(192308),
    iu = l(549711),
    im = l(55709),
    ih = l(311321),
    ip = l(163437),
    ig = l(67480),
    ix = l(17815);
function iv(e) {
    let { application: t } = e;
    return (0, i.jsxs)("div", {
        className: ix.ZM,
        children: [(0, i.jsx)(ij, { application: t }), (0, i.jsx)(iC, { application: t })],
    });
}
function ij(e) {
    let { application: t } = e,
        { subscriptions: l, otps: n } = (0, eR.C)(t.id);
    return (0, i.jsxs)("div", {
        className: ix.ZM,
        children: [
            l.length > 0 &&
                (0, i.jsxs)("div", {
                    className: ix.dD,
                    children: [
                        (0, i.jsx)(ih.A, { subscriptions: l, color: "text-strong" }),
                        (0, i.jsx)("div", {
                            className: ix.ZE,
                            children: l.map((e) => {
                                let l = (0, ip.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, i.jsx)(
                                    im.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: l,
                                        onDetails: () =>
                                            H(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            n.length > 0 &&
                (0, i.jsxs)("div", {
                    className: ix.dD,
                    children: [
                        (0, i.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: G.intl.string(G.t.yUGTs8),
                        }),
                        (0, i.jsx)("div", {
                            className: ix.ZE,
                            children: n.map((e) =>
                                (0, i.jsx)(
                                    im.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            H(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, i.jsx)(iu.A, {
                path: O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, i.jsx)(iA, { ...e }),
            }),
        ],
    });
}
function iA(e) {
    let {
            match: {
                params: { applicationId: t, skuId: s },
            },
        } = e,
        a = (0, c.bG)([ig.A], () => ig.A.get(s), [s]),
        r = (0, c.bG)([ig.A], () => (null != s ? ig.A.getParentSKU(s) : void 0), [s]),
        o = n.useId(),
        d = n.useCallback(
            () => H(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, M.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        n.useLayoutEffect(() => {
            var e;
            switch (a?.type) {
                case O.Puh.CONSUMABLE:
                case O.Puh.DURABLE:
                    return void (0, id.mM)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([
                                l.e(978898),
                                l.e(406322),
                                l.e(942571),
                                l.e(817989),
                                l.e(15481),
                                l.e(170104),
                            ]).then(l.bind(l, 963179));
                            return (l) => (0, i.jsx)(e, { appId: t, skuId: s, ...l });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                iI() ||
                                    H(
                                        O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            M.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case O.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, ip.bg)(r.flags) ? "user" : "guild"),
                        void (0, id.mM)(
                            async () => {
                                let { SubscriptionDetailsModal: n } = await Promise.all([
                                    l.e(978898),
                                    l.e(406322),
                                    l.e(942571),
                                    l.e(817989),
                                    l.e(15481),
                                    l.e(564850),
                                ]).then(l.bind(l, 168393));
                                return (l) =>
                                    (0, i.jsx)(n, { appId: t, subscriptionType: e, skuId: s, guildId: void 0, ...l });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    iI() ||
                                        H(
                                            O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                M.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, d, r?.flags, a?.flags, a?.type, s]),
        n.useLayoutEffect(
            () => () => {
                (0, id.Oo)(o);
            },
            [o],
        ),
        null
    );
}
function iC(e) {
    let { application: t } = e,
        l = U(),
        n = t.terms_of_service_url,
        s = t.privacy_policy_url;
    if (null == n && null == s) return null;
    function a(e, t) {
        return (0, i.jsx)(t$.A, { href: t, trusted: !l, children: e });
    }
    return (0, i.jsx)("div", {
        className: ix.V6,
        children: (0, i.jsx)(g.E, {
            color: "text-strong",
            variant: "body-sm/normal",
            children:
                null != n && null != s
                    ? G.intl.format(G.t.nylPOT, { termsHook: (e) => a(e, n), privacyHook: (e) => a(e, s) })
                    : null != n
                      ? G.intl.format(G.t["0cPyDz"], { termsHook: (e) => a(e, n) })
                      : null != s
                        ? G.intl.format(G.t["loYGC/"], { privacyHook: (e) => a(e, s) })
                        : null,
        }),
    });
}
function iI() {
    return window.location.pathname.startsWith("/login");
}
var iN = l(615052);
let iy = function (e) {
    let { applicationId: t, onSelectApplication: l, onScroll: s, initialTab: a, onButtonsVisibilityChange: r } = e,
        o = n.useRef(null),
        d = (0, c.bG)([R.A], () => R.A.getApplication(t)),
        u = (0, c.bG)([R.A], () => R.A.getApplicationFetchState(t));
    (n.useEffect(() => {
        if (null != t && null == d) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            _.Di(t, { noCache: e });
        }
    }, [t, d]),
        n.useEffect(() => {
            _.xZ({ applicationId: t });
        }, [t]),
        n.useEffect(() => () => r(!0), [r]));
    let m = d?.storefront_available,
        [h, p] = n.useState(a ?? M.GlobalDiscoveryAppsSections.ABOUT),
        g = n.useCallback(
            (e) => {
                (o.current?.scrollTo({ to: 0 }), p(M.GlobalDiscoveryAppsSections.ABOUT), l(e));
            },
            [l],
        );
    n.useEffect(() => {
        d?.storefront_available && null != t && (0, eR.F)(t);
    }, [d?.storefront_available, t]);
    let x = (0, D.Bn)(),
        v = (0, c.bG)([eD.A], () => eD.A.getFetchState({ applicationId: d?.id })),
        j = (0, c.bG)([eD.A], () => eD.A.getSimilarApplications({ applicationId: d?.id })),
        A = n.useMemo(() => j?.applications.slice(0, 3), [j]),
        C = { displayedSimilarApplications: A, previousView: x },
        I = n.useRef(C);
    (n.useEffect(() => {
        I.current = C;
    }),
        n.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = I.current;
            d?.id != null &&
                v !== eD.e.FETCHING &&
                k(O.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: D.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: d.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [d?.id, v]));
    let f = n.useMemo(
            () => [
                { id: M.GlobalDiscoveryAppsSections.ABOUT, label: G.intl.string(G.t.DkyHMK) },
                { id: M.GlobalDiscoveryAppsSections.STORE, label: G.intl.string(G.t.jgEXGB) },
            ],
            [],
        ),
        N = n.useMemo(() => {
            if (null == d) return null;
            switch (h) {
                case M.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(lk, { application: d });
                case M.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(iv, { application: d });
            }
        }, [h, d]),
        y = n.useCallback(
            (e) => {
                (k(O.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === M.GlobalDiscoveryAppsSections.ABOUT
                        ? H(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : H(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e)));
            },
            [t],
        ),
        b = h === M.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(X.A, {
        onScroll: s,
        ref: o,
        children: (0, i.jsx)(Y.A, {
            children:
                null == d
                    ? null == u || u === R.e.FETCHING
                        ? (0, i.jsx)("div", { className: iN.Dg, children: (0, i.jsx)(en, { loading: !0 }) })
                        : (0, i.jsx)("div", { className: iN.Dg, children: (0, i.jsx)($, { className: iN.z3 }) })
                    : (0, i.jsxs)("div", {
                          className: iN.nM,
                          children: [
                              (0, i.jsx)(ii, { application: d, onButtonsVisibilityChange: r }),
                              (0, i.jsxs)("div", {
                                  className: iN.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: iN.Ne,
                                          children: [
                                              m &&
                                                  (0, i.jsx)("div", {
                                                      className: iN.OF,
                                                      children: (0, i.jsx)(eL, {
                                                          tabs: f,
                                                          onTabSelect: y,
                                                          selectedTab: h,
                                                      }),
                                                  }),
                                              N,
                                              (0, i.jsx)(ic, {
                                                  applicationId: t,
                                                  fetchState: v,
                                                  similarApplications: A,
                                                  onSelectApplication: g,
                                                  similarLoadId: j?.loadId,
                                              }),
                                          ],
                                      }),
                                      b && (0, i.jsx)(lc, { className: iN.pz, application: d, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var ib = l(984516),
    iE = l(724002),
    i_ = l(287174),
    iS = l(487899),
    iR = l(239314),
    iP = l(707554),
    iT = l(111162),
    iL = l(195611);
let iD = i_.K.APPLICATION_DIRECTORY;
function iO(e) {
    let { collection: t, index: l, onSelectApplication: s } = e,
        r = (function (e) {
            let { collectionId: t, index: l } = e,
                [i, s] = n.useState(!1),
                a = (0, is.K)(function (e) {
                    e && s(!0);
                });
            return (
                n.useEffect(() => {
                    i && k(O.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: l });
                }, [i, t, l]),
                a
            );
        })({ collectionId: t.id, index: l }),
        o = n.useCallback(
            (e, i) => {
                (k(O.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: i,
                    collection_position: l,
                    application_id: e,
                }),
                    s(e));
            },
            [t.id, l, s],
        );
    return (0, i.jsx)("div", {
        ref: r,
        children: (0, i.jsxs)(iP.F, {
            children: [
                (0, i.jsx)(m.D, {
                    className: a()(iL.Gf, { [iL.SH]: 0 === l }),
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: t.title,
                }),
                (0, i.jsx)(iP.F, {
                    children: (0, i.jsx)("div", {
                        className: iL.Qs,
                        children: t.application_directory_collection_items.map((e, t) =>
                            e.type !== iS.L.APPLICATION || null == e.application
                                ? null
                                : (0, i.jsx)(
                                      eN,
                                      {
                                          application: e.application,
                                          onSelectApplication: () => o(e.application.id, t),
                                          showCategory: !0,
                                      },
                                      e.id,
                                  ),
                        ),
                    }),
                }),
            ],
        }),
    });
}
let ik = function (e) {
    let { onSelectApplication: t } = e,
        l = (0, c.bG)([iT.default], () => iT.default.onlyShowPreviewAppCollections) ? iE.W.PREVIEW : iE.W.ACTIVE,
        s = (0, c.bG)([ee.A], () => ee.A.getFetchState({ surface: iD, activeState: l })),
        a = (0, c.bG)([ee.A], () => ee.A.getCollections({ surface: iD, activeState: l }));
    n.useEffect(() => {
        _.An({ surface: iD, activeState: l });
    }, [l]);
    let r = n.useMemo(() => a?.filter((e) => e.type !== iR.Y.GALLERY), [a]);
    return s === ee.e.ERROR
        ? (0, i.jsx)("div", { className: iL.Un, children: (0, i.jsx)($, { className: iL.z3 }) })
        : (0, i.jsx)(en, {
              loading: s === ee.e.FETCHING,
              children: r?.map((e, l) => (0, i.jsx)(iO, { collection: e, index: l, onSelectApplication: t }, l)),
          });
};
var iU = l(530472);
let iw = function (e) {
    let { onScroll: t, onSelectApplication: l } = e;
    return (0, i.jsxs)(X.A, {
        onScroll: t,
        children: [
            (0, i.jsx)(B.A, {
                title: G.intl.format(G.t.kEcZ97, {}),
                description: G.intl.string(G.t.XxFts9),
                children: (0, i.jsx)(z.A, {}),
            }),
            (0, i.jsx)(Y.A, {
                children: (0, i.jsxs)("div", {
                    className: iU.h,
                    children: [(0, i.jsx)(ik, { onSelectApplication: l }), (0, i.jsx)(ib.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var iM = l(806163),
    iG = l(994369),
    iV = l(475743),
    iF = l(191711),
    iH = l(781727);
function iz(e) {
    let { category: t, count: l, onSelectCategory: s, selected: r } = e,
        o = n.useCallback(() => {
            s(t.id);
        }, [t.id, s]),
        c = l.toLocaleString(tG.default.locale);
    return (0, i.jsxs)(ek.D, {
        onClick: o,
        className: a()(iH.L1, { [iH.wH]: r }),
        children: [
            (0, i.jsx)(g.E, { className: iH.UU, variant: "body-sm/medium", color: "text-strong", children: t.name }),
            (0, i.jsx)(g.E, { className: iH.U9, variant: "body-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function iB(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: s } = e,
        a = (0, c.bG)([P.A], () => P.A.getCategories()),
        r = n.useMemo(() => [(0, T.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]);
    return 0 === r.length
        ? null
        : (0, i.jsx)("div", {
              className: iH.LZ,
              children: r.map((e) => {
                  let n = e.id,
                      a = t[n] ?? 0;
                  return (0, i.jsx)(iz, { category: e, count: a, selected: n === s, onSelectCategory: () => l(e) }, n);
              }),
          });
}
function iY(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: s } = e,
        a = (0, c.bG)([P.A], () => P.A.getCategories()),
        r = n.useMemo(() => [(0, T.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]),
        o = n.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        d = n.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && l(t);
            },
            [l, r],
        ),
        u = n.useMemo(() => r.find((e) => e.id === s), [s, r]);
    return 0 === o.length
        ? null
        : (0, i.jsxs)("div", {
              className: iH.kL,
              children: [
                  (0, i.jsx)(g.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: G.intl.string(G.t.f09BQJ),
                  }),
                  (0, i.jsx)(iF.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: d,
                      selected: `${s}`,
                      "aria-label": G.intl.string(G.t.WHdCwR),
                      variant: iF.H.FILLED,
                  }),
              ],
          });
}
var iX = l(307950);
let iK = function (e) {
    let { selectedCategoryId: t, searchAllCategories: l } = e,
        s = (0, c.bG)([P.A], () => P.A.getCategories()),
        a = n.useMemo(() => s.find((e) => e.id === t)?.name, [s, t]),
        r =
            0 === t || null == a
                ? G.intl.string(G.t["FVJt+8"])
                : G.intl.formatToPlainString(G.t.FjCaNB, { categoryName: a }),
        o = 0 === t ? G.intl.string(G.t.GXiMta) : G.intl.format(G.t.JaLoFF, { onClick: l });
    return (0, i.jsxs)("div", {
        className: iX.k,
        children: [
            (0, i.jsx)(m.D, { variant: "heading-xl/semibold", className: iX.w, children: r }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: o }),
        ],
    });
};
var iW = l(586720);
function i$(e) {
    let { onSelectApplication: t, onScroll: l } = e,
        s = (0, c.bG)([y.default], () => y.default.isAuthenticated()),
        a = n.useRef(null),
        r = (0, iM.zy)(),
        o = n.useRef(null),
        {
            query: d,
            page: u,
            categoryId: m,
        } = n.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                l = null != t ? Number(t) : 1;
            return { query: e.get("q") ?? "", page: l, categoryId: Number(e.get("category_id")) ?? 0 };
        }, [r.search]),
        h = (0, c.bG)([P.A], () => P.A.getCategories()),
        p = n.useMemo(() => h?.find((e) => e.id === m), [h, m]),
        g = n.useCallback(
            (e) => {
                k(O.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: d,
                    num_results: e,
                    current_page: D.ev.SEARCH,
                    result_page: u,
                    category: p?.name,
                    category_id: p?.id,
                });
            },
            [d, u, p?.name, p?.id],
        );
    n.useEffect(() => {
        (a.current?.scrollTo({ to: 0 }),
            d !== o.current && ((o.current = d), _.$P({ query: d, options: { source: iG.V.APP_DIRECTORY } })),
            _.$P({
                query: d,
                options: { categoryId: m, page: u, pageSize: 48, source: iG.V.APP_DIRECTORY },
                onSuccessCallback: g,
            }));
    }, [m, u, d, g]);
    let { fetchState: x, searchResults: v } = (0, c.cf)([et.A], () => ({
            fetchState: et.A.getFetchState({
                query: d,
                categoryId: m,
                page: u,
                pageSize: 48,
                source: iG.V.APP_DIRECTORY,
            }),
            searchResults: et.A.getSearchResults({
                query: d,
                categoryId: m,
                page: u,
                pageSize: 48,
                source: iG.V.APP_DIRECTORY,
            }),
        })),
        j = (0, c.cf)([et.A], () => {
            let e = et.A.getSearchResults({ query: d, source: iG.V.APP_DIRECTORY });
            return null != e ? { 0: e.totalCount, ...e.countsByCategory } : {};
        }),
        A = (0, iV.Ay)(v),
        C = n.useMemo(() => (x === R.e.FETCHING ? A : v), [x, A, v]),
        I = n.useCallback(
            (e) => {
                F({ query: d, categoryId: m, page: e });
            },
            [m, d],
        ),
        f = n.useCallback(
            (e) => {
                (k(O.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: D.ev.SEARCH,
                }),
                    F({ query: d, categoryId: e.id }));
            },
            [d],
        ),
        N = n.useCallback(
            (e, l) => {
                (k(O.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: D.ev.SEARCH,
                    application_id: e,
                    load_id: C?.loadId,
                    search_term: d,
                    position: l,
                }),
                    t(e));
            },
            [C?.loadId, t, d],
        ),
        b = V();
    return (0, i.jsxs)("div", {
        className: iW.kL,
        children: [
            (0, i.jsx)(X.A, {
                ref: a,
                onScroll: l,
                children: (0, i.jsxs)("div", {
                    className: iW.WH,
                    children: [
                        s ? null : (0, i.jsx)("div", { className: iW.AW }),
                        (0, i.jsx)(Y.A, {
                            children: (0, i.jsxs)("div", {
                                className: iW.hQ,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: iW.$B,
                                        children: (0, i.jsx)(iY, {
                                            countsByCategory: j,
                                            selectedCategoryId: m,
                                            onSelectCategory: f,
                                        }),
                                    }),
                                    (0, i.jsx)(en, {
                                        loading: x === R.e.FETCHING,
                                        children:
                                            x === R.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, i.jsx)(iK, {
                                                      selectedCategoryId: m ?? b.id,
                                                      searchAllCategories: () => f(b),
                                                  })
                                                : (0, i.jsx)("div", {
                                                      className: iW.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === q.j.APPLICATION) {
                                                              let l = e.data;
                                                              return (0, i.jsx)(
                                                                  eN,
                                                                  {
                                                                      application: l,
                                                                      onSelectApplication: (e) => N(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  l.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, i.jsx)(Q.m, {
                                        className: iW.JV,
                                        totalCount: Math.min((C?.totalPages ?? 0) * 48, 4800),
                                        pageSize: 48,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: u,
                                        onPageChange: I,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: iW.pn,
                children: (0, i.jsx)("div", {
                    className: iW.jv,
                    children: (0, i.jsx)(iB, { countsByCategory: j, selectedCategoryId: m, onSelectCategory: f }),
                }),
            }),
        ],
    });
}
var iZ = l(699716);
function iq(e) {
    let { applicationId: t, hideDetailHeaderButtons: l, onClickBack: s } = e,
        r = (0, c.bG)([R.A], () => R.A.getApplication(t)),
        [o, u] = n.useState(l),
        h = n.useCallback(() => {
            u(l);
        }, [l]);
    return (0, i.jsxs)("div", {
        className: iZ._u,
        children: [
            (0, i.jsx)("div", {
                className: iZ.w$,
                children: (0, i.jsx)(j.XQ, {
                    icon: d.ArrowLargeLeftIcon,
                    "aria-label": G.intl.string(G.t["13/7kX"]),
                    onClick: s,
                }),
            }),
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: iZ.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, i.jsx)("div", {
                className: a()(iZ.w$, iZ.xY, { [iZ.RK]: !l, [iZ.jD]: l && !o, [iZ.R]: l && o }),
                onTransitionEnd: h,
                children: null != r ? (0, i.jsx)(it, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function iJ() {
    let [e, t] = n.useState(!1),
        l = n.useCallback(() => {
            let e, t;
            ((e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, N.pX)(O.BVt.REGISTER + t));
        }, []),
        s = n.useCallback(() => {
            w();
        }, []);
    if (e) return null;
    let a = (0, i.jsxs)(h.$T, {
        color: h.Hv.BRAND,
        className: iZ.aL,
        children: [
            (0, i.jsx)(p.ClydeIcon, { size: "custom", color: "white", className: iZ.wm }),
            (0, i.jsx)(g.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "body-md/normal",
                children: G.intl.string(G.t.Ol3MIt),
            }),
            (0, i.jsxs)("div", {
                className: iZ.ll,
                children: [
                    (0, i.jsx)(h.Z_, { onClick: l, noticeType: O.kqX.LOGIN, children: G.intl.string(G.t["825cFy"]) }),
                    (0, i.jsx)(h.Z_, {
                        onClick: s,
                        noticeType: O.kqX.REGISTER,
                        minor: !0,
                        children: G.intl.string(G.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
    return (0, i.jsx)(f.qg, {
        noticeType: O.kqX.LOGIN,
        variant: "promotion",
        type: "expressive",
        className: iZ.e,
        leadingAccessory: (0, i.jsx)(p.ClydeIcon, { size: "md", color: "currentColor" }),
        message: G.intl.string(G.t.Ol3MIt),
        primaryAction: { text: G.intl.string(G.t["825cFy"]), onClick: l },
        secondaryAction: {
            text: G.intl.string(G.t.HAkXzo),
            onClick: () => {
                (s(), E.default.track(O.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, { notice_type: O.kqX.REGISTER }));
            },
        },
        onDismiss: () => t(!0),
        legacy: a,
    });
}
let iQ = function () {
    var e;
    let t,
        l,
        s,
        o,
        h,
        p,
        g = (0, c.bG)([y.default], () => !y.default.isAuthenticated()),
        { onScroll: f, scrollPosition: R, resetScrollPosition: L } = (0, x.G)(),
        w = (0, D.R4)(),
        M = U(),
        H = w?.type === D.ev.CATEGORY ? w.categoryId : void 0,
        { applicationId: z, section: B } = w?.type === D.ev.APPLICATION ? w : {},
        { query: Y, categoryId: X } = w?.type === D.ev.SEARCH ? w : {},
        K = (0, c.bG)([P.A], () => P.A.getCategories()),
        W = n.useMemo(() => [(0, T.AU)(), ...K], [K]),
        $ = n.useMemo(() => W.find((e) => e.id === Number(X)), [W, X]),
        {
            tabs: Z,
            selectedTab: q,
            onSelectTab: J,
        } = ((e = H?.toString()),
        (t = (0, c.bG)([P.A], () => P.A.getCategories())),
        (l = V()),
        (s = n.useMemo(
            () => [{ id: l.id.toString(), label: l.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, l],
        )),
        (o = (0, D.R4)()),
        (h = n.useCallback(
            (e) => {
                let t = s.find((t) => t.id === e);
                null != t &&
                    (k(O.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: o?.type,
                    }),
                    (function (e) {
                        let { categoryId: t } = e,
                            l = { previousView: (0, D.R4)() };
                        (0, N.pX)(O.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: l });
                    })({ categoryId: e }));
            },
            [o?.type, s],
        )),
        (p = null != e && s.some((t) => t.id === e) ? e : s[0].id),
        { tabs: s, selectedTab: p, onSelectTab: h }),
        [Q, ee] = n.useState(!0),
        et = D.h.useField("trackedOpenedFromExternalEntrypoint"),
        el = D.h.useField("sessionId"),
        ei = (0, c.bG)([b.default], () => b.default.getCurrentUser());
    (n.useEffect(() => {
        if (!et && null == el) {
            let e = (0, I.YP)();
            (E.default.track(O.HAw.APP_DIRECTORY_OPENED, { source: D.sW.EXTERNAL, session_id: e, user_id: ei?.id }),
                D.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: D.sW.EXTERNAL },
                    guildId: null,
                }));
        }
    }, [el, et, ei?.id]),
        n.useEffect(() => {
            _.bW();
        }, []),
        n.useEffect(() => {
            M && _.wD();
        }, [M]),
        n.useEffect(() => D.tS.setState({ lastItem: w }), [w]));
    let en = null != z,
        es = w?.type === D.ev.SEARCH,
        {
            searchQuery: ea,
            onSearchTextChange: er,
            onClearSearch: eo,
            onSearchSubmit: ec,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                l = S.A.useField("query");
            n.useEffect(() => S.A.setState({ query: t }), [t]);
            let i = n.useCallback((e) => {
                    S.A.setState({ query: e });
                }, []),
                s = n.useCallback(() => {
                    S.A.setState({ query: "" });
                }, []),
                a = n.useCallback(() => {
                    let e = V();
                    (k(O.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: l,
                        category: e.name,
                        current_page: D.ev.HOME,
                        category_id: e.id,
                    }),
                        F({ query: l }));
                }, [l]);
            return { searchQuery: l, onSearchTextChange: i, onClearSearch: s, onSearchSubmit: a };
        })({ initialQuery: Y ?? "" }),
        ed = S.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: eh,
            tabsClassName: ep,
        } = (0, v.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === ea.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => S.A.setState({ searchBarState: e }),
        }),
        eg = n.useCallback(
            (e) => {
                (J(e), es && eo(), L());
            },
            [es, eo, J, L],
        ),
        ex = n.useCallback(
            (e) =>
                (function (e) {
                    let { applicationId: t } = e,
                        l = { previousView: (0, D.R4)() };
                    (0, N.pX)(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: l });
                })({ applicationId: e }),
            [],
        ),
        ev = en || es,
        ej = n.useCallback(() => {
            if (null != (0, D.Bn)()) (0, N.aX)();
            else {
                let e;
                ((e = { previousView: (0, D.R4)() }), (0, N.pX)(O.BVt.GLOBAL_DISCOVERY_APPS, { state: e }));
            }
        }, []),
        eA = n.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: l, scrollHeight: i, location: n } = e;
                    t > 0 &&
                        k(O.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + l) / i,
                            current_page: n,
                        });
                }, 200),
            [],
        ),
        eC = n.useCallback(
            (e, t) => {
                (f(e),
                    eA({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    }));
            },
            [eA, f],
        );
    return (0, i.jsxs)("div", {
        className: a()(iZ.nw, { [iZ.Yz]: g }),
        children: [
            g ? (0, i.jsx)(iJ, {}) : null,
            (0, i.jsxs)("div", {
                className: iZ.WH,
                children: [
                    (0, i.jsxs)(j.Ay, {
                        variant: ev ? j.Z5.RELATIVE : j.Z5.OVERLAY,
                        children: [
                            !ev && (0, i.jsx)(j.ns, { scrollPosition: R }),
                            en
                                ? (0, i.jsx)(iq, { applicationId: z, hideDetailHeaderButtons: Q, onClickBack: ej })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          es
                                              ? (0, i.jsx)(j.XQ, {
                                                    icon: d.ArrowLargeLeftIcon,
                                                    "aria-label": G.intl.string(G.t["13/7kX"]),
                                                    onClick: ej,
                                                })
                                              : (0, i.jsx)(j.T4, { icon: u.AppsIcon }),
                                          es
                                              ? (0, i.jsx)(m.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: iZ.wL,
                                                    children:
                                                        null != Y && "" !== Y
                                                            ? G.intl.formatToPlainString(G.t.zHdzqW, { query: Y })
                                                            : G.intl.formatToPlainString(G.t.Qhj5Br, {
                                                                  categoryName: $?.name ?? G.intl.string(G.t.E407b7),
                                                              }),
                                                })
                                              : (0, i.jsx)(A.A, {
                                                    className: ep,
                                                    tabs: Z,
                                                    selectedTab: q,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: eu,
                                                }),
                                          (0, i.jsx)(C.A, {
                                              query: ea,
                                              placeholder: G.intl.string(G.t["5h0QOP"]),
                                              onTextChange: er,
                                              onClear: eo,
                                              onSubmit: ec,
                                              onCollapsedClick: em,
                                              state: ed,
                                              onBlur: eh,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    en
                        ? (0, i.jsx)(iy, {
                              onScroll: (e) => eC(e, D.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: z,
                              initialTab: B,
                              onButtonsVisibilityChange: ee,
                          })
                        : es
                          ? (0, i.jsx)(i$, { onSelectApplication: ex, onScroll: (e) => eC(e, D.ev.SEARCH) })
                          : "0" === q
                            ? (0, i.jsx)(iw, { onScroll: (e) => eC(e, D.ev.HOME), onSelectApplication: ex })
                            : (0, i.jsx)(eS, {
                                  tabId: Number(q),
                                  onScroll: (e) => eC(e, D.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
