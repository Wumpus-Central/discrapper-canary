i.d(e, { default: () => y });
var l = i(627968),
    n = i(64700),
    a = i(575593),
    r = i(834730),
    s = i(691540),
    o = i(857250),
    c = i(97483),
    d = i(173936),
    u = i(493336),
    C = i(115718),
    m = i(953832),
    p = i(451909),
    E = i(223863),
    k = i(734057),
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
    O = i(14702),
    P = i(381941),
    j = i(375708),
    I = i(41295);
let N = (t) => t.type === C.rD.USER || t.type === C.rD.GROUP_DM;
function g(t) {
    let e,
        { product: i, productName: n } = t;
    return (0, l.jsxs)("div", {
        className: I.sq,
        children: [
            (0, l.jsxs)("div", {
                className: I.kx,
                children: [
                    (0, l.jsx)(r.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: n }),
                    (0, l.jsx)(r.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                            (e = (0, _.YW)(i)) === a.R.BUNDLE
                                ? j.intl.string(j.t.Zr5tjn)
                                : ((null != e ? (0, S.Dm)(e) : null) ?? j.intl.string(j.t.pWG4ze)),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: I.wP, children: (0, l.jsx)(O.O, { product: i }) }),
        ],
    });
}
function y(t) {
    let { skuId: e, product: i, productName: a, tab: r, source: C, onClose: S, ...f } = t,
        _ = n.useCallback(
            async (t, i, l) => {
                let { withMessage: n, closeAfterSend: a } = i;
                l(!0);
                try {
                    let i = (await Promise.all(t.map(E.pk))).filter(x.Vq);
                    if (0 === i.length) return void l(!1);
                    a && S();
                    let d = `${w(e, r)}

`;
                    for (let t of i) {
                        let e = k.A.getChannel(t);
                        null != e &&
                            (await u.A.sendMessage(e.id, p.Ay.parse(e, d + (n ?? "")), !1, {
                                location: P.Hx.COLLECTIBLES_SHOP,
                            }));
                    }
                    (0, s.P0)((0, o.o)(j.intl.string(j.t.kwmYkt), c.Ck.SUCCESS));
                } catch (t) {
                    (0, s.P0)((0, o.o)(j.intl.string(j.t.iufib1), c.Ck.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [S, e, r],
        ),
        O = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        L.default.track(v.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: e }),
                            (0, h.C)(w(e, r), () => (0, s.P0)((0, o.o)(j.intl.string(j.t["L/PwZf"]), c.Ck.SUCCESS)));
                    },
                    icon: d.q,
                },
            ],
            [e, r],
        );
    return (0, l.jsx)(m.ForwardModal, {
        ...f,
        onClose: S,
        source: C,
        customPreview: (0, l.jsx)(g, { product: i, productName: a }),
        customSendHandler: _,
        additionalActions: O,
        channelFilter: N,
    });
}
