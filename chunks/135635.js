n.d(t, { A: () => g });
var l = n(64700),
    r = n(158954),
    a = n(311907),
    i = n(827734),
    s = n(387755),
    o = n(313961),
    E = n(325909),
    u = n(290863),
    c = n(994500),
    _ = n(806931),
    d = n(818348),
    A = n(985018);
function g(e) {
    let { user: t, channel: n, location: g } = e,
        T = (0, E.oP)(t, g, n.id),
        I = (0, E.lQ)(t, g, n),
        N = t.bot || t.system || t.isProvisional,
        h = (0, a.bG)([o.A], () => o.A.getParticipant(n.id, t.id)),
        m = null == h,
        S = null != h && h.type === _.lp.USER && h.ringing,
        G = (0, a.bG)([c.A], () => c.A.isFriend(t.id)),
        O = (0, a.bG)([u.A], () => u.A.getStatus(t.id) === d.cl.DND && n?.guild_id != null),
        R = !T && (!I || N),
        C = (0, l.useCallback)(() => {
            if (T) {
                if (m) return void s.A.ring(n.id, [t.id], g);
                S && s.A.stopRinging(n.id, [t.id]);
            }
        }, [m, S, T, g, n.id, t.id]);
    return {
        iconColor: S ? i.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: S ? r.zWQ : r._jp,
        tooltipText: G
            ? O
                ? A.intl.string(A.t.jaNpQH)
                : m
                  ? A.intl.string(A.t["3Hv9qQ"])
                  : S
                    ? A.intl.string(A.t.ygslb0)
                    : null
            : A.intl.string(A.t.TGqF9g),
        disabled: !T,
        shouldHideButton: R,
        onClick: C,
    };
}
