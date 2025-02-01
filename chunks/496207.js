n.d(t, { Z: () => u }), n(47120);
var i = n(147913),
    r = n(914010),
    a = n(558217),
    s = n(185923);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class l extends i.Z {
    handleInteraction(e) {
        let { interaction: t } = e;
        if ([s.qR.EmojiButtonMouseEntered].includes(t)) {
            let e = r.Z.getGuildId();
            (0, a.O)(e);
        }
    }
    constructor(...e) {
        super(...e), o(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
let u = new l();
