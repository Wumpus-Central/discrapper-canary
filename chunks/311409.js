t.d(n, { G: () => w });
var r = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    o = t(148839),
    c = t(140735),
    l = t(291747),
    u = t(406810),
    d = t(116711),
    m = t(834730);
let f = { day: 86400, hour: 3600, minute: 60, second: 1 };
function p(e, n) {
    let t = e;
    return n.map((e) => {
        let n = Math.floor(t / f[e]);
        return ((t -= n * f[e]), { unit: e, value: n });
    });
}
var v = t(289987);
let h = { "overlay-secondary": v.overlaySecondary, "overlay-primary": v.overlayPrimary },
    y = { md: "body-sm/semibold", sm: "body-xs/semibold" },
    x = { md: "xs", sm: "xxs" },
    g = { timer: l.TimerIcon, "days-left": u.ClockIcon };
function j(e, n, t) {
    let r = e.map((e) => new Intl.NumberFormat(n, { style: "unit", unit: e.unit, unitDisplay: t }).format(e.value));
    return new Intl.ListFormat(n, { style: t, type: "unit" }).format(r);
}
function A(e) {
    let { parts: n, locale: t, size: a } = e,
        i = new Intl.NumberFormat(t, { minimumIntegerDigits: 2 });
    return (0, r.jsx)(m.E, {
        tag: "span",
        variant: y[a],
        color: "none",
        tabularNumbers: !0,
        className: v.digits,
        children: n.map((e, n) => {
            let { unit: t, value: a } = e;
            return (0, r.jsxs)(
                s.Fragment,
                { children: [0 === n ? null : (0, r.jsx)("span", { className: v.separator }), i.format(a)] },
                t,
            );
        }),
    });
}
function w(e) {
    let {
            endsAt: n,
            appearance: t,
            showDays: a = !1,
            showSeconds: l = !1,
            showIcon: u = !0,
            size: w = "sm",
            variant: N,
            onEnd: b,
        } = e,
        { locale: I, i18n: E } = (0, d.G9)(),
        { visibleParts: C, spokenParts: _ } = (function (e, n, t, r) {
            let s;
            if ("days-left" === e) {
                let e = (function (e) {
                    if (e >= f.day) {
                        let [n, t] = p(e, ["day", "hour"]);
                        return 1 === n.value && 0 === t.value ? [{ unit: "hour", value: 24 }] : [n, t];
                    }
                    let n = e >= f.hour || e <= 0 ? "hour" : e >= f.minute ? "minute" : "second";
                    return p(e, [n]);
                })(n);
                return { visibleParts: e, spokenParts: e };
            }
            let a =
                ((s = n > 0 && n < f.minute), [...(t ? ["day"] : []), "hour", "minute", ...(r || s ? ["second"] : [])]);
            return {
                visibleParts: p(n, a),
                spokenParts: (function (e, n) {
                    if (n.includes("second") && e < f.minute) return p(e, ["second"]);
                    let t = p(
                            e,
                            n.filter((e) => "second" !== e),
                        ),
                        r = t.filter((e) => e.value > 0);
                    return r.length > 0 ? r : t.slice(-1);
                })(n, a),
            };
        })(
            t,
            (function (e, n) {
                let t = e.getTime(),
                    [r, a] = s.useState(() => Date.now());
                s.useLayoutEffect(() => {
                    let e;
                    return (
                        !(function n() {
                            let r = Date.now();
                            a(r);
                            let s = t - r;
                            if (s > 0) {
                                let t = s % 1e3;
                                e = setTimeout(n, 0 === t ? 1e3 : t);
                            }
                        })(),
                        () => clearTimeout(e)
                    );
                }, [t]);
                let i = Math.max(0, Math.ceil((t - r) / 1e3)),
                    c = (0, o.A)(() => n?.()),
                    l = s.useRef(!1);
                return (
                    s.useEffect(() => {
                        t > Date.now() && (l.current = !1);
                    }, [t]),
                    s.useEffect(() => {
                        0 !== i || l.current || ((l.current = !0), c());
                    }, [i, c]),
                    i
                );
            })(n, b),
            a,
            l,
        ),
        D = E.GLOBAL_BANNER_COUNTDOWN_TIME_LEFT(j(_, I, "long")),
        T =
            "timer" === t
                ? (0, r.jsx)(A, { parts: C, locale: I, size: w })
                : (0, r.jsx)(m.E, {
                      tag: "span",
                      variant: y[w],
                      color: "none",
                      tabularNumbers: !0,
                      children: E.GLOBAL_BANNER_COUNTDOWN_TIME_LEFT(j(C, I, "narrow")),
                  }),
        L = g[t];
    return (0, r.jsxs)("span", {
        role: "timer",
        "data-countdown-appearance": t,
        className: v.countdown,
        children: [
            (0, r.jsx)(c.A, { children: D }),
            (0, r.jsxs)("span", {
                "aria-hidden": !0,
                className: i()(v.pill, v[w], h[N], !u && v.withoutIcon),
                children: [u ? (0, r.jsx)(L, { size: x[w], color: "currentColor", className: v.icon }) : null, T],
            }),
        ],
    });
}
