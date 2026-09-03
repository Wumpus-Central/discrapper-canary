r.d(t, { F: () => o });
var n = r(241872),
    i = r(582128);
function o(e, t, r) {
    let o = (0, n.J)((e) => {
        r && !e.defaultPrevented && r(t);
    });
    (0, i.useEffect)(() => {
        let t = e?.current?.form;
        return (
            t?.addEventListener("reset", o),
            () => {
                t?.removeEventListener("reset", o);
            }
        );
    }, [e]);
}
