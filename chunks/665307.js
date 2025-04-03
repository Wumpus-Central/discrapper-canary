n.d(t, { Z: () => G }), n(411104), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(512969),
    c = n(442837),
    u = n(846519),
    d = n(477690),
    p = n(481060),
    h = n(570140),
    f = n(239091),
    g = n(287259),
    m = n(785547),
    b = n(600164),
    _ = n(167533),
    E = n(925329),
    O = n(707409),
    N = n(490983),
    y = n(799777),
    I = n(626135),
    v = n(780570),
    C = n(624138),
    S = n(645818),
    T = n(981631),
    P = n(388032),
    j = n(833972);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
let L = (0, C.Mg)(d.Z.GAME_LIST_ROW_MIN_HEIGHT),
    w = (0, C.Mg)(d.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    R = Object.freeze({
        [T.iEv.PLATFORM]: 'Platform',
        [T.iEv.LAST_PLAYED]: 'Last Played',
        [T.iEv.NAME]: 'Name'
    }),
    D = (e) => {
        let { flag: t, icon: n, item: r, tooltip: l } = e,
            a = r.libraryApplication.hasFlag(t);
        return (0, i.jsx)(p.ua7, {
            text: l,
            children: (e) => (0, i.jsx)(n, Z({ className: o()(j.settingIcon, { [j.hidden]: !a }) }, e))
        });
    },
    k = [
        {
            key: T.iEv.NAME,
            renderHeader: () => P.NW.string(P.t.dBfWfX),
            sort: !0,
            cellClassName: j.nameCell,
            bodyCellClassName: j.nameBodyCell,
            render: (e) =>
                (0, i.jsxs)(b.Z, {
                    align: b.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(E.Z, {
                            game: e.application,
                            size: E.Z.Sizes.SMALL,
                            className: j.gameIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: j.nameCellInfo,
                            children: [
                                (0, i.jsx)('div', {
                                    className: j.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application)
                                }),
                                e.libraryApplication.hasFlag(T.eHb.PREMIUM)
                                    ? (0, i.jsx)(p.ua7, {
                                          text: P.NW.string(P.t.tG2SzM),
                                          children: (e) =>
                                              (0, i.jsx)(
                                                  p.SrA,
                                                  Z(
                                                      {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: j.nitroIcon
                                                      },
                                                      e
                                                  )
                                              )
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        },
        {
            key: T.iEv.PLATFORM,
            renderHeader: () => P.NW.string(P.t.YR4cHB),
            sort: !0,
            cellClassName: j.platformCell,
            bodyCellClassName: j.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(b.Z, {
                    align: b.Z.Align.CENTER,
                    children: null != t ? T.EOG[t] : P.NW.string(P.t['F+l3Ji'])
                });
            }
        },
        {
            key: T.iEv.LAST_PLAYED,
            renderHeader: () => P.NW.string(P.t.FDDyjY),
            sort: !0,
            cellClassName: j.lastPlayedCell,
            bodyCellClassName: j.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? P.NW.string(P.t.Md326u)
                        : e.isNew
                          ? P.NW.string(P.t['+F0Tho'])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(O.ZP, {
                                  end: e.lastPlayed,
                                  location: O.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
                              })
                            : P.NW.string(P.t.EoWLrq)),
                    (0, i.jsx)(b.Z, {
                        align: b.Z.Align.CENTER,
                        className: o()({ [j.lastPlayedCellNew]: e.isNew }),
                        children: t
                    })
                );
            }
        },
        {
            key: T.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: j.actionsCell,
            render(e, t, n) {
                var r, a;
                if (null == t) throw Error('No cell props defined.');
                let s = e.key === t.activeRowKey;
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.settingIcons,
                            children: [
                                (0, i.jsx)(D, {
                                    flag: T.eHb.PRIVATE,
                                    item: e,
                                    icon: p.kZF,
                                    tooltip: P.NW.string(P.t.NozAoq)
                                }),
                                (0, i.jsx)(D, {
                                    flag: T.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: p.o8v,
                                    tooltip: P.NW.string(P.t.Az9eqq)
                                }),
                                (0, i.jsx)(S.Z, {
                                    className: o()(j.settingIcon, { [j.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication
                                })
                            ]
                        }),
                        (0, v.Je)(e.libraryApplication)
                            ? (0, i.jsx)(m.Z, {
                                  analyticsListSort: ((r = t.sortKey), (a = t.sortDirection), ''.concat(R[r], ' ').concat(a === T.sHY.ASCENDING ? 'ASC' : 'DESC')),
                                  analyticsListIndex: n,
                                  source: T.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: s ? p.zxk.Colors.GREEN : p.zxk.Colors.PRIMARY,
                                  isPlayShiny: s && e.defaultAction === T.apO.PLAY,
                                  size: j.actionButtonSize,
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey()
                              })
                            : (0, i.jsx)('div', { children: 'deprecated!' })
                    ]
                });
            }
        }
    ],
    M = (e) => {
        var { item: t, activeRowKey: n, highlightedApplicationKey: r, onMouseEnter: l, onMouseLeave: a, onContextMenu: s, setRef: c } = e,
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
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['item', 'activeRowKey', 'highlightedApplicationKey', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'setRef']);
        let d = t.key === n,
            p = t.key === r;
        return (0, i.jsx)('div', {
            className: o()({
                [j.rowWrapperActive]: d && !p,
                [j.rowWrapperGlow]: p,
                [j.rowWrapper]: !d && !p,
                [j.rowWrapperDim]: !d && !t.isLaunchable
            }),
            ref: (e) => c(e, t.key),
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => s(e, t),
            children: (0, i.jsx)('div', Z({}, u))
        });
    };
