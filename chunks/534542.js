n.d(t, {
    R: () => c,
    g: () => l
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(118012),
    o = n(205721);
let l = {
        DEFAULT: 'default',
        INPUT_PLACEHOLDER: 'placeholder',
        DESCRIPTION: 'description',
        LABEL_BOLD: 'labelBold',
        LABEL_SELECTED: 'labelSelected',
        LABEL_DESCRIPTOR: 'labelDescriptor',
        ERROR: 'error',
        SUCCESS: 'success'
    },
    u = {
        DEFAULT: 'modeDefault',
        DISABLED: 'modeDisabled',
        SELECTABLE: 'modeSelectable'
    };
function c(e) {
    let { type: t = l.DEFAULT, className: n, disabled: r, selectable: c, children: d, style: f, ..._ } = e,
        p = u.DEFAULT;
    return (
        r ? (p = u.DISABLED) : c && (p = u.SELECTABLE),
        (0, i.jsx)(s.Z, {
            className: a()(o[t], n, o[p]),
            style: f,
            ..._,
            children: d
        })
    );
}
c.Types = l;
