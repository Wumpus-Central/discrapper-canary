n.d(t, {
    A: () => S,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(938796);
var r = n(665260),
    i = n(420970),
    l = n(975807),
    a = n(646865),
    s = n(933958),
    o = n(51520),
    c = n(700475),
    u = n(969151),
    d = n(93151),
    p = n(587895),
    h = n(780964),
    g = n(954571),
    m = n(353835),
    f = n(307600),
    A = n(723702),
    _ = n(636401),
    b = n(90924),
    E = n(629471),
    O = n(613057),
    y = n(652215),
    I = n(360469);
let v = new Set([I.AM, I.eK]),
    S = {
        [y.e$_.OPEN_EXTERNAL_LINK]: {
            scope: {
                [O.sm.ANY]: [O.VH, O.W_],
            },
            validation: (e) =>
                (0, E.A)(e).required().keys({
                    url: e.string().required(),
                }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, b.lG)(t.transport);
                let r = s.Ay.getCurrentEmbeddedActivity();
                try {
                    var i, c;
                    let e = new URL(n).toString();
                    if (A.isPlatformEmbedded) {
                        let e = (0, a.f)() ? y.MLl.ACTIVITY_POPOUT : null;
                        m.A.focus(e, !0);
                    }
                    let s = p.A.getApplication(null == (i = t.application) ? void 0 : i.id),
                        h = (0, u.H)(null == r ? void 0 : r.location);
                    if (await (0, d.u)(null == s ? void 0 : s.id, e))
                        return (
                            (0, l.A)(e),
                            g.default.track(y.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: null == (c = t.application) ? void 0 : c.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({
                                opened: !0,
                            })
                        );
                    return new Promise((n) =>
                        (0, f.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    var r;
                                    (0, l.A)(e),
                                        g.default.track(y.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: null == (r = t.application) ? void 0 : r.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({
                                            opened: !0,
                                        });
                                },
                                onCancel: () => {
                                    var r;
                                    g.default.track(y.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: null == (r = t.application) ? void 0 : r.id,
                                        url: e,
                                        opened: !1,
                                    }),
                                        n({
                                            opened: !1,
                                        });
                                },
                            },
                            void 0,
                            void 0,
                            (0, o.j)({
                                application: s,
                                channelId: h,
                            }),
                        ),
                    );
                } catch (e) {
                    throw new _.A(
                        {
                            errorCode: y.Lw6.INVALID_COMMAND,
                        },
                        "Invalid URL: ".concat(n),
                    );
                }
            },
        },
        [y.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, E.A)(e),
            scope: {
                [O.sm.ANY]: [O.VH],
            },
            handler(e) {
                let { socket: t } = e;
                (0, b.lG)(t.transport);
                let r = (0, b.D2)(t.application);
                if (!v.has(r))
                    throw new _.A(
                        {
                            errorCode: y.Lw6.UNAUTHORIZED_FOR_APPLICATION,
                        },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(840065);
                    e(h.X.CONNECTIONS_PANEL, {
                        section: y.nc_.CONNECTIONS,
                    });
                }
            },
        },
        [y.e$_.SHARE_LINK]: (0, i.T)(y.e$_.SHARE_LINK, {
            scope: {
                [O.sm.ANY]: [O.VH],
            },
            handler(e) {
                var t;
                let {
                    socket: n,
                    args: { custom_id: i, message: l, link_id: a },
                } = e;
                (0, b.lG)(n.transport);
                let s = (0, b.D2)(n.application);
                if (null == s)
                    throw new _.A(
                        {
                            errorCode: y.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                if (!(0, r.Lt)(null != (t = n.application.flags) ? t : 0, y.gfo.EMBEDDED))
                    throw new _.A(
                        {
                            errorCode: y.Lw6.INVALID_COMMAND,
                        },
                        "This application cannot access this API",
                    );
                return new Promise((e) => {
                    (0, c.a)({
                        applicationId: s,
                        customId: i,
                        linkId: a,
                        message: l,
                        onShare: (t, n) => {
                            e({
                                success: n || t,
                                didCopyLink: n,
                                didSendMessage: t,
                            });
                        },
                    });
                });
            },
        }),
    };
