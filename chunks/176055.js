n.d(t, { Z: () => T }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(558381),
    p = n(666743),
    h = n(770146),
    f = n(600164),
    g = n(565138),
    m = n(41776),
    b = n(703656),
    _ = n(769654),
    E = n(601964),
    O = n(430824),
    y = n(843445),
    I = n(981631),
    v = n(388032),
    C = n(629811);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class N extends i.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, r.jsxs)(f.Z, {
                  className: C.memberInfo,
                  align: f.Z.Align.CENTER,
                  children: [
                      (0, r.jsx)('div', { className: C.dotOnline }),
                      (0, r.jsx)('span', {
                          className: C.memberText,
                          children: v.intl.format(v.t['LC+S+v'], { membersOnline: t })
                      }),
                      (0, r.jsx)('div', { className: C.dotOffline }),
                      (0, r.jsx)('span', {
                          className: C.memberText,
                          children: v.intl.format(v.t.zRl6XV, { count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: i, isAuthenticated: l, className: o, pageSize: s } = this.props;
        if (t && n) return null;
        let u = new E.ZP(e),
            d = v.intl.string(v.t.pxwdrK),
            p = this.handleJoinOrView,
            m = c.zxk.Looks.FILLED,
            b = c.zxk.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((m = c.zxk.Looks.OUTLINED),
                      (b = C.buttonColorInGuild),
                      (d = (0, r.jsxs)(f.Z, {
                          align: f.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('div', { children: v.intl.string(v.t.cEnaW1) }),
                              (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: C.joinedCheckmark
                              })
                          ]
                      })))
                    : i && t && (d = v.intl.string(v.t.XpeFYm))
                : ((d = v.intl.string(v.t.dKhVQE)), (p = this.handleLogin)),
            (0, r.jsxs)('div', {
                className: a()(o, s === y.b.SMALL ? C.inviteSmall : C.inviteLarge),
                children: [
                    (0, r.jsx)(h.Z, { children: v.intl.string(v.t.s1KcLi) }),
                    (0, r.jsxs)('div', {
                        className: C.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: C.info,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        guild: u,
                                        active: !0,
                                        size: g.Z.Sizes.LARGE,
                                        className: C.guildIcon
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: C.infoText,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: C.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                className: C.actionButton,
                                fullWidth: !0,
                                color: b,
                                look: m,
                                onClick: p,
                                children: d
                            })
                        ]
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            S(this, 'handleJoinOrView', async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: r } = this.props,
                    i = () => (0, _.X)(e.id);
                if (r) (0, d.Oj)(t).then(i);
                else if (n) i();
                else
                    try {
                        await u.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: I.vtS.APPLICATION_STORE
                        }),
                            i();
                    } catch (e) {}
            }),
            S(this, 'handleLogin', () => {
                let e = { redirect_to: I.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, b.uL)(I.Z5c.LOGIN, {
                    search: (0, o.stringify)(e),
                    source: 'verified_guild_invite'
                });
            });
    }
}
let T = (0, p.Z)(
    s.ZP.connectStores([O.Z, m.Z], (e) => {
        let { guild: t } = e,
            n = m.Z.isLurking(t.id);
        return {
            isInGuild: null != O.Z.getGuild(t.id) && !n,
            isLurking: n
        };
    })(N)
);
