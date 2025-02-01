var t = TypeError;
e.exports = function (e) {
    if (!e || 'function' != typeof e.next) throw new t('iterator must be an object with a `next` method');
    if (arguments.length > 1) {
        var n,
            i = arguments[1];
        if ('function' != typeof i) throw new t('`callback`, if provided, must be a function');
    }
    for (var r = i || []; (n = e.next()) && !n.done; ) i ? i(n.value) : r.push(n.value);
    if (!i) return r;
};
