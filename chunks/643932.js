(l.r(t), l.d(t, { default: () => iJ }));
var i = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(435558),
    o = l.n(r),
    c = l(855986),
    d = l(548411),
    u = l(323384),
    h = l(534514),
    m = l(417098),
    p = l(111159),
    g = l(834730),
    x = l(899647),
    v = l(770472),
    j = l(737823);
l(651266);
var A = l(876622),
    C = l(521974),
    I = l(965660),
    f = l(976860),
    N = l(46653),
    b = l(287809),
    y = l(129230),
    E = l(503406),
    _ = l(416730),
    S = l(212534),
    R = l(38181),
    P = l(684249);
(l(323874), l(14289), l(35956));
var T = l(323125),
    L = l(310419),
    D = l(652215);
function O(e, t) {
    let l = L.h.getField("sessionId"),
        i = L.h.getField("guildId"),
        n = L.h.getField("entrypoint")?.name,
        s = b.default.getCurrentUser(),
        a = { ...t, guild_id: i, directory_session_id: l, source: n, user_id: s?.id };
    return y.default.track(e, a);
}
function k() {
    return (0, c.bG)([N.default], () => N.default.isAuthenticated());
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let l in e) {
        let i = e[l];
        t.searchParams.set(l, i);
    }
    let l = t.pathname + t.search,
        i = (0, T.T2)(l, !1);
    (0, f.pX)(i);
}
var w = l(435220),
    M = l(792996);
