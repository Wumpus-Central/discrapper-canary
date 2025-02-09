n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(593473),
    o = n(442837),
    c = n(481060),
    d = n(749210),
    u = n(558381),
    h = n(666743),
    m = n(770146),
    p = n(600164),
    g = n(565138),
    _ = n(41776),
    f = n(703656),
    E = n(769654),
    I = n(601964),
    C = n(430824),
    v = n(843445),
    N = n(981631),
    T = n(388032),
    S = n(121274);
function A(e, t, n) {
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
class Z extends l.PureComponent {
    renderMemberInfo() {
        let { approximateMemberCount: e, approximatePresenceCount: t } = this.props.guild;
        return null == e || null == t
            ? null
            : (0, i.jsxs)(p.Z, {
                  className: S.memberInfo,
                  align: p.Z.Align.CENTER,
                  children: [
                      (0, i.jsx)('div', { className: S.dotOnline }),
                      (0, i.jsx)('span', {
                          className: S.memberText,
                          children: T.intl.format(T.t['LC+S+v'], { membersOnline: t })
                      }),
                      (0, i.jsx)('div', { className: S.dotOffline }),
                      (0, i.jsx)('span', {
                          className: S.memberText,
                          children: T.intl.format(T.t.zRl6XV, { count: e })
                      })
                  ]
              });
    }
    render() {
        let { guild: e, inChannel: t, isInGuild: n, isLurking: l, isAuthenticated: r, className: s, pageSize: o } = this.props;
        if (t && n) return null;
        let d = new I.ZP(e),
            u = T.intl.string(T.t.pxwdrK),
            h = this.handleJoinOrView,
            _ = c.zxk.Looks.FILLED,
            f = c.zxk.Colors.PRIMARY;
        return (
            r
                ? n
                    ? ((_ = c.zxk.Looks.OUTLINED),
                      (f = S.buttonColorInGuild),
                      (u = (0, i.jsxs)(p.Z, {
                          align: p.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('div', { children: T.intl.string(T.t.cEnaW1) }),
                              (0, i.jsx)(c.dz2, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: S.joinedCheckmark
                              })
                          ]
                      })))
                    : l && t && (u = T.intl.string(T.t.XpeFYm))
                : ((u = T.intl.string(T.t.dKhVQE)), (h = this.handleLogin)),
            (0, i.jsxs)('div', {
                className: a()(s, o === v.b.SMALL ? S.inviteSmall : S.inviteLarge),
                children: [
                    (0, i.jsx)(m.Z, { children: T.intl.string(T.t.s1KcLi) }),
                    (0, i.jsxs)('div', {
                        className: S.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: S.info,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        guild: d,
                                        active: !0,
                                        size: g.Z.Sizes.LARGE,
                                        className: S.guildIcon
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: S.infoText,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: S.name,
                                                children: e.name
                                            }),
                                            this.renderMemberInfo()
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                className: S.actionButton,
                                fullWidth: !0,
                                color: f,
                                look: _,
                                onClick: h,
                                children: u
                            })
                        ]
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleJoinOrView', async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: i } = this.props,
                    l = () => (0, E.X)(e.id);
                if (i) (0, u.Oj)(t).then(l);
                else if (n) l();
                else
                    try {
                        await d.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: N.vtS.APPLICATION_STORE
                        }),
                            l();
                    } catch {}
            }),
            A(this, 'handleLogin', () => {
                let e = { redirect_to: N.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, f.uL)(N.Z5c.LOGIN, { search: (0, s.stringify)(e) });
            });
    }
}
let x = (0, h.Z)(
    o.ZP.connectStores([C.Z, _.Z], (e) => {
        let { guild: t } = e,
            n = _.Z.isLurking(t.id);
        return {
            isInGuild: null != C.Z.getGuild(t.id) && !n,
            isLurking: n
        };
    })(Z)
);
