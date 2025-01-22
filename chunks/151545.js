r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(841784),
    l = r(503438),
    u = r(812206),
    c = r(835473),
    d = r(574176),
    f = r(592125),
    p = r(430824),
    h = r(496675),
    _ = r(979651),
    m = r(626135),
    g = r(9161),
    E = r(456644),
    v = r(409057),
    y = r(443375),
    b = r(128277),
    I = r(263059),
    T = r(981631);
function S(e) {
    let { user: n, currentUser: r, activity: S, className: A, onClose: C, profileGuildId: N } = e,
        R = (0, o.e7)([_.Z, f.Z], () => {
            var e;
            return f.Z.getChannel(null === (e = _.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }),
        { enableHangStatus: O } = d.n.useExperiment(
            {
                guildId: null == R ? void 0 : R.guild_id,
                location: 'UserProfileActivityCardWrapper'
            },
            { autoTrackExposure: !1 }
        ),
        D = O && h.Z.can(T.Plq.CONNECT, R),
        L = (null == S ? void 0 : S.type) === T.IIU.HANG_STATUS && D ? R : null,
        { recentActivityTabEnabled: x } = (0, g.O)({ location: 'UserProfileActivityCardWrapper' }),
        { recentActivityEnabled: w } = (0, E.i)({ location: 'UserProfileActivityCardWrapper' }),
        P = n.id === r.id,
        M = (x || w) && !P && !n.bot,
        k = (0, o.e7)([p.Z, _.Z, f.Z], () => {
            if ((0, s.Z)(S)) {
                var e, r;
                let i = null === (e = _.Z.getVoiceStateForSession(n.id, null == S ? void 0 : S.session_id)) || void 0 === e ? void 0 : e.channelId;
                return p.Z.getGuild(null === (r = f.Z.getChannel(i)) || void 0 === r ? void 0 : r.getGuildId());
            }
            return null != L ? p.Z.getGuild(L.getGuildId()) : null;
        });
    (0, c.q)(null == S ? void 0 : S.application_id);
    let U = (0, o.e7)([u.Z], () => ((null == S ? void 0 : S.application_id) != null ? u.Z.getApplication(S.application_id) : (null == S ? void 0 : S.name) != null ? u.Z.getApplicationByName(S.name) : null));
    if (
        (a.useEffect(() => {
            (null == S ? void 0 : S.type) === T.IIU.HANG_STATUS &&
                D &&
                m.default.track(T.rMx.VIEW_HANG_STATUS, {
                    source: 'UserProfilePopout',
                    guild_id: null == L ? void 0 : L.guild_id,
                    channel_id: null == L ? void 0 : L.id
                });
        }, [null == S ? void 0 : S.type, D, L]),
        (null == S ? void 0 : S.type) === T.IIU.HANG_STATUS && !D)
    )
        return null;
    if ((0, l.Z)(S))
        return M
            ? (0, i.jsx)(I.Z, {
                  user: n,
                  currentUser: r,
                  activity: S,
                  guild: k,
                  profileGuildId: N,
                  channel: R,
                  className: A,
                  onClose: C
              })
            : (0, i.jsx)(b.Z, {
                  user: n,
                  currentUser: r,
                  activity: S,
                  guild: k,
                  channel: R,
                  className: A,
                  onClose: C
              });
    return M
        ? (0, i.jsx)(y.Z, {
              user: n,
              currentUser: r,
              activity: S,
              application: U,
              guild: k,
              profileGuildId: N,
              channel: R,
              className: A,
              onClose: C
          })
        : (0, i.jsx)(v.Z, {
              user: n,
              currentUser: r,
              activity: S,
              application: U,
              guild: k,
              channel: R,
              className: A,
              onClose: C
          });
}
