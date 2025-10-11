n.d(t, { e: () => c });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(768581),
    s = n(73930);
let l = 20,
    c = (e) => {
        let { application: t, iconSize: n = l } = e,
            c = i.useMemo(
                () =>
                    o.ZP.getApplicationIconURL({
                        id: t.id,
                        icon: t.icon,
                        size: n,
                    }),
                [t, n],
            );
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: s.container,
                  children: [
                      (0, r.jsx)("img", {
                          className: s.applicationIcon,
                          src: c,
                          alt: "",
                          height: n,
                          width: n,
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: t.name,
                      }),
                  ],
              });
    };
