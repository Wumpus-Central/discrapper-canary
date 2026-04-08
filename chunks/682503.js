a.d(t, { default: () => b }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(732955),
    o = a(397927),
    c = a(793574),
    d = a(688810),
    u = a(855057),
    p = a(702211),
    _ = a(699576),
    A = a(954571),
    m = a(504974),
    h = a(439193),
    g = a(652215),
    f = a(339984),
    x = a(985018),
    N = a(765305);
function b(e) {
    let { transitionState: t, onClose: s, onComplete: b, uploadType: E, showUpsellHeader: R, analyticsPage: I } = e,
        [j, y] = i.useState(!1),
        L = (0, o.k34)(),
        { analyticsLocations: v } = (0, d.Ay)(c.A.GIF_PICKER);
    async function w(e) {
        let t,
            { gifSrc: i } = e;
        if (null == i || j) return;
        y(!0);
        let l = (0, h.s)(i),
            r = await fetch(l),
            c = await r.blob(),
            d =
                "" !== c.type
                    ? c.type
                    : (function (e) {
                          let t = new URL(e).pathname;
                          switch (t.split(".").pop()?.toLowerCase()) {
                              case "gif":
                              default:
                                  return "image/gif";
                              case "webp":
                                  return "image/webp";
                              case "png":
                                  return "image/png";
                              case "jpg":
                              case "jpeg":
                                  return "image/jpeg";
                          }
                      })(l),
            u = "jpeg" === (t = d.split("/")[1]) ? ".jpg" : null != t && "" !== t ? `.${t}` : ".gif",
            p = `selected${u}`;
        s(),
            (0, o.mMO)(
                async () => {
                    let { default: e } = await Promise.all([a.e("35929"), a.e("74571"), a.e("97759")]).then(
                        a.bind(a, 142630),
                    );
                    return (t) =>
                        (0, n.jsx)(e, {
                            imageUri: l,
                            file: new File([c], p, { type: d }),
                            onCrop: b,
                            uploadType: E,
                            showUpsellHeader: R,
                            ...t,
                        });
                },
                { contextKey: L },
            );
    }
    i.useEffect(() => {
        A.default.track(g.HAw.OPEN_MODAL, {
            type: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: v,
            location: { page: I },
        });
    }, [v, I]);
    let P = E === f.HL.AVATAR || E === f.HL.BANNER,
        $ = (0, p.b)(!P);
    return (0, n.jsx)(d.f5, {
        value: v,
        children: (0, n.jsxs)(r.dWK, {
            onClose: s,
            transitionState: t,
            children: [
                (0, n.jsx)(r.rQ0, { title: x.intl.string(x.t["xsC+/y"]) }),
                R &&
                    !$ &&
                    (0, n.jsx)("div", {
                        className: N.It,
                        children: (0, n.jsx)(m.A, {
                            type: E,
                            analyticsPage: I,
                            analyticsSection: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, n.jsxs)("div", {
                    className: N.SD,
                    children: [
                        (0, n.jsx)(u.A, {
                            className: l()(N.XC, { [N.bX]: j }),
                            onSelectGIF: w,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        j && (0, n.jsx)(o.y$y, { className: N.u1 }),
                        R && $ && (0, n.jsx)(_.A, { uploadType: E, showUpsell: !0, className: N.Kt }),
                    ],
                }),
            ],
        }),
    });
}
