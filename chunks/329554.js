n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var a = n(17928);
if (/^(14256|21552)$/.test(n.j)) var l = n(534514);
if (/^(14256|21552)$/.test(n.j)) var r = n(939249);
if (/^(14256|21552)$/.test(n.j)) var s = n(834730);
var o = n(302959),
    d = n(765379),
    c = n(35903),
    u = n(506326),
    p = n(409626),
    m = n(692969),
    h = n(78871),
    g = n(287809),
    A = n(804630),
    f = n(145225);
function v(e) {
    let { resolvedActivity: t, presenceActivity: n, showHeader: a = !0 } = e,
        o = (0, m.A)({
            location: "UserActivityRow",
            applicationId: t.applicationId,
            source: p.Ob.UserProfile,
            sourceUserId: t.userId,
            trackEntryPointImpression: !0,
        }),
        c = null != n && !(0, d.A)(n) && null != n.party,
        g = null != t.state && t.state.length > 0 && !c;
    return (0, i.jsxs)("div", {
        className: f.ec,
        children: [
            a
                ? (0, i.jsx)("div", {
                      className: f.N1,
                      children: (0, i.jsx)(l.D, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: (0, A._Q)(t.type),
                      }),
                  })
                : null,
            (0, i.jsxs)("div", {
                className: f.Wh,
                children: [
                    (0, i.jsx)(A.Tf, { resolvedActivity: t }),
                    (0, i.jsx)("div", {
                        className: f.wt,
                        children: (0, i.jsxs)(r.D, {
                            className: null != o ? f.wv : void 0,
                            onClick: o,
                            children: [
                                (0, i.jsx)(l.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    className: f.DD,
                                    lineClamp: 1,
                                    children: t.name,
                                }),
                                null != t.details
                                    ? (0, i.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 1,
                                          children: t.details,
                                      })
                                    : null,
                                g
                                    ? (0, i.jsx)(s.E, {
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
let x = /^(14256|21552)$/.test(n.j)
    ? function (e) {
          let {
                  channel: t,
                  presenceActivity: n,
                  userId: l,
                  embeddedApp: r,
                  applicationStream: s,
                  onAction: d,
                  showHeader: u = !0,
              } = e,
              p = (0, a.bG)([g.default], () => (null != l ? g.default.getUser(l) : null), [l]);
          if (null == p) return null;
          let m = (0, A.Gf)(p.id, n, r);
          return (0, i.jsxs)("div", {
              children: [
                  m.isSpotify
                      ? (0, i.jsx)(A.vP, { resolvedActivity: m, showHeader: u })
                      : (0, i.jsx)(v, { resolvedActivity: m, presenceActivity: n, showHeader: u }),
                  (0, i.jsx)(c.A, {
                      type: null != s ? o.M.STREAM_PREVIEW : o.M.VOICE_CHANNEL,
                      activity: n,
                      embeddedActivity: r?.embeddedActivity,
                      applicationStream: s,
                      user: p,
                      guildId: t.guild_id,
                      channelId: t.id,
                      buttonVariant: "primary",
                      onAction: d,
                  }),
              ],
          });
      }
    : null;
