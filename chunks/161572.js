n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(100527),
    o = n(522558),
    s = n(441623),
    l = n(718108),
    c = n(837411),
    u = n(705556),
    d = n(955418),
    f = n(155493);
function p(e) {
    let { user: t, guildId: n, channelId: p, onClose: _, appContext: m, disableAutoFocus: h = !1 } = e,
        g = (0, c.Z)(t.id, n),
        E = (0, o.i)(a.Z.USER_PROFILE_POPOUT),
        b = (0, i.e7)([s.ZP], () => s.ZP.canShowProfilePopoutGiftIntents(t.id), [t.id]),
        y = E && b;
    return (0, r.jsxs)("div", {
        className: f.footer,
        children: [
            g &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        y && (0, r.jsx)(l.W, { profileUserId: t.id }),
                        (0, r.jsx)(d.Z, {
                            user: t,
                            guildId: n,
                            channelId: p,
                            onClose: _,
                            disableAutoFocus: h,
                            upsell: y,
                        }),
                    ],
                }),
            !g &&
                (0, r.jsx)(u.Z, {
                    user: t,
                    guildId: n,
                    onClose: _,
                    fullWidth: !0,
                    appContext: m,
                }),
        ],
    });
}
