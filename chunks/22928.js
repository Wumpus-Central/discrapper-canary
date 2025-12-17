n.d(t, { h: () => l });
var r = n(54381),
    i = n(473749),
    a = n(768581),
    o = n(802565);
let s = 20,
    l = (e) => {
        let { application: t, iconSize: n = s } = e,
            l = i.useMemo(
                () =>
                    a.ZP.getApplicationIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: n,
                    }),
                [t, n],
            );
        return (0, r.jsx)("img", {
            className: o.applicationIcon,
            src: l,
            alt: "",
            height: n,
            width: n,
        });
    };
