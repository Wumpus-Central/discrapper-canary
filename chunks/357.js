n.d(t, { Z: () => l });
var r = n(581282),
    i = n(647943),
    a = n(8853),
    o = n(81825);
function s(e, t, n) {
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
class l extends o.Z {
    static createFromServer(e) {
        let t = new TextDecoder("utf-8", { ignoreBOM: !0 });
        return new l({
            id: e.id,
            componentType: e.component_type,
            properties: a.t.fromBinary((0, r.c)(e.properties), {
                readUnknownField: !0,
                readerFactory: (e) => new i.o(e, t),
            }),
            promotionId: e.promotion_id,
        });
    }
    constructor(e) {
        super(),
            s(this, "id", void 0),
            s(this, "componentType", void 0),
            s(this, "properties", void 0),
            s(this, "promotionId", void 0),
            (this.id = e.id),
            (this.componentType = e.componentType),
            (this.properties = e.properties),
            (this.promotionId = e.promotionId);
    }
}
