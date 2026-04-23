i.d(t, { default: () => C }), i(323874), i(14289), i(35956);
var a = i(627968),
    n = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(224640),
    o = i(20742),
    c = i(373495),
    d = i(192308),
    u = i(289873),
    _ = i(793574),
    A = i(688810),
    p = i(622142),
    m = i(702211),
    h = i(699576),
    g = i(954571),
    f = i(925895),
    N = i(652215);
let x = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    E = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    T = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    I = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    b = new Set(["static.klipy.com"]);
var R = i(339984),
    j = i(985018),
    v = i(877774);
function C(e) {
    let { transitionState: t, onClose: l, onComplete: C, uploadType: w, showUpsellHeader: y, analyticsPage: L } = e,
        [P, V] = n.useState(!1),
        k = (0, c.k)(),
        { analyticsLocations: B } = (0, A.Ay)(_.A.GIF_PICKER);
    async function S(e) {
        let t,
            { gifSrc: n } = e;
        if (null == n || P) return;
        V(!0);
        let s = (function (e) {
                let t = new URL(`${window.location.protocol}${e}`),
                    { ASSET_ENDPOINT: i } = window.GLOBAL_ENV;
                if (I.has(t.hostname)) {
                    if (null == t.pathname.match(x)) throw Error("Unexpected Tenor GIF path.");
                    let e = `${N.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${i}${e}`;
                }
                if (
                    (function (e) {
                        let { hostname: t } = e;
                        return "giphy.com" === t || t.endsWith(".giphy.com");
                    })(t)
                ) {
                    if (null == t.pathname.match(E)) throw Error("Unexpected Giphy GIF path.");
                    let e = `${N.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${i}${e}`;
                }
                if (b.has(t.hostname)) {
                    if (null == t.pathname.match(T)) throw Error("Unexpected Klipy GIF path.");
                    let e = `${N.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${i}${e}`;
                }
                return `https://${t.hostname}${t.pathname}${t.search}`;
            })(n),
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
                    let { default: e } = await Promise.all([i.e("2956"), i.e("74571"), i.e("28096")]).then(
                        i.bind(i, 142630),
                    );
                    return (t) =>
                        (0, a.jsx)(e, {
                            imageUri: s,
                            file: new File([o], _, { type: c }),
                            onCrop: C,
                            uploadType: w,
                            showUpsellHeader: y,
                            ...t,
                        });
                },
                { contextKey: k },
            );
    }
    n.useEffect(() => {
        g.default.track(N.HAw.OPEN_MODAL, {
            type: N.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: B,
            location: { page: L },
        });
    }, [B, L]);
    let U = w === R.HL.AVATAR || w === R.HL.BANNER,
        G = (0, m.b)(!U);
    return (0, a.jsx)(A.f5, {
        value: B,
        children: (0, a.jsxs)(r.d, {
            onClose: l,
            transitionState: t,
            children: [
                (0, a.jsx)(o.rQ, { title: j.intl.string(j.t["xsC+/y"]) }),
                y &&
                    !G &&
                    (0, a.jsx)("div", {
                        className: v.It,
                        children: (0, a.jsx)(f.A, {
                            type: w,
                            analyticsPage: L,
                            analyticsSection: N.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, a.jsxs)("div", {
                    className: v.SD,
                    children: [
                        (0, a.jsx)(p.A, {
                            className: s()(v.XC, { [v.bX]: P }),
                            onSelectGIF: S,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        P && (0, a.jsx)(u.y, { className: v.u1 }),
                        y && G && (0, a.jsx)(h.A, { uploadType: w, showUpsell: !0, className: v.Kt }),
                    ],
                }),
            ],
        }),
    });
}
