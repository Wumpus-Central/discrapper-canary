n.d(t, {
    Z: () => o,
    _: () => r
});
var l = n(726542),
    i = n(973616),
    a = n(388032);
let r = 'twitch:';
class o extends i.ZP {
    getIconURL() {
        return l.Z.get('twitch').icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = ''.concat(r).concat(e.url)), (this.name = a.intl.string(a.t.JIPtgo));
    }
}
