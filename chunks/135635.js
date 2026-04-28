t.d(n, { A: () => h });
var e = t(64700),
    l = t(960027),
    s = t(978940),
    d = t(17928),
    r = t(661531),
    a = t(387755),
    u = t(313961),
    A = t(325909),
    c = t(290863),
    o = t(994500),
    g = t(806931),
    p = t(818348),
    v = t(985018);
function h(i) {
    let { user: n, channel: t, location: h } = i,
        C = (0, A.oP)(n, h, t.id),
        _ = (0, A.lQ)(n, h, t),
        b = n.bot || n.system || n.isProvisional,
        E = (0, d.bG)([u.A], () => u.A.getParticipant(t.id, n.id)),
        I = null == E,
        N = null != E && E.type === g.lp.USER && E.ringing,
        R = (0, d.bG)([o.A], () => o.A.isFriend(n.id)),
        k = (0, d.bG)([c.A], () => c.A.getStatus(n.id) === p.cl.DND && t?.guild_id != null),
        y = !C && (!_ || b),
        D = (0, e.useCallback)(() => {
            if (C) {
                if (I) return void a.A.ring(t.id, [n.id], h);
                N && a.A.stopRinging(t.id, [n.id]);
            }
        }, [I, N, C, h, t.id, n.id]);
    return {
        iconColor: N ? r.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: N ? l.z : s._,
        tooltipText: R
            ? k
                ? v.intl.string(v.t.jaNpQH)
                : I
                  ? v.intl.string(v.t["3Hv9qQ"])
                  : N
                    ? v.intl.string(v.t.ygslb0)
                    : null
            : v.intl.string(v.t.TGqF9g),
        disabled: !C,
        shouldHideButton: y,
        onClick: D,
    };
}
