"use strict";
n.d(t, { mo: () => u }), n(321073);
var r,
    i = n(852015),
    s = n(144367),
    a = n(428420),
    o = n(324281),
    l = n(335871),
    u =
        (((r = {})[(r.UNSPECIFIED_DISCLOSURE = 0)] = "UNSPECIFIED_DISCLOSURE"),
        (r[(r.IP_LOCATION = 1)] = "IP_LOCATION"),
        (r[(r.DISPLAYS_ADVERTISEMENTS = 2)] = "DISPLAYS_ADVERTISEMENTS"),
        (r[(r.PARTNER_SDK_DATA_SHARING_MESSAGE = 3)] = "PARTNER_SDK_DATA_SHARING_MESSAGE"),
        r);
class d extends o.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(s.metadata, e, n);
                    break;
                case 2:
                    s.platformName = e.string();
                    break;
                case 3:
                    s.platformUsername = e.string();
                    break;
                case 4:
                    s.version = e.fixed64().toString();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata",
                    );
            }
        }
        e[s ?? ""] = a ?? "";
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.metadata))
            t.tag(1, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.LengthDelimited)
                .string(e.metadata[n])
                .join();
        "" !== e.platformName && t.tag(2, i.O0.LengthDelimited).string(e.platformName),
            "" !== e.platformUsername && t.tag(3, i.O0.LengthDelimited).string(e.platformUsername),
            "0" !== e.version && t.tag(4, i.O0.Bit64).fixed64(e.version);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new d();
class c extends o.G {
    constructor() {
        super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", [
            {
                no: 1,
                name: "disclosure_type",
                kind: "enum",
                T: () => ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", u],
            },
            { no: 2, name: "acked_at", kind: "message", T: () => l.D },
        ]);
    }
    create(e) {
        let t = { disclosureType: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.disclosureType = e.int32();
                    break;
                case 2:
                    s.ackedAt = l.D.internalBinaryRead(e, e.uint32(), n, s.ackedAt);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.disclosureType && t.tag(1, i.O0.Varint).int32(e.disclosureType),
            e.ackedAt && l.D.internalBinaryWrite(e.ackedAt, t.tag(2, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let _ = new c();
class f extends o.G {
    constructor() {
        super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", [
            { no: 1, name: "acked_disclosures", kind: "message", repeat: 1, T: () => _ },
        ]);
    }
    create(e) {
        let t = { ackedDisclosures: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) s.ackedDisclosures.push(_.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.ackedDisclosures.length; r++)
            _.internalBinaryWrite(e.ackedDisclosures[r], t.tag(1, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
new f();
