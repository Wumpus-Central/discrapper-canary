n.d(t, { $: () => _, d: () => c });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(406935),
    d = n(991023),
    c =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.OPEN_MARKETING_PAGE = 1)] = "OPEN_MARKETING_PAGE"),
        (i[(i.OPEN_TIER_2_PAYMENT_MODAL = 2)] = "OPEN_TIER_2_PAYMENT_MODAL"),
        (i[(i.OPEN_TIER_1_PAYMENT_MODAL = 3)] = "OPEN_TIER_1_PAYMENT_MODAL"),
        (i[(i.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4)] =
            "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER"),
        (i[(i.OPEN_PLAN_SELECTION_MODAL = 5)] = "OPEN_PLAN_SELECTION_MODAL"),
        (i[(i.OPEN_PREMIUM_GROUP_PAYMENT_MODAL = 6)] = "OPEN_PREMIUM_GROUP_PAYMENT_MODAL"),
        (i[(i.OPEN_SOCIAL_LAYER_STOREFRONT = 7)] = "OPEN_SOCIAL_LAYER_STOREFRONT"),
        i);
class u extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.CTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", c, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => d.X },
            { no: 5, name: "navigable_storefront_application_id", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
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
                    a.copy = e.string();
                    break;
                case 2:
                    a.buttonAction = e.int32();
                    break;
                case 3:
                    a.deeplinkSection = e.string();
                    break;
                case 4:
                    a.copyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.copyLocalized);
                    break;
                case 5:
                    a.navigableStorefrontApplicationId = o.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.navigableStorefrontApplicationId,
                    );
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
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                d.X.internalBinaryWrite(e.copyLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                o.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(5, r.O0.LengthDelimited).fork(), n)
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new u();
