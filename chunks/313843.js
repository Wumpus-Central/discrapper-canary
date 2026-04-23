n.d(t, { Ay: () => j, Iv: () => E, QT: () => b, _R: () => x, j5: () => A });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(534514),
    o = n(834730),
    c = n(369606),
    d = n(486020),
    u = n(541830),
    m = n(240248),
    h = n(459746),
    f = n(503364),
    _ = n(305080),
    g = n(985018),
    p = n(8208);
function x(e) {
    let { game: t, application: n, show: a, onClose: i, trackAction: o } = e,
        c = t.name ?? n?.name,
        d = n.getIconURL(80);
    return (0, l.jsxs)("div", {
        className: p.y5,
        children: [
            (0, l.jsx)("div", { className: r()(p.nI, a && p.hD) }),
            (0, l.jsxs)("div", {
                className: r()(p.A1, a && p.g8),
                children: [
                    null != d && (0, l.jsx)("img", { src: d, alt: "", className: p.V$, draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: p.hm,
                        children: [
                            (0, l.jsx)(s.D, { variant: "heading-md/semibold", lineClamp: 1, children: c }),
                            null != t.l30Rank && (0, l.jsx)(I, { rank: t.l30Rank }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(f.N, { game: t, onClose: i, className: p.HK, trackAction: o }),
        ],
    });
}
function E(e) {
    let { show: t } = e;
    return (0, l.jsx)("div", { className: r()(p.nI, p.Jn, t && p.hD) });
}
let A = a.forwardRef(function (e, t) {
    let { game: n } = e,
        [i] = a.useState(() => Math.random()),
        r = a.useMemo(() => {
            if (null != n.bannerHash)
                return d.Ay.getGameAssetURL({ id: n.id, hash: n.bannerHash, size: 2048, keepAspectRatio: !0 }) ?? "";
            if (null != n.screenshotUrls && n.screenshotUrls.length > 0) {
                let e = Math.floor(i * n.screenshotUrls.length);
                return n.screenshotUrls[e];
            }
            return "";
        }, [n.id, n.bannerHash, n.screenshotUrls, i]);
    return (0, m.uJ)(r)
        ? null
        : (0, l.jsxs)("div", {
              ref: t,
              children: [
                  (0, l.jsx)("div", { className: p.y1, style: { backgroundImage: `url("${r}")` } }),
                  (0, l.jsx)("div", { className: p.N4 }),
              ],
          });
});
function v(e) {
    let { game: t } = e,
        n = (t.genres ?? []).map(u.du).join(", ");
    return (0, m.uJ)(n) ? null : (0, l.jsx)(o.E, { variant: "text-md/normal", color: "text-muted", children: n });
}
let I = (e) => {
    let { rank: t } = e;
    return (0, l.jsxs)("div", {
        className: p.Qc,
        children: [
            (0, l.jsx)(c.O, { size: "xxs", color: "currentColor", "aria-hidden": "true" }),
            (0, l.jsx)(o.E, {
                variant: "text-xs/bold",
                color: "none",
                children: g.intl.formatToPlainString(g.t.ehZXlZ, { rank: t }),
            }),
        ],
    });
};
function b(e) {
    let { game: t, application: n, isTwoColumn: a } = e;
    return (0, l.jsx)("div", {
        className: a ? p.n8 : p.FS,
        children: (0, l.jsx)(h.A, { game: t, application: n, className: p.xe, size: h.w.LARGE }),
    });
}
let j = function (e) {
    let { game: t, application: n, onSetCompactBarScrollThreshold: i, showCompactBar: o } = e,
        { isTwoColumn: c } = (0, _.c)(),
        d = a.useRef(null),
        u = a.useRef(null);
    a.useEffect(() => {
        let e = d.current,
            t = u.current;
        if (null == e || null == t) return;
        let n = (function (e, t) {
            let n = 0,
                l = e;
            for (; null != l && l !== t; ) (n += l.offsetTop), (l = l.offsetParent);
            return n;
        })(t, e);
        n > 0 && i?.(n);
    }, [i]);
    let m = t.name ?? n?.name;
    return (0, l.jsxs)("div", {
        ref: d,
        className: r()(p.ap, o && p.Gh),
        children: [
            c &&
                null != t &&
                (0, l.jsx)("div", {
                    className: p.Tf,
                    children: (0, l.jsx)(h.A, { game: t, application: n, className: p.w$, size: h.w.LARGE }),
                }),
            (0, l.jsxs)("div", {
                className: p.lu,
                children: [
                    null != t.l30Rank && (0, l.jsx)(I, { rank: t.l30Rank }),
                    (0, l.jsx)(s.D, { ref: u, variant: "heading-xxl/semibold", children: m }),
                    (0, l.jsx)(v, { game: t }),
                ],
            }),
        ],
    });
};
