n.d(t, { v: () => y });
var r = n(627968);
n(64700);
var i = n(646865),
    a = n(795816),
    s = n(47294),
    o = n(688810),
    l = n(429913),
    c = n(384059),
    u = n(235986),
    d = n(267102),
    f = n(447404),
    p = n(271195),
    _ = n(128286),
    h = n(625180),
    m = n(262579),
    g = n(652215),
    E = n(31545),
    b = n(319567);
function y(e) {
    var t;
    let { applicationId: n, onMouseDown: y, onMouseMove: O, onMouseLeave: A, onFocus: v, idle: S } = e,
        I = (0, l.h)(n),
        T = (0, d.Us)() === g.BRT.POPOUT,
        { parentAnalyticsLocation: C } = (0, o.Ay)(),
        N = () => {
            (0, c.X)(C, c.O.POPOUT, !0),
                (0, s.A)({
                    onConfirm: async () => {
                        await h.A.refreshProxyTicket({ applicationId: n }), (0, a.jp)();
                    },
                });
        };
    return (0, r.jsxs)("div", {
        className: b._v,
        onMouseMove: O,
        onMouseDown: y,
        onMouseLeave: A,
        children: [
            (0, r.jsx)("div", {
                className: b.K1,
                children: (0, r.jsx)(p.X, {
                    idle: S,
                    title: null != (t = null == I ? void 0 : I.name) ? t : "",
                    onJumpToChannel: v,
                    preventIdleComponent: f.A,
                }),
            }),
            (0, r.jsx)("div", {
                className: b.q6,
                children: (0, r.jsxs)(u.A, {
                    grow: 1,
                    shrink: 1,
                    justify: u.A.Justify.END,
                    align: u.A.Align.CENTER,
                    children: [
                        T || (0, i.f)()
                            ? null
                            : (0, r.jsx)(_.A, {
                                  className: E.BD,
                                  popoutOpen: !1,
                                  onOpenPopout: N,
                                  onClosePopout: g.FXj,
                              }),
                        (0, r.jsx)(m.A, {
                            applicationId: n,
                            className: E.BD,
                        }),
                    ],
                }),
            }),
        ],
    });
}
