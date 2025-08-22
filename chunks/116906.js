t.d(n, { Z: () => _ });
var r = t(951288);
t(647438);
var l = t(442837),
    o = t(481060),
    i = t(468363),
    c = t(353647),
    s = t(158776),
    a = t(885110),
    d = t(63063),
    u = t(209698),
    f = t(369566),
    m = t(29899),
    p = t(678738),
    h = t(151545),
    x = t(527790),
    b = t(769140),
    j = t(864141),
    g = t(228168),
    v = t(981631),
    y = t(388032),
    O = t(7994),
    I = t(878449);
function _(e) {
    let { user: n, currentUser: t, guildId: _, subsection: Z, onClose: P } = e,
        { voiceActivityStatusEnabled: T } = (0, i.U)({ location: "UserProfileModalActivity" }),
        N = (0, u.b)({ location: "UserProfileModalActivity" }),
        { live: A, recent: E, stream: C } = (0, f.Z)(n.id),
        { voiceChannel: S, voiceActivity: w } = (0, m.Z)({
            userId: n.id,
            guildId: _,
        }),
        D = (0, l.e7)([c.Z], () => c.Z.isFetchingUserOutbox(n.id)),
        L = n.id === t.id,
        B = (0, l.e7)([a.Z, s.Z], () => {
            let e = L ? a.Z.getStatus() : s.Z.getStatus(n.id);
            return e === o.Skl.OFFLINE || e === o.Skl.INVISIBLE;
        }),
        R = A.length > 0 || null != C,
        U = T && null == C && null == w && null != S,
        M = !B && (R || U),
        k = E.length > 0;
    return M || k || !D
        ? (0, r.jsxs)(o.zJl, {
              className: O.scroller,
              fade: !0,
              children: [
                  M
                      ? (0, r.jsx)(p.Z, {
                            "aria-label": y.intl.string(y.t.J6STd3),
                            children: (0, r.jsxs)("ul", {
                                className: O.activityList,
                                children: [
                                    !N &&
                                        U &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(j.Z, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: S,
                                                onClose: P,
                                            }),
                                        }),
                                    null != C &&
                                        (0, r.jsx)("li", {
                                            children: (0, r.jsx)(b.Z, {
                                                user: n,
                                                currentUser: t,
                                                stream: C,
                                                onClose: P,
                                            }),
                                        }),
                                    A.map((e, l) =>
                                        (0, r.jsx)(
                                            "li",
                                            {
                                                children: (0, r.jsx)(h.Z, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: P,
                                                }),
                                            },
                                            "live-".concat(l),
                                        ),
                                    ),
                                ],
                            }),
                        })
                      : null,
                  k
                      ? (0, r.jsx)(p.Z, {
                            heading: y.intl.string(y.t.M0zgnZ),
                            introText: L
                                ? y.intl.format(y.t["4bk9Ag"], {
                                      learnMoreHook: (e, n) =>
                                          (0, r.jsx)(
                                              o.eee,
                                              {
                                                  href: d.Z.getArticleURL(v.BhN.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollIntoView: Z === g.Tb.RECENT_ACTIVITY,
                            children: (0, r.jsx)("ul", {
                                className: O.activityList,
                                children: E.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(x.Z, {
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
              className: I.empty,
              children: (0, r.jsx)(o.$jN, {}),
          });
}
