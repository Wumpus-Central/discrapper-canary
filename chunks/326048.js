var r = n(56135),
    i = r ? r.prototype : void 0,
    a = i ? i.valueOf : void 0;
e.exports = function (e) {
    return a ? Object(a.call(e)) : {};
};
