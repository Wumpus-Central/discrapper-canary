n.d(t, {
    Z: () => T,
    z: () => v
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
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = null;
function v(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function O(e) {
    var t,
        o,
        a,
        m,
        { userId: b, section: O, subsection: I, guildId: S, channelId: T, friendToken: N, analyticsLocation: A, showGuildProfile: C = !0, appContext: R, customStatusPrompt: P } = e,
        w = E(e, ['userId', 'section', 'subsection', 'guildId', 'channelId', 'friendToken', 'analyticsLocation', 'showGuildProfile', 'appContext', 'customStatusPrompt']);
    let D = d.default.getUser(b);
    if (null == D) return;
    let L = d.default.getCurrentUser();
    if (null == L) return;
    let x = _.Z.getUserProfile(b),
        M = c.Z.getPrimaryActivity(b),
        k = c.Z.getStatus(b),
        j = c.Z.isMobileOnline(b),
        { party: U, assets: G, application_id: B } = null != M ? M : {},
        F = null != B ? l.Z.getApplication(B) : null,
        V = j ? p.j28.ONLINE_MOBILE : p.j28.ONLINE_DESKTOP,
        Z = k === p.Skl.ONLINE ? V : k;
    (y = await (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('94989'), n.e('82412'), n.e('62880'), n.e('1381')]).then(n.bind(n, 678780));
            return (t) =>
                (0, r.jsx)(
                    e,
                    g(
                        {
                            user: D,
                            currentUser: L,
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
            modalKey: v(b, C ? S : void 0),
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
                    other_user_id: b,
                    application_id: null != (o = null == M ? void 0 : M.application_id) ? o : null,
                    application_name: null == M ? void 0 : M.name,
                    sku_id: null != (a = null == F ? void 0 : F.primarySkuId) ? a : null,
                    is_friend: u.Z.isFriend(b),
                    has_images: !!(null != (m = null == G ? void 0 : G.large_image) ? m : null == G ? void 0 : G.small_image),
                    party_max: null == U || null == (t = U.size) ? void 0 : t[1],
                    party_id: null == U ? void 0 : U.id,
                    party_platform: (0, h.Ps)(null == U ? void 0 : U.id) ? p.ABu.SPOTIFY : null,
                    game_platform: (0, s.Z)(M),
                    profile_user_status: Z,
                    profile_has_nitro_customization: (null == x ? void 0 : x.banner) != null,
                    profile_has_profile_effect: (null == x ? void 0 : x.profileEffectId) != null
                },
                null == A ? null : (0, f.expandLocation)(A)
            )
        );
}
function I() {
    null != y && (0, i.Mr3)(y), (y = null);
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
