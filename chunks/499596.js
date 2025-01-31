t.d(n, { Z: () => x });
var l = t(200651);
t(192379);
var i = t(120356),
    s = t.n(i),
    a = t(481060),
    r = t(884338),
    o = t(933557),
    u = t(471445),
    c = t(5192),
    d = t(388032),
    m = t(381515);
function x(e) {
    let { channel: n, users: t, selected: i = !1 } = e,
        x = (0, o.ZP)(n),
        g = null;
    null != t &&
        t.length > 0 &&
        (g = (0, l.jsx)(r.Z, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: t,
            renderUser: (e) => {
                if (null == e) return null;
                let t = c.ZP.getName(n.guild_id, n.id, e),
                    i = e.getAvatarURL(n.guild_id, 24);
                return (0, l.jsx)(a.DY3, {
                    text: t,
                    children: (0, l.jsx)('img', {
                        src: null != i ? i : void 0,
                        'aria-label': e.username,
                        alt: '',
                        className: m.avatar
                    })
                });
            },
            renderMoreUsers: (e) => {
                let i = (function (e, n) {
                    let t = n.id,
                        l = n.guild_id;
                    return e.length <= 1
                        ? null
                        : 2 === e.length
                          ? d.intl.formatToPlainString(d.t.MlgLFx, {
                                nickname0: c.ZP.getName(l, t, e[0]),
                                nickname1: c.ZP.getName(l, t, e[1])
                            })
                          : 3 === e.length
                            ? d.intl.formatToPlainString(d.t.sihix8, {
                                  nickname0: c.ZP.getName(l, t, e[0]),
                                  nickname1: c.ZP.getName(l, t, e[1]),
                                  nickname2: c.ZP.getName(l, t, e[2])
                              })
                            : d.intl.formatToPlainString(d.t['824IXV'], {
                                  nickname0: c.ZP.getName(l, t, e[0]),
                                  nickname1: c.ZP.getName(l, t, e[1]),
                                  remainingCount: e.length - 2
                              });
                })(t.slice(4), n);
                return (0, l.jsx)('div', {
                    children: (0, l.jsx)(a.DY3, {
                        text: i,
                        children: (0, l.jsx)('div', {
                            className: m.userListOverflow,
                            children: e
                        })
                    })
                });
            },
            max: 5,
            showUserPopout: !1
        }));
    let h = (0, u.KS)(n);
    return (0, l.jsxs)('div', {
        className: s()(m.channelInfo, { [m.selected]: i }),
        children: [
            (0, l.jsx)(h, { className: m.channelIcon }),
            (0, l.jsx)('div', {
                className: m.channelName,
                children: x
            }),
            g
        ]
    });
}
