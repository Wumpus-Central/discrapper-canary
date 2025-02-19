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
    p = n(621853),
    _ = n(981631),
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
        { userId: v, section: O, subsection: S, guildId: I, channelId: T, friendToken: N, analyticsLocation: A, showGuildProfile: C = !0, appContext: R } = e,
        P = E(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'analyticsLocation', 'showGuildProfile', 'appContext']);
    let w = d.default.getUser(v);
    if (null == w) return;
    let D = p.Z.getUserProfile(v),
        x = c.Z.getPrimaryActivity(v),
        L = c.Z.getStatus(v),
        M = c.Z.isMobileOnline(v),
        { party: k, assets: j, application_id: U } = null != x ? x : {},
        G = null != U ? l.Z.getApplication(U) : null,
        B = M ? _.j28.ONLINE_MOBILE : _.j28.ONLINE_DESKTOP,
        Z = L === _.Skl.ONLINE ? B : L;
    (b = await (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('94989'), n.e('82412'), n.e('73049')]).then(n.bind(n, 533835));
            return (t) =>
                (0, r.jsx)(
                    e,
                    g(
                        {
                            user: w,
                            guildId: I,
                            friendToken: N,
                            initialSection: O,
                            initialSubsection: S,
                            channelId: T,
                            showGuildProfile: C
                        },
                        t,
                        P
                    )
                );
        },
        {
            modalKey: y(v, C ? I : void 0),
            contextKey: (0, i.VnL)(null != R ? R : _.IlC.APP)
        }
    )),
        f.default.track(
            _.rMx.OPEN_MODAL,
            g(
                {
                    type: 'Profile Modal',
                    guild_id: I,
                    channel_id: T,
                    other_user_id: v,
                    application_id: null !== (o = null == x ? void 0 : x.application_id) && void 0 !== o ? o : null,
                    application_name: null == x ? void 0 : x.name,
                    sku_id: null !== (a = null == G ? void 0 : G.primarySkuId) && void 0 !== a ? a : null,
                    is_friend: u.Z.isFriend(v),
                    has_images: !!(null !== (m = null == j ? void 0 : j.large_image) && void 0 !== m ? m : null == j ? void 0 : j.small_image),
                    party_max: null == k ? void 0 : null === (t = k.size) || void 0 === t ? void 0 : t[1],
                    party_id: null == k ? void 0 : k.id,
                    party_platform: (0, h.Ps)(null == k ? void 0 : k.id) ? _.ABu.SPOTIFY : null,
                    game_platform: (0, s.Z)(x),
                    profile_user_status: Z,
                    profile_has_nitro_customization: (null == D ? void 0 : D.banner) != null,
                    profile_has_profile_effect: (null == D ? void 0 : D.profileEffectId) != null
                },
                null == A ? null : (0, f.expandLocation)(A)
            )
        );
}
function S() {
    null != b && (0, i.Mr3)(b), (b = null);
}
class I extends a.Z {
    _initialize() {
        o.Z.subscribe('USER_PROFILE_MODAL_OPEN', O), o.Z.subscribe('USER_PROFILE_MODAL_CLOSE', S);
    }
    _terminate() {
        o.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', O), o.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', S);
    }
}
let T = new I();
