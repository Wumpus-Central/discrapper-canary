n.d(t, { A: () => E, w: () => x });
var l = n(64700),
    a = n(989349),
    r = n.n(a),
    i = n(311907),
    s = n(691540),
    o = n(857250),
    d = n(97483),
    u = n(843472),
    c = n(976860),
    A = n(74114),
    f = n(994500),
    _ = n(954571),
    p = n(405269),
    h = n(661191),
    g = n(652215),
    I = n(381941),
    m = n(985018);
let x = "749054660769218631";
function E(e, t) {
    let [n, a] = l.useState(!1),
        E = l.useCallback(async () => {
            if (!n) {
                a(!0), (0, c.pX)(g.BVt.CHANNEL(g.ME, e.id));
                try {
                    await u.A.sendStickers(e.id, [x], "", { location: I.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok || 429 !== e.status || (0, s.P0)((0, o.o)(m.intl.string(m.t.Whhv4w), d.Ck.FAILURE));
                }
                _.default.track(g.HAw.WAVE_CTA_CLICKED, { source: "DM Channel" }), a(!1);
            }
        }, [e.id, n]),
        v = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        b = v ? e.getRecipientId() : null,
        N = (0, i.bG)([f.A], () => null != b && f.A.isFriend(b)),
        P = (0, i.bG)([f.A], () => null != b && f.A.isIgnored(b)),
        y = h.default.extractTimestamp(e.id),
        C = (0, p.v0)(r()(), r()(y), 18144e5),
        S = (0, A.l)(e.id);
    return { waveShouldShow: v && N && !P && null == t && C && null == S, wavePressed: E };
}
