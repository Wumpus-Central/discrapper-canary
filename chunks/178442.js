n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(990078),
    o = n(200192),
    c = n(526701),
    d = n(522937),
    u = n(653766),
    h = n(265872),
    m = n(939249),
    A = n(793574),
    g = n(384059),
    _ = n(917592),
    p = n(241847),
    f = n(167155),
    E = n(652215),
    C = n(648881);
let x = { [E.vkP.CONNECTED]: C.nf, [E.vkP.CONNECTING]: C._6, [E.vkP.ERROR]: C.Il },
    S = { [E.bFR.FINE]: C.LP, [E.bFR.AVERAGE]: C.mq, [E.bFR.BAD]: C.yA, [E.bFR.UNKNOWN]: null },
    I = { [E.bFR.FINE]: o.Q, [E.bFR.AVERAGE]: c.j, [E.bFR.BAD]: d.R, [E.bFR.UNKNOWN]: u.e };
function v(e) {
    let { quality: t, largePing: n, ...l } = e,
        a = I[t];
    return (0, i.jsx)(a, { className: s()(C.hU, { [C.kV]: n }), ...l });
}
function N(e) {
    let {
            quality: t,
            lastPing: n,
            state: a,
            className: o,
            children: c,
            channelId: d,
            childrenAsSubtitle: u,
            connectionStatusTextVariant: I,
            hasVideo: N,
        } = e,
        T = l.useRef(null),
        y = a === E.S7L.RTC_CONNECTED,
        b = l.useCallback((e) => (0, i.jsx)(p.A, { ...e, channelId: d }), [d]),
        { connectionStatus: j, connectionStatusText: R } = _.A.getStatus(a, N);
    return (0, i.jsxs)("div", {
        className: C.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(C.yH, S[t], o),
                ref: T,
                children: (0, i.jsx)(h.Y, {
                    targetElementRef: T,
                    renderPopout: b,
                    position: "top",
                    children: (e) => {
                        let { onClick: l } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                y &&
                                    (0, i.jsx)(r.m, {
                                        text: t !== E.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(m.D, {
                                            className: C.xr,
                                            onClick: (e) => {
                                                (0, g.X)(A.A.RTC_PANEL, g.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(v, { quality: t, largePing: u }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: C.ei,
                                    children: [
                                        (0, i.jsx)(m.D, {
                                            onClick: (e) => {
                                                (0, g.X)(A.A.RTC_PANEL, g.O.CONNECTION_STATUS), l(e);
                                            },
                                            children: (0, i.jsx)(f.A, {
                                                text: R,
                                                textVariant: I,
                                                hasVideo: N,
                                                className: x[j],
                                                hasConnectedChannel: null != d,
                                            }),
                                        }),
                                        u ? c : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            u ? null : c,
        ],
    });
}
