n.d(t, { e: () => v, A: () => x });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(200192),
    o = n(526701),
    u = n(522937),
    d = n(653766),
    c = n(265872),
    h = n(866665),
    f = n(939249),
    g = n(657043),
    A = n(793574),
    p = n(384059),
    m = n(917592),
    I = n(926641),
    E = n(834730),
    S = n(29160),
    C = n(792996),
    _ = n(177129);
let N = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: l, textVariant: a = "body-md/medium" } = e,
        o = n ? C.intl.string(C.t.IlHdW8) : C.intl.string(C.t.WsOisp);
    return (0, i.jsx)(S.A, {
        className: s()(t, _.H),
        hoverText: l ? (0, i.jsx)(E.E, { variant: a, color: "currentColor", className: _.Q, children: o }) : null,
        children: (0, i.jsx)(E.E, { variant: a, color: "currentColor", className: _.Q, children: r }),
    });
};
var T = n(652215),
    y = n(473718);
let v = { [T.vkP.CONNECTED]: y.nf, [T.vkP.CONNECTING]: y._6, [T.vkP.ERROR]: y.Il },
    M = { [T.bFR.FINE]: y.LP, [T.bFR.AVERAGE]: y.mq, [T.bFR.BAD]: y.yA, [T.bFR.UNKNOWN]: null },
    D = {
        [T.bFR.FINE]: a.ConnectionFineIcon,
        [T.bFR.AVERAGE]: o.ConnectionAverageIcon,
        [T.bFR.BAD]: u.ConnectionBadIcon,
        [T.bFR.UNKNOWN]: d.ConnectionUnknownIcon,
    };
function R(e) {
    let { quality: t, largePing: n, ...r } = e,
        l = D[t];
    return (0, i.jsx)(l, { className: s()(y.hU, { [y.kV]: n }), ...r });
}
function O(e) {
    let { accessory: t, enlarged: n = !1, children: r } = e;
    return null == t ? r : (0, i.jsxs)("div", { className: s()(y.Bs, { [y.F5]: n }), children: [r, t] });
}
function x(e) {
    let {
            quality: t,
            lastPing: n,
            state: l,
            className: a,
            children: o,
            channelId: u,
            childrenAsSubtitle: d,
            connectionStatusTextVariant: E,
            hasVideo: S,
            statusAccessory: C,
        } = e,
        _ = r.useRef(null),
        D = l === T.S7L.RTC_CONNECTED,
        x = r.useCallback((e) => (0, i.jsx)(I.A, { ...e, channelId: u }), [u]),
        { connectionStatus: P, connectionStatusText: U } = m.A.getStatus(l, S),
        L = (0, g.KN)("RTCConnectionStatus");
    return (0, i.jsxs)("div", {
        className: y.pe,
        children: [
            (0, i.jsx)("div", {
                className: s()(y.yH, M[t], a),
                ref: _,
                children: (0, i.jsx)(c.Y, {
                    targetElementRef: _,
                    renderPopout: x,
                    position: "top",
                    children: (e) => {
                        let { onClick: r } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                D &&
                                    (0, i.jsx)(h.m, {
                                        text: t !== T.bFR.UNKNOWN && null != n ? `${n.toFixed(0)} ms` : null,
                                        children: (0, i.jsx)(f.D, {
                                            className: s()(y.xr, { [y.YJ]: d }),
                                            onClick: (e) => {
                                                ((0, p.XJ)(A.A.RTC_PANEL, p.OP.CONNECTION_STATUS), r(e));
                                            },
                                            children: (0, i.jsx)(R, { quality: t, largePing: d }),
                                        }),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: y.ei,
                                    children: [
                                        d && L
                                            ? null
                                            : (0, i.jsx)(O, {
                                                  accessory: C,
                                                  children: (0, i.jsx)(f.D, {
                                                      onClick: (e) => {
                                                          ((0, p.XJ)(A.A.RTC_PANEL, p.OP.CONNECTION_STATUS), r(e));
                                                      },
                                                      children: (0, i.jsx)(N, {
                                                          text: U,
                                                          textVariant: E,
                                                          hasVideo: S,
                                                          className: v[P],
                                                          hasConnectedChannel: null != u,
                                                      }),
                                                  }),
                                              }),
                                        d
                                            ? (0, i.jsx)(O, { accessory: L ? C : null, enlarged: !0, children: o })
                                            : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            d ? null : o,
        ],
    });
}
