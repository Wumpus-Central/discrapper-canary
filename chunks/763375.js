a.d(e, { default: () => L });
var i = a(477900),
    s = a(582128),
    n = a(834730),
    l = a(173936),
    o = a(858899),
    r = a(148494),
    c = a(9578),
    d = a(688810),
    u = a(429913),
    m = a(228427),
    p = a(451909),
    x = a(446244),
    k = a(734057),
    _ = a(174459),
    C = a(957565),
    h = a(403362),
    f = a(871123),
    g = a(366523),
    N = a(995393),
    v = a(652215),
    w = a(381941),
    A = a(105292),
    I = a(700957);
function E(t) {
    let { sku: e, guildId: a } = t,
        o = (0, u.h)(e.applicationId),
        r = s.useMemo(() => (0, f.OY)(a, e), [a, e]);
    return (0, i.jsxs)("div", {
        className: I.sq,
        children: [
            (0, i.jsxs)("div", {
                className: I.kx,
                children: [
                    (0, i.jsx)(c.A, {
                        title: e.name,
                        href: r,
                        children: (0, i.jsx)(n.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: e.name,
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: I.Bo,
                        children: [
                            (0, i.jsx)(l.LinkIcon, { size: "xs", color: "currentColor", className: I.ds }),
                            (0, i.jsx)(n.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: A.intl.formatToPlainString(A.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(g.e, {
                containerClassName: I.wP,
                foregroundImageClassName: I.wP,
                backgroundImageClassName: I.wP,
                sku: e,
                shape: "square",
            }),
        ],
    });
}
function L(t) {
    let { sku: e, guildId: a, source: n, onClose: c, analyticsLocations: u, analyticsContext: g, ...I } = t,
        { analyticsLocations: L } = (0, d.Ay)(u ?? []),
        O = s.useCallback(
            async (t, i, s) => {
                let { withMessage: n, closeAfterSend: l } = i;
                s(!0);
                try {
                    let i = (await Promise.all(t.map(x.pk))).filter(h.Vq);
                    if (0 === i.length) return void s(!1);
                    l && c();
                    let d = (0, f.Q6)(a, e);
                    for (let t of i) {
                        let e = k.A.getChannel(t);
                        null != e &&
                            (await r.A.sendMessage(e.id, p.Ay.parse(e, d + (n ?? "")), !1, {
                                location: w.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, o.P0)({ text: A.intl.string(A.t.kwmYkt), variant: "success" });
                } catch (t) {
                    (0, o.P0)({ text: A.intl.string(A.t.iufib1), variant: "critical" });
                } finally {
                    s(!1);
                }
            },
            [c, a, e],
        ),
        P = s.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (_.default.track(v.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: g?.sessionId,
                            guild_id: a,
                            application_id: e.applicationId,
                            sku_id: e.id,
                            cta_type: N.Ng.COPY_LINK_BUTTON,
                            location_stack: L,
                        }),
                            (0, C.C)((0, f.OY)(a, e), () =>
                                (0, o.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                            ));
                    },
                    icon: l.LinkIcon,
                },
            ],
            [a, e, g?.sessionId, L],
        );
    return (0, i.jsx)(m.ForwardModal, {
        ...I,
        onClose: c,
        source: n,
        customPreview: (0, i.jsx)(E, { sku: e, guildId: a }),
        customSubtitle: A.intl.string(A.t.yiaXeN),
        customSendHandler: O,
        additionalActions: P,
    });
}
