a.d(l, { $: () => c });
var t = a(627968),
    n = a(64700),
    o = a(974213),
    i = a(568385),
    r = a(150934),
    s = a(452027),
    d = a(460890),
    u = a(1172);
function c(e) {
    let { onChange: l, options: a, selectedValues: c, disabled: b = !1, ...p } = e,
        m = n.useContext(d.VO),
        h = m?.experiments?.enabledExperiments?.includes("mana-toggle-inputs");
    return (0, t.jsx)(s.D, {
        ...p,
        role: "group",
        children: h
            ? (0, t.jsx)(o.$Q, {
                  className: u.O,
                  value: c.map(String),
                  onChange: (e) => {
                      l?.(e);
                  },
                  "data-mana-component": "checkbox-group",
                  isDisabled: b,
                  children: a.map((e) =>
                      (0, t.jsx)(
                          i.J,
                          {
                              disabled: b || e.disabled,
                              checked: c.includes(e.value),
                              label: e.label,
                              value: e.value,
                              description: e.description,
                              leadingIcon: e.leadingIcon,
                          },
                          String(e.value),
                      ),
                  ),
              })
            : (0, t.jsx)("div", {
                  className: u.O,
                  children: a.map((e) =>
                      (0, t.jsx)(
                          "div",
                          {
                              className: u.I,
                              children: (0, t.jsx)(r.K, {
                                  disabled: b || e.disabled,
                                  checked: c.includes(e.value),
                                  label: e.label,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                                  onChange: (a) => {
                                      var t;
                                      let n;
                                      return (t = e.value), (n = a ? [...c, t] : c.filter((e) => e !== t)), void l?.(n);
                                  },
                              }),
                          },
                          String(e.value),
                      ),
                  ),
              }),
    });
}
