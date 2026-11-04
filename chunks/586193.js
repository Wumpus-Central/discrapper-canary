(l.r(t), l.d(t, { default: () => sK }));
var s = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
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
    j = l(770472),
    v = l(737823);
l(651266);
var A = l(876622),
    C = l(521974),
    f = l(965660),
    I = l(976860),
    N = l(46653),
    y = l(287809),
    b = l(129230),
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
        s = L.h.getField("guildId"),
        i = L.h.getField("entrypoint")?.name,
        n = y.default.getCurrentUser(),
        a = { ...t, guild_id: s, directory_session_id: l, source: i, user_id: n?.id };
    return b.default.track(e, a);
}
function k() {
    return (0, c.bG)([N.default], () => N.default.isAuthenticated());
}
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let l in e) {
        let s = e[l];
        t.searchParams.set(l, s);
    }
    let l = t.pathname + t.search,
        s = (0, T.T2)(l, !1);
    (0, I.pX)(s);
}
var M = l(435220),
    w = l(792996);
function G() {
    return { id: 0, name: w.intl.string(w.t.ijDDwz) };
}
function V() {
    let { query: e, categoryId: t, page: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        s = { previousView: (0, L.R4)() },
        i = new URLSearchParams();
    (null != e && "" !== e && i.set("q", e),
        null != t && 0 !== t && i.set("category_id", t.toString()),
        null != l && l > 1 && i.set("page", l.toString()),
        (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: s, search: i.toString() }));
}
function F(e) {
    let {
        location: { state: t },
    } = (0, I.JK)();
    (0, I.bG)(e, t);
}
var H = l(23815),
    z = l(701508),
    B = l(979590),
    Y = l(783531),
    X = l(558611);
