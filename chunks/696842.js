t.d(n, { A: () => m });
var i = t(477900);
t(582128);
var l = t(284009),
    s = t.n(l),
    a = t(17928),
    r = t(821609),
    o = t(698441),
    c = t(520006),
    d = t(71393),
    u = t(576705),
    A = t(652215),
    h = t(105292);
function m(e) {
    let {
            stream: n,
            applicationId: t,
            channel: l,
            exitFullScreen: m,
            appContext: g,
            analyticsLocation: x,
            className: C,
            size: f = "sm",
        } = e,
        p = l?.getGuildId(),
        E = l?.id,
        j = (0, a.bG)([d.A], () => (null != p ? d.A.getGuild(p) : null), [p]),
        I = (0, a.bG)([o.Ay], () => o.Ay.getActiveEventByChannel(E), [E]);
    if (!(null != j && null != l && u.A.can(A.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let v = h.intl.string(h.t.VINpSK);
    return (
        null != n ? (v = h.intl.string(h.t["6VQaqd"])) : null != t && (v = h.intl.string(h.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: C,
            children: (0, i.jsx)(r.$, {
                size: f,
                variant: "secondary",
                text: v,
                onClick: () => {
                    (s()(null != j, "guild cannot be null"),
                        s()(null != l, "channel cannot be null"),
                        (0, c.X)({
                            guild: j,
                            channel: l,
                            streamUserId: n?.ownerId,
                            applicationId: t,
                            appContext: g,
                            exitFullScreen: m,
                            analyticsLocation: x,
                            guildScheduledEvent: I,
                            source: A.PE1.STAGE_CHANNEL,
                        }));
                },
            }),
        })
    );
}
