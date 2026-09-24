n.d(t, { I: () => r, j: () => s });
var i,
    r =
        (((i = {}).Kill = "dota2_kill"),
        (i.MultiKill = "dota2_multi_kill"),
        (i.Assist = "dota2_assist"),
        (i.Death = "dota2_death"),
        (i.RoshanKill = "dota2_roshan_kill"),
        (i.GameEnd = "dota2_game_end"),
        (i.InMatchChange = "dota2_in_match_change"),
        (i.PlayStateChange = "dota2_play_state_change"),
        i);
let a = new Set(Object.values(r));
function s(e) {
    return null != e.eventName && a.has(e.eventName);
}
