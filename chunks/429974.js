r.d(n, {
    z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(570140),
    o = r(317770),
    l = r(603113),
    u = r(812206),
    c = r(158776),
    d = r(699516),
    f = r(594174),
    _ = r(626135),
    h = r(621853),
    p = r(981631),
    m = r(616922);
let g = null;
function E(e, n) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == n ? '' : n);
}
async function v(e) {
    var n, s, o, v;
    let { userId: I, section: T, subsection: b, guildId: y, channelId: S, friendToken: A, analyticsLocation: N, showGuildProfile: C = !0, ...R } = e,
        O = f.default.getUser(I);
    if (null == O) return;
    let D = h.Z.getUserProfile(I),
        L = c.Z.getPrimaryActivity(I),
        x = c.Z.getStatus(I),
        w = c.Z.isMobileOnline(I),
        { party: P, assets: M, application_id: k } = null != L ? L : {},
        U = null != k ? u.Z.getApplication(k) : null,
        B = w ? p.j28.ONLINE_MOBILE : p.j28.ONLINE_DESKTOP,
        G = x === p.Skl.ONLINE ? B : x;
    (g = await (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('56630'), r.e('82412'), r.e('3748')]).then(r.bind(r, 533835));
            return (n) =>
                (0, i.jsx)(e, {
                    user: O,
                    guildId: y,
                    friendToken: A,
                    initialSection: T,
                    initialSubsection: b,
                    channelId: S,
                    showGuildProfile: C,
                    ...n,
                    ...R
                });
        },
        { modalKey: E(I, C ? y : void 0) }
    )),
        _.default.track(p.rMx.OPEN_MODAL, {
            type: 'Profile Modal',
            guild_id: y,
            channel_id: S,
            other_user_id: I,
            application_id: null !== (s = null == L ? void 0 : L.application_id) && void 0 !== s ? s : null,
            application_name: null == L ? void 0 : L.name,
            sku_id: null !== (o = null == U ? void 0 : U.primarySkuId) && void 0 !== o ? o : null,
            is_friend: d.Z.isFriend(I),
            has_images: !!(null !== (v = null == M ? void 0 : M.large_image) && void 0 !== v ? v : null == M ? void 0 : M.small_image),
            party_max: null == P ? void 0 : null === (n = P.size) || void 0 === n ? void 0 : n[1],
            party_id: null == P ? void 0 : P.id,
            party_platform: (0, m.Ps)(null == P ? void 0 : P.id) ? p.ABu.SPOTIFY : null,
            game_platform: (0, l.Z)(L),
            profile_user_status: G,
            profile_has_nitro_customization: (null == D ? void 0 : D.banner) != null,
            profile_has_profile_effect: (null == D ? void 0 : D.profileEffectId) != null,
            ...(null == N ? null : (0, _.expandLocation)(N))
        });
}
function I() {
    null != g && (0, a.closeModal)(g), (g = null);
}
class T extends o.Z {
    _initialize() {
        s.Z.subscribe('USER_PROFILE_MODAL_OPEN', v), s.Z.subscribe('USER_PROFILE_MODAL_CLOSE', I);
    }
    _terminate() {
        s.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', v), s.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', I);
    }
}
n.Z = new T();
