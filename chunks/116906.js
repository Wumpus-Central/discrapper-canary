n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    o = n(468363),
    a = n(353647),
    c = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(209698),
    f = n(369566),
    m = n(29899),
    p = n(678738),
    g = n(151545),
    b = n(744802),
    j = n(493043),
    h = n(864141),
    x = n(228168),
    y = n(981631),
    v = n(388032),
    O = n(316879),
    I = n(301150);
function _(e) {
    let { user: t, currentUser: n, displayProfile: _, guildId: P, subsection: Z, onClose: N } = e,
        { voiceActivityStatusEnabled: E } = (0, o.U)({ location: "UserProfileModalActivity" }),
        S = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: T, recent: w, stream: A } = (0, f.Z)(t.id),
        { voiceChannel: C, voiceActivity: L } = (0, m.Z)({
            userId: t.id,
            guildId: P,
        }),
        k = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        G = (0, l.e7)([s.Z, c.Z], () => {
            let e = D ? s.Z.getStatus() : c.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = T.length > 0 || null != A,
        R = E && null == A && null == L && null != C,
        B = !G && (M || R),
        U = w.length > 0;
    return B || U || !k
        ? (0, r.jsxs)(i.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, r.jsx)(p.Z, {
                            "aria-label": v.intl.string(v.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: O.activityList,
                                children: [
                                    !S &&
                                        R &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(h.Z, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: C,
                                                onClose: N,
                                            }),
                                        }),
                                    null != A &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(j.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                stream: A,
                                                onClose: N,
                                                profileGuildId: null == _ ? void 0 : _.guildId,
                                            }),
                                        }),
                                    T.map((e, l) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(g.Z, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: N,
                                                    profileGuildId: null == _ ? void 0 : _.guildId,
                                                }),
                                            },
                                            "live-".concat(l),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  U
                      ? (0, r.jsx)(p.Z, {
                            heading: v.intl.string(v.t.M0zgnZ),
                            introText: D
                                ? v.intl.format(v.t["4bk9Ag"], {
                                      learnMoreHook: (e, t) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(y.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: Z === x.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: O.activityList,
                                children: w.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(b.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                entry: e,
                                                profileGuildId: null == _ ? void 0 : _.guildId,
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
          })
        : (0, r.jsx)("div", {
              className: I.empty,
              children: (0, r.jsx)(i.$jN, {}),
          });
}
