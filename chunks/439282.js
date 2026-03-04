"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(713654),
    A = n(565688),
    m = n(533562),
    p = n(93879),
    g = n(71393),
    _ = n(576705),
    f = n(977997),
    x = n(954571),
    C = n(246084),
    E = n(667936),
    I = n(879349),
    N = n(884415),
    S = n(611330),
    b = n(652215),
    T = n(188275),
    v = n(699976),
    y = n(985018),
    j = n(439792),
    R = n(335419),
    O = n(248789);
function L(e) {
    let t,
        { channel: l, guild: a, onAction: h, voiceStates: g, isChannelSelected: _, shouldShowSettingNudge: f } = e;
    (t = s.useMemo(
        () =>
            null == g || g.length > 50
                ? {}
                : {
                      [l.getGuildId()]:
                          g.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [l, g],
    )),
        (0, c.Eq)(t, "VoiceChannelActivities");
    let C = (0, u.Ay)(l),
        I = Array.from((0, u.Rz)(C).values()),
        N = (0, m.W)(),
        S = (0, d.mM)(g),
        R = (0, A.m)({ location: "voice_channel_activities" }),
        L = S.length + I.length > 0;
    return (s.useEffect(() => {
        L && x.default.track(b.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: l.id });
    }, [L, l.id]),
    L)
        ? (0, i.jsxs)(o.HOs, {
              className: r()(O.popover, j.kL),
              children: [
                  (0, i.jsx)(M, { channel: l, isChannelSelected: _, voiceStatesCount: g?.length ?? 0 }),
                  (0, i.jsx)("div", { className: j.zN }),
                  I.map((e, t) =>
                      (0, i.jsx)(
                          E.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: l, onAction: h },
                          t,
                      ),
                  ),
                  S.map((e, t) => {
                      let { members: n, activity: r } = e,
                          a = r.application_id;
                      return (null != N && (a = N), R && null != a && T.sQ.has(a))
                          ? (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(E.A, { presenceActivity: r, channel: l, members: n, onAction: h }),
                                        (0, i.jsx)(p.A, {
                                            className: j.L,
                                            rewardOfferNoticeClassName: j.Nh,
                                            applicationId: a,
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
                          : (0, i.jsx)(E.A, { presenceActivity: r, channel: l, members: n, onAction: h }, t);
                  }),
                  f &&
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
                                                      n.e("62175"),
                                                      n.e("2292"),
                                                      n.e("67231"),
                                                      n.e("62733"),
                                                      n.e("83518"),
                                                      n.e("34749"),
                                                      n.e("24771"),
                                                      n.e("12664"),
                                                      n.e("44667"),
                                                      n.e("55090"),
                                                      n.e("7803"),
                                                      n.e("84704"),
                                                      n.e("67646"),
                                                      n.e("63742"),
                                                      n.e("7525"),
                                                      n.e("47065"),
                                                  ]).then(n.bind(n, 585265));
                                                  return (t) => (0, i.jsx)(e, { ...t, guild: a });
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
        l = (0, a.bG)([_.A], () => !_.A.can(b.xBc.CONNECT, t)),
        o = (0, a.bG)([f.A], () => f.A.hasVideo(t.id)),
        c = (0, C.Ay)({ channel: t, locked: l, video: o, selected: n }),
        d = (0, a.bG)([g.A], () => g.A.getGuild(t.guild_id));
    return null == (0, h.gU)(t, d)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(j.oT, R.oT),
              children: [
                  (0, i.jsx)(I.A, { channel: t }),
                  c ? (0, i.jsx)(N.A, { userCount: s, video: o, channel: t }) : (0, i.jsx)(S.A, { userCount: s }),
              ],
          });
}
