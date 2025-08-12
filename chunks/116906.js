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
    p = n(29899),
    m = n(678738),
    g = n(151545),
    b = n(744802),
    j = n(493043),
    y = n(864141),
    x = n(228168),
    h = n(981631),
    O = n(388032),
    v = n(316879),
    _ = n(301150);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: P, subsection: E, onClose: Z } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: "UserProfileModalActivity" }),
        N = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: S, recent: w, stream: A } = (0, f.Z)(t.id),
        { voiceChannel: C, voiceActivity: L } = (0, p.Z)({
            userId: t.id,
            guildId: P,
        }),
        D = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        R = t.id === n.id,
        k = (0, l.e7)([s.Z, c.Z], () => {
            let e = R ? s.Z.getStatus() : c.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        M = S.length > 0 || null != A,
        G = T && null == A && null == L && null != C,
        B = !k && (M || G),
        U = w.length > 0;
    return B || U || !D
        ? (0, r.jsxs)(i.zJl, {
              className: v.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, r.jsx)(m.Z, {
                            "aria-label": O.intl.string(O.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: v.activityList,
                                children: [
                                    !N &&
                                        G &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(y.Z, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: C,
                                                onClose: Z,
                                            }),
                                        }),
                                    null != A &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(j.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                stream: A,
                                                onClose: Z,
                                                profileGuildId: null == I ? void 0 : I.guildId,
                                            }),
                                        }),
                                    S.map((e, l) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(g.Z, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: Z,
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
                      ? (0, r.jsx)(m.Z, {
                            heading: O.intl.string(O.t.M0zgnZ),
                            introText: R
                                ? O.intl.format(O.t["4bk9Ag"], {
                                      learnMoreHook: (e, t) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(h.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: E === x.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: v.activityList,
                                children: w.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(b.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                entry: e,
                                                profileGuildId: null == I ? void 0 : I.guildId,
                                                onClose: Z,
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
