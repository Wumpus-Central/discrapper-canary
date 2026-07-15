i.d(e, { default: () => N });
var l = i(627968),
    n = i(64700),
    a = i(575593),
    s = i(834730),
    r = i(691540),
    o = i(857250),
    d = i(97483),
    c = i(173936),
    u = i(493336),
    C = i(115718),
    m = i(953832),
    p = i(451909),
    k = i(223863),
    x = i(734057),
    h = i(174459),
    E = i(957565),
    f = i(403362),
    S = i(993408),
    L = i(573749),
    v = i(623373),
    w = i(14702),
    j = i(652215),
    P = i(381941),
    _ = i(375708),
    g = i(628983);
let y = (t) => t.type === C.rD.USER || t.type === C.rD.GROUP_DM;
function A(t) {
    let e,
        { product: i, productName: n } = t;
    return (0, l.jsxs)("div", {
        className: g.sq,
        children: [
            (0, l.jsxs)("div", {
                className: g.kx,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: n }),
                    (0, l.jsx)(s.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children:
                            (e = (0, v.YW)(i)) === a.R.BUNDLE
                                ? _.intl.string(_.t.Zr5tjn)
                                : ((null != e ? (0, S.Dm)(e) : null) ?? _.intl.string(_.t.pWG4ze)),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: g.wP, children: (0, l.jsx)(w.O, { product: i }) }),
        ],
    });
}
function N(t) {
    let { skuId: e, product: i, productName: a, tab: s, source: C, onClose: S, ...v } = t,
        w = n.useCallback(
            async (t, i, l) => {
                let { withMessage: n, closeAfterSend: a } = i;
                l(!0);
                try {
                    let i = (await Promise.all(t.map(k.pk))).filter(f.Vq);
                    if (0 === i.length) return void l(!1);
                    a && S();
                    let c = `${(0, L.o)(e, s)}

`;
                    for (let t of i) {
                        let e = x.A.getChannel(t);
                        null != e &&
                            (await u.A.sendMessage(e.id, p.Ay.parse(e, c + (n ?? "")), !1, {
                                location: P.Hx.COLLECTIBLES_SHOP,
                            }));
                    }
                    (0, r.P0)((0, o.o)(_.intl.string(_.t.kwmYkt), d.Ck.SUCCESS));
                } catch (t) {
                    (0, r.P0)((0, o.o)(_.intl.string(_.t.iufib1), d.Ck.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [S, e, s],
        ),
        g = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        h.default.track(j.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: e }),
                            (0, E.C)((0, L.o)(e, s), () =>
                                (0, r.P0)((0, o.o)(_.intl.string(_.t["L/PwZf"]), d.Ck.SUCCESS)),
                            );
                    },
                    icon: c.q,
                },
            ],
            [e, s],
        );
    return (0, l.jsx)(m.ForwardModal, {
        ...v,
        onClose: S,
        source: C,
        customPreview: (0, l.jsx)(A, { product: i, productName: a }),
        customSendHandler: w,
        additionalActions: g,
        channelFilter: y,
    });
}
