n.d(t, {
    E: () => N,
    Z: () => Z,
}),
    n(388685),
    n(539854);
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(748780),
    c = n(442837),
    u = n(692547),
    d = n(215569),
    p = n(28664),
    h = n(481060),
    f = n(812206),
    g = n(707409),
    m = n(703656),
    b = n(417363),
    _ = n(941128),
    y = n(780570),
    O = n(353042),
    v = n(981631),
    j = n(388032),
    x = n(820093);
function C(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
let S = {
    [v.vxO.INSTALLING]: {
        [g.J6.NONE]: (e, t) => j.intl.formatToPlainString(j.t["p+2sE+"], { name: e }),
        [g.J6.SECONDS]: (e, t) =>
            j.intl.formatToPlainString(j.t["/0NgPI"], {
                name: e,
                timeRemaining: t,
            }),
        [g.J6.MINUTES]: (e, t) =>
            j.intl.formatToPlainString(j.t.ZIwMzr, {
                name: e,
                timeRemaining: t,
            }),
        [g.J6.HOURS]: (e, t) =>
            j.intl.formatToPlainString(j.t["3IQDUi"], {
                name: e,
                timeRemaining: t,
            }),
    },
    [v.vxO.UPDATING]: {
        [g.J6.NONE]: (e, t) => j.intl.formatToPlainString(j.t["6F9QzC"], { name: e }),
        [g.J6.SECONDS]: (e, t) =>
            j.intl.formatToPlainString(j.t["2OVgVq"], {
                name: e,
                timeRemaining: t,
            }),
        [g.J6.MINUTES]: (e, t) =>
            j.intl.formatToPlainString(j.t.mgQg1L, {
                name: e,
                timeRemaining: t,
            }),
        [g.J6.HOURS]: (e, t) =>
            j.intl.formatToPlainString(j.t.aTdq44, {
                name: e,
                timeRemaining: t,
            }),
    },
    [v.vxO.REPAIRING]: {
        [g.J6.NONE]: (e, t) => j.intl.formatToPlainString(j.t["p+2sE+"], { name: e }),
        [g.J6.SECONDS]: (e, t) =>
            j.intl.formatToPlainString(j.t["/0NgPI"], {
                name: e,
                timeRemaining: t,
            }),
        [g.J6.MINUTES]: (e, t) =>
            j.intl.formatToPlainString(j.t.ZIwMzr, {
                name: e,
                timeRemaining: t,
            }),
        [g.J6.HOURS]: (e, t) =>
            j.intl.formatToPlainString(j.t["3IQDUi"], {
                name: e,
                timeRemaining: t,
            }),
    },
};
class I extends l.PureComponent {
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === v.vxO.UPDATING || e.type === v.vxO.REPAIRING || e.type === v.vxO.INSTALLING) {
            if (t) return j.intl.string(j.t["5oxtFS"]);
            else if (e.stage === v.f07.PATCHING || e.stage === v.f07.REPAIRING)
                return (0, i.jsx)(O.Z, {
                    getHistoricalTotalBytes: b.Z.getHistoricalTotalBytesWritten,
                    updateInterval: 5000,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : j.intl.string(j.t.cw57ar);
    }
    constructor(...e) {
        super(...e),
            C(this, "renderProgressBody", (e, t) => {
                let { state: n, application: r } = this.props,
                    { stage: i, progress: l, total: o, type: a } = n;
                if (null == l || null == o || null == i) return null;
                let s = (e[e.length - 1] / t) * 1000,
                    c = 0 !== s ? Math.max(1, (o - l) / s) : null,
                    u = S[a],
                    d = null != u ? Object.keys(u) : [],
                    { unit: p, time: h } = (0, g.CI)(null != c ? c / 60 : null, d);
                if (null != u && null != p) {
                    let e = u[p];
                    return null != e ? e(r.name, h) : null;
                }
                return null;
            });
    }
}
class P extends (r = l.PureComponent) {
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        s.Z.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200,
        }).start(e);
    }
    componentWillLeave(e) {
        s.Z.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200,
        }).start(e);
    }
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? j.intl.string(j.t.cw57ar)
            : (0, i.jsx)(I, {
                  application: e,
                  state: t,
                  isPaused: n,
              });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(s.Z.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, x.progressContainer),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(p.u, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(h._3P, {
                        percent: e,
                        colorOverride: t ? u.Z.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(h._8t, {
                            size: "md",
                            color: "currentColor",
                            className: x.downloadIcon,
                        }),
                    }),
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            C(this, "state", { animationScale: new s.Z.Value(0) }),
            C(this, "handleOnClick", (e) => {
                let { onClick: t } = this.props;
                e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.uL)(v.Z5c.APPLICATION_LIBRARY);
            });
    }
}
function N(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: r, branchId: i } = n,
            l = t.getState(r, i);
        return null != l && e.push(l), e;
    }, []);
}
C(P, "defaultProps", { strokeSize: h._3P.StrokeSizes.MEDIUM });
let Z = c.ZP.connectStores([_.Z, b.Z, f.Z], () => {
    let e = _.Z.activeItems,
        t = N(e, b.Z),
        { total: n, progress: r } = y.lK(t);
    return {
        percent: y.xI(r, n),
        isPaused: _.Z.paused,
        firstApplication: e.length > 0 ? f.Z.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["determineOwnVisibility"]);
    return t
        ? (0, i.jsx)(d.W, {
              component: l.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(P, E({}, n)) : null,
          })
        : (0, i.jsx)(P, E({}, n));
});
