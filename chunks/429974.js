n.d(t, {
    Z: () => T,
    z: () => y
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140),
    a = n(317770),
    s = n(603113),
    l = n(812206),
    c = n(158776),
    u = n(699516),
    d = n(594174),
    f = n(626135),
    _ = n(621853),
    p = n(981631),
    h = n(616922);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = null;
function y(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function O(e) {
    var t,
        o,
        a,
        m,
        { userId: v, section: O, subsection: I, guildId: S, channelId: T, friendToken: N, analyticsLocation: A, showGuildProfile: C = !0, appContext: R, customStatusPrompt: P } = e,
        w = E(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'analyticsLocation', 'showGuildProfile', 'appContext', 'customStatusPrompt']);
    let D = d.default.getUser(v);
    if (null == D) return;
    let L = _.Z.getUserProfile(v),
        x = c.Z.getPrimaryActivity(v),
        M = c.Z.getStatus(v),
        k = c.Z.isMobileOnline(v),
        { party: j, assets: U, application_id: G } = null != x ? x : {},
        B = null != G ? l.Z.getApplication(G) : null,
        V = k ? p.j28.ONLINE_MOBILE : p.j28.ONLINE_DESKTOP,
        F = M === p.Skl.ONLINE ? V : M;
    (b = await (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('94989'), n.e('82412'), n.e('62880'), n.e('81818')]).then(n.bind(n, 533835));
            return (t) =>
                (0, r.jsx)(
                    e,
                    g(
                        {
                            user: D,
                            guildId: S,
                            friendToken: N,
                            initialSection: O,
                            initialSubsection: I,
                            channelId: T,
                            showGuildProfile: C,
                            customStatusPrompt: P
                        },
                        t,
                        w
                    )
                );
        },
        {
            modalKey: y(v, C ? S : void 0),
            contextKey: (0, i.VnL)(null != R ? R : p.IlC.APP)
        }
    )),
        f.default.track(
            p.rMx.OPEN_MODAL,
            g(
                {
                    type: 'Profile Modal',
                    guild_id: S,
                    channel_id: T,
                    other_user_id: v,
                    application_id: null !== (o = null == x ? void 0 : x.application_id) && void 0 !== o ? o : null,
                    application_name: null == x ? void 0 : x.name,
                    sku_id: null !== (a = null == B ? void 0 : B.primarySkuId) && void 0 !== a ? a : null,
                    is_friend: u.Z.isFriend(v),
                    has_images: !!(null !== (m = null == U ? void 0 : U.large_image) && void 0 !== m ? m : null == U ? void 0 : U.small_image),
                    party_max: null == j ? void 0 : null === (t = j.size) || void 0 === t ? void 0 : t[1],
                    party_id: null == j ? void 0 : j.id,
                    party_platform: (0, h.Ps)(null == j ? void 0 : j.id) ? p.ABu.SPOTIFY : null,
                    game_platform: (0, s.Z)(x),
                    profile_user_status: F,
                    profile_has_nitro_customization: (null == L ? void 0 : L.banner) != null,
                    profile_has_profile_effect: (null == L ? void 0 : L.profileEffectId) != null
                },
                null == A ? null : (0, f.expandLocation)(A)
            )
        );
}
function I() {
    null != b && (0, i.Mr3)(b), (b = null);
}
class S extends a.Z {
    _initialize() {
        o.Z.subscribe('USER_PROFILE_MODAL_OPEN', O), o.Z.subscribe('USER_PROFILE_MODAL_CLOSE', I);
    }
    _terminate() {
        o.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', O), o.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', I);
    }
}
let T = new S();
