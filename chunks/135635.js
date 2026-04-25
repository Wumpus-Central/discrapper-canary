"use strict";
l.d(t, { A: () => x });
var n = l(64700),
    i = l(960027),
    s = l(978940),
    a = l(17928),
    r = l(661531),
    o = l(387755),
    d = l(313961),
    c = l(325909),
    u = l(290863),
    h = l(994500),
    g = l(806931),
    m = l(818348),
    p = l(985018);
function x(e) {
    let { user: t, channel: l, location: x } = e,
        _ = (0, c.oP)(t, x, l.id),
        A = (0, c.lQ)(t, x, l),
        f = t.bot || t.system || t.isProvisional,
        b = (0, a.bG)([d.A], () => d.A.getParticipant(l.id, t.id)),
        C = null == b,
        S = null != b && b.type === g.lp.USER && b.ringing,
        v = (0, a.bG)([h.A], () => h.A.isFriend(t.id)),
        N = (0, a.bG)([u.A], () => u.A.getStatus(t.id) === m.cl.DND && l?.guild_id != null),
        j = !_ && (!A || f),
        E = (0, n.useCallback)(() => {
            if (_) {
                if (C) return void o.A.ring(l.id, [t.id], x);
                S && o.A.stopRinging(l.id, [t.id]);
            }
        }, [C, S, _, x, l.id, t.id]);
    return {
        iconColor: S ? r.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: S ? i.z : s._,
        tooltipText: v
            ? N
                ? p.intl.string(p.t.jaNpQH)
                : C
                  ? p.intl.string(p.t["3Hv9qQ"])
                  : S
                    ? p.intl.string(p.t.ygslb0)
                    : null
            : p.intl.string(p.t.TGqF9g),
        disabled: !_,
        shouldHideButton: j,
        onClick: E,
    };
}
