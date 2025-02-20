n.d(t, { Z: () => i });
var r = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function i(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
        return r[e];
    });
}
