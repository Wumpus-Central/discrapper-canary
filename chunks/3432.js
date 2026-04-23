"use strict";
n.d(t, { N: () => o });
var r = n(627968);
n(64700);
var i = n(301677),
    s = n(565645),
    a = n(371794);
function o(e, t) {
    if (null != t)
        switch (t.type) {
            case i.A.STORE_ASSET:
                let n = (0, a.YE)(e, t.store_asset_id);
                return (0, r.jsx)("img", { src: n, alt: "", className: "emoji" });
            case i.A.EMOJI:
                return (0, r.jsx)(s.A, { emojiName: t.emoji });
        }
}
