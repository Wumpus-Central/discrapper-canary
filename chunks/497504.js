n.d(t, { h: () => l }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852);
class s extends o.C {
    create(e) {
        let t = {
            headerKey: "",
            bodyKey: "",
            assetUrl: "",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.headerKey = e.string();
                    break;
                case 2:
                    a.bodyKey = e.string();
                    break;
                case 3:
                    a.assetUrl = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.headerKey && t.tag(1, r.TD.LengthDelimited).string(e.headerKey),
            "" !== e.bodyKey && t.tag(2, r.TD.LengthDelimited).string(e.bodyKey),
            "" !== e.assetUrl && t.tag(3, r.TD.LengthDelimited).string(e.assetUrl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIconCoachmark", [
            {
                no: 1,
                name: "header_key",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "body_key",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "asset_url",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let l = new s();
