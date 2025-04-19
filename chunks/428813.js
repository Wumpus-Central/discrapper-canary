n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(270394),
    s = n(388610),
    a = n(430824),
    o = n(496675),
    c = n(246946),
    d = n(981631);
function u() {
    let e = (0, i.e7)([c.Z], () => c.Z.hideInstantInvites),
        { channel: t, guild: n } = (0, i.cj)(
            [s.Z, a.Z],
            () => {
                let { channel: e } = s.Z.getProps(),
                    t = null != e ? a.Z.getGuild(e.getGuildId()) : null;
                return {
                    channel: e,
                    guild: t
                };
            },
            []
        ),
        u = (0, i.e7)([o.Z], () => null != t && o.Z.can(d.Plq.CREATE_INSTANT_INVITE, t), [t]),
        { invites: h, loading: g } = (0, i.cj)([s.Z], () => s.Z.getInvites(), []);
    return (0, r.jsx)(l.Z, {
        invites: h,
        loading: g,
        guild: n,
        channel: t,
        canCreateInvites: u,
        hide: e
    });
}
