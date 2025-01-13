r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(841784),
    l = r(503438),
    u = r(812206),
    c = r(835473),
    d = r(574176),
    f = r(592125),
    _ = r(430824),
    h = r(496675),
    p = r(979651),
    m = r(626135),
    g = r(9161),
    E = r(456644),
    v = r(409057),
    I = r(443375),
    T = r(128277),
    b = r(263059),
    y = r(981631);
function S(e) {
    let { user: n, currentUser: r, activity: S, className: A, onClose: N, profileGuildId: C } = e,
        R = (0, s.e7)([p.Z, f.Z], () => {
            var e;
            return f.Z.getChannel(null === (e = p.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: O } = d.n.useExperiment(
            {
                guildId: null == R ? void 0 : R.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        D = O && h.Z.can(y.Plq.CONNECT, R),
        L = (null == S ? void 0 : S.type) === y.IIU.HANG_STATUS && D ? R : null,
        { recentActivityTabEnabled: x } = (0, g.O)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityEnabled: w } = (0, E.i)({ location: 'UserProfileActivityCardWrapper' }),
        P = n.id === r.id,
        M = (x || w) && !P && !n.bot,
        k = (0, s.e7)([_.Z, p.Z, f.Z], () => {
            if ((0, o.Z)(S)) {
                var e, r;
                let i = null === (e = p.Z.getVoiceStateForSession(n.id, null == S ? void 0 : S.session_id)) || void 0 === e ? void 0 : e.channelId;
                return _.Z.getGuild(null === (r = f.Z.getChannel(i)) || void 0 === r ? void 0 : r.getGuildId());
            }
            return null != L ? _.Z.getGuild(L.getGuildId()) : null;
        });
    (0, c.q)(null == S ? void 0 : S.application_id);
    let U = (0, s.e7)([u.Z], () => ((null == S ? void 0 : S.application_id) != null ? u.Z.getApplication(S.application_id) : (null == S ? void 0 : S.name) != null ? u.Z.getApplicationByName(S.name) : null));
    if (
        (a.useEffect(() => {
            (null == S ? void 0 : S.type) === y.IIU.HANG_STATUS &&
                D &&
                m.default.track(y.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == L ? void 0 : L.guild_id,
                    channel_id: null == L ? void 0 : L.id
                });
        }, [null == S ? void 0 : S.type, D, L]),
        (null == S ? void 0 : S.type) === y.IIU.HANG_STATUS && !D)
    )
        return null;
    if ((0, l.Z)(S))
        return M
            ? (0, i.jsx)(b.Z, {
                  user: n,
                  currentUser: r,
                  activity: S,
                  guild: k,
                  profileGuildId: C,
                  channel: R,
                  className: A,
                  onClose: N
              })
            : (0, i.jsx)(T.Z, {
                  user: n,
                  currentUser: r,
                  activity: S,
                  guild: k,
                  channel: R,
                  className: A,
                  onClose: N
              });
    return M
        ? (0, i.jsx)(I.Z, {
              user: n,
              currentUser: r,
              activity: S,
              application: U,
              guild: k,
              profileGuildId: C,
              channel: R,
              className: A,
              onClose: N
          })
        : (0, i.jsx)(v.Z, {
              user: n,
              currentUser: r,
              activity: S,
              application: U,
              guild: k,
              channel: R,
              className: A,
              onClose: N
          });
}
