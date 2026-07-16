n.d(t, { A: () => X });
var s,
    r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    o = n(702841),
    c = n(765178),
    d = n(289873),
    u = n(297264),
    h = n(834730),
    p = n(123292),
    m = n(331322),
    N = n(778712),
    E = n(707554),
    g = n(685094),
    f = n(830215),
    y = n(730134);
function A() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
var x = n(414121),
    w =
        (((s = {})[(s.INITIALIZING = 0)] = "INITIALIZING"),
        (s[(s.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (s[(s.PENDING_TICKET = 2)] = "PENDING_TICKET"),
        (s[(s.PENDING_LOGIN = 3)] = "PENDING_LOGIN"),
        (s[(s.FINISH = 4)] = "FINISH"),
        s),
    I = n(158390),
    C = n(636537),
    v = n(765548),
    S = n(626584),
    _ = n(751124),
    j = n(625494);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
var b = n(284009),
    T = n.n(b),
    k = n(889227);
async function P(e, t) {
    let n = (t = await D.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, s, r, a, i] = n;
    return new k.A({ id: s, discriminator: r, avatar: "0" === a ? null : a, username: i });
}
function L(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function O(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function G(e) {
    return L(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function R(e, t) {
    return (
        T()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let D = new (class {
    generateRsaKeyPair() {
        return window.crypto.subtle.generateKey(
            { name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
            !0,
            ["decrypt"],
        );
    }
    async serializePublicKey(e) {
        return (
            T()(null != e.publicKey, "public key cannot be null"),
            btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
        );
    }
    async publicKeyFingerprint(e) {
        return (
            T()(null != e.publicKey, "public key cannot be null"),
            G(await window.crypto.subtle.exportKey("spki", e.publicKey))
        );
    }
    async decryptEncodedCiphertext(e, t) {
        let n = new TextDecoder(),
            s = await R(e, O(t));
        return n.decode(s);
    }
    async decryptNonce(e, t) {
        return L(await R(e, O(t)));
    }
    release() {}
})();
var F = n(652215);
let M = new S.A("useAuthWebsocket");
var K = n(293731),
    W = n(280450),
    U = n(723702),
    B = n(427262),
    $ = n(19575),
    H = n(818348),
    z = n(375708),
    V = n(611008),
    Z = n(818050);
let Q = n(906118);
function J(e) {
    let { text: t = "" } = e,
        [n, s] = a.useState(!1);
    a.useEffect(() => {
        let e = new Image();
        (e.src = Q), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
    }, [Q]),
        a.useEffect(() => {
            n && c.O.announce(z.intl.string(z.t.j2p125));
        }, [n]);
    let i = "" !== t && n;
    return (0, r.jsx)("div", {
        className: V.Ac,
        role: i ? "img" : void 0,
        "aria-label": i ? z.intl.string(z.t.SzYj9v) : void 0,
        tabIndex: i ? 0 : void 0,
        children: i
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(x.Ay, { className: V.JB, size: 160, text: t }),
                      (0, r.jsx)("div", {
                          className: V.R6,
                          "aria-hidden": !0,
                          children: (0, r.jsx)("img", { src: Q, alt: "" }),
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: V.R6,
                  "aria-label": z.intl.string(z.t.BUGkVF),
                  "aria-busy": !0,
                  children: (0, r.jsx)(d.y, { className: V.JB, type: d.y.Type.WANDERING_CUBES, "aria-hidden": !0 }),
              }),
    });
}
function q(e) {
    let {
        state: t,
        cancel: n,
        errorMessage: s,
        conditionalMediationAbortController: a,
        isPasswordlessActive: i,
        isMultiAccount: l,
        horizontal: o,
    } = e;
    switch (t.step) {
        case w.INITIALIZING:
        case w.PENDING_REMOTE_INIT: {
            let e = (0, r.jsx)(J, {
                    text: t.step === w.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                }),
                n = o
                    ? {
                          heading: "heading-md/semibold",
                          headingColor: "text-default",
                          text: "text-sm/normal",
                          descriptionColor: "text-subtle",
                          button: "text-xs/medium",
                      }
                    : {
                          heading: "heading-xl/semibold",
                          headingColor: "text-strong",
                          text: "text-md/normal",
                          descriptionColor: "text-default",
                          button: "text-sm/normal",
                      },
                c = (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.D, {
                            variant: n.heading,
                            color: n.headingColor,
                            className: Z.QB,
                            children: z.intl.string(z.t.UPiHaL),
                        }),
                        (0, r.jsx)(h.E, {
                            variant: n.text,
                            color: null != s ? "text-feedback-critical" : n.descriptionColor,
                            children: null != s ? s : z.intl.format(z.t["Qq+A6i"], {}),
                        }),
                    ],
                }),
                d = (0, r.jsx)(p.Q, {
                    text: z.intl.string(z.t["/kpMDt"]),
                    textVariant: n.button,
                    onClick: () =>
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n =
                                    U.isPlatformEmbedded && $.Ay.supportsFeature(F.BYE.WEBAUTHN)
                                        ? $.Ay.webAuthnAuthenticate
                                        : K.J;
                            f.A.authenticatePasswordless({
                                authenticateFunc: n,
                                conditionalMediationAbortController: e,
                                isMultiAccount: t,
                            }).catch(() => {});
                        })(a, l),
                    disabled: i,
                });
            return o
                ? (0, r.jsxs)("div", {
                      className: V.vG,
                      children: [e, (0, r.jsxs)(m.B, { align: "start", className: V.KY, children: [c, d] })],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [e, c, (0, r.jsx)(m.B, { padding: 8, align: "center", children: d })],
                  });
        }
        case w.PENDING_TICKET: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.A, {
                        className: V.b4,
                        user: e,
                        size: N._3.SIZE_120,
                        isMobile: !0,
                        status: H.cl.ONLINE,
                    }),
                    (0, r.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: Z.QB,
                        children: z.intl.string(z.t.apGCUT),
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: z.intl.format(z.t.Cbl5JK, { username: `${B.Ay.getUserTag(e)}` }),
                    }),
                    (0, r.jsx)("div", {
                        className: V.Z,
                        children: (0, r.jsx)(p.Q, {
                            text: z.intl.string(z.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case w.PENDING_LOGIN:
        case w.FINISH:
            return (0, r.jsx)(d.y, { type: d.y.Type.WANDERING_CUBES });
    }
}
function X(e) {
    let {
            onAuthenticateSuccess: t,
            conditionalMediationAbortController: n,
            isMultiAccount: s = !1,
            horizontal: i = !1,
        } = e,
        c = (0, o.bG)([W.default], () => W.default.getIsPasswordlessActive()),
        { state: d, cancel: u } = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [s, r] = a.useState(0),
                [i, l] = a.useState(!1),
                [o, c] = a.useState({ step: w.INITIALIZING }),
                d = a.useRef(null),
                u = a.useMemo(() => new I.A(1500, 3e4), []),
                h = (0, v.A)(() => {
                    c({ step: w.INITIALIZING }),
                        t
                            ? r((e) => e + 1)
                            : (M.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                p = a.useCallback(() => {
                    M.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                        c({ step: w.INITIALIZING }),
                        u.pending || u.fail(h);
                }, [h, u]);
            return (
                a.useEffect(() => {
                    t &&
                        i &&
                        o.step === w.INITIALIZING &&
                        (M.info("reconnecting, now that document is visible"), l(!1), r((e) => e + 1));
                }, [o, t, i, l]),
                a.useEffect(() => {
                    let t = Date.now();
                    function s(e) {
                        return `[${Date.now() - t}ms] ${e}`;
                    }
                    function r(e) {
                        return M.info(s(e));
                    }
                    let a = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    a.startsWith("//") && (a = `wss:${a}`);
                    let i = (0, _.A)(a);
                    M.info(`[0ms] connecting to ${a}`);
                    let l = null,
                        o = null,
                        m = null,
                        N = null,
                        E = !0;
                    function g() {
                        if (null != l) return l;
                        throw Error("No key pair set");
                    }
                    function y() {
                        E
                            ? ((E = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                            : (r("heartbeat timeout, reconnecting."), i.close(), p());
                    }
                    async function A(t) {
                        let { data: a } = t,
                            l = JSON.parse(a);
                        switch (l.op) {
                            case "nonce_proof": {
                                let e = l.encrypted_nonce,
                                    t = await D.decryptNonce(g(), e);
                                r("computed nonce proof"), i.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                                return;
                            }
                            case "pending_remote_init": {
                                u.succeed(), j._.dispatch(F.jej.WAVE_EMPHASIZE);
                                let e = await D.publicKeyFingerprint(g());
                                if (e !== l.fingerprint) throw Error(`bad fingerprint ${e} !== ${l.fingerprint}`);
                                r("handshake complete awaiting remote auth."),
                                    c({ step: w.PENDING_REMOTE_INIT, fingerprint: e });
                                return;
                            }
                            case "pending_login": {
                                let t = l.ticket;
                                if (null == t) return void p();
                                c({ step: w.PENDING_LOGIN, ticket: t }),
                                    C.Bo.post({
                                        url: F.Rsh.REMOTE_AUTH_LOGIN,
                                        body: { ticket: t },
                                        oldFormErrors: !0,
                                        rejectWithError: !0,
                                    })
                                        .then(async (t) => {
                                            if (null == d.current) return void p();
                                            let s = await D.decryptEncodedCiphertext(d.current, t.body.encrypted_token),
                                                r = await D.publicKeyFingerprint(d.current);
                                            n ? await f.A.switchAccountToken(s) : await f.A.loginToken(s, !1), e(r);
                                        })
                                        .catch(() => p());
                                return;
                            }
                            case "pending_ticket": {
                                j._.dispatch(F.jej.WAVE_EMPHASIZE),
                                    r("remote auth handshake started, awaiting ticket/cancel.");
                                let e = l.encrypted_user_payload,
                                    t = await P(g(), e);
                                c({ step: w.PENDING_TICKET, user: t });
                                return;
                            }
                            case "cancel":
                                r("remote auth handshake cancelled."), h();
                                return;
                            case "hello": {
                                r(`got hello, auth timeout=${l.timeout_ms}ms`);
                                let e = l.heartbeat_interval;
                                N = setTimeout(
                                    () => {
                                        (N = null), y(), (m = setInterval(y, e));
                                    },
                                    Math.floor(e * Math.random()),
                                );
                                return;
                            }
                            case "heartbeat_ack":
                                E = !0;
                                return;
                            default:
                                M.warn(s("received unsupported message"));
                        }
                    }
                    async function x() {
                        (l = await D.generateRsaKeyPair()), (o = await D.serializePublicKey(l));
                        let e = await D.publicKeyFingerprint(l);
                        r(`connected, handshaking with fingerprint: ${e}`),
                            i.send(JSON.stringify({ op: "init", encoded_public_key: o })),
                            (d.current = l);
                    }
                    function I(e) {
                        r(`disconnected, code: ${e.code} ${e.reason}`), p();
                    }
                    function v(e) {
                        r(`disconnected, error: ${JSON.stringify(e)}`), p();
                    }
                    return (
                        i.addEventListener("open", x),
                        i.addEventListener("message", A),
                        i.addEventListener("close", I),
                        i.addEventListener("error", v),
                        () => {
                            r("cleaning up"),
                                i.removeEventListener("open", x),
                                i.removeEventListener("message", A),
                                i.removeEventListener("close", I),
                                i.removeEventListener("error", v),
                                i.close(1e3),
                                u.cancel(),
                                D.release(),
                                null != N && clearTimeout(N),
                                null != m && clearInterval(m);
                        }
                    );
                }, [h, e, s, u, p, n]),
                { state: o, cancel: h }
            );
        })(
            t,
            (function () {
                let [e, t] = (0, a.useState)(A());
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            t(A());
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
            s,
        ),
        h = (function (e) {
            switch (e) {
                case w.INITIALIZING:
                case w.PENDING_REMOTE_INIT:
                    return 0;
                case w.PENDING_TICKET:
                case w.PENDING_LOGIN:
                case w.FINISH:
                    return 1;
            }
        })(d.step);
    return (0, r.jsx)(E.F, {
        children: (0, r.jsx)(g.Y, {
            fillParent: !0,
            className: l()(V.ZF, { [V.dV]: i }),
            step: h,
            steps: [0, 1],
            children: (0, r.jsx)("div", {
                className: V.vP,
                children: (0, r.jsx)(q, {
                    state: d,
                    cancel: u,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: c,
                    isMultiAccount: s,
                    horizontal: i,
                }),
            }),
        }),
    });
}
