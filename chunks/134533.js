var r = n(583584),
    i = function () {
        return !!r;
    };
(i.hasArrayLengthDefineBug = function () {
    if (!r) return null;
    try {
        return 1 !== r([], 'length', { value: 1 }).length;
    } catch (e) {
        return !0;
    }
}),
    (e.exports = i);
