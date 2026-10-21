n.d(t, { N3: () => w, P9: () => _, wY: () => q });
var l = n(451988),
    u = n(73153),
    r = n(956518),
    a = n(323073),
    c = n(288254),
    i = n(734057),
    s = n(576705),
    o = n(494126),
    d = n(91242),
    p = n(457827),
    h = n(165610),
    f = n(652215);
let A = new Map();
function I(e, t) {
    u.h.dispatch({ type: "FRAME_SET_UNCLAIMED_PRELOAD", frameId: e, unclaimed: t });
}
function m(e) {
    let t = A.get(e);
    (null == t && ((t = { stopTimer: new l.Ep(), launchRequestId: void 0 }), A.set(e, t), I(e, !0)),
        t.stopTimer.start(5e3, () => R(e)));
}
function R(e) {
    let t = A.get(e);
    null != t &&
        (t.stopTimer.stop(),
        A.delete(e),
        I(e, !1),
        null != t.launchRequestId && d.A.getFrame(e)?.launchRequestId === t.launchRequestId && (0, p.r)(e));
}
function g(e) {
    let t = A.get(e);
    null != t && (t.stopTimer.stop(), A.delete(e), I(e, !1));
}
function E(e) {
    let t = i.A.getChannel(e),
        n = t?.application_id,
        l = t?.type === f.rbe.GUILD_APP ? (0, h.HD)(t) : null;
    return null == t || null == n || null == l
        ? null
        : { channel: t, applicationId: n, surface: l, frameId: (0, h.VA)(n, l) };
}
function _(e) {
    let t = E(e);
    if (null == t) return;
    let { channel: n, applicationId: l, surface: u, frameId: i } = t;
    if (A.has(i)) return void m(i);
    if (
        null != d.A.getFrame(i) ||
        !s.A.can(f.xBc.VIEW_CHANNEL, n) ||
        (0, a.qR)(n) ||
        (0, c.BV)(n) ||
        null == (0, r.Ay)(l)
    )
        return;
    (m(i), (0, o.launchFrame)({ applicationId: l, surface: u, showErrorModal: !1 }).catch(() => g(i)));
    let p = A.get(i);
    null != p && (p.launchRequestId = d.A.getFrame(i)?.launchRequestId);
}
function q(e) {
    return !!A.has(e) && (g(e), !0);
}
function w(e) {
    let t = E(e);
    null != t && R(t.frameId);
}
