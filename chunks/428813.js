n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(270394),
    a = n(388610),
    r = n(430824),
    o = n(496675),
    d = n(246946),
    c = n(981631);
function u() {
    let e = (0, l.e7)([d.Z], () => d.Z.hideInstantInvites),
        { channel: t, guild: n } = (0, l.cj)(
            [a.Z, r.Z],
            () => {
                let { channel: e } = a.Z.getProps(),
                    t = null != e ? r.Z.getGuild(e.getGuildId()) : null;
                return {
                    channel: e,
                    guild: t
                };
            },
            []
        ),
        u = (0, l.e7)([o.Z], () => null != t && o.Z.can(c.Plq.CREATE_INSTANT_INVITE, t), [t]),
        { invites: h, loading: m } = (0, l.cj)([a.Z], () => a.Z.getInvites(), []);
    return (0, i.jsx)(s.Z, {
        invites: h,
        loading: m,
        guild: n,
        channel: t,
        canCreateInvites: u,
        hide: e
    });
}
