n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(481060),
    i = n(468363),
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
    j = n(493043),
    y = n(864141),
    h = n(264481),
    v = n(693408),
    O = n(228168),
    x = n(981631),
    _ = n(388032),
    I = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: E, channelId: Z, subsection: N, onClose: T } = e,
        { voiceActivityStatusEnabled: A } = (0, i.U)({ location: "UserProfileModalV2Activity" }),
        S = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: w, recent: C, stream: G } = (0, p.Z)(t.id),
        { voiceChannel: M, voiceActivity: L } = (0, m.Z)({
            userId: t.id,
            guildId: E,
        }),
        R = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        k = (0, l.e7)([d.Z, s.Z], () => {
            let e = D ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        U = w.length > 0 || null != G,
        B = A && null == G && null == L && null != M,
        F = !k && (U || B),
        V = C.length > 0;
    if (!F && !V && R)
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
    if (!F && !V && !R) {
        var Y;
        return D
            ? (0, r.jsx)(h.Uf, { onClose: T })
            : (0, r.jsx)(h.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: Z,
                  onClose: T,
              });
    }
    return (0, r.jsxs)(o.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(v.Z, {
                      heading: _.intl.string(_.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !S &&
                                  B &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: M,
                                          onClose: T,
                                      }),
                                  }),
                              null != G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
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
                              S &&
                                  B &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: M,
                                          onClose: T,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            V
                ? (0, r.jsx)(v.Z, {
                      heading: _.intl.string(_.t.jzgEoK),
                      introText: D
                          ? _.intl.format(_.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        o.eee,
                                        {
                                            href: u.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
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
