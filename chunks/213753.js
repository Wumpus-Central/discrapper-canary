n.d(t, { V: () => a });
var r = n(846903);
let i = new (n(259443).Yd)('codedLinkQueue'),
    o = new r.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2000
    });
function a(e) {
    o.add(e);
}
o.on('add', () => {
    o.size > 0 && i.warn('Message link fetch queue backlog:', o.size);
});
