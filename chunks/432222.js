n.d(t, { A: () => b, w: () => I });
var a = n(64700),
    i = n(989349),
    l = n.n(i),
    r = n(17928),
    o = n(691540),
    s = n(857250),
    d = n(97483),
    c = n(720149),
    u = n(976860),
    _ = n(74114),
    f = n(994500),
    p = n(954571),
    A = n(58703),
    g = n(935208),
    h = n(652215),
    m = n(381941),
    x = n(985018);
let I = "749054660769218631";
function b(e, t) {
    let [n, i] = a.useState(!1),
        b = a.useCallback(async () => {
            if (!n) {
                i(!0), (0, u.pX)(h.BVt.CHANNEL(h.ME, e.id));
                try {
                    await c.A.sendStickers(e.id, [I], "", { location: m.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok || 429 !== e.status || (0, o.P0)((0, s.o)(x.intl.string(x.t.Whhv4w), d.Ck.FAILURE));
                }
                p.default.track(h.HAw.WAVE_CTA_CLICKED, { source: "DM Channel" }), i(!1);
            }
        }, [e.id, n]),
        v = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        C = v ? e.getRecipientId() : null,
        y = (0, r.bG)([f.A], () => null != C && f.A.isFriend(C)),
        P = (0, r.bG)([f.A], () => null != C && f.A.isIgnored(C)),
        E = g.default.extractTimestamp(e.id),
        S = (0, A.v0)(l()(), l()(E), 18144e5),
        T = (0, _.l)(e.id);
    return { waveShouldShow: v && y && !P && null == t && S && null == T, wavePressed: b };
}
