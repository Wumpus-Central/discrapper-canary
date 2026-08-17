i.d(e, { default: () => y });
var n = i(477900),
    l = i(582128),
    a = i(575593),
    r = i(834730),
    s = i(691540),
    o = i(857250),
    c = i(97483),
    d = i(173936),
    u = i(148494),
    C = i(115718),
    m = i(953832),
    p = i(451909),
    k = i(223863),
    E = i(734057),
    L = i(174459),
    h = i(957565),
    x = i(403362),
    S = i(993408),
    f = i(758836),
    v = i(652215);
function w(t, e) {
    let i = (0, f.cw)(e) && e !== f.G2.COLLECTION_INDEX;
    return `${location.protocol}//${location.host}${v.BVt.COLLECTIBLES_SHOP}${i ? `?tab=${e}` : ""}#itemSkuId=${t}`;
}
var _ = i(623373),
    I = i(14702),
    O = i(381941),
    P = i(375708),
    j = i(41295);
let N = (t) => t.type === C.rD.USER || t.type === C.rD.GROUP_DM;
function g(t) {
    let e,
        { product: i, productName: l } = t;
    return (0, n.jsxs)("div", {
        className: j.sq,
        children: [
            (0, n.jsxs)("div", {
                className: j.kx,
                children: [
                    (0, n.jsx)(r.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: l }),
                    (0, n.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                            (e = (0, _.YW)(i)) === a.R.BUNDLE
                                ? P.intl.string(P.t.Zr5tjn)
                                : ((null != e ? (0, S.Dm)(e) : null) ?? P.intl.string(P.t.pWG4ze)),
                    }),
                ],
            }),
            (0, n.jsx)("div", { className: j.wP, children: (0, n.jsx)(I.O, { product: i }) }),
        ],
    });
}
function y(t) {
    let { skuId: e, product: i, productName: a, tab: r, source: C, onClose: S, ...f } = t,
        _ = l.useCallback(
            async (t, i, n) => {
                let { withMessage: l, closeAfterSend: a } = i;
                n(!0);
                try {
                    let i = (await Promise.all(t.map(k.pk))).filter(x.Vq);
                    if (0 === i.length) return void n(!1);
                    a && S();
                    let d = `${w(e, r)}

`;
                    for (let t of i) {
                        let e = E.A.getChannel(t);
                        null != e &&
                            (await u.A.sendMessage(e.id, p.Ay.parse(e, d + (l ?? "")), !1, {
                                location: O.Hx.COLLECTIBLES_SHOP,
                            }));
                    }
                    (0, s.P0)((0, o.o)(P.intl.string(P.t.kwmYkt), c.Ck.SUCCESS));
                } catch (t) {
                    (0, s.P0)((0, o.o)(P.intl.string(P.t.iufib1), c.Ck.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [S, e, r],
        ),
        I = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        L.default.track(v.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: e }),
                            (0, h.C)(w(e, r), () => (0, s.P0)((0, o.o)(P.intl.string(P.t["L/PwZf"]), c.Ck.SUCCESS)));
                    },
                    icon: d.LinkIcon,
                },
            ],
            [e, r],
        );
    return (0, n.jsx)(m.ForwardModal, {
        ...f,
        onClose: S,
        source: C,
        customPreview: (0, n.jsx)(g, { product: i, productName: a }),
        customSendHandler: _,
        additionalActions: I,
        channelFilter: N,
    });
}
