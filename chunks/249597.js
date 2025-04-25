t.d(n, {
    H: () => i,
    a: () => l
});
var r = t(200651);
function l(e) {
    let { type: n, children: t } = e;
    switch (n) {
        case 'ordered':
            return (0, r.jsx)('ol', { children: t });
        case 'unordered':
            return (0, r.jsx)('ul', { children: t });
    }
}
function i(e) {
    let { children: n } = e;
    return (0, r.jsx)('li', { children: n });
}
t(192379);
