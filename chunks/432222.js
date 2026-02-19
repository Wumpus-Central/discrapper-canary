l.d(t, { A: () => S, w: () => h });
var s = l(64700),
    n = l(989349),
    i = l.n(n),
    a = l(311907),
    r = l(397927),
    o = l(843472),
    u = l(976860),
    c = l(74114),
    d = l(994500),
    m = l(954571),
    A = l(405269),
    x = l(661191),
    p = l(652215),
    E = l(381941),
    f = l(985018);
let h = "749054660769218631";
function S(e, t) {
    let [l, n] = s.useState(!1),
        S = s.useCallback(async () => {
            if (!l) {
                n(!0), (0, u.pX)(p.BVt.CHANNEL(p.ME, e.id));
                try {
                    await o.A.sendStickers(e.id, [h], "", { location: E.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok ||
                        429 !== e.status ||
                        (0, r.showToast)((0, r.createToast)(f.intl.string(f.t.Whhv4w), r.ToastType.FAILURE));
                }
                m.default.track(p.HAw.WAVE_CTA_CLICKED, { source: "DM Channel" }), n(!1);
            }
        }, [e.id, l]),
        N = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        T = N ? e.getRecipientId() : null,
        C = (0, a.bG)([d.A], () => null != T && d.A.isFriend(T)),
        v = (0, a.bG)([d.A], () => null != T && d.A.isIgnored(T)),
        _ = x.default.extractTimestamp(e.id),
        g = (0, A.v0)(i()(), i()(_), 18144e5),
        j = (0, c.l)(e.id);
    return { waveShouldShow: N && C && !v && null == t && g && null == j, wavePressed: S };
}
