n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    l = n(517164),
    a = n(290863),
    d = n(461213),
    o = n(975571),
    c = n(622543),
    u = n(146655),
    A = n(489379),
    m = n(900179),
    x = n(837924),
    f = n(558628),
    _ = n(842241),
    p = n(282797),
    h = n(518477),
    g = n(652215),
    I = n(985018),
    j = n(78702),
    v = n(781425);
function b(e) {
    let { user: t, currentUser: n, guildId: b, onClose: N } = e,
        { live: C, recent: y, stream: E } = (0, u.A)(t.id),
        { voiceChannel: T, voiceActivity: L } = (0, A.A)({ userId: t.id, guildId: b }),
        O = (0, s.bG)([l.A], () => l.A.isFetchingUserOutbox(t.id)),
        R = t.id === n.id,
        S = (0, s.bG)([d.A, a.A], () => {
            let e = R ? d.A.getStatus() : a.A.getStatus(t.id);
            return e === r.clD.OFFLINE || e === r.clD.INVISIBLE;
        }),
        P = (0, s.bG)([c.A], () => c.A.getUserProfile(t.id)?.private === !0),
        M = C.length > 0 || null != E,
        G = !P && null == E && null == L && null != T,
        k = !S && (M || G),
        U = y.length > 0;
    return k || U || !O
        ? (0, i.jsxs)(r.IpV, {
              className: j.XG,
              fade: !0,
              children: [
                  k
                      ? (0, i.jsx)(m.A, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, i.jsxs)("ul", {
                                className: j.Ci,
                                children: [
                                    null != E &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(_.A, {
                                                user: t,
                                                currentUser: n,
                                                stream: E,
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
                                            children: (0, i.jsx)(p.A, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: T,
                                                onClose: N,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  U
                      ? (0, i.jsx)(m.A, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: R
                                ? I.intl.format(I.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, i.jsx)(
                                              r.MzZ,
                                              { href: o.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
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
                                        { children: (0, i.jsx)(f.A, { user: t, entry: e, onClose: N }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, i.jsx)("div", { className: v.Ie, children: (0, i.jsx)(r.y$y, {}) });
}
