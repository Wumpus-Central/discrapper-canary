n.d(t, { A: () => i });
var r = n(685357),
    a = n(597807),
    l = n(763424),
    o = n(292177);
let i = {
    id: "button-name",
    selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
    tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
    metadata: {
        description: "Ensures buttons have discernible text",
        help: "",
    },
    check: function (e) {
        return "" !== (0, r.D0)(e) || (0, o.i6)(e) || !(0, a.z)(e) ? l.o : "button's accessible name is empty.";
    },
};
