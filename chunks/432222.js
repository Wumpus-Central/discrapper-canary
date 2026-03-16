"use strict";
n.d(t, { A: () => I, w: () => A });
var r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    l = n(843472),
    u = n(976860),
    c = n(74114),
    d = n(994500),
    _ = n(954571),
    f = n(405269),
    p = n(661191),
    h = n(652215),
    m = n(381941),
    E = n(985018);
let g = 18144e5,
    A = "749054660769218631";
function I(e, t) {
    let [n, i] = r.useState(!1),
        I = r.useCallback(async () => {
            if (!n) {
                i(!0), (0, u.pX)(h.BVt.CHANNEL(h.ME, e.id));
                try {
                    await l.A.sendStickers(e.id, [A], "", { location: m.Hx.SEND_WAVE });
                } catch (e) {
                    e.ok ||
                        429 !== e.status ||
                        (0, o.showToast)((0, o.createToast)(E.intl.string(E.t.Whhv4w), o.ToastType.FAILURE));
                }
                _.default.track(h.HAw.WAVE_CTA_CLICKED, { source: "DM Channel" }), i(!1);
            }
        }, [e.id, n]),
        T = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        S = T ? e.getRecipientId() : null,
        y = (0, a.bG)([d.A], () => null != S && d.A.isFriend(S)),
        v = (0, a.bG)([d.A], () => null != S && d.A.isIgnored(S)),
        N = p.default.extractTimestamp(e.id),
        C = (0, f.v0)(s()(), s()(N), g),
        R = (0, c.l)(e.id);
    return { waveShouldShow: T && y && !v && null == t && C && null == R, wavePressed: I };
}
