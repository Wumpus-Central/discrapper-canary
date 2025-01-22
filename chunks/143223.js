var i = r(477660),
    a = r.n(i),
    o = r(914216);
let s = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop#itemSkuId=(\\d+)?'),
    l = {
        order: a().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ['h'],
        match(e) {
            let n = s.exec(e);
            return null == n || (0, o.Z)('MarkupShopLinkRule') ? n : null;
        },
        parse(e, n, r) {
            let i = e[0],
                a = e[1];
            return {
                type: 'shopLink',
                content: [
                    {
                        type: 'text',
                        content: a
                    }
                ],
                shopLink: i,
                skuId: a
            };
        }
    };
n.Z = { shopLink: l };
