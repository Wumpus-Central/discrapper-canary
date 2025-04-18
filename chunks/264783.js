n.d(t, { A: () => s }), n(388685);
var r = n(192379),
    i = n(524437),
    a = n(695346);
function o() {
    let [e, t] = r.useState('cozy');
    return (
        r.useEffect(() => {
            let e = window.matchMedia('(min-width: 1024px) and (min-height: 820px)'),
                n = (e) => {
                    t(e.matches ? 'cozy' : 'compact');
                };
            return (
                e.addEventListener('change', n),
                () => {
                    e.removeEventListener('change', n);
                }
            );
        }, []),
        e
    );
}
function s() {
    let e = a.YC.useSetting(),
        t = o();
    switch (e) {
        case i.Pi.RESPONSIVE:
            return t;
        case i.Pi.COZY:
            return 'cozy';
        case i.Pi.DEFAULT:
            return 'default';
        case i.Pi.COMPACT:
            return 'compact';
        default:
            return 'default';
    }
}
