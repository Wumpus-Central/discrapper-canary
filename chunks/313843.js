n.d(t, { Ay: () => E, Iv: () => g, QT: () => j, _R: () => p, j5: () => _ });
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
function p(e) {
    let { game: t, application: n, show: l, onClose: i, trackAction: o } = e,
        c = t.supplementalData?.name ?? t.name ?? n?.name,
        d = n.getIconURL(80);
    return (0, a.jsxs)("div", {
        className: f.y5,
        children: [
            (0, a.jsx)("div", { className: r()(f.nI, l && f.hD) }),
            (0, a.jsxs)("div", {
                className: r()(f.A1, l && f.g8),
                children: [
                    null != d && (0, a.jsx)("img", { src: d, alt: "", className: f.V$, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: f.hm,
                        children: [
                            (0, a.jsx)(s.DZT, { variant: "heading-md/semibold", lineClamp: 1, children: c }),
                            null != t.l30Rank && (0, a.jsx)(A, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(m.N, { game: t, onClose: i, className: f.HK, trackAction: o }),
        ],
    });
}
function g(e) {
    let { show: t } = e;
    return (0, a.jsx)("div", { className: r()(f.nI, f.Jn, t && f.hD) });
}
let _ = l.forwardRef(function (e, t) {
    let { game: n } = e,
        i = n.supplementalData,
        [r] = l.useState(() => Math.random()),
        s = l.useMemo(() => {
            if (null != n.bannerHash)
                return o.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null == i) return "";
            let { screenshots: e } = i;
            if (e.length > 0) {
                let t = Math.floor(r * e.length);
                return e[t];
            }
            return "";
        }, [n.id, n.bannerHash, i, r]);
    return (0, d.uJ)(s)
        ? null
        : (0, a.jsxs)("div", {
              ref: t,
              children: [
                  (0, a.jsx)("div", { className: f.y1, style: { backgroundImage: `url("${s}")` } }),
                  (0, a.jsx)("div", { className: f.N4 }),
              ],
          });
});
function v(e) {
    let { game: t } = e,
        n = t.supplementalData,
        l = (n?.genres ?? t.genres ?? []).map(c.du).join(", ");
    return (0, d.uJ)(l) ? null : (0, a.jsx)(s.EYj, { variant: "text-md/normal", color: "text-muted", children: l });
}
let A = (e) => {
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
function j(e) {
    let { game: t, application: n, isTwoColumn: l } = e,
        i = t.supplementalData;
    return null == i
        ? null
        : (0, a.jsx)("div", {
              className: l ? f.n8 : f.FS,
              children: (0, a.jsx)(u.A, { game: i, application: n, className: f.xe, size: u.w.LARGE }),
          });
}
let E = function (e) {
    let { game: t, application: n, onSetCompactBarScrollThreshold: i, showCompactBar: o } = e,
        { isTwoColumn: c } = (0, x.c)(),
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
    let h = t.supplementalData,
        p = h?.name ?? t.name ?? n?.name;
    return (0, a.jsxs)("div", {
        ref: d,
        className: r()(f.ap, o && f.Gh),
        children: [
            c &&
                null != h &&
                (0, a.jsx)("div", {
                    className: f.Tf,
                    children: (0, a.jsx)(u.A, { game: h, application: n, className: f.w$, size: u.w.LARGE }),
                }),
            (0, a.jsxs)("div", {
                className: f.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(A, { rank: t.l30Rank }),
                    (0, a.jsx)(s.DZT, { ref: m, variant: "heading-xxl/semibold", children: p }),
                    (0, a.jsx)(v, { game: t }),
                ],
            }),
        ],
    });
};
