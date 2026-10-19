n.d(t, { A: () => u });
var i = n(17928),
    s = n(73153);
n(321073);
var r = n(770335);
function l(e) {
    let t = [],
        n = {},
        i = {};
    for (let s of e) if (null == n[s.id]) for (let e of (t.push(s), (n[s.id] = s), s.emojis)) i[e.id] = s.id;
    return { packs: t, packsById: n, packIdByEmojiId: i };
}
let a = { packs: [], packsById: {}, packIdByEmojiId: {}, fetchState: "NOT_FETCHED" },
    o = a;
class c extends i.Ay.PersistedStore {
    static displayName = "EmojiPackStore";
    static persistKey = "EmojiPackStore";
    initialize(e) {
        o = { ...l(Array.isArray(e?.packs) ? e.packs : []), fetchState: "NOT_FETCHED" };
    }
    getState() {
        return { packs: o.packs };
    }
    getFetchState() {
        return o.fetchState;
    }
    getPacks() {
        return o.packs;
    }
    getPack(e) {
        return o.packsById[e];
    }
    getPackForEmoji(e) {
        let t = o.packIdByEmojiId[e];
        return null != t ? o.packsById[t] : void 0;
    }
    getEmoji(e) {
        return this.getPackForEmoji(e)?.emojis.find((t) => t.id === e);
    }
}
let u = new c(s.h, {
    LOGOUT: function () {
        o = a;
    },
    EMOJI_PACKS_FETCH_START: function () {
        if ("FETCHING" === o.fetchState) return !1;
        o = { ...o, fetchState: "FETCHING" };
    },
    EMOJI_PACKS_FETCH_SUCCESS: function (e) {
        let { packs: t } = e;
        o = {
            ...l(
                t.map((e) => ({
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    available: e.available,
                    representativeEmojiId: e.representative_emoji_id,
                    emojis: e.emojis.map((t) => {
                        var n;
                        return (
                            (n = e.id),
                            {
                                id: t.id,
                                packId: n,
                                name: t.name,
                                animated: t.animated,
                                require_colons: t.require_colons,
                                available: t.available,
                                managed: t.managed,
                                roles: t.roles,
                                type: r.i.PACK,
                            }
                        );
                    }),
                })),
            ),
            fetchState: "FETCHED",
        };
    },
    EMOJI_PACKS_FETCH_FAIL: function () {
        o = { ...o, fetchState: "FAILED" };
    },
});
