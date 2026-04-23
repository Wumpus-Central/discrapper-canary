"use strict";
n.d(t, { m: () => y });
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(306972),
    l = n(910736),
    u = n(536578),
    c = n(641558),
    d = n(978926),
    _ = n(959129),
    f = n(67948),
    p = n(978656),
    h = n(720119),
    E = n(342371),
    m = n(149613),
    g = n(297204),
    A = n(670474),
    I = n(108094),
    T = n(232582);
class S extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => T.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => I.x },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => A.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => g.Y },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => m.L },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => E.o },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => h.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => p.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => f.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => _.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => d.s },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => c.m },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => u.G },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => l.W },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => o.I },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    s.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: T.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    s.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: I.x.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTab),
                    };
                    break;
                case 5:
                    s.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: A.C.internalBinaryRead(e, e.uint32(), n, s.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    s.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: g.Y.internalBinaryRead(e, e.uint32(), n, s.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    s.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: m.L.internalBinaryRead(e, e.uint32(), n, s.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    s.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: E.o.internalBinaryRead(e, e.uint32(), n, s.properties.giftIcon),
                    };
                    break;
                case 9:
                    s.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: h.l.internalBinaryRead(e, e.uint32(), n, s.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    s.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: p.s.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    s.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: f.E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    s.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: _.v.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    s.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: d.s.internalBinaryRead(e, e.uint32(), n, s.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    s.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: c.m.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    s.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: u.G.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    s.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: l.W.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    s.properties = {
                        oneofKind: "nagbar",
                        nagbar: o.I.internalBinaryRead(e, e.uint32(), n, s.properties.nagbar),
                    };
                    break;
                case 3:
                    s.contentIdentifier = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let S = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, S);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "placeholder" === e.properties.oneofKind && t.tag(1, r.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                T.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                I.x.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                A.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                g.Y.internalBinaryWrite(
                    e.properties.paymentModalBanner,
                    t.tag(6, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                m.L.internalBinaryWrite(
                    e.properties.mobileBottomSheet,
                    t.tag(7, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftIcon" === e.properties.oneofKind &&
                E.o.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                h.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                p.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                f.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                _.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                d.s
                    .internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                c.m
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                u.G.internalBinaryWrite(
                    e.properties.premiumTabTooltip,
                    t.tag(15, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                l.W.internalBinaryWrite(
                    e.properties.premiumTabPopover,
                    t.tag(16, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "nagbar" === e.properties.oneofKind &&
                o.I.internalBinaryWrite(e.properties.nagbar, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.contentIdentifier && t.tag(3, r.O0.LengthDelimited).string(e.contentIdentifier);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let y = new S();
