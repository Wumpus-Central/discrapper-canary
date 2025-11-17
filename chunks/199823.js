n.d(t, { M: () => a }), n(49124);
var r = n(54381);
n(473749);
var i = n(635041);
function a(e) {
    let {
        name: t,
        form: n,
        disabled: a,
        autoComplete: o,
        selectionMode: s,
        selectedItems: l,
        onSelectionChange: c,
        listItems: u,
    } = e;
    if (null == t && (null == o || "off" === o)) return null;
    function d(e) {
        let t = Array.from(e.target.selectedOptions).map((e) => e.dataset.id);
        c(u.filter((e) => t.includes(e.id)));
    }
    return (0, r.jsx)(i.n, {
        children: (0, r.jsx)("select", {
            "aria-hidden": !0,
            tabIndex: -1,
            disabled: a,
            name: t,
            form: n,
            multiple: "multiple" === s,
            autoComplete: o,
            onChange: d,
            children:
                null == u
                    ? void 0
                    : u.map((e) => {
                          let t = "object" == typeof e.value ? JSON.stringify(e.value) : String(e.value);
                          return (0, r.jsx)(
                              "option",
                              {
                                  "data-id": e.id,
                                  value: t,
                                  selected: l.includes(e),
                                  children: e.label,
                              },
                              e.id,
                          );
                      }),
        }),
    });
}
