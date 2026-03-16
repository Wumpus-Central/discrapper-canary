n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    l = n(517164),
    a = n(290863),
    o = n(461213),
    d = n(975571),
    c = n(622543),
    u = n(146655),
    m = n(489379),
    A = n(900179),
    x = n(837924),
    _ = n(558628),
    p = n(842241),
    f = n(282797),
    h = n(518477),
    g = n(652215),
    I = n(985018),
    j = n(78702),
    b = n(781425);
function v(e) {
    let { user: t, currentUser: n, guildId: v, onClose: N } = e,
        { live: C, recent: y, stream: T } = (0, u.A)(t.id),
        { voiceChannel: E, voiceActivity: L } = (0, m.A)({ userId: t.id, guildId: v }),
        P = (0, s.bG)([l.A], () => l.A.isFetchingUserOutbox(t.id)),
        O = t.id === n.id,
        R = (0, s.bG)([o.A, a.A], () => {
            let e = O ? o.A.getStatus() : a.A.getStatus(t.id);
            return e === r.clD.OFFLINE || e === r.clD.INVISIBLE;
        }),
        S = (0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0),
        M = C.length > 0 || null != T,
        G = !S && null == T && null == L && null != E,
        k = !R && (M || G),
        U = y.length > 0;
    return k || U || !P
        ? (0, i.jsxs)(r.IpV, {
              className: j.XG,
              fade: !0,
              children: [
                  k
                      ? (0, i.jsx)(A.A, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, i.jsxs)("ul", {
                                className: j.Ci,
                                children: [
                                    null != T &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(p.A, {
                                                user: t,
                                                currentUser: n,
                                                stream: T,
                                                onClose: N,
                                            }),
                                        }),
                                    C.map((e, s) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(x.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: N,
                                                }),
                                            },
                                            `live-${s}`,
                                        ),
                                    ),
                                    G &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(f.A, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: E,
                                                onClose: N,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  U
                      ? (0, i.jsx)(A.A, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: O
                                ? I.intl.format(I.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, i.jsx)(
                                              r.MzZ,
                                              { href: d.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: h.bk.RECENT_ACTIVITY,
                            children: (0, i.jsx)("ul", {
                                className: j.Ci,
                                children: y.map((e) =>
                                    (0, i.jsx)(
                                        "li",
                                        { children: (0, i.jsx)(_.A, { user: t, entry: e, onClose: N }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, i.jsx)("div", { className: b.Ie, children: (0, i.jsx)(r.y$y, {}) });
}
