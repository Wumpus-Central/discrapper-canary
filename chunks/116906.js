t.d(n, { Z: () => Z });
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    o = t(468363),
    s = t(353647),
    a = t(158776),
    c = t(885110),
    d = t(63063),
    u = t(209698),
    m = t(369566),
    p = t(29899),
    f = t(678738),
    h = t(151545),
    j = t(527790),
    x = t(769140),
    v = t(864141),
    g = t(228168),
    b = t(981631),
    y = t(388032),
    O = t(7994),
    I = t(878449);
function Z(e) {
    let { user: n, currentUser: t, guildId: Z, subsection: P, onClose: N } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: "UserProfileModalActivity" }),
        A = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: E, recent: S, stream: C } = (0, m.Z)(n.id),
        { voiceChannel: w, voiceActivity: _ } = (0, p.Z)({
            userId: n.id,
            guildId: Z,
        }),
        D = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        R = n.id === t.id,
        L = (0, i.e7)([c.Z, a.Z], () => {
            let e = R ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === r.Skl.OFFLINE || e === r.Skl.INVISIBLE;
        }),
        M = E.length > 0 || null != C,
        U = T && null == C && null == _ && null != w,
        k = !L && (M || U),
        B = S.length > 0;
    return k || B || !D
        ? (0, l.jsxs)(r.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, l.jsx)(f.Z, {
                            "aria-label": y.intl.string(y.t.J6STd3),
                            children: (0, l.jsxs)("ul", {
                                className: O.activityList,
                                children: [
                                    !A &&
                                        U &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(v.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: w,
                                                onClose: N,
                                            }),
                                        }),
                                    null != C &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(x.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: C,
                                                onClose: N,
                                            }),
                                        }),
                                    E.map((e, i) =>
                                        (0, l.jsx)(
                                            "li",
                                            {
                                                children: (0, l.jsx)(h.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: N,
                                                }),
                                            },
                                            "live-".concat(i),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  B
                      ? (0, l.jsx)(f.Z, {
                            heading: y.intl.string(y.t.M0zgnZ),
                            introText: R
                                ? y.intl.format(y.t["4bk9Ag"], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              r.eee,
                                              {
                                                  href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: P === g.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: O.activityList,
                                children: S.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        {
                                            children: (0, l.jsx)(j.Z, {
                                                user: n,
                                                entry: e,
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
        : (0, l.jsx)("div", {
              className: I.empty,
              children: (0, l.jsx)(r.$jN, {}),
          });
}
