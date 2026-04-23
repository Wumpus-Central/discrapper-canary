n.d(t, { A: () => y, v: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(311907),
    d = n(827734),
    c = n(73939),
    u = n(990078),
    h = n(590251),
    A = n(32880),
    _ = n(587895),
    m = n(290987),
    g = n(976860),
    p = n(194871),
    f = n(966846),
    E = n(674378),
    x = n(505806),
    I = n(652215),
    C = n(985018),
    b = n(440714);
let N = {
    [I.WTw.INSTALLING]: {
        [m.pJ.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sE+"], { name: e }),
        [m.pJ.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPI"], { name: e, timeRemaining: t }),
        [m.pJ.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzr, { name: e, timeRemaining: t }),
        [m.pJ.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [I.WTw.UPDATING]: {
        [m.pJ.NONE]: (e, t) => C.intl.formatToPlainString(C.t["6F9QzC"], { name: e }),
        [m.pJ.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["2OVgVq"], { name: e, timeRemaining: t }),
        [m.pJ.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.mgQg1L, { name: e, timeRemaining: t }),
        [m.pJ.HOURS]: (e, t) => C.intl.formatToPlainString(C.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [I.WTw.REPAIRING]: {
        [m.pJ.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sE+"], { name: e }),
        [m.pJ.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPI"], { name: e, timeRemaining: t }),
        [m.pJ.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzr, { name: e, timeRemaining: t }),
        [m.pJ.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class S extends l.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: l, progress: s, total: a, type: r } = n;
        if (null == s || null == a || null == l) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            d = 0 !== o ? Math.max(1, (a - s) / o) : null,
            c = N[r],
            u = null != c ? Object.keys(c) : [],
            { unit: h, time: A } = (0, m.$l)(null != d ? d / 60 : null, u);
        if (null != c && null != h) {
            let e = c[h];
            return null != e ? e(i.name, A) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === I.WTw.UPDATING || e.type === I.WTw.REPAIRING || e.type === I.WTw.INSTALLING) {
            if (t) return C.intl.string(C.t["5oxtFS"]);
            else if (e.stage === I.OQC.PATCHING || e.stage === I.OQC.REPAIRING)
                return (0, i.jsx)(x.A, {
                    getHistoricalTotalBytes: p.A.getHistoricalTotalBytesWritten,
                    updateInterval: 5e3,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : C.intl.string(C.t.cw57ar);
    }
}
class v extends l.PureComponent {
    static defaultProps = { strokeSize: h.a.StrokeSizes.MEDIUM };
    state = { animationScale: new r.A.Value(0) };
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        r.A.spring(this.state.animationScale, { toValue: 1, duration: 200 }).start(e);
    }
    componentWillLeave(e) {
        r.A.spring(this.state.animationScale, { toValue: 0, duration: 200 }).start(e);
    }
    handleOnClick = (e) => {
        let { onClick: t } = this.props;
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.pX)(I.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? C.intl.string(C.t.cw57ar)
            : (0, i.jsx)(S, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(r.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, b.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(u.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.a, {
                        percent: e,
                        colorOverride: t ? d.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(A.s, { size: "md", color: "currentColor", className: b.k }),
                    }),
                }),
            }),
        });
    }
}
function T(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: l } = n,
            s = t.getState(i, l);
        return null != s && e.push(s), e;
    }, []);
}
let y = o.Ay.connectStores([f.A, p.A, _.A], () => {
    let e = f.A.activeItems,
        t = T(e, p.A),
        { total: n, progress: i } = E.zY(t);
    return {
        percent: E.uA(i, n),
        isPaused: f.A.paused,
        firstApplication: e.length > 0 ? _.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(c.F, {
              component: l.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(v, { ...n }) : null,
          })
        : (0, i.jsx)(v, { ...n });
});
