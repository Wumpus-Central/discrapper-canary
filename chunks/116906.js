t.d(n, { Z: () => O });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(468363),
    a = t(353647),
    c = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(209698),
    f = t(369566),
    m = t(29899),
    p = t(678738),
    x = t(151545),
    h = t(527790),
    b = t(769140),
    v = t(864141),
    j = t(228168),
    g = t(981631),
    I = t(388032),
    y = t(835734),
    Z = t(940640);
function O(e) {
    let { user: n, currentUser: t, guildId: O, subsection: N, onClose: T } = e,
        { voiceActivityStatusEnabled: A } = (0, r.U)({ location: "UserProfileModalActivity" }),
        P = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: E, recent: _, stream: C } = (0, f.Z)(n.id),
        { voiceChannel: S, voiceActivity: w } = (0, m.Z)({
            userId: n.id,
            guildId: O,
        }),
        D = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        R = (0, i.e7)([s.Z, c.Z], () => {
            let e = L ? s.Z.getStatus() : c.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        M = E.length > 0 || null != C,
        B = A && null == C && null == w && null != S,
        U = !R && (M || B),
        k = _.length > 0;
    return U || k || !D
        ? (0, l.jsxs)(o.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, l.jsx)(p.Z, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: y.activityList,
                                children: [
                                    !P &&
                                        B &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(v.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: S,
                                                onClose: T,
                                            }),
                                        }),
                                    null != C &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(b.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: C,
                                                onClose: T,
                                            }),
                                        }),
                                    E.map((e, i) =>
                                        (0, l.jsx)(
                                            "li",
                                            {
                                                children: (0, l.jsx)(x.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: T,
                                                }),
                                            },
                                            "live-".concat(i),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  k
                      ? (0, l.jsx)(p.Z, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: L
                                ? I.intl.format(I.t["4bk9Ak"], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              o.Anchor,
                                              {
                                                  href: d.Z.getArticleURL(g.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: N === j.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: y.activityList,
                                children: _.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        {
                                            children: (0, l.jsx)(h.Z, {
                                                user: n,
                                                entry: e,
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
        : (0, l.jsx)("div", {
              className: Z.empty,
              children: (0, l.jsx)(o.$jN, {}),
          });
}
