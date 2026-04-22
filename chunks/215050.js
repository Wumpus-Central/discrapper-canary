n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(331322),
    s = n(87221),
    d = n(599319),
    u = n(939249),
    h = n(775602),
    c = n(607470),
    m = n(930125),
    p = n(282108),
    g = n(619517),
    f = n(644447),
    x = n(608214),
    A = n(838541),
    y = n(985018),
    w = n(656633);
function C(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let v = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, f.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, x.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == r && "VIDEO" === t.type
        ? (0, i.jsx)(c.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == r
          ? null
          : (0, p.qo)({ type: m.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(o.B, {
                  align: "center",
                  justify: "center",
                  className: w.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(s.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(g.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: r,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: A.dG.MOSAIC,
              });
});
function E(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: a, className: o, enabledContentHarmTypeFlags: s } = e,
        c = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(C(n));
            null != c.current &&
                null != e &&
                c.current.scrollIntoViewNode({ node: e, animate: !h.A.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: l()(w.IL, o),
            children: (0, i.jsx)(d.Ch, {
                orientation: "horizontal",
                className: l()(w.nV, o),
                ref: c,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let o = r === n,
                        d = o ? y.t["qv/U5V"] : y.t.zviMAG;
                    return (0, i.jsx)(
                        u.D,
                        {
                            id: C(r),
                            className: l()(w.Qq, { [w.AD]: !o, [w.$1]: 0 === r, [w.HV]: r === t.length - 1 }),
                            "aria-label": y.intl.formatToPlainString(d, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => a(r),
                            children: (0, i.jsx)(v, { item: e, enabledContentHarmTypeFlags: s }),
                        },
                        r,
                    );
                }),
            }),
        })
    );
}
