n.d(t, { m: () => O }), n(734808), n(896048), n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(536578),
    l = n(641558),
    c = n(978926),
    u = n(959129),
    d = n(67948),
    f = n(978656),
    p = n(720119),
    _ = n(342371),
    h = n(149613),
    m = n(297204),
    g = n(670474),
    E = n(108094),
    b = n(232582);
class y extends s.G {
    create(e) {
        let t = {
            properties: { oneofKind: void 0 },
            contentIdentifier: "",
        };
        return (
            globalThis.Object.defineProperty(t, a.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.properties = {
                        oneofKind: "placeholder",
                        placeholder: e.string(),
                    };
                    break;
                case 2:
                    a.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: b.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    a.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: E.x.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab),
                    };
                    break;
                case 5:
                    a.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: g.C.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    a.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: m.Y.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    a.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: h.L.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    a.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: _.o.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon),
                    };
                    break;
                case 9:
                    a.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: p.l.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    a.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: f.s.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    a.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: d.E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    a.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: u.v.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    a.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: c.s.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    a.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: l.m.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    a.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: o.G.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabTooltip),
                    };
                    break;
                case 3:
                    a.contentIdentifier = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let y = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, y);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "placeholder" === e.properties.oneofKind && t.tag(1, r.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                b.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                E.x.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                g.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                m.Y.internalBinaryWrite(
                    e.properties.paymentModalBanner,
                    t.tag(6, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                h.L.internalBinaryWrite(
                    e.properties.mobileBottomSheet,
                    t.tag(7, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftIcon" === e.properties.oneofKind &&
                _.o.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                p.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                f.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                d.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                u.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                c.s
                    .internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                l.m
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                o.G.internalBinaryWrite(
                    e.properties.premiumTabTooltip,
                    t.tag(15, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "" !== e.contentIdentifier && t.tag(3, r.O0.LengthDelimited).string(e.contentIdentifier);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            {
                no: 1,
                name: "placeholder",
                kind: "scalar",
                oneof: "properties",
                T: 9,
            },
            {
                no: 2,
                name: "announcement_modal_variant_1",
                kind: "message",
                oneof: "properties",
                T: () => b.ih,
            },
            {
                no: 4,
                name: "premium_tab",
                kind: "message",
                oneof: "properties",
                T: () => E.x,
            },
            {
                no: 5,
                name: "marketing_page_banner",
                kind: "message",
                oneof: "properties",
                T: () => g.C,
            },
            {
                no: 6,
                name: "payment_modal_banner",
                kind: "message",
                oneof: "properties",
                T: () => m.Y,
            },
            {
                no: 7,
                name: "mobile_bottom_sheet",
                kind: "message",
                oneof: "properties",
                T: () => h.L,
            },
            {
                no: 8,
                name: "gift_icon",
                kind: "message",
                oneof: "properties",
                T: () => _.o,
            },
            {
                no: 9,
                name: "gift_icon_coachmark",
                kind: "message",
                oneof: "properties",
                T: () => p.l,
            },
            {
                no: 10,
                name: "gift_plan_selection_card_banner",
                kind: "message",
                oneof: "properties",
                T: () => f.s,
            },
            {
                no: 11,
                name: "gift_customization_banner",
                kind: "message",
                oneof: "properties",
                T: () => d.E,
            },
            {
                no: 12,
                name: "billing_settings_nitro_gift_banner",
                kind: "message",
                oneof: "properties",
                T: () => u.v,
            },
            {
                no: 13,
                name: "gift_reminder_nagbar",
                kind: "message",
                oneof: "properties",
                T: () => c.s,
            },
            {
                no: 14,
                name: "gift_reminder_coachmark",
                kind: "message",
                oneof: "properties",
                T: () => l.m,
            },
            {
                no: 15,
                name: "premium_tab_tooltip",
                kind: "message",
                oneof: "properties",
                T: () => o.G,
            },
            {
                no: 3,
                name: "content_identifier",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let O = new y();
