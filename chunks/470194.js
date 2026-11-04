var n = r(829904),
    i = r(582128);
r.d(
    t,
    {},
    {
        F: function (e, t, r) {
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
        },
    },
);
