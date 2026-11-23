var l = n(582128),
    r = n(855986),
    i = n(260498),
    a = n(385081);
n.d(
    t,
    {},
    {
        r: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "unknown",
                n = (0, r.bG)([i.Ay], () => null != e && null != i.Ay.getProject(e), [e]),
                s = l.useRef(null);
            return (
                l.useEffect(() => {
                    null != e && n && s.current !== e && ((s.current = e), (0, a.wQ)(e, t));
                }, [e, t, n]),
                l.useCallback((e) => s.current === e, [])
            );
        },
    },
);
