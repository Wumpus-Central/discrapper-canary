n.d(t, { A: () => q });
var r,
    s = n(627968),
    a = n(64700),
    i = n(702841),
    l = n(765178),
    o = n(289873),
    c = n(834730),
    u = n(331322),
    d = n(123292),
    h = n(778712),
    p = n(707554),
    m = n(685094),
    N = n(830215),
    E = n(730134);
function I() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
var y = n(854378),
    w = n(414121),
    A =
        (((r = {})[(r.INITIALIZING = 0)] = "INITIALIZING"),
        (r[(r.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (r[(r.PENDING_TICKET = 2)] = "PENDING_TICKET"),
        (r[(r.PENDING_LOGIN = 3)] = "PENDING_LOGIN"),
        (r[(r.FINISH = 4)] = "FINISH"),
        r),
    f = n(158390),
    g = n(636537),
    x = n(765548),
    C = n(626584),
    v = n(751124),
    _ = n(625494);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
var b = n(284009),
    j = n.n(b),
    T = n(889227);
async function k(e, t) {
    let n = (t = await O.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, r, s, a, i] = n;
    return new T.A({ id: r, discriminator: s, avatar: "0" === a ? null : a, username: i });
}
function S(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function P(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function L(e) {
    return S(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function G(e, t) {
    return (
        j()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let O = new (class {
    generateRsaKeyPair() {
        return window.crypto.subtle.generateKey(
            { name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
            !0,
            ["decrypt"],
        );
    }
    async serializePublicKey(e) {
        return (
            j()(null != e.publicKey, "public key cannot be null"),
            btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
        );
    }
    async publicKeyFingerprint(e) {
        return (
            j()(null != e.publicKey, "public key cannot be null"),
            L(await window.crypto.subtle.exportKey("spki", e.publicKey))
        );
    }
    async decryptEncodedCiphertext(e, t) {
        let n = new TextDecoder(),
            r = await G(e, P(t));
        return n.decode(r);
    }
    async decryptNonce(e, t) {
        return S(await G(e, P(t)));
    }
    release() {}
})();
var R = n(652215);
let D = new C.A("useAuthWebsocket");
var K = n(293731),
    M = n(495544),
    F = n(723702),
    W = n(427262),
    $ = n(19575),
    B = n(818348),
    U = n(985018),
    H = n(611008),
    z = n(818050);
let Z = n(906118);
function J(e) {
    let { text: t = "" } = e,
        [n, r] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = new Image();
            (e.src = Z), (e.onload = () => r(!0)), (e.onerror = () => r(!0));
        }, [Z]),
        a.useEffect(() => {
            n && l.O.announce(U.intl.string(U.t.j2p125));
        }, [n]),
        (0, s.jsx)("div", {
            className: H.Ac,
            children:
                "" !== t && n
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(w.Ay, { className: H.JB, size: 160, text: t }),
                              (0, s.jsx)("div", { className: H.R6, children: (0, s.jsx)("img", { src: Z, alt: "" }) }),
                          ],
                      })
                    : (0, s.jsx)("div", {
                          className: H.R6,
                          "aria-label": U.intl.string(U.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, s.jsx)(o.y, {
                              className: H.JB,
                              type: o.y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let Q = (e) => {
    let { className: t, children: n } = e;
    return (0, s.jsx)(c.E, { variant: "text-md/normal", color: "text-feedback-critical", className: t, children: n });
};
function V(e) {
    let {
        state: t,
        cancel: n,
        errorMessage: r,
        conditionalMediationAbortController: a,
        isPasswordlessActive: i,
        isMultiAccount: l,
    } = e;
    switch (t.step) {
        case A.INITIALIZING:
        case A.PENDING_REMOTE_INIT:
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(J, {
                        text: t.step === A.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                    }),
                    (0, s.jsx)(y.hE, { className: z.QB, children: U.intl.string(U.t.UPiHaL) }),
                    null != r
                        ? (0, s.jsx)(Q, { children: r })
                        : (0, s.jsx)(y.tK, { children: U.intl.format(U.t["Qq+A6i"], {}) }),
                    (0, s.jsx)(u.B, {
                        padding: 8,
                        align: "center",
                        children: (0, s.jsx)(d.Q, {
                            text: U.intl.string(U.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () =>
                                (function (e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n =
                                            F.isPlatformEmbedded && $.Ay.supportsFeature(R.BYE.WEBAUTHN)
                                                ? $.Ay.webAuthnAuthenticate
                                                : K.J;
                                    N.A.authenticatePasswordless({
                                        authenticateFunc: n,
                                        conditionalMediationAbortController: e,
                                        isMultiAccount: t,
                                    }).catch(() => {});
                                })(a, l),
                            disabled: i,
                        }),
                    }),
                ],
            });
        case A.PENDING_TICKET: {
            let { user: e } = t;
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(E.A, {
                        className: H.b4,
                        user: e,
                        size: h._3.SIZE_120,
                        isMobile: !0,
                        status: B.cl.ONLINE,
                    }),
                    (0, s.jsx)(y.hE, { className: z.QB, children: U.intl.string(U.t.apGCUT) }),
                    (0, s.jsx)(y.tK, { children: U.intl.format(U.t.Cbl5JK, { username: `${W.Ay.getUserTag(e)}` }) }),
                    (0, s.jsx)("div", {
                        className: H.Z,
                        children: (0, s.jsx)(d.Q, {
                            text: U.intl.string(U.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case A.PENDING_LOGIN:
        case A.FINISH:
            return (0, s.jsx)(o.y, { type: o.y.Type.WANDERING_CUBES });
    }
}
function q(e) {
    let { onAuthenticateSuccess: t, conditionalMediationAbortController: n, isMultiAccount: r = !1 } = e,
        l = (0, i.bG)([M.default], () => M.default.getIsPasswordlessActive()),
        { state: o, cancel: c } = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [r, s] = a.useState(0),
                [i, l] = a.useState(!1),
                [o, c] = a.useState({ step: A.INITIALIZING }),
                u = a.useRef(null),
                d = a.useMemo(() => new f.A(1500, 3e4), []),
                h = (0, x.A)(() => {
                    c({ step: A.INITIALIZING }),
                        t
                            ? s((e) => e + 1)
                            : (D.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                p = a.useCallback(() => {
                    D.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                        c({ step: A.INITIALIZING }),
                        d.pending || d.fail(h);
                }, [h, d]);
            return (
                a.useEffect(() => {
                    t &&
                        i &&
                        o.step === A.INITIALIZING &&
                        (D.info("reconnecting, now that document is visible"), l(!1), s((e) => e + 1));
                }, [o, t, i, l]),
                a.useEffect(() => {
                    let t = Date.now(),
                        r = (e) => `[${Date.now() - t}ms] ${e}`,
                        s = (e) => D.info(r(e)),
                        a = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    a.startsWith("//") && (a = `wss:${a}`);
                    let i = (0, v.A)(a);
                    D.info(`[0ms] connecting to ${a}`);
                    let l = null,
                        o = null,
                        m = null,
                        E = null,
                        I = !0;
                    function y() {
                        if (null != l) return l;
                        throw Error("No key pair set");
                    }
                    let w = () => {
                            I
                                ? ((I = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                                : (s("heartbeat timeout, reconnecting."), i.close(), p());
                        },
                        f = async (t) => {
                            let { data: a } = t,
                                l = JSON.parse(a);
                            switch (l.op) {
                                case "nonce_proof": {
                                    let e = l.encrypted_nonce,
                                        t = await O.decryptNonce(y(), e);
                                    s("computed nonce proof"), i.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                                    return;
                                }
                                case "pending_remote_init": {
                                    d.succeed(), _._.dispatch(R.jej.WAVE_EMPHASIZE);
                                    let e = await O.publicKeyFingerprint(y());
                                    if (e !== l.fingerprint) throw Error(`bad fingerprint ${e} !== ${l.fingerprint}`);
                                    s("handshake complete awaiting remote auth."),
                                        c({ step: A.PENDING_REMOTE_INIT, fingerprint: e });
                                    return;
                                }
                                case "pending_login": {
                                    let t = l.ticket;
                                    if (null == t) return void p();
                                    c({ step: A.PENDING_LOGIN, ticket: t }),
                                        g.Bo.post({
                                            url: R.Rsh.REMOTE_AUTH_LOGIN,
                                            body: { ticket: t },
                                            oldFormErrors: !0,
                                            rejectWithError: !0,
                                        })
                                            .then(async (t) => {
                                                if (null == u.current) return void p();
                                                let r = await O.decryptEncodedCiphertext(
                                                        u.current,
                                                        t.body.encrypted_token,
                                                    ),
                                                    s = await O.publicKeyFingerprint(u.current);
                                                n ? await N.A.switchAccountToken(r) : await N.A.loginToken(r, !1), e(s);
                                            })
                                            .catch(() => p());
                                    return;
                                }
                                case "pending_ticket": {
                                    _._.dispatch(R.jej.WAVE_EMPHASIZE),
                                        s("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = l.encrypted_user_payload,
                                        t = await k(y(), e);
                                    c({ step: A.PENDING_TICKET, user: t });
                                    return;
                                }
                                case "cancel":
                                    s("remote auth handshake cancelled."), h();
                                    return;
                                case "hello": {
                                    s(`got hello, auth timeout=${l.timeout_ms}ms`);
                                    let e = l.heartbeat_interval;
                                    E = setTimeout(
                                        () => {
                                            (E = null), w(), (m = setInterval(w, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    I = !0;
                                    return;
                                default:
                                    D.warn(r("received unsupported message"));
                            }
                        },
                        x = async () => {
                            (l = await O.generateRsaKeyPair()), (o = await O.serializePublicKey(l));
                            let e = await O.publicKeyFingerprint(l);
                            s(`connected, handshaking with fingerprint: ${e}`),
                                i.send(JSON.stringify({ op: "init", encoded_public_key: o })),
                                (u.current = l);
                        },
                        C = (e) => {
                            s(`disconnected, code: ${e.code} ${e.reason}`), p();
                        },
                        b = (e) => {
                            s(`disconnected, error: ${JSON.stringify(e)}`), p();
                        };
                    return (
                        i.addEventListener("open", x),
                        i.addEventListener("message", f),
                        i.addEventListener("close", C),
                        i.addEventListener("error", b),
                        () => {
                            s("cleaning up"),
                                i.removeEventListener("open", x),
                                i.removeEventListener("message", f),
                                i.removeEventListener("close", C),
                                i.removeEventListener("error", b),
                                i.close(1e3),
                                d.cancel(),
                                O.release(),
                                null != E && clearTimeout(E),
                                null != m && clearInterval(m);
                        }
                    );
                }, [h, e, r, d, p, n]),
                { state: o, cancel: h }
            );
        })(
            t,
            (function () {
                let [e, t] = (0, a.useState)(I());
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            t(I());
                        }
                        return (
                            window.addEventListener("visibilitychange", e),
                            () => {
                                window.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [t]),
                    e
                );
            })(),
            r,
        ),
        u = (function (e) {
            switch (e) {
                case A.INITIALIZING:
                case A.PENDING_REMOTE_INIT:
                    return 0;
                case A.PENDING_TICKET:
                case A.PENDING_LOGIN:
                case A.FINISH:
                    return 1;
            }
        })(o.step);
    return (0, s.jsx)(p.F, {
        children: (0, s.jsx)(m.Y, {
            fillParent: !0,
            className: H.ZF,
            step: u,
            steps: [0, 1],
            children: (0, s.jsx)("div", {
                className: H.vP,
                children: (0, s.jsx)(V, {
                    state: o,
                    cancel: c,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: l,
                    isMultiAccount: r,
                }),
            }),
        }),
    });
}
