n.d(t, { Z: () => $ }), n(415506), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(692547),
    d = n(780384),
    p = n(481060),
    h = n(570140),
    f = n(239091),
    g = n(51025),
    m = n(785547),
    b = n(730749),
    _ = n(112724),
    E = n(812206),
    O = n(44315),
    y = n(600164),
    I = n(167533),
    v = n(925329),
    C = n(707409),
    S = n(210887),
    N = n(283595),
    T = n(417363),
    P = n(941128),
    j = n(451478),
    A = n(424218),
    Z = n(780570),
    x = n(353042),
    w = n(86826),
    L = n(981631),
    R = n(388032),
    D = n(292926);
function k(e, t, n) {
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
let M = (e) => {
        let { className: t, children: n, onContextMenu: i, item: l } = e;
        return (0, r.jsx)('div', {
            className: t,
            onContextMenu: (e) => i(e, l),
            children: n
        });
    },
    U = [u.Z.unsafe_rawColors.BLUE_345.css, u.Z.colors.INTERACTIVE_NORMAL.css],
    G = (e) => {
        let { tooltip: t, onClick: n, icon: i } = e;
        return (0, r.jsx)(p.ua7, {
            text: t,
            children: (e) => {
                let { onMouseEnter: l, onMouseLeave: a } = e;
                return (0, r.jsx)(p.zxk, {
                    'aria-label': t,
                    className: D.actionButton,
                    innerClassName: D.actionButtonContents,
                    color: p.zxk.Colors.PRIMARY,
                    size: p.zxk.Sizes.ICON,
                    onClick: n,
                    onMouseEnter: l,
                    onMouseLeave: a,
                    children: (0, r.jsx)(i, { className: D.actionIcon })
                });
            }
        });
    };
function V(e, t) {
    switch (t) {
        case L.f07.POST_INSTALL_SCRIPTS:
        case L.f07.PLANNING:
        case L.f07.FINALIZING:
        case L.f07.ALLOCATING_DISK:
            return ''.concat(e);
        default:
            return (0, A.BU)(e, { useKibibytes: !0 });
    }
}
let B = {
    [L.vxO.INSTALLING]: {
        [C.J6.NONE]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [C.J6.SECONDS]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [C.J6.MINUTES]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [C.J6.HOURS]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    },
    [L.vxO.UPDATING]: {
        [C.J6.NONE]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.JsqXXF, {
                percent: e,
                progress: t,
                total: n
            }),
        [C.J6.SECONDS]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t['3BvVeX'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [C.J6.MINUTES]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.rwULn5, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [C.J6.HOURS]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.adcitL, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    },
    [L.vxO.REPAIRING]: {
        [C.J6.NONE]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [C.J6.SECONDS]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [C.J6.MINUTES]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [C.J6.HOURS]: (e, t, n, r) =>
            R.intl.formatToPlainString(R.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    }
};
function H(e, t, n, r, i) {
    let l = B[t],
        a = null != l ? Object.keys(l) : [],
        { unit: o, time: s } = (0, C.CI)(null != e ? e / 60 : null, a);
    if (null != l && null != o) {
        let e = l[o];
        return null != e ? e(n, r, i, s) : null;
    }
    return null;
}
function F(e) {
    let { type: t, stage: n, percent: r, progress: i, total: l, secondsRemaining: a } = e,
        o = V(l, n),
        s = V(i, n);
    switch (n) {
        case L.f07.QUEUED:
            if (0 === i) return R.intl.string(R.t.RpfBqa);
            return R.intl.formatToPlainString(R.t.uNjCXV, {
                percent: r,
                progress: s,
                total: o
            });
        case L.f07.PLANNING:
            return R.intl.formatToPlainString(R.t.sfuCUV, { percent: r });
        case L.f07.ALLOCATING_DISK:
            return R.intl.formatToPlainString(R.t.XigoJy, { percent: r });
        case L.f07.PATCHING:
            return H(a, t, r, s, o);
        case L.f07.FINALIZING:
            return R.intl.formatToPlainString(R.t['6PHDUF'], { percent: r });
        case L.f07.PAUSING:
            return R.intl.formatToPlainString(R.t.vjxhWl, {
                percent: r,
                progress: s,
                total: o
            });
        case L.f07.VERIFYING:
            return R.intl.formatToPlainString(R.t.bbilvr, {
                percent: r,
                progress: s,
                total: o
            });
        case L.f07.POST_INSTALL_SCRIPTS:
            return R.intl.formatToPlainString(R.t.c5vRUl, {
                percent: r,
                progress: s,
                total: o
            });
        case L.f07.REPAIRING:
            if (t === L.vxO.REPAIRING) return H(a, t, r, s, o);
            return R.intl.formatToPlainString(R.t.OCzETU, {
                percent: r,
                progress: s,
                total: o
            });
    }
    throw Error('Invalid Dispatch stage');
}
class z extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: l } = e;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(p.Exd, {
                    percent: t,
                    size: p.Exd.Sizes.SMALL,
                    foregroundColor: (0, O.Lq)(n),
                    foregroundGradientColor: null != i ? [(0, O.Lq)(i[0]), (0, O.Lq)(i[1])] : void 0,
                    animate: this.isFocused
                }),
                (0, r.jsx)('div', {
                    className: D.progressCellText,
                    children: null != l ? l : ''
                })
            ]
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            children: [
                (0, r.jsx)(p.yGy, {
                    percents: t,
                    size: p.yGy.Sizes.SMALL,
                    foregroundColors: U,
                    animate: this.isFocused
                }),
                (0, r.jsx)('div', {
                    className: D.progressCellText,
                    children: null != n ? n : ''
                })
            ]
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: R.intl.format(R.t.z1oxGB, { remove: () => g.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, d.ap)(e.theme) ? L.Ilk.PRIMARY_300 : L.Ilk.PRIMARY_500,
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
                    l === L.f07.PAUSING
                        ? R.intl.formatToPlainString(R.t.vjxhWl, {
                              percent: o,
                              progress: a,
                              total: n
                          })
                        : R.intl.formatToPlainString(R.t.voT3Bg, {
                              percent: o,
                              progress: a,
                              total: n
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = R.intl.string(R.t['qS+iKS']))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, d.ap)(r) ? L.Ilk.PRIMARY_300 : L.Ilk.PRIMARY_500,
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
                    ? R.intl.string(R.t['+pfsFR'])
                    : R.intl.formatToPlainString(R.t['+feX8f'], {
                          percent: l,
                          progress: (0, A.BU)(n),
                          total: (0, A.BU)(r)
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, d.ap)(t) ? L.Ilk.PRIMARY_300 : L.Ilk.PRIMARY_500,
            percent: i
        });
    }
    renderProgressPatching() {
        return (0, r.jsx)(x.Z, {
            getHistoricalTotalBytes: T.Z.getHistoricalTotalBytesWritten,
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
            message: F({
                type: i,
                stage: r,
                percent: a,
                progress: n,
                total: t
            }),
            foregroundColor: L.Ilk.BLUE_345
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case L.f07.PATCHING:
            case L.f07.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: e, cellProps: t } = this.props;
        if (e.finished) return this.renderFinished();
        if (e.index > 0) return this.renderQueued();
        if (null != e.state && (e.state.type === L.vxO.UPDATING || e.state.type === L.vxO.REPAIRING || e.state.type === L.vxO.INSTALLING))
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
    constructor(...e) {
        super(...e),
            k(this, 'renderProgressPatchingBody', (e, t) => {
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
                    p = F({
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
            });
    }
}
let W = () =>
        (0, r.jsx)(G, {
            icon: p.o1U,
            tooltip: R.intl.string(R.t.YGm6SU),
            onClick: () => g.v4()
        }),
    Y = () =>
        (0, r.jsx)(G, {
            icon: p.fpf,
            tooltip: R.intl.string(R.t.TVAd5O),
            onClick: () => g.wO()
        }),
    K = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(G, {
            icon: p.wj7,
            tooltip: R.intl.string(R.t['Eqb+LC']),
            onClick: () => g.A1(t.applicationId, t.branchId)
        });
    },
    q = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(G, {
            icon: p.Dio,
            tooltip: R.intl.string(R.t['0lFmCw']),
            onClick: () => g.al(t.applicationId, t.branchId)
        });
    },
    X = [
        {
            key: 'name',
            cellClassName: D.nameCell,
            render: (e) =>
                (0, r.jsxs)(y.Z, {
                    align: y.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(v.Z, {
                            game: e.application,
                            className: D.__invalid_gameIcon,
                            size: v.Z.Sizes.SMALL
                        }),
                        (0, r.jsx)('div', {
                            className: D.nameCellText,
                            children: e.application.name
                        })
                    ]
                })
        },
        {
            key: 'progress',
            cellClassName: D.progressCell,
            headerCellClassName: D.progressCellHeader,
            bodyCellClassName: D.progressCellBody,
            render: (e, t) =>
                (0, r.jsx)(z, {
                    item: e,
                    cellProps: t
                })
        },
        {
            key: 'actions',
            cellClassName: D.actionsCell,
            render(e, t) {
                let n, i;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, r.jsx)(m.Z, {
                                        libraryApplication: e.libraryApplication,
                                        size: p.zxk.Sizes.SMALL,
                                        className: D.gameActionButton,
                                        source: L.Sbl.APPLICATION_LIBRARY_UPDATES
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== L.vxO.UP_TO_DATE && ((n = e.index > 0 ? (0, r.jsx)(K, { item: e }) : null != t && t.paused ? (0, r.jsx)(W, {}) : (0, r.jsx)(Y, { item: e })), (i = (0, r.jsx)(q, { item: e })))
                          : (i = (0, r.jsx)(q, { item: e })),
                    (0, r.jsxs)(y.Z, {
                        justify: y.Z.Justify.END,
                        children: [n, i]
                    })
                );
            }
        }
    ];
