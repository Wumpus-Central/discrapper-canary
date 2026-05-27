"use strict";
n.d(t, { A: () => T, w: () => I });
var i = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(17928),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(720149),
    d = n(976860),
    _ = n(74114),
    h = n(994500),
    f = n(58703),
    p = n(935208),
    E = n(330001),
    m = n(652215),
    g = n(381941),
    A = n(375708);
let I = "749054660769218631";
function T(e, t) {
    let [n, r] = i.useState(!1),
        T = i.useCallback(async () => {
            if (!n) {
                r(!0), (0, E.W)({ channelId: e.id, source: "DM Channel" }), (0, d.pX)(m.BVt.CHANNEL(m.ME, e.id));
                try {
                    await c.A.sendStickers(e.id, [I], "", { location: g.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok || 429 !== e.status || (0, o.P0)((0, l.o)(A.intl.string(A.t.Whhv4w), u.Ck.FAILURE));
                }
                r(!1);
            }
        }, [e.id, n]),
        S = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        y = S ? e.getRecipientId() : null,
        N = (0, a.bG)([h.A], () => null != y && h.A.isFriend(y)),
        v = (0, a.bG)([h.A], () => null != y && h.A.isIgnored(y)),
        C = p.default.extractTimestamp(e.id),
        R = (0, f.v0)(s()(), s()(C), 18144e5),
        O = (0, _.l)(e.id);
    return { waveShouldShow: S && N && !v && null == t && R && null == O, wavePressed: T };
}
