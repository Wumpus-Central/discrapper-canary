var n = r(936940),
    i = r(161581).RegExp;
t.exports = n(function () {
    var t = i('(?<a>b)', 'g');
    return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
});
