n.d(t, { Z: () => P });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
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
    j = n(493043),
    y = n(864141),
    O = n(264481),
    h = n(693408),
    x = n(228168),
    v = n(981631),
    _ = n(388032),
    I = n(158069);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: E, channelId: T, subsection: Z, onClose: N } = e,
        { voiceActivityStatusEnabled: w } = (0, o.U)({ location: "UserProfileModalV2Activity" }),
        S = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: A, recent: C, stream: D } = (0, p.Z)(t.id),
        { voiceChannel: L, voiceActivity: R } = (0, m.Z)({
            userId: t.id,
            guildId: E,
        }),
        G = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        B = (0, i.e7)([d.Z, s.Z], () => {
            let e = k ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        M = A.length > 0 || null != D,
        U = w && null == D && null == R && null != L,
        F = !B && (M || U),
        V = C.length > 0;
    if (!F && !V && G)
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
    if (!F && !V && !G) {
        var Y;
        return k
            ? (0, r.jsx)(O.Uf, { onClose: N })
            : (0, r.jsx)(O.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: T,
                  onClose: N,
              });
    }
    return (0, r.jsxs)(l.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(h.Z, {
                      heading: _.intl.string(_.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !S &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: N,
                                      }),
                                  }),
                              null != D &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: t,
                                          currentUser: n,
                                          stream: D,
                                          onClose: N,
                                          profileGuildId: null == P ? void 0 : P.guildId,
                                      }),
                                  }),
                              A.map((e, i) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(g.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: N,
                                              profileGuildId: null == P ? void 0 : P.guildId,
                                          }),
                                      },
                                      "live-".concat(i),
                                  ),
                              ),
                              S &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: N,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            V
                ? (0, r.jsx)(h.Z, {
                      heading: _.intl.string(_.t.jzgEoK),
                      introText: k
                          ? _.intl.format(_.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        l.eee,
                                        {
                                            href: u.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: Z === x.Tb.RECENT_ACTIVITY,
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
                                          onClose: N,
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
