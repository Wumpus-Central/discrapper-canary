(n.d(a, { default: () => _ }), n(321073));
var t = n(477900),
    l = n(582128),
    i = n(834730),
    r = n(858899),
    s = n(173936),
    c = n(148494),
    o = n(228427),
    d = n(451909),
    m = n(378570),
    u = n(223863),
    p = n(734057),
    v = n(957565),
    x = n(403362),
    h = n(349085),
    g = n(174861),
    f = n(705285),
    k = n(381941),
    w = n(105292),
    C = n(511445);
function N(e) {
    let { server: a } = e,
        n = (0, h.A)(a.gameId, "cover") ?? a.coverUrl;
    return (0, t.jsxs)("div", {
        className: C.sq,
        children: [
            (0, t.jsxs)("div", {
                className: C.kx,
                children: [
                    (0, t.jsx)(i.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: a.serverName,
                    }),
                    (0, t.jsx)(i.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${a.gameName}  \u{2022}  ${a.planName}`,
                    }),
                    (0, t.jsx)(i.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${a.serverIp}  \u{2022}  ${a.location}`,
                    }),
                ],
            }),
            null != n &&
                (0, t.jsx)("div", {
                    className: C.wP,
                    children: (0, t.jsx)("img", { className: C.N4, src: n, alt: "" }),
                }),
        ],
    });
}
function _(e) {
    let { server: a, source: n, onClose: i, ...h } = e,
        C = l.useMemo(() => {
            let e = {
                v: g.Yw,
                name: a.serverName,
                game_id: a.gameId ?? "",
                sku_id: a.instance.planId,
                plan_name: a.planName,
                image_url: a.coverUrl ?? null,
                region_name: a.location,
                provider: a.instance.providerType ?? null,
                ip: a.instance.serverIP ?? null,
                port: a.instance.port ?? null,
                generated_at: Date.now(),
            };
            return (0, g.gG)(e);
        }, [a]),
        _ = l.useCallback(
            async (e, t, l) => {
                let { withMessage: s, transitionToDestination: o, closeAfterSend: v } = t;
                l(!0);
                try {
                    let t = (await Promise.all(e.map(u.pk))).filter(x.Vq);
                    if (0 === t.length) return void l(!1);
                    v && i();
                    let h = null != s && "" !== s,
                        g = h
                            ? `${C}

${s}`
                            : C,
                        N = [];
                    for (let e of t) {
                        let a = p.A.getChannel(e);
                        null != a &&
                            (await c.A.sendMessage(a.id, d.Ay.parse(a, g), !1, { location: k.Hx.GAME_SERVER_SHOP }),
                            N.push(a));
                    }
                    ((0, f.iu)({ server: a, channels: N, hasContextMessage: h, source: n }),
                        (0, r.P0)({ text: w.intl.string(w.t.kwmYkt), variant: "success" }),
                        o && null != t[0] && (0, m.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }));
                } catch (e) {
                    (0, r.P0)({ text: w.intl.string(w.t.iufib1), variant: "critical" });
                } finally {
                    l(!1);
                }
            },
            [i, C, a, n],
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
    return (0, t.jsx)(o.ForwardModal, {
        ...h,
        onClose: i,
        source: n,
        customPreview: (0, t.jsx)(N, { server: a }),
        customSendHandler: _,
        additionalActions: j,
    });
}
