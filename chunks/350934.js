n.d(t, { Z: () => u });
var r = n(424706),
    a = n(14160),
    l = n(247123),
    i = n(207662);
let u = {
    id: 'alt-text',
    selector: 'img, [role="img"]',
    tags: ['wcag2a', 'wcag111', 'section508', 'section508.22.a', 'ACT'],
    metadata: {
        description: 'Images must have alternative text.',
        help: ''
    },
    check: function (e) {
        return '' === (0, r.AB)(e) ? (('IMG' === e.tagName && e.hasAttribute('alt')) || (0, i.Uu)(e) || !(0, a.p)(e) ? l.w : 'Image has no alternative text') : l.w;
    }
};
