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
    let { userId: v, section: y, subsection: I, guildId: T, channelId: b, friendToken: S, analyticsLocation: A, showGuildProfile: N = !0, appContext: C, ...R } = e,
        O = d.default.getUser(v);
    if (null == O) return;
    let D = _.Z.getUserProfile(v),
        L = u.Z.getPrimaryActivity(v),
        x = u.Z.getStatus(v),
        P = u.Z.isMobileOnline(v),
        { party: w, assets: M, application_id: k } = null != L ? L : {},
        U = null != k ? l.Z.getApplication(k) : null,
        G = P ? p.j28.ONLINE_MOBILE : p.j28.ONLINE_DESKTOP,
        B = x === p.Skl.ONLINE ? G : x;
    (m = await (0, r.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('94989'), n.e('82412'), n.e('71853')]).then(n.bind(n, 533835));
            return (t) =>
                (0, i.jsx)(e, {
                    user: O,
                    guildId: T,
                    friendToken: S,
                    initialSection: y,
                    initialSubsection: I,
                    channelId: b,
                    showGuildProfile: N,
                    ...t,
                    ...R
                });
        },
        {
            modalKey: g(v, N ? T : void 0),
            contextKey: (0, r.VnL)(null != C ? C : p.IlC.APP)
        }
    )),
        f.default.track(p.rMx.OPEN_MODAL, {
            type: 'Profile Modal',
            guild_id: T,
            channel_id: b,
            other_user_id: v,
            application_id: null !== (a = null == L ? void 0 : L.application_id) && void 0 !== a ? a : null,
            application_name: null == L ? void 0 : L.name,
            sku_id: null !== (s = null == U ? void 0 : U.primarySkuId) && void 0 !== s ? s : null,
            is_friend: c.Z.isFriend(v),
            has_images: !!(null !== (E = null == M ? void 0 : M.large_image) && void 0 !== E ? E : null == M ? void 0 : M.small_image),
            party_max: null == w ? void 0 : null === (t = w.size) || void 0 === t ? void 0 : t[1],
            party_id: null == w ? void 0 : w.id,
            party_platform: (0, h.Ps)(null == w ? void 0 : w.id) ? p.ABu.SPOTIFY : null,
            game_platform: (0, o.Z)(L),
            profile_user_status: B,
            profile_has_nitro_customization: (null == D ? void 0 : D.banner) != null,
            profile_has_profile_effect: (null == D ? void 0 : D.profileEffectId) != null,
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
