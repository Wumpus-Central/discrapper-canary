i.d(t, { default: () => w }), i(323874), i(14289), i(35956);
var n = i(627968),
    a = i(64700),
    s = i(503698),
    r = i.n(s),
    l = i(224640),
    o = i(20742),
    c = i(638495),
    d = i(192308),
    _ = i(289873),
    u = i(793574),
    p = i(688810),
    h = i(855057),
    m = i(702211),
    g = i(699576),
    b = i(954571),
    A = i(504974),
    f = i(439193),
    x = i(652215),
    v = i(339984),
    E = i(985018),
    N = i(877774);
function w(e) {
    let { transitionState: t, onClose: s, onComplete: w, uploadType: I, showUpsellHeader: y, analyticsPage: C } = e,
        [T, j] = a.useState(!1),
        R = (0, c.k)(),
        { analyticsLocations: L } = (0, p.Ay)(u.A.GIF_PICKER);
    async function S(e) {
        let t,
            { gifSrc: a } = e;
        if (null == a || T) return;
        j(!0);
        let r = (0, f.s)(a),
            l = await fetch(r),
            o = await l.blob(),
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
                      })(r),
            _ = "jpeg" === (t = c.split("/")[1]) ? ".jpg" : null != t && "" !== t ? `.${t}` : ".gif",
            u = `selected${_}`;
        s(),
            (0, d.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([i.e("29259"), i.e("74571"), i.e("82842")]).then(
                        i.bind(i, 142630),
                    );
                    return (t) =>
                        (0, n.jsx)(e, {
                            imageUri: r,
                            file: new File([o], u, { type: c }),
                            onCrop: w,
                            uploadType: I,
                            showUpsellHeader: y,
                            ...t,
                        });
                },
                { contextKey: R },
            );
    }
    a.useEffect(() => {
        b.default.track(x.HAw.OPEN_MODAL, {
            type: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: L,
            location: { page: C },
        });
    }, [L, C]);
    let B = I === v.HL.AVATAR || I === v.HL.BANNER,
        P = (0, m.b)(!B);
    return (0, n.jsx)(p.f5, {
        value: L,
        children: (0, n.jsxs)(l.d, {
            onClose: s,
            transitionState: t,
            children: [
                (0, n.jsx)(o.rQ, { title: E.intl.string(E.t["xsC+/y"]) }),
                y &&
                    !P &&
                    (0, n.jsx)("div", {
                        className: N.It,
                        children: (0, n.jsx)(A.A, {
                            type: I,
                            analyticsPage: C,
                            analyticsSection: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, n.jsxs)("div", {
                    className: N.SD,
                    children: [
                        (0, n.jsx)(h.A, {
                            className: r()(N.XC, { [N.bX]: T }),
                            onSelectGIF: S,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        T && (0, n.jsx)(_.y, { className: N.u1 }),
                        y && P && (0, n.jsx)(g.A, { uploadType: I, showUpsell: !0, className: N.Kt }),
                    ],
                }),
            ],
        }),
    });
}
