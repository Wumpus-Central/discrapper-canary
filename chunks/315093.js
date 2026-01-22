n.d(t, { A: () => b });
var r = n(681154),
    i = n(808380),
    a = n(429913),
    s = n(409626),
    o = n(692969),
    l = n(583846),
    c = n(424994),
    u = n(158611),
    d = n(360469),
    f = n(985018);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = {
        [i.Y.XBOX]: c.a4.XBOX,
        [i.Y.PLAYSTATION]: c.a4.PLAYSTATION,
    },
    E = { [u.Z.EMBED]: s.Ob.Embed };
function b(e) {
    let t,
        n,
        { entry: i, location: s, baseEntryData: c } = e,
        u = (0, a.h)(i.extra.application_id),
        p = null == u ? void 0 : u.getIconURL(d.iu.LARGE),
        h = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = g[i.extra.platform];
        null != e && (t = { type: e });
    }
    n = i.content_type === r.I.PLAYED_GAME && (0, l.JM)(i) && !(0, l.I5)(i) ? f.t.vPg1JT : f.t.rPqqts;
    let b = E[s],
        y = {
            onClick: (0, o.A)({
                location: b,
                applicationId: i.extra.application_id,
                source: b,
                trackEntryPointImpression: !0,
                sourceUserId: i.author_id,
            }),
            ariaDescription: f.intl.formatToPlainString(f.t["9sZWVp"], { gameName: h }),
        };
    return m(_({}, c), {
        thumbnailUrl: p,
        title: h,
        titleClickable: y,
        thumbnailClickable: y,
        userDescription: n,
        providerIconProps: t,
    });
}
