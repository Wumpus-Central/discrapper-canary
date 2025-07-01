t.d(n, {
    H: () => i,
    a: () => l
});
var r = t(255367);
function l(e) {
    let { type: n, children: t, value: l, items: i } = e;
    switch (n) {
        case 'ordered':
            let o = (l + i.length - 1).toString().length;
            return (0, r.jsx)('ol', {
                start: l,
                style: { '--totalCharacters': o },
                children: t
            });
        case 'unordered':
            return (0, r.jsx)('ul', { children: t });
    }
}
function i(e) {
    let { children: n } = e;
    return (0, r.jsx)('li', { children: n });
}
t(73800);
