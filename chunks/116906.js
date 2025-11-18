t.d(n, { Z: () => Z });
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(481060),
    r = t(468363),
    s = t(353647),
    a = t(158776),
    c = t(885110),
    d = t(63063),
    u = t(209698),
    m = t(369566),
    p = t(29899),
    f = t(678738),
    x = t(151545),
    h = t(527790),
    v = t(769140),
    j = t(864141),
    g = t(228168),
    b = t(981631),
    I = t(388032),
    y = t(847540),
    _ = t(883172);
function Z(e) {
    let { user: n, currentUser: t, guildId: Z, subsection: O, onClose: N } = e,
        { voiceActivityStatusEnabled: A } = (0, r.U)({ location: "UserProfileModalActivity" }),
        T = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: P, recent: E, stream: C } = (0, m.Z)(n.id),
        { voiceChannel: S, voiceActivity: w } = (0, p.Z)({
            userId: n.id,
            guildId: Z,
        }),
        D = (0, i.e7)([s.Z], () => s.Z.isFetchingUserOutbox(n.id)),
        R = n.id === t.id,
        L = (0, i.e7)([c.Z, a.Z], () => {
            let e = R ? c.Z.getStatus() : a.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        M = P.length > 0 || null != C,
        B = A && null == C && null == w && null != S,
        U = !L && (M || B),
        k = E.length > 0;
    return U || k || !D
        ? (0, l.jsxs)(o.zJl, {
              className: y.scroller,
              fade: !0,
              children: [
                  U
                      ? (0, l.jsx)(f.Z, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: y.activityList,
                                children: [
                                    !T &&
                                        B &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(j.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: S,
                                                onClose: N,
                                            }),
                                        }),
                                    null != C &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(v.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: C,
                                                onClose: N,
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
                  k
                      ? (0, l.jsx)(f.Z, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: R
                                ? I.intl.format(I.t["4bk9Ak"], {
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
                            scrollIntoView: O === g.Tb.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: y.activityList,
                                children: E.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        {
                                            children: (0, l.jsx)(h.Z, {
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
              className: _.empty,
              children: (0, l.jsx)(o.$jN, {}),
          });
}
