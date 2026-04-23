n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(534514),
    a = n(939249),
    r = n(834730),
    o = n(302959),
    d = n(765379),
    c = n(592182),
    u = n(506326),
    h = n(409626),
    A = n(692969),
    _ = n(78871),
    m = n(287809),
    g = n(804630),
    p = n(145225);
function f(e) {
    let { resolvedActivity: t, presenceActivity: n, showHeader: l = !0 } = e,
        o = (0, A.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: h.Ob.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        c = null != n && !(0, d.A)(n) && null != n.party,
        m = null != t.state && t.state.length > 0 && !c;
    return (0, i.jsxs)("div", {
        className: p.ec,
        children: [
            l
                ? (0, i.jsx)("div", {
                      className: p.N1,
                      children: (0, i.jsx)(s.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, g._Q)(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: p.Wh,
                children: [
                    (0, i.jsx)(g.Tf, { resolvedActivity: t }),
                    (0, i.jsx)("div", {
                        className: p.wt,
                        children: (0, i.jsxs)(a.D, {
                            className: null != o ? p.wv : void 0,
                            onClick: o,
                            children: [
                                (0, i.jsx)(s.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: p.DD,
                                    lineClamp: 1,
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, i.jsx)(r.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                m
                                    ? (0, i.jsx)(r.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                null != n
                                    ? (0, i.jsxs)(u.mG, {
                                          location: u.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, i.jsx)(_.QA, { activity: n }),
                                              (0, i.jsx)(_.cy, { activity: n }),
                                              (0, i.jsx)(_.Rq, { activity: n }),
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
let E = function (e) {
    let {
            channel: t,
            presenceActivity: n,
            userId: s,
            embeddedApp: a,
            applicationStream: r,
            onAction: d,
            showHeader: u = !0,
        } = e,
        h = (0, l.bG)([m.default], () => (null != s ? m.default.getUser(s) : null), [s]);
    if (null == h) return null;
    let A = (0, g.Gf)(h.id, n, a);
    return (0, i.jsxs)("div", {
        children: [
            A.isSpotify
                ? (0, i.jsx)(g.vP, { resolvedActivity: A, showHeader: u })
                : (0, i.jsx)(f, { resolvedActivity: A, presenceActivity: n, showHeader: u }),
            (0, i.jsx)(c.A, {
                type: null != r ? o.M.STREAM_PREVIEW : o.M.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: a?.embeddedActivity,
                applicationStream: r,
                user: h,
                guildId: t.guild_id,
                channelId: t.id,
                buttonVariant: "primary",
                onAction: d,
            }),
        ],
    });
};
