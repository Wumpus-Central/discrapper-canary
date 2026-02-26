"use strict";
n.d(t, { A: () => G }), n(321073);
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
    m = n(93879),
    _ = n(961350),
    f = n(71393),
    x = n(576705),
    C = n(290863),
    E = n(461213),
    I = n(977997),
    N = n(954571),
    b = n(403362),
    S = n(246084),
    T = n(667936),
    y = n(101730),
    v = n(884415),
    j = n(611330),
    R = n(652215),
    O = n(188275),
    L = n(985018),
    M = n(611422),
    D = n(386777);
function G(e) {
    let t,
        {
            channel: l,
            guild: p,
            onAction: f,
            voiceStates: x,
            isChannelSelected: I,
            shouldShowSettingNudge: S,
            isStandardGap: y,
        } = e;
    (t = s.useMemo(
        () =>
            null == x || x.length > 50
                ? {}
                : {
                      [l.getGuildId()]:
                          x.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [l, x],
    )),
        (0, c.E)(t, "VoiceChannelActivities");
    let v = (0, u.Ay)(l),
        j = Array.from((0, u.Rz)(v).values()),
        D = x?.filter(b.Vq) ?? [],
        G = (0, a.bG)(
            [E.A, C.A, _.default],
            () => {
                let e = {};
                return (
                    D.forEach((t) => {
                        let n =
                            t.user.id === _.default.getId()
                                ? E.A.findActivity(d.N, !0)
                                : C.A.findActivity(t.user.id, d.N);
                        if (null != n && !(0, A.A)(n)) {
                            let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                                s = e[i] ?? { members: [], activity: n };
                            s.members.push(t), (0, h.A)(s.activity, R.jUm.JOIN) || (s.activity = n), (e[i] = s);
                        }
                    }),
                    Object.values(e)
                );
            },
            [D],
            a.My,
        ),
        P = (0, g.m)({ location: "voice_channel_activities" }),
        w = G.length + j.length > 0;
    return (s.useEffect(() => {
        w && N.default.track(R.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: l.id });
    }, [w, l.id]),
    w)
        ? (0, i.jsxs)(o.HOs, {
              className: r()(M.kL, { [M.iA]: y }),
              children: [
                  (0, i.jsx)(U, { channel: l, isChannelSelected: I, voiceStatesCount: x?.length ?? 0 }),
                  (0, i.jsx)("div", { className: M.zN }),
                  j.map((e, t) =>
                      (0, i.jsx)(
                          T.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: l, onAction: f },
                          t,
                      ),
                  ),
                  G.map((e, t) => {
                      let { members: n, activity: r } = e;
                      return P && null != r.application_id && O.sQ.has(r.application_id)
                          ? (0, i.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(T.A, { presenceActivity: r, channel: l, members: n, onAction: f }),
                                        (0, i.jsx)(m.A, {
                                            className: M.L,
                                            applicationId: r.application_id,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: l.guild_id,
                                            channelId: l.id,
                                        }),
                                    ],
                                },
                                `${t}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(T.A, { presenceActivity: r, channel: l, members: n, onAction: f }, t);
                  }),
                  S &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: M.zN }),
                              (0, i.jsx)("div", {
                                  className: M.Vo,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: L.intl.format(L.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("62175"),
                                                      n.e("2292"),
                                                      n.e("67231"),
                                                      n.e("62733"),
                                                      n.e("83518"),
                                                      n.e("94604"),
                                                      n.e("34749"),
                                                      n.e("12664"),
                                                      n.e("44667"),
                                                      n.e("55090"),
                                                      n.e("7803"),
                                                      n.e("84704"),
                                                      n.e("67646"),
                                                      n.e("86738"),
                                                      n.e("7525"),
                                                      n.e("94095"),
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
function U(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: s } = e,
        l = (0, a.bG)([x.A], () => !x.A.can(R.xBc.CONNECT, t)),
        o = (0, a.bG)([I.A], () => I.A.hasVideo(t.id)),
        c = (0, S.Ay)({ channel: t, locked: l, video: o, selected: n }),
        d = (0, a.bG)([f.A], () => f.A.getGuild(t.guild_id));
    return null == (0, p.gU)(t, d)
        ? null
        : (0, i.jsxs)("div", {
              className: r()(M.oT, D.oT),
              children: [
                  (0, i.jsx)(y.A, { channel: t }),
                  c ? (0, i.jsx)(v.A, { userCount: s, video: o, channel: t }) : (0, i.jsx)(j.A, { userCount: s }),
              ],
          });
}
