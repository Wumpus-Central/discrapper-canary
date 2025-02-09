n.d(t, { Z: () => S }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(493683),
    l = n(447543),
    u = n(904245),
    c = n(159300),
    d = n(592125),
    f = n(984933),
    _ = n(430824),
    p = n(496675),
    h = n(699516),
    m = n(771845),
    g = n(594174),
    E = n(981631),
    v = n(388032);
let y = 'max_uses',
    I = 'User Invite Context Menu',
    T = 'context_menu';
function b(e, t) {
    o.Z.ensurePrivateChannel(e).then((e) => {
        null != d.Z.getChannel(e) && u.Z.sendInvite(e, t, T, null);
    });
}
function S(e) {
    let { user: t, guildId: n, onAction: o } = e,
        u = (0, a.e7)([g.default], () => g.default.getCurrentUser(), []),
        d = (0, a.Wu)(
            [m.ZP, _.Z, p.Z],
            () => {
                let e = m.ZP.getFlattenedGuildIds(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let i = _.Z.getGuild(e);
                        null != i && (0, c.b)(p.Z, i) && i.id !== n && t.push(i);
                    }),
                    t
                );
            },
            [n]
        ),
        [T, S] = r.useState({});
    function A(e, t) {
        let n = f.ZP.getDefaultChannel(e.id, !0, E.Plq.CREATE_INSTANT_INVITE);
        if (null != n) {
            if (
                (S({
                    ...T,
                    [e.id]: !0
                }),
                !p.Z.can(E.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
            ) {
                b(t, e.vanityURLCode);
                return;
            }
            l.Z.createInvite(
                n.id,
                {
                    [y]: 1,
                    unique: !0
                },
                I
            ).then((e) => b(t, e.code));
        }
    }
    return (null == u ? void 0 : u.id) === t.id || t.bot || 0 === d.length || h.Z.isBlockedOrIgnored(t.id)
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'invite-to-server',
              label: v.intl.string(v.t.Sd8Ix8),
              children: d.map((e) =>
                  T[e.id]
                      ? (0, i.jsx)(
                            s.sNh,
                            {
                                id: e.id,
                                disabled: !0,
                                label: v.intl.string(v.t.PuLLzM)
                            },
                            e.id
                        )
                      : (0, i.jsx)(
                            s.sNh,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == o || o(), A(e, t.id);
                                }
                            },
                            e.id
                        )
              )
          });
}
