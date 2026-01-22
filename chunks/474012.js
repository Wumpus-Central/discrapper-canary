n.d(t, {
    K: () => o,
}),
    n(321073);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    s = n(203632);
let o = (e) =>
    null == e
        ? []
        : e.reduce(
              (e, t) => (
                  t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)),
                  t.type === r.R.PROFILE_EFFECT && e.push(s.A.fromServer(t)),
                  t.type === r.R.NAMEPLATE && e.push(a.A.fromServer(t)),
                  e
              ),
              [],
          );
