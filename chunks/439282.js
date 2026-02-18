n.d(t, { A: () => G }), n(321073);
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
    p = n(713654),
    m = n(565688),
    g = n(93879),
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
    v = n(879349),
    y = n(884415),
    j = n(611330),
    R = n(652215),
    O = n(188275),
    L = n(985018),
    M = n(439792),
    D = n(335419);
function G(e) {
    let t,
        {
            channel: s,
            guild: p,
            onAction: f,
            voiceStates: x,
            isChannelSelected: I,
            shouldShowSettingNudge: S,
            isStandardGap: v,
        } = e;
    (t = l.useMemo(
        () =>
            null == x || x.length > 50
                ? {}
                : {
                      [s.getGuildId()]:
                          x.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [s, x],
    )),
        (0, d.E)(t, "VoiceChannelActivities");
    let y = (0, u.Ay)(s),
        j = Array.from((0, u.Rz)(y).values()),
        D = x?.filter(b.Vq) ?? [],
        G = (0, r.bG)(
            [E.A, C.A, _.default],
            () => {
                let e = {};
                return (
                    D.forEach((t) => {
                        let n =
                            t.user.id === _.default.getId()
                                ? E.A.findActivity(c.N, !0)
                                : C.A.findActivity(t.user.id, c.N);
                        if (null != n && !(0, A.A)(n)) {
                            let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                                l = e[i] ?? { members: [], activity: n };
                            l.members.push(t), (0, h.A)(l.activity, R.jUm.JOIN) || (l.activity = n), (e[i] = l);
                        }
                    }),
                    Object.values(e)
                );
            },
            [D],
            r.My,
        ),
        P = (0, m.m)({ location: "voice_channel_activities" }),
        w = G.length + j.length > 0;
    return (l.useEffect(() => {
        w && N.default.track(R.HAw.OPEN_POPOUT, { type: "Voice Channel Activities", channel_id: s.id });
    }, [w, s.id]),
    w)
        ? (0, i.jsxs)(o.HOs, {
              className: a()(M.kL, { [M.iA]: v }),
              children: [
                  (0, i.jsx)(U, { channel: s, isChannelSelected: I, voiceStatesCount: x?.length ?? 0 }),
                  (0, i.jsx)("div", { className: M.zN }),
                  j.map((e, t) =>
                      (0, i.jsx)(
                          T.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: s, onAction: f },
                          t,
                      ),
                  ),
                  G.map((e, t) => {
                      let { members: n, activity: a } = e;
                      return P && null != a.application_id && O.sQ.has(a.application_id)
                          ? (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(T.A, { presenceActivity: a, channel: s, members: n, onAction: f }),
                                        (0, i.jsx)(g.A, {
                                            className: M.L,
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
                          : (0, i.jsx)(T.A, { presenceActivity: a, channel: s, members: n, onAction: f }, t);
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
                                                      n.e("12664"),
                                                      n.e("34749"),
                                                      n.e("94604"),
                                                      n.e("44667"),
                                                      n.e("7803"),
                                                      n.e("55090"),
                                                      n.e("84704"),
                                                      n.e("67646"),
                                                      n.e("45641"),
                                                      n.e("96800"),
                                                      n.e("24667"),
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
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        s = (0, r.bG)([x.A], () => !x.A.can(R.xBc.CONNECT, t)),
        o = (0, r.bG)([I.A], () => I.A.hasVideo(t.id)),
        d = (0, S.Ay)({ channel: t, locked: s, video: o, selected: n }),
        c = (0, r.bG)([f.A], () => f.A.getGuild(t.guild_id));
    return null == (0, p.gU)(t, c)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(M.oT, D.oT),
              children: [
                  (0, i.jsx)(v.A, { channel: t }),
                  d ? (0, i.jsx)(y.A, { userCount: l, video: o, channel: t }) : (0, i.jsx)(j.A, { userCount: l }),
              ],
          });
}