class U extends (r = l.PureComponent) {
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
            null != e && (h.Z.wait(f.Zy), this.props.scrollToRow(e, L));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], L),
            new u.V7().start(w, () => {
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
                num_applications_epic: 0
            },
            { analyticsContext: t, applicationViewItems: n } = this.props;
        for (let t of n) {
            switch (t.libraryApplication.getDistributor()) {
                case T.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case T.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case T.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case T.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case T.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case T.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case T.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case T.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        I.default.track(T.rMx.LIBRARY_VIEWED, x(Z({}, e), { load_id: t.loadId }));
    }
    handleSort(e, t) {
        g.fS(e, t);
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props,
            r = t.length > 0;
        return r
            ? null
            : ((e = '' !== n ? P.NW.format(P.t['4Q1TAg'], { query: n }) : P.NW.string(P.t['0Y+0PT'])),
              (0, i.jsxs)('div', {
                  className: r ? j.emptyStateSmall : j.emptyStateLarge,
                  children: [
                      (0, i.jsx)('div', { className: j.emptyWumpus }),
                      (0, i.jsx)(b.Z, {
                          grow: 0,
                          shrink: +!!r,
                          direction: b.Z.Direction.VERTICAL,
                          children: (0, i.jsxs)('div', {
                              className: j.emptyStateText,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: j.emptyStateHeader,
                                      children: P.NW.string(P.t.Lw8X2t)
                                  }),
                                  (0, i.jsx)('div', {
                                      className: j.emptyStateDescription,
                                      children: e
                                  })
                              ]
                          })
                      })
                  ]
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: r, stickyHeader: a } = this.props,
            { overflowMenuRowKey: o, highlightedApplicationKey: s } = this.state;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                n.length > 0
                    ? (0, i.jsx)(_.Z, {
                          columns: k,
                          data: n,
                          sortData: !1,
                          rowComponent: M,
                          className: j.table,
                          headerClassName: a ? j.stickyHeader : j.header,
                          headerCellClassName: j.headerCell,
                          sortedHeaderCellClassName: j.headerCellSorted,
                          bodyCellClassName: j.bodyCell,
                          rowClassName: j.row,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: a,
                          rowProps: {
                              activeRowKey: null != o ? o : r,
                              highlightedApplicationKey: s,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef
                          },
                          cellProps: {
                              activeRowKey: null != o ? o : r,
                              onContextMenu: this.handleApplicationContextMenu,
                              setActiveRowKey: this.setActiveRowKey,
                              clearActiveRowKey: this.clearActiveRowKey,
                              sortKey: e,
                              sortDirection: t
                          },
                          onSort: this.handleSort
                      })
                    : null,
                this.renderImportHelp()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, '_didUnmount', !1),
            A(this, '_rowRefs', {}),
            A(this, 'state', {
                overflowMenuRowKey: null,
                highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
            }),
            A(this, 'setActiveRowKey', (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            A(this, 'clearActiveRowKey', () => {
                this._didUnmount || this.setState({ overflowMenuRowKey: null });
            }),
            A(this, 'handleRowMouseEnter', (e) => {
                this.props.isNavigatingByKeyboard || g.wX(e.key);
            }),
            A(this, 'handleRowMouseLeave', () => {
                this.props.isNavigatingByKeyboard || g.wX(null);
            }),
            A(this, 'setRowRef', (e, t) => {
                this._rowRefs[t] = e;
            }),
            A(this, 'handleApplicationContextMenu', (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: r } = this.props;
                (0, f.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                x(Z({}, n), {
                                    applicationId: t.libraryApplication.id,
                                    branchId: t.libraryApplication.branchId,
                                    analyticsContext: r
                                })
                            );
                    },
                    { onClose: this.clearActiveRowKey }
                );
            });
    }
}
function G(e) {
    let t = l.useContext(I.AnalyticsContext),
        n = (0, s.TH)(),
        {
            applicationViewItems: r,
            filterQuery: a,
            fetched: o
        } = (0, c.cj)([N.Z], () => ({
            applicationViewItems: N.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: N.Z.applicationFilterQuery,
            fetched: N.Z.hasFetchedApplications
        })),
        {
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: h
        } = (0, c.cj)([y.Z], () => ({
            sortKey: y.Z.sortKey,
            sortDirection: y.Z.sortDirection,
            activeRowKey: y.Z.activeRowKey,
            isNavigatingByKeyboard: y.Z.isNavigatingByKeyboard
        }));
    return (0, i.jsx)(
        U,
        x(Z({}, e), {
            analyticsContext: t,
            location: n,
            applicationViewItems: r,
            filterQuery: a,
            fetched: o,
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: h
        })
    );
}
A(U, 'defaultProps', { stickyHeader: !1 });
