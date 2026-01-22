n.d(t, {
    A: () => B,
}),
    n(65821),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    c = n(311907),
    u = n(451988),
    d = n(990078),
    p = n(319060),
    f = n(397927),
    h = n(73153),
    A = n(442433),
    g = n(194894),
    m = n(979604),
    b = n(235986),
    _ = n(596719),
    E = n(769015),
    O = n(290987),
    y = n(742077),
    I = n(268387),
    v = n(954571),
    S = n(674378),
    C = n(240248),
    N = n(471761),
    T = n(652215),
    j = n(985018),
    x = n(630086);

function P(e, t, n) {
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
                P(e, t, n[t]);
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
let R = (0, C.xI)(p.A.GAME_LIST_ROW_MIN_HEIGHT),
    D = (0, C.xI)(p.A.GAME_LIST_LINKED_TO_GLOW_DURATION),
    M = Object.freeze({
        [T.DpB.PLATFORM]: "Platform",
        [T.DpB.LAST_PLAYED]: "Last Played",
        [T.DpB.NAME]: "Name",
    }),
    k = (e) => {
        let { flag: t, icon: n, item: r, tooltip: l } = e,
            a = r.libraryApplication.hasFlag(t);
        return (0, i.jsx)(d.m, {
            text: l,
            children: (0, i.jsx)(n, {
                className: s()(x.up, {
                    [x.R]: !a,
                }),
            }),
        });
    },
    U = [
        {
            key: T.DpB.NAME,
            renderHeader: () => j.intl.string(j.t.dBfWfc),
            sort: !0,
            cellClassName: x.UQ,
            bodyCellClassName: x.SJ,
            render: (e) =>
                (0, i.jsxs)(b.A, {
                    align: b.A.Align.CENTER,
                    children: [
                        (0, i.jsx)(E.A, {
                            game: e.application,
                            size: E.M.SMALL,
                            className: x.Gt,
                        }),
                        (0, i.jsxs)("div", {
                            className: x.Ot,
                            children: [
                                (0, i.jsx)("div", {
                                    className: x.TF,
                                    children: e.libraryApplication.getBranchedName(e.application),
                                }),
                                e.libraryApplication.hasFlag(T.hM6.PREMIUM)
                                    ? (0, i.jsx)(d.m, {
                                          text: j.intl.string(j.t.tG2SzG),
                                          children: (0, i.jsx)(f.tvc, {
                                              size: "md",
                                              color: "currentColor",
                                              className: x.oU,
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
        },
        {
            key: T.DpB.PLATFORM,
            renderHeader: () => j.intl.string(j.t.YR4cHH),
            sort: !0,
            cellClassName: x.AA,
            bodyCellClassName: x.iV,
            render(e) {
                let t = e.libraryApplication.getDistributor();
                return (0, i.jsx)(b.A, {
                    align: b.A.Align.CENTER,
                    children: null != t ? T.gG4[t] : j.intl.string(j.t["F+l3Jt"]),
                });
            },
        },
        {
            key: T.DpB.LAST_PLAYED,
            renderHeader: () => j.intl.string(j.t.FDDyjS),
            sort: !0,
            cellClassName: x.SX,
            bodyCellClassName: x.iV,
            render(e) {
                let t;
                return (
                    (t = e.isRunning
                        ? j.intl.string(j.t.Md326p)
                        : e.isNew
                          ? j.intl.string(j.t["+F0Tho"])
                          : 0 !== e.lastPlayed
                            ? (0, i.jsx)(O.Ay, {
                                  end: e.lastPlayed,
                                  location: O.Ay.Locations.GAME_LIBRARY_LAST_PLAYED,
                              })
                            : j.intl.string(j.t.EoWLru)),
                    (0, i.jsx)(b.A, {
                        align: b.A.Align.CENTER,
                        className: s()({
                            [x.g3]: e.isNew,
                        }),
                        children: t,
                    })
                );
            },
        },
        {
            key: T.DpB.ACTIONS,
            renderHeader: () => null,
            cellClassName: x.AT,
            render(e, t, n) {
                var r, a;
                if (null == t) throw Error("No cell props defined.");
                let o = e.key === t.activeRowKey;
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.nU,
                            children: [
                                (0, i.jsx)(k, {
                                    flag: T.hM6.PRIVATE,
                                    item: e,
                                    icon: f.G3N,
                                    tooltip: j.intl.string(j.t.NozAop),
                                }),
                                (0, i.jsx)(k, {
                                    flag: T.hM6.OVERLAY_DISABLED,
                                    item: e,
                                    icon: f.nkR,
                                    tooltip: j.intl.string(j.t.Az9eqn),
                                }),
                                (0, i.jsx)(N.A, {
                                    className: s()(x.up, {
                                        [x.R]: !e.supportsCloudSync,
                                    }),
                                    libraryApplication: e.libraryApplication,
                                }),
                            ],
                        }),
                        (0, S.XZ)(e.libraryApplication)
                            ? (0, i.jsx)(m.A, {
                                  analyticsListSort:
                                      ((r = t.sortKey),
                                      (a = t.sortDirection),
                                      "".concat(M[r], " ").concat(a === T.tSW.ASCENDING ? "ASC" : "DESC")),
                                  analyticsListIndex: n,
                                  source: T.ThZ.APPLICATION_LIBRARY,
                                  libraryApplication: e.libraryApplication,
                                  playButtonVariant: o ? "primary" : "secondary",
                                  size: "sm",
                                  hideProgress: null != e.defaultAction,
                                  onDropdownOpen: () => null != t && t.setActiveRowKey(e),
                                  onDropdownClose: () => null != t && t.clearActiveRowKey(),
                              })
                            : (0, i.jsx)("div", {
                                  children: "deprecated!",
                              }),
                    ],
                });
            },
        },
    ],
    G = (e) => {
        let {
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
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, [
                "item",
                "activeRowKey",
                "highlightedApplicationKey",
                "onMouseEnter",
                "onMouseLeave",
                "onContextMenu",
                "setRef",
            ]),
            d = t.key === n,
            p = t.key === r;
        return (0, i.jsx)("div", {
            className: s()({
                [x.eO]: d && !p,
                [x.HM]: p,
                [x.Ob]: !d && !p,
                [x.ic]: !d && !t.isLaunchable,
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
class V extends (r = l.PureComponent) {
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
            null != e && (h.h.wait(A.Z_), this.props.scrollToRow(e, R));
        }
    }
    handleHighlightedApplicationKey() {
        let { highlightedApplicationKey: e } = this.state;
        null != e &&
            null != this._rowRefs[e] &&
            (this.props.scrollToRow(this._rowRefs[e], R),
            new u.Ep().start(D, () => {
                this._didUnmount ||
                    this.setState({
                        highlightedApplicationKey: null,
                    });
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
                case T.d3x.DISCORD:
                    e.num_applications_discord++;
                    break;
                case T.d3x.STEAM:
                    e.num_applications_steam++;
                    break;
                case T.d3x.BATTLENET:
                    e.num_applications_battlenet++;
                    break;
                case T.d3x.TWITCH:
                    e.num_applications_twitch++;
                    break;
                case T.d3x.UPLAY:
                    e.num_applications_uplay++;
                    break;
                case T.d3x.ORIGIN:
                    e.num_applications_origin++;
                    break;
                case T.d3x.GOG:
                    e.num_applications_gog++;
                    break;
                case T.d3x.EPIC:
                    e.num_applications_epic++;
            }
            e.num_applications_total++;
        }
        v.default.track(
            T.HAw.LIBRARY_VIEWED,
            L(w({}, e), {
                load_id: t.loadId,
            }),
        );
    }
    handleSort(e, t) {
        g.vt(e, t);
    }
    renderImportHelp() {
        let e,
            { applicationViewItems: t, filterQuery: n } = this.props,
            r = t.length > 0;
        return r
            ? null
            : ((e =
                  "" !== n
                      ? j.intl.format(j.t["4Q1TAr"], {
                            query: n,
                        })
                      : j.intl.string(j.t["0Y+0PY"])),
              (0, i.jsxs)("div", {
                  className: r ? x.MG : x.mv,
                  children: [
                      (0, i.jsx)("div", {
                          className: x.Zd,
                      }),
                      (0, i.jsx)(b.A, {
                          grow: 0,
                          shrink: +!!r,
                          direction: b.A.Direction.VERTICAL,
                          children: (0, i.jsxs)("div", {
                              className: x.q6,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: x.ks,
                                      children: j.intl.string(j.t.Lw8X2j),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: x.Li,
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
                    ? (0, i.jsx)(_.A, {
                          columns: U,
                          data: n,
                          sortData: !1,
                          rowComponent: G,
                          className: x.tp,
                          headerClassName: a ? x.ln : x.wx,
                          headerCellClassName: x.e4,
                          sortedHeaderCellClassName: x.dm,
                          bodyCellClassName: x.hC,
                          rowClassName: x.G9,
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
            P(this, "_didUnmount", !1),
            P(this, "_rowRefs", {}),
            P(this, "state", {
                overflowMenuRowKey: null,
                highlightedApplicationKey:
                    null != this.props.location.state ? this.props.location.state.applicationId : null,
            }),
            P(this, "setActiveRowKey", (e) => {
                this.setState({
                    overflowMenuRowKey: e.key,
                });
            }),
            P(this, "clearActiveRowKey", () => {
                this._didUnmount ||
                    this.setState({
                        overflowMenuRowKey: null,
                    });
            }),
            P(this, "handleRowMouseEnter", (e) => {
                this.props.isNavigatingByKeyboard || g.pU(e.key);
            }),
            P(this, "handleRowMouseLeave", () => {
                this.props.isNavigatingByKeyboard || g.pU(null);
            }),
            P(this, "setRowRef", (e, t) => {
                this._rowRefs[t] = e;
            }),
            P(this, "handleApplicationContextMenu", (e, t) => {
                this.setActiveRowKey(t);
                let { analyticsContext: r } = this.props;
                (0, A.L3)(
                    e,
                    async () => {
                        let { default: e } = await n.e("881").then(n.bind(n, 163368));
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
                    {
                        onClose: this.clearActiveRowKey,
                    },
                );
            });
    }
}

function B(e) {
    let t = l.useContext(v.AnalyticsContext),
        n = (0, o.zy)(),
        {
            applicationViewItems: r,
            filterQuery: a,
            fetched: s,
        } = (0, c.cf)([y.A], () => ({
            applicationViewItems: y.A.sortedFilteredLibraryApplicationViewItems,
            filterQuery: y.A.applicationFilterQuery,
            fetched: y.A.hasFetchedApplications,
        })),
        {
            sortKey: u,
            sortDirection: d,
            activeRowKey: p,
            isNavigatingByKeyboard: f,
        } = (0, c.cf)([I.A], () => ({
            sortKey: I.A.sortKey,
            sortDirection: I.A.sortDirection,
            activeRowKey: I.A.activeRowKey,
            isNavigatingByKeyboard: I.A.isNavigatingByKeyboard,
        }));
    return (0, i.jsx)(
        V,
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
P(V, "defaultProps", {
    stickyHeader: !1,
});
