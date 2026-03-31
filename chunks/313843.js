n.d(t, { A: () => v, Q: () => p });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    c = n(541830),
    o = n(240248),
    d = n(459746),
    u = n(503364),
    m = n(305080),
    x = n(985018),
    h = n(230845);
function g(e) {
    let { game: t } = e,
        n = t.supplementalData,
        [i] = l.useState(() => Math.random()),
        r = l.useMemo(() => {
            if (null == n) return "";
            let { artwork: e, screenshots: t } = n;
            if (e.length > 0) {
                let t = Math.floor(i * e.length);
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(i * t.length);
                return t[e];
            }
            return "";
        }, [n, i]);
    return (0, o.uJ)(r) ? null : (0, a.jsx)("div", { className: h.y1, style: { backgroundImage: `url("${r}")` } });
}
function f(e) {
    let { game: t } = e,
        n = t.supplementalData,
        l = (n?.genres ?? t.genres ?? []).map(c.du).join(", ");
    return (0, o.uJ)(l) ? null : (0, a.jsx)(s.EYj, { variant: "text-md/normal", color: "text-muted", children: l });
}
let _ = (e) => {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: h.Qc,
        children: [
            (0, a.jsx)(s.OR, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(s.EYj, {
                variant: "text-xs/bold",
                color: "none",
                children: x.intl.formatToPlainString(x.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function p(e) {
    let { game: t, application: n, isTwoColumn: l } = e,
        i = t.supplementalData;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: l ? h.n8 : h.FS,
              children: (0, a.jsx)(d.A, { game: i, application: n, className: h.xe, size: d.w.LARGE }),
          });
}
let v = function (e) {
    let { game: t, application: n, onClose: i, trackAction: c, onScrollStateChange: o } = e,
        { isTwoColumn: x } = (0, m.c)(),
        p = l.useRef(null),
        v = l.useRef(null),
        [A, j] = l.useState(!1);
    l.useEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = e.parentElement;
        for (; null != t; ) {
            let { overflowY: e } = getComputedStyle(t);
            if (/auto|scroll/.test(e)) break;
            t = t.parentElement;
        }
        if (null == t) return;
        let n = v.current,
            a =
                null != n
                    ? (function (e, t) {
                          let n = 0,
                              a = e;
                          for (; null != a && a !== t; ) (n += a.offsetTop), (a = a.offsetParent);
                          return n;
                      })(n, t)
                    : 5,
            l = () => {
                j(t.scrollTop > a);
            };
        return t.addEventListener("scroll", l, { passive: !0 }), l(), () => t.removeEventListener("scroll", l);
    }, []),
        l.useEffect(() => {
            o?.(A);
        }, [A, o]);
    let E = t.supplementalData,
        C = E?.name ?? t.name ?? n?.name,
        I = n.getIconURL(80);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(g, { game: t }),
            (0, a.jsxs)("div", {
                ref: p,
                className: r()(h.f3, A && h.XP),
                children: [
                    (0, a.jsx)("div", { className: h.OC }),
                    (0, a.jsxs)("div", {
                        className: h.dh,
                        children: [
                            null != I && (0, a.jsx)("img", { src: I, alt: "", className: h.V$, draggable: !1 }),
                            (0, a.jsxs)("div", {
                                className: h.hm,
                                children: [
                                    (0, a.jsx)(s.DZT, { variant: "heading-md/semibold", lineClamp: 1, children: C }),
                                    null != t.l30Rank && (0, a.jsx)(_, { rank: t.l30Rank }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.N, { applicationId: n.id, onClose: i, className: h.HK, trackAction: c }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r()(h.ap, A && h.XP),
                children: [
                    x &&
                        null != E &&
                        (0, a.jsx)("div", {
                            className: h.Tf,
                            children: (0, a.jsx)(d.A, { game: E, application: n, className: h.w$, size: d.w.LARGE }),
                        }),
                    (0, a.jsxs)("div", {
                        className: h.lu,
                        children: [
                            null != t.l30Rank && (0, a.jsx)(_, { rank: t.l30Rank }),
                            (0, a.jsx)(s.DZT, { ref: v, variant: "heading-xxl/semibold", children: C }),
                            (0, a.jsx)(f, { game: t }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
