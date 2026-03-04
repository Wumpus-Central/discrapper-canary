"use strict";
n.d(t, { A: () => O });
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
    A = n(565688),
    p = n(533562),
    m = n(93879),
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
    R = n(335419);
function O(e) {
    let t,
        {
            channel: l,
            guild: r,
            onAction: h,
            voiceStates: g,
            isChannelSelected: _,
            shouldShowSettingNudge: f,
            isStandardGap: C,
        } = e;
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
    let I = (0, u.Ay)(l),
        N = Array.from((0, u.Rz)(I).values()),
        S = (0, p.W)(),
        R = (0, d.mM)(g),
        O = (0, A.m)({ location: "voice_channel_activities" }),
        M = R.length + N.length > 0;
    return (s.useEffect(() => {
        M && x.default.track(b.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: l.id });
    }, [M, l.id]),
    M)
        ? (0, i.jsxs)(o.HOs, {
              className: a()(j.kL, { [j.iA]: C }),
              children: [
                  (0, i.jsx)(L, { channel: l, isChannelSelected: _, voiceStatesCount: g?.length ?? 0 }),
                  (0, i.jsx)("div", { className: j.zN }),
                  N.map((e, t) =>
                      (0, i.jsx)(
                          E.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: l, onAction: h },
                          t,
                      ),
                  ),
                  R.map((e, t) => {
                      let { members: n, activity: a } = e,
                          r = a.application_id;
                      return (null != S && (r = S), O && null != r && T.sQ.has(r))
                          ? (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(E.A, { presenceActivity: a, channel: l, members: n, onAction: h }),
                                        (0, i.jsx)(m.A, {
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
                          : (0, i.jsx)(E.A, { presenceActivity: a, channel: l, members: n, onAction: h }, t);
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
                                                  return (t) => (0, i.jsx)(e, { ...t, guild: r });
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
function L(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: s } = e,
        l = (0, r.bG)([_.A], () => !_.A.can(b.xBc.CONNECT, t)),
        o = (0, r.bG)([f.A], () => f.A.hasVideo(t.id)),
        c = (0, C.Ay)({ channel: t, locked: l, video: o, selected: n }),
        d = (0, r.bG)([g.A], () => g.A.getGuild(t.guild_id));
    return null == (0, h.gU)(t, d)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(j.oT, R.oT),
              children: [
                  (0, i.jsx)(I.A, { channel: t }),
                  c ? (0, i.jsx)(N.A, { userCount: s, video: o, channel: t }) : (0, i.jsx)(S.A, { userCount: s }),
              ],
          });
}
