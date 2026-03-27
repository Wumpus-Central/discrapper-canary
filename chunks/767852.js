n.d(t, { A: () => U });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(873263),
    o = n(311907),
    d = n(451988),
    c = n(990078),
    u = n(319060),
    A = n(397927),
    h = n(73153),
    _ = n(442433),
    m = n(194894),
    g = n(979604),
    p = n(235986),
    E = n(596719),
    I = n(769015),
    f = n(290987),
    C = n(742077),
    T = n(268387),
    N = n(954571),
    S = n(674378),
    x = n(240248),
    v = n(471761),
    y = n(652215),
    b = n(985018),
    O = n(17192);
let L = (0, x.xI)(u.A.GAME_LIST_ROW_MIN_HEIGHT),
    R = (0, x.xI)(u.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    P = Object.freeze({ [y.DpB.PLATFORM]: "Platform", [y.DpB.LAST_PLAYED]: "Last Played", [y.DpB.NAME]: "Name" }),
    D = (e) => {
        let { flag: t, icon: n, item: a, tooltip: l } = e,
            s = a.libraryApplication.hasFlag(t);
        return (0, i.jsx)(c.m, { text: l, children: (0, i.jsx)(n, { className: r()(O.up, { [O.R]: !s }) }) });
    },
    M = [
        {
            key: y.DpB.NAME,
            renderHeader: () => b.intl.string(b.t.dBfWfc),
            sort: !0,
            cellClassName: O.UQ,
            bodyCellClassName: O.SJ,
            render: (e) =>
                (0, i.jsxs)(p.A, {
                    align: p.A.Align.CENTER,
                    children: [
                        (0, i.jsx)(I.A, { game: e.application, size: I.M.SMALL, className: O.Gt }),
                        (0, i.jsxs)("div", {
                            className: O.Ot,
                            children: [
                                (0, i.jsx)("div", {
                                    className: O.TF,
                                    children: e.libraryApplication.getBranchedName(e.application),
                                }),
                                e.libraryApplication.hasFlag(y.hM6.PREMIUM)
                                    ? (0, i.jsx)(c.m, {
                                          text: b.intl.string(b.t.tG2SzG),
                                          children: (0, i.jsx)(A.tvc, {
                                              size: "md",
                                              color: "currentColor",
                                              className: O.oU,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: y.DpB.PLATFORM,
            renderHeader: () => b.intl.string(b.t.YR4cHH),
            sort: !0,
            cellClassName: O.AA,
            bodyCellClassName: O.iV,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(p.A, {
                    align: p.A.Align.CENTER,
                    children: null != t ? y.gG4[t] : b.intl.string(b.t["F+l3Jt"]),
                });
            },
        },
        {
            key: y.DpB.LAST_PLAYED,
            renderHeader: () => b.intl.string(b.t.FDDyjS),
            sort: !0,
            cellClassName: O.SX,
            bodyCellClassName: O.iV,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? b.intl.string(b.t.Md326p)
                        : e.isNew
                          ? b.intl.string(b.t["+F0Tho"])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(f.Ay, { end: e.lastPlayed, location: f.Ay.Locations.GAME_LIBRARY_LAST_PLAYED })
                            : b.intl.string(b.t.EoWLru)),
                    (0, i.jsx)(p.A, { align: p.A.Align.CENTER, className: r()({ [O.g3]: e.isNew }), children: t })
                );
            },
        },
        {
            key: y.DpB.ACTIONS,
            renderHeader: () => null,
            cellClassName: O.AT,
            render(e, t, n) {
                var l, s;
                if (null == t) throw Error("No cell props defined.");
                let o = e.key === t.activeRowKey;
                return (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: O.nU,
                            children: [
                                (0, i.jsx)(D, {
                                    flag: y.hM6.PRIVATE,
                                    item: e,
                                    icon: A.G3N,
                                    tooltip: b.intl.string(b.t.NozAop),
                                }),
                                (0, i.jsx)(D, {
                                    flag: y.hM6.OVERLAY_DISABLED,
                                    item: e,
                                    icon: A.nkR,
                                    tooltip: b.intl.string(b.t.Az9eqn),
                                }),
                                (0, i.jsx)(v.A, {
                                    className: r()(O.up, { [O.R]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication,
                                }),
                            ],
                        }),
                        (0, S.XZ)(e.libraryApplication)
                            ? (0, i.jsx)(g.A, {
                                  analyticsListSort:
                                      ((l = t.sortKey),
                                      (s = t.sortDirection),
                                      `${P[l]} ${s === y.tSW.ASCENDING ? "ASC" : "DESC"}`),
                                  analyticsListIndex: n,
                                  source: y.ThZ.APPLICATION_LIBRARY,
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
    j = (e) => {
        let {
                item: t,
                activeRowKey: n,
                highlightedApplicationKey: a,
                onMouseEnter: l,
                onMouseLeave: s,
                onContextMenu: o,
                setRef: d,
                ...c
            } = e,
            u = t.key === n,
            A = t.key === a;
        return (0, i.jsx)("div", {
            className: r()({ [O.eO]: u && !A, [O.HM]: A, [O.Ob]: !u && !A, [O.ic]: !u && !t.isLaunchable }),
            ref: (e) => {
                d(e, t.key);
            },
            onMouseEnter: () => l(t),
            onMouseLeave: s,
            onContextMenu: (e) => o(e, t),
            children: (0, i.jsx)("div", { ...c }),
        });
    };
class w extends a.PureComponent {
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
            null != e && (h.h.wait(_.Z_), this.props.scrollToRow(e, L));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], L),
            new d.Ep().start(R, () => {
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
                case y.d3x.DISCORD:
                    e.num_applications_discord++;
                    break;
                case y.d3x.STEAM:
                    e.num_applications_steam++;
                    break;
                case y.d3x.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case y.d3x.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case y.d3x.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case y.d3x.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case y.d3x.GOG:
                    e.num_applications_gog++;
                    break;
                case y.d3x.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        N.default.track(y.HAw.LIBRARY_VIEWED, { ...e, load_id: t.loadId });
    }
    setActiveRowKey = (e) => {
        this.setState({ overflowMenuRowKey: e.key });
    };
    clearActiveRowKey = () => {
        this._didUnmount || this.setState({ overflowMenuRowKey: null });
    };
    handleRowMouseEnter = (e) => {
        this.props.isNavigatingByKeyboard || m.pU(e.key);
    };
    handleRowMouseLeave = () => {
        this.props.isNavigatingByKeyboard || m.pU(null);
    };
    setRowRef = (e, t) => {
        this._rowRefs[t] = e;
    };
    handleApplicationContextMenu = (e, t) => {
        this.setActiveRowKey(t);
        let { analyticsContext: a } = this.props;
        (0, _.L3)(
            e,
            async () => {
                let { default: e } = await n.e("881").then(n.bind(n, 163368));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        applicationId: t.libraryApplication.id,
                        branchId: t.libraryApplication.branchId,
                        analyticsContext: a,
                    });
            },
            { onClose: this.clearActiveRowKey },
        );
    };
    handleSort(e, t) {
        m.vt(e, t);
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props;
        return t.length > 0
            ? null
            : ((e = "" !== n ? b.intl.format(b.t["4Q1TAr"], { query: n }) : b.intl.string(b.t["0Y+0PY"])),
              (0, i.jsxs)("div", {
                  className: O.mv,
                  children: [
                      (0, i.jsx)("div", { className: O.Zd }),
                      (0, i.jsx)(p.A, {
                          grow: 0,
                          shrink: 0,
                          direction: p.A.Direction.VERTICAL,
                          children: (0, i.jsxs)("div", {
                              className: O.q6,
                              children: [
                                  (0, i.jsx)("div", { className: O.ks, children: b.intl.string(b.t.Lw8X2j) }),
                                  (0, i.jsx)("div", { className: O.Li, children: e }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: l, stickyHeader: r } = this.props,
            { overflowMenuRowKey: s, highlightedApplicationKey: o } = this.state;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                n.length > 0
                    ? (0, i.jsx)(E.A, {
                          columns: M,
                          data: n,
                          sortData: !1,
                          rowComponent: j,
                          className: O.tp,
                          headerClassName: r ? O.ln : O.wx,
                          headerCellClassName: O.e4,
                          sortedHeaderCellClassName: O.dm,
                          bodyCellClassName: O.hC,
                          rowClassName: O.G9,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: r,
                          rowProps: {
                              activeRowKey: s ?? l,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: s ?? l,
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
    let t = a.useContext(N.AnalyticsContext),
        n = (0, s.zy)(),
        {
            applicationViewItems: l,
            filterQuery: r,
            fetched: d,
        } = (0, o.cf)([C.A], () => ({
            applicationViewItems: C.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: C.A.applicationFilterQuery,
            fetched: C.A.hasFetchedApplications,
        })),
        {
            sortKey: c,
            sortDirection: u,
            activeRowKey: A,
            isNavigatingByKeyboard: h,
        } = (0, o.cf)([T.A], () => ({
            sortKey: T.A.sortKey,
            sortDirection: T.A.sortDirection,
            activeRowKey: T.A.activeRowKey,
            isNavigatingByKeyboard: T.A.isNavigatingByKeyboard,
        }));
    return (0, i.jsx)(w, {
        ...e,
        analyticsContext: t,
        location: n,
        applicationViewItems: l,
        filterQuery: r,
        fetched: d,
        sortKey: c,
        sortDirection: u,
        activeRowKey: A,
        isNavigatingByKeyboard: h,
    });
}
