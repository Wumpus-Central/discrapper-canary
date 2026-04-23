n.d(t, { A: () => C });
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(652215),
    r = n(289873),
    s = n(349288),
    o = n(573613),
    d = n(517164),
    c = n(290863),
    _ = n(461213),
    u = n(975571),
    p = n(622543),
    m = n(146655),
    f = n(489379),
    x = n(900179),
    g = n(837924),
    h = n(558628),
    A = n(842241),
    b = n(282797),
    v = n(518477),
    I = n(985018),
    j = n(437781),
    y = n(928666);
function C(e) {
    let { user: t, currentUser: n, guildId: C, onClose: N } = e,
        { live: E, recent: T, stream: w } = (0, m.A)(t.id),
        { voiceChannel: P, voiceActivity: L } = (0, f.A)({ userId: t.id, guildId: C }),
        k = (0, i.bG)([d.A], () => d.A.isFetchingUserOutbox(t.id)),
        S = t.id === n.id,
        R = (0, i.bG)([_.A, c.A], () => {
            let e = S ? _.A.getStatus() : c.A.getStatus(t.id);
            return e === l.clD.OFFLINE || e === l.clD.INVISIBLE;
        }),
        D = (0, i.bG)([p.A], () => p.A.getUserProfile(t.id)?.private === !0),
        B = E.length > 0 || null != w,
        O = !D && null == w && null == L && null != P,
        M = !R && (B || O),
        G = T.length > 0;
    return M || G || !k
        ? (0, a.jsxs)(o.Ip, {
              className: j.XG,
              fade: !0,
              children: [
                  M
                      ? (0, a.jsx)(x.A, {
                            "aria-label": I.intl.string(I.t.J6STd9),
                            children: (0, a.jsxs)("ul", {
                                className: j.Ci,
                                children: [
                                    null != w &&
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(A.A, {
                                                user: t,
                                                currentUser: n,
                                                stream: w,
                                                onClose: N,
                                            }),
                                        }),
                                    E.map((e, i) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                children: (0, a.jsx)(g.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: N,
                                                }),
                                            },
                                            `live-${i}`,
                                        ),
                                    ),
                                    O &&
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(b.A, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: P,
                                                onClose: N,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  G
                      ? (0, a.jsx)(x.A, {
                            heading: I.intl.string(I.t.M0zgnT),
                            introText: S
                                ? I.intl.format(I.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, a.jsx)(
                                              s.Anchor,
                                              { href: u.A.getArticleURL(l.MVz.ACTIVITY_STATUS_SETTINGS), children: e },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: v.bk.RECENT_ACTIVITY,
                            children: (0, a.jsx)("ul", {
                                className: j.Ci,
                                children: T.map((e) =>
                                    (0, a.jsx)(
                                        "li",
                                        { children: (0, a.jsx)(h.A, { user: t, entry: e, onClose: N }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, a.jsx)("div", { className: y.Ie, children: (0, a.jsx)(r.y, {}) });
}
