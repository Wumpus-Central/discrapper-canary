var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(385499),
    c = r(813549),
    d = r(246946),
    f = r(51144),
    p = r(388032),
    h = r(319830);
function _(e) {
    if (e.isSystemUser()) return c.J.SYSTEM_DM;
    if (e.isClyde()) return c.J.AI;
    if (e.bot) return c.J.BOT;
    return null;
}
let m = (e) => {
        let { user: n, nick: r, forceUsername: a, showAccountIdentifier: o, overrideDiscriminator: l, forcePomelo: u, hideBotTag: p = !1, hideDiscriminator: h = !1, ...m } = e,
            E = (0, s.e7)([d.Z], () => d.Z.hidePersonalInformation),
            v = E || h || n.isNonUserBot(),
            y = n.toString(),
            b = p ? null : _(n),
            I = n.isVerifiedBot(),
            T = f.ZP.getName(n),
            S = a ? y : null != r ? r : T,
            A = n.isPomelo() || u;
        if (A || S !== y) {
            let e = S === y && A && a ? f.ZP.getUserTag(n, { forcePomelo: u }) : S,
                r = o && e !== '@'.concat(y) ? f.ZP.getUserTag(n) : void 0;
            return (0, i.jsx)(g, {
                primary: e,
                secondary: r,
                botType: b,
                botVerified: I,
                showStreamerModeTooltip: E && f.ZP.isNameConcealed(e),
                ...m
            });
        }
        return (0, i.jsx)(c.Z, {
            name: S,
            botType: b,
            botVerified: I,
            discriminator: v || S !== y ? null : null != l ? l : n.discriminator,
            ...m
        });
    },
    g = (e) => {
        let { primary: n, secondary: r, botType: a, botVerified: s, discriminatorClass: c, className: d, usernameClass: f, color: _, botClass: m, showStreamerModeTooltip: g } = e;
        return (0, i.jsxs)('div', {
            className: o()(h.info, d),
            children: [
                (0, i.jsx)(l.Tooltip, {
                    text: p.intl.string(p.t.Br1ls7),
                    shouldShow: g,
                    'aria-label': !!g && void 0,
                    children: (e) =>
                        (0, i.jsx)('span', {
                            ...e,
                            className: o()(h.__invalid_username, f),
                            style: null != _ ? { color: _ } : void 0,
                            children: n
                        })
                }),
                null != r
                    ? (0, i.jsx)('span', {
                          className: o()(h.infoSpacing, c),
                          children: r
                      })
                    : void 0,
                null != a &&
                    (0, i.jsx)(u.Z, {
                        type: a,
                        className: o()(h.infoSpacing, m),
                        verified: s
                    })
            ]
        });
    };
n.Z = m;
