n.d(t, {
    Z: () => o,
    _: () => a
});
var i = n(726542),
    l = n(973616),
    r = n(388032);
let a = 'twitch:';
class o extends l.ZP {
    getIconURL() {
        return i.Z.get('twitch').icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = ''.concat(a).concat(e.url)), (this.name = r.intl.string(r.t.JIPtgo));
    }
}
