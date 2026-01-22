n.d(t, { A: () => E });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    c = n(793574),
    u = n(384059),
    d = n(917592),
    f = n(241847),
    p = n(167155),
    b = n(652215),
    g = n(56668);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let h = {
        [b.vkP.CONNECTED]: g.nf,
        [b.vkP.CONNECTING]: g._6,
        [b.vkP.ERROR]: g.Il,
    },
    A = {
        [b.bFR.FINE]: g.LP,
        [b.bFR.AVERAGE]: g.mq,
        [b.bFR.BAD]: g.yA,
        [b.bFR.UNKNOWN]: null,
    },
    y = {
        [b.bFR.FINE]: o.QtE,
        [b.bFR.AVERAGE]: o.jHk,
        [b.bFR.BAD]: o.RIK,
        [b.bFR.UNKNOWN]: o.esW,
    };
function _(e) {
    let { quality: t, largePing: n } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.getOwnPropertyNames(e);
                    for (l = 0; l < i.length; l++)
                        (n = i[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i;
        })(e, ["quality", "largePing"]),
        i = y[t];
    return (0, l.jsx)(i, m({ className: a()(g.hU, { [g.kV]: n }) }, r));
}
function E(e) {
    let {
            quality: t,
            lastPing: n,
            state: i,
            className: y,
            children: E,
            channelId: v,
            childrenAsSubtitle: O,
            connectionStatusTextVariant: x,
            hasVideo: S,
        } = e,
        N = r.useRef(null),
        C = i === b.S7L.RTC_CONNECTED,
        j = r.useCallback(
            (e) => {
                var t, n;
                return (0, l.jsx)(
                    f.A,
                    ((t = m({}, e)),
                    (n = n = { channelId: v }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
            [v],
        ),
        { connectionStatus: T, connectionStatusText: I } = d.A.getStatus(i, S);
    return (0, l.jsxs)("div", {
        className: g.pe,
        children: [
            (0, l.jsx)("div", {
                className: a()(g.yH, A[t], y),
                ref: N,
                children: (0, l.jsx)(o.YNO, {
                    targetElementRef: N,
                    renderPopout: j,
                    position: "top",
                    children: (e) => {
                        let { onClick: r } = e;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                C &&
                                    (0, l.jsx)(s.m, {
                                        text: t !== b.bFR.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
                                        children: (0, l.jsx)(o.DUT, {
                                            className: g.xr,
                                            onClick: (e) => {
                                                (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, l.jsx)(_, {
                                                quality: t,
                                                largePing: O,
                                            }),
                                        }),
                                    }),
                                (0, l.jsxs)("div", {
                                    className: g.ei,
                                    children: [
                                        (0, l.jsx)(o.DUT, {
                                            onClick: (e) => {
                                                (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), r(e);
                                            },
                                            children: (0, l.jsx)(p.A, {
                                                text: I,
                                                textVariant: x,
                                                hasVideo: S,
                                                className: h[T],
                                                hasConnectedChannel: null != v,
                                            }),
                                        }),
                                        O ? E : null,
                                    ],
                                }),
                            ],
                        });
                    },
                }),
            }),
            O ? null : E,
        ],
    });
}
