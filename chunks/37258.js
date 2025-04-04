n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(40851),
    a = n(906732),
    s = n(785717),
    l = n(171368),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var { label: t, onAction: n, icon: d } = e,
        p = _(e, ['label', 'onAction', 'icon']);
    let { analyticsLocations: h } = (0, a.ZP)(),
        { context: m } = (0, s.KZ)(),
        g = (0, o.Aq)(),
        E = (0, o.bp)();
    return (0, r.jsx)(i.sNh, {
        id: 'user-profile',
        label: null != t ? t : u.NW.string(u.t.LYju5O),
        action: () => {
            null == n || n(),
                (0, l.openUserProfileModal)(
                    f(
                        {
                            sourceAnalyticsLocations: h,
                            appContext: E
                        },
                        m,
                        p
                    )
                ),
                g.dispatch(c.CkL.POPOUT_CLOSE);
        },
        icon: d
    });
}
