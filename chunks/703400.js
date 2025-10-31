n.d(t, { e: () => l });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(22928),
    o = n(73930);
let s = 20,
    l = (e) => {
        let { application: t, iconSize: n = s } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: o.container,
                  children: [
                      (0, r.jsx)(a.h, {
                          application: t,
                          iconSize: n,
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: t.name,
                      }),
                  ],
              });
    };
