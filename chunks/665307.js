n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
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
    f = n(785547),
    _ = n(600164),
    E = n(167533),
    I = n(925329),
    C = n(707409),
    N = n(490983),
    v = n(799777),
    S = n(626135),
    T = n(780570),
    A = n(624138),
    b = n(645818),
    Z = n(981631),
    x = n(388032),
    L = n(399210);
function P(e, t, n) {
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
let O = (0, A.Mg)(u.Z.GAME_LIST_ROW_MIN_HEIGHT),
    y = (0, A.Mg)(u.Z.GAME_LIST_LINKED_TO_GLOW_DURATION),
    R = Object.freeze({
        [Z.iEv.PLATFORM]: 'Platform',
        [Z.iEv.LAST_PLAYED]: 'Last Played',
        [Z.iEv.NAME]: 'Name'
    }),
    j = (e) => {
        let { flag: t, icon: n, item: i, tooltip: l } = e,
            a = i.libraryApplication.hasFlag(t);
        return (0, r.jsx)(h.Tooltip, {
            text: l,
            children: (e) =>
                (0, r.jsx)(n, {
                    className: s()(L.settingIcon, { [L.hidden]: !a }),
                    ...e
                })
        });
    },
    D = [
        {
            key: Z.iEv.NAME,
            renderHeader: () => x.intl.string(x.t.dBfWfX),
            sort: !0,
            cellClassName: L.nameCell,
            bodyCellClassName: L.nameBodyCell,
            render: (e) =>
                (0, r.jsxs)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(I.Z, {
                            game: e.application,
                            size: I.Z.Sizes.SMALL,
                            className: L.gameIcon
                        }),
                        (0, r.jsxs)('div', {
                            className: L.nameCellInfo,
                            children: [
                                (0, r.jsx)('div', {
                                    className: L.nameCellText,
                                    children: e.libraryApplication.getBranchedName(e.application)
                                }),
                                e.libraryApplication.hasFlag(Z.eHb.PREMIUM)
                                    ? (0, r.jsx)(h.Tooltip, {
                                          text: x.intl.string(x.t.tG2SzM),
                                          children: (e) =>
                                              (0, r.jsx)(h.NitroWheelIcon, {
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
            key: Z.iEv.PLATFORM,
            renderHeader: () => x.intl.string(x.t.YR4cHB),
            sort: !0,
            cellClassName: L.platformCell,
            bodyCellClassName: L.textCell,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, r.jsx)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: null != t ? Z.EOG[t] : x.intl.string(x.t['F+l3Ji'])
                });
            }
        },
        {
            key: Z.iEv.LAST_PLAYED,
            renderHeader: () => x.intl.string(x.t.FDDyjY),
            sort: !0,
            cellClassName: L.lastPlayedCell,
            bodyCellClassName: L.textCell,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? x.intl.string(x.t.Md326u)
                        : e.isNew
                          ? x.intl.string(x.t['+F0Tho'])
                          : 0 !== e.lastPlayed
                            ? (0, r.jsx)(C.ZP, {
                                  end: e.lastPlayed,
                                  location: C.ZP.Locations.GAME_LIBRARY_LAST_PLAYED
                              })
                            : x.intl.string(x.t.EoWLrq)),
                    (0, r.jsx)(_.Z, {
                        align: _.Z.Align.CENTER,
                        className: s()({ [L.lastPlayedCellNew]: e.isNew }),
                        children: t
                    })
                );
            }
        },
        {
            key: Z.iEv.ACTIONS,
            renderHeader: () => null,
            cellClassName: L.actionsCell,
            render(e, t, n) {
                var i, a;
                if (null == t) throw Error('No cell props defined.');
                let o = e.key === t.activeRowKey;
                return (0, r.jsxs)(l.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: L.settingIcons,
                            children: [
                                (0, r.jsx)(j, {
                                    flag: Z.eHb.PRIVATE,
                                    item: e,
                                    icon: h.EyeSlashIcon,
                                    tooltip: x.intl.string(x.t.NozAoq)
                                }),
                                (0, r.jsx)(j, {
                                    flag: Z.eHb.OVERLAY_DISABLED,
                                    item: e,
                                    icon: h.ScreenSlashIcon,
                                    tooltip: x.intl.string(x.t.Az9eqq)
                                }),
                                (0, r.jsx)(b.Z, {
                                    className: s()(L.settingIcon, { [L.hidden]: !e.supportsCloudSync }),
                                    libraryApplication: e.libraryApplication
                                })
                            ]
                        }),
                        (0, T.Je)(e.libraryApplication)
                            ? (0, r.jsx)(f.Z, {
                                  analyticsListSort: ((i = t.sortKey), (a = t.sortDirection), ''.concat(R[i], ' ').concat(a === Z.sHY.ASCENDING ? 'ASC' : 'DESC')),
                                  analyticsListIndex: n,
                                  source: Z.Sbl.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  color: o ? h.Button.Colors.GREEN : h.Button.Colors.PRIMARY,
                                  isPlayShiny: o && e.defaultAction === Z.apO.PLAY,
                                  size: L.actionButtonSize,
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey()
                              })
                            : (0, r.jsx)('div', { children: 'deprecated!' })
                    ]
                });
            }
        }
    ],
    M = (e) => {
        let { item: t, activeRowKey: n, highlightedApplicationKey: i, onMouseEnter: l, onMouseLeave: a, onContextMenu: o, setRef: c, ...d } = e,
            u = t.key === n,
            h = t.key === i;
        return (0, r.jsx)('div', {
            className: s()({
                [L.rowWrapperActive]: u && !h,
                [L.rowWrapperGlow]: h,
                [L.rowWrapper]: !u && !h,
                [L.rowWrapperDim]: !u && !t.isLaunchable
            }),
            ref: (e) => c(e, t.key),
            onMouseEnter: () => l(t),
            onMouseLeave: a,
            onContextMenu: (e) => o(e, t),
            children: (0, r.jsx)('div', { ...d })
        });
    };
