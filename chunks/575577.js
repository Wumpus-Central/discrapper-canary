e.d(t, { A: () => i });
var u = e(582128),
    d = e(398773),
    r = e(751841);
function i(n) {
    let { pathname: t, search: e, hash: i } = n;
    u.useEffect(() => {
        (0, r.tb)(t) || (0, d.xG)(`${t}${e}${i}`);
    }, [t, e, i]);
}
