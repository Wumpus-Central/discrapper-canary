n.d(t, { Z: () => c }), n(47120);
var r = n(147913),
    i = n(914010),
    o = n(558217),
    a = n(185923);
function s(e, t, n) {
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
class l extends r.Z {
    handleInteraction(e) {
        let { interaction: t } = e;
        if ([a.qR.EmojiButtonMouseEntered].includes(t)) {
            let e = i.Z.getGuildId();
            (0, o.O)(e);
        }
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
let c = new l();
