n.d(t, { Z: () => T }), n(388685);
var r = n(200651),
    i = n(192379),
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
    N = n(843445),
    y = n(981631),
    I = n(388032),
    v = n(629811);
function C(e, t, n) {
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
class S extends i.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, r.jsxs)(f.Z, {
                  className: v.memberInfo,
                  align: f.Z.Align.CENTER,
                  children: [
                      (0, r.jsx)('div', { className: v.dotOnline }),
                      (0, r.jsx)('span', {
                          className: v.memberText,
                          children: I.NW.format(I.t['LC+S+v'], { membersOnline: t })
                      }),
                      (0, r.jsx)('div', { className: v.dotOffline }),
                      (0, r.jsx)('span', {
                          className: v.memberText,
                          children: I.NW.format(I.t.zRl6XV, { count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: i, isAuthenticated: l, className: o, pageSize: s } = this.props;
        if (t && n) return null;
        let u = new E.ZP(e),
            d = I.NW.string(I.t.pxwdrK),
            p = this.handleJoinOrView,
            m = c.zxk.Looks.FILLED,
            b = c.zxk.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((m = c.zxk.Looks.OUTLINED),
                      (b = v.buttonColorInGuild),
                      (d = (0, r.jsxs)(f.Z, {
                          align: f.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('div', { children: I.NW.string(I.t.cEnaW1) }),
                              (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: v.joinedCheckmark
                              })
                          ]
                      })))
                    : i && t && (d = I.NW.string(I.t.XpeFYm))
                : ((d = I.NW.string(I.t.dKhVQE)), (p = this.handleLogin)),
            (0, r.jsxs)('div', {
                className: a()(o, s === N.b.SMALL ? v.inviteSmall : v.inviteLarge),
                children: [
                    (0, r.jsx)(h.Z, { children: I.NW.string(I.t.s1KcLi) }),
                    (0, r.jsxs)('div', {
                        className: v.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v.info,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        guild: u,
                                        active: !0,
                                        size: g.Z.Sizes.LARGE,
                                        className: v.guildIcon
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: v.infoText,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: v.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                className: v.actionButton,
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
            C(this, 'handleJoinOrView', async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: r } = this.props,
                    i = () => (0, _.X)(e.id);
                if (r) (0, d.Oj)(t).then(i);
                else if (n) i();
                else
                    try {
                        await u.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: y.vtS.APPLICATION_STORE
                        }),
                            i();
                    } catch (e) {}
            }),
            C(this, 'handleLogin', () => {
                let e = { redirect_to: y.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, b.uL)(y.Z5c.LOGIN, {
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
    })(S)
);
