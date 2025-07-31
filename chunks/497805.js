n.d(t, {
    Z: () => y,
    z: () => m
});
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(570140),
    o = n(317770),
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let h = null;
function m(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function g(e) {
    var t,
        { userId: a, section: o, subsection: d, guildId: p, channelId: g, showGuildProfile: E = !0, appContext: b, customStatusPrompt: y, disableActionsForPreview: O = !1 } = e,
        v = f(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'showGuildProfile', 'appContext', 'customStatusPrompt', 'disableActionsForPreview']);
    let I = l.default.getUser(a);
    if (null == I) return;
    let T = l.default.getCurrentUser();
    null != T &&
        (h = await (0, i.ZDy)(
            async () => {
                let { default: e } = (0, c.q)({ location: 'UserProfileModalManager' }) ? await Promise.all([n.e('1268'), n.e('82412'), n.e('62880'), n.e('37048'), n.e('43473')]).then(n.bind(n, 866035)) : await Promise.all([n.e('1268'), n.e('82412'), n.e('62880'), n.e('37048'), n.e('11678')]).then(n.bind(n, 678780));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        _(
                            {
                                user: I,
                                currentUser: T,
                                guildId: p,
                                initialSection: o,
                                initialSubsection: d,
                                channelId: g,
                                showGuildProfile: E,
                                customStatusPrompt: y,
                                disableActionsForPreview: O
                            },
                            t,
                            v
                        )
                    );
            },
            {
                modalKey: m(a, E ? p : void 0),
                contextKey: (0, i.VnL)(null != (t = null != b ? b : (0, s.GB)()) ? t : u.IlC.APP)
            }
        ));
}
function E() {
    (null != h && (0, i.Mr3)(h), (h = null));
}
class b extends o.Z {
    _initialize() {
        (a.Z.subscribe('USER_PROFILE_MODAL_OPEN', g), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', E));
    }
    _terminate() {
        (a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', g), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', E));
    }
}
let y = new b();
