n.d(t, { k: () => E, p: () => A }), n(321073);
var i = n(280450),
    r = n(763827),
    a = n(174459),
    s = n(935208),
    l = n(652215);
let o = (0, n(945810).mj)({
        name: "2026-06-clickstream-analytics",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = new Map(),
    c = -1,
    u = !1;
function _() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (e) {
        let e = s.default.extractTimestamp(i.default.getId());
        e !== c && (A(!1), (c = e)),
            (u = (function () {
                let { enabled: e } = o.getConfig({ location: "clickstream" });
                return e;
            })());
    }
    return u;
}
function E(e, t) {
    _() && (d.has(e) || d.set(e, []), d.get(e)?.push({ timestamp: new Date(), rtc_state: r.A.getState(), ...t }));
}
function A() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!_(e)) return void d.clear();
    for (let [e, t] of d)
        a.default.track(
            e,
            (function (e, t) {
                let n = new Date();
                switch (e) {
                    case l.HAw.GUILD_VIEWED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            guild_ids: t.map((e) => e.guild_id),
                        };
                    case l.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            tab_opened: t.map((e) => e.tab_opened),
                            num_friends: t.map((e) => e.num_friends),
                            now_playing_visible: t.map((e) => e.now_playing_visible),
                            now_playing_num_cards: t.map((e) => e.now_playing_num_cards),
                        };
                    case l.HAw.CHANNEL_OPENED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            channel_ids: t.map((e) => e.channel_id),
                            channel_types: t.map((e) => e.channel_type),
                        };
                    case l.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
                        return {
                            time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
                            rtc_states: t.map((e) => e.rtc_state),
                            load_duration_ms: t.map((e) => e.load_duration_ms),
                            were_messages_cached: t.map((e) => e.were_messages_cached),
                            is_first_load: t.map((e) => e.is_first_load),
                        };
                    default:
                        throw Error(`getClickstreamDrainEvent: Unknown event: ${e}`);
                }
            })(e, t),
        );
    d.clear();
}
