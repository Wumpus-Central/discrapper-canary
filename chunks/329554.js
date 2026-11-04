var l = i(477900);
i(582128);
var a = i(855986),
    n = i(534514),
    s = i(939249),
    d = i(834730),
    r = i(302959),
    c = i(765379),
    o = i(961272),
    m = i(506326),
    p = i(409626),
    u = i(692969),
    A = i(78871),
    h = i(287809),
    v = i(804630),
    x = i(742782);
function g(e) {
    let { resolvedActivity: t, presenceActivity: i, showHeader: a = !0 } = e,
        r = (0, u.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: p.GameProfileSources.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        o = null != i && !(0, c.A)(i) && null != i.party,
        h = null != t.state && t.state.length > 0 && !o;
    return (0, l.jsxs)("div", {
        className: x.ec,
        children: [
            a
                ? (0, l.jsx)("div", {
                      className: x.N1,
                      children: (0, l.jsx)(n.D, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          children: (0, v._Q)(t.type),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: x.Wh,
                children: [
                    null != r
                        ? (0, l.jsx)(s.D, {
                              className: x.XA,
                              onClick: r,
                              "aria-label": t.name,
                              children: (0, l.jsx)(v.Tf, { resolvedActivity: t }),
                          })
                        : (0, l.jsx)(v.Tf, { resolvedActivity: t }),
                    (0, l.jsx)("div", {
                        className: x.wt,
                        children: (0, l.jsxs)(s.D, {
                            className: null != r ? x.wv : void 0,
                            onClick: r,
                            children: [
                                (0, l.jsx)(n.D, {
                                    variant: "heading-xs/medium",
                                    color: "text-strong",
                                    className: x.DD,
                                    lineClamp: 1,
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, l.jsx)(d.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                h
                                    ? (0, l.jsx)(d.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                null != i
                                    ? (0, l.jsxs)(m.mG, {
                                          location: m.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, l.jsx)(A.QA, { activity: i }),
                                              (0, l.jsx)(A.cy, { activity: i }),
                                              (0, l.jsx)(A.Rq, { activity: i }),
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
i.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    channel: t,
                    presenceActivity: i,
                    userId: n,
                    embeddedApp: s,
                    applicationStream: d,
                    onAction: c,
                    showHeader: m = !0,
                } = e,
                p = (0, a.bG)([h.default], () => (null != n ? h.default.getUser(n) : null), [n]);
            if (null == p) return null;
            let u = (0, v.Gf)(p.id, i, s);
            return (0, l.jsxs)("div", {
                children: [
                    u.isSpotify
                        ? (0, l.jsx)(v.vP, { resolvedActivity: u, showHeader: m })
                        : (0, l.jsx)(g, { resolvedActivity: u, presenceActivity: i, showHeader: m }),
                    (0, l.jsx)(o.A, {
                        type: null != d ? r.M.STREAM_PREVIEW : r.M.VOICE_CHANNEL,
                        activity: i,
                        embeddedActivity: s?.embeddedActivity,
                        applicationStream: d,
                        user: p,
                        guildId: t.guild_id,
                        channelId: t.id,
                        buttonVariant: "primary",
                        onAction: c,
                    }),
                ],
            });
        },
    },
);
