var r,
    i = n(729106),
    s = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
e.exports = function (e) {
    return !!s && s in e;
};
