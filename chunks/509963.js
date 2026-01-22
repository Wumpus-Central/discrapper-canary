n.d(t, {
    A: () => T,
    v: () => N,
}),
    n(896048),
    n(321073);
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    c = n(311907),
    u = n(827734),
    d = n(73939),
    f = n(990078),
    p = n(397927),
    h = n(587895),
    b = n(290987),
    g = n(976860),
    m = n(194871),
    A = n(966846),
    y = n(674378),
    O = n(505806),
    j = n(652215),
    v = n(985018),
    x = n(391523);
function E(e, t, n) {
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
function _(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let C = {
    [j.WTw.INSTALLING]: {
        [b.pJ.NONE]: (e, t) => v.intl.formatToPlainString(v.t["p+2sE+"], { name: e }),
        [b.pJ.SECONDS]: (e, t) =>
            v.intl.formatToPlainString(v.t["/0NgPI"], {
                name: e,
                timeRemaining: t,
            }),
        [b.pJ.MINUTES]: (e, t) =>
            v.intl.formatToPlainString(v.t.ZIwMzr, {
                name: e,
                timeRemaining: t,
            }),
        [b.pJ.HOURS]: (e, t) =>
            v.intl.formatToPlainString(v.t["3IQDUi"], {
                name: e,
                timeRemaining: t,
            }),
    },
    [j.WTw.UPDATING]: {
        [b.pJ.NONE]: (e, t) => v.intl.formatToPlainString(v.t["6F9QzC"], { name: e }),
        [b.pJ.SECONDS]: (e, t) =>
            v.intl.formatToPlainString(v.t["2OVgVq"], {
                name: e,
                timeRemaining: t,
            }),
        [b.pJ.MINUTES]: (e, t) =>
            v.intl.formatToPlainString(v.t.mgQg1L, {
                name: e,
                timeRemaining: t,
            }),
        [b.pJ.HOURS]: (e, t) =>
            v.intl.formatToPlainString(v.t.aTdq44, {
                name: e,
                timeRemaining: t,
            }),
    },
    [j.WTw.REPAIRING]: {
        [b.pJ.NONE]: (e, t) => v.intl.formatToPlainString(v.t["p+2sE+"], { name: e }),
        [b.pJ.SECONDS]: (e, t) =>
            v.intl.formatToPlainString(v.t["/0NgPI"], {
                name: e,
                timeRemaining: t,
            }),
        [b.pJ.MINUTES]: (e, t) =>
            v.intl.formatToPlainString(v.t.ZIwMzr, {
                name: e,
                timeRemaining: t,
            }),
        [b.pJ.HOURS]: (e, t) =>
            v.intl.formatToPlainString(v.t["3IQDUi"], {
                name: e,
                timeRemaining: t,
            }),
    },
};
class S extends i.PureComponent {
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === j.WTw.UPDATING || e.type === j.WTw.REPAIRING || e.type === j.WTw.INSTALLING) {
            if (t) return v.intl.string(v.t["5oxtFS"]);
            else if (e.stage === j.OQC.PATCHING || e.stage === j.OQC.REPAIRING)
                return (0, l.jsx)(O.A, {
                    getHistoricalTotalBytes: m.A.getHistoricalTotalBytesWritten,
                    updateInterval: 5000,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : v.intl.string(v.t.cw57ar);
    }
    constructor(...e) {
        super(...e),
            E(this, "renderProgressBody", (e, t) => {
                let { state: n, application: r } = this.props,
                    { stage: l, progress: i, total: a, type: s } = n;
                if (null == i || null == a || null == l) return null;
                let o = (e[e.length - 1] / t) * 1000,
                    c = 0 !== o ? Math.max(1, (a - i) / o) : null,
                    u = C[s],
                    d = null != u ? Object.keys(u) : [],
                    { unit: f, time: p } = (0, b.$l)(null != c ? c / 60 : null, d);
                if (null != u && null != f) {
                    let e = u[f];
                    return null != e ? e(r.name, p) : null;
                }
                return null;
            });
    }
}
class I extends (r = i.PureComponent) {
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        o.A.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200,
        }).start(e);
    }
    componentWillLeave(e) {
        o.A.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200,
        }).start(e);
    }
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? v.intl.string(v.t.cw57ar)
            : (0, l.jsx)(S, {
                  application: e,
                  state: t,
                  isPaused: n,
              });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, l.jsx)(o.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: s()(n, x.L),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(f.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, l.jsx)("div", {
                    children: (0, l.jsx)(p.a3E, {
                        percent: e,
                        colorOverride: t ? u.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, l.jsx)(p.s3U, {
                            size: "md",
                            color: "currentColor",
                            className: x.k,
                        }),
                    }),
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "state", { animationScale: new o.A.Value(0) }),
            E(this, "handleOnClick", (e) => {
                let { onClick: t } = this.props;
                e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.pX)(j.BVt.APPLICATION_LIBRARY);
            });
    }
}
function N(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: r, branchId: l } = n,
            i = t.getState(r, l);
        return null != i && e.push(i), e;
    }, []);
}
E(I, "defaultProps", { strokeSize: p.a3E.StrokeSizes.MEDIUM });
let T = c.Ay.connectStores([A.A, m.A, h.A], () => {
    let e = A.A.activeItems,
        t = N(e, m.A),
        { total: n, progress: r } = y.zY(t);
    return {
        percent: y.uA(r, n),
        isPaused: A.A.paused,
        firstApplication: e.length > 0 ? h.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0 } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["determineOwnVisibility"]);
    return t
        ? (0, l.jsx)(d.F, {
              component: i.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(I, _({}, n)) : null,
          })
        : (0, l.jsx)(I, _({}, n));
});
