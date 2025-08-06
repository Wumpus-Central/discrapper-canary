n.d(t, {
    H: () => o,
    Z: () => a,
});
var r = n(726542),
    i = n(973616);
let o = "xbox:";
class a extends i.ZP {
    getIconURL() {
        return r.Z.get("xbox").icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = "".concat(o).concat(e.name)), (this.name = e.name);
    }
}
