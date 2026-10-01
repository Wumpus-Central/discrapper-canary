(i.d(e, {
    $x: () => U,
    AO: () => R,
    MO: () => b,
    YB: () => y,
    oI: () => k,
    p9: () => A,
    sl: () => K,
    uK: () => v,
    vr: () => w,
    x5: () => m,
    zk: () => f,
}),
    i(321073));
var r = i(435558),
    s = i.n(r),
    a = i(636537),
    c = i(73153),
    n = i(157559),
    d = i(268429),
    o = i(597643),
    u = i(773669),
    l = i(594061),
    S = i(919638),
    C = i(287809),
    E = i(371794),
    h = i(750385),
    _ = i(378058),
    I = i(652215),
    p = i(355097),
    T = i(375708);
async function f(t, e) {
    let { body: i } = await (0, E.aP)({ url: I.Rsh.STICKER_PACK(t), rejectWithError: (0, a.fT)() });
    return (c.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: t, pack: i, ingestStickers: e }), i);
}
async function y() {
    let { locale: t = u.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (h.A.isFetchingStickerPacks || h.A.hasLoadedStickerPacks) return;
    c.h.wait(() => {
        c.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
    });
    let {
        body: { sticker_packs: e },
    } = await a.Bo.get({ url: I.Rsh.STICKER_PACKS, query: { locale: t }, rejectWithError: (0, a.fT)() });
    c.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: e });
}
async function R(t) {
    let { body: e } = await a.Bo.get({ url: I.Rsh.STICKER(t), rejectWithError: (0, a.fT)() });
    if ((0, _.Xw)(e)) c.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: e });
    else if ((0, _.FD)(e)) c.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: e });
    else throw Error("Invalid sticker type");
}
async function k(t, e) {
    let { body: i } = await a.Bo.get({ url: I.Rsh.GUILD_STICKER_PACKS(t), rejectWithError: (0, a.fT)(), signal: e });
    c.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: t,
        stickers: i.map((t) => (null != t.user ? { ...t, user_id: t.user.id, user: t.user } : t)),
    });
}
async function K(t) {
    await a.Bo.del({ url: I.Rsh.GUILD_STICKER(t.guild_id, t.id), rejectWithError: (0, a.fT)() });
}
async function A(t) {
    let { guildId: e } = t,
        i = await a.Bo.post({
            url: I.Rsh.GUILD_STICKER_PACKS(e),
            body: "web" === t.platform ? t.body : void 0,
            fields:
                "mobile" === t.platform
                    ? [
                          { name: "name", value: t.name },
                          { name: "tags", value: t.tags },
                          { name: "description", value: t.description },
                      ]
                    : void 0,
            attachments:
                "mobile" === t.platform
                    ? [{ name: "file", file: { uri: t.uri, name: t.name, type: t.mimeType } }]
                    : void 0,
            headers: d.A.buildHeadersForMd5(t.originalMd5),
            rejectWithError: (0, a.fT)(),
        });
    return (
        c.h.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: e,
            sticker: { ...i.body, user_id: C.default.getCurrentUser()?.id },
        }),
        i.body
    );
}
async function b(t, e, i) {
    return (await a.Bo.patch({ url: I.Rsh.GUILD_STICKER(t, e), body: i, rejectWithError: (0, a.fT)() })).body;
}
function U(t, e, i) {
    c.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: t, sticker: e, draftType: i });
}
function m(t, e) {
    c.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: t, draftType: e });
}
function g(t) {
    return S.A.totalUnavailableGuilds > 0 || !o.A.isConnected() ? t : t.filter((t) => null != h.A.getStickerById(t));
}
function v(t) {
    l.bW.updateAsync(
        "favoriteStickers",
        (e) =>
            ((e.stickerIds = g(e.stickerIds)), s().size(e.stickerIds) >= 250)
                ? (n.A.show({
                      title: T.intl.string(T.t["+XYXtZ"]),
                      body: T.intl.formatToPlainString(T.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !e.stickerIds.includes(t) && void e.stickerIds.push(t),
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function w(t) {
    l.bW.updateAsync(
        "favoriteStickers",
        (e) => {
            ((e.stickerIds = e.stickerIds.filter((e) => e !== t)), (e.stickerIds = g(e.stickerIds)));
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