let K = "/assets/3aa7e375b23dc56f.svg";
function W(e) {
    let { heading: t = w.intl.string(w.t.NGw8v2), body: l = w.intl.string(w.t["1XZRY4"]), className: i } = e;
    return (0, s.jsxs)("div", {
        className: a()(X.kL, i),
        children: [
            (0, s.jsx)("div", {
                className: X.ZS,
                children: (0, s.jsx)("img", { className: X.Sl, src: K, alt: w.intl.string(w.t["/UJaI2"]) }),
            }),
            (0, s.jsx)(m.D, { variant: "heading-xl/semibold", className: X.wx, children: t }),
            (0, s.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: l }),
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
function es(e) {
    let { loading: t, children: l } = e;
    return (0, s.jsxs)("div", {
        className: el.kL,
        children: [
            t
                ? (0, s.jsx)("div", {
                      className: el.dc,
                      children: (0, s.jsx)(et.y, { className: el.u1, type: et.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, s.jsx)("div", { className: a()({ [el.Lq]: t }), children: l }),
        ],
    });
}
var ei = l(831259),
    en = l(735991),
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
    let { application: t, isHovered: l, botBannerUrl: n, botBannerUrlAnimated: r, iconURL: o } = e,
        c = (0, ed.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = i.useMemo(() => {
            let e = (0, en.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ec.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: m } = i.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: n, imageUrlAnimated: r }),
            [c.state, c.url, n, r],
        ),
        h = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    h
                        ? (0, s.jsx)(ej, { isHovered: l, url: u, animatedUrl: void 0 })
                        : (0, s.jsx)(eu.A, { src: d, className: a()(eh._e, eh.IH), muted: !0 }),
                    (0, s.jsx)(ev, { isHovered: l, url: d, isVideo: !0 }),
                ],
            })
          : h
            ? (0, s.jsx)(ej, { isHovered: l, url: u, animatedUrl: m })
            : (0, s.jsx)(eA, { iconURL: o });
}
function ej(e) {
    let { isHovered: t, url: l, animatedUrl: n } = e,
        [r, o] = i.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: l, alt: "", className: a()(eh._e, eh.IH, { [eh.Kc]: r }), onLoad: () => o(!0) }),
            null != n ? (0, s.jsx)(ev, { isHovered: t, url: n, isVideo: !1 }) : null,
        ],
    });
}
function ev(e) {
    let { isHovered: t, url: l, isVideo: n } = e,
        [r, o] = i.useState(!1),
        [c, d] = i.useState(t);
    return (i.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, s.jsx)("div", {
              className: a()(eh.hY, { [eh.Q]: !t, [eh.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: n
                  ? (0, s.jsx)(eu.A, {
                        src: l,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: eh.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, s.jsx)("img", { src: l, alt: "", className: eh.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eA(e) {
    let { iconURL: t } = e,
        { backgroundGradient: l, hasFetchedColors: i } = (function (e) {
            let [t, l, s] = (0, em.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${s ?? l})`, hasFetchedColors: (0, em.D1)(e) };
        })(t);
    return (0, s.jsx)("div", { className: a()(eh.IH, eh.nY, { [eh.Kc]: i }), style: { backgroundImage: l } });
}
let eC = function (e) {
    let { application: t, bannerType: l, iconURL: n } = e,
        a = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        [r, o] = i.useState(!1),
        d = i.useCallback(() => {
            o(!0);
        }, []),
        u = i.useCallback(() => o(!1), []),
        m = (0, en.Z$)(t),
        h = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: g } = i.useMemo(
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
    return (0, s.jsx)("div", {
        className: eh.cI,
        style: { aspectRatio: "card" === l ? ep : eg },
        onMouseEnter: d,
        onFocus: d,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === l && m
                ? (0, s.jsx)(ex, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == g ? void 0 : g,
                  })
                : null != p
                  ? (0, s.jsx)(ej, { isHovered: r, url: p, animatedUrl: g })
                  : (0, s.jsx)(eA, { iconURL: n }),
    });
};
var ef = l(240795);
let eI = function (e) {
    let { application: t, onSelectApplication: l, showCategory: n = !1 } = e,
        a = i.useRef(null),
        r = t.categories?.[0],
        [o, c] = i.useState(!1),
        d = i.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, en.NO)(t),
        h = i.useCallback(() => {
            l(t.id);
        }, [l, t.id]),
        p = i.useMemo(() => (o ? er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        x = n && null != r;
    return (0, s.jsx)(ei.L, {
        innerRef: a,
        onChange: d,
        active: !o,
        children: (0, s.jsx)("div", {
            ref: a,
            className: ef.kL,
            children: (0, s.jsxs)(ea.A, {
                className: ef.Nr,
                onClick: h,
                onContextMenu: () => {},
                "aria-label": w.intl.string(w.t.np1Wru),
                children: [
                    (0, s.jsxs)("div", {
                        className: ef.wx,
                        children: [
                            (0, s.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, s.jsx)(eC, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, s.jsx)("div", {
                                className: ef.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, s.jsx)("img", {
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
                    (0, s.jsxs)("div", {
                        className: ef.eV,
                        children: [
                            (0, s.jsx)("div", {
                                className: ef.gn,
                                children: (0, s.jsx)("div", {
                                    className: ef.DD,
                                    children: (0, s.jsx)(m.D, {
                                        variant: "heading-sm/semibold",
                                        color: "text-strong",
                                        className: ef.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            x || u
                                ? (0, s.jsxs)("div", {
                                      className: ef.op,
                                      children: [
                                          x
                                              ? (0, s.jsx)(g.E, {
                                                    className: ef.m4,
                                                    variant: "body-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          x && u
                                              ? (0, s.jsx)(g.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          u
                                              ? (0, s.jsx)(g.E, {
                                                    variant: "body-xs/medium",
                                                    color: "text-subtle",
                                                    children: w.intl.string(w.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, s.jsx)(g.E, {
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
var eN = l(297439);
let ey = { results: [], totalPages: 0, loadId: "" },
    eb = function (e) {
        let { categoryId: t, onSelectApplication: l, resetScroll: n } = e,
            [a, r] = i.useState(1),
            o = i.useCallback((e) => {
                r(e);
            }, []);
        i.useEffect(() => {
            r(1);
        }, [t]);
        let c = i.useMemo(() => ({ query: "", page: a, pageSize: 48, categoryId: t }), [a, t]),
            d = (0, q.bG)([ee.A], () => ee.A.getFetchState({ query: "", page: a, pageSize: 48, categoryId: t })),
            u = (0, q.cf)([ee.A], () => ee.A.getSearchResults(c) ?? ey),
            m = (0, $.A)(u) ?? ey,
            { results: h, totalPages: p, loadId: g } = i.useMemo(() => (d === Q.e.FETCHING ? m : u), [d, m, u]),
            x = i.useMemo(() => h?.filter((e) => e.type === Z.j.APPLICATION), [h]),
            j = i.useCallback((e) => {
                let { page: t, activeCategoryId: l, onSuccessCallback: s, guildId: i, fetchCounts: n } = e;
                (n && _.$P({ query: "", guildId: i }),
                    _.$P({
                        query: "",
                        guildId: i,
                        options: { page: t, pageSize: 48, categoryId: l },
                        onSuccessCallback: s,
                    }));
            }, []);
        i.useEffect(() => {
            (n(), j({ page: a, activeCategoryId: t, onSuccessCallback: () => {} }));
        }, [t, n, j, a]);
        let v = i.useCallback(
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
            ? (0, s.jsx)("div", { className: eN.Un, children: (0, s.jsx)(W, { className: eN.z3 }) })
            : (0, s.jsxs)(es, {
                  loading: d === Q.e.FETCHING,
                  children: [
                      (0, s.jsx)("div", {
                          className: eN.Qs,
                          children: x?.map((e, t) => {
                              if (e.type !== Z.j.APPLICATION) return (e.type, null);
                              {
                                  let l = e.data;
                                  return (0, s.jsx)(eI, { application: l, onSelectApplication: (e) => v(e, t) }, l.id);
                              }
                          }),
                      }),
                      (0, s.jsx)(J.m, {
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
    let { tabId: t, onSelectApplication: l, onScroll: n } = e,
        a = i.useRef(null),
        r = i.useCallback(() => {
            a.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, c.bG)([R.A], () => R.A.getCategories()),
        d = i.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = i.useMemo(
            () =>
                null != d
                    ? (function (e) {
                          switch (e.id) {
                              case 4:
                                  return w.intl.string(w.t["3m9Egb"]);
                              case 6:
                                  return w.intl.string(w.t.VJRr3Y);
                              case 8:
                                  return w.intl.string(w.t.Uv7mFd);
                              case 9:
                                  return w.intl.string(w.t.TEK9Ax);
                              case 10:
                                  return w.intl.string(w.t.lfBt2T);
                          }
                          return "";
                      })(d)
                    : "",
            [d],
        );
    return (0, s.jsxs)(Y.A, {
        onScroll: n,
        ref: a,
        children: [
            (0, s.jsx)(z.A, { title: d?.name ?? "", description: u, children: (0, s.jsx)(H.A, {}) }),
            (0, s.jsx)(B.A, {
                children:
                    null == d
                        ? (0, s.jsx)("div", { className: e_.U, children: (0, s.jsx)(W, { className: e_.z }) })
                        : (0, s.jsx)(eb, { categoryId: d.id, onSelectApplication: l, resetScroll: r }),
            }),
        ],
    });
};
var eS = l(123791),
    eR = l(761508),
    eP = l(149050);
let eT = function (e) {
    let { tabs: t, onTabSelect: l, selectedTab: i, className: n } = e;
    return (0, s.jsx)(eR.V, {
        type: "top-pill",
        selectedItem: i,
        onItemSelect: l,
        className: n,
        children: t.map((e, t) => {
            let { id: l, label: i, count: n } = e;
            return (0, s.jsx)(
                eR.V.Item,
                {
                    id: l,
                    className: a()(eP.V, { [eP.r]: 0 === t }),
                    "aria-label": i,
                    children: null != n && n > 0 ? `${i} (${n})` : i,
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
    eM = l(451988),
    ew = l(408278),
    eG = l(921853),
    eV = l(477155),
    eF = l(320448),
    eH = l(935286),
    ez = l(73153),
    eB = l(725951),
    eY = l(188567),
    eX = l(1671);
let eK = 16 / 9;
class eW extends i.PureComponent {
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
                arrowClassName: i,
                paginationDotClassName: n,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            d = a()(eX.sb, { [eX.JU]: l }, i);
        return (0, s.jsxs)("div", {
            className: a()(eX.ne, this.props.className),
            children: [
                (0, s.jsx)("div", {
                    className: d,
                    children: (0, s.jsx)(ew.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eG.n : eV.r,
                        "aria-label": w.intl.string(w.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: eX.r$,
                    children: o().times(t, (t) =>
                        (0, s.jsx)(
                            eO.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? a()(eX.NU, r) : a()(eX.Lw, n),
                                "aria-label": w.intl.formatToPlainString(w.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, s.jsx)("div", {
                    className: d,
                    children: (0, s.jsx)(ew.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eF._ : eH.E,
                        "aria-label": w.intl.string(w.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: l, current: s } = this.props;
        (l?.(s, e, "jump"), t(e));
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            s = l(1);
        e?.(t, s, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            s = l(-1);
        e?.(t, s, "previous");
    };
}
class e$ extends i.PureComponent {
    timer = new eM.IX();
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
        let s = l(this.props, this.state),
            i = l(e, t);
        s && !i ? this.startTimer() : !s && i && this.stopTimer();
        let { items: n } = this.props,
            { visibleIndex: a } = this.state;
        null == n[a] && this.changeItem(n, 1);
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
        let { onChangeItem: s } = this.props;
        s?.(e[l], this.state.visibleIndex, l);
        let i = t > 0 ? eB.f.LEFT : eB.f.RIGHT;
        return (this.setState({ visibleIndex: l, direction: i }), l);
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
                slideAnimatorClassName: i,
                slideAnimatorSpringSettings: n,
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
                children: j,
            } = this.props,
            { visibleIndex: v } = this.state;
        return (0, s.jsxs)("div", {
            className: eX.zr,
            children: [
                (0, s.jsxs)("div", {
                    className: a()(eX.Cf, l),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, s.jsx)("div", {
                            style: { aspectRatio: x },
                            children: (0, s.jsx)(eB.A, {
                                className: a()(eX.Dk, i),
                                step: v,
                                direction: this.getCurrentDirection(),
                                springSettings: n,
                                fadeInOut: r,
                                children: t(e[v], v),
                            }),
                        }),
                        e.length > 1 &&
                            (0, s.jsx)(eW, {
                                className: a()(o, h ? eX.S$ : eX.X$),
                                arrowClassName: c,
                                includeHitboxPadding: p,
                                current: v,
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
                null != j && j({ step: v, direction: this.getCurrentDirection() }),
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
        let { items: s, onIntentionalChange: i } = this.props;
        return i?.(s[t], e, t, l);
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
class e7 extends i.PureComponent {
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
        let { renderItem: e, items: t, vertical: l, paginationContainerClass: n, align: r } = this.props,
            o = l ? e4.XA : e4.BU;
        return (0, s.jsx)(e8.Gt, {
            orientation: l ? "vertical" : "horizontal",
            className: a()(o, n, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, l) =>
                i.cloneElement(e(t, l), {
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
class e2 extends i.PureComponent {
    handlePrevClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(eO.D, {
            className: a()(e4.t1, e),
            onClick: this.handlePrevClick,
            children: (0, s.jsx)(e6.A, { className: e4.UE, direction: e6.A.Directions.LEFT }),
        });
    }
}
class e3 extends i.PureComponent {
    handleNextClick = (e) => {
        (e.stopPropagation(), e.preventDefault());
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(eO.D, {
            className: a()(e4.XS, e),
            onClick: this.handleNextClick,
            children: (0, s.jsx)(e6.A, { className: e4.UE, direction: e6.A.Directions.RIGHT }),
        });
    }
}
var e9 = l(452282),
    te = l(875149),
    tt = l(811306);
let tl = { width: 640, height: 360, margin: 15 },
    ts = { width: 880, height: 495, margin: 20 },
    ti = { width: 1920, height: 1080 },
    tn = { width: 1280, height: 720 };
function ta(e) {
    return (0, eJ.$o)({ ...e, className: tt.tN, mediaPlayerClassName: tt.yf });
}
function tr(e) {
    return (0, s.jsx)(eZ.Ay, { ...e });
}
function to(e) {
    let t,
        l,
        i,
        {
            item: n,
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
    if (n.type === D.geh.YOUTUBE_VIDEO)
        ((t = { url: (0, D.PE$)(n.youtubeVideoId), ...ti }),
            (l = {
                url: `${(0, D.uJ2)(n.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                ...tn,
            }),
            (i = ek.mt.YOUTUBE));
    else {
        let e = null != n.width ? n.width : 0,
            s = null != n.height ? n.height : 0;
        ((t = { url: n.thumbnailSrc, width: e, height: s }),
            (l = { url: n.src, proxyURL: n.src, width: e, height: s }));
    }
    let g = (0, s.jsx)(eU.rr, {
        href: null,
        thumbnail: t,
        video: l,
        provider: i,
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
    return d ? g : (0, s.jsx)(eO.D, { className: tt.AU, onClick: c, children: g });
}
function tc() {
    return (0, s.jsx)("div", {
        className: tt.eM,
        children: (0, s.jsx)(te.A, { inactive: !0, className: tt.J6, renderLinkComponent: eJ.bU }),
    });
}
class td extends i.PureComponent {
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
            t = ts;
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
                props: { items: l, onIntentionalChange: s },
                state: { currentIndex: i },
            } = this,
            n = (0, e9.U3)(i, l.length),
            a = (0, e9.U3)(e, l.length),
            r = 1 === Math.abs(e - n) || (e === l.length - 1 && 0 === n) || (0 === e && n === l.length - 1);
        (this.setState({ playingVideo: !1, currentIndex: a, animate: r, hasInteracted: t }),
            t && null != s && s(l[a], n, a));
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
            ? (0, s.jsx)(eO.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: tt.AU,
                  children: (0, s.jsx)("img", { src: e.src, alt: "", className: tt.NP }),
              })
            : (0, s.jsx)(eO.D, {
                  onClick: () => this.setItem(t, !0),
                  className: tt.AU,
                  children: (0, s.jsx)("img", { alt: "", className: tt.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, l) => {
        let { currentIndex: i, volume: n, isMuted: r } = this.state,
            o = t === (0, e9.U3)(i, this.props.items.length);
        return (0, s.jsx)(eQ.A.div, {
            className: a()(tt.AS, { [tt.Xt]: o }),
            style: null != l ? this.getStyle(t, l) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === D.geh.VIDEO || e.type === D.geh.YOUTUBE_VIDEO
                    ? (0, s.jsx)(to, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: n,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: r,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: l, hoveringPreviousItem: i, hoveringNextItem: n } = this.state,
            r = (0, s.jsx)(e9.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: l,
                edgeItems: 2,
            });
        return e.length <= 1
            ? r
            : (0, s.jsxs)("div", {
                  className: tt.HY,
                  children: [
                      r,
                      (0, s.jsx)(e2, { onClick: this.manualPrevious, className: a()(tt.UE, { [tt.h_]: i }) }),
                      (0, s.jsx)(e3, { onClick: this.manualNext, className: a()(tt.UE, { [tt.h_]: n }) }),
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
            i = l === t;
        return (0, s.jsxs)(
            "div",
            {
                className: a()(tt.Yw, i ? tt.sM : tt.N7),
                children: [
                    (0, s.jsx)("img", {
                        alt: e.alt ?? String(t),
                        className: tt.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === D.geh.YOUTUBE_VIDEO || e.type === D.geh.VIDEO ? (0, s.jsx)(tc, {}) : null,
                    i ? (0, s.jsx)("div", { className: tt.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: l, paused: i } = this.props,
            { currentIndex: n, playingVideo: a, hasInteracted: r } = this.state;
        return (0, s.jsxs)(e1.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: l,
            className: t,
            disable: a || r || i,
            children: [
                this.renderCarousel(),
                (0, s.jsx)("div", {
                    className: tt.X$,
                    children: (0, s.jsx)(e7, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: n,
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
    return (0, s.jsx)(eq.A, {
        ...l,
        className: a()(tu.Zy, t),
        mediaPlayerClassName: tu.Zy,
        renderLinkComponent: eJ.bU,
    });
}
function th(e) {
    let { containerClassName: t, className: l, ...i } = e;
    return (0, s.jsx)(eZ.Ay, { ...i, className: a()(l, t) });
}
let tp = { width: 1280, height: 720 },
    tg = { width: 640, height: 360 },
    tx = (e) => {
        let t,
            l,
            i,
            { item: n, onPlay: a, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (n.type === D.geh.YOUTUBE_VIDEO)
            ((t = { url: (0, D.PE$)(n.youtubeVideoId), ...tp }),
                (l = {
                    url: `${(0, D.uJ2)(n.youtubeVideoId)}?rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=2`,
                    ...tg,
                }),
                (i = ek.mt.YOUTUBE));
        else {
            let e = null != n.width ? n.width : 0,
                s = null != n.height ? n.height : 0;
            ((t = { url: n.thumbnailSrc, width: e, height: s }),
                (l = { url: n.src, proxyURL: n.src, width: e, height: s }));
        }
        return (0, s.jsx)("div", {
            className: tu.x,
            children: (0, s.jsx)(eU.rr, {
                className: tu.Zy,
                iframeWrapperClassName: tu.Zy,
                href: null,
                thumbnail: t,
                video: l,
                provider: i,
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
class tj extends i.PureComponent {
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
    handleIntentionalChange = (e, t, l, s) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: i } = this.props;
        null != i && i(e, t, l, s);
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
            s = null != l ? Date.now() - l : void 0;
        t?.({ src: e.target.src, loadTimeMs: s });
    };
    renderItem = (e, t) => {
        let l,
            { isMuted: i, volume: n } = this.state,
            { videoAutoPlay: r } = this.props;
        switch (e.type) {
            case D.geh.YOUTUBE_VIDEO:
            case D.geh.VIDEO:
                l = (0, s.jsx)(tx, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: i,
                    volume: n,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                });
                break;
            case D.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, s.jsx)(m.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.UvDfMz) });
                    return (0, s.jsx)("div", {
                        className: tu.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? w.intl.string(w.t.X4IxWL);
                    l = (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(et.y, {
                                className: a()(tu.u1, { [tu.R]: void 0 !== this.state.status.get(e.src) }),
                                type: et.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, s.jsx)("img", {
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
        return (0, s.jsx)(eO.D, { className: tu.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: l });
    };
    render() {
        let { items: e, autoplayInterval: t, className: l, paused: i, themedPagination: n } = this.props,
            { hasInteracted: r } = this.state;
        return (0, s.jsx)(e$, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || r,
            renderItem: this.renderItem,
            className: a()(tu.Gt, l),
            themedPagination: n,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var tv = l(256905),
    tA = l(531685),
    tC = l(173018);
function tf(e) {
    let { application: t, carouselItems: l } = e,
        n = (0, c.bG)([tA.A], () => tA.A.isFocused()),
        a = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", { className: tC.M, src: K, "aria-hidden": !0, alt: "" }),
                (0, s.jsx)(m.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.UvDfMz) }),
            ],
        });
    l.forEach((e, s) => {
        e.alt = w.intl.formatToPlainString(w.t.sSEhHb, { index: s + 1, totalImages: l.length, name: t.name });
    });
    let r = i.useCallback(
        (e, t) => {
            if (e.type === D.geh.IMG) {
                let t = l.filter((e) => e.type === D.geh.IMG),
                    s = t.findIndex((t) => t === e);
                if (s < 0) return;
                let i = t.map((e) => {
                    var t;
                    return {
                        url: ((t = e.src), `${t.split("?")[0]}?size=2048`),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: "IMAGE",
                    };
                });
                (0, tv.R)({
                    items: i,
                    startingIndex: s,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [l],
    );
    return 0 === l.length
        ? null
        : (0, s.jsx)(tj, {
              className: tC.D,
              themedPagination: !0,
              items: l,
              autoplayInterval: 8e3,
              paused: !n,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: a,
          });
}
var tI = l(168186);
l(827669);
var tN = l(853618);
function ty(e) {
    let { application: t } = e,
        l = i.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tI.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === l.length
        ? null
        : (0, s.jsxs)("div", {
              className: tN.hd,
              children: [
                  (0, s.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.swIgTL),
                  }),
                  (0, s.jsx)("div", {
                      className: tN.hQ,
                      children: l.map((e) =>
                          (0, s.jsxs)(
                              "div",
                              {
                                  className: tN.dO,
                                  children: [
                                      (0, s.jsxs)(g.E, {
                                          className: tN.p6,
                                          variant: "mono-md/bold",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, s.jsx)(g.E, {
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
var tb = l(534890),
    t_ = l(812991),
    tE = l(177953),
    tS = l(152249),
    tR = l(975571),
    tP = l(889558),
    tT = l(98490);
let tL = tR.A.getArticleURL(D.MVz.BOT_DATA_ACCESS);
function tD(e) {
    let { application: t } = e,
        { hasMessageContent: l, hasGuildPresences: n, hasGuildMembers: a, hasIntents: r } = (0, tS.Z)(t),
        o = i.useCallback(() => {
            null != t.privacy_policy_url && (0, tP.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, s.jsxs)("div", {
        className: tT.hd,
        children: [
            (0, s.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: w.intl.string(w.t.QzDgMq),
            }),
            (0, s.jsxs)("div", {
                className: tT.hQ,
                children: [
                    r &&
                        (0, s.jsxs)("ul", {
                            className: tT.In,
                            children: [
                                (0, s.jsx)(m.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-default",
                                    children: w.intl.string(w.t.U6KH5S),
                                }),
                                l &&
                                    (0, s.jsx)(tO, {
                                        icon: tb.ChatIcon,
                                        heading: w.intl.string(w.t.gJpBO2),
                                        body: w.intl.string(w.t["L+QVbh"]),
                                    }),
                                n &&
                                    (0, s.jsx)(tO, {
                                        icon: t_.n,
                                        heading: w.intl.string(w.t["jo0oj/"]),
                                        body: w.intl.string(w.t.Dm0jqx),
                                    }),
                                a &&
                                    (0, s.jsx)(tO, {
                                        icon: tE.n,
                                        heading: w.intl.string(w.t.QZql7O),
                                        body: w.intl.string(w.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, s.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: w.intl.format(w.t.b6nqk0, { helpCenterUrl: tL }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, s.jsx)(g.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            className: tT.hM,
                            children: w.intl.format(w.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tO(e) {
    let { icon: t, heading: l, body: i } = e;
    return (0, s.jsxs)("li", {
        className: tT.KT,
        children: [
            (0, s.jsx)(t, { color: "currentColor", size: "md" }),
            (0, s.jsxs)("div", {
                className: tT.D6,
                children: [
                    (0, s.jsx)(m.D, { variant: "heading-sm/semibold", color: "text-default", children: l }),
                    (0, s.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: i }),
                ],
            }),
        ],
    });
}
var tk = l(692617),
    tU = l(664121),
    tM = l(682163),
    tw = l(773669),
    tG = l(596477);
function tV(e) {
    let {
            application: t,
            mutualGuilds: l,
            className: i,
            textVariant: n = "body-sm/normal",
            guildsClassName: r,
            children: o,
        } = e,
        d = (0, c.bG)([tw.default], () => tw.default.locale),
        u = new Intl.ListFormat(d),
        m = t.directory_entry?.guild_count ?? 0,
        h = l ?? [],
        p = h.length,
        x = Math.max(0, m - p),
        j = (function (e, t, l, s) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === l) return w.intl.formatToPlainString(w.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? w.t.YR8PSL : w.t.GQjq6c,
                n = new Intl.NumberFormat(s, { notation: "compact", compactDisplay: "short" });
            return w.intl.formatToPlainString(i, {
                guildCount: n.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: n.format(l),
            });
        })(m, p, x, d),
        v =
            h.length > 3
                ? w.intl.formatToPlainString(w.t.m6oRrA, { appNames: u.format(h.slice(2).map((e) => e.name)) })
                : void 0;
    return 0 === h.length && null == j
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  o,
                  (0, s.jsxs)("div", {
                      className: a()(i, tG.iE),
                      children: [
                          (0, s.jsx)("div", {
                              className: a()(tG.Pt, r),
                              children:
                                  h.length > 0
                                      ? (0, s.jsx)(tk.A, {
                                            guilds: h,
                                            maxGuilds: 3,
                                            size: tM.Ay.Sizes.SMOL,
                                            overflowTooltip: v,
                                        })
                                      : (0, s.jsx)(tU.R, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 16,
                                            height: 16,
                                            className: tG.DE,
                                        }),
                          }),
                          null != j ? (0, s.jsx)(g.E, { variant: n, color: "text-default", children: j }) : null,
                      ],
                  }),
              ],
          });
}
var tF = l(973172),
    tH = l(68316);
function tz(e) {
    let { application: t, className: l } = e,
        n = i.useCallback((e) => {
            (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: L.ev.APPLICATION,
            }),
                V({ categoryId: e.id }));
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, s.jsxs)("div", {
              className: l,
              children: [
                  (0, s.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.s7iald),
                  }),
                  (0, s.jsx)("div", {
                      className: tH.L,
                      children: t.categories.map((e) =>
                          (0, s.jsx)(
                              eO.D,
                              {
                                  className: tH.c,
                                  onClick: () => n(e),
                                  children: (0, s.jsx)(g.E, {
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
    let { application: t, className: l, innerClassName: i } = e,
        n = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || n.length > 0
        ? (0, s.jsxs)("div", {
              className: a()(tq.kL, l),
              children: [
                  (0, s.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.l6DP2n),
                  }),
                  (0, s.jsxs)("div", {
                      className: a()(tq.p_, i),
                      children: [
                          n.map((e, t) => (0, s.jsx)(tQ, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, s.jsx)(t0, {
                                    icon: tY.FileIcon,
                                    url: t.terms_of_service_url,
                                    children: w.intl.string(w.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, s.jsx)(t0, {
                                    icon: tX.LockIcon,
                                    url: t.privacy_policy_url,
                                    children: w.intl.string(w.t.kH3JR5),
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
        i = (0, t$.Ay)(),
        n = tZ.A.getByUrl(t),
        a = (0, tB.M)(i) ? n?.icon?.darkSVG : n?.icon?.lightSVG;
    return (0, s.jsx)(t0, { icon: void 0 === a ? tK.LinkIcon : void 0, imageSrc: a, url: t, children: l });
}
function t0(e) {
    let { icon: t, imageSrc: l, iconColor: i, url: n, children: r } = e,
        o = k(),
        c = null;
    null != t
        ? (c = (0, s.jsx)(t, { className: tq.GU, color: i ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != l && (c = (0, s.jsx)("img", { className: tq.GR, src: l, alt: "" }));
    let d = (0, s.jsxs)(s.Fragment, {
        children: [c, (0, s.jsx)(g.E, { className: tq.so, variant: "body-sm/medium", selectable: !0, children: r })],
    });
    return (0, s.jsx)(tW.A, {
        href: n,
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
    let { guild: t, className: l, onClick: i } = e,
        n = (0, t$.Ay)(),
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
                  })(n),
        d = er.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, s.jsxs)(eO.D, {
        className: a()(t3.Nr, l),
        onClick: i,
        "aria-label": w.intl.string(w.t.RB4L2x),
        children: [
            (0, s.jsxs)("div", {
                className: t3.MY,
                children: [
                    (0, s.jsx)("img", { src: c, alt: "", className: t3.j0 }),
                    (0, s.jsx)("div", {
                        className: t3.$f,
                        children: (0, s.jsx)(t4.Ay, {
                            mask: t4.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, s.jsx)("div", {
                                className: t3.SA,
                                children: (0, s.jsx)(tM.Ay, {
                                    className: t3.__invalid_icon,
                                    iconSrc: d,
                                    guild: r,
                                    size: tM.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: t3.RN,
                children: [
                    (0, s.jsxs)("div", {
                        className: t3.Y_,
                        children: [
                            (0, s.jsx)(t5.A, { className: t3.n2, guild: t, tooltipColor: t8.ST.Colors.PRIMARY }),
                            (0, s.jsx)(m.D, { variant: "heading-sm/semibold", className: t3.J5, children: t.name }),
                        ],
                    }),
                    (0, s.jsx)(g.E, {
                        className: t3.eF,
                        variant: "body-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, s.jsx)("div", {
                        className: t3.Fj,
                        children: (0, s.jsxs)("div", {
                            className: t3.FG,
                            children: [
                                (0, s.jsx)(t6.UserIcon, { color: "currentColor", className: t3.NP, size: "xs" }),
                                (0, s.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    children: w.intl.format(w.t.zRl6XR, { count: t.approximate_member_count }),
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
function ls(e) {
    var t;
    let l,
        n,
        a,
        { application: r, className: o } = e,
        { onGoToSupportServer: d } =
            ((t = r),
            (l = k()),
            (n = (0, c.bG)([N.default], () => N.default.getSessionId())),
            (a = i.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        O(D.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let l = { page: D.liQ.APPLICATION_DIRECTORY };
                        await (0, t1.Z2)(e, l);
                    }
                } catch {}
            }, [t])),
            i.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && l && null != n && "true" === e.searchParams.get(ll)) {
                    e.searchParams.delete(ll);
                    let t = e.pathname + e.search;
                    ((0, I.bG)(t), a());
                }
            }, [l, a, n, t]),
            {
                onGoToSupportServer: i.useCallback(() => {
                    null != t?.guild?.id && (l ? a() : U({ [ll]: "true" }));
                }, [t, a, l]),
            });
    return null != r.guild && r.guild.features.includes(D.GuildFeatures.DISCOVERABLE)
        ? (0, s.jsxs)("div", {
              className: o,
              children: [
                  (0, s.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.KJEO27),
                  }),
                  (0, s.jsx)(lt, { guild: r.guild, onClick: d }),
              ],
          })
        : null;
}
var li = l(412645);
let ln = (0, w.getAvailableLocales)();
function la(e) {
    let { application: t, className: l } = e,
        n = (0, c.bG)([tw.default], () => tw.default.locale),
        { supportedLanguages: r, usersLanguageIsFirst: o } = i.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    l = e.has(n),
                    s = ln.filter((t) => e.has(t.value));
                return (
                    l && s.sort((e, t) => (e.value === n ? -1 : +(t.value === n))),
                    { supportedLanguages: s.map((e) => w.intl.string(e.localizedName)), usersLanguageIsFirst: l }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, n]);
    return (0, s.jsxs)("div", {
        className: l,
        children: [
            (0, s.jsx)(m.D, {
                variant: "heading-xs/semibold",
                color: "text-strong",
                children: w.intl.string(w.t.Fbjlu3),
            }),
            (0, s.jsx)("ul", {
                className: li.nw,
                children: r.map((e, t) =>
                    (0, s.jsx)(
                        "li",
                        {
                            className: a()(li.WH, li.O6),
                            children: (0, s.jsx)(g.E, {
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
    let { className: t, view: l, application: i } = e,
        n = "embedded" === l,
        r = (0, tF.A)({ application: i });
    return (0, s.jsxs)("div", {
        className: a()(t, { [lr.PD]: !n, [lr.UT]: n }),
        children: [
            (0, s.jsxs)("div", {
                className: a()(lr.hd, { [lr.d5]: n }),
                children: [
                    (0, s.jsx)("div", {
                        className: lr.iY,
                        children: (0, s.jsx)(tV, {
                            application: i,
                            mutualGuilds: r,
                            className: lr.wu,
                            guildsClassName: lr.HG,
                            children: (0, s.jsx)(m.D, {
                                variant: "heading-xs/semibold",
                                color: "text-strong",
                                children: w.intl.string(w.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, s.jsx)(tz, { application: i, className: lr.iY }),
                    (0, s.jsx)(la, { application: i, className: lr.iY }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: a()(lr.hd, { [lr.d5]: n }),
                children: [
                    (0, s.jsx)(tJ, { application: i, className: lr.iY, innerClassName: n ? lr.RU : void 0 }),
                    (0, s.jsx)(ls, { application: i, className: lr.iY }),
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
    lj = l(486889),
    lv = l(481859),
    lA = l(143145);
let lC = /^discord.gg\/[a-zA-Z0-9-]+/,
    lf = {
        ...lh.A.rules,
        heading: {
            ...lh.A.rules.heading,
            react(e, t, l) {
                let i = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, s.jsx)(lv.A, { tag: i, children: t(e.content, l) }, l.key);
            },
        },
        image: { ...ld().defaultRules.image },
        inviteLink: {
            order: lh.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? lC.exec(e) : null),
            parse: (e, t, l) => {
                let s = (0, lj.br)(e[0]);
                return null == s || s.type !== lx.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              (lg.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: s.code,
                                  context: { location: "Application Directory" },
                              }),
                                  l.closeModal?.());
                          },
                      };
            },
            react: (e, t, l) =>
                (0, s.jsx)(
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
var lI = l(148323);
let lN = ld().parserFor(lf),
    ly = ld().reactFor(ld().ruleOutput(lf, "react"));
function lb(e) {
    let { description: t, supportsMarkdown: l } = e,
        [n, r] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return (e.observe(o.current), () => e.disconnect());
    }, []);
    let [c, d] = i.useState(!1),
        u = i.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: o,
                className: a()({ [lI.mA]: !c, [lI.ii]: !c && "Safari" === platform.name }),
                children: l
                    ? (0, s.jsx)(lh.A, {
                          className: lI.R4,
                          parser: lN,
                          output: ly,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, s.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: t }),
            }),
            n || c ? (0, s.jsx)(l_, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function l_(e) {
    let { onToggle: t, isShowingMore: l } = e,
        n = i.useMemo(
            () =>
                (0, s.jsxs)("div", {
                    className: lI.eR,
                    children: [
                        (0, s.jsx)(g.E, {
                            variant: "body-md/semibold",
                            color: "interactive-text-default",
                            children: l ? w.intl.string(w.t["vtfc4+"]) : w.intl.string(w.t.ZDRyuq),
                        }),
                        l
                            ? (0, s.jsx)(lu.t, { size: "md", color: "currentColor", className: lI.ys })
                            : (0, s.jsx)(lm.a, { size: "md", color: "currentColor", className: lI.ys }),
                    ],
                }),
            [l],
        );
    return (0, s.jsxs)(eO.D, {
        className: lI.dO,
        onClick: t,
        children: [(0, s.jsx)("div", { className: lI.yF }), n, (0, s.jsx)("div", { className: lI.yF })],
    });
}
let lE = function (e) {
    let { application: t } = e,
        l = t.directory_entry?.detailed_description,
        n = t.directory_entry?.short_description,
        a = i.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, s.jsx)(lb, { description: l, supportsMarkdown: !0 })
                    : null != n && n.length > 0
                      ? (0, s.jsx)(lb, { description: n, supportsMarkdown: !1 })
                      : null,
            [l, n],
        );
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: lI.l4,
              children: [
                  (0, s.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.txraKS),
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
        l = i.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return lP.Q.filter((t) => lS.zy(lS.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != l && l.length > 0
        ? (0, s.jsxs)("div", {
              className: lT.A,
              children: [
                  (0, s.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.runNF8),
                  }),
                  (0, s.jsx)(lR.A, {
                      className: lT.h,
                      grantedPermissions: l,
                      grantedPermissionsHeader: w.intl.string(w.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var lD = l(644647);
function lO(e) {
    let { application: t } = e,
        l = i.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(P.xb).filter(eD.Vq) ?? [], [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: lD.Xb,
                children: [
                    (0, s.jsx)(tf, { application: t, carouselItems: l }),
                    (0, s.jsx)(lE, { application: t }),
                    (0, s.jsx)(ty, { application: t }),
                    (0, s.jsx)(lL, { application: t }),
                    (0, s.jsx)(tD, { application: t }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: lD.Q9,
                children: [
                    (0, s.jsx)("div", { className: lD.yF }),
                    (0, s.jsx)(m.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: w.intl.string(w.t["mD+J/i"]),
                    }),
                    (0, s.jsx)(lo, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
l(321073);
var lk = l(607399),
    lU = l(858899),
    lM = l(165862),
    lw = l(477782),
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
        n = i.useRef(null);
    return (0, s.jsx)(lV.Y, {
        targetElementRef: n,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return t(l);
        },
        position: "left",
        align: "top",
        animation: lV.Y.Animation.NONE,
        children: (e) =>
            (0, s.jsx)(ew.K, {
                buttonRef: n,
                variant: "secondary",
                size: l,
                icon: lF.MoreHorizontalIcon,
                "aria-label": w.intl.string(w.t["UKOtz+"]),
                ...e,
            }),
    });
}
function l5(e) {
    var t;
    let l,
        n,
        { application: a, variant: r, size: o, contentWidth: c } = e,
        { onClickInstallApplication: d, canInstall: u } =
            ((t = a),
            (l = k()),
            (n = i.useCallback(() => {
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
            i.useEffect(() => {
                let e = new URL(location.href);
                if (l && "true" === e.searchParams.get(l8)) {
                    e.searchParams.delete(l8);
                    let t = e.pathname + e.search;
                    ((0, I.bG)(t), n());
                }
            }, [l, n]),
            {
                onClickInstallApplication: i.useCallback(() => {
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
                    if (l) n();
                    else {
                        let e = L.h.getField("guildId");
                        (b.default.track(D.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: lk.Fr ? "mobile_web" : "desktop_web",
                        }),
                            U({ [l8]: "true" }));
                    }
                }, [t, n, l]),
                canInstall: i.useMemo(
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
        ? (0, s.jsx)(ew.K, {
              variant: r,
              icon: lH.PlusLargeIcon,
              size: o,
              onClick: d,
              "aria-label": w.intl.string(w.t.NgXl3C),
              disabled: !u,
          })
        : (0, s.jsx)(lz.$, {
              variant: r,
              size: o,
              text: "small" === c ? w.intl.string(w.t.qRZ35t) : w.intl.string(w.t.NgXl3C),
              onClick: d,
              disabled: !u,
          });
}
function l7(e) {
    let { size: t, contentWidth: l, onClick: i, isSubmitting: n } = e;
    return "icon" === l
        ? (0, s.jsx)(ew.K, {
              variant: "primary",
              icon: lB.PlayIcon,
              size: t,
              onClick: i,
              loading: n,
              "aria-label": w.intl.string(w.t.QO7rO6),
          })
        : (0, s.jsx)(lz.$, { variant: "primary", size: t, text: w.intl.string(w.t.QO7rO6), onClick: i, loading: n });
}
let l2 = function (e) {
    let { application: t, size: l, ref: n } = e,
        { analyticsLocations: r } = (0, lX.Ay)(),
        o = i.useCallback(() => {
            var e;
            (O(D.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: t.id }),
                (0, lQ.C)(
                    ((e = t.id), `${location.protocol}//${location.host}${D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, lU.P0)({ text: w.intl.string(w.t["L/PwZf"]), variant: "success" }),
                ));
        }, [t.id]),
        d = i.useCallback(() => {
            let e = lJ.Ay.createFromServer(t);
            (0, lq.r3)({ application: e, entrypoint: "app_directory" });
        }, [t]),
        u = (0, l$.A)({
            id: t.id,
            label: w.intl.string(w.t["FfCL+6"]),
            onSuccess: () => (0, lU.P0)({ text: w.intl.string(w.t.eNjAah), variant: "success" }),
        }),
        m = i.useCallback(
            (e, t) =>
                (0, s.jsxs)(lM.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": w.intl.string(w.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, s.jsx)(lw.rX, {
                                  children: (0, s.jsx)(lw.Dr, {
                                      id: "copy",
                                      label: w.intl.string(w.t.z4sP5J),
                                      action: o,
                                      icon: tK.LinkIcon,
                                      leadingAccessory: { type: "icon", icon: tK.LinkIcon },
                                  }),
                              })
                            : null,
                        (0, s.jsx)(lw.rX, {
                            children: (0, s.jsx)(lw.Dr, {
                                id: "report",
                                label: w.intl.string(w.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: lG.FlagIcon },
                                action: d,
                            }),
                        }),
                        null != u ? (0, s.jsx)(lw.rX, { children: u }) : null,
                    ],
                }),
            [u, d, o],
        ),
        { onClickLaunchActivity: h, isSubmitting: p } = (function (e, t) {
            let l = e.id,
                s = e?.bot?.id,
                n = (0, lZ.X)(e),
                a = (0, lK.Vr)({ context: { type: "contextless" }, applicationId: l, botUserId: s }),
                r = null != s && (0, en.$B)(e) && (0, en.Z$)(e) && (n || a),
                [o, d] = i.useState(!1),
                u = k(),
                m = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
                h = (0, lY.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => d(!0),
                    runAfterLaunchAttempt: () => d(!1),
                });
            i.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(l6);
                if (u && r && t && null != s && null != m) {
                    e.searchParams.delete(l6);
                    let t = e.pathname + e.search;
                    ((0, I.bG)(t), h());
                }
            }, [u, r, s, m, h]);
            let p = i.useCallback(async () => {
                if (null != s) {
                    if ((O(D.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: l }), !u))
                        return void U({ [l6]: "true" });
                    await h();
                }
            }, [l, s, u, h]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(t, r),
        g = null != h,
        x = g ? "secondary" : "primary";
    return (0, s.jsxs)("div", {
        ref: n,
        children: [
            (0, s.jsxs)("div", {
                className: a()(l1.Ik, l1.U),
                children: [
                    g && (0, s.jsx)(l7, { size: l, contentWidth: "normal", onClick: h, isSubmitting: p }),
                    (0, s.jsx)(l5, { application: t, size: l, contentWidth: "normal", variant: x }),
                    lQ.p5
                        ? (0, s.jsx)(ew.K, {
                              variant: "secondary",
                              size: l,
                              icon: tK.LinkIcon,
                              onClick: o,
                              "aria-label": w.intl.string(w.t.z4sP5J),
                          })
                        : null,
                    (0, s.jsx)(l4, { renderDropdown: (e) => m(!1, e), size: l }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: a()(l1.Ik, l1.EX),
                children: [
                    g && (0, s.jsx)(l7, { size: l, contentWidth: "small", onClick: h, isSubmitting: p }),
                    (0, s.jsx)(l5, { application: t, size: l, contentWidth: "small", variant: x }),
                    (0, s.jsx)(l4, { renderDropdown: (e) => m(lQ.p5, e), size: l }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: a()(l1.Ik, l1.nU),
                children: [
                    g && (0, s.jsx)(l7, { size: l, contentWidth: "icon", onClick: h, isSubmitting: p }),
                    (0, s.jsx)(l5, { application: t, size: l, contentWidth: "icon", variant: x }),
                    (0, s.jsx)(l4, { renderDropdown: (e) => m(lQ.p5, e), size: l }),
                ],
            }),
        ],
    });
};
var l3 = l(973489);
let l9 = function (e) {
    let { application: t, onButtonsVisibilityChange: l } = e,
        n = i.useRef(null),
        a = i.useMemo(() => er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = i.useMemo(() => {
            let e = [];
            return (
                (0, en.b7)(t) && e.push(w.intl.string(w.t.LO4f0P)),
                (0, en.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(w.intl.string(w.t["8z5B2U"]))),
                (0, en.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(w.intl.string(w.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(eC, { application: t, bannerType: "detail", iconURL: a }),
            (0, s.jsx)("div", {
                className: l3.H,
                style: { height: 52 },
                children: (0, s.jsx)("img", {
                    src: a,
                    alt: "",
                    className: l3.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, s.jsxs)("div", {
                className: l3.op,
                children: [
                    (0, s.jsxs)("div", {
                        className: l3.tJ,
                        children: [
                            (0, s.jsx)(m.D, {
                                variant: "heading-xxl/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, s.jsx)("div", {
                                className: l3.A7,
                                children: r.map((e, t) =>
                                    (0, s.jsx)(
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
                    (0, s.jsx)(ei.L, {
                        innerRef: n,
                        onChange: l,
                        active: !0,
                        children: (0, s.jsx)(l2, { ref: n, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var se = l(172218),
    st = l(268951);
function sl(e) {
    let { applicationId: t, similarApplications: l, onSelectApplication: n, similarLoadId: a } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: l } = e,
                [s, n] = i.useState(),
                a = (0, se.K)(function (e) {
                    e && n(t);
                });
            return (
                i.useEffect(() => {
                    s === t &&
                        O(D.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: l,
                        });
                }, [s, t, l]),
                a
            );
        })({ applicationId: t, similarAppIds: i.useMemo(() => l.map((e) => e.id), [l]) });
    return (0, s.jsx)("div", {
        className: st.hQ,
        ref: r,
        children: l.map((e, l) =>
            (0, s.jsx)(
                ss,
                { applicationId: t, similarApplication: e, onSelectApplication: n, similarLoadId: a, position: l },
                e.id,
            ),
        ),
    });
}
function ss(e) {
    let { applicationId: t, similarApplication: l, onSelectApplication: n, position: a, similarLoadId: r } = e,
        o = (0, tF.A)({ application: l }),
        c = l.categories?.[0],
        d = i.useMemo(() => er.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 48 }), [l]),
        u = i.useCallback(() => {
            (O(D.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: l.id,
                position: a,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                n(l.id));
        }, [n, l.id, t, o.length, r, a]);
    return (0, s.jsxs)(eO.D, {
        onClick: u,
        className: st.vU,
        children: [
            (0, s.jsxs)("div", {
                className: st.nT,
                children: [
                    (0, s.jsx)("img", { src: d, alt: "", className: st.my, height: 48, width: 48 }),
                    (0, s.jsxs)("div", {
                        className: st.gn,
                        children: [
                            (0, s.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, s.jsx)(m.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    className: st.JB,
                                    children: l.name,
                                }),
                            }),
                            null != c
                                ? (0, s.jsx)(g.E, {
                                      className: st.m4,
                                      variant: "body-xs/medium",
                                      color: "text-muted",
                                      children: c.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(g.E, {
                className: st.i3,
                variant: "body-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: l.directory_entry?.short_description ?? l.description,
            }),
            (0, s.jsx)(tV, { application: l, textVariant: "body-xs/medium", mutualGuilds: o }),
        ],
    });
}
let si = function (e) {
    let { applicationId: t, fetchState: l, similarApplications: i, onSelectApplication: n, similarLoadId: a } = e;
    return l !== eL.e.FETCHING && (null == i || 0 === i.length)
        ? null
        : (0, s.jsxs)("div", {
              className: st.hd,
              children: [
                  (0, s.jsx)("div", { className: st.yF }),
                  (0, s.jsx)(m.D, {
                      variant: "heading-xs/semibold",
                      color: "text-strong",
                      className: st.bV,
                      children: w.intl.string(w.t.E8wCnk),
                  }),
                  (0, s.jsx)(es, {
                      loading: l === eL.e.FETCHING,
                      children:
                          null != i
                              ? (0, s.jsx)(sl, {
                                    applicationId: t,
                                    similarApplications: i,
                                    onSelectApplication: n,
                                    similarLoadId: a,
                                })
                              : null,
                  }),
              ],
          });
};
l(938796);
var sn = l(192308),
    sa = l(549711),
    sr = l(55709),
    so = l(311321),
    sc = l(163437),
    sd = l(67480),
    su = l(17815);
function sm(e) {
    let { application: t } = e;
    return (0, s.jsxs)("div", {
        className: su.ZM,
        children: [(0, s.jsx)(sh, { application: t }), (0, s.jsx)(sg, { application: t })],
    });
}
function sh(e) {
    let { application: t } = e,
        { subscriptions: l, otps: i } = (0, eS.C)(t.id);
    return (0, s.jsxs)("div", {
        className: su.ZM,
        children: [
            l.length > 0 &&
                (0, s.jsxs)("div", {
                    className: su.dD,
                    children: [
                        (0, s.jsx)(so.A, { subscriptions: l, color: "text-strong" }),
                        (0, s.jsx)("div", {
                            className: su.ZE,
                            children: l.map((e) => {
                                let l = (0, sc.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, s.jsx)(
                                    sr.B4,
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
            i.length > 0 &&
                (0, s.jsxs)("div", {
                    className: su.dD,
                    children: [
                        (0, s.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: w.intl.string(w.t.yUGTs8),
                        }),
                        (0, s.jsx)("div", {
                            className: su.ZE,
                            children: i.map((e) =>
                                (0, s.jsx)(
                                    sr.B8,
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
            (0, s.jsx)(sa.A, {
                path: D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, s.jsx)(sp, { ...e }),
            }),
        ],
    });
}
function sp(e) {
    let {
            match: {
                params: { applicationId: t, skuId: n },
            },
        } = e,
        a = (0, c.bG)([sd.A], () => sd.A.get(n), [n]),
        r = (0, c.bG)([sd.A], () => (null != n ? sd.A.getParentSKU(n) : void 0), [n]),
        o = i.useId(),
        d = i.useCallback(
            () => F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, M.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        i.useLayoutEffect(() => {
            var e;
            switch (a?.type) {
                case D.Puh.CONSUMABLE:
                case D.Puh.DURABLE:
                    return void (0, sn.mM)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([
                                l.e(426782),
                                l.e(406322),
                                l.e(942571),
                                l.e(817989),
                                l.e(15481),
                                l.e(170104),
                            ]).then(l.bind(l, 963179));
                            return (l) => (0, s.jsx)(e, { appId: t, skuId: n, ...l });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                sx() ||
                                    F(
                                        D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            M.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case D.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, sc.bg)(r.flags) ? "user" : "guild"),
                        void (0, sn.mM)(
                            async () => {
                                let { SubscriptionDetailsModal: i } = await Promise.all([
                                    l.e(426782),
                                    l.e(406322),
                                    l.e(942571),
                                    l.e(817989),
                                    l.e(15481),
                                    l.e(564850),
                                ]).then(l.bind(l, 168393));
                                return (l) =>
                                    (0, s.jsx)(i, { appId: t, subscriptionType: e, skuId: n, guildId: void 0, ...l });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    sx() ||
                                        F(
                                            D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                M.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, d, r?.flags, a?.flags, a?.type, n]),
        i.useLayoutEffect(
            () => () => {
                (0, sn.Oo)(o);
            },
            [o],
        ),
        null
    );
}
function sg(e) {
    let { application: t } = e,
        l = k(),
        i = t.terms_of_service_url,
        n = t.privacy_policy_url;
    if (null == i && null == n) return null;
    function a(e, t) {
        return (0, s.jsx)(tW.A, { href: t, trusted: !l, children: e });
    }
    return (0, s.jsx)("div", {
        className: su.V6,
        children: (0, s.jsx)(g.E, {
            color: "text-strong",
            variant: "body-sm/normal",
            children:
                null != i && null != n
                    ? w.intl.format(w.t.nylPOT, { termsHook: (e) => a(e, i), privacyHook: (e) => a(e, n) })
                    : null != i
                      ? w.intl.format(w.t["0cPyDz"], { termsHook: (e) => a(e, i) })
                      : null != n
                        ? w.intl.format(w.t["loYGC/"], { privacyHook: (e) => a(e, n) })
                        : null,
        }),
    });
}
function sx() {
    return window.location.pathname.startsWith("/login");
}
var sj = l(615052);
let sv = function (e) {
    let { applicationId: t, onSelectApplication: l, onScroll: n, initialTab: a, onButtonsVisibilityChange: r } = e,
        o = i.useRef(null),
        d = (0, c.bG)([S.A], () => S.A.getApplication(t)),
        u = (0, c.bG)([S.A], () => S.A.getApplicationFetchState(t));
    (i.useEffect(() => {
        if (null != t && null == d) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            _.Di(t, { noCache: e });
        }
    }, [t, d]),
        i.useEffect(() => {
            _.xZ({ applicationId: t });
        }, [t]),
        i.useEffect(() => () => r(!0), [r]));
    let m = d?.storefront_available,
        [h, p] = i.useState(a ?? M.GlobalDiscoveryAppsSections.ABOUT),
        g = i.useCallback(
            (e) => {
                (o.current?.scrollTo({ to: 0 }), p(M.GlobalDiscoveryAppsSections.ABOUT), l(e));
            },
            [l],
        );
    i.useEffect(() => {
        d?.storefront_available && null != t && (0, eS.F)(t);
    }, [d?.storefront_available, t]);
    let x = (0, L.Bn)(),
        j = (0, c.bG)([eL.A], () => eL.A.getFetchState({ applicationId: d?.id })),
        v = (0, c.bG)([eL.A], () => eL.A.getSimilarApplications({ applicationId: d?.id })),
        A = i.useMemo(() => v?.applications.slice(0, 3), [v]),
        C = { displayedSimilarApplications: A, previousView: x },
        f = i.useRef(C);
    (i.useEffect(() => {
        f.current = C;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = f.current;
            d?.id != null &&
                j !== eL.e.FETCHING &&
                O(D.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: L.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: d.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [d?.id, j]));
    let I = i.useMemo(
            () => [
                { id: M.GlobalDiscoveryAppsSections.ABOUT, label: w.intl.string(w.t.DkyHMK) },
                { id: M.GlobalDiscoveryAppsSections.STORE, label: w.intl.string(w.t.jgEXGB) },
            ],
            [],
        ),
        N = i.useMemo(() => {
            if (null == d) return null;
            switch (h) {
                case M.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, s.jsx)(lO, { application: d });
                case M.GlobalDiscoveryAppsSections.STORE:
                    return (0, s.jsx)(sm, { application: d });
            }
        }, [h, d]),
        y = i.useCallback(
            (e) => {
                (O(D.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === M.GlobalDiscoveryAppsSections.ABOUT
                        ? F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e)));
            },
            [t],
        ),
        b = h === M.GlobalDiscoveryAppsSections.ABOUT;
    return (0, s.jsx)(Y.A, {
        onScroll: n,
        ref: o,
        children: (0, s.jsx)(B.A, {
            children:
                null == d
                    ? null == u || u === S.e.FETCHING
                        ? (0, s.jsx)("div", { className: sj.Dg, children: (0, s.jsx)(es, { loading: !0 }) })
                        : (0, s.jsx)("div", { className: sj.Dg, children: (0, s.jsx)(W, { className: sj.z3 }) })
                    : (0, s.jsxs)("div", {
                          className: sj.nM,
                          children: [
                              (0, s.jsx)(l9, { application: d, onButtonsVisibilityChange: r }),
                              (0, s.jsxs)("div", {
                                  className: sj.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: sj.Ne,
                                          children: [
                                              m &&
                                                  (0, s.jsx)("div", {
                                                      className: sj.OF,
                                                      children: (0, s.jsx)(eT, {
                                                          tabs: I,
                                                          onTabSelect: y,
                                                          selectedTab: h,
                                                      }),
                                                  }),
                                              N,
                                              (0, s.jsx)(si, {
                                                  applicationId: t,
                                                  fetchState: j,
                                                  similarApplications: A,
                                                  onSelectApplication: g,
                                                  similarLoadId: v?.loadId,
                                              }),
                                          ],
                                      }),
                                      b && (0, s.jsx)(lo, { className: sj.pz, application: d, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var sA = l(984516),
    sC = l(724002),
    sf = l(287174),
    sI = l(487899),
    sN = l(239314),
    sy = l(707554),
    sb = l(111162),
    s_ = l(195611);
let sE = sf.K.APPLICATION_DIRECTORY;
function sS(e) {
    let { collection: t, index: l, onSelectApplication: n } = e,
        r = (function (e) {
            let { collectionId: t, index: l } = e,
                [s, n] = i.useState(!1),
                a = (0, se.K)(function (e) {
                    e && n(!0);
                });
            return (
                i.useEffect(() => {
                    s && O(D.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: l });
                }, [s, t, l]),
                a
            );
        })({ collectionId: t.id, index: l }),
        o = i.useCallback(
            (e, s) => {
                (O(D.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: s,
                    collection_position: l,
                    application_id: e,
                }),
                    n(e));
            },
            [t.id, l, n],
        );
    return (0, s.jsx)("div", {
        ref: r,
        children: (0, s.jsxs)(sy.F, {
            children: [
                (0, s.jsx)(m.D, {
                    className: a()(s_.Gf, { [s_.SH]: 0 === l }),
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: t.title,
                }),
                (0, s.jsx)(sy.F, {
                    children: (0, s.jsx)("div", {
                        className: s_.Qs,
                        children: t.application_directory_collection_items.map((e, t) =>
                            e.type !== sI.L.APPLICATION || null == e.application
                                ? null
                                : (0, s.jsx)(
                                      eI,
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
let sR = function (e) {
    let { onSelectApplication: t } = e,
        l = (0, c.bG)([sb.default], () => sb.default.onlyShowPreviewAppCollections) ? sC.W.PREVIEW : sC.W.ACTIVE,
        n = (0, c.bG)([Q.A], () => Q.A.getFetchState({ surface: sE, activeState: l })),
        a = (0, c.bG)([Q.A], () => Q.A.getCollections({ surface: sE, activeState: l }));
    i.useEffect(() => {
        _.An({ surface: sE, activeState: l });
    }, [l]);
    let r = i.useMemo(() => a?.filter((e) => e.type !== sN.Y.GALLERY), [a]);
    return n === Q.e.ERROR
        ? (0, s.jsx)("div", { className: s_.Un, children: (0, s.jsx)(W, { className: s_.z3 }) })
        : (0, s.jsx)(es, {
              loading: n === Q.e.FETCHING,
              children: r?.map((e, l) => (0, s.jsx)(sS, { collection: e, index: l, onSelectApplication: t }, l)),
          });
};
var sP = l(530472);
let sT = function (e) {
    let { onScroll: t, onSelectApplication: l } = e;
    return (0, s.jsxs)(Y.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(z.A, {
                title: w.intl.format(w.t.kEcZ97, {}),
                description: w.intl.string(w.t.XxFts9),
                children: (0, s.jsx)(H.A, {}),
            }),
            (0, s.jsx)(B.A, {
                children: (0, s.jsxs)("div", {
                    className: sP.h,
                    children: [(0, s.jsx)(sR, { onSelectApplication: l }), (0, s.jsx)(sA.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var sL = l(806163),
    sD = l(994369),
    sO = l(475743),
    sk = l(191711),
    sU = l(781727);
function sM(e) {
    let { category: t, count: l, onSelectCategory: n, selected: r } = e,
        o = i.useCallback(() => {
            n(t.id);
        }, [t.id, n]),
        c = l.toLocaleString(tw.default.locale);
    return (0, s.jsxs)(eO.D, {
        onClick: o,
        className: a()(sU.L1, { [sU.wH]: r }),
        children: [
            (0, s.jsx)(g.E, { className: sU.UU, variant: "body-sm/medium", color: "text-strong", children: t.name }),
            (0, s.jsx)(g.E, { className: sU.U9, variant: "body-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function sw(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: n } = e,
        a = (0, c.bG)([R.A], () => R.A.getCategories()),
        r = i.useMemo(() => [(0, P.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]);
    return 0 === r.length
        ? null
        : (0, s.jsx)("div", {
              className: sU.LZ,
              children: r.map((e) => {
                  let i = e.id,
                      a = t[i] ?? 0;
                  return (0, s.jsx)(sM, { category: e, count: a, selected: i === n, onSelectCategory: () => l(e) }, i);
              }),
          });
}
function sG(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: n } = e,
        a = (0, c.bG)([R.A], () => R.A.getCategories()),
        r = i.useMemo(() => [(0, P.AU)(), ...a.filter((e) => (t[e.id] ?? 0) !== 0)], [a, t]),
        o = i.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        d = i.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && l(t);
            },
            [l, r],
        ),
        u = i.useMemo(() => r.find((e) => e.id === n), [n, r]);
    return 0 === o.length
        ? null
        : (0, s.jsxs)("div", {
              className: sU.kL,
              children: [
                  (0, s.jsx)(g.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: w.intl.string(w.t.f09BQJ),
                  }),
                  (0, s.jsx)(sk.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: d,
                      selected: `${n}`,
                      "aria-label": w.intl.string(w.t.WHdCwR),
                      variant: sk.H.FILLED,
                  }),
              ],
          });
}
var sV = l(307950);
let sF = function (e) {
    let { selectedCategoryId: t, searchAllCategories: l } = e,
        n = (0, c.bG)([R.A], () => R.A.getCategories()),
        a = i.useMemo(() => n.find((e) => e.id === t)?.name, [n, t]),
        r =
            0 === t || null == a
                ? w.intl.string(w.t["FVJt+8"])
                : w.intl.formatToPlainString(w.t.FjCaNB, { categoryName: a }),
        o = 0 === t ? w.intl.string(w.t.GXiMta) : w.intl.format(w.t.JaLoFF, { onClick: l });
    return (0, s.jsxs)("div", {
        className: sV.k,
        children: [
            (0, s.jsx)(m.D, { variant: "heading-xl/semibold", className: sV.w, children: r }),
            (0, s.jsx)(g.E, { variant: "body-md/normal", color: "text-default", children: o }),
        ],
    });
};
var sH = l(586720);
function sz(e) {
    let { onSelectApplication: t, onScroll: l } = e,
        n = (0, c.bG)([N.default], () => N.default.isAuthenticated()),
        a = i.useRef(null),
        r = (0, sL.zy)(),
        o = i.useRef(null),
        {
            query: d,
            page: u,
            categoryId: m,
        } = i.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                l = null != t ? Number(t) : 1;
            return { query: e.get("q") ?? "", page: l, categoryId: Number(e.get("category_id")) ?? 0 };
        }, [r.search]),
        h = (0, c.bG)([R.A], () => R.A.getCategories()),
        p = i.useMemo(() => h?.find((e) => e.id === m), [h, m]),
        g = i.useCallback(
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
    i.useEffect(() => {
        (a.current?.scrollTo({ to: 0 }),
            d !== o.current && ((o.current = d), _.$P({ query: d, options: { source: sD.V.APP_DIRECTORY } })),
            _.$P({
                query: d,
                options: { categoryId: m, page: u, pageSize: 48, source: sD.V.APP_DIRECTORY },
                onSuccessCallback: g,
            }));
    }, [m, u, d, g]);
    let { fetchState: x, searchResults: j } = (0, c.cf)([ee.A], () => ({
            fetchState: ee.A.getFetchState({
                query: d,
                categoryId: m,
                page: u,
                pageSize: 48,
                source: sD.V.APP_DIRECTORY,
            }),
            searchResults: ee.A.getSearchResults({
                query: d,
                categoryId: m,
                page: u,
                pageSize: 48,
                source: sD.V.APP_DIRECTORY,
            }),
        })),
        v = (0, c.cf)([ee.A], () => {
            let e = ee.A.getSearchResults({ query: d, source: sD.V.APP_DIRECTORY });
            return null != e ? { 0: e.totalCount, ...e.countsByCategory } : {};
        }),
        A = (0, sO.Ay)(j),
        C = i.useMemo(() => (x === S.e.FETCHING ? A : j), [x, A, j]),
        f = i.useCallback(
            (e) => {
                V({ query: d, categoryId: m, page: e });
            },
            [m, d],
        ),
        I = i.useCallback(
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
        y = i.useCallback(
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
        b = G();
    return (0, s.jsxs)("div", {
        className: sH.kL,
        children: [
            (0, s.jsx)(Y.A, {
                ref: a,
                onScroll: l,
                children: (0, s.jsxs)("div", {
                    className: sH.WH,
                    children: [
                        n ? null : (0, s.jsx)("div", { className: sH.AW }),
                        (0, s.jsx)(B.A, {
                            children: (0, s.jsxs)("div", {
                                className: sH.hQ,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: sH.$B,
                                        children: (0, s.jsx)(sG, {
                                            countsByCategory: v,
                                            selectedCategoryId: m,
                                            onSelectCategory: I,
                                        }),
                                    }),
                                    (0, s.jsx)(es, {
                                        loading: x === S.e.FETCHING,
                                        children:
                                            x === S.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, s.jsx)(sF, {
                                                      selectedCategoryId: m ?? b.id,
                                                      searchAllCategories: () => I(b),
                                                  })
                                                : (0, s.jsx)("div", {
                                                      className: sH.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === Z.j.APPLICATION) {
                                                              let l = e.data;
                                                              return (0, s.jsx)(
                                                                  eI,
                                                                  {
                                                                      application: l,
                                                                      onSelectApplication: (e) => y(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  l.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, s.jsx)(J.m, {
                                        className: sH.JV,
                                        totalCount: Math.min((C?.totalPages ?? 0) * 48, 4800),
                                        pageSize: 48,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: u,
                                        onPageChange: f,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: sH.pn,
                children: (0, s.jsx)("div", {
                    className: sH.jv,
                    children: (0, s.jsx)(sw, { countsByCategory: v, selectedCategoryId: m, onSelectCategory: I }),
                }),
            }),
        ],
    });
}
var sB = l(699716);
function sY(e) {
    let { applicationId: t, hideDetailHeaderButtons: l, onClickBack: n } = e,
        r = (0, c.bG)([S.A], () => S.A.getApplication(t)),
        [o, u] = i.useState(l),
        h = i.useCallback(() => {
            u(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: sB._u,
        children: [
            (0, s.jsx)("div", { className: sB.w$, children: (0, s.jsx)(v.XQ, { icon: d.Z, onClick: n }) }),
            (0, s.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: sB.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, s.jsx)("div", {
                className: a()(sB.w$, sB.xY, { [sB.RK]: !l, [sB.jD]: l && !o, [sB.R]: l && o }),
                onTransitionEnd: h,
                children: null != r ? (0, s.jsx)(l2, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function sX() {
    let e = i.useCallback(() => {
            let e, t;
            ((e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, I.pX)(D.BVt.REGISTER + t));
        }, []),
        t = i.useCallback(() => {
            U();
        }, []);
    return (0, s.jsxs)(h.$T, {
        color: h.Hv.BRAND,
        className: sB.aL,
        children: [
            (0, s.jsx)(p.p, { size: "custom", color: "white", className: sB.wm }),
            (0, s.jsx)(g.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "body-md/normal",
                children: w.intl.string(w.t.Ol3MIt),
            }),
            (0, s.jsxs)("div", {
                className: sB.ll,
                children: [
                    (0, s.jsx)(h.Z_, { onClick: e, noticeType: D.kqX.LOGIN, children: w.intl.string(w.t["825cFy"]) }),
                    (0, s.jsx)(h.Z_, {
                        onClick: t,
                        noticeType: D.kqX.REGISTER,
                        minor: !0,
                        children: w.intl.string(w.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let sK = function () {
    var e;
    let t,
        l,
        n,
        o,
        h,
        p,
        g = (0, c.bG)([N.default], () => !N.default.isAuthenticated()),
        { onScroll: S, scrollPosition: T, resetScrollPosition: U } = (0, x.G)(),
        M = (0, L.R4)(),
        F = k(),
        H = M?.type === L.ev.CATEGORY ? M.categoryId : void 0,
        { applicationId: z, section: B } = M?.type === L.ev.APPLICATION ? M : {},
        { query: Y, categoryId: X } = M?.type === L.ev.SEARCH ? M : {},
        K = (0, c.bG)([R.A], () => R.A.getCategories()),
        W = i.useMemo(() => [(0, P.AU)(), ...K], [K]),
        $ = i.useMemo(() => W.find((e) => e.id === Number(X)), [W, X]),
        {
            tabs: Z,
            selectedTab: q,
            onSelectTab: J,
        } = ((e = H?.toString()),
        (t = (0, c.bG)([R.A], () => R.A.getCategories())),
        (l = G()),
        (n = i.useMemo(
            () => [{ id: l.id.toString(), label: l.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, l],
        )),
        (o = (0, L.R4)()),
        (h = i.useCallback(
            (e) => {
                let t = n.find((t) => t.id === e);
                null != t &&
                    (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: o?.type,
                    }),
                    (function (e) {
                        let { categoryId: t } = e,
                            l = { previousView: (0, L.R4)() };
                        (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: l });
                    })({ categoryId: e }));
            },
            [o?.type, n],
        )),
        (p = null != e && n.some((t) => t.id === e) ? e : n[0].id),
        { tabs: n, selectedTab: p, onSelectTab: h }),
        [Q, ee] = i.useState(!0),
        et = L.h.useField("trackedOpenedFromExternalEntrypoint"),
        el = L.h.useField("sessionId"),
        es = (0, c.bG)([y.default], () => y.default.getCurrentUser());
    (i.useEffect(() => {
        if (!et && null == el) {
            let e = (0, f.YP)();
            (b.default.track(D.HAw.APP_DIRECTORY_OPENED, { source: L.sW.EXTERNAL, session_id: e, user_id: es?.id }),
                L.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: L.sW.EXTERNAL },
                    guildId: null,
                }));
        }
    }, [el, et, es?.id]),
        i.useEffect(() => {
            _.bW();
        }, []),
        i.useEffect(() => {
            F && _.wD();
        }, [F]),
        i.useEffect(() => L.tS.setState({ lastItem: M }), [M]));
    let ei = null != z,
        en = M?.type === L.ev.SEARCH,
        {
            searchQuery: ea,
            onSearchTextChange: er,
            onClearSearch: eo,
            onSearchSubmit: ec,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                l = E.A.useField("query");
            i.useEffect(() => E.A.setState({ query: t }), [t]);
            let s = i.useCallback((e) => {
                    E.A.setState({ query: e });
                }, []),
                n = i.useCallback(() => {
                    E.A.setState({ query: "" });
                }, []),
                a = i.useCallback(() => {
                    let e = G();
                    (O(D.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: l,
                        category: e.name,
                        current_page: L.ev.HOME,
                        category_id: e.id,
                    }),
                        V({ query: l }));
                }, [l]);
            return { searchQuery: l, onSearchTextChange: s, onClearSearch: n, onSearchSubmit: a };
        })({ initialQuery: Y ?? "" }),
        ed = E.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: eh,
            tabsClassName: ep,
        } = (0, j.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === ea.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => E.A.setState({ searchBarState: e }),
        }),
        eg = i.useCallback(
            (e) => {
                (J(e), en && eo(), U());
            },
            [en, eo, J, U],
        ),
        ex = i.useCallback(
            (e) =>
                (function (e) {
                    let { applicationId: t } = e,
                        l = { previousView: (0, L.R4)() };
                    (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: l });
                })({ applicationId: e }),
            [],
        ),
        ej = ei || en,
        ev = i.useCallback(() => {
            if (null != (0, L.Bn)()) (0, I.aX)();
            else {
                let e;
                ((e = { previousView: (0, L.R4)() }), (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS, { state: e }));
            }
        }, []),
        eA = i.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: l, scrollHeight: s, location: i } = e;
                    t > 0 &&
                        O(D.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + l) / s,
                            current_page: i,
                        });
                }, 200),
            [],
        ),
        eC = i.useCallback(
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
    return (0, s.jsxs)("div", {
        className: a()(sB.nw, { [sB.Yz]: g }),
        children: [
            g ? (0, s.jsx)(sX, {}) : null,
            (0, s.jsxs)("div", {
                className: sB.WH,
                children: [
                    (0, s.jsxs)(v.Ay, {
                        variant: ej ? v.Z5.RELATIVE : v.Z5.OVERLAY,
                        children: [
                            !ej && (0, s.jsx)(v.ns, { scrollPosition: T }),
                            ei
                                ? (0, s.jsx)(sY, { applicationId: z, hideDetailHeaderButtons: Q, onClickBack: ev })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          en
                                              ? (0, s.jsx)(v.XQ, { icon: d.Z, onClick: ev })
                                              : (0, s.jsx)(v.T4, { icon: u.k }),
                                          en
                                              ? (0, s.jsx)(m.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: sB.wL,
                                                    children:
                                                        null != Y && "" !== Y
                                                            ? w.intl.formatToPlainString(w.t.zHdzqW, { query: Y })
                                                            : w.intl.formatToPlainString(w.t.Qhj5Br, {
                                                                  categoryName: $?.name ?? w.intl.string(w.t.E407b7),
                                                              }),
                                                })
                                              : (0, s.jsx)(A.A, {
                                                    className: ep,
                                                    tabs: Z,
                                                    selectedTab: q,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: eu,
                                                }),
                                          (0, s.jsx)(C.A, {
                                              query: ea,
                                              placeholder: w.intl.string(w.t["5h0QOP"]),
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
                    ei
                        ? (0, s.jsx)(sv, {
                              onScroll: (e) => eC(e, L.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: z,
                              initialTab: B,
                              onButtonsVisibilityChange: ee,
                          })
                        : en
                          ? (0, s.jsx)(sz, { onSelectApplication: ex, onScroll: (e) => eC(e, L.ev.SEARCH) })
                          : "0" === q
                            ? (0, s.jsx)(sT, { onScroll: (e) => eC(e, L.ev.HOME), onSelectApplication: ex })
                            : (0, s.jsx)(eE, {
                                  tabId: Number(q),
                                  onScroll: (e) => eC(e, L.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
