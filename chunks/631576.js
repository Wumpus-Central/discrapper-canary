n.d(t, {
    $x: () => _,
    AO: () => y,
    MO: () => R,
    YB: () => I,
    oI: () => x,
    p9: () => T,
    sl: () => S,
    uK: () => N,
    vr: () => j,
    x5: () => b,
    zk: () => E,
}),
    n(321073);
var l = n(435558),
    r = n.n(l),
    s = n(636537),
    i = n(228366),
    a = n(157559),
    u = n(268429),
    c = n(493560),
    o = n(773669),
    d = n(594061),
    f = n(919638),
    h = n(287809),
    m = n(371794),
    p = n(750385),
    g = n(68935),
    A = n(652215),
    v = n(355097),
    C = n(375708);
async function E(e, t) {
    let { body: n } = await (0, m.aP)({ url: A.Rsh.STICKER_PACK(e), rejectWithError: (0, s.fT)() });
    return i.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
}
async function I() {
    let { locale: e = o.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (p.A.isFetchingStickerPacks || p.A.hasLoadedStickerPacks) return;
    i.h.wait(() => {
        i.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
    });
    let {
        body: { sticker_packs: t },
    } = await s.Bo.get({ url: A.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: (0, s.fT)() });
    i.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
}
async function y(e) {
    let { body: t } = await s.Bo.get({ url: A.Rsh.STICKER(e), rejectWithError: (0, s.fT)() });
    if ((0, g.Xw)(t)) i.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
    else if ((0, g.FD)(t)) i.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
    else throw Error("Invalid sticker type");
}
async function x(e, t) {
    let { body: n } = await s.Bo.get({ url: A.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: (0, s.fT)(), signal: t });
    i.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: e,
        stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
    });
}
async function S(e) {
    await s.Bo.del({ url: A.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: (0, s.fT)() });
}
async function T(e) {
    let { guildId: t } = e,
        n = await s.Bo.post({
            url: A.Rsh.GUILD_STICKER_PACKS(t),
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
            headers: u.A.buildHeadersForMd5(e.originalMd5),
            rejectWithError: (0, s.fT)(),
        });
    return (
        i.h.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: t,
            sticker: { ...n.body, user_id: h.default.getCurrentUser()?.id },
        }),
        n.body
    );
}
async function R(e, t, n) {
    return (await s.Bo.patch({ url: A.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: (0, s.fT)() })).body;
}
function _(e, t, n) {
    i.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function b(e, t) {
    i.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function w(e) {
    return f.A.totalUnavailableGuilds > 0 || !c.A.isConnected() ? e : e.filter((e) => null != p.A.getStickerById(e));
}
function N(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = w(t.stickerIds)), r().size(t.stickerIds) >= 250)
                ? (a.A.show({
                      title: C.intl.string(C.t["+XYXtZ"]),
                      body: C.intl.formatToPlainString(C.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        v.Sb.INFREQUENT_USER_ACTION,
    );
}
function j(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = w(t.stickerIds));
        },
        v.Sb.INFREQUENT_USER_ACTION,
    );
}