class Q extends i.PureComponent {
    componentDidMount() {
        window.addEventListener('resize', this.throttledUpdateHeight);
    }
    componentDidUpdate(e) {
        this.props.height !== e.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let { applications: e } = this.props;
        e.forEach((e) => {
            e.finished &&
                h.Z.wait(() => {
                    g.wi(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener('resize', this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    render() {
        let { applications: e, paused: t, isFocused: i, theme: l, analyticsContext: o } = this.props;
        return 0 === e.length
            ? null
            : (0, r.jsxs)('div', {
                  className: D.gameUpdates,
                  children: [
                      (0, r.jsxs)('div', {
                          className: D.headerRow,
                          children: [
                              (0, r.jsx)(w.Z, {
                                  className: a()(D.headerCell, D.networkProgress),
                                  title: R.intl.string(R.t.ytoXKi),
                                  getHistoricalTotalBytes: T.Z.getHistoricalTotalBytesDownloaded,
                                  color: L.Ilk.GREEN_360,
                                  animate: i
                              }),
                              (0, r.jsx)(w.Z, {
                                  className: a()(D.headerCell, D.diskProgress),
                                  title: R.intl.string(R.t.SjohhI),
                                  getHistoricalTotalBytes: T.Z.getHistoricalTotalBytesWritten,
                                  color: L.Ilk.BLUE_345,
                                  animate: i
                              })
                          ]
                      }),
                      (0, r.jsx)(I.Z, {
                          hasHeader: !1,
                          columns: X,
                          data: e,
                          className: D.table,
                          rowClassName: D.row,
                          rowComponent: M,
                          cellProps: {
                              paused: t,
                              isFocused: i,
                              theme: l
                          },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  f.jW(e, async () => {
                                      let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
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
                                                              k(e, t, n[t]);
                                                          });
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
                          bodyCellClassName: D.cell
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            k(this, 'isUnmounted', !1),
            k(this, 'isTallerThanHalfViewport', !1),
            k(
                this,
                'throttledUpdateHeight',
                s().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000)
            );
    }
}
function J(e, t, n, r) {
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
                    libraryApplication: N.Z.getLibraryApplication(a, o),
                    finished: t,
                    index: l
                }),
            e
        );
    }, []);
}
let $ = (0, _.Z)(
    c.ZP.connectStores([E.Z, T.Z, P.Z, S.Z, j.Z], () => ({
        applications: [...J(P.Z.activeItems, !1, E.Z, T.Z), ...J(P.Z.finishedItems, !0, E.Z, T.Z)],
        paused: P.Z.paused,
        isFocused: j.Z.isFocused(),
        theme: S.Z.theme
    }))((0, b.Z)(Q))
);
