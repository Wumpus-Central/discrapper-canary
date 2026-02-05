n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    d = n(990078),
    c = n(397927),
    u = n(104171),
    h = n(793574),
    A = n(688810),
    g = n(919395),
    m = n(657331),
    p = n(696451),
    _ = n(71393),
    x = n(287809),
    f = n(583613),
    E = n(403362),
    C = n(58736),
    I = n(518477),
    S = n(985018),
    b = n(940688);
class N {
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
    generateNicknameGuildPairs = (0, f.L_)((e) =>
        a()(p.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => _.A.getGuild(e)?.name).filter(E.Vq)];
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
                children: (0, i.jsx)(c.DUT, {
                    className: b.OZ,
                    onClick: this.handleClick,
                    children: (0, i.jsx)(c.U1e, { size: "xs", color: "currentColor", className: b.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [s, a] = t,
                r = (0, i.jsx)(c.DUT, { tag: "span", onClick: this.handleClick, children: s });
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
        (0, m.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: I.RP.MUTUAL_GUILDS,
        });
    };
}
function T(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        s = (0, g.EI)(n),
        a = Array(s.length).fill(null),
        { analyticsLocations: m } = (0, A.Ay)(h.A.AKA),
        p = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                s = (0, r.bG)([x.default], () => x.default.getUser(t), [t]),
                [a] = l.useState(() => new N({ user: s, userId: t, channelId: n, analyticsLocations: i }));
            return a.updateData({ userId: t, user: s, channelId: n, analyticsLocations: i }), a;
        })({ userId: n, analyticsLocations: m, channelId: t.id }),
        [f, E] = l.useState(!1),
        I = l.useCallback(() => {
            E(!0);
        }, [E]),
        T = l.useCallback(() => {
            E(!1);
        }, [E]);
    return 0 === p.getNicknameGuildPairs().length && 0 === s.length
        ? (0, i.jsx)("div", { className: b.jH })
        : (0, i.jsxs)(A.f5, {
              value: m,
              children: [
                  (0, i.jsx)(C.cG, { className: b.yF }),
                  (0, i.jsx)(c.LpS, { text: S.intl.string(S.t.l1QVfj), disableColor: !0, className: b.RV }),
                  s.length > 0
                      ? (0, i.jsx)(u.Ay, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let l = p.user,
                                    a = s[n];
                                return null == a || null == l
                                    ? null
                                    : (0, i.jsx)(
                                          d.m,
                                          {
                                              asContainer: !0,
                                              text: _.A.getGuild(a)?.name,
                                              position: "bottom",
                                              children: (0, i.jsx)("img", {
                                                  alt: "",
                                                  className: b.my,
                                                  onClick: p.handleClick,
                                                  src: l.getAvatarURL(a, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          a[1],
                                      );
                            },
                            renderMoreUsers: p.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: b.HD,
                        })
                      : null,
                  p.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(o.A, {
                            position: "bottom",
                            className: b.wm,
                            delay: 0,
                            onTooltipShow: I,
                            onTooltipHide: T,
                            children: p.renderNicknamePairs(!f),
                        })
                      : null,
              ],
          });
}
