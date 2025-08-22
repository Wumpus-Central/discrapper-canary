t.d(n, { Z: () => Z });
var r = t(951288);
t(647438);
var l = t(442837),
    o = t(481060),
    i = t(468363),
    c = t(353647),
    s = t(566898),
    a = t(158776),
    d = t(885110),
    u = t(63063),
    f = t(209698),
    m = t(369566),
    p = t(29899),
    h = t(151545),
    x = t(527790),
    b = t(769140),
    j = t(864141),
    g = t(264481),
    v = t(693408),
    y = t(228168),
    O = t(981631),
    I = t(388032),
    _ = t(158069);
function Z(e) {
    let { user: n, currentUser: t, displayProfile: Z, guildId: P, channelId: T, subsection: N, onClose: A } = e,
        { voiceActivityStatusEnabled: E } = (0, i.U)({ location: "UserProfileModalV2Activity" }),
        C = (0, f.b)({ location: "UserProfileModalV2Activity" }),
        { live: S, recent: w, stream: D } = (0, m.Z)(n.id),
        { voiceChannel: L, voiceActivity: B } = (0, p.Z)({
            userId: n.id,
            guildId: P,
        }),
        R = (0, l.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        U = n.id === t.id,
        M = (0, l.e7)([d.Z, a.Z], () => {
            let e = U ? d.Z.getStatus() : a.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        k = S.length > 0 || null != D,
        G = E && null == D && null == B && null != L,
        F = !M && (k || G),
        V = w.length > 0;
    if (!F && !V && R)
        return (0, r.jsx)("div", {
            className: _.cards,
            children: Array.from({ length: 8 }).map((e, n) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: _.loadingItem,
                        children: [
                            (0, r.jsx)(s.ZT, {
                                width: 60,
                                opacity: 0.08,
                            }),
                            (0, r.jsx)(s.ZT, {
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
        var Y;
        return U
            ? (0, r.jsx)(g.Uf, { onClose: A })
            : (0, r.jsx)(g.P9, {
                  user: n,
                  guildId: null != (Y = null == Z ? void 0 : Z.guildId) ? Y : P,
                  channelId: T,
                  onClose: A,
              });
    }
    return (0, r.jsxs)(o.Ttm, {
        className: _.scroller,
        fade: !0,
        children: [
            F
                ? (0, r.jsx)(v.Z, {
                      heading: I.intl.string(I.t.J6STd3),
                      children: (0, r.jsxs)("ul", {
                          className: _.cards,
                          children: [
                              !C &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          user: n,
                                          currentUser: t,
                                          voiceChannel: L,
                                          onClose: A,
                                      }),
                                  }),
                              null != D &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(b.Z, {
                                          user: n,
                                          currentUser: t,
                                          stream: D,
                                          onClose: A,
                                      }),
                                  }),
                              S.map((e, l) =>
                                  (0, r.jsx)(
                                      "li",
                                      {
                                          children: (0, r.jsx)(h.Z, {
                                              user: n,
                                              currentUser: t,
                                              activity: e,
                                              onClose: A,
                                          }),
                                      },
                                      "live-".concat(l),
                                  ),
                              ),
                              C &&
                                  G &&
                                  (0, r.jsx)("li", {
                                      children: (0, r.jsx)(j.Z, {
                                          user: n,
                                          currentUser: t,
                                          voiceChannel: L,
                                          onClose: A,
                                      }),
                                  }),
                          ],
                      }),
                  })
                : null,
            V
                ? (0, r.jsx)(v.Z, {
                      heading: I.intl.string(I.t.jzgEoK),
                      introText: U
                          ? I.intl.format(I.t["4bk9Ag"], {
                                learnMoreHook: (e, n) =>
                                    (0, r.jsx)(
                                        o.eee,
                                        {
                                            href: u.Z.getArticleURL(O.BhN.ACTIVITY_STATUS_SETTINGS),
                                            children: e,
                                        },
                                        n,
                                    ),
                            })
                          : void 0,
                      scrollIntoView: N === y.Tb.RECENT_ACTIVITY,
                      children: (0, r.jsx)("ul", {
                          className: _.cards,
                          children: w.map((e) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(x.Z, {
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
