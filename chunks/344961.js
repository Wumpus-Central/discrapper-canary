n.d(t, { A: () => P }), n(896048), n(65821), n(457529);
var r = n(627968),
    i = n(64700),
    s = n(430370),
    l = n(158390),
    a = n(417597),
    o = n(562465),
    c = n(397927),
    u = n(830215),
    d = n(730134),
    h = n(598047),
    f = n(765548),
    p = n(854378),
    g = n(414121),
    m = n(626584),
    A = n(961350),
    x = n(203982),
    _ = n(723702),
    E = n(337905),
    b = n(427262),
    v = n(837921),
    j = n(652215),
    y = n(818348),
    S = n(985018),
    N = n(947089),
    O = n(473169);
let I = n(906118),
    T = new m.A("LoginQRSocket");
function C(e) {
    let { text: t = "" } = e,
        [n, s] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = I), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [I]),
        i.useEffect(() => {
            n && c.ORC.announce(S.intl.string(S.t.j2p125));
        }, [n]),
        (0, r.jsx)("div", {
            className: N.Ac,
            children:
                "" !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.Ay, {
                                  className: N.JB,
                                  size: 160,
                                  text: t,
                              }),
                              (0, r.jsx)("div", {
                                  className: N.R6,
                                  children: (0, r.jsx)("img", {
                                      src: I,
                                      alt: "",
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: N.R6,
                          "aria-label": S.intl.string(S.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(c.y$y, {
                              className: N.JB,
                              type: c.y$y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let R = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: t,
        children: n,
    });
};
function w(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: l, isPasswordlessActive: a } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(C, { text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : "" }),
                    (0, r.jsx)(p.hE, {
                        className: O.QB,
                        children: S.intl.string(S.t.UPiHaL),
                    }),
                    null != i
                        ? (0, r.jsx)(R, { children: i })
                        : (0, r.jsx)(p.tK, { children: S.intl.format(S.t["Qq+A6i"], {}) }),
                    (0, r.jsx)(c.BJc, {
                        padding: 8,
                        align: "center",
                        children: (0, r.jsx)(c.QWc, {
                            text: S.intl.string(S.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () => {
                                let e;
                                return (
                                    (e =
                                        _.isPlatformEmbedded && v.Ay.supportsFeature(j.BYE.WEBAUTHN)
                                            ? v.Ay.webAuthnAuthenticate
                                            : (e) => {
                                                  let t = (0, s.d5)(JSON.parse(e));
                                                  return (0, s.Jt)(t).then((e) => JSON.stringify(e));
                                              }),
                                    void u.A.authenticatePasswordless({
                                        authenticateFunc: e,
                                        conditionalMediationAbortController: l,
                                    }).catch(() => {})
                                );
                            },
                            disabled: a,
                        }),
                    }),
                ],
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.A, {
                        className: N.b4,
                        user: e,
                        size: c._3J.SIZE_120,
                        isMobile: !0,
                        status: y.cl.ONLINE,
                    }),
                    (0, r.jsx)(p.hE, {
                        className: O.QB,
                        children: S.intl.string(S.t.apGCUT),
                    }),
                    (0, r.jsx)(p.tK, {
                        children: S.intl.format(S.t.Cbl5JK, { username: "".concat(b.Ay.getUserTag(e)) }),
                    }),
                    (0, r.jsx)("div", {
                        className: N.Z,
                        children: (0, r.jsx)(c.QWc, {
                            text: S.intl.string(S.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(c.y$y, { type: c.y$y.Type.WANDERING_CUBES });
    }
}
function P(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        s = (0, a.bG)([A.default], () => A.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: d,
            cancel: p,
            handleFailure: g,
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, s] = i.useState(!1),
                [a, o] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, h.A)(),
                p = i.useMemo(() => new l.A(1500, 30000), []),
                g = (0, f.A)(() => {
                    o({ step: 0 }),
                        d
                            ? n((e) => e + 1)
                            : (T.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              s(!0));
                }),
                m = i.useCallback(() => {
                    T.error("Could not complete QR code login, trying to restart with a new QR code."),
                        o({ step: 0 }),
                        p.pending || p.fail(g);
                }, [g, p]);
            return (
                i.useEffect(() => {
                    d &&
                        r &&
                        0 === a.step &&
                        (T.info("reconnecting, now that document is visible"), s(!1), n((e) => e + 1));
                }, [a, d, r, s]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = "".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2");
                    n.startsWith("//") && (n = "wss:".concat(n));
                    let r = new WebSocket(n);
                    T.info("[0ms] connecting to ".concat(n));
                    let i = (e) => T.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
                        s = null,
                        l = null,
                        a = null,
                        c = null,
                        d = !0;
                    function h() {
                        if (null != s) return s;
                        throw Error("No key pair set");
                    }
                    let f = () => {
                        d
                            ? ((d = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                            : (i("heartbeat timeout, reconnecting."), r.close(), m());
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
                                    p.succeed(), x._.dispatch(j.jej.WAVE_EMPHASIZE);
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
                                    null == e && m(),
                                        o({
                                            step: 4,
                                            ticket: e,
                                        });
                                    return;
                                }
                                case "pending_ticket": {
                                    x._.dispatch(j.jej.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = s.encrypted_user_payload;
                                    o({
                                        step: 3,
                                        user: await (0, E.n7)(h(), e),
                                    });
                                    return;
                                }
                                case "pending_finish": {
                                    x._.dispatch(j.jej.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting finish/cancel.");
                                    let e = s.encrypted_user_payload;
                                    o({
                                        step: 2,
                                        user: await (0, E.n7)(h(), e),
                                    });
                                    return;
                                }
                                case "finish": {
                                    x._.dispatch(j.jej.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                                    let t = s.encrypted_token;
                                    o({ step: 5 }), e(await (0, E.S4)(h(), t), await (0, E.Fs)(h()));
                                    return;
                                }
                                case "cancel":
                                    i("remote auth handshake cancelled."), g();
                                    return;
                                case "hello": {
                                    i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                                    let e = s.heartbeat_interval;
                                    c = setTimeout(
                                        () => {
                                            (c = null), f(), (a = setInterval(f, e));
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
                            i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), m();
                        }),
                        (r.onerror = (e) => {
                            i("disconnected, error: ".concat(JSON.stringify(e))), m();
                        }),
                        () => {
                            i("cleaning up"),
                                (r.onopen = () => null),
                                (r.onmessage = () => null),
                                (r.onclose = () => null),
                                (r.onerror = () => null),
                                r.close(1000),
                                p.cancel(),
                                null != c && clearTimeout(c),
                                null != a && clearInterval(a);
                        }
                    );
                }, [g, e, t, p, m]),
                {
                    state: a,
                    rsaKeyPair: c,
                    cancel: g,
                    handleFailure: m,
                }
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
        })(u.step);
    return (
        i.useEffect(() => {
            4 === u.step &&
                null != u.ticket &&
                o.Bo.post({
                    url: j.Rsh.REMOTE_AUTH_LOGIN,
                    body: { ticket: u.ticket },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, E.S4)(d, e.body.encrypted_token),
                                    r = await (0, E.Fs)(d);
                                t(n, r);
                            } catch (e) {
                                g();
                            }
                        else g();
                    })
                    .catch(() => {
                        g();
                    });
        }, [u, t, d, g]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { className: N.AC }),
                (0, r.jsx)(c.YC2, {
                    fillParent: !0,
                    className: N.ZF,
                    step: m,
                    steps: [0, 1],
                    children: (0, r.jsx)("div", {
                        className: N.vP,
                        children: (0, r.jsx)(w, {
                            state: u,
                            cancel: p,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: s,
                        }),
                    }),
                }),
            ],
        })
    );
}
