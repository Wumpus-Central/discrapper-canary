n.d(t, { Z: () => _ }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(468363),
    o = n(158776),
    s = n(885110),
    l = n(369566),
    c = n(29899),
    u = n(151545),
    d = n(769140),
    f = n(864141),
    p = n(231338);
function _(e) {
    let { user: t, currentUser: n, guildId: _, className: m, onClose: h } = e,
        { live: g, stream: E } = (0, l.Z)(t.id),
        [b] = g,
        { voiceChannel: y } = (0, c.Z)({
            userId: t.id,
            guildId: _,
        }),
        O = t.id === n.id,
        v = (0, i.e7)([s.Z, o.Z], () => {
            let e = O ? s.Z.getStatus() : o.Z.getStatus(t.id, _);
            return e === p.Sk.OFFLINE || e === p.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: S } = (0, a.U)({ location: "UserProfileFeaturedActivity" });
    return v || null == E
        ? v || null == b
            ? S && !v && null != y
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      currentUser: n,
                      voiceChannel: y,
                      className: m,
                      onClose: h,
                  })
                : null
            : (0, r.jsx)(u.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  className: m,
                  onClose: h,
              })
        : (0, r.jsx)(d.Z, {
              user: t,
              currentUser: n,
              stream: E,
              className: m,
              onClose: h,
          });
}
