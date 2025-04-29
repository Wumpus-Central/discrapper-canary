n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(928518),
    a = n(776862),
    s = n(626135),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e, t) {
    let c = null != t ? t : ''.concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
    null != e.targetBoostedGuildTier && (c += ' - Tier '.concat(e.targetBoostedGuildTier));
    let f = () => {
        s.default.track(l.rMx.MODAL_DISMISSED, {
            type: c,
            location: e.analyticsSourceLocation
        });
    };
    s.default.track(l.rMx.OPEN_MODAL, {
        type: c,
        location: e.analyticsSourceLocation
    });
    let { openInPopoutEnabled: _ } = e,
        p = d(e, ['openInPopoutEnabled']),
        h = o.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != _ && _;
    h && (0, a.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
    let m = h ? i.u1M : i.z1l;
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e('89675').then(n.bind(n, 146747));
            return (t) => (0, r.jsx)(e, u({}, p, t));
        },
        {
            onCloseCallback: f,
            contextKey: m
        }
    );
}
