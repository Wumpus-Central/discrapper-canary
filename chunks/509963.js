n.d(t, { A: () => D, v: () => L }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(615300),
    o = n(17928),
    d = n(661531),
    c = n(73939),
    _ = n(990078),
    E = n(590251),
    u = n(32880),
    A = n(587895),
    I = n(290987),
    T = n(976860),
    h = n(340829),
    S = n(966846),
    N = n(674378),
    f = n(505806),
    p = n(652215),
    m = n(985018),
    O = n(440714);
let C = {
    [p.WTw.INSTALLING]: {
        [I.pJ.NONE]: (e, t) => m.intl.formatToPlainString(m.t["p+2sE+"], { name: e }),
        [I.pJ.SECONDS]: (e, t) => m.intl.formatToPlainString(m.t["/0NgPI"], { name: e, timeRemaining: t }),
        [I.pJ.MINUTES]: (e, t) => m.intl.formatToPlainString(m.t.ZIwMzr, { name: e, timeRemaining: t }),
        [I.pJ.HOURS]: (e, t) => m.intl.formatToPlainString(m.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [p.WTw.UPDATING]: {
        [I.pJ.NONE]: (e, t) => m.intl.formatToPlainString(m.t["6F9QzC"], { name: e }),
        [I.pJ.SECONDS]: (e, t) => m.intl.formatToPlainString(m.t["2OVgVq"], { name: e, timeRemaining: t }),
        [I.pJ.MINUTES]: (e, t) => m.intl.formatToPlainString(m.t.mgQg1L, { name: e, timeRemaining: t }),
        [I.pJ.HOURS]: (e, t) => m.intl.formatToPlainString(m.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [p.WTw.REPAIRING]: {
        [I.pJ.NONE]: (e, t) => m.intl.formatToPlainString(m.t["p+2sE+"], { name: e }),
        [I.pJ.SECONDS]: (e, t) => m.intl.formatToPlainString(m.t["/0NgPI"], { name: e, timeRemaining: t }),
        [I.pJ.MINUTES]: (e, t) => m.intl.formatToPlainString(m.t.ZIwMzr, { name: e, timeRemaining: t }),
        [I.pJ.HOURS]: (e, t) => m.intl.formatToPlainString(m.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class R extends a.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: a, progress: r, total: s, type: l } = n;
        if (null == r || null == s || null == a) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            d = 0 !== o ? Math.max(1, (s - r) / o) : null,
            c = C[l],
            _ = null != c ? Object.keys(c) : [],
            { unit: E, time: u } = (0, I.$l)(null != d ? d / 60 : null, _);
        if (null != c && null != E) {
            let e = c[E];
            return null != e ? e(i.name, u) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === p.WTw.UPDATING || e.type === p.WTw.REPAIRING || e.type === p.WTw.INSTALLING) {
            if (t) return m.intl.string(m.t["5oxtFS"]);
            else if (e.stage === p.OQC.PATCHING || e.stage === p.OQC.REPAIRING)
                return (0, i.jsx)(f.A, {
                    getHistoricalTotalBytes: h.A.getHistoricalTotalBytesWritten,
                    updateInterval: 5e3,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : m.intl.string(m.t.cw57ar);
    }
}
class g extends a.PureComponent {
    static defaultProps = { strokeSize: E.a.StrokeSizes.MEDIUM };
    state = { animationScale: new l.A.Value(0) };
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        l.A.spring(this.state.animationScale, { toValue: 1, duration: 200 }).start(e);
    }
    componentWillLeave(e) {
        l.A.spring(this.state.animationScale, { toValue: 0, duration: 200 }).start(e);
    }
    handleOnClick = (e) => {
        let { onClick: t } = this.props;
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, T.pX)(p.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? m.intl.string(m.t.cw57ar)
            : (0, i.jsx)(R, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(l.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: s()(n, O.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(_.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(E.a, {
                        percent: e,
                        colorOverride: t ? d.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(u.s, { size: "md", color: "currentColor", className: O.k }),
                    }),
                }),
            }),
        });
    }
}
function L(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: a } = n,
            r = t.getState(i, a);
        return null != r && e.push(r), e;
    }, []);
}
let D = o.Ay.connectStores([S.A, h.A, A.A], () => {
    let e = S.A.activeItems,
        t = L(e, h.A),
        { total: n, progress: i } = N.zY(t);
    return {
        percent: N.uA(i, n),
        isPaused: S.A.paused,
        firstApplication: e.length > 0 ? A.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(c.F, {
              component: a.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(g, { ...n }) : null,
          })
        : (0, i.jsx)(g, { ...n });
});
