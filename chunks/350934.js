n.d(t, { Z: () => o });
var r = n(424706),
    a = n(14160),
    i = n(247123),
    l = n(207662);
let o = {
    id: 'alt-text',
    selector: 'img, [role="img"]',
    tags: ['wcag2a', 'wcag111', 'section508', 'section508.22.a', 'ACT'],
    metadata: {
        description: 'Images must have alternative text.',
        help: ''
    },
    check: function (e) {
        return '' === (0, r.AB)(e) ? (('IMG' === e.tagName && e.hasAttribute('alt')) || (0, l.Uu)(e) || !(0, a.p)(e) ? i.w : 'Image has no alternative text') : i.w;
    }
};
