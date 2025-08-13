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
    j = n(493043),
    y = n(864141),
    x = n(264481),
    O = n(693408),
    h = n(228168),
    v = n(981631),
    _ = n(388032),
    I = n(850419);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: E, channelId: T, subsection: Z, onClose: N } = e,
        { voiceActivityStatusEnabled: S } = (0, o.U)({ location: "UserProfileModalV2Activity" }),
        w = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: A, recent: C, stream: D } = (0, p.Z)(t.id),
        { voiceChannel: L, voiceActivity: R } = (0, m.Z)({
            userId: t.id,
            guildId: E,
        }),
        k = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        G = t.id === n.id,
        M = (0, l.e7)([d.Z, s.Z], () => {
            let e = G ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        B = A.length > 0 || null != D,
        U = S && null == D && null == R && null != L,
        F = !M && (B || U),
        V = C.length > 0;
    if (!F && !V && k)
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
    if (!F && !V && !k) {
        var Y;
        return G
            ? (0, r.jsx)(x.Uf, { onClose: N })
            : (0, r.jsx)(x.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: T,
                  onClose: N,
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(O.Z, {
                      heading: _.intl.string(_.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !w &&
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
                              A.map((e, l) =>
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
                                      "live-".concat(l),
                                  ),
                              ),
                              w &&
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
                ? (0, r.jsx)(O.Z, {
                      heading: _.intl.string(_.t.jzgEoK),
                      introText: G
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
                      scrollIntoView: Z === h.Tb.RECENT_ACTIVITY,
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
