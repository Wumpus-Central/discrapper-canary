n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(939249),
    u = n(245604),
    h = n(777666),
    A = n(104171),
    _ = n(793574),
    m = n(688810),
    g = n(919395),
    p = n(657331),
    f = n(696451),
    E = n(71393),
    x = n(287809),
    I = n(583613),
    C = n(403362),
    b = n(58736),
    N = n(518477),
    S = n(985018),
    v = n(850603);
class T {
    userId;
    user;
    channelId;
    analyticsLocations;
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: i }) {
        (this.userId = e), (this.user = t), (this.channelId = n), (this.analyticsLocations = i);
    }
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: l } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = l);
    }
    generateNicknameGuildPairs = (0, I.L_)((e) =>
        a()(f.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => E.A.getGuild(e)?.name).filter(C.Vq)];
            })
            .filter((t) => {
                let [n] = t;
                return n !== e?.globalName;
            })
            .value(),
    );
    getNicknameGuildPairs() {
        return this.generateNicknameGuildPairs(this.user);
    }
    renderMoreAvatars = () =>
        (0, i.jsx)(
            d.m,
            {
                asContainer: !0,
                tag: "span",
                text: S.intl.string(S.t["UTjRE/"]),
                position: "bottom",
                children: (0, i.jsx)(c.D, {
                    className: v.OZ,
                    onClick: this.handleClick,
                    children: (0, i.jsx)(u.U, { size: "xs", color: "currentColor", className: v.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [s, a] = t,
                r = (0, i.jsx)(c.D, { tag: "span", onClick: this.handleClick, children: s });
            return (
                a.length > 0 &&
                    (r = (0, i.jsx)(d.m, {
                        asContainer: !0,
                        tag: "span",
                        text: a.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: r,
                    })),
                (0, i.jsxs)(l.Fragment, { children: [0 !== n ? ", " : null, r] }, n)
            );
        });
    }
    handleClick = () => {
        (0, p.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: N.RP.MUTUAL_GUILDS,
        });
    };
}
function y(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        s = (0, g.EI)(n),
        a = Array(s.length).fill(null),
        { analyticsLocations: c } = (0, m.Ay)(_.A.AKA),
        u = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                s = (0, r.bG)([x.default], () => x.default.getUser(t), [t]),
                [a] = l.useState(() => new T({ user: s, userId: t, channelId: n, analyticsLocations: i }));
            return a.updateData({ userId: t, user: s, channelId: n, analyticsLocations: i }), a;
        })({ userId: n, analyticsLocations: c, channelId: t.id }),
        [p, f] = l.useState(!1),
        I = l.useCallback(() => {
            f(!0);
        }, [f]),
        C = l.useCallback(() => {
            f(!1);
        }, [f]);
    return 0 === u.getNicknameGuildPairs().length && 0 === s.length
        ? (0, i.jsx)("div", { className: v.jH })
        : (0, i.jsxs)(m.f5, {
              value: c,
              children: [
                  (0, i.jsx)(b.cG, { className: v.yF }),
                  (0, i.jsx)(h.Lp, { text: S.intl.string(S.t.l1QVfj), disableColor: !0, className: v.RV }),
                  s.length > 0
                      ? (0, i.jsx)(A.Ay, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let l = u.user,
                                    a = s[n];
                                return null == a || null == l
                                    ? null
                                    : (0, i.jsx)(
                                          d.m,
                                          {
                                              asContainer: !0,
                                              text: E.A.getGuild(a)?.name,
                                              position: "bottom",
                                              children: (0, i.jsx)("img", {
                                                  alt: "",
                                                  className: v.my,
                                                  onClick: u.handleClick,
                                                  src: l.getAvatarURL(a, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          a[1],
                                      );
                            },
                            renderMoreUsers: u.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: v.HD,
                        })
                      : null,
                  u.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(o.A, {
                            position: "bottom",
                            className: v.wm,
                            delay: 0,
                            onTooltipShow: I,
                            onTooltipHide: C,
                            children: u.renderNicknamePairs(!p),
                        })
                      : null,
              ],
          });
}
