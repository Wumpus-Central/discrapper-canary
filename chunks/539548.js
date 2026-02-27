t.d(n, { A: () => N });
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    a = t(517164),
    r = t(290863),
    d = t(461213),
    c = t(975571),
    o = t(622543),
    u = t(146655),
    A = t(489379),
    x = t(900179),
    m = t(837924),
    _ = t(558628),
    p = t(842241),
    f = t(282797),
    h = t(518477),
    I = t(652215),
    j = t(985018),
    g = t(78702),
    b = t(781425);
function N(e) {
    let { user: n, currentUser: t, guildId: N, onClose: v } = e,
        { live: T, recent: E, stream: y } = (0, u.A)(n.id),
        { voiceChannel: C, voiceActivity: L } = (0, A.A)({ userId: n.id, guildId: N }),
        S = (0, s.bG)([a.A], () => a.A.isFetchingUserOutbox(n.id)),
        O = n.id === t.id,
        P = (0, s.bG)([d.A, r.A], () => {
            let e = O ? d.A.getStatus() : r.A.getStatus(n.id);
            return e === l.clD.OFFLINE || e === l.clD.INVISIBLE;
        }),
        R = (0, s.bG)([o.A], () => o.A.getUserProfile(n.id)?.private === !0),
        M = T.length > 0 || null != y,
        G = !R && null == y && null == L && null != C,
        D = !P && (M || G),
        U = E.length > 0;
    return D || U || !S
        ? (0, i.jsxs)(l.IpV, {
              className: g.XG,
              fade: !0,
              children: [
                  D
                      ? (0, i.jsx)(x.A, {
                            "aria-label": j.intl.string(j.t.J6STd9),
                            children: (0, i.jsxs)("ul", {
                                className: g.Ci,
                                children: [
                                    null != y &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(p.A, {
                                                user: n,
                                                currentUser: t,
                                                stream: y,
                                                onClose: v,
                                            }),
                                        }),
                                    T.map((e, s) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(m.A, {
                                                    user: n,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: v,
                                                }),
                                            },
                                            `live-${s}`,
                                        ),
                                    ),
                                    G &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(f.A, {
                                                user: n,
                                                currentUser: t,
                                                voiceChannel: C,
                                                onClose: v,
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
                                      learnMoreHook: (e, n) =>
                                          (0, i.jsx)(
                                              l.MzZ,
                                              { href: c.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
                                              n,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: h.bk.RECENT_ACTIVITY,
                            children: (0, i.jsx)("ul", {
                                className: g.Ci,
                                children: E.map((e) =>
                                    (0, i.jsx)(
                                        "li",
                                        { children: (0, i.jsx)(_.A, { user: n, entry: e, onClose: v }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, i.jsx)("div", { className: b.Ie, children: (0, i.jsx)(l.y$y, {}) });
}
