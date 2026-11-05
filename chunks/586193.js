(l.r(t), l.d(t, { default: () => nK }));
var n = l(477900),
    s = l(582128),
    i = l(503698),
    a = l.n(i),
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
var C = l(876622),
    A = l(521974),
    I = l(965660),
    f = l(976860),
    N = l(46653),
    b = l(287809),
    y = l(129230),
    _ = l(503406),
    E = l(416730),
    S = l(212534),
    R = l(38181),
    P = l(684249);
(l(323874), l(14289), l(35956));
var T = l(323125),
    L = l(310419),
    D = l(652215);
function O(e, t) {
    let l = L.h.getField("sessionId"),
        n = L.h.getField("guildId"),
        s = L.h.getField("entrypoint")?.name,
        i = b.default.getCurrentUser(),
        a = { ...t, guild_id: n, directory_session_id: l, source: s, user_id: i?.id };
    return y.default.track(e, a);
}
function k() {
    return (0, c.bG)([N.default], () => N.default.isAuthenticated());
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let l in e) {
        let n = e[l];
        t.searchParams.set(l, n);
    }
    let l = t.pathname + t.search,
        n = (0, T.T2)(l, !1);
    (0, f.pX)(n);
}
var w = l(435220),
    M = l(792996);
function G() {
    return { id: 0, name: M.intl.string(M.t.ijDDwz) };
}
function V() {
    let { query: e, categoryId: t, page: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = { previousView: (0, L.R4)() },
        s = new URLSearchParams();
    (null != e && "" !== e && s.set("q", e),
        null != t && 0 !== t && s.set("category_id", t.toString()),
        null != l && l > 1 && s.set("page", l.toString()),
        (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: n, search: s.toString() }));
}
function F(e) {
    let {
        location: { state: t },
    } = (0, f.JK)();
    (0, f.bG)(e, t);
}
var H = l(23815),
    z = l(701508),
    B = l(979590),
    Y = l(783531),
    X = l(558611);
let K = "/assets/3aa7e375b23dc56f.svg";
function W(e) {
    let { heading: t = M.intl.string(M.t.NGw8v2), body: l = M.intl.string(M.t["1XZRY4"]), className: s } = e;
    return (0, n.jsxs)("div", {
        className: a()(X.kL, s),
        children: [
            (0, n.jsx)("div", {
                className: X.ZS,
                children: (0, n.jsx)("img", { className: X.Sl, src: K, alt: M.intl.string(M.t["/UJaI2"]) }),
            }),
            (0, n.jsx)(m.D, { variant: "heading-xl/semibold", className: X.wx, children: t }),
            (0, n.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: l }),
        ],
    });
}
var $ = l(819169),
    Z = l(935573),
    q = l(164636),
    J = l(662203),
    Q = l(111042),
    ee = l(651753),
    et = l(289873),
    el = l(311543);
