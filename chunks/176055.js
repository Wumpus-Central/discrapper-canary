n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(593473),
    o = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(749210),
    p = n(558381),
    f = n(666743),
    h = n(770146),
    g = n(600164),
    m = n(565138),
    _ = n(41776),
    b = n(703656),
    E = n(769654),
    O = n(430824),
    y = n(411198),
    v = n(843445),
    I = n(981631),
    C = n(388032),
    S = n(295265);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
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
            : (0, r.jsxs)(g.Z, {
                  className: S.memberInfo,
                  align: g.Z.Align.CENTER,
                  children: [
                      (0, r.jsx)("div", { className: S.dotOnline }),
                      (0, r.jsx)("span", {
                          className: S.memberText,
                          children: C.intl.format(C.t["LC+S+m"], { membersOnline: t }),
                      }),
                      (0, r.jsx)("div", { className: S.dotOffline }),
                      (0, r.jsx)("span", {
                          className: S.memberText,
                          children: C.intl.format(C.t.zRl6XR, { count: e }),
                      }),
                  ],
              });
    }
    render() {
        let {
            guild: e,
            inChannel: t,
            isInGuild: n,
            isLurking: i,
            isAuthenticated: l,
            className: s,
            pageSize: o,
        } = this.props;
        if (t && n) return null;
        let d = (0, y.B3)(e),
            p = C.intl.string(C.t.pxwdrA),
            f = this.handleJoinOrView,
            _ = c.zx.Looks.FILLED,
            b = c.zx.Colors.PRIMARY;
        return (
            l
                ? n
                    ? ((_ = c.zx.Looks.OUTLINED),
                      (b = S.buttonColorInGuild),
                      (p = (0, r.jsxs)(g.Z, {
                          align: g.Z.Align.CENTER,
                          children: [
                              (0, r.jsx)("div", { children: C.intl.string(C.t.cEnaWx) }),
                              (0, r.jsx)(u.dz2, {
                                  size: "md",
                                  color: "currentColor",
                                  className: S.joinedCheckmark,
                              }),
                          ],
                      })))
                    : i && t && (p = C.intl.string(C.t.XpeFYr))
                : ((p = C.intl.string(C.t.dKhVQN)), (f = this.handleLogin)),
            (0, r.jsxs)("div", {
                className: a()(s, o === v.b.SMALL ? S.inviteSmall : S.inviteLarge),
                children: [
                    (0, r.jsx)(h.Z, { children: C.intl.string(C.t.s1KcLo) }),
                    (0, r.jsxs)("div", {
                        className: S.content,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.info,
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        guild: d,
                                        active: !0,
                                        size: m.Z.Sizes.LARGE,
                                        className: S.guildIcon,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.infoText,
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: S.name,
                                                children: e.name,
                                            }),
                                            this.renderMemberInfo(),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.zx, {
                                size: c.zx.Sizes.SMALL,
                                className: S.actionButton,
                                fullWidth: !0,
                                color: b,
                                look: _,
                                onClick: f,
                                children: p,
                            }),
                        ],
                    }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            T(this, "handleJoinOrView", async () => {
                let { guild: e, skuId: t, isInGuild: n, isLurking: r } = this.props,
                    i = () => (0, E.X)(e.id);
                if (r) (0, p.Oj)(t).then(i);
                else if (n) i();
                else
                    try {
                        await d.Z.joinGuild(e.id, {
                            lurker: !0,
                            source: I.vtS.APPLICATION_STORE,
                        }),
                            i();
                    } catch (e) {}
            }),
            T(this, "handleLogin", () => {
                let e = { redirect_to: I.Z5c.APPLICATION_STORE_LISTING_SKU(this.props.skuId) };
                (0, b.uL)(I.Z5c.LOGIN, {
                    search: (0, s.stringify)(e),
                    source: "verified_guild_invite",
                });
            });
    }
}
let j = (0, f.Z)(
    o.ZP.connectStores([O.Z, _.Z], (e) => {
        let { guild: t } = e,
            n = _.Z.isLurking(t.id);
        return {
            isInGuild: null != O.Z.getGuild(t.id) && !n,
            isLurking: n,
        };
    })(N),
);
