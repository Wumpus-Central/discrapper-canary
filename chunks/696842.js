n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(284009),
    a = n.n(l),
    s = n(311907),
    r = n(821609),
    o = n(698441),
    c = n(520006),
    d = n(71393),
    u = n(576705),
    _ = n(652215),
    A = n(985018);
function p(e) {
    let {
            stream: t,
            applicationId: n,
            channel: l,
            exitFullScreen: p,
            appContext: h,
            analyticsLocation: g,
            className: m,
            size: x = "sm",
        } = e,
        f = l?.getGuildId(),
        C = l?.id,
        E = (0, s.bG)([d.A], () => (null != f ? d.A.getGuild(f) : null), [f]),
        j = (0, s.bG)([o.Ay], () => o.Ay.getActiveEventByChannel(C), [C]);
    if (!(null != E && null != l && u.A.can(_.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let b = A.intl.string(A.t.VINpSK);
    return (
        null != t ? (b = A.intl.string(A.t["6VQaqd"])) : null != n && (b = A.intl.string(A.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: m,
            children: (0, i.jsx)(r.$, {
                size: x,
                variant: "secondary",
                text: b,
                onClick: () => {
                    a()(null != E, "guild cannot be null"),
                        a()(null != l, "channel cannot be null"),
                        (0, c.X)({
                            guild: E,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: h,
                            exitFullScreen: p,
                            analyticsLocation: g,
                            guildScheduledEvent: j,
                            source: _.PE1.STAGE_CHANNEL,
                        });
                },
            }),
        })
    );
}
