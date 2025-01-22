r.d(n, {
    d: function () {
        return s;
    }
});
var i = r(932143),
    a = r(155263),
    o = r(192379);
function s(e) {
    let n = (0, i.W)(e),
        r = (0, a.BA)({
            ...e,
            onSelectionChange: (r) => {
                null != e.onSelectionChange && e.onSelectionChange(r), n.close();
            }
        }),
        [s, l] = (0, o.useState)(!1);
    return {
        ...r,
        ...n,
        open() {
            0 !== r.collection.size && n.open();
        },
        toggle(e) {
            0 !== r.collection.size && n.toggle(e);
        },
        isFocused: s,
        setFocused: l
    };
}
