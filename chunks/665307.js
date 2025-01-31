n.d(t, { Z: () => k }), n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512969),
    c = n(442837),
    d = n(846519),
    u = n(477690),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(287259),
    _ = n(785547),
    f = n(600164),
    E = n(167533),
    I = n(925329),
    C = n(707409),
    v = n(490983),
    N = n(799777),
    T = n(626135),
    S = n(780570),
    Z = n(624138),
    x = n(645818),
    A = n(981631),
    b = n(388032),
    L = n(399210);
function y(e, t, n) {
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
let P = (0, Z.Mg)(u.Z.GAME_LIST_ROW_MIN_HEIGHT),
    O = (0, Z.Mg)(u.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    R = Object.freeze({
        [A.iEv.PLATFORM]: 'Platform',
        [A.iEv.LAST_PLAYED]: 'Last Played',
        [A.iEv.NAME]: 'Name'
    }),
    j = (e) => {
        let { flag: t, icon: n, item: i, tooltip: r } = e,
            a = i.libraryApplication.hasFlag(t);
        return (0, l.jsx)(h.ua7, {
            text: r,
            children: (e) =>
                (0, l.jsx)(n, {
                    className: s()(L.settingIcon, { [L.hidden]: !a }),
                    ...e
                })
        });
    },
    D = [
        {
            key: A.iEv.NAME,
            renderHeader: () => b.intl.string(b.t.dBfWfX),
            sort: !0,
            cellClassName: L.nameCell,
            bodyCellClassName: L.nameBodyCell,
            render: (e) =>
                (0, l.jsxs)(f.Z, {
                    align: f.Z.Align.CENTER,
                    children: [
                        (0, l.jsx)(I.Z, {
                            game: e.application,
                            size: I.Z.Sizes.SMALL,
                            className: L.gameIcon
                        }),
                        (0, l.jsxs)('div', {
                            className: L.nameCellInfo,
                            children: [
                                (0, l.jsx)('div', {
                                    className: L.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application)
                                }),
                                e.libraryApplication.hasFlag(A.eHb.PREMIUM)
                                    ? (0, l.jsx)(h.ua7, {
                                          text: b.intl.string(b.t.tG2SzM),
                                          children: (e) =>
                                              (0, l.jsx)(h.SrA, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: L.nitroIcon,
                                                  ...e
                                              })
                                      })
                                    : null
                            ]
                        })
                    ]
                })
        },
        {
            key: A.iEv.PLATFORM,
            renderHeader: () => b.intl.string(b.t.YR4cHB),
            sort: !0,
            cellClassName: L.platformCell,
            bodyCellClassName: L.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, l.jsx)(f.Z, {
                    align: f.Z.Align.CENTER,
                    children: null != t ? A.EOG[t] : b.intl.string(b.t['F+l3Ji'])
                });
            }
        },
        {
            key: A.iEv.LAST_PLAYED,
            renderHeader: () => b.intl.string(b.t.FDDyjY),
            sort: !0,
            cellClassName: L.lastPlayedCell,
            bodyCellClassName: L.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? b.intl.string(b.t.Md326u)
                        : e.isNew
                          ? b.intl.string(b.t['+F0Tho'])
                          : 0 !== e.lastPlayed
                            ? (0, l.jsx)(C.ZP, {
                                  end: e.lastPlayed,
                                  location: C.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
                              })
                            : b.intl.string(b.t.EoWLrq)),
                    (0, l.jsx)(f.Z, {
                        align: f.Z.Align.CENTER,
                        className: s()({ [L.lastPlayedCellNew]: e.isNew }),
                        children: t
                    })
                );
            }
        },
        {
            key: A.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: L.actionsCell,
            render(e, t, n) {
                var i, a;
                if (null == t) throw Error('No cell props defined.');
                let o = e.key === t.activeRowKey;
                return (0, l.jsxs)(r.Fragment, {
                    children: [
                        (0, l.jsxs)('div', {
                            className: L.settingIcons,
                            children: [
                                (0, l.jsx)(j, {
                                    flag: A.eHb.PRIVATE,
                                    item: e,
                                    icon: h.kZF,
                                    tooltip: b.intl.string(b.t.NozAoq)
                                }),
                                (0, l.jsx)(j, {
                                    flag: A.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: h.o8v,
                                    tooltip: b.intl.string(b.t.Az9eqq)
                                }),
                                (0, l.jsx)(x.Z, {
                                    className: s()(L.settingIcon, { [L.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication
                                })
                            ]
                        }),
                        (0, S.Je)(e.libraryApplication)
                            ? (0, l.jsx)(_.Z, {
                                  analyticsListSort: ((i = t.sortKey), (a = t.sortDirection), ''.concat(R[i], ' ').concat(a === A.sHY.ASCENDING ? 'ASC' : 'DESC')),
                                  analyticsListIndex: n,
                                  source: A.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: o ? h.zxk.Colors.GREEN : h.zxk.Colors.PRIMARY,
                                  isPlayShiny: o && e.defaultAction === A.apO.PLAY,
                                  size: L.actionButtonSize,
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey()
                              })
                            : (0, l.jsx)('div', { children: 'deprecated!' })
                    ]
                });
            }
        }
    ],
    w = (e) => {
        let { item: t, activeRowKey: n, highlightedApplicationKey: i, onMouseEnter: r, onMouseLeave: a, onContextMenu: o, setRef: c, ...d } = e,
            u = t.key === n,
            h = t.key === i;
        return (0, l.jsx)('div', {
            className: s()({
                [L.rowWrapperActive]: u && !h,
                [L.rowWrapperGlow]: h,
                [L.rowWrapper]: !u && !h,
                [L.rowWrapperDim]: !u && !t.isLaunchable
            }),
            ref: (e) => c(e, t.key),
            onMouseEnter: () => r(t),
            onMouseLeave: a,
            onContextMenu: (e) => o(e, t),
            children: (0, l.jsx)('div', { ...d })
        });
    };
class M extends (i = r.PureComponent) {
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
            null != e && (m.Z.wait(p.Zy), this.props.scrollToRow(e, P));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], P),
            new d.V7().start(O, () => {
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
                case A.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case A.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case A.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case A.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case A.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case A.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case A.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case A.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        T.default.track(A.rMx.LIBRARY_VIEWED, {
            ...e,
            load_id: t.loadId
        });
    }
    handleSort(e, t) {
        g.fS(e, t);
    }
    renderImportHelp() {
        let e;
        let { applicationViewItems: t, filterQuery: n } = this.props,
            i = t.length > 0;
        return i
            ? null
            : ((e = '' !== n ? b.intl.format(b.t['4Q1TAg'], { query: n }) : b.intl.string(b.t['0Y+0PT'])),
              (0, l.jsxs)('div', {
                  className: i ? L.emptyStateSmall : L.emptyStateLarge,
                  children: [
                      (0, l.jsx)('div', { className: L.emptyWumpus }),
                      (0, l.jsx)(f.Z, {
                          grow: 0,
                          shrink: i ? 1 : 0,
                          direction: f.Z.Direction.VERTICAL,
                          children: (0, l.jsxs)('div', {
                              className: L.emptyStateText,
                              children: [
                                  (0, l.jsx)('div', {
                                      className: L.emptyStateHeader,
                                      children: b.intl.string(b.t.Lw8X2t)
                                  }),
                                  (0, l.jsx)('div', {
                                      className: L.emptyStateDescription,
                                      children: e
                                  })
                              ]
                          })
                      })
                  ]
              }));
    }
    render() {
        let { sortKey: e, sortDirection: t, applicationViewItems: n, activeRowKey: i, stickyHeader: a } = this.props,
            { overflowMenuRowKey: s, highlightedApplicationKey: o } = this.state;
        return (0, l.jsxs)(r.Fragment, {
            children: [
                n.length > 0
                    ? (0, l.jsx)(E.Z, {
                          columns: D,
                          data: n,
                          sortData: !1,
                          rowComponent: w,
                          className: L.table,
                          headerClassName: a ? L.stickyHeader : L.header,
                          headerCellClassName: L.headerCell,
                          sortedHeaderCellClassName: L.headerCellSorted,
                          bodyCellClassName: L.bodyCell,
                          rowClassName: L.row,
                          sortKey: e,
                          sortDirection: t,
                          stickyHeader: a,
                          rowProps: {
                              activeRowKey: null != s ? s : i,
                              highlightedApplicationKey: o,
                              onMouseEnter: this.handleRowMouseEnter,
                              onMouseLeave: this.handleRowMouseLeave,
                              onContextMenu: this.handleApplicationContextMenu,
                              setRef: this.setRowRef
                          },
                          cellProps: {
                              activeRowKey: null != s ? s : i,
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
            y(this, '_didUnmount', !1),
            y(this, '_rowRefs', {}),
            y(this, 'state', {
                overflowMenuRowKey: null,
                highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
            }),
            y(this, 'setActiveRowKey', (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            y(this, 'clearActiveRowKey', () => {
                this._didUnmount || this.setState({ overflowMenuRowKey: null });
            }),
            y(this, 'handleRowMouseEnter', (e) => {
                this.props.isNavigatingByKeyboard || g.wX(e.key);
            }),
            y(this, 'handleRowMouseLeave', () => {
                this.props.isNavigatingByKeyboard || g.wX(null);
            }),
            y(this, 'setRowRef', (e, t) => {
                this._rowRefs[t] = e;
            }),
            y(this, 'handleApplicationContextMenu', (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: i } = this.props;
                (0, p.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                applicationId: t.libraryApplication.id,
                                branchId: t.libraryApplication.branchId,
                                analyticsContext: i
                            });
                    },
                    { onClose: this.clearActiveRowKey }
                );
            });
    }
}
function k(e) {
    let t = r.useContext(T.AnalyticsContext),
        n = (0, o.TH)(),
        {
            applicationViewItems: i,
            filterQuery: a,
            fetched: s
        } = (0, c.cj)([v.Z], () => ({
            applicationViewItems: v.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: v.Z.applicationFilterQuery,
            fetched: v.Z.hasFetchedApplications
        })),
        {
            sortKey: d,
            sortDirection: u,
            activeRowKey: h,
            isNavigatingByKeyboard: m
        } = (0, c.cj)([N.Z], () => ({
            sortKey: N.Z.sortKey,
            sortDirection: N.Z.sortDirection,
            activeRowKey: N.Z.activeRowKey,
            isNavigatingByKeyboard: N.Z.isNavigatingByKeyboard
        }));
    return (0, l.jsx)(M, {
        ...e,
        analyticsContext: t,
        location: n,
        applicationViewItems: i,
        filterQuery: a,
        fetched: s,
        sortKey: d,
        sortDirection: u,
        activeRowKey: h,
        isNavigatingByKeyboard: m
    });
}
y(M, 'defaultProps', { stickyHeader: !1 });
