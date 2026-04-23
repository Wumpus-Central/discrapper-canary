s.d(t, { A: () => p });
var i = s(64700),
    l = s(960027),
    n = s(978940),
    a = s(17928),
    r = s(661531),
    o = s(387755),
    d = s(313961),
    c = s(325909),
    h = s(290863),
    _ = s(994500),
    A = s(806931),
    u = s(818348),
    g = s(985018);
function p(e) {
    let { user: t, channel: s, location: p } = e,
        v = (0, c.oP)(t, p, s.id),
        C = (0, c.lQ)(t, p, s),
        m = t.bot || t.system || t.isProvisional,
        b = (0, a.bG)([d.A], () => d.A.getParticipant(s.id, t.id)),
        x = null == b,
        w = null != b && b.type === A.lp.USER && b.ringing,
        E = (0, a.bG)([_.A], () => _.A.isFriend(t.id)),
        I = (0, a.bG)([h.A], () => h.A.getStatus(t.id) === u.cl.DND && s?.guild_id != null),
        N = !v && (!C || m),
        f = (0, i.useCallback)(() => {
            if (v) {
                if (x) return void o.A.ring(s.id, [t.id], p);
                w && o.A.stopRinging(s.id, [t.id]);
            }
        }, [x, w, v, p, s.id, t.id]);
    return {
        iconColor: w ? r.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: w ? l.z : n._,
        tooltipText: E
            ? I
                ? g.intl.string(g.t.jaNpQH)
                : x
                  ? g.intl.string(g.t["3Hv9qQ"])
                  : w
                    ? g.intl.string(g.t.ygslb0)
                    : null
            : g.intl.string(g.t.TGqF9g),
        disabled: !v,
        shouldHideButton: N,
        onClick: f,
    };
}
