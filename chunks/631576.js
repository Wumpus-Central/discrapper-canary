"use strict";
n.d(t, {
    $x: () => y,
    AO: () => S,
    MO: () => C,
    YB: () => T,
    oI: () => N,
    p9: () => R,
    sl: () => O,
    uK: () => v,
    vr: () => w,
    x5: () => D,
    zk: () => p,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(157559),
    l = n(870218),
    _ = n(446458),
    d = n(773669),
    u = n(594061),
    c = n(919638),
    E = n(287809),
    h = n(371794),
    m = n(750385),
    f = n(68935),
    g = n(652215),
    A = n(355097),
    I = n(985018);
let p = async (e, t) => {
        let { body: n } = await (0, h.aP)({ url: g.Rsh.STICKER_PACK(e), rejectWithError: !1 });
        return a.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
    },
    T = async function () {
        let { locale: e = d.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (m.A.isFetchingStickerPacks || m.A.hasLoadedStickerPacks) return;
        a.h.wait(() => {
            a.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
        });
        let {
            body: { sticker_packs: t },
        } = await s.Bo.get({ url: g.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: !1 });
        a.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
    },
    S = async (e) => {
        let { body: t } = await s.Bo.get({ url: g.Rsh.STICKER(e), rejectWithError: !1 });
        if ((0, f.Xw)(t)) a.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
        else if ((0, f.FD)(t)) a.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
        else throw Error("Invalid sticker type");
    },
    N = async (e, t) => {
        let { body: n } = await s.Bo.get({ url: g.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: !1, signal: t });
        a.h.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
        });
    },
    O = async (e) => {
        await s.Bo.del({ url: g.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: !1 });
    },
    R = async (e) => {
        let { guildId: t } = e,
            n = await s.Bo.post({
                url: g.Rsh.GUILD_STICKER_PACKS(t),
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
                sticker: { ...n.body, user_id: E.default.getCurrentUser()?.id },
            }),
            n.body
        );
    },
    C = async (e, t, n) => (await s.Bo.patch({ url: g.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: !1 })).body;
function y(e, t, n) {
    a.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function D(e, t) {
    a.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function L(e) {
    return c.A.totalUnavailableGuilds > 0 || !_.A.isConnected() ? e : e.filter((e) => null != m.A.getStickerById(e));
}
function v(e) {
    u.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = L(t.stickerIds)), r().size(t.stickerIds) >= 250)
                ? (o.A.show({
                      title: I.intl.string(I.t["+XYXtZ"]),
                      body: I.intl.formatToPlainString(I.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        A.Sb.INFREQUENT_USER_ACTION,
    );
}
function w(e) {
    u.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = L(t.stickerIds));
        },
        A.Sb.INFREQUENT_USER_ACTION,
    );
}
