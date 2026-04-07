n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(302959),
    r = n(592182),
    o = n(409626),
    d = n(692969),
    c = n(287809),
    u = n(804630),
    h = n(257081);
function A(e) {
    let { resolvedActivity: t, showHeader: n = !0 } = e,
        l = (0, d.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: o.Ob.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        });
    return (0, i.jsxs)("div", {
        className: h.ec,
        children: [
            n
                ? (0, i.jsx)("div", {
                      className: h.N1,
                      children: (0, i.jsx)(s.Heading, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, u._Q)(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: h.Wh,
                children: [
                    (0, i.jsx)(u.Tf, { resolvedActivity: t }),
                    (0, i.jsx)("div", {
                        className: h.wt,
                        children: (0, i.jsxs)(s.DUT, {
                            className: null != l ? h.wv : void 0,
                            onClick: l,
                            children: [
                                (0, i.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: h.DD,
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
                                null != t.state
                                    ? (0, i.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                (0, i.jsx)(u.KV, { resolvedActivity: t }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let _ = function (e) {
    let {
            channel: t,
            presenceActivity: n,
            userId: s,
            embeddedApp: o,
            applicationStream: d,
            onAction: h,
            showHeader: _ = !0,
        } = e,
        m = (0, l.bG)([c.default], () => (null != s ? c.default.getUser(s) : null), [s]);
    if (null == m) return null;
    let p = (0, u.Gf)(m.id, n, o);
    return (0, i.jsxs)("div", {
        children: [
            p.isSpotify
                ? (0, i.jsx)(u.vP, { resolvedActivity: p, showHeader: _ })
                : (0, i.jsx)(A, { resolvedActivity: p, showHeader: _ }),
            (0, i.jsx)(r.A, {
                type: null != d ? a.M.STREAM_PREVIEW : a.M.VOICE_CHANNEL,
                activity: n,
                embeddedActivity: o?.embeddedActivity,
                applicationStream: d,
                user: m,
                guildId: t.guild_id,
                channelId: t.id,
                buttonVariant: "primary",
                onAction: h,
            }),
        ],
    });
};
