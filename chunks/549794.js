n.d(t, { A: () => O }), n(323874), n(14289), n(35956);
var i = n(420970),
    r = n(975807),
    a = n(646865),
    l = n(933958),
    s = n(51520),
    o = n(700475),
    d = n(969151),
    u = n(93151),
    c = n(587895),
    A = n(20015),
    h = n(780964),
    _ = n(954571),
    E = n(353835),
    p = n(307600),
    m = n(723702),
    g = n(636401),
    I = n(90924),
    C = n(629471),
    f = n(613057),
    T = n(652215),
    S = n(360469);
let N = new Set([S.AM, S.eK]),
    O = {
        [T.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [f.sm.ANY]: [f.VH, f.W_] },
            validation: (e) => (0, C.A)(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, I.lG)(t.transport);
                let i = l.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (m.isPlatformEmbedded) {
                        let e = (0, a.f)() ? T.MLl.ACTIVITY_POPOUT : null;
                        E.A.focus(e, !0);
                    }
                    let l = c.A.getApplication(t.application?.id),
                        o = (0, d.H)(i?.location);
                    if (await (0, u.u)(l?.id, e))
                        return (
                            (0, r.A)(e),
                            _.default.track(T.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
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
                                    (0, r.A)(e),
                                        _.default.track(T.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: t.application?.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({ opened: !0 });
                                },
                                onCancel: () => {
                                    _.default.track(T.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: t.application?.id,
                                        url: e,
                                        opened: !1,
                                    }),
                                        n({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (0, s.j)({ application: l, channelId: o }),
                        ),
                    );
                } catch (e) {
                    throw new g.A({ errorCode: T.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [T.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, C.A)(e),
            scope: { [f.sm.ANY]: [f.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, I.lG)(t.transport);
                let i = (0, I.D2)(t.application);
                if (!N.has(i))
                    throw new g.A(
                        { errorCode: T.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(858897);
                    e(h.X.CONNECTIONS_PANEL);
                }
            },
        },
        [T.e$_.SHARE_LINK]: (0, i.T)(T.e$_.SHARE_LINK, {
            scope: { [f.sm.ANY]: [f.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: n, message: i, link_id: r },
                } = e;
                (0, I.lG)(t.transport);
                let a = (0, I.D2)(t.application);
                if (null == a) throw new g.A({ errorCode: T.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, A.n)(t.application, T.gfo.EMBEDDED))
                    throw new g.A({ errorCode: T.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    (0, o.a)({
                        applicationId: a,
                        customId: n,
                        linkId: r,
                        message: i,
                        onShare: (t, n) => {
                            e({ success: n || t, didCopyLink: n, didSendMessage: t });
                        },
                    });
                });
            },
        }),
    };
