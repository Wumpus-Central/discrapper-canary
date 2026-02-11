n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(397927),
    c = n(793574),
    d = n(384059),
    u = n(917592),
    h = n(241847),
    m = n(167155),
    A = n(652215),
    g = n(164466);
let p = { [A.vkP.CONNECTED]: g.nf, [A.vkP.CONNECTING]: g._6, [A.vkP.ERROR]: g.Il },
    f = { [A.bFR.FINE]: g.LP, [A.bFR.AVERAGE]: g.mq, [A.bFR.BAD]: g.yA, [A.bFR.UNKNOWN]: null },
    _ = { [A.bFR.FINE]: o.QtE, [A.bFR.AVERAGE]: o.jHk, [A.bFR.BAD]: o.RIK, [A.bFR.UNKNOWN]: o.esW };
function E(e) {
    let { quality: t, largePing: n, ...l } = e,
        s = _[t];
    return (0, i.jsx)(s, { className: a()(g.hU, { [g.kV]: n }), ...l });
}
function C(e) {
    let {
            quality: t,
            lastPing: n,
            state: s,
            className: _,
            children: C,
            channelId: x,
            childrenAsSubtitle: S,
            connectionStatusTextVariant: T,
            hasVideo: N,
        } = e,
        I = l.useRef(null),
        v = s === A.S7L.RTC_CONNECTED,
        y = l.useCallback((e) => (0, i.jsx)(h.A, { ...e, channelId: x }), [x]),
        { connectionStatus: b, connectionStatusText: j } = u.A.getStatus(s, N);
    return (0, i.jsxs)("div", {
        className: g.pe,
        children: [
            (0, i.jsx)("div", {
                className: a()(g.yH, f[t], _),
                ref: I,
                children: (0, i.jsx)(o.YNO, {
                    targetElementRef: I,
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
                                            className: g.xr,
                                            onClick: (e) => {
                                                (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(E, { quality: t, largePing: S }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: g.ei,
                                    children: [
                                        (0, i.jsx)(o.DUT, {
                                            onClick: (e) => {
                                                (0, d.X)(c.A.RTC_PANEL, d.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(m.A, {
                                                text: j,
                                                textVariant: T,
                                                hasVideo: N,
                                                className: p[b],
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
