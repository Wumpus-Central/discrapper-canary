n.d(t, { A: () => o }), n(47120);
var i = n(192379),
    r = n(524437),
    a = n(695346);
function s() {
    let [e, t] = i.useState('cozy');
    return (
        i.useEffect(() => {
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
function o() {
    let e = a.YC.useSetting(),
        t = s();
    switch (e) {
        case r.Pi.RESPONSIVE:
            return t;
        case r.Pi.COZY:
            return 'cozy';
        case r.Pi.COMPACT:
        default:
            return 'compact';
    }
}
