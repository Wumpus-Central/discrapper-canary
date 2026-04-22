a.d(t, { A: () => j });
var n = a(627968);
a(64700);
var i = a(311907),
    l = a(652215),
    r = a(289873),
    d = a(349288),
    o = a(573613),
    s = a(517164),
    c = a(290863),
    _ = a(461213),
    u = a(975571),
    m = a(622543),
    p = a(146655),
    g = a(489379),
    b = a(900179),
    f = a(837924),
    x = a(558628),
    h = a(842241),
    A = a(282797),
    v = a(518477),
    I = a(985018),
    y = a(862997),
    C = a(2074);
function j(e) {
    let { user: t, currentUser: a, guildId: j, onClose: N } = e,
        { live: E, recent: S, stream: T } = (0, p.A)(t.id),
        { voiceChannel: w, voiceActivity: P } = (0, g.A)({ userId: t.id, guildId: j }),
        k = (0, i.bG)([s.A], () => s.A.isFetchingUserOutbox(t.id)),
        M = t.id === a.id,
        L = (0, i.bG)([_.A, c.A], () => {
            let e = M ? _.A.getStatus() : c.A.getStatus(t.id);
            return e === l.clD.OFFLINE || e === l.clD.INVISIBLE;
        }),
        R = (0, i.bG)([m.A], () => m.A.getUserProfile(t.id)?.private === !0),
        D = E.length > 0 || null != T,
        B = !R && null == T && null == P && null != w,
        O = !L && (D || B),
        G = S.length > 0;
    return O || G || !k
        ? (0, n.jsxs)(o.Ip, {
              className: y.XG,
              fade: !0,
              children: [
                  O
                      ? (0, n.jsx)(b.A, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, n.jsxs)("ul", {
                                className: y.Ci,
                                children: [
                                    null != T &&
                                        (0, n.jsx)("li", {
                                            children: (0, n.jsx)(h.A, {
                                                user: t,
                                                currentUser: a,
                                                stream: T,
                                                onClose: N,
                                            }),
                                        }),
                                    E.map((e, i) =>
                                        (0, n.jsx)(
                                            "li",
                                            {
                                                children: (0, n.jsx)(f.A, {
                                                    user: t,
                                                    currentUser: a,
                                                    activity: e,
                                                    onClose: N,
                                                }),
                                            },
                                            `live-${i}`,
                                        ),
                                    ),
                                    B &&
                                        (0, n.jsx)("li", {
                                            children: (0, n.jsx)(A.A, {
                                                user: t,
                                                currentUser: a,
                                                voiceChannel: w,
                                                onClose: N,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  G
                      ? (0, n.jsx)(b.A, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: M
                                ? I.intl.format(I.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, n.jsx)(
                                              d.Anchor,
                                              { href: u.A.getArticleURL(l.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: v.bk.RECENT_ACTIVITY,
                            children: (0, n.jsx)("ul", {
                                className: y.Ci,
                                children: S.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        { children: (0, n.jsx)(x.A, { user: t, entry: e, onClose: N }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, n.jsx)("div", { className: C.Ie, children: (0, n.jsx)(r.y, {}) });
}
