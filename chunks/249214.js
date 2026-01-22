n.d(t, { A: () => i });
var r = n(685357),
    a = n(597807),
    l = n(763424),
    o = n(292177);
let i = {
    id: "input-label",
    selector:
        'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
    tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
    metadata: {
        description: "Form inputs require a label",
        help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.",
    },
    check: function (e) {
        return "" === (0, r.D0)(e) ? ((0, o.i6)(e) || !(0, a.z)(e) ? l.o : "Form input has no label") : l.o;
    },
};
