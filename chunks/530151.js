n.d(t, { Z: () => et }), n(415506), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(692547),
    d = n(28664),
    p = n(780384),
    f = n(755721),
    h = n(481060),
    g = n(570140),
    m = n(239091),
    b = n(51025),
    _ = n(785547),
    O = n(730749),
    E = n(112724),
    v = n(812206),
    y = n(44315),
    I = n(600164),
    S = n(167533),
    C = n(925329),
    T = n(707409),
    N = n(210887),
    j = n(283595),
    P = n(417363),
    x = n(941128),
    A = n(451478),
    Z = n(424218),
    w = n(780570),
    L = n(353042),
    R = n(86826),
    D = n(981631),
    k = n(388032),
    M = n(248241);
function U(e, t, n) {
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
let G = (e) => {
        let { className: t, children: n, onContextMenu: i, item: l } = e;
        return (0, r.jsx)("div", {
            className: t,
            onContextMenu: (e) => i(e, l),
            children: n,
        });
    },
    B = [u.Z.unsafe_rawColors.BLUE_345.css, u.Z.colors.INTERACTIVE_NORMAL.css],
    H = (e) => {
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
function V(e, t) {
    switch (t) {
        case D.f07.POST_INSTALL_SCRIPTS:
        case D.f07.PLANNING:
        case D.f07.FINALIZING:
        case D.f07.ALLOCATING_DISK:
            return "".concat(e);
        default:
            return (0, Z.BU)(e, { useKibibytes: !0 });
    }
}
let F = {
    [D.vxO.INSTALLING]: {
        [T.J6.NONE]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n,
            }),
        [T.J6.SECONDS]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t["1z3c6e"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [T.J6.MINUTES]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [T.J6.HOURS]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t["3VG9s7"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
    [D.vxO.UPDATING]: {
        [T.J6.NONE]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.JsqXXF, {
                percent: e,
                progress: t,
                total: n,
            }),
        [T.J6.SECONDS]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t["3BvVeX"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [T.J6.MINUTES]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.rwULn5, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [T.J6.HOURS]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.adcitL, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
    [D.vxO.REPAIRING]: {
        [T.J6.NONE]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n,
            }),
        [T.J6.SECONDS]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t["1z3c6e"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [T.J6.MINUTES]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [T.J6.HOURS]: (e, t, n, r) =>
            k.intl.formatToPlainString(k.t["3VG9s7"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
};
function z(e, t, n, r, i) {
    let l = F[t],
        a = null != l ? Object.keys(l) : [],
        { unit: o, time: s } = (0, T.CI)(null != e ? e / 60 : null, a);
    if (null != l && null != o) {
        let e = l[o];
        return null != e ? e(n, r, i, s) : null;
    }
    return null;
}
function W(e) {
    let { type: t, stage: n, percent: r, progress: i, total: l, secondsRemaining: a } = e,
        o = V(l, n),
        s = V(i, n);
    switch (n) {
        case D.f07.QUEUED:
            if (0 === i) return k.intl.string(k.t.RpfBqa);
            return k.intl.formatToPlainString(k.t.uNjCXV, {
                percent: r,
                progress: s,
                total: o,
            });
        case D.f07.PLANNING:
            return k.intl.formatToPlainString(k.t.sfuCUV, { percent: r });
        case D.f07.ALLOCATING_DISK:
            return k.intl.formatToPlainString(k.t.XigoJy, { percent: r });
        case D.f07.PATCHING:
            return z(a, t, r, s, o);
        case D.f07.FINALIZING:
            return k.intl.formatToPlainString(k.t["6PHDUF"], { percent: r });
        case D.f07.PAUSING:
            return k.intl.formatToPlainString(k.t.vjxhWl, {
                percent: r,
                progress: s,
                total: o,
            });
        case D.f07.VERIFYING:
            return k.intl.formatToPlainString(k.t.bbilvr, {
                percent: r,
                progress: s,
                total: o,
            });
        case D.f07.POST_INSTALL_SCRIPTS:
            return k.intl.formatToPlainString(k.t.c5vRUl, {
                percent: r,
                progress: s,
                total: o,
            });
        case D.f07.REPAIRING:
            if (t === D.vxO.REPAIRING) return z(a, t, r, s, o);
            return k.intl.formatToPlainString(k.t.OCzETU, {
                percent: r,
                progress: s,
                total: o,
            });
    }
    throw Error("Invalid Dispatch stage");
}
class q extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: l } = e;
        return (0, r.jsxs)(I.Z, {
            direction: I.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.Exd, {
                    percent: t,
                    size: h.Exd.Sizes.SMALL,
                    foregroundColor: (0, y.Lq)(n),
                    foregroundGradientColor: null != i ? [(0, y.Lq)(i[0]), (0, y.Lq)(i[1])] : void 0,
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
        return (0, r.jsxs)(I.Z, {
            direction: I.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.yGy, {
                    percents: t,
                    size: h.yGy.Sizes.SMALL,
                    foregroundColors: B,
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
            message: k.intl.format(k.t.z1oxGB, { remove: () => b.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, p.ap)(e.theme) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
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
                let n = V(i, l),
                    a = V(r, l),
                    o = Math.floor((t = w.xI(r, i)));
                e =
                    l === D.f07.PAUSING
                        ? k.intl.formatToPlainString(k.t.vjxhWl, {
                              percent: o,
                              progress: a,
                              total: n,
                          })
                        : k.intl.formatToPlainString(k.t.voT3Bg, {
                              percent: o,
                              progress: a,
                              total: n,
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = k.intl.string(k.t["qS+iKS"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, p.ap)(r) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
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
        let i = w.xI(n, r),
            l = Math.floor(i),
            a =
                0 === n && 1 === r
                    ? k.intl.string(k.t["+pfsFR"])
                    : k.intl.formatToPlainString(k.t["+feX8f"], {
                          percent: l,
                          progress: (0, Z.BU)(n),
                          total: (0, Z.BU)(r),
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, p.ap)(t) ? D.Ilk.PRIMARY_300 : D.Ilk.PRIMARY_500,
            percent: i,
        });
    }
    renderProgressPatching() {
        return (0, r.jsx)(L.Z, {
            getHistoricalTotalBytes: P.Z.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: r, type: i } = e;
        if (null == t || null == n || null == r) return null;
        let l = w.xI(n, t),
            a = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: W({
                type: i,
                stage: r,
                percent: a,
                progress: n,
                total: t,
            }),
            foregroundColor: D.Ilk.BLUE_345,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case D.f07.PATCHING:
            case D.f07.REPAIRING:
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
            (e.state.type === D.vxO.UPDATING || e.state.type === D.vxO.REPAIRING || e.state.type === D.vxO.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
    constructor(...e) {
        super(...e),
            U(this, "renderProgressPatchingBody", (e, t) => {
                let {
                    item: { state: n },
                } = this.props;
                if (null == n) return null;
                let { stage: r, progress: i, total: l, type: a, readerProgress: o } = n;
                if (null == i || null == l || null == r) return null;
                let s = w.xI(i, l),
                    c = w.xI(null != o ? o : 0, l),
                    u = (e[e.length - 1] / t) * 1000,
                    d = l - i,
                    p = W({
                        type: a,
                        stage: r,
                        percent: Math.floor(s),
                        progress: i,
                        total: l,
                        secondsRemaining: 0 !== u ? Math.max(1, d / u) : null,
                    });
                return this.renderStackedProgress({
                    percents: [s, c],
                    message: p,
                });
            });
    }
}
let Y = () =>
        (0, r.jsx)(H, {
            icon: h.o1U,
            tooltip: k.intl.string(k.t.YGm6SU),
            onClick: () => b.v4(),
        }),
    K = () =>
        (0, r.jsx)(H, {
            icon: h.fpf,
            tooltip: k.intl.string(k.t.TVAd5O),
            onClick: () => b.wO(),
        }),
    Q = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(H, {
            icon: h.wj7,
            tooltip: k.intl.string(k.t["Eqb+LC"]),
            onClick: () => b.A1(t.applicationId, t.branchId),
        });
    },
    X = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(H, {
            icon: h.Dio,
            tooltip: k.intl.string(k.t["0lFmCw"]),
            onClick: () => b.al(t.applicationId, t.branchId),
        });
    },
    J = [
        {
            key: "name",
            cellClassName: M.nameCell,
            render: (e) =>
                (0, r.jsxs)(I.Z, {
                    align: I.Z.Align.CENTER,
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
                (0, r.jsx)(q, {
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
                                  ? (0, r.jsx)(_.Z, {
                                        libraryApplication: e.libraryApplication,
                                        size: f.zx.Sizes.SMALL,
                                        className: M.gameActionButton,
                                        source: D.Sbl.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== D.vxO.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, r.jsx)(Q, { item: e })
                                    : null != t && t.paused
                                      ? (0, r.jsx)(Y, {})
                                      : (0, r.jsx)(K, { item: e })),
                            (i = (0, r.jsx)(X, { item: e })))
                          : (i = (0, r.jsx)(X, { item: e })),
                    (0, r.jsxs)(I.Z, {
                        justify: I.Z.Justify.END,
                        children: [n, i],
                    })
                );
            },
        },
    ];
class $ extends i.PureComponent {
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
                g.Z.wait(() => {
                    b.wi(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    render() {
        let { applications: e, paused: t, isFocused: i, theme: l, analyticsContext: o } = this.props;
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: M.gameUpdates,
                  children: [
                      (0, r.jsxs)("div", {
                          className: M.headerRow,
                          children: [
                              (0, r.jsx)(R.Z, {
                                  className: a()(M.headerCell, M.networkProgress),
                                  title: k.intl.string(k.t.ytoXKi),
                                  getHistoricalTotalBytes: P.Z.getHistoricalTotalBytesDownloaded,
                                  color: D.Ilk.GREEN_360,
                                  animate: i,
                              }),
                              (0, r.jsx)(R.Z, {
                                  className: a()(M.headerCell, M.diskProgress),
                                  title: k.intl.string(k.t.SjohhI),
                                  getHistoricalTotalBytes: P.Z.getHistoricalTotalBytesWritten,
                                  color: D.Ilk.BLUE_345,
                                  animate: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)(S.Z, {
                          hasHeader: !1,
                          columns: J,
                          data: e,
                          className: M.table,
                          rowClassName: M.row,
                          rowComponent: G,
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
                                                              U(e, t, n[t]);
                                                          });
                                                  }
                                                  return e;
                                              })({}, n)),
                                              (l = l =
                                                  {
                                                      applicationId: t.applicationId,
                                                      branchId: t.branchId,
                                                      analyticsContext: o,
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
            U(this, "isUnmounted", !1),
            U(this, "isTallerThanHalfViewport", !1),
            U(
                this,
                "throttledUpdateHeight",
                s().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000),
            );
    }
}
function ee(e, t, n, r) {
    return e.reduce((e, i, l) => {
        let { applicationId: a, branchId: o } = i,
            s = n.getApplication(a),
            c = r.getState(a, o);
        return (
            null != s &&
                e.push({
                    key: "".concat(a, ":").concat(o),
                    applicationId: a,
                    branchId: o,
                    state: c,
                    application: s,
                    libraryApplication: j.Z.getLibraryApplication(a, o),
                    finished: t,
                    index: l,
                }),
            e
        );
    }, []);
}
let et = (0, E.Z)(
    c.ZP.connectStores([v.Z, P.Z, x.Z, N.Z, A.Z], () => ({
        applications: [...ee(x.Z.activeItems, !1, v.Z, P.Z), ...ee(x.Z.finishedItems, !0, v.Z, P.Z)],
        paused: x.Z.paused,
        isFocused: A.Z.isFocused(),
        theme: N.Z.theme,
    }))((0, O.Z)($)),
);
