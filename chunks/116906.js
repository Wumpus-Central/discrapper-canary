t.d(n, { Z: () => O });
var r = t(951288);
t(647438);
var o = t(442837),
    l = t(481060),
    i = t(468363),
    c = t(353647),
    a = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(209698),
    f = t(369566),
    m = t(29899),
    p = t(678738),
    b = t(151545),
    g = t(744802),
    x = t(493043),
    h = t(864141),
    j = t(228168),
    v = t(981631),
    _ = t(388032),
    y = t(7994),
    I = t(878449);
function O(e) {
    let { user: n, currentUser: t, displayProfile: O, guildId: P, subsection: Z, onClose: T } = e,
        { voiceActivityStatusEnabled: A } = (0, i.U)({ location: "UserProfileModalActivity" }),
        N = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: C, recent: E, stream: S } = (0, f.Z)(n.id),
        { voiceChannel: w, voiceActivity: B } = (0, m.Z)({
            userId: n.id,
            guildId: P,
        }),
        D = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        R = (0, o.e7)([s.Z, a.Z], () => {
            let e = L ? s.Z.getStatus() : a.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        U = C.length > 0 || null != S,
        M = A && null == S && null == B && null != w,
        k = !R && (U || M),
        G = E.length > 0;
    return k || G || !D
        ? (0, r.jsxs)(l.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, r.jsx)(p.Z, {
                            "aria-label": _.intl.string(_.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: y.activityList,
                                children: [
                                    !N &&
                                        M &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(h.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: w,
                                                onClose: T,
                                            }),
                                        }),
                                    null != S &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(x.Z, {
                                                location: "UserProfileModalActivity",
                                                user: n,
                                                currentUser: t,
                                                stream: S,
                                                onClose: T,
                                                profileGuildId: null == O ? void 0 : O.guildId,
                                            }),
                                        }),
                                    C.map((e, o) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(b.Z, {
                                                    user: n,
                                                    currentUser: t,
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
                      ? (0, r.jsx)(p.Z, {
                            heading: _.intl.string(_.t.M0zgnZ),
                            introText: L
                                ? _.intl.format(_.t["4bk9Ag"], {
                                      learnMoreHook: (e, n) =>
                                          (0, r.jsx)(
                                              l.eee,
                                              {
                                                  href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: Z === j.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: y.activityList,
                                children: E.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(g.Z, {
                                                location: "UserProfileModalActivity",
                                                user: n,
                                                currentUser: t,
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
              children: (0, r.jsx)(l.$jN, {}),
          });
}
