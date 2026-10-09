s.d(t, { A: () => Y });
var n,
    r = s(477900),
    a = s(582128),
    i = s(503698),
    l = s.n(i),
    o = s(702841),
    c = s(765178),
    d = s(289873),
    u = s(297264),
    h = s(834730),
    p = s(123292),
    m = s(331322),
    N = s(778712),
    E = s(707554),
    g = s(685094),
    f = s(830215),
    A = s(730134),
    y = s(598047),
    x = s(414121),
    I =
        (((n = {})[(n.INITIALIZING = 0)] = "INITIALIZING"),
        (n[(n.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (n[(n.PENDING_TICKET = 2)] = "PENDING_TICKET"),
        (n[(n.PENDING_LOGIN = 3)] = "PENDING_LOGIN"),
        (n[(n.FINISH = 4)] = "FINISH"),
        n),
    w = s(158390),
    C = s(636537),
    v = s(765548),
    _ = s(626584),
    j = s(751124),
    S = s(625494);
(s(393431), s(532706), s(42231), s(232424), s(949626), s(767709), s(65162), s(508300));
var b = s(284009),
    T = s.n(b);
async function k(e) {
    return O(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function P(e, t) {
    return (
        T()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let L = new (class {
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
            k(await window.crypto.subtle.exportKey("spki", e.publicKey))
        );
    }
    async decryptEncodedCiphertext(e, t) {
        let s = new TextDecoder(),
            n = await P(e, R(t));
        return s.decode(n);
    }
    async decryptNonce(e, t) {
        return O(await P(e, R(t)));
    }
    release() {}
})();
function O(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function R(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
var G = s(889227);
async function D(e, t) {
    let s = (t = await L.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == s) throw Error("Invalid encoded user record.");
    let [, n, r, a, i] = s;
    return new G.A({ id: n, discriminator: r, avatar: "0" === a ? null : a, username: i });
}
var F = s(652215);
let M = new _.A("useAuthWebsocket");
var K = s(293731),
    W = s(280450),
    B = s(403362),
    U = s(723702),
    $ = s(427262),
    H = s(19575),
    z = s(818348),
    V = s(660183),
    Z = s(141979),
    q = s(221851);
let J = s(906118);
function Q(e) {
    let { text: t = "" } = e,
        [s, n] = a.useState(!1);
    (a.useEffect(() => {
        let e = new Image();
        ((e.src = J), (e.onload = () => n(!0)), (e.onerror = () => n(!0)));
    }, [J]),
        a.useEffect(() => {
            s && c.O.announce(V.intl.string(V.t.j2p125));
        }, [s]));
    let i = "" !== t && s,
        l = (0, B.m6)() && !i;
    return (0, r.jsx)("div", {
        className: Z.Ac,
        role: i ? "img" : void 0,
        "aria-label": i ? V.intl.string(V.t.SzYj9v) : void 0,
        tabIndex: i ? 0 : void 0,
        children: i
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(x.Ay, { className: Z.JB, size: 160, text: t }),
                      (0, r.jsx)("div", {
                          className: Z.R6,
                          "aria-hidden": !0,
                          children: (0, r.jsx)("img", { src: J, alt: "" }),
                      }),
                  ],
              })
            : l
              ? (0, r.jsx)(x.Ay, { className: Z.JB, size: 160, text: "placeholder", fgColor: "#ffffff" })
              : (0, r.jsx)("div", {
                    className: Z.R6,
                    "aria-label": V.intl.string(V.t.BUGkVF),
                    "aria-busy": !0,
                    children: (0, r.jsx)(d.y, { className: Z.JB, type: d.y.Type.WANDERING_CUBES, "aria-hidden": !0 }),
                }),
    });
}
function X(e) {
    let {
        state: t,
        cancel: s,
        errorMessage: n,
        conditionalMediationAbortController: a,
        isPasswordlessActive: i,
        isMultiAccount: l,
        horizontal: o,
    } = e;
    switch (t.step) {
        case I.INITIALIZING:
        case I.PENDING_REMOTE_INIT: {
            let e = (0, r.jsx)(Q, {
                    text: t.step === I.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                }),
                s = o
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
                            variant: s.heading,
                            color: s.headingColor,
                            className: q.QB,
                            children: V.intl.string(V.t.UPiHaL),
                        }),
                        (0, r.jsx)(h.E, {
                            variant: s.text,
                            color: null != n ? "text-feedback-critical" : s.descriptionColor,
                            children: null != n ? n : V.intl.format(V.t["Qq+A6i"], {}),
                        }),
                    ],
                }),
                d = (0, r.jsx)(p.Q, {
                    text: V.intl.string(V.t["/kpMDt"]),
                    textVariant: s.button,
                    onClick: () =>
                        (function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                s =
                                    U.isPlatformEmbedded && H.Ay.supportsFeature(F.BYE.WEBAUTHN)
                                        ? H.Ay.webAuthnAuthenticate
                                        : K.J;
                            f.A.authenticatePasswordless({
                                authenticateFunc: s,
                                conditionalMediationAbortController: e,
                                isMultiAccount: t,
                            }).catch(() => {});
                        })(a, l),
                    disabled: i,
                });
            return o
                ? (0, r.jsxs)("div", {
                      className: Z.vG,
                      children: [e, (0, r.jsxs)(m.B, { align: "start", className: Z.KY, children: [c, d] })],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [e, c, (0, r.jsx)(m.B, { padding: 8, align: "center", children: d })],
                  });
        }
        case I.PENDING_TICKET: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A.A, {
                        className: Z.b4,
                        user: e,
                        size: N._3.SIZE_120,
                        isMobile: !0,
                        status: z.cl.ONLINE,
                    }),
                    (0, r.jsx)(u.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: q.QB,
                        children: V.intl.string(V.t.apGCUT),
                    }),
                    (0, r.jsx)(h.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: V.intl.format(V.t.Cbl5JK, { username: `${$.Ay.getUserTag(e)}` }),
                    }),
                    (0, r.jsx)("div", {
                        className: Z.Z,
                        children: (0, r.jsx)(p.Q, {
                            text: V.intl.string(V.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: s,
                        }),
                    }),
                ],
            });
        }
        case I.PENDING_LOGIN:
        case I.FINISH:
            return (0, r.jsx)(d.y, { type: d.y.Type.WANDERING_CUBES });
    }
}
function Y(e) {
    let {
            onAuthenticateSuccess: t,
            conditionalMediationAbortController: s,
            isMultiAccount: n = !1,
            horizontal: i = !1,
        } = e,
        c = (0, o.bG)([W.default], () => W.default.getIsPasswordlessActive()),
        { state: d, cancel: u } = (function (e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [n, r] = a.useState(0),
                [i, l] = a.useState(!1),
                [o, c] = a.useState({ step: I.INITIALIZING }),
                d = a.useRef(null),
                u = a.useMemo(() => new w.A(1500, 3e4), []),
                h = (0, v.A)(() => {
                    (c({ step: I.INITIALIZING }),
                        t
                            ? r((e) => e + 1)
                            : (M.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0)));
                }),
                p = a.useCallback(() => {
                    (M.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                        c({ step: I.INITIALIZING }),
                        u.pending || u.fail(h));
                }, [h, u]);
            return (
                a.useEffect(() => {
                    t &&
                        i &&
                        o.step === I.INITIALIZING &&
                        (M.info("reconnecting, now that document is visible"), l(!1), r((e) => e + 1));
                }, [o, t, i, l]),
                a.useEffect(() => {
                    let t = Date.now();
                    function n(e) {
                        return `[${Date.now() - t}ms] ${e}`;
                    }
                    function r(e) {
                        return M.info(n(e));
                    }
                    let a = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    a.startsWith("//") && (a = `wss:${a}`);
                    let i = (0, j.A)(a);
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
                    function A() {
                        E
                            ? ((E = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                            : (r("heartbeat timeout, reconnecting."), i.close(), p());
                    }
                    async function y(t) {
                        let { data: a } = t,
                            l = JSON.parse(a);
                        switch (l.op) {
                            case "nonce_proof": {
                                let e = l.encrypted_nonce,
                                    t = await L.decryptNonce(g(), e);
                                (r("computed nonce proof"), i.send(JSON.stringify({ op: "nonce_proof", nonce: t })));
                                return;
                            }
                            case "pending_remote_init": {
                                (u.succeed(), S._.dispatch(F.jej.WAVE_EMPHASIZE));
                                let e = await L.publicKeyFingerprint(g());
                                if (e !== l.fingerprint) throw Error(`bad fingerprint ${e} !== ${l.fingerprint}`);
                                (r("handshake complete awaiting remote auth."),
                                    c({ step: I.PENDING_REMOTE_INIT, fingerprint: e }));
                                return;
                            }
                            case "pending_login": {
                                let t = l.ticket;
                                if (null == t) return void p();
                                (c({ step: I.PENDING_LOGIN, ticket: t }),
                                    C.Bo.post({
                                        url: F.Rsh.REMOTE_AUTH_LOGIN,
                                        body: { ticket: t },
                                        oldFormErrors: !0,
                                        rejectWithError: !0,
                                    })
                                        .then(async (t) => {
                                            if (null == d.current) return void p();
                                            let n = await L.decryptEncodedCiphertext(d.current, t.body.encrypted_token),
                                                r = await L.publicKeyFingerprint(d.current);
                                            (s ? await f.A.switchAccountToken(n) : await f.A.loginToken(n, !1), e(r));
                                        })
                                        .catch(() => p()));
                                return;
                            }
                            case "pending_ticket": {
                                (S._.dispatch(F.jej.WAVE_EMPHASIZE),
                                    r("remote auth handshake started, awaiting ticket/cancel."));
                                let e = l.encrypted_user_payload,
                                    t = await D(g(), e);
                                c({ step: I.PENDING_TICKET, user: t });
                                return;
                            }
                            case "cancel":
                                (r("remote auth handshake cancelled."), h());
                                return;
                            case "hello": {
                                r(`got hello, auth timeout=${l.timeout_ms}ms`);
                                let e = l.heartbeat_interval;
                                N = setTimeout(
                                    () => {
                                        ((N = null), A(), (m = setInterval(A, e)));
                                    },
                                    Math.floor(e * Math.random()),
                                );
                                return;
                            }
                            case "heartbeat_ack":
                                E = !0;
                                return;
                            default:
                                M.warn(n("received unsupported message"));
                        }
                    }
                    async function x() {
                        ((l = await L.generateRsaKeyPair()), (o = await L.serializePublicKey(l)));
                        let e = await L.publicKeyFingerprint(l);
                        (r(`connected, handshaking with fingerprint: ${e}`),
                            i.send(JSON.stringify({ op: "init", encoded_public_key: o })),
                            (d.current = l));
                    }
                    function w(e) {
                        (r(`disconnected, code: ${e.code} ${e.reason}`), p());
                    }
                    function v(e) {
                        (r(`disconnected, error: ${JSON.stringify(e)}`), p());
                    }
                    return (
                        i.addEventListener("open", x),
                        i.addEventListener("message", y),
                        i.addEventListener("close", w),
                        i.addEventListener("error", v),
                        () => {
                            (r("cleaning up"),
                                i.removeEventListener("open", x),
                                i.removeEventListener("message", y),
                                i.removeEventListener("close", w),
                                i.removeEventListener("error", v),
                                i.close(1e3),
                                u.cancel(),
                                L.release(),
                                null != N && clearTimeout(N),
                                null != m && clearInterval(m));
                        }
                    );
                }, [h, e, n, u, p, s]),
                { state: o, cancel: h }
            );
        })(t, (0, y.A)(), n),
        h = (function (e) {
            switch (e) {
                case I.INITIALIZING:
                case I.PENDING_REMOTE_INIT:
                    return 0;
                case I.PENDING_TICKET:
                case I.PENDING_LOGIN:
                case I.FINISH:
                    return 1;
            }
        })(d.step);
    return (0, r.jsx)(E.F, {
        children: (0, r.jsx)(g.Y, {
            fillParent: !0,
            className: l()(Z.ZF, { [Z.dV]: i }),
            step: h,
            steps: [0, 1],
            children: (0, r.jsx)("div", {
                className: Z.vP,
                children: (0, r.jsx)(X, {
                    state: d,
                    cancel: u,
                    conditionalMediationAbortController: s,
                    isPasswordlessActive: c,
                    isMultiAccount: n,
                    horizontal: i,
                }),
            }),
        }),
    });
}
