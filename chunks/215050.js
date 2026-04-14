n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(397927),
    o = n(775602),
    d = n(607470),
    u = n(930125),
    c = n(282108),
    h = n(619517),
    m = n(644447),
    p = n(608214),
    g = n(838541),
    x = n(985018),
    f = n(713737);
function A(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let y = l.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        l = (function (e) {
            if ("IMAGE" === e.type) return (0, m.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, p.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == l && "VIDEO" === t.type
        ? (0, i.jsx)(d.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == l
          ? null
          : (0, c.qo)({ type: u.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(s.BJc, {
                  align: "center",
                  justify: "center",
                  className: f.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(s.DAq, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(h.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: l,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: g.dG.MOSAIC,
              });
});
function w(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: r, className: d, enabledContentHarmTypeFlags: u } = e,
        c = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = document.getElementById(A(n));
            null != c.current &&
                null != e &&
                c.current.scrollIntoViewNode({ node: e, animate: !o.A.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(f.IL, d),
            children: (0, i.jsx)(s.ChK, {
                orientation: "horizontal",
                className: a()(f.nV, d),
                ref: c,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, l) => {
                    let o = l === n,
                        d = o ? x.t["qv/U5V"] : x.t.zviMAG;
                    return (0, i.jsx)(
                        s.DUT,
                        {
                            id: A(l),
                            className: a()(f.Qq, { [f.AD]: !o, [f.$1]: 0 === l, [f.HV]: l === t.length - 1 }),
                            "aria-label": x.intl.formatToPlainString(d, { pageNumber: l + 1, totalPages: t.length }),
                            onClick: () => r(l),
                            children: (0, i.jsx)(y, { item: e, enabledContentHarmTypeFlags: u }),
                        },
                        l,
                    );
                }),
            }),
        })
    );
}
