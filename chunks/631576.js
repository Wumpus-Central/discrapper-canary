"use strict";
n.d(t, {
    $x: () => O,
    AO: () => S,
    MO: () => v,
    YB: () => T,
    oI: () => N,
    p9: () => C,
    sl: () => y,
    uK: () => D,
    vr: () => L,
    x5: () => R,
    zk: () => I,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(157559),
    l = n(77257),
    u = n(587626),
    c = n(773669),
    d = n(594061),
    _ = n(919638),
    f = n(287809),
    h = n(371794),
    p = n(750385),
    E = n(68935),
    m = n(652215),
    g = n(355097),
    A = n(375708);
let I = async (e, t) => {
        let { body: n } = await (0, h.aP)({ url: m.Rsh.STICKER_PACK(e), rejectWithError: !1 });
        return a.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
    },
    T = async function () {
        let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (p.A.isFetchingStickerPacks || p.A.hasLoadedStickerPacks) return;
        a.h.wait(() => {
            a.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
        });
        let {
            body: { sticker_packs: t },
        } = await s.Bo.get({ url: m.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: !1 });
        a.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
    },
    S = async (e) => {
        let { body: t } = await s.Bo.get({ url: m.Rsh.STICKER(e), rejectWithError: !1 });
        if ((0, E.Xw)(t)) a.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
        else if ((0, E.FD)(t)) a.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
        else throw Error("Invalid sticker type");
    },
    N = async (e, t) => {
        let { body: n } = await s.Bo.get({ url: m.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: !1, signal: t });
        a.h.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
        });
    },
    y = async (e) => {
        await s.Bo.del({ url: m.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: !1 });
    },
    C = async (e) => {
        let { guildId: t } = e,
            n = await s.Bo.post({
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
                headers: l.A.buildHeadersForMd5(e.originalMd5),
                rejectWithError: !1,
            });
        return (
            a.h.dispatch({
                type: "GUILD_STICKERS_CREATE_SUCCESS",
                guildId: t,
                sticker: { ...n.body, user_id: f.default.getCurrentUser()?.id },
            }),
            n.body
        );
    },
    v = async (e, t, n) => (await s.Bo.patch({ url: m.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: !1 })).body;
function O(e, t, n) {
    a.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function R(e, t) {
    a.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function b(e) {
    return _.A.totalUnavailableGuilds > 0 || !u.A.isConnected() ? e : e.filter((e) => null != p.A.getStickerById(e));
}
function D(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = b(t.stickerIds)), r().size(t.stickerIds) >= 250)
                ? (o.A.show({
                      title: A.intl.string(A.t["+XYXtZ"]),
                      body: A.intl.formatToPlainString(A.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
function L(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = b(t.stickerIds));
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
