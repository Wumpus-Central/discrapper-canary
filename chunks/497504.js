n.d(t, { h: () => l }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852);
class s extends o.C {
    create(e) {
        let t = {
            header: "",
            body: "",
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
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
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
        "" !== e.header && t.tag(1, r.TD.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.TD.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, r.TD.LengthDelimited).string(e.assetUrl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIconCoachmark", [
            {
                no: 1,
                name: "header",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "body",
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
