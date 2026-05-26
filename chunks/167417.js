i.d(a, { $: () => u });
var l = i(627968),
    n = i(64700),
    d = i(47948),
    s = i(568385),
    c = i(150934),
    r = i(452027),
    t = i(460890),
    o = i(472276);
function u(e) {
    let { onChange: a, options: i, selectedValues: u, disabled: p = !1, ...h } = e,
        b = n.useContext(t.VO),
        g = b?.experiments?.enabledExperiments?.includes("mana-toggle-inputs");
    return (0, l.jsx)(r.D, {
        ...h,
        role: "group",
        children: g
            ? (0, l.jsx)(d.$Q, {
                  className: o.O,
                  value: u.map(String),
                  onChange: (e) => {
                      a?.(e);
                  },
                  "data-mana-component": "checkbox-group",
                  isDisabled: p,
                  children: i.map((e) =>
                      (0, l.jsx)(
                          s.J,
                          {
                              disabled: p || e.disabled,
                              checked: u.includes(e.value),
                              label: e.label,
                              value: e.value,
                              description: e.description,
                              leadingIcon: e.leadingIcon,
                          },
                          String(e.value),
                      ),
                  ),
              })
            : (0, l.jsx)("div", {
                  className: o.O,
                  children: i.map((e) =>
                      (0, l.jsx)(
                          "div",
                          {
                              className: o.I,
                              children: (0, l.jsx)(c.K, {
                                  disabled: p || e.disabled,
                                  checked: u.includes(e.value),
                                  label: e.label,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                                  onChange: (i) => {
                                      var l;
                                      let n;
                                      return (l = e.value), (n = i ? [...u, l] : u.filter((e) => e !== l)), void a?.(n);
                                  },
                              }),
                          },
                          String(e.value),
                      ),
                  ),
              }),
    });
}
