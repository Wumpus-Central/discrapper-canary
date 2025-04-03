t.d(n, { Z: () => o });
var r = t(706454);
function o(e) {
    return new Date(e).toLocaleDateString(r.default.locale, {
        month: '2-digit',
        day: '2-digit'
    });
}
