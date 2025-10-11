n.d(t, { Z: () => P });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(833664),
    o = n(468363),
    s = n(353647),
    c = n(272304),
    u = n(566898),
    d = n(158776),
    p = n(885110),
    f = n(63063),
    h = n(209698),
    g = n(369566),
    m = n(29899),
    b = n(168463),
    _ = n(151545),
    O = n(527790),
    E = n(769140),
    v = n(864141),
    y = n(264481),
    I = n(693408),
    C = n(661462),
    S = n(228168),
    T = n(981631),
    N = n(388032),
    j = n(158069);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guildId: x, channelId: A, subsection: Z, onClose: w } = e,
        { voiceActivityStatusEnabled: L } = (0, o.U)({ location: "UserProfileModalV2Activity" }),
        R = (0, h.b)({ location: "UserProfileModalV2Activity" }),
        D = (0, c.P6)("UserProfileModalV2Activity"),
        { live: k, recent: M, stream: U } = (0, g.Z)(t.id),
        { voiceChannel: G, voiceActivity: B } = (0, m.Z)({
            userId: t.id,
            guildId: x,
        }),
        H = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(t.id)),
        V = t.id === n.id,
        F = (0, i.e7)([p.Z, d.Z], () => {
            let e = V ? p.Z.getStatus() : d.Z.getStatus(t.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        z = k.length > 0 || null != U,
        W = L && null == U && null == B && null != G,
        Y = !F && (z || W),
        q = M.length > 0,
        K = k.some((e) => (0, a.Z)(e));
    if (!Y && !q && H)
        return (0, r.jsx)("div", {
            className: j.cards,
            children: Array.from({ length: 8 }).map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: j.loadingItem,
                        children: [
                            (0, r.jsx)(u.ZT, {
                                width: 60,
                                opacity: 0.08,
                            }),
                            (0, r.jsx)(u.ZT, {
                                width: 135,
                                opacity: 0.08,
                            }),
                        ],
                    },
                    t,
                ),
            ),
        });
    if (!Y && !q && !H) {
        var Q;
        return V
            ? (0, r.jsx)(y.Uf, { onClose: w })
            : (0, r.jsx)(y.P9, {
                  user: t,
                  guildId: null != (Q = null == P ? void 0 : P.guildId) ? Q : x,
                  channelId: A,
                  onClose: w,
              });
    }
    return (0, r.jsxs)(C.F, {
        className: j.scroller,
        fade: !0,
        children: [
            (() => {
                let e = V && D && !K;
                return Y
                    ? (0, r.jsx)(I.Z, {
                          heading: N.intl.string(N.t.J6STd3),
                          children: (0, r.jsxs)("ul", {
                              className: j.cards,
                              children: [
                                  e && (0, r.jsx)("li", { children: (0, r.jsx)(b.Z, { variant: "horizontal" }) }),
                                  !R &&
                                      W &&
                                      (0, r.jsx)("li", {
                                          children: (0, r.jsx)(v.Z, {
                                              user: t,
                                              currentUser: n,
                                              voiceChannel: G,
                                              onClose: w,
                                          }),
                                      }),
                                  null != U &&
                                      (0, r.jsx)("li", {
                                          children: (0, r.jsx)(E.Z, {
                                              user: t,
                                              currentUser: n,
                                              stream: U,
                                              onClose: w,
                                          }),
                                      }),
                                  k.map((e, i) =>
                                      (0, r.jsx)(
                                          "li",
                                          {
                                              children: (0, r.jsx)(_.Z, {
                                                  user: t,
                                                  currentUser: n,
                                                  activity: e,
                                                  onClose: w,
                                              }),
                                          },
                                          "live-".concat(i),
                                      ),
                                  ),
                                  R &&
                                      W &&
                                      (0, r.jsx)("li", {
                                          children: (0, r.jsx)(v.Z, {
                                              user: t,
                                              currentUser: n,
                                              voiceChannel: G,
                                              onClose: w,
                                          }),
                                      }),
                              ],
                          }),
                      })
                    : e
                      ? (0, r.jsx)(I.Z, {
                            heading: N.intl.string(N.t.J6STd3),
                            children: (0, r.jsx)(b.Z, { variant: "horizontal" }),
                        })
                      : null;
            })(),
            q
                ? (0, r.jsx)(I.Z, {
                      heading: N.intl.string(N.t.jzgEoK),
                      introText: V
                          ? N.intl.format(N.t["4bk9Ag"], {
                                learnMoreHook: (e, t) =>
                                    (0, r.jsx)(
                                        l.Anchor,
                                        {
                                            href: f.Z.getArticleURL(T.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        t,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: Z === S.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: j.cards,
                          children: M.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(O.Z, {
                                          user: t,
                                          entry: e,
                                          onClose: w,
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
