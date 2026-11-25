var l = n(477900);
n(582128);
var i = n(855986),
    a = n(534514),
    r = n(939249),
    s = n(834730),
    o = n(302959),
    u = n(765379),
    c = n(961272),
    d = n(506326),
    m = n(409626),
    A = n(692969),
    p = n(78871),
    h = n(287809),
    f = n(804630),
    g = n(742782);
function x(e) {
    let { resolvedActivity: t, presenceActivity: n, showHeader: i = !0 } = e,
        o = (0, A.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: m.GameProfileSources.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        c = null != n && !(0, u.A)(n) && null != n.party,
        h = null != t.state && t.state.length > 0 && !c;
    return (0, l.jsxs)("div", {
        className: g.ec,
        children: [
            i
                ? (0, l.jsx)("div", {
                      className: g.N1,
                      children: (0, l.jsx)(a.D, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          children: (0, f._Q)(t.type),
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: g.Wh,
                children: [
                    null != o
                        ? (0, l.jsx)(r.D, {
                              className: g.XA,
                              onClick: o,
                              "aria-label": t.name,
                              children: (0, l.jsx)(f.Tf, { resolvedActivity: t }),
                          })
                        : (0, l.jsx)(f.Tf, { resolvedActivity: t }),
                    (0, l.jsx)("div", {
                        className: g.wt,
                        children: (0, l.jsxs)(r.D, {
                            className: null != o ? g.wv : void 0,
                            onClick: o,
                            children: [
                                (0, l.jsx)(a.D, {
                                    variant: "heading-xs/medium",
                                    color: "text-strong",
                                    className: g.DD,
                                    lineClamp: 1,
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, l.jsx)(s.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                h
                                    ? (0, l.jsx)(s.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                null != n
                                    ? (0, l.jsxs)(d.mG, {
                                          location: d.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, l.jsx)(p.QA, { activity: n }),
                                              (0, l.jsx)(p.cy, { activity: n }),
                                              (0, l.jsx)(p.Rq, { activity: n }),
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
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    channel: t,
                    presenceActivity: n,
                    userId: a,
                    embeddedApp: r,
                    applicationStream: s,
                    onAction: u,
                    showHeader: d = !0,
                    buttonVariant: m = "primary",
                } = e,
                A = (0, i.bG)([h.default], () => (null != a ? h.default.getUser(a) : null), [a]);
            if (null == A) return null;
            let p = (0, f.Gf)(A.id, n, r);
            return (0, l.jsxs)("div", {
                children: [
                    p.isSpotify
                        ? (0, l.jsx)(f.vP, { resolvedActivity: p, showHeader: d })
                        : (0, l.jsx)(x, { resolvedActivity: p, presenceActivity: n, showHeader: d }),
                    (0, l.jsx)(c.A, {
                        type: null != s ? o.M.STREAM_PREVIEW : o.M.VOICE_CHANNEL,
                        activity: n,
                        embeddedActivity: r?.embeddedActivity,
                        applicationStream: s,
                        user: A,
                        guildId: t?.guild_id,
                        channelId: t?.id,
                        buttonVariant: m,
                        onAction: u,
                    }),
                ],
            });
        },
    },
);
