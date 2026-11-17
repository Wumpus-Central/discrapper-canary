var l = n(477900),
    r = n(582128);
n.d(
    t,
    {},
    {
        A: (e) => {
            let { src: t, className: n, width: s, height: a, onError: i } = e,
                o = r.useRef(null);
            return (
                r.useEffect(() => {
                    let e = new Image();
                    return (
                        (e.onload = () => {
                            let t = o.current,
                                n = t?.getContext("2d");
                            null != t &&
                                null != n &&
                                ((t.width = e.naturalWidth), (t.height = e.naturalHeight), n.drawImage(e, 0, 0));
                        }),
                        (e.onerror = i ?? null),
                        (e.src = t),
                        () => {
                            ((e.onload = null), (e.onerror = null));
                        }
                    );
                }, [t, i]),
                (0, l.jsx)("canvas", { ref: o, className: n, width: s, height: a, "aria-hidden": "true" })
            );
        },
    },
);
