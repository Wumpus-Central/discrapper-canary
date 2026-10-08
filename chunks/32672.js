i.d(e, { default: () => N });
var n = i(477900),
    l = i(582128),
    a = i(575593),
    r = i(834730),
    s = i(376357),
    o = i(173936),
    c = i(148494),
    d = i(115718),
    u = i(914718),
    C = i(451909),
    m = i(446244),
    p = i(734057),
    x = i(174459),
    k = i(957565),
    E = i(403362),
    L = i(993408),
    h = i(758836),
    S = i(652215);
function f(t, e) {
    let i = (0, h.cw)(e) && e !== h.G2.COLLECTION_INDEX;
    return `${location.protocol}//${location.host}${S.BVt.COLLECTIBLES_SHOP}${i ? `?tab=${e}` : ""}#itemSkuId=${t}`;
}
var v = i(623373),
    w = i(14702),
    _ = i(381941),
    I = i(660183),
    O = i(242232);
let P = (t) => t.type === d.rD.USER || t.type === d.rD.GROUP_DM;
function j(t) {
    let e,
        { product: i, productName: l } = t;
    return (0, n.jsxs)("div", {
        className: O.sq,
        children: [
            (0, n.jsxs)("div", {
                className: O.kx,
                children: [
                    (0, n.jsx)(r.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: l }),
                    (0, n.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                            (e = (0, v.YW)(i)) === a.R.BUNDLE
                                ? I.intl.string(I.t.Zr5tjn)
                                : ((null != e ? (0, L.Dm)(e) : null) ?? I.intl.string(I.t.pWG4ze)),
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: O.wP, children: (0, n.jsx)(w.O, { product: i }) }),
        ],
    });
}
function N(t) {
    let { skuId: e, product: i, productName: a, tab: r, source: d, onClose: L, ...h } = t,
        v = l.useCallback(
            async (t, i, n) => {
                let { withMessage: l, closeAfterSend: a } = i;
                n(!0);
                try {
                    let i = (await Promise.all(t.map(m.pk))).filter(E.Vq);
                    if (0 === i.length) return void n(!1);
                    a && L();
                    let o = `${f(e, r)}

`;
                    for (let t of i) {
                        let e = p.A.getChannel(t);
                        null != e &&
                            (await c.A.sendMessage(e.id, C.Ay.parse(e, o + (l ?? "")), !1, {
                                location: _.Hx.COLLECTIBLES_SHOP,
                            }));
                    }
                    (0, s.P0)((0, s.ox)(I.intl.string(I.t.kwmYkt), s.Ck.SUCCESS));
                } catch (t) {
                    (0, s.P0)((0, s.ox)(I.intl.string(I.t.iufib1), s.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [L, e, r],
        ),
        w = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (x.default.track(S.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: e }),
                            (0, k.C)(f(e, r), () => (0, s.P0)((0, s.ox)(I.intl.string(I.t["L/PwZf"]), s.Ck.SUCCESS))));
                    },
                    icon: o.LinkIcon,
                },
            ],
            [e, r],
        );
    return (0, n.jsx)(u.ForwardModal, {
        ...h,
        onClose: L,
        source: d,
        customPreview: (0, n.jsx)(j, { product: i, productName: a }),
        customSendHandler: v,
        additionalActions: w,
        channelFilter: P,
    });
}
