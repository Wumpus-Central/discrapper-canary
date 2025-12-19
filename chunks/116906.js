t.d(n, { Z: () => Z });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(468363),
    a = t(353647),
    c = t(158776),
    s = t(885110),
    d = t(63063),
    u = t(369566),
    f = t(29899),
    m = t(678738),
    p = t(151545),
    x = t(527790),
    h = t(769140),
    j = t(864141),
    v = t(228168),
    b = t(981631),
    g = t(388032),
    I = t(835734),
    y = t(940640);
function Z(e) {
    let { user: n, currentUser: t, guildId: Z, onClose: O } = e,
        { voiceActivityStatusEnabled: T } = (0, r.U)({ location: "UserProfileModalActivity" }),
        { live: N, recent: A, stream: P } = (0, u.Z)(n.id),
        { voiceChannel: E, voiceActivity: _ } = (0, f.Z)({
            userId: n.id,
            guildId: Z,
        }),
        C = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        S = n.id === t.id,
        w = (0, i.e7)([s.Z, c.Z], () => {
            let e = S ? s.Z.getStatus() : c.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        D = N.length > 0 || null != P,
        L = T && null == P && null == _ && null != E,
        R = !w && (D || L),
        M = A.length > 0;
    return R || M || !C
        ? (0, l.jsxs)(o.zJl, {
              className: I.scroller,
              fade: !0,
              children: [
                  R
                      ? (0, l.jsx)(m.Z, {
                            "aria-label": g.intl.string(g.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: I.activityList,
                                children: [
                                    null != P &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(h.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: P,
                                                onClose: O,
                                            }),
                                        }),
                                    N.map((e, i) =>
                                        (0, l.jsx)(
                                            "li",
                                            {
                                                children: (0, l.jsx)(p.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: O,
                                                }),
                                            },
                                            "live-".concat(i),
                                        ),
                                    ),
                                    L &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(j.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: E,
                                                onClose: O,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  M
                      ? (0, l.jsx)(m.Z, {
                            heading: g.intl.string(g.t.M0zgnT),
                            introText: S
                                ? g.intl.format(g.t["4bk9Ak"], {
                                      learnMoreHook: (e, n) =>
                                          (0, l.jsx)(
                                              o.Anchor,
                                              {
                                                  href: d.Z.getArticleURL(b.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: v.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: I.activityList,
                                children: A.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        {
                                            children: (0, l.jsx)(x.Z, {
                                                user: n,
                                                entry: e,
                                                onClose: O,
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
              className: y.empty,
              children: (0, l.jsx)(o.$jN, {}),
          });
}
