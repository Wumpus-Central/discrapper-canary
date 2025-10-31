n.d(t, {
    $p: () => S,
    FQ: () => T,
    Il: () => A,
    Jf: () => P,
    SA: () => L,
    SV: () => C,
    Um: () => N,
    eu: () => w,
    hW: () => M,
    lY: () => R,
    qB: () => D,
}),
    n(415506),
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
    d = n(598077),
    f = n(486472),
    _ = n(594174),
    p = n(73346),
    h = n(926491),
    m = n(378233),
    g = n(981631),
    E = n(526761),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = async (e, t) => {
        let { body: n } = await (0, p.Kb)({
            url: g.ANM.STICKER_PACK(e),
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
    S = async function () {
        let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (h.Z.isFetchingStickerPacks || h.Z.hasLoadedStickerPacks) return;
        o.Z.wait(() => {
            o.Z.dispatch({ type: "STICKER_PACKS_FETCH_START" });
        });
        let {
            body: { sticker_packs: t },
        } = await a.tn.get({
            url: g.ANM.STICKER_PACKS,
            query: { locale: e },
            rejectWithError: !1,
        });
        o.Z.dispatch({
            type: "STICKER_PACKS_FETCH_SUCCESS",
            packs: t,
        });
    },
    A = async (e) => {
        let { body: t } = await a.tn.get({
            url: g.ANM.STICKER(e),
            rejectWithError: !1,
        });
        if ((0, m.J8)(t))
            o.Z.dispatch({
                type: "GUILD_STICKER_FETCH_SUCCESS",
                sticker: t,
            });
        else if ((0, m.jl)(t))
            o.Z.dispatch({
                type: "PACK_STICKER_FETCH_SUCCESS",
                sticker: t,
            });
        else throw Error("Invalid sticker type");
    },
    C = async (e, t) => {
        let { body: n } = await a.tn.get({
            url: g.ANM.GUILD_STICKER_PACKS(e),
            rejectWithError: !1,
            signal: t,
        });
        o.Z.dispatch({
            type: "GUILD_STICKERS_FETCH_SUCCESS",
            guildId: e,
            stickers: n.map((e) =>
                null != e.user
                    ? I(O({}, e), {
                          user_id: e.user.id,
                          user: new d.Z(e.user),
                      })
                    : e,
            ),
        });
    },
    N = async (e) => {
        await a.tn.del({
            url: g.ANM.GUILD_STICKER(e.guild_id, e.id),
            rejectWithError: !1,
        });
    },
    R = async (e) => {
        var t;
        let { guildId: n } = e,
            r = await a.tn.post({
                url: g.ANM.GUILD_STICKER_PACKS(n),
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
                guildId: n,
                sticker: I(O({}, r.body), { user_id: null == (t = _.default.getCurrentUser()) ? void 0 : t.id }),
            }),
            r.body
        );
    },
    P = async (e, t, n) =>
        (
            await a.tn.patch({
                url: g.ANM.GUILD_STICKER(e, t),
                body: n,
                rejectWithError: !1,
            })
        ).body;
function w(e, t, n) {
    o.Z.dispatch({
        type: "ADD_STICKER_PREVIEW",
        channelId: e,
        sticker: t,
        draftType: n,
    });
}
function D(e, t) {
    o.Z.dispatch({
        type: "CLEAR_STICKER_PREVIEW",
        channelId: e,
        draftType: t,
    });
}
function x(e) {
    return f.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter((e) => null != h.Z.getStickerById(e));
}
function L(e) {
    u.DZ.updateAsync(
        "favoriteStickers",
        (t) =>
            ((t.stickerIds = x(t.stickerIds)), i().size(t.stickerIds) >= E.oX)
                ? (s.Z.show({
                      title: b.intl.string(b.t["+XYXtZ"]),
                      body: b.intl.formatToPlainString(b.t.JaIyFi, { count: E.oX }),
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        E.fy.INFREQUENT_USER_ACTION,
    );
}
function M(e) {
    u.DZ.updateAsync(
        "favoriteStickers",
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = x(t.stickerIds));
        },
        E.fy.INFREQUENT_USER_ACTION,
    );
}
