l.d(t, { P9: () => A, wY: () => I });
var n = l(451988),
    u = l(956518),
    r = l(734057),
    a = l(576705),
    s = l(494126),
    i = l(91242),
    c = l(457827),
    d = l(165610),
    o = l(652215);
let p = new Map();
function h(e) {
    let t = p.get(e) ?? { stopTimer: new n.Ep(), launchRequestId: void 0 };
    (p.set(e, t),
        t.stopTimer.start(5e3, () => {
            var t;
            let l;
            return (
                (t = e),
                void (
                    null != (l = p.get(t)) &&
                    (l.stopTimer.stop(),
                    p.delete(t),
                    null != l.launchRequestId && i.A.getFrame(t)?.launchRequestId === l.launchRequestId && (0, c.r)(t))
                )
            );
        }));
}
function m(e) {
    (p.get(e)?.stopTimer.stop(), p.delete(e));
}
function A(e) {
    let t,
        l,
        n,
        c =
            ((t = r.A.getChannel(e)),
            (l = t?.application_id),
            (n = t?.type === o.rbe.GUILD_APP ? (0, d.HD)(t) : null),
            null == t || null == l || null == n
                ? null
                : { channel: t, applicationId: l, surface: n, frameId: (0, d.VA)(l, n) });
    if (null == c) return;
    let { channel: A, applicationId: I, surface: f, frameId: g } = c;
    if (p.has(g)) return void h(g);
    if (null != i.A.getFrame(g) || !a.A.can(o.xBc.VIEW_CHANNEL, A) || null == (0, u.Ay)(I)) return;
    (h(g), (0, s.launchFrame)({ applicationId: I, surface: f, showErrorModal: !1 }).catch(() => m(g)));
    let q = p.get(g);
    null != q && (q.launchRequestId = i.A.getFrame(g)?.launchRequestId);
}
function I(e) {
    return !!p.has(e) && (m(e), !0);
}
