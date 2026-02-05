n.d(t, { A: () => j, v: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(311907),
    d = n(827734),
    c = n(73939),
    u = n(990078),
    h = n(397927),
    A = n(587895),
    g = n(290987),
    m = n(976860),
    p = n(194871),
    _ = n(966846),
    x = n(674378),
    f = n(505806),
    E = n(652215),
    C = n(985018),
    I = n(391523);
let S = {
    [E.WTw.INSTALLING]: {
        [g.pJ.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sE+"], { name: e }),
        [g.pJ.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPI"], { name: e, timeRemaining: t }),
        [g.pJ.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzr, { name: e, timeRemaining: t }),
        [g.pJ.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [E.WTw.UPDATING]: {
        [g.pJ.NONE]: (e, t) => C.intl.formatToPlainString(C.t["6F9QzC"], { name: e }),
        [g.pJ.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["2OVgVq"], { name: e, timeRemaining: t }),
        [g.pJ.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.mgQg1L, { name: e, timeRemaining: t }),
        [g.pJ.HOURS]: (e, t) => C.intl.formatToPlainString(C.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [E.WTw.REPAIRING]: {
        [g.pJ.NONE]: (e, t) => C.intl.formatToPlainString(C.t["p+2sE+"], { name: e }),
        [g.pJ.SECONDS]: (e, t) => C.intl.formatToPlainString(C.t["/0NgPI"], { name: e, timeRemaining: t }),
        [g.pJ.MINUTES]: (e, t) => C.intl.formatToPlainString(C.t.ZIwMzr, { name: e, timeRemaining: t }),
        [g.pJ.HOURS]: (e, t) => C.intl.formatToPlainString(C.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class b extends l.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: l, progress: s, total: a, type: r } = n;
        if (null == s || null == a || null == l) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            d = 0 !== o ? Math.max(1, (a - s) / o) : null,
            c = S[r],
            u = null != c ? Object.keys(c) : [],
            { unit: h, time: A } = (0, g.$l)(null != d ? d / 60 : null, u);
        if (null != c && null != h) {
            let e = c[h];
            return null != e ? e(i.name, A) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === E.WTw.UPDATING || e.type === E.WTw.REPAIRING || e.type === E.WTw.INSTALLING) {
            if (t) return C.intl.string(C.t["5oxtFS"]);
            else if (e.stage === E.OQC.PATCHING || e.stage === E.OQC.REPAIRING)
                return (0, i.jsx)(f.A, {
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
class N extends l.PureComponent {
    static defaultProps = { strokeSize: h.a3E.StrokeSizes.MEDIUM };
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
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.pX)(E.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? C.intl.string(C.t.cw57ar)
            : (0, i.jsx)(b, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(r.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, I.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(u.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.a3E, {
                        percent: e,
                        colorOverride: t ? d.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(h.s3U, { size: "md", color: "currentColor", className: I.k }),
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
let j = o.Ay.connectStores([_.A, p.A, A.A], () => {
    let e = _.A.activeItems,
        t = T(e, p.A),
        { total: n, progress: i } = x.zY(t);
    return {
        percent: x.uA(i, n),
        isPaused: _.A.paused,
        firstApplication: e.length > 0 ? A.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(c.F, {
              component: l.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(N, { ...n }) : null,
          })
        : (0, i.jsx)(N, { ...n });
});
