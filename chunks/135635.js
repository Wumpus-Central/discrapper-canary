n.d(t, { A: () => d });
var l = n(64700),
    r = n(158954),
    a = n(311907),
    i = n(827734),
    s = n(387755),
    o = n(313961),
    E = n(325909),
    u = n(994500),
    c = n(806931),
    _ = n(985018);
function d(e) {
    let { user: t, channel: n, location: d } = e,
        A = (0, E.oP)(t, d, n.id),
        g = (0, E.lQ)(t, d, n),
        T = t.bot || t.system || t.isProvisional,
        I = (0, a.bG)([o.A], () => o.A.getParticipant(n.id, t.id)),
        N = null == I,
        h = null != I && I.type === c.lp.USER && I.ringing,
        m = (0, a.bG)([u.A], () => u.A.isFriend(t.id)),
        S = !A && (!g || T),
        G = (0, l.useCallback)(() => {
            if (A) {
                if (N) return void s.A.ring(n.id, [t.id], d);
                h && s.A.stopRinging(n.id, [t.id]);
            }
        }, [N, h, A, d, n.id, t.id]);
    return {
        iconColor: h ? i.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: h ? r.zWQ : r._jp,
        tooltipText: m
            ? N
                ? _.intl.string(_.t["3Hv9qQ"])
                : h
                  ? _.intl.string(_.t.ygslb0)
                  : null
            : _.intl.string(_.t.TGqF9g),
        disabled: !A,
        shouldHideButton: S,
        onClick: G,
    };
}
