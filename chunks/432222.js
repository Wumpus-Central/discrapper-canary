n.d(t, { A: () => b, w: () => I });
var a = n(64700),
    i = n(989349),
    l = n.n(i),
    r = n(311907),
    o = n(691540),
    s = n(857250),
    d = n(97483),
    c = n(843472),
    u = n(976860),
    _ = n(74114),
    p = n(994500),
    f = n(954571),
    A = n(405269),
    g = n(661191),
    h = n(652215),
    x = n(381941),
    m = n(985018);
let I = "749054660769218631";
function b(e, t) {
    let [n, i] = a.useState(!1),
        b = a.useCallback(async () => {
            if (!n) {
                i(!0), (0, u.pX)(h.BVt.CHANNEL(h.ME, e.id));
                try {
                    await c.A.sendStickers(e.id, [I], "", { location: x.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok || 429 !== e.status || (0, o.P0)((0, s.o)(m.intl.string(m.t.Whhv4w), d.Ck.FAILURE));
                }
                f.default.track(h.HAw.WAVE_CTA_CLICKED, { source: "DM Channel" }), i(!1);
            }
        }, [e.id, n]),
        v = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        C = v ? e.getRecipientId() : null,
        y = (0, r.bG)([p.A], () => null != C && p.A.isFriend(C)),
        P = (0, r.bG)([p.A], () => null != C && p.A.isIgnored(C)),
        S = g.default.extractTimestamp(e.id),
        E = (0, A.v0)(l()(), l()(S), 18144e5),
        T = (0, _.l)(e.id);
    return { waveShouldShow: v && y && !P && null == t && E && null == T, wavePressed: b };
}
