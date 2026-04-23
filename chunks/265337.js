r.d(t, { A: () => o });
var n = r(685357),
    a = r(597807),
    l = r(763424),
    i = r(292177);
let o = {
    id: "button-name",
    selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
    tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
    metadata: { description: "Ensures buttons have discernible text", help: "" },
    check: function (e) {
        return "" !== (0, n.D0)(e) || (0, i.i6)(e) || !(0, a.z)(e) ? l.o : "button's accessible name is empty.";
    },
};
