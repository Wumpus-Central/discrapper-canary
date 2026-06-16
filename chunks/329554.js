l.d(t, { A: () => g });
var i = l(627968);
l(64700);
var s = l(17928);
if (/^(14256|21552)$/.test(l.j)) var n = l(534514);
if (/^(14256|21552)$/.test(l.j)) var a = l(939249);
if (/^(14256|21552)$/.test(l.j)) var d = l(834730);
var r = l(302959),
    c = l(765379),
    o = l(35903),
    p = l(506326),
    u = l(409626),
    m = l(692969),
    A = l(78871),
    h = l(287809),
    x = l(804630),
    v = l(145225);
function j(e) {
    let { resolvedActivity: t, presenceActivity: l, showHeader: s = !0 } = e,
        r = (0, m.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: u.Ob.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        o = null != l && !(0, c.A)(l) && null != l.party,
        h = null != t.state && t.state.length > 0 && !o;
    return (0, i.jsxs)("div", {
        className: v.ec,
        children: [
            s
                ? (0, i.jsx)("div", {
                      className: v.N1,
                      children: (0, i.jsx)(n.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, x._Q)(t.type),
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
                              "aria-label": t.name,
                              children: (0, i.jsx)(x.Tf, { resolvedActivity: t }),
                          })
                        : (0, i.jsx)(x.Tf, { resolvedActivity: t }),
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
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, i.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                h
                                    ? (0, i.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.state,
                                      })
                                    : null,
                                null != l
                                    ? (0, i.jsxs)(p.mG, {
                                          location: p.N5.VOICE_USER_POPOUT,
                                          children: [
                                              (0, i.jsx)(A.QA, { activity: l }),
                                              (0, i.jsx)(A.cy, { activity: l }),
                                              (0, i.jsx)(A.Rq, { activity: l }),
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
let g = /^(14256|21552)$/.test(l.j)
    ? function (e) {
          let {
                  channel: t,
                  presenceActivity: l,
                  userId: n,
                  embeddedApp: a,
                  applicationStream: d,
                  onAction: c,
                  showHeader: p = !0,
              } = e,
              u = (0, s.bG)([h.default], () => (null != n ? h.default.getUser(n) : null), [n]);
          if (null == u) return null;
          let m = (0, x.Gf)(u.id, l, a);
          return (0, i.jsxs)("div", {
              children: [
                  m.isSpotify
                      ? (0, i.jsx)(x.vP, { resolvedActivity: m, showHeader: p })
                      : (0, i.jsx)(j, { resolvedActivity: m, presenceActivity: l, showHeader: p }),
                  (0, i.jsx)(o.A, {
                      type: null != d ? r.M.STREAM_PREVIEW : r.M.VOICE_CHANNEL,
                      activity: l,
                      embeddedActivity: a?.embeddedActivity,
                      applicationStream: d,
                      user: u,
                      guildId: t.guild_id,
                      channelId: t.id,
                      buttonVariant: "primary",
                      onAction: c,
                  }),
              ],
          });
      }
    : null;
