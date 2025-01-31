n.d(t, { Z: () => o });
var i = n(477660),
    r = n.n(i),
    a = n(914216);
let s = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop#itemSkuId=(\\d+)?'),
    o = {
        shopLink: {
            order: r().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match(e) {
                let t = s.exec(e);
                return null == t || (0, a.Z)('MarkupShopLinkRule') ? t : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = e[1];
                return {
                    type: 'shopLink',
                    content: [
                        {
                            type: 'text',
                            content: r
                        }
                    ],
                    shopLink: i,
                    skuId: r
                };
            }
        }
    };
