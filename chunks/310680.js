r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(660027),
    a = r(538018),
    o = r(316138),
    s = r(882159);
function l(e) {
    return ['html', 'body', '#document'].indexOf((0, o.Z)(e)) >= 0 ? e.ownerDocument.body : (0, s.Re)(e) && (0, a.Z)(e) ? e : l((0, i.Z)(e));
}
