n.d(t, { Z: () => T }), n(47120), n(390547), n(653041);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    d = n(317381),
    u = n(884338),
    h = n(540059),
    p = n(565799),
    m = n(501655),
    g = n(199902),
    f = n(592125),
    _ = n(594174),
    v = n(938475),
    C = n(823379),
    x = n(709054),
    I = n(853856),
    Z = n(981631),
    b = n(388032),
    S = n(222594),
    N = n(577187);
function E(e, t) {
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: S.row,
              children: [
                  (0, i.jsx)(e, {
                      className: S.activityIcon,
                      color: 'currentColor'
                  }),
                  (0, i.jsx)(u.Z, {
                      guildId: void 0,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function j() {
    let e = (0, s.Wu)([I.Z, f.Z], () =>
            x.default
                .keys(I.Z.getFavoriteChannels())
                .map((e) => f.Z.getChannel(e))
                .filter(C.lm)
        ),
        t = e.map((e) => e.id),
        n = e.filter((e) => e.type === Z.d4z.GUILD_VOICE),
        l = e.filter((e) => e.type === Z.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        r = (0, s.Wu)(
            [v.ZP],
            () =>
                a().flatMap(n, (e) =>
                    v.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [n]
        ),
        o = (0, s.Wu)([p.Z], () =>
            a().flatMap(l, (e) =>
                p.Z.getMutableParticipants(e, m.pV.SPEAKER)
                    .filter((e) => e.type === m.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        h = (0, s.e7)([p.Z], () => {
            let e = 0;
            for (let t of l) e += p.Z.getParticipantCount(t, m.pV.AUDIENCE);
            return e;
        }),
        b = (0, s.Wu)(
            [g.Z],
            () =>
                g.Z.getAllApplicationStreams()
                    .filter((e) => t.includes(e.channelId))
                    .map((e) => e.ownerId),
            [t]
        ),
        N = (0, s.Wu)(
            [d.ZP],
            () => {
                let e = d.ZP.getEmbeddedActivitiesByChannel(),
                    n = [];
                for (let r of t) {
                    var i, l;
                    n.push(...(null !== (l = null === (i = e.get(r)) || void 0 === i ? void 0 : i.flatMap((e) => Array.from(e.userIds))) && void 0 !== l ? l : []));
                }
                return n;
            },
            [t]
        ),
        j = (0, s.Wu)([_.default], () => N.map((e) => _.default.getUser(e)), [N]),
        y = (0, s.Wu)([_.default], () => b.map((e) => _.default.getUser(e)), [b]),
        T = E(
            c.gj8,
            r.filter((e) => !b.includes(e.id) && !N.includes(e.id))
        ),
        A =
            0 === o.length
                ? null
                : (0, i.jsxs)('div', {
                      className: S.row,
                      children: [
                          (0, i.jsx)(c.ewx, {
                              size: 'lg',
                              color: 'currentColor',
                              className: S.activityIcon
                          }),
                          (0, i.jsx)(u.Z, {
                              guildId: void 0,
                              users: o,
                              max: 3
                          }),
                          (0, i.jsxs)('div', {
                              className: S.stageListenerPill,
                              children: [
                                  (0, i.jsx)(c.VWR, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      className: S.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: h
                                  })
                              ]
                          })
                      ]
                  }),
        P = E(
            c.hGI,
            y.filter((e) => null != e && !N.includes(e.id))
        ),
        R = E(c.nG3, j);
    return (0, i.jsxs)(i.Fragment, {
        children: [A, T, P, R]
    });
}
function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(S.row, S.rowGuildName),
                children: (0, i.jsx)('span', {
                    className: r()(S.guildNameText, S.guildNameTextLimitedSize),
                    children: b.intl.string(b.t.wMWycn)
                })
            }),
            (0, i.jsx)(j, {})
        ]
    });
}
function T(e) {
    let { 'aria-label': t = !1, onShow: n, children: l } = e,
        r = (0, h.Q3)('FavoritesTooltip');
    return (0, i.jsx)(c.ua7, {
        hideOnClick: !0,
        spacing: r ? 12 : 20,
        position: 'right',
        text: (0, i.jsx)(y, {}),
        'aria-label': t,
        tooltipClassName: N.listItemTooltip,
        onTooltipShow: n,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                children: l
            })
    });
}
