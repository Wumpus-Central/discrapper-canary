n.d(t, {
    A: () => P,
}),
    n(896048),
    n(65821),
    n(457529);
var r = n(627968),
    i = n(64700),
    s = n(158390),
    l = n(417597),
    a = n(562465),
    o = n(397927),
    c = n(830215),
    u = n(730134),
    d = n(598047),
    h = n(765548),
    p = n(854378),
    g = n(414121),
    f = n(626584),
    _ = n(293731),
    m = n(961350),
    A = n(203982),
    x = n(723702),
    E = n(337905),
    v = n(427262),
    y = n(837921),
    b = n(652215),
    j = n(818348),
    O = n(985018),
    I = n(947089),
    S = n(473169);
let N = n(906118),
    C = new f.A("LoginQRSocket");

function T(e) {
    let { text: t = "" } = e,
        [n, s] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = N), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [N]),
        i.useEffect(() => {
            n && o.ORC.announce(O.intl.string(O.t.j2p125));
        }, [n]),
        (0, r.jsx)("div", {
            className: I.Ac,
            children:
                "" !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.Ay, {
                                  className: I.JB,
                                  size: 160,
                                  text: t,
                              }),
                              (0, r.jsx)("div", {
                                  className: I.R6,
                                  children: (0, r.jsx)("img", {
                                      src: N,
                                      alt: "",
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: I.R6,
                          "aria-label": O.intl.string(O.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(o.y$y, {
                              className: I.JB,
                              type: o.y$y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let R = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: t,
        children: n,
    });
};

function w(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: s, isPasswordlessActive: l } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(T, {
                        text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : "",
                    }),
                    (0, r.jsx)(p.hE, {
                        className: S.QB,
                        children: O.intl.string(O.t.UPiHaL),
                    }),
                    null != i
                        ? (0, r.jsx)(R, {
                              children: i,
                          })
                        : (0, r.jsx)(p.tK, {
                              children: O.intl.format(O.t["Qq+A6i"], {}),
                          }),
                    (0, r.jsx)(o.BJc, {
                        padding: 8,
                        align: "center",
                        children: (0, r.jsx)(o.QWc, {
                            text: O.intl.string(O.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () => {
                                let e;
                                return (
                                    (e =
                                        x.isPlatformEmbedded && y.Ay.supportsFeature(b.BYE.WEBAUTHN)
                                            ? y.Ay.webAuthnAuthenticate
                                            : _.J),
                                    void c.A.authenticatePasswordless({
                                        authenticateFunc: e,
                                        conditionalMediationAbortController: s,
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
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.A, {
                        className: I.b4,
                        user: e,
                        size: o._3J.SIZE_120,
                        isMobile: !0,
                        status: j.cl.ONLINE,
                    }),
                    (0, r.jsx)(p.hE, {
                        className: S.QB,
                        children: O.intl.string(O.t.apGCUT),
                    }),
                    (0, r.jsx)(p.tK, {
                        children: O.intl.format(O.t.Cbl5JK, {
                            username: "".concat(v.Ay.getUserTag(e)),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: I.Z,
                        children: (0, r.jsx)(o.QWc, {
                            text: O.intl.string(O.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(o.y$y, {
                type: o.y$y.Type.WANDERING_CUBES,
            });
    }
}

function P(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        c = (0, l.bG)([m.default], () => m.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: p,
            cancel: g,
            handleFailure: f,
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [a, o] = i.useState({
                    step: 0,
                }),
                [c, u] = i.useState(null),
                p = (0, d.A)(),
                g = i.useMemo(() => new s.A(1500, 3e4), []),
                f = (0, h.A)(() => {
                    o({
                        step: 0,
                    }),
                        p
                            ? n((e) => e + 1)
                            : (C.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                _ = i.useCallback(() => {
                    C.error("Could not complete QR code login, trying to restart with a new QR code."),
                        o({
                            step: 0,
                        }),
                        g.pending || g.fail(f);
                }, [f, g]);
            return (
                i.useEffect(() => {
                    p &&
                        r &&
                        0 === a.step &&
                        (C.info("reconnecting, now that document is visible"), l(!1), n((e) => e + 1));
                }, [a, p, r, l]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = "".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2");
                    n.startsWith("//") && (n = "wss:".concat(n));
                    let r = new WebSocket(n);
                    C.info("[0ms] connecting to ".concat(n));
                    let i = (e) => C.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
                        s = null,
                        l = null,
                        a = null,
                        c = null,
                        d = !0;

                    function h() {
                        if (null != s) return s;
                        throw Error("No key pair set");
                    }
                    let p = () => {
                        d
                            ? ((d = !1),
                              r.send(
                                  JSON.stringify({
                                      op: "heartbeat",
                                  }),
                              ))
                            : (i("heartbeat timeout, reconnecting."), r.close(), _());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                s = JSON.parse(n);
                            switch (s.op) {
                                case "nonce_proof": {
                                    let e = s.encrypted_nonce,
                                        t = await (0, E.lU)(h(), e);
                                    i("computed nonce proof"),
                                        r.send(
                                            JSON.stringify({
                                                op: "nonce_proof",
                                                nonce: t,
                                            }),
                                        );
                                    return;
                                }
                                case "pending_remote_init": {
                                    g.succeed(), A._.dispatch(b.jej.WAVE_EMPHASIZE);
                                    let e = await (0, E.Fs)(h());
                                    if (e !== s.fingerprint)
                                        throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                                    i("handshake complete awaiting remote auth."),
                                        o({
                                            step: 1,
                                            fingerprint: e,
                                        });
                                    return;
                                }
                                case "pending_login": {
                                    let e = s.ticket;
                                    null == e && _(),
                                        o({
                                            step: 4,
                                            ticket: e,
                                        });
                                    return;
                                }
                                case "pending_ticket": {
                                    A._.dispatch(b.jej.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = s.encrypted_user_payload;
                                    o({
                                        step: 3,
                                        user: await (0, E.n7)(h(), e),
                                    });
                                    return;
                                }
                                case "pending_finish": {
                                    A._.dispatch(b.jej.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting finish/cancel.");
                                    let e = s.encrypted_user_payload;
                                    o({
                                        step: 2,
                                        user: await (0, E.n7)(h(), e),
                                    });
                                    return;
                                }
                                case "finish": {
                                    A._.dispatch(b.jej.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                                    let t = s.encrypted_token;
                                    o({
                                        step: 5,
                                    }),
                                        e(await (0, E.S4)(h(), t), await (0, E.Fs)(h()));
                                    return;
                                }
                                case "cancel":
                                    i("remote auth handshake cancelled."), f();
                                    return;
                                case "hello": {
                                    i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                                    let e = s.heartbeat_interval;
                                    c = setTimeout(
                                        () => {
                                            (c = null), p(), (a = setInterval(p, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    d = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (s = await (0, E.T8)()), (l = await (0, E.Jn)(s));
                            let e = await (0, E.Fs)(s);
                            i("connected, handshaking with fingerprint: ".concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: "init",
                                        encoded_public_key: l,
                                    }),
                                ),
                                u(s);
                        }),
                        (r.onclose = (e) => {
                            i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), _();
                        }),
                        (r.onerror = (e) => {
                            i("disconnected, error: ".concat(JSON.stringify(e))), _();
                        }),
                        () => {
                            i("cleaning up"),
                                (r.onopen = () => null),
                                (r.onmessage = () => null),
                                (r.onclose = () => null),
                                (r.onerror = () => null),
                                r.close(1e3),
                                g.cancel(),
                                null != c && clearTimeout(c),
                                null != a && clearInterval(a);
                        }
                    );
                }, [f, e, t, g, _]),
                {
                    state: a,
                    rsaKeyPair: c,
                    cancel: f,
                    handleFailure: _,
                }
            );
        })(t),
        _ = (function (e) {
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
        })(u.step);
    return (
        i.useEffect(() => {
            4 === u.step &&
                null != u.ticket &&
                a.Bo.post({
                    url: b.Rsh.REMOTE_AUTH_LOGIN,
                    body: {
                        ticket: u.ticket,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                    .then(async (e) => {
                        if (null != p)
                            try {
                                let n = await (0, E.S4)(p, e.body.encrypted_token),
                                    r = await (0, E.Fs)(p);
                                t(n, r);
                            } catch (e) {
                                f();
                            }
                        else f();
                    })
                    .catch(() => {
                        f();
                    });
        }, [u, t, p, f]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: I.AC,
                }),
                (0, r.jsx)(o.YC2, {
                    fillParent: !0,
                    className: I.ZF,
                    step: _,
                    steps: [0, 1],
                    children: (0, r.jsx)("div", {
                        className: I.vP,
                        children: (0, r.jsx)(w, {
                            state: u,
                            cancel: g,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: c,
                        }),
                    }),
                }),
            ],
        })
    );
}
