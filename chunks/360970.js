"use strict";
n.d(t, { N: () => u });
var r = n(928231),
    i = n(64700),
    a = n(126031);
let s = ["day", "month", "year"],
    o = { hour: 1, minute: 2, second: 3 };
function l(e, t) {
    let { autoComplete: n, isDisabled: i, name: l } = e,
        { visuallyHiddenProps: u } = (0, a.B)({ style: { position: "fixed", top: 0, left: 0 } }),
        c = 60;
    "second" === t.granularity ? (c = 1) : "hour" === t.granularity && (c = 3600);
    let d = null == t.value ? "" : t.value.toString(),
        _ = "day" === t.granularity ? "date" : "datetime-local",
        f = ["hour", "minute", "second"],
        p = 0;
    return (
        f.includes(t.granularity) && ((p = o[t.granularity]), (f = f.slice(0, p))),
        {
            containerProps: {
                ...u,
                "aria-hidden": !0,
                "data-react-aria-prevent-focus": !0,
                "data-a11y-ignore": "aria-hidden-focus",
            },
            inputProps: {
                tabIndex: -1,
                autoComplete: n,
                disabled: i,
                type: _,
                form: "",
                name: l,
                step: c,
                value: d,
                onChange: (e) => {
                    let n = e.target.value.toString();
                    if (n)
                        try {
                            let e = (0, r.DP)(n);
                            if (("day" === t.granularity && (e = (0, r._U)(n)), "setSegment" in t))
                                for (let n in e)
                                    s.includes(n) && t.setSegment(n, e[n]), f.includes(n) && t.setSegment(n, e[n]);
                            t.setValue(e);
                        } catch {}
                },
            },
        }
    );
}
function u(e) {
    let { state: t } = e,
        { containerProps: n, inputProps: r } = l({ ...e }, t);
    return i.createElement("div", { ...n, "data-testid": "hidden-dateinput-container" }, i.createElement("input", r));
}
