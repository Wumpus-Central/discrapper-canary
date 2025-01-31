n.d(t, { Z: () => o });
var i = n(660027),
    r = n(538018),
    a = n(316138),
    s = n(882159);
function o(e) {
    return ['html', 'body', '#document'].indexOf((0, a.Z)(e)) >= 0 ? e.ownerDocument.body : (0, s.Re)(e) && (0, r.Z)(e) ? e : o((0, i.Z)(e));
}
