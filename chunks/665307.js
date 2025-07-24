(n.d(t, { Z: () => B }), n(415506), n(388685));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(114858),
    c = n(442837),
    u = n(846519),
    d = n(477690),
    p = n(755721),
    h = n(481060),
    f = n(570140),
    g = n(239091),
    m = n(287259),
    b = n(785547),
    _ = n(600164),
    O = n(167533),
    E = n(925329),
    y = n(707409),
    v = n(490983),
    I = n(799777),
    C = n(626135),
    S = n(780570),
    N = n(624138),
    T = n(645818),
    P = n(981631),
    j = n(388032),
    x = n(833972);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            }));
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
let L = (0, N.Mg)(d.Z.GAME_LIST_ROW_MIN_HEIGHT),
    R = (0, N.Mg)(d.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    D = Object.freeze({
        [P.iEv.PLATFORM]: 'Platform',
        [P.iEv.LAST_PLAYED]: 'Last Played',
        [P.iEv.NAME]: 'Name'
    }),
    k = (e) => {
        let { flag: t, icon: n, item: r, tooltip: l } = e,
            a = r.libraryApplication.hasFlag(t);
        return (0, i.jsx)(h.ua7, {
            text: l,
            children: (e) => (0, i.jsx)(n, Z({ className: o()(x.settingIcon, { [x.hidden]: !a }) }, e))
        });
    },
    M = [
        {
            key: P.iEv.NAME,
            renderHeader: () => j.intl.string(j.t.dBfWfX),
            sort: !0,
            cellClassName: x.nameCell,
            bodyCellClassName: x.nameBodyCell,
            render: (e) =>
                (0, i.jsxs)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(E.Z, {
                            game: e.application,
                            size: E.Z.Sizes.SMALL,
                            className: x.gameIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: x.nameCellInfo,
                            children: [
                                (0, i.jsx)('div', {
                                    className: x.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application)
                                }),
                                e.libraryApplication.hasFlag(P.eHb.PREMIUM)
                                    ? (0, i.jsx)(h.ua7, {
                                          text: j.intl.string(j.t.tG2SzM),
                                          children: (e) =>
                                              (0, i.jsx)(
                                                  h.SrA,
                                                  Z(
                                                      {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: x.nitroIcon
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
            key: P.iEv.PLATFORM,
            renderHeader: () => j.intl.string(j.t.YR4cHB),
            sort: !0,
            cellClassName: x.platformCell,
            bodyCellClassName: x.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: null != t ? P.EOG[t] : j.intl.string(j.t['F+l3Ji'])
                });
            }
        },
        {
            key: P.iEv.LAST_PLAYED,
            renderHeader: () => j.intl.string(j.t.FDDyjY),
            sort: !0,
            cellClassName: x.lastPlayedCell,
            bodyCellClassName: x.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? j.intl.string(j.t.Md326u)
                        : e.isNew
                          ? j.intl.string(j.t['+F0Tho'])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(y.ZP, {
                                  end: e.lastPlayed,
                                  location: y.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
                              })
                            : j.intl.string(j.t.EoWLrq)),
                    (0, i.jsx)(_.Z, {
                        align: _.Z.Align.CENTER,
                        className: o()({ [x.lastPlayedCellNew]: e.isNew }),
                        children: t
                    })
                );
            }
        },
        {
            key: P.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: x.actionsCell,
            render(e, t, n) {
                var r, a;
                if (null == t) throw Error('No cell props defined.');
                let s = e.key === t.activeRowKey;
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: x.settingIcons,
                            children: [
                                (0, i.jsx)(k, {
                                    flag: P.eHb.PRIVATE,
                                    item: e,
                                    icon: h.kZF,
                                    tooltip: j.intl.string(j.t.NozAoq)
                                }),
                                (0, i.jsx)(k, {
                                    flag: P.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: h.o8v,
                                    tooltip: j.intl.string(j.t.Az9eqq)
                                }),
                                (0, i.jsx)(T.Z, {
                                    className: o()(x.settingIcon, { [x.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication
                                })
                            ]
                        }),
                        (0, S.Je)(e.libraryApplication)
                            ? (0, i.jsx)(b.Z, {
                                  analyticsListSort: ((r = t.sortKey), (a = t.sortDirection), ''.concat(D[r], ' ').concat(a === P.sHY.ASCENDING ? 'ASC' : 'DESC')),
                                  analyticsListIndex: n,
                                  source: P.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: s ? p.zx.Colors.GREEN : p.zx.Colors.PRIMARY,
                                  isPlayShiny: s && e.defaultAction === P.apO.PLAY,
                                  size: x.actionButtonSize,
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
    U = (e) => {
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
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['item', 'activeRowKey', 'highlightedApplicationKey', 'onMouseEnter', 'onMouseLeave', 'onContextMenu', 'setRef']);
        let d = t.key === n,
            p = t.key === r;
        return (0, i.jsx)('div', {
            className: o()({
                [x.rowWrapperActive]: d && !p,
                [x.rowWrapperGlow]: p,
                [x.rowWrapper]: !d && !p,
                [x.rowWrapperDim]: !d && !t.isLaunchable
            }),
            ref: (e) => {
                c(e, t.key);
            },
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => s(e, t),
            children: (0, i.jsx)('div', Z({}, u))
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
            null != e && (f.Z.wait(g.Zy), this.props.scrollToRow(e, L));
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
                num_applications_epic: 0
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
        C.default.track(P.rMx.LIBRARY_VIEWED, w(Z({}, e), { load_id: t.loadId }));
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
            : ((e = '' !== n ? j.intl.format(j.t['4Q1TAg'], { query: n }) : j.intl.string(j.t['0Y+0PT'])),
              (0, i.jsxs)('div', {
                  className: r ? x.emptyStateSmall : x.emptyStateLarge,
                  children: [
                      (0, i.jsx)('div', { className: x.emptyWumpus }),
                      (0, i.jsx)(_.Z, {
                          grow: 0,
                          shrink: +!!r,
                          direction: _.Z.Direction.VERTICAL,
                          children: (0, i.jsxs)('div', {
                              className: x.emptyStateText,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: x.emptyStateHeader,
                                      children: j.intl.string(j.t.Lw8X2t)
                                  }),
                                  (0, i.jsx)('div', {
                                      className: x.emptyStateDescription,
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
                    ? (0, i.jsx)(O.Z, {
                          columns: M,
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
        (super(...e),
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
                this.props.isNavigatingByKeyboard || m.wX(e.key);
            }),
            A(this, 'handleRowMouseLeave', () => {
                this.props.isNavigatingByKeyboard || m.wX(null);
            }),
            A(this, 'setRowRef', (e, t) => {
                this._rowRefs[t] = e;
            }),
            A(this, 'handleApplicationContextMenu', (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: r } = this.props;
                (0, g.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                w(Z({}, n), {
                                    applicationId: t.libraryApplication.id,
                                    branchId: t.libraryApplication.branchId,
                                    analyticsContext: r
                                })
                            );
                    },
                    { onClose: this.clearActiveRowKey }
                );
            }));
    }
}
function B(e) {
    let t = l.useContext(C.AnalyticsContext),
        n = (0, s.TH)(),
        {
            applicationViewItems: r,
            filterQuery: a,
            fetched: o
        } = (0, c.cj)([v.Z], () => ({
            applicationViewItems: v.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: v.Z.applicationFilterQuery,
            fetched: v.Z.hasFetchedApplications
        })),
        {
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: h
        } = (0, c.cj)([I.Z], () => ({
            sortKey: I.Z.sortKey,
            sortDirection: I.Z.sortDirection,
            activeRowKey: I.Z.activeRowKey,
            isNavigatingByKeyboard: I.Z.isNavigatingByKeyboard
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
            isNavigatingByKeyboard: h
        })
    );
}
A(G, 'defaultProps', { stickyHeader: !1 });
