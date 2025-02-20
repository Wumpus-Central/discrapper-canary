n.d(t, { Z: () => $ }), n(411104), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
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
    N = n(600164),
    v = n(167533),
    y = n(925329),
    I = n(707409),
    C = n(210887),
    S = n(283595),
    T = n(417363),
    P = n(941128),
    j = n(451478),
    A = n(424218),
    Z = n(780570),
    x = n(353042),
    L = n(86826),
    w = n(981631),
    R = n(388032),
    D = n(782946);
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
                let { onMouseEnter: l, onMouseLeave: o } = e;
                return (0, r.jsx)(p.zxk, {
                    'aria-label': t,
                    className: D.actionButton,
                    innerClassName: D.actionButtonContents,
                    color: p.zxk.Colors.PRIMARY,
                    size: p.zxk.Sizes.ICON,
                    onClick: n,
                    onMouseEnter: l,
                    onMouseLeave: o,
                    children: (0, r.jsx)(i, { className: D.actionIcon })
                });
            }
        });
    };
function W(e, t) {
    switch (t) {
        case w.f07.POST_INSTALL_SCRIPTS:
        case w.f07.PLANNING:
        case w.f07.FINALIZING:
        case w.f07.ALLOCATING_DISK:
            return ''.concat(e);
        default:
            return (0, A.BU)(e, { useKibibytes: !0 });
    }
}
let V = {
    [w.vxO.INSTALLING]: {
        [I.J6.NONE]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [I.J6.SECONDS]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [I.J6.MINUTES]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [I.J6.HOURS]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    },
    [w.vxO.UPDATING]: {
        [I.J6.NONE]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.JsqXXF, {
                percent: e,
                progress: t,
                total: n
            }),
        [I.J6.SECONDS]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t['3BvVeX'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [I.J6.MINUTES]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.rwULn5, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [I.J6.HOURS]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.adcitL, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    },
    [w.vxO.REPAIRING]: {
        [I.J6.NONE]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [I.J6.SECONDS]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [I.J6.MINUTES]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            }),
        [I.J6.HOURS]: (e, t, n, r) =>
            R.NW.formatToPlainString(R.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r
            })
    }
};
function B(e, t, n, r, i) {
    let l = V[t],
        o = null != l ? Object.keys(l) : [],
        { unit: a, time: s } = (0, I.CI)(null != e ? e / 60 : null, o);
    if (null != l && null != a) {
        let e = l[a];
        return null != e ? e(n, r, i, s) : null;
    }
    return null;
}
function H(e) {
    let { type: t, stage: n, percent: r, progress: i, total: l, secondsRemaining: o } = e,
        a = W(l, n),
        s = W(i, n);
    switch (n) {
        case w.f07.QUEUED:
            if (0 === i) return R.NW.string(R.t.RpfBqa);
            return R.NW.formatToPlainString(R.t.uNjCXV, {
                percent: r,
                progress: s,
                total: a
            });
        case w.f07.PLANNING:
            return R.NW.formatToPlainString(R.t.sfuCUV, { percent: r });
        case w.f07.ALLOCATING_DISK:
            return R.NW.formatToPlainString(R.t.XigoJy, { percent: r });
        case w.f07.PATCHING:
            return B(o, t, r, s, a);
        case w.f07.FINALIZING:
            return R.NW.formatToPlainString(R.t['6PHDUF'], { percent: r });
        case w.f07.PAUSING:
            return R.NW.formatToPlainString(R.t.vjxhWl, {
                percent: r,
                progress: s,
                total: a
            });
        case w.f07.VERIFYING:
            return R.NW.formatToPlainString(R.t.bbilvr, {
                percent: r,
                progress: s,
                total: a
            });
        case w.f07.POST_INSTALL_SCRIPTS:
            return R.NW.formatToPlainString(R.t.c5vRUl, {
                percent: r,
                progress: s,
                total: a
            });
        case w.f07.REPAIRING:
            if (t === w.vxO.REPAIRING) return B(o, t, r, s, a);
            return R.NW.formatToPlainString(R.t.OCzETU, {
                percent: r,
                progress: s,
                total: a
            });
    }
    throw Error('Invalid Dispatch stage');
}
class F extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: l } = e;
        return (0, r.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
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
        return (0, r.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
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
            message: R.NW.format(R.t.z1oxGB, { remove: () => g.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, d.ap)(e.theme) ? w.Ilk.PRIMARY_300 : w.Ilk.PRIMARY_500,
            percent: 100
        });
    }
    renderQueued() {
        let e, t;
        let {
            item: { state: n, theme: r }
        } = this.props;
        if (null != n) {
            let { progress: r, total: i, stage: l } = n;
            if (null != r && null != i) {
                let n = W(i, l),
                    o = W(r, l),
                    a = Math.floor((t = Z.xI(r, i)));
                e =
                    l === w.f07.PAUSING
                        ? R.NW.formatToPlainString(R.t.vjxhWl, {
                              percent: a,
                              progress: o,
                              total: n
                          })
                        : R.NW.formatToPlainString(R.t.voT3Bg, {
                              percent: a,
                              progress: o,
                              total: n
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = R.NW.string(R.t['qS+iKS']))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, d.ap)(r) ? w.Ilk.PRIMARY_300 : w.Ilk.PRIMARY_500,
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
            o =
                0 === n && 1 === r
                    ? R.NW.string(R.t['+pfsFR'])
                    : R.NW.formatToPlainString(R.t['+feX8f'], {
                          percent: l,
                          progress: (0, A.BU)(n),
                          total: (0, A.BU)(r)
                      });
        return this.renderBody({
            message: o,
            foregroundColor: (0, d.ap)(t) ? w.Ilk.PRIMARY_300 : w.Ilk.PRIMARY_500,
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
            o = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: H({
                type: i,
                stage: r,
                percent: o,
                progress: n,
                total: t
            }),
            foregroundColor: w.Ilk.BLUE_345
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case w.f07.PATCHING:
            case w.f07.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: e, cellProps: t } = this.props;
        return e.finished ? this.renderFinished() : e.index > 0 ? this.renderQueued() : null != e.state && (e.state.type === w.vxO.UPDATING || e.state.type === w.vxO.REPAIRING || e.state.type === w.vxO.INSTALLING) ? (null != t && t.paused ? this.renderPaused() : this.renderProgress()) : null;
    }
    constructor(...e) {
        super(...e),
            k(this, 'renderProgressPatchingBody', (e, t) => {
                let {
                    item: { state: n }
                } = this.props;
                if (null == n) return null;
                let { stage: r, progress: i, total: l, type: o, readerProgress: a } = n;
                if (null == i || null == l || null == r) return null;
                let s = Z.xI(i, l),
                    c = Z.xI(null != a ? a : 0, l),
                    u = (e[e.length - 1] / t) * 1000,
                    d = l - i,
                    p = H({
                        type: o,
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
let z = () =>
        (0, r.jsx)(G, {
            icon: p.o1U,
            tooltip: R.NW.string(R.t.YGm6SU),
            onClick: () => g.v4()
        }),
    Y = () =>
        (0, r.jsx)(G, {
            icon: p.fpf,
            tooltip: R.NW.string(R.t.TVAd5O),
            onClick: () => g.wO()
        }),
    K = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(G, {
            icon: p.wj7,
            tooltip: R.NW.string(R.t['Eqb+LC']),
            onClick: () => g.A1(t.applicationId, t.branchId)
        });
    },
    q = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(G, {
            icon: p.Dio,
            tooltip: R.NW.string(R.t['0lFmCw']),
            onClick: () => g.al(t.applicationId, t.branchId)
        });
    },
    X = [
        {
            key: 'name',
            cellClassName: D.nameCell,
            render: (e) =>
                (0, r.jsxs)(N.Z, {
                    align: N.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(y.Z, {
                            game: e.application,
                            className: D.__invalid_gameIcon,
                            size: y.Z.Sizes.SMALL
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
                (0, r.jsx)(F, {
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
                                        source: w.Sbl.APPLICATION_LIBRARY_UPDATES
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== w.vxO.UP_TO_DATE && ((n = e.index > 0 ? (0, r.jsx)(K, { item: e }) : null != t && t.paused ? (0, r.jsx)(z, {}) : (0, r.jsx)(Y, { item: e })), (i = (0, r.jsx)(q, { item: e })))
                          : (i = (0, r.jsx)(q, { item: e })),
                    (0, r.jsxs)(N.Z, {
                        justify: N.Z.Justify.END,
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
        let { applications: e, paused: t, isFocused: i, theme: l, analyticsContext: a } = this.props;
        return 0 === e.length
            ? null
            : (0, r.jsxs)('div', {
                  className: D.gameUpdates,
                  children: [
                      (0, r.jsxs)('div', {
                          className: D.headerRow,
                          children: [
                              (0, r.jsx)(L.Z, {
                                  className: o()(D.headerCell, D.networkProgress),
                                  title: R.NW.string(R.t.ytoXKi),
                                  getHistoricalTotalBytes: T.Z.getHistoricalTotalBytesDownloaded,
                                  color: w.Ilk.GREEN_360,
                                  animate: i
                              }),
                              (0, r.jsx)(L.Z, {
                                  className: o()(D.headerCell, D.diskProgress),
                                  title: R.NW.string(R.t.SjohhI),
                                  getHistoricalTotalBytes: T.Z.getHistoricalTotalBytesWritten,
                                  color: w.Ilk.BLUE_345,
                                  animate: i
                              })
                          ]
                      }),
                      (0, r.jsx)(v.Z, {
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
                                                      analyticsContext: a
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
        let { applicationId: o, branchId: a } = i,
            s = n.getApplication(o),
            c = r.getState(o, a);
        return (
            null != s &&
                e.push({
                    key: ''.concat(o, ':').concat(a),
                    applicationId: o,
                    branchId: a,
                    state: c,
                    application: s,
                    libraryApplication: S.Z.getLibraryApplication(o, a),
                    finished: t,
                    index: l
                }),
            e
        );
    }, []);
}
let $ = (0, _.Z)(
    c.ZP.connectStores([E.Z, T.Z, P.Z, C.Z, j.Z], () => ({
        applications: [...J(P.Z.activeItems, !1, E.Z, T.Z), ...J(P.Z.finishedItems, !0, E.Z, T.Z)],
        paused: P.Z.paused,
        isFocused: j.Z.isFocused(),
        theme: C.Z.theme
    }))((0, b.Z)(Q))
);
