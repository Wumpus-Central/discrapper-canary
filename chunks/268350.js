n.d(t, {
    $p: () => I,
    FQ: () => S,
    Il: () => T,
    Jf: () => R,
    SA: () => x,
    Um: () => A,
    eu: () => P,
    hW: () => L,
    lY: () => C,
    pk: () => N,
    qB: () => w
}),
    n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(544891),
    a = n(570140),
    s = n(668781),
    l = n(38618),
    c = n(706454),
    u = n(675478),
    d = n(598077),
    f = n(486472),
    p = n(594174),
    _ = n(73346),
    h = n(926491),
    m = n(981631),
    g = n(526761),
    E = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
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
let S = async (e, t) => {
        let { body: n } = await (0, _.Kb)({
            url: m.ANM.STICKER_PACK(e),
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'STICKER_PACK_FETCH_SUCCESS',
                packId: e,
                pack: n,
                ingestStickers: t
            }),
            n
        );
    },
    I = async function () {
        let { locale: e = c.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (h.Z.isFetchingStickerPacks || h.Z.hasLoadedStickerPacks) return;
        a.Z.wait(() => {
            a.Z.dispatch({ type: 'STICKER_PACKS_FETCH_START' });
        });
        let {
            body: { sticker_packs: t }
        } = await o.tn.get({
            url: m.ANM.STICKER_PACKS,
            query: { locale: e },
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'STICKER_PACKS_FETCH_SUCCESS',
            packs: t
        });
    },
    T = async (e) => {
        let { body: t } = await o.tn.get({
            url: m.ANM.STICKER(e),
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'STICKER_FETCH_SUCCESS',
            sticker: t
        });
    },
    N = async (e) => {
        let { body: t } = await o.tn.get({
            url: m.ANM.GUILD_STICKER_PACKS(e),
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'GUILD_STICKERS_FETCH_SUCCESS',
            guildId: e,
            stickers: t.map((e) => (null != e.user ? O(b({}, e), { user: new d.Z(e.user) }) : e))
        });
    },
    A = async (e) => {
        await o.tn.del({
            url: m.ANM.GUILD_STICKER(e.guild_id, e.id),
            rejectWithError: !1
        });
    },
    C = async (e, t) => {
        let n = await o.tn.post({
            url: m.ANM.GUILD_STICKER_PACKS(e),
            body: t,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'GUILD_STICKERS_CREATE_SUCCESS',
                guildId: e,
                sticker: O(b({}, n.body), { user: p.default.getCurrentUser() })
            }),
            n.body
        );
    },
    R = async (e, t, n) =>
        (
            await o.tn.patch({
                url: m.ANM.GUILD_STICKER(e, t),
                body: n,
                rejectWithError: !1
            })
        ).body;
function P(e, t, n) {
    a.Z.dispatch({
        type: 'ADD_STICKER_PREVIEW',
        channelId: e,
        sticker: t,
        draftType: n
    });
}
function w(e, t) {
    a.Z.dispatch({
        type: 'CLEAR_STICKER_PREVIEW',
        channelId: e,
        draftType: t
    });
}
function D(e) {
    return f.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter((e) => null != h.Z.getStickerById(e));
}
function x(e) {
    u.DZ.updateAsync(
        'favoriteStickers',
        (t) =>
            ((t.stickerIds = D(t.stickerIds)), i().size(t.stickerIds) >= g.oX)
                ? (s.Z.show({
                      title: E.NW.string(E.t['+XYXtb']),
                      body: E.NW.formatToPlainString(E.t.JaIyFh, { count: g.oX })
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        g.fy.INFREQUENT_USER_ACTION
    );
}
function L(e) {
    u.DZ.updateAsync(
        'favoriteStickers',
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = D(t.stickerIds));
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
