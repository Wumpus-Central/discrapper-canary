n.d(t, { A: () => y, v: () => v }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(615300),
    o = n(17928),
    d = n(661531),
    c = n(73939),
    u = n(990078),
    h = n(590251),
    A = n(32880),
    _ = n(587895),
    g = n(290987),
    m = n(976860),
    p = n(340829),
    f = n(966846),
    E = n(674378),
    C = n(505806),
    x = n(652215),
    I = n(985018),
    b = n(440714);
let S = {
    [x.WTw.INSTALLING]: {
        [g.pJ.NONE]: (e, t) => I.intl.formatToPlainString(I.t["p+2sE+"], { name: e }),
        [g.pJ.SECONDS]: (e, t) => I.intl.formatToPlainString(I.t["/0NgPI"], { name: e, timeRemaining: t }),
        [g.pJ.MINUTES]: (e, t) => I.intl.formatToPlainString(I.t.ZIwMzr, { name: e, timeRemaining: t }),
        [g.pJ.HOURS]: (e, t) => I.intl.formatToPlainString(I.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [x.WTw.UPDATING]: {
        [g.pJ.NONE]: (e, t) => I.intl.formatToPlainString(I.t["6F9QzC"], { name: e }),
        [g.pJ.SECONDS]: (e, t) => I.intl.formatToPlainString(I.t["2OVgVq"], { name: e, timeRemaining: t }),
        [g.pJ.MINUTES]: (e, t) => I.intl.formatToPlainString(I.t.mgQg1L, { name: e, timeRemaining: t }),
        [g.pJ.HOURS]: (e, t) => I.intl.formatToPlainString(I.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [x.WTw.REPAIRING]: {
        [g.pJ.NONE]: (e, t) => I.intl.formatToPlainString(I.t["p+2sE+"], { name: e }),
        [g.pJ.SECONDS]: (e, t) => I.intl.formatToPlainString(I.t["/0NgPI"], { name: e, timeRemaining: t }),
        [g.pJ.MINUTES]: (e, t) => I.intl.formatToPlainString(I.t.ZIwMzr, { name: e, timeRemaining: t }),
        [g.pJ.HOURS]: (e, t) => I.intl.formatToPlainString(I.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class N extends l.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: l, progress: s, total: r, type: a } = n;
        if (null == s || null == r || null == l) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            d = 0 !== o ? Math.max(1, (r - s) / o) : null,
            c = S[a],
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
        if (e.type === x.WTw.UPDATING || e.type === x.WTw.REPAIRING || e.type === x.WTw.INSTALLING) {
            if (t) return I.intl.string(I.t["5oxtFS"]);
            else if (e.stage === x.OQC.PATCHING || e.stage === x.OQC.REPAIRING)
                return (0, i.jsx)(C.A, {
                    getHistoricalTotalBytes: p.A.getHistoricalTotalBytesWritten,
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
class T extends l.PureComponent {
    static defaultProps = { strokeSize: h.a.StrokeSizes.MEDIUM };
    state = { animationScale: new a.A.Value(0) };
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        a.A.spring(this.state.animationScale, { toValue: 1, duration: 200 }).start(e);
    }
    componentWillLeave(e) {
        a.A.spring(this.state.animationScale, { toValue: 0, duration: 200 }).start(e);
    }
    handleOnClick = (e) => {
        let { onClick: t } = this.props;
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.pX)(x.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? I.intl.string(I.t.cw57ar)
            : (0, i.jsx)(N, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(a.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: r()(n, b.L),
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
function v(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: l } = n,
            s = t.getState(i, l);
        return null != s && e.push(s), e;
    }, []);
}
let y = o.Ay.connectStores([f.A, p.A, _.A], () => {
    let e = f.A.activeItems,
        t = v(e, p.A),
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
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(T, { ...n }) : null,
          })
        : (0, i.jsx)(T, { ...n });
});
