n.d(t, { u: () => a });
var i = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        }
    },
    r = 'trunc';
function a(e) {
    return e ? i[e] : i[r];
}
