n.d(t, {
    E: () => j,
    Z: () => y
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
    d = n(692547),
    u = n(215569),
    h = n(481060),
    p = n(812206),
    m = n(707409),
    g = n(703656),
    f = n(417363),
    _ = n(941128),
    v = n(780570),
    C = n(353042),
    x = n(981631),
    Z = n(388032),
    I = n(541675);
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
    [x.vxO.INSTALLING]: {
        [m.J6.NONE]: (e, t) => Z.intl.formatToPlainString(Z.t['p+2sEx'], { name: e }),
        [m.J6.SECONDS]: (e, t) =>
            Z.intl.formatToPlainString(Z.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [m.J6.MINUTES]: (e, t) =>
            Z.intl.formatToPlainString(Z.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [m.J6.HOURS]: (e, t) =>
            Z.intl.formatToPlainString(Z.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    },
    [x.vxO.UPDATING]: {
        [m.J6.NONE]: (e, t) => Z.intl.formatToPlainString(Z.t['6F9QzM'], { name: e }),
        [m.J6.SECONDS]: (e, t) =>
            Z.intl.formatToPlainString(Z.t['2OVgVl'], {
                name: e,
                timeRemaining: t
            }),
        [m.J6.MINUTES]: (e, t) =>
            Z.intl.formatToPlainString(Z.t.mgQg1N, {
                name: e,
                timeRemaining: t
            }),
        [m.J6.HOURS]: (e, t) =>
            Z.intl.formatToPlainString(Z.t['aTdq4+'], {
                name: e,
                timeRemaining: t
            })
    },
    [x.vxO.REPAIRING]: {
        [m.J6.NONE]: (e, t) => Z.intl.formatToPlainString(Z.t['p+2sEx'], { name: e }),
        [m.J6.SECONDS]: (e, t) =>
            Z.intl.formatToPlainString(Z.t['/0NgPD'], {
                name: e,
                timeRemaining: t
            }),
        [m.J6.MINUTES]: (e, t) =>
            Z.intl.formatToPlainString(Z.t.ZIwMzs, {
                name: e,
                timeRemaining: t
            }),
        [m.J6.HOURS]: (e, t) =>
            Z.intl.formatToPlainString(Z.t['3IQDUl'], {
                name: e,
                timeRemaining: t
            })
    }
};
class N extends r.PureComponent {
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === x.vxO.UPDATING || e.type === x.vxO.REPAIRING || e.type === x.vxO.INSTALLING) {
            if (t) return Z.intl.string(Z.t['5oxtFR']);
            if (e.stage === x.f07.PATCHING || e.stage === x.f07.REPAIRING)
                return (0, l.jsx)(C.Z, {
                    getHistoricalTotalBytes: f.Z.getHistoricalTotalBytesWritten,
                    updateInterval: 5000,
                    children: this.renderProgressBody
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : Z.intl.string(Z.t.cw57am);
    }
    constructor(...e) {
        super(...e),
            b(this, 'renderProgressBody', (e, t) => {
                let { state: n, application: i } = this.props,
                    { stage: l, progress: r, total: a, type: o } = n;
                if (null == r || null == a || null == l) return null;
                let s = (e[e.length - 1] / t) * 1000,
                    c = 0 !== s ? Math.max(1, (a - r) / s) : null,
                    d = S[o],
                    u = null != d ? Object.keys(d) : [],
                    { unit: h, time: p } = (0, m.CI)(null != c ? c / 60 : null, u);
                if (null != d && null != h) {
                    let e = d[h];
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
            ? Z.intl.string(Z.t.cw57am)
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
            className: o()(n, I.progressContainer),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(h.ua7, {
                text: this.getTooltipText(),
                position: 'right',
                'aria-label': !1,
                children: (n) =>
                    (0, l.jsx)('div', {
                        ...n,
                        children: (0, l.jsx)(h._3P, {
                            percent: e,
                            colorOverride: t ? d.Z.unsafe_rawColors.PRIMARY_500.css : null,
                            children: (0, l.jsx)(h._8t, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.downloadIcon
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
                e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.uL)(x.Z5c.APPLICATION_LIBRARY);
            });
    }
}
function j(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: l } = n,
            r = t.getState(i, l);
        return null != r && e.push(r), e;
    }, []);
}
b(E, 'defaultProps', { strokeSize: h._3P.StrokeSizes.MEDIUM });
let y = c.ZP.connectStores([_.Z, f.Z, p.Z], () => {
    let e = _.Z.activeItems,
        t = j(e, f.Z),
        { total: n, progress: i } = v.lK(t);
    return {
        percent: v.xI(i, n),
        isPaused: _.Z.paused,
        firstApplication: e.length > 0 ? p.Z.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, l.jsx)(u.W, {
              component: r.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(E, { ...n }) : null
          })
        : (0, l.jsx)(E, { ...n });
});
