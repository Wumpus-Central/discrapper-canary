n.d(t, { Z: () => o });
var r = n(424706),
    a = n(14160),
    i = n(247123),
    l = n(207662);
let o = {
    id: 'input-label',
    selector: 'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
    tags: ['wcag2a', 'wcag131', 'wcag412', 'section508', 'section508.22.a', 'ACT'],
    metadata: {
        description: 'Form inputs require a label',
        help: 'Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.'
    },
    check: function (e) {
        return '' === (0, r.AB)(e) ? ((0, l.Uu)(e) || !(0, a.p)(e) ? i.w : 'Form input has no label') : i.w;
    }
};
