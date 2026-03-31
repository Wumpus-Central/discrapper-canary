n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    c = n(990078),
    d = n(397927),
    u = n(104171),
    h = n(793574),
    A = n(688810),
    _ = n(919395),
    m = n(657331),
    g = n(696451),
    p = n(71393),
    f = n(287809),
    x = n(583613),
    E = n(403362),
    I = n(58736),
    C = n(518477),
    N = n(985018),
    T = n(28283);
class S {
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
    generateNicknameGuildPairs = (0, x.L_)((e) =>
        a()(g.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => p.A.getGuild(e)?.name).filter(E.Vq)];
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
            c.m,
            {
                asContainer: !0,
                tag: "span",
                text: N.intl.string(N.t["UTjRE/"]),
                position: "bottom",
                children: (0, i.jsx)(d.DUT, {
                    className: T.OZ,
                    onClick: this.handleClick,
                    children: (0, i.jsx)(d.U1e, { size: "xs", color: "currentColor", className: T.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [s, a] = t,
                r = (0, i.jsx)(d.DUT, { tag: "span", onClick: this.handleClick, children: s });
            return (
                a.length > 0 &&
                    (r = (0, i.jsx)(c.m, {
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
        (0, m.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: C.RP.MUTUAL_GUILDS,
        });
    };
}
function b(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        s = (0, _.EI)(n),
        a = Array(s.length).fill(null),
        { analyticsLocations: m } = (0, A.Ay)(h.A.AKA),
        g = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                s = (0, r.bG)([f.default], () => f.default.getUser(t), [t]),
                [a] = l.useState(() => new S({ user: s, userId: t, channelId: n, analyticsLocations: i }));
            return a.updateData({ userId: t, user: s, channelId: n, analyticsLocations: i }), a;
        })({ userId: n, analyticsLocations: m, channelId: t.id }),
        [x, E] = l.useState(!1),
        C = l.useCallback(() => {
            E(!0);
        }, [E]),
        b = l.useCallback(() => {
            E(!1);
        }, [E]);
    return 0 === g.getNicknameGuildPairs().length && 0 === s.length
        ? (0, i.jsx)("div", { className: T.jH })
        : (0, i.jsxs)(A.f5, {
              value: m,
              children: [
                  (0, i.jsx)(I.cG, { className: T.yF }),
                  (0, i.jsx)(d.LpS, { text: N.intl.string(N.t.l1QVfj), disableColor: !0, className: T.RV }),
                  s.length > 0
                      ? (0, i.jsx)(u.Ay, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let l = g.user,
                                    a = s[n];
                                return null == a || null == l
                                    ? null
                                    : (0, i.jsx)(
                                          c.m,
                                          {
                                              asContainer: !0,
                                              text: p.A.getGuild(a)?.name,
                                              position: "bottom",
                                              children: (0, i.jsx)("img", {
                                                  alt: "",
                                                  className: T.my,
                                                  onClick: g.handleClick,
                                                  src: l.getAvatarURL(a, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          a[1],
                                      );
                            },
                            renderMoreUsers: g.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: T.HD,
                        })
                      : null,
                  g.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(o.A, {
                            position: "bottom",
                            className: T.wm,
                            delay: 0,
                            onTooltipShow: C,
                            onTooltipHide: b,
                            children: g.renderNicknamePairs(!x),
                        })
                      : null,
              ],
          });
}
