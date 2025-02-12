n.d(t, { Z: () => Z });
var a = n(200651),
    l = n(192379),
    s = n(442837),
    r = n(481060),
    i = n(239091),
    o = n(493773),
    c = n(884338),
    d = n(592125),
    u = n(720202),
    h = n(594174),
    m = n(260483),
    g = n(314208),
    x = n(124368),
    f = n(205482);
let Z = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: o } = e,
        c = (0, s.e7)([d.Z], () => d.Z.getChannel(t)),
        u = (0, s.e7)([d.Z], () => d.Z.getChannel(c.parent_id));
    return (0, a.jsxs)(r.P3F, {
        className: f.container,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('38902'), n.e('40157')]).then(n.bind(n, 422200));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        channel: c
                    });
            }),
        children: [
            (0, a.jsxs)('div', {
                className: f.left,
                children: [
                    (0, a.jsxs)(r.X6q, {
                        className: f.threadNameLine,
                        variant: 'heading-md/semibold',
                        children: [
                            (0, a.jsx)('span', {
                                className: f.threadName,
                                children: c.name
                            }),
                            o && null != u
                                ? (0, a.jsx)('span', {
                                      className: f.parentName,
                                      children: '#'.concat(u.name)
                                  })
                                : null
                        ]
                    }),
                    (0, g.Z)(c)
                ]
            }),
            (0, a.jsx)(v, { channel: c })
        ]
    });
});
function v(e) {
    let { channel: t } = e,
        n = (0, s.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getMemberIdsPreview(t.id)) && void 0 !== e ? e : [];
        }),
        l = (0, s.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getMemberCount(t.id)) && void 0 !== e ? e : 0;
        }),
        r = (0, s.Wu)([h.default], () => n.map((e) => h.default.getUser(e)));
    return ((0, o.ZP)(() => {
        n.filter((e, t) => null == r[t]).forEach((e) => {
            u.Z.requestMember(t.guild_id, e);
        });
    }),
    0 === n.length)
        ? null
        : (0, a.jsx)(c.Z, {
              className: f.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: r,
              count: l,
              max: x.yX
          });
}
