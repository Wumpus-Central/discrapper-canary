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
    f = n(369566),
    g = n(29899),
    p = n(151545),
    b = n(527790),
    m = n(769140),
    h = n(864141),
    y = n(264481),
    v = n(693408),
    O = n(661462),
    j = n(228168),
    x = n(981631),
    P = n(388032),
    I = n(644773);
function w(e) {
    let { user: t, currentUser: n, displayProfile: w, guildId: S, channelId: E, onClose: T } = e,
        { voiceActivityStatusEnabled: _ } = (0, l.U)({ location: "UserProfileModalV2Activity" }),
        { live: C, recent: D, stream: k } = (0, f.Z)(t.id),
        { voiceChannel: N, voiceActivity: A } = (0, g.Z)({
            userId: t.id,
            guildId: S,
        }),
        Z = (0, i.e7)([o.Z], () => o.Z.isFetchingUserOutbox(t.id)),
        R = t.id === n.id,
        G = (0, i.e7)([u.Z, s.Z], () => {
            let e = R ? u.Z.getStatus() : s.Z.getStatus(t.id);
            return e === a.Skl.OFFLINE || e === a.Skl.INVISIBLE;
        }),
        M = C.length > 0 || null != k,
        L = _ && null == k && null == A && null != N,
        B = !G && (M || L),
        F = D.length > 0;
    if (!B && !F && Z)
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
    if (!B && !F && !Z) {
        var U;
        return R
            ? (0, r.jsx)(y.Uf, { onClose: T })
            : (0, r.jsx)(y.P9, {
                  user: t,
                  guildId: null != (U = null == w ? void 0 : w.guildId) ? U : S,
                  channelId: E,
                  onClose: T,
              });
    }
    return (0, r.jsxs)(O.F, {
        className: I.scroller,
        fade: !0,
        children: [
            B
                ? (0, r.jsx)(v.Z, {
                      heading: P.intl.string(P.t.J6STd9),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              null != k &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(m.Z, {
                                          user: t,
                                          currentUser: n,
                                          stream: k,
                                          onClose: T,
                                      }),
                                  }),
                              C.map((e, i) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(p.Z, {
                                              user: t,
                                              currentUser: n,
                                              activity: e,
                                              onClose: T,
                                          }),
                                      },
                                      "live-".concat(i),
                                  ),
                              ),
                              L &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: t,
                                          currentUser: n,
                                          voiceChannel: N,
                                          onClose: T,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            F
                ? (0, r.jsx)(v.Z, {
                      heading: P.intl.string(P.t.jzgEoL),
                      introText: R
                          ? P.intl.format(P.t["4bk9Ak"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        a.Anchor,
                                        {
                                            href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollTargetId: j.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: I.cards,
                          children: D.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(b.Z, {
                                          user: t,
                                          entry: e,
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
