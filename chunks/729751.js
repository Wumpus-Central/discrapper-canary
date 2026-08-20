a.d(n, { default: () => E }), a(321073);
var l = a(477900),
    t = a(582128),
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
    h = a(403362),
    g = a(349085),
    k = a(174861),
    f = a(705285),
    w = a(381941),
    N = a(375708),
    _ = a(511445);
function j(e) {
    let { server: n } = e,
        a = (0, g.A)(n.gameId, "cover") ?? n.coverUrl;
    return (0, l.jsxs)("div", {
        className: _.sq,
        children: [
            (0, l.jsxs)("div", {
                className: _.kx,
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
                    className: _.wP,
                    children: (0, l.jsx)("img", { className: _.N4, src: a, alt: "" }),
                }),
        ],
    });
}
function E(e) {
    let { server: n, source: a, onClose: i, ...g } = e,
        _ = t.useMemo(() => {
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
        E = t.useCallback(
            async (e, l, t) => {
                let { withMessage: c, transitionToDestination: m, closeAfterSend: C } = l;
                t(!0);
                try {
                    let l = (await Promise.all(e.map(v.pk))).filter(h.Vq);
                    if (0 === l.length) return void t(!1);
                    C && i();
                    let g = null != c && "" !== c,
                        k = g
                            ? `${_}

${c}`
                            : _,
                        j = [];
                    for (let e of l) {
                        let n = x.A.getChannel(e);
                        null != n &&
                            (await d.A.sendMessage(n.id, u.Ay.parse(n, k), !1, { location: w.Hx.GAME_SERVER_SHOP }),
                            j.push(n));
                    }
                    (0, f.iu)({ server: n, channels: j, hasContextMessage: g, source: a }),
                        (0, r.P0)((0, s.o)(N.intl.string(N.t.kwmYkt), o.Ck.SUCCESS)),
                        m && null != l[0] && (0, p.iN)(l[0], { openTextInVoiceIfVoiceChannel: !0 });
                } catch (e) {
                    (0, r.P0)((0, s.o)(N.intl.string(N.t.iufib1), o.Ck.FAILURE));
                } finally {
                    t(!1);
                }
            },
            [i, _, n, a],
        ),
        I = t.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        (0, C.C)(_, () => (0, r.P0)((0, s.o)(N.intl.string(N.t["L/PwZf"]), o.Ck.SUCCESS)));
                    },
                    icon: c.LinkIcon,
                },
            ],
            [_],
        );
    return (0, l.jsx)(m.ForwardModal, {
        ...g,
        onClose: i,
        source: a,
        customPreview: (0, l.jsx)(j, { server: n }),
        customSendHandler: E,
        additionalActions: I,
    });
}
