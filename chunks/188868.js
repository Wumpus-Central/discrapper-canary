d.d(t, { t: () => Z });
var i = d(287822),
    e = d(898369),
    c = (0, i.b)(null),
    a = () => {
        let l = (0, i.g)(c);
        if (!l) throw Error("Tabs compound components must be used within <Tabs>");
        return l;
    },
    s = (l, t) => `${l}-tab-${t}`,
    n = (l, t) => `${l}-panel-${t}`,
    Z = Object.assign(
        ({
            defaultValue: l,
            value: t,
            onValueChange: d,
            orientation: e = "horizontal",
            activation: a = "manual",
            listClassName: s,
            triggerClassName: n,
            activeTriggerClassName: Z,
            children: b,
        }) => {
            let m = (0, i.m)(),
                [o, u] = (0, i.p)(l ?? t ?? ""),
                h = t ?? o;
            return (0, i.v)(c.Provider, {
                value: {
                    baseId: m,
                    activeValue: h,
                    setActiveValue: (l) => {
                        void 0 === t && u(l), d?.(l);
                    },
                    orientation: e,
                    activation: a,
                    listClassName: s,
                    triggerClassName: n,
                    activeTriggerClassName: Z,
                },
                children: b,
            });
        },
        {
            List: ({ label: l, labelledBy: t, children: d }) => {
                let { listClassName: e, orientation: c } = a();
                return (0, i.v)("div", {
                    role: "tablist",
                    "aria-orientation": c,
                    "aria-label": l,
                    "aria-labelledby": t,
                    class: e,
                    children: d,
                });
            },
            Trigger: ({ value: l, disabled: t, children: d }) => {
                let {
                        baseId: c,
                        activeValue: Z,
                        setActiveValue: b,
                        orientation: m,
                        activation: o,
                        triggerClassName: u,
                        activeTriggerClassName: h,
                    } = a(),
                    W = Z === l;
                return (0, i.v)("button", {
                    type: "button",
                    role: "tab",
                    id: s(c, l),
                    "aria-selected": W,
                    "aria-controls": n(c, l),
                    tabIndex: W ? 0 : -1,
                    disabled: t,
                    "data-value": l,
                    class: (0, e.n)(u, W && h),
                    onClick: () => b(l),
                    onKeyDown: (l) => {
                        let t,
                            d = "horizontal" === m,
                            i = d ? "ArrowRight" : "ArrowDown",
                            e = d ? "ArrowLeft" : "ArrowUp";
                        if (l.key !== i && l.key !== e && "Home" !== l.key && "End" !== l.key) return;
                        let c = l.currentTarget.closest('[role="tablist"]');
                        if (!c) return;
                        let a = Array.from(c.querySelectorAll('[role="tab"]:not([disabled])')),
                            s = a.indexOf(l.currentTarget);
                        if (
                            -1 !== s &&
                            (l.key === i
                                ? (t = a[(s + 1) % a.length])
                                : l.key === e
                                  ? (t = a[(s - 1 + a.length) % a.length])
                                  : "Home" === l.key
                                    ? (t = a[0])
                                    : "End" === l.key && (t = a[a.length - 1]),
                            t && (l.preventDefault(), t.focus(), "automatic" === o))
                        ) {
                            let l = t.dataset.value;
                            void 0 !== l && b(l);
                        }
                    },
                    children: d,
                });
            },
            Content: ({ value: l, className: t, children: d }) => {
                let { baseId: e, activeValue: c } = a();
                return c !== l
                    ? null
                    : (0, i.v)("div", {
                          role: "tabpanel",
                          id: n(e, l),
                          "aria-labelledby": s(e, l),
                          class: t,
                          children: d,
                      });
            },
        },
    );
