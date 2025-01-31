n.d(t, { Z: () => r });
var i = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function r(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
        return i[e];
    });
}
