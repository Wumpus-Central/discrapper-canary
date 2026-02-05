"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    r = n(158390),
    l = n(417597),
    a = n(562465),
    o = n(397927),
    c = n(830215),
    d = n(730134),
    u = n(598047),
    h = n(765548),
    _ = n(854378),
    p = n(414121),
    g = n(626584),
    m = n(293731),
    f = n(961350),
    A = n(203982),
    E = n(723702),
    x = n(337905),
    v = n(427262),
    I = n(837921),
    N = n(652215),
    S = n(818348),
    j = n(985018),
    C = n(947089),
    y = n(473169);
let T = n(906118),
    b = new g.A("LoginQRSocket");
function R(e) {
    let { text: t = "" } = e,
        [n, r] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = new Image();
            (e.src = T), (e.onload = () => r(!0)), (e.onerror = () => r(!0));
        }, [T]),
        s.useEffect(() => {
            n && o.ORC.announce(j.intl.string(j.t.j2p125));
        }, [n]),
        (0, i.jsx)("div", {
            className: C.Ac,
            children:
                "" !== t && n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.Ay, { className: C.JB, size: 160, text: t }),
                              (0, i.jsx)("div", { className: C.R6, children: (0, i.jsx)("img", { src: T, alt: "" }) }),
                          ],
                      })
                    : (0, i.jsx)("div", {
                          className: C.R6,
                          "aria-label": j.intl.string(j.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, i.jsx)(o.y$y, {
                              className: C.JB,
                              type: o.y$y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let O = (e) => {
    let { className: t, children: n } = e;
    return (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: t,
        children: n,
    });
};
function L(e) {
    let { state: t, cancel: n, errorMessage: s, conditionalMediationAbortController: r, isPasswordlessActive: l } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(R, { text: 1 === t.step ? `https://discord.com/ra/${t.fingerprint}` : "" }),
                    (0, i.jsx)(_.hE, { className: y.QB, children: j.intl.string(j.t.UPiHaL) }),
                    null != s
                        ? (0, i.jsx)(O, { children: s })
                        : (0, i.jsx)(_.tK, { children: j.intl.format(j.t["Qq+A6i"], {}) }),
                    (0, i.jsx)(o.BJc, {
                        padding: 8,
                        align: "center",
                        children: (0, i.jsx)(o.QWc, {
                            text: j.intl.string(j.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () => {
                                let e;
                                return (
                                    (e =
                                        E.isPlatformEmbedded && I.Ay.supportsFeature(N.BYE.WEBAUTHN)
                                            ? I.Ay.webAuthnAuthenticate
                                            : m.J),
                                    void c.A.authenticatePasswordless({
                                        authenticateFunc: e,
                                        conditionalMediationAbortController: r,
                                    }).catch(() => {})
                                );
                            },
                            disabled: l,
                        }),
                    }),
                ],
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.A, {
                        className: C.b4,
                        user: e,
                        size: o._3J.SIZE_120,
                        isMobile: !0,
                        status: S.cl.ONLINE,
                    }),
                    (0, i.jsx)(_.hE, { className: y.QB, children: j.intl.string(j.t.apGCUT) }),
                    (0, i.jsx)(_.tK, { children: j.intl.format(j.t.Cbl5JK, { username: `${v.Ay.getUserTag(e)}` }) }),
                    (0, i.jsx)("div", {
                        className: C.Z,
                        children: (0, i.jsx)(o.QWc, {
                            text: j.intl.string(j.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case 4:
        case 5:
            return (0, i.jsx)(o.y$y, { type: o.y$y.Type.WANDERING_CUBES });
    }
}
function w(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        c = (0, l.bG)([f.default], () => f.default.getIsPasswordlessActive()),
        {
            state: d,
            rsaKeyPair: _,
            cancel: p,
            handleFailure: g,
        } = (function (e) {
            let [t, n] = s.useState(0),
                [i, l] = s.useState(!1),
                [a, o] = s.useState({ step: 0 }),
                [c, d] = s.useState(null),
                _ = (0, u.A)(),
                p = s.useMemo(() => new r.A(1500, 3e4), []),
                g = (0, h.A)(() => {
                    o({ step: 0 }),
                        _
                            ? n((e) => e + 1)
                            : (b.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                m = s.useCallback(() => {
                    b.error("Could not complete QR code login, trying to restart with a new QR code."),
                        o({ step: 0 }),
                        p.pending || p.fail(g);
                }, [g, p]);
            return (
                s.useEffect(() => {
                    _ &&
                        i &&
                        0 === a.step &&
                        (b.info("reconnecting, now that document is visible"), l(!1), n((e) => e + 1));
                }, [a, _, i, l]),
                s.useEffect(() => {
                    let t = Date.now(),
                        n = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    n.startsWith("//") && (n = `wss:${n}`);
                    let i = new WebSocket(n);
                    b.info(`[0ms] connecting to ${n}`);
                    let s = (e) => b.info(`[${Date.now() - t}ms] ${e}`),
                        r = null,
                        l = null,
                        a = null,
                        c = null,
                        u = !0;
                    function h() {
                        if (null != r) return r;
                        throw Error("No key pair set");
                    }
                    let _ = () => {
                        u
                            ? ((u = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                            : (s("heartbeat timeout, reconnecting."), i.close(), m());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case "nonce_proof": {
                                    let e = r.encrypted_nonce,
                                        t = await (0, x.lU)(h(), e);
                                    s("computed nonce proof"), i.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                                    return;
                                }
                                case "pending_remote_init": {
                                    p.succeed(), A._.dispatch(N.jej.WAVE_EMPHASIZE);
                                    let e = await (0, x.Fs)(h());
                                    if (e !== r.fingerprint) throw Error(`bad fingerprint ${e} !== ${r.fingerprint}`);
                                    s("handshake complete awaiting remote auth."), o({ step: 1, fingerprint: e });
                                    return;
                                }
                                case "pending_login": {
                                    let e = r.ticket;
                                    null == e && m(), o({ step: 4, ticket: e });
                                    return;
                                }
                                case "pending_ticket": {
                                    A._.dispatch(N.jej.WAVE_EMPHASIZE),
                                        s("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = r.encrypted_user_payload;
                                    o({ step: 3, user: await (0, x.n7)(h(), e) });
                                    return;
                                }
                                case "pending_finish": {
                                    A._.dispatch(N.jej.WAVE_EMPHASIZE),
                                        s("remote auth handshake started, awaiting finish/cancel.");
                                    let e = r.encrypted_user_payload;
                                    o({ step: 2, user: await (0, x.n7)(h(), e) });
                                    return;
                                }
                                case "finish": {
                                    A._.dispatch(N.jej.WAVE_EMPHASIZE), s("remote auth handshake finished.");
                                    let t = r.encrypted_token;
                                    o({ step: 5 }), e(await (0, x.S4)(h(), t), await (0, x.Fs)(h()));
                                    return;
                                }
                                case "cancel":
                                    s("remote auth handshake cancelled."), g();
                                    return;
                                case "hello": {
                                    s(`got hello, auth timeout=${r.timeout_ms}ms`);
                                    let e = r.heartbeat_interval;
                                    c = setTimeout(
                                        () => {
                                            (c = null), _(), (a = setInterval(_, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    u = !0;
                            }
                        }),
                        (i.onopen = async () => {
                            (r = await (0, x.T8)()), (l = await (0, x.Jn)(r));
                            let e = await (0, x.Fs)(r);
                            s(`connected, handshaking with fingerprint: ${e}`),
                                i.send(JSON.stringify({ op: "init", encoded_public_key: l })),
                                d(r);
                        }),
                        (i.onclose = (e) => {
                            s(`disconnected, code: ${e.code} ${e.reason}`), m();
                        }),
                        (i.onerror = (e) => {
                            s(`disconnected, error: ${JSON.stringify(e)}`), m();
                        }),
                        () => {
                            s("cleaning up"),
                                (i.onopen = () => null),
                                (i.onmessage = () => null),
                                (i.onclose = () => null),
                                (i.onerror = () => null),
                                i.close(1e3),
                                p.cancel(),
                                null != c && clearTimeout(c),
                                null != a && clearInterval(a);
                        }
                    );
                }, [g, e, t, p, m]),
                { state: a, rsaKeyPair: c, cancel: g, handleFailure: m }
            );
        })(t),
        m = (function (e) {
            switch (e) {
                case 0:
                case 1:
                    return 0;
                case 3:
                case 2:
                case 4:
                case 5:
                    return 1;
            }
        })(d.step);
    return (
        s.useEffect(() => {
            4 === d.step &&
                null != d.ticket &&
                a.Bo.post({
                    url: N.Rsh.REMOTE_AUTH_LOGIN,
                    body: { ticket: d.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                    .then(async (e) => {
                        if (null != _)
                            try {
                                let n = await (0, x.S4)(_, e.body.encrypted_token),
                                    i = await (0, x.Fs)(_);
                                t(n, i);
                            } catch (e) {
                                g();
                            }
                        else g();
                    })
                    .catch(() => {
                        g();
                    });
        }, [d, t, _, g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: C.AC }),
                (0, i.jsx)(o.YC2, {
                    fillParent: !0,
                    className: C.ZF,
                    step: m,
                    steps: [0, 1],
                    children: (0, i.jsx)("div", {
                        className: C.vP,
                        children: (0, i.jsx)(L, {
                            state: d,
                            cancel: p,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: c,
                        }),
                    }),
                }),
            ],
        })
    );
}
