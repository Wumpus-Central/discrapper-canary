"use strict";
n.r(t), n.d(t, { default: () => tF });
var l = n(627968),
    i = n(64700),
    s = n(873263),
    r = n(820284),
    a = n(549711),
    o = n(726249),
    c = n(210714),
    d = n(503698),
    h = n.n(d),
    p = n(689175),
    u = n(228366),
    m = n(944791),
    A = n(712963),
    g = n(661439),
    f = n(970672),
    _ = n(621466),
    x = n(17928),
    y = n(892547),
    N = n(192308);
function C(e) {
    u.h.dispatch({ type: "LIBRARY_APPLICATION_FILTER_UPDATE", query: e });
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    u.h.dispatch({ type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE", key: e, isKeyboardEvent: t });
}
var T = n(186111),
    S = n(742077),
    b = n(268387),
    R = n(715671),
    w = n(652215),
    P = n(650583),
    j = n(985018),
    v = n(326112);
class E extends i.Component {
    searchBarRef = i.createRef();
    state = { focused: !1 };
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount() {
        u.h.wait(() => I(null)), document.removeEventListener("keydown", this.handleKeyDown);
    }
    reset() {
        I(null), C("");
    }
    focusInput() {
        let { searchBarRef: e } = this;
        null != e && e.current?.focus();
    }
    updateActiveRow(e) {
        let { applicationViewItems: t, activeRowKey: n } = this.props,
            l = t.findIndex((e) => e.key === n),
            i = 0;
        l >= 0 && (i = (l + e) % t.length) < 0 && (i = t.length - 1);
        let s = t[i];
        I(null != s ? s.key : null, !0);
    }
    handleKeyDown = (e) => {
        let { activeRowKey: t, hasModalOpen: n, applicationViewItems: l } = this.props,
            { searchBarRef: i } = this;
        if (n || e.ctrlKey || e.altKey || e.metaKey || null == i) return;
        let s = (0, _.BF)(e)?.activeElement;
        if (!(s !== i.current && (0, _.Cw)(s)))
            switch (e.key) {
                case P.dh.ESCAPE:
                    e.target !== i.current ? this.reset() : null != i.current && i.current?.blur();
                    break;
                case P.dh.ENTER:
                    if (null != t) {
                        e.preventDefault();
                        let n = l.find((e) => e.key === t);
                        if (null == n) return;
                        let i = n.libraryApplication;
                        R.performDefaultLibraryApplicationAction(i, {
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
                case P.dh.ARROW_DOWN:
                case P.dh.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.key === P.dh.ARROW_DOWN ? 1 : -1);
                    break;
                default:
                    null != i.current && e.target !== i.current && i.current?.focus();
            }
    };
    render() {
        let { filterQuery: e } = this.props,
            { focused: t } = this.state;
        return (0, l.jsx)("div", {
            className: h()({ [v.sw]: !0, [v.in]: t }),
            children: (0, l.jsx)(y.I, {
                ref: this.searchBarRef,
                onChange: C,
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onClear: () => {
                    this.reset(), this.focusInput();
                },
                query: e,
                placeholder: j.intl.string(j.t.aSxWSo),
            }),
        });
    }
}
function L() {
    let e = (0, x.bG)([T.A], () => T.A.hasLayers()),
        t = (0, N.useModalsStore)(N.hasAnyModalOpenSelector);
    return (0, l.jsx)(E, {
        activeRowKey: (0, x.bG)([b.A], () => b.A.activeRowKey),
        hasModalOpen: t || e,
        filterQuery: (0, x.bG)([S.A], () => S.A.applicationFilterQuery),
        applicationViewItems: (0, x.bG)([S.A], () => S.A.sortedFilteredLibraryApplicationViewItems),
    });
}
var D = n(657044),
    M = n(761508),
    B = n(742589),
    O = n(976860),
    k = n(954571),
    U = n(144914),
    V = n(256855);
let H = (0, U.S)() || !1,
    G = i.memo(function (e) {
        let { currentRoute: t, renderToolbar: n } = e,
            s = i.useContext(k.AnalyticsContext),
            r = H || t === w.BVt.APPLICATION_LIBRARY_SETTINGS;
        return (0, l.jsxs)(B.A, {
            className: V.$,
            toolbar: n?.(),
            children: [
                (0, l.jsx)(B.A.Icon, { icon: D._, "aria-hidden": !0 }),
                (0, l.jsx)(B.A.Title, { children: j.intl.string(j.t.cw57ar) }),
                (0, l.jsx)(B.A.Divider, {}),
                (0, l.jsxs)(M.V, {
                    type: "top-pill",
                    selectedItem: t,
                    onItemSelect: function (e) {
                        e !== t &&
                            (0, O.pX)(e, {
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
                        (0, l.jsx)(M.V.Item, { id: w.BVt.APPLICATION_LIBRARY, children: j.intl.string(j.t.p7ARTB) }),
                        r
                            ? (0, l.jsx)(M.V.Item, {
                                  id: w.BVt.APPLICATION_LIBRARY_SETTINGS,
                                  children: j.intl.string(j.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
var K = n(451988),
    F = n(990078),
    W = n(319060),
    X = n(403581),
    z = n(952270),
    Y = n(1215),
    J = n(442433),
    Q = n(979604),
    q = n(235986),
    Z = n(596719),
    $ = n(137177),
    ee = n(290987),
    et = n(674378),
    en = n(240248),
    el = n(565787),
    ei = n(95635),
    es = n(32880),
    er = n(465797),
    ea = n(953727);
let eo = (e) => {
    let { id: t, startColor: n, stopColor: i, color: s, stop: r } = e;
    return (0, l.jsxs)("linearGradient", {
        id: t,
        children: [
            (0, l.jsx)("stop", { offset: "0", stopColor: n }),
            (0, l.jsx)("stop", { offset: r, stopColor: i }),
            (0, l.jsx)("stop", { offset: r, stopColor: s }),
            (0, l.jsx)("stop", { offset: "1", stopColor: s }),
        ],
    });
};
function ec(e) {
    return `CloudDone-${e}`;
}
let ed = (0, el.k)(function (e) {
        let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, ...r } = e;
        return (0, l.jsx)("svg", {
            ...(0, ea.A)(r),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, l.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                    (0, l.jsx)("path", {
                        className: s,
                        fill: i,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
                    }),
                    (0, l.jsx)("rect", { width: "24", height: "24" }),
                ],
            }),
        });
    }),
    eh = (0, el.k)(function (e) {
        let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: s, gradientConfig: r, ...a } = e,
            o = null;
        return (
            null != r && (o = (0, l.jsx)(eo, { ...r, color: i, id: ec(r.id) })),
            (0, l.jsxs)("svg", {
                ...(0, ea.A)(a),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("defs", { children: o }),
                    (0, l.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    (0, l.jsx)("path", {
                        fill: null != r ? `url(#${ec(r.id)})` : i,
                        className: s,
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z",
                    }),
                ],
            })
        );
    }),
    ep = new Set([w.VX0.PUSHING, w.VX0.PULLING]),
    eu = Object.freeze({
        [w.VX0.DONE]: ed,
        [w.VX0.PLANNING]: ed,
        [w.VX0.PREPARING]: ed,
        [w.VX0.PUSHING]: ei.J,
        [w.VX0.PULLING]: es.s,
        [w.VX0.CONFLICT]: ed,
        [w.VX0.ERROR]: ed,
    });
class em extends i.PureComponent {
    _doneTimer = new K.Ep();
    componentDidMount() {
        this.getIsRecentlySynced() && this.setRecentlySyncedTimeout();
    }
    componentDidUpdate(e) {
        null != this.props.cloudSyncState &&
            this.props.cloudSyncState.type === w.VX0.DONE &&
            null != this.props.cloudSyncState.timestamp &&
            (null == e.cloudSyncState || null == e.cloudSyncState.timestamp) &&
            this.setRecentlySyncedTimeout();
    }
    componentWillUnmount() {
        this._doneTimer.stop();
    }
    setRecentlySyncedTimeout() {
        this._doneTimer.start(2e3, () => this.forceUpdate());
    }
    getIsRecentlySynced() {
        let { cloudSyncState: e } = this.props;
        if (null != e && e.type === w.VX0.DONE) {
            let t = e.timestamp;
            return null != t && Date.now() - t <= 2e3;
        }
        return !1;
    }
    getStop(e, t) {
        if (t) return 1;
        if (e.type === w.VX0.PUSHING || e.type === w.VX0.PULLING) {
            let { progress: t, total: n } = e;
            return t / n;
        }
        return 0;
    }
    getTooltip(e, t) {
        switch (e.type) {
            case w.VX0.DONE:
                if (t) return j.intl.string(j.t.atpo0W);
                return j.intl.string(j.t.ZCw6zh);
            case w.VX0.CONFLICT:
            case w.VX0.ERROR:
                return j.intl.string(j.t.ZCw6zh);
            case w.VX0.PLANNING:
                return j.intl.string(j.t.ERQ0VA);
            case w.VX0.PREPARING:
                return j.intl.string(j.t.n5feu3);
            case w.VX0.PUSHING:
                return j.intl.string(j.t.oCBh0J);
            case w.VX0.PULLING:
                return j.intl.string(j.t.RTLNqC);
            default:
                return null;
        }
    }
    render() {
        let { cloudSyncState: e, libraryApplication: t, className: n } = this.props,
            i = null == e ? { type: w.VX0.DONE } : e,
            s = this.getIsRecentlySynced();
        (ep.has(i.type) || s) && (t.id, this.getStop(i, s));
        let r = s ? eh : eu[i.type];
        return (0, l.jsx)(F.m, { text: this.getTooltip(i, s), children: (0, l.jsx)(r, { className: n }) });
    }
}
let eA = x.Ay.connectStores([er.A], (e) => {
    let { libraryApplication: t } = e;
    return { cloudSyncState: er.A.getState(t.id, t.branchId) };
})(em);
var eg = n(855189);
let ef = (0, en.xI)(W.A.GAME_LIST_ROW_MIN_HEIGHT),
    e_ = (0, en.xI)(W.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    ex = Object.freeze({ [w.DpB.PLATFORM]: "Platform", [w.DpB.LAST_PLAYED]: "Last Played", [w.DpB.NAME]: "Name" }),
    ey = (e) => {
        let { flag: t, icon: n, item: i, tooltip: s } = e,
            r = i.libraryApplication.hasFlag(t);
        return (0, l.jsx)(F.m, { text: s, children: (0, l.jsx)(n, { className: h()(eg.up, { [eg.R]: !r }) }) });
    },
    eN = [
        {
            key: w.DpB.NAME,
            renderHeader: () => j.intl.string(j.t.dBfWfc),
            sort: !0,
            cellClassName: eg.UQ,
            bodyCellClassName: eg.SJ,
            render: (e) =>
                (0, l.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, l.jsx)($.A, { game: e.application, size: $.M.SMALL, className: eg.Gt }),
                        (0, l.jsxs)("div", {
                            className: eg.Ot,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eg.TF,
                                    children: e.libraryApplication.getBranchedName(e.application),
                                }),
                                e.libraryApplication.hasFlag(w.hM6.PREMIUM)
                                    ? (0, l.jsx)(F.m, {
                                          text: j.intl.string(j.t.tG2SzG),
                                          children: (0, l.jsx)(X.t, {
                                              size: "md",
                                              color: "currentColor",
                                              className: eg.oU,
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
            renderHeader: () => j.intl.string(j.t.YR4cHH),
            sort: !0,
            cellClassName: eg.AA,
            bodyCellClassName: eg.iV,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, l.jsx)(q.A, {
                    align: q.A.Align.CENTER,
                    children: null != t ? w.gG4[t] : j.intl.string(j.t["F+l3Jt"]),
                });
            },
        },
        {
            key: w.DpB.LAST_PLAYED,
            renderHeader: () => j.intl.string(j.t.FDDyjS),
            sort: !0,
            cellClassName: eg.SX,
            bodyCellClassName: eg.iV,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? j.intl.string(j.t.Md326p)
                        : e.isNew
                          ? j.intl.string(j.t["+F0Tho"])
                          : 0 !== e.lastPlayed
                            ? (0, l.jsx)(ee.Ay, {
                                  end: e.lastPlayed,
                                  location: ee.Ay.Locations.GAME_LIBRARY_LAST_PLAYED,
                              })
                            : j.intl.string(j.t.EoWLru)),
                    (0, l.jsx)(q.A, { align: q.A.Align.CENTER, className: h()({ [eg.g3]: e.isNew }), children: t })
                );
            },
        },
        {
            key: w.DpB.ACTIONS,
            renderHeader: () => null,
            cellClassName: eg.AT,
            render(e, t, n) {
                var s, r;
                if (null == t) throw Error("No cell props defined.");
                let a = e.key === t.activeRowKey;
                return (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: eg.nU,
                            children: [
                                (0, l.jsx)(ey, {
                                    flag: w.hM6.PRIVATE,
                                    item: e,
                                    icon: z.G,
                                    tooltip: j.intl.string(j.t.NozAop),
                                }),
                                (0, l.jsx)(ey, {
                                    flag: w.hM6.OVERLAY_DISABLED,
                                    item: e,
                                    icon: Y.n,
                                    tooltip: j.intl.string(j.t.Az9eqn),
                                }),
                                (0, l.jsx)(eA, {
                                    className: h()(eg.up, { [eg.R]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication,
                                }),
                            ],
                        }),
                        (0, et.XZ)(e.libraryApplication)
                            ? (0, l.jsx)(Q.A, {
                                  analyticsListSort:
                                      ((s = t.sortKey),
                                      (r = t.sortDirection),
                                      `${ex[s]} ${r === w.tSW.ASCENDING ? "ASC" : "DESC"}`),
                                  analyticsListIndex: n,
                                  source: w.ThZ.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  playButtonVariant: a ? "primary" : "secondary",
                                  size: "sm",
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey(),
                              })
                            : (0, l.jsx)("div", { children: "deprecated!" }),
                    ],
                });
            },
        },
    ],
    eC = (e) => {
        let {
                item: t,
                activeRowKey: n,
                highlightedApplicationKey: i,
                onMouseEnter: s,
                onMouseLeave: r,
                onContextMenu: a,
                setRef: o,
                ...c
            } = e,
            d = t.key === n,
            p = t.key === i;
        return (0, l.jsx)("div", {
            className: h()({ [eg.eO]: d && !p, [eg.HM]: p, [eg.Ob]: !d && !p, [eg.ic]: !d && !t.isLaunchable }),
            ref: (e) => {
                o(e, t.key);
            },
            onMouseEnter: () => s(t),
            onMouseLeave: r,
            onContextMenu: (e) => a(e, t),
            children: (0, l.jsx)("div", { ...c }),
        });
    };
class eI extends i.PureComponent {
    static defaultProps = { stickyHeader: !1 };
    _didUnmount = !1;
    _rowRefs = {};
    state = {
        overflowMenuRowKey: null,
        highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null,
    };
    componentDidMount() {
        let { fetched: e } = this.props;
        e && (this.handleHighlightedApplicationKey(), this.trackViewed());
    }
    componentWillUnmount() {
        this._didUnmount = !0;
    }
    componentDidUpdate(e) {
        !e.fetched && this.props.fetched && (this.handleHighlightedApplicationKey(), this.trackViewed());
        let t = this.props.activeRowKey;
        if (null != t && e.activeRowKey !== t && this.props.isNavigatingByKeyboard) {
            let e = this._rowRefs[t];
            null != e && (u.h.wait(J.Z_), this.props.scrollToRow(e, ef));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], ef),
            new K.Ep().start(e_, () => {
                this._didUnmount || this.setState({ highlightedApplicationKey: null });
            }));
    }
    trackViewed() {
        let e = {
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
            { analyticsContext: t, applicationViewItems: n } = this.props;
        for (let t of n) {
            switch (t.libraryApplication.getDistributor()) {
                case w.d3x.DISCORD:
                    e.num_applications_discord++;
                    break;
                case w.d3x.STEAM:
                    e.num_applications_steam++;
                    break;
                case w.d3x.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case w.d3x.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case w.d3x.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case w.d3x.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case w.d3x.GOG:
                    e.num_applications_gog++;
                    break;
                case w.d3x.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        k.default.track(w.HAw.LIBRARY_VIEWED, { ...e, load_id: t.loadId });
    }
    setActiveRowKey = (e) => {
        this.setState({ overflowMenuRowKey: e.key });
    };
    clearActiveRowKey = () => {
        this._didUnmount || this.setState({ overflowMenuRowKey: null });
    };
    handleRowMouseEnter = (e) => {
        this.props.isNavigatingByKeyboard || I(e.key);
    };
    handleRowMouseLeave = () => {
        this.props.isNavigatingByKeyboard || I(null);
    };
    setRowRef = (e, t) => {
        this._rowRefs[t] = e;
    };
    handleApplicationContextMenu = (e, t) => {
        this.setActiveRowKey(t);
        let { analyticsContext: i } = this.props;
        (0, J.L3)(
            e,
            async () => {
                let { default: e } = await n.e("45794").then(n.bind(n, 451897));
                return (n) =>
                    (0, l.jsx)(e, {
                        ...n,
                        applicationId: t.libraryApplication.id,
                        branchId: t.libraryApplication.branchId,
                        analyticsContext: i,
                    });
            },
            { onClose: this.clearActiveRowKey },
        );
    };
    handleSort(e, t) {
        u.h.dispatch({ type: "LIBRARY_TABLE_SORT_UPDATE", key: e, direction: t });
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props;
        return t.length > 0
            ? null
            : ((e = "" !== n ? j.intl.format(j.t["4Q1TAr"], { query: n }) : j.intl.string(j.t["0Y+0PY"])),
              (0, l.jsxs)("div", {
                  className: eg.mv,
                  children: [
                      (0, l.jsx)("div", { className: eg.Zd }),
                      (0, l.jsx)(q.A, {
                          grow: 0,
                          shrink: 0,
                          direction: q.A.Direction.VERTICAL,
                          children: (0, l.jsxs)("div", {
                              className: eg.q6,
                              children: [
                                  (0, l.jsx)("div", { className: eg.ks, children: j.intl.string(j.t.Lw8X2j) }),
                                  (0, l.jsx)("div", { className: eg.Li, children: e }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: s, stickyHeader: r } = this.props,
            { overflowMenuRowKey: a, highlightedApplicationKey: o } = this.state;
        return (0, l.jsxs)(i.Fragment, {
            children: [
                n.length > 0
                    ? (0, l.jsx)(Z.A, {
                          columns: eN,
                          data: n,
                          sortData: !1,
                          rowComponent: eC,
                          className: eg.tp,
                          headerClassName: r ? eg.ln : eg.wx,
                          headerCellClassName: eg.e4,
                          sortedHeaderCellClassName: eg.dm,
                          bodyCellClassName: eg.hC,
                          rowClassName: eg.G9,
                          sortKey: e,
                          sortDirection: t,
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
                              sortKey: e,
                              sortDirection: t,
                          },
                          onSort: this.handleSort,
                      })
                    : null,
                this.renderImportHelp(),
            ],
        });
    }
}
function eT(e) {
    let t = i.useContext(k.AnalyticsContext),
        n = (0, s.zy)(),
        {
            applicationViewItems: r,
            filterQuery: a,
            fetched: o,
        } = (0, x.cf)([S.A], () => ({
            applicationViewItems: S.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: S.A.applicationFilterQuery,
            fetched: S.A.hasFetchedApplications,
        })),
        {
            sortKey: c,
            sortDirection: d,
            activeRowKey: h,
            isNavigatingByKeyboard: p,
        } = (0, x.cf)([b.A], () => ({
            sortKey: b.A.sortKey,
            sortDirection: b.A.sortDirection,
            activeRowKey: b.A.activeRowKey,
            isNavigatingByKeyboard: b.A.isNavigatingByKeyboard,
        }));
    return (0, l.jsx)(eI, {
        ...e,
        analyticsContext: t,
        location: n,
        applicationViewItems: r,
        filterQuery: a,
        fetched: o,
        sortKey: c,
        sortDirection: d,
        activeRowKey: h,
        isNavigatingByKeyboard: p,
    });
}
n(321073);
var eS = n(735438),
    eb = n.n(eS),
    eR = n(408278),
    ew = n(661531),
    eP = n(462887),
    ej = n(5373),
    ev = n(248530),
    eE = n(782134),
    eL = n(113494),
    eD = n(872351),
    eM = n(789645),
    eB = n(92077),
    eO = n(707606),
    ek = n(456412),
    eU = n(587895),
    eV = n(363195),
    eH = n(189081),
    eG = n(340829),
    eK = n(966846),
    eF = n(531685),
    eW = n(255438),
    eX = n(505806),
    ez = n(998304),
    eY = n(936593);
class eJ extends i.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = i.createRef();
    animationFrameRequestId;
    static defaultProps = { animate: !0 };
    onDataUpdate(e, t) {
        let { maxValue: n, data: l, animate: i } = this.props,
            s = null == e || (e.data !== t.data && !eb().isEqual(e.data, t.data));
        if (
            (s && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...l))),
            s || null == e || (!e.animate && i) || e.color !== this.props.color)
        ) {
            let e = ez.E2(this.props.color);
            (this.fillColor = `rgba(${e.r}, ${e.g}, ${e.b}, 0.5)`),
                window.cancelAnimationFrame(this.animationFrameRequestId),
                (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
        }
    }
    componentDidMount() {
        (this.animationFrameRequestId = 0), this.onDataUpdate(null, this.props);
    }
    componentDidUpdate(e) {
        this.onDataUpdate(e, this.props);
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = 0);
    }
    updateAnimation = (e) => {
        let t,
            n,
            l = this.canvas.current;
        if (null == l) return;
        let {
            data: i,
            updateInterval: s,
            color: r,
            numUpdatesToShow: a,
            lineWidth: o,
            animate: c,
            gradientStopColor: d,
        } = this.props;
        if (i.length < 2) return;
        let h = Math.max(Math.min((e - this.dataChangedAt) / s, 1), 0),
            p = l.getContext("2d"),
            u = this.maxValue;
        (p.strokeStyle = r), (p.lineWidth = o);
        let m = l.height - p.lineWidth,
            A = p.createLinearGradient(0, 0, 0, m);
        if (null != d) A.addColorStop(0, d);
        else {
            let { r: e, g: t, b: n } = ez.E2(r);
            A.addColorStop(0, `rgba(${e}, ${t}, ${n}, 0)`);
        }
        A.addColorStop(1, this.fillColor), (p.fillStyle = A);
        let g = i.length >= a ? a : i.length;
        p.setTransform(1, 0, 0, -1, 0, l.height),
            p.clearRect(0, 0, l.width, l.height),
            p.translate(0, 0.5 * p.lineWidth);
        let f = Math.floor(l.width / (g - 3)),
            _ = 0.5 * f;
        p.translate(f - f * h, 0), p.beginPath();
        let x = -f;
        i.forEach((e, l) => {
            (t = { x, y: (m * e) / u }),
                0 === l ? p.moveTo(t.x, t.y) : p.bezierCurveTo(n.x + _, n.y, t.x - _, t.y, t.x, t.y),
                (n = t),
                (x += f);
        }),
            p.stroke(),
            p.lineTo(x - f, 0),
            p.lineTo(0, 0),
            p.fill(),
            c && h < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
    };
    render() {
        let { className: e, pixelWidth: t, pixelHeight: n } = this.props;
        return (0, l.jsx)("div", {
            className: e,
            children: (0, l.jsx)("canvas", { ref: this.canvas, className: eY.J, width: t, height: n }),
        });
    }
}
var eQ = n(743827);
let eq = function (e) {
    let { title: t, className: n, color: i, animate: s, getHistoricalTotalBytes: r } = e;
    return (0, l.jsx)(eX.A, {
        getHistoricalTotalBytes: r,
        children: (e, r, a) => {
            var o;
            return (0, l.jsx)("div", {
                className: h()(eQ.dm, n),
                children: (0, l.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, l.jsxs)(q.A, {
                            className: eQ.Qq,
                            direction: q.A.Direction.VERTICAL,
                            children: [
                                (0, l.jsx)("div", { className: eQ.DD, children: t }),
                                (0, l.jsx)("div", {
                                    className: eQ.TS,
                                    children:
                                        (o = (e[e.length - 1] / r) * 1e3) > 1e3
                                            ? j.intl.formatToPlainString(j.t["WU+gTX"], { size: Math.round(o / 1e3) })
                                            : j.intl.formatToPlainString(j.t.wnF6TH, { size: Math.round(o) }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: eQ.MQ,
                            children: (0, l.jsx)(eJ, {
                                data: e,
                                maxValue: Math.max(Math.max.apply(null, e), 1e3),
                                className: eQ.CD,
                                updateInterval: r,
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
var eZ = n(692275);
let e$ = (e) => {
        let { className: t, children: n, onContextMenu: i, item: s } = e;
        return (0, l.jsx)("div", { className: t, onContextMenu: (e) => i(e, s), children: n });
    },
    e0 = [ew.A.unsafe_rawColors.BLUE_345.css, ew.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    e1 = (e) => {
        let { tooltip: t, onClick: n, icon: i } = e;
        return (0, l.jsx)(F.m, {
            text: t,
            children: (0, l.jsx)(eR.K, { "aria-label": t, variant: "secondary", icon: i, onClick: n, size: "sm" }),
        });
    };
function e4(e, t) {
    switch (t) {
        case w.OQC.POST_INSTALL_SCRIPTS:
        case w.OQC.PLANNING:
        case w.OQC.FINALIZING:
        case w.OQC.ALLOCATING_DISK:
            return `${e}`;
        default:
            return (0, eW.Xq)(e, { useKibibytes: !0 });
    }
}
let e5 = {
    [w.WTw.INSTALLING]: {
        [ee.pJ.NONE]: (e, t, n, l) => j.intl.formatToPlainString(j.t.JfJt9d, { percent: e, progress: t, total: n }),
        [ee.pJ.SECONDS]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: l }),
        [ee.pJ.MINUTES]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: l }),
        [ee.pJ.HOURS]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: l }),
    },
    [w.WTw.UPDATING]: {
        [ee.pJ.NONE]: (e, t, n, l) => j.intl.formatToPlainString(j.t.JsqXXL, { percent: e, progress: t, total: n }),
        [ee.pJ.SECONDS]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t["3BvVec"], { percent: e, progress: t, total: n, timeRemaining: l }),
        [ee.pJ.MINUTES]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t["rwULn+"], { percent: e, progress: t, total: n, timeRemaining: l }),
        [ee.pJ.HOURS]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t.adcitP, { percent: e, progress: t, total: n, timeRemaining: l }),
    },
    [w.WTw.REPAIRING]: {
        [ee.pJ.NONE]: (e, t, n, l) => j.intl.formatToPlainString(j.t.JfJt9d, { percent: e, progress: t, total: n }),
        [ee.pJ.SECONDS]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: l }),
        [ee.pJ.MINUTES]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: l }),
        [ee.pJ.HOURS]: (e, t, n, l) =>
            j.intl.formatToPlainString(j.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: l }),
    },
};
function e2(e, t, n, l, i) {
    let s = e5[t],
        r = null != s ? Object.keys(s) : [],
        { unit: a, time: o } = (0, ee.$l)(null != e ? e / 60 : null, r);
    if (null != s && null != a) {
        let e = s[a];
        return null != e ? e(n, l, i, o) : null;
    }
    return null;
}
function e6(e) {
    let { type: t, stage: n, percent: l, progress: i, total: s, secondsRemaining: r } = e,
        a = e4(s, n),
        o = e4(i, n);
    switch (n) {
        case w.OQC.QUEUED:
            if (0 === i) return j.intl.string(j.t.RpfBqd);
            return j.intl.formatToPlainString(j.t.uNjCXZ, { percent: l, progress: o, total: a });
        case w.OQC.PLANNING:
            return j.intl.formatToPlainString(j.t.sfuCUb, { percent: l });
        case w.OQC.ALLOCATING_DISK:
            return j.intl.formatToPlainString(j.t.XigoJ9, { percent: l });
        case w.OQC.PATCHING:
            return e2(r, t, l, o, a);
        case w.OQC.FINALIZING:
            return j.intl.formatToPlainString(j.t["6PHDUN"], { percent: l });
        case w.OQC.PAUSING:
            return j.intl.formatToPlainString(j.t.vjxhWo, { percent: l, progress: o, total: a });
        case w.OQC.VERIFYING:
            return j.intl.formatToPlainString(j.t.bbilvq, { percent: l, progress: o, total: a });
        case w.OQC.POST_INSTALL_SCRIPTS:
            return j.intl.formatToPlainString(j.t.c5vRUo, { percent: l, progress: o, total: a });
        case w.OQC.REPAIRING:
            if (t === w.WTw.REPAIRING) return e2(r, t, l, o, a);
            return j.intl.formatToPlainString(j.t.OCzETT, { percent: l, progress: o, total: a });
    }
    throw Error("Invalid Dispatch stage");
}
class e3 extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: s } = e;
        return (0, l.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, l.jsx)(ej.i, {
                    percent: t,
                    size: ej.i.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != i ? [i[0], i[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, l.jsx)("div", { className: eZ.NO, children: null != s ? s : "" }),
            ],
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, l.jsxs)(q.A, {
            direction: q.A.Direction.VERTICAL,
            children: [
                (0, l.jsx)(ev.L, {
                    percents: t,
                    size: ev.L.Sizes.SMALL,
                    foregroundColors: e0,
                    animate: this.isFocused,
                }),
                (0, l.jsx)("div", { className: eZ.NO, children: null != n ? n : "" }),
            ],
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: j.intl.format(j.t.z1oxGO, { remove: () => eB.Vt(e.applicationId, e.branchId) }),
            foregroundColor: (0, eP.q)(e.theme)
                ? ew.A.unsafe_rawColors.PRIMARY_300.css
                : ew.A.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let e,
            t,
            {
                item: { state: n, theme: l },
            } = this.props;
        if (null != n) {
            let { progress: l, total: i, stage: s } = n;
            if (null != l && null != i) {
                let n = e4(i, s),
                    r = e4(l, s),
                    a = Math.floor((t = et.uA(l, i)));
                e =
                    s === w.OQC.PAUSING
                        ? j.intl.formatToPlainString(j.t.vjxhWo, { percent: a, progress: r, total: n })
                        : j.intl.formatToPlainString(j.t.voT3Bi, { percent: a, progress: r, total: n });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = j.intl.string(j.t["qS+iKY"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, eP.q)(l)
                    ? ew.A.unsafe_rawColors.PRIMARY_300.css
                    : ew.A.unsafe_rawColors.PRIMARY_500.css,
                message: e,
            })
        );
    }
    renderPaused() {
        let {
            item: { state: e, theme: t },
        } = this.props;
        if (null == e) return null;
        let { progress: n, total: l } = e;
        if (null == n || null == l) return null;
        let i = et.uA(n, l),
            s = Math.floor(i),
            r =
                0 === n && 1 === l
                    ? j.intl.string(j.t["+pfsFX"])
                    : j.intl.formatToPlainString(j.t["+feX8S"], {
                          percent: s,
                          progress: (0, eW.Xq)(n),
                          total: (0, eW.Xq)(l),
                      });
        return this.renderBody({
            message: r,
            foregroundColor: (0, eP.q)(t)
                ? ew.A.unsafe_rawColors.PRIMARY_300.css
                : ew.A.unsafe_rawColors.PRIMARY_500.css,
            percent: i,
        });
    }
    renderProgressPatchingBody = (e, t) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: l, progress: i, total: s, type: r, readerProgress: a } = n;
        if (null == i || null == s || null == l) return null;
        let o = et.uA(i, s),
            c = et.uA(a ?? 0, s),
            d = (e[e.length - 1] / t) * 1e3,
            h = s - i,
            p = e6({
                type: r,
                stage: l,
                percent: Math.floor(o),
                progress: i,
                total: s,
                secondsRemaining: 0 !== d ? Math.max(1, h / d) : null,
            });
        return this.renderStackedProgress({ percents: [o, c], message: p });
    };
    renderProgressPatching() {
        return (0, l.jsx)(eX.A, {
            getHistoricalTotalBytes: eG.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: l, type: i } = e;
        if (null == t || null == n || null == l) return null;
        let s = et.uA(n, t),
            r = Math.floor(s);
        return this.renderBody({
            percent: s,
            message: e6({ type: i, stage: l, percent: r, progress: n, total: t }),
            foregroundColor: ew.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case w.OQC.PATCHING:
            case w.OQC.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: e, cellProps: t } = this.props;
        if (e.finished) return this.renderFinished();
        if (e.index > 0) return this.renderQueued();
        if (
            null != e.state &&
            (e.state.type === w.WTw.UPDATING || e.state.type === w.WTw.REPAIRING || e.state.type === w.WTw.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let e7 = () => (0, l.jsx)(e1, { icon: eE.u, tooltip: j.intl.string(j.t.YGm6SZ), onClick: () => eB.U() }),
    e9 = () => (0, l.jsx)(e1, { icon: eL.E, tooltip: j.intl.string(j.t.TVAd5J), onClick: () => eB.v7() }),
    e8 = (e) => {
        let { item: t } = e;
        return (0, l.jsx)(e1, {
            icon: eD.z,
            tooltip: j.intl.string(j.t["Eqb+LN"]),
            onClick: () => eB.BO(t.applicationId, t.branchId),
        });
    },
    te = (e) => {
        let { item: t } = e;
        return (0, l.jsx)(e1, {
            icon: eM.P,
            tooltip: j.intl.string(j.t["0lFmC9"]),
            onClick: () => eB.ZT(t.applicationId, t.branchId),
        });
    },
    tt = [
        {
            key: "name",
            cellClassName: eZ.UQ,
            render: (e) =>
                (0, l.jsxs)(q.A, {
                    align: q.A.Align.CENTER,
                    children: [
                        (0, l.jsx)($.A, { game: e.application, className: eZ.__invalid_gameIcon, size: $.M.SMALL }),
                        (0, l.jsx)("div", { className: eZ.TF, children: e.application.name }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: eZ.Ay,
            headerCellClassName: eZ.VD,
            bodyCellClassName: eZ.so,
            render: (e, t) => (0, l.jsx)(e3, { item: e, cellProps: t }),
        },
        {
            key: "actions",
            cellClassName: eZ.AT,
            render(e, t) {
                let n, i;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, l.jsx)(Q.A, {
                                        libraryApplication: e.libraryApplication,
                                        size: "sm",
                                        source: w.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== w.WTw.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, l.jsx)(e8, { item: e })
                                    : null != t && t.paused
                                      ? (0, l.jsx)(e7, {})
                                      : (0, l.jsx)(e9, { item: e })),
                            (i = (0, l.jsx)(te, { item: e })))
                          : (i = (0, l.jsx)(te, { item: e })),
                    (0, l.jsxs)("div", { className: eZ.sG, children: [n, i] })
                );
            },
        },
    ];
class tn extends i.PureComponent {
    isUnmounted = !1;
    isTallerThanHalfViewport = !1;
    componentDidMount() {
        window.addEventListener("resize", this.throttledUpdateHeight);
    }
    componentDidUpdate(e) {
        this.props.height !== e.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let { applications: e } = this.props;
        e.forEach((e) => {
            e.finished &&
                u.h.wait(() => {
                    eB.Vt(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    throttledUpdateHeight = eb().throttle(() => {
        if (this.isUnmounted) return;
        let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
            n = e > window.innerHeight / 2;
        this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
    }, 1e3);
    render() {
        let { applications: e, paused: t, isFocused: i, theme: s, analyticsContext: r } = this.props;
        return 0 === e.length
            ? null
            : (0, l.jsxs)("div", {
                  className: eZ.xP,
                  children: [
                      (0, l.jsxs)("div", {
                          className: eZ.U1,
                          children: [
                              (0, l.jsx)(eq, {
                                  className: h()(eZ.e4, eZ.Eg),
                                  title: j.intl.string(j.t.ytoXKr),
                                  getHistoricalTotalBytes: eG.A.getHistoricalTotalBytesDownloaded,
                                  color: ew.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                              (0, l.jsx)(eq, {
                                  className: h()(eZ.e4, eZ.pn),
                                  title: j.intl.string(j.t.SjohhI),
                                  getHistoricalTotalBytes: eG.A.getHistoricalTotalBytesWritten,
                                  color: ew.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                          ],
                      }),
                      (0, l.jsx)(Z.A, {
                          hasHeader: !1,
                          columns: tt,
                          data: e,
                          className: eZ.tp,
                          rowClassName: eZ.nM,
                          rowComponent: e$,
                          cellProps: { paused: t, isFocused: i, theme: s },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  J.L3(e, async () => {
                                      let { default: e } = await n.e("45794").then(n.bind(n, 451897));
                                      return (n) =>
                                          (0, l.jsx)(e, {
                                              ...n,
                                              applicationId: t.applicationId,
                                              branchId: t.branchId,
                                              analyticsContext: r,
                                          });
                                  });
                              },
                          },
                          bodyCellClassName: eZ.Hn,
                      }),
                  ],
              });
    }
}
function tl(e, t, n, l) {
    return e.reduce((e, i, s) => {
        let { applicationId: r, branchId: a } = i,
            o = n.getApplication(r),
            c = l.getState(r, a);
        return (
            null != o &&
                e.push({
                    key: `${r}:${a}`,
                    applicationId: r,
                    branchId: a,
                    state: c,
                    application: o,
                    libraryApplication: eH.A.getLibraryApplication(r, a),
                    finished: t,
                    index: s,
                }),
            e
        );
    }, []);
}
let ti = (0, ek.A)(
    x.Ay.connectStores([eU.A, eG.A, eK.A, eV.A, eF.A], () => ({
        applications: [...tl(eK.A.activeItems, !1, eU.A, eG.A), ...tl(eK.A.finishedItems, !0, eU.A, eG.A)],
        paused: eK.A.paused,
        isFocused: eF.A.isFocused(),
        theme: eV.A.theme,
    }))((0, eO.A)(tn)),
);
var ts = n(613057),
    tr = n(20438);
class ta extends i.PureComponent {
    _scrollerRef = i.createRef();
    _scrollToOnMount;
    _scrollToPadding = 0;
    state = { includeUpdatesInScroller: !1 };
    componentDidMount() {
        m.I(w.BVt.APPLICATION_LIBRARY),
            (0, f.h)(ts.XK.LIBRARY),
            u.h.wait(() => (0, A.r)()),
            (0, g.X)(),
            null != this._scrollToOnMount &&
                null != this._scrollerRef.current &&
                this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    handleHeightTallerThanHalfViewportChange = (e) => {
        this.setState({ includeUpdatesInScroller: e });
    };
    renderToolbar() {
        return (0, l.jsx)(L, {});
    }
    scrollToRow = (e, t) => {
        let n = this._scrollerRef.current;
        null != n
            ? (e.focus(), n.scrollIntoViewRect({ start: t, end: t }), (this._scrollToOnMount = null))
            : ((this._scrollToOnMount = e), (this._scrollToPadding = t));
    };
    render() {
        let { includeUpdatesInScroller: e } = this.state,
            t = (0, l.jsx)("div", {
                children: (0, l.jsx)(r.A, {
                    section: w.JJy.LIBRARY_INSTALL_MODULE,
                    children: (0, l.jsx)(ti, {
                        onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange,
                    }),
                }),
            });
        return (0, l.jsxs)(i.Fragment, {
            children: [
                (0, l.jsx)(G, { currentRoute: w.BVt.APPLICATION_LIBRARY, renderToolbar: this.renderToolbar }),
                e ? null : t,
                (0, l.jsxs)(p.Gt, {
                    className: h()(tr.k, tr.X),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, l.jsx)(r.A, {
                            section: w.JJy.LIBRARY_APPLICATION_LIST,
                            children: (0, l.jsx)(eT, { stickyHeader: !e, scrollToRow: this.scrollToRow }),
                        }),
                    ],
                }),
            ],
        });
    }
}
var to = n(665260),
    tc = n(939249),
    td = n(534514),
    th = n(331322),
    tp = n(243721),
    tu = n(404778),
    tm = n(364522),
    tA = n(59636),
    tg = n(253932),
    tf = n(314116),
    t_ = n(834730),
    tx = n(821609),
    ty = n(359778),
    tN = n(292666),
    tC = n(150934),
    tI = n(825484),
    tT = n(452027),
    tS = n(466472),
    tb = n(29160),
    tR = n(834911);
let tw = Math.ceil(2 * Math.PI * 20),
    tP = (e) => {
        let t,
            n,
            i,
            s,
            { total: r, used: a } = e,
            o = Math.max(0, Math.min(1, a / r)),
            c = `${Math.floor(100 * o)}%`;
        return (0, l.jsx)(F.m, {
            text: j.intl.formatToPlainString(j.t["2eoRMh"], { used: c }),
            children: (0, l.jsxs)("div", {
                className: tR.iE,
                role: "progressbar",
                "aria-label": j.intl.formatToPlainString(j.t["2eoRMh"], { used: c }),
                children: [
                    (0, l.jsxs)("svg", {
                        viewBox: "25 25 50 50",
                        className: tR.JW,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("circle", { className: tR.Tp, cx: "50", cy: "50", r: 20 }),
                            (0, l.jsx)("circle", {
                                className: tR.CU,
                                cx: "50",
                                cy: "50",
                                r: 20,
                                stroke:
                                    ((t = Math.round(-85 * o + 199)),
                                    (n = Math.round(-71 * o + 208)),
                                    (i = Math.round(-22 * o + 240)),
                                    `rgb(${t}, ${n}, ${i})`),
                                strokeDasharray: ((s = Math.floor(tw * o)), `${s}, ${tw}`),
                            }),
                        ],
                    }),
                    (0, l.jsx)("aside", { className: tR.Y3, "aria-hidden": !0, children: c }),
                ],
            }),
        });
    };
var tj = n(775228),
    tv = n(723702),
    tE = n(19575),
    tL = n(744832),
    tD = n(818050);
class tM extends i.PureComponent {
    state = { label: void 0, isDefault: null };
    handleStartEditing = () => {
        let { path: e, label: t, isDefault: n, onToggleEditing: l } = this.props;
        l(e), this.setState({ label: t, isDefault: n });
    };
    handleStopEditing = () => {
        let { onToggleEditing: e } = this.props;
        e(null), this.setState({ label: void 0, isDefault: null });
    };
    handleRemoveLocation = () => {
        (0, tf.A)({
            title: j.intl.string(j.t.iBUzS5),
            subtitle: j.intl.string(j.t["1XqeW2"]),
            confirmText: j.intl.string(j.t.iBUzS5),
            onConfirm: () => {
                this.handleStopEditing(), (0, tS.JN)(this.props.path);
            },
        });
    };
    handleSaveChanges = () => {
        (0, tS.a8)(this.props.path, {
            label: null != this.state.label ? this.state.label : this.props.label,
            isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
        }),
            this.handleStopEditing();
    };
    handleLabelChange = (e) => {
        this.setState({ label: e });
    };
    handleToggleDefault = () => {
        this.setState({ isDefault: !this.state.isDefault });
    };
    renderDiskUsageCircle() {
        let { metadata: e } = this.props;
        return null != e && null != e.availableKB && null != e.totalKB
            ? (0, l.jsx)(tP, { total: e.totalKB, used: e.totalKB - e.availableKB })
            : null;
    }
    renderViewing() {
        let e,
            t,
            { path: n, label: i, editingPath: s, isDefault: r, metadata: a } = this.props;
        return (
            null != a &&
                ((e = null != a.availableKB ? (0, eW.Xq)(a.availableKB, { useKibibytes: !0 }) : null),
                (t = null != a.totalKB ? (0, eW.Xq)(a.totalKB, { useKibibytes: !0 }) : null)),
            (0, l.jsxs)(q.A, {
                className: tL.ce,
                align: q.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, l.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: tL.__invalid_descriptionWrapper,
                        children: [
                            (0, l.jsxs)(q.A, {
                                align: q.A.Align.CENTER,
                                children: [
                                    (0, l.jsx)(td.D, {
                                        className: tL.nM,
                                        variant: "heading-md/semibold",
                                        children: null != i ? i : tj.A.getLabelFromPath(n),
                                    }),
                                    r
                                        ? (0, l.jsx)("span", { className: tL.Zn, children: j.intl.string(j.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != a && null != e && null != t
                                ? (0, l.jsx)(tb.A, {
                                      className: tL.fw,
                                      hoverText: j.intl.formatToPlainString(j.t["Fxo9e+"], { available: e, total: t }),
                                      children: n,
                                  })
                                : (0, l.jsx)(t_.E, { className: tL.fw, variant: "text-xs/normal", children: n }),
                        ],
                    }),
                    (0, l.jsx)(tx.$, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.bt75uw),
                        disabled: null != s,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: i } = this.state;
        return (0, l.jsx)(ty.Z, {
            editable: !0,
            className: tL.uP,
            children: (0, l.jsxs)(q.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, l.jsxs)(q.A.Child, {
                        children: [
                            (0, l.jsx)(tN.k, {
                                label: j.intl.string(j.t.AJkKCB),
                                value: n,
                                placeholder: tj.A.getLabelFromPath(e),
                                onChange: this.handleLabelChange,
                            }),
                            (0, l.jsx)("div", {
                                className: tD.QX,
                                children: (0, l.jsx)(tN.k, {
                                    label: j.intl.string(j.t.lnUCwX),
                                    disabled: !0,
                                    value: e,
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: tL.gZ,
                                children: (0, l.jsx)(tC.S, {
                                    checked: null != i ? i : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: j.intl.string(j.t.Z2MWuH),
                                }),
                            }),
                            (0, l.jsx)(tu.c, { className: tL.me }),
                            (0, l.jsxs)(q.A, {
                                children: [
                                    (0, l.jsx)(tx.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: j.intl.string(j.t.iBUzS5),
                                        disabled: t || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, l.jsx)(q.A, {
                                        justify: q.A.Justify.END,
                                        children: (0, l.jsxs)(tI.e, {
                                            children: [
                                                (0, l.jsx)(tx.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: j.intl.string(j.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, l.jsx)(tx.$, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: j.intl.string(j.t["R3BPH+"]),
                                                    disabled:
                                                        e === this.props.path &&
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
class tB extends i.PureComponent {
    state = { editingPath: null };
    componentDidMount() {
        (0, tS.UQ)(
            this.props.installationPaths.map((e) => {
                let { path: t } = e;
                return t;
            }),
        );
    }
    handleAddInstallationLocation = () => {
        tE.Ay.showOpenDialog(["openDirectory"]).then((e) => {
            null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, tS.SA)(e[0]);
        });
    };
    handleToggleEditing = (e) => {
        this.setState({ editingPath: e });
    };
    render() {
        let { installationPaths: e, installationPathsMetadata: t, defaultInstallationPath: n } = this.props,
            { editingPath: i } = this.state;
        return (0, l.jsx)("div", {
            className: tL.iE,
            children: (0, l.jsxs)(tT.D, {
                label: j.intl.string(j.t.aLszkC),
                children: [
                    e.map((e) => {
                        let { path: s, label: r } = e;
                        return (0, l.jsx)(
                            tM,
                            {
                                path: s,
                                label: r,
                                metadata: t[s],
                                isDefault: n === s,
                                editingPath: i,
                                hasGamesInstalledInPath: tj.A.hasGamesInstalledInPath(s),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            s,
                        );
                    }),
                    (0, l.jsx)("div", {
                        className: tL.sW,
                        children: (0, l.jsx)(tx.$, {
                            variant: "primary",
                            size: "sm",
                            text: j.intl.string(j.t.pnZ2uk),
                            disabled: !tv.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
}
let tO = x.Ay.connectStores([tj.A], () => ({
    installationPaths: tj.A.installationPaths,
    installationPathsMetadata: tj.A.installationPathsMetadata,
    defaultInstallationPath: tj.A.defaultInstallationPath,
}))(tB);
var tk = n(869187);
function tU(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let i = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, l.jsxs)(
            "div",
            {
                className: tk.Kp,
                children: [
                    (0, l.jsxs)(q.A, {
                        direction: q.A.Direction.VERTICAL,
                        className: tk.Hm,
                        children: [
                            (0, l.jsx)("div", {
                                className: tk.SX,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t ? (0, l.jsx)("div", { className: tk.ME, children: w.gG4[t] }) : null,
                        ],
                    }),
                    (0, l.jsx)(tc.D, {
                        className: tk.P5,
                        onClick: () => n(e.libraryApplication),
                        children: (0, l.jsx)(eM.P, { size: "md", color: "currentColor", className: tk.q_ }),
                    }),
                ],
            },
            e.key,
        );
    });
    return (0, l.jsxs)("div", {
        className: tk.z0,
        children: [
            (0, l.jsx)(td.D, {
                variant: "heading-md/semibold",
                className: tk.Z9,
                children: j.intl.string(j.t["5PJtrH"]),
            }),
            i,
        ],
    });
}
class tV extends i.PureComponent {
    handleToggleShortcutDesktop(e) {
        tg.uB.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        tg.Pf.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        k.default.track(w.HAw.APPLICATION_SETTINGS_UPDATED, { hidden_enabled: t, ...e.getAnalyticsData() });
    }
    handleRestoreHiddenLibraryApplication = (e) => {
        let t = to.PQ(e.getFlags(), w.hM6.HIDDEN);
        tA.V(e.id, e.branchId, t), this.trackRestoreApplication(e, to.Lt(t, w.hM6.HIDDEN));
    };
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, l.jsxs)("div", {
            className: tk.rf,
            children: [
                (0, U.S)()
                    ? (0, l.jsxs)(th.B, {
                          gap: 16,
                          children: [
                              (0, l.jsx)(tp.d, {
                                  label: j.intl.string(j.t["9ID+Kh"]),
                                  description: j.intl.string(j.t.vT61N0),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, l.jsx)(tu.c, {}),
                              (0, l.jsx)(tp.d, {
                                  label: j.intl.string(j.t.vNpUMz),
                                  description: j.intl.string(j.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, l.jsx)(tu.c, {}),
                              (0, l.jsx)(tO, {}),
                          ],
                      })
                    : null,
                (0, l.jsx)(tU, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e,
                }),
            ],
        });
    }
    render() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(G, { currentRoute: w.BVt.APPLICATION_LIBRARY_SETTINGS }),
                (0, l.jsx)(tm.Ar, { className: tk.XG, children: this.renderBody() }),
            ],
        });
    }
}
function tH() {
    let e = {
        installShortcutDesktop: tg.uB.useSetting(),
        installShortcutStartMenu: tg.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, x.bG)([S.A], () => S.A.hiddenLibraryApplicationViewItems),
    };
    return (0, l.jsx)(tV, { ...e });
}
var tG = n(536813);
function tK() {
    return (0, l.jsxs)(s.dO, {
        children: [
            (0, l.jsx)(a.A, {
                path: w.BVt.APPLICATION_LIBRARY_SETTINGS,
                exact: !0,
                children: (0, l.jsxs)(r.A, {
                    page: w.liQ.LIBRARY_SETTINGS,
                    root: !0,
                    children: [(0, l.jsx)(o.HI, { subsection: j.intl.string(j.t["3D5yo/"]) }), (0, l.jsx)(tH, {})],
                }),
            }),
            (0, l.jsx)(a.A, {
                path: w.BVt.APPLICATION_LIBRARY,
                children: (0, l.jsxs)(r.A, {
                    page: w.liQ.LIBRARY,
                    root: !0,
                    children: [(0, l.jsx)(o.HI, { subsection: j.intl.string(j.t.p7ARTB) }), (0, l.jsx)(ta, {})],
                }),
            }),
        ],
    });
}
let tF = i.memo(function () {
    return (
        i.useEffect(() => {
            (0, c.d)("application_library");
        }, []),
        (0, l.jsxs)("div", {
            className: tG.k,
            children: [(0, l.jsx)(o.HI, { location: j.intl.string(j.t.cw57ar) }), (0, l.jsx)(tK, {})],
        })
    );
});
