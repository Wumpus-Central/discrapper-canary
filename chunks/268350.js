n.d(t, {
    $p: () => y,
    FQ: () => v,
    Il: () => I,
    Jf: () => A,
    SA: () => O,
    Um: () => b,
    eu: () => N,
    hW: () => D,
    lY: () => S,
    pk: () => T,
    qB: () => C
}),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(668781),
    l = n(38618),
    u = n(706454),
    c = n(675478),
    d = n(598077),
    f = n(486472),
    _ = n(594174),
    p = n(73346),
    h = n(926491),
    m = n(981631),
    g = n(526761),
    E = n(388032);
let v = async (e, t) => {
        let { body: n } = await (0, p.Kb)({
            url: m.ANM.STICKER_PACK(e),
            rejectWithError: !1
        });
        return (
            s.Z.dispatch({
                type: 'STICKER_PACK_FETCH_SUCCESS',
                packId: e,
                pack: n,
                ingestStickers: t
            }),
            n
        );
    },
    y = async function () {
        let { locale: e = u.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (h.Z.isFetchingStickerPacks || h.Z.hasLoadedStickerPacks) return;
        s.Z.wait(() => {
            s.Z.dispatch({ type: 'STICKER_PACKS_FETCH_START' });
        });
        let {
            body: { sticker_packs: t }
        } = await a.tn.get({
            url: m.ANM.STICKER_PACKS,
            query: { locale: e },
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'STICKER_PACKS_FETCH_SUCCESS',
            packs: t
        });
    },
    I = async (e) => {
        let { body: t } = await a.tn.get({
            url: m.ANM.STICKER(e),
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'STICKER_FETCH_SUCCESS',
            sticker: t
        });
    },
    T = async (e) => {
        let { body: t } = await a.tn.get({
            url: m.ANM.GUILD_STICKER_PACKS(e),
            rejectWithError: !1
        });
        s.Z.dispatch({
            type: 'GUILD_STICKERS_FETCH_SUCCESS',
            guildId: e,
            stickers: t.map((e) =>
                null != e.user
                    ? {
                          ...e,
                          user: new d.Z(e.user)
                      }
                    : e
            )
        });
    },
    b = async (e) => {
        await a.tn.del({
            url: m.ANM.GUILD_STICKER(e.guild_id, e.id),
            rejectWithError: !1
        });
    },
    S = async (e, t) => {
        let n = await a.tn.post({
            url: m.ANM.GUILD_STICKER_PACKS(e),
            body: t,
            rejectWithError: !1
        });
        return (
            s.Z.dispatch({
                type: 'GUILD_STICKERS_CREATE_SUCCESS',
                guildId: e,
                sticker: {
                    ...n.body,
                    user: _.default.getCurrentUser()
                }
            }),
            n.body
        );
    },
    A = async (e, t, n) =>
        (
            await a.tn.patch({
                url: m.ANM.GUILD_STICKER(e, t),
                body: n,
                rejectWithError: !1
            })
        ).body;
function N(e, t, n) {
    s.Z.dispatch({
        type: 'ADD_STICKER_PREVIEW',
        channelId: e,
        sticker: t,
        draftType: n
    });
}
function C(e, t) {
    s.Z.dispatch({
        type: 'CLEAR_STICKER_PREVIEW',
        channelId: e,
        draftType: t
    });
}
function R(e) {
    return f.Z.totalUnavailableGuilds > 0 || !l.Z.isConnected() ? e : e.filter((e) => null != h.Z.getStickerById(e));
}
function O(e) {
    c.DZ.updateAsync(
        'favoriteStickers',
        (t) =>
            ((t.stickerIds = R(t.stickerIds)), r().size(t.stickerIds) >= g.oX)
                ? (o.Z.show({
                      title: E.intl.string(E.t['+XYXtb']),
                      body: E.intl.formatToPlainString(E.t.JaIyFh, { count: g.oX })
                  }),
                  !1)
                : !t.stickerIds.includes(e) && void t.stickerIds.push(e),
        g.fy.INFREQUENT_USER_ACTION
    );
}
function D(e) {
    c.DZ.updateAsync(
        'favoriteStickers',
        (t) => {
            (t.stickerIds = t.stickerIds.filter((t) => t !== e)), (t.stickerIds = R(t.stickerIds));
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
