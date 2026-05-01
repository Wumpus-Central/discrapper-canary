"use strict";
n.d(t, {
    $x: () => C,
    AO: () => T,
    MO: () => R,
    YB: () => p,
    oI: () => S,
    p9: () => O,
    sl: () => N,
    uK: () => L,
    vr: () => v,
    x5: () => y,
    zk: () => I,
}),
    n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(157559),
    l = n(446458),
    _ = n(773669),
    d = n(594061),
    u = n(919638),
    c = n(287809),
    E = n(371794),
    h = n(750385),
    m = n(68935),
    f = n(652215),
    g = n(355097),
    A = n(985018);
let I = async (e, t) => {
        let { body: n } = await (0, E.aP)({ url: f.Rsh.STICKER_PACK(e), rejectWithError: !1 });
        return a.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
    },
    p = async function () {
        let { locale: e = _.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (h.A.isFetchingStickerPacks || h.A.hasLoadedStickerPacks) return;
        a.h.wait(() => {
            a.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
        });
        let {
            body: { sticker_packs: t },
        } = await s.Bo.get({ url: f.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: !1 });
        a.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
    },
    T = async (e) => {
        let { body: t } = await s.Bo.get({ url: f.Rsh.STICKER(e), rejectWithError: !1 });
        if ((0, m.Xw)(t)) a.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
        else if ((0, m.FD)(t)) a.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
        else throw Error("Invalid sticker type");
    },
    S = async (e, t) => {
        let { body: n } = await s.Bo.get({ url: f.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: !1, signal: t });
        a.h.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
        });
    },
    N = async (e) => {
        await s.Bo.del({ url: f.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: !1 });
    },
    O = async (e) => {
        let { guildId: t } = e,
            n = await s.Bo.post({
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
                rejectWithError: !1,
            });
        return (
            a.h.dispatch({
                type: "GUILD_STICKERS_CREATE_SUCCESS",
                guildId: t,
                sticker: { ...n.body, user_id: c.default.getCurrentUser()?.id },
            }),
            n.body
        );
    },
    R = async (e, t, n) => (await s.Bo.patch({ url: f.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: !1 })).body;
function C(e, t, n) {
    a.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function y(e, t) {
    a.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function D(e) {
    return u.A.totalUnavailableGuilds > 0 || !l.A.isConnected() ? e : e.filter((e) => null != h.A.getStickerById(e));
}
function L(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = D(t.stickerIds)), r().size(t.stickerIds) >= 250)
                ? (o.A.show({
                      title: A.intl.string(A.t["+XYXtZ"]),
                      body: A.intl.formatToPlainString(A.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
function v(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = D(t.stickerIds));
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
