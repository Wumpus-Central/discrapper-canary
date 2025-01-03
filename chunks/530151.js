n(411104), n(47120), n(724458), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(51025),
    f = n(785547),
    _ = n(730749),
    E = n(112724),
    I = n(812206),
    C = n(44315),
    N = n(600164),
    v = n(167533),
    S = n(925329),
    T = n(707409),
    b = n(210887),
    A = n(283595),
    Z = n(417363),
    x = n(941128),
    L = n(451478),
    P = n(424218),
    O = n(780570),
    y = n(353042),
    R = n(86826),
    j = n(981631),
    D = n(388032),
    M = n(96852);
function w(e, t, n) {
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
let k = (e) => {
        let { className: t, children: n, onContextMenu: r, item: l } = e;
        return (0, i.jsx)('div', {
            className: t,
            onContextMenu: (e) => r(e, l),
            children: n
        });
    },
    U = [d.Z.unsafe_rawColors.BLUE_345.css, d.Z.colors.INTERACTIVE_NORMAL.css],
    G = (e) => {
        let { tooltip: t, onClick: n, icon: r } = e;
        return (0, i.jsx)(h.Tooltip, {
            text: t,
            children: (e) => {
                let { onMouseEnter: l, onMouseLeave: a } = e;
                return (0, i.jsx)(h.Button, {
                    'aria-label': t,
                    className: M.actionButton,
                    innerClassName: M.actionButtonContents,
                    color: h.Button.Colors.PRIMARY,
                    size: h.Button.Sizes.ICON,
                    onClick: n,
                    onMouseEnter: l,
                    onMouseLeave: a,
                    children: (0, i.jsx)(r, { className: M.actionIcon })
                });
            }
        });
    };
function B(e, t) {
    switch (t) {
        case j.f07.POST_INSTALL_SCRIPTS:
        case j.f07.PLANNING:
        case j.f07.FINALIZING:
        case j.f07.ALLOCATING_DISK:
            return ''.concat(e);
        default:
            return (0, P.BU)(e, { useKibibytes: !0 });
    }
}
let H = {
    [j.vxO.INSTALLING]: {
        [T.J6.NONE]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [T.J6.SECONDS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [T.J6.MINUTES]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [T.J6.HOURS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            })
    },
    [j.vxO.UPDATING]: {
        [T.J6.NONE]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.JsqXXF, {
                percent: e,
                progress: t,
                total: n
            }),
        [T.J6.SECONDS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['3BvVeX'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [T.J6.MINUTES]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.rwULn5, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [T.J6.HOURS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.adcitL, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            })
    },
    [j.vxO.REPAIRING]: {
        [T.J6.NONE]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [T.J6.SECONDS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [T.J6.MINUTES]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [T.J6.HOURS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            })
    }
};
function V(e, t, n, i, r) {
    let l = H[t],
        a = null != l ? Object.keys(l) : [],
        { unit: s, time: o } = (0, T.CI)(null != e ? e / 60 : null, a);
    if (null != l && null != s) {
        let e = l[s];
        return null != e ? e(n, i, r, o) : null;
    }
    return null;
}
function F(e) {
    let { type: t, stage: n, percent: i, progress: r, total: l, secondsRemaining: a } = e,
        s = B(l, n),
        o = B(r, n);
    switch (n) {
        case j.f07.QUEUED:
            if (0 === r) return D.intl.string(D.t.RpfBqa);
            return D.intl.formatToPlainString(D.t.uNjCXV, {
                percent: i,
                progress: o,
                total: s
            });
        case j.f07.PLANNING:
            return D.intl.formatToPlainString(D.t.sfuCUV, { percent: i });
        case j.f07.ALLOCATING_DISK:
            return D.intl.formatToPlainString(D.t.XigoJy, { percent: i });
        case j.f07.PATCHING:
            return V(a, t, i, o, s);
        case j.f07.FINALIZING:
            return D.intl.formatToPlainString(D.t['6PHDUF'], { percent: i });
        case j.f07.PAUSING:
            return D.intl.formatToPlainString(D.t.vjxhWl, {
                percent: i,
                progress: o,
                total: s
            });
        case j.f07.VERIFYING:
            return D.intl.formatToPlainString(D.t.bbilvr, {
                percent: i,
                progress: o,
                total: s
            });
        case j.f07.POST_INSTALL_SCRIPTS:
            return D.intl.formatToPlainString(D.t.c5vRUl, {
                percent: i,
                progress: o,
                total: s
            });
        case j.f07.REPAIRING:
            if (t === j.vxO.REPAIRING) return V(a, t, i, o, s);
            return D.intl.formatToPlainString(D.t.OCzETU, {
                percent: i,
                progress: o,
                total: s
            });
    }
    throw Error('Invalid Dispatch stage');
}
let z = 'name',
    W = 'progress',
    Y = 'actions';
class K extends r.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: r, message: l } = e;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.Progress, {
                    percent: t,
                    size: h.Progress.Sizes.SMALL,
                    foregroundColor: (0, C.Lq)(n),
                    foregroundGradientColor: null != r ? [(0, C.Lq)(r[0]), (0, C.Lq)(r[1])] : void 0,
                    animate: this.isFocused
                }),
                (0, i.jsx)('div', {
                    className: M.progressCellText,
                    children: null != l ? l : ''
                })
            ]
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.StackedProgress, {
                    percents: t,
                    size: h.StackedProgress.Sizes.SMALL,
                    foregroundColors: U,
                    animate: this.isFocused
                }),
                (0, i.jsx)('div', {
                    className: M.progressCellText,
                    children: null != n ? n : ''
                })
            ]
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: D.intl.format(D.t.z1oxGB, { remove: () => g.wi(e.applicationId, e.branchId) }),
            foregroundColor: (0, u.ap)(e.theme) ? j.Ilk.PRIMARY_300 : j.Ilk.PRIMARY_500,
            percent: 100
        });
    }
    renderQueued() {
        let e, t;
        let {
            item: { state: n, theme: i }
        } = this.props;
        if (null != n) {
            let { progress: i, total: r, stage: l } = n;
            if (null != i && null != r) {
                let n = B(r, l),
                    a = B(i, l),
                    s = Math.floor((t = O.xI(i, r)));
                e =
                    l === j.f07.PAUSING
                        ? D.intl.formatToPlainString(D.t.vjxhWl, {
                              percent: s,
                              progress: a,
                              total: n
                          })
                        : D.intl.formatToPlainString(D.t.voT3Bg, {
                              percent: s,
                              progress: a,
                              total: n
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = D.intl.string(D.t['qS+iKS']))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, u.ap)(i) ? j.Ilk.PRIMARY_300 : j.Ilk.PRIMARY_500,
                message: e
            })
        );
    }
    renderPaused() {
        let {
            item: { state: e, theme: t }
        } = this.props;
        if (null == e) return null;
        let { progress: n, total: i } = e;
        if (null == n || null == i) return null;
        let r = O.xI(n, i),
            l = Math.floor(r),
            a =
                0 === n && 1 === i
                    ? D.intl.string(D.t['+pfsFR'])
                    : D.intl.formatToPlainString(D.t['+feX8f'], {
                          percent: l,
                          progress: (0, P.BU)(n),
                          total: (0, P.BU)(i)
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, u.ap)(t) ? j.Ilk.PRIMARY_300 : j.Ilk.PRIMARY_500,
            percent: r
        });
    }
    renderProgressPatching() {
        return (0, i.jsx)(y.Z, {
            getHistoricalTotalBytes: Z.Z.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: i, type: r } = e;
        if (null == t || null == n || null == i) return null;
        let l = O.xI(n, t),
            a = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: F({
                type: r,
                stage: i,
                percent: a,
                progress: n,
                total: t
            }),
            foregroundColor: j.Ilk.BLUE_345
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case j.f07.PATCHING:
            case j.f07.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: e, cellProps: t } = this.props;
        if (e.finished) return this.renderFinished();
        if (e.index > 0) return this.renderQueued();
        if (null != e.state && (e.state.type === j.vxO.UPDATING || e.state.type === j.vxO.REPAIRING || e.state.type === j.vxO.INSTALLING)) return null != t && t.paused ? this.renderPaused() : this.renderProgress();
        return null;
    }
    constructor(...e) {
        super(...e),
            w(this, 'renderProgressPatchingBody', (e, t) => {
                let {
                    item: { state: n }
                } = this.props;
                if (null == n) return null;
                let { stage: i, progress: r, total: l, type: a, readerProgress: s } = n;
                if (null == r || null == l || null == i) return null;
                let o = O.xI(r, l),
                    c = O.xI(null != s ? s : 0, l),
                    d = (e[e.length - 1] / t) * 1000,
                    u = l - r,
                    h = F({
                        type: a,
                        stage: i,
                        percent: Math.floor(o),
                        progress: r,
                        total: l,
                        secondsRemaining: 0 !== d ? Math.max(1, u / d) : null
                    });
                return this.renderStackedProgress({
                    percents: [o, c],
                    message: h
                });
            });
    }
}
let q = () =>
        (0, i.jsx)(G, {
            icon: h.PlayIcon,
            tooltip: D.intl.string(D.t.YGm6SU),
            onClick: () => g.v4()
        }),
    X = () =>
        (0, i.jsx)(G, {
            icon: h.PauseIcon,
            tooltip: D.intl.string(D.t.TVAd5O),
            onClick: () => g.wO()
        }),
    Q = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(G, {
            icon: h.ArrowSmallUpIcon,
            tooltip: D.intl.string(D.t['Eqb+LC']),
            onClick: () => g.A1(t.applicationId, t.branchId)
        });
    },
    J = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(G, {
            icon: h.XSmallIcon,
            tooltip: D.intl.string(D.t['0lFmCw']),
            onClick: () => g.al(t.applicationId, t.branchId)
        });
    },
    $ = [
        {
            key: z,
            cellClassName: M.nameCell,
            render: (e) =>
                (0, i.jsxs)(N.Z, {
                    align: N.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(S.Z, {
                            game: e.application,
                            className: M.__invalid_gameIcon,
                            size: S.Z.Sizes.SMALL
                        }),
                        (0, i.jsx)('div', {
                            className: M.nameCellText,
                            children: e.application.name
                        })
                    ]
                })
        },
        {
            key: W,
            cellClassName: M.progressCell,
            headerCellClassName: M.progressCellHeader,
            bodyCellClassName: M.progressCellBody,
            render: (e, t) =>
                (0, i.jsx)(K, {
                    item: e,
                    cellProps: t
                })
        },
        {
            key: Y,
            cellClassName: M.actionsCell,
            render(e, t) {
                let n, r;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, i.jsx)(f.Z, {
                                        libraryApplication: e.libraryApplication,
                                        size: h.Button.Sizes.SMALL,
                                        className: M.gameActionButton,
                                        source: j.Sbl.APPLICATION_LIBRARY_UPDATES
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== j.vxO.UP_TO_DATE && ((n = e.index > 0 ? (0, i.jsx)(Q, { item: e }) : null != t && t.paused ? (0, i.jsx)(q, {}) : (0, i.jsx)(X, { item: e })), (r = (0, i.jsx)(J, { item: e })))
                          : (r = (0, i.jsx)(J, { item: e })),
                    (0, i.jsxs)(N.Z, {
                        justify: N.Z.Justify.END,
                        children: [n, r]
                    })
                );
            }
        }
    ];
