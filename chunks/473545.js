"use strict";
n.d(t, { N: () => l });
var i,
    r = n(627968);
n(64700);
var s = (((i = {})[(i.STORE_ASSET = 1)] = "STORE_ASSET"), (i[(i.EMOJI = 2)] = "EMOJI"), i),
    a = n(565645),
    o = n(371794);
function l(e, t) {
    if (null != t)
        switch (t.type) {
            case s.STORE_ASSET:
                let n = (0, o.YE)(e, t.store_asset_id);
                return (0, r.jsx)("img", { src: n, alt: "", className: "emoji" });
            case s.EMOJI:
                return (0, r.jsx)(a.A, { emojiName: t.emoji });
        }
}
