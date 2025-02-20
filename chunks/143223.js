n.d(t, { Z: () => s }), n(474991), n(398202), n(301563);
var r = n(477660),
    i = n.n(r),
    o = n(914216);
let a = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop#itemSkuId=(\\d+)?'),
    s = {
        shopLink: {
            order: i().defaultRules.url.order - 0.5,
            requiredFirstCharacters: ['h'],
            match(e) {
                let t = a.exec(e);
                return null == t || (0, o.Z)('MarkupShopLinkRule') ? t : null;
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
