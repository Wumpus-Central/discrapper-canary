i.d(t, { default: () => b }), i(323874), i(14289), i(35956);
var a = i(627968),
    n = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(224640),
    o = i(20742),
    c = i(638495),
    d = i(192308),
    u = i(289873),
    _ = i(793574),
    A = i(688810),
    p = i(855057),
    m = i(702211),
    h = i(699576),
    g = i(954571),
    f = i(504974),
    N = i(439193),
    x = i(652215),
    E = i(339984),
    T = i(985018),
    I = i(877774);
function b(e) {
    let { transitionState: t, onClose: l, onComplete: b, uploadType: v, showUpsellHeader: R, analyticsPage: j } = e,
        [C, w] = n.useState(!1),
        y = (0, c.k)(),
        { analyticsLocations: L } = (0, A.Ay)(_.A.GIF_PICKER);
    async function P(e) {
        let t,
            { gifSrc: n } = e;
        if (null == n || C) return;
        w(!0);
        let s = (0, N.s)(n),
            r = await fetch(s),
            o = await r.blob(),
            c =
                "" !== o.type
                    ? o.type
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
                      })(s),
            u = "jpeg" === (t = c.split("/")[1]) ? ".jpg" : null != t && "" !== t ? `.${t}` : ".gif",
            _ = `selected${u}`;
        l(),
            (0, d.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([i.e("29259"), i.e("74571"), i.e("28096")]).then(
                        i.bind(i, 142630),
                    );
                    return (t) =>
                        (0, a.jsx)(e, {
                            imageUri: s,
                            file: new File([o], _, { type: c }),
                            onCrop: b,
                            uploadType: v,
                            showUpsellHeader: R,
                            ...t,
                        });
                },
                { contextKey: y },
            );
    }
    n.useEffect(() => {
        g.default.track(x.HAw.OPEN_MODAL, {
            type: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: L,
            location: { page: j },
        });
    }, [L, j]);
    let V = v === E.HL.AVATAR || v === E.HL.BANNER,
        k = (0, m.b)(!V);
    return (0, a.jsx)(A.f5, {
        value: L,
        children: (0, a.jsxs)(r.d, {
            onClose: l,
            transitionState: t,
            children: [
                (0, a.jsx)(o.rQ, { title: T.intl.string(T.t["xsC+/y"]) }),
                R &&
                    !k &&
                    (0, a.jsx)("div", {
                        className: I.It,
                        children: (0, a.jsx)(f.A, {
                            type: v,
                            analyticsPage: j,
                            analyticsSection: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: I.SD,
                    children: [
                        (0, a.jsx)(p.A, {
                            className: s()(I.XC, { [I.bX]: C }),
                            onSelectGIF: P,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        C && (0, a.jsx)(u.y, { className: I.u1 }),
                        R && k && (0, a.jsx)(h.A, { uploadType: v, showUpsell: !0, className: I.Kt }),
                    ],
                }),
            ],
        }),
    });
}
