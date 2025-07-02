t.d(n, {
    H: () => c,
    a: () => l
});
var r = t(255367);
function l(e) {
    let { type: n, children: t, value: l, items: c } = e;
    switch (n) {
        case 'ordered':
            let i = (l + c.length - 1).toString().length;
            return (0, r.jsx)('ol', {
                start: l,
                style: { '--totalCharacters': i },
                children: t
            });
        case 'unordered':
            return (0, r.jsx)('ul', { children: t });
    }
}
function c(e) {
    let { children: n } = e;
    return (0, r.jsx)('li', { children: n });
}
t(73800);
