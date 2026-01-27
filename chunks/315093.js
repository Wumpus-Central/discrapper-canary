n.d(t, {
    A: () => h,
});
var r = n(681154),
    l = n(808380),
    a = n(429913),
    i = n(409626),
    s = n(692969),
    o = n(583846),
    c = n(424994),
    u = n(158611),
    d = n(360469),
    m = n(985018);
let f = {
        [l.Y.XBOX]: c.a4.XBOX,
        [l.Y.PLAYSTATION]: c.a4.PLAYSTATION,
    },
    p = {
        [u.Z.EMBED]: i.Ob.Embed,
    };

function h(e) {
    var t, n;
    let l,
        i,
        { entry: c, location: u, baseEntryData: h } = e,
        b = (0, a.h)(c.extra.application_id),
        g = null == b ? void 0 : b.getIconURL(d.iu.LARGE),
        x = c.extra.game_name;
    if (null != c.extra.platform) {
        let e = f[c.extra.platform];
        null != e &&
            (l = {
                type: e,
            });
    }
    i =
        c.content_type === r.ContentInventoryEntryType.PLAYED_GAME && (0, o.JM)(c) && !(0, o.I5)(c)
            ? m.t.vPg1JT
            : m.t.rPqqts;
    let y = p[u],
        v = {
            onClick: (0, s.A)({
                location: y,
                applicationId: c.extra.application_id,
                source: y,
                trackEntryPointImpression: !0,
                sourceUserId: c.author_id,
            }),
            ariaDescription: m.intl.formatToPlainString(m.t["9sZWVp"], {
                gameName: x,
            }),
        };
    return (
        (t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, h)),
        (n = n =
            {
                thumbnailUrl: g,
                title: x,
                titleClickable: v,
                thumbnailClickable: v,
                userDescription: i,
                providerIconProps: l,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t
    );
}
