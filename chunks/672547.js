a.d(t, { default: () => b }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    o = a(503698),
    l = a.n(o),
    s = a(224640),
    r = a(20742),
    p = a(373495),
    c = a(192308),
    h = a(289873),
    u = a(793574),
    m = a(688810),
    d = a(622142),
    A = a(702211),
    f = a(699576),
    w = a(954571),
    _ = a(925895),
    g = a(652215);
let $ = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    y = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    R = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    E = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    j = new Set(["static.klipy.com"]);
var x = a(339984),
    I = a(985018),
    N = a(877774);
function b(e) {
    let { transitionState: t, onClose: o, onComplete: b, uploadType: S, showUpsellHeader: T, analyticsPage: L } = e,
        [C, G] = i.useState(!1),
        P = (0, p.k)(),
        { analyticsLocations: F } = (0, m.Ay)(u.A.GIF_PICKER);
    async function k(e) {
        let t,
            { gifSrc: i } = e;
        if (null == i || C) return;
        G(!0);
        let l = (function (e) {
                let t = new URL(`${window.location.protocol}${e}`),
                    { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
                if (E.has(t.hostname)) {
                    if (null == t.pathname.match($)) throw Error("Unexpected Tenor GIF path.");
                    let e = `${g.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                if (
                    (function (e) {
                        let { hostname: t } = e;
                        return "giphy.com" === t || t.endsWith(".giphy.com");
                    })(t)
                ) {
                    if (null == t.pathname.match(y)) throw Error("Unexpected Giphy GIF path.");
                    let e = `${g.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                if (j.has(t.hostname)) {
                    if (null == t.pathname.match(R)) throw Error("Unexpected Klipy GIF path.");
                    let e = `${g.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                return `https://${t.hostname}${t.pathname}${t.search}`;
            })(i),
            s = await fetch(l),
            r = await s.blob(),
            p =
                "" !== r.type
                    ? r.type
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
            h = "jpeg" === (t = p.split("/")[1]) ? ".jpg" : null != t && "" !== t ? `.${t}` : ".gif",
            u = `selected${h}`;
        o(),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("43662"),
                        a.e("48804"),
                        a.e("50342"),
                        a.e("7406"),
                        a.e("55524"),
                        a.e("89908"),
                        a.e("74571"),
                    ]).then(a.bind(a, 142630));
                    return (t) =>
                        (0, n.jsx)(e, {
                            imageUri: l,
                            file: new File([r], u, { type: p }),
                            onCrop: b,
                            uploadType: S,
                            showUpsellHeader: T,
                            ...t,
                        });
                },
                { contextKey: P },
            );
    }
    i.useEffect(() => {
        w.default.track(g.HAw.OPEN_MODAL, {
            type: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: F,
            location: { page: L },
        });
    }, [F, L]);
    let H = S === x.HL.AVATAR || S === x.HL.BANNER,
        O = (0, A.b)(!H);
    return (0, n.jsx)(m.f5, {
        value: F,
        children: (0, n.jsxs)(s.d, {
            onClose: o,
            transitionState: t,
            children: [
                (0, n.jsx)(r.rQ, { title: I.intl.string(I.t["xsC+/y"]) }),
                T &&
                    !O &&
                    (0, n.jsx)("div", {
                        className: N.It,
                        children: (0, n.jsx)(_.A, {
                            type: S,
                            analyticsPage: L,
                            analyticsSection: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0,
                        }),
                    }),
                (0, n.jsxs)("div", {
                    className: N.SD,
                    children: [
                        (0, n.jsx)(d.A, {
                            className: l()(N.XC, { [N.bX]: C }),
                            onSelectGIF: k,
                            headingColor: "text-subtle",
                            hideFavorites: !0,
                        }),
                        C && (0, n.jsx)(h.y, { className: N.u1 }),
                        T && O && (0, n.jsx)(f.A, { uploadType: S, showUpsell: !0, className: N.Kt }),
                    ],
                }),
            ],
        }),
    });
}
