l.d(r, { A: () => o });
var t = l(474012);
class o {
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
        let { application_id: r, selected_options: l, product_id: i, tenant_metadata: n, ...a } = e;
        return new o({
            ...a,
            applicationId: r,
            selectedOptions: l.map((e) => ({ optionName: e.option_name, optionValue: e.option_value })),
            productId: i,
            itemType: n.collectibles.type,
            premiumType: n.collectibles.premium_type,
            item: null != n.collectibles.item ? (0, t.K)([n.collectibles.item])[0] : void 0,
            expiresAt: null != n.collectibles.expires_at ? new Date(n.collectibles.expires_at) : void 0,
            optionSelectorDisplayValue: n.collectibles.option_selector_display_value,
        });
    }
}
