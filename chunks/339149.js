n.d(t, {
    E: function () {
        return y;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    c = n(442837),
    u = n(692547),
    d = n(215569),
    h = n(481060),
    p = n(812206),
    f = n(707409),
    m = n(703656),
    g = n(417363),
    v = n(941128),
    C = n(780570),
    x = n(353042),
    I = n(981631),
    _ = n(388032),
    Z = n(282115);
function b(e, t, n) {
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
let S = {
    [I.vxO.INSTALLING]: {
        [f.J6.NONE]: (e, t) => _.intl.formatToPlainString(_.t['p+2sEx'], { name: e }),
        [f.J6.SECONDS]: (e, t) =>
            _.intl.formatToPlainString(_.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [f.J6.MINUTES]: (e, t) =>
            _.intl.formatToPlainString(_.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [f.J6.HOURS]: (e, t) =>
            _.intl.formatToPlainString(_.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    },
    [I.vxO.UPDATING]: {
        [f.J6.NONE]: (e, t) => _.intl.formatToPlainString(_.t['6F9QzM'], { name: e }),
        [f.J6.SECONDS]: (e, t) =>
            _.intl.formatToPlainString(_.t['2OVgVl'], {
                name: e,
                timeRemaining: t
            }),
        [f.J6.MINUTES]: (e, t) =>
            _.intl.formatToPlainString(_.t.mgQg1N, {
                name: e,
                timeRemaining: t
            }),
        [f.J6.HOURS]: (e, t) =>
            _.intl.formatToPlainString(_.t['aTdq4+'], {
                name: e,
                timeRemaining: t
            })
    },
    [I.vxO.REPAIRING]: {
        [f.J6.NONE]: (e, t) => _.intl.formatToPlainString(_.t['p+2sEx'], { name: e }),
        [f.J6.SECONDS]: (e, t) =>
            _.intl.formatToPlainString(_.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [f.J6.MINUTES]: (e, t) =>
            _.intl.formatToPlainString(_.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [f.J6.HOURS]: (e, t) =>
            _.intl.formatToPlainString(_.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    }
};
class N extends r.PureComponent {
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === I.vxO.UPDATING || e.type === I.vxO.REPAIRING || e.type === I.vxO.INSTALLING) {
            if (t) return _.intl.string(_.t['5oxtFR']);
            if (e.stage === I.f07.PATCHING || e.stage === I.f07.REPAIRING)
                return (0, l.jsx)(x.Z, {
                    getHistoricalTotalBytes: g.Z.getHistoricalTotalBytesWritten,
                    updateInterval: 5000,
                    children: this.renderProgressBody
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : _.intl.string(_.t.cw57am);
    }
    constructor(...e) {
        super(...e),
            b(this, 'renderProgressBody', (e, t) => {
                let { state: n, application: i } = this.props,
                    { stage: l, progress: r, total: a, type: o } = n;
                if (null == r || null == a || null == l) return null;
                let s = (e[e.length - 1] / t) * 1000,
                    c = 0 !== s ? Math.max(1, (a - r) / s) : null,
                    u = S[o],
                    d = null != u ? Object.keys(u) : [],
                    { unit: h, time: p } = (0, f.CI)(null != c ? c / 60 : null, d);
                if (null != u && null != h) {
                    let e = u[h];
                    return null != e ? e(i.name, p) : null;
                }
                return null;
            });
    }
}
class E extends (i = r.PureComponent) {
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        s.Z.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200
        }).start(e);
    }
    componentWillLeave(e) {
        s.Z.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200
        }).start(e);
    }
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? _.intl.string(_.t.cw57am)
            : (0, l.jsx)(N, {
                  application: e,
                  state: t,
                  isPaused: n
              });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, l.jsx)(s.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: o()(n, Z.progressContainer),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(h.Tooltip, {
                text: this.getTooltipText(),
                position: 'right',
                'aria-label': !1,
                children: (n) =>
                    (0, l.jsx)('div', {
                        ...n,
                        children: (0, l.jsx)(h.ProgressCircle, {
                            percent: e,
                            colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
                            children: (0, l.jsx)(h.DownloadIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: Z.downloadIcon
                            })
                        })
                    })
            })
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', { animationScale: new s.Z.Value(0) }),
            b(this, 'handleOnClick', (e) => {
                let { onClick: t } = this.props;
                e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.uL)(I.Z5c.APPLICATION_LIBRARY);
            });
    }
}
b(E, 'defaultProps', { strokeSize: h.ProgressCircle.StrokeSizes.MEDIUM });
function y(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: l } = n,
            r = t.getState(i, l);
        return null != r && e.push(r), e;
    }, []);
}
t.Z = c.ZP.connectStores([v.Z, g.Z, p.Z], () => {
    let e = v.Z.activeItems,
        t = y(e, g.Z),
        { total: n, progress: i } = C.lK(t);
    return {
        percent: C.xI(i, n),
        isPaused: v.Z.paused,
        firstApplication: e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, l.jsx)(d.W, {
              component: r.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(E, { ...n }) : null
          })
        : (0, l.jsx)(E, { ...n });
});
