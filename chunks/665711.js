n.d(t, { W: () => l });
var r = n(627968),
    i = n(64700),
    a = n(486020),
    s = n(519443);
let o = 20,
    l = (e) => {
        let { application: t, iconSize: n = o } = e,
            l = i.useMemo(
                () =>
                    a.Ay.getApplicationIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: n,
                    }),
                [t, n],
            );
        return (0, r.jsx)("img", {
            className: s.I,
            src: l,
            alt: "",
            height: n,
            width: n,
        });
    };
