"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(873263),
    o = n(311907),
    c = n(451988),
    d = n(990078),
    h = n(319060),
    p = n(403581),
    u = n(952270),
    A = n(1215),
    m = n(73153),
    g = n(442433),
    f = n(194894),
    _ = n(979604),
    x = n(235986),
    y = n(596719),
    N = n(769015),
    C = n(290987),
    I = n(742077),
    T = n(268387),
    S = n(954571),
    b = n(674378),
    R = n(240248),
    v = n(471761),
    P = n(652215),
    w = n(985018),
    j = n(855189);
let L = (0, R.xI)(h.A.GAME_LIST_ROW_MIN_HEIGHT),
    E = (0, R.xI)(h.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    D = Object.freeze({ [P.DpB.PLATFORM]: "Platform", [P.DpB.LAST_PLAYED]: "Last Played", [P.DpB.NAME]: "Name" }),
    M = (e) => {
        let { flag: t, icon: n, item: s, tooltip: l } = e,
            a = s.libraryApplication.hasFlag(t);
        return (0, i.jsx)(d.m, { text: l, children: (0, i.jsx)(n, { className: r()(j.up, { [j.R]: !a }) }) });
    },
    B = [
        {
            key: P.DpB.NAME,
            renderHeader: () => w.intl.string(w.t.dBfWfc),
            sort: !0,
            cellClassName: j.UQ,
            bodyCellClassName: j.SJ,
            render: (e) =>
                (0, i.jsxs)(x.A, {
                    align: x.A.Align.CENTER,
                    children: [
                        (0, i.jsx)(N.A, { game: e.application, size: N.M.SMALL, className: j.Gt }),
                        (0, i.jsxs)("div", {
                            className: j.Ot,
                            children: [
                                (0, i.jsx)("div", {
                                    className: j.TF,
                                    children: e.libraryApplication.getBranchedName(e.application),
                                }),
                                e.libraryApplication.hasFlag(P.hM6.PREMIUM)
                                    ? (0, i.jsx)(d.m, {
                                          text: w.intl.string(w.t.tG2SzG),
                                          children: (0, i.jsx)(p.t, {
                                              size: "md",
                                              color: "currentColor",
                                              className: j.oU,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: P.DpB.PLATFORM,
            renderHeader: () => w.intl.string(w.t.YR4cHH),
            sort: !0,
            cellClassName: j.AA,
            bodyCellClassName: j.iV,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(x.A, {
                    align: x.A.Align.CENTER,
                    children: null != t ? P.gG4[t] : w.intl.string(w.t["F+l3Jt"]),
                });
            },
        },
        {
            key: P.DpB.LAST_PLAYED,
            renderHeader: () => w.intl.string(w.t.FDDyjS),
            sort: !0,
            cellClassName: j.SX,
            bodyCellClassName: j.iV,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? w.intl.string(w.t.Md326p)
                        : e.isNew
                          ? w.intl.string(w.t["+F0Tho"])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(C.Ay, { end: e.lastPlayed, location: C.Ay.Locations.GAME_LIBRARY_LAST_PLAYED })
                            : w.intl.string(w.t.EoWLru)),
                    (0, i.jsx)(x.A, { align: x.A.Align.CENTER, className: r()({ [j.g3]: e.isNew }), children: t })
                );
            },
        },
        {
            key: P.DpB.ACTIONS,
            renderHeader: () => null,
            cellClassName: j.AT,
            render(e, t, n) {
                var l, a;
                if (null == t) throw Error("No cell props defined.");
                let o = e.key === t.activeRowKey;
                return (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: j.nU,
                            children: [
                                (0, i.jsx)(M, {
                                    flag: P.hM6.PRIVATE,
                                    item: e,
                                    icon: u.G,
                                    tooltip: w.intl.string(w.t.NozAop),
                                }),
                                (0, i.jsx)(M, {
                                    flag: P.hM6.OVERLAY_DISABLED,
                                    item: e,
                                    icon: A.n,
                                    tooltip: w.intl.string(w.t.Az9eqn),
                                }),
                                (0, i.jsx)(v.A, {
                                    className: r()(j.up, { [j.R]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication,
                                }),
                            ],
                        }),
                        (0, b.XZ)(e.libraryApplication)
                            ? (0, i.jsx)(_.A, {
                                  analyticsListSort:
                                      ((l = t.sortKey),
                                      (a = t.sortDirection),
                                      `${D[l]} ${a === P.tSW.ASCENDING ? "ASC" : "DESC"}`),
                                  analyticsListIndex: n,
                                  source: P.ThZ.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  playButtonVariant: o ? "primary" : "secondary",
                                  size: "sm",
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey(),
                              })
                            : (0, i.jsx)("div", { children: "deprecated!" }),
                    ],
                });
            },
        },
    ],
    O = (e) => {
        let {
                item: t,
                activeRowKey: n,
                highlightedApplicationKey: s,
                onMouseEnter: l,
                onMouseLeave: a,
                onContextMenu: o,
                setRef: c,
                ...d
            } = e,
            h = t.key === n,
            p = t.key === s;
        return (0, i.jsx)("div", {
            className: r()({ [j.eO]: h && !p, [j.HM]: p, [j.Ob]: !h && !p, [j.ic]: !h && !t.isLaunchable }),
            ref: (e) => {
                c(e, t.key);
            },
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => o(e, t),
            children: (0, i.jsx)("div", { ...d }),
        });
    };
class k extends s.PureComponent {
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
            null != e && (m.h.wait(g.Z_), this.props.scrollToRow(e, L));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], L),
            new c.Ep().start(E, () => {
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
                case P.d3x.DISCORD:
                    e.num_applications_discord++;
                    break;
                case P.d3x.STEAM:
                    e.num_applications_steam++;
                    break;
                case P.d3x.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case P.d3x.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case P.d3x.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case P.d3x.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case P.d3x.GOG:
                    e.num_applications_gog++;
                    break;
                case P.d3x.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        S.default.track(P.HAw.LIBRARY_VIEWED, { ...e, load_id: t.loadId });
    }
    setActiveRowKey = (e) => {
        this.setState({ overflowMenuRowKey: e.key });
    };
    clearActiveRowKey = () => {
        this._didUnmount || this.setState({ overflowMenuRowKey: null });
    };
    handleRowMouseEnter = (e) => {
        this.props.isNavigatingByKeyboard || f.pU(e.key);
    };
    handleRowMouseLeave = () => {
        this.props.isNavigatingByKeyboard || f.pU(null);
    };
    setRowRef = (e, t) => {
        this._rowRefs[t] = e;
    };
    handleApplicationContextMenu = (e, t) => {
        this.setActiveRowKey(t);
        let { analyticsContext: s } = this.props;
        (0, g.L3)(
            e,
            async () => {
                let { default: e } = await n.e("881").then(n.bind(n, 163368));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        applicationId: t.libraryApplication.id,
                        branchId: t.libraryApplication.branchId,
                        analyticsContext: s,
                    });
            },
            { onClose: this.clearActiveRowKey },
        );
    };
    handleSort(e, t) {
        f.vt(e, t);
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props;
        return t.length > 0
            ? null
            : ((e = "" !== n ? w.intl.format(w.t["4Q1TAr"], { query: n }) : w.intl.string(w.t["0Y+0PY"])),
              (0, i.jsxs)("div", {
                  className: j.mv,
                  children: [
                      (0, i.jsx)("div", { className: j.Zd }),
                      (0, i.jsx)(x.A, {
                          grow: 0,
                          shrink: 0,
                          direction: x.A.Direction.VERTICAL,
                          children: (0, i.jsxs)("div", {
                              className: j.q6,
                              children: [
                                  (0, i.jsx)("div", { className: j.ks, children: w.intl.string(w.t.Lw8X2j) }),
                                  (0, i.jsx)("div", { className: j.Li, children: e }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: l, stickyHeader: r } = this.props,
            { overflowMenuRowKey: a, highlightedApplicationKey: o } = this.state;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                n.length > 0
                    ? (0, i.jsx)(y.A, {
                          columns: B,
                          data: n,
                          sortData: !1,
                          rowComponent: O,
                          className: j.tp,
                          headerClassName: r ? j.ln : j.wx,
                          headerCellClassName: j.e4,
                          sortedHeaderCellClassName: j.dm,
                          bodyCellClassName: j.hC,
                          rowClassName: j.G9,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: r,
                          rowProps: {
                              activeRowKey: a ?? l,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: a ?? l,
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
function U(e) {
    let t = s.useContext(S.AnalyticsContext),
        n = (0, a.zy)(),
        {
            applicationViewItems: l,
            filterQuery: r,
            fetched: c,
        } = (0, o.cf)([I.A], () => ({
            applicationViewItems: I.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: I.A.applicationFilterQuery,
            fetched: I.A.hasFetchedApplications,
        })),
        {
            sortKey: d,
            sortDirection: h,
            activeRowKey: p,
            isNavigatingByKeyboard: u,
        } = (0, o.cf)([T.A], () => ({
            sortKey: T.A.sortKey,
            sortDirection: T.A.sortDirection,
            activeRowKey: T.A.activeRowKey,
            isNavigatingByKeyboard: T.A.isNavigatingByKeyboard,
        }));
    return (0, i.jsx)(k, {
        ...e,
        analyticsContext: t,
        location: n,
        applicationViewItems: l,
        filterQuery: r,
        fetched: c,
        sortKey: d,
        sortDirection: h,
        activeRowKey: p,
        isNavigatingByKeyboard: u,
    });
}
