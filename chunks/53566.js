t.d(l, { S: () => n });
var r = t(985018);
let o = {
        COLLECTIBLES_SHOP_THE_VAULT_COLLECTION: r.t["/35Yzx"],
        COLLECTIBLES_SHOP_THE_COLLECTION: r.t.xYKa1T,
        COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_TEXT: r.t.Yr70c4,
        COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON: r.t.AfrvRD,
        COLLECTIBLES_SHOP_FEED_END_OF_SCROLL_BUTTON_BROWSE: r.t["i/yzHs"],
        TAKE_ME_THERE: r.t.jVcuVY,
    },
    n = (e) => {
        if (e in o) {
            let l = r.intl.string(o[e]);
            if ("" !== l) return l;
        }
        return e;
    };
