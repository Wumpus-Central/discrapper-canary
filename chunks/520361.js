"use strict";
n.d(t, { h: () => E });
var i = n(852015),
    r = n(144367),
    s = n(428420),
    a = n(535384),
    o = n(330287),
    l = n(453360),
    u = n(406935),
    c = n(991023),
    d = n(232582);
class _ extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsBannerCTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", d.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => c.X },
            { no: 5, name: "navigable_storefront_application_id", kind: "message", T: () => u.ol },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
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
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = c.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
                    break;
                case 5:
                    s.navigableStorefrontApplicationId = u.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        s.navigableStorefrontApplicationId,
                    );
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
        "" !== e.copy && t.tag(1, i.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, i.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                c.X.internalBinaryWrite(e.copyLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                u.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(5, i.O0.LengthDelimited).fork(), n)
                    .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let h = new _();
class f extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsBanner", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => l.i },
            { no: 4, name: "button", kind: "message", T: () => h },
            { no: 5, name: "header_localized", kind: "message", T: () => c.X },
            { no: 6, name: "body_localized", kind: "message", T: () => c.X },
            { no: 7, name: "help_article", kind: "message", T: () => o.O },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
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
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.asset = l.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 4:
                    s.button = h.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 5:
                    s.headerLocalized = c.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 6:
                    s.bodyLocalized = c.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                case 7:
                    s.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.asset && l.i.internalBinaryWrite(e.asset, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.button && h.internalBinaryWrite(e.button, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                c.X.internalBinaryWrite(e.headerLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                c.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(7, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let E = new f();
