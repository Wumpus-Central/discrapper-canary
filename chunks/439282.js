"use strict";
n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    c = n(80682),
    d = n(845056),
    u = n(685399),
    h = n(833349),
    A = n(765379),
    p = n(713654),
    m = n(565688),
    g = n(533562),
    _ = n(93879),
    f = n(961350),
    x = n(71393),
    C = n(576705),
    E = n(290863),
    I = n(461213),
    N = n(977997),
    b = n(954571),
    S = n(403362),
    T = n(246084),
    y = n(667936),
    v = n(879349),
    j = n(884415),
    R = n(611330),
    O = n(652215),
    L = n(188275),
    M = n(985018),
    D = n(439792),
    G = n(335419);
function U(e) {
    let t,
        {
            channel: l,
            guild: p,
            onAction: x,
            voiceStates: C,
            isChannelSelected: N,
            shouldShowSettingNudge: T,
            isStandardGap: v,
        } = e;
    (t = s.useMemo(
        () =>
            null == C || C.length > 50
                ? {}
                : {
                      [l.getGuildId()]:
                          C.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [l, C],
    )),
        (0, c.E)(t, "VoiceChannelActivities");
    let j = (0, u.Ay)(l),
        R = Array.from((0, u.Rz)(j).values()),
        G = (0, g.W)(),
        U = C?.filter(S.Vq) ?? [],
        w = (0, r.bG)(
            [I.A, E.A, f.default],
            () => {
                let e = {};
                return (
                    U.forEach((t) => {
                        let n =
                            t.user.id === f.default.getId()
                                ? I.A.findActivity(d.N, !0)
                                : E.A.findActivity(t.user.id, d.N);
                        if (null != n && !(0, A.A)(n)) {
                            let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                                s = e[i] ?? { members: [], activity: n };
                            s.members.push(t), (0, h.A)(s.activity, O.jUm.JOIN) || (s.activity = n), (e[i] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [U],
            r.My,
        ),
        k = (0, m.m)({ location: "voice_channel_activities" }),
        V = w.length + R.length > 0;
    return (s.useEffect(() => {
        V && b.default.track(O.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: l.id });
    }, [V, l.id]),
    V)
        ? (0, i.jsxs)(o.HOs, {
              className: a()(D.kL, { [D.iA]: v }),
              children: [
                  (0, i.jsx)(P, { channel: l, isChannelSelected: N, voiceStatesCount: C?.length ?? 0 }),
                  (0, i.jsx)("div", { className: D.zN }),
                  R.map((e, t) =>
                      (0, i.jsx)(
                          y.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: l, onAction: x },
                          t,
                      ),
                  ),
                  w.map((e, t) => {
                      let { members: n, activity: a } = e,
                          r = a.application_id;
                      return (null != G && (r = G), k && null != r && L.sQ.has(r))
                          ? (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(y.A, { presenceActivity: a, channel: l, members: n, onAction: x }),
                                        (0, i.jsx)(_.A, {
                                            className: D.L,
                                            rewardOfferNoticeClassName: D.Nh,
                                            applicationId: r,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: l.guild_id,
                                            channelId: l.id,
                                        }),
                                    ],
                                },
                                `${t}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(y.A, { presenceActivity: a, channel: l, members: n, onAction: x }, t);
                  }),
                  T &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: D.zN }),
                              (0, i.jsx)("div", {
                                  className: D.Vo,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: M.intl.format(M.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("62175"),
                                                      n.e("2292"),
                                                      n.e("67231"),
                                                      n.e("62733"),
                                                      n.e("83518"),
                                                      n.e("24771"),
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
function P(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: s } = e,
        l = (0, r.bG)([C.A], () => !C.A.can(O.xBc.CONNECT, t)),
        o = (0, r.bG)([N.A], () => N.A.hasVideo(t.id)),
        c = (0, T.Ay)({ channel: t, locked: l, video: o, selected: n }),
        d = (0, r.bG)([x.A], () => x.A.getGuild(t.guild_id));
    return null == (0, p.gU)(t, d)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(D.oT, G.oT),
              children: [
                  (0, i.jsx)(v.A, { channel: t }),
                  c ? (0, i.jsx)(j.A, { userCount: s, video: o, channel: t }) : (0, i.jsx)(R.A, { userCount: s }),
              ],
          });
}
