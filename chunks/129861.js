n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(385499),
    u = n(813549),
    c = n(246946),
    d = n(51144),
    f = n(388032),
    _ = n(209704);
function p(e) {
    return e.isSystemUser() ? u.J.SYSTEM_DM : e.isClyde() ? u.J.AI : e.bot ? u.J.BOT : null;
}
let h = (e) => {
        let { primary: t, secondary: n, botType: r, botVerified: s, discriminatorClass: u, className: c, usernameClass: d, color: p, botClass: h, showStreamerModeTooltip: m } = e;
        return (0, i.jsxs)('div', {
            className: a()(_.info, c),
            children: [
                (0, i.jsx)(o.ua7, {
                    text: f.intl.string(f.t.Br1ls7),
                    shouldShow: m,
                    'aria-label': !!m && void 0,
                    children: (e) =>
                        (0, i.jsx)('span', {
                            ...e,
                            className: a()(_.__invalid_username, d),
                            style: null != p ? { color: p } : void 0,
                            children: t
                        })
                }),
                null != n
                    ? (0, i.jsx)('span', {
                          className: a()(_.infoSpacing, u),
                          children: n
                      })
                    : void 0,
                null != r &&
                    (0, i.jsx)(l.Z, {
                        type: r,
                        className: a()(_.infoSpacing, h),
                        verified: s
                    })
            ]
        });
    },
    m = (e) => {
        let { user: t, nick: n, forceUsername: r, showAccountIdentifier: a, overrideDiscriminator: o, forcePomelo: l, hideBotTag: f = !1, hideDiscriminator: _ = !1, ...m } = e,
            g = (0, s.e7)([c.Z], () => c.Z.hidePersonalInformation),
            E = g || _ || t.isNonUserBot(),
            v = t.toString(),
            y = f ? null : p(t),
            I = t.isVerifiedBot(),
            T = d.ZP.getName(t),
            b = r ? v : null != n ? n : T,
            S = t.isPomelo() || l;
        if (S || b !== v) {
            let e = b === v && S && r ? d.ZP.getUserTag(t, { forcePomelo: l }) : b,
                n = a && e !== '@'.concat(v) ? d.ZP.getUserTag(t) : void 0;
            return (0, i.jsx)(h, {
                primary: e,
                secondary: n,
                botType: y,
                botVerified: I,
                showStreamerModeTooltip: g && d.ZP.isNameConcealed(e),
                ...m
            });
        }
        return (0, i.jsx)(u.Z, {
            name: b,
            botType: y,
            botVerified: I,
            discriminator: E || b !== v ? null : null != o ? o : t.discriminator,
            ...m
        });
    };