function en(e) {
    let { loading: t, children: l } = e;
    return (0, n.jsxs)("div", {
        className: el.kL,
        children: [
            t
                ? (0, n.jsx)("div", {
                      className: el.dc,
                      children: (0, n.jsx)(et.y, { className: el.u1, type: et.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, n.jsx)("div", { className: a()({ [el.Lq]: t }), children: l }),
        ],
    });
}
var es = l(831259),
    ei = l(735991),
    ea = l(635350),
    er = l(486020),
    eo = l(775602),
    ec = l(435582),
    ed = l(283488),
    eu = l(607470),
    em = l(654107),
    eh = l(36667);
let ep = 16 / 9,
    eg = 325 / 72;
function ex(e) {
    let { application: t, isHovered: l, botBannerUrl: i, botBannerUrlAnimated: r, iconURL: o } = e,
        c = (0, ed.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = s.useMemo(() => {
            let e = (0, ei.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ec.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: m } = s.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: i, imageUrlAnimated: r }),
            [c.state, c.url, i, r],
        ),
        h = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    h
                        ? (0, n.jsx)(ev, { isHovered: l, url: u, animatedUrl: void 0 })
                        : (0, n.jsx)(eu.A, { src: d, className: a()(eh._e, eh.IH), muted: !0 }),
                    (0, n.jsx)(ej, { isHovered: l, url: d, isVideo: !0 }),
                ],
            })
          : h
            ? (0, n.jsx)(ev, { isHovered: l, url: u, animatedUrl: m })
            : (0, n.jsx)(eC, { iconURL: o });
}
function ev(e) {
    let { isHovered: t, url: l, animatedUrl: i } = e,
        [r, o] = s.useState(!1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: l, alt: "", className: a()(eh._e, eh.IH, { [eh.Kc]: r }), onLoad: () => o(!0) }),
            null != i ? (0, n.jsx)(ej, { isHovered: t, url: i, isVideo: !1 }) : null,
        ],
    });
}
function ej(e) {
    let { isHovered: t, url: l, isVideo: i } = e,
        [r, o] = s.useState(!1),
        [c, d] = s.useState(t);
    return (s.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, n.jsx)("div", {
              className: a()(eh.hY, { [eh.Q]: !t, [eh.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: i
                  ? (0, n.jsx)(eu.A, {
                        src: l,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: eh.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, n.jsx)("img", { src: l, alt: "", className: eh.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eC(e) {
    let { iconURL: t } = e,
        { backgroundGradient: l, hasFetchedColors: s } = (function (e) {
            let [t, l, n] = (0, em.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${n ?? l})`, hasFetchedColors: (0, em.D1)(e) };
        })(t);
    return (0, n.jsx)("div", { className: a()(eh.IH, eh.nY, { [eh.Kc]: s }), style: { backgroundImage: l } });
}
let eA = function (e) {
    let { application: t, bannerType: l, iconURL: i } = e,
        a = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        [r, o] = s.useState(!1),
        d = s.useCallback(() => {
            o(!0);
        }, []),
        u = s.useCallback(() => o(!1), []),
        m = (0, ei.Z$)(t),
        h = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: g } = s.useMemo(
            () =>
                h?.id == null || h?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, er.z)({ id: h.id, banner: h.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: a
                              ? void 0
                              : (0, er.z)({ id: h.id, banner: h.banner, canAnimate: !0, size: 600 }),
                      },
            [h?.id, h?.banner, a],
        );
    return (0, n.jsx)("div", {
        className: eh.cI,
        style: { aspectRatio: "card" === l ? ep : eg },
        onMouseEnter: d,
        onFocus: d,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === l && m
                ? (0, n.jsx)(ex, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == g ? void 0 : g,
                  })
                : null != p
                  ? (0, n.jsx)(ev, { isHovered: r, url: p, animatedUrl: g })
                  : (0, n.jsx)(eC, { iconURL: i }),
    });
};
var eI = l(240795);
let ef = function (e) {
    let { application: t, onSelectApplication: l, showCategory: i = !1 } = e,
        a = s.useRef(null),
        r = t.categories?.[0],
        [o, c] = s.useState(!1),
        d = s.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, ei.NO)(t),
        h = s.useCallback(() => {
            l(t.id);
        }, [l, t.id]),
        p = s.useMemo(() => (o ? er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        x = i && null != r;
    return (0, n.jsx)(es.L, {
        innerRef: a,
        onChange: d,
        active: !o,
        children: (0, n.jsx)("div", {
            ref: a,
            className: eI.kL,
            children: (0, n.jsxs)(ea.A, {
                className: eI.Nr,
                onClick: h,
                onContextMenu: () => {},
                "aria-label": M.intl.string(M.t.np1Wru),
                children: [
                    (0, n.jsxs)("div", {
                        className: eI.wx,
                        children: [
                            (0, n.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, n.jsx)(eA, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, n.jsx)("div", {
                                className: eI.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, n.jsx)("img", {
                                          src: p,
                                          alt: "",
                                          className: eI.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: eI.eV,
                        children: [
                            (0, n.jsx)("div", {
                                className: eI.gn,
                                children: (0, n.jsx)("div", {
                                    className: eI.DD,
                                    children: (0, n.jsx)(m.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        className: eI.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            x || u
                                ? (0, n.jsxs)("div", {
                                      className: eI.op,
                                      children: [
                                          x
                                              ? (0, n.jsx)(g.E, {
                                                    className: eI.m4,
                                                    variant: "body-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          x && u
                                              ? (0, n.jsx)(g.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          u
                                              ? (0, n.jsx)(g.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-subtle",
                                                    children: M.intl.string(M.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, n.jsx)(g.E, {
                                className: eI.h_,
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
var eN = l(297439);
let eb = { results: [], totalPages: 0, loadId: "" },
    ey = function (e) {
        let { categoryId: t, onSelectApplication: l, resetScroll: i } = e,
            [a, r] = s.useState(1),
            o = s.useCallback((e) => {
                r(e);
            }, []);
        s.useEffect(() => {
            r(1);
        }, [t]);
        let c = s.useMemo(() => ({ query: "", page: a, pageSize: 48, categoryId: t }), [a, t]),
            d = (0, q.bG)([ee.A], () => ee.A.getFetchState({ query: "", page: a, pageSize: 48, categoryId: t })),
            u = (0, q.cf)([ee.A], () => ee.A.getSearchResults(c) ?? eb),
            m = (0, $.A)(u) ?? eb,
            { results: h, totalPages: p, loadId: g } = s.useMemo(() => (d === Q.e.FETCHING ? m : u), [d, m, u]),
            x = s.useMemo(() => h?.filter((e) => e.type === Z.j.APPLICATION), [h]),
            v = s.useCallback((e) => {
                let { page: t, activeCategoryId: l, onSuccessCallback: n, guildId: s, fetchCounts: i } = e;
                (i && _.$P({ query: "", guildId: s }),
                    _.$P({
                        query: "",
                        guildId: s,
                        options: { page: t, pageSize: 48, categoryId: l },
                        onSuccessCallback: n,
                    }));
            }, []);
        s.useEffect(() => {
            (i(), v({ page: a, activeCategoryId: t, onSuccessCallback: () => {} }));
        }, [t, i, v, a]);
        let j = s.useCallback(
            (e, t) => {
                (O(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: L.ev.SEARCH,
                    application_id: e,
                    load_id: g,
                    position: t,
                }),
                    l(e));
            },
            [g, l],
        );
        return d === Q.e.ERROR
            ? (0, n.jsx)("div", { className: eN.Un, children: (0, n.jsx)(W, { className: eN.z3 }) })
            : (0, n.jsxs)(en, {
                  loading: d === Q.e.FETCHING,
                  children: [
                      (0, n.jsx)("div", {
                          className: eN.Qs,
                          children: x?.map((e, t) => {
                              if (e.type !== Z.j.APPLICATION) return (e.type, null);
                              {
                                  let l = e.data;
                                  return (0, n.jsx)(ef, { application: l, onSelectApplication: (e) => j(e, t) }, l.id);
                              }
                          }),
                      }),
                      (0, n.jsx)(J.m, {
                          className: eN.JV,
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
let eE = function (e) {
    let { tabId: t, onSelectApplication: l, onScroll: i } = e,
        a = s.useRef(null),
        r = s.useCallback(() => {
            a.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, c.bG)([R.A], () => R.A.getCategories()),
        d = s.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = s.useMemo(
            () =>
                null != d
                    ? (function (e) {
                          switch (e.id) {
                              case 4:
                                  return M.intl.string(M.t["3m9Egb"]);
                              case 6:
                                  return M.intl.string(M.t.VJRr3Y);
                              case 8:
                                  return M.intl.string(M.t.Uv7mFd);
                              case 9:
                                  return M.intl.string(M.t.TEK9Ax);
                              case 10:
                                  return M.intl.string(M.t.lfBt2T);
                          }
                          return "";
                      })(d)
                    : "",
            [d],
        );
    return (0, n.jsxs)(Y.A, {
        onScroll: i,
        ref: a,
        children: [
            (0, n.jsx)(z.A, { title: d?.name ?? "", description: u, children: (0, n.jsx)(H.A, {}) }),
            (0, n.jsx)(B.A, {
                children:
                    null == d
                        ? (0, n.jsx)("div", { className: e_.U, children: (0, n.jsx)(W, { className: e_.z }) })
                        : (0, n.jsx)(ey, { categoryId: d.id, onSelectApplication: l, resetScroll: r }),
            }),
        ],
    });
};
var eS = l(123791),
    eR = l(761508),
    eP = l(149050);
let eT = function (e) {
    let { tabs: t, onTabSelect: l, selectedTab: s, className: i } = e;
    return (0, n.jsx)(eR.V, {
        type: "top-pill",
        selectedItem: s,
        onItemSelect: l,
        className: i,
        children: t.map((e, t) => {
            let { id: l, label: s, count: i } = e;
            return (0, n.jsx)(
                eR.V.Item,
                {
                    id: l,
                    className: a()(eP.V, { [eP.r]: 0 === t }),
                    "aria-label": s,
                    children: null != i && i > 0 ? `${s} (${i})` : s,
                },
                l,
            );
        }),
    });
};
var eL = l(82293),
    eD = l(403362),
    eO = l(939249),
    ek = l(693942),
    eU = l(265705),
    ew = l(451988),
    eM = l(408278),
    eG = l(921853),
    eV = l(477155),
    eF = l(320448),
    eH = l(935286),
    ez = l(73153),
    eB = l(725951),
    eY = l(188567),
    eX = l(1671);
let eK = 16 / 9;
class eW extends s.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        (eY._.subscribe(D.jej.CAROUSEL_PREV, this.handlePrevious),
            eY._.subscribe(D.jej.CAROUSEL_NEXT, this.handleNext));
    }
    componentWillUnmount() {
        (eY._.unsubscribe(D.jej.CAROUSEL_PREV, this.handlePrevious),
            eY._.unsubscribe(D.jej.CAROUSEL_NEXT, this.handleNext));
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: l,
                arrowClassName: s,
                paginationDotClassName: i,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            d = a()(eX.sb, { [eX.JU]: l }, s);
        return (0, n.jsxs)("div", {
            className: a()(eX.ne, this.props.className),
            children: [
                (0, n.jsx)("div", {
                    className: d,
                    children: (0, n.jsx)(eM.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eG.ChevronSmallLeftIcon : eV.ArrowSmallLeftIcon,
                        "aria-label": M.intl.string(M.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: eX.r$,
                    children: o().times(t, (t) =>
                        (0, n.jsx)(
                            eO.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? a()(eX.NU, r) : a()(eX.Lw, i),
                                "aria-label": M.intl.formatToPlainString(M.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, n.jsx)("div", {
                    className: d,
                    children: (0, n.jsx)(eM.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eF.ChevronSmallRightIcon : eH.ArrowSmallRightIcon,
                        "aria-label": M.intl.string(M.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: l, current: n } = this.props;
        (l?.(n, e, "jump"), t(e));
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            n = l(1);
        e?.(t, n, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            n = l(-1);
        e?.(t, n, "previous");
    };
}
class e$ extends s.PureComponent {
    timer = new ew.IX();
    static defaultProps = { aspectRatio: eK };
    constructor(e) {
        (super(e),
            (this.state = {
                visibleIndex: !0 === e.randomize ? o().random(0, e.items.length - 1) : 0,
                direction: eB.f.LEFT,
                paused: !1,
            }));
    }
    handleWindowFocusChange = (e) => {
        let { focused: t } = e;
        this.setState({ paused: !t });
    };
    componentDidMount() {
        (ez.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer());
    }
    componentWillUnmount() {
        (this.stopTimer(), ez.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange));
    }
    componentDidUpdate(e, t) {
        function l(e, t) {
            return !e.initialPaused && !t.paused;
        }
        let n = l(this.props, this.state),
            s = l(e, t);
        n && !s ? this.startTimer() : !n && s && this.stopTimer();
        let { items: i } = this.props,
            { visibleIndex: a } = this.state;
        null == i[a] && this.changeItem(i, 1);
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
        let { onChangeItem: n } = this.props;
        n?.(e[l], this.state.visibleIndex, l);
        let s = t > 0 ? eB.f.LEFT : eB.f.RIGHT;
        return (this.setState({ visibleIndex: l, direction: s }), l);
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
                slideAnimatorClassName: s,
                slideAnimatorSpringSettings: i,
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
        return (0, n.jsxs)("div", {
            className: eX.zr,
            children: [
                (0, n.jsxs)("div", {
                    className: a()(eX.Cf, l),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, n.jsx)("div", {
                            style: { aspectRatio: x },
                            children: (0, n.jsx)(eB.A, {
                                className: a()(eX.Dk, s),
                                step: j,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: r,
                                children: t(e[j], j),
                            }),
                        }),
                        e.length > 1 &&
                            (0, n.jsx)(eW, {
                                className: a()(o, h ? eX.S$ : eX.X$),
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
        let { items: n, onIntentionalChange: s } = this.props;
        return s?.(n[t], e, t, l);
    };
}
var eZ = l(619517),
    eq = l(248643),
    eJ = l(383055),
    eQ = l(615300),
    e0 = l(456412),
    e1 = l(133296),
    e8 = l(516521),
    e6 = l(532197),
    e4 = l(837344);
let e5 = { CENTER: e4.Hu, LEFT: e4.Vl };
class e7 extends s.PureComponent {
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
        let { renderItem: e, items: t, vertical: l, paginationContainerClass: i, align: r } = this.props,
            o = l ? e4.XA : e4.BU;
        return (0, n.jsx)(e8.Gt, {
            orientation: l ? "vertical" : "horizontal",
            className: a()(o, i, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, l) =>
                s.cloneElement(e(t, l), {
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
class e2 extends s.PureComponent {
    handlePrevClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, n.jsx)(eO.D, {
            className: a()(e4.t1, e),
            onClick: this.handlePrevClick,
            children: (0, n.jsx)(e6.A, { className: e4.UE, direction: e6.A.Directions.LEFT }),
        });
    }
}
class e3 extends s.PureComponent {
    handleNextClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, n.jsx)(eO.D, {
            className: a()(e4.XS, e),
            onClick: this.handleNextClick,
            children: (0, n.jsx)(e6.A, { className: e4.UE, direction: e6.A.Directions.RIGHT }),
        });
    }
}
var e9 = l(452282),
    te = l(875149),
    tt = l(811306);
let tl = { width: 640, height: 360, margin: 15 },
    tn = { width: 880, height: 495, margin: 20 },
    ts = { width: 1920, height: 1080 },
    ti = { width: 1280, height: 720 };
function ta(e) {
    return (0, eJ.$o)({ ...e, className: tt.tN, mediaPlayerClassName: tt.yf });
}
function tr(e) {
    return (0, n.jsx)(eZ.Ay, { ...e });
}
function to(e) {
    let t,
        l,
        s,
        {
            item: i,
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
    if (i.type === D.geh.YOUTUBE_VIDEO)
        ((t = { url: (0, D.PE$)(i.youtubeVideoId), ...ts }),
            (l = {
                url: `${(0, D.uJ2)(i.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                ...ti,
            }),
            (s = ek.mt.YOUTUBE));
    else {
        let e = null != i.width ? i.width : 0,
            n = null != i.height ? i.height : 0;
        ((t = { url: i.thumbnailSrc, width: e, height: n }),
            (l = { url: i.src, proxyURL: i.src, width: e, height: n }));
    }
    let g = (0, n.jsx)(eU.rr, {
        href: null,
        thumbnail: t,
        video: l,
        provider: s,
        allowFullScreen: !0,
        maxHeight: a.height,
        maxWidth: a.width,
        onPlay: r,
        onEnded: o,
        playable: d,
        className: tt.Ki,
        volume: u,
        onVolumeChange: h,
        autoMute: m,
        onMute: p,
        autoPlay: d,
        renderVideoComponent: ta,
        renderImageComponent: tr,
        renderLinkComponent: eJ.bU,
    });
    return d ? g : (0, n.jsx)(eO.D, { className: tt.AU, onClick: c, children: g });
}
function tc() {
    return (0, n.jsx)("div", {
        className: tt.eM,
        children: (0, n.jsx)(te.A, { inactive: !0, className: tt.J6, renderLinkComponent: eJ.bU }),
    });
}
class td extends s.PureComponent {
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
        (eY._.subscribe(D.jej.CAROUSEL_PREV, this.manualPrevious),
            eY._.subscribe(D.jej.CAROUSEL_NEXT, this.manualNext));
    }
    componentWillUnmount() {
        (eY._.unsubscribe(D.jej.CAROUSEL_PREV, this.manualPrevious),
            eY._.unsubscribe(D.jej.CAROUSEL_NEXT, this.manualNext));
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = tn;
        return (null != e && e < t.width && (t = tl), t);
    };
    getStyle(e, t) {
        let l = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: eQ.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: eQ.A.Extrapolate.CLAMP }),
            filter: eQ.A.template`grayscale(${l})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: l, onIntentionalChange: n },
                state: { currentIndex: s },
            } = this,
            i = (0, e9.U3)(s, l.length),
            a = (0, e9.U3)(e, l.length),
            r = 1 === Math.abs(e - i) || (e === l.length - 1 && 0 === i) || (0 === e && i === l.length - 1);
        (this.setState({ playingVideo: !1, currentIndex: a, animate: r, hasInteracted: t }),
            t && null != n && n(l[a], i, a));
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
            ? (0, n.jsx)(eO.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: tt.AU,
                  children: (0, n.jsx)("img", { src: e.src, alt: "", className: tt.NP }),
              })
            : (0, n.jsx)(eO.D, {
                  onClick: () => this.setItem(t, !0),
                  className: tt.AU,
                  children: (0, n.jsx)("img", { alt: "", className: tt.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, l) => {
        let { currentIndex: s, volume: i, isMuted: r } = this.state,
            o = t === (0, e9.U3)(s, this.props.items.length);
        return (0, n.jsx)(eQ.A.div, {
            className: a()(tt.AS, { [tt.Xt]: o }),
            style: null != l ? this.getStyle(t, l) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === D.geh.VIDEO || e.type === D.geh.YOUTUBE_VIDEO
                    ? (0, n.jsx)(to, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: i,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: r,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: l, hoveringPreviousItem: s, hoveringNextItem: i } = this.state,
            r = (0, n.jsx)(e9.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: l,
                edgeItems: 2,
            });
        return e.length <= 1
            ? r
            : (0, n.jsxs)("div", {
                  className: tt.HY,
                  children: [
                      r,
                      (0, n.jsx)(e2, { onClick: this.manualPrevious, className: a()(tt.UE, { [tt.h_]: s }) }),
                      (0, n.jsx)(e3, { onClick: this.manualNext, className: a()(tt.UE, { [tt.h_]: i }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        switch (e.type) {
            case D.geh.YOUTUBE_VIDEO:
                return (0, D.PE$)(e.youtubeVideoId);
            case D.geh.IMG:
                return e.src;
            case D.geh.VIDEO:
                return e.thumbnailSrc;
            default:
                return;
        }
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: l } = this.state,
            s = l === t;
        return (0, n.jsxs)(
            "div",
            {
                className: a()(tt.Yw, s ? tt.sM : tt.N7),
                children: [
                    (0, n.jsx)("img", {
                        alt: e.alt ?? String(t),
                        className: tt.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === D.geh.YOUTUBE_VIDEO || e.type === D.geh.VIDEO ? (0, n.jsx)(tc, {}) : null,
                    s ? (0, n.jsx)("div", { className: tt.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: l, paused: s } = this.props,
            { currentIndex: i, playingVideo: a, hasInteracted: r } = this.state;
        return (0, n.jsxs)(e1.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: l,
            className: t,
            disable: a || r || s,
            children: [
                this.renderCarousel(),
                (0, n.jsx)("div", {
                    className: tt.X$,
                    children: (0, n.jsx)(e7, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: i,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: tt.XG,
                        align: e.length < 6 ? e7.Align.LEFT : e7.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e0.A)(td);
var tu = l(882188);
function tm(e) {
    let { className: t, ...l } = e;
    return (0, n.jsx)(eq.A, {
        ...l,
        className: a()(tu.Zy, t),
        mediaPlayerClassName: tu.Zy,
        renderLinkComponent: eJ.bU,
    });
}
function th(e) {
    let { containerClassName: t, className: l, ...s } = e;
    return (0, n.jsx)(eZ.Ay, { ...s, className: a()(l, t) });
}
let tp = { width: 1280, height: 720 },
    tg = { width: 640, height: 360 },
    tx = (e) => {
        let t,
            l,
            s,
            { item: i, onPlay: a, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (i.type === D.geh.YOUTUBE_VIDEO)
            ((t = { url: (0, D.PE$)(i.youtubeVideoId), ...tp }),
                (l = {
                    url: `${(0, D.uJ2)(i.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                    ...tg,
                }),
                (s = ek.mt.YOUTUBE));
        else {
            let e = null != i.width ? i.width : 0,
                n = null != i.height ? i.height : 0;
            ((t = { url: i.thumbnailSrc, width: e, height: n }),
                (l = { url: i.src, proxyURL: i.src, width: e, height: n }));
        }
        return (0, n.jsx)("div", {
            className: tu.x,
            children: (0, n.jsx)(eU.rr, {
                className: tu.Zy,
                iframeWrapperClassName: tu.Zy,
                href: null,
                thumbnail: t,
                video: l,
                provider: s,
                maxHeight: tl.height,
                maxWidth: "small",
                onPlay: a,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: d,
                onMute: c,
                autoPlay: u,
                renderImageComponent: th,
                renderVideoComponent: tm,
                renderLinkComponent: eJ.bU,
            }),
        });
    };
class tv extends s.PureComponent {
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
            e[0].type === D.geh.IMG &&
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
            e.type === D.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                }));
    };
    handleIntentionalChange = (e, t, l, n) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: s } = this.props;
        null != s && s(e, t, l, n);
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
            n = null != l ? Date.now() - l : void 0;
        t?.({ src: e.target.src, loadTimeMs: n });
    };
    renderItem = (e, t) => {
        let l,
            { isMuted: s, volume: i } = this.state,
            { videoAutoPlay: r } = this.props;
        switch (e.type) {
            case D.geh.YOUTUBE_VIDEO:
            case D.geh.VIDEO:
                l = (0, n.jsx)(tx, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: s,
                    volume: i,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                });
                break;
            case D.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, n.jsx)(m.D, { variant: "heading-xl/semibold", children: M.intl.string(M.t.UvDfMz) });
                    return (0, n.jsx)("div", {
                        className: tu.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? M.intl.string(M.t.X4IxWL);
                    l = (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(et.y, {
                                className: a()(tu.u1, { [tu.R]: void 0 !== this.state.status.get(e.src) }),
                                type: et.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, n.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: a()(tu.JD, { [tu.R]: "loaded" !== this.state.status.get(e.src) }),
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
        return (0, n.jsx)(eO.D, { className: tu.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: l });
    };
    render() {
        let { items: e, autoplayInterval: t, className: l, paused: s, themedPagination: i } = this.props,
            { hasInteracted: r } = this.state;
        return (0, n.jsx)(e$, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: s || r,
            renderItem: this.renderItem,
            className: a()(tu.Gt, l),
            themedPagination: i,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var tj = l(256905),
    tC = l(531685),
    tA = l(173018);
function tI(e) {
    let { application: t, carouselItems: l } = e,
        i = (0, c.bG)([tC.A], () => tC.A.isFocused()),
        a = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("img", { className: tA.M, src: K, "aria-hidden": !0, alt: "" }),
                (0, n.jsx)(m.D, { variant: "heading-xl/semibold", children: M.intl.string(M.t.UvDfMz) }),
            ],
        });
    l.forEach((e, n) => {
        e.alt = M.intl.formatToPlainString(M.t.sSEhHb, { index: n + 1, totalImages: l.length, name: t.name });
    });
    let r = s.useCallback(
        (e, t) => {
            if (e.type === D.geh.IMG) {
                let t = l.filter((e) => e.type === D.geh.IMG),
                    n = t.findIndex((t) => t === e);
                if (n < 0) return;
                let s = t.map((e) => {
                    var t;
                    return {
                        url: ((t = e.src), `${t.split("?")[0]}?size=2048`),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: "IMAGE",
                    };
                });
                (0, tj.R)({
                    items: s,
                    startingIndex: n,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [l],
    );
    return 0 === l.length
        ? null
        : (0, n.jsx)(tv, {
              className: tA.D,
              themedPagination: !0,
              items: l,
              autoplayInterval: 8e3,
              paused: !i,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: a,
          });
}
var tf = l(168186);
l(827669);
var tN = l(853618);
function tb(e) {
    let { application: t } = e,
        l = s.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tf.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === l.length
        ? null
        : (0, n.jsxs)("div", {
              className: tN.hd,
              children: [
                  (0, n.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.swIgTL),
                  }),
                  (0, n.jsx)("div", {
                      className: tN.hQ,
                      children: l.map((e) =>
                          (0, n.jsxs)(
                              "div",
                              {
                                  className: tN.dO,
                                  children: [
                                      (0, n.jsxs)(g.E, {
                                          className: tN.p6,
                                          variant: "mono-md/bold",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, n.jsx)(g.E, {
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
var ty = l(534890),
    t_ = l(812991),
    tE = l(177953),
    tS = l(152249),
    tR = l(975571),
    tP = l(889558),
    tT = l(98490);
let tL = tR.A.getArticleURL(D.MVz.BOT_DATA_ACCESS);
function tD(e) {
    let { application: t } = e,
        { hasMessageContent: l, hasGuildPresences: i, hasGuildMembers: a, hasIntents: r } = (0, tS.Z)(t),
        o = s.useCallback(() => {
            null != t.privacy_policy_url && (0, tP.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, n.jsxs)("div", {
        className: tT.hd,
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: M.intl.string(M.t.QzDgMq),
            }),
            (0, n.jsxs)("div", {
                className: tT.hQ,
                children: [
                    r &&
                        (0, n.jsxs)("ul", {
                            className: tT.In,
                            children: [
                                (0, n.jsx)(m.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-default",
                                    children: M.intl.string(M.t.U6KH5S),
                                }),
                                l &&
                                    (0, n.jsx)(tO, {
                                        icon: ty.ChatIcon,
                                        heading: M.intl.string(M.t.gJpBO2),
                                        body: M.intl.string(M.t["L+QVbh"]),
                                    }),
                                i &&
                                    (0, n.jsx)(tO, {
                                        icon: t_.UserCircleStatusIcon,
                                        heading: M.intl.string(M.t["jo0oj/"]),
                                        body: M.intl.string(M.t.Dm0jqx),
                                    }),
                                a &&
                                    (0, n.jsx)(tO, {
                                        icon: tE.GroupIcon,
                                        heading: M.intl.string(M.t.QZql7O),
                                        body: M.intl.string(M.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, n.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: M.intl.format(M.t.b6nqk0, { helpCenterUrl: tL }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, n.jsx)(g.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            className: tT.hM,
                            children: M.intl.format(M.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tO(e) {
    let { icon: t, heading: l, body: s } = e;
    return (0, n.jsxs)("li", {
        className: tT.KT,
        children: [
            (0, n.jsx)(t, { color: "currentColor", size: "md" }),
            (0, n.jsxs)("div", {
                className: tT.D6,
                children: [
                    (0, n.jsx)(m.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, n.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: s }),
                ],
            }),
        ],
    });
}
var tk = l(692617),
    tU = l(664121),
    tw = l(682163),
    tM = l(773669),
    tG = l(596477);
function tV(e) {
    let {
            application: t,
            mutualGuilds: l,
            className: s,
            textVariant: i = "body-sm/normal",
            guildsClassName: r,
            children: o,
        } = e,
        d = (0, c.bG)([tM.default], () => tM.default.locale),
        u = new Intl.ListFormat(d),
        m = t.directory_entry?.guild_count ?? 0,
        h = l ?? [],
        p = h.length,
        x = Math.max(0, m - p),
        v = (function (e, t, l, n) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === l) return M.intl.formatToPlainString(M.t.pnzE1t, { mutualGuildCount: t });
            let s = t > 0 ? M.t.YR8PSL : M.t.GQjq6c,
                i = new Intl.NumberFormat(n, { notation: "compact", compactDisplay: "short" });
            return M.intl.formatToPlainString(s, {
                guildCount: i.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: i.format(l),
            });
        })(m, p, x, d),
        j =
            h.length > 3
                ? M.intl.formatToPlainString(M.t.m6oRrA, { appNames: u.format(h.slice(2).map((e) => e.name)) })
                : void 0;
    return 0 === h.length && null == v
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  o,
                  (0, n.jsxs)("div", {
                      className: a()(s, tG.iE),
                      children: [
                          (0, n.jsx)("div", {
                              className: a()(tG.Pt, r),
                              children:
                                  h.length > 0
                                      ? (0, n.jsx)(tk.A, {
                                            guilds: h,
                                            maxGuilds: 3,
                                            size: tw.Ay.Sizes.SMOL,
                                            overflowTooltip: j,
                                        })
                                      : (0, n.jsx)(tU.ServerIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 16,
                                            height: 16,
                                            className: tG.DE,
                                        }),
                          }),
                          null != v ? (0, n.jsx)(g.E, { variant: i, color: "text-default", children: v }) : null,
                      ],
                  }),
              ],
          });
}
var tF = l(973172),
    tH = l(68316);
function tz(e) {
    let { application: t, className: l } = e,
        i = s.useCallback((e) => {
            (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: L.ev.APPLICATION,
            }),
                V({ categoryId: e.id }));
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, n.jsxs)("div", {
              className: l,
              children: [
                  (0, n.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.s7iald),
                  }),
                  (0, n.jsx)("div", {
                      className: tH.L,
                      children: t.categories.map((e) =>
                          (0, n.jsx)(
                              eO.D,
                              {
                                  className: tH.c,
                                  onClick: () => i(e),
                                  children: (0, n.jsx)(g.E, {
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
var tB = l(462887),
    tY = l(514042),
    tX = l(194261),
    tK = l(173936),
    tW = l(9578),
    t$ = l(736653),
    tZ = l(573648),
    tq = l(194047);
function tJ(e) {
    let { application: t, className: l, innerClassName: s } = e,
        i = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || i.length > 0
        ? (0, n.jsxs)("div", {
              className: a()(tq.kL, l),
              children: [
                  (0, n.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.l6DP2n),
                  }),
                  (0, n.jsxs)("div", {
                      className: a()(tq.p_, s),
                      children: [
                          i.map((e, t) => (0, n.jsx)(tQ, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, n.jsx)(t0, {
                                    icon: tY.FileIcon,
                                    url: t.terms_of_service_url,
                                    children: M.intl.string(M.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, n.jsx)(t0, {
                                    icon: tX.LockIcon,
                                    url: t.privacy_policy_url,
                                    children: M.intl.string(M.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function tQ(e) {
    let { url: t, children: l } = e,
        s = (0, t$.Ay)(),
        i = tZ.A.getByUrl(t),
        a = (0, tB.M)(s) ? i?.icon?.darkSVG : i?.icon?.lightSVG;
    return (0, n.jsx)(t0, { icon: void 0 === a ? tK.LinkIcon : void 0, imageSrc: a, url: t, children: l });
}
function t0(e) {
    let { icon: t, imageSrc: l, iconColor: s, url: i, children: r } = e,
        o = k(),
        c = null;
    null != t
        ? (c = (0, n.jsx)(t, { className: tq.GU, color: s ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != l && (c = (0, n.jsx)("img", { className: tq.GR, src: l, alt: "" }));
    let d = (0, n.jsxs)(n.Fragment, {
        children: [c, (0, n.jsx)(g.E, { className: tq.so, variant: "body-sm/medium", selectable: !0, children: r })],
    });
    return (0, n.jsx)(tW.A, {
        href: i,
        className: a()(tq.Aw, tq.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t1 = l(449054),
    t8 = l(664343),
    t6 = l(950305),
    t4 = l(573435),
    t5 = l(714991),
    t7 = l(776231),
    t2 = l(537975),
    t3 = l(882553),
    t9 = l(937495),
    le = l(517061);
function lt(e) {
    let { guild: t, className: l, onClick: s } = e,
        i = (0, t$.Ay)(),
        r = (0, t2.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = er.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t7.mZ)() }),
        c =
            null != o
                ? o
                : (function (e) {
                      switch (e) {
                          case D.NJ8.DARK:
                              return t9;
                          case D.NJ8.LIGHT:
                              return le;
                      }
                  })(i),
        d = er.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, n.jsxs)(eO.D, {
        className: a()(t3.Nr, l),
        onClick: s,
        "aria-label": M.intl.string(M.t.RB4L2x),
        children: [
            (0, n.jsxs)("div", {
                className: t3.MY,
                children: [
                    (0, n.jsx)("img", { src: c, alt: "", className: t3.j0 }),
                    (0, n.jsx)("div", {
                        className: t3.$f,
                        children: (0, n.jsx)(t4.Ay, {
                            mask: t4.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, n.jsx)("div", {
                                className: t3.SA,
                                children: (0, n.jsx)(tw.Ay, {
                                    className: t3.__invalid_icon,
                                    iconSrc: d,
                                    guild: r,
                                    size: tw.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: t3.RN,
                children: [
                    (0, n.jsxs)("div", {
                        className: t3.Y_,
                        children: [
                            (0, n.jsx)(t5.A, { className: t3.n2, guild: t, tooltipColor: t8.ST.Colors.PRIMARY }),
                            (0, n.jsx)(m.D, { variant: "heading-sm/semibold", className: t3.J5, children: t.name }),
                        ],
                    }),
                    (0, n.jsx)(g.E, {
                        className: t3.eF,
                        variant: "body-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, n.jsx)("div", {
                        className: t3.Fj,
                        children: (0, n.jsxs)("div", {
                            className: t3.FG,
                            children: [
                                (0, n.jsx)(t6.UserIcon, { color: "currentColor", className: t3.NP, size: "xs" }),
                                (0, n.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    children: M.intl.format(M.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let ll = "redirect_to_support_server";
function ln(e) {
    var t;
    let l,
        i,
        a,
        { application: r, className: o } = e,
        { onGoToSupportServer: d } =
            ((t = r),
            (l = k()),
            (i = (0, c.bG)([N.default], () => N.default.getSessionId())),
            (a = s.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        O(D.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let l = { page: D.liQ.APPLICATION_DIRECTORY };
                        await (0, t1.Z2)(e, l);
                    }
                } catch {}
            }, [t])),
            s.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && l && null != i && "true" === e.searchParams.get(ll)) {
                    e.searchParams.delete(ll);
                    let t = e.pathname + e.search;
                    ((0, f.bG)(t), a());
                }
            }, [l, a, i, t]),
            {
                onGoToSupportServer: s.useCallback(() => {
                    null != t?.guild?.id && (l ? a() : U({ [ll]: "true" }));
                }, [t, a, l]),
            });
    return null != r.guild && r.guild.features.includes(D.GuildFeatures.DISCOVERABLE)
        ? (0, n.jsxs)("div", {
              className: o,
              children: [
                  (0, n.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.KJEO27),
                  }),
                  (0, n.jsx)(lt, { guild: r.guild, onClick: d }),
              ],
          })
        : null;
}
var ls = l(412645);
let li = (0, M.getAvailableLocales)();
function la(e) {
    let { application: t, className: l } = e,
        i = (0, c.bG)([tM.default], () => tM.default.locale),
        { supportedLanguages: r, usersLanguageIsFirst: o } = s.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    l = e.has(i),
                    n = li.filter((t) => e.has(t.value));
                return (
                    l && n.sort((e, t) => (e.value === i ? -1 : +(t.value === i))),
                    { supportedLanguages: n.map((e) => M.intl.string(e.localizedName)), usersLanguageIsFirst: l }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, i]);
    return (0, n.jsxs)("div", {
        className: l,
        children: [
            (0, n.jsx)(m.D, {
                variant: "heading-xs/semibold",
                color: "text-strong",
                children: M.intl.string(M.t.Fbjlu3),
            }),
            (0, n.jsx)("ul", {
                className: ls.nw,
                children: r.map((e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: a()(ls.WH, ls.O6),
                            children: (0, n.jsx)(g.E, {
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
var lr = l(527308);
function lo(e) {
    let { className: t, view: l, application: s } = e,
        i = "embedded" === l,
        r = (0, tF.A)({ application: s });
    return (0, n.jsxs)("div", {
        className: a()(t, { [lr.PD]: !i, [lr.UT]: i }),
        children: [
            (0, n.jsxs)("div", {
                className: a()(lr.hd, { [lr.d5]: i }),
                children: [
                    (0, n.jsx)("div", {
                        className: lr.iY,
                        children: (0, n.jsx)(tV, {
                            application: s,
                            mutualGuilds: r,
                            className: lr.wu,
                            guildsClassName: lr.HG,
                            children: (0, n.jsx)(m.D, {
                                variant: "heading-xs/semibold",
                                color: "text-strong",
                                children: M.intl.string(M.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, n.jsx)(tz, { application: s, className: lr.iY }),
                    (0, n.jsx)(la, { application: s, className: lr.iY }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: a()(lr.hd, { [lr.d5]: i }),
                children: [
                    (0, n.jsx)(tJ, { application: s, className: lr.iY, innerClassName: i ? lr.RU : void 0 }),
                    (0, n.jsx)(ln, { application: s, className: lr.iY }),
                ],
            }),
        ],
    });
}
var lc = l(478676),
    ld = l.n(lc),
    lu = l(900797),
    lm = l(847374),
    lh = l(558179),
    lp = l(28863),
    lg = l(574332),
    lx = l(167189),
    lv = l(486889),
    lj = l(481859),
    lC = l(143145);
let lA = /^discord.gg\/[a-zA-Z0-9-]+/,
    lI = {
        ...lh.A.rules,
        heading: {
            ...lh.A.rules.heading,
            react(e, t, l) {
                let s = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, n.jsx)(lj.A, { tag: s, children: t(e.content, l) }, l.key);
            },
        },
        image: { ...ld().defaultRules.image },
        inviteLink: {
            order: lh.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? lA.exec(e) : null),
            parse: (e, t, l) => {
                let n = (0, lv.br)(e[0]);
                return null == n || n.type !== lx.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              (lg.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: n.code,
                                  context: { location: "Application Directory" },
                              }),
                                  l.closeModal?.());
                          },
                      };
            },
            react: (e, t, l) =>
                (0, n.jsx)(
                    lp.Anchor,
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
var lf = l(148323);
let lN = ld().parserFor(lI),
    lb = ld().reactFor(ld().ruleOutput(lI, "react"));
function ly(e) {
    let { description: t, supportsMarkdown: l } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return (e.observe(o.current), () => e.disconnect());
    }, []);
    let [c, d] = s.useState(!1),
        u = s.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: o,
                className: a()({ [lf.mA]: !c, [lf.ii]: !c && "Safari" === platform.name }),
                children: l
                    ? (0, n.jsx)(lh.A, {
                          className: lf.R4,
                          parser: lN,
                          output: lb,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, n.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: t }),
            }),
            i || c ? (0, n.jsx)(l_, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function l_(e) {
    let { onToggle: t, isShowingMore: l } = e,
        i = s.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: lf.eR,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "body-md/semibold",
                            color: "interactive-text-default",
                            children: l ? M.intl.string(M.t["vtfc4+"]) : M.intl.string(M.t.ZDRyuq),
                        }),
                        l
                            ? (0, n.jsx)(lu.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: lf.ys })
                            : (0, n.jsx)(lm.ChevronSmallDownIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: lf.ys,
                              }),
                    ],
                }),
            [l],
        );
    return (0, n.jsxs)(eO.D, {
        className: lf.dO,
        onClick: t,
        children: [(0, n.jsx)("div", { className: lf.yF }), i, (0, n.jsx)("div", { className: lf.yF })],
    });
}
let lE = function (e) {
    let { application: t } = e,
        l = t.directory_entry?.detailed_description,
        i = t.directory_entry?.short_description,
        a = s.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, n.jsx)(ly, { description: l, supportsMarkdown: !0 })
                    : null != i && i.length > 0
                      ? (0, n.jsx)(ly, { description: i, supportsMarkdown: !1 })
                      : null,
            [l, i],
        );
    return null == a
        ? null
        : (0, n.jsxs)("div", {
              className: lf.l4,
              children: [
                  (0, n.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.txraKS),
                  }),
                  a,
              ],
          });
};
var lS = l(136722),
    lR = l(595738),
    lP = l(376092),
    lT = l(263442);
let lL = function (e) {
    let { application: t } = e,
        l = s.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return lP.Q.filter((t) => lS.zy(lS.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != l && l.length > 0
        ? (0, n.jsxs)("div", {
              className: lT.A,
              children: [
                  (0, n.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.runNF8),
                  }),
                  (0, n.jsx)(lR.A, {
                      className: lT.h,
                      grantedPermissions: l,
                      grantedPermissionsHeader: M.intl.string(M.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var lD = l(644647);
function lO(e) {
    let { application: t } = e,
        l = s.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(P.xb).filter(eD.Vq) ?? [], [t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: lD.Xb,
                children: [
                    (0, n.jsx)(tI, { application: t, carouselItems: l }),
                    (0, n.jsx)(lE, { application: t }),
                    (0, n.jsx)(tb, { application: t }),
                    (0, n.jsx)(lL, { application: t }),
                    (0, n.jsx)(tD, { application: t }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lD.Q9,
                children: [
                    (0, n.jsx)("div", { className: lD.yF }),
                    (0, n.jsx)(m.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: M.intl.string(M.t["mD+J/i"]),
                    }),
                    (0, n.jsx)(lo, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
l(321073);
var lk = l(607399),
    lU = l(858899),
    lw = l(165862),
    lM = l(477782),
    lG = l(138134),
    lV = l(265872),
    lF = l(365199),
    lH = l(663341),
    lz = l(821609),
    lB = l(782134),
    lY = l(787389),
    lX = l(688810),
    lK = l(361926),
    lW = l(204776),
    l$ = l(50268),
    lZ = l(25451),
    lq = l(928658),
    lJ = l(327891),
    lQ = l(957565),
    l0 = l(692848),
    l1 = l(108861);
let l8 = "start_application_install",
    l6 = "launch_activity";
function l4(e) {
    let { renderDropdown: t, size: l } = e,
        i = s.useRef(null);
    return (0, n.jsx)(lV.Y, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return t(l);
        },
        position: "left",
        align: "top",
        animation: lV.Y.Animation.NONE,
        children: (e) =>
            (0, n.jsx)(eM.K, {
                buttonRef: i,
                variant: "secondary",
                size: l,
                icon: lF.MoreHorizontalIcon,
                "aria-label": M.intl.string(M.t["UKOtz+"]),
                ...e,
            }),
    });
}
function l5(e) {
    var t;
    let l,
        i,
        { application: a, variant: r, size: o, contentWidth: c } = e,
        { onClickInstallApplication: d, canInstall: u } =
            ((t = a),
            (l = k()),
            (i = s.useCallback(() => {
                let e = L.h.getField("guildId") ?? void 0;
                (0, l0.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            s.useEffect(() => {
                let e = new URL(location.href);
                if (l && "true" === e.searchParams.get(l8)) {
                    e.searchParams.delete(l8);
                    let t = e.pathname + e.search;
                    ((0, f.bG)(t), i());
                }
            }, [l, i]),
            {
                onClickInstallApplication: s.useCallback(() => {
                    if (
                        (O(D.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (lk.Fr || lk.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, l0.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (l) i();
                    else {
                        let e = L.h.getField("guildId");
                        (y.default.track(D.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: lk.Fr ? "mobile_web" : "desktop_web",
                        }),
                            U({ [l8]: "true" }));
                    }
                }, [t, i, l]),
                canInstall: s.useMemo(
                    () =>
                        (0, lW.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === c
        ? (0, n.jsx)(eM.K, {
              variant: r,
              icon: lH.PlusLargeIcon,
              size: o,
              onClick: d,
              "aria-label": M.intl.string(M.t.NgXl3C),
              disabled: !u,
          })
        : (0, n.jsx)(lz.$, {
              variant: r,
              size: o,
              text: "small" === c ? M.intl.string(M.t.qRZ35t) : M.intl.string(M.t.NgXl3C),
              onClick: d,
              disabled: !u,
          });
}
function l7(e) {
    let { size: t, contentWidth: l, onClick: s, isSubmitting: i } = e;
    return "icon" === l
        ? (0, n.jsx)(eM.K, {
              variant: "primary",
              icon: lB.PlayIcon,
              size: t,
              onClick: s,
              loading: i,
              "aria-label": M.intl.string(M.t.QO7rO6),
          })
        : (0, n.jsx)(lz.$, { variant: "primary", size: t, text: M.intl.string(M.t.QO7rO6), onClick: s, loading: i });
}
let l2 = function (e) {
    let { application: t, size: l, ref: i } = e,
        { analyticsLocations: r } = (0, lX.Ay)(),
        o = s.useCallback(() => {
            var e;
            (O(D.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }),
                (0, lQ.C)(
                    ((e = t.id), `${location.protocol}//${location.host}${D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, lU.P0)({ text: M.intl.string(M.t["L/PwZf"]), variant: "success" }),
                ));
        }, [t.id]),
        d = s.useCallback(() => {
            let e = lJ.Ay.createFromServer(t);
            (0, lq.r3)({ application: e, entrypoint: "app_directory" });
        }, [t]),
        u = (0, l$.A)({
            id: t.id,
            label: M.intl.string(M.t["FfCL+6"]),
            onSuccess: () => (0, lU.P0)({ text: M.intl.string(M.t.eNjAah), variant: "success" }),
        }),
        m = s.useCallback(
            (e, t) =>
                (0, n.jsxs)(lw.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": M.intl.string(M.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, n.jsx)(lM.rX, {
                                  children: (0, n.jsx)(lM.Dr, {
                                      id: "copy",
                                      label: M.intl.string(M.t.z4sP5J),
                                      action: o,
                                      icon: tK.LinkIcon,
                                      leadingAccessory: { type: "icon", icon: tK.LinkIcon },
                                  }),
                              })
                            : null,
                        (0, n.jsx)(lM.rX, {
                            children: (0, n.jsx)(lM.Dr, {
                                id: "report",
                                label: M.intl.string(M.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: lG.FlagIcon },
                                action: d,
                            }),
                        }),
                        null != u ? (0, n.jsx)(lM.rX, { children: u }) : null,
                    ],
                }),
            [u, d, o],
        ),
        { onClickLaunchActivity: h, isSubmitting: p } = (function (e, t) {
            let l = e.id,
                n = e?.bot?.id,
                i = (0, lZ.X)(e),
                a = (0, lK.Vr)({ context: { type: "contextless" }, applicationId: l, botUserId: n }),
                r = null != n && (0, ei.$B)(e) && (0, ei.Z$)(e) && (i || a),
                [o, d] = s.useState(!1),
                u = k(),
                m = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
                h = (0, lY.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => d(!0),
                    runAfterLaunchAttempt: () => d(!1),
                });
            s.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(l6);
                if (u && r && t && null != n && null != m) {
                    e.searchParams.delete(l6);
                    let t = e.pathname + e.search;
                    ((0, f.bG)(t), h());
                }
            }, [u, r, n, m, h]);
            let p = s.useCallback(async () => {
                if (null != n) {
                    if ((O(D.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: l }), !u))
                        return void U({ [l6]: "true" });
                    await h();
                }
            }, [l, n, u, h]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(t, r),
        g = null != h,
        x = g ? "secondary" : "primary";
    return (0, n.jsxs)("div", {
        ref: i,
        children: [
            (0, n.jsxs)("div", {
                className: a()(l1.Ik, l1.U),
                children: [
                    g && (0, n.jsx)(l7, { size: l, contentWidth: "normal", onClick: h, isSubmitting: p }),
                    (0, n.jsx)(l5, { application: t, size: l, contentWidth: "normal", variant: x }),
                    lQ.p5
                        ? (0, n.jsx)(eM.K, {
                              variant: "secondary",
                              size: l,
                              icon: tK.LinkIcon,
                              onClick: o,
                              "aria-label": M.intl.string(M.t.z4sP5J),
                          })
                        : null,
                    (0, n.jsx)(l4, { renderDropdown: (e) => m(!1, e), size: l }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: a()(l1.Ik, l1.EX),
                children: [
                    g && (0, n.jsx)(l7, { size: l, contentWidth: "small", onClick: h, isSubmitting: p }),
                    (0, n.jsx)(l5, { application: t, size: l, contentWidth: "small", variant: x }),
                    (0, n.jsx)(l4, { renderDropdown: (e) => m(lQ.p5, e), size: l }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: a()(l1.Ik, l1.nU),
                children: [
                    g && (0, n.jsx)(l7, { size: l, contentWidth: "icon", onClick: h, isSubmitting: p }),
                    (0, n.jsx)(l5, { application: t, size: l, contentWidth: "icon", variant: x }),
                    (0, n.jsx)(l4, { renderDropdown: (e) => m(lQ.p5, e), size: l }),
                ],
            }),
        ],
    });
};
var l3 = l(973489);
let l9 = function (e) {
    let { application: t, onButtonsVisibilityChange: l } = e,
        i = s.useRef(null),
        a = s.useMemo(() => er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = s.useMemo(() => {
            let e = [];
            return (
                (0, ei.b7)(t) && e.push(M.intl.string(M.t.LO4f0P)),
                (0, ei.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(M.intl.string(M.t["8z5B2U"]))),
                (0, ei.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(M.intl.string(M.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(eA, { application: t, bannerType: "detail", iconURL: a }),
            (0, n.jsx)("div", {
                className: l3.H,
                style: { height: 52 },
                children: (0, n.jsx)("img", {
                    src: a,
                    alt: "",
                    className: l3.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, n.jsxs)("div", {
                className: l3.op,
                children: [
                    (0, n.jsxs)("div", {
                        className: l3.tJ,
                        children: [
                            (0, n.jsx)(m.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, n.jsx)("div", {
                                className: l3.A7,
                                children: r.map((e, t) =>
                                    (0, n.jsx)(
                                        g.E,
                                        {
                                            className: l3.MO,
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
                    (0, n.jsx)(es.L, {
                        innerRef: i,
                        onChange: l,
                        active: !0,
                        children: (0, n.jsx)(l2, { ref: i, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var ne = l(172218),
    nt = l(268951);
function nl(e) {
    let { applicationId: t, similarApplications: l, onSelectApplication: i, similarLoadId: a } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: l } = e,
                [n, i] = s.useState(),
                a = (0, ne.K)(function (e) {
                    e && i(t);
                });
            return (
                s.useEffect(() => {
                    n === t &&
                        O(D.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: l,
                        });
                }, [n, t, l]),
                a
            );
        })({ applicationId: t, similarAppIds: s.useMemo(() => l.map((e) => e.id), [l]) });
    return (0, n.jsx)("div", {
        className: nt.hQ,
        ref: r,
        children: l.map((e, l) =>
            (0, n.jsx)(
                nn,
                { applicationId: t, similarApplication: e, onSelectApplication: i, similarLoadId: a, position: l },
                e.id,
            ),
        ),
    });
}
function nn(e) {
    let { applicationId: t, similarApplication: l, onSelectApplication: i, position: a, similarLoadId: r } = e,
        o = (0, tF.A)({ application: l }),
        c = l.categories?.[0],
        d = s.useMemo(() => er.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 48 }), [l]),
        u = s.useCallback(() => {
            (O(D.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: l.id,
                position: a,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                i(l.id));
        }, [i, l.id, t, o.length, r, a]);
    return (0, n.jsxs)(eO.D, {
        onClick: u,
        className: nt.vU,
        children: [
            (0, n.jsxs)("div", {
                className: nt.nT,
                children: [
                    (0, n.jsx)("img", { src: d, alt: "", className: nt.my, height: 48, width: 48 }),
                    (0, n.jsxs)("div", {
                        className: nt.gn,
                        children: [
                            (0, n.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, n.jsx)(m.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: nt.JB,
                                    children: l.name,
                                }),
                            }),
                            null != c
                                ? (0, n.jsx)(g.E, {
                                      className: nt.m4,
                                      variant: "body-xs/medium",
                                      color: "text-muted",
                                      children: c.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(g.E, {
                className: nt.i3,
                variant: "body-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: l.directory_entry?.short_description ?? l.description,
            }),
            (0, n.jsx)(tV, { application: l, textVariant: "body-xs/medium", mutualGuilds: o }),
        ],
    });
}
let ns = function (e) {
    let { applicationId: t, fetchState: l, similarApplications: s, onSelectApplication: i, similarLoadId: a } = e;
    return l !== eL.e.FETCHING && (null == s || 0 === s.length)
        ? null
        : (0, n.jsxs)("div", {
              className: nt.hd,
              children: [
                  (0, n.jsx)("div", { className: nt.yF }),
                  (0, n.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      className: nt.bV,
                      children: M.intl.string(M.t.E8wCnk),
                  }),
                  (0, n.jsx)(en, {
                      loading: l === eL.e.FETCHING,
                      children:
                          null != s
                              ? (0, n.jsx)(nl, {
                                    applicationId: t,
                                    similarApplications: s,
                                    onSelectApplication: i,
                                    similarLoadId: a,
                                })
                              : null,
                  }),
              ],
          });
};
l(938796);
var ni = l(192308),
    na = l(549711),
    nr = l(55709),
    no = l(311321),
    nc = l(163437),
    nd = l(67480),
    nu = l(17815);
function nm(e) {
    let { application: t } = e;
    return (0, n.jsxs)("div", {
        className: nu.ZM,
        children: [(0, n.jsx)(nh, { application: t }), (0, n.jsx)(ng, { application: t })],
    });
}
function nh(e) {
    let { application: t } = e,
        { subscriptions: l, otps: s } = (0, eS.C)(t.id);
    return (0, n.jsxs)("div", {
        className: nu.ZM,
        children: [
            l.length > 0 &&
                (0, n.jsxs)("div", {
                    className: nu.dD,
                    children: [
                        (0, n.jsx)(no.A, { subscriptions: l, color: "text-strong" }),
                        (0, n.jsx)("div", {
                            className: nu.ZE,
                            children: l.map((e) => {
                                let l = (0, nc.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, n.jsx)(
                                    nr.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: l,
                                        onDetails: () =>
                                            F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            s.length > 0 &&
                (0, n.jsxs)("div", {
                    className: nu.dD,
                    children: [
                        (0, n.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: M.intl.string(M.t.yUGTs8),
                        }),
                        (0, n.jsx)("div", {
                            className: nu.ZE,
                            children: s.map((e) =>
                                (0, n.jsx)(
                                    nr.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, n.jsx)(na.A, {
                path: D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, n.jsx)(np, { ...e }),
            }),
        ],
    });
}
function np(e) {
    let {
            match: {
                params: { applicationId: t, skuId: i },
            },
        } = e,
        a = (0, c.bG)([nd.A], () => nd.A.get(i), [i]),
        r = (0, c.bG)([nd.A], () => (null != i ? nd.A.getParentSKU(i) : void 0), [i]),
        o = s.useId(),
        d = s.useCallback(
            () => F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, w.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        s.useLayoutEffect(() => {
            var e;
            switch (a?.type) {
                case D.Puh.CONSUMABLE:
                case D.Puh.DURABLE:
                    return void (0, ni.mM)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([
                                l.e(426782),
                                l.e(406322),
                                l.e(942571),
                                l.e(817989),
                                l.e(15481),
                                l.e(170104),
                            ]).then(l.bind(l, 963179));
                            return (l) => (0, n.jsx)(e, { appId: t, skuId: i, ...l });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                nx() ||
                                    F(
                                        D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            w.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case D.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, nc.bg)(r.flags) ? "user" : "guild"),
                        void (0, ni.mM)(
                            async () => {
                                let { SubscriptionDetailsModal: s } = await Promise.all([
                                    l.e(426782),
                                    l.e(406322),
                                    l.e(942571),
                                    l.e(817989),
                                    l.e(15481),
                                    l.e(564850),
                                ]).then(l.bind(l, 168393));
                                return (l) =>
                                    (0, n.jsx)(s, { appId: t, subscriptionType: e, skuId: i, guildId: void 0, ...l });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    nx() ||
                                        F(
                                            D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                w.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, d, r?.flags, a?.flags, a?.type, i]),
        s.useLayoutEffect(
            () => () => {
                (0, ni.Oo)(o);
            },
            [o],
        ),
        null
    );
}
function ng(e) {
    let { application: t } = e,
        l = k(),
        s = t.terms_of_service_url,
        i = t.privacy_policy_url;
    if (null == s && null == i) return null;
    function a(e, t) {
        return (0, n.jsx)(tW.A, { href: t, trusted: !l, children: e });
    }
    return (0, n.jsx)("div", {
        className: nu.V6,
        children: (0, n.jsx)(g.E, {
            color: "text-strong",
            variant: "body-sm/normal",
            children:
                null != s && null != i
                    ? M.intl.format(M.t.nylPOT, { termsHook: (e) => a(e, s), privacyHook: (e) => a(e, i) })
                    : null != s
                      ? M.intl.format(M.t["0cPyDz"], { termsHook: (e) => a(e, s) })
                      : null != i
                        ? M.intl.format(M.t["loYGC/"], { privacyHook: (e) => a(e, i) })
                        : null,
        }),
    });
}
function nx() {
    return window.location.pathname.startsWith("/login");
}
var nv = l(615052);
let nj = function (e) {
    let { applicationId: t, onSelectApplication: l, onScroll: i, initialTab: a, onButtonsVisibilityChange: r } = e,
        o = s.useRef(null),
        d = (0, c.bG)([S.A], () => S.A.getApplication(t)),
        u = (0, c.bG)([S.A], () => S.A.getApplicationFetchState(t));
    (s.useEffect(() => {
        if (null != t && null == d) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            _.Di(t, { noCache: e });
        }
    }, [t, d]),
        s.useEffect(() => {
            _.xZ({ applicationId: t });
        }, [t]),
        s.useEffect(() => () => r(!0), [r]));
    let m = d?.storefront_available,
        [h, p] = s.useState(a ?? w.GlobalDiscoveryAppsSections.ABOUT),
        g = s.useCallback(
            (e) => {
                (o.current?.scrollTo({ to: 0 }), p(w.GlobalDiscoveryAppsSections.ABOUT), l(e));
            },
            [l],
        );
    s.useEffect(() => {
        d?.storefront_available && null != t && (0, eS.F)(t);
    }, [d?.storefront_available, t]);
    let x = (0, L.Bn)(),
        v = (0, c.bG)([eL.A], () => eL.A.getFetchState({ applicationId: d?.id })),
        j = (0, c.bG)([eL.A], () => eL.A.getSimilarApplications({ applicationId: d?.id })),
        C = s.useMemo(() => j?.applications.slice(0, 3), [j]),
        A = { displayedSimilarApplications: C, previousView: x },
        I = s.useRef(A);
    (s.useEffect(() => {
        I.current = A;
    }),
        s.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = I.current;
            d?.id != null &&
                v !== eL.e.FETCHING &&
                O(D.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: L.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: d.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [d?.id, v]));
    let f = s.useMemo(
            () => [
                { id: w.GlobalDiscoveryAppsSections.ABOUT, label: M.intl.string(M.t.DkyHMK) },
                { id: w.GlobalDiscoveryAppsSections.STORE, label: M.intl.string(M.t.jgEXGB) },
            ],
            [],
        ),
        N = s.useMemo(() => {
            if (null == d) return null;
            switch (h) {
                case w.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, n.jsx)(lO, { application: d });
                case w.GlobalDiscoveryAppsSections.STORE:
                    return (0, n.jsx)(nm, { application: d });
            }
        }, [h, d]),
        b = s.useCallback(
            (e) => {
                (O(D.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === w.GlobalDiscoveryAppsSections.ABOUT
                        ? F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e)));
            },
            [t],
        ),
        y = h === w.GlobalDiscoveryAppsSections.ABOUT;
    return (0, n.jsx)(Y.A, {
        onScroll: i,
        ref: o,
        children: (0, n.jsx)(B.A, {
            children:
                null == d
                    ? null == u || u === S.e.FETCHING
                        ? (0, n.jsx)("div", { className: nv.Dg, children: (0, n.jsx)(en, { loading: !0 }) })
                        : (0, n.jsx)("div", { className: nv.Dg, children: (0, n.jsx)(W, { className: nv.z3 }) })
                    : (0, n.jsxs)("div", {
                          className: nv.nM,
                          children: [
                              (0, n.jsx)(l9, { application: d, onButtonsVisibilityChange: r }),
                              (0, n.jsxs)("div", {
                                  className: nv.hQ,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: nv.Ne,
                                          children: [
                                              m &&
                                                  (0, n.jsx)("div", {
                                                      className: nv.OF,
                                                      children: (0, n.jsx)(eT, {
                                                          tabs: f,
                                                          onTabSelect: b,
                                                          selectedTab: h,
                                                      }),
                                                  }),
                                              N,
                                              (0, n.jsx)(ns, {
                                                  applicationId: t,
                                                  fetchState: v,
                                                  similarApplications: C,
                                                  onSelectApplication: g,
                                                  similarLoadId: j?.loadId,
                                              }),
                                          ],
                                      }),
                                      y && (0, n.jsx)(lo, { className: nv.pz, application: d, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var nC = l(984516),
    nA = l(724002),
    nI = l(287174),
    nf = l(487899),
    nN = l(239314),
    nb = l(707554),
    ny = l(111162),
    n_ = l(195611);
let nE = nI.K.APPLICATION_DIRECTORY;
function nS(e) {
    let { collection: t, index: l, onSelectApplication: i } = e,
        r = (function (e) {
            let { collectionId: t, index: l } = e,
                [n, i] = s.useState(!1),
                a = (0, ne.K)(function (e) {
                    e && i(!0);
                });
            return (
                s.useEffect(() => {
                    n && O(D.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: l });
                }, [n, t, l]),
                a
            );
        })({ collectionId: t.id, index: l }),
        o = s.useCallback(
            (e, n) => {
                (O(D.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: n,
                    collection_position: l,
                    application_id: e,
                }),
                    i(e));
            },
            [t.id, l, i],
        );
    return (0, n.jsx)("div", {
        ref: r,
        children: (0, n.jsxs)(nb.F, {
            children: [
                (0, n.jsx)(m.D, {
                    className: a()(n_.Gf, { [n_.SH]: 0 === l }),
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: t.title,
                }),
                (0, n.jsx)(nb.F, {
                    children: (0, n.jsx)("div", {
                        className: n_.Qs,
                        children: t.application_directory_collection_items.map((e, t) =>
                            e.type !== nf.L.APPLICATION || null == e.application
                                ? null
                                : (0, n.jsx)(
                                      ef,
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
let nR = function (e) {
    let { onSelectApplication: t } = e,
        l = (0, c.bG)([ny.default], () => ny.default.onlyShowPreviewAppCollections) ? nA.W.PREVIEW : nA.W.ACTIVE,
        i = (0, c.bG)([Q.A], () => Q.A.getFetchState({ surface: nE, activeState: l })),
        a = (0, c.bG)([Q.A], () => Q.A.getCollections({ surface: nE, activeState: l }));
    s.useEffect(() => {
        _.An({ surface: nE, activeState: l });
    }, [l]);
    let r = s.useMemo(() => a?.filter((e) => e.type !== nN.Y.GALLERY), [a]);
    return i === Q.e.ERROR
        ? (0, n.jsx)("div", { className: n_.Un, children: (0, n.jsx)(W, { className: n_.z3 }) })
        : (0, n.jsx)(en, {
              loading: i === Q.e.FETCHING,
              children: r?.map((e, l) => (0, n.jsx)(nS, { collection: e, index: l, onSelectApplication: t }, l)),
          });
};
var nP = l(530472);
let nT = function (e) {
    let { onScroll: t, onSelectApplication: l } = e;
    return (0, n.jsxs)(Y.A, {
        onScroll: t,
        children: [
            (0, n.jsx)(z.A, {
                title: M.intl.format(M.t.kEcZ97, {}),
                description: M.intl.string(M.t.XxFts9),
                children: (0, n.jsx)(H.A, {}),
            }),
            (0, n.jsx)(B.A, {
                children: (0, n.jsxs)("div", {
                    className: nP.h,
                    children: [(0, n.jsx)(nR, { onSelectApplication: l }), (0, n.jsx)(nC.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var nL = l(806163),
    nD = l(994369),
    nO = l(475743),
    nk = l(191711),
    nU = l(781727);
function nw(e) {
    let { category: t, count: l, onSelectCategory: i, selected: r } = e,
        o = s.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        c = l.toLocaleString(tM.default.locale);
    return (0, n.jsxs)(eO.D, {
        onClick: o,
        className: a()(nU.L1, { [nU.wH]: r }),
        children: [
            (0, n.jsx)(g.E, { className: nU.UU, variant: "body-sm/medium", color: "text-strong", children: t.name }),
            (0, n.jsx)(g.E, { className: nU.U9, variant: "body-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function nM(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: i } = e,
        a = (0, c.bG)([R.A], () => R.A.getCategories()),
        r = s.useMemo(() => [(0, P.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]);
    return 0 === r.length
        ? null
        : (0, n.jsx)("div", {
              className: nU.LZ,
              children: r.map((e) => {
                  let s = e.id,
                      a = t[s] ?? 0;
                  return (0, n.jsx)(nw, { category: e, count: a, selected: s === i, onSelectCategory: () => l(e) }, s);
              }),
          });
}
function nG(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: i } = e,
        a = (0, c.bG)([R.A], () => R.A.getCategories()),
        r = s.useMemo(() => [(0, P.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]),
        o = s.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        d = s.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && l(t);
            },
            [l, r],
        ),
        u = s.useMemo(() => r.find((e) => e.id === i), [i, r]);
    return 0 === o.length
        ? null
        : (0, n.jsxs)("div", {
              className: nU.kL,
              children: [
                  (0, n.jsx)(g.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: M.intl.string(M.t.f09BQJ),
                  }),
                  (0, n.jsx)(nk.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: d,
                      selected: `${i}`,
                      "aria-label": M.intl.string(M.t.WHdCwR),
                      variant: nk.H.FILLED,
                  }),
              ],
          });
}
var nV = l(307950);
let nF = function (e) {
    let { selectedCategoryId: t, searchAllCategories: l } = e,
        i = (0, c.bG)([R.A], () => R.A.getCategories()),
        a = s.useMemo(() => i.find((e) => e.id === t)?.name, [i, t]),
        r =
            0 === t || null == a
                ? M.intl.string(M.t["FVJt+8"])
                : M.intl.formatToPlainString(M.t.FjCaNB, { categoryName: a }),
        o = 0 === t ? M.intl.string(M.t.GXiMta) : M.intl.format(M.t.JaLoFF, { onClick: l });
    return (0, n.jsxs)("div", {
        className: nV.k,
        children: [
            (0, n.jsx)(m.D, { variant: "heading-xl/semibold", className: nV.w, children: r }),
            (0, n.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: o }),
        ],
    });
};
var nH = l(586720);
function nz(e) {
    let { onSelectApplication: t, onScroll: l } = e,
        i = (0, c.bG)([N.default], () => N.default.isAuthenticated()),
        a = s.useRef(null),
        r = (0, nL.zy)(),
        o = s.useRef(null),
        {
            query: d,
            page: u,
            categoryId: m,
        } = s.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                l = null != t ? Number(t) : 1;
            return { query: e.get("q") ?? "", page: l, categoryId: Number(e.get("category_id")) ?? 0 };
        }, [r.search]),
        h = (0, c.bG)([R.A], () => R.A.getCategories()),
        p = s.useMemo(() => h?.find((e) => e.id === m), [h, m]),
        g = s.useCallback(
            (e) => {
                O(D.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: d,
                    num_results: e,
                    current_page: L.ev.SEARCH,
                    result_page: u,
                    category: p?.name,
                    category_id: p?.id,
                });
            },
            [d, u, p?.name, p?.id],
        );
    s.useEffect(() => {
        (a.current?.scrollTo({ to: 0 }),
            d !== o.current && ((o.current = d), _.$P({ query: d, options: { source: nD.V.APP_DIRECTORY } })),
            _.$P({
                query: d,
                options: { categoryId: m, page: u, pageSize: 48, source: nD.V.APP_DIRECTORY },
                onSuccessCallback: g,
            }));
    }, [m, u, d, g]);
    let { fetchState: x, searchResults: v } = (0, c.cf)([ee.A], () => ({
            fetchState: ee.A.getFetchState({
                query: d,
                categoryId: m,
                page: u,
                pageSize: 48,
                source: nD.V.APP_DIRECTORY,
            }),
            searchResults: ee.A.getSearchResults({
                query: d,
                categoryId: m,
                page: u,
                pageSize: 48,
                source: nD.V.APP_DIRECTORY,
            }),
        })),
        j = (0, c.cf)([ee.A], () => {
            let e = ee.A.getSearchResults({ query: d, source: nD.V.APP_DIRECTORY });
            return null != e ? { 0: e.totalCount, ...e.countsByCategory } : {};
        }),
        C = (0, nO.Ay)(v),
        A = s.useMemo(() => (x === S.e.FETCHING ? C : v), [x, C, v]),
        I = s.useCallback(
            (e) => {
                V({ query: d, categoryId: m, page: e });
            },
            [m, d],
        ),
        f = s.useCallback(
            (e) => {
                (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: L.ev.SEARCH,
                }),
                    V({ query: d, categoryId: e.id }));
            },
            [d],
        ),
        b = s.useCallback(
            (e, l) => {
                (O(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: L.ev.SEARCH,
                    application_id: e,
                    load_id: A?.loadId,
                    search_term: d,
                    position: l,
                }),
                    t(e));
            },
            [A?.loadId, t, d],
        ),
        y = G();
    return (0, n.jsxs)("div", {
        className: nH.kL,
        children: [
            (0, n.jsx)(Y.A, {
                ref: a,
                onScroll: l,
                children: (0, n.jsxs)("div", {
                    className: nH.WH,
                    children: [
                        i ? null : (0, n.jsx)("div", { className: nH.AW }),
                        (0, n.jsx)(B.A, {
                            children: (0, n.jsxs)("div", {
                                className: nH.hQ,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: nH.$B,
                                        children: (0, n.jsx)(nG, {
                                            countsByCategory: j,
                                            selectedCategoryId: m,
                                            onSelectCategory: f,
                                        }),
                                    }),
                                    (0, n.jsx)(en, {
                                        loading: x === S.e.FETCHING,
                                        children:
                                            x === S.e.FETCHED && (null == A || A?.results.length === 0)
                                                ? (0, n.jsx)(nF, {
                                                      selectedCategoryId: m ?? y.id,
                                                      searchAllCategories: () => f(y),
                                                  })
                                                : (0, n.jsx)("div", {
                                                      className: nH.Qs,
                                                      children: A?.results.map((e, t) => {
                                                          if (e.type === Z.j.APPLICATION) {
                                                              let l = e.data;
                                                              return (0, n.jsx)(
                                                                  ef,
                                                                  {
                                                                      application: l,
                                                                      onSelectApplication: (e) => b(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  l.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, n.jsx)(J.m, {
                                        className: nH.JV,
                                        totalCount: Math.min((A?.totalPages ?? 0) * 48, 4800),
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
            (0, n.jsx)("div", {
                className: nH.pn,
                children: (0, n.jsx)("div", {
                    className: nH.jv,
                    children: (0, n.jsx)(nM, { countsByCategory: j, selectedCategoryId: m, onSelectCategory: f }),
                }),
            }),
        ],
    });
}
var nB = l(699716);
function nY(e) {
    let { applicationId: t, hideDetailHeaderButtons: l, onClickBack: i } = e,
        r = (0, c.bG)([S.A], () => S.A.getApplication(t)),
        [o, u] = s.useState(l),
        h = s.useCallback(() => {
            u(l);
        }, [l]);
    return (0, n.jsxs)("div", {
        className: nB._u,
        children: [
            (0, n.jsx)("div", {
                className: nB.w$,
                children: (0, n.jsx)(j.XQ, { icon: d.ArrowLargeLeftIcon, onClick: i }),
            }),
            (0, n.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: nB.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, n.jsx)("div", {
                className: a()(nB.w$, nB.xY, { [nB.RK]: !l, [nB.jD]: l && !o, [nB.R]: l && o }),
                onTransitionEnd: h,
                children: null != r ? (0, n.jsx)(l2, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function nX() {
    let e = s.useCallback(() => {
            let e, t;
            ((e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, f.pX)(D.BVt.REGISTER + t));
        }, []),
        t = s.useCallback(() => {
            U();
        }, []);
    return (0, n.jsxs)(h.$T, {
        color: h.Hv.BRAND,
        className: nB.aL,
        children: [
            (0, n.jsx)(p.ClydeIcon, { size: "custom", color: "white", className: nB.wm }),
            (0, n.jsx)(g.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "body-md/normal",
                children: M.intl.string(M.t.Ol3MIt),
            }),
            (0, n.jsxs)("div", {
                className: nB.ll,
                children: [
                    (0, n.jsx)(h.Z_, { onClick: e, noticeType: D.kqX.LOGIN, children: M.intl.string(M.t["825cFy"]) }),
                    (0, n.jsx)(h.Z_, {
                        onClick: t,
                        noticeType: D.kqX.REGISTER,
                        minor: !0,
                        children: M.intl.string(M.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let nK = function () {
    var e;
    let t,
        l,
        i,
        o,
        h,
        p,
        g = (0, c.bG)([N.default], () => !N.default.isAuthenticated()),
        { onScroll: S, scrollPosition: T, resetScrollPosition: U } = (0, x.G)(),
        w = (0, L.R4)(),
        F = k(),
        H = w?.type === L.ev.CATEGORY ? w.categoryId : void 0,
        { applicationId: z, section: B } = w?.type === L.ev.APPLICATION ? w : {},
        { query: Y, categoryId: X } = w?.type === L.ev.SEARCH ? w : {},
        K = (0, c.bG)([R.A], () => R.A.getCategories()),
        W = s.useMemo(() => [(0, P.AU)(), ...K], [K]),
        $ = s.useMemo(() => W.find((e) => e.id === Number(X)), [W, X]),
        {
            tabs: Z,
            selectedTab: q,
            onSelectTab: J,
        } = ((e = H?.toString()),
        (t = (0, c.bG)([R.A], () => R.A.getCategories())),
        (l = G()),
        (i = s.useMemo(
            () => [{ id: l.id.toString(), label: l.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, l],
        )),
        (o = (0, L.R4)()),
        (h = s.useCallback(
            (e) => {
                let t = i.find((t) => t.id === e);
                null != t &&
                    (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: o?.type,
                    }),
                    (function (e) {
                        let { categoryId: t } = e,
                            l = { previousView: (0, L.R4)() };
                        (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: l });
                    })({ categoryId: e }));
            },
            [o?.type, i],
        )),
        (p = null != e && i.some((t) => t.id === e) ? e : i[0].id),
        { tabs: i, selectedTab: p, onSelectTab: h }),
        [Q, ee] = s.useState(!0),
        et = L.h.useField("trackedOpenedFromExternalEntrypoint"),
        el = L.h.useField("sessionId"),
        en = (0, c.bG)([b.default], () => b.default.getCurrentUser());
    (s.useEffect(() => {
        if (!et && null == el) {
            let e = (0, I.YP)();
            (y.default.track(D.HAw.APP_DIRECTORY_OPENED, { source: L.sW.EXTERNAL, session_id: e, user_id: en?.id }),
                L.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: L.sW.EXTERNAL },
                    guildId: null,
                }));
        }
    }, [el, et, en?.id]),
        s.useEffect(() => {
            _.bW();
        }, []),
        s.useEffect(() => {
            F && _.wD();
        }, [F]),
        s.useEffect(() => L.tS.setState({ lastItem: w }), [w]));
    let es = null != z,
        ei = w?.type === L.ev.SEARCH,
        {
            searchQuery: ea,
            onSearchTextChange: er,
            onClearSearch: eo,
            onSearchSubmit: ec,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                l = E.A.useField("query");
            s.useEffect(() => E.A.setState({ query: t }), [t]);
            let n = s.useCallback((e) => {
                    E.A.setState({ query: e });
                }, []),
                i = s.useCallback(() => {
                    E.A.setState({ query: "" });
                }, []),
                a = s.useCallback(() => {
                    let e = G();
                    (O(D.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: l,
                        category: e.name,
                        current_page: L.ev.HOME,
                        category_id: e.id,
                    }),
                        V({ query: l }));
                }, [l]);
            return { searchQuery: l, onSearchTextChange: n, onClearSearch: i, onSearchSubmit: a };
        })({ initialQuery: Y ?? "" }),
        ed = E.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: eh,
            tabsClassName: ep,
        } = (0, v.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === ea.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => E.A.setState({ searchBarState: e }),
        }),
        eg = s.useCallback(
            (e) => {
                (J(e), ei && eo(), U());
            },
            [ei, eo, J, U],
        ),
        ex = s.useCallback(
            (e) =>
                (function (e) {
                    let { applicationId: t } = e,
                        l = { previousView: (0, L.R4)() };
                    (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: l });
                })({ applicationId: e }),
            [],
        ),
        ev = es || ei,
        ej = s.useCallback(() => {
            if (null != (0, L.Bn)()) (0, f.aX)();
            else {
                let e;
                ((e = { previousView: (0, L.R4)() }), (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS, { state: e }));
            }
        }, []),
        eC = s.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: l, scrollHeight: n, location: s } = e;
                    t > 0 &&
                        O(D.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + l) / n,
                            current_page: s,
                        });
                }, 200),
            [],
        ),
        eA = s.useCallback(
            (e, t) => {
                (S(e),
                    eC({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    }));
            },
            [eC, S],
        );
    return (0, n.jsxs)("div", {
        className: a()(nB.nw, { [nB.Yz]: g }),
        children: [
            g ? (0, n.jsx)(nX, {}) : null,
            (0, n.jsxs)("div", {
                className: nB.WH,
                children: [
                    (0, n.jsxs)(j.Ay, {
                        variant: ev ? j.Z5.RELATIVE : j.Z5.OVERLAY,
                        children: [
                            !ev && (0, n.jsx)(j.ns, { scrollPosition: T }),
                            es
                                ? (0, n.jsx)(nY, { applicationId: z, hideDetailHeaderButtons: Q, onClickBack: ej })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          ei
                                              ? (0, n.jsx)(j.XQ, { icon: d.ArrowLargeLeftIcon, onClick: ej })
                                              : (0, n.jsx)(j.T4, { icon: u.AppsIcon }),
                                          ei
                                              ? (0, n.jsx)(m.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: nB.wL,
                                                    children:
                                                        null != Y && "" !== Y
                                                            ? M.intl.formatToPlainString(M.t.zHdzqW, { query: Y })
                                                            : M.intl.formatToPlainString(M.t.Qhj5Br, {
                                                                  categoryName: $?.name ?? M.intl.string(M.t.E407b7),
                                                              }),
                                                })
                                              : (0, n.jsx)(C.A, {
                                                    className: ep,
                                                    tabs: Z,
                                                    selectedTab: q,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: eu,
                                                }),
                                          (0, n.jsx)(A.A, {
                                              query: ea,
                                              placeholder: M.intl.string(M.t["5h0QOP"]),
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
                    es
                        ? (0, n.jsx)(nj, {
                              onScroll: (e) => eA(e, L.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: z,
                              initialTab: B,
                              onButtonsVisibilityChange: ee,
                          })
                        : ei
                          ? (0, n.jsx)(nz, { onSelectApplication: ex, onScroll: (e) => eA(e, L.ev.SEARCH) })
                          : "0" === q
                            ? (0, n.jsx)(nT, { onScroll: (e) => eA(e, L.ev.HOME), onSelectApplication: ex })
                            : (0, n.jsx)(eE, {
                                  tabId: Number(q),
                                  onScroll: (e) => eA(e, L.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
