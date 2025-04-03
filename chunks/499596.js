n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(884338),
    a = n(933557),
    c = n(471445),
    d = n(5192),
    u = n(388032),
    f = n(304118);
function m(e) {
    let { channel: t, users: n, selected: l = !1 } = e,
        m = (0, a.ZP)(t),
        h = null;
    null != n &&
        n.length > 0 &&
        (h = (0, r.jsx)(o.Z, {
            guildId: t.guild_id,
            className: f.voiceUserList,
            users: n,
            renderUser: (e) => {
                if (null == e) return null;
                let n = d.ZP.getName(t.guild_id, t.id, e),
                    l = e.getAvatarURL(t.guild_id, 24);
                return (0, r.jsx)(s.DY3, {
                    text: n,
                    children: (0, r.jsx)('img', {
                        src: null != l ? l : void 0,
                        'aria-label': e.username,
                        alt: '',
                        className: f.avatar
                    })
                });
            },
            renderMoreUsers: (e) => {
                let l = (function (e, t) {
                    let n = t.id,
                        r = t.guild_id;
                    return e.length <= 1
                        ? null
                        : 2 === e.length
                          ? u.NW.formatToPlainString(u.t.MlgLFx, {
                                nickname0: d.ZP.getName(r, n, e[0]),
                                nickname1: d.ZP.getName(r, n, e[1])
                            })
                          : 3 === e.length
                            ? u.NW.formatToPlainString(u.t.sihix8, {
                                  nickname0: d.ZP.getName(r, n, e[0]),
                                  nickname1: d.ZP.getName(r, n, e[1]),
                                  nickname2: d.ZP.getName(r, n, e[2])
                              })
                            : u.NW.formatToPlainString(u.t['824IXV'], {
                                  nickname0: d.ZP.getName(r, n, e[0]),
                                  nickname1: d.ZP.getName(r, n, e[1]),
                                  remainingCount: e.length - 2
                              });
                })(n.slice(4), t);
                return (0, r.jsx)('div', {
                    children: (0, r.jsx)(s.DY3, {
                        text: l,
                        children: (0, r.jsx)('div', {
                            className: f.userListOverflow,
                            children: e
                        })
                    })
                });
            },
            max: 5,
            showUserPopout: !1
        }));
    let x = (0, c.KS)(t);
    return (0, r.jsxs)('div', {
        className: i()(f.channelInfo, { [f.selected]: l }),
        children: [
            (0, r.jsx)(x, { className: f.channelIcon }),
            (0, r.jsx)('div', {
                className: f.channelName,
                children: m
            }),
            h
        ]
    });
}
