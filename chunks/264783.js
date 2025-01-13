r.d(n, {
    A: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(695346);
function o() {
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
function l() {
    let e = s.N5.useSetting(),
        n = o();
    return 'auto' === e ? n : e.startsWith('cozy') ? 'cozy' : 'compact';
}
