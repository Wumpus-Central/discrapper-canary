n.d(t, { I: () => _, s: () => c });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(991023),
    d = n(453360),
    c =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.SM_TILE = 1)] = "SM_TILE"),
        (i[(i.MD_TILE = 2)] = "MD_TILE"),
        (i[(i.LG_TILE = 3)] = "LG_TILE"),
        (i[(i.VIDEO_TILE = 4)] = "VIDEO_TILE"),
        i);
class u extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "button_label_localized", kind: "message", T: () => o.X },
            {
                no: 5,
                name: "display_type",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.ShopCoachmarkDisplayType",
                    c,
                    "SHOP_COACHMARK_DISPLAY_TYPE_",
                ],
            },
            { no: 6, name: "badge_text_localized", kind: "message", T: () => o.X },
            { no: 7, name: "badge_icon", kind: "scalar", T: 9 },
            { no: 8, name: "badge_countdown_ends_at", kind: "scalar", T: 9 },
            { no: 9, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 10, name: "hover_background", kind: "message", T: () => d.i },
            { no: 11, name: "header", kind: "scalar", T: 9 },
            { no: 12, name: "body", kind: "scalar", T: 9 },
            { no: 13, name: "button_label", kind: "scalar", T: 9 },
            { no: 14, name: "badge_text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = {
            displayType: 0,
            badgeIcon: "",
            badgeCountdownEndsAt: "",
            showHoverGradient: !1,
            header: "",
            body: "",
            buttonLabel: "",
            badgeText: "",
        };
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.buttonLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.buttonLabelLocalized);
                    break;
                case 5:
                    a.displayType = e.int32();
                    break;
                case 6:
                    a.badgeTextLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.badgeTextLocalized);
                    break;
                case 7:
                    a.badgeIcon = e.string();
                    break;
                case 8:
                    a.badgeCountdownEndsAt = e.string();
                    break;
                case 9:
                    a.showHoverGradient = e.bool();
                    break;
                case 10:
                    a.hoverBackground = d.i.internalBinaryRead(e, e.uint32(), n, a.hoverBackground);
                    break;
                case 11:
                    a.header = e.string();
                    break;
                case 12:
                    a.body = e.string();
                    break;
                case 13:
                    a.buttonLabel = e.string();
                    break;
                case 14:
                    a.badgeText = e.string();
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
        (e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.buttonLabelLocalized &&
                o.X.internalBinaryWrite(e.buttonLabelLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.displayType && t.tag(5, r.O0.Varint).int32(e.displayType),
            e.badgeTextLocalized &&
                o.X.internalBinaryWrite(e.badgeTextLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeIcon && t.tag(7, r.O0.LengthDelimited).string(e.badgeIcon),
            "" !== e.badgeCountdownEndsAt && t.tag(8, r.O0.LengthDelimited).string(e.badgeCountdownEndsAt),
            !1 !== e.showHoverGradient && t.tag(9, r.O0.Varint).bool(e.showHoverGradient),
            e.hoverBackground &&
                d.i.internalBinaryWrite(e.hoverBackground, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(11, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(12, r.O0.LengthDelimited).string(e.body),
            "" !== e.buttonLabel && t.tag(13, r.O0.LengthDelimited).string(e.buttonLabel),
            "" !== e.badgeText && t.tag(14, r.O0.LengthDelimited).string(e.badgeText));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let _ = new u();
