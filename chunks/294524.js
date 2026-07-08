t.d(a, { t: () => d });
var l = t(248702),
    r = t(517e3),
    i = (0, l.x)(null),
    n = () => {
        let e = (0, l.g)(i);
        if (!e) throw Error("Tabs compound components must be used within <Tabs>");
        return e;
    },
    s = (e, a) => `${e}-tab-${a}`,
    o = (e, a) => `${e}-panel-${a}`,
    d = Object.assign(
        ({
            defaultValue: e,
            value: a,
            onValueChange: t,
            orientation: r = "horizontal",
            activation: n = "manual",
            listClassName: s,
            triggerClassName: o,
            activeTriggerClassName: d,
            children: c,
        }) => {
            let u = (0, l.m)(),
                [b, v] = (0, l.p)(e ?? a ?? ""),
                g = a ?? b;
            return (0, l.v)(i.Provider, {
                value: {
                    baseId: u,
                    activeValue: g,
                    setActiveValue: (e) => {
                        void 0 === a && v(e), t?.(e);
                    },
                    orientation: r,
                    activation: n,
                    listClassName: s,
                    triggerClassName: o,
                    activeTriggerClassName: d,
                },
                children: c,
            });
        },
        {
            List: ({ label: e, labelledBy: a, children: t }) => {
                let { listClassName: r, orientation: i } = n();
                return (0, l.v)("div", {
                    role: "tablist",
                    "aria-orientation": i,
                    "aria-label": e,
                    "aria-labelledby": a,
                    class: r,
                    children: t,
                });
            },
            Trigger: ({ value: e, disabled: a, children: t }) => {
                let {
                        baseId: i,
                        activeValue: d,
                        setActiveValue: c,
                        orientation: u,
                        activation: b,
                        triggerClassName: v,
                        activeTriggerClassName: g,
                    } = n(),
                    h = d === e;
                return (0, l.v)("button", {
                    type: "button",
                    role: "tab",
                    id: s(i, e),
                    "aria-selected": h,
                    "aria-controls": o(i, e),
                    tabIndex: h ? 0 : -1,
                    disabled: a,
                    "data-value": e,
                    class: (0, r.n)(v, h && g),
                    onClick: () => c(e),
                    onKeyDown: (e) => {
                        let a,
                            t = "horizontal" === u,
                            l = t ? "ArrowRight" : "ArrowDown",
                            r = t ? "ArrowLeft" : "ArrowUp";
                        if (e.key !== l && e.key !== r && "Home" !== e.key && "End" !== e.key) return;
                        let i = e.currentTarget.closest('[role="tablist"]');
                        if (!i) return;
                        let n = Array.from(i.querySelectorAll('[role="tab"]:not([disabled])')),
                            s = n.indexOf(e.currentTarget);
                        if (
                            -1 !== s &&
                            (e.key === l
                                ? (a = n[(s + 1) % n.length])
                                : e.key === r
                                  ? (a = n[(s - 1 + n.length) % n.length])
                                  : "Home" === e.key
                                    ? (a = n[0])
                                    : "End" === e.key && (a = n[n.length - 1]),
                            a && (e.preventDefault(), a.focus(), "automatic" === b))
                        ) {
                            let e = a.dataset.value;
                            void 0 !== e && c(e);
                        }
                    },
                    children: t,
                });
            },
            Content: ({ value: e, className: a, children: t }) => {
                let { baseId: r, activeValue: i } = n();
                return i === e
                    ? (0, l.v)("div", {
                          role: "tabpanel",
                          id: o(r, e),
                          "aria-labelledby": s(r, e),
                          class: a,
                          children: t,
                      })
                    : null;
            },
        },
    );
