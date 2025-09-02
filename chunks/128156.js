n.d(t, { Z: () => I });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(468363),
    o = n(353647),
    c = n(566898),
    s = n(158776),
    u = n(885110),
    d = n(63063),
    f = n(209698),
    g = n(369566),
    b = n(29899),
    p = n(151545),
    m = n(527790),
    O = n(769140),
    j = n(864141),
    y = n(264481),
    x = n(693408),
    v = n(661462),
    h = n(228168),
    _ = n(981631),
    P = n(388032),
    w = n(158069);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: S, channelId: E, subsection: T, onClose: N } = e,
        { voiceActivityStatusEnabled: C } = (0, a.U)({ location: "UserProfileModalV2Activity" }),
        A = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: k, recent: Z, stream: D } = (0, g.Z)(t.id),
        { voiceChannel: L, voiceActivity: R } = (0, b.Z)({
            userId: t.id,
            guildId: S,
        }),
        G = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)),
        B = t.id === n.id,
        F = (0, i.e7)([u.Z, s.Z], () => {
            let e = B ? u.Z.getStatus() : s.Z.getStatus(t.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        M = k.length > 0 || null != D,
        U = C && null == D && null == R && null != L,
        z = !F && (M || U),
        K = Z.length > 0;
    if (!z && !K && G)
        return (0, r.jsx)("div", {
            className: w.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: w.loadingItem,
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
    if (!z && !K && !G) {
        var W;
        return B
            ? (0, r.jsx)(y.Uf, { onClose: N })
            : (0, r.jsx)(y.P9, {
                  user: t,
                  guildId: null != (W = null == I ? void 0 : I.guildId) ? W : S,
                  channelId: E,
                  onClose: N,
              });
    }
    return (0, r.jsxs)(v.F, {
        className: w.scroller,
        fade: !0,
        children: [
            z
                ? (0, r.jsx)(x.Z, {
                      heading: P.intl.string(P.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: w.cards,
                          children: [
                              !A &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: L,
                                          onClose: N,
                                      }),
                                  }),
                              null != D &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(O.Z, {
                                          user: t,
                                          currentUser: n,
                                          stream: D,
                                          onClose: N,
                                      }),
                                  }),
                              k.map((e, i) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(p.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: N,
                                          }),
                                      },
                                      "live-".concat(i),
                                  ),
                              ),
                              A &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
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
            K
                ? (0, r.jsx)(x.Z, {
                      heading: P.intl.string(P.t.jzgEoK),
                      introText: B
                          ? P.intl.format(P.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        l.eee,
                                        {
                                            href: d.Z.getArticleURL(_.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: T === h.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: w.cards,
                          children: Z.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(m.Z, {
                                          user: t,
                                          entry: e,
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
