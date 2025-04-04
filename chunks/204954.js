var r = a(621523),
    n = a(127849).RegExp;
t.exports = r(function () {
    var t = n('(?<a>b)', 'g');
    return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
});
