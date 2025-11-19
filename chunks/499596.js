t.d(n, { Z: () => g });
var l = t(54381);
t(473749);
var r = t(120356),
    i = t.n(r),
    s = t(28664),
    a = t(884338),
    c = t(933557),
    o = t(471445),
    u = t(5192),
    d = t(388032),
    m = t(339762);
function g(e) {
    let { channel: n, users: t, selected: r = !1 } = e,
        g = (0, c.ZP)(n),
        x = null;
    null != t &&
        t.length > 0 &&
        (x = (0, l.jsx)(a.ZP, {
            guildId: n.guild_id,
            className: m.voiceUserList,
            users: t,
            renderUser: (e) => {
                if (null == e || e === a.ag) return null;
                let t = u.ZP.getName(n.guild_id, n.id, e),
                    r = e.getAvatarURL(n.guild_id, 24);
                return (0, l.jsx)(s.u, {
                    asContainer: !0,
                    text: t,
                    children: (0, l.jsx)("img", {
                        src: null != r ? r : void 0,
                        "aria-label": e.username,
                        alt: "",
                        className: m.avatar,
                    }),
                });
            },
            renderMoreUsers: (e) => {
                let r = (function (e, n) {
                    let t = n.id,
                        l = n.guild_id;
                    return e.length <= 1
                        ? null
                        : 2 === e.length
                          ? d.intl.formatToPlainString(d.t.MlgLF2, {
                                nickname0: u.ZP.getName(l, t, e[0]),
                                nickname1: u.ZP.getName(l, t, e[1]),
                            })
                          : 3 === e.length
                            ? d.intl.formatToPlainString(d.t.sihixx, {
                                  nickname0: u.ZP.getName(l, t, e[0]),
                                  nickname1: u.ZP.getName(l, t, e[1]),
                                  nickname2: u.ZP.getName(l, t, e[2]),
                              })
                            : d.intl.formatToPlainString(d.t["824IXR"], {
                                  nickname0: u.ZP.getName(l, t, e[0]),
                                  nickname1: u.ZP.getName(l, t, e[1]),
                                  remainingCount: e.length - 2,
                              });
                })(t.slice(4), n);
                return (0, l.jsx)("div", {
                    children: (0, l.jsx)(s.u, {
                        asContainer: !0,
                        text: r,
                        children: (0, l.jsx)("div", {
                            className: m.userListOverflow,
                            children: e,
                        }),
                    }),
                });
            },
            max: 5,
            showUserPopout: !1,
        }));
    let h = (0, o.KS)(n);
    return (0, l.jsxs)("div", {
        className: i()(m.channelInfo, { [m.selected]: r }),
        children: [
            (0, l.jsx)(h, { className: m.channelIcon }),
            (0, l.jsx)("div", {
                className: m.channelName,
                children: g,
            }),
            x,
        ],
    });
}
