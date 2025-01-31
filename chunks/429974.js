n.d(t, {
    Z: () => I,
    z: () => g
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    s = n(317770),
    o = n(603113),
    l = n(812206),
    u = n(158776),
    c = n(699516),
    d = n(594174),
    f = n(626135),
    _ = n(621853),
    p = n(981631),
    h = n(616922);
let m = null;
function g(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t ? '' : t);
}
async function E(e) {
    var t, a, s, E;
    let { userId: v, section: y, subsection: I, guildId: b, channelId: T, friendToken: S, analyticsLocation: A, showGuildProfile: N = !0, ...C } = e,
        R = d.default.getUser(v);
    if (null == R) return;
    let O = _.Z.getUserProfile(v),
        D = u.Z.getPrimaryActivity(v),
        x = u.Z.getStatus(v),
        L = u.Z.isMobileOnline(v),
        { party: P, assets: w, application_id: M } = null != D ? D : {},
        k = null != M ? l.Z.getApplication(M) : null,
        U = L ? p.j28.ONLINE_MOBILE : p.j28.ONLINE_DESKTOP,
        G = x === p.Skl.ONLINE ? U : x;
    (m = await (0, r.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('82412'), n.e('3748')]).then(n.bind(n, 533835));
            return (t) =>
                (0, i.jsx)(e, {
                    user: R,
                    guildId: b,
                    friendToken: S,
                    initialSection: y,
                    initialSubsection: I,
                    channelId: T,
                    showGuildProfile: N,
                    ...t,
                    ...C
                });
        },
        { modalKey: g(v, N ? b : void 0) }
    )),
        f.default.track(p.rMx.OPEN_MODAL, {
            type: 'Profile Modal',
            guild_id: b,
            channel_id: T,
            other_user_id: v,
            application_id: null !== (a = null == D ? void 0 : D.application_id) && void 0 !== a ? a : null,
            application_name: null == D ? void 0 : D.name,
            sku_id: null !== (s = null == k ? void 0 : k.primarySkuId) && void 0 !== s ? s : null,
            is_friend: c.Z.isFriend(v),
            has_images: !!(null !== (E = null == w ? void 0 : w.large_image) && void 0 !== E ? E : null == w ? void 0 : w.small_image),
            party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
            party_id: null == P ? void 0 : P.id,
            party_platform: (0, h.Ps)(null == P ? void 0 : P.id) ? p.ABu.SPOTIFY : null,
            game_platform: (0, o.Z)(D),
            profile_user_status: G,
            profile_has_nitro_customization: (null == O ? void 0 : O.banner) != null,
            profile_has_profile_effect: (null == O ? void 0 : O.profileEffectId) != null,
            ...(null == A ? null : (0, f.expandLocation)(A))
        });
}
function v() {
    null != m && (0, r.Mr3)(m), (m = null);
}
class y extends s.Z {
    _initialize() {
        a.Z.subscribe('USER_PROFILE_MODAL_OPEN', E), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', v);
    }
    _terminate() {
        a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', E), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', v);
    }
}
let I = new y();
