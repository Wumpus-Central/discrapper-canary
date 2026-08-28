n.d(t, {
    $x: () => w,
    AO: () => x,
    MO: () => R,
    YB: () => C,
    oI: () => S,
    p9: () => T,
    sl: () => I,
    uK: () => _,
    vr: () => L,
    x5: () => b,
    zk: () => A,
}),
    n(321073);
var l = n(435558),
    r = n.n(l),
    i = n(636537),
    a = n(228366),
    s = n(157559),
    u = n(268429),
    o = n(597643),
    c = n(773669),
    d = n(594061),
    f = n(919638),
    h = n(287809),
    p = n(371794),
    m = n(750385),
    g = n(68935),
    y = n(652215),
    v = n(355097),
    E = n(375708);
async function A(e, t) {
    let { body: n } = await (0, p.aP)({ url: y.Rsh.STICKER_PACK(e), rejectWithError: (0, i.fT)() });
    return a.h.dispatch({ type: "STICKER_PACK_FETCH_SUCCESS", packId: e, pack: n, ingestStickers: t }), n;
}
async function C() {
    let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (m.A.isFetchingStickerPacks || m.A.hasLoadedStickerPacks) return;
    a.h.wait(() => {
        a.h.dispatch({ type: "STICKER_PACKS_FETCH_START" });
    });
    let {
        body: { sticker_packs: t },
    } = await i.Bo.get({ url: y.Rsh.STICKER_PACKS, query: { locale: e }, rejectWithError: (0, i.fT)() });
    a.h.dispatch({ type: "STICKER_PACKS_FETCH_SUCCESS", packs: t });
}
async function x(e) {
    let { body: t } = await i.Bo.get({ url: y.Rsh.STICKER(e), rejectWithError: (0, i.fT)() });
    if ((0, g.Xw)(t)) a.h.dispatch({ type: "GUILD_STICKER_FETCH_SUCCESS", sticker: t });
    else if ((0, g.FD)(t)) a.h.dispatch({ type: "PACK_STICKER_FETCH_SUCCESS", sticker: t });
    else throw Error("Invalid sticker type");
}
async function S(e, t) {
    let { body: n } = await i.Bo.get({ url: y.Rsh.GUILD_STICKER_PACKS(e), rejectWithError: (0, i.fT)(), signal: t });
    a.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: e,
        stickers: n.map((e) => (null != e.user ? { ...e, user_id: e.user.id, user: e.user } : e)),
    });
}
async function I(e) {
    await i.Bo.del({ url: y.Rsh.GUILD_STICKER(e.guild_id, e.id), rejectWithError: (0, i.fT)() });
}
async function T(e) {
    let { guildId: t } = e,
        n = await i.Bo.post({
            url: y.Rsh.GUILD_STICKER_PACKS(t),
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
            rejectWithError: (0, i.fT)(),
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
    return (await i.Bo.patch({ url: y.Rsh.GUILD_STICKER(e, t), body: n, rejectWithError: (0, i.fT)() })).body;
}
function w(e, t, n) {
    a.h.dispatch({ type: "ADD_STICKER_PREVIEW", channelId: e, sticker: t, draftType: n });
}
function b(e, t) {
    a.h.dispatch({ type: "CLEAR_STICKER_PREVIEW", channelId: e, draftType: t });
}
function N(e) {
    return f.A.totalUnavailableGuilds > 0 || !o.A.isConnected() ? e : e.filter((e) => null != m.A.getStickerById(e));
}
function _(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = N(t.stickerIds)), r().size(t.stickerIds) >= 250)
                ? (s.A.show({
                      title: E.intl.string(E.t["+XYXtZ"]),
                      body: E.intl.formatToPlainString(E.t.JaIyFi, { count: 250 }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        v.Sb.INFREQUENT_USER_ACTION,
    );
}
function L(e) {
    d.bW.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = N(t.stickerIds));
        },
        v.Sb.INFREQUENT_USER_ACTION,
    );
}
