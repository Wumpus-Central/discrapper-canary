n.d(t, { h: () => _ });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(330287),
    o = n(991023),
    d = n(308588),
    c = n(453360);
class u extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsBanner", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "button", kind: "message", T: () => d.$ },
            { no: 5, name: "header_localized", kind: "message", T: () => o.X },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
            { no: 7, name: "help_article", kind: "message", T: () => l.O },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.button = d.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 5:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 6:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, u);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.button && d.$.internalBinaryWrite(e.button, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(7, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let _ = new u();
