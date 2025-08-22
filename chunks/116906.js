t.d(n, { Z: () => I });
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
    x = t(151545),
    b = t(527790),
    g = t(769140),
    h = t(864141),
    j = t(228168),
    v = t(981631),
    _ = t(388032),
    y = t(7994),
    O = t(878449);
function I(e) {
    let { user: n, currentUser: t, guildId: I, subsection: Z, onClose: P } = e,
        { voiceActivityStatusEnabled: T } = (0, i.U)({ location: "UserProfileModalActivity" }),
        N = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: A, recent: C, stream: E } = (0, f.Z)(n.id),
        { voiceChannel: S, voiceActivity: w } = (0, m.Z)({
            userId: n.id,
            guildId: I,
        }),
        B = (0, o.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        D = n.id === t.id,
        L = (0, o.e7)([s.Z, a.Z], () => {
            let e = D ? s.Z.getStatus() : a.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        R = A.length > 0 || null != E,
        U = T && null == E && null == w && null != S,
        M = !L && (R || U),
        k = C.length > 0;
    return M || k || !B
        ? (0, r.jsxs)(l.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  M
                      ? (0, r.jsx)(p.Z, {
                            "aria-label": _.intl.string(_.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: y.activityList,
                                children: [
                                    !N &&
                                        U &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(h.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: S,
                                                onClose: P,
                                            }),
                                        }),
                                    null != E &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(g.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: E,
                                                onClose: P,
                                            }),
                                        }),
                                    A.map((e, o) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(x.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: P,
                                                }),
                                            },
                                            "live-".concat(o),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  k
                      ? (0, r.jsx)(p.Z, {
                            heading: _.intl.string(_.t.M0zgnZ),
                            introText: D
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
                                children: C.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(b.Z, {
                                                user: n,
                                                entry: e,
                                                onClose: P,
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
              className: O.empty,
              children: (0, r.jsx)(l.$jN, {}),
          });
}
