n.d(t, { F: () => y });
var r = n(54381);
n(473749);
var i = n(636449),
    a = n(566620),
    o = n(617552),
    s = n(906732),
    l = n(835473),
    c = n(522651),
    u = n(600164),
    d = n(728285),
    f = n(618158),
    p = n(922745),
    _ = n(800965),
    h = n(48131),
    m = n(611500),
    g = n(981631),
    E = n(322785),
    b = n(290953);
function y(e) {
    var t;
    let { applicationId: n, onMouseDown: y, onMouseMove: O, onMouseLeave: v, onFocus: S, idle: I } = e,
        T = (0, l.q)(n),
        C = (0, d.bp)() === g.IlC.POPOUT,
        { parentAnalyticsLocation: A } = (0, s.ZP)(),
        N = () => {
            (0, c.v)(A, c.d.POPOUT, !0),
                (0, o.Z)({
                    onConfirm: async () => {
                        await h.Z.refreshProxyTicket({ applicationId: n }), (0, a.Gj)();
                    },
                });
        };
    return (0, r.jsxs)("div", {
        className: b.videoControls,
        onMouseMove: O,
        onMouseDown: y,
        onMouseLeave: v,
        children: [
            (0, r.jsx)("div", {
                className: b.topControls,
                children: (0, r.jsx)(p.r, {
                    idle: I,
                    title: null != (t = null == T ? void 0 : T.name) ? t : "",
                    onJumpToChannel: S,
                    preventIdleComponent: f.Z,
                }),
            }),
            (0, r.jsx)("div", {
                className: b.bottomControls,
                children: (0, r.jsxs)(u.Z, {
                    grow: 1,
                    shrink: 1,
                    justify: u.Z.Justify.END,
                    align: u.Z.Align.CENTER,
                    children: [
                        C || (0, i.R)()
                            ? null
                            : (0, r.jsx)(_.Z, {
                                  className: E.rightPipIcon,
                                  popoutOpen: !1,
                                  onOpenPopout: N,
                                  onClosePopout: g.VqG,
                              }),
                        (0, r.jsx)(m.Z, {
                            applicationId: n,
                            className: E.rightPipIcon,
                        }),
                    ],
                }),
            }),
        ],
    });
}
