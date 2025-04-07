var n = r(621523),
    i = r(127849).RegExp;
t.exports = n(function () {
    var t = i('(?<a>b)', 'g');
    return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
});
