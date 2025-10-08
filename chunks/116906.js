t.d(n, { Z: () => O });
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
    x = t(527790),
    j = t(769140),
    v = t(864141),
    g = t(228168),
    b = t(981631),
    y = t(388032),
    I = t(847540),
    Z = t(883172);
function O(e) {
    let { user: n, currentUser: t, guildId: O, subsection: N, onClose: P } = e,
        { voiceActivityStatusEnabled: T } = (0, o.U)({ location: "UserProfileModalActivity" }),
        A = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: E, recent: S, stream: C } = (0, m.Z)(n.id),
        { voiceChannel: _, voiceActivity: w } = (0, p.Z)({
            userId: n.id,
            guildId: O,
        }),
        D = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        R = n.id === t.id,
        L = (0, i.e7)([c.Z, a.Z], () => {
            let e = R ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === r.Skl.OFFLINE || e === r.Skl.INVISIBLE;
        }),
        M = E.length > 0 || null != C,
        U = T && null == C && null == w && null != _,
        k = !L && (M || U),
        B = S.length > 0;
    return k || B || !D
        ? (0, l.jsxs)(r.zJl, {
              className: I.scroller,
              fade: !0,
              children: [
                  k
                      ? (0, l.jsx)(f.Z, {
                            "aria-label": y.intl.string(y.t.J6STd3),
                            children: (0, l.jsxs)("ul", {
                                className: I.activityList,
                                children: [
                                    !A &&
                                        U &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(v.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: _,
                                                onClose: P,
                                            }),
                                        }),
                                    null != C &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(j.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: C,
                                                onClose: P,
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
                                                    onClose: P,
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
                            scrollIntoView: N === g.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: I.activityList,
                                children: S.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        {
                                            children: (0, l.jsx)(x.Z, {
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
        : (0, l.jsx)("div", {
              className: Z.empty,
              children: (0, l.jsx)(r.$jN, {}),
          });
}
