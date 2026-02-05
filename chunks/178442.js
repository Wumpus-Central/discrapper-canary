n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(397927),
    c = n(793574),
    d = n(384059),
    u = n(917592),
    h = n(241847),
    m = n(167155),
    A = n(652215),
    p = n(56668);
let g = { [A.vkP.CONNECTED]: p.nf, [A.vkP.CONNECTING]: p._6, [A.vkP.ERROR]: p.Il },
    f = { [A.bFR.FINE]: p.LP, [A.bFR.AVERAGE]: p.mq, [A.bFR.BAD]: p.yA, [A.bFR.UNKNOWN]: null },
    _ = { [A.bFR.FINE]: o.QtE, [A.bFR.AVERAGE]: o.jHk, [A.bFR.BAD]: o.RIK, [A.bFR.UNKNOWN]: o.esW };
function E(e) {
    let { quality: t, largePing: n, ...l } = e,
        a = _[t];
    return (0, i.jsx)(a, { className: s()(p.hU, { [p.kV]: n }), ...l });
}
function C(e) {
    let {
            quality: t,
            lastPing: n,
            state: a,
            className: _,
            children: C,
            channelId: x,
            childrenAsSubtitle: S,
            connectionStatusTextVariant: T,
            hasVideo: I,
        } = e,
        N = l.useRef(null),
        v = a === A.S7L.RTC_CONNECTED,
        y = l.useCallback((e) => (0, i.jsx)(h.A, { ...e, channelId: x }), [x]),
        { connectionStatus: b, connectionStatusText: R } = u.A.getStatus(a, I);
    return (0, i.jsxs)("div", {
        className: p.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(p.yH, f[t], _),
                ref: N,
                children: (0, i.jsx)(o.YNO, {
                    targetElementRef: N,
                    renderPopout: y,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                v &&
                                    (0, i.jsx)(r.m, {
                                        text: t !== A.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(o.DUT, {
                                            className: p.xr,
                                            onClick: (e) => {
                                                (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(E, { quality: t, largePing: S }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: p.ei,
                                    children: [
                                        (0, i.jsx)(o.DUT, {
                                            onClick: (e) => {
                                                (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(m.A, {
                                                text: R,
                                                textVariant: T,
                                                hasVideo: I,
                                                className: g[b],
                                                hasConnectedChannel: null != x,
                                            }),
                                        }),
                                        S ? C : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            S ? null : C,
        ],
    });
}
