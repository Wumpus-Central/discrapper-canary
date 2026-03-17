n.d(t, { A: () => x }), n(323874), n(14289), n(35956);
var i = n(420970),
    a = n(975807),
    r = n(646865),
    l = n(933958),
    s = n(51520),
    o = n(700475),
    d = n(969151),
    c = n(93151),
    u = n(587895),
    A = n(20015),
    h = n(780964),
    _ = n(954571),
    m = n(353835),
    g = n(307600),
    p = n(723702),
    E = n(636401),
    I = n(90924),
    f = n(629471),
    C = n(613057),
    T = n(652215),
    N = n(360469);
let S = new Set([N.AM, N.eK]),
    x = {
        [T.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [C.sm.ANY]: [C.VH, C.W_] },
            validation: (e) => (0, f.A)(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, I.lG)(t.transport);
                let i = l.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (p.isPlatformEmbedded) {
                        let e = (0, r.f)() ? T.MLl.ACTIVITY_POPOUT : null;
                        m.A.focus(e, !0);
                    }
                    let l = u.A.getApplication(t.application?.id),
                        o = (0, d.H)(i?.location);
                    if (await (0, c.u)(l?.id, e))
                        return (
                            (0, a.A)(e),
                            _.default.track(T.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: t.application?.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((n) =>
                        (0, g.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, a.A)(e),
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
                    throw new E.A({ errorCode: T.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [T.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, f.A)(e),
            scope: { [C.sm.ANY]: [C.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, I.lG)(t.transport);
                let i = (0, I.D2)(t.application);
                if (!S.has(i))
                    throw new E.A(
                        { errorCode: T.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(840065);
                    e(h.X.CONNECTIONS_PANEL);
                }
            },
        },
        [T.e$_.SHARE_LINK]: (0, i.T)(T.e$_.SHARE_LINK, {
            scope: { [C.sm.ANY]: [C.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: n, message: i, link_id: a },
                } = e;
                (0, I.lG)(t.transport);
                let r = (0, I.D2)(t.application);
                if (null == r) throw new E.A({ errorCode: T.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, A.n)(t.application, T.gfo.EMBEDDED))
                    throw new E.A({ errorCode: T.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    (0, o.a)({
                        applicationId: r,
                        customId: n,
                        linkId: a,
                        message: i,
                        onShare: (t, n) => {
                            e({ success: n || t, didCopyLink: n, didSendMessage: t });
                        },
                    });
                });
            },
        }),
    };
