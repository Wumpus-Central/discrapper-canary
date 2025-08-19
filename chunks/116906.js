n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var o = n(442837),
    i = n(481060),
    l = n(468363),
    a = n(353647),
    c = n(158776),
    s = n(885110),
    d = n(63063),
    u = n(209698),
    f = n(369566),
    p = n(29899),
    m = n(678738),
    b = n(151545),
    g = n(744802),
    h = n(493043),
    x = n(864141),
    _ = n(228168),
    j = n(981631),
    v = n(388032),
    y = n(7994),
    I = n(878449);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, guildId: Z, subsection: P, onClose: T } = e,
        { voiceActivityStatusEnabled: C } = (0, l.U)({ location: "UserProfileModalActivity" }),
        A = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: N, recent: E, stream: S } = (0, f.Z)(t.id),
        { voiceChannel: w, voiceActivity: B } = (0, p.Z)({
            userId: t.id,
            guildId: Z,
        }),
        L = (0, o.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        D = t.id === n.id,
        M = (0, o.e7)([s.Z, c.Z], () => {
            let e = D ? s.Z.getStatus() : c.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        U = N.length > 0 || null != S,
        R = C && null == S && null == B && null != w,
        k = !M && (U || R),
        G = E.length > 0;
    return k || G || !L
        ? (0, r.jsxs)(i.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, r.jsx)(m.Z, {
                            "aria-label": v.intl.string(v.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: y.activityList,
                                children: [
                                    !A &&
                                        R &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(x.Z, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: w,
                                                onClose: T,
                                            }),
                                        }),
                                    null != S &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(h.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                stream: S,
                                                onClose: T,
                                                profileGuildId: null == O ? void 0 : O.guildId,
                                            }),
                                        }),
                                    N.map((e, o) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(b.Z, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: T,
                                                    profileGuildId: null == O ? void 0 : O.guildId,
                                                }),
                                            },
                                            "live-".concat(o),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  G
                      ? (0, r.jsx)(m.Z, {
                            heading: v.intl.string(v.t.M0zgnZ),
                            introText: D
                                ? v.intl.format(v.t["4bk9Ag"], {
                                      learnMoreHook: (e, t) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(j.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: P === _.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: y.activityList,
                                children: E.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(g.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                entry: e,
                                                profileGuildId: null == O ? void 0 : O.guildId,
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
          })
        : (0, r.jsx)("div", {
              className: I.empty,
              children: (0, r.jsx)(i.$jN, {}),
          });
}
