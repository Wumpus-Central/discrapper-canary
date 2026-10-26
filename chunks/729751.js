(a.d(t, { default: () => _ }), a(321073));
var n = a(477900),
    l = a(582128),
    i = a(834730),
    r = a(858899),
    s = a(173936),
    c = a(148494),
    o = a(228427),
    d = a(451909),
    m = a(378570),
    u = a(446244),
    p = a(734057),
    v = a(957565),
    x = a(403362),
    h = a(349085),
    g = a(174861),
    f = a(705285),
    k = a(381941),
    w = a(105292),
    C = a(511445);
function N(e) {
    let { server: t } = e,
        a = (0, h.A)(t.gameId, "cover") ?? t.coverUrl;
    return (0, n.jsxs)("div", {
        className: C.sq,
        children: [
            (0, n.jsxs)("div", {
                className: C.kx,
                children: [
                    (0, n.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: t.serverName,
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${t.gameName}  \u{2022}  ${t.planName}`,
                    }),
                    (0, n.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${t.serverIp}  \u{2022}  ${t.location}`,
                    }),
                ],
            }),
            null != a &&
                (0, n.jsx)("div", {
                    className: C.wP,
                    children: (0, n.jsx)("img", { className: C.N4, src: a, alt: "" }),
                }),
        ],
    });
}
function _(e) {
    let { server: t, source: a, onClose: i, ...h } = e,
        C = l.useMemo(() => {
            let e = {
                v: g.Yw,
                name: t.serverName,
                game_id: t.gameId ?? "",
                sku_id: t.instance.planId,
                plan_name: t.planName,
                image_url: t.coverUrl ?? null,
                region_name: t.location,
                provider: t.instance.providerType ?? null,
                ip: t.instance.serverIP ?? null,
                port: t.instance.port ?? null,
                generated_at: Date.now(),
            };
            return (0, g.gG)(e);
        }, [t]),
        _ = l.useCallback(
            async (e, n, l) => {
                let { withMessage: s, transitionToDestination: o, closeAfterSend: v } = n;
                l(!0);
                try {
                    let n = (await Promise.all(e.map(u.pk))).filter(x.Vq);
                    if (0 === n.length) return void l(!1);
                    v && i();
                    let h = null != s && "" !== s,
                        g = h
                            ? `${C}

${s}`
                            : C,
                        N = [];
                    for (let e of n) {
                        let t = p.A.getChannel(e);
                        null != t &&
                            (await c.A.sendMessage(t.id, d.Ay.parse(t, g), !1, { location: k.Hx.GAME_SERVER_SHOP }),
                            N.push(t));
                    }
                    ((0, f.iu)({ server: t, channels: N, hasContextMessage: h, source: a }),
                        (0, r.P0)({ text: w.intl.string(w.t.kwmYkt), variant: "success" }),
                        o && null != n[0] && (0, m.iN)(n[0], { openTextInVoiceIfVoiceChannel: !0 }));
                } catch (e) {
                    (0, r.P0)({ text: w.intl.string(w.t.iufib1), variant: "critical" });
                } finally {
                    l(!1);
                }
            },
            [i, C, t, a],
        ),
        j = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (0, v.C)(C, () => (0, r.P0)({ text: w.intl.string(w.t["L/PwZf"]), variant: "success" }));
                    },
                    icon: s.LinkIcon,
                },
            ],
            [C],
        );
    return (0, n.jsx)(o.ForwardModal, {
        ...h,
        onClose: i,
        source: a,
        customPreview: (0, n.jsx)(N, { server: t }),
        customSendHandler: _,
        additionalActions: j,
    });
}
