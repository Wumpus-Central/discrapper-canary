(n.d(t, { Z: () => ee }), n(415506), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(755721),
    h = n(481060),
    f = n(570140),
    g = n(239091),
    m = n(51025),
    b = n(785547),
    _ = n(730749),
    O = n(112724),
    E = n(812206),
    y = n(44315),
    v = n(600164),
    I = n(167533),
    C = n(925329),
    S = n(707409),
    N = n(210887),
    T = n(283595),
    P = n(417363),
    j = n(941128),
    A = n(451478),
    x = n(424218),
    Z = n(780570),
    w = n(353042),
    L = n(86826),
    R = n(981631),
    D = n(388032),
    k = n(292926);
function M(e, t, n) {
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
let U = (e) => {
        let { className: t, children: n, onContextMenu: i, item: l } = e;
        return (0, r.jsx)('div', {
            className: t,
            onContextMenu: (e) => i(e, l),
            children: n
        });
    },
    G = [u.Z.unsafe_rawColors.BLUE_345.css, u.Z.colors.INTERACTIVE_NORMAL.css],
    B = (e) => {
        let { tooltip: t, onClick: n, icon: i } = e;
        return (0, r.jsx)(h.ua7, {
            text: t,
            children: (e) => {
                let { onMouseEnter: l, onMouseLeave: a } = e;
                return (0, r.jsx)(p.zx, {
                    'aria-label': t,
                    className: k.actionButton,
                    innerClassName: k.actionButtonContents,
                    color: p.zx.Colors.PRIMARY,
                    size: p.zx.Sizes.ICON,
                    onClick: n,
                    onMouseEnter: l,
                    onMouseLeave: a,
                    children: (0, r.jsx)(i, { className: k.actionIcon })
                });
            }
        });
    };
function V(e, t) {
    switch (t) {
        case R.f07.POST_INSTALL_SCRIPTS:
        case R.f07.PLANNING:
        case R.f07.FINALIZING:
        case R.f07.ALLOCATING_DISK:
            return ''.concat(e);
        default:
            return (0, x.BU)(e, { useKibibytes: !0 });
    }
}
let H = {
    [R.vxO.INSTALLING]: {
        [S.J6.NONE]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [S.J6.SECONDS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [S.J6.MINUTES]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [S.J6.HOURS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    },
    [R.vxO.UPDATING]: {
        [S.J6.NONE]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.JsqXXF, {
                percent: e,
                progress: t,
                total: n
            }),
        [S.J6.SECONDS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t['3BvVeX'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [S.J6.MINUTES]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.rwULn5, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [S.J6.HOURS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.adcitL, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    },
    [R.vxO.REPAIRING]: {
        [S.J6.NONE]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [S.J6.SECONDS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [S.J6.MINUTES]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [S.J6.HOURS]: (e, t, n, r) =>
            D.intl.formatToPlainString(D.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    }
};
function F(e, t, n, r, i) {
    let l = H[t],
        a = null != l ? Object.keys(l) : [],
        { unit: o, time: s } = (0, S.CI)(null != e ? e / 60 : null, a);
    if (null != l && null != o) {
        let e = l[o];
        return null != e ? e(n, r, i, s) : null;
    }
    return null;
}
function z(e) {
    let { type: t, stage: n, percent: r, progress: i, total: l, secondsRemaining: a } = e,
        o = V(l, n),
        s = V(i, n);
    switch (n) {
        case R.f07.QUEUED:
            if (0 === i) return D.intl.string(D.t.RpfBqa);
            return D.intl.formatToPlainString(D.t.uNjCXV, {
                percent: r,
                progress: s,
                total: o
            });
        case R.f07.PLANNING:
            return D.intl.formatToPlainString(D.t.sfuCUV, { percent: r });
        case R.f07.ALLOCATING_DISK:
            return D.intl.formatToPlainString(D.t.XigoJy, { percent: r });
        case R.f07.PATCHING:
            return F(a, t, r, s, o);
        case R.f07.FINALIZING:
            return D.intl.formatToPlainString(D.t['6PHDUF'], { percent: r });
        case R.f07.PAUSING:
            return D.intl.formatToPlainString(D.t.vjxhWl, {
                percent: r,
                progress: s,
                total: o
            });
        case R.f07.VERIFYING:
            return D.intl.formatToPlainString(D.t.bbilvr, {
                percent: r,
                progress: s,
                total: o
            });
        case R.f07.POST_INSTALL_SCRIPTS:
            return D.intl.formatToPlainString(D.t.c5vRUl, {
                percent: r,
                progress: s,
                total: o
            });
        case R.f07.REPAIRING:
            if (t === R.vxO.REPAIRING) return F(a, t, r, s, o);
            return D.intl.formatToPlainString(D.t.OCzETU, {
                percent: r,
                progress: s,
                total: o
            });
    }
    throw Error('Invalid Dispatch stage');
}
class W extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: l } = e;
        return (0, r.jsxs)(v.Z, {
            direction: v.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.Exd, {
                    percent: t,
                    size: h.Exd.Sizes.SMALL,
                    foregroundColor: (0, y.Lq)(n),
                    foregroundGradientColor: null != i ? [(0, y.Lq)(i[0]), (0, y.Lq)(i[1])] : void 0,
                    animate: this.isFocused
                }),
                (0, r.jsx)('div', {
                    className: k.progressCellText,
                    children: null != l ? l : ''
                })
            ]
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, r.jsxs)(v.Z, {
            direction: v.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.yGy, {
                    percents: t,
                    size: h.yGy.Sizes.SMALL,
                    foregroundColors: G,
                    animate: this.isFocused
                }),
                (0, r.jsx)('div', {
                    className: k.progressCellText,
                    children: null != n ? n : ''
                })
            ]
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: D.intl.format(D.t.z1oxGB, { remove: () => m.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, d.ap)(e.theme) ? R.Ilk.PRIMARY_300 : R.Ilk.PRIMARY_500,
            percent: 100
        });
    }
    renderQueued() {
        let e,
            t,
            {
                item: { state: n, theme: r }
            } = this.props;
        if (null != n) {
            let { progress: r, total: i, stage: l } = n;
            if (null != r && null != i) {
                let n = V(i, l),
                    a = V(r, l),
                    o = Math.floor((t = Z.xI(r, i)));
                e =
                    l === R.f07.PAUSING
                        ? D.intl.formatToPlainString(D.t.vjxhWl, {
                              percent: o,
                              progress: a,
                              total: n
                          })
                        : D.intl.formatToPlainString(D.t.voT3Bg, {
                              percent: o,
                              progress: a,
                              total: n
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = D.intl.string(D.t['qS+iKS']))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, d.ap)(r) ? R.Ilk.PRIMARY_300 : R.Ilk.PRIMARY_500,
                message: e
            })
        );
    }
    renderPaused() {
        let {
            item: { state: e, theme: t }
        } = this.props;
        if (null == e) return null;
        let { progress: n, total: r } = e;
        if (null == n || null == r) return null;
        let i = Z.xI(n, r),
            l = Math.floor(i),
            a =
                0 === n && 1 === r
                    ? D.intl.string(D.t['+pfsFR'])
                    : D.intl.formatToPlainString(D.t['+feX8f'], {
                          percent: l,
                          progress: (0, x.BU)(n),
                          total: (0, x.BU)(r)
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, d.ap)(t) ? R.Ilk.PRIMARY_300 : R.Ilk.PRIMARY_500,
            percent: i
        });
    }
    renderProgressPatching() {
        return (0, r.jsx)(w.Z, {
            getHistoricalTotalBytes: P.Z.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody
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
                total: t
            }),
            foregroundColor: R.Ilk.BLUE_345
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
        if (null != e.state && (e.state.type === R.vxO.UPDATING || e.state.type === R.vxO.REPAIRING || e.state.type === R.vxO.INSTALLING))
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
    constructor(...e) {
        (super(...e),
            M(this, 'renderProgressPatchingBody', (e, t) => {
                let {
                    item: { state: n }
                } = this.props;
                if (null == n) return null;
                let { stage: r, progress: i, total: l, type: a, readerProgress: o } = n;
                if (null == i || null == l || null == r) return null;
                let s = Z.xI(i, l),
                    c = Z.xI(null != o ? o : 0, l),
                    u = (e[e.length - 1] / t) * 1000,
                    d = l - i,
                    p = z({
                        type: a,
                        stage: r,
                        percent: Math.floor(s),
                        progress: i,
                        total: l,
                        secondsRemaining: 0 !== u ? Math.max(1, d / u) : null
                    });
                return this.renderStackedProgress({
                    percents: [s, c],
                    message: p
                });
            }));
    }
}
let Y = () =>
        (0, r.jsx)(B, {
            icon: h.o1U,
            tooltip: D.intl.string(D.t.YGm6SU),
            onClick: () => m.v4()
        }),
    K = () =>
        (0, r.jsx)(B, {
            icon: h.fpf,
            tooltip: D.intl.string(D.t.TVAd5O),
            onClick: () => m.wO()
        }),
    q = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(B, {
            icon: h.wj7,
            tooltip: D.intl.string(D.t['Eqb+LC']),
            onClick: () => m.A1(t.applicationId, t.branchId)
        });
    },
    X = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(B, {
            icon: h.Dio,
            tooltip: D.intl.string(D.t['0lFmCw']),
            onClick: () => m.al(t.applicationId, t.branchId)
        });
    },
    Q = [
        {
            key: 'name',
            cellClassName: k.nameCell,
            render: (e) =>
                (0, r.jsxs)(v.Z, {
                    align: v.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(C.Z, {
                            game: e.application,
                            className: k.__invalid_gameIcon,
                            size: C.Z.Sizes.SMALL
                        }),
                        (0, r.jsx)('div', {
                            className: k.nameCellText,
                            children: e.application.name
                        })
                    ]
                })
        },
        {
            key: 'progress',
            cellClassName: k.progressCell,
            headerCellClassName: k.progressCellHeader,
            bodyCellClassName: k.progressCellBody,
            render: (e, t) =>
                (0, r.jsx)(W, {
                    item: e,
                    cellProps: t
                })
        },
        {
            key: 'actions',
            cellClassName: k.actionsCell,
            render(e, t) {
                let n, i;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, r.jsx)(b.Z, {
                                        libraryApplication: e.libraryApplication,
                                        size: p.zx.Sizes.SMALL,
                                        className: k.gameActionButton,
                                        source: R.Sbl.APPLICATION_LIBRARY_UPDATES
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== R.vxO.UP_TO_DATE && ((n = e.index > 0 ? (0, r.jsx)(q, { item: e }) : null != t && t.paused ? (0, r.jsx)(Y, {}) : (0, r.jsx)(K, { item: e })), (i = (0, r.jsx)(X, { item: e })))
                          : (i = (0, r.jsx)(X, { item: e })),
                    (0, r.jsxs)(v.Z, {
                        justify: v.Z.Justify.END,
                        children: [n, i]
                    })
                );
            }
        }
    ];
