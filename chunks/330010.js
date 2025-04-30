n.d(t, {
    R: () => _,
    i: () => f
});
var r = n(544891),
    i = n(570140),
    o = n(973616),
    a = n(598077),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function f(e) {
    let t = (
        await r.tn.get({
            url: s.ANM.GUILD_INTEGRATIONS(e),
            query: {
                include_applications: !0,
                include_role_connections_metadata: !0
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map((e) =>
        d(c({}, e), {
            application: 'application' in e && null != e.application ? o.ZN.createFromServer(e.application) : void 0,
            user: 'user' in e && null != e.user ? new a.Z(e.user) : void 0
        })
    );
    return (
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_LOADED_INTEGRATIONS',
            guildId: e,
            integrations: t
        }),
        t
    );
}
function _(e) {
    return r.tn
        .get({
            url: s.ANM.GUILD_WIDGET(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then((e) => {
            i.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_WIDGET',
                enabled: e.body.enabled,
                channelId: e.body.channel_id
            });
        });
}
