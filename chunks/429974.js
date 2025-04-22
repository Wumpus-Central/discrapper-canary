n.d(t, {
    Z: () => E,
    z: () => p
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(594174),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = null;
function p(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function h(e) {
    var { userId: t, section: a, subsection: o, guildId: c, channelId: f, friendToken: h, showGuildProfile: m = !0, appContext: g, customStatusPrompt: E } = e,
        b = d(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'showGuildProfile', 'appContext', 'customStatusPrompt']);
    let y = s.default.getUser(t);
    if (null == y) return;
    let v = s.default.getCurrentUser();
    null != v &&
        (_ = await (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('94989'), n.e('82412'), n.e('62880'), n.e('54636')]).then(n.bind(n, 678780));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        u(
                            {
                                user: y,
                                currentUser: v,
                                guildId: c,
                                friendToken: h,
                                initialSection: a,
                                initialSubsection: o,
                                channelId: f,
                                showGuildProfile: m,
                                customStatusPrompt: E
                            },
                            t,
                            b
                        )
                    );
            },
            {
                modalKey: p(t, m ? c : void 0),
                contextKey: (0, i.VnL)(null != g ? g : l.IlC.APP)
            }
        ));
}
function m() {
    null != _ && (0, i.Mr3)(_), (_ = null);
}
class g extends o.Z {
    _initialize() {
        a.Z.subscribe('USER_PROFILE_MODAL_OPEN', h), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', m);
    }
    _terminate() {
        a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', h), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', m);
    }
}
let E = new g();
