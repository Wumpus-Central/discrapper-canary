r.d(n, {
    A: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(524437),
    s = r(695346);
function l() {
    let [e, n] = a.useState('cozy');
    return (
        a.useEffect(() => {
            let e = window.matchMedia('(min-width: 1024px) and (min-height: 820px)'),
                r = (e) => {
                    n(e.matches ? 'cozy' : 'compact');
                };
            return (
                e.addEventListener('change', r),
                () => {
                    e.removeEventListener('change', r);
                }
            );
        }, []),
        e
    );
}
function u() {
    let e = s.YC.useSetting(),
        n = l();
    switch (e) {
        case o.Pi.RESPONSIVE:
            return n;
        case o.Pi.COZY:
            return 'cozy';
        case o.Pi.COMPACT:
        default:
            return 'compact';
    }
}
