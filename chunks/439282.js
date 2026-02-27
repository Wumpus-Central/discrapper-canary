"use strict";
n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(833349),
    A = n(765379),
    p = n(713654),
    g = n(565688),
    m = n(533562),
    _ = n(93879),
    f = n(178213),
    x = n(961350),
    C = n(71393),
    E = n(576705),
    I = n(290863),
    N = n(461213),
    b = n(977997),
    S = n(954571),
    T = n(403362),
    y = n(246084),
    v = n(667936),
    j = n(879349),
    R = n(884415),
    O = n(611330),
    L = n(652215),
    M = n(188275),
    D = n(985018),
    G = n(439792),
    U = n(335419);
function P(e) {
    let t,
        {
            channel: l,
            guild: p,
            onAction: C,
            voiceStates: E,
            isChannelSelected: b,
            shouldShowSettingNudge: y,
            isStandardGap: j,
        } = e;
    (t = s.useMemo(
        () =>
            null == E || E.length > 50
                ? {}
                : {
                      [l.getGuildId()]:
                          E.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [l, E],
    )),
        (0, c.E)(t, "VoiceChannelActivities");
    let R = (0, u.Ay)(l),
        O = Array.from((0, u.Rz)(R).values()),
        U = (0, m.W)(),
        P = E?.filter(T.Vq) ?? [],
        k = (0, a.bG)(
            [N.A, I.A, x.default],
            () => {
                let e = {};
                return (
                    P.forEach((t) => {
                        let n =
                            t.user.id === x.default.getId()
                                ? N.A.findActivity(d.N, !0)
                                : I.A.findActivity(t.user.id, d.N);
                        if (null != n && !(0, A.A)(n)) {
                            let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                                s = e[i] ?? { members: [], activity: n };
                            s.members.push(t), (0, h.A)(s.activity, L.jUm.JOIN) || (s.activity = n), (e[i] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [P],
            a.My,
        ),
        B = (0, g.m)({ location: "voice_channel_activities" }),
        V = (0, f.G)("voice_channel_activities"),
        H = k.length + O.length > 0;
    return (s.useEffect(() => {
        H && S.default.track(L.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: l.id });
    }, [H, l.id]),
    H)
        ? (0, i.jsxs)(o.HOs, {
              className: r()(G.kL, { [G.iA]: j }, { [G.XK]: V }),
              children: [
                  (0, i.jsx)(w, { channel: l, isChannelSelected: b, voiceStatesCount: E?.length ?? 0 }),
                  (0, i.jsx)("div", { className: G.zN }),
                  O.map((e, t) =>
                      (0, i.jsx)(
                          v.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: l, onAction: C },
                          t,
                      ),
                  ),
                  k.map((e, t) => {
                      let { members: n, activity: a } = e,
                          o = a.application_id;
                      return (null != U && (o = U), B && null != o && M.sQ.has(o))
                          ? (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(v.A, { presenceActivity: a, channel: l, members: n, onAction: C }),
                                        (0, i.jsx)(_.A, {
                                            className: r()(G.L, { [G.SW]: V }),
                                            rewardOfferNoticeClassName: G.Nh,
                                            applicationId: o,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: l.guild_id,
                                            channelId: l.id,
                                        }),
                                    ],
                                },
                                `${t}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(v.A, { presenceActivity: a, channel: l, members: n, onAction: C }, t);
                  }),
                  y &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: G.zN }),
                              (0, i.jsx)("div", {
                                  className: G.Vo,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: D.intl.format(D.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("62175"),
                                                      n.e("2292"),
                                                      n.e("67231"),
                                                      n.e("62733"),
                                                      n.e("83518"),
                                                      n.e("57009"),
                                                      n.e("34749"),
                                                      n.e("12664"),
                                                      n.e("44667"),
                                                      n.e("55090"),
                                                      n.e("7803"),
                                                      n.e("84704"),
                                                      n.e("67646"),
                                                      n.e("77374"),
                                                      n.e("7525"),
                                                      n.e("47065"),
                                                  ]).then(n.bind(n, 585265));
                                                  return (t) => (0, i.jsx)(e, { ...t, guild: p });
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
function w(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: s } = e,
        l = (0, a.bG)([E.A], () => !E.A.can(L.xBc.CONNECT, t)),
        o = (0, a.bG)([b.A], () => b.A.hasVideo(t.id)),
        c = (0, y.Ay)({ channel: t, locked: l, video: o, selected: n }),
        d = (0, a.bG)([C.A], () => C.A.getGuild(t.guild_id));
    return null == (0, p.gU)(t, d)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(G.oT, U.oT),
              children: [
                  (0, i.jsx)(j.A, { channel: t }),
                  c ? (0, i.jsx)(R.A, { userCount: s, video: o, channel: t }) : (0, i.jsx)(O.A, { userCount: s }),
              ],
          });
}
