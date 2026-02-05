r.d(t, { A: () => o });
var n = r(685357),
    a = r(597807),
    l = r(763424),
    i = r(292177);
let o = {
    id: "alt-text",
    selector: 'img, [role="img"]',
    tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
    metadata: { description: "Images must have alternative text.", help: "" },
    check: function (e) {
        return "" === (0, n.D0)(e)
            ? ("IMG" === e.tagName && e.hasAttribute("alt")) || (0, i.i6)(e) || !(0, a.z)(e)
                ? l.o
                : "Image has no alternative text"
            : l.o;
    },
};
