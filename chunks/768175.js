var i = n(690244)('%Object.defineProperty%', !0),
    r = function () {
        if (i)
            try {
                return i({}, 'a', { value: 1 }), !0;
            } catch (e) {}
        return !1;
    };
(r.hasArrayLengthDefineBug = function () {
    if (!r()) return null;
    try {
        return 1 !== i([], 'length', { value: 1 }).length;
    } catch (e) {
        return !0;
    }
}),
    (e.exports = r);
