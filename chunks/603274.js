n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120),
    n(390547),
    n(653041);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(317381),
    d = n(884338),
    h = n(540059),
    p = n(565799),
    f = n(501655),
    m = n(199902),
    g = n(592125),
    v = n(594174),
    C = n(938475),
    x = n(823379),
    I = n(709054),
    _ = n(853856),
    Z = n(981631),
    b = n(388032),
    S = n(782451),
    N = n(572488);
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
                  (0, i.jsx)(d.Z, {
                      guildId: void 0,
                      users: t,
                      max: 6
                  })
              ]
          });
}
function y() {
    var e, t;
    let n = (0, s.Wu)([_.Z, g.Z], () =>
            I.default
                .keys(_.Z.getFavoriteChannels())
                .map((e) => g.Z.getChannel(e))
                .filter(x.lm)
        ),
        l = n.map((e) => e.id),
        r = n.filter((e) => e.type === Z.d4z.GUILD_VOICE),
        a = n.filter((e) => e.type === Z.d4z.GUILD_STAGE_VOICE).map((e) => e.id),
        h = (0, s.Wu)(
            [C.ZP],
            () =>
                o().flatMap(r, (e) =>
                    C.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    })
                ),
            [r]
        ),
        b = (0, s.Wu)([p.Z], () =>
            o().flatMap(a, (e) =>
                p.Z.getMutableParticipants(e, f.pV.SPEAKER)
                    .filter((e) => e.type === f.Ui.VOICE)
                    .map((e) => {
                        let { user: t } = e;
                        return t;
                    })
            )
        ),
        N = (0, s.e7)([p.Z], () => {
            let e = 0;
            for (let t of a) e += p.Z.getParticipantCount(t, f.pV.AUDIENCE);
            return e;
        }),
        y = (0, s.Wu)(
            [m.Z],
            () =>
                m.Z.getAllApplicationStreams()
                    .filter((e) => l.includes(e.channelId))
                    .map((e) => e.ownerId),
            [l]
        ),
        j = (0, s.Wu)(
            [u.ZP],
            () => {
                let e = u.ZP.getEmbeddedActivitiesByChannel(),
                    t = [];
                for (let r of l) {
                    var n, i;
                    t.push(...(null !== (i = null === (n = e.get(r)) || void 0 === n ? void 0 : n.flatMap((e) => Array.from(e.userIds))) && void 0 !== i ? i : []));
                }
                return t;
            },
            [l]
        ),
        T = (0, s.Wu)([v.default], () => j.map((e) => v.default.getUser(e)), [j]),
        P = (0, s.Wu)([v.default], () => y.map((e) => v.default.getUser(e)), [y]),
        A = E(
            c.VoiceNormalIcon,
            h.filter((e) => !y.includes(e.id) && !j.includes(e.id))
        );
    let w =
            ((e = b),
            (t = N),
            0 === e.length
                ? null
                : (0, i.jsxs)('div', {
                      className: S.row,
                      children: [
                          (0, i.jsx)(c.StageIcon, {
                              size: 'lg',
                              color: 'currentColor',
                              className: S.activityIcon
                          }),
                          (0, i.jsx)(d.Z, {
                              guildId: void 0,
                              users: e,
                              max: 3
                          }),
                          (0, i.jsxs)('div', {
                              className: S.stageListenerPill,
                              children: [
                                  (0, i.jsx)(c.HeadphonesIcon, {
                                      size: 'xs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      className: S.stageListenerCount,
                                      color: 'text-normal',
                                      variant: 'text-xs/medium',
                                      children: t
                                  })
                              ]
                          })
                      ]
                  })),
        M = E(
            c.ScreenArrowIcon,
            P.filter((e) => null != e && !j.includes(e.id))
        ),
        L = E(c.ActivitiesIcon, T);
    return (0, i.jsxs)(i.Fragment, {
        children: [w, A, M, L]
    });
}
function j() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: r()(S.row, S.rowGuildName),
                children: (0, i.jsx)('span', {
                    className: r()(S.guildNameText, S.guildNameTextLimitedSize),
                    children: b.intl.string(b.t.wMWycn)
                })
            }),
            (0, i.jsx)(y, {})
        ]
    });
}
function T(e) {
    let { 'aria-label': t = !1, onShow: n, children: l } = e,
        r = (0, h.Q3)('FavoritesTooltip');
    return (0, i.jsx)(c.Tooltip, {
        hideOnClick: !0,
        spacing: r ? 12 : 20,
        position: 'right',
        text: (0, i.jsx)(j, {}),
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
