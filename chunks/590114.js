n.r(e), n.d(e, { default: () => eF });
var i = n(627968),
    l = n(64700),
    s = n(873263),
    r = n(820284),
    a = n(549711),
    o = n(726249),
    c = n(210714),
    d = n(503698),
    h = n.n(d),
    u = n(689175),
    p = n(228366),
    A = n(944791),
    m = n(712963),
    g = n(661439),
    x = n(970672),
    f = n(621466),
    y = n(17928),
    I = n(892547),
    N = n(192308);
function T(t) {
    p.h.dispatch({ type: "LIBRARY_APPLICATION_FILTER_UPDATE", query: t });
}
function C(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    p.h.dispatch({ type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE", key: t, isKeyboardEvent: e });
}
var R = n(186111),
    S = n(742077),
    P = n(268387),
    j = n(113673),
    w = n(652215),
    _ = n(650583),
    v = n(375708),
    L = n(326112);
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
        let { applicationViewItems: e, activeRowKey: n } = this.props,
            i = e.findIndex((t) => t.key === n),
            l = 0;
        i >= 0 && (l = (i + t) % e.length) < 0 && (l = e.length - 1);
        let s = e[l];
        C(null != s ? s.key : null, !0);
    }
    handleKeyDown = (t) => {
        let { activeRowKey: e, hasModalOpen: n, applicationViewItems: i } = this.props,
            { searchBarRef: l } = this;
        if (n || t.ctrlKey || t.altKey || t.metaKey || null == l) return;
        let s = (0, f.BF)(t)?.activeElement;
        if (!(s !== l.current && (0, f.Cw)(s)))
            switch (t.key) {
                case _.dh.ESCAPE:
                    t.target !== l.current ? this.reset() : null != l.current && l.current?.blur();
                    break;
                case _.dh.ENTER:
                    if (null != e) {
                        t.preventDefault();
                        let n = i.find((t) => t.key === e);
                        if (null == n) return;
                        let l = n.libraryApplication;
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
        return (0, i.jsx)("div", {
            className: h()({ [L.sw]: !0, [L.in]: e }),
            children: (0, i.jsx)(I.I, {
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
    return (0, i.jsx)(E, {
        activeRowKey: (0, y.bG)([P.A], () => P.A.activeRowKey),
        hasModalOpen: e || t,
        filterQuery: (0, y.bG)([S.A], () => S.A.applicationFilterQuery),
        applicationViewItems: (0, y.bG)([S.A], () => S.A.sortedFilteredLibraryApplicationViewItems),
    });
}
var D = n(657044),
    M = n(761508),
    B = n(742589),
    O = n(976860),
    U = n(174459),
    k = n(144914),
    V = n(256855);
let G = (0, k.S)() || !1,
    H = l.memo(function (t) {
        let { currentRoute: e, renderToolbar: n } = t,
            s = l.useContext(U.AnalyticsContext),
            r = G || e === w.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, i.jsxs)(B.A, {
            className: V.$,
            toolbar: n?.(),
            children: [
                (0, i.jsx)(B.A.Icon, { icon: D._, "aria-hidden": !0 }),
                (0, i.jsx)(B.A.Title, { children: v.intl.string(v.t.cw57ar) }),
                (0, i.jsx)(B.A.Divider, {}),
                (0, i.jsxs)(M.V, {
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
                        (0, i.jsx)(M.V.Item, { id: w.BVt.APPLICATION_LIBRARY, children: v.intl.string(v.t.p7ARTB) }),
                        r
                            ? (0, i.jsx)(M.V.Item, {
                                  id: w.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: v.intl.string(v.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
var K = n(451988),
    F = n(319060),
    X = n(866665),
    z = n(403581),
    W = n(952270),
    Y = n(1215),
    J = n(442433),
    Q = n(979604),
    q = n(235986),
    $ = n(596719),
    Z = n(769015),
    tt = n(529433),
    te = n(674378),
    tn = n(240248),
    ti = n(565787),
    tl = n(95635),
    ts = n(32880),
    tr = n(465797),
    ta = n(953727);
let to = function (t) {
    let { id: e, startColor: n, stopColor: l, color: s, stop: r } = t;
    return (0, i.jsxs)("linearGradient", {
        id: e,
        children: [
            (0, i.jsx)("stop", { offset: "0", stopColor: n }),
            (0, i.jsx)("stop", { offset: r, stopColor: l }),
            (0, i.jsx)("stop", { offset: r, stopColor: s }),
            (0, i.jsx)("stop", { offset: "1", stopColor: s }),
        ],
    });
};
function tc(t) {
    return `CloudDone-${t}`;
}
let td = (0, ti.k)(function (t) {
        let { width: e = 24, height: n = 24, color: l = "currentColor", foreground: s, ...r } = t;
        return (0, i.jsx)("svg", {
            ...(0, ta.A)(r),
            width: e,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    (0, i.jsx)("path", {
                        className: s,
                        fill: l,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
                    }),
                    (0, i.jsx)("rect", { width: "24", height: "24" }),
                ],
            }),
        });
    }),
    th = (0, ti.k)(function (t) {
        let { width: e = 24, height: n = 24, color: l = "currentColor", foreground: s, gradientConfig: r, ...a } = t,
            o = null;
        return (
            null != r && (o = (0, i.jsx)(to, { ...r, color: l, id: tc(r.id) })),
            (0, i.jsxs)("svg", {
                ...(0, ta.A)(a),
                width: e,
                height: n,
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("defs", { children: o }),
                    (0, i.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    (0, i.jsx)("path", {
                        fill: null != r ? `url(#${tc(r.id)})` : l,
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
            let { progress: e, total: n } = t;
            return e / n;
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
        let { cloudSyncState: t, libraryApplication: e, className: n } = this.props,
            l = null == t ? { type: w.VX0.DONE } : t,
            s = this.getIsRecentlySynced();
        (tu.has(l.type) || s) && (e.id, this.getStop(l, s));
        let r = s ? th : tp[l.type];
        return (0, i.jsx)(X.m, { text: this.getTooltip(l, s), children: (0, i.jsx)(r, { className: n }) });
    }
}
let tm = y.Ay.connectStores([tr.A], (t) => {
    let { libraryApplication: e } = t;
    return { cloudSyncState: tr.A.getState(e.id, e.branchId) };
})(tA);
var tg = n(855189);
let tx = (0, tn.xI)(F.A.GAME_LIST_ROW_MIN_HEIGHT),
    tf = (0, tn.xI)(F.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    ty = Object.freeze({ [w.DpB.PLATFORM]: "Platform", [w.DpB.LAST_PLAYED]: "Last Played", [w.DpB.NAME]: "Name" });
function tI(t) {
    let { flag: e, icon: n, item: l, tooltip: s } = t,
        r = l.libraryApplication.hasFlag(e);
    return (0, i.jsx)(X.m, { text: s, children: (0, i.jsx)(n, { className: h()(tg.up, { [tg.R]: !r }) }) });
}
let tN = [
    {
        key: w.DpB.NAME,
        renderHeader: () => v.intl.string(v.t.dBfWfc),
        sort: !0,
        cellClassName: tg.UQ,
        bodyCellClassName: tg.SJ,
        render: (t) =>
            (0, i.jsxs)(q.A, {
                align: q.A.Align.CENTER,
                children: [
                    (0, i.jsx)(Z.A, { game: t.application, size: Z.M.SMALL, className: tg.Gt }),
                    (0, i.jsxs)("div", {
                        className: tg.Ot,
                        children: [
                            (0, i.jsx)("div", {
                                className: tg.TF,
                                children: t.libraryApplication.getBranchedName(t.application),
                            }),
                            t.libraryApplication.hasFlag(w.hM6.PREMIUM)
                                ? (0, i.jsx)(X.m, {
                                      text: v.intl.string(v.t.tG2SzG),
                                      children: (0, i.jsx)(z.t, {
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
            return (0, i.jsx)(q.A, {
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
                        ? (0, i.jsx)(tt.Ay, { end: t.lastPlayed, location: tt.Ay.Locations.GAME_LIBRARY_LAST_PLAYED })
                        : v.intl.string(v.t.EoWLru)),
                (0, i.jsx)(q.A, { align: q.A.Align.CENTER, className: h()({ [tg.g3]: t.isNew }), children: e })
            );
        },
    },
    {
        key: w.DpB.ACTIONS,
        renderHeader: () => null,
        cellClassName: tg.AT,
        render(t, e, n) {
            var s, r;
            if (null == e) throw Error("No cell props defined.");
            let a = t.key === e.activeRowKey;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsxs)("div", {
                        className: tg.nU,
                        children: [
                            (0, i.jsx)(tI, {
                                flag: w.hM6.PRIVATE,
                                item: t,
                                icon: W.G,
                                tooltip: v.intl.string(v.t.NozAop),
                            }),
                            (0, i.jsx)(tI, {
                                flag: w.hM6.OVERLAY_DISABLED,
                                item: t,
                                icon: Y.n,
                                tooltip: v.intl.string(v.t.Az9eqn),
                            }),
                            (0, i.jsx)(tm, {
                                className: h()(tg.up, { [tg.R]: !t.supportsCloudSync }),
                                libraryApplication: t.libraryApplication,
                            }),
                        ],
                    }),
                    (0, te.XZ)(t.libraryApplication)
                        ? (0, i.jsx)(Q.A, {
                              analyticsListSort:
                                  ((s = e.sortKey),
                                  (r = e.sortDirection),
                                  `${ty[s]} ${r === w.tSW.ASCENDING ? "ASC" : "DESC"}`),
                              analyticsListIndex: n,
                              source: w.ThZ.APPLICATION_LIBRARY,
                              libraryApplication: t.libraryApplication,
                              playButtonVariant: a ? "primary" : "secondary",
                              size: "sm",
                              hideProgress: null != t.defaultAction,
                              onDropdownOpen: () => null != e && e.setActiveRowKey(t),
                              onDropdownClose: () => null != e && e.clearActiveRowKey(),
                          })
                        : (0, i.jsx)("div", { children: "deprecated!" }),
                ],
            });
        },
    },
];
function tT(t) {
    let {
            item: e,
            activeRowKey: n,
            highlightedApplicationKey: l,
            onMouseEnter: s,
            onMouseLeave: r,
            onContextMenu: a,
            setRef: o,
            ...c
        } = t,
        d = e.key === n,
        u = e.key === l;
    return (0, i.jsx)("div", {
        className: h()({ [tg.eO]: d && !u, [tg.HM]: u, [tg.Ob]: !d && !u, [tg.ic]: !d && !e.isLaunchable }),
        ref: (t) => {
            o(t, e.key);
        },
        onMouseEnter: () => s(e),
        onMouseLeave: r,
        onContextMenu: (t) => a(t, e),
        children: (0, i.jsx)("div", { ...c }),
    });
}
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
            { analyticsContext: e, applicationViewItems: n } = this.props;
        for (let e of n) {
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
                let { default: t } = await Promise.all([n.e("15687"), n.e("45794")]).then(n.bind(n, 451897));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
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
            { applicationViewItems: e, filterQuery: n } = this.props;
        return e.length > 0
            ? null
            : ((t = "" !== n ? v.intl.format(v.t["4Q1TAr"], { query: n }) : v.intl.string(v.t["0Y+0PY"])),
              (0, i.jsxs)("div", {
                  className: tg.mv,
                  children: [
                      (0, i.jsx)("div", { className: tg.Zd }),
                      (0, i.jsx)(q.A, {
                          grow: 0,
                          shrink: 0,
                          direction: q.A.Direction.VERTICAL,
                          children: (0, i.jsxs)("div", {
                              className: tg.q6,
                              children: [
                                  (0, i.jsx)("div", { className: tg.ks, children: v.intl.string(v.t.Lw8X2j) }),
                                  (0, i.jsx)("div", { className: tg.Li, children: t }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: t, sortDirection: e, applicationViewItems: n, activeRowKey: s, stickyHeader: r } = this.props,
            { overflowMenuRowKey: a, highlightedApplicationKey: o } = this.state;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                n.length > 0
                    ? (0, i.jsx)($.A, {
                          columns: tN,
                          data: n,
                          sortData: !1,
                          rowComponent: tT,
                          className: tg.tp,
                          headerClassName: r ? tg.ln : tg.wx,
                          headerCellClassName: tg.e4,
                          sortedHeaderCellClassName: tg.dm,
                          bodyCellClassName: tg.hC,
                          rowClassName: tg.G9,
                          sortKey: t,
                          sortDirection: e,
                          stickyHeader: r,
                          rowProps: {
                              activeRowKey: a ?? s,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: a ?? s,
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
        n = (0, s.zy)(),
        {
            applicationViewItems: r,
            filterQuery: a,
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
    return (0, i.jsx)(tC, {
        ...t,
        analyticsContext: e,
        location: n,
        applicationViewItems: r,
        filterQuery: a,
        fetched: o,
        sortKey: c,
        sortDirection: d,
        activeRowKey: h,
        isNavigatingByKeyboard: u,
    });
}
n(321073);
var tS = n(435558),
    tP = n.n(tS),
    tj = n(408278),
    tw = n(661531),
    t_ = n(462887),
    tv = n(5373),
    tL = n(834730),
    tE = n(248530),
    tb = n(782134),
    tD = n(113494),
    tM = n(872351),
    tB = n(789645),
    tO = n(92077),
    tU = n(707606),
    tk = n(456412),
    tV = n(587895),
    tG = n(363195),
    tH = n(189081),
    tK = n(340829),
    tF = n(966846),
    tX = n(531685),
    tz = n(255438),
    tW = n(505806),
    tY = n(998304),
    tJ = n(936593);
class tQ extends l.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = l.createRef();
    animationFrameRequestId;
    static defaultProps = { animate: !0 };
    onDataUpdate(t, e) {
        let { maxValue: n, data: i, animate: l } = this.props,
            s = null == t || (t.data !== e.data && !tP().isEqual(t.data, e.data));
        if (
            (s && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...i))),
            s || null == t || (!t.animate && l) || t.color !== this.props.color)
        ) {
            let t = tY.E2(this.props.color);
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
            n,
            i = this.canvas.current;
        if (null == i) return;
        let {
            data: l,
            updateInterval: s,
            color: r,
            numUpdatesToShow: a,
            lineWidth: o,
            animate: c,
            gradientStopColor: d,
        } = this.props;
        if (l.length < 2) return;
        let h = Math.max(Math.min((t - this.dataChangedAt) / s, 1), 0),
            u = i.getContext("2d"),
            p = this.maxValue;
        (u.strokeStyle = r), (u.lineWidth = o);
        let A = i.height - u.lineWidth,
            m = u.createLinearGradient(0, 0, 0, A);
        if (null != d) m.addColorStop(0, d);
        else {
            let { r: t, g: e, b: n } = tY.E2(r);
            m.addColorStop(0, `rgba(${t}, ${e}, ${n}, 0)`);
        }
        m.addColorStop(1, this.fillColor), (u.fillStyle = m);
        let g = l.length >= a ? a : l.length;
        u.setTransform(1, 0, 0, -1, 0, i.height),
            u.clearRect(0, 0, i.width, i.height),
            u.translate(0, 0.5 * u.lineWidth);
        let x = Math.floor(i.width / (g - 3)),
            f = 0.5 * x;
        u.translate(x - x * h, 0), u.beginPath();
        let y = -x;
        l.forEach((t, i) => {
            (e = { x: y, y: (A * t) / p }),
                0 === i ? u.moveTo(e.x, e.y) : u.bezierCurveTo(n.x + f, n.y, e.x - f, e.y, e.x, e.y),
                (n = e),
                (y += x);
        }),
            u.stroke(),
            u.lineTo(y - x, 0),
            u.lineTo(0, 0),
            u.fill(),
            c && h < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
    };
    render() {
        let { className: t, pixelWidth: e, pixelHeight: n } = this.props;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)("canvas", { ref: this.canvas, className: tJ.J, width: e, height: n }),
        });
    }
}
var tq = n(743827);
let t$ = function (t) {
    let { title: e, className: n, color: l, animate: s, getHistoricalTotalBytes: r } = t;
    return (0, i.jsx)(tW.A, {
        getHistoricalTotalBytes: r,
        children: function (t, r, a) {
            var o;
            return (0, i.jsx)("div", {
                className: h()(tq.dm, n),
                children: (0, i.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, i.jsxs)(q.A, {
                            className: tq.Qq,
                            direction: q.A.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)("div", { className: tq.DD, children: e }),
                                (0, i.jsx)("div", {
                                    className: tq.TS,
                                    children:
                                        (o = (t[t.length - 1] / r) * 1e3) > 1e3
                                            ? v.intl.formatToPlainString(v.t["WU+gTX"], { size: Math.round(o / 1e3) })
                                            : v.intl.formatToPlainString(v.t.wnF6TH, { size: Math.round(o) }),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: tq.MQ,
                            children: (0, i.jsx)(tQ, {
                                data: t,
                                maxValue: Math.max(Math.max.apply(null, t), 1e3),
                                className: tq.CD,
                                updateInterval: r,
                                color: l,
                                numUpdatesToShow: a,
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
var tZ = n(692275);
function t0(t) {
    let { className: e, children: n, onContextMenu: l, item: s } = t;
    return (0, i.jsx)("div", { className: e, onContextMenu: (t) => l(t, s), children: n });
}
let t1 = [tw.A.unsafe_rawColors.BLUE_345.css, tw.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    t5 = (t) => {
        let { tooltip: e, onClick: n, icon: l } = t;
        return (0, i.jsx)(X.m, {
            text: e,
            children: (0, i.jsx)(tj.K, { "aria-label": e, variant: "secondary", icon: l, onClick: n, size: "sm" }),
        });
    };
function t4(t, e) {
    switch (e) {
        case w.OQC.POST_INSTALL_SCRIPTS:
        case w.OQC.PLANNING:
        case w.OQC.FINALIZING:
        case w.OQC.ALLOCATING_DISK:
            return `${t}`;
        default:
            return (0, tz.Xq)(t, { useKibibytes: !0 });
    }
}
let t6 = {
    [w.WTw.INSTALLING]: {
        [tt.pJ.NONE]: (t, e, n, i) => v.intl.formatToPlainString(v.t.JfJt9d, { percent: t, progress: e, total: n }),
        [tt.pJ.SECONDS]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t["1z3c6e"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [tt.pJ.MINUTES]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t.PCX506, { percent: t, progress: e, total: n, timeRemaining: i }),
        [tt.pJ.HOURS]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t["3VG9s1"], { percent: t, progress: e, total: n, timeRemaining: i }),
    },
    [w.WTw.UPDATING]: {
        [tt.pJ.NONE]: (t, e, n, i) => v.intl.formatToPlainString(v.t.JsqXXL, { percent: t, progress: e, total: n }),
        [tt.pJ.SECONDS]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t["3BvVec"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [tt.pJ.MINUTES]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t["rwULn+"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [tt.pJ.HOURS]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t.adcitP, { percent: t, progress: e, total: n, timeRemaining: i }),
    },
    [w.WTw.REPAIRING]: {
        [tt.pJ.NONE]: (t, e, n, i) => v.intl.formatToPlainString(v.t.JfJt9d, { percent: t, progress: e, total: n }),
        [tt.pJ.SECONDS]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t["1z3c6e"], { percent: t, progress: e, total: n, timeRemaining: i }),
        [tt.pJ.MINUTES]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t.PCX506, { percent: t, progress: e, total: n, timeRemaining: i }),
        [tt.pJ.HOURS]: (t, e, n, i) =>
            v.intl.formatToPlainString(v.t["3VG9s1"], { percent: t, progress: e, total: n, timeRemaining: i }),
    },
};
function t2(t, e, n, i, l) {
    let s = t6[e],
        r = null != s ? Object.keys(s) : [],
        { unit: a, time: o } = (0, tt.$l)(null != t ? t / 60 : null, r);
    if (null != s && null != a) {
        let t = s[a];
        return null != t ? t(n, i, l, o) : null;
    }
    return null;
}
function t3(t) {
    let { type: e, stage: n, percent: i, progress: l, total: s, secondsRemaining: r } = t,
        a = t4(s, n),
        o = t4(l, n);
    switch (n) {
        case w.OQC.QUEUED:
            if (0 === l) return v.intl.string(v.t.RpfBqd);
            return v.intl.formatToPlainString(v.t.uNjCXZ, { percent: i, progress: o, total: a });
        case w.OQC.PLANNING:
            return v.intl.formatToPlainString(v.t.sfuCUb, { percent: i });
        case w.OQC.ALLOCATING_DISK:
            return v.intl.formatToPlainString(v.t.XigoJ9, { percent: i });
        case w.OQC.PATCHING:
            return t2(r, e, i, o, a);
        case w.OQC.FINALIZING:
            return v.intl.formatToPlainString(v.t["6PHDUN"], { percent: i });
        case w.OQC.PAUSING:
            return v.intl.formatToPlainString(v.t.vjxhWo, { percent: i, progress: o, total: a });
        case w.OQC.VERIFYING:
            return v.intl.formatToPlainString(v.t.bbilvq, { percent: i, progress: o, total: a });
        case w.OQC.POST_INSTALL_SCRIPTS:
            return v.intl.formatToPlainString(v.t.c5vRUo, { percent: i, progress: o, total: a });
        case w.OQC.REPAIRING:
            if (e === w.WTw.REPAIRING) return t2(r, e, i, o, a);
            return v.intl.formatToPlainString(v.t.OCzETT, { percent: i, progress: o, total: a });
    }
    throw Error("Invalid Dispatch stage");
}
class t7 extends l.PureComponent {
    get isFocused() {
        let { cellProps: t } = this.props;
        return null != t && t.isFocused;
    }
    renderBody(t) {
        let { percent: e, foregroundColor: n, foregroundGradientColor: l, message: s } = t;
        return (0, i.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(tv.i, {
                    percent: e,
                    size: tv.i.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != l ? [l[0], l[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, i.jsx)(tL.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: tZ.NO,
                    children: null != s ? s : "",
                }),
            ],
        });
    }
    renderStackedProgress(t) {
        let { percents: e, message: n } = t;
        return (0, i.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(tE.L, {
                    percents: e,
                    size: tE.L.Sizes.SMALL,
                    foregroundColors: t1,
                    animate: this.isFocused,
                }),
                (0, i.jsx)(tL.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: tZ.NO,
                    children: null != n ? n : "",
                }),
            ],
        });
    }
    renderFinished() {
        let { item: t } = this.props;
        return this.renderBody({
            message: v.intl.format(v.t.z1oxGO, { remove: () => tO.Vt(t.applicationId, t.branchId) }),
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
                item: { state: n, theme: i },
            } = this.props;
        if (null != n) {
            let { progress: i, total: l, stage: s } = n;
            if (null != i && null != l) {
                let n = t4(l, s),
                    r = t4(i, s),
                    a = Math.floor((e = te.uA(i, l)));
                t =
                    s === w.OQC.PAUSING
                        ? v.intl.formatToPlainString(v.t.vjxhWo, { percent: a, progress: r, total: n })
                        : v.intl.formatToPlainString(v.t.voT3Bi, { percent: a, progress: r, total: n });
            }
        }
        return (
            (null == e || null == t) && ((e = 0), (t = v.intl.string(v.t["qS+iKY"]))),
            this.renderBody({
                percent: e,
                foregroundColor: (0, t_.q)(i)
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
        let { progress: n, total: i } = t;
        if (null == n || null == i) return null;
        let l = te.uA(n, i),
            s = Math.floor(l),
            r =
                0 === n && 1 === i
                    ? v.intl.string(v.t["+pfsFX"])
                    : v.intl.formatToPlainString(v.t["+feX8S"], {
                          percent: s,
                          progress: (0, tz.Xq)(n),
                          total: (0, tz.Xq)(i),
                      });
        return this.renderBody({
            message: r,
            foregroundColor: (0, t_.q)(e)
                ? tw.A.unsafe_rawColors.PRIMARY_300.css
                : tw.A.unsafe_rawColors.PRIMARY_500.css,
            percent: l,
        });
    }
    renderProgressPatchingBody = (t, e) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: i, progress: l, total: s, type: r, readerProgress: a } = n;
        if (null == l || null == s || null == i) return null;
        let o = te.uA(l, s),
            c = te.uA(a ?? 0, s),
            d = (t[t.length - 1] / e) * 1e3,
            h = s - l,
            u = t3({
                type: r,
                stage: i,
                percent: Math.floor(o),
                progress: l,
                total: s,
                secondsRemaining: 0 !== d ? Math.max(1, h / d) : null,
            });
        return this.renderStackedProgress({ percents: [o, c], message: u });
    };
    renderProgressPatching() {
        return (0, i.jsx)(tW.A, {
            getHistoricalTotalBytes: tK.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: t } = this.props.item;
        if (null == t) return null;
        let { total: e, progress: n, stage: i, type: l } = t;
        if (null == e || null == n || null == i) return null;
        let s = te.uA(n, e),
            r = Math.floor(s);
        return this.renderBody({
            percent: s,
            message: t3({ type: l, stage: i, percent: r, progress: n, total: e }),
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
function t9() {
    return (0, i.jsx)(t5, { icon: tb.u, tooltip: v.intl.string(v.t.YGm6SZ), onClick: () => tO.U() });
}
function t8() {
    return (0, i.jsx)(t5, { icon: tD.E, tooltip: v.intl.string(v.t.TVAd5J), onClick: () => tO.v7() });
}
let et = (t) => {
        let { item: e } = t;
        return (0, i.jsx)(t5, {
            icon: tM.z,
            tooltip: v.intl.string(v.t["Eqb+LN"]),
            onClick: () => tO.BO(e.applicationId, e.branchId),
        });
    },
    ee = (t) => {
        let { item: e } = t;
        return (0, i.jsx)(t5, {
            icon: tB.P,
            tooltip: v.intl.string(v.t["0lFmC9"]),
            onClick: () => tO.ZT(e.applicationId, e.branchId),
        });
    },
    en = [
        {
            key: "name",
            cellClassName: tZ.UQ,
            render: (t) =>
                (0, i.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, i.jsx)(Z.A, { game: t.application, className: tZ.__invalid_gameIcon, size: Z.M.SMALL }),
                        (0, i.jsx)("div", { className: tZ.TF, children: t.application.name }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: tZ.Ay,
            headerCellClassName: tZ.VD,
            bodyCellClassName: tZ.so,
            render: (t, e) => (0, i.jsx)(t7, { item: t, cellProps: e }),
        },
        {
            key: "actions",
            cellClassName: tZ.AT,
            render(t, e) {
                let n, l;
                return (
                    t.finished
                        ? (n =
                              null != t.libraryApplication
                                  ? (0, i.jsx)(Q.A, {
                                        libraryApplication: t.libraryApplication,
                                        size: "sm",
                                        source: w.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != t.state
                          ? t.state.type !== w.WTw.UP_TO_DATE &&
                            ((n =
                                t.index > 0
                                    ? (0, i.jsx)(et, { item: t })
                                    : null != e && e.paused
                                      ? (0, i.jsx)(t9, {})
                                      : (0, i.jsx)(t8, { item: t })),
                            (l = (0, i.jsx)(ee, { item: t })))
                          : (l = (0, i.jsx)(ee, { item: t })),
                    (0, i.jsxs)("div", { className: tZ.sG, children: [n, l] })
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
                    tO.Vt(t.applicationId, t.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    throttledUpdateHeight = tP().throttle(() => {
        if (this.isUnmounted) return;
        let { height: t, onHeightTallerThanHalfViewportChange: e } = this.props,
            n = t > window.innerHeight / 2;
        this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), e(n));
    }, 1e3);
    render() {
        let { applications: t, paused: e, isFocused: l, theme: s, analyticsContext: r } = this.props;
        return 0 === t.length
            ? null
            : (0, i.jsxs)("div", {
                  className: tZ.xP,
                  children: [
                      (0, i.jsxs)("div", {
                          className: tZ.U1,
                          children: [
                              (0, i.jsx)(t$, {
                                  className: h()(tZ.e4, tZ.Eg),
                                  title: v.intl.string(v.t.ytoXKr),
                                  getHistoricalTotalBytes: tK.A.getHistoricalTotalBytesDownloaded,
                                  color: tw.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: l,
                              }),
                              (0, i.jsx)(t$, {
                                  className: h()(tZ.e4, tZ.pn),
                                  title: v.intl.string(v.t.SjohhI),
                                  getHistoricalTotalBytes: tK.A.getHistoricalTotalBytesWritten,
                                  color: tw.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: l,
                              }),
                          ],
                      }),
                      (0, i.jsx)($.A, {
                          hasHeader: !1,
                          columns: en,
                          data: t,
                          className: tZ.tp,
                          rowClassName: tZ.nM,
                          rowComponent: t0,
                          cellProps: { paused: e, isFocused: l, theme: s },
                          rowProps: {
                              onContextMenu: (t, e) => {
                                  J.L3(t, async () => {
                                      let { default: t } = await Promise.all([n.e("15687"), n.e("45794")]).then(
                                          n.bind(n, 451897),
                                      );
                                      return (n) =>
                                          (0, i.jsx)(t, {
                                              ...n,
                                              applicationId: e.applicationId,
                                              branchId: e.branchId,
                                              analyticsContext: r,
                                          });
                                  });
                              },
                          },
                          bodyCellClassName: tZ.Hn,
                      }),
                  ],
              });
    }
}
function el(t, e, n, i) {
    return t.reduce((t, l, s) => {
        let { applicationId: r, branchId: a } = l,
            o = n.getApplication(r),
            c = i.getState(r, a);
        return (
            null != o &&
                t.push({
                    key: `${r}:${a}`,
                    applicationId: r,
                    branchId: a,
                    state: c,
                    application: o,
                    libraryApplication: tH.A.getLibraryApplication(r, a),
                    finished: e,
                    index: s,
                }),
            t
        );
    }, []);
}
let es = (0, tk.A)(
    y.Ay.connectStores([tV.A, tK.A, tF.A, tG.A, tX.A], () => ({
        applications: [...el(tF.A.activeItems, !1, tV.A, tK.A), ...el(tF.A.finishedItems, !0, tV.A, tK.A)],
        paused: tF.A.paused,
        isFocused: tX.A.isFocused(),
        theme: tG.A.theme,
    }))((0, tU.A)(ei)),
);
var er = n(613057),
    ea = n(20438);
class eo extends l.PureComponent {
    _scrollerRef = l.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        A.I(w.BVt.APPLICATION_LIBRARY),
            (0, x.h)(er.XK.LIBRARY),
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
        return (0, i.jsx)(b, {});
    }
    scrollToRow = (t, e) => {
        let n = this._scrollerRef.current;
        null != n
            ? (t.focus(), n.scrollIntoViewRect({ start: e, end: e }), (this._scrollToOnMount = null))
            : ((this._scrollToOnMount = t), (this._scrollToPadding = e));
    };
    render() {
        let { includeUpdatesInScroller: t } = this.state,
            e = (0, i.jsx)("div", {
                children: (0, i.jsx)(r.A, {
                    section: w.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, i.jsx)(es, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(H, { currentRoute: w.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                t ? null : e,
                (0, i.jsxs)(u.Gt, {
                    className: h()(ea.k, ea.X),
                    ref: this._scrollerRef,
                    children: [
                        t ? e : null,
                        (0, i.jsx)(r.A, {
                            section: w.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, i.jsx)(tR, { stickyHeader: !t, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
var ec = n(665260),
    ed = n(939249),
    eh = n(297264),
    eu = n(331322),
    ep = n(243721),
    eA = n(404778),
    em = n(364522),
    eg = n(59636),
    ex = n(885386),
    ef = n(314116),
    ey = n(821609),
    eI = n(993077),
    eN = n(292666),
    eT = n(150934),
    eC = n(825484),
    eR = n(452027),
    eS = n(466472),
    eP = n(29160),
    ej = n(834911);
let ew = Math.ceil(2 * Math.PI * 20),
    e_ = function (t) {
        let e,
            n,
            l,
            s,
            { total: r, used: a } = t,
            o = Math.max(0, Math.min(1, a / r)),
            c = `${Math.floor(100 * o)}%`;
        return (0, i.jsx)(X.m, {
            text: v.intl.formatToPlainString(v.t["2eoRMh"], { used: c }),
            children: (0, i.jsxs)("div", {
                className: ej.iE,
                role: "progressbar",
                "aria-label": v.intl.formatToPlainString(v.t["2eoRMh"], { used: c }),
                children: [
                    (0, i.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: ej.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)("circle", { className: ej.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, i.jsx)("circle", {
                                className: ej.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((e = Math.round(-85 * o + 199)),
                                    (n = Math.round(-71 * o + 208)),
                                    (l = Math.round(-22 * o + 240)),
                                    `rgb(${e}, ${n}, ${l})`),
                                strokeDasharray: ((s = Math.floor(ew * o)), `${s}, ${ew}`),
                            }),
                        ],
                    }),
                    (0, i.jsx)("aside", { className: ej.Y3, "aria-hidden": !0, children: c }),
                ],
            }),
        });
    };
var ev = n(775228),
    eL = n(723702),
    eE = n(19575),
    eb = n(744832),
    eD = n(818050);
class eM extends l.PureComponent {
    state = { label: void 0, isDefault: null };
    handleStartEditing = () => {
        let { path: t, label: e, isDefault: n, onToggleEditing: i } = this.props;
        i(t), this.setState({ label: e, isDefault: n });
    };
    handleStopEditing = () => {
        let { onToggleEditing: t } = this.props;
        t(null), this.setState({ label: void 0, isDefault: null });
    };
    handleRemoveLocation = () => {
        (0, ef.A)({
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
            ? (0, i.jsx)(e_, { total: t.totalKB, used: t.totalKB - t.availableKB })
            : null;
    }
    renderViewing() {
        let t,
            e,
            { path: n, label: l, editingPath: s, isDefault: r, metadata: a } = this.props;
        return (
            null != a &&
                ((t = null != a.availableKB ? (0, tz.Xq)(a.availableKB, { useKibibytes: !0 }) : null),
                (e = null != a.totalKB ? (0, tz.Xq)(a.totalKB, { useKibibytes: !0 }) : null)),
            (0, i.jsxs)(q.A, {
                className: eb.ce,
                align: q.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: eb.__invalid_descriptionWrapper,
                        children: [
                            (0, i.jsxs)(q.A, {
                                align: q.A.Align.CENTER,
                                children: [
                                    (0, i.jsx)(eh.D, {
                                        className: eb.nM,
                                        variant: "heading-md/semibold",
                                        children: null != l ? l : ev.A.getLabelFromPath(n),
                                    }),
                                    r
                                        ? (0, i.jsx)("span", { className: eb.Zn, children: v.intl.string(v.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != a && null != t && null != e
                                ? (0, i.jsx)(eP.A, {
                                      className: eb.fw,
                                      hoverText: v.intl.formatToPlainString(v.t["Fxo9e+"], { available: t, total: e }),
                                      children: n,
                                  })
                                : (0, i.jsx)(tL.E, { className: eb.fw, variant: "text-xs/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)(ey.$, {
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
            { label: n, isDefault: l } = this.state;
        return (0, i.jsx)(eI.Z, {
            editable: !0,
            className: eb.uP,
            children: (0, i.jsxs)(q.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(q.A.Child, {
                        children: [
                            (0, i.jsx)(eN.k, {
                                label: v.intl.string(v.t.AJkKCB),
                                value: n,
                                placeholder: ev.A.getLabelFromPath(t),
                                onChange: this.handleLabelChange,
                            }),
                            (0, i.jsx)("div", {
                                className: eD.QX,
                                children: (0, i.jsx)(eN.k, {
                                    label: v.intl.string(v.t.lnUCwX),
                                    disabled: !0,
                                    value: t,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: eb.gZ,
                                children: (0, i.jsx)(eT.S, {
                                    checked: null != l ? l : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: v.intl.string(v.t.Z2MWuH),
                                }),
                            }),
                            (0, i.jsx)(eA.c, { className: eb.me }),
                            (0, i.jsxs)(q.A, {
                                children: [
                                    (0, i.jsx)(ey.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: v.intl.string(v.t.iBUzS5),
                                        disabled: e || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, i.jsx)(q.A, {
                                        justify: q.A.Justify.END,
                                        children: (0, i.jsxs)(eC.e, {
                                            children: [
                                                (0, i.jsx)(ey.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: v.intl.string(v.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, i.jsx)(ey.$, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: v.intl.string(v.t["R3BPH+"]),
                                                    disabled:
                                                        t === this.props.path &&
                                                        n === this.props.label &&
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
        let { installationPaths: t, installationPathsMetadata: e, defaultInstallationPath: n } = this.props,
            { editingPath: l } = this.state;
        return (0, i.jsx)("div", {
            className: eb.iE,
            children: (0, i.jsxs)(eR.D, {
                label: v.intl.string(v.t.aLszkC),
                children: [
                    t.map((t) => {
                        let { path: s, label: r } = t;
                        return (0, i.jsx)(
                            eM,
                            {
                                path: s,
                                label: r,
                                metadata: e[s],
                                isDefault: n === s,
                                editingPath: l,
                                hasGamesInstalledInPath: ev.A.hasGamesInstalledInPath(s),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            s,
                        );
                    }),
                    (0, i.jsx)("div", {
                        className: eb.sW,
                        children: (0, i.jsx)(ey.$, {
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
var eU = n(869187);
function ek(t) {
    let { applicationViewItems: e, restoreApplication: n } = t;
    if (0 === e.length) return null;
    let l = e.map((t) => {
        let e = t.libraryApplication.getDistributor();
        return (0, i.jsxs)(
            "div",
            {
                className: eU.Kp,
                children: [
                    (0, i.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: eU.Hm,
                        children: [
                            (0, i.jsx)("div", {
                                className: eU.SX,
                                children: t.libraryApplication.getBranchedName(t.application),
                            }),
                            null != e ? (0, i.jsx)("div", { className: eU.ME, children: w.gG4[e] }) : null,
                        ],
                    }),
                    (0, i.jsx)(ed.D, {
                        className: eU.P5,
                        onClick: () => n(t.libraryApplication),
                        children: (0, i.jsx)(tB.P, { size: "md", color: "currentColor", className: eU.q_ }),
                    }),
                ],
            },
            t.key,
        );
    });
    return (0, i.jsxs)("div", {
        className: eU.z0,
        children: [
            (0, i.jsx)(eh.D, {
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
        ex.uB.updateSetting(t);
    }
    handleToggleShortcutStartMenu(t) {
        ex.Pf.updateSetting(t);
    }
    trackRestoreApplication(t, e) {
        U.default.track(w.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: e, ...t.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (t) => {
        let e = ec.PQ(t.getFlags(), w.hM6.HIDDEN);
        eg.V(t.id, t.branchId, e), this.trackRestoreApplication(t, ec.Lt(e, w.hM6.HIDDEN));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: t,
            installShortcutDesktop: e,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, i.jsxs)("div", {
            className: eU.rf,
            children: [
                (0, k.S)()
                    ? (0, i.jsxs)(eu.B, {
                          gap: 16,
                          children: [
                              (0, i.jsx)(ep.d, {
                                  label: v.intl.string(v.t["9ID+Kh"]),
                                  description: v.intl.string(v.t.vT61N0),
                                  checked: e,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, i.jsx)(eA.c, {}),
                              (0, i.jsx)(ep.d, {
                                  label: v.intl.string(v.t.vNpUMz),
                                  description: v.intl.string(v.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, i.jsx)(eA.c, {}),
                              (0, i.jsx)(eO, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(ek, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: t,
                }),
            ],
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H, { currentRoute: w.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(em.Ar, { className: eU.XG, children: this.renderBody() }),
            ],
        });
    }
}
function eG() {
    let t = {
        installShortcutDesktop: ex.uB.useSetting(),
        installShortcutStartMenu: ex.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, y.bG)([S.A], () => S.A.hiddenLibraryApplicationViewItems),
    };
    return (0, i.jsx)(eV, { ...t });
}
var eH = n(536813);
function eK() {
    return (0, i.jsxs)(s.dO, {
        children: [
            (0, i.jsx)(a.A, {
                path: w.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, i.jsxs)(r.A, {
                    page: w.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, i.jsx)(o.HI, { subsection: v.intl.string(v.t["3D5yo/"]) }), (0, i.jsx)(eG, {})],
                }),
            }),
            (0, i.jsx)(a.A, {
                path: w.BVt.APPLICATION_LIBRARY,
                children: (0, i.jsxs)(r.A, {
                    page: w.liQ.LIBRARY,
                    root: !0,
                    children: [(0, i.jsx)(o.HI, { subsection: v.intl.string(v.t.p7ARTB) }), (0, i.jsx)(eo, {})],
                }),
            }),
        ],
    });
}
let eF = l.memo(function () {
    return (
        l.useEffect(() => {
            (0, c.d0)("application_library");
        }, []),
        (0, i.jsxs)("div", {
            className: eH.k,
            children: [(0, i.jsx)(o.HI, { location: v.intl.string(v.t.cw57ar) }), (0, i.jsx)(eK, {})],
        })
    );
});
