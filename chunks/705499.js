n.d(t, { P: () => f, w: () => I });
var l = n(451988),
    u = n(956518),
    r = n(734057),
    a = n(576705),
    s = n(494126),
    c = n(91242),
    i = n(457827),
    d = n(165610),
    h = n(652215);
let o = new Map();
function p(e) {
    let t = o.get(e) ?? { stopTimer: new l.Ep(), launchRequestId: void 0 };
    (o.set(e, t),
        t.stopTimer.start(5e3, () => {
            (o.delete(e),
                null != t.launchRequestId && c.A.getFrame(e)?.launchRequestId === t.launchRequestId && (0, i.r)(e));
        }));
}
function A(e) {
    (o.get(e)?.stopTimer.stop(), o.delete(e));
}
function f(e) {
    let t = r.A.getChannel(e);
    if (null == t) return;
    let n = t.application_id,
        l = t.type === h.rbe.GUILD_APP ? (0, d.HD)(t) : null;
    if (null == n || null == l) return;
    let i = (0, d.VA)(n, l);
    if (o.has(i)) return void p(i);
    if (null != c.A.getFrame(i) || !a.A.can(h.xBc.VIEW_CHANNEL, t) || null == (0, u.Ay)(n)) return;
    (p(i), (0, s.launchFrame)({ applicationId: n, surface: l, showErrorModal: !1 }).catch(() => A(i)));
    let f = o.get(i);
    null != f && (f.launchRequestId = c.A.getFrame(i)?.launchRequestId);
}
function I(e) {
    return !!o.has(e) && (A(e), !0);
}
