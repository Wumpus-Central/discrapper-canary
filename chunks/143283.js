var r,
    n = a(54640),
    _ = (r = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + r : '';
t.exports = function (t) {
    return !!_ && _ in t;
};
