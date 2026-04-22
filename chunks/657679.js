"use strict";
n.d(t, { A: () => d });
var a = n(627968),
    i = n(64700),
    r = n(691885),
    l = n(818050);
let s = (e) => {
        let { element: t, onChange: n, initialOption: s } = e,
            [d, o] = i.useState("");
        i.useEffect(() => {
            o(s ?? "");
        }, [s]);
        let c = t.name,
            { title: u, options: _ } = t.data,
            m = i.useMemo(() => _.map((e) => ({ ...e, id: e.id ?? e.value })), [_]),
            p = i.useCallback(
                (e) => {
                    null != e && (o(e), n(e));
                },
                [n],
            );
        return (0, a.jsx)(
            "div",
            {
                className: l.QB,
                children: (0, a.jsx)(r.l, {
                    label: u,
                    value: d,
                    required: t.should_submit_data,
                    onSelectionChange: p,
                    options: m,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            },
            c,
        );
    },
    d = (e) => {
        let { elements: t, onChange: n, state: i } = e,
            r = t.map((e) => {
                let t = e.name;
                return (0, a.jsx)(
                    s,
                    { element: e, initialOption: i?.[t]?.value ?? void 0, onChange: (e) => n(t, e) },
                    t,
                );
            });
        return (0, a.jsx)("div", { children: r });
    };
