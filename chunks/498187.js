n.d(t, { Z: () => b });
var r = n(876215),
    i = n(758713),
    a = n(835473),
    o = n(810568),
    s = n(168524),
    l = n(561308),
    c = n(206583),
    u = n(96513),
    d = n(701488),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
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
        [i.z.XBOX]: c.kG.XBOX,
        [i.z.PLAYSTATION]: c.kG.PLAYSTATION,
    },
    E = { [u._.EMBED]: o.m1.Embed };
function b(e) {
    let t,
        n,
        { entry: i, location: o, baseEntryData: c } = e,
        u = (0, a.q)(i.extra.application_id),
        _ = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
        h = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = g[i.extra.platform];
        null != e && (t = { type: e });
    }
    n = i.content_type === r.s.PLAYED_GAME && (0, l.kr)(i) && !(0, l.n2)(i) ? f.t.vPg1JS : f.t.rPqqtr;
    let b = E[o],
        y = {
            onClick: (0, s.Z)({
                location: b,
                applicationId: i.extra.application_id,
                source: b,
                trackEntryPointImpression: !0,
                sourceUserId: i.author_id,
            }),
            ariaDescription: f.intl.formatToPlainString(f.t["9sZWVl"], { gameName: h }),
        };
    return m(p({}, c), {
        thumbnailUrl: _,
        title: h,
        titleClickable: y,
        thumbnailClickable: y,
        userDescription: n,
        providerIconProps: t,
    });
}
