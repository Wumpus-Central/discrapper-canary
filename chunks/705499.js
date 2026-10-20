l.d(t, { P9: () => g, wY: () => E });
var n = l(451988),
    u = l(73153),
    r = l(956518),
    a = l(323073),
    s = l(288254),
    i = l(734057),
    c = l(576705),
    d = l(494126),
    o = l(91242),
    p = l(457827),
    h = l(165610),
    A = l(652215);
let I = new Map();
function f(e, t) {
    u.h.dispatch({ type: "FRAME_SET_UNCLAIMED_PRELOAD", frameId: e, unclaimed: t });
}
function m(e) {
    let t = I.get(e);
    (null == t && ((t = { stopTimer: new n.Ep(), launchRequestId: void 0 }), I.set(e, t), f(e, !0)),
        t.stopTimer.start(5e3, () => {
            var t;
            let l;
            return (
                (t = e),
                void (
                    null != (l = I.get(t)) &&
                    (l.stopTimer.stop(),
                    I.delete(t),
                    f(t, !1),
                    null != l.launchRequestId && o.A.getFrame(t)?.launchRequestId === l.launchRequestId && (0, p.r)(t))
                )
            );
        }));
}
function R(e) {
    let t = I.get(e);
    null != t && (t.stopTimer.stop(), I.delete(e), f(e, !1));
}
function g(e) {
    let t,
        l,
        n,
        u =
            ((t = i.A.getChannel(e)),
            (l = t?.application_id),
            (n = t?.type === A.rbe.GUILD_APP ? (0, h.HD)(t) : null),
            null == t || null == l || null == n
                ? null
                : { channel: t, applicationId: l, surface: n, frameId: (0, h.VA)(l, n) });
    if (null == u) return;
    let { channel: p, applicationId: f, surface: g, frameId: E } = u;
    if (I.has(E)) return void m(E);
    if (
        null != o.A.getFrame(E) ||
        !c.A.can(A.xBc.VIEW_CHANNEL, p) ||
        (0, a.qR)(p) ||
        (0, s.BV)(p) ||
        null == (0, r.Ay)(f)
    )
        return;
    (m(E), (0, d.launchFrame)({ applicationId: f, surface: g, showErrorModal: !1 }).catch(() => R(E)));
    let _ = I.get(E);
    null != _ && (_.launchRequestId = o.A.getFrame(E)?.launchRequestId);
}
function E(e) {
    return !!I.has(e) && (R(e), !0);
}
