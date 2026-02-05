"use strict";
n.d(t, {
    $x: () => b,
    AO: () => T,
    MO: () => C,
    YB: () => I,
    oI: () => y,
    p9: () => v,
    sl: () => S,
    uK: () => O,
    vr: () => D,
    x5: () => N,
    zk: () => A,
}),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(157559),
    l = n(142120),
    u = n(773669),
    c = n(594061),
    d = n(919638),
    _ = n(287809),
    f = n(371794),
    p = n(679382),
    h = n(378058),
    m = n(652215),
    g = n(355097),
    E = n(985018);
let A = async (e, t) => {
        let { body: n } = await (0, f.aP)({ url: m.Rsh.STICKER_PACK(e), rejectWithError: !1 });
        return s.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
    },
    I = async function () {
        let { locale: e = u.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (p.A.isFetchingStickerPacks || p.A.hasLoadedStickerPacks) return;
        s.h.wait(() => {
            s.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
        });
        let {
            body: { sticker_packs: t },
        } = await a.Bo.get({ url: m.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: !1 });
        s.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
    },
    T = async (e) => {
        let { body: t } = await a.Bo.get({ url: m.Rsh.STICKER(e), rejectWithError: !1 });
        if ((0, h.Xw)(t)) s.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
        else if ((0, h.FD)(t)) s.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
        else throw Error("Invalid sticker type");
    },
    y = async (e, t) => {
        let { body: n } = await a.Bo.get({ url: m.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: !1, signal: t });
        s.h.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
        });
    },
    S = async (e) => {
        await a.Bo.del({ url: m.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: !1 });
    },
    v = async (e) => {
        let { guildId: t } = e,
            n = await a.Bo.post({
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
                rejectWithError: !1,
            });
        return (
            s.h.dispatch({
                type: "GUILD_STICKERS_CREATE_SUCCESS",
                guildId: t,
                sticker: { ...n.body, user_id: _.default.getCurrentUser()?.id },
            }),
            n.body
        );
    },
    C = async (e, t, n) => (await a.Bo.patch({ url: m.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: !1 })).body;
function b(e, t, n) {
    s.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function N(e, t) {
    s.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function R(e) {
    return d.A.totalUnavailableGuilds > 0 || !l.A.isConnected() ? e : e.filter((e) => null != p.A.getStickerById(e));
}
function O(e) {
    c.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = R(t.stickerIds)), i().size(t.stickerIds) >= 250)
                ? (o.A.show({
                      title: E.intl.string(E.t["+XYXtZ"]),
                      body: E.intl.formatToPlainString(E.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
function D(e) {
    c.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = R(t.stickerIds));
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
