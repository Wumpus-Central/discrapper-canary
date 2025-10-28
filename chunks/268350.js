n.d(t, {
    $p: () => I,
    FQ: () => v,
    Il: () => T,
    Jf: () => C,
    SA: () => w,
    Um: () => S,
    eu: () => N,
    hW: () => D,
    lY: () => A,
    qB: () => R,
}),
    n(953529),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(38618),
    c = n(706454),
    u = n(675478),
    d = n(486472),
    f = n(594174),
    _ = n(73346),
    p = n(926491),
    h = n(981631),
    m = n(526761),
    g = n(388032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = async (e, t) => {
        let { body: n } = await (0, _.Kb)({
            url: h.ANM.STICKER_PACK(e),
            rejectWithError: !1,
        });
        return (
            o.Z.dispatch({
                type: "STICKER_PACK_FETCH_SUCCESS",
                packId: e,
                pack: n,
                ingestStickers: t,
            }),
            n
        );
    },
    I = async function () {
        let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (p.Z.isFetchingStickerPacks || p.Z.hasLoadedStickerPacks) return;
        o.Z.wait(() => {
            o.Z.dispatch({ type: "STICKER_PACKS_FETCH_START" });
        });
        let {
            body: { sticker_packs: t },
        } = await a.tn.get({
            url: h.ANM.STICKER_PACKS,
            query: { locale: e },
            rejectWithError: !1,
        });
        o.Z.dispatch({
            type: "STICKER_PACKS_FETCH_SUCCESS",
            packs: t,
        });
    },
    T = async (e) => {
        let { body: t } = await a.tn.get({
            url: h.ANM.STICKER(e),
            rejectWithError: !1,
        });
        o.Z.dispatch({
            type: "STICKER_FETCH_SUCCESS",
            sticker: t,
        });
    },
    S = async (e) => {
        await a.tn.del({
            url: h.ANM.GUILD_STICKER(e.guild_id, e.id),
            rejectWithError: !1,
        });
    },
    A = async (e) => {
        let { guildId: t } = e,
            n = await a.tn.post({
                url: h.ANM.GUILD_STICKER_PACKS(t),
                body: "web" === e.platform ? e.body : void 0,
                fields:
                    "mobile" === e.platform
                        ? [
                              {
                                  name: "name",
                                  value: e.name,
                              },
                              {
                                  name: "tags",
                                  value: e.tags,
                              },
                              {
                                  name: "description",
                                  value: e.description,
                              },
                          ]
                        : void 0,
                attachments:
                    "mobile" === e.platform
                        ? [
                              {
                                  name: "file",
                                  file: {
                                      uri: e.uri,
                                      name: e.name,
                                      type: e.mimeType,
                                  },
                              },
                          ]
                        : void 0,
                rejectWithError: !1,
            });
        return (
            o.Z.dispatch({
                type: "GUILD_STICKERS_CREATE_SUCCESS",
                guildId: t,
                sticker: O(b({}, n.body), { user: f.default.getCurrentUser() }),
            }),
            n.body
        );
    },
    C = async (e, t, n) =>
        (
            await a.tn.patch({
                url: h.ANM.GUILD_STICKER(e, t),
                body: n,
                rejectWithError: !1,
            })
        ).body;
function N(e, t, n) {
    o.Z.dispatch({
        type: "ADD_STICKER_PREVIEW",
        channelId: e,
        sticker: t,
        draftType: n,
    });
}
function R(e, t) {
    o.Z.dispatch({
        type: "CLEAR_STICKER_PREVIEW",
        channelId: e,
        draftType: t,
    });
}
function P(e) {
    return d.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter((e) => null != p.Z.getStickerById(e));
}
function w(e) {
    u.DZ.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = P(t.stickerIds)), i().size(t.stickerIds) >= m.oX)
                ? (s.Z.show({
                      title: g.intl.string(g.t["+XYXtZ"]),
                      body: g.intl.formatToPlainString(g.t.JaIyFi, { count: m.oX }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        m.fy.INFREQUENT_USER_ACTION,
    );
}
function D(e) {
    u.DZ.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = P(t.stickerIds));
        },
        m.fy.INFREQUENT_USER_ACTION,
    );
}
