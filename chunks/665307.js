n.d(t, { Z: () => H }), n(415506), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(828700),
    c = n(442837),
    u = n(846519),
    d = n(28664),
    p = n(477690),
    f = n(755721),
    h = n(481060),
    g = n(570140),
    m = n(239091),
    _ = n(287259),
    b = n(785547),
    E = n(600164),
    O = n(167533),
    v = n(925329),
    y = n(707409),
    I = n(490983),
    C = n(799777),
    S = n(626135),
    T = n(780570),
    N = n(624138),
    j = n(645818),
    P = n(981631),
    x = n(388032),
    A = n(117554);
function Z(e, t, n) {
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
function w(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
let R = (0, N.Mg)(p.Z.GAME_LIST_ROW_MIN_HEIGHT),
    D = (0, N.Mg)(p.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    M = Object.freeze({
        [P.iEv.PLATFORM]: "Platform",
        [P.iEv.LAST_PLAYED]: "Last Played",
        [P.iEv.NAME]: "Name",
    }),
    k = (e) => {
        let { flag: t, icon: n, item: r, tooltip: l } = e,
            a = r.libraryApplication.hasFlag(t);
        return (0, i.jsxs)(d.u, {
            text: l,
            children: ["(", (0, i.jsx)(n, { className: s()(A.settingIcon, { [A.hidden]: !a }) }), ")"],
        });
    },
    U = [
        {
            key: P.iEv.NAME,
            renderHeader: () => x.intl.string(x.t.dBfWfc),
            sort: !0,
            cellClassName: A.nameCell,
            bodyCellClassName: A.nameBodyCell,
            render: (e) =>
                (0, i.jsxs)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(v.Z, {
                            game: e.application,
                            size: v.A.SMALL,
                            className: A.gameIcon,
                        }),
                        (0, i.jsxs)("div", {
                            className: A.nameCellInfo,
                            children: [
                                (0, i.jsx)("div", {
                                    className: A.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application),
                                }),
                                e.libraryApplication.hasFlag(P.eHb.PREMIUM)
                                    ? (0, i.jsxs)(d.u, {
                                          text: x.intl.string(x.t.tG2SzG),
                                          children: [
                                              "(",
                                              (0, i.jsx)(h.SrA, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: A.nitroIcon,
                                              }),
                                              ")",
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: P.iEv.PLATFORM,
            renderHeader: () => x.intl.string(x.t.YR4cHH),
            sort: !0,
            cellClassName: A.platformCell,
            bodyCellClassName: A.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: null != t ? P.EOG[t] : x.intl.string(x.t["F+l3Jt"]),
                });
            },
        },
        {
            key: P.iEv.LAST_PLAYED,
            renderHeader: () => x.intl.string(x.t.FDDyjS),
            sort: !0,
            cellClassName: A.lastPlayedCell,
            bodyCellClassName: A.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? x.intl.string(x.t.Md326p)
                        : e.isNew
                          ? x.intl.string(x.t["+F0Tho"])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(y.ZP, {
                                  end: e.lastPlayed,
                                  location: y.ZP.Locations.GAME_LIBRARY_LAST_PLAYED,
                              })
                            : x.intl.string(x.t.EoWLru)),
                    (0, i.jsx)(E.Z, {
                        align: E.Z.Align.CENTER,
                        className: s()({ [A.lastPlayedCellNew]: e.isNew }),
                        children: t,
                    })
                );
            },
        },
        {
            key: P.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: A.actionsCell,
            render(e, t, n) {
                var r, a;
                if (null == t) throw Error("No cell props defined.");
                let o = e.key === t.activeRowKey;
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: A.settingIcons,
                            children: [
                                (0, i.jsx)(k, {
                                    flag: P.eHb.PRIVATE,
                                    item: e,
                                    icon: h.kZF,
                                    tooltip: x.intl.string(x.t.NozAop),
                                }),
                                (0, i.jsx)(k, {
                                    flag: P.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: h.o8v,
                                    tooltip: x.intl.string(x.t.Az9eqn),
                                }),
                                (0, i.jsx)(j.Z, {
                                    className: s()(A.settingIcon, { [A.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication,
                                }),
                            ],
                        }),
                        (0, T.Je)(e.libraryApplication)
                            ? (0, i.jsx)(b.Z, {
                                  analyticsListSort:
                                      ((r = t.sortKey),
                                      (a = t.sortDirection),
                                      "".concat(M[r], " ").concat(a === P.sHY.ASCENDING ? "ASC" : "DESC")),
                                  analyticsListIndex: n,
                                  source: P.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: o ? f.zx.Colors.GREEN : f.zx.Colors.PRIMARY,
                                  isPlayShiny: o && e.defaultAction === P.apO.PLAY,
                                  size: A.actionButtonSize,
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
    G = (e) => {
        var {
                item: t,
                activeRowKey: n,
                highlightedApplicationKey: r,
                onMouseEnter: l,
                onMouseLeave: a,
                onContextMenu: o,
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
            className: s()({
                [A.rowWrapperActive]: d && !p,
                [A.rowWrapperGlow]: p,
                [A.rowWrapper]: !d && !p,
                [A.rowWrapperDim]: !d && !t.isLaunchable,
            }),
            ref: (e) => {
                c(e, t.key);
            },
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => o(e, t),
            children: (0, i.jsx)("div", w({}, u)),
        });
    };
class B extends (r = l.PureComponent) {
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
            null != e && (g.Z.wait(m.Zy), this.props.scrollToRow(e, R));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], R),
            new u.V7().start(D, () => {
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
                case P.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case P.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case P.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case P.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case P.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case P.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case P.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case P.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        S.default.track(P.rMx.LIBRARY_VIEWED, L(w({}, e), { load_id: t.loadId }));
    }
    handleSort(e, t) {
        _.fS(e, t);
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props,
            r = t.length > 0;
        return r
            ? null
            : ((e = "" !== n ? x.intl.format(x.t["4Q1TAr"], { query: n }) : x.intl.string(x.t["0Y+0PY"])),
              (0, i.jsxs)("div", {
                  className: r ? A.emptyStateSmall : A.emptyStateLarge,
                  children: [
                      (0, i.jsx)("div", { className: A.emptyWumpus }),
                      (0, i.jsx)(E.Z, {
                          grow: 0,
                          shrink: +!!r,
                          direction: E.Z.Direction.VERTICAL,
                          children: (0, i.jsxs)("div", {
                              className: A.emptyStateText,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: A.emptyStateHeader,
                                      children: x.intl.string(x.t.Lw8X2j),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: A.emptyStateDescription,
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
            { overflowMenuRowKey: s, highlightedApplicationKey: o } = this.state;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                n.length > 0
                    ? (0, i.jsx)(O.Z, {
                          columns: U,
                          data: n,
                          sortData: !1,
                          rowComponent: G,
                          className: A.table,
                          headerClassName: a ? A.stickyHeader : A.header,
                          headerCellClassName: A.headerCell,
                          sortedHeaderCellClassName: A.headerCellSorted,
                          bodyCellClassName: A.bodyCell,
                          rowClassName: A.row,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: a,
                          rowProps: {
                              activeRowKey: null != s ? s : r,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef,
                          },
                          cellProps: {
                              activeRowKey: null != s ? s : r,
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
            Z(this, "_didUnmount", !1),
            Z(this, "_rowRefs", {}),
            Z(this, "state", {
                overflowMenuRowKey: null,
                highlightedApplicationKey:
                    null != this.props.location.state ? this.props.location.state.applicationId : null,
            }),
            Z(this, "setActiveRowKey", (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            Z(this, "clearActiveRowKey", () => {
                this._didUnmount || this.setState({ overflowMenuRowKey: null });
            }),
            Z(this, "handleRowMouseEnter", (e) => {
                this.props.isNavigatingByKeyboard || _.wX(e.key);
            }),
            Z(this, "handleRowMouseLeave", () => {
                this.props.isNavigatingByKeyboard || _.wX(null);
            }),
            Z(this, "setRowRef", (e, t) => {
                this._rowRefs[t] = e;
            }),
            Z(this, "handleApplicationContextMenu", (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: r } = this.props;
                (0, m.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e("98335").then(n.bind(n, 485292));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                L(w({}, n), {
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
    let t = l.useContext(S.AnalyticsContext),
        n = (0, o.TH)(),
        {
            applicationViewItems: r,
            filterQuery: a,
            fetched: s,
        } = (0, c.cj)([I.Z], () => ({
            applicationViewItems: I.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: I.Z.applicationFilterQuery,
            fetched: I.Z.hasFetchedApplications,
        })),
        {
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: f,
        } = (0, c.cj)([C.Z], () => ({
            sortKey: C.Z.sortKey,
            sortDirection: C.Z.sortDirection,
            activeRowKey: C.Z.activeRowKey,
            isNavigatingByKeyboard: C.Z.isNavigatingByKeyboard,
        }));
    return (0, i.jsx)(
        B,
        L(w({}, e), {
            analyticsContext: t,
            location: n,
            applicationViewItems: r,
            filterQuery: a,
            fetched: s,
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: f,
        }),
    );
}
Z(B, "defaultProps", { stickyHeader: !1 });
