n.d(t, { N: () => s });
var l = n(627968);
n(64700);
var a = n(301677),
    i = n(565645),
    r = n(371794);
function s(e, t) {
    if (null != t)
        switch (t.type) {
            case a.A.STORE_ASSET:
                let n = (0, r.YE)(e, t.store_asset_id);
                return (0, l.jsx)("img", { src: n, alt: "", className: "emoji" });
            case a.A.EMOJI:
                return (0, l.jsx)(i.A, { emojiName: t.emoji });
        }
}
