(n.d(t, { Z: () => P }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(749210),
    p = n(558381),
    h = n(666743),
    f = n(770146),
    g = n(600164),
    m = n(565138),
    b = n(41776),
    _ = n(703656),
    E = n(769654),
    O = n(430824),
    y = n(411198),
    I = n(843445),
    v = n(981631),
    C = n(388032),
    S = n(629811);
function N(e, t, n) {
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
class T extends i.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, r.jsxs)(g.Z, {
                  className: S.memberInfo,
                  align: g.Z.Align.CENTER,
                  children: [
                      (0, r.jsx)('div', { className: S.dotOnline }),
                      (0, r.jsx)('span', {
                          className: S.memberText,
                          children: C.intl.format(C.t['LC+S+v'], { membersOnline: t })
                      }),
                      (0, r.jsx)('div', { className: S.dotOffline }),
                      (0, r.jsx)('span', {
                          className: S.memberText,
                          children: C.intl.format(C.t.zRl6XV, { count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: i, isAuthenticated: l, className: o, pageSize: s } = this.props;
        if (t && n) return null;
        let d = (0, y.B3)(e),
            p = C.intl.string(C.t.pxwdrK),
            h = this.handleJoinOrView,
            b = c.zx.Looks.FILLED,
            _ = c.zx.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((b = c.zx.Looks.OUTLINED),
                      (_ = S.buttonColorInGuild),
                      (p = (0, r.jsxs)(g.Z, {
                          align: g.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)('div', { children: C.intl.string(C.t.cEnaW1) }),
                              (0, r.jsx)(u.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: S.joinedCheckmark
                              })
                          ]
                      })))
                    : i && t && (p = C.intl.string(C.t.XpeFYm))
                : ((p = C.intl.string(C.t.dKhVQE)), (h = this.handleLogin)),
            (0, r.jsxs)('div', {
                className: a()(o, s === I.b.SMALL ? S.inviteSmall : S.inviteLarge),
                children: [
                    (0, r.jsx)(f.Z, { children: C.intl.string(C.t.s1KcLi) }),
                    (0, r.jsxs)('div', {
                        className: S.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: S.info,
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        guild: d,
                                        active: !0,
                                        size: m.Z.Sizes.LARGE,
                                        className: S.guildIcon
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: S.infoText,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: S.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.zx, {
                                size: c.zx.Sizes.SMALL,
                                className: S.actionButton,
                                fullWidth: !0,
                                color: _,
                                look: b,
                                onClick: h,
                                children: p
                            })
                        ]
                    })
                ]
            })
        );
    }
    constructor(...e) {
        (super(...e),
            N(this, 'handleJoinOrView', async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: r } = this.props,
                    i = () => (0, E.X)(e.id);
                if (r) (0, p.Oj)(t).then(i);
                else if (n) i();
                else
                    try {
                        (await d.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: v.vtS.APPLICATION_STORE
                        }),
                            i());
                    } catch (e) {}
            }),
            N(this, 'handleLogin', () => {
                let e = { redirect_to: v.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, _.uL)(v.Z5c.LOGIN, {
                    search: (0, o.stringify)(e),
                    source: 'verified_guild_invite'
                });
            }));
    }
}
let P = (0, h.Z)(
    s.ZP.connectStores([O.Z, b.Z], (e) => {
        let { guild: t } = e,
            n = b.Z.isLurking(t.id);
        return {
            isInGuild: null != O.Z.getGuild(t.id) && !n,
            isLurking: n
        };
    })(T)
);
