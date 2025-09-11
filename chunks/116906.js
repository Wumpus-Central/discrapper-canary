t.d(n, { Z: () => O });
var o = t(951288);
t(647438);
var r = t(442837),
    l = t(481060),
    i = t(468363),
    c = t(353647),
    a = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(209698),
    f = t(369566),
    p = t(29899),
    m = t(678738),
    x = t(151545),
    b = t(527790),
    h = t(769140),
    g = t(864141),
    j = t(228168),
    v = t(981631),
    y = t(388032),
    _ = t(847540),
    I = t(883172);
function O(e) {
    let { user: n, currentUser: t, guildId: O, subsection: Z, onClose: P } = e,
        { voiceActivityStatusEnabled: T } = (0, i.U)({ location: "UserProfileModalActivity" }),
        N = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: A, recent: C, stream: E } = (0, f.Z)(n.id),
        { voiceChannel: S, voiceActivity: w } = (0, p.Z)({
            userId: n.id,
            guildId: O,
        }),
        B = (0, r.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        D = n.id === t.id,
        L = (0, r.e7)([s.Z, a.Z], () => {
            let e = D ? s.Z.getStatus() : a.Z.getStatus(n.id);
            return e === l.Skl.OFFLINE || e === l.Skl.INVISIBLE;
        }),
        R = A.length > 0 || null != E,
        M = T && null == E && null == w && null != S,
        U = !L && (R || M),
        k = C.length > 0;
    return U || k || !B
        ? (0, o.jsxs)(l.zJl, {
              className: _.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, o.jsx)(m.Z, {
                            "aria-label": y.intl.string(y.t.J6STd3),
                            children: (0, o.jsxs)("ul", {
                                className: _.activityList,
                                children: [
                                    !N &&
                                        M &&
                                        (0, o.jsx)("li", {
                                            children: (0, o.jsx)(g.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: S,
                                                onClose: P,
                                            }),
                                        }),
                                    null != E &&
                                        (0, o.jsx)("li", {
                                            children: (0, o.jsx)(h.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: E,
                                                onClose: P,
                                            }),
                                        }),
                                    A.map((e, r) =>
                                        (0, o.jsx)(
                                            "li",
                                            {
                                                children: (0, o.jsx)(x.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: P,
                                                }),
                                            },
                                            "live-".concat(r),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  k
                      ? (0, o.jsx)(m.Z, {
                            heading: y.intl.string(y.t.M0zgnZ),
                            introText: D
                                ? y.intl.format(y.t["4bk9Ag"], {
                                      learnMoreHook: (e, n) =>
                                          (0, o.jsx)(
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
                            children: (0, o.jsx)("ul", {
                                className: _.activityList,
                                children: C.map((e) =>
                                    (0, o.jsx)(
                                        "li",
                                        {
                                            children: (0, o.jsx)(b.Z, {
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
        : (0, o.jsx)("div", {
              className: I.empty,
              children: (0, o.jsx)(l.$jN, {}),
          });
}
