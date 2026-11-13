n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(620632),
    s = n(73153),
    l = n(157559),
    o = n(724165),
    d = n(225123),
    c = n(773669),
    u = n(594061),
    _ = n(919638),
    E = n(287809),
    A = n(371794),
    f = n(898578),
    h = n(378058),
    I = n(652215),
    p = n(355097),
    m = n(792996);
function g(e) {
    return _.A.totalUnavailableGuilds > 0 || !d.A.isConnected() ? e : e.filter((e) => null != f.A.getStickerById(e));
}
n.d(
    t,
    {},
    {
        $x: function (e, t, n) {
            s.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
        },
        AO: async function (e) {
            let { body: t } = await a.Bo.get({ url: I.Rsh.STICKER(e), rejectWithError: (0, a.fT)() });
            if ((0, h.Xw)(t)) s.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
            else if ((0, h.FD)(t)) s.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
            else throw Error("Invalid sticker type");
        },
        MO: async function (e, t, n) {
            return (await a.Bo.patch({ url: I.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: (0, a.fT)() })).body;
        },
        YB: async function () {
            let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (f.A.isFetchingStickerPacks || f.A.hasLoadedStickerPacks) return;
            s.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
            let {
                body: { sticker_packs: t },
            } = await a.Bo.get({ url: I.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: (0, a.fT)() });
            s.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
        },
        oI: async function (e, t) {
            let { body: n } = await a.Bo.get({
                url: I.Rsh.GUILD_STICKER_PACKS(e),
                rejectWithError: (0, a.fT)(),
                signal: t,
            });
            s.h.dispatch({
                type: "GUILD_STICKERS_FETCH_SUCCESS",
                guildId: e,
                stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
            });
        },
        p9: async function (e) {
            let { guildId: t } = e,
                n = await a.Bo.post({
                    url: I.Rsh.GUILD_STICKER_PACKS(t),
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
        },
        sl: async function (e) {
            await a.Bo.del({ url: I.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: (0, a.fT)() });
        },
        uK: function (e) {
            u.bW.updateAsync(
                "favoriteStickers",
                (t) =>
                    ((t.stickerIds = g(t.stickerIds)), r().size(t.stickerIds) >= 250)
                        ? (l.A.show({
                              title: m.intl.string(m.t["+XYXtZ"]),
                              body: m.intl.formatToPlainString(m.t.JaIyFi, { count: 250 }),
                          }),
                          !1)
                        : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
                p.Sb.INFREQUENT_USER_ACTION,
            );
        },
        vr: function (e) {
            u.bW.updateAsync(
                "favoriteStickers",
                (t) => {
                    ((t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = g(t.stickerIds)));
                },
                p.Sb.INFREQUENT_USER_ACTION,
            );
        },
        x5: function (e, t) {
            s.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
        },
        zk: async function (e, t) {
            let { body: n } = await (0, A.aP)({ url: I.Rsh.STICKER_PACK(e), rejectWithError: (0, a.fT)() });
            return (s.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n);
        },
    },
);
