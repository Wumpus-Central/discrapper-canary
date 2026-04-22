n.d(t, { Ay: () => C, Iv: () => b, QT: () => I, _R: () => x, j5: () => A });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(534514),
    o = n(834730),
    d = n(369606),
    c = n(486020),
    u = n(541830),
    m = n(240248),
    _ = n(459746),
    h = n(503364),
    f = n(305080),
    g = n(985018),
    p = n(150544);
function x(e) {
    let { game: t, application: n, show: l, onClose: i, trackAction: o } = e,
        d = t.name ?? n?.name,
        c = n.getIconURL(80);
    return (0, a.jsxs)("div", {
        className: p.y5,
        children: [
            (0, a.jsx)("div", { className: r()(p.nI, l && p.hD) }),
            (0, a.jsxs)("div", {
                className: r()(p.A1, l && p.g8),
                children: [
                    null != c && (0, a.jsx)("img", { src: c, alt: "", className: p.V$, draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: p.hm,
                        children: [
                            (0, a.jsx)(s.D, { variant: "heading-md/semibold", lineClamp: 1, children: d }),
                            null != t.l30Rank && (0, a.jsx)(E, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(h.N, { game: t, onClose: i, className: p.HK, trackAction: o }),
        ],
    });
}
function b(e) {
    let { show: t } = e;
    return (0, a.jsx)("div", { className: r()(p.nI, p.Jn, t && p.hD) });
}
let A = l.forwardRef(function (e, t) {
    let { game: n } = e,
        [i] = l.useState(() => Math.random()),
        r = l.useMemo(() => {
            if (null != n.bannerHash)
                return c.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(i * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, i]);
    return (0, m.uJ)(r)
        ? null
        : (0, a.jsxs)("div", {
              ref: t,
              children: [
                  (0, a.jsx)("div", { className: p.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, a.jsx)("div", { className: p.N4 }),
              ],
          });
});
function v(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(u.du).join(", ");
    return (0, m.uJ)(n) ? null : (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
let E = (e) => {
    let { rank: t } = e;
    return (0, a.jsxs)("div", {
        className: p.Qc,
        children: [
            (0, a.jsx)(d.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/bold",
                color: "none",
                children: g.intl.formatToPlainString(g.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function I(e) {
    let { game: t, application: n, isTwoColumn: l } = e;
    return (0, a.jsx)("div", {
        className: l ? p.n8 : p.FS,
        children: (0, a.jsx)(_.A, { game: t, application: n, className: p.xe, size: _.w.LARGE }),
    });
}
let C = function (e) {
    let { game: t, application: n, onSetCompactBarScrollThreshold: i, showCompactBar: o } = e,
        { isTwoColumn: d } = (0, f.c)(),
        c = l.useRef(null),
        u = l.useRef(null);
    l.useEffect(() => {
        let e = c.current,
            t = u.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let n = 0,
                a = e;
            for (; null != a && a !== t; ) (n += a.offsetTop), (a = a.offsetParent);
            return n;
        })(t, e);
        n > 0 && i?.(n);
    }, [i]);
    let m = t.name ?? n?.name;
    return (0, a.jsxs)("div", {
        ref: c,
        className: r()(p.ap, o && p.Gh),
        children: [
            d &&
                null != t &&
                (0, a.jsx)("div", {
                    className: p.Tf,
                    children: (0, a.jsx)(_.A, { game: t, application: n, className: p.w$, size: _.w.LARGE }),
                }),
            (0, a.jsxs)("div", {
                className: p.lu,
                children: [
                    null != t.l30Rank && (0, a.jsx)(E, { rank: t.l30Rank }),
                    (0, a.jsx)(s.D, { ref: u, variant: "heading-xxl/semibold", children: m }),
                    (0, a.jsx)(v, { game: t }),
                ],
            }),
        ],
    });
};
