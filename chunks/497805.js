n.d(t, {
    Z: () => b,
    z: () => h
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140),
    a = n(317770),
    s = n(594174),
    l = n(726525),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = null;
function h(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function m(e) {
    var { userId: t, section: o, subsection: a, guildId: u, channelId: _, friendToken: m, showGuildProfile: g = !0, appContext: E, customStatusPrompt: b } = e,
        y = f(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'showGuildProfile', 'appContext', 'customStatusPrompt']);
    let O = s.default.getUser(t);
    if (null == O) return;
    let v = s.default.getCurrentUser();
    null != v &&
        (p = await (0, i.ZDy)(
            async () => {
                let { default: e } = (0, l.q)({ location: 'UserProfileModalManager' }) ? await Promise.all([n.e('1268'), n.e('82412'), n.e('62880'), n.e('56549'), n.e('44784')]).then(n.bind(n, 866035)) : await Promise.all([n.e('1268'), n.e('82412'), n.e('62880'), n.e('56549'), n.e('65326')]).then(n.bind(n, 678780));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        d(
                            {
                                user: O,
                                currentUser: v,
                                guildId: u,
                                friendToken: m,
                                initialSection: o,
                                initialSubsection: a,
                                channelId: _,
                                showGuildProfile: g,
                                customStatusPrompt: b
                            },
                            t,
                            y
                        )
                    );
            },
            {
                modalKey: h(t, g ? u : void 0),
                contextKey: (0, i.VnL)(null != E ? E : c.IlC.APP)
            }
        ));
}
function g() {
    null != p && (0, i.Mr3)(p), (p = null);
}
class E extends a.Z {
    _initialize() {
        o.Z.subscribe('USER_PROFILE_MODAL_OPEN', m), o.Z.subscribe('USER_PROFILE_MODAL_CLOSE', g);
    }
    _terminate() {
        o.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', m), o.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', g);
    }
}
let b = new E();
