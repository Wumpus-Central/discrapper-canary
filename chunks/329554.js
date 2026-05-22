t.d(l, { A: () => j });
var i = t(627968);
t(64700);
var s = t(17928),
    n = t(534514),
    a = t(939249),
    d = t(834730),
    r = t(302959),
    c = t(765379),
    o = t(35903),
    p = t(506326),
    u = t(409626),
    m = t(692969),
    A = t(78871),
    h = t(287809),
    x = t(804630),
    v = t(145225);
function g(e) {
    let { resolvedActivity: l, presenceActivity: t, showHeader: s = !0 } = e,
        r = (0, m.A)({
            location: "UserActivityRow",
            applicationId: l.applicationId,
            source: u.Ob.UserProfile,
            sourceUserId: l.userId,
            trackEntryPointImpression: !0,
        }),
        o = null != t && !(0, c.A)(t) && null != t.party,
        h = null != l.state && l.state.length > 0 && !o;
    return (0, i.jsxs)("div", {
        className: v.ec,
        children: [
            s
                ? (0, i.jsx)("div", {
                      className: v.N1,
                      children: (0, i.jsx)(n.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, x._Q)(l.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: v.Wh,
                children: [
                    null != r
                        ? (0, i.jsx)(a.D, {
                              className: v.XA,
                              onClick: r,
                              "aria-label": l.name,
                              children: (0, i.jsx)(x.Tf, { resolvedActivity: l }),
                          })
                        : (0, i.jsx)(x.Tf, { resolvedActivity: l }),
                    (0, i.jsx)("div", {
                        className: v.wt,
                        children: (0, i.jsxs)(a.D, {
                            className: null != r ? v.wv : void 0,
                            onClick: r,
                            children: [
                                (0, i.jsx)(n.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: v.DD,
                                    lineClamp: 1,
                                    children: l.name,
                                }),
                                null != l.details
                                    ? (0, i.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: l.details,
                                      })
                                    : null,
                                h
                                    ? (0, i.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: l.state,
                                      })
                                    : null,
                                null != t
                                    ? (0, i.jsxs)(p.mG, {
                                          location: p.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, i.jsx)(A.QA, { activity: t }),
                                              (0, i.jsx)(A.cy, { activity: t }),
                                              (0, i.jsx)(A.Rq, { activity: t }),
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
let j = function (e) {
    let {
            channel: l,
            presenceActivity: t,
            userId: n,
            embeddedApp: a,
            applicationStream: d,
            onAction: c,
            showHeader: p = !0,
        } = e,
        u = (0, s.bG)([h.default], () => (null != n ? h.default.getUser(n) : null), [n]);
    if (null == u) return null;
    let m = (0, x.Gf)(u.id, t, a);
    return (0, i.jsxs)("div", {
        children: [
            m.isSpotify
                ? (0, i.jsx)(x.vP, { resolvedActivity: m, showHeader: p })
                : (0, i.jsx)(g, { resolvedActivity: m, presenceActivity: t, showHeader: p }),
            (0, i.jsx)(o.A, {
                type: null != d ? r.M.STREAM_PREVIEW : r.M.VOICE_CHANNEL,
                activity: t,
                embeddedActivity: a?.embeddedActivity,
                applicationStream: d,
                user: u,
                guildId: l.guild_id,
                channelId: l.id,
                buttonVariant: "primary",
                onAction: c,
            }),
        ],
    });
};
