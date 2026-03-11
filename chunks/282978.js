"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(3026),
    c = n(990078),
    d = n(397927),
    u = n(104171),
    h = n(793574),
    A = n(688810),
    m = n(919395),
    p = n(657331),
    g = n(696451),
    _ = n(71393),
    f = n(287809),
    x = n(583613),
    C = n(403362),
    E = n(58736),
    I = n(518477),
    N = n(985018),
    b = n(30250);
class S {
    userId;
    user;
    channelId;
    analyticsLocations;
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: i }) {
        (this.userId = e), (this.user = t), (this.channelId = n), (this.analyticsLocations = i);
    }
    updateData(e) {
        let { userId: t, user: n, channelId: i, analyticsLocations: s } = e;
        (this.userId = t), (this.user = n), (this.channelId = i), (this.analyticsLocations = s);
    }
    generateNicknameGuildPairs = (0, x.L_)((e) =>
        a()(g.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => _.A.getGuild(e)?.name).filter(C.Vq)];
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
                    className: b.OZ,
                    onClick: this.handleClick,
                    children: (0, i.jsx)(d.U1e, { size: "xs", color: "currentColor", className: b.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [l, a] = t,
                r = (0, i.jsx)(d.DUT, { tag: "span", onClick: this.handleClick, children: l });
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
                (0, i.jsxs)(s.Fragment, { children: [0 !== n ? ", " : null, r] }, n)
            );
        });
    }
    handleClick = () => {
        (0, p.openUserProfileModal)({
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
        l = (0, m.EI)(n),
        a = Array(l.length).fill(null),
        { analyticsLocations: p } = (0, A.Ay)(h.A.AKA),
        g = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                l = (0, r.bG)([f.default], () => f.default.getUser(t), [t]),
                [a] = s.useState(() => new S({ user: l, userId: t, channelId: n, analyticsLocations: i }));
            return a.updateData({ userId: t, user: l, channelId: n, analyticsLocations: i }), a;
        })({ userId: n, analyticsLocations: p, channelId: t.id }),
        [x, C] = s.useState(!1),
        I = s.useCallback(() => {
            C(!0);
        }, [C]),
        T = s.useCallback(() => {
            C(!1);
        }, [C]);
    return 0 === g.getNicknameGuildPairs().length && 0 === l.length
        ? (0, i.jsx)("div", { className: b.jH })
        : (0, i.jsxs)(A.f5, {
              value: p,
              children: [
                  (0, i.jsx)(E.cG, { className: b.yF }),
                  (0, i.jsx)(d.LpS, { text: N.intl.string(N.t.l1QVfj), disableColor: !0, className: b.RV }),
                  l.length > 0
                      ? (0, i.jsx)(u.Ay, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let s = g.user,
                                    a = l[n];
                                return null == a || null == s
                                    ? null
                                    : (0, i.jsx)(
                                          c.m,
                                          {
                                              asContainer: !0,
                                              text: _.A.getGuild(a)?.name,
                                              position: "bottom",
                                              children: (0, i.jsx)("img", {
                                                  alt: "",
                                                  className: b.my,
                                                  onClick: g.handleClick,
                                                  src: s.getAvatarURL(a, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          a[1],
                                      );
                            },
                            renderMoreUsers: g.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: b.HD,
                        })
                      : null,
                  g.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(o.A, {
                            position: "bottom",
                            className: b.wm,
                            delay: 0,
                            onTooltipShow: I,
                            onTooltipHide: T,
                            children: g.renderNicknamePairs(!x),
                        })
                      : null,
              ],
          });
}
