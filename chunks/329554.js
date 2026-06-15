i.d(t, { A: () => N });
var l = i(627968);
i(64700);
var n = i(17928),
    a = i(534514),
    s = i(939249),
    d = i(834730),
    r = i(302959),
    c = i(765379),
    o = i(35903),
    p = i(506326),
    m = i(409626),
    u = i(692969),
    x = i(78871),
    h = i(287809),
    A = i(804630),
    v = i(145225);
function g(e) {
    let { resolvedActivity: t, presenceActivity: i, showHeader: n = !0 } = e,
        r = (0, u.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: m.Ob.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        o = null != i && !(0, c.A)(i) && null != i.party,
        h = null != t.state && t.state.length > 0 && !o;
    return (0, l.jsxs)("div", {
        className: v.ec,
        children: [
            n
                ? (0, l.jsx)("div", {
                      className: v.N1,
                      children: (0, l.jsx)(a.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, A._Q)(t.type),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: v.Wh,
                children: [
                    null != r
                        ? (0, l.jsx)(s.D, {
                              className: v.XA,
                              onClick: r,
                              "aria-label": t.name,
                              children: (0, l.jsx)(A.Tf, { resolvedActivity: t }),
                          })
                        : (0, l.jsx)(A.Tf, { resolvedActivity: t }),
                    (0, l.jsx)("div", {
                        className: v.wt,
                        children: (0, l.jsxs)(s.D, {
                            className: null != r ? v.wv : void 0,
                            onClick: r,
                            children: [
                                (0, l.jsx)(a.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: v.DD,
                                    lineClamp: 1,
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                h
                                    ? (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                null != i
                                    ? (0, l.jsxs)(p.mG, {
                                          location: p.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, l.jsx)(x.QA, { activity: i }),
                                              (0, l.jsx)(x.cy, { activity: i }),
                                              (0, l.jsx)(x.Rq, { activity: i }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let N = function (e) {
    let {
            channel: t,
            presenceActivity: i,
            userId: a,
            embeddedApp: s,
            applicationStream: d,
            onAction: c,
            showHeader: p = !0,
        } = e,
        m = (0, n.bG)([h.default], () => (null != a ? h.default.getUser(a) : null), [a]);
    if (null == m) return null;
    let u = (0, A.Gf)(m.id, i, s);
    return (0, l.jsxs)("div", {
        children: [
            u.isSpotify
                ? (0, l.jsx)(A.vP, { resolvedActivity: u, showHeader: p })
                : (0, l.jsx)(g, { resolvedActivity: u, presenceActivity: i, showHeader: p }),
            (0, l.jsx)(o.A, {
                type: null != d ? r.M.STREAM_PREVIEW : r.M.VOICE_CHANNEL,
                activity: i,
                embeddedActivity: s?.embeddedActivity,
                applicationStream: d,
                user: m,
                guildId: t.guild_id,
                channelId: t.id,
                buttonVariant: "primary",
                onAction: c,
            }),
        ],
    });
};
