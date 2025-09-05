n.d(t, {
    Y: () => E,
    k: () => y,
}),
    n(413496),
    n(433524),
    n(35282),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(657707),
    o = n(793030),
    s = n(442837),
    l = n(756715),
    c = n(993365),
    u = n(680018),
    d = n(51251),
    f = n(37234),
    _ = n(594174),
    p = n(997612),
    h = n(981631),
    m = n(120983);
let g = RegExp("^dev://mana(/([-\\w._0-9]+))?$", "i");
function E(e) {
    return g.test(e);
}
function b(e) {
    let t = e.match(g);
    return null == t || t.length < 2 ? null : t[2];
}
function y(e) {
    var t;
    let n = (0, s.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        g = i.useMemo(() => {
            let t = b(e.url);
            for (let e of d.g.collections) {
                let n = e.groups.find((e) => e.stories.some((e) => e.id === t));
                if (null != n) return n.stories.find((e) => e.id === t);
            }
        }, [e.url]),
        E = null != (t = null == g ? void 0 : g.name) ? t : "Mana Playground",
        y =
            null != g && null != g.docs
                ? (0, r.jsx)(l.Anchor, {
                      href: g.docs,
                      children: "Documentation",
                  })
                : "Explore the Mana Design System",
        O = i.useCallback(() => {
            if (null != g) {
                for (let e of d.g.collections)
                    if (e.groups.some((e) => e.stories.some((e) => e.id === g.id))) {
                        p.$.setState({
                            selectedCollection: e.id,
                            selectedStory: g.id,
                        });
                        break;
                    }
            }
            (0, f.jN)(h.S9g.MANA_PLAYGROUND);
        }, [g]);
    return n
        ? (0, r.jsx)("div", {
              className: m.root,
              "data-has-story": null != g,
              children: (0, r.jsxs)(o.Kq, {
                  direction: null == g ? "vertical" : "horizontal",
                  align: null == g ? "start" : "center",
                  gap: 12,
                  justify: null == g ? "end" : "space-between",
                  children: [
                      (0, r.jsx)("div", {
                          className: m.header,
                          children: (0, r.jsxs)(o.Kq, {
                              direction: "horizontal",
                              align: "start",
                              gap: 8,
                              children: [
                                  (0, r.jsx)(a.hh5, { size: "lg" }),
                                  (0, r.jsxs)(o.Kq, {
                                      direction: "vertical",
                                      gap: 0,
                                      children: [
                                          (0, r.jsx)(c.x, {
                                              variant: "text-md/semibold",
                                              children: E,
                                          }),
                                          (0, r.jsx)(c.x, {
                                              variant: "text-sm/normal",
                                              children: y,
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      }),
                      (0, r.jsx)(u.z, {
                          size: "sm",
                          onClick: O,
                          text: "Open Playground",
                          fullWidth: null == g,
                      }),
                  ],
              }),
          })
        : null;
}
