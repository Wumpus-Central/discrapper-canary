n.d(t, { A: () => T });
var i = n(17928),
    r = n(73153),
    a = n(710195),
    s = n(490035);
n(321073);
var l = n(770335);
function o(e) {
    let t = [],
        n = {},
        i = {};
    for (let r of e) if (null == n[r.id]) for (let e of (t.push(r), (n[r.id] = r), r.emojis)) i[e.id] = r.id;
    return { packs: t, packsById: n, packIdByEmojiId: i };
}
let d = { packs: [], packsById: {}, packIdByEmojiId: {}, fetchState: "NOT_FETCHED" },
    c = d,
    u = [],
    _ = !1,
    E = u,
    A = new Set();
function h() {
    return s.G.getConfig({ location: "emoji_pack_store" }, { autoTrackExposure: !1 }).enabled;
}
function f() {
    let e = _ ? c.packs.flatMap((e) => (e.available ? e.emojis.filter((e) => e.available) : [])) : u;
    A = new Set((E = e.length > 0 ? e : u).map((e) => e.id));
}
function I() {
    let e = h();
    return e !== _ && ((_ = e), f(), !0);
}
class p extends i.Ay.PersistedStore {
    static displayName = "EmojiPackStore";
    static persistKey = "EmojiPackStore";
    initialize(e) {
        ((c = { ...o(Array.isArray(e?.packs) ? e.packs : []), fetchState: "NOT_FETCHED" }),
            (_ = h()),
            f(),
            this.syncWith([a.A], I));
    }
    getState() {
        return { packs: c.packs };
    }
    getFetchState() {
        return c.fetchState;
    }
    getPacks() {
        return c.packs;
    }
    getIndexablePackEmojis() {
        return E;
    }
    isPackEmojiUsable(e) {
        return A.has(e.id);
    }
    getPack(e) {
        return c.packsById[e];
    }
    getPackForEmoji(e) {
        let t = c.packIdByEmojiId[e];
        return null != t ? c.packsById[t] : void 0;
    }
    getEmoji(e) {
        return this.getPackForEmoji(e)?.emojis.find((t) => t.id === e);
    }
}
let T = new p(r.h, {
    LOGOUT: function () {
        ((c = d), f());
    },
    EMOJI_PACKS_FETCH_START: function () {
        if ("FETCHING" === c.fetchState) return !1;
        c = { ...c, fetchState: "FETCHING" };
    },
    EMOJI_PACKS_FETCH_SUCCESS: function (e) {
        let { packs: t } = e;
        ((c = {
            ...o(
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
                                type: l.i.PACK,
                            }
                        );
                    }),
                })),
            ),
            fetchState: "FETCHED",
        }),
            f());
    },
    EMOJI_PACKS_FETCH_FAIL: function () {
        c = { ...c, fetchState: "FAILED" };
    },
});
