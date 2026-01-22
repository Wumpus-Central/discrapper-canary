n.d(t, {
    A: () => N,
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
    d = n(587895),
    p = n(780964),
    f = n(954571),
    h = n(353835),
    A = n(307600),
    g = n(723702),
    m = n(636401),
    b = n(90924),
    _ = n(629471),
    E = n(613057),
    O = n(652215),
    y = n(360469),
    I = n(705751);
let v = new Set([y.AM, y.eK]),
    S = new Set(["www.nytimes.com", "apps.apple.com", "play.google.com"]),
    C = new Map([
        [
            I.aw,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            I.v4,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
        [
            I.Yl,
            {
                trustedHosts: S,
                trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf(),
            },
        ],
    ]),
    N = {
        [O.e$_.OPEN_EXTERNAL_LINK]: {
            scope: {
                [E.sm.ANY]: [E.VH, E.W_],
            },
            validation: (e) =>
                (0, _.A)(e).required().keys({
                    url: e.string().required(),
                }),
            handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, b.lG)(t.transport);
                let r = s.Ay.getCurrentEmbeddedActivity();
                try {
                    var i, c;
                    let e = new URL(n),
                        s = e.toString();
                    if (g.isPlatformEmbedded) {
                        let e = (0, a.f)() ? O.MLl.ACTIVITY_POPOUT : null;
                        h.A.focus(e, !0);
                    }
                    let p = d.A.getApplication(null == (i = t.application) ? void 0 : i.id),
                        m = (0, u.H)(null == r ? void 0 : r.location),
                        b = (null == p ? void 0 : p.id) !== void 0 ? C.get(p.id) : void 0;
                    if (void 0 !== b && b.trustedUntilEpochMs >= Date.now() && b.trustedHosts.has(e.host))
                        return (
                            (0, l.A)(s),
                            f.default.track(O.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: null == (c = t.application) ? void 0 : c.id,
                                url: s,
                                opened: !0,
                            }),
                            Promise.resolve({
                                opened: !0,
                            })
                        );
                    return new Promise((e) =>
                        (0, A.h)(
                            {
                                href: s,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    var n;
                                    (0, l.A)(s),
                                        f.default.track(O.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: null == (n = t.application) ? void 0 : n.id,
                                            url: s,
                                            opened: !0,
                                        }),
                                        e({
                                            opened: !0,
                                        });
                                },
                                onCancel: () => {
                                    var n;
                                    f.default.track(O.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: null == (n = t.application) ? void 0 : n.id,
                                        url: s,
                                        opened: !1,
                                    }),
                                        e({
                                            opened: !1,
                                        });
                                },
                            },
                            void 0,
                            void 0,
                            (0, o.j)({
                                application: p,
                                channelId: m,
                            }),
                        ),
                    );
                } catch (e) {
                    throw new m.A(
                        {
                            errorCode: O.Lw6.INVALID_COMMAND,
                        },
                        "Invalid URL: ".concat(n),
                    );
                }
            },
        },
        [O.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => (0, _.A)(e),
            scope: {
                [E.sm.ANY]: [E.VH],
            },
            handler(e) {
                let { socket: t } = e;
                (0, b.lG)(t.transport);
                let r = (0, b.D2)(t.application);
                if (!v.has(r))
                    throw new m.A(
                        {
                            errorCode: O.Lw6.UNAUTHORIZED_FOR_APPLICATION,
                        },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(840065);
                    e(p.X.CONNECTIONS_PANEL, {
                        section: O.nc_.CONNECTIONS,
                    });
                }
            },
        },
        [O.e$_.SHARE_LINK]: (0, i.T)(O.e$_.SHARE_LINK, {
            scope: {
                [E.sm.ANY]: [E.VH],
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
                    throw new m.A(
                        {
                            errorCode: O.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                if (!(0, r.Lt)(null != (t = n.application.flags) ? t : 0, O.gfo.EMBEDDED))
                    throw new m.A(
                        {
                            errorCode: O.Lw6.INVALID_COMMAND,
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
