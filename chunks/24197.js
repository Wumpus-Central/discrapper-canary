n(321073);
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(505816),
    o = n(453360),
    d = n(308588),
    c = n(991023),
    u =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.MARKETING_PAGE = 1)] = "MARKETING_PAGE"),
        (i[(i.NITRO_HOME = 2)] = "NITRO_HOME"),
        i);
class _ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.NitroPerkCard", [
            { no: 1, name: "header_localized", kind: "message", T: () => c.X },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "description_localized", kind: "message", T: () => c.X },
            { no: 4, name: "description", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => d.$J },
            { no: 6, name: "background", kind: "message", T: () => o.i },
            { no: 7, name: "foreground", kind: "message", T: () => o.i },
            { no: 8, name: "third_party_logo", kind: "message", T: () => o.i },
            {
                no: 9,
                name: "placements",
                kind: "enum",
                repeat: 1,
                T: () => [
                    "discord_protos.premium_marketing.v1.NitroPerkCardPlacement",
                    u,
                    "NITRO_PERK_CARD_PLACEMENT_",
                ],
            },
            { no: 10, name: "position", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { header: "", description: "", placements: [], position: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.headerLocalized = c.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 2:
                    a.header = e.string();
                    break;
                case 3:
                    a.descriptionLocalized = c.X.internalBinaryRead(e, e.uint32(), n, a.descriptionLocalized);
                    break;
                case 4:
                    a.description = e.string();
                    break;
                case 5:
                    a.button = d.$J.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.background = o.i.internalBinaryRead(e, e.uint32(), n, a.background);
                    break;
                case 7:
                    a.foreground = o.i.internalBinaryRead(e, e.uint32(), n, a.foreground);
                    break;
                case 8:
                    a.thirdPartyLogo = o.i.internalBinaryRead(e, e.uint32(), n, a.thirdPartyLogo);
                    break;
                case 9:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) a.placements.push(e.int32());
                    else a.placements.push(e.int32());
                    break;
                case 10:
                    a.position = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.headerLocalized &&
                c.X.internalBinaryWrite(e.headerLocalized, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            e.descriptionLocalized &&
                c.X.internalBinaryWrite(e.descriptionLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.description && t.tag(4, r.O0.LengthDelimited).string(e.description),
            e.button && d.$J.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.background && o.i.internalBinaryWrite(e.background, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.foreground && o.i.internalBinaryWrite(e.foreground, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.thirdPartyLogo &&
                o.i.internalBinaryWrite(e.thirdPartyLogo, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.placements.length)
        ) {
            t.tag(9, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.placements.length; n++) t.int32(e.placements[n]);
            t.join();
        }
        0 !== e.position && t.tag(10, r.O0.Varint).uint32(e.position);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let E = new _();
n.d(t, {}, { U: u, p: E });
