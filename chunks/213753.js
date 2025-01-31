n.d(t, { V: () => s });
var i = n(846903);
let r = new (n(259443).Yd)('codedLinkQueue'),
    a = new i.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2000
    });
function s(e) {
    a.add(e);
}
a.on('add', () => {
    a.size > 0 && r.warn('Message link fetch queue backlog:', a.size);
});
