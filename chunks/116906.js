n.d(t, { Z: () => I });
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
    _ = n(301150);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: P, subsection: Z, onClose: N } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: "UserProfileModalActivity" }),
        E = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: w, recent: S, stream: A } = (0, f.Z)(t.id),
        { voiceChannel: C, voiceActivity: L } = (0, m.Z)({
            userId: t.id,
            guildId: P,
        }),
        D = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        k = t.id === n.id,
        B = (0, l.e7)([s.Z, c.Z], () => {
            let e = k ? s.Z.getStatus() : c.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        R = w.length > 0 || null != A,
        M = T && null == A && null == L && null != C,
        G = !B && (R || M),
        U = S.length > 0;
    return G || U || !D
        ? (0, r.jsxs)(i.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  G
                      ? (0, r.jsx)(p.Z, {
                            "aria-label": v.intl.string(v.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: O.activityList,
                                children: [
                                    !E &&
                                        M &&
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
                                                profileGuildId: null == I ? void 0 : I.guildId,
                                            }),
                                        }),
                                    w.map((e, l) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(g.Z, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: N,
                                                    profileGuildId: null == I ? void 0 : I.guildId,
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
                            introText: k
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
                                children: S.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(b.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                entry: e,
                                                profileGuildId: null == I ? void 0 : I.guildId,
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
              className: _.empty,
              children: (0, r.jsx)(i.$jN, {}),
          });
}
