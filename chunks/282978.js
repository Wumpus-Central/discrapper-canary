n.d(t, {
    A: () => S,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(3026),
    c = n(990078),
    u = n(397927),
    d = n(104171),
    f = n(793574),
    p = n(688810),
    h = n(919395),
    b = n(657331),
    g = n(696451),
    m = n(71393),
    A = n(287809),
    y = n(583613),
    O = n(403362),
    j = n(58736),
    v = n(518477),
    x = n(985018),
    E = n(940688);

function _(e, t, n) {
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
class C {
    updateData(e) {
        let { userId: t, user: n, channelId: r, analyticsLocations: l } = e;
        (this.userId = t), (this.user = n), (this.channelId = r), (this.analyticsLocations = l);
    }
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [i, a] = t,
                s = (0, r.jsx)(u.DUT, {
                    tag: "span",
                    onClick: this.handleClick,
                    children: i,
                });
            return (
                a.length > 0 &&
                    (s = (0, r.jsx)(c.m, {
                        asContainer: !0,
                        tag: "span",
                        text: a.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: s,
                    })),
                (0, r.jsxs)(
                    l.Fragment,
                    {
                        children: [0 !== n ? ", " : null, s],
                    },
                    n,
                )
            );
        });
    }
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: l }) {
        _(this, "userId", void 0),
            _(this, "user", void 0),
            _(this, "channelId", void 0),
            _(this, "analyticsLocations", void 0),
            _(
                this,
                "generateNicknameGuildPairs",
                (0, y.L_)((e) => {
                    var t;
                    return a()(g.Ay.getNicknameGuildsMapping(null != (t = null == e ? void 0 : e.id) ? t : this.userId))
                        .toPairs()
                        .map((e) => {
                            let [t, n] = e;
                            return [
                                t,
                                n
                                    .map((e) => {
                                        var t;
                                        return null == (t = m.A.getGuild(e)) ? void 0 : t.name;
                                    })
                                    .filter(O.Vq),
                            ];
                        })
                        .filter((t) => {
                            let [n] = t;
                            return n !== (null == e ? void 0 : e.globalName);
                        })
                        .value();
                }),
            ),
            _(this, "renderMoreAvatars", () =>
                (0, r.jsx)(
                    c.m,
                    {
                        asContainer: !0,
                        tag: "span",
                        text: x.intl.string(x.t["UTjRE/"]),
                        position: "bottom",
                        children: (0, r.jsx)(u.DUT, {
                            className: E.OZ,
                            onClick: this.handleClick,
                            children: (0, r.jsx)(u.U1e, {
                                size: "xs",
                                color: "currentColor",
                                className: E.WW,
                            }),
                        }),
                    },
                    "more-avatars",
                ),
            ),
            _(this, "handleClick", () => {
                (0, b.openUserProfileModal)({
                    userId: this.userId,
                    channelId: this.channelId,
                    sourceAnalyticsLocations: this.analyticsLocations,
                    tabSection: v.RP.MUTUAL_GUILDS,
                });
            }),
            (this.userId = e),
            (this.user = t),
            (this.channelId = n),
            (this.analyticsLocations = l);
    }
}

function S(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        i = (0, h.EI)(n),
        a = Array(i.length).fill(null),
        { analyticsLocations: b } = (0, p.Ay)(f.A.AKA),
        g = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: r } = e,
                i = (0, s.bG)([A.default], () => A.default.getUser(t), [t]),
                [a] = l.useState(
                    () =>
                        new C({
                            user: i,
                            userId: t,
                            channelId: n,
                            analyticsLocations: r,
                        }),
                );
            return (
                a.updateData({
                    userId: t,
                    user: i,
                    channelId: n,
                    analyticsLocations: r,
                }),
                a
            );
        })({
            userId: n,
            analyticsLocations: b,
            channelId: t.id,
        }),
        [y, O] = l.useState(!1),
        v = l.useCallback(() => {
            O(!0);
        }, [O]),
        _ = l.useCallback(() => {
            O(!1);
        }, [O]);
    return 0 === g.getNicknameGuildPairs().length && 0 === i.length
        ? (0, r.jsx)("div", {
              className: E.jH,
          })
        : (0, r.jsxs)(p.f5, {
              value: b,
              children: [
                  (0, r.jsx)(j.cG, {
                      className: E.yF,
                  }),
                  (0, r.jsx)(u.LpS, {
                      text: x.intl.string(x.t.l1QVfj),
                      disableColor: !0,
                      className: E.RV,
                  }),
                  i.length > 0
                      ? (0, r.jsx)(d.Ay, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                var l;
                                let a = g.user,
                                    s = i[n];
                                return null == s || null == a
                                    ? null
                                    : (0, r.jsx)(
                                          c.m,
                                          {
                                              asContainer: !0,
                                              text: null == (l = m.A.getGuild(s)) ? void 0 : l.name,
                                              position: "bottom",
                                              children: (0, r.jsx)("img", {
                                                  alt: "",
                                                  className: E.my,
                                                  onClick: g.handleClick,
                                                  src: a.getAvatarURL(s, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          s[1],
                                      );
                            },
                            renderMoreUsers: g.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: E.HD,
                        })
                      : null,
                  g.getNicknameGuildPairs().length > 0
                      ? (0, r.jsx)(o.A, {
                            position: "bottom",
                            className: E.wm,
                            delay: 0,
                            onTooltipShow: v,
                            onTooltipHide: _,
                            children: g.renderNicknamePairs(!y),
                        })
                      : null,
              ],
          });
}