class w extends (i = l.PureComponent) {
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
            null != e && (m.Z.wait(p.Zy), this.props.scrollToRow(e, O));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], O),
            new d.V7().start(y, () => {
                !this._didUnmount && this.setState({ highlightedApplicationKey: null });
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
                case Z.GQo.DISCORD:
                    e.num_applications_discord++;
                    break;
                case Z.GQo.STEAM:
                    e.num_applications_steam++;
                    break;
                case Z.GQo.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case Z.GQo.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case Z.GQo.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case Z.GQo.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case Z.GQo.GOG:
                    e.num_applications_gog++;
                    break;
                case Z.GQo.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        S.default.track(Z.rMx.LIBRARY_VIEWED, {
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
            : ((e = '' !== n ? x.intl.format(x.t['4Q1TAg'], { query: n }) : x.intl.string(x.t['0Y+0PT'])),
              (0, r.jsxs)('div', {
                  className: i ? L.emptyStateSmall : L.emptyStateLarge,
                  children: [
                      (0, r.jsx)('div', { className: L.emptyWumpus }),
                      (0, r.jsx)(_.Z, {
                          grow: 0,
                          shrink: i ? 1 : 0,
                          direction: _.Z.Direction.VERTICAL,
                          children: (0, r.jsxs)('div', {
                              className: L.emptyStateText,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: L.emptyStateHeader,
                                      children: x.intl.string(x.t.Lw8X2t)
                                  }),
                                  (0, r.jsx)('div', {
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
        return (0, r.jsxs)(l.Fragment, {
            children: [
                n.length > 0
                    ? (0, r.jsx)(E.Z, {
                          columns: D,
                          data: n,
                          sortData: !1,
                          rowComponent: M,
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
            P(this, '_didUnmount', !1),
            P(this, '_rowRefs', {}),
            P(this, 'state', {
                overflowMenuRowKey: null,
                highlightedApplicationKey: null != this.props.location.state ? this.props.location.state.applicationId : null
            }),
            P(this, 'setActiveRowKey', (e) => {
                this.setState({ overflowMenuRowKey: e.key });
            }),
            P(this, 'clearActiveRowKey', () => {
                !this._didUnmount && this.setState({ overflowMenuRowKey: null });
            }),
            P(this, 'handleRowMouseEnter', (e) => {
                !this.props.isNavigatingByKeyboard && g.wX(e.key);
            }),
            P(this, 'handleRowMouseLeave', () => {
                !this.props.isNavigatingByKeyboard && g.wX(null);
            }),
            P(this, 'setRowRef', (e, t) => {
                this._rowRefs[t] = e;
            }),
            P(this, 'handleApplicationContextMenu', (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: i } = this.props;
                (0, p.jW)(
                    e,
                    async () => {
                        let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                        return (n) =>
                            (0, r.jsx)(e, {
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
    let t = l.useContext(S.AnalyticsContext),
        n = (0, o.TH)(),
        {
            applicationViewItems: i,
            filterQuery: a,
            fetched: s
        } = (0, c.cj)([N.Z], () => ({
            applicationViewItems: N.Z.sortedFilteredLibraryApplicationViewItems,
            filterQuery: N.Z.applicationFilterQuery,
            fetched: N.Z.hasFetchedApplications
        })),
        {
            sortKey: d,
            sortDirection: u,
            activeRowKey: h,
            isNavigatingByKeyboard: m
        } = (0, c.cj)([v.Z], () => ({
            sortKey: v.Z.sortKey,
            sortDirection: v.Z.sortDirection,
            activeRowKey: v.Z.activeRowKey,
            isNavigatingByKeyboard: v.Z.isNavigatingByKeyboard
        }));
    return (0, r.jsx)(w, {
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
P(w, 'defaultProps', { stickyHeader: !1 });
