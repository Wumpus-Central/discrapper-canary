n.d(t, { F: () => b });
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
    h = n(611500),
    m = n(981631),
    g = n(322785),
    E = n(290953);
function b(e) {
    var t;
    let { applicationId: n, onMouseDown: b, onMouseMove: y, onMouseLeave: O, onFocus: v, idle: S } = e,
        I = (0, l.q)(n),
        T = (0, d.bp)() === m.IlC.POPOUT,
        { parentAnalyticsLocation: C } = (0, s.ZP)(),
        A = () => {
            (0, c.v)(C, c.d.POPOUT, !0),
                (0, o.Z)({
                    onConfirm: async () => {
                        null != I && (await (0, a.nJ)(I.id, null)), (0, a.Gj)();
                    },
                });
        };
    return (0, r.jsxs)("div", {
        className: E.videoControls,
        onMouseMove: y,
        onMouseDown: b,
        onMouseLeave: O,
        children: [
            (0, r.jsx)("div", {
                className: E.topControls,
                children: (0, r.jsx)(p.r, {
                    idle: S,
                    title: null != (t = null == I ? void 0 : I.name) ? t : "",
                    onJumpToChannel: v,
                    preventIdleComponent: f.Z,
                }),
            }),
            (0, r.jsx)("div", {
                className: E.bottomControls,
                children: (0, r.jsxs)(u.Z, {
                    grow: 1,
                    shrink: 1,
                    justify: u.Z.Justify.END,
                    align: u.Z.Align.CENTER,
                    children: [
                        T || (0, i.R)()
                            ? null
                            : (0, r.jsx)(_.Z, {
                                  className: g.rightPipIcon,
                                  popoutOpen: !1,
                                  onOpenPopout: A,
                                  onClosePopout: m.VqG,
                              }),
                        (0, r.jsx)(h.Z, {
                            applicationId: n,
                            className: g.rightPipIcon,
                        }),
                    ],
                }),
            }),
        ],
    });
}
