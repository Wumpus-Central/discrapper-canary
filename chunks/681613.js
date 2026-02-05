n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(990078),
    o = n(397927),
    d = n(793574),
    c = n(290987),
    u = n(342296),
    A = n(636585),
    h = n(427262),
    _ = n(652215),
    m = n(985018),
    p = n(239997);
let g = {
    [_.g_B.NOW_PLAYING]: {
        single: (e, t) => m.intl.format(m.t.NEckza, { user1: e.username, user1Hook: () => t(e) }),
        double: (e, t, n) =>
            m.intl.format(m.t["6uWulc"], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t),
            }),
        other: (e) => m.intl.format(m.t["8fMgRU"], { count: e }),
    },
    [_.g_B.RECENTLY_PLAYED]: {
        single: (e, t) => m.intl.format(m.t["nB/JNB"], { user1: e.username, user1Hook: () => t(e) }),
        double: (e, t, n) =>
            m.intl.format(m.t.AZCcHU, {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t),
            }),
        other: (e) => m.intl.format(m.t.yNuaTU, { count: e }),
    },
    [_.g_B.EVER_PLAYED]: {
        single: (e, t) => m.intl.format(m.t.Fecf3N, { user1: e.username, user1Hook: () => t(e) }),
        double: (e, t, n) =>
            m.intl.format(m.t["0LiGbJ"], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t),
            }),
        other: (e) => m.intl.format(m.t.Yx1rjU, { count: e }),
    },
};
class E extends r.PureComponent {
    activityDiscordTagRef = r.createRef();
    playerAvatarRef = r.createRef();
    renderDescription(e, t) {
        let n = g[e];
        return 1 === t.length
            ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e))
            : 2 === t.length
              ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e))
              : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, i.jsx)(
            u.A,
            {
                targetElementRef: this.activityDiscordTagRef,
                user: e,
                newAnalyticsLocations: [d.A.USERNAME],
                clickTrap: !0,
                children: (t) =>
                    (0, i.jsx)("span", {
                        ref: this.activityDiscordTagRef,
                        className: p.Xh,
                        ...t,
                        children: e.username,
                    }),
            },
            e.id,
        );
    }
    renderUserTooltip = (e, t, n) =>
        (0, i.jsxs)("div", {
            className: p.YL,
            children: [
                (0, i.jsx)("div", { children: h.Ay.getUserTag(e) }),
                (0, i.jsx)(c.Ay, { className: p.ER, start: t, end: n, location: c.Ay.Locations.ACTIVITY_FEED }),
            ],
        });
    renderPlayer = (e, t, n, r) => {
        if (null == e) return null;
        let a = this.props.reason.userInfo.find((t) => t.user === e);
        return null == a
            ? null
            : (0, i.jsx)(
                  u.A,
                  {
                      targetElementRef: this.playerAvatarRef,
                      user: e,
                      newAnalyticsLocations: [d.A.AVATAR],
                      clickTrap: !0,
                      children: (t) =>
                          (0, i.jsx)(s.m, {
                              __unsupportedReactNodeAsText: this.renderUserTooltip(e, a.startTime, a.endTime),
                              "aria-label": (0, h.QV)(e, { decoration: "never" }),
                              children: (0, i.jsx)(o.euF, {
                                  ref: this.playerAvatarRef,
                                  className: l()(p.jd, { [p.hC]: !r }),
                                  src: e.getAvatarURL(void 0, 32),
                                  "aria-label": e.username,
                                  size: o._3J.SIZE_32,
                                  ...t,
                              }),
                          }),
                  },
                  e.id,
              );
    };
    renderPlayerOverflow = (e, t, n) => (0, i.jsx)("div", { className: p.gQ, children: e }, n);
    render() {
        let { reason: e, className: t } = this.props,
            { type: n, userInfo: r } = e;
        return 0 === r.length
            ? null
            : (0, i.jsxs)("div", {
                  className: l()(p.r8, t),
                  children: [
                      (0, i.jsx)(A.A, {
                          className: p.Fk,
                          users: r.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow,
                      }),
                      (0, i.jsx)("div", { className: p.h_, children: this.renderDescription(n, r) }),
                  ],
              });
    }
}
let f = E;
