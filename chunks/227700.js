n.d(t, { u: () => a });
var r = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        }
    },
    i = 'trunc';
function a(e) {
    return e ? r[e] : r[i];
}
