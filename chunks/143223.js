n.d(t, { Z: () => s }), n(413496), n(433524), n(35282);
var r = n(477660),
    i = n.n(r),
    a = n(914216);
let o = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?\\.com|staging\\.discord\\.co)/shop(?:\\?tab=[a-z]+)?#itemSkuId=(\\d+)'),
    s = {
        shopLink: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match(e) {
                let t = o.exec(e);
                return null == t || (0, a.Z)('MarkupShopLinkRule') ? t : null;
            },
            parse(e, t, n) {
                let r = e[0],
                    i = e[1];
                return {
                    type: 'shopLink',
                    content: [
                        {
                            type: 'text',
                            content: i
                        }
                    ],
                    shopLink: r,
                    skuId: i
                };
            }
        }
    };
