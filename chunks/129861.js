var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(385499),
    c = r(813549),
    d = r(246946),
    f = r(51144),
    _ = r(388032),
    h = r(319830);
function p(e) {
    if (e.isSystemUser()) return c.J.SYSTEM_DM;
    if (e.isClyde()) return c.J.AI;
    if (e.bot) return c.J.BOT;
    return null;
}
let m = (e) => {
        let { user: n, nick: r, forceUsername: a, showAccountIdentifier: s, overrideDiscriminator: l, forcePomelo: u, hideBotTag: _ = !1, hideDiscriminator: h = !1, ...m } = e,
            E = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation),
            v = E || h || n.isNonUserBot(),
            I = n.toString(),
            T = _ ? null : p(n),
            b = n.isVerifiedBot(),
            y = f.ZP.getName(n),
            S = a ? I : null != r ? r : y,
            A = n.isPomelo() || u;
        if (A || S !== I) {
            let e = S === I && A && a ? f.ZP.getUserTag(n, { forcePomelo: u }) : S,
                r = s && e !== '@'.concat(I) ? f.ZP.getUserTag(n) : void 0;
            return (0, i.jsx)(g, {
                primary: e,
                secondary: r,
                botType: T,
                botVerified: b,
                showStreamerModeTooltip: E && f.ZP.isNameConcealed(e),
                ...m
            });
        }
        return (0, i.jsx)(c.Z, {
            name: S,
            botType: T,
            botVerified: b,
            discriminator: v || S !== I ? null : null != l ? l : n.discriminator,
            ...m
        });
    },
    g = (e) => {
        let { primary: n, secondary: r, botType: a, botVerified: o, discriminatorClass: c, className: d, usernameClass: f, color: p, botClass: m, showStreamerModeTooltip: g } = e;
        return (0, i.jsxs)('div', {
            className: s()(h.info, d),
            children: [
                (0, i.jsx)(l.Tooltip, {
                    text: _.intl.string(_.t.Br1ls7),
                    shouldShow: g,
                    'aria-label': !!g && void 0,
                    children: (e) =>
                        (0, i.jsx)('span', {
                            ...e,
                            className: s()(h.__invalid_username, f),
                            style: null != p ? { color: p } : void 0,
                            children: n
                        })
                }),
                null != r
                    ? (0, i.jsx)('span', {
                          className: s()(h.infoSpacing, c),
                          children: r
                      })
                    : void 0,
                null != a &&
                    (0, i.jsx)(u.Z, {
                        type: a,
                        className: s()(h.infoSpacing, m),
                        verified: o
                    })
            ]
        });
    };
n.Z = m;
