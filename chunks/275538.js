s.d(t, { A: () => q });
var n,
    r = s(627968),
    a = s(64700),
    i = s(702841),
    l = s(765178),
    o = s(289873),
    c = s(834730),
    d = s(331322),
    u = s(123292),
    h = s(778712),
    p = s(707554),
    m = s(685094),
    N = s(830215),
    E = s(730134);
function y() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
var A = s(854378),
    f = s(414121),
    g =
        (((n = {})[(n.INITIALIZING = 0)] = "INITIALIZING"),
        (n[(n.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (n[(n.PENDING_TICKET = 2)] = "PENDING_TICKET"),
        (n[(n.PENDING_LOGIN = 3)] = "PENDING_LOGIN"),
        (n[(n.FINISH = 4)] = "FINISH"),
        n),
    w = s(158390),
    I = s(636537),
    x = s(765548),
    C = s(626584),
    v = s(751124),
    S = s(625494);
s(393431), s(532706), s(42231), s(232424), s(949626), s(767709), s(65162), s(508300);
var _ = s(284009),
    j = s.n(_),
    T = s(889227);
async function b(e, t) {
    let s = (t = await G.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == s) throw Error("Invalid encoded user record.");
    let [, n, r, a, i] = s;
    return new T.A({ id: n, discriminator: r, avatar: "0" === a ? null : a, username: i });
}
function k(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function P(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function L(e) {
    return k(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function O(e, t) {
    return (
        j()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let G = new (class {
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
        let s = new TextDecoder(),
            n = await O(e, P(t));
        return s.decode(n);
    }
    async decryptNonce(e, t) {
        return k(await O(e, P(t)));
    }
    release() {}
})();
var R = s(652215);
let D = new C.A("useAuthWebsocket");
var M = s(293731),
    F = s(495544),
    K = s(723702),
    W = s(427262),
    U = s(19575),
    $ = s(818348),
    B = s(375708),
    H = s(611008),
    z = s(818050);
let V = s(906118);
function Z(e) {
    let { text: t = "" } = e,
        [s, n] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = new Image();
            (e.src = V), (e.onload = () => n(!0)), (e.onerror = () => n(!0));
        }, [V]),
        a.useEffect(() => {
            s && l.O.announce(B.intl.string(B.t.j2p125));
        }, [s]),
        (0, r.jsx)("div", {
            className: H.Ac,
            children:
                "" !== t && s
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Ay, {
                                  className: H.JB,
                                  size: 160,
                                  text: t,
                                  ariaLabel: B.intl.string(B.t.SzYj9v),
                              }),
                              (0, r.jsx)("div", {
                                  className: H.R6,
                                  "aria-hidden": !0,
                                  children: (0, r.jsx)("img", { src: V, alt: "" }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: H.R6,
                          "aria-label": B.intl.string(B.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(o.y, {
                              className: H.JB,
                              type: o.y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let Q = (e) => {
    let { className: t, children: s } = e;
    return (0, r.jsx)(c.E, { variant: "text-md/normal", color: "text-feedback-critical", className: t, children: s });
};
function J(e) {
    let {
        state: t,
        cancel: s,
        errorMessage: n,
        conditionalMediationAbortController: a,
        isPasswordlessActive: i,
        isMultiAccount: l,
    } = e;
    switch (t.step) {
        case g.INITIALIZING:
        case g.PENDING_REMOTE_INIT:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Z, {
                        text: t.step === g.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                    }),
                    (0, r.jsx)(A.hE, { className: z.QB, children: B.intl.string(B.t.UPiHaL) }),
                    null != n
                        ? (0, r.jsx)(Q, { children: n })
                        : (0, r.jsx)(A.tK, { children: B.intl.format(B.t["Qq+A6i"], {}) }),
                    (0, r.jsx)(d.B, {
                        padding: 8,
                        align: "center",
                        children: (0, r.jsx)(u.Q, {
                            text: B.intl.string(B.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () =>
                                (function (e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        s =
                                            K.isPlatformEmbedded && U.Ay.supportsFeature(R.BYE.WEBAUTHN)
                                                ? U.Ay.webAuthnAuthenticate
                                                : M.J;
                                    N.A.authenticatePasswordless({
                                        authenticateFunc: s,
                                        conditionalMediationAbortController: e,
                                        isMultiAccount: t,
                                    }).catch(() => {});
                                })(a, l),
                            disabled: i,
                        }),
                    }),
                ],
            });
        case g.PENDING_TICKET: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(E.A, {
                        className: H.b4,
                        user: e,
                        size: h._3.SIZE_120,
                        isMobile: !0,
                        status: $.cl.ONLINE,
                    }),
                    (0, r.jsx)(A.hE, { className: z.QB, children: B.intl.string(B.t.apGCUT) }),
                    (0, r.jsx)(A.tK, { children: B.intl.format(B.t.Cbl5JK, { username: `${W.Ay.getUserTag(e)}` }) }),
                    (0, r.jsx)("div", {
                        className: H.Z,
                        children: (0, r.jsx)(u.Q, {
                            text: B.intl.string(B.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: s,
                        }),
                    }),
                ],
            });
        }
        case g.PENDING_LOGIN:
        case g.FINISH:
            return (0, r.jsx)(o.y, { type: o.y.Type.WANDERING_CUBES });
    }
}
function q(e) {
    let { onAuthenticateSuccess: t, conditionalMediationAbortController: s, isMultiAccount: n = !1 } = e,
        l = (0, i.bG)([F.default], () => F.default.getIsPasswordlessActive()),
        { state: o, cancel: c } = (function (e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [n, r] = a.useState(0),
                [i, l] = a.useState(!1),
                [o, c] = a.useState({ step: g.INITIALIZING }),
                d = a.useRef(null),
                u = a.useMemo(() => new w.A(1500, 3e4), []),
                h = (0, x.A)(() => {
                    c({ step: g.INITIALIZING }),
                        t
                            ? r((e) => e + 1)
                            : (D.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                p = a.useCallback(() => {
                    D.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                        c({ step: g.INITIALIZING }),
                        u.pending || u.fail(h);
                }, [h, u]);
            return (
                a.useEffect(() => {
                    t &&
                        i &&
                        o.step === g.INITIALIZING &&
                        (D.info("reconnecting, now that document is visible"), l(!1), r((e) => e + 1));
                }, [o, t, i, l]),
                a.useEffect(() => {
                    let t = Date.now(),
                        n = (e) => `[${Date.now() - t}ms] ${e}`,
                        r = (e) => D.info(n(e)),
                        a = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    a.startsWith("//") && (a = `wss:${a}`);
                    let i = (0, v.A)(a);
                    D.info(`[0ms] connecting to ${a}`);
                    let l = null,
                        o = null,
                        m = null,
                        E = null,
                        y = !0;
                    function A() {
                        if (null != l) return l;
                        throw Error("No key pair set");
                    }
                    let f = () => {
                            y
                                ? ((y = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                                : (r("heartbeat timeout, reconnecting."), i.close(), p());
                        },
                        w = async (t) => {
                            let { data: a } = t,
                                l = JSON.parse(a);
                            switch (l.op) {
                                case "nonce_proof": {
                                    let e = l.encrypted_nonce,
                                        t = await G.decryptNonce(A(), e);
                                    r("computed nonce proof"), i.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                                    return;
                                }
                                case "pending_remote_init": {
                                    u.succeed(), S._.dispatch(R.jej.WAVE_EMPHASIZE);
                                    let e = await G.publicKeyFingerprint(A());
                                    if (e !== l.fingerprint) throw Error(`bad fingerprint ${e} !== ${l.fingerprint}`);
                                    r("handshake complete awaiting remote auth."),
                                        c({ step: g.PENDING_REMOTE_INIT, fingerprint: e });
                                    return;
                                }
                                case "pending_login": {
                                    let t = l.ticket;
                                    if (null == t) return void p();
                                    c({ step: g.PENDING_LOGIN, ticket: t }),
                                        I.Bo.post({
                                            url: R.Rsh.REMOTE_AUTH_LOGIN,
                                            body: { ticket: t },
                                            oldFormErrors: !0,
                                            rejectWithError: !0,
                                        })
                                            .then(async (t) => {
                                                if (null == d.current) return void p();
                                                let n = await G.decryptEncodedCiphertext(
                                                        d.current,
                                                        t.body.encrypted_token,
                                                    ),
                                                    r = await G.publicKeyFingerprint(d.current);
                                                s ? await N.A.switchAccountToken(n) : await N.A.loginToken(n, !1), e(r);
                                            })
                                            .catch(() => p());
                                    return;
                                }
                                case "pending_ticket": {
                                    S._.dispatch(R.jej.WAVE_EMPHASIZE),
                                        r("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = l.encrypted_user_payload,
                                        t = await b(A(), e);
                                    c({ step: g.PENDING_TICKET, user: t });
                                    return;
                                }
                                case "cancel":
                                    r("remote auth handshake cancelled."), h();
                                    return;
                                case "hello": {
                                    r(`got hello, auth timeout=${l.timeout_ms}ms`);
                                    let e = l.heartbeat_interval;
                                    E = setTimeout(
                                        () => {
                                            (E = null), f(), (m = setInterval(f, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    y = !0;
                                    return;
                                default:
                                    D.warn(n("received unsupported message"));
                            }
                        },
                        x = async () => {
                            (l = await G.generateRsaKeyPair()), (o = await G.serializePublicKey(l));
                            let e = await G.publicKeyFingerprint(l);
                            r(`connected, handshaking with fingerprint: ${e}`),
                                i.send(JSON.stringify({ op: "init", encoded_public_key: o })),
                                (d.current = l);
                        },
                        C = (e) => {
                            r(`disconnected, code: ${e.code} ${e.reason}`), p();
                        },
                        _ = (e) => {
                            r(`disconnected, error: ${JSON.stringify(e)}`), p();
                        };
                    return (
                        i.addEventListener("open", x),
                        i.addEventListener("message", w),
                        i.addEventListener("close", C),
                        i.addEventListener("error", _),
                        () => {
                            r("cleaning up"),
                                i.removeEventListener("open", x),
                                i.removeEventListener("message", w),
                                i.removeEventListener("close", C),
                                i.removeEventListener("error", _),
                                i.close(1e3),
                                u.cancel(),
                                G.release(),
                                null != E && clearTimeout(E),
                                null != m && clearInterval(m);
                        }
                    );
                }, [h, e, n, u, p, s]),
                { state: o, cancel: h }
            );
        })(
            t,
            (function () {
                let [e, t] = (0, a.useState)(y());
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            t(y());
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
            n,
        ),
        d = (function (e) {
            switch (e) {
                case g.INITIALIZING:
                case g.PENDING_REMOTE_INIT:
                    return 0;
                case g.PENDING_TICKET:
                case g.PENDING_LOGIN:
                case g.FINISH:
                    return 1;
            }
        })(o.step);
    return (0, r.jsx)(p.F, {
        children: (0, r.jsx)(m.Y, {
            fillParent: !0,
            className: H.ZF,
            step: d,
            steps: [0, 1],
            children: (0, r.jsx)("div", {
                className: H.vP,
                children: (0, r.jsx)(J, {
                    state: o,
                    cancel: c,
                    conditionalMediationAbortController: s,
                    isPasswordlessActive: l,
                    isMultiAccount: n,
                }),
            }),
        }),
    });
}
