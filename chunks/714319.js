n.d(t, {
    G: () => a,
    Z: () => r
});
var i,
    l = n(536895),
    a = (((i = {}).UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT'), (i.SET_FOCUSED_INDEX = 'SET_FOCUSED_INDEX'), i);
function r(e, t) {
    switch (t.type) {
        case l.Us.NAVIGATE_UP:
            return {
                ...e,
                focusedIndex: Math.max(0, e.focusedIndex - 1)
            };
        case l.Us.NAVIGATE_DOWN:
            return {
                ...e,
                focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1)
            };
        case l.Us.NAVIGATE_START:
            return {
                ...e,
                focusedIndex: 0
            };
        case l.Us.NAVIGATE_END:
            return {
                ...e,
                focusedIndex: e.itemCount - 1
            };
        case 'UPDATE_ITEM_COUNT':
            return (function (e, t) {
                let { itemCount: n } = t;
                return {
                    ...e,
                    itemCount: n,
                    focusedIndex: Math.min(n - 1, e.focusedIndex)
                };
            })(e, t);
        case 'SET_FOCUSED_INDEX':
            return (function (e, t) {
                let { index: n } = t;
                return {
                    ...e,
                    focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1))
                };
            })(e, t);
        case l.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn('Listbox navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
