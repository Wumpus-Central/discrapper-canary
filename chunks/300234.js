var a = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    i = n(239091),
    o = n(493773),
    c = n(884338),
    d = n(592125),
    u = n(720202),
    h = n(594174),
    m = n(260483),
    g = n(314208),
    f = n(124368),
    x = n(316931);
function v(e) {
    let { channel: t } = e,
        n = (0, r.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getMemberIdsPreview(t.id)) && void 0 !== e ? e : [];
        }),
        l = (0, r.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getMemberCount(t.id)) && void 0 !== e ? e : 0;
        }),
        s = (0, r.Wu)([h.default], () => n.map((e) => h.default.getUser(e)));
    return ((0, o.Z)(() => {
        n.filter((e, t) => null == s[t]).forEach((e) => {
            u.Z.requestMember(t.guild_id, e);
        });
    }),
    0 === n.length)
        ? null
        : (0, a.jsx)(c.Z, {
              className: x.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: s,
              count: l,
              max: f.yX
          });
}
t.Z = l.memo(function (e) {
    let { threadId: t, goToThread: l, showChannelName: o } = e,
        c = (0, r.e7)([d.Z], () => d.Z.getChannel(t)),
        u = (0, r.e7)([d.Z], () => d.Z.getChannel(c.parent_id));
    return (0, a.jsxs)(s.Clickable, {
        className: x.container,
        onClick: (e) => l(c, e.shiftKey),
        onContextMenu: (e) =>
            (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('75206')]).then(n.bind(n, 422200));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        channel: c
                    });
            }),
        children: [
            (0, a.jsxs)('div', {
                className: x.left,
                children: [
                    (0, a.jsxs)(s.Heading, {
                        className: x.threadNameLine,
                        variant: 'heading-md/semibold',
                        children: [
                            (0, a.jsx)('span', {
                                className: x.threadName,
                                children: c.name
                            }),
                            o && null != u
                                ? (0, a.jsx)('span', {
                                      className: x.parentName,
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
