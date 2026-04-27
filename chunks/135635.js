n.d(t, { A: () => A });
var i = n(64700),
    l = n(960027),
    s = n(978940),
    a = n(17928),
    o = n(661531),
    r = n(387755),
    d = n(313961),
    c = n(325909),
    u = n(290863),
    h = n(994500),
    p = n(806931),
    _ = n(818348),
    g = n(985018);
function A(e) {
    let { user: t, channel: n, location: A } = e,
        f = (0, c.oP)(t, A, n.id),
        m = (0, c.lQ)(t, A, n),
        E = t.bot || t.system || t.isProvisional,
        y = (0, a.bG)([d.A], () => d.A.getParticipant(n.id, t.id)),
        S = null == y,
        x = null != y && y.type === p.lp.USER && y.ringing,
        C = (0, a.bG)([h.A], () => h.A.isFriend(t.id)),
        v = (0, a.bG)([u.A], () => u.A.getStatus(t.id) === _.cl.DND && n?.guild_id != null),
        I = !f && (!m || E),
        N = (0, i.useCallback)(() => {
            if (f) {
                if (S) return void r.A.ring(n.id, [t.id], A);
                x && r.A.stopRinging(n.id, [t.id]);
            }
        }, [S, x, f, A, n.id, t.id]);
    return {
        iconColor: x ? o.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: x ? l.z : s._,
        tooltipText: C
            ? v
                ? g.intl.string(g.t.jaNpQH)
                : S
                  ? g.intl.string(g.t["3Hv9qQ"])
                  : x
                    ? g.intl.string(g.t.ygslb0)
                    : null
            : g.intl.string(g.t.TGqF9g),
        disabled: !f,
        shouldHideButton: I,
        onClick: N,
    };
}
