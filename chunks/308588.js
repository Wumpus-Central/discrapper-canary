var i,
    r,
    a = n(852015),
    s = n(144367),
    l = n(428420),
    o = n(505816),
    d = n(406935),
    c = n(991023),
    u =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.OPEN_MARKETING_PAGE = 1)] = "OPEN_MARKETING_PAGE"),
        (i[(i.OPEN_TIER_2_PAYMENT_MODAL = 2)] = "OPEN_TIER_2_PAYMENT_MODAL"),
        (i[(i.OPEN_TIER_1_PAYMENT_MODAL = 3)] = "OPEN_TIER_1_PAYMENT_MODAL"),
        (i[(i.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4)] =
            "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER"),
        (i[(i.OPEN_PLAN_SELECTION_MODAL = 5)] = "OPEN_PLAN_SELECTION_MODAL"),
        (i[(i.OPEN_PREMIUM_GROUP_PAYMENT_MODAL = 6)] = "OPEN_PREMIUM_GROUP_PAYMENT_MODAL"),
        (i[(i.OPEN_SOCIAL_LAYER_STOREFRONT = 7)] = "OPEN_SOCIAL_LAYER_STOREFRONT"),
        (i[(i.OPEN_GUILD_BOOST_CHECKOUT = 8)] = "OPEN_GUILD_BOOST_CHECKOUT"),
        (i[(i.OPEN_SHOP = 9)] = "OPEN_SHOP"),
        (i[(i.OPEN_GIFT_MODAL = 10)] = "OPEN_GIFT_MODAL"),
        i),
    _ =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PLAN_SELECTION = 1)] = "PLAN_SELECTION"),
        (r[(r.TIER_2 = 2)] = "TIER_2"),
        r);
class E extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.CTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", u, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => c.X },
            { no: 5, name: "navigable_storefront_application_id", kind: "message", T: () => d.ol },
            { no: 6, name: "shop_collection_id", kind: "message", T: () => d.ol },
            {
                no: 7,
                name: "gift_modal_destination",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.GiftModalDestination", _, "GIFT_MODAL_DESTINATION_"],
            },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "", giftModalDestination: 0 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.copy = e.string();
                    break;
                case 2:
                    r.buttonAction = e.int32();
                    break;
                case 3:
                    r.deeplinkSection = e.string();
                    break;
                case 4:
                    r.copyLocalized = c.X.internalBinaryRead(e, e.uint32(), n, r.copyLocalized);
                    break;
                case 5:
                    r.navigableStorefrontApplicationId = d.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.navigableStorefrontApplicationId,
                    );
                    break;
                case 6:
                    r.shopCollectionId = d.ol.internalBinaryRead(e, e.uint32(), n, r.shopCollectionId);
                    break;
                case 7:
                    r.giftModalDestination = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.copy && t.tag(1, a.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, a.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                c.X.internalBinaryWrite(e.copyLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                d.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(5, a.O0.LengthDelimited).fork(), n)
                    .join(),
            e.shopCollectionId &&
                d.ol.internalBinaryWrite(e.shopCollectionId, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.giftModalDestination && t.tag(7, a.O0.Varint).int32(e.giftModalDestination));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let A = new E();
n.d(t, {}, { $J: A, We: _, dz: u });
