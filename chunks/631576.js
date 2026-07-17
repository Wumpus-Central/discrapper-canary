"use strict";
n.d(t, {
    $x: () => L,
    AO: () => S,
    MO: () => R,
    YB: () => g,
    oI: () => N,
    p9: () => O,
    sl: () => C,
    uK: () => v,
    vr: () => b,
    x5: () => y,
    zk: () => m,
}),
    n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(157559),
    o = n(77257),
    d = n(617710),
    c = n(773669),
    u = n(594061),
    _ = n(919638),
    E = n(287809),
    A = n(371794),
    h = n(750385),
    I = n(68935),
    f = n(652215),
    p = n(355097),
    T = n(375708);
async function m(e, t) {
    let { body: n } = await (0, A.aP)({ url: f.Rsh.STICKER_PACK(e), rejectWithError: (0, a.fT)() });
    return s.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
}
async function g() {
    let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (h.A.isFetchingStickerPacks || h.A.hasLoadedStickerPacks) return;
    s.h.wait(() => {
        s.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
    });
    let {
        body: { sticker_packs: t },
    } = await a.Bo.get({ url: f.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: (0, a.fT)() });
    s.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
}
async function S(e) {
    let { body: t } = await a.Bo.get({ url: f.Rsh.STICKER(e), rejectWithError: (0, a.fT)() });
    if ((0, I.Xw)(t)) s.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
    else if ((0, I.FD)(t)) s.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
    else throw Error("Invalid sticker type");
}
async function N(e, t) {
    let { body: n } = await a.Bo.get({ url: f.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: (0, a.fT)(), signal: t });
    s.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: e,
        stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
    });
}
async function C(e) {
    await a.Bo.del({ url: f.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: (0, a.fT)() });
}
async function O(e) {
    let { guildId: t } = e,
        n = await a.Bo.post({
            url: f.Rsh.GUILD_STICKER_PACKS(t),
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
            headers: o.A.buildHeadersForMd5(e.originalMd5),
            rejectWithError: (0, a.fT)(),
        });
    return (
        s.h.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: t,
            sticker: { ...n.body, user_id: E.default.getCurrentUser()?.id },
        }),
        n.body
    );
}
async function R(e, t, n) {
    return (await a.Bo.patch({ url: f.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: (0, a.fT)() })).body;
}
function L(e, t, n) {
    s.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function y(e, t) {
    s.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function D(e) {
    return _.A.totalUnavailableGuilds > 0 || !d.A.isConnected() ? e : e.filter((e) => null != h.A.getStickerById(e));
}
function v(e) {
    u.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = D(t.stickerIds)), r().size(t.stickerIds) >= 250)
                ? (l.A.show({
                      title: T.intl.string(T.t["+XYXtZ"]),
                      body: T.intl.formatToPlainString(T.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function b(e) {
    u.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = D(t.stickerIds));
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
