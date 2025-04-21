n.d(t, {
    E: () => P,
    Z: () => w
}),
    n(388685),
    n(539854);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(748780),
    c = n(442837),
    u = n(692547),
    d = n(215569),
    h = n(481060),
    p = n(812206),
    f = n(707409),
    g = n(703656),
    m = n(417363),
    b = n(941128),
    y = n(780570),
    _ = n(353042),
    O = n(981631),
    v = n(388032),
    C = n(496614);
function j(e, t, n) {
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
function x(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
let S = {
    [O.vxO.INSTALLING]: {
        [f.J6.NONE]: (e, t) => v.intl.formatToPlainString(v.t['p+2sEx'], { name: e }),
        [f.J6.SECONDS]: (e, t) =>
            v.intl.formatToPlainString(v.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [f.J6.MINUTES]: (e, t) =>
            v.intl.formatToPlainString(v.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [f.J6.HOURS]: (e, t) =>
            v.intl.formatToPlainString(v.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    },
    [O.vxO.UPDATING]: {
        [f.J6.NONE]: (e, t) => v.intl.formatToPlainString(v.t['6F9QzM'], { name: e }),
        [f.J6.SECONDS]: (e, t) =>
            v.intl.formatToPlainString(v.t['2OVgVl'], {
                name: e,
                timeRemaining: t
            }),
        [f.J6.MINUTES]: (e, t) =>
            v.intl.formatToPlainString(v.t.mgQg1N, {
                name: e,
                timeRemaining: t
            }),
        [f.J6.HOURS]: (e, t) =>
            v.intl.formatToPlainString(v.t['aTdq4+'], {
                name: e,
                timeRemaining: t
            })
    },
    [O.vxO.REPAIRING]: {
        [f.J6.NONE]: (e, t) => v.intl.formatToPlainString(v.t['p+2sEx'], { name: e }),
        [f.J6.SECONDS]: (e, t) =>
            v.intl.formatToPlainString(v.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [f.J6.MINUTES]: (e, t) =>
            v.intl.formatToPlainString(v.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [f.J6.HOURS]: (e, t) =>
            v.intl.formatToPlainString(v.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    }
};
class E extends l.PureComponent {
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === O.vxO.UPDATING || e.type === O.vxO.REPAIRING || e.type === O.vxO.INSTALLING) {
            if (t) return v.intl.string(v.t['5oxtFR']);
            else if (e.stage === O.f07.PATCHING || e.stage === O.f07.REPAIRING)
                return (0, i.jsx)(_.Z, {
                    getHistoricalTotalBytes: m.Z.getHistoricalTotalBytesWritten,
                    updateInterval: 5000,
                    children: this.renderProgressBody
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : v.intl.string(v.t.cw57am);
    }
    constructor(...e) {
        super(...e),
            j(this, 'renderProgressBody', (e, t) => {
                let { state: n, application: r } = this.props,
                    { stage: i, progress: l, total: o, type: s } = n;
                if (null == l || null == o || null == i) return null;
                let a = (e[e.length - 1] / t) * 1000,
                    c = 0 !== a ? Math.max(1, (o - l) / a) : null,
                    u = S[s],
                    d = null != u ? Object.keys(u) : [],
                    { unit: h, time: p } = (0, f.CI)(null != c ? c / 60 : null, d);
                if (null != u && null != h) {
                    let e = u[h];
                    return null != e ? e(r.name, p) : null;
                }
                return null;
            });
    }
}
class I extends (r = l.PureComponent) {
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        a.Z.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200
        }).start(e);
    }
    componentWillLeave(e) {
        a.Z.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200
        }).start(e);
    }
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? v.intl.string(v.t.cw57am)
            : (0, i.jsx)(E, {
                  application: e,
                  state: t,
                  isPaused: n
              });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(a.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: s()(n, C.progressContainer),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(h.ua7, {
                text: this.getTooltipText(),
                position: 'right',
                'aria-label': !1,
                children: (n) => {
                    var r, l;
                    return (0, i.jsx)(
                        'div',
                        ((r = x({}, n)),
                        (l = l =
                            {
                                children: (0, i.jsx)(h._3P, {
                                    percent: e,
                                    colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
                                    children: (0, i.jsx)(h._8t, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: C.downloadIcon
                                    })
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r)
                    );
                }
            })
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', { animationScale: new a.Z.Value(0) }),
            j(this, 'handleOnClick', (e) => {
                let { onClick: t } = this.props;
                e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.uL)(O.Z5c.APPLICATION_LIBRARY);
            });
    }
}
function P(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: r, branchId: i } = n,
            l = t.getState(r, i);
        return null != l && e.push(l), e;
    }, []);
}
j(I, 'defaultProps', { strokeSize: h._3P.StrokeSizes.MEDIUM });
let w = c.ZP.connectStores([b.Z, m.Z, p.Z], () => {
    let e = b.Z.activeItems,
        t = P(e, m.Z),
        { total: n, progress: r } = y.lK(t);
    return {
        percent: y.xI(r, n),
        isPaused: b.Z.paused,
        firstApplication: e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null
    };
})((e) => {
    var { determineOwnVisibility: t = !0 } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['determineOwnVisibility']);
    return t
        ? (0, i.jsx)(d.W, {
              component: l.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(I, x({}, n)) : null
          })
        : (0, i.jsx)(I, x({}, n));
});
