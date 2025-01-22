r.d(n, {
    R: function () {
        return d;
    },
    g: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(118012),
    l = r(249096);
let u = {
        DEFAULT: 'default',
        INPUT_PLACEHOLDER: 'placeholder',
        DESCRIPTION: 'description',
        LABEL_BOLD: 'labelBold',
        LABEL_SELECTED: 'labelSelected',
        LABEL_DESCRIPTOR: 'labelDescriptor',
        ERROR: 'error',
        SUCCESS: 'success'
    },
    c = {
        DEFAULT: 'modeDefault',
        DISABLED: 'modeDisabled',
        SELECTABLE: 'modeSelectable'
    };
function d(e) {
    let { type: n = u.DEFAULT, className: r, disabled: a, selectable: d, children: f, style: p, ...h } = e,
        _ = c.DEFAULT;
    return (
        a ? (_ = c.DISABLED) : d && (_ = c.SELECTABLE),
        (0, i.jsx)(s.Z, {
            className: o()(l[n], r, l[_]),
            style: p,
            ...h,
            children: f
        })
    );
}
d.Types = u;
