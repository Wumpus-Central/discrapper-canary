n.d(t, { Z: () => Z });
var r = n(951288);
n(647438);
var o = n(442837),
    i = n(481060),
    l = n(468363),
    a = n(353647),
    c = n(566898),
    s = n(158776),
    d = n(885110),
    u = n(63063),
    f = n(209698),
    p = n(369566),
    m = n(29899),
    b = n(151545),
    g = n(744802),
    h = n(493043),
    x = n(864141),
    _ = n(264481),
    j = n(693408),
    v = n(228168),
    y = n(981631),
    I = n(388032),
    O = n(158069);
function Z(e) {
    let { user: t, currentUser: n, displayProfile: Z, guildId: P, channelId: T, subsection: C, onClose: A } = e,
        { voiceActivityStatusEnabled: N } = (0, l.U)({ location: "UserProfileModalV2Activity" }),
        E = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: S, recent: w, stream: B } = (0, p.Z)(t.id),
        { voiceChannel: L, voiceActivity: D } = (0, m.Z)({
            userId: t.id,
            guildId: P,
        }),
        M = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        U = t.id === n.id,
        R = (0, o.e7)([d.Z, s.Z], () => {
            let e = U ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        k = S.length > 0 || null != B,
        G = N && null == B && null == D && null != L,
        V = !R && (k || G),
        F = w.length > 0;
    if (!V && !F && M)
        return (0, r.jsx)("div", {
            className: O.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: O.loadingItem,
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
    if (!V && !F && !M) {
        var Y;
        return U
            ? (0, r.jsx)(_.Uf, { onClose: A })
            : (0, r.jsx)(_.P9, {
                  user: t,
                  guildId: null != (Y = null == Z ? void 0 : Z.guildId) ? Y : void 0,
                  channelId: T,
                  onClose: A,
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [
            V
                ? (0, r.jsx)(j.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: O.cards,
                          children: [
                              !E &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(x.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: A,
                                      }),
                                  }),
                              null != B &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: t,
                                          currentUser: n,
                                          stream: B,
                                          onClose: A,
                                          profileGuildId: null == Z ? void 0 : Z.guildId,
                                      }),
                                  }),
                              S.map((e, o) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(b.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: A,
                                              profileGuildId: null == Z ? void 0 : Z.guildId,
                                          }),
                                      },
                                      "live-".concat(o),
                                  ),
                              ),
                              E &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(x.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: A,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            F
                ? (0, r.jsx)(j.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      introText: U
                          ? I.intl.format(I.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: C === v.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: O.cards,
                          children: w.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(g.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: t,
                                          currentUser: n,
                                          entry: e,
                                          profileGuildId: null == Z ? void 0 : Z.guildId,
                                          onClose: A,
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
