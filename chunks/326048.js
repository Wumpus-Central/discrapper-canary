var i = r(56135),
    a = i ? i.prototype : void 0,
    o = a ? a.valueOf : void 0;
function s(e) {
    return o ? Object(o.call(e)) : {};
}
e.exports = s;
