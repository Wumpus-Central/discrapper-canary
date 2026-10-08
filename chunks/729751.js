(a.d(n, { default: () => _ }), a(321073));
var l = a(477900),
    t = a(582128),
    i = a(834730),
    r = a(376357),
    s = a(173936),
    o = a(148494),
    c = a(914718),
    d = a(451909),
    m = a(378570),
    u = a(446244),
    p = a(734057),
    v = a(957565),
    x = a(403362),
    C = a(349085),
    h = a(174861),
    g = a(705285),
    k = a(381941),
    f = a(660183),
    w = a(511445);
function N(e) {
    let { server: n } = e,
        a = (0, C.A)(n.gameId, "cover") ?? n.coverUrl;
    return (0, l.jsxs)("div", {
        className: w.sq,
        children: [
            (0, l.jsxs)("div", {
                className: w.kx,
                children: [
                    (0, l.jsx)(i.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.serverName,
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${n.gameName}  \u{2022}  ${n.planName}`,
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children: `${n.serverIp}  \u{2022}  ${n.location}`,
                    }),
                ],
            }),
            null != a &&
                (0, l.jsx)("div", {
                    className: w.wP,
                    children: (0, l.jsx)("img", { className: w.N4, src: a, alt: "" }),
                }),
        ],
    });
}
function _(e) {
    let { server: n, source: a, onClose: i, ...C } = e,
        w = t.useMemo(() => {
            let e = {
                v: h.Yw,
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
            return (0, h.gG)(e);
        }, [n]),
        _ = t.useCallback(
            async (e, l, t) => {
                let { withMessage: s, transitionToDestination: c, closeAfterSend: v } = l;
                t(!0);
                try {
                    let l = (await Promise.all(e.map(u.pk))).filter(x.Vq);
                    if (0 === l.length) return void t(!1);
                    v && i();
                    let C = null != s && "" !== s,
                        h = C
                            ? `${w}

${s}`
                            : w,
                        N = [];
                    for (let e of l) {
                        let n = p.A.getChannel(e);
                        null != n &&
                            (await o.A.sendMessage(n.id, d.Ay.parse(n, h), !1, { location: k.Hx.GAME_SERVER_SHOP }),
                            N.push(n));
                    }
                    ((0, g.iu)({ server: n, channels: N, hasContextMessage: C, source: a }),
                        (0, r.P0)((0, r.ox)(f.intl.string(f.t.kwmYkt), r.Ck.SUCCESS)),
                        c && null != l[0] && (0, m.iN)(l[0], { openTextInVoiceIfVoiceChannel: !0 }));
                } catch (e) {
                    (0, r.P0)((0, r.ox)(f.intl.string(f.t.iufib1), r.Ck.FAILURE));
                } finally {
                    t(!1);
                }
            },
            [i, w, n, a],
        ),
        j = t.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (0, v.C)(w, () => (0, r.P0)((0, r.ox)(f.intl.string(f.t["L/PwZf"]), r.Ck.SUCCESS)));
                    },
                    icon: s.LinkIcon,
                },
            ],
            [w],
        );
    return (0, l.jsx)(c.ForwardModal, {
        ...C,
        onClose: i,
        source: a,
        customPreview: (0, l.jsx)(N, { server: n }),
        customSendHandler: _,
        additionalActions: j,
    });
}
