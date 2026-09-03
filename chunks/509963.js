n.d(t, { A: () => y, v: () => L }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(17928),
    d = n(661531),
    c = n(868285),
    u = n(590251),
    _ = n(866665),
    E = n(32880),
    A = n(587895),
    h = n(529433),
    I = n(976860),
    f = n(340829),
    p = n(966846),
    T = n(674378),
    m = n(505806),
    g = n(652215),
    S = n(375708),
    N = n(627745);
let C = {
    [g.WTw.INSTALLING]: {
        [h.pJ.NONE]: (e, t) => S.intl.formatToPlainString(S.t["p+2sE+"], { name: e }),
        [h.pJ.SECONDS]: (e, t) => S.intl.formatToPlainString(S.t["/0NgPI"], { name: e, timeRemaining: t }),
        [h.pJ.MINUTES]: (e, t) => S.intl.formatToPlainString(S.t.ZIwMzr, { name: e, timeRemaining: t }),
        [h.pJ.HOURS]: (e, t) => S.intl.formatToPlainString(S.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [g.WTw.UPDATING]: {
        [h.pJ.NONE]: (e, t) => S.intl.formatToPlainString(S.t["6F9QzC"], { name: e }),
        [h.pJ.SECONDS]: (e, t) => S.intl.formatToPlainString(S.t["2OVgVq"], { name: e, timeRemaining: t }),
        [h.pJ.MINUTES]: (e, t) => S.intl.formatToPlainString(S.t.mgQg1L, { name: e, timeRemaining: t }),
        [h.pJ.HOURS]: (e, t) => S.intl.formatToPlainString(S.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [g.WTw.REPAIRING]: {
        [h.pJ.NONE]: (e, t) => S.intl.formatToPlainString(S.t["p+2sE+"], { name: e }),
        [h.pJ.SECONDS]: (e, t) => S.intl.formatToPlainString(S.t["/0NgPI"], { name: e, timeRemaining: t }),
        [h.pJ.MINUTES]: (e, t) => S.intl.formatToPlainString(S.t.ZIwMzr, { name: e, timeRemaining: t }),
        [h.pJ.HOURS]: (e, t) => S.intl.formatToPlainString(S.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class O extends r.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: r, progress: a, total: s, type: l } = n;
        if (null == a || null == s || null == r) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            d = 0 !== o ? Math.max(1, (s - a) / o) : null,
            c = C[l],
            u = null != c ? Object.keys(c) : [],
            { unit: _, time: E } = (0, h.$l)(null != d ? d / 60 : null, u);
        if (null != c && null != _) {
            let e = c[_];
            return null != e ? e(i.name, E) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === g.WTw.UPDATING || e.type === g.WTw.REPAIRING || e.type === g.WTw.INSTALLING) {
            if (t) return S.intl.string(S.t["5oxtFS"]);
            else if (e.stage === g.OQC.PATCHING || e.stage === g.OQC.REPAIRING)
                return (0, i.jsx)(m.A, {
                    getHistoricalTotalBytes: f.A.getHistoricalTotalBytesWritten,
                    updateInterval: 5e3,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : S.intl.string(S.t.cw57ar);
    }
}
class R extends r.PureComponent {
    static defaultProps = { strokeSize: u.a.StrokeSizes.MEDIUM };
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
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, I.pX)(g.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? S.intl.string(S.t.cw57ar)
            : (0, i.jsx)(O, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(l.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: s()(n, N.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(_.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.a, {
                        percent: e,
                        colorOverride: t ? d.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(E.DownloadIcon, { size: "md", color: "currentColor", className: N.k }),
                    }),
                }),
            }),
        });
    }
}
function L(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: r } = n,
            a = t.getState(i, r);
        return null != a && e.push(a), e;
    }, []);
}
let y = o.Ay.connectStores([p.A, f.A, A.A], () => {
    let e = p.A.activeItems,
        t = L(e, f.A),
        { total: n, progress: i } = T.zY(t);
    return {
        percent: T.uA(i, n),
        isPaused: p.A.paused,
        firstApplication: e.length > 0 ? A.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})(function (e) {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(c.F, {
              component: r.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(R, { ...n }) : null,
          })
        : (0, i.jsx)(R, { ...n });
});
