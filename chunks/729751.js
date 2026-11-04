n(321073);
var t = n(477900),
    l = n(582128),
    i = n(834730),
    r = n(858899),
    s = n(173936),
    c = n(138399),
    o = n(92961),
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
    C = n(792996),
    N = n(511445);
function w(e) {
    let { server: a } = e,
        n = (0, h.A)(a.gameId, "cover") ?? a.coverUrl;
    return (0, t.jsxs)("div", {
        className: N.sq,
        children: [
            (0, t.jsxs)("div", {
                className: N.kx,
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
                    className: N.wP,
                    children: (0, t.jsx)("img", { className: N.N4, src: n, alt: "" }),
                }),
        ],
    });
}
n.d(
    a,
    {},
    {
        default: function (e) {
            let { server: a, source: n, onClose: i, ...h } = e,
                N = l.useMemo(() => {
                    let e = {
                        v: 1,
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
                                    ? `${N}

${s}`
                                    : N,
                                w = [];
                            for (let e of t) {
                                let a = p.A.getChannel(e);
                                null != a &&
                                    (await c.A.sendMessage(a.id, d.Ay.parse(a, g), !1, {
                                        location: k.Hx.GAME_SERVER_SHOP,
                                    }),
                                    w.push(a));
                            }
                            ((0, f.iu)({ server: a, channels: w, hasContextMessage: h, source: n }),
                                (0, r.P0)({ text: C.intl.string(C.t.kwmYkt), variant: "success" }),
                                o && null != t[0] && (0, m.iN)(t[0], { openTextInVoiceIfVoiceChannel: !0 }));
                        } catch (e) {
                            (0, r.P0)({ text: C.intl.string(C.t.iufib1), variant: "critical" });
                        } finally {
                            l(!1);
                        }
                    },
                    [i, N, a, n],
                ),
                j = l.useMemo(
                    () => [
                        {
                            variant: "secondary",
                            text: void 0,
                            onClick: () => {
                                (0, v.C)(N, () =>
                                    (0, r.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                                );
                            },
                            icon: s.LinkIcon,
                        },
                    ],
                    [N],
                );
            return (0, t.jsx)(o.ForwardModal, {
                ...h,
                onClose: i,
                source: n,
                customPreview: (0, t.jsx)(w, { server: a }),
                customSendHandler: _,
                additionalActions: j,
            });
        },
    },
);
