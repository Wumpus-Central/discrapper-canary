t.d(n, { Z: () => Z });
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
    x = t(151545),
    b = t(527790),
    g = t(769140),
    h = t(864141),
    j = t(264481),
    v = t(693408),
    _ = t(228168),
    y = t(981631),
    O = t(388032),
    I = t(158069);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, guildId: P, channelId: T, subsection: N, onClose: A } = e,
        { voiceActivityStatusEnabled: C } = (0, i.U)({ location: "UserProfileModalV2Activity" }),
        E = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: S, recent: w, stream: B } = (0, m.Z)(n.id),
        { voiceChannel: D, voiceActivity: L } = (0, p.Z)({
            userId: n.id,
            guildId: P,
        }),
        R = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        M = (0, o.e7)([d.Z, s.Z], () => {
            let e = U ? d.Z.getStatus() : s.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        k = S.length > 0 || null != B,
        G = C && null == B && null == L && null != D,
        F = !M && (k || G),
        V = w.length > 0;
    if (!F && !V && R)
        return (0, r.jsx)("div", {
            className: I.cards,
            children: Array.from({ length: 8 }).map((e, n) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: I.loadingItem,
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
    if (!F && !V && !R) {
        var W;
        return U
            ? (0, r.jsx)(j.Uf, { onClose: A })
            : (0, r.jsx)(j.P9, {
                  user: n,
                  guildId: null != (W = null == Z ? void 0 : Z.guildId) ? W : P,
                  channelId: T,
                  onClose: A,
              });
    }
    return (0, r.jsxs)(l.Ttm, {
        className: I.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(v.Z, {
                      heading: O.intl.string(O.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: I.cards,
                          children: [
                              !E &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(h.Z, {
                                          user: n,
                                          currentUser: t,
                                          voiceChannel: D,
                                          onClose: A,
                                      }),
                                  }),
                              null != B &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(g.Z, {
                                          user: n,
                                          currentUser: t,
                                          stream: B,
                                          onClose: A,
                                      }),
                                  }),
                              S.map((e, o) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(x.Z, {
                                              user: n,
                                              currentUser: t,
                                              activity: e,
                                              onClose: A,
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
                                          onClose: A,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            V
                ? (0, r.jsx)(v.Z, {
                      heading: O.intl.string(O.t.jzgEoK),
                      introText: U
                          ? O.intl.format(O.t["4bk9Ag"], {
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
                      scrollIntoView: N === _.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: I.cards,
                          children: w.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(b.Z, {
                                          user: n,
                                          entry: e,
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
