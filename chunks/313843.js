n.d(t, { A: () => A, Q: () => v });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(486020),
    c = n(541830),
    d = n(240248),
    u = n(459746),
    m = n(503364),
    x = n(305080),
    h = n(985018),
    f = n(605408);
function g(e) {
    let { game: t } = e,
        n = t.supplementalData,
        [i] = l.useState(() => Math.random()),
        r = l.useMemo(() => {
            if (null != t.bannerHash)
                return o.Ay.getGameAssetURL({ id: t.id, hash: t.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null == n) return "";
            let { screenshots: e } = n;
            if (e.length > 0) {
                let t = Math.floor(i * e.length);
                return e[t];
            }
            return "";
        }, [t.id, t.bannerHash, n, i]);
    return (0, d.uJ)(r) ? null : (0, a.jsx)("div", { className: f.y1, style: { backgroundImage: `url("${r}")` } });
}
function p(e) {
    let { game: t } = e,
        n = t.supplementalData,
        l = (n?.genres ?? t.genres ?? []).map(c.du).join(", ");
    return (0, d.uJ)(l) ? null : (0, a.jsx)(s.EYj, { variant: "text-md/normal", color: "text-muted", children: l });
}
let _ = (e) => {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: f.Qc,
        children: [
            (0, a.jsx)(s.OR, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(s.EYj, {
                variant: "text-xs/bold",
                color: "none",
                children: h.intl.formatToPlainString(h.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function v(e) {
    let { game: t, application: n, isTwoColumn: l } = e,
        i = t.supplementalData;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: l ? f.n8 : f.FS,
              children: (0, a.jsx)(u.A, { game: i, application: n, className: f.xe, size: u.w.LARGE }),
          });
}
let A = function (e) {
    let { game: t, application: n, onClose: i, trackAction: o, onScrollStateChange: c } = e,
        { isTwoColumn: d } = (0, x.c)(),
        h = l.useRef(null),
        v = l.useRef(null),
        [A, j] = l.useState(!1);
    l.useEffect(() => {
        let e = h.current;
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
            c?.(A);
        }, [A, c]);
    let E = t.supplementalData,
        b = E?.name ?? t.name ?? n?.name,
        C = n.getIconURL(80);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(g, { game: t }),
            (0, a.jsxs)("div", {
                ref: h,
                className: r()(f.f3, A && f.XP),
                children: [
                    (0, a.jsx)("div", { className: f.OC }),
                    (0, a.jsxs)("div", {
                        className: f.dh,
                        children: [
                            null != C && (0, a.jsx)("img", { src: C, alt: "", className: f.V$, draggable: !1 }),
                            (0, a.jsxs)("div", {
                                className: f.hm,
                                children: [
                                    (0, a.jsx)(s.DZT, { variant: "heading-md/semibold", lineClamp: 1, children: b }),
                                    null != t.l30Rank && (0, a.jsx)(_, { rank: t.l30Rank }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.N, { game: t, onClose: i, className: f.HK, trackAction: o }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r()(f.ap, A && f.XP),
                children: [
                    d &&
                        null != E &&
                        (0, a.jsx)("div", {
                            className: f.Tf,
                            children: (0, a.jsx)(u.A, { game: E, application: n, className: f.w$, size: u.w.LARGE }),
                        }),
                    (0, a.jsxs)("div", {
                        className: f.lu,
                        children: [
                            null != t.l30Rank && (0, a.jsx)(_, { rank: t.l30Rank }),
                            (0, a.jsx)(s.DZT, { ref: v, variant: "heading-xxl/semibold", children: b }),
                            (0, a.jsx)(p, { game: t }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
