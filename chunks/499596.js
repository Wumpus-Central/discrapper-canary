l.d(n, { Z: () => x });
var t = l(200651);
l(192379);
var i = l(120356),
    s = l.n(i),
    a = l(481060),
    r = l(884338),
    o = l(933557),
    u = l(471445),
    c = l(5192),
    d = l(388032),
    m = l(484810);
function x(e) {
    let { channel: n, users: l, selected: i = !1 } = e,
        x = (0, o.ZP)(n),
        h = null;
    null != l &&
        l.length > 0 &&
        (h = (0, t.jsx)(r.Z, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: l,
            renderUser: (e) => {
                if (null == e) return null;
                let l = c.ZP.getName(n.guild_id, n.id, e),
                    i = e.getAvatarURL(n.guild_id, 24);
                return (0, t.jsx)(a.DY3, {
                    text: l,
                    children: (0, t.jsx)('img', {
                        src: null != i ? i : void 0,
                        'aria-label': e.username,
                        alt: '',
                        className: m.avatar
                    })
                });
            },
            renderMoreUsers: (e) => {
                let i = (function (e, n) {
                    let l = n.id,
                        t = n.guild_id;
                    return e.length <= 1
                        ? null
                        : 2 === e.length
                          ? d.intl.formatToPlainString(d.t.MlgLFx, {
                                nickname0: c.ZP.getName(t, l, e[0]),
                                nickname1: c.ZP.getName(t, l, e[1])
                            })
                          : 3 === e.length
                            ? d.intl.formatToPlainString(d.t.sihix8, {
                                  nickname0: c.ZP.getName(t, l, e[0]),
                                  nickname1: c.ZP.getName(t, l, e[1]),
                                  nickname2: c.ZP.getName(t, l, e[2])
                              })
                            : d.intl.formatToPlainString(d.t['824IXV'], {
                                  nickname0: c.ZP.getName(t, l, e[0]),
                                  nickname1: c.ZP.getName(t, l, e[1]),
                                  remainingCount: e.length - 2
                              });
                })(l.slice(4), n);
                return (0, t.jsx)('div', {
                    children: (0, t.jsx)(a.DY3, {
                        text: i,
                        children: (0, t.jsx)('div', {
                            className: m.userListOverflow,
                            children: e
                        })
                    })
                });
            },
            max: 5,
            showUserPopout: !1
        }));
    let g = (0, u.KS)(n);
    return (0, t.jsxs)('div', {
        className: s()(m.channelInfo, { [m.selected]: i }),
        children: [
            (0, t.jsx)(g, { className: m.channelIcon }),
            (0, t.jsx)('div', {
                className: m.channelName,
                children: x
            }),
            h
        ]
    });
}
