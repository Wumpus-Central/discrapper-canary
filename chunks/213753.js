n.d(t, { V: () => o });
var r = n(846903);
let i = new (n(259443).Yd)('codedLinkQueue'),
    a = new r.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2000
    });
function o(e) {
    a.add(e);
}
a.on('add', () => {
    a.size > 0 && i.warn('Message link fetch queue backlog:', a.size);
});
