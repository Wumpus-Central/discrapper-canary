n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(302959),
    r = n(765379),
    o = n(592182),
    d = n(506326),
    c = n(409626),
    u = n(692969),
    h = n(78871),
    A = n(287809),
    _ = n(804630),
    m = n(812810);
function g(e) {
    let { resolvedActivity: t, presenceActivity: n, showHeader: l = !0 } = e,
        a = (0, u.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: c.Ob.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        o = null != n && !(0, r.A)(n) && null != n.party,
        A = null != t.state && t.state.length > 0 && !o;
    return (0, i.jsxs)("div", {
        className: m.ec,
        children: [
            l
                ? (0, i.jsx)("div", {
                      className: m.N1,
                      children: (0, i.jsx)(s.Heading, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, _._Q)(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: m.Wh,
                children: [
                    (0, i.jsx)(_.Tf, { resolvedActivity: t }),
                    (0, i.jsx)("div", {
                        className: m.wt,
                        children: (0, i.jsxs)(s.DUT, {
                            className: null != a ? m.wv : void 0,
                            onClick: a,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: m.DD,
                                    lineClamp: 1,
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, i.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                A
                                    ? (0, i.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                null != n
                                    ? (0, i.jsxs)(d.mG, {
                                          location: d.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, i.jsx)(h.QA, { activity: n }),
                                              (0, i.jsx)(h.cy, { activity: n }),
                                              (0, i.jsx)(h.Rq, { activity: n }),
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
let p = function (e) {
    let {
            channel: t,
            presenceActivity: n,
            userId: s,
            embeddedApp: r,
            applicationStream: d,
            onAction: c,
            showHeader: u = !0,
        } = e,
        h = (0, l.bG)([A.default], () => (null != s ? A.default.getUser(s) : null), [s]);
    if (null == h) return null;
    let m = (0, _.Gf)(h.id, n, r);
    return (0, i.jsxs)("div", {
        children: [
            m.isSpotify
                ? (0, i.jsx)(_.vP, { resolvedActivity: m, showHeader: u })
                : (0, i.jsx)(g, { resolvedActivity: m, presenceActivity: n, showHeader: u }),
            (0, i.jsx)(o.A, {
                type: null != d ? a.M.STREAM_PREVIEW : a.M.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: r?.embeddedActivity,
                applicationStream: d,
                user: h,
                guildId: t.guild_id,
                channelId: t.id,
                buttonVariant: "primary",
                onAction: c,
            }),
        ],
    });
};
