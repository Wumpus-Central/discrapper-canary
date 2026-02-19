"use strict";
n.d(t, { A: () => v, v: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(615300),
    o = n(311907),
    c = n(827734),
    d = n(73939),
    u = n(990078),
    h = n(397927),
    A = n(587895),
    p = n(290987),
    g = n(976860),
    m = n(194871),
    _ = n(966846),
    f = n(674378),
    x = n(505806),
    C = n(652215),
    E = n(985018),
    I = n(391523);
let b = {
    [C.WTw.INSTALLING]: {
        [p.pJ.NONE]: (e, t) => E.intl.formatToPlainString(E.t["p+2sE+"], { name: e }),
        [p.pJ.SECONDS]: (e, t) => E.intl.formatToPlainString(E.t["/0NgPI"], { name: e, timeRemaining: t }),
        [p.pJ.MINUTES]: (e, t) => E.intl.formatToPlainString(E.t.ZIwMzr, { name: e, timeRemaining: t }),
        [p.pJ.HOURS]: (e, t) => E.intl.formatToPlainString(E.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [C.WTw.UPDATING]: {
        [p.pJ.NONE]: (e, t) => E.intl.formatToPlainString(E.t["6F9QzC"], { name: e }),
        [p.pJ.SECONDS]: (e, t) => E.intl.formatToPlainString(E.t["2OVgVq"], { name: e, timeRemaining: t }),
        [p.pJ.MINUTES]: (e, t) => E.intl.formatToPlainString(E.t.mgQg1L, { name: e, timeRemaining: t }),
        [p.pJ.HOURS]: (e, t) => E.intl.formatToPlainString(E.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [C.WTw.REPAIRING]: {
        [p.pJ.NONE]: (e, t) => E.intl.formatToPlainString(E.t["p+2sE+"], { name: e }),
        [p.pJ.SECONDS]: (e, t) => E.intl.formatToPlainString(E.t["/0NgPI"], { name: e, timeRemaining: t }),
        [p.pJ.MINUTES]: (e, t) => E.intl.formatToPlainString(E.t.ZIwMzr, { name: e, timeRemaining: t }),
        [p.pJ.HOURS]: (e, t) => E.intl.formatToPlainString(E.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class N extends s.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: s, progress: l, total: r, type: a } = n;
        if (null == l || null == r || null == s) return null;
        let o = (e[e.length - 1] / t) * 1e3,
            c = 0 !== o ? Math.max(1, (r - l) / o) : null,
            d = b[a],
            u = null != d ? Object.keys(d) : [],
            { unit: h, time: A } = (0, p.$l)(null != c ? c / 60 : null, u);
        if (null != d && null != h) {
            let e = d[h];
            return null != e ? e(i.name, A) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === C.WTw.UPDATING || e.type === C.WTw.REPAIRING || e.type === C.WTw.INSTALLING) {
            if (t) return E.intl.string(E.t["5oxtFS"]);
            else if (e.stage === C.OQC.PATCHING || e.stage === C.OQC.REPAIRING)
                return (0, i.jsx)(x.A, {
                    getHistoricalTotalBytes: m.A.getHistoricalTotalBytesWritten,
                    updateInterval: 5e3,
                    children: this.renderProgressBody,
                });
        }
        return null;
    }
    render() {
        let e = this.renderText();
        return null != e ? e : E.intl.string(E.t.cw57ar);
    }
}
class S extends s.PureComponent {
    static defaultProps = { strokeSize: h.a3E.StrokeSizes.MEDIUM };
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
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, g.pX)(C.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? E.intl.string(E.t.cw57ar)
            : (0, i.jsx)(N, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(a.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: r()(n, I.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(u.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.a3E, {
                        percent: e,
                        colorOverride: t ? c.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(h.s3U, { size: "md", color: "currentColor", className: I.k }),
                    }),
                }),
            }),
        });
    }
}
function T(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: s } = n,
            l = t.getState(i, s);
        return null != l && e.push(l), e;
    }, []);
}
let v = o.Ay.connectStores([_.A, m.A, A.A], () => {
    let e = _.A.activeItems,
        t = T(e, m.A),
        { total: n, progress: i } = f.zY(t);
    return {
        percent: f.uA(i, n),
        isPaused: _.A.paused,
        firstApplication: e.length > 0 ? A.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(d.F, {
              component: s.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(S, { ...n }) : null,
          })
        : (0, i.jsx)(S, { ...n });
});
