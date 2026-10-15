n.d(t, { A: () => c });
var i = n(17928),
    s = n(73153);
n(321073);
var l = n(770335);
let r = { packs: [], packsById: {}, packIdByEmojiId: {}, fetchState: "NOT_FETCHED" },
    a = r;
class o extends i.Ay.Store {
    static displayName = "EmojiPackStore";
    getFetchState() {
        return a.fetchState;
    }
    getPacks() {
        return a.packs;
    }
    getPack(e) {
        return a.packsById[e];
    }
    getPackForEmoji(e) {
        let t = a.packIdByEmojiId[e];
        return null != t ? a.packsById[t] : void 0;
    }
    getEmoji(e) {
        return this.getPackForEmoji(e)?.emojis.find((t) => t.id === e);
    }
}
let c = new o(s.h, {
    LOGOUT: function () {
        a = r;
    },
    EMOJI_PACKS_FETCH_START: function () {
        if ("FETCHING" === a.fetchState) return !1;
        a = { ...a, fetchState: "FETCHING" };
    },
    EMOJI_PACKS_FETCH_SUCCESS: function (e) {
        let { packs: t } = e;
        a = {
            ...(function (e) {
                let t = [],
                    n = {},
                    i = {};
                for (let s of e) {
                    if (null != n[s.id]) continue;
                    let e = {
                        id: s.id,
                        name: s.name,
                        description: s.description,
                        available: s.available,
                        representativeEmojiId: s.representative_emoji_id,
                        emojis: s.emojis.map((e) => {
                            var t;
                            return (
                                (t = s.id),
                                {
                                    id: e.id,
                                    packId: t,
                                    name: e.name,
                                    animated: e.animated,
                                    require_colons: e.require_colons,
                                    available: e.available,
                                    managed: e.managed,
                                    roles: e.roles,
                                    type: l.i.PACK,
                                }
                            );
                        }),
                    };
                    for (let s of (t.push(e), (n[e.id] = e), e.emojis)) i[s.id] = e.id;
                }
                return { packs: t, packsById: n, packIdByEmojiId: i };
            })(t),
            fetchState: "FETCHED",
        };
    },
    EMOJI_PACKS_FETCH_FAIL: function () {
        a = { ...a, fetchState: "FAILED" };
    },
});
