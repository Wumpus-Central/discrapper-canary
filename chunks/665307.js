n.d(t, { Z: () => H }), n(415506), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(828700),
    c = n(442837),
    u = n(846519),
    d = n(28664),
    p = n(477690),
    f = n(481060),
    g = n(570140),
    h = n(239091),
    m = n(287259),
    b = n(785547),
    _ = n(600164),
    E = n(167533),
    O = n(925329),
    v = n(707409),
    y = n(490983),
    I = n(799777),
    C = n(626135),
    S = n(780570),
    T = n(624138),
    N = n(645818),
    j = n(981631),
    P = n(388032),
    x = n(901740);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = (0, T.Mg)(p.Z.GAME_LIST_ROW_MIN_HEIGHT),
    R = (0, T.Mg)(p.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    D = Object.freeze({
        [j.iEv.PLATFORM]: "Platform",
        [j.iEv.LAST_PLAYED]: "Last Played",
        [j.iEv.NAME]: "Name",
    }),
    M = (e) => {
        let { flag: t, icon: n, item: r, tooltip: l } = e,
            a = r.libraryApplication.hasFlag(t);
        return (0, i.jsx)(d.u, {
            text: l,
            children: (0, i.jsx)(n, { className: o()(x.settingIcon, { [x.hidden]: !a }) }),
        });
    },
    k = [
        {
            key: j.iEv.NAME,
            renderHeader: () => P.intl.string(P.t.dBfWfc),
            sort: !0,
            cellClassName: x.nameCell,
            bodyCellClassName: x.nameBodyCell,
            render: (e) =>
                (0, i.jsxs)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(O.Z, {
                            game: e.application,
                            size: O.A.SMALL,
                            className: x.gameIcon,
                        }),
                        (0, i.jsxs)("div", {
                            className: x.nameCellInfo,
                            children: [
                                (0, i.jsx)("div", {
                                    className: x.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application),
                                }),
                                e.libraryApplication.hasFlag(j.eHb.PREMIUM)
                                    ? (0, i.jsx)(d.u, {
                                          text: P.intl.string(P.t.tG2SzG),
                                          children: (0, i.jsx)(f.SrA, {
                                              size: "md",
                                              color: "currentColor",
                                              className: x.nitroIcon,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: j.iEv.PLATFORM,
            renderHeader: () => P.intl.string(P.t.YR4cHH),
            sort: !0,
            cellClassName: x.platformCell,
            bodyCellClassName: x.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: null != t ? j.EOG[t] : P.intl.string(P.t["F+l3Jt"]),
                });
            },
        },
        {
            key: j.iEv.LAST_PLAYED,
            renderHeader: () => P.intl.string(P.t.FDDyjS),
            sort: !0,
            cellClassName: x.lastPlayedCell,
            bodyCellClassName: x.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? P.intl.string(P.t.Md326p)
                        : e.isNew
                          ? P.intl.string(P.t["+F0Tho"])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(v.ZP, {
                                  end: e.lastPlayed,
                                  location: v.ZP.Locations.GAME_LIBRARY_LAST_PLAYED,
                              })
                            : P.intl.string(P.t.EoWLru)),
                    (0, i.jsx)(_.Z, {
                        align: _.Z.Align.CENTER,
                        className: o()({ [x.lastPlayedCellNew]: e.isNew }),
                        children: t,
                    })
                );
            },
        },
        {
            key: j.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: x.actionsCell,
            render(e, t, n) {
                var r, a;
                if (null == t) throw Error("No cell props defined.");
                let s = e.key === t.activeRowKey;
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.settingIcons,
                            children: [
                                (0, i.jsx)(M, {
                                    flag: j.eHb.PRIVATE,
                                    item: e,
                                    icon: f.kZF,
                                    tooltip: P.intl.string(P.t.NozAop),
                                }),
                                (0, i.jsx)(M, {
                                    flag: j.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: f.o8v,
                                    tooltip: P.intl.string(P.t.Az9eqn),
                                }),
                                (0, i.jsx)(N.Z, {
                                    className: o()(x.settingIcon, { [x.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication,
                                }),
                            ],
                        }),
                        (0, S.Je)(e.libraryApplication)
                            ? (0, i.jsx)(b.Z, {
                                  analyticsListSort:
                                      ((r = t.sortKey),
                                      (a = t.sortDirection),
                                      "".concat(D[r], " ").concat(a === j.sHY.ASCENDING ? "ASC" : "DESC")),
                                  analyticsListIndex: n,
                                  source: j.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  playButtonVariant: s ? "primary" : "secondary",
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
    U = (e) => {
        var {
                item: t,
                activeRowKey: n,
                highlightedApplicationKey: r,
                onMouseEnter: l,
                onMouseLeave: a,
                onContextMenu: s,
                setRef: c,
            } = e,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, [
                "item",
                "activeRowKey",
                "highlightedApplicationKey",
                "onMouseEnter",
                "onMouseLeave",
                "onContextMenu",
                "setRef",
            ]);
        let d = t.key === n,
            p = t.key === r;
        return (0, i.jsx)("div", {
            className: o()({
                [x.rowWrapperActive]: d && !p,
                [x.rowWrapperGlow]: p,
                [x.rowWrapper]: !d && !p,
                [x.rowWrapperDim]: !d && !t.isLaunchable,
            }),
            ref: (e) => {
                c(e, t.key);
            },
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => s(e, t),
            children: (0, i.jsx)("div", Z({}, u)),
        });
    };
class G extends (r = l.PureComponent) {
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
            null != e && (g.Z.wait(h.Zy), this.props.scrollToRow(e, L));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], L),
            new u.V7().start(R, () => {
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
                case j.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case j.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case j.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case j.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case j.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case j.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case j.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case j.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        C.default.track(j.rMx.LIBRARY_VIEWED, w(Z({}, e), { load_id: t.loadId }));
    }
    handleSort(e, t) {
        m.fS(e, t);
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props,
            r = t.length > 0;
        return r
            ? null
            : ((e = "" !== n ? P.intl.format(P.t["4Q1TAr"], { query: n }) : P.intl.string(P.t["0Y+0PY"])),
              (0, i.jsxs)("div", {
                  className: r ? x.emptyStateSmall : x.emptyStateLarge,
                  children: [
                      (0, i.jsx)("div", { className: x.emptyWumpus }),
                      (0, i.jsx)(_.Z, {
                          grow: 0,
                          shrink: +!!r,
                          direction: _.Z.Direction.VERTICAL,
                          children: (0, i.jsxs)("div", {
                              className: x.emptyStateText,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: x.emptyStateHeader,
                                      children: P.intl.string(P.t.Lw8X2j),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: x.emptyStateDescription,
                                      children: e,
                                  }),
                              ],
                          }),
                      }),
                  ],
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: r, stickyHeader: a } = this.props,
            { overflowMenuRowKey: o, highlightedApplicationKey: s } = this.state;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                n.length > 0
                    ? (0, i.jsx)(E.Z, {
                          columns: k,
                          data: n,
                          sortData: !1,
                          rowComponent: U,
                          className: x.table,
                          headerClassName: a ? x.stickyHeader : x.header,
                          headerCellClassName: x.headerCell,
                          sortedHeaderCellClassName: x.headerCellSorted,
                          bodyCellClassName: x.bodyCell,
                          rowClassName: x.row,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: a,
                          rowProps: {
                              activeRowKey: null != o ? o : r,
                              highlightedApplicationKey: s,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: null != o ? o : r,
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
    constructor(...e) {
        super(...e),
            A(this, "_didUnmount", !1),
            A(this, "_rowRefs", {}),
            A(this, "state", {
                overflowMenuRowKey: null,
                highlightedApplicationKey:
                    null != this.props.location.state ? this.props.location.state.applicationId : null,
            }),
            A(this, "setActiveRowKey", (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            A(this, "clearActiveRowKey", () => {
                this._didUnmount || this.setState({ overflowMenuRowKey: null });
            }),
            A(this, "handleRowMouseEnter", (e) => {
                this.props.isNavigatingByKeyboard || m.wX(e.key);
            }),
            A(this, "handleRowMouseLeave", () => {
                this.props.isNavigatingByKeyboard || m.wX(null);
            }),
            A(this, "setRowRef", (e, t) => {
                this._rowRefs[t] = e;
            }),
            A(this, "handleApplicationContextMenu", (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: r } = this.props;
                (0, h.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e("98335").then(n.bind(n, 485292));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                w(Z({}, n), {
                                    applicationId: t.libraryApplication.id,
                                    branchId: t.libraryApplication.branchId,
                                    analyticsContext: r,
                                }),
                            );
                    },
                    { onClose: this.clearActiveRowKey },
                );
            });
    }
}
function H(e) {
    let t = l.useContext(C.AnalyticsContext),
        n = (0, s.TH)(),
        {
            applicationViewItems: r,
            filterQuery: a,
            fetched: o,
        } = (0, c.cj)([y.Z], () => ({
            applicationViewItems: y.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: y.Z.applicationFilterQuery,
            fetched: y.Z.hasFetchedApplications,
        })),
        {
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: f,
        } = (0, c.cj)([I.Z], () => ({
            sortKey: I.Z.sortKey,
            sortDirection: I.Z.sortDirection,
            activeRowKey: I.Z.activeRowKey,
            isNavigatingByKeyboard: I.Z.isNavigatingByKeyboard,
        }));
    return (0, i.jsx)(
        G,
        w(Z({}, e), {
            analyticsContext: t,
            location: n,
            applicationViewItems: r,
            filterQuery: a,
            fetched: o,
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: f,
        }),
    );
}
A(G, "defaultProps", { stickyHeader: !1 });
