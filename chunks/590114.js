"use strict";
n.r(e), n.d(e, { default: () => eF });
var r = n(627968),
    i = n(64700),
    s = n(873263),
    l = n(820284),
    a = n(549711),
    o = n(726249),
    c = n(210714),
    d = n(503698),
    u = n.n(d),
    h = n(689175),
    p = n(228366),
    A = n(944791),
    g = n(712963),
    m = n(661439),
    _ = n(970672),
    f = n(621466),
    I = n(17928),
    N = n(892547),
    T = n(192308);
function x(t) {
    p.h.dispatch({ type: "LIBRARY_APPLICATION_FILTER_UPDATE", query: t });
}
function C(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    p.h.dispatch({ type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE", key: t, isKeyboardEvent: e });
}
var y = n(186111),
    S = n(742077),
    R = n(268387),
    E = n(715671),
    L = n(652215),
    b = n(650583),
    P = n(985018),
    w = n(326112);
class j extends i.Component {
    searchBarRef = i.createRef();
    state = { focused: !1 };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        p.h.wait(() => C(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        C(null), x("");
    }
    focusInput() {
        let { searchBarRef: t } = this;
        null != t && t.current?.focus();
    }
    updateActiveRow(t) {
        let { applicationViewItems: e, activeRowKey: n } = this.props,
            r = e.findIndex((t) => t.key === n),
            i = 0;
        r >= 0 && (i = (r + t) % e.length) < 0 && (i = e.length - 1);
        let s = e[i];
        C(null != s ? s.key : null, !0);
    }
    handleKeyDown = (t) => {
        let { activeRowKey: e, hasModalOpen: n, applicationViewItems: r } = this.props,
            { searchBarRef: i } = this;
        if (n || t.ctrlKey || t.altKey || t.metaKey || null == i) return;
        let s = (0, f.BF)(t)?.activeElement;
        if (!(s !== i.current && (0, f.Cw)(s)))
            switch (t.key) {
                case b.dh.ESCAPE:
                    t.target !== i.current ? this.reset() : null != i.current && i.current?.blur();
                    break;
                case b.dh.ENTER:
                    if (null != e) {
                        t.preventDefault();
                        let n = r.find((t) => t.key === e);
                        if (null == n) return;
                        let i = n.libraryApplication;
                        E.performDefaultLibraryApplicationAction(i, {
                            analyticsParams: {
                                source: L.ThZ.APPLICATION_LIBRARY,
                                location: {
                                    page: L.liQ.LIBRARY,
                                    section: L.JJy.LIBRARY_APPLICATION_LIST,
                                    object: L.ZSU.BUTTON_CTA,
                                },
                            },
                        });
                    }
                    break;
                case b.dh.ARROW_DOWN:
                case b.dh.ARROW_UP:
                    t.preventDefault(), t.stopPropagation(), this.updateActiveRow(t.key === b.dh.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != i.current && t.target !== i.current && i.current?.focus();
            }
    };
    render() {
        let { filterQuery: t } = this.props,
            { focused: e } = this.state;
        return (0, r.jsx)("div", {
            className: u()({ [w.sw]: !0, [w.in]: e }),
            children: (0, r.jsx)(N.I, {
                ref: this.searchBarRef,
                onChange: x,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: t,
                placeholder: P.intl.string(P.t.aSxWSo),
            }),
        });
    }
}
function v() {
    let t = (0, I.bG)([y.A], () => y.A.hasLayers()),
        e = (0, T.useModalsStore)(T.hasAnyModalOpenSelector);
    return (0, r.jsx)(j, {
        activeRowKey: (0, I.bG)([R.A], () => R.A.activeRowKey),
        hasModalOpen: e || t,
        filterQuery: (0, I.bG)([S.A], () => S.A.applicationFilterQuery),
        applicationViewItems: (0, I.bG)([S.A], () => S.A.sortedFilteredLibraryApplicationViewItems),
    });
}
var D = n(657044),
    M = n(761508),
    H = n(742589),
    O = n(976860),
    B = n(954571),
    U = n(144914),
    k = n(256855);
let G = (0, U.S)() || !1,
    V = i.memo(function (t) {
        let { currentRoute: e, renderToolbar: n } = t,
            s = i.useContext(B.AnalyticsContext),
            l = G || e === L.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, r.jsxs)(H.A, {
            className: k.$,
            toolbar: n?.(),
            children: [
                (0, r.jsx)(H.A.Icon, { icon: D._, "aria-hidden": !0 }),
                (0, r.jsx)(H.A.Title, { children: P.intl.string(P.t.cw57ar) }),
                (0, r.jsx)(H.A.Divider, {}),
                (0, r.jsxs)(M.V, {
                    type: "top-pill",
                    selectedItem: e,
                    onItemSelect: function (t) {
                        t !== e &&
                            (0, O.pX)(t, {
                                state: {
                                    analyticsSource: {
                                        ...s.location,
                                        section: L.JJy.TABS,
                                        object: L.ZSU.NAVIGATION_LINK,
                                    },
                                },
                            });
                    },
                    children: [
                        (0, r.jsx)(M.V.Item, { id: L.BVt.APPLICATION_LIBRARY, children: P.intl.string(P.t.p7ARTB) }),
                        l
                            ? (0, r.jsx)(M.V.Item, {
                                  id: L.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: P.intl.string(P.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
var K = n(451988),
    F = n(990078),
    Y = n(319060),
    W = n(403581),
    X = n(952270),
    z = n(1215),
    J = n(442433),
    Q = n(979604),
    q = n(235986),
    Z = n(596719),
    $ = n(137177),
    tt = n(290987),
    te = n(674378),
    tn = n(240248),
    tr = n(565787),
    ti = n(95635),
    ts = n(32880),
    tl = n(465797),
    ta = n(953727);
let to = (t) => {
    let { id: e, startColor: n, stopColor: i, color: s, stop: l } = t;
    return (0, r.jsxs)("linearGradient", {
        id: e,
        children: [
            (0, r.jsx)("stop", { offset: "0", stopColor: n }),
            (0, r.jsx)("stop", { offset: l, stopColor: i }),
            (0, r.jsx)("stop", { offset: l, stopColor: s }),
            (0, r.jsx)("stop", { offset: "1", stopColor: s }),
        ],
    });
};
function tc(t) {
    return `CloudDone-${t}`;
}
let td = (0, tr.k)(function (t) {
        let { width: e = 24, height: n = 24, color: i = "currentColor", foreground: s, ...l } = t;
        return (0, r.jsx)("svg", {
            ...(0, ta.A)(l),
            width: e,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, r.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    (0, r.jsx)("path", {
                        className: s,
                        fill: i,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
                    }),
                    (0, r.jsx)("rect", { width: "24", height: "24" }),
                ],
            }),
        });
    }),
    tu = (0, tr.k)(function (t) {
        let { width: e = 24, height: n = 24, color: i = "currentColor", foreground: s, gradientConfig: l, ...a } = t,
            o = null;
        return (
            null != l && (o = (0, r.jsx)(to, { ...l, color: i, id: tc(l.id) })),
            (0, r.jsxs)("svg", {
                ...(0, ta.A)(a),
                width: e,
                height: n,
                viewBox: "0 0 24 24",
                children: [
                    (0, r.jsx)("defs", { children: o }),
                    (0, r.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    (0, r.jsx)("path", {
                        fill: null != l ? `url(#${tc(l.id)})` : i,
                        className: s,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z",
                    }),
                ],
            })
        );
    }),
    th = new Set([L.VX0.PUSHING, L.VX0.PULLING]),
    tp = Object.freeze({
        [L.VX0.DONE]: td,
        [L.VX0.PLANNING]: td,
        [L.VX0.PREPARING]: td,
        [L.VX0.PUSHING]: ti.J,
        [L.VX0.PULLING]: ts.s,
        [L.VX0.CONFLICT]: td,
        [L.VX0.ERROR]: td,
    });
class tA extends i.PureComponent {
    _doneTimer = new K.Ep();
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(t) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === L.VX0.DONE &&
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
        if (null != t && t.type === L.VX0.DONE) {
            let e = t.timestamp;
            return null != e && Date.now() - e <= 2e3;
        }
        return !1;
    }
    getStop(t, e) {
        if (e) return 1;
        if (t.type === L.VX0.PUSHING || t.type === L.VX0.PULLING) {
            let { progress: e, total: n } = t;
            return e / n;
        }
        return 0;
    }
    getTooltip(t, e) {
        switch (t.type) {
            case L.VX0.DONE:
                if (e) return P.intl.string(P.t.atpo0W);
                return P.intl.string(P.t.ZCw6zh);
            case L.VX0.CONFLICT:
            case L.VX0.ERROR:
                return P.intl.string(P.t.ZCw6zh);
            case L.VX0.PLANNING:
                return P.intl.string(P.t.ERQ0VA);
            case L.VX0.PREPARING:
                return P.intl.string(P.t.n5feu3);
            case L.VX0.PUSHING:
                return P.intl.string(P.t.oCBh0J);
            case L.VX0.PULLING:
                return P.intl.string(P.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: t, libraryApplication: e, className: n } = this.props,
            i = null == t ? { type: L.VX0.DONE } : t,
            s = this.getIsRecentlySynced();
        (th.has(i.type) || s) && (e.id, this.getStop(i, s));
        let l = s ? tu : tp[i.type];
        return (0, r.jsx)(F.m, { text: this.getTooltip(i, s), children: (0, r.jsx)(l, { className: n }) });
    }
}
let tg = I.Ay.connectStores([tl.A], (t) => {
    let { libraryApplication: e } = t;
    return { cloudSyncState: tl.A.getState(e.id, e.branchId) };
})(tA);
var tm = n(855189);
let t_ = (0, tn.xI)(Y.A.GAME_LIST_ROW_MIN_HEIGHT),
    tf = (0, tn.xI)(Y.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    tI = Object.freeze({ [L.DpB.PLATFORM]: "Platform", [L.DpB.LAST_PLAYED]: "Last Played", [L.DpB.NAME]: "Name" }),
    tN = (t) => {
        let { flag: e, icon: n, item: i, tooltip: s } = t,
            l = i.libraryApplication.hasFlag(e);
        return (0, r.jsx)(F.m, { text: s, children: (0, r.jsx)(n, { className: u()(tm.up, { [tm.R]: !l }) }) });
    },
    tT = [
        {
            key: L.DpB.NAME,
            renderHeader: () => P.intl.string(P.t.dBfWfc),
            sort: !0,
            cellClassName: tm.UQ,
            bodyCellClassName: tm.SJ,
            render: (t) =>
                (0, r.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, r.jsx)($.A, { game: t.application, size: $.M.SMALL, className: tm.Gt }),
                        (0, r.jsxs)("div", {
                            className: tm.Ot,
                            children: [
                                (0, r.jsx)("div", {
                                    className: tm.TF,
                                    children: t.libraryApplication.getBranchedName(t.application),
                                }),
                                t.libraryApplication.hasFlag(L.hM6.PREMIUM)
                                    ? (0, r.jsx)(F.m, {
                                          text: P.intl.string(P.t.tG2SzG),
                                          children: (0, r.jsx)(W.t, {
                                              size: "md",
                                              color: "currentColor",
                                              className: tm.oU,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: L.DpB.PLATFORM,
            renderHeader: () => P.intl.string(P.t.YR4cHH),
            sort: !0,
            cellClassName: tm.AA,
            bodyCellClassName: tm.iV,
            render(t) {
                let e = t.libraryApplication.getDistributor();
                return (0, r.jsx)(q.A, {
                    align: q.A.Align.CENTER,
                    children: null != e ? L.gG4[e] : P.intl.string(P.t["F+l3Jt"]),
                });
            },
        },
        {
            key: L.DpB.LAST_PLAYED,
            renderHeader: () => P.intl.string(P.t.FDDyjS),
            sort: !0,
            cellClassName: tm.SX,
            bodyCellClassName: tm.iV,
            render(t) {
                let e;
                return (
                    (e = t.isRunning
                        ? P.intl.string(P.t.Md326p)
                        : t.isNew
                          ? P.intl.string(P.t["+F0Tho"])
                          : 0 !== t.lastPlayed
                            ? (0, r.jsx)(tt.Ay, {
                                  end: t.lastPlayed,
                                  location: tt.Ay.Locations.GAME_LIBRARY_LAST_PLAYED,
                              })
                            : P.intl.string(P.t.EoWLru)),
                    (0, r.jsx)(q.A, { align: q.A.Align.CENTER, className: u()({ [tm.g3]: t.isNew }), children: e })
                );
            },
        },
        {
            key: L.DpB.ACTIONS,
            renderHeader: () => null,
            cellClassName: tm.AT,
            render(t, e, n) {
                var s, l;
                if (null == e) throw Error("No cell props defined.");
                let a = t.key === e.activeRowKey;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: tm.nU,
                            children: [
                                (0, r.jsx)(tN, {
                                    flag: L.hM6.PRIVATE,
                                    item: t,
                                    icon: X.G,
                                    tooltip: P.intl.string(P.t.NozAop),
                                }),
                                (0, r.jsx)(tN, {
                                    flag: L.hM6.OVERLAY_DISABLED,
                                    item: t,
                                    icon: z.n,
                                    tooltip: P.intl.string(P.t.Az9eqn),
                                }),
                                (0, r.jsx)(tg, {
                                    className: u()(tm.up, { [tm.R]: !t.supportsCloudSync }),
                                    libraryApplication: t.libraryApplication,
                                }),
                            ],
                        }),
                        (0, te.XZ)(t.libraryApplication)
                            ? (0, r.jsx)(Q.A, {
                                  analyticsListSort:
                                      ((s = e.sortKey),
                                      (l = e.sortDirection),
                                      `${tI[s]} ${l === L.tSW.ASCENDING ? "ASC" : "DESC"}`),
                                  analyticsListIndex: n,
                                  source: L.ThZ.APPLICATION_LIBRARY,
                                  libraryApplication: t.libraryApplication,
                                  playButtonVariant: a ? "primary" : "secondary",
                                  size: "sm",
                                  hideProgress: null != t.defaultAction,
                                  onDropdownOpen: () => null != e && e.setActiveRowKey(t),
                                  onDropdownClose: () => null != e && e.clearActiveRowKey(),
                              })
                            : (0, r.jsx)("div", { children: "deprecated!" }),
                    ],
                });
            },
        },
    ],
    tx = (t) => {
        let {
                item: e,
                activeRowKey: n,
                highlightedApplicationKey: i,
                onMouseEnter: s,
                onMouseLeave: l,
                onContextMenu: a,
                setRef: o,
                ...c
            } = t,
            d = e.key === n,
            h = e.key === i;
        return (0, r.jsx)("div", {
            className: u()({ [tm.eO]: d && !h, [tm.HM]: h, [tm.Ob]: !d && !h, [tm.ic]: !d && !e.isLaunchable }),
            ref: (t) => {
                o(t, e.key);
            },
            onMouseEnter: () => s(e),
            onMouseLeave: l,
            onContextMenu: (t) => a(t, e),
            children: (0, r.jsx)("div", { ...c }),
        });
    };
class tC extends i.PureComponent {
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
            null != t && (p.h.wait(J.Z_), this.props.scrollToRow(t, t_));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: t } = this.state;
        null != t &&
            null != this._rowRefs[t] &&
            (this.props.scrollToRow(this._rowRefs[t], t_),
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
                case L.d3x.DISCORD:
                    t.num_applications_discord++;
                    break;
                case L.d3x.STEAM:
                    t.num_applications_steam++;
                    break;
                case L.d3x.BATTLENET:
                    t.num_applications_battlenet++;
                    break;
                case L.d3x.TWITCH:
                    t.num_applications_twitch++;
                    break;
                case L.d3x.UPLAY:
                    t.num_applications_uplay++;
                    break;
                case L.d3x.ORIGIN:
                    t.num_applications_origin++;
                    break;
                case L.d3x.GOG:
                    t.num_applications_gog++;
                    break;
                case L.d3x.EPIC:
                    t.num_applications_epic++;
            }
            t.num_applications_total++;
        }
        B.default.track(L.HAw.LIBRARY_VIEWED, { ...t, load_id: e.loadId });
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
        let { analyticsContext: i } = this.props;
        (0, J.L3)(
            t,
            async () => {
                let { default: t } = await n.e("45794").then(n.bind(n, 451897));
                return (n) =>
                    (0, r.jsx)(t, {
                        ...n,
                        applicationId: e.libraryApplication.id,
                        branchId: e.libraryApplication.branchId,
                        analyticsContext: i,
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
            : ((t = "" !== n ? P.intl.format(P.t["4Q1TAr"], { query: n }) : P.intl.string(P.t["0Y+0PY"])),
              (0, r.jsxs)("div", {
                  className: tm.mv,
                  children: [
                      (0, r.jsx)("div", { className: tm.Zd }),
                      (0, r.jsx)(q.A, {
                          grow: 0,
                          shrink: 0,
                          direction: q.A.Direction.VERTICAL,
                          children: (0, r.jsxs)("div", {
                              className: tm.q6,
                              children: [
                                  (0, r.jsx)("div", { className: tm.ks, children: P.intl.string(P.t.Lw8X2j) }),
                                  (0, r.jsx)("div", { className: tm.Li, children: t }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: t, sortDirection: e, applicationViewItems: n, activeRowKey: s, stickyHeader: l } = this.props,
            { overflowMenuRowKey: a, highlightedApplicationKey: o } = this.state;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                n.length > 0
                    ? (0, r.jsx)(Z.A, {
                          columns: tT,
                          data: n,
                          sortData: !1,
                          rowComponent: tx,
                          className: tm.tp,
                          headerClassName: l ? tm.ln : tm.wx,
                          headerCellClassName: tm.e4,
                          sortedHeaderCellClassName: tm.dm,
                          bodyCellClassName: tm.hC,
                          rowClassName: tm.G9,
                          sortKey: t,
                          sortDirection: e,
                          stickyHeader: l,
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
function ty(t) {
    let e = i.useContext(B.AnalyticsContext),
        n = (0, s.zy)(),
        {
            applicationViewItems: l,
            filterQuery: a,
            fetched: o,
        } = (0, I.cf)([S.A], () => ({
            applicationViewItems: S.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: S.A.applicationFilterQuery,
            fetched: S.A.hasFetchedApplications,
        })),
        {
            sortKey: c,
            sortDirection: d,
            activeRowKey: u,
            isNavigatingByKeyboard: h,
        } = (0, I.cf)([R.A], () => ({
            sortKey: R.A.sortKey,
            sortDirection: R.A.sortDirection,
            activeRowKey: R.A.activeRowKey,
            isNavigatingByKeyboard: R.A.isNavigatingByKeyboard,
        }));
    return (0, r.jsx)(tC, {
        ...t,
        analyticsContext: e,
        location: n,
        applicationViewItems: l,
        filterQuery: a,
        fetched: o,
        sortKey: c,
        sortDirection: d,
        activeRowKey: u,
        isNavigatingByKeyboard: h,
    });
}
n(321073);
var tS = n(735438),
    tR = n.n(tS),
    tE = n(408278),
    tL = n(661531),
    tb = n(462887),
    tP = n(5373),
    tw = n(248530),
    tj = n(782134),
    tv = n(113494),
    tD = n(872351),
    tM = n(789645),
    tH = n(92077),
    tO = n(707606),
    tB = n(456412),
    tU = n(587895),
    tk = n(363195),
    tG = n(189081),
    tV = n(340829),
    tK = n(966846),
    tF = n(531685),
    tY = n(255438),
    tW = n(505806),
    tX = n(998304),
    tz = n(936593);
class tJ extends i.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = i.createRef();
    animationFrameRequestId;
    static defaultProps = { animate: !0 };
    onDataUpdate(t, e) {
        let { maxValue: n, data: r, animate: i } = this.props,
            s = null == t || (t.data !== e.data && !tR().isEqual(t.data, e.data));
        if (
            (s && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...r))),
            s || null == t || (!t.animate && i) || t.color !== this.props.color)
        ) {
            let t = tX.E2(this.props.color);
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
            r = this.canvas.current;
        if (null == r) return;
        let {
            data: i,
            updateInterval: s,
            color: l,
            numUpdatesToShow: a,
            lineWidth: o,
            animate: c,
            gradientStopColor: d,
        } = this.props;
        if (i.length < 2) return;
        let u = Math.max(Math.min((t - this.dataChangedAt) / s, 1), 0),
            h = r.getContext("2d"),
            p = this.maxValue;
        (h.strokeStyle = l), (h.lineWidth = o);
        let A = r.height - h.lineWidth,
            g = h.createLinearGradient(0, 0, 0, A);
        if (null != d) g.addColorStop(0, d);
        else {
            let { r: t, g: e, b: n } = tX.E2(l);
            g.addColorStop(0, `rgba(${t}, ${e}, ${n}, 0)`);
        }
        g.addColorStop(1, this.fillColor), (h.fillStyle = g);
        let m = i.length >= a ? a : i.length;
        h.setTransform(1, 0, 0, -1, 0, r.height),
            h.clearRect(0, 0, r.width, r.height),
            h.translate(0, 0.5 * h.lineWidth);
        let _ = Math.floor(r.width / (m - 3)),
            f = 0.5 * _;
        h.translate(_ - _ * u, 0), h.beginPath();
        let I = -_;
        i.forEach((t, r) => {
            (e = { x: I, y: (A * t) / p }),
                0 === r ? h.moveTo(e.x, e.y) : h.bezierCurveTo(n.x + f, n.y, e.x - f, e.y, e.x, e.y),
                (n = e),
                (I += _);
        }),
            h.stroke(),
            h.lineTo(I - _, 0),
            h.lineTo(0, 0),
            h.fill(),
            c && u < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
    };
    render() {
        let { className: t, pixelWidth: e, pixelHeight: n } = this.props;
        return (0, r.jsx)("div", {
            className: t,
            children: (0, r.jsx)("canvas", { ref: this.canvas, className: tz.J, width: e, height: n }),
        });
    }
}
var tQ = n(743827);
let tq = function (t) {
    let { title: e, className: n, color: i, animate: s, getHistoricalTotalBytes: l } = t;
    return (0, r.jsx)(tW.A, {
        getHistoricalTotalBytes: l,
        children: (t, l, a) => {
            var o;
            return (0, r.jsx)("div", {
                className: u()(tQ.dm, n),
                children: (0, r.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, r.jsxs)(q.A, {
                            className: tQ.Qq,
                            direction: q.A.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)("div", { className: tQ.DD, children: e }),
                                (0, r.jsx)("div", {
                                    className: tQ.TS,
                                    children:
                                        (o = (t[t.length - 1] / l) * 1e3) > 1e3
                                            ? P.intl.formatToPlainString(P.t["WU+gTX"], { size: Math.round(o / 1e3) })
                                            : P.intl.formatToPlainString(P.t.wnF6TH, { size: Math.round(o) }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: tQ.MQ,
                            children: (0, r.jsx)(tJ, {
                                data: t,
                                maxValue: Math.max(Math.max.apply(null, t), 1e3),
                                className: tQ.CD,
                                updateInterval: l,
                                color: i,
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
let t$ = (t) => {
        let { className: e, children: n, onContextMenu: i, item: s } = t;
        return (0, r.jsx)("div", { className: e, onContextMenu: (t) => i(t, s), children: n });
    },
    t0 = [tL.A.unsafe_rawColors.BLUE_345.css, tL.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    t1 = (t) => {
        let { tooltip: e, onClick: n, icon: i } = t;
        return (0, r.jsx)(F.m, {
            text: e,
            children: (0, r.jsx)(tE.K, { "aria-label": e, variant: "secondary", icon: i, onClick: n, size: "sm" }),
        });
    };
function t4(t, e) {
    switch (e) {
        case L.OQC.POST_INSTALL_SCRIPTS:
        case L.OQC.PLANNING:
        case L.OQC.FINALIZING:
        case L.OQC.ALLOCATING_DISK:
            return `${t}`;
        default:
            return (0, tY.Xq)(t, { useKibibytes: !0 });
    }
}
let t5 = {
    [L.WTw.INSTALLING]: {
        [tt.pJ.NONE]: (t, e, n, r) => P.intl.formatToPlainString(P.t.JfJt9d, { percent: t, progress: e, total: n }),
        [tt.pJ.SECONDS]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t["1z3c6e"], { percent: t, progress: e, total: n, timeRemaining: r }),
        [tt.pJ.MINUTES]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t.PCX506, { percent: t, progress: e, total: n, timeRemaining: r }),
        [tt.pJ.HOURS]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t["3VG9s1"], { percent: t, progress: e, total: n, timeRemaining: r }),
    },
    [L.WTw.UPDATING]: {
        [tt.pJ.NONE]: (t, e, n, r) => P.intl.formatToPlainString(P.t.JsqXXL, { percent: t, progress: e, total: n }),
        [tt.pJ.SECONDS]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t["3BvVec"], { percent: t, progress: e, total: n, timeRemaining: r }),
        [tt.pJ.MINUTES]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t["rwULn+"], { percent: t, progress: e, total: n, timeRemaining: r }),
        [tt.pJ.HOURS]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t.adcitP, { percent: t, progress: e, total: n, timeRemaining: r }),
    },
    [L.WTw.REPAIRING]: {
        [tt.pJ.NONE]: (t, e, n, r) => P.intl.formatToPlainString(P.t.JfJt9d, { percent: t, progress: e, total: n }),
        [tt.pJ.SECONDS]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t["1z3c6e"], { percent: t, progress: e, total: n, timeRemaining: r }),
        [tt.pJ.MINUTES]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t.PCX506, { percent: t, progress: e, total: n, timeRemaining: r }),
        [tt.pJ.HOURS]: (t, e, n, r) =>
            P.intl.formatToPlainString(P.t["3VG9s1"], { percent: t, progress: e, total: n, timeRemaining: r }),
    },
};
function t6(t, e, n, r, i) {
    let s = t5[e],
        l = null != s ? Object.keys(s) : [],
        { unit: a, time: o } = (0, tt.$l)(null != t ? t / 60 : null, l);
    if (null != s && null != a) {
        let t = s[a];
        return null != t ? t(n, r, i, o) : null;
    }
    return null;
}
function t2(t) {
    let { type: e, stage: n, percent: r, progress: i, total: s, secondsRemaining: l } = t,
        a = t4(s, n),
        o = t4(i, n);
    switch (n) {
        case L.OQC.QUEUED:
            if (0 === i) return P.intl.string(P.t.RpfBqd);
            return P.intl.formatToPlainString(P.t.uNjCXZ, { percent: r, progress: o, total: a });
        case L.OQC.PLANNING:
            return P.intl.formatToPlainString(P.t.sfuCUb, { percent: r });
        case L.OQC.ALLOCATING_DISK:
            return P.intl.formatToPlainString(P.t.XigoJ9, { percent: r });
        case L.OQC.PATCHING:
            return t6(l, e, r, o, a);
        case L.OQC.FINALIZING:
            return P.intl.formatToPlainString(P.t["6PHDUN"], { percent: r });
        case L.OQC.PAUSING:
            return P.intl.formatToPlainString(P.t.vjxhWo, { percent: r, progress: o, total: a });
        case L.OQC.VERIFYING:
            return P.intl.formatToPlainString(P.t.bbilvq, { percent: r, progress: o, total: a });
        case L.OQC.POST_INSTALL_SCRIPTS:
            return P.intl.formatToPlainString(P.t.c5vRUo, { percent: r, progress: o, total: a });
        case L.OQC.REPAIRING:
            if (e === L.WTw.REPAIRING) return t6(l, e, r, o, a);
            return P.intl.formatToPlainString(P.t.OCzETT, { percent: r, progress: o, total: a });
    }
    throw Error("Invalid Dispatch stage");
}
class t3 extends i.PureComponent {
    get isFocused() {
        let { cellProps: t } = this.props;
        return null != t && t.isFocused;
    }
    renderBody(t) {
        let { percent: e, foregroundColor: n, foregroundGradientColor: i, message: s } = t;
        return (0, r.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, r.jsx)(tP.i, {
                    percent: e,
                    size: tP.i.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != i ? [i[0], i[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, r.jsx)("div", { className: tZ.NO, children: null != s ? s : "" }),
            ],
        });
    }
    renderStackedProgress(t) {
        let { percents: e, message: n } = t;
        return (0, r.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, r.jsx)(tw.L, {
                    percents: e,
                    size: tw.L.Sizes.SMALL,
                    foregroundColors: t0,
                    animate: this.isFocused,
                }),
                (0, r.jsx)("div", { className: tZ.NO, children: null != n ? n : "" }),
            ],
        });
    }
    renderFinished() {
        let { item: t } = this.props;
        return this.renderBody({
            message: P.intl.format(P.t.z1oxGO, { remove: () => tH.Vt(t.applicationId, t.branchId) }),
            foregroundColor: (0, tb.q)(t.theme)
                ? tL.A.unsafe_rawColors.PRIMARY_300.css
                : tL.A.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let t,
            e,
            {
                item: { state: n, theme: r },
            } = this.props;
        if (null != n) {
            let { progress: r, total: i, stage: s } = n;
            if (null != r && null != i) {
                let n = t4(i, s),
                    l = t4(r, s),
                    a = Math.floor((e = te.uA(r, i)));
                t =
                    s === L.OQC.PAUSING
                        ? P.intl.formatToPlainString(P.t.vjxhWo, { percent: a, progress: l, total: n })
                        : P.intl.formatToPlainString(P.t.voT3Bi, { percent: a, progress: l, total: n });
            }
        }
        return (
            (null == e || null == t) && ((e = 0), (t = P.intl.string(P.t["qS+iKY"]))),
            this.renderBody({
                percent: e,
                foregroundColor: (0, tb.q)(r)
                    ? tL.A.unsafe_rawColors.PRIMARY_300.css
                    : tL.A.unsafe_rawColors.PRIMARY_500.css,
                message: t,
            })
        );
    }
    renderPaused() {
        let {
            item: { state: t, theme: e },
        } = this.props;
        if (null == t) return null;
        let { progress: n, total: r } = t;
        if (null == n || null == r) return null;
        let i = te.uA(n, r),
            s = Math.floor(i),
            l =
                0 === n && 1 === r
                    ? P.intl.string(P.t["+pfsFX"])
                    : P.intl.formatToPlainString(P.t["+feX8S"], {
                          percent: s,
                          progress: (0, tY.Xq)(n),
                          total: (0, tY.Xq)(r),
                      });
        return this.renderBody({
            message: l,
            foregroundColor: (0, tb.q)(e)
                ? tL.A.unsafe_rawColors.PRIMARY_300.css
                : tL.A.unsafe_rawColors.PRIMARY_500.css,
            percent: i,
        });
    }
    renderProgressPatchingBody = (t, e) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: r, progress: i, total: s, type: l, readerProgress: a } = n;
        if (null == i || null == s || null == r) return null;
        let o = te.uA(i, s),
            c = te.uA(a ?? 0, s),
            d = (t[t.length - 1] / e) * 1e3,
            u = s - i,
            h = t2({
                type: l,
                stage: r,
                percent: Math.floor(o),
                progress: i,
                total: s,
                secondsRemaining: 0 !== d ? Math.max(1, u / d) : null,
            });
        return this.renderStackedProgress({ percents: [o, c], message: h });
    };
    renderProgressPatching() {
        return (0, r.jsx)(tW.A, {
            getHistoricalTotalBytes: tV.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: t } = this.props.item;
        if (null == t) return null;
        let { total: e, progress: n, stage: r, type: i } = t;
        if (null == e || null == n || null == r) return null;
        let s = te.uA(n, e),
            l = Math.floor(s);
        return this.renderBody({
            percent: s,
            message: t2({ type: i, stage: r, percent: l, progress: n, total: e }),
            foregroundColor: tL.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: t } = this.props.item;
        switch (null != t ? t.stage : null) {
            case L.OQC.PATCHING:
            case L.OQC.REPAIRING:
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
            (t.state.type === L.WTw.UPDATING || t.state.type === L.WTw.REPAIRING || t.state.type === L.WTw.INSTALLING)
        )
            if (null != e && e.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let t7 = () => (0, r.jsx)(t1, { icon: tj.u, tooltip: P.intl.string(P.t.YGm6SZ), onClick: () => tH.U() }),
    t9 = () => (0, r.jsx)(t1, { icon: tv.E, tooltip: P.intl.string(P.t.TVAd5J), onClick: () => tH.v7() }),
    t8 = (t) => {
        let { item: e } = t;
        return (0, r.jsx)(t1, {
            icon: tD.z,
            tooltip: P.intl.string(P.t["Eqb+LN"]),
            onClick: () => tH.BO(e.applicationId, e.branchId),
        });
    },
    et = (t) => {
        let { item: e } = t;
        return (0, r.jsx)(t1, {
            icon: tM.P,
            tooltip: P.intl.string(P.t["0lFmC9"]),
            onClick: () => tH.ZT(e.applicationId, e.branchId),
        });
    },
    ee = [
        {
            key: "name",
            cellClassName: tZ.UQ,
            render: (t) =>
                (0, r.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, r.jsx)($.A, { game: t.application, className: tZ.__invalid_gameIcon, size: $.M.SMALL }),
                        (0, r.jsx)("div", { className: tZ.TF, children: t.application.name }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: tZ.Ay,
            headerCellClassName: tZ.VD,
            bodyCellClassName: tZ.so,
            render: (t, e) => (0, r.jsx)(t3, { item: t, cellProps: e }),
        },
        {
            key: "actions",
            cellClassName: tZ.AT,
            render(t, e) {
                let n, i;
                return (
                    t.finished
                        ? (n =
                              null != t.libraryApplication
                                  ? (0, r.jsx)(Q.A, {
                                        libraryApplication: t.libraryApplication,
                                        size: "sm",
                                        source: L.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != t.state
                          ? t.state.type !== L.WTw.UP_TO_DATE &&
                            ((n =
                                t.index > 0
                                    ? (0, r.jsx)(t8, { item: t })
                                    : null != e && e.paused
                                      ? (0, r.jsx)(t7, {})
                                      : (0, r.jsx)(t9, { item: t })),
                            (i = (0, r.jsx)(et, { item: t })))
                          : (i = (0, r.jsx)(et, { item: t })),
                    (0, r.jsxs)("div", { className: tZ.sG, children: [n, i] })
                );
            },
        },
    ];
class en extends i.PureComponent {
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
                    tH.Vt(t.applicationId, t.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    throttledUpdateHeight = tR().throttle(() => {
        if (this.isUnmounted) return;
        let { height: t, onHeightTallerThanHalfViewportChange: e } = this.props,
            n = t > window.innerHeight / 2;
        this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), e(n));
    }, 1e3);
    render() {
        let { applications: t, paused: e, isFocused: i, theme: s, analyticsContext: l } = this.props;
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: tZ.xP,
                  children: [
                      (0, r.jsxs)("div", {
                          className: tZ.U1,
                          children: [
                              (0, r.jsx)(tq, {
                                  className: u()(tZ.e4, tZ.Eg),
                                  title: P.intl.string(P.t.ytoXKr),
                                  getHistoricalTotalBytes: tV.A.getHistoricalTotalBytesDownloaded,
                                  color: tL.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                              (0, r.jsx)(tq, {
                                  className: u()(tZ.e4, tZ.pn),
                                  title: P.intl.string(P.t.SjohhI),
                                  getHistoricalTotalBytes: tV.A.getHistoricalTotalBytesWritten,
                                  color: tL.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)(Z.A, {
                          hasHeader: !1,
                          columns: ee,
                          data: t,
                          className: tZ.tp,
                          rowClassName: tZ.nM,
                          rowComponent: t$,
                          cellProps: { paused: e, isFocused: i, theme: s },
                          rowProps: {
                              onContextMenu: (t, e) => {
                                  J.L3(t, async () => {
                                      let { default: t } = await n.e("45794").then(n.bind(n, 451897));
                                      return (n) =>
                                          (0, r.jsx)(t, {
                                              ...n,
                                              applicationId: e.applicationId,
                                              branchId: e.branchId,
                                              analyticsContext: l,
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
function er(t, e, n, r) {
    return t.reduce((t, i, s) => {
        let { applicationId: l, branchId: a } = i,
            o = n.getApplication(l),
            c = r.getState(l, a);
        return (
            null != o &&
                t.push({
                    key: `${l}:${a}`,
                    applicationId: l,
                    branchId: a,
                    state: c,
                    application: o,
                    libraryApplication: tG.A.getLibraryApplication(l, a),
                    finished: e,
                    index: s,
                }),
            t
        );
    }, []);
}
let ei = (0, tB.A)(
    I.Ay.connectStores([tU.A, tV.A, tK.A, tk.A, tF.A], () => ({
        applications: [...er(tK.A.activeItems, !1, tU.A, tV.A), ...er(tK.A.finishedItems, !0, tU.A, tV.A)],
        paused: tK.A.paused,
        isFocused: tF.A.isFocused(),
        theme: tk.A.theme,
    }))((0, tO.A)(en)),
);
var es = n(613057),
    el = n(20438);
class ea extends i.PureComponent {
    _scrollerRef = i.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        A.I(L.BVt.APPLICATION_LIBRARY),
            (0, _.h)(es.XK.LIBRARY),
            p.h.wait(() => (0, g.r)()),
            (0, m.X)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    handleHeightTallerThanHalfViewportChange = (t) => {
        this.setState({ includeUpdatesInScroller: t });
    };
    renderToolbar() {
        return (0, r.jsx)(v, {});
    }
    scrollToRow = (t, e) => {
        let n = this._scrollerRef.current;
        null != n
            ? (t.focus(), n.scrollIntoViewRect({ start: e, end: e }), (this._scrollToOnMount = null))
            : ((this._scrollToOnMount = t), (this._scrollToPadding = e));
    };
    render() {
        let { includeUpdatesInScroller: t } = this.state,
            e = (0, r.jsx)("div", {
                children: (0, r.jsx)(l.A, {
                    section: L.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, r.jsx)(ei, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(V, { currentRoute: L.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                t ? null : e,
                (0, r.jsxs)(h.Gt, {
                    className: u()(el.k, el.X),
                    ref: this._scrollerRef,
                    children: [
                        t ? e : null,
                        (0, r.jsx)(l.A, {
                            section: L.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, r.jsx)(ty, { stickyHeader: !t, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
var eo = n(665260),
    ec = n(939249),
    ed = n(534514),
    eu = n(331322),
    eh = n(243721),
    ep = n(404778),
    eA = n(364522),
    eg = n(59636),
    em = n(253932),
    e_ = n(314116),
    ef = n(834730),
    eI = n(821609),
    eN = n(359778),
    eT = n(292666),
    ex = n(150934),
    eC = n(825484),
    ey = n(452027),
    eS = n(466472),
    eR = n(29160),
    eE = n(834911);
let eL = Math.ceil(2 * Math.PI * 20),
    eb = (t) => {
        let e,
            n,
            i,
            s,
            { total: l, used: a } = t,
            o = Math.max(0, Math.min(1, a / l)),
            c = `${Math.floor(100 * o)}%`;
        return (0, r.jsx)(F.m, {
            text: P.intl.formatToPlainString(P.t["2eoRMh"], { used: c }),
            children: (0, r.jsxs)("div", {
                className: eE.iE,
                role: "progressbar",
                "aria-label": P.intl.formatToPlainString(P.t["2eoRMh"], { used: c }),
                children: [
                    (0, r.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: eE.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)("circle", { className: eE.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, r.jsx)("circle", {
                                className: eE.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((e = Math.round(-85 * o + 199)),
                                    (n = Math.round(-71 * o + 208)),
                                    (i = Math.round(-22 * o + 240)),
                                    `rgb(${e}, ${n}, ${i})`),
                                strokeDasharray: ((s = Math.floor(eL * o)), `${s}, ${eL}`),
                            }),
                        ],
                    }),
                    (0, r.jsx)("aside", { className: eE.Y3, "aria-hidden": !0, children: c }),
                ],
            }),
        });
    };
var eP = n(775228),
    ew = n(723702),
    ej = n(19575),
    ev = n(744832),
    eD = n(818050);
class eM extends i.PureComponent {
    state = { label: void 0, isDefault: null };
    handleStartEditing = () => {
        let { path: t, label: e, isDefault: n, onToggleEditing: r } = this.props;
        r(t), this.setState({ label: e, isDefault: n });
    };
    handleStopEditing = () => {
        let { onToggleEditing: t } = this.props;
        t(null), this.setState({ label: void 0, isDefault: null });
    };
    handleRemoveLocation = () => {
        (0, e_.A)({
            title: P.intl.string(P.t.iBUzS5),
            subtitle: P.intl.string(P.t["1XqeW2"]),
            confirmText: P.intl.string(P.t.iBUzS5),
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
            ? (0, r.jsx)(eb, { total: t.totalKB, used: t.totalKB - t.availableKB })
            : null;
    }
    renderViewing() {
        let t,
            e,
            { path: n, label: i, editingPath: s, isDefault: l, metadata: a } = this.props;
        return (
            null != a &&
                ((t = null != a.availableKB ? (0, tY.Xq)(a.availableKB, { useKibibytes: !0 }) : null),
                (e = null != a.totalKB ? (0, tY.Xq)(a.totalKB, { useKibibytes: !0 }) : null)),
            (0, r.jsxs)(q.A, {
                className: ev.ce,
                align: q.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: ev.__invalid_descriptionWrapper,
                        children: [
                            (0, r.jsxs)(q.A, {
                                align: q.A.Align.CENTER,
                                children: [
                                    (0, r.jsx)(ed.D, {
                                        className: ev.nM,
                                        variant: "heading-md/semibold",
                                        children: null != i ? i : eP.A.getLabelFromPath(n),
                                    }),
                                    l
                                        ? (0, r.jsx)("span", { className: ev.Zn, children: P.intl.string(P.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != a && null != t && null != e
                                ? (0, r.jsx)(eR.A, {
                                      className: ev.fw,
                                      hoverText: P.intl.formatToPlainString(P.t["Fxo9e+"], { available: t, total: e }),
                                      children: n,
                                  })
                                : (0, r.jsx)(ef.E, { className: ev.fw, variant: "text-xs/normal", children: n }),
                        ],
                    }),
                    (0, r.jsx)(eI.$, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t.bt75uw),
                        disabled: null != s,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: t, hasGamesInstalledInPath: e } = this.props,
            { label: n, isDefault: i } = this.state;
        return (0, r.jsx)(eN.Z, {
            editable: !0,
            className: ev.uP,
            children: (0, r.jsxs)(q.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(q.A.Child, {
                        children: [
                            (0, r.jsx)(eT.k, {
                                label: P.intl.string(P.t.AJkKCB),
                                value: n,
                                placeholder: eP.A.getLabelFromPath(t),
                                onChange: this.handleLabelChange,
                            }),
                            (0, r.jsx)("div", {
                                className: eD.QX,
                                children: (0, r.jsx)(eT.k, {
                                    label: P.intl.string(P.t.lnUCwX),
                                    disabled: !0,
                                    value: t,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: ev.gZ,
                                children: (0, r.jsx)(ex.S, {
                                    checked: null != i ? i : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: P.intl.string(P.t.Z2MWuH),
                                }),
                            }),
                            (0, r.jsx)(ep.c, { className: ev.me }),
                            (0, r.jsxs)(q.A, {
                                children: [
                                    (0, r.jsx)(eI.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: P.intl.string(P.t.iBUzS5),
                                        disabled: e || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, r.jsx)(q.A, {
                                        justify: q.A.Justify.END,
                                        children: (0, r.jsxs)(eC.e, {
                                            children: [
                                                (0, r.jsx)(eI.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: P.intl.string(P.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, r.jsx)(eI.$, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: P.intl.string(P.t["R3BPH+"]),
                                                    disabled:
                                                        t === this.props.path &&
                                                        n === this.props.label &&
                                                        i === this.props.isDefault,
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
class eH extends i.PureComponent {
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
        ej.Ay.showOpenDialog(["openDirectory"]).then((t) => {
            null != t && 0 !== t.length && null != t[0] && "undefined" !== t[0] && (0, eS.SA)(t[0]);
        });
    };
    handleToggleEditing = (t) => {
        this.setState({ editingPath: t });
    };
    render() {
        let { installationPaths: t, installationPathsMetadata: e, defaultInstallationPath: n } = this.props,
            { editingPath: i } = this.state;
        return (0, r.jsx)("div", {
            className: ev.iE,
            children: (0, r.jsxs)(ey.D, {
                label: P.intl.string(P.t.aLszkC),
                children: [
                    t.map((t) => {
                        let { path: s, label: l } = t;
                        return (0, r.jsx)(
                            eM,
                            {
                                path: s,
                                label: l,
                                metadata: e[s],
                                isDefault: n === s,
                                editingPath: i,
                                hasGamesInstalledInPath: eP.A.hasGamesInstalledInPath(s),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            s,
                        );
                    }),
                    (0, r.jsx)("div", {
                        className: ev.sW,
                        children: (0, r.jsx)(eI.$, {
                            variant: "primary",
                            size: "sm",
                            text: P.intl.string(P.t.pnZ2uk),
                            disabled: !ew.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
}
let eO = I.Ay.connectStores([eP.A], () => ({
    installationPaths: eP.A.installationPaths,
    installationPathsMetadata: eP.A.installationPathsMetadata,
    defaultInstallationPath: eP.A.defaultInstallationPath,
}))(eH);
var eB = n(869187);
function eU(t) {
    let { applicationViewItems: e, restoreApplication: n } = t;
    if (0 === e.length) return null;
    let i = e.map((t) => {
        let e = t.libraryApplication.getDistributor();
        return (0, r.jsxs)(
            "div",
            {
                className: eB.Kp,
                children: [
                    (0, r.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: eB.Hm,
                        children: [
                            (0, r.jsx)("div", {
                                className: eB.SX,
                                children: t.libraryApplication.getBranchedName(t.application),
                            }),
                            null != e ? (0, r.jsx)("div", { className: eB.ME, children: L.gG4[e] }) : null,
                        ],
                    }),
                    (0, r.jsx)(ec.D, {
                        className: eB.P5,
                        onClick: () => n(t.libraryApplication),
                        children: (0, r.jsx)(tM.P, { size: "md", color: "currentColor", className: eB.q_ }),
                    }),
                ],
            },
            t.key,
        );
    });
    return (0, r.jsxs)("div", {
        className: eB.z0,
        children: [
            (0, r.jsx)(ed.D, {
                variant: "heading-md/semibold",
                className: eB.Z9,
                children: P.intl.string(P.t["5PJtrH"]),
            }),
            i,
        ],
    });
}
class ek extends i.PureComponent {
    handleToggleShortcutDesktop(t) {
        em.uB.updateSetting(t);
    }
    handleToggleShortcutStartMenu(t) {
        em.Pf.updateSetting(t);
    }
    trackRestoreApplication(t, e) {
        B.default.track(L.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: e, ...t.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (t) => {
        let e = eo.PQ(t.getFlags(), L.hM6.HIDDEN);
        eg.V(t.id, t.branchId, e), this.trackRestoreApplication(t, eo.Lt(e, L.hM6.HIDDEN));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: t,
            installShortcutDesktop: e,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, r.jsxs)("div", {
            className: eB.rf,
            children: [
                (0, U.S)()
                    ? (0, r.jsxs)(eu.B, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(eh.d, {
                                  label: P.intl.string(P.t["9ID+Kh"]),
                                  description: P.intl.string(P.t.vT61N0),
                                  checked: e,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, r.jsx)(ep.c, {}),
                              (0, r.jsx)(eh.d, {
                                  label: P.intl.string(P.t.vNpUMz),
                                  description: P.intl.string(P.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, r.jsx)(ep.c, {}),
                              (0, r.jsx)(eO, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(eU, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: t,
                }),
            ],
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(V, { currentRoute: L.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, r.jsx)(eA.Ar, { className: eB.XG, children: this.renderBody() }),
            ],
        });
    }
}
function eG() {
    let t = {
        installShortcutDesktop: em.uB.useSetting(),
        installShortcutStartMenu: em.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, I.bG)([S.A], () => S.A.hiddenLibraryApplicationViewItems),
    };
    return (0, r.jsx)(ek, { ...t });
}
var eV = n(536813);
function eK() {
    return (0, r.jsxs)(s.dO, {
        children: [
            (0, r.jsx)(a.A, {
                path: L.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, r.jsxs)(l.A, {
                    page: L.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, r.jsx)(o.HI, { subsection: P.intl.string(P.t["3D5yo/"]) }), (0, r.jsx)(eG, {})],
                }),
            }),
            (0, r.jsx)(a.A, {
                path: L.BVt.APPLICATION_LIBRARY,
                children: (0, r.jsxs)(l.A, {
                    page: L.liQ.LIBRARY,
                    root: !0,
                    children: [(0, r.jsx)(o.HI, { subsection: P.intl.string(P.t.p7ARTB) }), (0, r.jsx)(ea, {})],
                }),
            }),
        ],
    });
}
let eF = i.memo(function () {
    return (
        i.useEffect(() => {
            (0, c.d)("application_library");
        }, []),
        (0, r.jsxs)("div", {
            className: eV.k,
            children: [(0, r.jsx)(o.HI, { location: P.intl.string(P.t.cw57ar) }), (0, r.jsx)(eK, {})],
        })
    );
});
