n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    l = n(468363),
    o = n(353647),
    c = n(566898),
    s = n(158776),
    u = n(885110),
    d = n(63063),
    f = n(209698),
    g = n(369566),
    p = n(29899),
    m = n(151545),
    b = n(527790),
    h = n(769140),
    y = n(864141),
    O = n(264481),
    v = n(693408),
    j = n(661462),
    x = n(228168),
    _ = n(981631),
    P = n(388032),
    I = n(158069);
function w(e) {
    let { user: t, currentUser: n, displayProfile: w, guildId: S, channelId: E, subsection: T, onClose: C } = e,
        { voiceActivityStatusEnabled: D } = (0, l.U)({ location: "UserProfileModalV2Activity" }),
        k = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: N, recent: A, stream: Z } = (0, g.Z)(t.id),
        { voiceChannel: R, voiceActivity: L } = (0, p.Z)({
            userId: t.id,
            guildId: S,
        }),
        M = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)),
        G = t.id === n.id,
        B = (0, i.e7)([u.Z, s.Z], () => {
            let e = G ? u.Z.getStatus() : s.Z.getStatus(t.id);
            return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE;
        }),
        F = N.length > 0 || null != Z,
        U = D && null == Z && null == L && null != R,
        W = !B && (F || U),
        H = A.length > 0;
    if (!W && !H && M)
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
    if (!W && !H && !M) {
        var z;
        return G
            ? (0, r.jsx)(O.Uf, { onClose: C })
            : (0, r.jsx)(O.P9, {
                  user: t,
                  guildId: null != (z = null == w ? void 0 : w.guildId) ? z : S,
                  channelId: E,
                  onClose: C,
              });
    }
    return (0, r.jsxs)(j.F, {
        className: I.scroller,
        fade: !0,
        children: [
            W
                ? (0, r.jsx)(v.Z, {
                      heading: P.intl.string(P.t.J6STd9),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !k &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: R,
                                          onClose: C,
                                      }),
                                  }),
                              null != Z &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: t,
                                          currentUser: n,
                                          stream: Z,
                                          onClose: C,
                                      }),
                                  }),
                              N.map((e, i) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(m.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: C,
                                          }),
                                      },
                                      "live-".concat(i),
                                  ),
                              ),
                              k &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: R,
                                          onClose: C,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            H
                ? (0, r.jsx)(v.Z, {
                      heading: P.intl.string(P.t.jzgEoL),
                      introText: G
                          ? P.intl.format(P.t["4bk9Ak"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        a.Anchor,
                                        {
                                            href: d.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: T === x.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: I.cards,
                          children: A.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(b.Z, {
                                          user: t,
                                          entry: e,
                                          onClose: C,
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
