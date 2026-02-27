"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(3026),
    c = n(990078),
    d = n(397927),
    u = n(104171),
    h = n(793574),
    A = n(688810),
    p = n(919395),
    g = n(657331),
    m = n(696451),
    _ = n(71393),
    f = n(287809),
    x = n(583613),
    C = n(403362),
    E = n(58736),
    I = n(518477),
    N = n(985018),
    b = n(940688);
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
        r()(m.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
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
            let [l, r] = t,
                a = (0, i.jsx)(d.DUT, { tag: "span", onClick: this.handleClick, children: l });
            return (
                r.length > 0 &&
                    (a = (0, i.jsx)(c.m, {
                        asContainer: !0,
                        tag: "span",
                        text: r.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: a,
                    })),
                (0, i.jsxs)(s.Fragment, { children: [0 !== n ? ", " : null, a] }, n)
            );
        });
    }
    handleClick = () => {
        (0, g.openUserProfileModal)({
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
        l = (0, p.EI)(n),
        r = Array(l.length).fill(null),
        { analyticsLocations: g } = (0, A.Ay)(h.A.AKA),
        m = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: i } = e,
                l = (0, a.bG)([f.default], () => f.default.getUser(t), [t]),
                [r] = s.useState(() => new S({ user: l, userId: t, channelId: n, analyticsLocations: i }));
            return r.updateData({ userId: t, user: l, channelId: n, analyticsLocations: i }), r;
        })({ userId: n, analyticsLocations: g, channelId: t.id }),
        [x, C] = s.useState(!1),
        I = s.useCallback(() => {
            C(!0);
        }, [C]),
        T = s.useCallback(() => {
            C(!1);
        }, [C]);
    return 0 === m.getNicknameGuildPairs().length && 0 === l.length
        ? (0, i.jsx)("div", { className: b.jH })
        : (0, i.jsxs)(A.f5, {
              value: g,
              children: [
                  (0, i.jsx)(E.cG, { className: b.yF }),
                  (0, i.jsx)(d.LpS, { text: N.intl.string(N.t.l1QVfj), disableColor: !0, className: b.RV }),
                  l.length > 0
                      ? (0, i.jsx)(u.Ay, {
                            size: 16,
                            users: r,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let s = m.user,
                                    r = l[n];
                                return null == r || null == s
                                    ? null
                                    : (0, i.jsx)(
                                          c.m,
                                          {
                                              asContainer: !0,
                                              text: _.A.getGuild(r)?.name,
                                              position: "bottom",
                                              children: (0, i.jsx)("img", {
                                                  alt: "",
                                                  className: b.my,
                                                  onClick: m.handleClick,
                                                  src: s.getAvatarURL(r, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          r[1],
                                      );
                            },
                            renderMoreUsers: m.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: b.HD,
                        })
                      : null,
                  m.getNicknameGuildPairs().length > 0
                      ? (0, i.jsx)(o.A, {
                            position: "bottom",
                            className: b.wm,
                            delay: 0,
                            onTooltipShow: I,
                            onTooltipHide: T,
                            children: m.renderNicknamePairs(!x),
                        })
                      : null,
              ],
          });
}
