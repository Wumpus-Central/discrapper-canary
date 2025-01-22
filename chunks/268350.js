r.d(n, {
    $p: function () {
        return I;
    },
    FQ: function () {
        return b;
    },
    Il: function () {
        return T;
    },
    Jf: function () {
        return N;
    },
    SA: function () {
        return L;
    },
    Um: function () {
        return A;
    },
    eu: function () {
        return R;
    },
    hW: function () {
        return x;
    },
    lY: function () {
        return C;
    },
    pk: function () {
        return S;
    },
    qB: function () {
        return O;
    }
});
var i = r(653041);
var a = r(392711),
    o = r.n(a),
    s = r(544891),
    l = r(570140),
    u = r(668781),
    c = r(38618),
    d = r(706454),
    f = r(675478),
    p = r(598077),
    h = r(486472),
    _ = r(594174),
    m = r(73346),
    g = r(926491),
    E = r(981631),
    v = r(526761),
    y = r(388032);
let b = async (e, n) => {
        let { body: r } = await (0, m.Kb)({
            url: E.ANM.STICKER_PACK(e),
            rejectWithError: !1
        });
        return (
            l.Z.dispatch({
                type: 'STICKER_PACK_FETCH_SUCCESS',
                packId: e,
                pack: r,
                ingestStickers: n
            }),
            r
        );
    },
    I = async function () {
        let { locale: e = d.default.locale } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (g.Z.isFetchingStickerPacks || g.Z.hasLoadedStickerPacks) return;
        l.Z.wait(() => {
            l.Z.dispatch({ type: 'STICKER_PACKS_FETCH_START' });
        });
        let {
            body: { sticker_packs: n }
        } = await s.tn.get({
            url: E.ANM.STICKER_PACKS,
            query: { locale: e },
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'STICKER_PACKS_FETCH_SUCCESS',
            packs: n
        });
    },
    T = async (e) => {
        let { body: n } = await s.tn.get({
            url: E.ANM.STICKER(e),
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'STICKER_FETCH_SUCCESS',
            sticker: n
        });
    },
    S = async (e) => {
        let { body: n } = await s.tn.get({
            url: E.ANM.GUILD_STICKER_PACKS(e),
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'GUILD_STICKERS_FETCH_SUCCESS',
            guildId: e,
            stickers: n.map((e) =>
                null != e.user
                    ? {
                          ...e,
                          user: new p.Z(e.user)
                      }
                    : e
            )
        });
    },
    A = async (e) => {
        await s.tn.del({
            url: E.ANM.GUILD_STICKER(e.guild_id, e.id),
            rejectWithError: !1
        });
    },
    C = async (e, n) => {
        let r = await s.tn.post({
            url: E.ANM.GUILD_STICKER_PACKS(e),
            body: n,
            rejectWithError: !1
        });
        return (
            l.Z.dispatch({
                type: 'GUILD_STICKERS_CREATE_SUCCESS',
                guildId: e,
                sticker: {
                    ...r.body,
                    user: _.default.getCurrentUser()
                }
            }),
            r.body
        );
    },
    N = async (e, n, r) =>
        (
            await s.tn.patch({
                url: E.ANM.GUILD_STICKER(e, n),
                body: r,
                rejectWithError: !1
            })
        ).body;
function R(e, n, r) {
    l.Z.dispatch({
        type: 'ADD_STICKER_PREVIEW',
        channelId: e,
        sticker: n,
        draftType: r
    });
}
function O(e, n) {
    l.Z.dispatch({
        type: 'CLEAR_STICKER_PREVIEW',
        channelId: e,
        draftType: n
    });
}
function D(e) {
    return h.Z.totalUnavailableGuilds > 0 || !c.Z.isConnected() ? e : e.filter((e) => null != g.Z.getStickerById(e));
}
function L(e) {
    f.DZ.updateAsync(
        'favoriteStickers',
        (n) =>
            ((n.stickerIds = D(n.stickerIds)), o().size(n.stickerIds) >= v.oX)
                ? (u.Z.show({
                      title: y.intl.string(y.t['+XYXtb']),
                      body: y.intl.formatToPlainString(y.t.JaIyFh, { count: v.oX })
                  }),
                  !1)
                : !n.stickerIds.includes(e) && void n.stickerIds.push(e),
        v.fy.INFREQUENT_USER_ACTION
    );
}
function x(e) {
    f.DZ.updateAsync(
        'favoriteStickers',
        (n) => {
            (n.stickerIds = n.stickerIds.filter((n) => n !== e)), (n.stickerIds = D(n.stickerIds));
        },
        v.fy.INFREQUENT_USER_ACTION
    );
}
