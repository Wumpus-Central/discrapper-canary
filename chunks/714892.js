a.d(t, { default: () => P });
var e = a(477900),
    n = a(582128),
    s = a(834730),
    l = a(173936),
    o = a(691540),
    r = a(857250),
    c = a(97483),
    d = a(148494),
    u = a(9578),
    m = a(688810),
    p = a(429913),
    C = a(914718),
    k = a(451909),
    h = a(446244),
    f = a(734057),
    x = a(174459),
    _ = a(957565),
    g = a(403362),
    N = a(871123),
    I = a(366523),
    A = a(995393),
    E = a(652215),
    S = a(381941),
    j = a(375708),
    v = a(884540);
function L(i) {
    let { skus: t } = i,
        [a] = t,
        o = (0, p.h)(a?.applicationId),
        r = n.useMemo(() => t.map((i) => i.id), [t]),
        c = n.useMemo(() => (null != a ? (0, N.aU)(a.applicationId, r) : ""), [a, r]),
        d = t.length > 1 ? j.intl.formatToPlainString(j.t.j7Go5A, { count: t.length }) : a?.name;
    return (0, e.jsxs)("div", {
        className: v.sq,
        children: [
            (0, e.jsxs)("div", {
                className: v.kx,
                children: [
                    (0, e.jsx)(u.A, {
                        title: d,
                        href: c,
                        children: (0, e.jsx)(s.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: d,
                        }),
                    }),
                    (0, e.jsxs)("div", {
                        className: v.Bo,
                        children: [
                            (0, e.jsx)(l.LinkIcon, { size: "xs", color: "currentColor", className: v.wP }),
                            (0, e.jsx)(s.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: j.intl.formatToPlainString(j.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: v.sN,
                children: t.map((i) =>
                    (0, e.jsx)(
                        I.e,
                        {
                            containerClassName: v.Pq,
                            foregroundImageClassName: v.nf,
                            backgroundImageClassName: v.nf,
                            sku: i,
                            shape: "square",
                        },
                        i.id,
                    ),
                ),
            }),
        ],
    });
}
function P(i) {
    let { skus: t, guildId: a, source: s, onClose: u, analyticsLocations: p, analyticsContext: I, ...v } = i,
        { analyticsLocations: P } = (0, m.Ay)(p ?? []),
        w = n.useCallback(
            async (i, a, e) => {
                let { withMessage: n, closeAfterSend: s } = a;
                e(!0);
                try {
                    let a = (await Promise.all(i.map(h.pk))).filter(g.Vq);
                    if (0 === a.length) return void e(!1);
                    s && u();
                    let l = t[0]?.applicationId;
                    if (null == l) return void e(!1);
                    let m = (0, N.c2)(
                        l,
                        t.map((i) => i.id),
                    );
                    for (let i of a) {
                        let t = f.A.getChannel(i);
                        null != t &&
                            (await d.A.sendMessage(t.id, k.Ay.parse(t, m + (n ?? "")), !1, {
                                location: S.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, o.P0)((0, r.o)(j.intl.string(j.t.kwmYkt), c.Ck.SUCCESS));
                } catch (i) {
                    (0, o.P0)((0, r.o)(j.intl.string(j.t.iufib1), c.Ck.FAILURE));
                } finally {
                    e(!1);
                }
            },
            [u, t],
        ),
        y = n.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        x.default.track(E.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: I?.sessionId,
                            guild_id: a,
                            application_id: t[0]?.applicationId,
                            sku_id: t[0]?.id,
                            cta_type: A.Ng.COPY_LINK_BUTTON,
                            location_stack: P,
                        });
                        let i = t[0]?.applicationId;
                        null != i &&
                            (0, _.C)(
                                (0, N.aU)(
                                    i,
                                    t.map((i) => i.id),
                                ),
                                () => (0, o.P0)((0, r.o)(j.intl.string(j.t["L/PwZf"]), c.Ck.SUCCESS)),
                            );
                    },
                    icon: l.LinkIcon,
                },
            ],
            [a, t, I?.sessionId, P],
        );
    return (0, e.jsx)(C.ForwardModal, {
        ...v,
        onClose: u,
        source: s,
        customPreview: (0, e.jsx)(L, { skus: t }),
        customSubtitle: j.intl.string(j.t.yiaXeN),
        customSendHandler: w,
        additionalActions: y,
    });
}
