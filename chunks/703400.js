n.d(t, { e: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(22928),
    a = n(73930);
let s = 20,
    l = (e) => {
        let { application: t, iconSize: n = s } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: a.container,
                  children: [
                      (0, r.jsx)(o.h, {
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
