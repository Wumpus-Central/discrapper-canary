n.d(t, { p: () => l }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852);
class s extends o.C {
    create(e) {
        let t = { bodyKey: "" };
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
            if (1 === t) a.bodyKey = e.string();
            else {
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
        "" !== e.bodyKey && t.tag(1, r.TD.LengthDelimited).string(e.bodyKey);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            {
                no: 1,
                name: "body_key",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let l = new s();
