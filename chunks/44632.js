i.d(t, { default: () => A });
var l = i(627968),
    s = i(64700),
    a = i(834730),
    n = i(173936),
    r = i(691540),
    o = i(857250),
    c = i(97483),
    d = i(493336),
    u = i(9578),
    C = i(115718),
    m = i(953832),
    k = i(451909),
    x = i(223863),
    h = i(734057),
    p = i(174459),
    f = i(957565),
    E = i(403362),
    S = i(573749),
    v = i(652215),
    w = i(381941),
    L = i(375708),
    j = i(894135);
let P = (e) => e.type === C.rD.USER || e.type === C.rD.GROUP_DM;
function _(e) {
    let { skuId: t, productName: i, tab: r } = e,
        o = s.useMemo(() => (0, S.o)(t, r), [t, r]);
    return (0, l.jsx)("div", {
        className: j.sq,
        children: (0, l.jsxs)("div", {
            className: j.kx,
            children: [
                (0, l.jsx)(u.A, {
                    title: i,
                    href: o,
                    children: (0, l.jsx)(a.E, {
                        variant: "text-md/medium",
                        color: "text-link",
                        lineClamp: 1,
                        children: i,
                    }),
                }),
                (0, l.jsxs)("div", {
                    className: j.Bo,
                    children: [
                        (0, l.jsx)(n.q, { size: "xs", color: "currentColor", className: j.wP }),
                        (0, l.jsx)(a.E, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: L.intl.string(L.t.pWG4ze),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function A(e) {
    let { skuId: t, productName: i, tab: a, source: u, onClose: C, ...j } = e,
        A = s.useCallback(
            async (e, i, l) => {
                let { withMessage: s, closeAfterSend: n } = i;
                l(!0);
                try {
                    let i = (await Promise.all(e.map(x.pk))).filter(E.Vq);
                    if (0 === i.length) return void l(!1);
                    n && C();
                    let u = `${(0, S.o)(t, a)}

`;
                    for (let e of i) {
                        let t = h.A.getChannel(e);
                        null != t &&
                            (await d.A.sendMessage(t.id, k.Ay.parse(t, u + (s ?? "")), !1, {
                                location: w.Hx.COLLECTIBLES_SHOP,
                            }));
                    }
                    (0, r.P0)((0, o.o)(L.intl.string(L.t.kwmYkt), c.Ck.SUCCESS));
                } catch (e) {
                    (0, r.P0)((0, o.o)(L.intl.string(L.t.iufib1), c.Ck.FAILURE));
                } finally {
                    l(!1);
                }
            },
            [C, t, a],
        ),
        g = s.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        p.default.track(v.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
                            (0, f.C)((0, S.o)(t, a), () =>
                                (0, r.P0)((0, o.o)(L.intl.string(L.t["L/PwZf"]), c.Ck.SUCCESS)),
                            );
                    },
                    icon: n.q,
                },
            ],
            [t, a],
        );
    return (0, l.jsx)(m.ForwardModal, {
        ...j,
        onClose: C,
        source: u,
        customPreview: (0, l.jsx)(_, { skuId: t, productName: i, tab: a }),
        customSendHandler: A,
        additionalActions: g,
        channelFilter: P,
    });
}
