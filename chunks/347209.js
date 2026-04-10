"use strict";
n.d(t, { A: () => l });
var r = n(439372),
    i = n(967198),
    s = n(17591),
    a = n(307731);
class o extends r.A {
    actions = { EMOJI_INTERACTION_INITIATED: this.handleInteraction };
    handleInteraction(e) {
        let { interaction: t } = e;
        if ([a.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(t)) {
            let e = i.A.getGuildId();
            (0, s.V)(e);
        }
    }
}
let l = new o();
