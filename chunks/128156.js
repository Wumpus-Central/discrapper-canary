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
    m = n(369566),
    p = n(29899),
    g = n(151545),
    b = n(744802),
    j = n(493043),
    h = n(864141),
    x = n(264481),
    y = n(693408),
    v = n(228168),
    O = n(981631),
    I = n(388032),
    _ = n(514656);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: Z, channelId: N, subsection: E, onClose: S } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: "UserProfileModalV2Activity" }),
        w = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: A, recent: C, stream: L } = (0, m.Z)(t.id),
        { voiceChannel: k, voiceActivity: D } = (0, p.Z)({
            userId: t.id,
            guildId: Z,
        }),
        G = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        M = t.id === n.id,
        R = (0, l.e7)([d.Z, s.Z], () => {
            let e = M ? d.Z.getStatus() : s.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        B = A.length > 0 || null != L,
        U = T && null == L && null == D && null != k,
        F = !R && (B || U),
        V = C.length > 0;
    if (!F && !V && G)
        return (0, r.jsx)("div", {
            className: _.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: _.loadingItem,
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
        return M
            ? (0, r.jsx)(x.Uf, { onClose: S })
            : (0, r.jsx)(x.P9, {
                  user: t,
                  guildId: null != (Y = null == P ? void 0 : P.guildId) ? Y : void 0,
                  channelId: N,
                  onClose: S,
              });
    }
    return (0, r.jsxs)(i.Ttm, {
        className: _.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(y.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: _.cards,
                          children: [
                              !w &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: S,
                                      }),
                                  }),
                              null != L &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          location: "UserProfileModalV2Activity",
                                          user: t,
                                          currentUser: n,
                                          stream: L,
                                          onClose: S,
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
                                              onClose: S,
                                              profileGuildId: null == P ? void 0 : P.guildId,
                                          }),
                                      },
                                      "live-".concat(l),
                                  ),
                              ),
                              w &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: k,
                                          onClose: S,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            V
                ? (0, r.jsx)(y.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      introText: M
                          ? I.intl.format(I.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        i.eee,
                                        {
                                            href: u.Z.getArticleURL(O.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: E === v.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: _.cards,
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
                                          onClose: S,
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
