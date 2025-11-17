n.d(t, { Z: () => p }), n(388685);
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
    _ = n(231338);
function p(e) {
    let { user: t, currentUser: n, guildId: p, className: h, onClose: m } = e,
        { live: g, stream: E } = (0, l.Z)(t.id),
        [b] = g,
        { voiceChannel: y } = (0, c.Z)({
            userId: t.id,
            guildId: p,
        }),
        O = t.id === n.id,
        v = (0, i.e7)([s.Z, o.Z], () => {
            let e = O ? s.Z.getStatus() : o.Z.getStatus(t.id, p);
            return e === _.Sk.OFFLINE || e === _.Sk.INVISIBLE;
        }),
        { voiceActivityStatusEnabled: I } = (0, a.U)({ location: "UserProfileFeaturedActivity" });
    return v || null == E
        ? v || null == b
            ? I && !v && null != y
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      currentUser: n,
                      voiceChannel: y,
                      className: h,
                      onClose: m,
                  })
                : null
            : (0, r.jsx)(u.Z, {
                  user: t,
                  currentUser: n,
                  activity: b,
                  className: h,
                  onClose: m,
              })
        : (0, r.jsx)(d.Z, {
              user: t,
              currentUser: n,
              stream: E,
              className: h,
              onClose: m,
          });
}
