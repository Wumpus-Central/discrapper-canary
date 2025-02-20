n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(593473),
    s = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(558381),
    p = n(666743),
    h = n(770146),
    g = n(600164),
    f = n(565138),
    m = n(41776),
    b = n(703656),
    _ = n(769654),
    E = n(601964),
    O = n(430824),
    N = n(843445),
    v = n(981631),
    y = n(388032),
    I = n(234772);
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
            : (0, r.jsxs)(g.Z, {
                  className: I.memberInfo,
                  align: g.Z.Align.CENTER,
                  children: [
                      (0, r.jsx)('div', { className: I.dotOnline }),
                      (0, r.jsx)('span', {
                          className: I.memberText,
                          children: y.NW.format(y.t['LC+S+v'], { membersOnline: t })
                      }),
                      (0, r.jsx)('div', { className: I.dotOffline }),
                      (0, r.jsx)('span', {
                          className: I.memberText,
                          children: y.NW.format(y.t.zRl6XV, { count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: i, isAuthenticated: l, className: a, pageSize: s } = this.props;
        if (t && n) return null;
        let u = new E.ZP(e),
            d = y.NW.string(y.t.pxwdrK),
            p = this.handleJoinOrView,
            m = c.zxk.Looks.FILLED,
            b = c.zxk.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((m = c.zxk.Looks.OUTLINED),
                      (b = I.buttonColorInGuild),
                      (d = (0, r.jsxs)(g.Z, {
                          align: g.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('div', { children: y.NW.string(y.t.cEnaW1) }),
                              (0, r.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: I.joinedCheckmark
                              })
                          ]
                      })))
                    : i && t && (d = y.NW.string(y.t.XpeFYm))
                : ((d = y.NW.string(y.t.dKhVQE)), (p = this.handleLogin)),
            (0, r.jsxs)('div', {
                className: o()(a, s === N.b.SMALL ? I.inviteSmall : I.inviteLarge),
                children: [
                    (0, r.jsx)(h.Z, { children: y.NW.string(y.t.s1KcLi) }),
                    (0, r.jsxs)('div', {
                        className: I.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: I.info,
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        guild: u,
                                        active: !0,
                                        size: f.Z.Sizes.LARGE,
                                        className: I.guildIcon
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: I.infoText,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: I.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                className: I.actionButton,
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
                            source: v.vtS.APPLICATION_STORE
                        }),
                            i();
                    } catch (e) {}
            }),
            C(this, 'handleLogin', () => {
                let e = { redirect_to: v.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, b.uL)(v.Z5c.LOGIN, { search: (0, a.stringify)(e) });
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
