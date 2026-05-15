a.d(t, { default: () => S }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    l = a(503698),
    o = a.n(l),
    s = a(224640),
    r = a(20742),
    p = a(373495),
    c = a(192308),
    h = a(707554),
    u = a(289873),
    m = a(793574),
    d = a(688810),
    A = a(622142),
    f = a(702211),
    w = a(699576),
    _ = a(174459),
    g = a(925895),
    $ = a(652215);
let y = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    R = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    j = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    x = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    E = new Set(["static.klipy.com"]);
var b = a(339984),
    I = a(375708),
    N = a(877774);
function S(e) {
    let { transitionState: t, onClose: l, onComplete: S, uploadType: T, showUpsellHeader: L, analyticsPage: C } = e,
        [F, G] = i.useState(!1),
        P = (0, p.k)(),
        { analyticsLocations: k } = (0, d.Ay)(m.A.GIF_PICKER);
    async function H(e) {
        let t,
            { gifSrc: i } = e;
        if (null == i || F) return;
        G(!0);
        let o = (function (e) {
                let t = new URL(`${window.location.protocol}${e}`),
                    { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
                if (x.has(t.hostname)) {
                    if (null == t.pathname.match(y)) throw Error("Unexpected Tenor GIF path.");
                    let e = `${$.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                if (
                    (function (e) {
                        let { hostname: t } = e;
                        return "giphy.com" === t || t.endsWith(".giphy.com");
                    })(t)
                ) {
                    if (null == t.pathname.match(R)) throw Error("Unexpected Giphy GIF path.");
                    let e = `${$.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                if (E.has(t.hostname)) {
                    if (null == t.pathname.match(j)) throw Error("Unexpected Klipy GIF path.");
                    let e = `${$.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
                    return `${location.protocol}${a}${e}`;
                }
                return `https://${t.hostname}${t.pathname}${t.search}`;
            })(i),
            s = await fetch(o),
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
                      })(o),
            h = "jpeg" === (t = p.split("/")[1]) ? ".jpg" : null != t && "" !== t ? `.${t}` : ".gif",
            u = `selected${h}`;
        l(),
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        a.e("53908"),
                        a.e("48804"),
                        a.e("50342"),
                        a.e("7406"),
                        a.e("55524"),
                        a.e("89908"),
                        a.e("74571"),
                    ]).then(a.bind(a, 142630));
                    return (t) =>
                        (0, n.jsx)(e, {
                            imageUri: o,
                            file: new File([r], u, { type: p }),
                            onCrop: S,
                            uploadType: T,
                            showUpsellHeader: L,
                            ...t,
                        });
                },
                { contextKey: P },
            );
    }
    i.useEffect(() => {
        _.default.track($.HAw.OPEN_MODAL, {
            type: $.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
            location_stack: k,
            location: { page: C },
        });
    }, [k, C]);
    let O = T === b.HL.AVATAR || T === b.HL.BANNER,
        U = (0, f.b)(!O),
        v = I.intl.string(I.t["xsC+/y"]);
    return (0, n.jsx)(d.f5, {
        value: k,
        children: (0, n.jsxs)(s.d, {
            onClose: l,
            transitionState: t,
            "aria-label": v,
            children: [
                (0, n.jsx)(r.rQ, { title: v }),
                (0, n.jsxs)(h.F, {
                    children: [
                        L &&
                            !U &&
                            (0, n.jsx)("div", {
                                className: N.It,
                                children: (0, n.jsx)(g.A, {
                                    type: T,
                                    analyticsPage: C,
                                    analyticsSection: $.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                                    isGIF: !0,
                                }),
                            }),
                        (0, n.jsxs)("div", {
                            className: N.SD,
                            children: [
                                (0, n.jsx)(A.A, {
                                    className: o()(N.XC, { [N.bX]: F }),
                                    onSelectGIF: H,
                                    headingColor: "text-subtle",
                                    hideFavorites: !0,
                                }),
                                F && (0, n.jsx)(u.y, { className: N.u1 }),
                                L && U && (0, n.jsx)(w.A, { uploadType: T, showUpsell: !0, className: N.Kt }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
