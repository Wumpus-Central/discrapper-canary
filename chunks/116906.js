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
    v = t(769140),
    b = t(864141),
    j = t(228168),
    g = t(981631),
    I = t(388032),
    y = t(835734),
    Z = t(940640);
function O(e) {
    let { user: n, currentUser: t, guildId: O, onClose: T } = e,
        { voiceActivityStatusEnabled: N } = (0, r.U)({ location: "UserProfileModalActivity" }),
        A = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: P, recent: E, stream: _ } = (0, f.Z)(n.id),
        { voiceChannel: C, voiceActivity: S } = (0, m.Z)({
            userId: n.id,
            guildId: O,
        }),
        w = (0, i.e7)([a.Z], () => a.Z.isFetchingUserOutbox(n.id)),
        D = n.id === t.id,
        L = (0, i.e7)([s.Z, c.Z], () => {
            let e = D ? s.Z.getStatus() : c.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        R = P.length > 0 || null != _,
        M = N && null == _ && null == S && null != C,
        B = !L && (R || M),
        U = E.length > 0;
    return B || U || !w
        ? (0, l.jsxs)(o.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  B
                      ? (0, l.jsx)(p.Z, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: y.activityList,
                                children: [
                                    !A &&
                                        M &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(b.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: C,
                                                onClose: T,
                                            }),
                                        }),
                                    null != _ &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(v.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: _,
                                                onClose: T,
                                            }),
                                        }),
                                    P.map((e, i) =>
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
                  U
                      ? (0, l.jsx)(p.Z, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: D
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
                            scrollTargetId: j.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: y.activityList,
                                children: E.map((e) =>
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