class ee extends r.PureComponent {
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
                m.Z.wait(() => {
                    g.wi(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener('resize', this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    render() {
        let { applications: e, paused: t, isFocused: r, theme: l, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, i.jsxs)('div', {
                  className: M.gameUpdates,
                  children: [
                      (0, i.jsxs)('div', {
                          className: M.headerRow,
                          children: [
                              (0, i.jsx)(R.Z, {
                                  className: a()(M.headerCell, M.networkProgress),
                                  title: D.intl.string(D.t.ytoXKi),
                                  getHistoricalTotalBytes: Z.Z.getHistoricalTotalBytesDownloaded,
                                  color: j.Ilk.GREEN_360,
                                  animate: r
                              }),
                              (0, i.jsx)(R.Z, {
                                  className: a()(M.headerCell, M.diskProgress),
                                  title: D.intl.string(D.t.SjohhI),
                                  getHistoricalTotalBytes: Z.Z.getHistoricalTotalBytesWritten,
                                  color: j.Ilk.BLUE_345,
                                  animate: r
                              })
                          ]
                      }),
                      (0, i.jsx)(v.Z, {
                          hasHeader: !1,
                          columns: $,
                          data: e,
                          className: M.table,
                          rowClassName: M.row,
                          rowComponent: k,
                          cellProps: {
                              paused: t,
                              isFocused: r,
                              theme: l
                          },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  var r, l, a;
                                  return (
                                      (r = e),
                                      (l = t),
                                      (a = s),
                                      void p.jW(r, async () => {
                                          let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  applicationId: l.applicationId,
                                                  branchId: l.branchId,
                                                  analyticsContext: a
                                              });
                                      })
                                  );
                              }
                          },
                          bodyCellClassName: M.cell
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            w(this, 'isUnmounted', !1),
            w(this, 'isTallerThanHalfViewport', !1),
            w(
                this,
                'throttledUpdateHeight',
                o().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000)
            );
    }
}
function et(e, t, n, i) {
    return e.reduce((e, r, l) => {
        let { applicationId: a, branchId: s } = r,
            o = n.getApplication(a),
            c = i.getState(a, s);
        return (
            null != o &&
                e.push({
                    key: ''.concat(a, ':').concat(s),
                    applicationId: a,
                    branchId: s,
                    state: c,
                    application: o,
                    libraryApplication: A.Z.getLibraryApplication(a, s),
                    finished: t,
                    index: l
                }),
            e
        );
    }, []);
}
t.Z = (0, E.Z)(
    c.ZP.connectStores([I.Z, Z.Z, x.Z, b.Z, L.Z], () => {
        let e = et(x.Z.activeItems, !1, I.Z, Z.Z);
        return {
            applications: [...e, ...et(x.Z.finishedItems, !0, I.Z, Z.Z)],
            paused: x.Z.paused,
            isFocused: L.Z.isFocused(),
            theme: b.Z.theme
        };
    })((0, _.Z)(ee))
);
