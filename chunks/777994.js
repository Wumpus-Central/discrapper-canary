var t = /\w*$/;
function n(e) {
    var n = new e.constructor(e.source, t.exec(e));
    return (n.lastIndex = e.lastIndex), n;
}
e.exports = n;
