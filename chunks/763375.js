r.d(a, { default: () => p });
var n = r(627968),
    o = r(64700),
    t = r(397927),
    _ = r(843472),
    s = r(9578),
    E = r(688810),
    C = r(429913),
    l = r(911269),
    d = r(451909),
    A = r(223863),
    c = r(734057),
    N = r(954571),
    i = r(957565),
    O = r(403362),
    R = r(871123),
    u = r(366523),
    I = r(995393),
    T = r(652215),
    P = r(381941),
    f = r(985018),
    S = r(588187);
function b(e) {
    let { sku: a, guildId: r } = e,
        _ = (0, C.h)(a.applicationId),
        E = o.useMemo(() => (0, R.OY)(r, a), [r, a]);
    return (0, n.jsxs)("div", {
        className: S.sq,
        children: [
            (0, n.jsxs)("div", {
                className: S.kx,
                children: [
                    (0, n.jsx)(s.A, {
                        title: a.name,
                        href: E,
                        children: (0, n.jsx)(t.Text, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: a.name,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: S.Bo,
                        children: [
                            (0, n.jsx)(t.qYV, { size: "xs", color: "currentColor", className: S.ds }),
                            (0, n.jsx)(t.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: f.intl.formatToPlainString(f.t["CqpEC+"], { applicationName: _?.name }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(u.e, {
                containerClassName: S.wP,
                foregroundImageClassName: S.wP,
                backgroundImageClassName: S.wP,
                sku: a,
                shape: "square",
            }),
        ],
    });
}
function p(e) {
    let { sku: a, guildId: r, source: s, onClose: C, analyticsLocations: u, analyticsContext: S, ...p } = e,
        { analyticsLocations: h } = (0, E.Ay)(u ?? []),
        w = o.useCallback(
            async (e, n, o) => {
                let { withMessage: s, closeAfterSend: E } = n;
                o(!0);
                try {
                    let n = (await Promise.all(e.map(A.pk))).filter(O.Vq);
                    if (0 === n.length) return void o(!1);
                    E && C();
                    let l = (0, R.Q6)(r, a);
                    for (let e of n) {
                        let a = c.A.getChannel(e);
                        null != a &&
                            (await _.A.sendMessage(a.id, d.Ay.parse(a, l + (s ?? "")), !1, {
                                location: P.Hx.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                    (0, t.showToast)((0, t.createToast)(f.intl.string(f.t.kwmYkt), t.ToastType.SUCCESS));
                } catch (e) {
                    (0, t.showToast)((0, t.createToast)(f.intl.string(f.t.iufib1), t.ToastType.FAILURE));
                } finally {
                    o(!1);
                }
            },
            [C, r, a],
        ),
        m = o.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        N.default.track(T.HAw.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: S?.sessionId,
                            guild_id: r,
                            sku_id: a.id,
                            cta_type: I.Ng.COPY_LINK_BUTTON,
                            location_stack: h,
                        }),
                            (0, i.C)((0, R.OY)(r, a), () =>
                                (0, t.showToast)((0, t.createToast)(f.intl.string(f.t["L/PwZf"]), t.ToastType.SUCCESS)),
                            );
                    },
                    icon: t.qYV,
                },
            ],
            [r, a, S?.sessionId, h],
        );
    return (0, n.jsx)(l.ForwardModal, {
        ...p,
        onClose: C,
        source: s,
        customPreview: (0, n.jsx)(b, { sku: a, guildId: r }),
        customSubtitle: f.intl.string(f.t.yiaXeN),
        customSendHandler: w,
        additionalActions: m,
    });
}
