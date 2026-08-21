a.d(t, { default: () => T }), a(323874), a(14289), a(35956);
var n = a(477900),
    i = a(582128),
    o = a(503698),
    l = a.n(o),
    s = a(224640),
    r = a(20742),
    c = a(638495),
    p = a(192308),
    h = a(707554),
    u = a(289873),
    m = a(793574),
    d = a(688810),
    A = a(813703),
    f = a(229531),
    w = a(702211),
    _ = a(699576),
    $ = a(174459),
    g = a(925895),
    y = a(652215);
let R = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    x = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    E = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    b = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    j = new Set(["static.klipy.com"]);
var I = a(339984),
    N = a(375708),
    S = a(721757);
function T(e) {
    let {
            transitionState: t,
            onClose: o,
            onComplete: T,
            uploadType: L,
            showUpsellHeader: C,
            analyticsPage: F,
            returnRef: G,
        } = e,
        [P, k] = i.useState(!1),
        H = (0, c.k)(),
        { analyticsLocations: O } = (0, d.Ay)(m.A.GIF_PICKER);
    async function U(e) {
        let { gifSrc: t } = e;
        if (null == t || P) return;
        k(!0);
        let i = (function (e) {
                let t = new URL(`${window.location.protocol}${e}`),
                    { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
                if (b.has(t.hostname)) {
                    if (null == t.pathname.match(R)) throw Error("Unexpected Tenor GIF path.");
                    let e = `${y.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                if (
                    (function (e) {
                        let { hostname: t } = e;
                        return "giphy.com" === t || t.endsWith(".giphy.com");
                    })(t)
                ) {
                    if (null == t.pathname.match(x)) throw Error("Unexpected Giphy GIF path.");
                    let e = `${y.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                if (j.has(t.hostname)) {
                    if (null == t.pathname.match(E)) throw Error("Unexpected Klipy GIF path.");
                    let e = `${y.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                return `https://${t.hostname}${t.pathname}${t.search}`;
            })(t),
            l = await fetch(i),
            s = await l.blob(),
            r =
                "" !== s.type
                    ? s.type
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
            c = `selected.${((0, f.B))(r) ?? "gif"}`;
        o(),
            (0, p.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("1214"),
                        a.e("948804"),
                        a.e("50342"),
                        a.e("507406"),
                        a.e("455524"),
                        a.e("489908"),
                        a.e("574571"),
                    ]).then(a.bind(a, 142630));
                    return (t) =>
                        (0, n.jsx)(e, {
                            imageUri: i,
                            file: new File([s], c, { type: r }),
                            onCrop: T,
                            uploadType: L,
                            showUpsellHeader: C,
                            returnRef: G,
                            ...t,
                        });
                },
                { contextKey: H },
            );
    }
    i.useEffect(() => {
        $.default.track(y.HAw.OPEN_MODAL, {
            type: y.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: O,
            location: { page: F },
        });
    }, [O, F]);
    let v = L === I.HL.AVATAR || L === I.HL.BANNER,
        z = (0, w.b)(!v),
        K = N.intl.string(N.t["xsC+/y"]);
    return (0, n.jsx)(d.f5, {
        value: O,
        children: (0, n.jsxs)(s.d, {
            onClose: o,
            transitionState: t,
            "aria-label": K,
            children: [
                (0, n.jsx)(r.rQ, { title: K }),
                (0, n.jsxs)(h.F, {
                    children: [
                        C &&
                            !z &&
                            (0, n.jsx)("div", {
                                className: S.It,
                                children: (0, n.jsx)(g.A, {
                                    type: L,
                                    analyticsPage: F,
                                    analyticsSection: y.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                                    isGIF: !0,
                                }),
                            }),
                        (0, n.jsxs)("div", {
                            className: S.SD,
                            children: [
                                (0, n.jsx)(A.A, {
                                    className: l()(S.XC, { [S.bX]: P }),
                                    onSelectGIF: U,
                                    headingColor: "text-subtle",
                                    hideFavorites: !0,
                                }),
                                P && (0, n.jsx)(u.y, { className: S.u1 }),
                                C && z && (0, n.jsx)(_.A, { uploadType: L, showUpsell: !0, className: S.Kt }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
