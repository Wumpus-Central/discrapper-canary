r.d(n, {
    V: function () {
        return s;
    }
});
var i = r(846903);
let a = new (r(259443).Yd)('codedLinkQueue'),
    o = new i.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2000
    });
function s(e) {
    o.add(e);
}
o.on('add', () => {
    o.size > 0 && a.warn('Message link fetch queue backlog:', o.size);
});
