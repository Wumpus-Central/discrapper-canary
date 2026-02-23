"use strict";
l.d(t, { A: () => a });
var r = l(474012);
class a {
    id;
    applicationId;
    type;
    name;
    description;
    premium;
    selectedOptions;
    productId;
    position;
    itemType;
    premiumType;
    item;
    expiresAt;
    optionSelectorDisplayValue;
    constructor(e) {
        (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.type = e.type),
            (this.name = e.name),
            (this.description = e.description),
            (this.premium = e.premium),
            (this.selectedOptions = e.selectedOptions),
            (this.productId = e.productId),
            (this.position = e.position),
            (this.premiumType = e.premiumType),
            (this.itemType = e.itemType),
            (this.item = e.item),
            (this.expiresAt = e.expiresAt),
            (this.optionSelectorDisplayValue = e.optionSelectorDisplayValue);
    }
    static fromServer(e) {
        let { application_id: t, selected_options: l, product_id: n, tenant_metadata: i, ...s } = e;
        return new a({
            ...s,
            applicationId: t,
            selectedOptions: l.map((e) => ({ optionName: e.option_name, optionValue: e.option_value })),
            productId: n,
            itemType: i.collectibles.type,
            premiumType: i.collectibles.premium_type,
            item: null != i.collectibles.item ? (0, r.K)([i.collectibles.item])[0] : void 0,
            expiresAt: null != i.collectibles.expires_at ? new Date(i.collectibles.expires_at) : void 0,
            optionSelectorDisplayValue: i.collectibles.option_selector_display_value,
        });
    }
}
