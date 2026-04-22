l.d(e, { A: () => g });
var n = l(64700),
    i = l(960027),
    s = l(978940),
    a = l(311907),
    r = l(827734),
    o = l(387755),
    c = l(313961),
    d = l(325909),
    u = l(290863),
    h = l(994500),
    p = l(806931),
    _ = l(818348),
    f = l(985018);
function g(t) {
    let { user: e, channel: l, location: g } = t,
        A = (0, d.oP)(e, g, l.id),
        m = (0, d.lQ)(e, g, l),
        v = e.bot || e.system || e.isProvisional,
        x = (0, a.bG)([c.A], () => c.A.getParticipant(l.id, e.id)),
        I = null == x,
        E = null != x && x.type === p.lp.USER && x.ringing,
        C = (0, a.bG)([h.A], () => h.A.isFriend(e.id)),
        N = (0, a.bG)([u.A], () => u.A.getStatus(e.id) === _.cl.DND && l?.guild_id != null),
        y = !A && (!m || v),
        w = (0, n.useCallback)(() => {
            if (A) {
                if (I) return void o.A.ring(l.id, [e.id], g);
                E && o.A.stopRinging(l.id, [e.id]);
            }
        }, [I, E, A, g, l.id, e.id]);
    return {
        iconColor: E ? r.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: E ? i.z : s._,
        tooltipText: C
            ? N
                ? f.intl.string(f.t.jaNpQH)
                : I
                  ? f.intl.string(f.t["3Hv9qQ"])
                  : E
                    ? f.intl.string(f.t.ygslb0)
                    : null
            : f.intl.string(f.t.TGqF9g),
        disabled: !A,
        shouldHideButton: y,
        onClick: w,
    };
}
