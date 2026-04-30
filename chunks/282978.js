t.d(n, { A: () => L });
var l = t(627968),
    i = t(64700),
    s = t(735438),
    r = t.n(s),
    a = t(17928),
    c = t(780645),
    o = t(990078),
    d = t(939249),
    u = t(245604),
    h = t(777666),
    x = t(104171),
    m = t(793574),
    A = t(688810),
    g = t(919395),
    N = t(975732),
    j = t(696451),
    I = t(71393),
    E = t(287809),
    p = t(583613),
    C = t(403362),
    b = t(58736),
    T = t(518477),
    _ = t(375708),
    f = t(850603);
class D {
    userId;
    user;
    channelId;
    analyticsLocations;
    constructor({ userId: e, user: n, channelId: t, analyticsLocations: l }) {
        (this.userId = e), (this.user = n), (this.channelId = t), (this.analyticsLocations = l);
    }
    updateData(e) {
        let { userId: n, user: t, channelId: l, analyticsLocations: i } = e;
        (this.userId = n), (this.user = t), (this.channelId = l), (this.analyticsLocations = i);
    }
    generateNicknameGuildPairs = (0, p.L_)((e) =>
        r()(j.Ay.getNicknameGuildsMapping(e?.id ?? this.userId))
            .toPairs()
            .map((e) => {
                let [n, t] = e;
                return [n, t.map((e) => I.A.getGuild(e)?.name).filter(C.Vq)];
            })
            .filter((n) => {
                let [t] = n;
                return t !== e?.globalName;
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
                text: _.intl.string(_.t["UTjRE/"]),
                position: "bottom",
                children: (0, l.jsx)(d.D, {
                    className: f.OZ,
                    onClick: this.handleClick,
                    children: (0, l.jsx)(u.U, { size: "xs", color: "currentColor", className: f.WW }),
                }),
            },
            "more-avatars",
        );
    renderNicknamePairs(e) {
        return this.getNicknameGuildPairs().map((n, t) => {
            let [s, r] = n,
                a = (0, l.jsx)(d.D, { tag: "span", onClick: this.handleClick, children: s });
            return (
                r.length > 0 &&
                    (a = (0, l.jsx)(o.m, {
                        asContainer: !0,
                        tag: "span",
                        text: r.join(", "),
                        position: "bottom",
                        shouldShow: e,
                        delay: 50,
                        children: a,
                    })),
                (0, l.jsxs)(i.Fragment, { children: [0 !== t ? ", " : null, a] }, t)
            );
        });
    }
    handleClick = () => {
        (0, N.openUserProfileModal)({
            userId: this.userId,
            channelId: this.channelId,
            sourceAnalyticsLocations: this.analyticsLocations,
            tabSection: T.RP.MUTUAL_GUILDS,
        });
    };
}
function L(e) {
    let { channel: n } = e,
        t = n.getRecipientId(),
        s = (0, g.EI)(t),
        r = Array(s.length).fill(null),
        { analyticsLocations: d } = (0, A.Ay)(m.A.AKA),
        u = (function (e) {
            let { userId: n, channelId: t, analyticsLocations: l } = e,
                s = (0, a.bG)([E.default], () => E.default.getUser(n), [n]),
                [r] = i.useState(() => new D({ user: s, userId: n, channelId: t, analyticsLocations: l }));
            return r.updateData({ userId: n, user: s, channelId: t, analyticsLocations: l }), r;
        })({ userId: t, analyticsLocations: d, channelId: n.id }),
        [N, j] = i.useState(!1),
        p = i.useCallback(() => {
            j(!0);
        }, [j]),
        C = i.useCallback(() => {
            j(!1);
        }, [j]);
    return 0 === u.getNicknameGuildPairs().length && 0 === s.length
        ? (0, l.jsx)("div", { className: f.jH })
        : (0, l.jsxs)(A.f5, {
              value: d,
              children: [
                  (0, l.jsx)(b.cG, { className: f.yF }),
                  (0, l.jsx)(h.Lp, { text: _.intl.string(_.t.l1QVfj), disableColor: !0, className: f.RV }),
                  s.length > 0
                      ? (0, l.jsx)(x.Ay, {
                            size: 16,
                            users: r,
                            showUserPopout: !1,
                            renderUser: (e, n, t) => {
                                let i = u.user,
                                    r = s[t];
                                return null == r || null == i
                                    ? null
                                    : (0, l.jsx)(
                                          o.m,
                                          {
                                              asContainer: !0,
                                              text: I.A.getGuild(r)?.name,
                                              position: "bottom",
                                              children: (0, l.jsx)("img", {
                                                  alt: "",
                                                  className: f.my,
                                                  onClick: u.handleClick,
                                                  src: i.getAvatarURL(r, 16),
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          r[1],
                                      );
                            },
                            renderMoreUsers: u.renderMoreAvatars,
                            guildId: void 0,
                            max: 3,
                            className: f.HD,
                        })
                      : null,
                  u.getNicknameGuildPairs().length > 0
                      ? (0, l.jsx)(c.A, {
                            position: "bottom",
                            className: f.wm,
                            delay: 0,
                            onTooltipShow: p,
                            onTooltipHide: C,
                            children: u.renderNicknamePairs(!N),
                        })
                      : null,
              ],
          });
}
