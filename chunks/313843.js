n.d(t, { Ay: () => E, Iv: () => p, QT: () => j, _R: () => f, j5: () => _ });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
    o = n(486020),
    c = n(541830),
    d = n(240248),
    u = n(459746),
    m = n(503364),
    x = n(305080),
    g = n(985018),
    h = n(605408);
function f(e) {
    let { game: t, application: n, show: i, onClose: l, trackAction: o } = e,
        c = t.name ?? n?.name,
        d = n.getIconURL(80);
    return (0, a.jsxs)("div", {
        className: h.y5,
        children: [
            (0, a.jsx)("div", { className: r()(h.nI, i && h.hD) }),
            (0, a.jsxs)("div", {
                className: r()(h.A1, i && h.g8),
                children: [
                    null != d && (0, a.jsx)("img", { src: d, alt: "", className: h.V$, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: h.hm,
                        children: [
                            (0, a.jsx)(s.DZT, { variant: "heading-md/semibold", lineClamp: 1, children: c }),
                            null != t.l30Rank && (0, a.jsx)(A, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(m.N, { game: t, onClose: l, className: h.HK, trackAction: o }),
        ],
    });
}
function p(e) {
    let { show: t } = e;
    return (0, a.jsx)("div", { className: r()(h.nI, h.Jn, t && h.hD) });
}
let _ = i.forwardRef(function (e, t) {
    let { game: n } = e,
        [l] = i.useState(() => Math.random()),
        r = i.useMemo(() => {
            if (null != n.bannerHash)
                return o.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(l * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, l]);
    return (0, d.uJ)(r)
        ? null
        : (0, a.jsxs)("div", {
              ref: t,
              children: [
                  (0, a.jsx)("div", { className: h.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, a.jsx)("div", { className: h.N4 }),
              ],
          });
});
function v(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(c.du).join(", ");
    return (0, d.uJ)(n) ? null : (0, a.jsx)(s.EYj, { variant: "text-md/normal", color: "text-muted", children: n });
}
let A = (e) => {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: h.Qc,
        children: [
            (0, a.jsx)(s.OR, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(s.EYj, {
                variant: "text-xs/bold",
                color: "none",
                children: g.intl.formatToPlainString(g.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function j(e) {
    let { game: t, application: n, isTwoColumn: i } = e;
    return (0, a.jsx)("div", {
        className: i ? h.n8 : h.FS,
        children: (0, a.jsx)(u.A, { game: t, application: n, className: h.xe, size: u.w.LARGE }),
    });
}
let E = function (e) {
    let { game: t, application: n, onSetCompactBarScrollThreshold: l, showCompactBar: o } = e,
        { isTwoColumn: c } = (0, x.c)(),
        d = i.useRef(null),
        m = i.useRef(null);
    i.useEffect(() => {
        let e = d.current,
            t = m.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let n = 0,
                a = e;
            for (; null != a && a !== t; ) (n += a.offsetTop), (a = a.offsetParent);
            return n;
        })(t, e);
        n > 0 && l?.(n);
    }, [l]);
    let g = t.name ?? n?.name;
    return (0, a.jsxs)("div", {
        ref: d,
        className: r()(h.ap, o && h.Gh),
        children: [
            c &&
                null != t &&
                (0, a.jsx)("div", {
                    className: h.Tf,
                    children: (0, a.jsx)(u.A, { game: t, application: n, className: h.w$, size: u.w.LARGE }),
                }),
            (0, a.jsxs)("div", {
                className: h.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(A, { rank: t.l30Rank }),
                    (0, a.jsx)(s.DZT, { ref: m, variant: "heading-xxl/semibold", children: g }),
                    (0, a.jsx)(v, { game: t }),
                ],
            }),
        ],
    });
};
