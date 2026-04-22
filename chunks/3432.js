n.d(t, { N: () => s });
var l = n(627968);
n(64700);
var i = n(301677),
    a = n(565645),
    r = n(371794);
function s(e, t) {
    if (null != t)
        switch (t.type) {
            case i.A.STORE_ASSET:
                let n = (0, r.YE)(e, t.store_asset_id);
                return (0, l.jsx)("img", { src: n, alt: "", className: "emoji" });
            case i.A.EMOJI:
                return (0, l.jsx)(a.A, { emojiName: t.emoji });
        }
}
