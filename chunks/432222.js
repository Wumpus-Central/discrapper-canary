a.d(i, { A: () => j, w: () => E });
var t = a(64700),
    n = a(989349),
    l = a.n(n),
    s = a(17928),
    c = a(691540),
    r = a(857250),
    o = a(97483),
    p = a(720149),
    d = a(976860),
    u = a(74114),
    m = a(994500),
    f = a(58703),
    h = a(935208),
    g = a(330001),
    I = a(652215),
    x = a(381941),
    A = a(375708);
let E = "749054660769218631";
function j(e, i) {
    let [a, n] = t.useState(!1),
        j = t.useCallback(async () => {
            if (!a) {
                n(!0), (0, g.W)({ channelId: e.id, source: "DM Channel" }), (0, d.pX)(I.BVt.CHANNEL(I.ME, e.id));
                try {
                    await p.A.sendStickers(e.id, [E], "", { location: x.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok || 429 !== e.status || (0, c.P0)((0, r.o)(A.intl.string(A.t.Whhv4w), o.Ck.FAILURE));
                }
                n(!1);
            }
        }, [e.id, a]),
        v = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        w = v ? e.getRecipientId() : null,
        C = (0, s.bG)([m.A], () => null != w && m.A.isFriend(w)),
        N = (0, s.bG)([m.A], () => null != w && m.A.isIgnored(w)),
        R = h.default.extractTimestamp(e.id),
        b = (0, f.v0)(l()(), l()(R), 18144e5),
        P = (0, u.l)(e.id);
    return { waveShouldShow: v && C && !N && null == i && b && null == P, wavePressed: j };
}
