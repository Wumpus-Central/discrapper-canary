t.d(l, { C8: () => r, Ej: () => i, Ot: () => n, oP: () => a, uG: () => o });
let r = "dummy-tenant",
    o = {
        id: "dummy-shop-home",
        children: [
            {
                block: "ContainedHero",
                bannerSrc: {
                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                },
                logoSrc: {
                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                },
                backgroundColor: "red",
                children: [
                    {
                        block: "InteractiveHScroll",
                        children: [{ block: "SubLayout", tenantId: "dummy-tenant", layoutId: "dummy-sku-list" }],
                    },
                ],
            },
            {
                block: "Section",
                verticalMargin: 48,
                padding: 0,
                children: [
                    {
                        block: "Grid",
                        columns: 2,
                        children: [
                            {
                                block: "FeaturedCollection",
                                backgroundImage: {
                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                },
                                logoSrc: {
                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                },
                                supplementalImage: {
                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                },
                                href: "",
                                ctaText: "Take Me There",
                            },
                            {
                                block: "FeaturedCollection",
                                backgroundImage: {
                                    src: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e",
                                },
                                logoSrc: {
                                    src: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda",
                                },
                                supplementalImage: {
                                    src: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png",
                                },
                                href: "",
                                ctaText: "Take Me There",
                            },
                        ],
                    },
                ],
            },
            { block: "SubLayout", tenantId: "dummy-tenant", layoutId: "dummy-orb-shelf" },
            { block: "SubTemplate", tenantId: "dummy-tenant", templateId: "dummy-popular-picks" },
        ],
    },
    n = {
        id: "dummy-popular-picks",
        children: [
            {
                block: "Section",
                verticalMargin: 32,
                padding: 0,
                children: [{ block: "Text", variant: "text-lg/semibold", content: "Popular Picks" }],
            },
            {
                block: "Section",
                verticalMargin: 32,
                padding: 0,
                children: [
                    {
                        block: "Grid",
                        columns: 3,
                        children: [
                            { block: "ShopProductCard", skuId: "1458472704167379109" },
                            {
                                block: "GridItem",
                                columns: 2,
                                rows: 2,
                                children: [{ block: "ShopProductCard", skuId: "1458472704079434020" }],
                            },
                            { block: "ShopProductCard", skuId: "1458472704251396148" },
                            { block: "ShopProductCard", skuId: "1436367668788592782" },
                            { block: "ShopProductCard", skuId: "1447654090439004170" },
                            { block: "ShopProductCard", skuId: "1458472704435945653" },
                            {
                                block: "GridItem",
                                columns: 2,
                                rows: 1,
                                children: [{ block: "ShopProductCard", skuId: "1428438925021548544" }],
                            },
                            { block: "ShopProductCard", skuId: "1428438924564631663" },
                            { block: "ShopProductCard", skuId: "1144308439720394944" },
                            { block: "ShopProductCard", skuId: "1432550258478682222" },
                            { block: "ShopProductCard", skuId: "1458483484598337682" },
                            { block: "ShopProductCard", skuId: "1432550258126229565" },
                            { block: "ShopProductCard", skuId: "1428438924539334718" },
                            { block: "ShopProductCard", skuId: "1458472704721158372" },
                            { block: "ShopProductCard", skuId: "1447654090539667609" },
                            { block: "ShopProductCard", skuId: "1333866045236314327" },
                            { block: "ShopProductCard", skuId: "1458472704524156959" },
                            { block: "ShopProductCard", skuId: "1447654090556571799" },
                            { block: "ShopProductCard", skuId: "1428438924648382626" },
                            { block: "ShopProductCard", skuId: "1417311919643299840" },
                            { block: "ShopProductCard", skuId: "1458472704192811088" },
                            { block: "ShopProductCard", skuId: "1432550258247995533" },
                            { block: "ShopProductCard", skuId: "1212569433839636530" },
                            { block: "ShopProductCard", skuId: "1447654090661302343" },
                            { block: "ShopProductCard", skuId: "1432550258465837086" },
                            { block: "ShopProductCard", skuId: "1447654090573217912" },
                            { block: "ShopProductCard", skuId: "1280621222496964630" },
                            { block: "ShopProductCard", skuId: "1447654090623549471" },
                            { block: "ShopProductCard", skuId: "1436367668897775757" },
                            { block: "ShopProductCard", skuId: "1458472704222171347" },
                        ],
                    },
                ],
            },
        ],
    },
    a = {
        id: "dummy-orb-shelf",
        children: [
            {
                block: "Section",
                verticalMargin: 8,
                padding: 0,
                children: [
                    {
                        block: "Stack",
                        direction: "horizontal",
                        justify: "space-between",
                        children: [
                            { block: "Heading", content: "Discord Orb Exclusives", variant: "heading-lg/semibold" },
                            {
                                block: "Button",
                                ctaText: "Shop All Discord Orb Exclusives",
                                href: "",
                                variant: "secondary",
                            },
                        ],
                    },
                ],
            },
            {
                block: "Section",
                verticalMargin: 8,
                padding: 0,
                children: [
                    {
                        block: "InteractiveHScroll",
                        children: [
                            { block: "ShopProductCard", skuId: "1458472704079434020" },
                            { block: "ShopProductCard", skuId: "1458472704167379109" },
                            { block: "ShopProductCard", skuId: "1458472704192811088" },
                            { block: "ShopProductCard", skuId: "1458472704222171347" },
                        ],
                    },
                ],
            },
        ],
    },
    i = {
        id: "dummy-sku-list",
        children: [
            {
                block: "SkuList",
                skuBlock: "ShopProductCard",
                skuIds: [
                    "1458472704079434020",
                    "1458472704167379109",
                    "1458472704251396148",
                    "1458472704192811088",
                    "1458472704222171347",
                    "1458472704272498709",
                    "1458472704306053202",
                    "1458472704087818312",
                    "1458472704096075816",
                    "1458472704104599666",
                    "1458472704112984085",
                    "1458472704142217441",
                ],
            },
        ],
    };
