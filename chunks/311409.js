t.d(n, { G: () => E });
var r = t(477900),
    a = t(582128),
    s = t(503698),
    l = t.n(s),
    i = t(148839),
    o = t(140735),
    c = t(291747),
    u = t(406810),
    d = t(116711),
    m = t(834730);
let f = { day: 86400, hour: 3600, minute: 60, second: 1 };
function v(e, n) {
    let t = e;
    return n.map((e) => {
        let n = Math.floor(t / f[e]);
        return ((t -= n * f[e]), { unit: e, value: n });
    });
}
var h = t(289987);
let p = { "overlay-secondary": h.overlaySecondary, "overlay-primary": h.overlayPrimary },
    x = { md: "body-sm/semibold", sm: "body-xs/semibold" },
    N = { md: "xs", sm: "xxs" },
    y = { timer: c.TimerIcon, "days-left": u.ClockIcon };
function j(e, n, t) {
    let r = e.map((e) => new Intl.NumberFormat(n, { style: "unit", unit: e.unit, unitDisplay: t }).format(e.value));
    return new Intl.ListFormat(n, { style: t, type: "unit" }).format(r);
}
function g(e) {
    let { parts: n, locale: t, size: s } = e,
        l = new Intl.NumberFormat(t, { minimumIntegerDigits: 2 });
    return (0, r.jsx)(m.E, {
        tag: "span",
        variant: x[s],
        color: "none",
        tabularNumbers: !0,
        className: h.digits,
        children: n.map((e, n) => {
            let { unit: t, value: s } = e;
            return (0, r.jsxs)(
                a.Fragment,
                { children: [0 === n ? null : (0, r.jsx)("span", { className: h.separator }), l.format(s)] },
                t,
            );
        }),
    });
}
function E(e) {
    let {
            endsAt: n,
            appearance: t,
            showDays: s = !1,
            showSeconds: c = !1,
            showIcon: u = !0,
            size: E = "sm",
            variant: b,
            onEnd: I,
        } = e,
        { locale: A, i18n: C } = (0, d.G9)(),
        { visibleParts: _, spokenParts: w } = (function (e, n, t, r) {
            let a;
            if ("days-left" === e) {
                let e = (function (e) {
                    if (e >= f.day) {
                        let [n, t] = v(e, ["day", "hour"]);
                        return 1 === n.value && 0 === t.value ? [{ unit: "hour", value: 24 }] : [n, t];
                    }
                    let n = e >= f.hour || e <= 0 ? "hour" : e >= f.minute ? "minute" : "second";
                    return v(e, [n]);
                })(n);
                return { visibleParts: e, spokenParts: e };
            }
            let s =
                ((a = n > 0 && n < f.minute), [...(t ? ["day"] : []), "hour", "minute", ...(r || a ? ["second"] : [])]);
            return {
                visibleParts: v(n, s),
                spokenParts: (function (e, n) {
                    if (n.includes("second") && e < f.minute) return v(e, ["second"]);
                    let t = v(
                            e,
                            n.filter((e) => "second" !== e),
                        ),
                        r = t.filter((e) => e.value > 0);
                    return r.length > 0 ? r : t.slice(-1);
                })(n, s),
            };
        })(
            t,
            (function (e, n) {
                let t = e.getTime(),
                    [r, s] = a.useState(() => Date.now());
                a.useLayoutEffect(() => {
                    let e;
                    return (
                        !(function n() {
                            let r = Date.now();
                            s(r);
                            let a = t - r;
                            if (a > 0) {
                                let t = a % 1e3;
                                e = setTimeout(n, 0 === t ? 1e3 : t);
                            }
                        })(),
                        () => clearTimeout(e)
                    );
                }, [t]);
                let l = Math.max(0, Math.ceil((t - r) / 1e3)),
                    o = (0, i.A)(() => n?.()),
                    c = a.useRef(!1);
                return (
                    a.useEffect(() => {
                        t > Date.now() && (c.current = !1);
                    }, [t]),
                    a.useEffect(() => {
                        0 !== l || c.current || ((c.current = !0), o());
                    }, [l, o]),
                    l
                );
            })(n, I),
            s,
            c,
        ),
        T = C.GLOBAL_BANNER_COUNTDOWN_TIME_LEFT(j(w, A, "long")),
        L =
            "timer" === t
                ? (0, r.jsx)(g, { parts: _, locale: A, size: E })
                : (0, r.jsx)(m.E, {
                      tag: "span",
                      variant: x[E],
                      color: "none",
                      tabularNumbers: !0,
                      children: C.GLOBAL_BANNER_COUNTDOWN_TIME_LEFT(j(_, A, "narrow")),
                  }),
        B = y[t];
    return (0, r.jsxs)("span", {
        role: "timer",
        "data-countdown-appearance": t,
        className: h.countdown,
        children: [
            (0, r.jsx)(o.A, { children: T }),
            (0, r.jsxs)("span", {
                "aria-hidden": !0,
                className: l()(h.pill, h[E], p[b], !u && h.withoutIcon),
                children: [u ? (0, r.jsx)(B, { size: N[E], color: "currentColor", className: h.icon }) : null, L],
            }),
        ],
    });
}
