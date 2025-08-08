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
    h = n(493043),
    j = n(864141),
    y = n(228168),
    x = n(981631),
    v = n(388032),
    O = n(316879),
    _ = n(301150);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: P, subsection: E, onClose: Z } = e,
        { voiceActivityStatusEnabled: N } = (0, o.U)({ location: "UserProfileModalActivity" }),
        S = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: T, recent: A, stream: w } = (0, f.Z)(t.id),
        { voiceChannel: C, voiceActivity: G } = (0, p.Z)({
            userId: t.id,
            guildId: P,
        }),
        L = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        M = t.id === n.id,
        R = (0, l.e7)([s.Z, c.Z], () => {
            let e = M ? s.Z.getStatus() : c.Z.getStatus(t.id);
            return e === i.Skl.OFFLINE || e === i.Skl.INVISIBLE;
        }),
        D = T.length > 0 || null != w,
        k = N && null == w && null == G && null != C,
        B = !R && (D || k),
        U = A.length > 0;
    return B || U || !L
        ? (0, r.jsxs)(i.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, r.jsx)(m.Z, {
                            "aria-label": v.intl.string(v.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: O.activityList,
                                children: [
                                    !S &&
                                        k &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(j.Z, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: C,
                                                onClose: Z,
                                            }),
                                        }),
                                    null != w &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(h.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                stream: w,
                                                onClose: Z,
                                                profileGuildId: null == I ? void 0 : I.guildId,
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
                            heading: v.intl.string(v.t.M0zgnZ),
                            introText: M
                                ? v.intl.format(v.t["4bk9Ag"], {
                                      learnMoreHook: (e, t) =>
                                          (0, r.jsx)(
                                              i.eee,
                                              {
                                                  href: d.Z.getArticleURL(x.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: E === y.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: O.activityList,
                                children: A.map((e) =>
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
