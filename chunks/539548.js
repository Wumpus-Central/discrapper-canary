t.d(l, {
    A: () => y,
});
var n = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    s = t(901517),
    a = t(517164),
    o = t(290863),
    d = t(461213),
    c = t(975571),
    u = t(146655),
    f = t(489379),
    p = t(900179),
    m = t(837924),
    x = t(558628),
    A = t(842241),
    j = t(282797),
    h = t(518477),
    g = t(652215),
    v = t(985018),
    b = t(78702),
    I = t(781425);

function y(e) {
    let { user: l, currentUser: t, guildId: y, onClose: O } = e,
        { voiceActivityStatusEnabled: N } = (0, s.G)({
            location: "UserProfileModalActivity",
        }),
        { live: E, recent: _, stream: T } = (0, u.A)(l.id),
        { voiceChannel: P, voiceActivity: S } = (0, f.A)({
            userId: l.id,
            guildId: y,
        }),
        C = (0, i.bG)([a.A], () => a.A.isFetchingUserOutbox(l.id)),
        L = l.id === t.id,
        D = (0, i.bG)([d.A, o.A], () => {
            let e = L ? d.A.getStatus() : o.A.getStatus(l.id);
            return e === r.clD.OFFLINE || e === r.clD.INVISIBLE;
        }),
        R = E.length > 0 || null != T,
        w = N && null == T && null == S && null != P,
        G = !D && (R || w),
        M = _.length > 0;
    return G || M || !C
        ? (0, n.jsxs)(r.IpV, {
              className: b.XG,
              fade: !0,
              children: [
                  G
                      ? (0, n.jsx)(p.A, {
                            "aria-label": v.intl.string(v.t.J6STd9),
                            children: (0, n.jsxs)("ul", {
                                className: b.Ci,
                                children: [
                                    null != T &&
                                        (0, n.jsx)("li", {
                                            children: (0, n.jsx)(A.A, {
                                                user: l,
                                                currentUser: t,
                                                stream: T,
                                                onClose: O,
                                            }),
                                        }),
                                    E.map((e, i) =>
                                        (0, n.jsx)(
                                            "li",
                                            {
                                                children: (0, n.jsx)(m.A, {
                                                    user: l,
                                                    currentUser: t,
                                                    activity: e,
                                                    onClose: O,
                                                }),
                                            },
                                            "live-".concat(i),
                                        ),
                                    ),
                                    w &&
                                        (0, n.jsx)("li", {
                                            children: (0, n.jsx)(j.A, {
                                                user: l,
                                                currentUser: t,
                                                voiceChannel: P,
                                                onClose: O,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  M
                      ? (0, n.jsx)(p.A, {
                            heading: v.intl.string(v.t.M0zgnT),
                            introText: L
                                ? v.intl.format(v.t["4bk9Ak"], {
                                      learnMoreHook: (e, l) =>
                                          (0, n.jsx)(
                                              r.MzZ,
                                              {
                                                  href: c.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              l,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: h.bk.RECENT_ACTIVITY,
                            children: (0, n.jsx)("ul", {
                                className: b.Ci,
                                children: _.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(x.A, {
                                                user: l,
                                                entry: e,
                                                onClose: O,
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
        : (0, n.jsx)("div", {
              className: I.Ie,
              children: (0, n.jsx)(r.y$y, {}),
          });
}
