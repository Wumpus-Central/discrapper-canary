n.d(t, {
    Z: () => b,
    z: () => h
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    o = n(317770),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = null;
function h(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function m(e) {
    var { userId: t, section: a, subsection: o, guildId: u, channelId: _, friendToken: m, showGuildProfile: g = !0, appContext: E, customStatusPrompt: b } = e,
        y = f(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'showGuildProfile', 'appContext', 'customStatusPrompt']);
    let v = s.default.getUser(t);
    if (null == v) return;
    let O = s.default.getCurrentUser();
    null != O &&
        (p = await (0, i.ZDy)(
            async () => {
                let { default: e } = (0, l.q)({ location: 'UserProfileModalManager' }) ? await Promise.all([n.e('38485'), n.e('82412'), n.e('62880'), n.e('51710'), n.e('69826')]).then(n.bind(n, 866035)) : await Promise.all([n.e('38485'), n.e('82412'), n.e('62880'), n.e('51710'), n.e('31656')]).then(n.bind(n, 678780));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        d(
                            {
                                user: v,
                                currentUser: O,
                                guildId: u,
                                friendToken: m,
                                initialSection: a,
                                initialSubsection: o,
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
class E extends o.Z {
    _initialize() {
        a.Z.subscribe('USER_PROFILE_MODAL_OPEN', m), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', g);
    }
    _terminate() {
        a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', m), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', g);
    }
}
let b = new E();
