n.d(t, { q: () => c });
var r = n(24156),
    l = n(473749),
    i = n(752689),
    o = n(447770),
    a = n(159447),
    s = n(112683);
function c(e, t, n) {
    let { isDisabled: c } = e,
        u = (0, i.Me)(),
        d = (0, i.Me)(),
        f = (0, s.Av)(),
        p = (0, l.useRef)(null),
        b = (0, l.useCallback)(() => {
            (p.current = requestAnimationFrame(() => {
                n.current && n.current.setAttribute("hidden", "until-found");
            })),
                (0, r.flushSync)(() => {
                    t.toggle();
                });
        }, [n, t]);
    (0, o.z)(n, "beforematch", b);
    let y = (0, l.useRef)(null);
    return (
        (0, a.b)(() => {
            if ((p.current && cancelAnimationFrame(p.current), n.current && !c && !f)) {
                let e = n.current;
                null == y.current || "function" != typeof e.getAnimations
                    ? t.isExpanded
                        ? (e.removeAttribute("hidden"),
                          e.style.setProperty("--disclosure-panel-width", "auto"),
                          e.style.setProperty("--disclosure-panel-height", "auto"))
                        : (e.setAttribute("hidden", "until-found"),
                          e.style.setProperty("--disclosure-panel-width", "0px"),
                          e.style.setProperty("--disclosure-panel-height", "0px"))
                    : t.isExpanded !== y.current &&
                      (t.isExpanded
                          ? (e.removeAttribute("hidden"),
                            e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"),
                            e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    e.style.setProperty("--disclosure-panel-width", "auto"),
                                        e.style.setProperty("--disclosure-panel-height", "auto");
                                })
                                .catch(() => {}))
                          : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"),
                            e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"),
                            window.getComputedStyle(e).height,
                            e.style.setProperty("--disclosure-panel-width", "0px"),
                            e.style.setProperty("--disclosure-panel-height", "0px"),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => e.setAttribute("hidden", "until-found"))
                                .catch(() => {}))),
                    (y.current = t.isExpanded);
            }
        }, [c, n, t.isExpanded, f]),
        (0, l.useEffect)(
            () => () => {
                p.current && cancelAnimationFrame(p.current);
            },
            [],
        ),
        {
            buttonProps: {
                id: u,
                "aria-expanded": t.isExpanded,
                "aria-controls": d,
                onPress: (e) => {
                    c || "keyboard" === e.pointerType || t.toggle();
                },
                isDisabled: c,
                onPressStart(e) {
                    "keyboard" !== e.pointerType || c || t.toggle();
                },
            },
            panelProps: {
                id: d,
                role: "group",
                "aria-labelledby": u,
                "aria-hidden": !t.isExpanded,
                hidden: f || c ? c || !t.isExpanded : void 0,
            },
        }
    );
}
