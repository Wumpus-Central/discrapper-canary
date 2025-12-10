n.d(t, { Z: () => ee }), n(415506), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(28664),
    p = n(780384),
    f = n(755721),
    g = n(481060),
    h = n(570140),
    m = n(239091),
    _ = n(51025),
    b = n(785547),
    E = n(730749),
    O = n(112724),
    v = n(812206),
    y = n(600164),
    I = n(167533),
    C = n(925329),
    S = n(707409),
    T = n(210887),
    N = n(283595),
    j = n(417363),
    P = n(941128),
    x = n(451478),
    A = n(424218),
    Z = n(780570),
    w = n(353042),
    L = n(86826),
    R = n(981631),
    D = n(388032),
    M = n(248241);
function k(e, t, n) {
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
let U = (e) => {
        let { className: t, children: n, onContextMenu: i, item: l } = e;
        return (0, r.jsx)("div", {
            className: t,
            onContextMenu: (e) => i(e, l),
            children: n,
        });
    },
    G = [u.Z.unsafe_rawColors.BLUE_345.css, u.Z.colors.INTERACTIVE_TEXT_DEFAULT.css],
    B = (e) => {
        let { tooltip: t, onClick: n, icon: i } = e;
        return (0, r.jsx)(d.u, {
            text: t,
            children: (0, r.jsx)(f.zx, {
                "aria-label": t,
                className: M.actionButton,
                innerClassName: M.actionButtonContents,
                color: f.zx.Colors.PRIMARY,
                onClick: n,
                size: f.zx.Sizes.ICON,
                children: (0, r.jsx)(i, { className: M.actionIcon }),
            }),
        });
    };
function H(e, t) {
    switch (t) {
        case R.f07.POST_INSTALL_SCRIPTS:
        case R.f07.PLANNING:
        case R.f07.FINALIZING:
        case R.f07.ALLOCATING_DISK:
            return "".concat(e);
        default:
            return (0, A.BU)(e, { useKibibytes: !0 });
    }
}
let V = {
    [R.vxO.INSTALLING]: {
        [S.J6.NONE]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.JfJt9d, {
                percent: e,
                progress: t,
                total: n,
            }),
        [S.J6.SECONDS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t["1z3c6e"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.J6.MINUTES]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.PCX506, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.J6.HOURS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t["3VG9s1"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
    [R.vxO.UPDATING]: {
        [S.J6.NONE]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.JsqXXL, {
                percent: e,
                progress: t,
                total: n,
            }),
        [S.J6.SECONDS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t["3BvVec"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.J6.MINUTES]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t["rwULn+"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.J6.HOURS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.adcitP, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
    [R.vxO.REPAIRING]: {
        [S.J6.NONE]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.JfJt9d, {
                percent: e,
                progress: t,
                total: n,
            }),
        [S.J6.SECONDS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t["1z3c6e"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.J6.MINUTES]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.PCX506, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.J6.HOURS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t["3VG9s1"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
};
function F(e, t, n, r, i) {
    let l = V[t],
        a = null != l ? Object.keys(l) : [],
        { unit: s, time: o } = (0, S.CI)(null != e ? e / 60 : null, a);
    if (null != l && null != s) {
        let e = l[s];
        return null != e ? e(n, r, i, o) : null;
    }
    return null;
}
function z(e) {
    let { type: t, stage: n, percent: r, progress: i, total: l, secondsRemaining: a } = e,
        s = H(l, n),
        o = H(i, n);
    switch (n) {
        case R.f07.QUEUED:
            if (0 === i) return D.intl.string(D.t.RpfBqd);
            return D.intl.formatToPlainString(D.t.uNjCXZ, {
                percent: r,
                progress: o,
                total: s,
            });
        case R.f07.PLANNING:
            return D.intl.formatToPlainString(D.t.sfuCUb, { percent: r });
        case R.f07.ALLOCATING_DISK:
            return D.intl.formatToPlainString(D.t.XigoJ9, { percent: r });
        case R.f07.PATCHING:
            return F(a, t, r, o, s);
        case R.f07.FINALIZING:
            return D.intl.formatToPlainString(D.t["6PHDUN"], { percent: r });
        case R.f07.PAUSING:
            return D.intl.formatToPlainString(D.t.vjxhWo, {
                percent: r,
                progress: o,
                total: s,
            });
        case R.f07.VERIFYING:
            return D.intl.formatToPlainString(D.t.bbilvq, {
                percent: r,
                progress: o,
                total: s,
            });
        case R.f07.POST_INSTALL_SCRIPTS:
            return D.intl.formatToPlainString(D.t.c5vRUo, {
                percent: r,
                progress: o,
                total: s,
            });
        case R.f07.REPAIRING:
            if (t === R.vxO.REPAIRING) return F(a, t, r, o, s);
            return D.intl.formatToPlainString(D.t.OCzETT, {
                percent: r,
                progress: o,
                total: s,
            });
    }
    throw Error("Invalid Dispatch stage");
}
class Y extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: l } = e;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(g.Exd, {
                    percent: t,
                    size: g.Exd.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != i ? [i[0], i[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, r.jsx)("div", {
                    className: M.progressCellText,
                    children: null != l ? l : "",
                }),
            ],
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(g.yGy, {
                    percents: t,
                    size: g.yGy.Sizes.SMALL,
                    foregroundColors: G,
                    animate: this.isFocused,
                }),
                (0, r.jsx)("div", {
                    className: M.progressCellText,
                    children: null != n ? n : "",
                }),
            ],
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: D.intl.format(D.t.z1oxGO, { remove: () => _.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, p.ap)(e.theme)
                ? u.Z.unsafe_rawColors.PRIMARY_300.css
                : u.Z.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let e,
            t,
            {
                item: { state: n, theme: r },
            } = this.props;
        if (null != n) {
            let { progress: r, total: i, stage: l } = n;
            if (null != r && null != i) {
                let n = H(i, l),
                    a = H(r, l),
                    s = Math.floor((t = Z.xI(r, i)));
                e =
                    l === R.f07.PAUSING
                        ? D.intl.formatToPlainString(D.t.vjxhWo, {
                              percent: s,
                              progress: a,
                              total: n,
                          })
                        : D.intl.formatToPlainString(D.t.voT3Bi, {
                              percent: s,
                              progress: a,
                              total: n,
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = D.intl.string(D.t["qS+iKY"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, p.ap)(r)
                    ? u.Z.unsafe_rawColors.PRIMARY_300.css
                    : u.Z.unsafe_rawColors.PRIMARY_500.css,
                message: e,
            })
        );
    }
    renderPaused() {
        let {
            item: { state: e, theme: t },
        } = this.props;
        if (null == e) return null;
        let { progress: n, total: r } = e;
        if (null == n || null == r) return null;
        let i = Z.xI(n, r),
            l = Math.floor(i),
            a =
                0 === n && 1 === r
                    ? D.intl.string(D.t["+pfsFX"])
                    : D.intl.formatToPlainString(D.t["+feX8S"], {
                          percent: l,
                          progress: (0, A.BU)(n),
                          total: (0, A.BU)(r),
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, p.ap)(t) ? u.Z.unsafe_rawColors.PRIMARY_300.css : u.Z.unsafe_rawColors.PRIMARY_500.css,
            percent: i,
        });
    }
    renderProgressPatching() {
        return (0, r.jsx)(w.Z, {
            getHistoricalTotalBytes: j.Z.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: r, type: i } = e;
        if (null == t || null == n || null == r) return null;
        let l = Z.xI(n, t),
            a = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: z({
                type: i,
                stage: r,
                percent: a,
                progress: n,
                total: t,
            }),
            foregroundColor: u.Z.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case R.f07.PATCHING:
            case R.f07.REPAIRING:
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
            (e.state.type === R.vxO.UPDATING || e.state.type === R.vxO.REPAIRING || e.state.type === R.vxO.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
    constructor(...e) {
        super(...e),
            k(this, "renderProgressPatchingBody", (e, t) => {
                let {
                    item: { state: n },
                } = this.props;
                if (null == n) return null;
                let { stage: r, progress: i, total: l, type: a, readerProgress: s } = n;
                if (null == i || null == l || null == r) return null;
                let o = Z.xI(i, l),
                    c = Z.xI(null != s ? s : 0, l),
                    u = (e[e.length - 1] / t) * 1000,
                    d = l - i,
                    p = z({
                        type: a,
                        stage: r,
                        percent: Math.floor(o),
                        progress: i,
                        total: l,
                        secondsRemaining: 0 !== u ? Math.max(1, d / u) : null,
                    });
                return this.renderStackedProgress({
                    percents: [o, c],
                    message: p,
                });
            });
    }
}
let W = () =>
        (0, r.jsx)(B, {
            icon: g.o1U,
            tooltip: D.intl.string(D.t.YGm6SZ),
            onClick: () => _.v4(),
        }),
    q = () =>
        (0, r.jsx)(B, {
            icon: g.fpf,
            tooltip: D.intl.string(D.t.TVAd5J),
            onClick: () => _.wO(),
        }),
    K = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(B, {
            icon: g.wj7,
            tooltip: D.intl.string(D.t["Eqb+LN"]),
            onClick: () => _.A1(t.applicationId, t.branchId),
        });
    },
    Q = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(B, {
            icon: g.Dio,
            tooltip: D.intl.string(D.t["0lFmC9"]),
            onClick: () => _.al(t.applicationId, t.branchId),
        });
    },
    J = [
        {
            key: "name",
            cellClassName: M.nameCell,
            render: (e) =>
                (0, r.jsxs)(y.Z, {
                    align: y.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(C.Z, {
                            game: e.application,
                            className: M.__invalid_gameIcon,
                            size: C.A.SMALL,
                        }),
                        (0, r.jsx)("div", {
                            className: M.nameCellText,
                            children: e.application.name,
                        }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: M.progressCell,
            headerCellClassName: M.progressCellHeader,
            bodyCellClassName: M.progressCellBody,
            render: (e, t) =>
                (0, r.jsx)(Y, {
                    item: e,
                    cellProps: t,
                }),
        },
        {
            key: "actions",
            cellClassName: M.actionsCell,
            render(e, t) {
                let n, i;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, r.jsx)(b.Z, {
                                        libraryApplication: e.libraryApplication,
                                        size: f.zx.Sizes.SMALL,
                                        className: M.gameActionButton,
                                        source: R.Sbl.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== R.vxO.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, r.jsx)(K, { item: e })
                                    : null != t && t.paused
                                      ? (0, r.jsx)(W, {})
                                      : (0, r.jsx)(q, { item: e })),
                            (i = (0, r.jsx)(Q, { item: e })))
                          : (i = (0, r.jsx)(Q, { item: e })),
                    (0, r.jsxs)(y.Z, {
                        justify: y.Z.Justify.END,
                        children: [n, i],
                    })
                );
            },
        },
    ];
class X extends i.PureComponent {
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
                h.Z.wait(() => {
                    _.wi(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    render() {
        let { applications: e, paused: t, isFocused: i, theme: l, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: M.gameUpdates,
                  children: [
                      (0, r.jsxs)("div", {
                          className: M.headerRow,
                          children: [
                              (0, r.jsx)(L.Z, {
                                  className: a()(M.headerCell, M.networkProgress),
                                  title: D.intl.string(D.t.ytoXKr),
                                  getHistoricalTotalBytes: j.Z.getHistoricalTotalBytesDownloaded,
                                  color: u.Z.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                              (0, r.jsx)(L.Z, {
                                  className: a()(M.headerCell, M.diskProgress),
                                  title: D.intl.string(D.t.SjohhI),
                                  getHistoricalTotalBytes: j.Z.getHistoricalTotalBytesWritten,
                                  color: u.Z.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)(I.Z, {
                          hasHeader: !1,
                          columns: J,
                          data: e,
                          className: M.table,
                          rowClassName: M.row,
                          rowComponent: U,
                          cellProps: {
                              paused: t,
                              isFocused: i,
                              theme: l,
                          },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  m.jW(e, async () => {
                                      let { default: e } = await n.e("98335").then(n.bind(n, 485292));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              k(e, t, n[t]);
                                                          });
                                                  }
                                                  return e;
                                              })({}, n)),
                                              (l = l =
                                                  {
                                                      applicationId: t.applicationId,
                                                      branchId: t.branchId,
                                                      analyticsContext: s,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(l)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            i,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(l, e),
                                                        );
                                                    }),
                                              i),
                                          );
                                      };
                                  });
                              },
                          },
                          bodyCellClassName: M.cell,
                      }),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            k(this, "isUnmounted", !1),
            k(this, "isTallerThanHalfViewport", !1),
            k(
                this,
                "throttledUpdateHeight",
                o().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000),
            );
    }
}
function $(e, t, n, r) {
    return e.reduce((e, i, l) => {
        let { applicationId: a, branchId: s } = i,
            o = n.getApplication(a),
            c = r.getState(a, s);
        return (
            null != o &&
                e.push({
                    key: "".concat(a, ":").concat(s),
                    applicationId: a,
                    branchId: s,
                    state: c,
                    application: o,
                    libraryApplication: N.Z.getLibraryApplication(a, s),
                    finished: t,
                    index: l,
                }),
            e
        );
    }, []);
}
let ee = (0, O.Z)(
    c.ZP.connectStores([v.Z, j.Z, P.Z, T.Z, x.Z], () => ({
        applications: [...$(P.Z.activeItems, !1, v.Z, j.Z), ...$(P.Z.finishedItems, !0, v.Z, j.Z)],
        paused: P.Z.paused,
        isFocused: x.Z.isFocused(),
        theme: T.Z.theme,
    }))((0, E.Z)(X)),
);
