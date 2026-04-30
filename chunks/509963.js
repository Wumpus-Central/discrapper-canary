"use strict";
n.d(t, { A: () => R, v: () => O }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(17928),
    u = n(661531),
    c = n(868285),
    d = n(990078),
    _ = n(590251),
    f = n(32880),
    h = n(587895),
    p = n(529433),
    E = n(976860),
    m = n(340829),
    g = n(966846),
    A = n(674378),
    I = n(505806),
    T = n(652215),
    S = n(375708),
    N = n(440714);
let y = {
    [T.WTw.INSTALLING]: {
        [p.pJ.NONE]: (e, t) => S.intl.formatToPlainString(S.t["p+2sE+"], { name: e }),
        [p.pJ.SECONDS]: (e, t) => S.intl.formatToPlainString(S.t["/0NgPI"], { name: e, timeRemaining: t }),
        [p.pJ.MINUTES]: (e, t) => S.intl.formatToPlainString(S.t.ZIwMzr, { name: e, timeRemaining: t }),
        [p.pJ.HOURS]: (e, t) => S.intl.formatToPlainString(S.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
    [T.WTw.UPDATING]: {
        [p.pJ.NONE]: (e, t) => S.intl.formatToPlainString(S.t["6F9QzC"], { name: e }),
        [p.pJ.SECONDS]: (e, t) => S.intl.formatToPlainString(S.t["2OVgVq"], { name: e, timeRemaining: t }),
        [p.pJ.MINUTES]: (e, t) => S.intl.formatToPlainString(S.t.mgQg1L, { name: e, timeRemaining: t }),
        [p.pJ.HOURS]: (e, t) => S.intl.formatToPlainString(S.t.aTdq44, { name: e, timeRemaining: t }),
    },
    [T.WTw.REPAIRING]: {
        [p.pJ.NONE]: (e, t) => S.intl.formatToPlainString(S.t["p+2sE+"], { name: e }),
        [p.pJ.SECONDS]: (e, t) => S.intl.formatToPlainString(S.t["/0NgPI"], { name: e, timeRemaining: t }),
        [p.pJ.MINUTES]: (e, t) => S.intl.formatToPlainString(S.t.ZIwMzr, { name: e, timeRemaining: t }),
        [p.pJ.HOURS]: (e, t) => S.intl.formatToPlainString(S.t["3IQDUi"], { name: e, timeRemaining: t }),
    },
};
class C extends r.PureComponent {
    renderProgressBody = (e, t) => {
        let { state: n, application: i } = this.props,
            { stage: r, progress: s, total: a, type: o } = n;
        if (null == s || null == a || null == r) return null;
        let l = (e[e.length - 1] / t) * 1e3,
            u = 0 !== l ? Math.max(1, (a - s) / l) : null,
            c = y[o],
            d = null != c ? Object.keys(c) : [],
            { unit: _, time: f } = (0, p.$l)(null != u ? u / 60 : null, d);
        if (null != c && null != _) {
            let e = c[_];
            return null != e ? e(i.name, f) : null;
        }
        return null;
    };
    renderText() {
        let { state: e, isPaused: t } = this.props;
        if (e.type === T.WTw.UPDATING || e.type === T.WTw.REPAIRING || e.type === T.WTw.INSTALLING) {
            if (t) return S.intl.string(S.t["5oxtFS"]);
            else if (e.stage === T.OQC.PATCHING || e.stage === T.OQC.REPAIRING)
                return (0, i.jsx)(I.A, {
                    getHistoricalTotalBytes: m.A.getHistoricalTotalBytesWritten,
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
class v extends r.PureComponent {
    static defaultProps = { strokeSize: _.a.StrokeSizes.MEDIUM };
    state = { animationScale: new o.A.Value(0) };
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e();
    }
    componentWillEnter(e) {
        o.A.spring(this.state.animationScale, { toValue: 1, duration: 200 }).start(e);
    }
    componentWillLeave(e) {
        o.A.spring(this.state.animationScale, { toValue: 0, duration: 200 }).start(e);
    }
    handleOnClick = (e) => {
        let { onClick: t } = this.props;
        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, E.pX)(T.BVt.APPLICATION_LIBRARY);
    };
    getTooltipText() {
        let { firstApplication: e, firstState: t, isPaused: n } = this.props;
        return null == e || null == t
            ? S.intl.string(S.t.cw57ar)
            : (0, i.jsx)(C, { application: e, state: t, isPaused: n });
    }
    render() {
        let { percent: e, isPaused: t, className: n } = this.props;
        return (0, i.jsx)(o.A.div, {
            style: { transform: [{ scale: this.state.animationScale }] },
            className: a()(n, N.L),
            onClick: this.handleOnClick,
            children: (0, i.jsx)(d.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(_.a, {
                        percent: e,
                        colorOverride: t ? u.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, i.jsx)(f.s, { size: "md", color: "currentColor", className: N.k }),
                    }),
                }),
            }),
        });
    }
}
function O(e, t) {
    return e.reduce((e, n) => {
        let { applicationId: i, branchId: r } = n,
            s = t.getState(i, r);
        return null != s && e.push(s), e;
    }, []);
}
let R = l.Ay.connectStores([g.A, m.A, h.A], () => {
    let e = g.A.activeItems,
        t = O(e, m.A),
        { total: n, progress: i } = A.zY(t);
    return {
        percent: A.uA(i, n),
        isPaused: g.A.paused,
        firstApplication: e.length > 0 ? h.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null,
    };
})((e) => {
    let { determineOwnVisibility: t = !0, ...n } = e;
    return t
        ? (0, i.jsx)(c.F, {
              component: r.Fragment,
              children: n.percent > 0 && n.percent < 100 ? (0, i.jsx)(v, { ...n }) : null,
          })
        : (0, i.jsx)(v, { ...n });
});
