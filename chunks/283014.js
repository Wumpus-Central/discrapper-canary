n.d(t, { A: () => i });
var r = n(685357),
    a = n(597807),
    l = n(763424),
    o = n(292177);
let i = {
    id: "alt-text",
    selector: 'img, [role="img"]',
    tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
    metadata: {
        description: "Images must have alternative text.",
        help: "",
    },
    check: function (e) {
        return "" === (0, r.D0)(e)
            ? ("IMG" === e.tagName && e.hasAttribute("alt")) || (0, o.i6)(e) || !(0, a.z)(e)
                ? l.o
                : "Image has no alternative text"
            : l.o;
    },
};
