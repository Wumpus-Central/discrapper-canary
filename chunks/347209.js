n.d(t, { A: () => o });
var i = n(439372),
    r = n(967198),
    a = n(17591),
    s = n(307731);
class l extends i.A {
    actions = { EMOJI_INTERACTION_INITIATED: this.handleInteraction };
    handleInteraction(e) {
        let { interaction: t } = e;
        if ([s.EmojiInteractionPoint.EmojiButtonMouseEntered].includes(t)) {
            let e = r.A.getGuildId();
            (0, a.V)(e);
        }
    }
}
let o = new l();
