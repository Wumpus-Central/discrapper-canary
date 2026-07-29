a.d(n, { default: () => j });
var t = a(477900),
    l = a(582128),
    i = a(834730),
    r = a(691540),
    s = a(857250),
    o = a(97483),
    c = a(173936),
    d = a(148494),
    m = a(953832),
    u = a(451909),
    p = a(378570),
    v = a(223863),
    x = a(734057),
    C = a(957565),
    g = a(403362),
    h = a(349085),
    k = a(174861),
    f = a(381941),
    w = a(375708),
    N = a(426346);
function _(e) {
    let { server: n } = e,
        a = (0, h.A)(n.gameId, "cover") ?? n.coverUrl;
    return (0, t.jsxs)("div", {
        className: N.sq,
        children: [
            (0, t.jsxs)("div", {
                className: N.kx,
                children: [
                    (0, t.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.serverName,
                    }),
                    (0, t.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${n.gameName}  \u{2022}  ${n.planName}`,
                    }),
                    (0, t.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${n.serverIp}  \u{2022}  ${n.location}`,
                    }),
                ],
            }),
            null != a &&
                (0, t.jsx)("div", {
                    className: N.wP,
                    children: (0, t.jsx)("img", { className: N.N4, src: a, alt: "" }),
                }),
        ],
    });
}
function j(e) {
    let { server: n, source: a, onClose: i, ...h } = e,
        N = l.useMemo(() => {
            let e = {
                v: k.Yw,
                name: n.serverName,
                game_id: n.gameId ?? "",
                sku_id: n.instance.planId,
                plan_name: n.planName,
                image_url: n.coverUrl ?? null,
                region_name: n.location,
                provider: n.instance.providerType ?? null,
                ip: n.instance.serverIP ?? null,
                port: n.instance.port ?? null,
                generated_at: Date.now(),
            };
            return (0, k.gG)(e);
        }, [n]),
        j = l.useCallback(
            async (e, n, a) => {
                let { withMessage: t, transitionToDestination: l, closeAfterSend: c } = n;
                a(!0);
                try {
                    let n = (await Promise.all(e.map(v.pk))).filter(g.Vq);
                    if (0 === n.length) return void a(!1);
                    c && i();
                    let m =
                        null != t && "" !== t
                            ? `${N}

${t}`
                            : N;
                    for (let e of n) {
                        let n = x.A.getChannel(e);
                        null != n &&
                            (await d.A.sendMessage(n.id, u.Ay.parse(n, m), !1, { location: f.Hx.GAME_SERVER_SHOP }));
                    }
                    (0, r.P0)((0, s.o)(w.intl.string(w.t.kwmYkt), o.Ck.SUCCESS)),
                        l && null != n[0] && (0, p.iN)(n[0], { openTextInVoiceIfVoiceChannel: !0 });
                } catch (e) {
                    (0, r.P0)((0, s.o)(w.intl.string(w.t.iufib1), o.Ck.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [i, N],
        ),
        E = l.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (0, C.C)(N, () => (0, r.P0)((0, s.o)(w.intl.string(w.t["L/PwZf"]), o.Ck.SUCCESS)));
                    },
                    icon: c.q,
                },
            ],
            [N],
        );
    return (0, t.jsx)(m.ForwardModal, {
        ...h,
        onClose: i,
        source: a,
        customPreview: (0, t.jsx)(_, { server: n }),
        customSendHandler: j,
        additionalActions: E,
    });
}
