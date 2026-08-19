"use strict";
n.d(t, { mo: () => d }), n(321073);
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(335871),
    d =
        (((i = {})[(i.UNSPECIFIED_DISCLOSURE = 0)] = "UNSPECIFIED_DISCLOSURE"),
        (i[(i.IP_LOCATION = 1)] = "IP_LOCATION"),
        (i[(i.DISPLAYS_ADVERTISEMENTS = 2)] = "DISPLAYS_ADVERTISEMENTS"),
        (i[(i.PARTNER_SDK_DATA_SHARING_MESSAGE = 3)] = "PARTNER_SDK_DATA_SHARING_MESSAGE"),
        i);
class c extends l.G {
    constructor() {
        super("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", [
            { no: 1, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
            { no: 2, name: "platform_name", kind: "scalar", T: 9 },
            { no: 3, name: "platform_username", kind: "scalar", T: 9 },
            { no: 4, name: "version", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { metadata: {}, platformName: "", platformUsername: "", version: "0" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.metadata, e, n);
                    break;
                case 2:
                    a.platformName = e.string();
                    break;
                case 3:
                    a.platformUsername = e.string();
                    break;
                case 4:
                    a.version = e.fixed64().toString();
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
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata",
                    );
            }
        }
        e[a ?? ""] = s ?? "";
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.metadata))
            t.tag(1, r.O0.LengthDelimited)
                .fork()
                .tag(1, r.O0.LengthDelimited)
                .string(n)
                .tag(2, r.O0.LengthDelimited)
                .string(e.metadata[n])
                .join();
        "" !== e.platformName && t.tag(2, r.O0.LengthDelimited).string(e.platformName),
            "" !== e.platformUsername && t.tag(3, r.O0.LengthDelimited).string(e.platformUsername),
            "0" !== e.version && t.tag(4, r.O0.Bit64).fixed64(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new c();
class u extends l.G {
    constructor() {
        super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", [
            {
                no: 1,
                name: "disclosure_type",
                kind: "enum",
                T: () => ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", d],
            },
            { no: 2, name: "acked_at", kind: "message", T: () => o.D },
        ]);
    }
    create(e) {
        let t = { disclosureType: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.disclosureType = e.int32();
                    break;
                case 2:
                    a.ackedAt = o.D.internalBinaryRead(e, e.uint32(), n, a.ackedAt);
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
        0 !== e.disclosureType && t.tag(1, r.O0.Varint).int32(e.disclosureType),
            e.ackedAt && o.D.internalBinaryWrite(e.ackedAt, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new u();
class E extends l.G {
    constructor() {
        super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", [
            { no: 1, name: "acked_disclosures", kind: "message", repeat: 1, T: () => _ },
        ]);
    }
    create(e) {
        let t = { ackedDisclosures: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.ackedDisclosures.push(_.internalBinaryRead(e, e.uint32(), n));
            else {
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
        for (let i = 0; i < e.ackedDisclosures.length; i++)
            _.internalBinaryWrite(e.ackedDisclosures[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
new E();
