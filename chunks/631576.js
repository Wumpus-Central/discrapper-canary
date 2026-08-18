"use strict";
n.d(t, {
    $x: () => T,
    AO: () => y,
    MO: () => N,
    YB: () => I,
    oI: () => S,
    p9: () => _,
    sl: () => v,
    uK: () => R,
    vr: () => L,
    x5: () => j,
    zk: () => C,
}),
    n(321073);
var l = n(435558),
    i = n.n(l),
    s = n(636537),
    r = n(228366),
    a = n(157559),
    o = n(77257),
    u = n(617710),
    c = n(773669),
    d = n(594061),
    h = n(919638),
    m = n(287809),
    f = n(371794),
    p = n(750385),
    g = n(68935),
    x = n(652215),
    A = n(355097),
    E = n(375708);
async function C(e, t) {
    let { body: n } = await (0, f.aP)({ url: x.Rsh.STICKER_PACK(e), rejectWithError: (0, s.fT)() });
    return r.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
}
async function I() {
    let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (p.A.isFetchingStickerPacks || p.A.hasLoadedStickerPacks) return;
    r.h.wait(() => {
        r.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
    });
    let {
        body: { sticker_packs: t },
    } = await s.Bo.get({ url: x.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: (0, s.fT)() });
    r.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
}
async function y(e) {
    let { body: t } = await s.Bo.get({ url: x.Rsh.STICKER(e), rejectWithError: (0, s.fT)() });
    if ((0, g.Xw)(t)) r.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
    else if ((0, g.FD)(t)) r.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
    else throw Error("Invalid sticker type");
}
async function S(e, t) {
    let { body: n } = await s.Bo.get({ url: x.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: (0, s.fT)(), signal: t });
    r.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: e,
        stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
    });
}
async function v(e) {
    await s.Bo.del({ url: x.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: (0, s.fT)() });
}
async function _(e) {
    let { guildId: t } = e,
        n = await s.Bo.post({
            url: x.Rsh.GUILD_STICKER_PACKS(t),
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
            rejectWithError: (0, s.fT)(),
        });
    return (
        r.h.dispatch({
            type: "GUILD_STICKERS_CREATE_SUCCESS",
            guildId: t,
            sticker: { ...n.body, user_id: m.default.getCurrentUser()?.id },
        }),
        n.body
    );
}
async function N(e, t, n) {
    return (await s.Bo.patch({ url: x.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: (0, s.fT)() })).body;
}
function T(e, t, n) {
    r.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function j(e, t) {
    r.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function b(e) {
    return h.A.totalUnavailableGuilds > 0 || !u.A.isConnected() ? e : e.filter((e) => null != p.A.getStickerById(e));
}
function R(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = b(t.stickerIds)), i().size(t.stickerIds) >= 250)
                ? (a.A.show({
                      title: E.intl.string(E.t["+XYXtZ"]),
                      body: E.intl.formatToPlainString(E.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        A.Sb.INFREQUENT_USER_ACTION,
    );
}
function L(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = b(t.stickerIds));
        },
        A.Sb.INFREQUENT_USER_ACTION,
    );
}
