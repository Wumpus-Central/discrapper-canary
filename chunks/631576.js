(n.d(t, {
    $x: () => T,
    AO: () => A,
    MO: () => R,
    YB: () => I,
    oI: () => _,
    p9: () => g,
    sl: () => L,
    uK: () => k,
    vr: () => N,
    x5: () => w,
    zk: () => y,
}),
    n(321073));
var r = n(435558),
    l = n.n(r),
    u = n(636537),
    a = n(228366),
    i = n(157559),
    s = n(268429),
    c = n(597643),
    o = n(773669),
    d = n(594061),
    f = n(919638),
    h = n(287809),
    p = n(371794),
    C = n(750385),
    E = n(68935),
    m = n(652215),
    v = n(355097),
    S = n(375708);
async function y(e, t) {
    let { body: n } = await (0, p.aP)({ url: m.Rsh.STICKER_PACK(e), rejectWithError: (0, u.fT)() });
    return (a.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n);
}
async function I() {
    let { locale: e = o.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (C.A.isFetchingStickerPacks || C.A.hasLoadedStickerPacks) return;
    a.h.wait(() => {
        a.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
    });
    let {
        body: { sticker_packs: t },
    } = await u.Bo.get({ url: m.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: (0, u.fT)() });
    a.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
}
async function A(e) {
    let { body: t } = await u.Bo.get({ url: m.Rsh.STICKER(e), rejectWithError: (0, u.fT)() });
    if ((0, E.Xw)(t)) a.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
    else if ((0, E.FD)(t)) a.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
    else throw Error("Invalid sticker type");
}
async function _(e, t) {
    let { body: n } = await u.Bo.get({ url: m.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: (0, u.fT)(), signal: t });
    a.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: e,
        stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
    });
}
async function L(e) {
    await u.Bo.del({ url: m.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: (0, u.fT)() });
}
async function g(e) {
    let { guildId: t } = e,
        n = await u.Bo.post({
            url: m.Rsh.GUILD_STICKER_PACKS(t),
            body: "web" === e.platform ? e.body : void 0,
            fields:
                "mobile" === e.platform
                    ? [
                          { name: "name", value: e.name },
                          { name: "tags", value: e.tags },
                          { name: "description", value: e.description },
                      ]
                    : void 0,
            attachments:
                "mobile" === e.platform
                    ? [{ name: "file", file: { uri: e.uri, name: e.name, type: e.mimeType } }]
                    : void 0,
            headers: s.A.buildHeadersForMd5(e.originalMd5),
            rejectWithError: (0, u.fT)(),
        });
    return (
        a.h.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: t,
            sticker: { ...n.body, user_id: h.default.getCurrentUser()?.id },
        }),
        n.body
    );
}
async function R(e, t, n) {
    return (await u.Bo.patch({ url: m.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: (0, u.fT)() })).body;
}
function T(e, t, n) {
    a.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function w(e, t) {
    a.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function b(e) {
    return f.A.totalUnavailableGuilds > 0 || !c.A.isConnected() ? e : e.filter((e) => null != C.A.getStickerById(e));
}
function k(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = b(t.stickerIds)), l().size(t.stickerIds) >= 250)
                ? (i.A.show({
                      title: S.intl.string(S.t["+XYXtZ"]),
                      body: S.intl.formatToPlainString(S.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        v.Sb.INFREQUENT_USER_ACTION,
    );
}
function N(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            ((t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = b(t.stickerIds)));
        },
        v.Sb.INFREQUENT_USER_ACTION,
    );
}
