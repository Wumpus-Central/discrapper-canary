n.d(t, { A: () => D }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(80682),
    c = n(845056),
    u = n(685399),
    h = n(833349),
    A = n(765379),
    m = n(713654),
    p = n(565688),
    g = n(93879),
    _ = n(961350),
    f = n(71393),
    x = n(576705),
    C = n(290863),
    E = n(461213),
    I = n(977997),
    b = n(403362),
    N = n(246084),
    S = n(667936),
    T = n(879349),
    v = n(884415),
    y = n(611330),
    j = n(652215),
    R = n(188275),
    O = n(985018),
    L = n(439792),
    M = n(335419);
function D(e) {
    let t,
        { channel: s, guild: a, onAction: m, voiceStates: f, isChannelSelected: x, shouldShowSettingNudge: I } = e;
    (t = l.useMemo(
        () =>
            null == f || f.length > 50
                ? {}
                : {
                      [s.getGuildId()]:
                          f.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [s, f],
    )),
        (0, d.E)(t, "VoiceChannelActivities");
    let N = (0, u.Ay)(s),
        T = Array.from((0, u.Rz)(N).values()),
        v = f?.filter(b.Vq) ?? [],
        y = (0, r.bG)(
            [E.A, C.A, _.default],
            () => {
                let e = {};
                return (
                    v.forEach((t) => {
                        let n =
                            t.user.id === _.default.getId()
                                ? E.A.findActivity(c.N, !0)
                                : C.A.findActivity(t.user.id, c.N);
                        if (null != n && !(0, A.A)(n)) {
                            let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                                l = e[i] ?? { members: [], activity: n };
                            l.members.push(t), (0, h.A)(l.activity, j.jUm.JOIN) || (l.activity = n), (e[i] = l);
                        }
                    }),
                    Object.values(e)
                );
            },
            [v],
            r.My,
        ),
        M = (0, p.m)({ location: "voice_channel_activities" });
    return y.length + T.length === 0
        ? null
        : (0, i.jsxs)(o.HOs, {
              className: L.kL,
              children: [
                  (0, i.jsx)(U, { channel: s, isChannelSelected: x, voiceStatesCount: f?.length ?? 0 }),
                  (0, i.jsx)("div", { className: L.zN }),
                  T.map((e, t) =>
                      (0, i.jsx)(
                          S.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: s, onAction: m },
                          t,
                      ),
                  ),
                  y.map((e, t) => {
                      let { members: n, activity: a } = e;
                      return M && null != a.application_id && R.sQ.has(a.application_id)
                          ? (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(S.A, { presenceActivity: a, channel: s, members: n, onAction: m }),
                                        (0, i.jsx)(g.A, {
                                            className: L.L,
                                            applicationId: a.application_id,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: s.guild_id,
                                            channelId: s.id,
                                        }),
                                    ],
                                },
                                `${t}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(S.A, { presenceActivity: a, channel: s, members: n, onAction: m }, t);
                  }),
                  I &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: L.zN }),
                              (0, i.jsx)("div", {
                                  className: L.Vo,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: O.intl.format(O.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("43549"),
                                                      n.e("62175"),
                                                      n.e("2292"),
                                                      n.e("41538"),
                                                      n.e("62733"),
                                                      n.e("83518"),
                                                      n.e("12664"),
                                                      n.e("34749"),
                                                      n.e("44667"),
                                                      n.e("7803"),
                                                      n.e("84704"),
                                                      n.e("67646"),
                                                      n.e("15207"),
                                                      n.e("35358"),
                                                      n.e("24667"),
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
          });
}
function U(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        s = (0, r.bG)([x.A], () => !x.A.can(j.xBc.CONNECT, t)),
        o = (0, r.bG)([I.A], () => I.A.hasVideo(t.id)),
        d = (0, N.Ay)({ channel: t, locked: s, video: o, selected: n }),
        c = (0, r.bG)([f.A], () => f.A.getGuild(t.guild_id));
    return null == (0, m.gU)(t, c)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(L.oT, M.oT),
              children: [
                  (0, i.jsx)(T.A, { channel: t }),
                  d ? (0, i.jsx)(v.A, { userCount: l, video: o, channel: t }) : (0, i.jsx)(y.A, { userCount: l }),
              ],
          });
}
