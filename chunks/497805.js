n.d(t, {
    Z: () => y,
    z: () => m
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(570140),
    a = n(317770),
    s = n(40851),
    l = n(594174),
    c = n(726525),
    u = n(981631);
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
let h = null;
function m(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function g(e) {
    var t,
        { userId: o, section: a, subsection: d, guildId: p, channelId: g, friendToken: E, showGuildProfile: b = !0, appContext: y, customStatusPrompt: O } = e,
        v = _(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'showGuildProfile', 'appContext', 'customStatusPrompt']);
    let I = l.default.getUser(o);
    if (null == I) return;
    let S = l.default.getCurrentUser();
    null != S &&
        (h = await (0, i.ZDy)(
            async () => {
                let { default: e } = (0, c.q)({ location: 'UserProfileModalManager' }) ? await Promise.all([n.e('1268'), n.e('82412'), n.e('62880'), n.e('84471'), n.e('44784')]).then(n.bind(n, 866035)) : await Promise.all([n.e('1268'), n.e('82412'), n.e('62880'), n.e('84471'), n.e('65326')]).then(n.bind(n, 678780));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        f(
                            {
                                user: I,
                                currentUser: S,
                                guildId: p,
                                friendToken: E,
                                initialSection: a,
                                initialSubsection: d,
                                channelId: g,
                                showGuildProfile: b,
                                customStatusPrompt: O
                            },
                            t,
                            v
                        )
                    );
            },
            {
                modalKey: m(o, b ? p : void 0),
                contextKey: (0, i.VnL)(null != (t = null != y ? y : (0, s.GB)()) ? t : u.IlC.APP)
            }
        ));
}
function E() {
    null != h && (0, i.Mr3)(h), (h = null);
}
class b extends a.Z {
    _initialize() {
        o.Z.subscribe('USER_PROFILE_MODAL_OPEN', g), o.Z.subscribe('USER_PROFILE_MODAL_CLOSE', E);
    }
    _terminate() {
        o.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', g), o.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', E);
    }
}
let y = new b();
