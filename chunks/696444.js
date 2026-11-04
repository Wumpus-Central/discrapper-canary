var i = n(384726);
n.d(
    t,
    {},
    {
        A: class e {
            prices;
            type;
            premiumType;
            name;
            skuId;
            summary;
            constructor(e) {
                ((this.prices = e.prices),
                    (this.type = e.type),
                    (this.premiumType = e.premiumType),
                    (this.name = e.name),
                    (this.skuId = e.skuId),
                    (this.summary = e.summary));
            }
            static fromServer(t) {
                let { prices: n, type: r, premium_type: a, name: s, sku_id: l, summary: o } = t;
                return new e({ prices: (0, i.A)(n), type: r, premiumType: a, name: s, skuId: l, summary: o });
            }
        },
    },
);
