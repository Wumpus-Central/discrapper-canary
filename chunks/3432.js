n.d(t, {
    N: () => o,
});
var r = n(627968);
n(64700);
var i = n(301677),
    a = n(565645),
    s = n(371794);

function o(e, t) {
    if (null != t)
        switch (t.type) {
            case i.A.STORE_ASSET:
                let n = (0, s.YE)(e, t.store_asset_id);
                return (0, r.jsx)("img", {
                    src: n,
                    alt: "",
                    className: "emoji",
                });
            case i.A.EMOJI:
                return (0, r.jsx)(a.A, {
                    emojiName: t.emoji,
                });
        }
}
