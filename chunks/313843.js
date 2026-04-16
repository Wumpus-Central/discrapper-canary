n.d(t, { Ay: () => E, Iv: () => p, QT: () => b, _R: () => g, j5: () => _ });
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
    f = n(305080),
    x = n(985018),
    h = n(8208);
function g(e) {
    let { game: t, application: n, show: l, onClose: i, trackAction: o } = e,
        c = t.name ?? n?.name,
        d = n.getIconURL(80);
    return (0, a.jsxs)("div", {
        className: h.y5,
        children: [
            (0, a.jsx)("div", { className: r()(h.nI, l && h.hD) }),
            (0, a.jsxs)("div", {
                className: r()(h.A1, l && h.g8),
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
            (0, a.jsx)(m.N, { game: t, onClose: i, className: h.HK, trackAction: o }),
        ],
    });
}
function p(e) {
    let { show: t } = e;
    return (0, a.jsx)("div", { className: r()(h.nI, h.Jn, t && h.hD) });
}
let _ = l.forwardRef(function (e, t) {
    let { game: n } = e,
        [i] = l.useState(() => Math.random()),
        r = l.useMemo(() => {
            if (null != n.bannerHash)
                return o.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(i * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, i]);
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
                children: x.intl.formatToPlainString(x.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function b(e) {
    let { game: t, application: n, isTwoColumn: l } = e;
    return (0, a.jsx)("div", {
        className: l ? h.n8 : h.FS,
        children: (0, a.jsx)(u.A, { game: t, application: n, className: h.xe, size: u.w.LARGE }),
    });
}
let E = function (e) {
    let { game: t, application: n, onSetCompactBarScrollThreshold: i, showCompactBar: o } = e,
        { isTwoColumn: c } = (0, f.c)(),
        d = l.useRef(null),
        m = l.useRef(null);
    l.useEffect(() => {
        let e = d.current,
            t = m.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let n = 0,
                a = e;
            for (; null != a && a !== t; ) (n += a.offsetTop), (a = a.offsetParent);
            return n;
        })(t, e);
        n > 0 && i?.(n);
    }, [i]);
    let x = t.name ?? n?.name;
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
                    (0, a.jsx)(s.DZT, { ref: m, variant: "heading-xxl/semibold", children: x }),
                    (0, a.jsx)(v, { game: t }),
                ],
            }),
        ],
    });
};
