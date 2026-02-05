n.d(t, { A: () => x }), n(323874), n(14289), n(35956), n(938796);
var i = n(665260),
    r = n(420970),
    a = n(975807),
    l = n(646865),
    s = n(933958),
    o = n(51520),
    d = n(700475),
    c = n(969151),
    u = n(93151),
    A = n(587895),
    h = n(780964),
    _ = n(954571),
    m = n(353835),
    p = n(307600),
    g = n(723702),
    E = n(636401),
    f = n(90924),
    I = n(629471),
    C = n(613057),
    N = n(652215),
    T = n(360469);
let S = new Set([T.AM, T.eK]),
    x = {
        [N.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [C.sm.ANY]: [C.VH, C.W_] },
            validation: (e) => (0, I.A)(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, f.lG)(t.transport);
                let i = s.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (g.isPlatformEmbedded) {
                        let e = (0, l.f)() ? N.MLl.ACTIVITY_POPOUT : null;
                        m.A.focus(e, !0);
                    }
                    let r = A.A.getApplication(t.application?.id),
                        s = (0, c.H)(i?.location);
                    if (await (0, u.u)(r?.id, e))
                        return (
                            (0, a.A)(e),
                            _.default.track(N.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: t.application?.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((n) =>
                        (0, p.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, a.A)(e),
                                        _.default.track(N.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: t.application?.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({ opened: !0 });
                                },
                                onCancel: () => {
                                    _.default.track(N.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: t.application?.id,
                                        url: e,
                                        opened: !1,
                                    }),
                                        n({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (0, o.j)({ application: r, channelId: s }),
                        ),
                    );
                } catch (e) {
                    throw new E.A({ errorCode: N.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [N.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, I.A)(e),
            scope: { [C.sm.ANY]: [C.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, f.lG)(t.transport);
                let i = (0, f.D2)(t.application);
                if (!S.has(i))
                    throw new E.A(
                        { errorCode: N.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(840065);
                    e(h.X.CONNECTIONS_PANEL, { section: N.nc_.CONNECTIONS });
                }
            },
        },
        [N.e$_.SHARE_LINK]: (0, r.T)(N.e$_.SHARE_LINK, {
            scope: { [C.sm.ANY]: [C.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: n, message: r, link_id: a },
                } = e;
                (0, f.lG)(t.transport);
                let l = (0, f.D2)(t.application);
                if (null == l) throw new E.A({ errorCode: N.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, i.Lt)(t.application.flags ?? 0, N.gfo.EMBEDDED))
                    throw new E.A({ errorCode: N.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    (0, d.a)({
                        applicationId: l,
                        customId: n,
                        linkId: a,
                        message: r,
                        onShare: (t, n) => {
                            e({ success: n || t, didCopyLink: n, didSendMessage: t });
                        },
                    });
                });
            },
        }),
    };
