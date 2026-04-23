r.d(t, { A: () => o });
var n = r(685357),
    a = r(597807),
    l = r(763424),
    i = r(292177);
let o = {
    id: "input-label",
    selector:
        'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
    tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
    metadata: {
        description: "Form inputs require a label",
        help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.",
    },
    check: function (e) {
        return "" === (0, n.D0)(e) ? ((0, i.i6)(e) || !(0, a.z)(e) ? l.o : "Form input has no label") : l.o;
    },
};
