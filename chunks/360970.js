t.d(a, { N: () => u });
var r = t(928231),
    n = t(64700),
    i = t(126031);
let l = ["day", "month", "year"],
    o = { hour: 1, minute: 2, second: 3 };
function u(e) {
    let { state: a } = e,
        { containerProps: t, inputProps: u } = (function (e, a) {
            let { autoComplete: t, isDisabled: n, name: u } = e,
                { visuallyHiddenProps: s } = (0, i.B)({ style: { position: "fixed", top: 0, left: 0 } }),
                d = 60;
            "second" === a.granularity ? (d = 1) : "hour" === a.granularity && (d = 3600);
            let c = null == a.value ? "" : a.value.toString(),
                m = "day" === a.granularity ? "date" : "datetime-local",
                h = ["hour", "minute", "second"],
                y = 0;
            return (
                h.includes(a.granularity) && ((y = o[a.granularity]), (h = h.slice(0, y))),
                {
                    containerProps: {
                        ...s,
                        "aria-hidden": !0,
                        "data-react-aria-prevent-focus": !0,
                        "data-a11y-ignore": "aria-hidden-focus",
                    },
                    inputProps: {
                        tabIndex: -1,
                        autoComplete: t,
                        disabled: n,
                        type: m,
                        form: "",
                        name: u,
                        step: d,
                        value: c,
                        onChange: (e) => {
                            let t = e.target.value.toString();
                            if (t)
                                try {
                                    let e = (0, r.DP)(t);
                                    if (("day" === a.granularity && (e = (0, r._U)(t)), "setSegment" in a))
                                        for (let t in e)
                                            l.includes(t) && a.setSegment(t, e[t]),
                                                h.includes(t) && a.setSegment(t, e[t]);
                                    a.setValue(e);
                                } catch {}
                        },
                    },
                }
            );
        })({ ...e }, a);
    return n.createElement("div", { ...t, "data-testid": "hidden-dateinput-container" }, n.createElement("input", u));
}
