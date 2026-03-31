n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(698441),
    c = n(520006),
    d = n(71393),
    u = n(576705),
    h = n(652215),
    A = n(985018);
function _(e) {
    let {
            stream: t,
            applicationId: n,
            channel: l,
            exitFullScreen: _,
            appContext: m,
            analyticsLocation: g,
            className: p,
            size: f = "sm",
        } = e,
        x = l?.getGuildId(),
        E = l?.id,
        I = (0, a.bG)([d.A], () => (null != x ? d.A.getGuild(x) : null), [x]),
        C = (0, a.bG)([o.Ay], () => o.Ay.getActiveEventByChannel(E), [E]);
    if (!(null != I && null != l && u.A.can(h.xBc.CREATE_INSTANT_INVITE, l))) return null;
    let N = A.intl.string(A.t.VINpSK);
    return (
        null != t ? (N = A.intl.string(A.t["6VQaqd"])) : null != n && (N = A.intl.string(A.t["OzOM/q"])),
        (0, i.jsx)("div", {
            className: p,
            children: (0, i.jsx)(r.Button, {
                size: f,
                variant: "secondary",
                text: N,
                onClick: () => {
                    s()(null != I, "guild cannot be null"),
                        s()(null != l, "channel cannot be null"),
                        (0, c.X)({
                            guild: I,
                            channel: l,
                            streamUserId: t?.ownerId,
                            applicationId: n,
                            appContext: m,
                            exitFullScreen: _,
                            analyticsLocation: g,
                            guildScheduledEvent: C,
                            source: h.PE1.STAGE_CHANNEL,
                        });
                },
            }),
        })
    );
}
