n.d(t, { i: () => s }), n(539854);
var r = n(979554),
    i = n(922347),
    a = n(135483),
    o = n(212161);
let s = (e) =>
    null == e
        ? []
        : e.reduce(
              (e, t) => (
                  t.type === r.Z.AVATAR_DECORATION && e.push(i.Z.fromServer(t)),
                  t.type === r.Z.PROFILE_EFFECT && e.push(o.Z.fromServer(t)),
                  t.type === r.Z.NAMEPLATE && e.push(a.Z.fromServer(t)),
                  e
              ),
              [],
          );
