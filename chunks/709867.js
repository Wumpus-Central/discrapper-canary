n.d(t, { c: () => l }), n(388685), n(953529);
var r = n(951288);
n(647438);
var i = n(661975),
    a = n(793030),
    o = n(877371),
    s = n(675042);
function l(e) {
    let { onChange: t, options: n, label: l, disabled: c, selectedValues: u } = e,
        d = (0, o.A)("CheckboxGroup"),
        f = (e) => {
            null == t || t(e);
        },
        _ = (e, n) => {
            let r = n ? [...u, e] : u.filter((t) => t !== e);
            null == t || t(r);
        };
    return (0, r.jsx)(a.gNt, {
        label: l,
        role: "group",
        children: d
            ? (0, r.jsx)(i.cO, {
                  className: s.group,
                  value: u.map(String),
                  onChange: f,
                  "data-mana-component": "checkbox-group",
                  isDisabled: c,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          a.Cnq,
                          {
                              disabled: c || e.disabled,
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
            : (0, r.jsx)("div", {
                  className: s.group,
                  children: n.map((e) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: s.backwardsCompatibleCheckbox,
                              children: (0, r.jsx)(a.h7S, {
                                  disabled: c || e.disabled,
                                  checked: u.includes(e.value),
                                  label: e.label,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                                  onChange: (t) => _(e.value, t),
                              }),
                          },
                          String(e.value),
                      ),
                  ),
              }),
    });
}
