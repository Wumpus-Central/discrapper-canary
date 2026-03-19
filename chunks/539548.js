t.d(n, { A: () => v });
var i = t(627968);
t(64700);
var s = t(311907),
    r = t(397927),
    a = t(517164),
    l = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    A = t(489379),
    _ = t(900179),
    m = t(837924),
    x = t(558628),
    p = t(842241),
    f = t(282797),
    h = t(518477),
    g = t(652215),
    I = t(985018),
    j = t(278792),
    b = t(230836);
function v(e) {
    let { user: n, currentUser: t, guildId: v, onClose: C } = e,
        { live: N, recent: y, stream: E } = (0, u.A)(n.id),
        { voiceChannel: T, voiceActivity: L } = (0, A.A)({ userId: n.id, guildId: v }),
        O = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(n.id)),
        P = n.id === t.id,
        R = (0, s.bG)([o.A, l.A], () => {
            let e = P ? o.A.getStatus() : l.A.getStatus(n.id);
            return e === r.clD.OFFLINE || e === r.clD.INVISIBLE;
        }),
        S = (0, s.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0),
        M = N.length > 0 || null != E,
        k = !S && null == E && null == L && null != T,
        G = !R && (M || k),
        B = y.length > 0;
    return G || B || !O
        ? (0, i.jsxs)(r.IpV, {
              className: j.XG,
              fade: !0,
              children: [
                  G
                      ? (0, i.jsx)(_.A, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, i.jsxs)("ul", {
                                className: j.Ci,
                                children: [
                                    null != E &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(p.A, {
                                                user: n,
                                                currentUser: t,
                                                stream: E,
                                                onClose: C,
                                            }),
                                        }),
                                    N.map((e, s) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(m.A, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: C,
                                                }),
                                            },
                                            `live-${s}`,
                                        ),
                                    ),
                                    k &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(f.A, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: T,
                                                onClose: C,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  B
                      ? (0, i.jsx)(_.A, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: P
                                ? I.intl.format(I.t["4bk9Ak"], {
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              r.MzZ,
                                              { href: d.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: h.bk.RECENT_ACTIVITY,
                            children: (0, i.jsx)("ul", {
                                className: j.Ci,
                                children: y.map((e) =>
                                    (0, i.jsx)(
                                        "li",
                                        { children: (0, i.jsx)(x.A, { user: n, entry: e, onClose: C }) },
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
