r.d(n, {
    z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(570140),
    s = r(317770),
    l = r(603113),
    u = r(812206),
    c = r(158776),
    d = r(699516),
    f = r(594174),
    p = r(626135),
    h = r(621853),
    _ = r(981631),
    m = r(616922);
let g = null;
function E(e, n) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == n ? '' : n);
}
async function v(e) {
    var n, o, s, v;
    let { userId: y, section: b, subsection: I, guildId: T, channelId: S, friendToken: A, analyticsLocation: C, showGuildProfile: N = !0, ...R } = e,
        O = f.default.getUser(y);
    if (null == O) return;
    let D = h.Z.getUserProfile(y),
        x = c.Z.getPrimaryActivity(y),
        L = c.Z.getStatus(y),
        w = c.Z.isMobileOnline(y),
        { party: P, assets: M, application_id: k } = null != x ? x : {},
        U = null != k ? u.Z.getApplication(k) : null,
        B = w ? _.j28.ONLINE_MOBILE : _.j28.ONLINE_DESKTOP,
        G = L === _.Skl.ONLINE ? B : L;
    (g = await (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('56630'), r.e('82412'), r.e('3748')]).then(r.bind(r, 533835));
            return (n) =>
                (0, i.jsx)(e, {
                    user: O,
                    guildId: T,
                    friendToken: A,
                    initialSection: b,
                    initialSubsection: I,
                    channelId: S,
                    showGuildProfile: N,
                    ...n,
                    ...R
                });
        },
        { modalKey: E(y, N ? T : void 0) }
    )),
        p.default.track(_.rMx.OPEN_MODAL, {
            type: 'Profile Modal',
            guild_id: T,
            channel_id: S,
            other_user_id: y,
            application_id: null !== (o = null == x ? void 0 : x.application_id) && void 0 !== o ? o : null,
            application_name: null == x ? void 0 : x.name,
            sku_id: null !== (s = null == U ? void 0 : U.primarySkuId) && void 0 !== s ? s : null,
            is_friend: d.Z.isFriend(y),
            has_images: !!(null !== (v = null == M ? void 0 : M.large_image) && void 0 !== v ? v : null == M ? void 0 : M.small_image),
            party_max: null == P ? void 0 : null === (n = P.size) || void 0 === n ? void 0 : n[1],
            party_id: null == P ? void 0 : P.id,
            party_platform: (0, m.Ps)(null == P ? void 0 : P.id) ? _.ABu.SPOTIFY : null,
            game_platform: (0, l.Z)(x),
            profile_user_status: G,
            profile_has_nitro_customization: (null == D ? void 0 : D.banner) != null,
            profile_has_profile_effect: (null == D ? void 0 : D.profileEffectId) != null,
            ...(null == C ? null : (0, p.expandLocation)(C))
        });
}
function y() {
    null != g && (0, a.closeModal)(g), (g = null);
}
class b extends s.Z {
    _initialize() {
        o.Z.subscribe('USER_PROFILE_MODAL_OPEN', v), o.Z.subscribe('USER_PROFILE_MODAL_CLOSE', y);
    }
    _terminate() {
        o.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', v), o.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', y);
    }
}
n.Z = new b();
