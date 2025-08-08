n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    o = n(468363),
    a = n(353647),
    c = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    p = n(369566),
    m = n(29899),
    g = n(151545),
    b = n(744802),
    h = n(493043),
    j = n(864141),
    y = n(264481),
    x = n(693408),
    O = n(228168),
    v = n(981631),
    _ = n(388032),
    I = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: E, channelId: Z, subsection: N, onClose: T } = e,
        { voiceActivityStatusEnabled: S } = (0, o.U)({ location: "UserProfileModalV2Activity" }),
        A = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: w, recent: C, stream: G } = (0, p.Z)(t.id),
        { voiceChannel: R, voiceActivity: L } = (0, m.Z)({
            userId: t.id,
            guildId: E,
        }),
        M = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        k = (0, l.e7)([d.Z, s.Z], () => {
            let e = D ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        B = w.length > 0 || null != G,
        U = S && null == G && null == L && null != R,
        F = !k && (B || U),
        V = C.length > 0;
    if (!F && !V && M)
        return (0, r.jsx)("div", {
            className: I.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: I.loadingItem,
                        children: [
                            (0, r.jsx)(c.ZT, {
                                width: 60,
                                opacity: 0.08,
                            }),
                            (0, r.jsx)(c.ZT, {
                                width: 135,
                                opacity: 0.08,
                            }),
                        ],
                    },
                    t,
                ),
            ),
        });
    if (!F && !V && !M) {
        var Y;
        return D
            ? (0, r.jsx)(y.Uf, { onClose: T })
            : (0, r.jsx)(y.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: Z,
                  onClose: T,
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(x.Z, {
                      heading: _.intl.string(_.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !A &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: R,
                                          onClose: T,
                                      }),
                                  }),
                              null != G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: t,
                                          currentUser: n,
                                          stream: G,
                                          onClose: T,
                                          profileGuildId: null == P ? void 0 : P.guildId,
                                      }),
                                  }),
                              w.map((e, l) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(g.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: T,
                                              profileGuildId: null == P ? void 0 : P.guildId,
                                          }),
                                      },
                                      "live-".concat(l),
                                  ),
                              ),
                              A &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: R,
                                          onClose: T,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            V
                ? (0, r.jsx)(x.Z, {
                      heading: _.intl.string(_.t.jzgEoK),
                      introText: D
                          ? _.intl.format(_.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: N === O.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: I.cards,
                          children: C.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(b.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: t,
                                          currentUser: n,
                                          entry: e,
                                          profileGuildId: null == P ? void 0 : P.guildId,
                                          onClose: T,
                                      }),
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  })
                : null,
        ],
    });
}
