"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(713654),
    A = n(832163),
    m = n(565688),
    _ = n(533562),
    p = n(93879),
    g = n(71393),
    f = n(576705),
    x = n(977997),
    C = n(954571),
    E = n(246084),
    I = n(667936),
    N = n(879349),
    b = n(884415),
    S = n(611330),
    T = n(652215),
    v = n(699976),
    y = n(985018),
    j = n(439792),
    R = n(335419),
    O = n(248789);
function L(e) {
    let t,
        { channel: l, guild: h, onAction: g, voiceStates: f, isChannelSelected: x, shouldShowSettingNudge: E } = e;
    (t = s.useMemo(
        () =>
            null == f || f.length > 50
                ? {}
                : {
                      [l.getGuildId()]:
                          f.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [l, f],
    )),
        (0, c.Eq)(t, "VoiceChannelActivities");
    let N = (0, u.Ay)(l),
        b = Array.from((0, u.Rz)(N).values()),
        S = (0, _.W)(),
        R = (0, d.mM)(f),
        L = (0, m.m)({ location: "voice_channel_activities" }),
        D = (0, r.bG)([A.A], () => A.A.getStorefrontDetectableGameAndApplicationIds()),
        G = R.length + b.length > 0;
    return (s.useEffect(() => {
        G && C.default.track(T.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: l.id });
    }, [G, l.id]),
    G)
        ? (0, i.jsxs)(o.HOs, {
              className: a()(O.popover, j.kL),
              children: [
                  (0, i.jsx)(M, { channel: l, isChannelSelected: x, voiceStatesCount: f?.length ?? 0 }),
                  (0, i.jsx)("div", { className: j.zN }),
                  b.map((e, t) =>
                      (0, i.jsx)(
                          I.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: l, onAction: g },
                          t,
                      ),
                  ),
                  R.map((e, t) => {
                      let { members: n, activity: a } = e,
                          r = a.application_id;
                      return (null != S && (r = S), L && null != r && D.has(r))
                          ? (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(I.A, { presenceActivity: a, channel: l, members: n, onAction: g }),
                                        (0, i.jsx)(p.A, {
                                            className: j.L,
                                            rewardOfferNoticeClassName: j.Nh,
                                            applicationId: r,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: l.guild_id,
                                            channelId: l.id,
                                            numWishlistItems: 2,
                                            cardSpec: v.Z.SIZE_110,
                                        }),
                                    ],
                                },
                                `${t}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(I.A, { presenceActivity: a, channel: l, members: n, onAction: g }, t);
                  }),
                  E &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: j.zN }),
                              (0, i.jsx)("div", {
                                  className: j.Vo,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: y.intl.format(y.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("53609"),
                                                      n.e("62026"),
                                                      n.e("55991"),
                                                  ]).then(n.bind(n, 585265));
                                                  return (t) => (0, i.jsx)(e, { ...t, guild: h });
                                              });
                                          },
                                      }),
                                  }),
                              }),
                          ],
                      }),
              ],
          })
        : null;
}
function M(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: s } = e,
        l = (0, r.bG)([f.A], () => !f.A.can(T.xBc.CONNECT, t)),
        o = (0, r.bG)([x.A], () => x.A.hasVideo(t.id)),
        c = (0, E.Ay)({ channel: t, locked: l, video: o, selected: n }),
        d = (0, r.bG)([g.A], () => g.A.getGuild(t.guild_id));
    return null == (0, h.gU)(t, d)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(j.oT, R.oT),
              children: [
                  (0, i.jsx)(N.A, { channel: t }),
                  c ? (0, i.jsx)(b.A, { userCount: s, video: o, channel: t }) : (0, i.jsx)(S.A, { userCount: s }),
              ],
          });
}
