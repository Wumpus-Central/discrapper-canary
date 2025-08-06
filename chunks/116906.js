n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var l = n(442837),
    o = n(481060),
    i = n(468363),
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
    h = n(228168),
    v = n(981631),
    O = n(388032),
    x = n(316879),
    _ = n(301150);
function I(e) {
    let { user: t, currentUser: n, displayProfile: I, guildId: P, subsection: E, onClose: Z } = e,
        { voiceActivityStatusEnabled: N } = (0, i.U)({ location: "UserProfileModalActivity" }),
        T = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: A, recent: S, stream: w } = (0, f.Z)(t.id),
        { voiceChannel: C, voiceActivity: G } = (0, p.Z)({
            userId: t.id,
            guildId: P,
        }),
        M = (0, l.e7)([a.Z], () => a.Z.isFetchingUserOutbox(t.id)),
        L = t.id === n.id,
        R = (0, l.e7)([s.Z, c.Z], () => {
            let e = L ? s.Z.getStatus() : c.Z.getStatus(t.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        D = A.length > 0 || null != w,
        k = N && null == w && null == G && null != C,
        U = !R && (D || k),
        B = S.length > 0;
    return U || B || !M
        ? (0, r.jsxs)(o.zJl, {
              className: x.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, r.jsx)(m.Z, {
                            "aria-label": O.intl.string(O.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: x.activityList,
                                children: [
                                    !T &&
                                        k &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(y.Z, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: C,
                                                onClose: Z,
                                            }),
                                        }),
                                    null != w &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(j.Z, {
                                                location: "UserProfileModalActivity",
                                                user: t,
                                                currentUser: n,
                                                stream: w,
                                                onClose: Z,
                                                profileGuildId: null == I ? void 0 : I.guildId,
                                            }),
                                        }),
                                    A.map((e, l) =>
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
                  B
                      ? (0, r.jsx)(m.Z, {
                            heading: O.intl.string(O.t.M0zgnZ),
                            introText: L
                                ? O.intl.format(O.t["4bk9Ag"], {
                                      learnMoreHook: (e, t) =>
                                          (0, r.jsx)(
                                              o.eee,
                                              {
                                                  href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: E === h.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: x.activityList,
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
              children: (0, r.jsx)(o.$jN, {}),
          });
}
