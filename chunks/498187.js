r.d(t, { Z: () => O });
var n = r(876215),
    l = r(758713),
    i = r(835473),
    o = r(810568),
    a = r(168524),
    c = r(561308),
    s = r(206583),
    u = r(96513),
    p = r(701488),
    d = r(388032);
let f = {
        [l.z.XBOX]: s.kG.XBOX,
        [l.z.PLAYSTATION]: s.kG.PLAYSTATION
    },
    b = { [u._.EMBED]: o.m1.Embed };
function O(e) {
    var t, r;
    let l,
        o,
        { entry: s, location: u, baseEntryData: O } = e,
        y = (0, i.q)(s.extra.application_id),
        m = null == y ? void 0 : y.getIconURL(p.Si.LARGE),
        j = s.extra.game_name;
    if (null != s.extra.platform) {
        let e = f[s.extra.platform];
        null != e && (l = { type: e });
    }
    o = s.content_type === n.s.PLAYED_GAME && (0, c.kr)(s) && !(0, c.n2)(s) ? d.t.vPg1JS : d.t.rPqqtr;
    let g = b[u],
        h = {
            onClick: (0, a.Z)({
                location: g,
                applicationId: s.extra.application_id,
                source: g,
                trackEntryPointImpression: !0,
                sourceUserId: s.author_id
            }),
            ariaDescription: d.NW.formatToPlainString(d.t['9sZWVl'], { gameName: j })
        };
    return (
        (t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, O)),
        (r = r =
            {
                thumbnailUrl: m,
                title: j,
                titleClickable: h,
                thumbnailClickable: h,
                userDescription: o,
                providerIconProps: l
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t
    );
}
