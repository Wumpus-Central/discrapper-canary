n.d(t, { Z: () => $ }), n(411104), n(47120), n(724458), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(51025),
    _ = n(785547),
    f = n(730749),
    E = n(112724),
    I = n(812206),
    C = n(44315),
    N = n(600164),
    v = n(167533),
    T = n(925329),
    S = n(707409),
    A = n(210887),
    b = n(283595),
    Z = n(417363),
    x = n(941128),
    L = n(451478),
    y = n(424218),
    P = n(780570),
    O = n(353042),
    R = n(86826),
    j = n(981631),
    D = n(388032),
    w = n(2827);
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
        let { className: t, children: n, onContextMenu: l, item: r } = e;
        return (0, i.jsx)('div', {
            className: t,
            onContextMenu: (e) => l(e, r),
            children: n
        });
    },
    U = [d.Z.unsafe_rawColors.BLUE_345.css, d.Z.colors.INTERACTIVE_NORMAL.css],
    G = (e) => {
        let { tooltip: t, onClick: n, icon: l } = e;
        return (0, i.jsx)(h.ua7, {
            text: t,
            children: (e) => {
                let { onMouseEnter: r, onMouseLeave: a } = e;
                return (0, i.jsx)(h.zxk, {
                    'aria-label': t,
                    className: w.actionButton,
                    innerClassName: w.actionButtonContents,
                    color: h.zxk.Colors.PRIMARY,
                    size: h.zxk.Sizes.ICON,
                    onClick: n,
                    onMouseEnter: r,
                    onMouseLeave: a,
                    children: (0, i.jsx)(l, { className: w.actionIcon })
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
            return (0, y.BU)(e, { useKibibytes: !0 });
    }
}
let V = {
    [j.vxO.INSTALLING]: {
        [S.J6.NONE]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [S.J6.SECONDS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [S.J6.MINUTES]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [S.J6.HOURS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            })
    },
    [j.vxO.UPDATING]: {
        [S.J6.NONE]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.JsqXXF, {
                percent: e,
                progress: t,
                total: n
            }),
        [S.J6.SECONDS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['3BvVeX'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [S.J6.MINUTES]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.rwULn5, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [S.J6.HOURS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.adcitL, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            })
    },
    [j.vxO.REPAIRING]: {
        [S.J6.NONE]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.JfJt9f, {
                percent: e,
                progress: t,
                total: n
            }),
        [S.J6.SECONDS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['1z3c6e'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [S.J6.MINUTES]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t.PCX509, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            }),
        [S.J6.HOURS]: (e, t, n, i) =>
            D.intl.formatToPlainString(D.t['3VG9s7'], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: i
            })
    }
};
function H(e, t, n, i, l) {
    let r = V[t],
        a = null != r ? Object.keys(r) : [],
        { unit: s, time: o } = (0, S.CI)(null != e ? e / 60 : null, a);
    if (null != r && null != s) {
        let e = r[s];
        return null != e ? e(n, i, l, o) : null;
    }
    return null;
}
function F(e) {
    let { type: t, stage: n, percent: i, progress: l, total: r, secondsRemaining: a } = e,
        s = B(r, n),
        o = B(l, n);
    switch (n) {
        case j.f07.QUEUED:
            if (0 === l) return D.intl.string(D.t.RpfBqa);
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
            return H(a, t, i, o, s);
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
            if (t === j.vxO.REPAIRING) return H(a, t, i, o, s);
            return D.intl.formatToPlainString(D.t.OCzETU, {
                percent: i,
                progress: o,
                total: s
            });
    }
    throw Error('Invalid Dispatch stage');
}
class z extends l.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: l, message: r } = e;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.Exd, {
                    percent: t,
                    size: h.Exd.Sizes.SMALL,
                    foregroundColor: (0, C.Lq)(n),
                    foregroundGradientColor: null != l ? [(0, C.Lq)(l[0]), (0, C.Lq)(l[1])] : void 0,
                    animate: this.isFocused
                }),
                (0, i.jsx)('div', {
                    className: w.progressCellText,
                    children: null != r ? r : ''
                })
            ]
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, i.jsxs)(N.Z, {
            direction: N.Z.Direction.VERTICAL,
            children: [
                (0, i.jsx)(h.yGy, {
                    percents: t,
                    size: h.yGy.Sizes.SMALL,
                    foregroundColors: U,
                    animate: this.isFocused
                }),
                (0, i.jsx)('div', {
                    className: w.progressCellText,
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
            let { progress: i, total: l, stage: r } = n;
            if (null != i && null != l) {
                let n = B(l, r),
                    a = B(i, r),
                    s = Math.floor((t = P.xI(i, l)));
                e =
                    r === j.f07.PAUSING
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
        let l = P.xI(n, i),
            r = Math.floor(l),
            a =
                0 === n && 1 === i
                    ? D.intl.string(D.t['+pfsFR'])
                    : D.intl.formatToPlainString(D.t['+feX8f'], {
                          percent: r,
                          progress: (0, y.BU)(n),
                          total: (0, y.BU)(i)
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, u.ap)(t) ? j.Ilk.PRIMARY_300 : j.Ilk.PRIMARY_500,
            percent: l
        });
    }
    renderProgressPatching() {
        return (0, i.jsx)(O.Z, {
            getHistoricalTotalBytes: Z.Z.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: i, type: l } = e;
        if (null == t || null == n || null == i) return null;
        let r = P.xI(n, t),
            a = Math.floor(r);
        return this.renderBody({
            percent: r,
            message: F({
                type: l,
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
        return e.finished ? this.renderFinished() : e.index > 0 ? this.renderQueued() : null != e.state && (e.state.type === j.vxO.UPDATING || e.state.type === j.vxO.REPAIRING || e.state.type === j.vxO.INSTALLING) ? (null != t && t.paused ? this.renderPaused() : this.renderProgress()) : null;
    }
    constructor(...e) {
        super(...e),
            k(this, 'renderProgressPatchingBody', (e, t) => {
                let {
                    item: { state: n }
                } = this.props;
                if (null == n) return null;
                let { stage: i, progress: l, total: r, type: a, readerProgress: s } = n;
                if (null == l || null == r || null == i) return null;
                let o = P.xI(l, r),
                    c = P.xI(null != s ? s : 0, r),
                    d = (e[e.length - 1] / t) * 1000,
                    u = r - l,
                    h = F({
                        type: a,
                        stage: i,
                        percent: Math.floor(o),
                        progress: l,
                        total: r,
                        secondsRemaining: 0 !== d ? Math.max(1, u / d) : null
                    });
                return this.renderStackedProgress({
                    percents: [o, c],
                    message: h
                });
            });
    }
}
let W = () =>
        (0, i.jsx)(G, {
            icon: h.o1U,
            tooltip: D.intl.string(D.t.YGm6SU),
            onClick: () => g.v4()
        }),
    Y = () =>
        (0, i.jsx)(G, {
            icon: h.fpf,
            tooltip: D.intl.string(D.t.TVAd5O),
            onClick: () => g.wO()
        }),
    K = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(G, {
            icon: h.wj7,
            tooltip: D.intl.string(D.t['Eqb+LC']),
            onClick: () => g.A1(t.applicationId, t.branchId)
        });
    },
    q = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(G, {
            icon: h.Dio,
            tooltip: D.intl.string(D.t['0lFmCw']),
            onClick: () => g.al(t.applicationId, t.branchId)
        });
    },
    X = [
        {
            key: 'name',
            cellClassName: w.nameCell,
            render: (e) =>
                (0, i.jsxs)(N.Z, {
                    align: N.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(T.Z, {
                            game: e.application,
                            className: w.__invalid_gameIcon,
                            size: T.Z.Sizes.SMALL
                        }),
                        (0, i.jsx)('div', {
                            className: w.nameCellText,
                            children: e.application.name
                        })
                    ]
                })
        },
        {
            key: 'progress',
            cellClassName: w.progressCell,
            headerCellClassName: w.progressCellHeader,
            bodyCellClassName: w.progressCellBody,
            render: (e, t) =>
                (0, i.jsx)(z, {
                    item: e,
                    cellProps: t
                })
        },
        {
            key: 'actions',
            cellClassName: w.actionsCell,
            render(e, t) {
                let n, l;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, i.jsx)(_.Z, {
                                        libraryApplication: e.libraryApplication,
                                        size: h.zxk.Sizes.SMALL,
                                        className: w.gameActionButton,
                                        source: j.Sbl.APPLICATION_LIBRARY_UPDATES
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== j.vxO.UP_TO_DATE && ((n = e.index > 0 ? (0, i.jsx)(K, { item: e }) : null != t && t.paused ? (0, i.jsx)(W, {}) : (0, i.jsx)(Y, { item: e })), (l = (0, i.jsx)(q, { item: e })))
                          : (l = (0, i.jsx)(q, { item: e })),
                    (0, i.jsxs)(N.Z, {
                        justify: N.Z.Justify.END,
                        children: [n, l]
                    })
                );
            }
        }
    ];
class Q extends l.PureComponent {
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
        let { applications: e, paused: t, isFocused: l, theme: r, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, i.jsxs)('div', {
                  className: w.gameUpdates,
                  children: [
                      (0, i.jsxs)('div', {
                          className: w.headerRow,
                          children: [
                              (0, i.jsx)(R.Z, {
                                  className: a()(w.headerCell, w.networkProgress),
                                  title: D.intl.string(D.t.ytoXKi),
                                  getHistoricalTotalBytes: Z.Z.getHistoricalTotalBytesDownloaded,
                                  color: j.Ilk.GREEN_360,
                                  animate: l
                              }),
                              (0, i.jsx)(R.Z, {
                                  className: a()(w.headerCell, w.diskProgress),
                                  title: D.intl.string(D.t.SjohhI),
                                  getHistoricalTotalBytes: Z.Z.getHistoricalTotalBytesWritten,
                                  color: j.Ilk.BLUE_345,
                                  animate: l
                              })
                          ]
                      }),
                      (0, i.jsx)(v.Z, {
                          hasHeader: !1,
                          columns: X,
                          data: e,
                          className: w.table,
                          rowClassName: w.row,
                          rowComponent: M,
                          cellProps: {
                              paused: t,
                              isFocused: l,
                              theme: r
                          },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  p.jW(e, async () => {
                                      let { default: e } = await n.e('98335').then(n.bind(n, 485292));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              applicationId: t.applicationId,
                                              branchId: t.branchId,
                                              analyticsContext: s
                                          });
                                  });
                              }
                          },
                          bodyCellClassName: w.cell
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
                o().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000)
            );
    }
}
function J(e, t, n, i) {
    return e.reduce((e, l, r) => {
        let { applicationId: a, branchId: s } = l,
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
                    libraryApplication: b.Z.getLibraryApplication(a, s),
                    finished: t,
                    index: r
                }),
            e
        );
    }, []);
}
let $ = (0, E.Z)(
    c.ZP.connectStores([I.Z, Z.Z, x.Z, A.Z, L.Z], () => ({
        applications: [...J(x.Z.activeItems, !1, I.Z, Z.Z), ...J(x.Z.finishedItems, !0, I.Z, Z.Z)],
        paused: x.Z.paused,
        isFocused: L.Z.isFocused(),
        theme: A.Z.theme
    }))((0, f.Z)(Q))
);
