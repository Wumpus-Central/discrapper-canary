n.d(t, { A: () => y, v: () => b }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(311907),
    c = n(827734),
    d = n(73939),
    u = n(990078),
    h = n(397927),
    A = n(587895),
    _ = n(290987),
    m = n(976860),
    g = n(194871),
    p = n(966846),
    f = n(674378),
    x = n(505806),
    E = n(652215),
    I = n(985018),
    C = n(832954);
let N = {
    [E.WTw.INSTALLING]: {
        [_.pJ.NONE]: (e, t) => I.intl.formatToPlainString(I.t["p+2sE+"], { name: e }),
        [_.pJ.SECONDS]: (e, t) => I.intl.formatToPlainString(I.t["/0NgPI"], { name: e, timeRemaining: t }),
        [_.pJ.MINUTES]: (e, t) => I.intl.formatToPlainString(I.t.ZIwMzr, { name: e, timeRemaining: t }),
        [_.pJ.HOURS]: (e, t) => I.intl.formatToPlainString(I.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [E.WTw.UPDATING]: {
        [_.pJ.NONE]: (e, t) => I.intl.formatToPlainString(I.t["6F9QzC"], { name: e }),
        [_.pJ.SECONDS]: (e, t) => I.intl.formatToPlainString(I.t["2OVgVq"], { name: e, timeRemaining: t }),
        [_.pJ.MINUTES]: (e, t) => I.intl.formatToPlainString(I.t.mgQg1L, { name: e, timeRemaining: t }),
        [_.pJ.HOURS]: (e, t) => I.intl.formatToPlainString(I.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [E.WTw.REPAIRING]: {
        [_.pJ.NONE]: (e, t) => I.intl.formatToPlainString(I.t["p+2sE+"], { name: e }),
        [_.pJ.SECONDS]: (e, t) => I.intl.formatToPlainString(I.t["/0NgPI"], { name: e, timeRemaining: t }),
        [_.pJ.MINUTES]: (e, t) => I.intl.formatToPlainString(I.t.ZIwMzr, { name: e, timeRemaining: t }),
        [_.pJ.HOURS]: (e, t) => I.intl.formatToPlainString(I.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class T extends l.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: l, progress: s, total: a, type: r } = n;
        if (null == s || null == a || null == l) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            c = 0 !== o ? Math.max(1, (a - s) / o) : null,
            d = N[r],
            u = null != d ? Object.keys(d) : [],
            { unit: h, time: A } = (0, _.$l)(null != c ? c / 60 : null, u);
        if (null != d && null != h) {
            let e = d[h];
            return null != e ? e(i.name, A) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === E.WTw.UPDATING || e.type === E.WTw.REPAIRING || e.type === E.WTw.INSTALLING) {
            if (t) return I.intl.string(I.t["5oxtFS"]);
            else if (e.stage === E.OQC.PATCHING || e.stage === E.OQC.REPAIRING)
                return (0, i.jsx)(x.A, {
                    getHistoricalTotalBytes: g.A.getHistoricalTotalBytesWritten,
                    updateInterval: 5e3,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : I.intl.string(I.t.cw57ar);
    }
}
class S extends l.PureComponent {
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
            ? I.intl.string(I.t.cw57ar)
            : (0, i.jsx)(T, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(r.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, C.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(u.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.a3E, {
                        percent: e,
                        colorOverride: t ? c.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(h.s3U, { size: "md", color: "currentColor", className: C.k }),
                    }),
                }),
            }),
        });
    }
}
function b(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: l } = n,
            s = t.getState(i, l);
        return null != s && e.push(s), e;
    }, []);
}
let y = o.Ay.connectStores([p.A, g.A, A.A], () => {
    let e = p.A.activeItems,
        t = b(e, g.A),
        { total: n, progress: i } = f.zY(t);
    return {
        percent: f.uA(i, n),
        isPaused: p.A.paused,
        firstApplication: e.length > 0 ? A.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(d.F, {
              component: l.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(S, { ...n }) : null,
          })
        : (0, i.jsx)(S, { ...n });
});