function G() {
    return { id: 0, name: M.intl.string(M.t.ijDDwz) };
}
function V() {
    let { query: e, categoryId: t, page: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = { previousView: (0, L.R4)() },
        n = new URLSearchParams();
    (null != e && "" !== e && n.set("q", e),
        null != t && 0 !== t && n.set("category_id", t.toString()),
        null != l && l > 1 && n.set("page", l.toString()),
        (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: i, search: n.toString() }));
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
    let { heading: t = M.intl.string(M.t.NGw8v2), body: l = M.intl.string(M.t["1XZRY4"]), className: n } = e;
    return (0, i.jsxs)("div", {
        className: a()(X.kL, n),
        children: [
            (0, i.jsx)("div", {
                className: X.ZS,
                children: (0, i.jsx)("img", { className: X.Sl, src: K, alt: M.intl.string(M.t["/UJaI2"]) }),
            }),
            (0, i.jsx)(h.D, { variant: "heading-xl/semibold", className: X.wx, children: t }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: l }),
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
function ei(e) {
    let { loading: t, children: l } = e;
    return (0, i.jsxs)("div", {
        className: el.kL,
        children: [
            t
                ? (0, i.jsx)("div", {
                      className: el.dc,
                      children: (0, i.jsx)(et.y, { className: el.u1, type: et.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, i.jsx)("div", { className: a()({ [el.Lq]: t }), children: l }),
        ],
    });
}
var en = l(831259),
    es = l(735991),
    ea = l(635350),
    er = l(486020),
    eo = l(775602),
    ec = l(435582),
    ed = l(283488),
    eu = l(607470),
    eh = l(654107),
    em = l(36667);
let ep = 16 / 9,
    eg = 325 / 72;
function ex(e) {
    let { application: t, isHovered: l, botBannerUrl: s, botBannerUrlAnimated: r, iconURL: o } = e,
        c = (0, ed.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = n.useMemo(() => {
            let e = (0, es.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ec.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: h } = n.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: s, imageUrlAnimated: r }),
            [c.state, c.url, s, r],
        ),
        m = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    m
                        ? (0, i.jsx)(ev, { isHovered: l, url: u, animatedUrl: void 0 })
                        : (0, i.jsx)(eu.A, { src: d, className: a()(em._e, em.IH), muted: !0 }),
                    (0, i.jsx)(ej, { isHovered: l, url: d, isVideo: !0 }),
                ],
            })
          : m
            ? (0, i.jsx)(ev, { isHovered: l, url: u, animatedUrl: h })
            : (0, i.jsx)(eA, { iconURL: o });
}
function ev(e) {
    let { isHovered: t, url: l, animatedUrl: s } = e,
        [r, o] = n.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: l, alt: "", className: a()(em._e, em.IH, { [em.Kc]: r }), onLoad: () => o(!0) }),
            null != s ? (0, i.jsx)(ej, { isHovered: t, url: s, isVideo: !1 }) : null,
        ],
    });
}
function ej(e) {
    let { isHovered: t, url: l, isVideo: s } = e,
        [r, o] = n.useState(!1),
        [c, d] = n.useState(t);
    return (n.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)("div", {
              className: a()(em.hY, { [em.Q]: !t, [em.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: s
                  ? (0, i.jsx)(eu.A, {
                        src: l,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: em.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, i.jsx)("img", { src: l, alt: "", className: em.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eA(e) {
    let { iconURL: t } = e,
        { backgroundGradient: l, hasFetchedColors: n } = (function (e) {
            let [t, l, i] = (0, eh.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${i ?? l})`, hasFetchedColors: (0, eh.D1)(e) };
        })(t);
    return (0, i.jsx)("div", { className: a()(em.IH, em.nY, { [em.Kc]: n }), style: { backgroundImage: l } });
}
let eC = function (e) {
    let { application: t, bannerType: l, iconURL: s } = e,
        a = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        [r, o] = n.useState(!1),
        d = n.useCallback(() => {
            o(!0);
        }, []),
        u = n.useCallback(() => o(!1), []),
        h = (0, es.Z$)(t),
        m = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: g } = n.useMemo(
            () =>
                m?.id == null || m?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, er.z)({ id: m.id, banner: m.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: a
                              ? void 0
                              : (0, er.z)({ id: m.id, banner: m.banner, canAnimate: !0, size: 600 }),
                      },
            [m?.id, m?.banner, a],
        );
    return (0, i.jsx)("div", {
        className: em.cI,
        style: { aspectRatio: "card" === l ? ep : eg },
        onMouseEnter: d,
        onFocus: d,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === l && h
                ? (0, i.jsx)(ex, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == g ? void 0 : g,
                  })
                : null != p
                  ? (0, i.jsx)(ev, { isHovered: r, url: p, animatedUrl: g })
                  : (0, i.jsx)(eA, { iconURL: s }),
    });
};
var eI = l(240795);
let ef = function (e) {
    let { application: t, onSelectApplication: l, showCategory: s = !1 } = e,
        a = n.useRef(null),
        r = t.categories?.[0],
        [o, c] = n.useState(!1),
        d = n.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, es.NO)(t),
        m = n.useCallback(() => {
            l(t.id);
        }, [l, t.id]),
        p = n.useMemo(() => (o ? er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        x = s && null != r;
    return (0, i.jsx)(en.L, {
        innerRef: a,
        onChange: d,
        active: !o,
        children: (0, i.jsx)("div", {
            ref: a,
            className: eI.kL,
            children: (0, i.jsxs)(ea.A, {
                className: eI.Nr,
                onClick: m,
                onContextMenu: () => {},
                "aria-label": M.intl.string(M.t.np1Wru),
                children: [
                    (0, i.jsxs)("div", {
                        className: eI.wx,
                        children: [
                            (0, i.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, i.jsx)(eC, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, i.jsx)("div", {
                                className: eI.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, i.jsx)("img", {
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
                    (0, i.jsxs)("div", {
                        className: eI.eV,
                        children: [
                            (0, i.jsx)("div", {
                                className: eI.gn,
                                children: (0, i.jsx)("div", {
                                    className: eI.DD,
                                    children: (0, i.jsx)(h.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        className: eI.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            x || u
                                ? (0, i.jsxs)("div", {
                                      className: eI.op,
                                      children: [
                                          x
                                              ? (0, i.jsx)(g.E, {
                                                    className: eI.m4,
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
                                                    children: M.intl.string(M.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(g.E, {
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
        let { categoryId: t, onSelectApplication: l, resetScroll: s } = e,
            [a, r] = n.useState(1),
            o = n.useCallback((e) => {
                r(e);
            }, []);
        n.useEffect(() => {
            r(1);
        }, [t]);
        let c = n.useMemo(() => ({ query: "", page: a, pageSize: 48, categoryId: t }), [a, t]),
            d = (0, q.bG)([ee.A], () => ee.A.getFetchState({ query: "", page: a, pageSize: 48, categoryId: t })),
            u = (0, q.cf)([ee.A], () => ee.A.getSearchResults(c) ?? eb),
            h = (0, $.A)(u) ?? eb,
            { results: m, totalPages: p, loadId: g } = n.useMemo(() => (d === Q.e.FETCHING ? h : u), [d, h, u]),
            x = n.useMemo(() => m?.filter((e) => e.type === Z.j.APPLICATION), [m]),
            v = n.useCallback((e) => {
                let { page: t, activeCategoryId: l, onSuccessCallback: i, guildId: n, fetchCounts: s } = e;
                (s && E.$P({ query: "", guildId: n }),
                    E.$P({
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
            ? (0, i.jsx)("div", { className: eN.Un, children: (0, i.jsx)(W, { className: eN.z3 }) })
            : (0, i.jsxs)(ei, {
                  loading: d === Q.e.FETCHING,
                  children: [
                      (0, i.jsx)("div", {
                          className: eN.Qs,
                          children: x?.map((e, t) => {
                              if (e.type !== Z.j.APPLICATION) return (e.type, null);
                              {
                                  let l = e.data;
                                  return (0, i.jsx)(ef, { application: l, onSelectApplication: (e) => j(e, t) }, l.id);
                              }
                          }),
                      }),
                      (0, i.jsx)(J.m, {
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
var eE = l(289456);
let e_ = function (e) {
    let { tabId: t, onSelectApplication: l, onScroll: s } = e,
        a = n.useRef(null),
        r = n.useCallback(() => {
            a.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, c.bG)([R.A], () => R.A.getCategories()),
        d = n.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = n.useMemo(
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
    return (0, i.jsxs)(Y.A, {
        onScroll: s,
        ref: a,
        children: [
            (0, i.jsx)(z.A, { title: d?.name ?? "", description: u, children: (0, i.jsx)(H.A, {}) }),
            (0, i.jsx)(B.A, {
                children:
                    null == d
                        ? (0, i.jsx)("div", { className: eE.U, children: (0, i.jsx)(W, { className: eE.z }) })
                        : (0, i.jsx)(ey, { categoryId: d.id, onSelectApplication: l, resetScroll: r }),
            }),
        ],
    });
};
var eS = l(123791),
    eR = l(761508),
    eP = l(149050);
let eT = function (e) {
    let { tabs: t, onTabSelect: l, selectedTab: n, className: s } = e;
    return (0, i.jsx)(eR.V, {
        type: "top-pill",
        selectedItem: n,
        onItemSelect: l,
        className: s,
        children: t.map((e, t) => {
            let { id: l, label: n, count: s } = e;
            return (0, i.jsx)(
                eR.V.Item,
                {
                    id: l,
                    className: a()(eP.V, { [eP.r]: 0 === t }),
                    "aria-label": n,
                    children: null != s && s > 0 ? `${n} (${s})` : n,
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
class eW extends n.PureComponent {
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
                arrowClassName: n,
                paginationDotClassName: s,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            d = a()(eX.sb, { [eX.JU]: l }, n);
        return (0, i.jsxs)("div", {
            className: a()(eX.ne, this.props.className),
            children: [
                (0, i.jsx)("div", {
                    className: d,
                    children: (0, i.jsx)(eM.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eG.ChevronSmallLeftIcon : eV.ArrowSmallLeftIcon,
                        "aria-label": M.intl.string(M.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: eX.r$,
                    children: o().times(t, (t) =>
                        (0, i.jsx)(
                            eO.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? a()(eX.NU, r) : a()(eX.Lw, s),
                                "aria-label": M.intl.formatToPlainString(M.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: d,
                    children: (0, i.jsx)(eM.K, {
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
class e$ extends n.PureComponent {
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
        let n = t > 0 ? eB.f.LEFT : eB.f.RIGHT;
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
                paginationDotSelectedClassName: h,
                themedPagination: m,
                includeHitboxPadding: p,
                style: g,
                aspectRatio: x,
                children: v,
            } = this.props,
            { visibleIndex: j } = this.state;
        return (0, i.jsxs)("div", {
            className: eX.zr,
            children: [
                (0, i.jsxs)("div", {
                    className: a()(eX.Cf, l),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, i.jsx)("div", {
                            style: { aspectRatio: x },
                            children: (0, i.jsx)(eB.A, {
                                className: a()(eX.Dk, n),
                                step: j,
                                direction: this.getCurrentDirection(),
                                springSettings: s,
                                fadeInOut: r,
                                children: t(e[j], j),
                            }),
                        }),
                        e.length > 1 &&
                            (0, i.jsx)(eW, {
                                className: a()(o, m ? eX.S$ : eX.X$),
                                arrowClassName: c,
                                includeHitboxPadding: p,
                                current: j,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: h,
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
var eZ = l(619517),
    eq = l(248643),
    eJ = l(383055),
    eQ = l(615300),
    e0 = l(456412),
    e1 = l(133296),
    e8 = l(516521),
    e4 = l(532197),
    e6 = l(837344);
let e7 = { CENTER: e6.Hu, LEFT: e6.Vl };
class e5 extends n.PureComponent {
    static Align = e7;
    static defaultProps = { scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 }, align: e7.CENTER };
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
        return (0, i.jsx)(e8.Gt, {
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
        return (0, i.jsx)(eO.D, {
            className: a()(e6.t1, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(e4.A, { className: e6.UE, direction: e4.A.Directions.LEFT }),
        });
    }
}
class e3 extends n.PureComponent {
    handleNextClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(eO.D, {
            className: a()(e6.XS, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(e4.A, { className: e6.UE, direction: e4.A.Directions.RIGHT }),
        });
    }
}
var e9 = l(452282),
    te = l(875149),
    tt = l(811306);
let tl = { width: 640, height: 360, margin: 15 },
    ti = { width: 880, height: 495, margin: 20 },
    tn = { width: 1920, height: 1080 },
    ts = { width: 1280, height: 720 };
function ta(e) {
    return (0, eJ.$o)({ ...e, className: tt.tN, mediaPlayerClassName: tt.yf });
}
function tr(e) {
    return (0, i.jsx)(eZ.Ay, { ...e });
}
function to(e) {
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
            isMuted: h,
            onVolumeChange: m,
            onMute: p,
        } = e;
    if (s.type === D.geh.YOUTUBE_VIDEO)
        ((t = { url: (0, D.PE$)(s.youtubeVideoId), ...tn }),
            (l = {
                url: `${(0, D.uJ2)(s.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                ...ts,
            }),
            (n = ek.mt.YOUTUBE));
    else {
        let e = null != s.width ? s.width : 0,
            i = null != s.height ? s.height : 0;
        ((t = { url: s.thumbnailSrc, width: e, height: i }),
            (l = { url: s.src, proxyURL: s.src, width: e, height: i }));
    }
    let g = (0, i.jsx)(eU.rr, {
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
        className: tt.Ki,
        volume: u,
        onVolumeChange: m,
        autoMute: h,
        onMute: p,
        autoPlay: d,
        renderVideoComponent: ta,
        renderImageComponent: tr,
        renderLinkComponent: eJ.bU,
    });
    return d ? g : (0, i.jsx)(eO.D, { className: tt.AU, onClick: c, children: g });
}
function tc() {
    return (0, i.jsx)("div", {
        className: tt.eM,
        children: (0, i.jsx)(te.A, { inactive: !0, className: tt.J6, renderLinkComponent: eJ.bU }),
    });
}
class td extends n.PureComponent {
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
            t = ti;
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
                props: { items: l, onIntentionalChange: i },
                state: { currentIndex: n },
            } = this,
            s = (0, e9.U3)(n, l.length),
            a = (0, e9.U3)(e, l.length),
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
            ? (0, i.jsx)(eO.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: tt.AU,
                  children: (0, i.jsx)("img", { src: e.src, alt: "", className: tt.NP }),
              })
            : (0, i.jsx)(eO.D, {
                  onClick: () => this.setItem(t, !0),
                  className: tt.AU,
                  children: (0, i.jsx)("img", { alt: "", className: tt.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, l) => {
        let { currentIndex: n, volume: s, isMuted: r } = this.state,
            o = t === (0, e9.U3)(n, this.props.items.length);
        return (0, i.jsx)(eQ.A.div, {
            className: a()(tt.AS, { [tt.Xt]: o }),
            style: null != l ? this.getStyle(t, l) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === D.geh.VIDEO || e.type === D.geh.YOUTUBE_VIDEO
                    ? (0, i.jsx)(to, {
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
            r = (0, i.jsx)(e9.Ay, {
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
                  className: tt.HY,
                  children: [
                      r,
                      (0, i.jsx)(e2, { onClick: this.manualPrevious, className: a()(tt.UE, { [tt.h_]: n }) }),
                      (0, i.jsx)(e3, { onClick: this.manualNext, className: a()(tt.UE, { [tt.h_]: s }) }),
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
            n = l === t;
        return (0, i.jsxs)(
            "div",
            {
                className: a()(tt.Yw, n ? tt.sM : tt.N7),
                children: [
                    (0, i.jsx)("img", {
                        alt: e.alt ?? String(t),
                        className: tt.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === D.geh.YOUTUBE_VIDEO || e.type === D.geh.VIDEO ? (0, i.jsx)(tc, {}) : null,
                    n ? (0, i.jsx)("div", { className: tt.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: l, paused: n } = this.props,
            { currentIndex: s, playingVideo: a, hasInteracted: r } = this.state;
        return (0, i.jsxs)(e1.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: l,
            className: t,
            disable: a || r || n,
            children: [
                this.renderCarousel(),
                (0, i.jsx)("div", {
                    className: tt.X$,
                    children: (0, i.jsx)(e5, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: s,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: tt.XG,
                        align: e.length < 6 ? e5.Align.LEFT : e5.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e0.A)(td);
var tu = l(882188);
function th(e) {
    let { className: t, ...l } = e;
    return (0, i.jsx)(eq.A, {
        ...l,
        className: a()(tu.Zy, t),
        mediaPlayerClassName: tu.Zy,
        renderLinkComponent: eJ.bU,
    });
}
function tm(e) {
    let { containerClassName: t, className: l, ...n } = e;
    return (0, i.jsx)(eZ.Ay, { ...n, className: a()(l, t) });
}
let tp = { width: 1280, height: 720 },
    tg = { width: 640, height: 360 },
    tx = (e) => {
        let t,
            l,
            n,
            { item: s, onPlay: a, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (s.type === D.geh.YOUTUBE_VIDEO)
            ((t = { url: (0, D.PE$)(s.youtubeVideoId), ...tp }),
                (l = {
                    url: `${(0, D.uJ2)(s.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                    ...tg,
                }),
                (n = ek.mt.YOUTUBE));
        else {
            let e = null != s.width ? s.width : 0,
                i = null != s.height ? s.height : 0;
            ((t = { url: s.thumbnailSrc, width: e, height: i }),
                (l = { url: s.src, proxyURL: s.src, width: e, height: i }));
        }
        return (0, i.jsx)("div", {
            className: tu.x,
            children: (0, i.jsx)(eU.rr, {
                className: tu.Zy,
                iframeWrapperClassName: tu.Zy,
                href: null,
                thumbnail: t,
                video: l,
                provider: n,
                maxHeight: tl.height,
                maxWidth: "small",
                onPlay: a,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: d,
                onMute: c,
                autoPlay: u,
                renderImageComponent: tm,
                renderVideoComponent: th,
                renderLinkComponent: eJ.bU,
            }),
        });
    };
class tv extends n.PureComponent {
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
            case D.geh.YOUTUBE_VIDEO:
            case D.geh.VIDEO:
                l = (0, i.jsx)(tx, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: n,
                    volume: s,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                });
                break;
            case D.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, i.jsx)(h.D, { variant: "heading-xl/semibold", children: M.intl.string(M.t.UvDfMz) });
                    return (0, i.jsx)("div", {
                        className: tu.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? M.intl.string(M.t.X4IxWL);
                    l = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(et.y, {
                                className: a()(tu.u1, { [tu.R]: void 0 !== this.state.status.get(e.src) }),
                                type: et.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, i.jsx)("img", {
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
        return (0, i.jsx)(eO.D, { className: tu.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: l });
    };
    render() {
        let { items: e, autoplayInterval: t, className: l, paused: n, themedPagination: s } = this.props,
            { hasInteracted: r } = this.state;
        return (0, i.jsx)(e$, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: n || r,
            renderItem: this.renderItem,
            className: a()(tu.Gt, l),
            themedPagination: s,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var tj = l(256905),
    tA = l(531685),
    tC = l(173018);
function tI(e) {
    let { application: t, carouselItems: l } = e,
        s = (0, c.bG)([tA.A], () => tA.A.isFocused()),
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { className: tC.M, src: K, "aria-hidden": !0, alt: "" }),
                (0, i.jsx)(h.D, { variant: "heading-xl/semibold", children: M.intl.string(M.t.UvDfMz) }),
            ],
        });
    l.forEach((e, i) => {
        e.alt = M.intl.formatToPlainString(M.t.sSEhHb, { index: i + 1, totalImages: l.length, name: t.name });
    });
    let r = n.useCallback(
        (e, t) => {
            if (e.type === D.geh.IMG) {
                let t = l.filter((e) => e.type === D.geh.IMG),
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
                (0, tj.R)({
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
        : (0, i.jsx)(tv, {
              className: tC.D,
              themedPagination: !0,
              items: l,
              autoplayInterval: 8e3,
              paused: !s,
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
        l = n.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tf.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              className: tN.hd,
              children: [
                  (0, i.jsx)(h.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.swIgTL),
                  }),
                  (0, i.jsx)("div", {
                      className: tN.hQ,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: tN.dO,
                                  children: [
                                      (0, i.jsxs)(g.E, {
                                          className: tN.p6,
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
var ty = l(534890),
    tE = l(812991),
    t_ = l(177953),
    tS = l(152249),
    tR = l(975571),
    tP = l(889558),
    tT = l(98490);
let tL = tR.A.getArticleURL(D.MVz.BOT_DATA_ACCESS);
function tD(e) {
    let { application: t } = e,
        { hasMessageContent: l, hasGuildPresences: s, hasGuildMembers: a, hasIntents: r } = (0, tS.Z)(t),
        o = n.useCallback(() => {
            null != t.privacy_policy_url && (0, tP.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, i.jsxs)("div", {
        className: tT.hd,
        children: [
            (0, i.jsx)(h.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: M.intl.string(M.t.QzDgMq),
            }),
            (0, i.jsxs)("div", {
                className: tT.hQ,
                children: [
                    r &&
                        (0, i.jsxs)("ul", {
                            className: tT.In,
                            children: [
                                (0, i.jsx)(h.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-default",
                                    children: M.intl.string(M.t.U6KH5S),
                                }),
                                l &&
                                    (0, i.jsx)(tO, {
                                        icon: ty.ChatIcon,
                                        heading: M.intl.string(M.t.gJpBO2),
                                        body: M.intl.string(M.t["L+QVbh"]),
                                    }),
                                s &&
                                    (0, i.jsx)(tO, {
                                        icon: tE.UserCircleStatusIcon,
                                        heading: M.intl.string(M.t["jo0oj/"]),
                                        body: M.intl.string(M.t.Dm0jqx),
                                    }),
                                a &&
                                    (0, i.jsx)(tO, {
                                        icon: t_.GroupIcon,
                                        heading: M.intl.string(M.t.QZql7O),
                                        body: M.intl.string(M.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, i.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: M.intl.format(M.t.b6nqk0, { helpCenterUrl: tL }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, i.jsx)(g.E, {
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
    let { icon: t, heading: l, body: n } = e;
    return (0, i.jsxs)("li", {
        className: tT.KT,
        children: [
            (0, i.jsx)(t, { color: "currentColor", size: "md" }),
            (0, i.jsxs)("div", {
                className: tT.D6,
                children: [
                    (0, i.jsx)(h.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: n }),
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
            className: n,
            textVariant: s = "body-sm/normal",
            guildsClassName: r,
            children: o,
        } = e,
        d = (0, c.bG)([tM.default], () => tM.default.locale),
        u = new Intl.ListFormat(d),
        h = t.directory_entry?.guild_count ?? 0,
        m = l ?? [],
        p = m.length,
        x = Math.max(0, h - p),
        v = (function (e, t, l, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === l) return M.intl.formatToPlainString(M.t.pnzE1t, { mutualGuildCount: t });
            let n = t > 0 ? M.t.YR8PSL : M.t.GQjq6c,
                s = new Intl.NumberFormat(i, { notation: "compact", compactDisplay: "short" });
            return M.intl.formatToPlainString(n, {
                guildCount: s.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: s.format(l),
            });
        })(h, p, x, d),
        j =
            m.length > 3
                ? M.intl.formatToPlainString(M.t.m6oRrA, { appNames: u.format(m.slice(2).map((e) => e.name)) })
                : void 0;
    return 0 === m.length && null == v
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  o,
                  (0, i.jsxs)("div", {
                      className: a()(n, tG.iE),
                      children: [
                          (0, i.jsx)("div", {
                              className: a()(tG.Pt, r),
                              children:
                                  m.length > 0
                                      ? (0, i.jsx)(tk.A, {
                                            guilds: m,
                                            maxGuilds: 3,
                                            size: tw.Ay.Sizes.SMOL,
                                            overflowTooltip: j,
                                        })
                                      : (0, i.jsx)(tU.ServerIcon, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 16,
                                            height: 16,
                                            className: tG.DE,
                                        }),
                          }),
                          null != v ? (0, i.jsx)(g.E, { variant: s, color: "text-default", children: v }) : null,
                      ],
                  }),
              ],
          });
}
var tF = l(973172),
    tH = l(68316);
function tz(e) {
    let { application: t, className: l } = e,
        s = n.useCallback((e) => {
            (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: L.ev.APPLICATION,
            }),
                V({ categoryId: e.id }));
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, i.jsxs)("div", {
              className: l,
              children: [
                  (0, i.jsx)(h.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.s7iald),
                  }),
                  (0, i.jsx)("div", {
                      className: tH.L,
                      children: t.categories.map((e) =>
                          (0, i.jsx)(
                              eO.D,
                              {
                                  className: tH.c,
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
var tB = l(462887),
    tY = l(514042),
    tX = l(194261),
    tK = l(173936),
    tW = l(9578),
    t$ = l(736653),
    tZ = l(573648),
    tq = l(194047);
function tJ(e) {
    let { application: t, className: l, innerClassName: n } = e,
        s = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || s.length > 0
        ? (0, i.jsxs)("div", {
              className: a()(tq.kL, l),
              children: [
                  (0, i.jsx)(h.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.l6DP2n),
                  }),
                  (0, i.jsxs)("div", {
                      className: a()(tq.p_, n),
                      children: [
                          s.map((e, t) => (0, i.jsx)(tQ, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, i.jsx)(t0, {
                                    icon: tY.FileIcon,
                                    url: t.terms_of_service_url,
                                    children: M.intl.string(M.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, i.jsx)(t0, {
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
        n = (0, t$.Ay)(),
        s = tZ.A.getByUrl(t),
        a = (0, tB.M)(n) ? s?.icon?.darkSVG : s?.icon?.lightSVG;
    return (0, i.jsx)(t0, { icon: void 0 === a ? tK.LinkIcon : void 0, imageSrc: a, url: t, children: l });
}
function t0(e) {
    let { icon: t, imageSrc: l, iconColor: n, url: s, children: r } = e,
        o = k(),
        c = null;
    null != t
        ? (c = (0, i.jsx)(t, { className: tq.GU, color: n ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != l && (c = (0, i.jsx)("img", { className: tq.GR, src: l, alt: "" }));
    let d = (0, i.jsxs)(i.Fragment, {
        children: [c, (0, i.jsx)(g.E, { className: tq.so, variant: "body-sm/medium", selectable: !0, children: r })],
    });
    return (0, i.jsx)(tW.A, {
        href: s,
        className: a()(tq.Aw, tq.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t1 = l(449054),
    t8 = l(664343),
    t4 = l(950305),
    t6 = l(573435),
    t7 = l(714991),
    t5 = l(776231),
    t2 = l(537975),
    t3 = l(882553),
    t9 = l(937495),
    le = l(517061);
function lt(e) {
    let { guild: t, className: l, onClick: n } = e,
        s = (0, t$.Ay)(),
        r = (0, t2.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = er.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t5.mZ)() }),
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
                  })(s),
        d = er.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, i.jsxs)(eO.D, {
        className: a()(t3.Nr, l),
        onClick: n,
        "aria-label": M.intl.string(M.t.RB4L2x),
        children: [
            (0, i.jsxs)("div", {
                className: t3.MY,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: t3.j0 }),
                    (0, i.jsx)("div", {
                        className: t3.$f,
                        children: (0, i.jsx)(t6.Ay, {
                            mask: t6.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)("div", {
                                className: t3.SA,
                                children: (0, i.jsx)(tw.Ay, {
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
            (0, i.jsxs)("div", {
                className: t3.RN,
                children: [
                    (0, i.jsxs)("div", {
                        className: t3.Y_,
                        children: [
                            (0, i.jsx)(t7.A, { className: t3.n2, guild: t, tooltipColor: t8.ST.Colors.PRIMARY }),
                            (0, i.jsx)(h.D, { variant: "heading-sm/semibold", className: t3.J5, children: t.name }),
                        ],
                    }),
                    (0, i.jsx)(g.E, {
                        className: t3.eF,
                        variant: "body-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, i.jsx)("div", {
                        className: t3.Fj,
                        children: (0, i.jsxs)("div", {
                            className: t3.FG,
                            children: [
                                (0, i.jsx)(t4.UserIcon, { color: "currentColor", className: t3.NP, size: "xs" }),
                                (0, i.jsx)(g.E, {
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
function li(e) {
    var t;
    let l,
        s,
        a,
        { application: r, className: o } = e,
        { onGoToSupportServer: d } =
            ((t = r),
            (l = k()),
            (s = (0, c.bG)([N.default], () => N.default.getSessionId())),
            (a = n.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        O(D.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let l = { page: D.liQ.APPLICATION_DIRECTORY };
                        await (0, t1.Z2)(e, l);
                    }
                } catch {}
            }, [t])),
            n.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && l && null != s && "true" === e.searchParams.get(ll)) {
                    e.searchParams.delete(ll);
                    let t = e.pathname + e.search;
                    ((0, f.bG)(t), a());
                }
            }, [l, a, s, t]),
            {
                onGoToSupportServer: n.useCallback(() => {
                    null != t?.guild?.id && (l ? a() : U({ [ll]: "true" }));
                }, [t, a, l]),
            });
    return null != r.guild && r.guild.features.includes(D.GuildFeatures.DISCOVERABLE)
        ? (0, i.jsxs)("div", {
              className: o,
              children: [
                  (0, i.jsx)(h.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.KJEO27),
                  }),
                  (0, i.jsx)(lt, { guild: r.guild, onClick: d }),
              ],
          })
        : null;
}
var ln = l(412645);
let ls = (0, M.getAvailableLocales)();
function la(e) {
    let { application: t, className: l } = e,
        s = (0, c.bG)([tM.default], () => tM.default.locale),
        { supportedLanguages: r, usersLanguageIsFirst: o } = n.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    l = e.has(s),
                    i = ls.filter((t) => e.has(t.value));
                return (
                    l && i.sort((e, t) => (e.value === s ? -1 : +(t.value === s))),
                    { supportedLanguages: i.map((e) => M.intl.string(e.localizedName)), usersLanguageIsFirst: l }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, s]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(h.D, {
                variant: "heading-xs/semibold",
                color: "text-strong",
                children: M.intl.string(M.t.Fbjlu3),
            }),
            (0, i.jsx)("ul", {
                className: ln.nw,
                children: r.map((e, t) =>
                    (0, i.jsx)(
                        "li",
                        {
                            className: a()(ln.WH, ln.O6),
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
var lr = l(527308);
function lo(e) {
    let { className: t, view: l, application: n } = e,
        s = "embedded" === l,
        r = (0, tF.A)({ application: n });
    return (0, i.jsxs)("div", {
        className: a()(t, { [lr.PD]: !s, [lr.UT]: s }),
        children: [
            (0, i.jsxs)("div", {
                className: a()(lr.hd, { [lr.d5]: s }),
                children: [
                    (0, i.jsx)("div", {
                        className: lr.iY,
                        children: (0, i.jsx)(tV, {
                            application: n,
                            mutualGuilds: r,
                            className: lr.wu,
                            guildsClassName: lr.HG,
                            children: (0, i.jsx)(h.D, {
                                variant: "heading-xs/semibold",
                                color: "text-strong",
                                children: M.intl.string(M.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, i.jsx)(tz, { application: n, className: lr.iY }),
                    (0, i.jsx)(la, { application: n, className: lr.iY }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(lr.hd, { [lr.d5]: s }),
                children: [
                    (0, i.jsx)(tJ, { application: n, className: lr.iY, innerClassName: s ? lr.RU : void 0 }),
                    (0, i.jsx)(li, { application: n, className: lr.iY }),
                ],
            }),
        ],
    });
}
var lc = l(478676),
    ld = l.n(lc),
    lu = l(900797),
    lh = l(847374),
    lm = l(558179),
    lp = l(28863),
    lg = l(574332),
    lx = l(167189),
    lv = l(486889),
    lj = l(481859),
    lA = l(143145);
let lC = /^discord.gg\/[a-zA-Z0-9-]+/,
    lI = {
        ...lm.A.rules,
        heading: {
            ...lm.A.rules.heading,
            react(e, t, l) {
                let n = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, i.jsx)(lj.A, { tag: n, children: t(e.content, l) }, l.key);
            },
        },
        image: { ...ld().defaultRules.image },
        inviteLink: {
            order: lm.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? lC.exec(e) : null),
            parse: (e, t, l) => {
                let i = (0, lv.br)(e[0]);
                return null == i || i.type !== lx.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              (lg.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: i.code,
                                  context: { location: "Application Directory" },
                              }),
                                  l.closeModal?.());
                          },
                      };
            },
            react: (e, t, l) =>
                (0, i.jsx)(
                    lp.Anchor,
                    {
                        onClick: (t) => {
                            (t.preventDefault(), e.onClick());
                        },
                        children: (0, lA.tj)(e, t, l),
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
                className: a()({ [lf.mA]: !c, [lf.ii]: !c && "Safari" === platform.name }),
                children: l
                    ? (0, i.jsx)(lm.A, {
                          className: lf.R4,
                          parser: lN,
                          output: lb,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: t }),
            }),
            s || c ? (0, i.jsx)(lE, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function lE(e) {
    let { onToggle: t, isShowingMore: l } = e,
        s = n.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: lf.eR,
                    children: [
                        (0, i.jsx)(g.E, {
                            variant: "body-md/semibold",
                            color: "interactive-text-default",
                            children: l ? M.intl.string(M.t["vtfc4+"]) : M.intl.string(M.t.ZDRyuq),
                        }),
                        l
                            ? (0, i.jsx)(lu.ChevronSmallUpIcon, { size: "md", color: "currentColor", className: lf.ys })
                            : (0, i.jsx)(lh.ChevronSmallDownIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: lf.ys,
                              }),
                    ],
                }),
            [l],
        );
    return (0, i.jsxs)(eO.D, {
        className: lf.dO,
        onClick: t,
        children: [(0, i.jsx)("div", { className: lf.yF }), s, (0, i.jsx)("div", { className: lf.yF })],
    });
}
let l_ = function (e) {
    let { application: t } = e,
        l = t.directory_entry?.detailed_description,
        s = t.directory_entry?.short_description,
        a = n.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, i.jsx)(ly, { description: l, supportsMarkdown: !0 })
                    : null != s && s.length > 0
                      ? (0, i.jsx)(ly, { description: s, supportsMarkdown: !1 })
                      : null,
            [l, s],
        );
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              className: lf.l4,
              children: [
                  (0, i.jsx)(h.D, {
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
        l = n.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return lP.Q.filter((t) => lS.zy(lS.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != l && l.length > 0
        ? (0, i.jsxs)("div", {
              className: lT.A,
              children: [
                  (0, i.jsx)(h.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: M.intl.string(M.t.runNF8),
                  }),
                  (0, i.jsx)(lR.A, {
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
        l = n.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(P.xb).filter(eD.Vq) ?? [], [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: lD.Xb,
                children: [
                    (0, i.jsx)(tI, { application: t, carouselItems: l }),
                    (0, i.jsx)(l_, { application: t }),
                    (0, i.jsx)(tb, { application: t }),
                    (0, i.jsx)(lL, { application: t }),
                    (0, i.jsx)(tD, { application: t }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lD.Q9,
                children: [
                    (0, i.jsx)("div", { className: lD.yF }),
                    (0, i.jsx)(h.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: M.intl.string(M.t["mD+J/i"]),
                    }),
                    (0, i.jsx)(lo, { application: t, view: "embedded" }),
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
    lW = l(48726),
    l$ = l(587895),
    lZ = l(204776),
    lq = l(260498),
    lJ = l(50268),
    lQ = l(25451),
    l0 = l(928658),
    l1 = l(327891),
    l8 = l(957565),
    l4 = l(692848),
    l6 = l(108861);
let l7 = "start_application_install",
    l5 = "launch_activity";
function l2(e) {
    let { renderDropdown: t, size: l } = e,
        s = n.useRef(null);
    return (0, i.jsx)(lV.Y, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return t(l);
        },
        position: "left",
        align: "top",
        animation: lV.Y.Animation.NONE,
        children: (e) =>
            (0, i.jsx)(eM.K, {
                buttonRef: s,
                variant: "secondary",
                size: l,
                icon: lF.MoreHorizontalIcon,
                "aria-label": M.intl.string(M.t["UKOtz+"]),
                ...e,
            }),
    });
}
function l3(e) {
    var t;
    let l,
        s,
        a,
        { application: r, variant: o, size: c, contentWidth: d } = e,
        { onClickInstallApplication: u, canInstall: h } =
            ((t = r),
            (l = k()),
            (s = (0, lW.A)(n.useMemo(() => (0, es.SU)(t), [t]))),
            (a = n.useCallback(() => {
                let e = L.h.getField("guildId") ?? void 0;
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
                if (l && "true" === e.searchParams.get(l7)) {
                    e.searchParams.delete(l7);
                    let t = e.pathname + e.search;
                    ((0, f.bG)(t), s && a());
                }
            }, [l, a, s]),
            {
                onClickInstallApplication: n.useCallback(() => {
                    if (
                        (O(D.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (lk.Fr || lk.v1) && null == t.custom_install_url)
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
                        let e = L.h.getField("guildId");
                        (y.default.track(D.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: lk.Fr ? "mobile_web" : "desktop_web",
                        }),
                            U({ [l7]: "true" }));
                    }
                }, [t, a, l]),
                canInstall: s,
            });
    return "icon" === d
        ? (0, i.jsx)(eM.K, {
              variant: o,
              icon: lH.PlusLargeIcon,
              size: c,
              onClick: u,
              "aria-label": M.intl.string(M.t.NgXl3C),
              disabled: !h,
          })
        : (0, i.jsx)(lz.$, {
              variant: o,
              size: c,
              text: "small" === d ? M.intl.string(M.t.qRZ35t) : M.intl.string(M.t.NgXl3C),
              onClick: u,
              disabled: !h,
          });
}
function l9(e) {
    let { size: t, contentWidth: l, onClick: n, isSubmitting: s } = e;
    return "icon" === l
        ? (0, i.jsx)(eM.K, {
              variant: "primary",
              icon: lB.PlayIcon,
              size: t,
              onClick: n,
              loading: s,
              "aria-label": M.intl.string(M.t.QO7rO6),
          })
        : (0, i.jsx)(lz.$, { variant: "primary", size: t, text: M.intl.string(M.t.QO7rO6), onClick: n, loading: s });
}
let ie = function (e) {
    var t, l;
    let { application: s, size: r, ref: o } = e,
        { analyticsLocations: d } = (0, lX.Ay)(),
        u = n.useCallback(() => {
            var e;
            (O(D.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: s.id }),
                (0, l8.C)(
                    ((e = s.id), `${location.protocol}//${location.host}${D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, lU.P0)({ text: M.intl.string(M.t["L/PwZf"]), variant: "success" }),
                ));
        }, [s.id]),
        h = n.useCallback(() => {
            let e = l1.Ay.createFromServer(s);
            (0, l0.r3)({ application: e, entrypoint: "app_directory" });
        }, [s]),
        m = (0, lJ.A)({
            id: s.id,
            label: M.intl.string(M.t["FfCL+6"]),
            onSuccess: () => (0, lU.P0)({ text: M.intl.string(M.t.eNjAah), variant: "success" }),
        }),
        p = n.useCallback(
            (e, t) =>
                (0, i.jsxs)(lw.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": M.intl.string(M.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(lM.rX, {
                                  children: (0, i.jsx)(lM.Dr, {
                                      id: "copy",
                                      label: M.intl.string(M.t.z4sP5J),
                                      action: u,
                                      icon: tK.LinkIcon,
                                      leadingAccessory: { type: "icon", icon: tK.LinkIcon },
                                  }),
                              })
                            : null,
                        (0, i.jsx)(lM.rX, {
                            children: (0, i.jsx)(lM.Dr, {
                                id: "report",
                                label: M.intl.string(M.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: lG.FlagIcon },
                                action: h,
                            }),
                        }),
                        null != m ? (0, i.jsx)(lM.rX, { children: m }) : null,
                    ],
                }),
            [m, h, u],
        ),
        { onClickLaunchActivity: g, isSubmitting: x } = (function (e, t) {
            let l = e.id,
                i = e?.bot?.id,
                s = (0, lQ.X)(e),
                a = (0, lK.Vr)({ context: { type: "contextless" }, applicationId: l, botUserId: i }),
                r = null != i && (0, es.$B)(e) && (0, es.Z$)(e) && (s || a),
                [o, d] = n.useState(!1),
                u = k(),
                h = (0, c.bG)([b.default], () => b.default.getCurrentUser()),
                m = (0, lY.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => d(!0),
                    runAfterLaunchAttempt: () => d(!1),
                });
            n.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(l5);
                if (u && r && t && null != i && null != h) {
                    e.searchParams.delete(l5);
                    let t = e.pathname + e.search;
                    ((0, f.bG)(t), m());
                }
            }, [u, r, i, h, m]);
            let p = n.useCallback(async () => {
                if (null != i) {
                    if ((O(D.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: l }), !u))
                        return void U({ [l5]: "true" });
                    await m();
                }
            }, [l, i, u, m]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(s, d),
        v = null != g,
        j = v ? "secondary" : "primary",
        A =
            ((t = s.id),
            (l = (0, es.Zd)(s)),
            !(0, c.bG)([l$.A, lq.Ay], () => (0, lZ.iv)({ id: t, conjureProjectId: l }), [t, l]));
    return (0, i.jsxs)("div", {
        ref: o,
        children: [
            (0, i.jsxs)("div", {
                className: a()(l6.Ik, l6.U),
                children: [
                    v && (0, i.jsx)(l9, { size: r, contentWidth: "normal", onClick: g, isSubmitting: x }),
                    A && (0, i.jsx)(l3, { application: s, size: r, contentWidth: "normal", variant: j }),
                    l8.p5
                        ? (0, i.jsx)(eM.K, {
                              variant: "secondary",
                              size: r,
                              icon: tK.LinkIcon,
                              onClick: u,
                              "aria-label": M.intl.string(M.t.z4sP5J),
                          })
                        : null,
                    (0, i.jsx)(l2, { renderDropdown: (e) => p(!1, e), size: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(l6.Ik, l6.EX),
                children: [
                    v && (0, i.jsx)(l9, { size: r, contentWidth: "small", onClick: g, isSubmitting: x }),
                    A && (0, i.jsx)(l3, { application: s, size: r, contentWidth: "small", variant: j }),
                    (0, i.jsx)(l2, { renderDropdown: (e) => p(l8.p5, e), size: r }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()(l6.Ik, l6.nU),
                children: [
                    v && (0, i.jsx)(l9, { size: r, contentWidth: "icon", onClick: g, isSubmitting: x }),
                    A && (0, i.jsx)(l3, { application: s, size: r, contentWidth: "icon", variant: j }),
                    (0, i.jsx)(l2, { renderDropdown: (e) => p(l8.p5, e), size: r }),
                ],
            }),
        ],
    });
};
var it = l(973489);
let il = function (e) {
    let { application: t, onButtonsVisibilityChange: l } = e,
        s = n.useRef(null),
        a = n.useMemo(() => er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = n.useMemo(() => {
            let e = [];
            return (
                (0, es.b7)(t) && e.push(M.intl.string(M.t.LO4f0P)),
                (0, es.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(M.intl.string(M.t["8z5B2U"]))),
                (0, es.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(M.intl.string(M.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eC, { application: t, bannerType: "detail", iconURL: a }),
            (0, i.jsx)("div", {
                className: it.H,
                style: { height: 52 },
                children: (0, i.jsx)("img", {
                    src: a,
                    alt: "",
                    className: it.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, i.jsxs)("div", {
                className: it.op,
                children: [
                    (0, i.jsxs)("div", {
                        className: it.tJ,
                        children: [
                            (0, i.jsx)(h.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, i.jsx)("div", {
                                className: it.A7,
                                children: r.map((e, t) =>
                                    (0, i.jsx)(
                                        g.E,
                                        {
                                            className: it.MO,
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
                    (0, i.jsx)(en.L, {
                        innerRef: s,
                        onChange: l,
                        active: !0,
                        children: (0, i.jsx)(ie, { ref: s, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var ii = l(172218),
    is = l(268951);
function ia(e) {
    let { applicationId: t, similarApplications: l, onSelectApplication: s, similarLoadId: a } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: l } = e,
                [i, s] = n.useState(),
                a = (0, ii.K)(function (e) {
                    e && s(t);
                });
            return (
                n.useEffect(() => {
                    i === t &&
                        O(D.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: l,
                        });
                }, [i, t, l]),
                a
            );
        })({ applicationId: t, similarAppIds: n.useMemo(() => l.map((e) => e.id), [l]) });
    return (0, i.jsx)("div", {
        className: is.hQ,
        ref: r,
        children: l.map((e, l) =>
            (0, i.jsx)(
                ir,
                { applicationId: t, similarApplication: e, onSelectApplication: s, similarLoadId: a, position: l },
                e.id,
            ),
        ),
    });
}
function ir(e) {
    let { applicationId: t, similarApplication: l, onSelectApplication: s, position: a, similarLoadId: r } = e,
        o = (0, tF.A)({ application: l }),
        c = l.categories?.[0],
        d = n.useMemo(() => er.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 48 }), [l]),
        u = n.useCallback(() => {
            (O(D.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: l.id,
                position: a,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                s(l.id));
        }, [s, l.id, t, o.length, r, a]);
    return (0, i.jsxs)(eO.D, {
        onClick: u,
        className: is.vU,
        children: [
            (0, i.jsxs)("div", {
                className: is.nT,
                children: [
                    (0, i.jsx)("img", { src: d, alt: "", className: is.my, height: 48, width: 48 }),
                    (0, i.jsxs)("div", {
                        className: is.gn,
                        children: [
                            (0, i.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, i.jsx)(h.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: is.JB,
                                    children: l.name,
                                }),
                            }),
                            null != c
                                ? (0, i.jsx)(g.E, {
                                      className: is.m4,
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
                className: is.i3,
                variant: "body-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: l.directory_entry?.short_description ?? l.description,
            }),
            (0, i.jsx)(tV, { application: l, textVariant: "body-xs/medium", mutualGuilds: o }),
        ],
    });
}
let io = function (e) {
    let { applicationId: t, fetchState: l, similarApplications: n, onSelectApplication: s, similarLoadId: a } = e;
    return l !== eL.e.FETCHING && (null == n || 0 === n.length)
        ? null
        : (0, i.jsxs)("div", {
              className: is.hd,
              children: [
                  (0, i.jsx)("div", { className: is.yF }),
                  (0, i.jsx)(h.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      className: is.bV,
                      children: M.intl.string(M.t.E8wCnk),
                  }),
                  (0, i.jsx)(ei, {
                      loading: l === eL.e.FETCHING,
                      children:
                          null != n
                              ? (0, i.jsx)(ia, {
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
var ic = l(192308),
    id = l(549711),
    iu = l(55709),
    ih = l(311321),
    im = l(163437),
    ip = l(67480),
    ig = l(17815);
function ix(e) {
    let { application: t } = e;
    return (0, i.jsxs)("div", {
        className: ig.ZM,
        children: [(0, i.jsx)(iv, { application: t }), (0, i.jsx)(iA, { application: t })],
    });
}
function iv(e) {
    let { application: t } = e,
        { subscriptions: l, otps: n } = (0, eS.C)(t.id);
    return (0, i.jsxs)("div", {
        className: ig.ZM,
        children: [
            l.length > 0 &&
                (0, i.jsxs)("div", {
                    className: ig.dD,
                    children: [
                        (0, i.jsx)(ih.A, { subscriptions: l, color: "text-strong" }),
                        (0, i.jsx)("div", {
                            className: ig.ZE,
                            children: l.map((e) => {
                                let l = (0, im.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, i.jsx)(
                                    iu.B4,
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
            n.length > 0 &&
                (0, i.jsxs)("div", {
                    className: ig.dD,
                    children: [
                        (0, i.jsx)(h.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: M.intl.string(M.t.yUGTs8),
                        }),
                        (0, i.jsx)("div", {
                            className: ig.ZE,
                            children: n.map((e) =>
                                (0, i.jsx)(
                                    iu.B8,
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
            (0, i.jsx)(id.A, {
                path: D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, i.jsx)(ij, { ...e }),
            }),
        ],
    });
}
function ij(e) {
    let {
            match: {
                params: { applicationId: t, skuId: s },
            },
        } = e,
        a = (0, c.bG)([ip.A], () => ip.A.get(s), [s]),
        r = (0, c.bG)([ip.A], () => (null != s ? ip.A.getParentSKU(s) : void 0), [s]),
        o = n.useId(),
        d = n.useCallback(
            () => F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, w.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        n.useLayoutEffect(() => {
            var e;
            switch (a?.type) {
                case D.Puh.CONSUMABLE:
                case D.Puh.DURABLE:
                    return void (0, ic.mM)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([
                                l.e(426782),
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
                                iC() ||
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
                        (e = (0, im.bg)(r.flags) ? "user" : "guild"),
                        void (0, ic.mM)(
                            async () => {
                                let { SubscriptionDetailsModal: n } = await Promise.all([
                                    l.e(426782),
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
                                    iC() ||
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
        }, [t, o, d, r?.flags, a?.flags, a?.type, s]),
        n.useLayoutEffect(
            () => () => {
                (0, ic.Oo)(o);
            },
            [o],
        ),
        null
    );
}
function iA(e) {
    let { application: t } = e,
        l = k(),
        n = t.terms_of_service_url,
        s = t.privacy_policy_url;
    if (null == n && null == s) return null;
    function a(e, t) {
        return (0, i.jsx)(tW.A, { href: t, trusted: !l, children: e });
    }
    return (0, i.jsx)("div", {
        className: ig.V6,
        children: (0, i.jsx)(g.E, {
            color: "text-strong",
            variant: "body-sm/normal",
            children:
                null != n && null != s
                    ? M.intl.format(M.t.nylPOT, { termsHook: (e) => a(e, n), privacyHook: (e) => a(e, s) })
                    : null != n
                      ? M.intl.format(M.t["0cPyDz"], { termsHook: (e) => a(e, n) })
                      : null != s
                        ? M.intl.format(M.t["loYGC/"], { privacyHook: (e) => a(e, s) })
                        : null,
        }),
    });
}
function iC() {
    return window.location.pathname.startsWith("/login");
}
var iI = l(615052);
let iN = function (e) {
    let { applicationId: t, onSelectApplication: l, onScroll: s, initialTab: a, onButtonsVisibilityChange: r } = e,
        o = n.useRef(null),
        d = (0, c.bG)([S.A], () => S.A.getApplication(t)),
        u = (0, c.bG)([S.A], () => S.A.getApplicationFetchState(t));
    (n.useEffect(() => {
        if (null != t && null == d) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            E.Di(t, { noCache: e });
        }
    }, [t, d]),
        n.useEffect(() => {
            E.xZ({ applicationId: t });
        }, [t]),
        n.useEffect(() => () => r(!0), [r]));
    let h = d?.storefront_available,
        [m, p] = n.useState(a ?? w.GlobalDiscoveryAppsSections.ABOUT),
        g = n.useCallback(
            (e) => {
                (o.current?.scrollTo({ to: 0 }), p(w.GlobalDiscoveryAppsSections.ABOUT), l(e));
            },
            [l],
        );
    n.useEffect(() => {
        d?.storefront_available && null != t && (0, eS.F)(t);
    }, [d?.storefront_available, t]);
    let x = (0, L.Bn)(),
        v = (0, c.bG)([eL.A], () => eL.A.getFetchState({ applicationId: d?.id })),
        j = (0, c.bG)([eL.A], () => eL.A.getSimilarApplications({ applicationId: d?.id })),
        A = n.useMemo(() => j?.applications.slice(0, 3), [j]),
        C = { displayedSimilarApplications: A, previousView: x },
        I = n.useRef(C);
    (n.useEffect(() => {
        I.current = C;
    }),
        n.useEffect(() => {
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
    let f = n.useMemo(
            () => [
                { id: w.GlobalDiscoveryAppsSections.ABOUT, label: M.intl.string(M.t.DkyHMK) },
                { id: w.GlobalDiscoveryAppsSections.STORE, label: M.intl.string(M.t.jgEXGB) },
            ],
            [],
        ),
        N = n.useMemo(() => {
            if (null == d) return null;
            switch (m) {
                case w.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(lO, { application: d });
                case w.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(ix, { application: d });
            }
        }, [m, d]),
        b = n.useCallback(
            (e) => {
                (O(D.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === w.GlobalDiscoveryAppsSections.ABOUT
                        ? F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e)));
            },
            [t],
        ),
        y = m === w.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(Y.A, {
        onScroll: s,
        ref: o,
        children: (0, i.jsx)(B.A, {
            children:
                null == d
                    ? null == u || u === S.e.FETCHING
                        ? (0, i.jsx)("div", { className: iI.Dg, children: (0, i.jsx)(ei, { loading: !0 }) })
                        : (0, i.jsx)("div", { className: iI.Dg, children: (0, i.jsx)(W, { className: iI.z3 }) })
                    : (0, i.jsxs)("div", {
                          className: iI.nM,
                          children: [
                              (0, i.jsx)(il, { application: d, onButtonsVisibilityChange: r }),
                              (0, i.jsxs)("div", {
                                  className: iI.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: iI.Ne,
                                          children: [
                                              h &&
                                                  (0, i.jsx)("div", {
                                                      className: iI.OF,
                                                      children: (0, i.jsx)(eT, {
                                                          tabs: f,
                                                          onTabSelect: b,
                                                          selectedTab: m,
                                                      }),
                                                  }),
                                              N,
                                              (0, i.jsx)(io, {
                                                  applicationId: t,
                                                  fetchState: v,
                                                  similarApplications: A,
                                                  onSelectApplication: g,
                                                  similarLoadId: j?.loadId,
                                              }),
                                          ],
                                      }),
                                      y && (0, i.jsx)(lo, { className: iI.pz, application: d, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var ib = l(984516),
    iy = l(724002),
    iE = l(287174),
    i_ = l(487899),
    iS = l(239314),
    iR = l(707554),
    iP = l(111162),
    iT = l(195611);
let iL = iE.K.APPLICATION_DIRECTORY;
function iD(e) {
    let { collection: t, index: l, onSelectApplication: s } = e,
        r = (function (e) {
            let { collectionId: t, index: l } = e,
                [i, s] = n.useState(!1),
                a = (0, ii.K)(function (e) {
                    e && s(!0);
                });
            return (
                n.useEffect(() => {
                    i && O(D.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: l });
                }, [i, t, l]),
                a
            );
        })({ collectionId: t.id, index: l }),
        o = n.useCallback(
            (e, i) => {
                (O(D.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
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
        children: (0, i.jsxs)(iR.F, {
            children: [
                (0, i.jsx)(h.D, {
                    className: a()(iT.Gf, { [iT.SH]: 0 === l }),
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: t.title,
                }),
                (0, i.jsx)(iR.F, {
                    children: (0, i.jsx)("div", {
                        className: iT.Qs,
                        children: t.application_directory_collection_items.map((e, t) =>
                            e.type !== i_.L.APPLICATION || null == e.application
                                ? null
                                : (0, i.jsx)(
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
let iO = function (e) {
    let { onSelectApplication: t } = e,
        l = (0, c.bG)([iP.default], () => iP.default.onlyShowPreviewAppCollections) ? iy.W.PREVIEW : iy.W.ACTIVE,
        s = (0, c.bG)([Q.A], () => Q.A.getFetchState({ surface: iL, activeState: l })),
        a = (0, c.bG)([Q.A], () => Q.A.getCollections({ surface: iL, activeState: l }));
    n.useEffect(() => {
        E.An({ surface: iL, activeState: l });
    }, [l]);
    let r = n.useMemo(() => a?.filter((e) => e.type !== iS.Y.GALLERY), [a]);
    return s === Q.e.ERROR
        ? (0, i.jsx)("div", { className: iT.Un, children: (0, i.jsx)(W, { className: iT.z3 }) })
        : (0, i.jsx)(ei, {
              loading: s === Q.e.FETCHING,
              children: r?.map((e, l) => (0, i.jsx)(iD, { collection: e, index: l, onSelectApplication: t }, l)),
          });
};
var ik = l(530472);
let iU = function (e) {
    let { onScroll: t, onSelectApplication: l } = e;
    return (0, i.jsxs)(Y.A, {
        onScroll: t,
        children: [
            (0, i.jsx)(z.A, {
                title: M.intl.format(M.t.kEcZ97, {}),
                description: M.intl.string(M.t.XxFts9),
                children: (0, i.jsx)(H.A, {}),
            }),
            (0, i.jsx)(B.A, {
                children: (0, i.jsxs)("div", {
                    className: ik.h,
                    children: [(0, i.jsx)(iO, { onSelectApplication: l }), (0, i.jsx)(ib.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var iw = l(806163),
    iM = l(994369),
    iG = l(475743),
    iV = l(191711),
    iF = l(781727);
function iH(e) {
    let { category: t, count: l, onSelectCategory: s, selected: r } = e,
        o = n.useCallback(() => {
            s(t.id);
        }, [t.id, s]),
        c = l.toLocaleString(tM.default.locale);
    return (0, i.jsxs)(eO.D, {
        onClick: o,
        className: a()(iF.L1, { [iF.wH]: r }),
        children: [
            (0, i.jsx)(g.E, { className: iF.UU, variant: "body-sm/medium", color: "text-strong", children: t.name }),
            (0, i.jsx)(g.E, { className: iF.U9, variant: "body-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function iz(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: s } = e,
        a = (0, c.bG)([R.A], () => R.A.getCategories()),
        r = n.useMemo(() => [(0, P.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]);
    return 0 === r.length
        ? null
        : (0, i.jsx)("div", {
              className: iF.LZ,
              children: r.map((e) => {
                  let n = e.id,
                      a = t[n] ?? 0;
                  return (0, i.jsx)(iH, { category: e, count: a, selected: n === s, onSelectCategory: () => l(e) }, n);
              }),
          });
}
function iB(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: s } = e,
        a = (0, c.bG)([R.A], () => R.A.getCategories()),
        r = n.useMemo(() => [(0, P.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]),
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
              className: iF.kL,
              children: [
                  (0, i.jsx)(g.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: M.intl.string(M.t.f09BQJ),
                  }),
                  (0, i.jsx)(iV.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: d,
                      selected: `${s}`,
                      "aria-label": M.intl.string(M.t.WHdCwR),
                      variant: iV.H.FILLED,
                  }),
              ],
          });
}
var iY = l(307950);
let iX = function (e) {
    let { selectedCategoryId: t, searchAllCategories: l } = e,
        s = (0, c.bG)([R.A], () => R.A.getCategories()),
        a = n.useMemo(() => s.find((e) => e.id === t)?.name, [s, t]),
        r =
            0 === t || null == a
                ? M.intl.string(M.t["FVJt+8"])
                : M.intl.formatToPlainString(M.t.FjCaNB, { categoryName: a }),
        o = 0 === t ? M.intl.string(M.t.GXiMta) : M.intl.format(M.t.JaLoFF, { onClick: l });
    return (0, i.jsxs)("div", {
        className: iY.k,
        children: [
            (0, i.jsx)(h.D, { variant: "heading-xl/semibold", className: iY.w, children: r }),
            (0, i.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: o }),
        ],
    });
};
var iK = l(586720);
function iW(e) {
    let { onSelectApplication: t, onScroll: l } = e,
        s = (0, c.bG)([N.default], () => N.default.isAuthenticated()),
        a = n.useRef(null),
        r = (0, iw.zy)(),
        o = n.useRef(null),
        {
            query: d,
            page: u,
            categoryId: h,
        } = n.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                l = null != t ? Number(t) : 1;
            return { query: e.get("q") ?? "", page: l, categoryId: Number(e.get("category_id")) ?? 0 };
        }, [r.search]),
        m = (0, c.bG)([R.A], () => R.A.getCategories()),
        p = n.useMemo(() => m?.find((e) => e.id === h), [m, h]),
        g = n.useCallback(
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
    n.useEffect(() => {
        (a.current?.scrollTo({ to: 0 }),
            d !== o.current && ((o.current = d), E.$P({ query: d, options: { source: iM.V.APP_DIRECTORY } })),
            E.$P({
                query: d,
                options: { categoryId: h, page: u, pageSize: 48, source: iM.V.APP_DIRECTORY },
                onSuccessCallback: g,
            }));
    }, [h, u, d, g]);
    let { fetchState: x, searchResults: v } = (0, c.cf)([ee.A], () => ({
            fetchState: ee.A.getFetchState({
                query: d,
                categoryId: h,
                page: u,
                pageSize: 48,
                source: iM.V.APP_DIRECTORY,
            }),
            searchResults: ee.A.getSearchResults({
                query: d,
                categoryId: h,
                page: u,
                pageSize: 48,
                source: iM.V.APP_DIRECTORY,
            }),
        })),
        j = (0, c.cf)([ee.A], () => {
            let e = ee.A.getSearchResults({ query: d, source: iM.V.APP_DIRECTORY });
            return null != e ? { 0: e.totalCount, ...e.countsByCategory } : {};
        }),
        A = (0, iG.Ay)(v),
        C = n.useMemo(() => (x === S.e.FETCHING ? A : v), [x, A, v]),
        I = n.useCallback(
            (e) => {
                V({ query: d, categoryId: h, page: e });
            },
            [h, d],
        ),
        f = n.useCallback(
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
        b = n.useCallback(
            (e, l) => {
                (O(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: L.ev.SEARCH,
                    application_id: e,
                    load_id: C?.loadId,
                    search_term: d,
                    position: l,
                }),
                    t(e));
            },
            [C?.loadId, t, d],
        ),
        y = G();
    return (0, i.jsxs)("div", {
        className: iK.kL,
        children: [
            (0, i.jsx)(Y.A, {
                ref: a,
                onScroll: l,
                children: (0, i.jsxs)("div", {
                    className: iK.WH,
                    children: [
                        s ? null : (0, i.jsx)("div", { className: iK.AW }),
                        (0, i.jsx)(B.A, {
                            children: (0, i.jsxs)("div", {
                                className: iK.hQ,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: iK.$B,
                                        children: (0, i.jsx)(iB, {
                                            countsByCategory: j,
                                            selectedCategoryId: h,
                                            onSelectCategory: f,
                                        }),
                                    }),
                                    (0, i.jsx)(ei, {
                                        loading: x === S.e.FETCHING,
                                        children:
                                            x === S.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, i.jsx)(iX, {
                                                      selectedCategoryId: h ?? y.id,
                                                      searchAllCategories: () => f(y),
                                                  })
                                                : (0, i.jsx)("div", {
                                                      className: iK.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === Z.j.APPLICATION) {
                                                              let l = e.data;
                                                              return (0, i.jsx)(
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
                                    (0, i.jsx)(J.m, {
                                        className: iK.JV,
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
                className: iK.pn,
                children: (0, i.jsx)("div", {
                    className: iK.jv,
                    children: (0, i.jsx)(iz, { countsByCategory: j, selectedCategoryId: h, onSelectCategory: f }),
                }),
            }),
        ],
    });
}
var i$ = l(699716);
function iZ(e) {
    let { applicationId: t, hideDetailHeaderButtons: l, onClickBack: s } = e,
        r = (0, c.bG)([S.A], () => S.A.getApplication(t)),
        [o, u] = n.useState(l),
        m = n.useCallback(() => {
            u(l);
        }, [l]);
    return (0, i.jsxs)("div", {
        className: i$._u,
        children: [
            (0, i.jsx)("div", {
                className: i$.w$,
                children: (0, i.jsx)(j.XQ, {
                    icon: d.ArrowLargeLeftIcon,
                    "aria-label": M.intl.string(M.t["13/7kX"]),
                    onClick: s,
                }),
            }),
            (0, i.jsx)(h.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: i$.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, i.jsx)("div", {
                className: a()(i$.w$, i$.xY, { [i$.RK]: !l, [i$.jD]: l && !o, [i$.R]: l && o }),
                onTransitionEnd: m,
                children: null != r ? (0, i.jsx)(ie, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function iq() {
    let e = n.useCallback(() => {
            let e, t;
            ((e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, f.pX)(D.BVt.REGISTER + t));
        }, []),
        t = n.useCallback(() => {
            U();
        }, []);
    return (0, i.jsxs)(m.$T, {
        color: m.Hv.BRAND,
        className: i$.aL,
        children: [
            (0, i.jsx)(p.ClydeIcon, { size: "custom", color: "white", className: i$.wm }),
            (0, i.jsx)(g.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "body-md/normal",
                children: M.intl.string(M.t.Ol3MIt),
            }),
            (0, i.jsxs)("div", {
                className: i$.ll,
                children: [
                    (0, i.jsx)(m.Z_, { onClick: e, noticeType: D.kqX.LOGIN, children: M.intl.string(M.t["825cFy"]) }),
                    (0, i.jsx)(m.Z_, {
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
let iJ = function () {
    var e;
    let t,
        l,
        s,
        o,
        m,
        p,
        g = (0, c.bG)([N.default], () => !N.default.isAuthenticated()),
        { onScroll: S, scrollPosition: T, resetScrollPosition: U } = (0, x.G)(),
        w = (0, L.R4)(),
        F = k(),
        H = w?.type === L.ev.CATEGORY ? w.categoryId : void 0,
        { applicationId: z, section: B } = w?.type === L.ev.APPLICATION ? w : {},
        { query: Y, categoryId: X } = w?.type === L.ev.SEARCH ? w : {},
        K = (0, c.bG)([R.A], () => R.A.getCategories()),
        W = n.useMemo(() => [(0, P.AU)(), ...K], [K]),
        $ = n.useMemo(() => W.find((e) => e.id === Number(X)), [W, X]),
        {
            tabs: Z,
            selectedTab: q,
            onSelectTab: J,
        } = ((e = H?.toString()),
        (t = (0, c.bG)([R.A], () => R.A.getCategories())),
        (l = G()),
        (s = n.useMemo(
            () => [{ id: l.id.toString(), label: l.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, l],
        )),
        (o = (0, L.R4)()),
        (m = n.useCallback(
            (e) => {
                let t = s.find((t) => t.id === e);
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
            [o?.type, s],
        )),
        (p = null != e && s.some((t) => t.id === e) ? e : s[0].id),
        { tabs: s, selectedTab: p, onSelectTab: m }),
        [Q, ee] = n.useState(!0),
        et = L.h.useField("trackedOpenedFromExternalEntrypoint"),
        el = L.h.useField("sessionId"),
        ei = (0, c.bG)([b.default], () => b.default.getCurrentUser());
    (n.useEffect(() => {
        if (!et && null == el) {
            let e = (0, I.YP)();
            (y.default.track(D.HAw.APP_DIRECTORY_OPENED, { source: L.sW.EXTERNAL, session_id: e, user_id: ei?.id }),
                L.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: L.sW.EXTERNAL },
                    guildId: null,
                }));
        }
    }, [el, et, ei?.id]),
        n.useEffect(() => {
            E.bW();
        }, []),
        n.useEffect(() => {
            F && E.wD();
        }, [F]),
        n.useEffect(() => L.tS.setState({ lastItem: w }), [w]));
    let en = null != z,
        es = w?.type === L.ev.SEARCH,
        {
            searchQuery: ea,
            onSearchTextChange: er,
            onClearSearch: eo,
            onSearchSubmit: ec,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                l = _.A.useField("query");
            n.useEffect(() => _.A.setState({ query: t }), [t]);
            let i = n.useCallback((e) => {
                    _.A.setState({ query: e });
                }, []),
                s = n.useCallback(() => {
                    _.A.setState({ query: "" });
                }, []),
                a = n.useCallback(() => {
                    let e = G();
                    (O(D.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: l,
                        category: e.name,
                        current_page: L.ev.HOME,
                        category_id: e.id,
                    }),
                        V({ query: l }));
                }, [l]);
            return { searchQuery: l, onSearchTextChange: i, onClearSearch: s, onSearchSubmit: a };
        })({ initialQuery: Y ?? "" }),
        ed = _.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: eh,
            onSearchBarBlur: em,
            tabsClassName: ep,
        } = (0, v.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === ea.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => _.A.setState({ searchBarState: e }),
        }),
        eg = n.useCallback(
            (e) => {
                (J(e), es && eo(), U());
            },
            [es, eo, J, U],
        ),
        ex = n.useCallback(
            (e) =>
                (function (e) {
                    let { applicationId: t } = e,
                        l = { previousView: (0, L.R4)() };
                    (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: l });
                })({ applicationId: e }),
            [],
        ),
        ev = en || es,
        ej = n.useCallback(() => {
            if (null != (0, L.Bn)()) (0, f.aX)();
            else {
                let e;
                ((e = { previousView: (0, L.R4)() }), (0, f.pX)(D.BVt.GLOBAL_DISCOVERY_APPS, { state: e }));
            }
        }, []),
        eA = n.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: l, scrollHeight: i, location: n } = e;
                    t > 0 &&
                        O(D.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + l) / i,
                            current_page: n,
                        });
                }, 200),
            [],
        ),
        eC = n.useCallback(
            (e, t) => {
                (S(e),
                    eA({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    }));
            },
            [eA, S],
        );
    return (0, i.jsxs)("div", {
        className: a()(i$.nw, { [i$.Yz]: g }),
        children: [
            g ? (0, i.jsx)(iq, {}) : null,
            (0, i.jsxs)("div", {
                className: i$.WH,
                children: [
                    (0, i.jsxs)(j.Ay, {
                        variant: ev ? j.Z5.RELATIVE : j.Z5.OVERLAY,
                        children: [
                            !ev && (0, i.jsx)(j.ns, { scrollPosition: T }),
                            en
                                ? (0, i.jsx)(iZ, { applicationId: z, hideDetailHeaderButtons: Q, onClickBack: ej })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          es
                                              ? (0, i.jsx)(j.XQ, {
                                                    icon: d.ArrowLargeLeftIcon,
                                                    "aria-label": M.intl.string(M.t["13/7kX"]),
                                                    onClick: ej,
                                                })
                                              : (0, i.jsx)(j.T4, { icon: u.AppsIcon }),
                                          es
                                              ? (0, i.jsx)(h.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: i$.wL,
                                                    children:
                                                        null != Y && "" !== Y
                                                            ? M.intl.formatToPlainString(M.t.zHdzqW, { query: Y })
                                                            : M.intl.formatToPlainString(M.t.Qhj5Br, {
                                                                  categoryName: $?.name ?? M.intl.string(M.t.E407b7),
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
                                              placeholder: M.intl.string(M.t["5h0QOP"]),
                                              onTextChange: er,
                                              onClear: eo,
                                              onSubmit: ec,
                                              onCollapsedClick: eh,
                                              state: ed,
                                              onBlur: em,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    en
                        ? (0, i.jsx)(iN, {
                              onScroll: (e) => eC(e, L.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: z,
                              initialTab: B,
                              onButtonsVisibilityChange: ee,
                          })
                        : es
                          ? (0, i.jsx)(iW, { onSelectApplication: ex, onScroll: (e) => eC(e, L.ev.SEARCH) })
                          : "0" === q
                            ? (0, i.jsx)(iU, { onScroll: (e) => eC(e, L.ev.HOME), onSelectApplication: ex })
                            : (0, i.jsx)(e_, {
                                  tabId: Number(q),
                                  onScroll: (e) => eC(e, L.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
