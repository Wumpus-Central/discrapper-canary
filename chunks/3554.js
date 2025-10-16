n.d(t, { c: () => u }), n(388685), n(953529);
var r = n(951288);
n(647438);
var i = n(661975),
    a = n(982125),
    o = n(595824),
    s = n(483566),
    l = n(402453),
    c = n(415957);
function u(e) {
    let { onChange: t, options: n, label: u, disabled: d, selectedValues: f } = e,
        _ = (0, l.A)("CheckboxGroup"),
        p = (e) => {
            null == t || t(e);
        },
        h = (e, n) => {
            let r = n ? [...f, e] : f.filter((t) => t !== e);
            null == t || t(r);
        };
    return (0, r.jsx)(s.g, {
        label: u,
        role: "group",
        children: _
            ? (0, r.jsx)(i.cO, {
                  className: c.group,
                  value: f.map(String),
                  onChange: p,
                  "data-mana-component": "checkbox-group",
                  isDisabled: d,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          a.C,
                          {
                              disabled: d || e.disabled,
                              checked: f.includes(e.value),
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
                  className: c.group,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: c.backwardsCompatibleCheckbox,
                              children: (0, r.jsx)(o.h, {
                                  disabled: d || e.disabled,
                                  checked: f.includes(e.value),
                                  label: e.label,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                                  onChange: (t) => h(e.value, t),
                              }),
                          },
                          String(e.value),
                      ),
                  ),
              }),
    });
}
