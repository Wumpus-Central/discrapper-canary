r.d(n, {
    u: function () {
        return o;
    }
});
var i = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        }
    },
    a = 'trunc';
function o(e) {
    return e ? i[e] : i[a];
}
