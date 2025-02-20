var t = TypeError;
e.exports = function (e) {
    if (!e || 'function' != typeof e.next) throw new t('iterator must be an object with a `next` method');
    if (arguments.length > 1) {
        var n,
            r = arguments[1];
        if ('function' != typeof r) throw new t('`callback`, if provided, must be a function');
    }
    for (var i = r || []; (n = e.next()) && !n.done; ) r ? r(n.value) : i.push(n.value);
    if (!r) return i;
};
