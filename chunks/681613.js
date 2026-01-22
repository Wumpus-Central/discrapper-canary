n.d(t, { A: () => O }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(990078),
    o = n(397927),
    c = n(793574),
    u = n(290987),
    d = n(342296),
    p = n(636585),
    f = n(427262),
    h = n(652215),
    A = n(985018),
    g = n(239997);
function m(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let _ = {
    [h.g_B.NOW_PLAYING]: {
        single: (e, t) =>
            A.intl.format(A.t.NEckza, {
                user1: e.username,
                user1Hook: () => t(e),
            }),
        double: (e, t, n) =>
            A.intl.format(A.t["6uWulc"], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t),
            }),
        other: (e) => A.intl.format(A.t["8fMgRU"], { count: e }),
    },
    [h.g_B.RECENTLY_PLAYED]: {
        single: (e, t) =>
            A.intl.format(A.t["nB/JNB"], {
                user1: e.username,
                user1Hook: () => t(e),
            }),
        double: (e, t, n) =>
            A.intl.format(A.t.AZCcHU, {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t),
            }),
        other: (e) => A.intl.format(A.t.yNuaTU, { count: e }),
    },
    [h.g_B.EVER_PLAYED]: {
        single: (e, t) =>
            A.intl.format(A.t.Fecf3N, {
                user1: e.username,
                user1Hook: () => t(e),
            }),
        double: (e, t, n) =>
            A.intl.format(A.t["0LiGbJ"], {
                user1: e.username,
                user1Hook: () => n(e),
                user2: t.username,
                user2Hook: () => n(t),
            }),
        other: (e) => A.intl.format(A.t.Yx1rjU, { count: e }),
    },
};
class E extends i.PureComponent {
    renderDescription(e, t) {
        let n = _[e];
        return 1 === t.length
            ? n.single(t[0].user, (e) => this.renderActivityDiscordTag(e))
            : 2 === t.length
              ? n.double(t[0].user, t[1].user, (e) => this.renderActivityDiscordTag(e))
              : n.other(t.length);
    }
    renderActivityDiscordTag(e) {
        return (0, r.jsx)(
            d.A,
            {
                targetElementRef: this.activityDiscordTagRef,
                user: e,
                newAnalyticsLocations: [c.A.USERNAME],
                clickTrap: !0,
                children: (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        "span",
                        ((n = b(
                            {
                                ref: this.activityDiscordTagRef,
                                className: g.Xh,
                            },
                            t,
                        )),
                        (i = i = { children: e.username }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
                },
            },
            e.id,
        );
    }
    render() {
        let { reason: e, className: t } = this.props,
            { type: n, userInfo: i } = e;
        return 0 === i.length
            ? null
            : (0, r.jsxs)("div", {
                  className: a()(g.r8, t),
                  children: [
                      (0, r.jsx)(p.A, {
                          className: g.Fk,
                          users: i.map((e) => {
                              let { user: t } = e;
                              return t;
                          }),
                          renderUser: this.renderPlayer,
                          max: 4,
                          renderMoreUsers: this.renderPlayerOverflow,
                      }),
                      (0, r.jsx)("div", {
                          className: g.h_,
                          children: this.renderDescription(n, i),
                      }),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            m(this, "activityDiscordTagRef", i.createRef()),
            m(this, "playerAvatarRef", i.createRef()),
            m(this, "renderUserTooltip", (e, t, n) =>
                (0, r.jsxs)("div", {
                    className: g.YL,
                    children: [
                        (0, r.jsx)("div", { children: f.Ay.getUserTag(e) }),
                        (0, r.jsx)(u.Ay, {
                            className: g.ER,
                            start: t,
                            end: n,
                            location: u.Ay.Locations.ACTIVITY_FEED,
                        }),
                    ],
                }),
            ),
            m(this, "renderPlayer", (e, t, n, i) => {
                if (null == e) return null;
                let l = this.props.reason.userInfo.find((t) => t.user === e);
                return null == l
                    ? null
                    : (0, r.jsx)(
                          d.A,
                          {
                              targetElementRef: this.playerAvatarRef,
                              user: e,
                              newAnalyticsLocations: [c.A.AVATAR],
                              clickTrap: !0,
                              children: (t) =>
                                  (0, r.jsx)(s.m, {
                                      __unsupportedReactNodeAsText: this.renderUserTooltip(e, l.startTime, l.endTime),
                                      "aria-label": (0, f.QV)(e, { decoration: "never" }),
                                      children: (0, r.jsx)(
                                          o.euF,
                                          b(
                                              {
                                                  ref: this.playerAvatarRef,
                                                  className: a()(g.jd, { [g.hC]: !i }),
                                                  src: e.getAvatarURL(void 0, 32),
                                                  "aria-label": e.username,
                                                  size: o._3J.SIZE_32,
                                              },
                                              t,
                                          ),
                                      ),
                                  }),
                          },
                          e.id,
                      );
            }),
            m(this, "renderPlayerOverflow", (e, t, n) =>
                (0, r.jsx)(
                    "div",
                    {
                        className: g.gQ,
                        children: e,
                    },
                    n,
                ),
            );
    }
}
let O = E;
