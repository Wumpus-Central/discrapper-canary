l.d(t, { P9: () => f, wY: () => g });
var n = l(451988),
    u = l(956518),
    r = l(323073),
    a = l(288254),
    s = l(734057),
    i = l(576705),
    c = l(494126),
    d = l(91242),
    o = l(457827),
    p = l(165610),
    h = l(652215);
let m = new Map();
function A(e) {
    let t = m.get(e) ?? { stopTimer: new n.Ep(), launchRequestId: void 0 };
    (m.set(e, t),
        t.stopTimer.start(5e3, () => {
            var t;
            let l;
            return (
                (t = e),
                void (
                    null != (l = m.get(t)) &&
                    (l.stopTimer.stop(),
                    m.delete(t),
                    null != l.launchRequestId && d.A.getFrame(t)?.launchRequestId === l.launchRequestId && (0, o.r)(t))
                )
            );
        }));
}
function I(e) {
    (m.get(e)?.stopTimer.stop(), m.delete(e));
}
function f(e) {
    let t,
        l,
        n,
        o =
            ((t = s.A.getChannel(e)),
            (l = t?.application_id),
            (n = t?.type === h.rbe.GUILD_APP ? (0, p.HD)(t) : null),
            null == t || null == l || null == n
                ? null
                : { channel: t, applicationId: l, surface: n, frameId: (0, p.VA)(l, n) });
    if (null == o) return;
    let { channel: f, applicationId: g, surface: q, frameId: R } = o;
    if (m.has(R)) return void A(R);
    if (
        null != d.A.getFrame(R) ||
        !i.A.can(h.xBc.VIEW_CHANNEL, f) ||
        (0, r.qR)(f) ||
        (0, a.BV)(f) ||
        null == (0, u.Ay)(g)
    )
        return;
    (A(R), (0, c.launchFrame)({ applicationId: g, surface: q, showErrorModal: !1 }).catch(() => I(R)));
    let w = m.get(R);
    null != w && (w.launchRequestId = d.A.getFrame(R)?.launchRequestId);
}
function g(e) {
    return !!m.has(e) && (I(e), !0);
}
