n.d(t, { A: () => _ });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(17928),
    c = n(3026),
    o = n(990078),
    d = n(939249),
    u = n(245604),
    h = n(812993),
    m = n(104171),
    x = n(793574),
    A = n(688810),
    g = n(919395),
    j = n(975732),
    p = n(696451),
    N = n(71393),
    f = n(287809),
    C = n(583613),
    b = n(403362),
    E = n(58736),
    I = n(518477),
    T = n(375708),
    v = n(251051);
class D {
    userId;
    user;
    channelId;
    analyticsLocations;
    constructor({ userId: e, user: t, channelId: n, analyticsLocations: l }) {
        (this.userId = e), (this.user = t), (this.channelId = n), (this.analyticsLocations = l);
    }
    updateData(e) {
        let { userId: t, user: n, channelId: l, analyticsLocations: i } = e;
        (this.userId = t), (this.user = n), (this.channelId = l), (this.analyticsLocations = i);
    }
    generateNicknameGuildPairs = (0, C.L_)((e) =>
        a()(p.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [t, n] = e;
                return [t, n.map((e) => N.A.getGuild(e)?.name).filter(b.Vq)];
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
        (0, l.jsx)(
            o.m,
            {
                asContainer: !0,
                tag: "span",
                text: T.intl.string(T.t["UTjRE/"]),
                position: "bottom",
                children: (0, l.jsx)(d.D, {
                    className: v.OZ,
                    onClick: this.handleClick,
                    children: (0, l.jsx)(u.U, { size: "xs", color: "currentColor", className: v.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((t, n) => {
            let [s, a] = t,
                r = (0, l.jsx)(d.D, { tag: "span", onClick: this.handleClick, children: s });
            return (
                a.length > 0 &&
                    (r = (0, l.jsx)(o.m, {
                        asContainer: !0,
                        tag: "span",
                        text: a.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: r,
                    })),
                (0, l.jsxs)(i.Fragment, { children: [0 !== n ? ", " : null, r] }, n)
            );
        });
    }
    handleClick = () => {
        (0, j.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: I.RP.MUTUAL_GUILDS,
        });
    };
}
function _(e) {
    let { channel: t } = e,
        n = t.getRecipientId(),
        s = (0, g.EI)(n),
        a = Array(s.length).fill(null),
        { analyticsLocations: d } = (0, A.Ay)(x.A.AKA),
        u = (function (e) {
            let { userId: t, channelId: n, analyticsLocations: l } = e,
                s = (0, r.bG)([f.default], () => f.default.getUser(t), [t]),
                [a] = i.useState(() => new D({ user: s, userId: t, channelId: n, analyticsLocations: l }));
            return a.updateData({ userId: t, user: s, channelId: n, analyticsLocations: l }), a;
        })({ userId: n, analyticsLocations: d, channelId: t.id }),
        [j, p] = i.useState(!1),
        C = i.useCallback(() => {
            p(!0);
        }, [p]),
        b = i.useCallback(() => {
            p(!1);
        }, [p]);
    return 0 === u.getNicknameGuildPairs().length && 0 === s.length
        ? (0, l.jsx)("div", { className: v.jH })
        : (0, l.jsxs)(A.f5, {
              value: d,
              children: [
                  (0, l.jsx)(E.cG, { className: v.yF }),
                  (0, l.jsx)(h.Lp, { text: T.intl.string(T.t.l1QVfj), disableColor: !0, className: v.RV }),
                  s.length > 0
                      ? (0, l.jsx)(m.Ay, {
                            size: 16,
                            users: a,
                            showUserPopout: !1,
                            renderUser: (e, t, n) => {
                                let i = u.user,
                                    a = s[n];
                                return null == a || null == i
                                    ? null
                                    : (0, l.jsx)(
                                          o.m,
                                          {
                                              asContainer: !0,
                                              text: N.A.getGuild(a)?.name,
                                              position: "bottom",
                                              children: (0, l.jsx)("img", {
                                                  alt: "",
                                                  className: v.my,
                                                  onClick: u.handleClick,
                                                  src: i.getAvatarURL(a, 16),
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
                      ? (0, l.jsx)(c.A, {
                            position: "bottom",
                            className: v.wm,
                            delay: 0,
                            onTooltipShow: C,
                            onTooltipHide: b,
                            children: u.renderNicknamePairs(!j),
                        })
                      : null,
              ],
          });
}
