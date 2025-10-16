n.d(t, { Z: () => s });
var r = n(581282),
    i = n(8853),
    a = n(81825);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s extends a.Z {
    static createFromServer(e) {
        return new s({
            id: e.id,
            componentType: e.component_type,
            properties: i.t.fromBinary((0, r.c)(e.properties)),
        });
    }
    constructor(e) {
        super(),
            o(this, "id", void 0),
            o(this, "componentType", void 0),
            o(this, "properties", void 0),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties);
    }
}
