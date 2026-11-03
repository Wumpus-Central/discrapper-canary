e.d(a, { default: () => E });
var i = e(477900),
    s = e(582128),
    n = e(834730),
    l = e(173936),
    o = e(858899),
    r = e(148494),
    c = e(9578),
    d = e(688810),
    u = e(429913),
    m = e(228427),
    p = e(451909),
    k = e(223863),
    x = e(734057),
    _ = e(174459),
    C = e(957565),
    h = e(403362),
    f = e(871123),
    g = e(366523),
    N = e(995393),
    v = e(652215),
    w = e(381941),
    y = e(105292),
    A = e(700957);
function I(t) {
    let { sku: a, guildId: e } = t,
        o = (0, u.h)(a.applicationId),
        r = s.useMemo(() => (0, f.OY)(e, a), [e, a]);
    return (0, i.jsxs)("div", {
        className: A.sq,
        children: [
            (0, i.jsxs)("div", {
                className: A.kx,
                children: [
                    (0, i.jsx)(c.A, {
                        title: a.name,
                        href: r,
                        children: (0, i.jsx)(n.E, {
                            variant: "body-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: a.name,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: A.Bo,
                        children: [
                            (0, i.jsx)(l.LinkIcon, { size: "xs", color: "currentColor", className: A.ds }),
                            (0, i.jsx)(n.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                children: y.intl.formatToPlainString(y.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(g.e, {
                containerClassName: A.wP,
                foregroundImageClassName: A.wP,
                backgroundImageClassName: A.wP,
                sku: a,
                shape: "square",
            }),
        ],
    });
}
function E(t) {
    let { sku: a, guildId: e, source: n, onClose: c, analyticsLocations: u, analyticsContext: g, ...A } = t,
        { analyticsLocations: E } = (0, d.Ay)(u ?? []),
        L = s.useCallback(
            async (t, i, s) => {
                let { withMessage: n, closeAfterSend: l } = i;
                s(!0);
                try {
                    let i = (await Promise.all(t.map(k.pk))).filter(h.Vq);
                    if (0 === i.length) return void s(!1);
                    l && c();
                    let d = (0, f.Q6)(e, a);
                    for (let t of i) {
                        let a = x.A.getChannel(t);
                        null != a &&
                            (await r.A.sendMessage(a.id, p.Ay.parse(a, d + (n ?? "")), !1, {
                                location: w.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, o.P0)({ text: y.intl.string(y.t.kwmYkt), variant: "success" });
                } catch (t) {
                    (0, o.P0)({ text: y.intl.string(y.t.iufib1), variant: "critical" });
                } finally {
                    s(!1);
                }
            },
            [c, e, a],
        ),
        O = s.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (_.default.track(v.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: g?.sessionId,
                            guild_id: e,
                            application_id: a.applicationId,
                            sku_id: a.id,
                            cta_type: N.Ng.COPY_LINK_BUTTON,
                            location_stack: E,
                        }),
                            (0, C.C)((0, f.OY)(e, a), () =>
                                (0, o.P0)({ text: y.intl.string(y.t["L/PwZf"]), variant: "success" }),
                            ));
                    },
                    icon: l.LinkIcon,
                },
            ],
            [e, a, g?.sessionId, E],
        );
    return (0, i.jsx)(m.ForwardModal, {
        ...A,
        onClose: c,
        source: n,
        customPreview: (0, i.jsx)(I, { sku: a, guildId: e }),
        customSubtitle: y.intl.string(y.t.yiaXeN),
        customSendHandler: L,
        additionalActions: O,
    });
}
