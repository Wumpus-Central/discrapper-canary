i.d(t, { A: () => E, w: () => v });
var s = i(64700),
    n = i(989349),
    a = i.n(n),
    l = i(17928),
    d = i(691540),
    c = i(857250),
    r = i(97483),
    u = i(720149),
    o = i(976860),
    h = i(74114),
    p = i(994500),
    w = i(58703),
    A = i(935208),
    k = i(330001),
    b = i(652215),
    C = i(381941),
    S = i(985018);
let v = "749054660769218631";
function E(e, t) {
    let [i, n] = s.useState(!1),
        E = s.useCallback(async () => {
            if (!i) {
                n(!0), (0, k.W)({ channelId: e.id, source: "DM Channel" }), (0, o.pX)(b.BVt.CHANNEL(b.ME, e.id));
                try {
                    await u.A.sendStickers(e.id, [v], "", { location: C.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok || 429 !== e.status || (0, d.P0)((0, c.o)(S.intl.string(S.t.Whhv4w), r.Ck.FAILURE));
                }
                n(!1);
            }
        }, [e.id, i]),
        m = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        D = m ? e.getRecipientId() : null,
        I = (0, l.bG)([p.A], () => null != D && p.A.isFriend(D)),
        M = (0, l.bG)([p.A], () => null != D && p.A.isIgnored(D)),
        f = A.default.extractTimestamp(e.id),
        g = (0, w.v0)(a()(), a()(f), 18144e5),
        y = (0, h.l)(e.id);
    return { waveShouldShow: m && I && !M && null == t && g && null == y, wavePressed: E };
}
