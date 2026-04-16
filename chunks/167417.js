"use strict";
n.d(t, { $: () => d });
var r = n(627968),
    i = n(64700),
    s = n(974213),
    a = n(568385),
    o = n(150934),
    l = n(452027),
    u = n(460890),
    c = n(1172);
function d(e) {
    let { onChange: t, options: n, selectedValues: d, disabled: _ = !1, ...f } = e,
        p = i.useContext(u.VO),
        h = p?.experiments?.enabledExperiments?.includes("mana-toggle-inputs"),
        m = (e) => {
            t?.(e);
        },
        E = (e, n) => {
            let r = n ? [...d, e] : d.filter((t) => t !== e);
            t?.(r);
        };
    return (0, r.jsx)(l.D, {
        ...f,
        role: "group",
        children: h
            ? (0, r.jsx)(s.$Q, {
                  className: c.O,
                  value: d.map(String),
                  onChange: m,
                  "data-mana-component": "checkbox-group",
                  isDisabled: _,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          a.J,
                          {
                              disabled: _ || e.disabled,
                              checked: d.includes(e.value),
                              label: e.label,
                              value: e.value,
                              description: e.description,
                              leadingIcon: e.leadingIcon,
                          },
                          String(e.value),
                      ),
                  ),
              })
            : (0, r.jsx)("div", {
                  className: c.O,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: c.I,
                              children: (0, r.jsx)(o.K, {
                                  disabled: _ || e.disabled,
                                  checked: d.includes(e.value),
                                  label: e.label,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                                  onChange: (t) => E(e.value, t),
                              }),
                          },
                          String(e.value),
                      ),
                  ),
              }),
    });
}
