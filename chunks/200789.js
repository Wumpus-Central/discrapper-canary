n.d(t, { r: () => s });
var l = n(582128),
    r = n(17928),
    a = n(260498),
    i = n(385081);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "unknown",
        n = (0, r.bG)([a.Ay], () => null != e && null != a.Ay.getProject(e), [e]),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            null != e && n && s.current !== e && ((s.current = e), (0, i.wQ)(e, t));
        }, [e, t, n]),
        l.useCallback((e) => s.current === e, [])
    );
}
