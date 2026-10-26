i.d(e, { default: () => S });
var n = i(477900),
    a = i(582128),
    l = i(575593),
    r = i(834730),
    s = i(858899),
    c = i(173936),
    o = i(148494),
    d = i(115718),
    u = i(228427),
    m = i(451909),
    p = i(446244),
    x = i(734057),
    C = i(174459),
    L = i(957565),
    h = i(403362),
    k = i(993408),
    v = i(758836),
    E = i(652215);
function f(t, e) {
    let i = (0, v.cw)(e) && e !== v.G2.COLLECTION_INDEX;
    return `${location.protocol}//${location.host}${E.BVt.COLLECTIBLES_SHOP}${i ? `?tab=${e}` : ""}#itemSkuId=${t}`;
}
var w = i(623373),
    _ = i(14702),
    O = i(381941),
    P = i(105292),
    j = i(242232);
let I = (t) => t.type === d.rD.USER || t.type === d.rD.GROUP_DM;
function N(t) {
    let e,
        { product: i, productName: a } = t;
    return (0, n.jsxs)("div", {
        className: j.sq,
        children: [
            (0, n.jsxs)("div", {
                className: j.kx,
                children: [
                    (0, n.jsx)(r.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: a }),
                    (0, n.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                            (e = (0, w.YW)(i)) === l.R.BUNDLE
                                ? P.intl.string(P.t.Zr5tjn)
                                : ((null != e ? (0, k.Dm)(e) : null) ?? P.intl.string(P.t.pWG4ze)),
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: j.wP, children: (0, n.jsx)(_.O, { product: i }) }),
        ],
    });
}
function S(t) {
    let { skuId: e, product: i, productName: l, tab: r, source: d, onClose: k, ...v } = t,
        w = a.useCallback(
            async (t, i, n) => {
                let { withMessage: a, closeAfterSend: l } = i;
                n(!0);
                try {
                    let i = (await Promise.all(t.map(p.pk))).filter(h.Vq);
                    if (0 === i.length) return void n(!1);
                    l && k();
                    let c = `${f(e, r)}

`;
                    for (let t of i) {
                        let e = x.A.getChannel(t);
                        null != e &&
                            (await o.A.sendMessage(e.id, m.Ay.parse(e, c + (a ?? "")), !1, {
                                location: O.Hx.COLLECTIBLES_SHOP,
                            }));
                    }
                    (0, s.P0)({ text: P.intl.string(P.t.kwmYkt), variant: "success" });
                } catch (t) {
                    (0, s.P0)({ text: P.intl.string(P.t.iufib1), variant: "critical" });
                } finally {
                    n(!1);
                }
            },
            [k, e, r],
        ),
        _ = a.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (C.default.track(E.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: e }),
                            (0, L.C)(f(e, r), () =>
                                (0, s.P0)({ text: P.intl.string(P.t["L/PwZf"]), variant: "success" }),
                            ));
                    },
                    icon: c.LinkIcon,
                },
            ],
            [e, r],
        );
    return (0, n.jsx)(u.ForwardModal, {
        ...v,
        onClose: k,
        source: d,
        customPreview: (0, n.jsx)(N, { product: i, productName: l }),
        customSendHandler: w,
        additionalActions: _,
        channelFilter: I,
    });
}
