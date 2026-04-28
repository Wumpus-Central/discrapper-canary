i.r(e), i.d(e, { default: () => eF });
var n = i(627968),
    l = i(64700),
    s = i(873263),
    a = i(820284),
    r = i(549711),
    o = i(726249),
    c = i(210714),
    d = i(503698),
    h = i.n(d),
    u = i(689175),
    p = i(228366),
    A = i(944791),
    m = i(712963),
    g = i(661439),
    x = i(970672),
    f = i(621466),
    y = i(17928),
    I = i(892547),
    N = i(192308);
function T(t) {
    p.h.dispatch({ type: "LIBRARY_APPLICATION_FILTER_UPDATE", query: t });
}
function C(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    p.h.dispatch({ type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE", key: t, isKeyboardEvent: e });
}
var R = i(186111),
    S = i(742077),
    P = i(268387),
    j = i(715671),
    w = i(652215),
    _ = i(650583),
    v = i(985018),
    L = i(326112);
class E extends l.Component {
    searchBarRef = l.createRef();
    state = { focused: !1 };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        p.h.wait(() => C(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        C(null), T("");
    }
    focusInput() {
        let { searchBarRef: t } = this;
        null != t && t.current?.focus();
    }
    updateActiveRow(t) {
        let { applicationViewItems: e, activeRowKey: i } = this.props,
            n = e.findIndex((t) => t.key === i),
            l = 0;
        n >= 0 && (l = (n + t) % e.length) < 0 && (l = e.length - 1);
        let s = e[l];
        C(null != s ? s.key : null, !0);
    }
    handleKeyDown = (t) => {
        let { activeRowKey: e, hasModalOpen: i, applicationViewItems: n } = this.props,
            { searchBarRef: l } = this;
        if (i || t.ctrlKey || t.altKey || t.metaKey || null == l) return;
        let s = (0, f.BF)(t)?.activeElement;
        if (!(s !== l.current && (0, f.Cw)(s)))
            switch (t.key) {
                case _.dh.ESCAPE:
                    t.target !== l.current ? this.reset() : null != l.current && l.current?.blur();
                    break;
                case _.dh.ENTER:
                    if (null != e) {
                        t.preventDefault();
                        let i = n.find((t) => t.key === e);
                        if (null == i) return;
                        let l = i.libraryApplication;
                        j.performDefaultLibraryApplicationAction(l, {
                            analyticsParams: {
                                source: w.ThZ.APPLICATION_LIBRARY,
                                location: {
                                    page: w.liQ.LIBRARY,
                                    section: w.JJy.LIBRARY_APPLICATION_LIST,
                                    object: w.ZSU.BUTTON_CTA,
                                },
                            },
                        });
                    }
                    break;
                case _.dh.ARROW_DOWN:
                case _.dh.ARROW_UP:
                    t.preventDefault(), t.stopPropagation(), this.updateActiveRow(t.key === _.dh.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != l.current && t.target !== l.current && l.current?.focus();
            }
    };
    render() {
        let { filterQuery: t } = this.props,
            { focused: e } = this.state;
        return (0, n.jsx)("div", {
            className: h()({ [L.sw]: !0, [L.in]: e }),
            children: (0, n.jsx)(I.I, {
                ref: this.searchBarRef,
                onChange: T,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: t,
                placeholder: v.intl.string(v.t.aSxWSo),
            }),
        });
    }
}
function b() {
    let t = (0, y.bG)([R.A], () => R.A.hasLayers()),
        e = (0, N.useModalsStore)(N.hasAnyModalOpenSelector);
    return (0, n.jsx)(E, {
        activeRowKey: (0, y.bG)([P.A], () => P.A.activeRowKey),
        hasModalOpen: e || t,
        filterQuery: (0, y.bG)([S.A], () => S.A.applicationFilterQuery),
        applicationViewItems: (0, y.bG)([S.A], () => S.A.sortedFilteredLibraryApplicationViewItems),
    });
}
var D = i(657044),
    M = i(761508),
    B = i(742589),
    O = i(976860),
    U = i(954571),
    k = i(144914),
    V = i(256855);
let G = (0, k.S)() || !1,
    H = l.memo(function (t) {
        let { currentRoute: e, renderToolbar: i } = t,
            s = l.useContext(U.AnalyticsContext),
            a = G || e === w.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, n.jsxs)(B.A, {
            className: V.$,
            toolbar: i?.(),
            children: [
                (0, n.jsx)(B.A.Icon, { icon: D._, "aria-hidden": !0 }),
                (0, n.jsx)(B.A.Title, { children: v.intl.string(v.t.cw57ar) }),
                (0, n.jsx)(B.A.Divider, {}),
                (0, n.jsxs)(M.V, {
                    type: "top-pill",
                    selectedItem: e,
                    onItemSelect: function (t) {
                        t !== e &&
                            (0, O.pX)(t, {
                                state: {
                                    analyticsSource: {
                                        ...s.location,
                                        section: w.JJy.TABS,
                                        object: w.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            });
                    },
                    children: [
                        (0, n.jsx)(M.V.Item, { id: w.BVt.APPLICATION_LIBRARY, children: v.intl.string(v.t.p7ARTB) }),
                        a
                            ? (0, n.jsx)(M.V.Item, {
                                  id: w.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: v.intl.string(v.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
var K = i(451988),
    F = i(990078),
    X = i(319060),
    z = i(403581),
    W = i(952270),
    Y = i(1215),
    J = i(442433),
    Q = i(979604),
    q = i(235986),
    $ = i(596719),
    Z = i(137177),
    tt = i(290987),
    te = i(674378),
    ti = i(240248),
    tn = i(565787),
    tl = i(95635),
    ts = i(32880),
    ta = i(465797),
    tr = i(953727);
let to = (t) => {
    let { id: e, startColor: i, stopColor: l, color: s, stop: a } = t;
    return (0, n.jsxs)("linearGradient", {
        id: e,
        children: [
            (0, n.jsx)("stop", { offset: "0", stopColor: i }),
            (0, n.jsx)("stop", { offset: a, stopColor: l }),
            (0, n.jsx)("stop", { offset: a, stopColor: s }),
            (0, n.jsx)("stop", { offset: "1", stopColor: s }),
        ],
    });
};
function tc(t) {
    return `CloudDone-${t}`;
}
let td = (0, tn.k)(function (t) {
        let { width: e = 24, height: i = 24, color: l = "currentColor", foreground: s, ...a } = t;
        return (0, n.jsx)("svg", {
            ...(0, tr.A)(a),
            width: e,
            height: i,
            viewBox: "0 0 24 24",
            children: (0, n.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    (0, n.jsx)("path", {
                        className: s,
                        fill: l,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
                    }),
                    (0, n.jsx)("rect", { width: "24", height: "24" }),
                ],
            }),
        });
    }),
    th = (0, tn.k)(function (t) {
        let { width: e = 24, height: i = 24, color: l = "currentColor", foreground: s, gradientConfig: a, ...r } = t,
            o = null;
        return (
            null != a && (o = (0, n.jsx)(to, { ...a, color: l, id: tc(a.id) })),
            (0, n.jsxs)("svg", {
                ...(0, tr.A)(r),
                width: e,
                height: i,
                viewBox: "0 0 24 24",
                children: [
                    (0, n.jsx)("defs", { children: o }),
                    (0, n.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    (0, n.jsx)("path", {
                        fill: null != a ? `url(#${tc(a.id)})` : l,
                        className: s,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z",
                    }),
                ],
            })
        );
    }),
    tu = new Set([w.VX0.PUSHING, w.VX0.PULLING]),
    tp = Object.freeze({
        [w.VX0.DONE]: td,
        [w.VX0.PLANNING]: td,
        [w.VX0.PREPARING]: td,
        [w.VX0.PUSHING]: tl.J,
        [w.VX0.PULLING]: ts.s,
        [w.VX0.CONFLICT]: td,
        [w.VX0.ERROR]: td,
    });
class tA extends l.PureComponent {
    _doneTimer = new K.Ep();
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(t) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === w.VX0.DONE &&
            null != this.props.cloudSyncState.timestamp &&
            (null == t.cloudSyncState || null == t.cloudSyncState.timestamp) &&
            this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2e3, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: t } = this.props;
        if (null != t && t.type === w.VX0.DONE) {
            let e = t.timestamp;
            return null != e && Date.now() - e <= 2e3;
        }
        return !1;
    }
    getStop(t, e) {
        if (e) return 1;
        if (t.type === w.VX0.PUSHING || t.type === w.VX0.PULLING) {
            let { progress: e, total: i } = t;
            return e / i;
        }
        return 0;
    }
    getTooltip(t, e) {
        switch (t.type) {
            case w.VX0.DONE:
                if (e) return v.intl.string(v.t.atpo0W);
                return v.intl.string(v.t.ZCw6zh);
            case w.VX0.CONFLICT:
            case w.VX0.ERROR:
                return v.intl.string(v.t.ZCw6zh);
            case w.VX0.PLANNING:
                return v.intl.string(v.t.ERQ0VA);
            case w.VX0.PREPARING:
                return v.intl.string(v.t.n5feu3);
            case w.VX0.PUSHING:
                return v.intl.string(v.t.oCBh0J);
            case w.VX0.PULLING:
                return v.intl.string(v.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: t, libraryApplication: e, className: i } = this.props,
            l = null == t ? { type: w.VX0.DONE } : t,
            s = this.getIsRecentlySynced();
        (tu.has(l.type) || s) && (e.id, this.getStop(l, s));
        let a = s ? th : tp[l.type];
        return (0, n.jsx)(F.m, { text: this.getTooltip(l, s), children: (0, n.jsx)(a, { className: i }) });
    }
}
let tm = y.Ay.connectStores([ta.A], (t) => {
    let { libraryApplication: e } = t;
    return { cloudSyncState: ta.A.getState(e.id, e.branchId) };
})(tA);
var tg = i(855189);
let tx = (0, ti.xI)(X.A.GAME_LIST_ROW_MIN_HEIGHT),
    tf = (0, ti.xI)(X.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    ty = Object.freeze({ [w.DpB.PLATFORM]: "Platform", [w.DpB.LAST_PLAYED]: "Last Played", [w.DpB.NAME]: "Name" }),
    tI = (t) => {
        let { flag: e, icon: i, item: l, tooltip: s } = t,
            a = l.libraryApplication.hasFlag(e);
        return (0, n.jsx)(F.m, { text: s, children: (0, n.jsx)(i, { className: h()(tg.up, { [tg.R]: !a }) }) });
    },
    tN = [
        {
            key: w.DpB.NAME,
            renderHeader: () => v.intl.string(v.t.dBfWfc),
            sort: !0,
            cellClassName: tg.UQ,
            bodyCellClassName: tg.SJ,
            render: (t) =>
                (0, n.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, n.jsx)(Z.A, { game: t.application, size: Z.M.SMALL, className: tg.Gt }),
                        (0, n.jsxs)("div", {
                            className: tg.Ot,
                            children: [
                                (0, n.jsx)("div", {
                                    className: tg.TF,
                                    children: t.libraryApplication.getBranchedName(t.application),
                                }),
                                t.libraryApplication.hasFlag(w.hM6.PREMIUM)
                                    ? (0, n.jsx)(F.m, {
                                          text: v.intl.string(v.t.tG2SzG),
                                          children: (0, n.jsx)(z.t, {
                                              size: "md",
                                              color: "currentColor",
                                              className: tg.oU,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: w.DpB.PLATFORM,
            renderHeader: () => v.intl.string(v.t.YR4cHH),
            sort: !0,
            cellClassName: tg.AA,
            bodyCellClassName: tg.iV,
            render(t) {
                let e = t.libraryApplication.getDistributor();
                return (0, n.jsx)(q.A, {
                    align: q.A.Align.CENTER,
                    children: null != e ? w.gG4[e] : v.intl.string(v.t["F+l3Jt"]),
                });
            },
        },
        {
            key: w.DpB.LAST_PLAYED,
            renderHeader: () => v.intl.string(v.t.FDDyjS),
            sort: !0,
            cellClassName: tg.SX,
            bodyCellClassName: tg.iV,
            render(t) {
                let e;
                return (
                    (e = t.isRunning
                        ? v.intl.string(v.t.Md326p)
                        : t.isNew
                          ? v.intl.string(v.t["+F0Tho"])
                          : 0 !== t.lastPlayed
                            ? (0, n.jsx)(tt.Ay, {
                                  end: t.lastPlayed,
                                  location: tt.Ay.Locations.GAME_LIBRARY_LAST_PLAYED,
                              })
                            : v.intl.string(v.t.EoWLru)),
                    (0, n.jsx)(q.A, { align: q.A.Align.CENTER, className: h()({ [tg.g3]: t.isNew }), children: e })
                );
            },
        },
        {
            key: w.DpB.ACTIONS,
            renderHeader: () => null,
            cellClassName: tg.AT,
            render(t, e, i) {
                var s, a;
                if (null == e) throw Error("No cell props defined.");
                let r = t.key === e.activeRowKey;
                return (0, n.jsxs)(l.Fragment, {
                    children: [
                        (0, n.jsxs)("div", {
                            className: tg.nU,
                            children: [
                                (0, n.jsx)(tI, {
                                    flag: w.hM6.PRIVATE,
                                    item: t,
                                    icon: W.G,
                                    tooltip: v.intl.string(v.t.NozAop),
                                }),
                                (0, n.jsx)(tI, {
                                    flag: w.hM6.OVERLAY_DISABLED,
                                    item: t,
                                    icon: Y.n,
                                    tooltip: v.intl.string(v.t.Az9eqn),
                                }),
                                (0, n.jsx)(tm, {
                                    className: h()(tg.up, { [tg.R]: !t.supportsCloudSync }),
                                    libraryApplication: t.libraryApplication,
                                }),
                            ],
                        }),
                        (0, te.XZ)(t.libraryApplication)
                            ? (0, n.jsx)(Q.A, {
                                  analyticsListSort:
                                      ((s = e.sortKey),
                                      (a = e.sortDirection),
                                      `${ty[s]} ${a === w.tSW.ASCENDING ? "ASC" : "DESC"}`),
                                  analyticsListIndex: i,
                                  source: w.ThZ.APPLICATION_LIBRARY,
                                  libraryApplication: t.libraryApplication,
                                  playButtonVariant: r ? "primary" : "secondary",
                                  size: "sm",
                                  hideProgress: null != t.defaultAction,
                                  onDropdownOpen: () => null != e && e.setActiveRowKey(t),
                                  onDropdownClose: () => null != e && e.clearActiveRowKey(),
                              })
                            : (0, n.jsx)("div", { children: "deprecated!" }),
                    ],
                });
            },
        },
    ],
    tT = (t) => {
        let {
                item: e,
                activeRowKey: i,
                highlightedApplicationKey: l,
                onMouseEnter: s,
                onMouseLeave: a,
                onContextMenu: r,
                setRef: o,
                ...c
            } = t,
            d = e.key === i,
            u = e.key === l;
        return (0, n.jsx)("div", {
            className: h()({ [tg.eO]: d && !u, [tg.HM]: u, [tg.Ob]: !d && !u, [tg.ic]: !d && !e.isLaunchable }),
            ref: (t) => {
                o(t, e.key);
            },
            onMouseEnter: () => s(e),
            onMouseLeave: a,
            onContextMenu: (t) => r(t, e),
            children: (0, n.jsx)("div", { ...c }),
        });
    };
class tC extends l.PureComponent {
    static defaultProps = { stickyHeader: !1 };
    _didUnmount = !1;
    _rowRefs = {};
    state = {
        overflowMenuRowKey: null,
        highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null,
    };
    componentDidMount() {
        let { fetched: t } = this.props;
        t && (this.handleHighlightedApplicationKey(), this.trackViewed());
    }
    componentWillUnmount() {
        this._didUnmount = !0;
    }
    componentDidUpdate(t) {
        !t.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
        let e = this.props.activeRowKey;
        if (null != e && t.activeRowKey !== e && this.props.isNavigatingByKeyboard) {
            let t = this._rowRefs[e];
            null != t && (p.h.wait(J.Z_), this.props.scrollToRow(t, tx));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: t } = this.state;
        null != t &&
            null != this._rowRefs[t] &&
            (this.props.scrollToRow(this._rowRefs[t], tx),
            new K.Ep().start(tf, () => {
                this._didUnmount || this.setState({ highlightedApplicationKey: null });
            }));
    }
    trackViewed() {
        let t = {
                num_applications_total: 0,
                num_applications_discord: 0,
                num_applications_steam: 0,
                num_applications_battlenet: 0,
                num_applications_twitch: 0,
                num_applications_uplay: 0,
                num_applications_origin: 0,
                num_applications_gog: 0,
                num_applications_epic: 0,
            },
            { analyticsContext: e, applicationViewItems: i } = this.props;
        for (let e of i) {
            switch (e.libraryApplication.getDistributor()) {
                case w.d3x.DISCORD:
                    t.num_applications_discord++;
                    break;
                case w.d3x.STEAM:
                    t.num_applications_steam++;
                    break;
                case w.d3x.BATTLENET:
                    t.num_applications_battlenet++;
                    break;
                case w.d3x.TWITCH:
                    t.num_applications_twitch++;
                    break;
                case w.d3x.UPLAY:
                    t.num_applications_uplay++;
                    break;
                case w.d3x.ORIGIN:
                    t.num_applications_origin++;
                    break;
                case w.d3x.GOG:
                    t.num_applications_gog++;
                    break;
                case w.d3x.EPIC:
                    t.num_applications_epic++;
            }
            t.num_applications_total++;
        }
        U.default.track(w.HAw.LIBRARY_VIEWED, { ...t, load_id: e.loadId });
    }
    setActiveRowKey = (t) => {
        this.setState({ overflowMenuRowKey: t.key });
    };
    clearActiveRowKey = () => {
        this._didUnmount || this.setState({ overflowMenuRowKey: null });
    };
    handleRowMouseEnter = (t) => {
        this.props.isNavigatingByKeyboard || C(t.key);
    };
    handleRowMouseLeave = () => {
        this.props.isNavigatingByKeyboard || C(null);
    };
    setRowRef = (t, e) => {
        this._rowRefs[e] = t;
    };
    handleApplicationContextMenu = (t, e) => {
        this.setActiveRowKey(e);
        let { analyticsContext: l } = this.props;
        (0, J.L3)(
            t,
            async () => {
                let { default: t } = await Promise.all([i.e("15687"), i.e("45794")]).then(i.bind(i, 451897));
                return (i) =>
                    (0, n.jsx)(t, {
                        ...i,
                        applicationId: e.libraryApplication.id,
                        branchId: e.libraryApplication.branchId,
                        analyticsContext: l,
                    });
            },
            { onClose: this.clearActiveRowKey },
        );
    };
    handleSort(t, e) {
        p.h.dispatch({ type: "LIBRARY_TABLE_SORT_UPDATE", key: t, direction: e });
    }
    renderImportHelp() {
        let t,
            { applicationViewItems: e, filterQuery: i } = this.props;
        return e.length > 0
            ? null
            : ((t = "" !== i ? v.intl.format(v.t["4Q1TAr"], { query: i }) : v.intl.string(v.t["0Y+0PY"])),
              (0, n.jsxs)("div", {
                  className: tg.mv,
                  children: [
                      (0, n.jsx)("div", { className: tg.Zd }),
                      (0, n.jsx)(q.A, {
                          grow: 0,
                          shrink: 0,
                          direction: q.A.Direction.VERTICAL,
                          children: (0, n.jsxs)("div", {
                              className: tg.q6,
                              children: [
                                  (0, n.jsx)("div", { className: tg.ks, children: v.intl.string(v.t.Lw8X2j) }),
                                  (0, n.jsx)("div", { className: tg.Li, children: t }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: t, sortDirection: e, applicationViewItems: i, activeRowKey: s, stickyHeader: a } = this.props,
            { overflowMenuRowKey: r, highlightedApplicationKey: o } = this.state;
        return (0, n.jsxs)(l.Fragment, {
            children: [
                i.length > 0
                    ? (0, n.jsx)($.A, {
                          columns: tN,
                          data: i,
                          sortData: !1,
                          rowComponent: tT,
                          className: tg.tp,
                          headerClassName: a ? tg.ln : tg.wx,
                          headerCellClassName: tg.e4,
                          sortedHeaderCellClassName: tg.dm,
                          bodyCellClassName: tg.hC,
                          rowClassName: tg.G9,
                          sortKey: t,
                          sortDirection: e,
                          stickyHeader: a,
                          rowProps: {
                              activeRowKey: r ?? s,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: r ?? s,
                              onContextMenu: this.handleApplicationContextMenu,
                              setActiveRowKey: this.setActiveRowKey,
                              clearActiveRowKey: this.clearActiveRowKey,
                              sortKey: t,
                              sortDirection: e,
                          },
                          onSort: this.handleSort,
                      })
                    : null,
                this.renderImportHelp(),
            ],
        });
    }
}
function tR(t) {
    let e = l.useContext(U.AnalyticsContext),
        i = (0, s.zy)(),
        {
            applicationViewItems: a,
            filterQuery: r,
            fetched: o,
        } = (0, y.cf)([S.A], () => ({
            applicationViewItems: S.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: S.A.applicationFilterQuery,
            fetched: S.A.hasFetchedApplications,
        })),
        {
            sortKey: c,
            sortDirection: d,
            activeRowKey: h,
            isNavigatingByKeyboard: u,
        } = (0, y.cf)([P.A], () => ({
            sortKey: P.A.sortKey,
            sortDirection: P.A.sortDirection,
            activeRowKey: P.A.activeRowKey,
            isNavigatingByKeyboard: P.A.isNavigatingByKeyboard,
        }));
    return (0, n.jsx)(tC, {
        ...t,
        analyticsContext: e,
        location: i,
        applicationViewItems: a,
        filterQuery: r,
        fetched: o,
        sortKey: c,
        sortDirection: d,
        activeRowKey: h,
        isNavigatingByKeyboard: u,
    });
}
i(321073);
var tS = i(735438),
    tP = i.n(tS),
    tj = i(408278),
    tw = i(661531),
    t_ = i(462887),
    tv = i(5373),
    tL = i(248530),
    tE = i(782134),
    tb = i(113494),
    tD = i(872351),
    tM = i(789645),
    tB = i(92077),
    tO = i(707606),
    tU = i(456412),
    tk = i(587895),
    tV = i(363195),
    tG = i(189081),
    tH = i(340829),
    tK = i(966846),
    tF = i(531685),
    tX = i(255438),
    tz = i(505806),
    tW = i(998304),
    tY = i(936593);
class tJ extends l.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = l.createRef();
    animationFrameRequestId;
    static defaultProps = { animate: !0 };
    onDataUpdate(t, e) {
        let { maxValue: i, data: n, animate: l } = this.props,
            s = null == t || (t.data !== e.data && !tP().isEqual(t.data, e.data));
        if (
            (s && ((this.dataChangedAt = performance.now()), (this.maxValue = null != i ? i : Math.max(...n))),
            s || null == t || (!t.animate && l) || t.color !== this.props.color)
        ) {
            let t = tW.E2(this.props.color);
            (this.fillColor = `rgba(${t.r}, ${t.g}, ${t.b}, 0.5)`),
                window.cancelAnimationFrame(this.animationFrameRequestId),
                (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
        }
    }
    componentDidMount() {
        (this.animationFrameRequestId = 0), this.onDataUpdate(null, this.props);
    }
    componentDidUpdate(t) {
        this.onDataUpdate(t, this.props);
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = 0);
    }
    updateAnimation = (t) => {
        let e,
            i,
            n = this.canvas.current;
        if (null == n) return;
        let {
            data: l,
            updateInterval: s,
            color: a,
            numUpdatesToShow: r,
            lineWidth: o,
            animate: c,
            gradientStopColor: d,
        } = this.props;
        if (l.length < 2) return;
        let h = Math.max(Math.min((t - this.dataChangedAt) / s, 1), 0),
            u = n.getContext("2d"),
            p = this.maxValue;
        (u.strokeStyle = a), (u.lineWidth = o);
        let A = n.height - u.lineWidth,
            m = u.createLinearGradient(0, 0, 0, A);
        if (null != d) m.addColorStop(0, d);
        else {
            let { r: t, g: e, b: i } = tW.E2(a);
            m.addColorStop(0, `rgba(${t}, ${e}, ${i}, 0)`);
        }
        m.addColorStop(1, this.fillColor), (u.fillStyle = m);
        let g = l.length >= r ? r : l.length;
        u.setTransform(1, 0, 0, -1, 0, n.height),
            u.clearRect(0, 0, n.width, n.height),
            u.translate(0, 0.5 * u.lineWidth);
        let x = Math.floor(n.width / (g - 3)),
            f = 0.5 * x;
        u.translate(x - x * h, 0), u.beginPath();
        let y = -x;
        l.forEach((t, n) => {
            (e = { x: y, y: (A * t) / p }),
                0 === n ? u.moveTo(e.x, e.y) : u.bezierCurveTo(i.x + f, i.y, e.x - f, e.y, e.x, e.y),
                (i = e),
                (y += x);
        }),
            u.stroke(),
            u.lineTo(y - x, 0),
            u.lineTo(0, 0),
            u.fill(),
            c && h < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
    };
    render() {
        let { className: t, pixelWidth: e, pixelHeight: i } = this.props;
        return (0, n.jsx)("div", {
            className: t,
            children: (0, n.jsx)("canvas", { ref: this.canvas, className: tY.J, width: e, height: i }),
        });
    }
}
var tQ = i(743827);
let tq = function (t) {
    let { title: e, className: i, color: l, animate: s, getHistoricalTotalBytes: a } = t;
    return (0, n.jsx)(tz.A, {
        getHistoricalTotalBytes: a,
        children: (t, a, r) => {
            var o;
            return (0, n.jsx)("div", {
                className: h()(tQ.dm, i),
                children: (0, n.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, n.jsxs)(q.A, {
                            className: tQ.Qq,
                            direction: q.A.Direction.VERTICAL,
                            children: [
                                (0, n.jsx)("div", { className: tQ.DD, children: e }),
                                (0, n.jsx)("div", {
                                    className: tQ.TS,
                                    children:
                                        (o = (t[t.length - 1] / a) * 1e3) > 1e3
                                            ? v.intl.formatToPlainString(v.t["WU+gTX"], { size: Math.round(o / 1e3) })
                                            : v.intl.formatToPlainString(v.t.wnF6TH, { size: Math.round(o) }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: tQ.MQ,
                            children: (0, n.jsx)(tJ, {
                                data: t,
                                maxValue: Math.max(Math.max.apply(null, t), 1e3),
                                className: tQ.CD,
                                updateInterval: a,
                                color: l,
                                numUpdatesToShow: r,
                                animate: s,
                                pixelWidth: 600,
                                pixelHeight: 48,
                                lineWidth: 4,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
};
var t$ = i(692275);
let tZ = (t) => {
        let { className: e, children: i, onContextMenu: l, item: s } = t;
        return (0, n.jsx)("div", { className: e, onContextMenu: (t) => l(t, s), children: i });
    },
    t0 = [tw.A.unsafe_rawColors.BLUE_345.css, tw.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    t1 = (t) => {
        let { tooltip: e, onClick: i, icon: l } = t;
        return (0, n.jsx)(F.m, {
            text: e,
            children: (0, n.jsx)(tj.K, { "aria-label": e, variant: "secondary", icon: l, onClick: i, size: "sm" }),
        });
    };
function t5(t, e) {
    switch (e) {
        case w.OQC.POST_INSTALL_SCRIPTS:
        case w.OQC.PLANNING:
        case w.OQC.FINALIZING:
        case w.OQC.ALLOCATING_DISK:
            return `${t}`;
        default:
            return (0, tX.Xq)(t, { useKibibytes: !0 });
    }
}
let t4 = {
    [w.WTw.INSTALLING]: {
        [tt.pJ.NONE]: (t, e, i, n) => v.intl.formatToPlainString(v.t.JfJt9d, { percent: t, progress: e, total: i }),
        [tt.pJ.SECONDS]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t["1z3c6e"], { percent: t, progress: e, total: i, timeRemaining: n }),
        [tt.pJ.MINUTES]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t.PCX506, { percent: t, progress: e, total: i, timeRemaining: n }),
        [tt.pJ.HOURS]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t["3VG9s1"], { percent: t, progress: e, total: i, timeRemaining: n }),
    },
    [w.WTw.UPDATING]: {
        [tt.pJ.NONE]: (t, e, i, n) => v.intl.formatToPlainString(v.t.JsqXXL, { percent: t, progress: e, total: i }),
        [tt.pJ.SECONDS]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t["3BvVec"], { percent: t, progress: e, total: i, timeRemaining: n }),
        [tt.pJ.MINUTES]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t["rwULn+"], { percent: t, progress: e, total: i, timeRemaining: n }),
        [tt.pJ.HOURS]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t.adcitP, { percent: t, progress: e, total: i, timeRemaining: n }),
    },
    [w.WTw.REPAIRING]: {
        [tt.pJ.NONE]: (t, e, i, n) => v.intl.formatToPlainString(v.t.JfJt9d, { percent: t, progress: e, total: i }),
        [tt.pJ.SECONDS]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t["1z3c6e"], { percent: t, progress: e, total: i, timeRemaining: n }),
        [tt.pJ.MINUTES]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t.PCX506, { percent: t, progress: e, total: i, timeRemaining: n }),
        [tt.pJ.HOURS]: (t, e, i, n) =>
            v.intl.formatToPlainString(v.t["3VG9s1"], { percent: t, progress: e, total: i, timeRemaining: n }),
    },
};
function t2(t, e, i, n, l) {
    let s = t4[e],
        a = null != s ? Object.keys(s) : [],
        { unit: r, time: o } = (0, tt.$l)(null != t ? t / 60 : null, a);
    if (null != s && null != r) {
        let t = s[r];
        return null != t ? t(i, n, l, o) : null;
    }
    return null;
}
function t6(t) {
    let { type: e, stage: i, percent: n, progress: l, total: s, secondsRemaining: a } = t,
        r = t5(s, i),
        o = t5(l, i);
    switch (i) {
        case w.OQC.QUEUED:
            if (0 === l) return v.intl.string(v.t.RpfBqd);
            return v.intl.formatToPlainString(v.t.uNjCXZ, { percent: n, progress: o, total: r });
        case w.OQC.PLANNING:
            return v.intl.formatToPlainString(v.t.sfuCUb, { percent: n });
        case w.OQC.ALLOCATING_DISK:
            return v.intl.formatToPlainString(v.t.XigoJ9, { percent: n });
        case w.OQC.PATCHING:
            return t2(a, e, n, o, r);
        case w.OQC.FINALIZING:
            return v.intl.formatToPlainString(v.t["6PHDUN"], { percent: n });
        case w.OQC.PAUSING:
            return v.intl.formatToPlainString(v.t.vjxhWo, { percent: n, progress: o, total: r });
        case w.OQC.VERIFYING:
            return v.intl.formatToPlainString(v.t.bbilvq, { percent: n, progress: o, total: r });
        case w.OQC.POST_INSTALL_SCRIPTS:
            return v.intl.formatToPlainString(v.t.c5vRUo, { percent: n, progress: o, total: r });
        case w.OQC.REPAIRING:
            if (e === w.WTw.REPAIRING) return t2(a, e, n, o, r);
            return v.intl.formatToPlainString(v.t.OCzETT, { percent: n, progress: o, total: r });
    }
    throw Error("Invalid Dispatch stage");
}
class t3 extends l.PureComponent {
    get isFocused() {
        let { cellProps: t } = this.props;
        return null != t && t.isFocused;
    }
    renderBody(t) {
        let { percent: e, foregroundColor: i, foregroundGradientColor: l, message: s } = t;
        return (0, n.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, n.jsx)(tv.i, {
                    percent: e,
                    size: tv.i.Sizes.SMALL,
                    foregroundColor: i,
                    foregroundGradientColor: null != l ? [l[0], l[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, n.jsx)("div", { className: t$.NO, children: null != s ? s : "" }),
            ],
        });
    }
    renderStackedProgress(t) {
        let { percents: e, message: i } = t;
        return (0, n.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, n.jsx)(tL.L, {
                    percents: e,
                    size: tL.L.Sizes.SMALL,
                    foregroundColors: t0,
                    animate: this.isFocused,
                }),
                (0, n.jsx)("div", { className: t$.NO, children: null != i ? i : "" }),
            ],
        });
    }
    renderFinished() {
        let { item: t } = this.props;
        return this.renderBody({
            message: v.intl.format(v.t.z1oxGO, { remove: () => tB.Vt(t.applicationId, t.branchId) }),
            foregroundColor: (0, t_.q)(t.theme)
                ? tw.A.unsafe_rawColors.PRIMARY_300.css
                : tw.A.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let t,
            e,
            {
                item: { state: i, theme: n },
            } = this.props;
        if (null != i) {
            let { progress: n, total: l, stage: s } = i;
            if (null != n && null != l) {
                let i = t5(l, s),
                    a = t5(n, s),
                    r = Math.floor((e = te.uA(n, l)));
                t =
                    s === w.OQC.PAUSING
                        ? v.intl.formatToPlainString(v.t.vjxhWo, { percent: r, progress: a, total: i })
                        : v.intl.formatToPlainString(v.t.voT3Bi, { percent: r, progress: a, total: i });
            }
        }
        return (
            (null == e || null == t) && ((e = 0), (t = v.intl.string(v.t["qS+iKY"]))),
            this.renderBody({
                percent: e,
                foregroundColor: (0, t_.q)(n)
                    ? tw.A.unsafe_rawColors.PRIMARY_300.css
                    : tw.A.unsafe_rawColors.PRIMARY_500.css,
                message: t,
            })
        );
    }
    renderPaused() {
        let {
            item: { state: t, theme: e },
        } = this.props;
        if (null == t) return null;
        let { progress: i, total: n } = t;
        if (null == i || null == n) return null;
        let l = te.uA(i, n),
            s = Math.floor(l),
            a =
                0 === i && 1 === n
                    ? v.intl.string(v.t["+pfsFX"])
                    : v.intl.formatToPlainString(v.t["+feX8S"], {
                          percent: s,
                          progress: (0, tX.Xq)(i),
                          total: (0, tX.Xq)(n),
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, t_.q)(e)
                ? tw.A.unsafe_rawColors.PRIMARY_300.css
                : tw.A.unsafe_rawColors.PRIMARY_500.css,
            percent: l,
        });
    }
    renderProgressPatchingBody = (t, e) => {
        let {
            item: { state: i },
        } = this.props;
        if (null == i) return null;
        let { stage: n, progress: l, total: s, type: a, readerProgress: r } = i;
        if (null == l || null == s || null == n) return null;
        let o = te.uA(l, s),
            c = te.uA(r ?? 0, s),
            d = (t[t.length - 1] / e) * 1e3,
            h = s - l,
            u = t6({
                type: a,
                stage: n,
                percent: Math.floor(o),
                progress: l,
                total: s,
                secondsRemaining: 0 !== d ? Math.max(1, h / d) : null,
            });
        return this.renderStackedProgress({ percents: [o, c], message: u });
    };
    renderProgressPatching() {
        return (0, n.jsx)(tz.A, {
            getHistoricalTotalBytes: tH.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: t } = this.props.item;
        if (null == t) return null;
        let { total: e, progress: i, stage: n, type: l } = t;
        if (null == e || null == i || null == n) return null;
        let s = te.uA(i, e),
            a = Math.floor(s);
        return this.renderBody({
            percent: s,
            message: t6({ type: l, stage: n, percent: a, progress: i, total: e }),
            foregroundColor: tw.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: t } = this.props.item;
        switch (null != t ? t.stage : null) {
            case w.OQC.PATCHING:
            case w.OQC.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: t, cellProps: e } = this.props;
        if (t.finished) return this.renderFinished();
        if (t.index > 0) return this.renderQueued();
        if (
            null != t.state &&
            (t.state.type === w.WTw.UPDATING || t.state.type === w.WTw.REPAIRING || t.state.type === w.WTw.INSTALLING)
        )
            if (null != e && e.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let t7 = () => (0, n.jsx)(t1, { icon: tE.u, tooltip: v.intl.string(v.t.YGm6SZ), onClick: () => tB.U() }),
    t9 = () => (0, n.jsx)(t1, { icon: tb.E, tooltip: v.intl.string(v.t.TVAd5J), onClick: () => tB.v7() }),
    t8 = (t) => {
        let { item: e } = t;
        return (0, n.jsx)(t1, {
            icon: tD.z,
            tooltip: v.intl.string(v.t["Eqb+LN"]),
            onClick: () => tB.BO(e.applicationId, e.branchId),
        });
    },
    et = (t) => {
        let { item: e } = t;
        return (0, n.jsx)(t1, {
            icon: tM.P,
            tooltip: v.intl.string(v.t["0lFmC9"]),
            onClick: () => tB.ZT(e.applicationId, e.branchId),
        });
    },
    ee = [
        {
            key: "name",
            cellClassName: t$.UQ,
            render: (t) =>
                (0, n.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, n.jsx)(Z.A, { game: t.application, className: t$.__invalid_gameIcon, size: Z.M.SMALL }),
                        (0, n.jsx)("div", { className: t$.TF, children: t.application.name }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: t$.Ay,
            headerCellClassName: t$.VD,
            bodyCellClassName: t$.so,
            render: (t, e) => (0, n.jsx)(t3, { item: t, cellProps: e }),
        },
        {
            key: "actions",
            cellClassName: t$.AT,
            render(t, e) {
                let i, l;
                return (
                    t.finished
                        ? (i =
                              null != t.libraryApplication
                                  ? (0, n.jsx)(Q.A, {
                                        libraryApplication: t.libraryApplication,
                                        size: "sm",
                                        source: w.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != t.state
                          ? t.state.type !== w.WTw.UP_TO_DATE &&
                            ((i =
                                t.index > 0
                                    ? (0, n.jsx)(t8, { item: t })
                                    : null != e && e.paused
                                      ? (0, n.jsx)(t7, {})
                                      : (0, n.jsx)(t9, { item: t })),
                            (l = (0, n.jsx)(et, { item: t })))
                          : (l = (0, n.jsx)(et, { item: t })),
                    (0, n.jsxs)("div", { className: t$.sG, children: [i, l] })
                );
            },
        },
    ];
class ei extends l.PureComponent {
    isUnmounted = !1;
    isTallerThanHalfViewport = !1;
    componentDidMount() {
        window.addEventListener("resize", this.throttledUpdateHeight);
    }
    componentDidUpdate(t) {
        this.props.height !== t.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let { applications: t } = this.props;
        t.forEach((t) => {
            t.finished &&
                p.h.wait(() => {
                    tB.Vt(t.applicationId, t.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    throttledUpdateHeight = tP().throttle(() => {
        if (this.isUnmounted) return;
        let { height: t, onHeightTallerThanHalfViewportChange: e } = this.props,
            i = t > window.innerHeight / 2;
        this.isTallerThanHalfViewport !== i && ((this.isTallerThanHalfViewport = i), e(i));
    }, 1e3);
    render() {
        let { applications: t, paused: e, isFocused: l, theme: s, analyticsContext: a } = this.props;
        return 0 === t.length
            ? null
            : (0, n.jsxs)("div", {
                  className: t$.xP,
                  children: [
                      (0, n.jsxs)("div", {
                          className: t$.U1,
                          children: [
                              (0, n.jsx)(tq, {
                                  className: h()(t$.e4, t$.Eg),
                                  title: v.intl.string(v.t.ytoXKr),
                                  getHistoricalTotalBytes: tH.A.getHistoricalTotalBytesDownloaded,
                                  color: tw.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: l,
                              }),
                              (0, n.jsx)(tq, {
                                  className: h()(t$.e4, t$.pn),
                                  title: v.intl.string(v.t.SjohhI),
                                  getHistoricalTotalBytes: tH.A.getHistoricalTotalBytesWritten,
                                  color: tw.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: l,
                              }),
                          ],
                      }),
                      (0, n.jsx)($.A, {
                          hasHeader: !1,
                          columns: ee,
                          data: t,
                          className: t$.tp,
                          rowClassName: t$.nM,
                          rowComponent: tZ,
                          cellProps: { paused: e, isFocused: l, theme: s },
                          rowProps: {
                              onContextMenu: (t, e) => {
                                  J.L3(t, async () => {
                                      let { default: t } = await Promise.all([i.e("15687"), i.e("45794")]).then(
                                          i.bind(i, 451897),
                                      );
                                      return (i) =>
                                          (0, n.jsx)(t, {
                                              ...i,
                                              applicationId: e.applicationId,
                                              branchId: e.branchId,
                                              analyticsContext: a,
                                          });
                                  });
                              },
                          },
                          bodyCellClassName: t$.Hn,
                      }),
                  ],
              });
    }
}
function en(t, e, i, n) {
    return t.reduce((t, l, s) => {
        let { applicationId: a, branchId: r } = l,
            o = i.getApplication(a),
            c = n.getState(a, r);
        return (
            null != o &&
                t.push({
                    key: `${a}:${r}`,
                    applicationId: a,
                    branchId: r,
                    state: c,
                    application: o,
                    libraryApplication: tG.A.getLibraryApplication(a, r),
                    finished: e,
                    index: s,
                }),
            t
        );
    }, []);
}
let el = (0, tU.A)(
    y.Ay.connectStores([tk.A, tH.A, tK.A, tV.A, tF.A], () => ({
        applications: [...en(tK.A.activeItems, !1, tk.A, tH.A), ...en(tK.A.finishedItems, !0, tk.A, tH.A)],
        paused: tK.A.paused,
        isFocused: tF.A.isFocused(),
        theme: tV.A.theme,
    }))((0, tO.A)(ei)),
);
var es = i(613057),
    ea = i(20438);
class er extends l.PureComponent {
    _scrollerRef = l.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        A.I(w.BVt.APPLICATION_LIBRARY),
            (0, x.h)(es.XK.LIBRARY),
            p.h.wait(() => (0, m.r)()),
            (0, g.X)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    handleHeightTallerThanHalfViewportChange = (t) => {
        this.setState({ includeUpdatesInScroller: t });
    };
    renderToolbar() {
        return (0, n.jsx)(b, {});
    }
    scrollToRow = (t, e) => {
        let i = this._scrollerRef.current;
        null != i
            ? (t.focus(), i.scrollIntoViewRect({ start: e, end: e }), (this._scrollToOnMount = null))
            : ((this._scrollToOnMount = t), (this._scrollToPadding = e));
    };
    render() {
        let { includeUpdatesInScroller: t } = this.state,
            e = (0, n.jsx)("div", {
                children: (0, n.jsx)(a.A, {
                    section: w.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, n.jsx)(el, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, n.jsxs)(l.Fragment, {
            children: [
                (0, n.jsx)(H, { currentRoute: w.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                t ? null : e,
                (0, n.jsxs)(u.Gt, {
                    className: h()(ea.k, ea.X),
                    ref: this._scrollerRef,
                    children: [
                        t ? e : null,
                        (0, n.jsx)(a.A, {
                            section: w.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, n.jsx)(tR, { stickyHeader: !t, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
var eo = i(665260),
    ec = i(939249),
    ed = i(534514),
    eh = i(331322),
    eu = i(243721),
    ep = i(404778),
    eA = i(364522),
    em = i(59636),
    eg = i(253932),
    ex = i(314116),
    ef = i(834730),
    ey = i(821609),
    eI = i(359778),
    eN = i(292666),
    eT = i(150934),
    eC = i(825484),
    eR = i(452027),
    eS = i(466472),
    eP = i(29160),
    ej = i(834911);
let ew = Math.ceil(2 * Math.PI * 20),
    e_ = (t) => {
        let e,
            i,
            l,
            s,
            { total: a, used: r } = t,
            o = Math.max(0, Math.min(1, r / a)),
            c = `${Math.floor(100 * o)}%`;
        return (0, n.jsx)(F.m, {
            text: v.intl.formatToPlainString(v.t["2eoRMh"], { used: c }),
            children: (0, n.jsxs)("div", {
                className: ej.iE,
                role: "progressbar",
                "aria-label": v.intl.formatToPlainString(v.t["2eoRMh"], { used: c }),
                children: [
                    (0, n.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: ej.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, n.jsx)("circle", { className: ej.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, n.jsx)("circle", {
                                className: ej.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((e = Math.round(-85 * o + 199)),
                                    (i = Math.round(-71 * o + 208)),
                                    (l = Math.round(-22 * o + 240)),
                                    `rgb(${e}, ${i}, ${l})`),
                                strokeDasharray: ((s = Math.floor(ew * o)), `${s}, ${ew}`),
                            }),
                        ],
                    }),
                    (0, n.jsx)("aside", { className: ej.Y3, "aria-hidden": !0, children: c }),
                ],
            }),
        });
    };
var ev = i(775228),
    eL = i(723702),
    eE = i(19575),
    eb = i(744832),
    eD = i(818050);
class eM extends l.PureComponent {
    state = { label: void 0, isDefault: null };
    handleStartEditing = () => {
        let { path: t, label: e, isDefault: i, onToggleEditing: n } = this.props;
        n(t), this.setState({ label: e, isDefault: i });
    };
    handleStopEditing = () => {
        let { onToggleEditing: t } = this.props;
        t(null), this.setState({ label: void 0, isDefault: null });
    };
    handleRemoveLocation = () => {
        (0, ex.A)({
            title: v.intl.string(v.t.iBUzS5),
            subtitle: v.intl.string(v.t["1XqeW2"]),
            confirmText: v.intl.string(v.t.iBUzS5),
            onConfirm: () => {
                this.handleStopEditing(), (0, eS.JN)(this.props.path);
            },
        });
    };
    handleSaveChanges = () => {
        (0, eS.a8)(this.props.path, {
            label: null != this.state.label ? this.state.label : this.props.label,
            isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
        }),
            this.handleStopEditing();
    };
    handleLabelChange = (t) => {
        this.setState({ label: t });
    };
    handleToggleDefault = () => {
        this.setState({ isDefault: !this.state.isDefault });
    };
    renderDiskUsageCircle() {
        let { metadata: t } = this.props;
        return null != t && null != t.availableKB && null != t.totalKB
            ? (0, n.jsx)(e_, { total: t.totalKB, used: t.totalKB - t.availableKB })
            : null;
    }
    renderViewing() {
        let t,
            e,
            { path: i, label: l, editingPath: s, isDefault: a, metadata: r } = this.props;
        return (
            null != r &&
                ((t = null != r.availableKB ? (0, tX.Xq)(r.availableKB, { useKibibytes: !0 }) : null),
                (e = null != r.totalKB ? (0, tX.Xq)(r.totalKB, { useKibibytes: !0 }) : null)),
            (0, n.jsxs)(q.A, {
                className: eb.ce,
                align: q.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, n.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: eb.__invalid_descriptionWrapper,
                        children: [
                            (0, n.jsxs)(q.A, {
                                align: q.A.Align.CENTER,
                                children: [
                                    (0, n.jsx)(ed.D, {
                                        className: eb.nM,
                                        variant: "heading-md/semibold",
                                        children: null != l ? l : ev.A.getLabelFromPath(i),
                                    }),
                                    a
                                        ? (0, n.jsx)("span", { className: eb.Zn, children: v.intl.string(v.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != r && null != t && null != e
                                ? (0, n.jsx)(eP.A, {
                                      className: eb.fw,
                                      hoverText: v.intl.formatToPlainString(v.t["Fxo9e+"], { available: t, total: e }),
                                      children: i,
                                  })
                                : (0, n.jsx)(ef.E, { className: eb.fw, variant: "text-xs/normal", children: i }),
                        ],
                    }),
                    (0, n.jsx)(ey.$, {
                        variant: "secondary",
                        size: "sm",
                        text: v.intl.string(v.t.bt75uw),
                        disabled: null != s,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: t, hasGamesInstalledInPath: e } = this.props,
            { label: i, isDefault: l } = this.state;
        return (0, n.jsx)(eI.Z, {
            editable: !0,
            className: eb.uP,
            children: (0, n.jsxs)(q.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, n.jsxs)(q.A.Child, {
                        children: [
                            (0, n.jsx)(eN.k, {
                                label: v.intl.string(v.t.AJkKCB),
                                value: i,
                                placeholder: ev.A.getLabelFromPath(t),
                                onChange: this.handleLabelChange,
                            }),
                            (0, n.jsx)("div", {
                                className: eD.QX,
                                children: (0, n.jsx)(eN.k, {
                                    label: v.intl.string(v.t.lnUCwX),
                                    disabled: !0,
                                    value: t,
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: eb.gZ,
                                children: (0, n.jsx)(eT.S, {
                                    checked: null != l ? l : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: v.intl.string(v.t.Z2MWuH),
                                }),
                            }),
                            (0, n.jsx)(ep.c, { className: eb.me }),
                            (0, n.jsxs)(q.A, {
                                children: [
                                    (0, n.jsx)(ey.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: v.intl.string(v.t.iBUzS5),
                                        disabled: e || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, n.jsx)(q.A, {
                                        justify: q.A.Justify.END,
                                        children: (0, n.jsxs)(eC.e, {
                                            children: [
                                                (0, n.jsx)(ey.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: v.intl.string(v.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, n.jsx)(ey.$, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: v.intl.string(v.t["R3BPH+"]),
                                                    disabled:
                                                        t === this.props.path &&
                                                        i === this.props.label &&
                                                        l === this.props.isDefault,
                                                    onClick: this.handleSaveChanges,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing();
    }
}
class eB extends l.PureComponent {
    state = { editingPath: null };
    componentDidMount() {
        (0, eS.UQ)(
            this.props.installationPaths.map((t) => {
                let { path: e } = t;
                return e;
            }),
        );
    }
    handleAddInstallationLocation = () => {
        eE.Ay.showOpenDialog(["openDirectory"]).then((t) => {
            null != t && 0 !== t.length && null != t[0] && "undefined" !== t[0] && (0, eS.SA)(t[0]);
        });
    };
    handleToggleEditing = (t) => {
        this.setState({ editingPath: t });
    };
    render() {
        let { installationPaths: t, installationPathsMetadata: e, defaultInstallationPath: i } = this.props,
            { editingPath: l } = this.state;
        return (0, n.jsx)("div", {
            className: eb.iE,
            children: (0, n.jsxs)(eR.D, {
                label: v.intl.string(v.t.aLszkC),
                children: [
                    t.map((t) => {
                        let { path: s, label: a } = t;
                        return (0, n.jsx)(
                            eM,
                            {
                                path: s,
                                label: a,
                                metadata: e[s],
                                isDefault: i === s,
                                editingPath: l,
                                hasGamesInstalledInPath: ev.A.hasGamesInstalledInPath(s),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            s,
                        );
                    }),
                    (0, n.jsx)("div", {
                        className: eb.sW,
                        children: (0, n.jsx)(ey.$, {
                            variant: "primary",
                            size: "sm",
                            text: v.intl.string(v.t.pnZ2uk),
                            disabled: !eL.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
}
let eO = y.Ay.connectStores([ev.A], () => ({
    installationPaths: ev.A.installationPaths,
    installationPathsMetadata: ev.A.installationPathsMetadata,
    defaultInstallationPath: ev.A.defaultInstallationPath,
}))(eB);
var eU = i(869187);
function ek(t) {
    let { applicationViewItems: e, restoreApplication: i } = t;
    if (0 === e.length) return null;
    let l = e.map((t) => {
        let e = t.libraryApplication.getDistributor();
        return (0, n.jsxs)(
            "div",
            {
                className: eU.Kp,
                children: [
                    (0, n.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: eU.Hm,
                        children: [
                            (0, n.jsx)("div", {
                                className: eU.SX,
                                children: t.libraryApplication.getBranchedName(t.application),
                            }),
                            null != e ? (0, n.jsx)("div", { className: eU.ME, children: w.gG4[e] }) : null,
                        ],
                    }),
                    (0, n.jsx)(ec.D, {
                        className: eU.P5,
                        onClick: () => i(t.libraryApplication),
                        children: (0, n.jsx)(tM.P, { size: "md", color: "currentColor", className: eU.q_ }),
                    }),
                ],
            },
            t.key,
        );
    });
    return (0, n.jsxs)("div", {
        className: eU.z0,
        children: [
            (0, n.jsx)(ed.D, {
                variant: "heading-md/semibold",
                className: eU.Z9,
                children: v.intl.string(v.t["5PJtrH"]),
            }),
            l,
        ],
    });
}
class eV extends l.PureComponent {
    handleToggleShortcutDesktop(t) {
        eg.uB.updateSetting(t);
    }
    handleToggleShortcutStartMenu(t) {
        eg.Pf.updateSetting(t);
    }
    trackRestoreApplication(t, e) {
        U.default.track(w.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: e, ...t.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (t) => {
        let e = eo.PQ(t.getFlags(), w.hM6.HIDDEN);
        em.V(t.id, t.branchId, e), this.trackRestoreApplication(t, eo.Lt(e, w.hM6.HIDDEN));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: t,
            installShortcutDesktop: e,
            installShortcutStartMenu: i,
        } = this.props;
        return (0, n.jsxs)("div", {
            className: eU.rf,
            children: [
                (0, k.S)()
                    ? (0, n.jsxs)(eh.B, {
                          gap: 16,
                          children: [
                              (0, n.jsx)(eu.d, {
                                  label: v.intl.string(v.t["9ID+Kh"]),
                                  description: v.intl.string(v.t.vT61N0),
                                  checked: e,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, n.jsx)(ep.c, {}),
                              (0, n.jsx)(eu.d, {
                                  label: v.intl.string(v.t.vNpUMz),
                                  description: v.intl.string(v.t.cpYp0H),
                                  checked: i,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, n.jsx)(ep.c, {}),
                              (0, n.jsx)(eO, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(ek, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: t,
                }),
            ],
        });
    }
    render() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(H, { currentRoute: w.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, n.jsx)(eA.Ar, { className: eU.XG, children: this.renderBody() }),
            ],
        });
    }
}
function eG() {
    let t = {
        installShortcutDesktop: eg.uB.useSetting(),
        installShortcutStartMenu: eg.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, y.bG)([S.A], () => S.A.hiddenLibraryApplicationViewItems),
    };
    return (0, n.jsx)(eV, { ...t });
}
var eH = i(536813);
function eK() {
    return (0, n.jsxs)(s.dO, {
        children: [
            (0, n.jsx)(r.A, {
                path: w.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, n.jsxs)(a.A, {
                    page: w.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, n.jsx)(o.HI, { subsection: v.intl.string(v.t["3D5yo/"]) }), (0, n.jsx)(eG, {})],
                }),
            }),
            (0, n.jsx)(r.A, {
                path: w.BVt.APPLICATION_LIBRARY,
                children: (0, n.jsxs)(a.A, {
                    page: w.liQ.LIBRARY,
                    root: !0,
                    children: [(0, n.jsx)(o.HI, { subsection: v.intl.string(v.t.p7ARTB) }), (0, n.jsx)(er, {})],
                }),
            }),
        ],
    });
}
let eF = l.memo(function () {
    return (
        l.useEffect(() => {
            (0, c.d)("application_library");
        }, []),
        (0, n.jsxs)("div", {
            className: eH.k,
            children: [(0, n.jsx)(o.HI, { location: v.intl.string(v.t.cw57ar) }), (0, n.jsx)(eK, {})],
        })
    );
});
