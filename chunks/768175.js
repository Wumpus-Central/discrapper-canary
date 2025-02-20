var r = n(690244)('%Object.defineProperty%', !0),
    i = function () {
        if (r)
            try {
                return r({}, 'a', { value: 1 }), !0;
            } catch (e) {}
        return !1;
    };
(i.hasArrayLengthDefineBug = function () {
    if (!i()) return null;
    try {
        return 1 !== r([], 'length', { value: 1 }).length;
    } catch (e) {
        return !0;
    }
}),
    (e.exports = i);
