"use strict";
n.d(t, { C: () => r, z: () => s });
var i,
    r =
        (((i = {}).Kill = "cs2_kill"),
        (i.MultiKill = "cs2_multi_kill"),
        (i.Ace = "cs2_ace"),
        (i.Assist = "cs2_assist"),
        (i.Death = "cs2_death"),
        (i.BombPlant = "cs2_bomb_plant"),
        (i.BombDefused = "cs2_bomb_defused"),
        (i.BombExploded = "cs2_bomb_exploded"),
        (i.RoundStart = "cs2_round_start"),
        (i.RoundEnd = "cs2_round_end"),
        (i.PlayStateChange = "cs2_play_state_change"),
        (i.RoundWinningKill = "cs2_round_winning_kill"),
        (i.GameWinningKill = "cs2_game_winning_kill"),
        i);
let a = new Set(Object.values(r));
function s(e) {
    return null != e.eventName && a.has(e.eventName);
}