class J extends i.PureComponent {
    componentDidMount() {
        window.addEventListener('resize', this.throttledUpdateHeight);
    }
    componentDidUpdate(e) {
        this.props.height !== e.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let { applications: e } = this.props;
        (e.forEach((e) => {
            e.finished &&
                f.Z.wait(() => {
                    m.wi(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener('resize', this.throttledUpdateHeight),
            (this.isUnmounted = !0));
    }
    render() {
        let { applications: e, paused: t, isFocused: i, theme: l, analyticsContext: o } = this.props;
        return 0 === e.length
            ? null
            : (0, r.jsxs)('div', {
                  className: k.gameUpdates,
                  children: [
                      (0, r.jsxs)('div', {
                          className: k.headerRow,
                          children: [
                              (0, r.jsx)(L.Z, {
                                  className: a()(k.headerCell, k.networkProgress),
                                  title: D.intl.string(D.t.ytoXKi),
                                  getHistoricalTotalBytes: P.Z.getHistoricalTotalBytesDownloaded,
                                  color: R.Ilk.GREEN_360,
                                  animate: i
                              }),
                              (0, r.jsx)(L.Z, {
                                  className: a()(k.headerCell, k.diskProgress),
                                  title: D.intl.string(D.t.SjohhI),
                                  getHistoricalTotalBytes: P.Z.getHistoricalTotalBytesWritten,
                                  color: R.Ilk.BLUE_345,
                                  animate: i
                              })
                          ]
                      }),
                      (0, r.jsx)(I.Z, {
                          hasHeader: !1,
                          columns: Q,
                          data: e,
                          className: k.table,
                          rowClassName: k.row,
                          rowComponent: U,
                          cellProps: {
                              paused: t,
                              isFocused: i,
                              theme: l
                          },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  g.jW(e, async () => {
                                      let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
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
                                                              M(e, t, n[t]);
                                                          }));
                                                  }
                                                  return e;
                                              })({}, n)),
                                              (l = l =
                                                  {
                                                      applicationId: t.applicationId,
                                                      branchId: t.branchId,
                                                      analyticsContext: o
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
                                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                                    }),
                                              i)
                                          );
                                      };
                                  });
                              }
                          },
                          bodyCellClassName: k.cell
                      })
                  ]
              });
    }
    constructor(...e) {
        (super(...e),
            M(this, 'isUnmounted', !1),
            M(this, 'isTallerThanHalfViewport', !1),
            M(
                this,
                'throttledUpdateHeight',
                s().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000)
            ));
    }
}
function $(e, t, n, r) {
    return e.reduce((e, i, l) => {
        let { applicationId: a, branchId: o } = i,
            s = n.getApplication(a),
            c = r.getState(a, o);
        return (
            null != s &&
                e.push({
                    key: ''.concat(a, ':').concat(o),
                    applicationId: a,
                    branchId: o,
                    state: c,
                    application: s,
                    libraryApplication: T.Z.getLibraryApplication(a, o),
                    finished: t,
                    index: l
                }),
            e
        );
    }, []);
}
let ee = (0, O.Z)(
    c.ZP.connectStores([E.Z, P.Z, j.Z, N.Z, A.Z], () => ({
        applications: [...$(j.Z.activeItems, !1, E.Z, P.Z), ...$(j.Z.finishedItems, !0, E.Z, P.Z)],
        paused: j.Z.paused,
        isFocused: A.Z.isFocused(),
        theme: N.Z.theme
    }))((0, _.Z)(J))
);
