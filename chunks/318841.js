var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function n(e) {
    return e.match(t) || [];
}
e.exports = n;
