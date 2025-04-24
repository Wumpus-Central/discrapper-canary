n.d(t, {
    Z: () => o,
    _: () => a
});
var l = n(726542),
    r = n(973616),
    i = n(388032);
let a = 'twitch:';
class o extends r.ZP {
    getIconURL() {
        return l.Z.get('twitch').icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = ''.concat(a).concat(e.url)), (this.name = i.intl.string(i.t.JIPtgo));
    }
}
