r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(442837),
    u = r(481060),
    c = r(493683),
    d = r(447543),
    f = r(904245),
    p = r(159300),
    h = r(592125),
    _ = r(984933),
    m = r(430824),
    g = r(496675),
    E = r(699516),
    v = r(771845),
    y = r(594174),
    b = r(981631),
    I = r(388032);
let T = 'max_uses',
    S = 'User Invite Context Menu',
    A = 'context_menu';
function C(e, n) {
    c.Z.ensurePrivateChannel(e).then((e) => {
        null != h.Z.getChannel(e) && f.Z.sendInvite(e, n, A, null);
    });
}
function N(e) {
    let { user: n, guildId: r, onAction: i } = e,
        a = (0, l.e7)([y.default], () => y.default.getCurrentUser(), []),
        c = (0, l.Wu)(
            [v.ZP, m.Z, g.Z],
            () => {
                let e = v.ZP.getFlattenedGuildIds(),
                    n = [];
                return (
                    e.forEach((e) => {
                        let i = m.Z.getGuild(e);
                        null != i && (0, p.b)(g.Z, i) && i.id !== r && n.push(i);
                    }),
                    n
                );
            },
            [r]
        ),
        [f, h] = s.useState({});
    function A(e, n) {
        let r = _.ZP.getDefaultChannel(e.id, !0, b.Plq.CREATE_INSTANT_INVITE);
        if (null != r) {
            if (
                (h({
                    ...f,
                    [e.id]: !0
                }),
                !g.Z.can(b.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode)
            ) {
                C(n, e.vanityURLCode);
                return;
            }
            d.Z.createInvite(
                r.id,
                {
                    [T]: 1,
                    unique: !0
                },
                S
            ).then((e) => C(n, e.code));
        }
    }
    return (null == a ? void 0 : a.id) === n.id || n.bot || 0 === c.length || E.Z.isBlockedOrIgnored(n.id)
        ? null
        : (0, o.jsx)(u.MenuItem, {
              id: 'invite-to-server',
              label: I.intl.string(I.t.Sd8Ix8),
              children: c.map((e) =>
                  f[e.id]
                      ? (0, o.jsx)(
                            u.MenuItem,
                            {
                                id: e.id,
                                disabled: !0,
                                label: I.intl.string(I.t.PuLLzM)
                            },
                            e.id
                        )
                      : (0, o.jsx)(
                            u.MenuItem,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == i || i(), A(e, n.id);
                                }
                            },
                            e.id
                        )
              )
          });
}
