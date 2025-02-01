e.exports = function (e) {
    var t, i;
    if (((t = n(618336)), (i = n(919089)), 'keypress' === e.type)) {
        var r = String.fromCharCode(e.which);
        return e.shiftKey || (r = r.toLowerCase()), r;
    }
    return t[e.which] ? t[e.which] : i[e.which] ? i[e.which] : String.fromCharCode(e.which).toLowerCase();
};
