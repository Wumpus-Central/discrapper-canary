var i = n(582128),
    r = n(253932),
    a = n(157146);
n.d(
    t,
    {},
    {
        C: function () {
            let e = r.Xi.useSetting(),
                t = (function () {
                    let [e, t] = i.useState(() => (window.matchMedia(a.U).matches ? "cozy" : "compact"));
                    return (
                        i.useEffect(() => {
                            let e = window.matchMedia(a.U);
                            function n(e) {
                                t(e.matches ? "cozy" : "compact");
                            }
                            return (
                                e.addEventListener("change", n),
                                () => {
                                    e.removeEventListener("change", n);
                                }
                            );
                        }, []),
                        e
                    );
                })();
            return (0, a.d)(e, t);
        },
    },
);
