var r,
    n = a(54640),
    o = (r = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + r : '';
t.exports = function (t) {
    return !!o && o in t;
};
