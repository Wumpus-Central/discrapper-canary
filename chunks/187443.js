n.d(e, { u: () => s }), n(539854), n(647438);
var l = n(481060),
    i = n(285784),
    r = n(388032);
function s(t) {
    let {
            isActive: e,
            isUserLurking: n,
            rsvped: s,
            onRsvpClick: a,
            onGoToGuildClick: u,
            isDetailsView: c = !1,
            isMember: o,
            onJoinGuildClick: d,
            guildName: h,
            onInviteClick: g,
            canInvite: m,
            isChannelPublic: p,
        } = t,
        v = (0, i.Ns)({
            onInviteClick: g,
            canInvite: m,
            isChannelPublic: p,
        }),
        f = [];
    if ((o && null != v && f.push(v), o && !n && !e && null != a)) {
        let t = s && !n;
        f.push({
            variant: t ? "active" : "secondary",
            size: "sm",
            icon: t ? l.dz2 : l.Dkj,
            text: r.intl.string(r.t.DlcqlZ),
            onClick: a,
            disabled: n,
        });
    }
    return (
        o &&
            !n &&
            (!c || e) &&
            f.push({
                variant: "primary",
                size: "sm",
                onClick: u,
                text: r.intl.string(r.t["N+TB5u"]),
            }),
        o ||
            f.push({
                variant: "primary",
                size: "sm",
                onClick: d,
                text: r.intl.format(r.t["4BiO8f"], { guildName: h }),
            }),
        f
    );
}
