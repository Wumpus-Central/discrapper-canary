var i = n(56135),
    r = i ? i.prototype : void 0,
    a = r ? r.valueOf : void 0;
function s(e) {
    return a ? Object(a.call(e)) : {};
}
e.exports = s;
