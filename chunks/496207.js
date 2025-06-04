n.d(t, { Z: () => c }), n(388685);
var r = n(147913),
    i = n(914010),
    a = n(558217),
    o = n(185923);
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
        if ([o.qR.EmojiButtonMouseEntered].includes(t)) {
            let e = i.Z.getGuildId();
            (0, a.O)(e);
        }
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { EMOJI_INTERACTION_INITIATED: this.handleInteraction });
    }
}
let c = new l();
