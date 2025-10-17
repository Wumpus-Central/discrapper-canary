n.d(t, { c: () => d }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(661975),
    o = n(982125),
    s = n(595824),
    l = n(483566),
    c = n(402453),
    u = n(415957);
function d(e) {
    var t, n;
    let { onChange: d, options: f, label: _, disabled: p, selectedValues: h } = e,
        m = i.useContext(c.KJ),
        g =
            null == m || null == (n = m.experiments) || null == (t = n.enabledExperiments)
                ? void 0
                : t.includes("mana-toggle-inputs"),
        E = (e) => {
            null == d || d(e);
        },
        b = (e, t) => {
            let n = t ? [...h, e] : h.filter((t) => t !== e);
            null == d || d(n);
        };
    return (0, r.jsx)(l.g, {
        label: _,
        role: "group",
        children: g
            ? (0, r.jsx)(a.cO, {
                  className: u.group,
                  value: h.map(String),
                  onChange: E,
                  "data-mana-component": "checkbox-group",
                  isDisabled: p,
                  children: f.map((e) =>
                      (0, r.jsx)(
                          o.C,
                          {
                              disabled: p || e.disabled,
                              checked: h.includes(e.value),
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
                  className: u.group,
                  children: f.map((e) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: u.backwardsCompatibleCheckbox,
                              children: (0, r.jsx)(s.h, {
                                  disabled: p || e.disabled,
                                  checked: h.includes(e.value),
                                  label: e.label,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                                  onChange: (t) => b(e.value, t),
                              }),
                          },
                          String(e.value),
                      ),
                  ),
              }),
    });
}
