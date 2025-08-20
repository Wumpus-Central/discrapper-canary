t.d(n, { Z: () => P });
var r = t(951288);
t(647438);
var o = t(442837),
    l = t(481060),
    i = t(468363),
    c = t(353647),
    a = t(566898),
    s = t(158776),
    d = t(885110),
    u = t(63063),
    f = t(209698),
    m = t(369566),
    p = t(29899),
    b = t(151545),
    g = t(744802),
    x = t(493043),
    h = t(864141),
    j = t(264481),
    v = t(693408),
    _ = t(228168),
    y = t(981631),
    I = t(388032),
    O = t(158069);
function P(e) {
    let { user: n, currentUser: t, displayProfile: P, guildId: Z, channelId: T, subsection: A, onClose: N } = e,
        { voiceActivityStatusEnabled: C } = (0, i.U)({ location: "UserProfileModalV2Activity" }),
        E = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: S, recent: w, stream: B } = (0, m.Z)(n.id),
        { voiceChannel: D, voiceActivity: L } = (0, p.Z)({
            userId: n.id,
            guildId: Z,
        }),
        R = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        M = (0, o.e7)([d.Z, s.Z], () => {
            let e = U ? d.Z.getStatus() : s.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        k = S.length > 0 || null != B,
        G = C && null == B && null == L && null != D,
        V = !M && (k || G),
        F = w.length > 0;
    if (!V && !F && R)
        return (0, r.jsx)("div", {
            className: O.cards,
            children: Array.from({ length: 8 }).map((e, n) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: O.loadingItem,
                        children: [
                            (0, r.jsx)(a.ZT, {
                                width: 60,
                                opacity: 0.08,
                            }),
                            (0, r.jsx)(a.ZT, {
                                width: 135,
                                opacity: 0.08,
                            }),
                        ],
                    },
                    n,
                ),
            ),
        });
    if (!V && !F && !R) {
        var Y;
        return U
            ? (0, r.jsx)(j.Uf, { onClose: N })
            : (0, r.jsx)(j.P9, {
                  user: n,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: T,
                  onClose: N,
              });
    }
    return (0, r.jsxs)(l.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [
            V
                ? (0, r.jsx)(v.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: O.cards,
                          children: [
                              !E &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: n,
                                          currentUser: t,
                                          voiceChannel: D,
                                          onClose: N,
                                      }),
                                  }),
                              null != B &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(x.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: n,
                                          currentUser: t,
                                          stream: B,
                                          onClose: N,
                                          profileGuildId: null == P ? void 0 : P.guildId,
                                      }),
                                  }),
                              S.map((e, o) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(b.Z, {
                                              user: n,
                                              currentUser: t,
                                              activity: e,
                                              onClose: N,
                                              profileGuildId: null == P ? void 0 : P.guildId,
                                          }),
                                      },
                                      "live-".concat(o),
                                  ),
                              ),
                              E &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: n,
                                          currentUser: t,
                                          voiceChannel: D,
                                          onClose: N,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            F
                ? (0, r.jsx)(v.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      introText: U
                          ? I.intl.format(I.t["4bk9Ag"], {
                                learnMoreHook: (e, n) =>
                                    (0, r.jsx)(
                                        l.eee,
                                        {
                                            href: u.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        n,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: A === _.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: O.cards,
                          children: w.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(g.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: n,
                                          currentUser: t,
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
