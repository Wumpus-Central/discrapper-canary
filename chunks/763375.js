i.d(t, { default: () => L });
var a = i(477900),
    s = i(582128),
    n = i(834730),
    l = i(173936),
    o = i(376357),
    r = i(148494),
    c = i(9578),
    d = i(688810),
    u = i(429913),
    m = i(914718),
    C = i(451909),
    k = i(446244),
    p = i(734057),
    x = i(174459),
    _ = i(957565),
    h = i(403362),
    f = i(871123),
    g = i(366523),
    N = i(995393),
    E = i(652215),
    A = i(381941),
    I = i(660183),
    S = i(700957);
function w(e) {
    let { sku: t, guildId: i } = e,
        o = (0, u.h)(t.applicationId),
        r = s.useMemo(() => (0, f.OY)(i, t), [i, t]);
    return (0, a.jsxs)("div", {
        className: S.sq,
        children: [
            (0, a.jsxs)("div", {
                className: S.kx,
                children: [
                    (0, a.jsx)(c.A, {
                        title: t.name,
                        href: r,
                        children: (0, a.jsx)(n.E, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: t.name,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: S.Bo,
                        children: [
                            (0, a.jsx)(l.LinkIcon, { size: "xs", color: "currentColor", className: S.ds }),
                            (0, a.jsx)(n.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: I.intl.formatToPlainString(I.t["CqpEC+"], { applicationName: o?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.e, {
                containerClassName: S.wP,
                foregroundImageClassName: S.wP,
                backgroundImageClassName: S.wP,
                sku: t,
                shape: "square",
            }),
        ],
    });
}
function L(e) {
    let { sku: t, guildId: i, source: n, onClose: c, analyticsLocations: u, analyticsContext: g, ...S } = e,
        { analyticsLocations: L } = (0, d.Ay)(u ?? []),
        O = s.useCallback(
            async (e, a, s) => {
                let { withMessage: n, closeAfterSend: l } = a;
                s(!0);
                try {
                    let a = (await Promise.all(e.map(k.pk))).filter(h.Vq);
                    if (0 === a.length) return void s(!1);
                    l && c();
                    let d = (0, f.Q6)(i, t);
                    for (let e of a) {
                        let t = p.A.getChannel(e);
                        null != t &&
                            (await r.A.sendMessage(t.id, C.Ay.parse(t, d + (n ?? "")), !1, {
                                location: A.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, o.P0)((0, o.ox)(I.intl.string(I.t.kwmYkt), o.Ck.SUCCESS));
                } catch (e) {
                    (0, o.P0)((0, o.ox)(I.intl.string(I.t.iufib1), o.Ck.FAILURE));
                } finally {
                    s(!1);
                }
            },
            [c, i, t],
        ),
        P = s.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (x.default.track(E.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: g?.sessionId,
                            guild_id: i,
                            application_id: t.applicationId,
                            sku_id: t.id,
                            cta_type: N.Ng.COPY_LINK_BUTTON,
                            location_stack: L,
                        }),
                            (0, _.C)((0, f.OY)(i, t), () =>
                                (0, o.P0)((0, o.ox)(I.intl.string(I.t["L/PwZf"]), o.Ck.SUCCESS)),
                            ));
                    },
                    icon: l.LinkIcon,
                },
            ],
            [i, t, g?.sessionId, L],
        );
    return (0, a.jsx)(m.ForwardModal, {
        ...S,
        onClose: c,
        source: n,
        customPreview: (0, a.jsx)(w, { sku: t, guildId: i }),
        customSubtitle: I.intl.string(I.t.yiaXeN),
        customSendHandler: O,
        additionalActions: P,
    });
}
