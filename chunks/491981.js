(a.d(t, { default: () => F }), a(323874), a(14289), a(35956));
var n = a(477900),
    i = a(582128),
    s = a(503698),
    o = a.n(s),
    l = a(224640),
    r = a(20742),
    c = a(638495),
    p = a(192308),
    h = a(707554),
    m = a(289873),
    u = a(793574),
    d = a(688810),
    A = a(649529),
    f = a(229531),
    w = a(702211),
    _ = a(699576),
    $ = a(129230),
    g = a(58767),
    y = a(652215);
let R = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    x = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    E = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    I = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    b = new Set(["static.klipy.com"]);
var j = a(339984),
    N = a(792996),
    T = a(721757);
function F(e) {
    let {
            transitionState: t,
            onClose: s,
            onComplete: F,
            uploadType: S,
            showUpsellHeader: G,
            analyticsPage: C,
            returnRef: L,
            compressGIFToFitBytes: P,
        } = e,
        [k, H] = i.useState(!1),
        O = (0, c.k)(),
        { analyticsLocations: U } = (0, d.Ay)(u.A.GIF_PICKER);
    i.useEffect(() => {
        $.default.track(y.HAw.OPEN_MODAL, {
            type: y.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: U,
            location: { page: C },
        });
    }, [U, C]);
    let v = S === j.HL.AVATAR || S === j.HL.BANNER,
        z = (0, w.b)(!v),
        B = N.intl.string(N.t["xsC+/y"]);
    return (0, n.jsx)(d.f5, {
        value: U,
        children: (0, n.jsxs)(l.d, {
            onClose: s,
            transitionState: t,
            "aria-label": B,
            children: [
                (0, n.jsx)(r.rQ, { title: B }),
                (0, n.jsxs)(h.F, {
                    children: [
                        G &&
                            !z &&
                            (0, n.jsx)("div", {
                                className: T.It,
                                children: (0, n.jsx)(g.A, {
                                    type: S,
                                    analyticsPage: C,
                                    analyticsSection: y.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                                    isGIF: !0,
                                }),
                            }),
                        (0, n.jsxs)("div", {
                            className: T.SD,
                            children: [
                                (0, n.jsx)(A.A, {
                                    className: o()(T.XC, { [T.bX]: k }),
                                    onSelectGIF: async function (e) {
                                        let { gifSrc: t } = e;
                                        if (null == t || k) return;
                                        H(!0);
                                        let i = (function (e) {
                                                let t = new URL(`${window.location.protocol}${e}`),
                                                    { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
                                                if (I.has(t.hostname)) {
                                                    if (null == t.pathname.match(R))
                                                        throw Error("Unexpected Tenor GIF path.");
                                                    let e = `${y.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
                                                    return `${location.protocol}${a}${e}`;
                                                }
                                                if (
                                                    (function (e) {
                                                        let { hostname: t } = e;
                                                        return "giphy.com" === t || t.endsWith(".giphy.com");
                                                    })(t)
                                                ) {
                                                    if (null == t.pathname.match(x))
                                                        throw Error("Unexpected Giphy GIF path.");
                                                    let e = `${y.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
                                                    return `${location.protocol}${a}${e}`;
                                                }
                                                if (b.has(t.hostname)) {
                                                    if (null == t.pathname.match(E))
                                                        throw Error("Unexpected Klipy GIF path.");
                                                    let e = `${y.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
                                                    return `${location.protocol}${a}${e}`;
                                                }
                                                return `https://${t.hostname}${t.pathname}${t.search}`;
                                            })(t),
                                            o = await fetch(i),
                                            l = await o.blob(),
                                            r =
                                                "" !== l.type
                                                    ? l.type
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
                                                      })(i),
                                            c = `selected.${(0, f.B)(r) ?? "gif"}`;
                                        (s(),
                                            (0, p.mM)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        a.e(985768),
                                                        a.e(1214),
                                                        a.e(948804),
                                                        a.e(791154),
                                                        a.e(507406),
                                                        a.e(50342),
                                                        a.e(455524),
                                                        a.e(324633),
                                                        a.e(574571),
                                                    ]).then(a.bind(a, 142630));
                                                    return (t) =>
                                                        (0, n.jsx)(e, {
                                                            imageUri: i,
                                                            file: new File([l], c, { type: r }),
                                                            onCrop: F,
                                                            uploadType: S,
                                                            showUpsellHeader: G,
                                                            returnRef: L,
                                                            compressGIFToFitBytes: P,
                                                            ...t,
                                                        });
                                                },
                                                { contextKey: O },
                                            ));
                                    },
                                    headingColor: "text-subtle",
                                    hideFavorites: !0,
                                }),
                                k && (0, n.jsx)(m.y, { className: T.u1 }),
                                G && z && (0, n.jsx)(_.A, { uploadType: S, showUpsell: !0, className: T.Kt }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
