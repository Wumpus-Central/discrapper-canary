n.d(t, { Z: () => S });
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
    b = n(151545),
    m = n(527790),
    h = n(769140),
    y = n(864141),
    v = n(264481),
    O = n(693408),
    j = n(661462),
    x = n(228168),
    P = n(981631),
    w = n(388032),
    I = n(644773);
function S(e) {
    let { user: t, currentUser: n, displayProfile: S, guildId: E, channelId: T, onClose: _ } = e,
        { voiceActivityStatusEnabled: C } = (0, l.U)({ location: "UserProfileModalV2Activity" }),
        D = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: k, recent: N, stream: A } = (0, g.Z)(t.id),
        { voiceChannel: Z, voiceActivity: R } = (0, p.Z)({
            userId: t.id,
            guildId: E,
        }),
        G = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)),
        M = t.id === n.id,
        L = (0, i.e7)([u.Z, s.Z], () => {
            let e = M ? u.Z.getStatus() : s.Z.getStatus(t.id);
            return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE;
        }),
        B = k.length > 0 || null != A,
        U = C && null == A && null == R && null != Z,
        F = !L && (B || U),
        W = N.length > 0;
    if (!F && !W && G)
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
    if (!F && !W && !G) {
        var H;
        return M
            ? (0, r.jsx)(v.Uf, { onClose: _ })
            : (0, r.jsx)(v.P9, {
                  user: t,
                  guildId: null != (H = null == S ? void 0 : S.guildId) ? H : E,
                  channelId: T,
                  onClose: _,
              });
    }
    return (0, r.jsxs)(j.F, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(O.Z, {
                      heading: w.intl.string(w.t.J6STd9),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !D &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: Z,
                                          onClose: _,
                                      }),
                                  }),
                              null != A &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: t,
                                          currentUser: n,
                                          stream: A,
                                          onClose: _,
                                      }),
                                  }),
                              k.map((e, i) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(b.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: _,
                                          }),
                                      },
                                      "live-".concat(i),
                                  ),
                              ),
                              D &&
                                  U &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(y.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: Z,
                                          onClose: _,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            W
                ? (0, r.jsx)(O.Z, {
                      heading: w.intl.string(w.t.jzgEoL),
                      introText: M
                          ? w.intl.format(w.t["4bk9Ak"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        a.Anchor,
                                        {
                                            href: d.Z.getArticleURL(P.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollTargetId: x.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: I.cards,
                          children: N.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(m.Z, {
                                          user: t,
                                          entry: e,
                                          onClose: _,
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
