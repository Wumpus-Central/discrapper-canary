n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(901517),
    r = n(517164),
    d = n(290863),
    o = n(461213),
    c = n(975571),
    u = n(146655),
    A = n(489379),
    x = n(900179),
    m = n(837924),
    p = n(558628),
    h = n(842241),
    f = n(282797),
    g = n(518477),
    I = n(652215),
    j = n(985018),
    _ = n(78702),
    N = n(781425);
function v(e) {
    let { user: t, currentUser: n, guildId: v, onClose: b } = e,
        { voiceActivityStatusEnabled: T } = (0, a.G)({ location: "UserProfileModalActivity" }),
        { live: E, recent: y, stream: C } = (0, u.A)(t.id),
        { voiceChannel: P, voiceActivity: S } = (0, A.A)({ userId: t.id, guildId: v }),
        L = (0, s.bG)([r.A], () => r.A.isFetchingUserOutbox(t.id)),
        O = t.id === n.id,
        R = (0, s.bG)([o.A, d.A], () => {
            let e = O ? o.A.getStatus() : d.A.getStatus(t.id);
            return e === l.clD.OFFLINE || e === l.clD.INVISIBLE;
        }),
        D = E.length > 0 || null != C,
        M = T && null == C && null == S && null != P,
        G = !R && (D || M),
        U = y.length > 0;
    return G || U || !L
        ? (0, i.jsxs)(l.IpV, {
              className: _.XG,
              fade: !0,
              children: [
                  G
                      ? (0, i.jsx)(x.A, {
                            "aria-label": j.intl.string(j.t.J6STd9),
                            children: (0, i.jsxs)("ul", {
                                className: _.Ci,
                                children: [
                                    null != C &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(h.A, {
                                                user: t,
                                                currentUser: n,
                                                stream: C,
                                                onClose: b,
                                            }),
                                        }),
                                    E.map((e, s) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(m.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: b,
                                                }),
                                            },
                                            `live-${s}`,
                                        ),
                                    ),
                                    M &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(f.A, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: P,
                                                onClose: b,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  U
                      ? (0, i.jsx)(x.A, {
                            heading: j.intl.string(j.t.M0zgnT),
                            introText: O
                                ? j.intl.format(j.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, i.jsx)(
                                              l.MzZ,
                                              { href: c.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: g.bk.RECENT_ACTIVITY,
                            children: (0, i.jsx)("ul", {
                                className: _.Ci,
                                children: y.map((e) =>
                                    (0, i.jsx)(
                                        "li",
                                        { children: (0, i.jsx)(p.A, { user: t, entry: e, onClose: b }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, i.jsx)("div", { className: N.Ie, children: (0, i.jsx)(l.y$y, {}) });
}
