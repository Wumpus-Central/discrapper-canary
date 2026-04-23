n.d(t, { A: () => h });
var l = n(64700),
    i = n(960027),
    r = n(978940),
    E = n(17928),
    a = n(661531),
    u = n(387755),
    c = n(313961),
    o = n(325909),
    s = n(290863),
    d = n(994500),
    _ = n(806931),
    S = n(818348),
    C = n(985018);
function h(e) {
    let { user: t, channel: n, location: h } = e,
        A = (0, o.oP)(t, h, n.id),
        I = (0, o.lQ)(t, h, n),
        N = t.bot || t.system || t.isProvisional,
        g = (0, E.bG)([c.A], () => c.A.getParticipant(n.id, t.id)),
        R = null == g,
        L = null != g && g.type === _.lp.USER && g.ringing,
        f = (0, E.bG)([d.A], () => d.A.isFriend(t.id)),
        M = (0, E.bG)([s.A], () => s.A.getStatus(t.id) === S.cl.DND && n?.guild_id != null),
        p = !A && (!I || N),
        O = (0, l.useCallback)(() => {
            if (A) {
                if (R) return void u.A.ring(n.id, [t.id], h);
                L && u.A.stopRinging(n.id, [t.id]);
            }
        }, [R, L, A, h, n.id, t.id]);
    return {
        iconColor: L ? a.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: L ? i.z : r._,
        tooltipText: f
            ? M
                ? C.intl.string(C.t.jaNpQH)
                : R
                  ? C.intl.string(C.t["3Hv9qQ"])
                  : L
                    ? C.intl.string(C.t.ygslb0)
                    : null
            : C.intl.string(C.t.TGqF9g),
        disabled: !A,
        shouldHideButton: p,
        onClick: O,
    };
}
