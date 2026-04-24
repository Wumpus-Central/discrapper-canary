n.d(t, { A: () => e8 });
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(935399),
    u = n(17928),
    c = n(289873),
    d = n(830215),
    _ = n(6981),
    h = n(475743),
    m = n(707554),
    g = n(821609),
    f = n(854378),
    E = n(652215),
    A = n(985018),
    p = n(379154),
    x = n(818050);
function N(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: r, onCancelAccountDeletion: i } = e,
        a = t === E.aUe.ACCOUNT_DISABLED,
        o = a ? A.intl.string(A.t["j3rC+U"]) : A.intl.string(A.t.ZFWofo),
        u = a ? A.intl.string(A.t["6eNTWe"]) : A.intl.string(A.t["pCBti+"]);
    return (0, l.jsx)(f.Ay, {
        tag: "form",
        onSubmit: r,
        className: n,
        children: (0, l.jsxs)(m.F, {
            component: (0, l.jsx)(f.hE, { className: x.QB, children: o }),
            children: [
                (0, l.jsx)(f.tK, { className: x.SX, children: u }),
                (0, l.jsxs)(f.eB, {
                    children: [
                        (0, l.jsx)(g.$, { text: A.intl.string(A.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, l.jsx)("div", {
                            className: s()(x.Ot, p.Qt),
                            children: A.intl.format(A.t.js2rr5, { onClick: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var I = n(921853),
    v = n(123292),
    S = n(161928),
    y = n(504394),
    b = n(702841),
    C = n(765178),
    T = n(834730),
    R = n(331322),
    j = n(778712),
    w = n(685094),
    L = n(730134);
function U() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
var O = n(414121),
    k =
        (((r = {})[(r.INITIALIZING = 0)] = "INITIALIZING"),
        (r[(r.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (r[(r.PENDING_TICKET = 2)] = "PENDING_TICKET"),
        (r[(r.PENDING_LOGIN = 3)] = "PENDING_LOGIN"),
        (r[(r.FINISH = 4)] = "FINISH"),
        r),
    G = n(158390),
    D = n(636537),
    M = n(765548),
    P = n(626584),
    F = n(751124),
    B = n(625494);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
var V = n(284009),
    H = n.n(V),
    W = n(889227);
async function Q(e, t) {
    let n = (t = await $.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, r, l, i, a] = n;
    return new W.A({ id: r, discriminator: l, avatar: "0" === i ? null : i, username: a });
}
function z(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function q(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function K(e) {
    return z(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function Z(e, t) {
    return (
        H()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let $ = new (class {
        generateRsaKeyPair() {
            return window.crypto.subtle.generateKey(
                { name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
                !0,
                ["decrypt"],
            );
        }
        async serializePublicKey(e) {
            return (
                H()(null != e.publicKey, "public key cannot be null"),
                btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
            );
        }
        async publicKeyFingerprint(e) {
            return (
                H()(null != e.publicKey, "public key cannot be null"),
                K(await window.crypto.subtle.exportKey("spki", e.publicKey))
            );
        }
        async decryptEncodedCiphertext(e, t) {
            let n = new TextDecoder(),
                r = await Z(e, q(t));
            return n.decode(r);
        }
        async decryptNonce(e, t) {
            return z(await Z(e, q(t)));
        }
        release() {}
    })(),
    X = new P.A("useAuthWebsocket");
var Y = n(293731),
    J = n(495544),
    ee = n(723702),
    et = n(427262),
    en = n(19575),
    er = n(818348),
    el = n(611008);
let ei = n(906118);
function ea(e) {
    let { text: t = "" } = e,
        [n, r] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = ei), (e.onload = () => r(!0)), (e.onerror = () => r(!0));
        }, [ei]),
        i.useEffect(() => {
            n && C.O.announce(A.intl.string(A.t.j2p125));
        }, [n]),
        (0, l.jsx)("div", {
            className: el.Ac,
            children:
                "" !== t && n
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(O.Ay, { className: el.JB, size: 160, text: t }),
                              (0, l.jsx)("div", {
                                  className: el.R6,
                                  children: (0, l.jsx)("img", { src: ei, alt: "" }),
                              }),
                          ],
                      })
                    : (0, l.jsx)("div", {
                          className: el.R6,
                          "aria-label": A.intl.string(A.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, l.jsx)(c.y, {
                              className: el.JB,
                              type: c.y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let es = (e) => {
    let { className: t, children: n } = e;
    return (0, l.jsx)(T.E, { variant: "text-md/normal", color: "text-feedback-critical", className: t, children: n });
};
function eo(e) {
    let { state: t, cancel: n, errorMessage: r, conditionalMediationAbortController: i, isPasswordlessActive: a } = e;
    switch (t.step) {
        case k.INITIALIZING:
        case k.PENDING_REMOTE_INIT:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ea, {
                        text: t.step === k.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                    }),
                    (0, l.jsx)(f.hE, { className: x.QB, children: A.intl.string(A.t.UPiHaL) }),
                    null != r
                        ? (0, l.jsx)(es, { children: r })
                        : (0, l.jsx)(f.tK, { children: A.intl.format(A.t["Qq+A6i"], {}) }),
                    (0, l.jsx)(R.B, {
                        padding: 8,
                        align: "center",
                        children: (0, l.jsx)(v.Q, {
                            text: A.intl.string(A.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () => {
                                let e;
                                return (
                                    (e =
                                        ee.isPlatformEmbedded && en.Ay.supportsFeature(E.BYE.WEBAUTHN)
                                            ? en.Ay.webAuthnAuthenticate
                                            : Y.J),
                                    void d.A.authenticatePasswordless({
                                        authenticateFunc: e,
                                        conditionalMediationAbortController: i,
                                    }).catch(() => {})
                                );
                            },
                            disabled: a,
                        }),
                    }),
                ],
            });
        case k.PENDING_TICKET: {
            let { user: e } = t;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(L.A, {
                        className: el.b4,
                        user: e,
                        size: j._3.SIZE_120,
                        isMobile: !0,
                        status: er.cl.ONLINE,
                    }),
                    (0, l.jsx)(f.hE, { className: x.QB, children: A.intl.string(A.t.apGCUT) }),
                    (0, l.jsx)(f.tK, { children: A.intl.format(A.t.Cbl5JK, { username: `${et.Ay.getUserTag(e)}` }) }),
                    (0, l.jsx)("div", {
                        className: el.Z,
                        children: (0, l.jsx)(v.Q, {
                            text: A.intl.string(A.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case k.PENDING_LOGIN:
        case k.FINISH:
            return (0, l.jsx)(c.y, { type: c.y.Type.WANDERING_CUBES });
    }
}
function eu(e) {
    let { onAuthenticateSuccess: t, conditionalMediationAbortController: n } = e,
        r = (0, b.bG)([J.default], () => J.default.getIsPasswordlessActive()),
        { state: a, cancel: s } = (function (e, t) {
            let [n, r] = i.useState(0),
                [l, a] = i.useState(!1),
                [s, o] = i.useState({ step: k.INITIALIZING }),
                u = i.useRef(null),
                c = i.useMemo(() => new G.A(1500, 3e4), []),
                _ = (0, M.A)(() => {
                    o({ step: k.INITIALIZING }),
                        t
                            ? r((e) => e + 1)
                            : (X.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              a(!0));
                }),
                h = i.useCallback(() => {
                    X.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                        o({ step: k.INITIALIZING }),
                        c.pending || c.fail(_);
                }, [_, c]);
            return (
                i.useEffect(() => {
                    t &&
                        l &&
                        s.step === k.INITIALIZING &&
                        (X.info("reconnecting, now that document is visible"), a(!1), r((e) => e + 1));
                }, [s, t, l, a]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = (e) => `[${Date.now() - t}ms] ${e}`,
                        r = (e) => X.info(n(e)),
                        l = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    l.startsWith("//") && (l = `wss:${l}`);
                    let i = (0, F.A)(l);
                    X.info(`[0ms] connecting to ${l}`);
                    let a = null,
                        s = null,
                        m = null,
                        g = null,
                        f = !0;
                    function A() {
                        if (null != a) return a;
                        throw Error("No key pair set");
                    }
                    let p = () => {
                            f
                                ? ((f = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                                : (r("heartbeat timeout, reconnecting."), i.close(), h());
                        },
                        x = async (t) => {
                            let { data: l } = t,
                                a = JSON.parse(l);
                            switch (a.op) {
                                case "nonce_proof": {
                                    let e = a.encrypted_nonce,
                                        t = await $.decryptNonce(A(), e);
                                    r("computed nonce proof"), i.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                                    return;
                                }
                                case "pending_remote_init": {
                                    c.succeed(), B._.dispatch(E.jej.WAVE_EMPHASIZE);
                                    let e = await $.publicKeyFingerprint(A());
                                    if (e !== a.fingerprint) throw Error(`bad fingerprint ${e} !== ${a.fingerprint}`);
                                    r("handshake complete awaiting remote auth."),
                                        o({ step: k.PENDING_REMOTE_INIT, fingerprint: e });
                                    return;
                                }
                                case "pending_login": {
                                    let t = a.ticket;
                                    if (null == t) return void h();
                                    o({ step: k.PENDING_LOGIN, ticket: t }),
                                        D.Bo.post({
                                            url: E.Rsh.REMOTE_AUTH_LOGIN,
                                            body: { ticket: t },
                                            oldFormErrors: !0,
                                            rejectWithError: !0,
                                        })
                                            .then(async (t) => {
                                                if (null == u.current) return void h();
                                                let n = await $.decryptEncodedCiphertext(
                                                        u.current,
                                                        t.body.encrypted_token,
                                                    ),
                                                    r = await $.publicKeyFingerprint(u.current);
                                                await d.A.loginToken(n, !1), e(r);
                                            })
                                            .catch(() => h());
                                    return;
                                }
                                case "pending_ticket": {
                                    B._.dispatch(E.jej.WAVE_EMPHASIZE),
                                        r("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = a.encrypted_user_payload,
                                        t = await Q(A(), e);
                                    o({ step: k.PENDING_TICKET, user: t });
                                    return;
                                }
                                case "cancel":
                                    r("remote auth handshake cancelled."), _();
                                    return;
                                case "hello": {
                                    r(`got hello, auth timeout=${a.timeout_ms}ms`);
                                    let e = a.heartbeat_interval;
                                    g = setTimeout(
                                        () => {
                                            (g = null), p(), (m = setInterval(p, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    f = !0;
                                    return;
                                default:
                                    X.warn(n("received unsupported message"));
                            }
                        },
                        N = async () => {
                            (a = await $.generateRsaKeyPair()), (s = await $.serializePublicKey(a));
                            let e = await $.publicKeyFingerprint(a);
                            r(`connected, handshaking with fingerprint: ${e}`),
                                i.send(JSON.stringify({ op: "init", encoded_public_key: s })),
                                (u.current = a);
                        },
                        I = (e) => {
                            r(`disconnected, code: ${e.code} ${e.reason}`), h();
                        },
                        v = (e) => {
                            r(`disconnected, error: ${JSON.stringify(e)}`), h();
                        };
                    return (
                        i.addEventListener("open", N),
                        i.addEventListener("message", x),
                        i.addEventListener("close", I),
                        i.addEventListener("error", v),
                        () => {
                            r("cleaning up"),
                                i.removeEventListener("open", N),
                                i.removeEventListener("message", x),
                                i.removeEventListener("close", I),
                                i.removeEventListener("error", v),
                                i.close(1e3),
                                c.cancel(),
                                $.release(),
                                null != g && clearTimeout(g),
                                null != m && clearInterval(m);
                        }
                    );
                }, [_, e, n, c, h]),
                { state: s, cancel: _ }
            );
        })(
            t,
            (function () {
                let [e, t] = (0, i.useState)(U());
                return (
                    (0, i.useEffect)(() => {
                        function e() {
                            t(U());
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
        ),
        o = (function (e) {
            switch (e) {
                case k.INITIALIZING:
                case k.PENDING_REMOTE_INIT:
                    return 0;
                case k.PENDING_TICKET:
                case k.PENDING_LOGIN:
                case k.FINISH:
                    return 1;
            }
        })(a.step);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: el.AC }),
            (0, l.jsx)(w.Y, {
                fillParent: !0,
                className: el.ZF,
                step: o,
                steps: [0, 1],
                children: (0, l.jsx)("div", {
                    className: el.vP,
                    children: (0, l.jsx)(eo, {
                        state: a,
                        cancel: s,
                        conditionalMediationAbortController: n,
                        isPasswordlessActive: r,
                    }),
                }),
            }),
        ],
    });
}
var ec = n(235986),
    ed = n(274303),
    e_ = n(354948);
function eh(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function em(e) {
    let t,
        {
            invite: n,
            giftCode: r,
            loginStatus: i,
            country: a,
            showMobileWebHandoff: o,
            disableAutofocusOnDefaultForm: c,
            withQR: d,
            dismissedChooseAccount: _,
            login: h,
            password: N,
            errors: b,
            conditionalMediationAbortController: C,
            onLoginChange: T,
            onPasswordChange: R,
            setLoginRef: j,
            setPasswordRef: w,
            onReturnToChooseAccount: L,
            handleForgotPassword: U,
            handleGotoRegister: O,
            handleAuthSuccess: k,
        } = e,
        G = (0, u.bG)([ed.A], () => ed.A.getHasLoggedInAccounts()),
        D = null == b.email && null != b.password;
    return (
        (t =
            null != n
                ? (0, l.jsx)("div", { className: x.S3, children: (0, l.jsx)(y.A, { invite: n }) })
                : null != r
                  ? (0, l.jsx)(S.A, { giftCode: r })
                  : (0, l.jsxs)("div", {
                        className: p.wx,
                        children: [
                            (0, l.jsx)(f.hE, { className: x.QB, children: A.intl.string(A.t["7fNJgA"]) }, "title"),
                            !1 === (0, ee.isAndroidWeb)()
                                ? (0, l.jsx)(f.tK, { children: A.intl.string(A.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    })),
        (0, l.jsxs)(
            ec.A,
            {
                direction: ec.A.Direction.HORIZONTAL,
                align: ec.A.Align.CENTER,
                children: [
                    (0, l.jsxs)("div", {
                        className: p.Eh,
                        children: [
                            G &&
                                _ &&
                                (0, l.jsx)("div", {
                                    className: p.AX,
                                    children: (0, l.jsx)(g.$, {
                                        onClick: L,
                                        variant: "secondary",
                                        text: A.intl.string(A.t["1MrpWO"]),
                                        icon: I.n,
                                    }),
                                }),
                            t,
                            (0, l.jsx)(m.F, {
                                children: (0, l.jsxs)(f.eB, {
                                    className: x.QX,
                                    children: [
                                        (0, l.jsx)(e_.A, {
                                            alpha2: a.alpha2,
                                            countryCode: a.code.split(" ")[0],
                                            className: x.SX,
                                            label: A.intl.string(A.t.tUjnxr),
                                            error: eh("login", b) ?? eh("email", b),
                                            onChange: T,
                                            setRef: j,
                                            autoCapitalize: "none",
                                            autoComplete: "username webauthn",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            value: h,
                                            autoFocus: !D && !o && !c,
                                            required: !0,
                                        }),
                                        (0, l.jsx)(f.pd, {
                                            label: A.intl.string(A.t["CIGa+7"]),
                                            error: eh("password", b),
                                            onChange: R,
                                            name: "password",
                                            type: "password",
                                            setRef: w,
                                            autoComplete: "current-password",
                                            spellCheck: "false",
                                            autoFocus: D && !o && !c,
                                            value: N,
                                            required: !0,
                                        }),
                                        (0, l.jsx)("div", {
                                            className: s()(x.SX, x.a5),
                                            children: (0, l.jsx)(v.Q, {
                                                text: A.intl.string(A.t.wWIufs),
                                                textVariant: "text-sm/normal",
                                                onClick: U,
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: x.QB,
                                            children: (0, l.jsx)(g.$, {
                                                text: A.intl.string(A.t.dKhVQN),
                                                fullWidth: !0,
                                                type: "submit",
                                                loading: i === E.aUe.LOGGING_IN,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: x.a5,
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: p.Qt,
                                                    children: A.intl.string(A.t.tmE73r),
                                                }),
                                                (0, l.jsx)("span", {
                                                    className: p.Z8,
                                                    children: (0, l.jsx)(v.Q, {
                                                        text: A.intl.string(A.t.pV8xeR),
                                                        textVariant: "text-sm/normal",
                                                        onClick: O,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(m.F, {
                        children: d
                            ? (0, l.jsx)(eu, { onAuthenticateSuccess: k, conditionalMediationAbortController: C })
                            : null,
                    }),
                ],
            },
            "form-wrapper",
        )
    );
}
var eg = n(228366),
    ef = n(572469);
function eE(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        r = (0, u.cf)(
            [J.default],
            () => ({ ticket: J.default.getMFATicket(), methods: J.default.getMFAMethods() }),
            [],
        ),
        a = i.useCallback(
            (e) => {
                let { mfaType: r, data: l, ticket: i } = e;
                return (
                    B._.dispatch(E.jej.WAVE_EMPHASIZE),
                    d.A.loginMFAv2({ code: l, ticket: i, mfaType: r, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, l.jsx)(f.Ay, {
        style: { padding: 0 },
        children: (0, l.jsx)(ef.t, {
            mfaFinish: a,
            mfaChallenge: r,
            onEarlyClose: () => {
                eg.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
function eA(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: r,
        password: i,
        onLoginChange: a,
        onPasswordChange: s,
        setLoginRef: o,
        setPasswordRef: u,
    } = e;
    return (0, l.jsxs)(f.Ay, {
        className: t,
        children: [
            (0, l.jsx)(y.M, {}),
            (0, l.jsxs)(f.eB, {
                className: x.QX,
                children: [
                    (0, l.jsx)(e_.A, {
                        className: x.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: A.intl.string(A.t.tUjnxr),
                        onChange: a,
                        setRef: o,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: r,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, l.jsx)(f.pd, {
                        className: x.SX,
                        label: A.intl.string(A.t["CIGa+7"]),
                        onChange: s,
                        type: "password",
                        setRef: u,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: i,
                        required: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: x.QB,
                        children: (0, l.jsx)(g.$, {
                            text: A.intl.string(A.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, l.jsx)(v.Q, { text: A.intl.string(A.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, l.jsx)("div", {
                        className: x.a5,
                        children: (0, l.jsx)(v.Q, {
                            text: A.intl.string(A.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ep = n(492462),
    ex = n(511815),
    eN = n(189213),
    eI = n(139033),
    ev = n(192308),
    eS = n(557722),
    ey = n(954571),
    eb = n(351671),
    eC = n(15552),
    eT = n(212640),
    eR = n(952116),
    ej = n(491509),
    ew = n(895600);
n(323874), n(14289), n(35956);
var eL = n(80703),
    eU = n(506774),
    eO = n(927813),
    ek = n(104798),
    eG = n(1959);
let eD = "mweb_handoff_nonce",
    eM = "mweb_handoff_nonce_expiration",
    eP = +eO.A.Millis.MINUTE,
    eF = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    eB = new Set(["deep_link_failed"]),
    eV = () => {
        eU.w.remove(eD), eU.w.remove(eM);
    },
    eH = () => {
        let e = (0, u.bG)([J.default], () => J.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, ep.parse)(window.location.search),
            r = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            a = r ?? (null !== e ? e : void 0);
        i.useEffect(() => {
            null !== r && e !== r && eg.h.dispatch({ type: "FINGERPRINT", fingerprint: r });
        }, [r, e]);
        let [s, o] = i.useState(null),
            c = i.useCallback(
                (e) => {
                    o(e),
                        ey.default.track(
                            E.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, eL.v)(a) },
                            { fingerprint: a },
                        );
                },
                [o, a],
            ),
            _ = eU.w.get(eD);
        if (
            ("null" === n && null === s && c("deep_link_failed"),
            null != n && "null" !== n && null == _ && null === s && c("nonce_missing"),
            i.useEffect(() => {
                if (null != _) {
                    let e = eU.w.get(eM);
                    (null == e || Date.now() >= e) && (c("nonce_expired"), eV());
                }
            }, [_, c]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != _ &&
                    null == s &&
                    D.Bo.post({ url: E.Rsh.HANDOFF_EXCHANGE, body: { key: _, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => d.A.loginToken(e.body.token, !1))
                        .then(() => {
                            ey.default.track(E.HAw.LOGIN_SUCCESSFUL, {
                                source: E.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, eL.v)(a),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            c("handoff_exchange");
                        })
                        .finally(() => {
                            eV();
                        });
            }, [n, _, s, a, c]),
            null == a)
        )
            return null;
        let h =
            null == s
                ? (0, l.jsxs)(l.Fragment, {
                      children: [A.intl.string(A.t.uJ1JsY), (0, l.jsx)("br", {}), A.intl.string(A.t.GHVWAs)],
                  })
                : eB.has(s)
                  ? A.intl.string(A.t.EPt55r)
                  : eF.has(s)
                    ? A.intl.string(A.t.g87kTp)
                    : void 0;
        return null != s && eB.has(s)
            ? (0, l.jsx)("div", {
                  className: eG.Un,
                  children: (0, l.jsx)(T.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: h,
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: eG.kL,
                  children: [
                      (0, l.jsx)(T.E, { variant: "text-sm/semibold", children: h }),
                      (0, l.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: A.intl.string(A.t.NcC759),
                          onClick: () => {
                              let e = ek.A.generateNonce();
                              eU.w.set(eD, e), eU.w.set(eM, Date.now() + eP);
                              let t = new URL(E.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", a),
                                  (t.search = r.toString()),
                                  ey.default.track(
                                      E.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, eL.v)(a), source: "mobile_web_handoff", destination: E.J$u },
                                      { fingerprint: a, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var eW = n(110259),
    eQ = n(139286),
    ez = n(970573),
    eq = n(364488);
function eK(e) {
    let { onDismiss: t } = e;
    return (
        (0, eQ.A)({ type: eW.ImpressionTypes.MODAL, name: eW.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, l.jsxs)(f.Ay, {
            className: eq.ci,
            children: [
                (0, l.jsx)(f.hE, { children: A.intl.string(A.t.bVbB63) }),
                (0, l.jsx)(T.E, {
                    className: eq.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: A.intl.string(A.t["0M5fN7"]),
                }),
                (0, l.jsx)(ez.A, {
                    actionText: A.intl.string(A.t["DSN+hw"]),
                    onAction: (e) => {
                        e === ez.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, l.jsx)("div", {
                    className: eq.o1,
                    children: (0, l.jsx)(v.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: A.intl.string(A.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
var eZ = n(148864),
    e$ = n(976860),
    eX = n(913612),
    eY = n(210714),
    eJ = n(933924),
    e0 = n(115036),
    e1 = n(538796),
    e2 = n(401755);
let e5 = (e) => n.g.location.assign(e);
function e8(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCodeSKU: r,
        giftCode: a,
        location: m,
        redirectTo: g,
        transitionTo: I,
        replaceWith: v,
        authBoxClassName: S,
        showMobileWebHandoff: y,
        loginSource: b,
        disableAutofocusOnDefaultForm: C,
    } = e;
    (0, eX.K)();
    let R = (0, u.bG)([J.default], () => J.default.isAuthenticated()),
        j = (0, u.bG)([e0.A], () => e0.A.isHandoffAvailable()),
        w = (0, u.bG)([J.default], () => J.default.getLoginStatus()),
        L = (0, u.bG)([eZ.A], () => eZ.A.getCountryCode()),
        U = (0, u.bG)([ed.A], () => ed.A.getHasLoggedInAccounts()),
        {
            checkingHandoff: O,
            redirecting: k,
            login: G,
            password: D,
            phoneVerifyError: M,
            dismissedChooseAccount: P,
            setDismissedChooseAccount: F,
            errors: V,
            conditionalMediationAbortController: H,
            loginSource: W,
            giftCodeSKUId: Q,
            loginOrSSO: z,
            loginRef: q,
            passwordRef: K,
            codeRef: Z,
            handleLogin: $,
            handleIPAuthorize: X,
            handlePasswordReset: Y,
            handleForgotPassword: ee,
            handleResendCode: et,
            handleReset: en,
            handleCancelAccountDeletion: er,
            handleGotoRegister: el,
            handleAuthSuccess: ei,
            loginReset: ea,
            onLoginChange: es,
            onPasswordChange: eo,
            setLoginRef: eu,
            setPasswordRef: ec,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: r,
                    handoffAvailable: a,
                    authenticated: s,
                    transitionTo: o,
                    replaceWith: u,
                    redirectTo: c,
                    location: _,
                    loginSource: h,
                } = e,
                [m, g] = i.useState(() => a),
                [f, p] = i.useState(() => s),
                [x, N] = i.useState(""),
                [I, v] = i.useState(() => {
                    let e = null != _ ? (0, ep.parse)(_.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [S, y] = i.useState(""),
                [b, C] = i.useState(!1),
                [R, j] = i.useState(null),
                [w, L] = i.useState(!1),
                [U] = i.useState(() => new AbortController()),
                [O, k] = i.useState({}),
                G = i.useRef(null),
                D = i.useRef(null),
                M = i.useRef(null);
            !m || a || s || g(!1);
            let P = i.useMemo(() => {
                    if (null != h) return h;
                    if (null != r) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != c ? (0, eb.Q)(c) : null;
                }, [h, r, n, t, c]),
                F = null != r ? r.skuId : null,
                V = i.useCallback(
                    (e) => {
                        let t = null != e ? (0, ep.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != c)) {
                            if ((0, eT.RZ)(c)) return void (0, eT.NY)(c);
                            null != u ? u(c) : o(c);
                        } else if (null == t.service) o(E.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + E.Rsh.SSO,
                                n = { ...t, token: J.default.getToken() };
                            window.location = `${e}?${(0, ep.stringify)(n)}`;
                        }
                    },
                    [c, u, o],
                ),
                H = i.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? d.A.verifySSOToken("login").then(() => V(t)) : V(t));
                    },
                    [V],
                ),
                W = i.useCallback(
                    (e) => {
                        k({}),
                            ey.default.track(E.HAw.LOGIN_SUCCESSFUL, {
                                source: E.mdB.QR_CODE,
                                login_source: P,
                                gift_code_sku_id: F,
                                is_new_user: !1,
                                login_method: "remote_auth",
                                login_instance_id: e ?? null,
                            });
                    },
                    [P, F],
                ),
                Q = i.useCallback(() => {
                    U.abort("Login state reset"), k({}), d.A.loginReset();
                }, [U]),
                z = i.useCallback((e) => {
                    G.current = e ?? null;
                }, []),
                q = i.useCallback((e) => {
                    D.current = e ?? null;
                }, []),
                K = i.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            U.abort("Starting password login"),
                            B._.dispatch(E.jej.WAVE_EMPHASIZE),
                            k({});
                        try {
                            await d.A.login({
                                login: x + I,
                                password: S,
                                undelete: n ?? b,
                                source: P,
                                giftCodeSKUId: F,
                                invite: t,
                            });
                        } catch (e) {
                            k((0, eC.p)(e));
                        }
                    },
                    [U, I, x, S, b, P, F, t],
                ),
                Z = i.useCallback(
                    async (e) => {
                        let t = x + I;
                        k({});
                        try {
                            let { token: n } = await eS.A.verifyPhone(t, e, !1);
                            await d.A.authorizeIPAddress(n), K();
                        } catch (e) {
                            null != e.body && null != e.body.message && j(e.body.message);
                        }
                    },
                    [x, I, K],
                ),
                $ = i.useCallback(
                    async (e) => {
                        j(null);
                        try {
                            let { token: t } = await eS.A.verifyPhone(x + I, e, !1);
                            o(E.BVt.RESET, { search: (0, ep.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && j(e.body.message);
                        }
                    },
                    [x, I, o],
                ),
                X = i.useCallback(
                    async (e) => {
                        null != e && e.preventDefault(), null != G.current && G.current.focus();
                        let t = x + I;
                        k({});
                        try {
                            B._.dispatch(E.jej.WAVE_EMPHASIZE);
                            let e = await d.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === ex.D.ONE_TIME_LOGIN
                                ? (0, ev.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: A.intl.string(A.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, l.jsx)(eN.Modal, {
                                          title: A.intl.string(A.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, l.jsx)(T.E, {
                                              variant: "text-md/normal",
                                              children: A.intl.string(A.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, eI.A)({
                                      title: A.intl.string(A.t.f5Pi7A),
                                      subtitle: A.intl.format(A.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            k((0, eC.p)(e));
                        }
                    },
                    [x, I],
                ),
                Y = i.useCallback(() => {
                    eS.A.resendCode(x + I);
                }, [x, I]),
                ee = i.useCallback((e) => {
                    null != e && e.preventDefault(), d.A.loginReset(), y(""), N(""), v(""), C(!1), g(!1), p(!1), k({});
                }, []),
                et = i.useCallback(() => {
                    C(!0), K(void 0, { undelete: !0 });
                }, [K]),
                en = i.useCallback(() => {
                    let e,
                        l = null != _ ? (0, ep.parse)(_.search) : {};
                    "" !== I && (l.email = I),
                        null != t
                            ? ((l.mode = "register"), (e = E.BVt.INVITE(t.code)))
                            : null != r
                              ? ((l.mode = "register"), (e = E.BVt.GIFT_CODE(r.code)))
                              : null != n
                                ? (e = E.BVt.GUILD_TEMPLATE(n.code))
                                : null != c
                                  ? ((e = E.BVt.REGISTER), (l.redirect_to = c))
                                  : (e = E.BVt.REGISTER),
                        Q(),
                        o(e, { search: (0, ep.stringify)(l) }),
                        B._.dispatch(E.jej.WAVE_EMPHASIZE);
                }, [I, t, r, n, c, _, Q, o]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: I,
                password: S,
                phoneVerifyError: R,
                dismissedChooseAccount: w,
                setDismissedChooseAccount: L,
                errors: O,
                conditionalMediationAbortController: U,
                loginSource: P,
                giftCodeSKUId: F,
                loginOrSSO: H,
                loginRef: G,
                passwordRef: D,
                codeRef: M,
                handleLogin: K,
                handleIPAuthorize: Z,
                handlePasswordReset: $,
                handleForgotPassword: X,
                handleResendCode: Y,
                handleReset: ee,
                handleCancelAccountDeletion: et,
                handleGotoRegister: en,
                handleAuthSuccess: W,
                loginReset: Q,
                onLoginChange: i.useCallback((e, t) => {
                    v(e), N(t);
                }, []),
                onPasswordChange: i.useCallback((e) => {
                    y(e);
                }, []),
                setLoginRef: z,
                setPasswordRef: q,
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: a,
            handoffAvailable: j,
            authenticated: R,
            transitionTo: I ?? e5,
            replaceWith: v,
            redirectTo: g,
            location: m,
            loginSource: b,
        });
    (0, o.Ay)(() => {
        j && !R ? (0, _.ST)() : R && z(R, m, !0),
            ey.default.track(
                E.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: W,
                    authenticated: R,
                    ...(null != r ? (0, ej.A)(r, !1, !1) : {}),
                    source: (0, e$.PR)(),
                },
                { flush: !0 },
            ),
            R || (0, eJ.a)({ abortController: H, loginSource: W, giftCodeSKUId: Q }),
            d.A.getLocationMetadata(),
            (0, eY.d)("login");
    });
    let e_ = (0, h.A)(R);
    i.useEffect(() => {
        let e = O && (j || k);
        R && !1 === e_ && !e && (H.abort("Transitioning to authenticated state"), z(R, m));
    }, [R, j, e_, k, O, H, z, m]);
    let eh = (0, h.A)(V);
    i.useEffect(() => {
        let e = (e) => null != V[e];
        null != eh &&
            eh !== V &&
            (e("password")
                ? K.current?.focus()
                : e("email") || e("login")
                  ? q.current?.focus()
                  : e("code") && Z.current?.focus());
    }, [V, q, K, Z, eh]);
    let eg = (e) =>
        (0, l.jsx)(em, {
            invite: t,
            giftCode: a,
            loginStatus: w,
            country: L,
            showMobileWebHandoff: y,
            disableAutofocusOnDefaultForm: C,
            withQR: e,
            dismissedChooseAccount: P,
            login: G,
            password: D,
            errors: V,
            conditionalMediationAbortController: H,
            onLoginChange: es,
            onPasswordChange: eo,
            setLoginRef: eu,
            setPasswordRef: ec,
            onReturnToChooseAccount: () => {
                F(!1);
            },
            handleForgotPassword: ee,
            handleGotoRegister: el,
            handleAuthSuccess: ei,
        });
    if (k || O) return (0, l.jsx)(f.Ay, { children: (0, l.jsx)(c.y, {}) });
    if (j)
        return (0, l.jsxs)(f.Ay, {
            className: S,
            children: [
                (0, l.jsx)(f.CK, {}),
                (0, l.jsx)(f.hE, { className: x.QB, children: A.intl.string(A.t.S6RMNA) }),
                (0, l.jsx)(f.tK, { children: A.intl.string(A.t.YZiJbh) }),
            ],
        });
    switch (w) {
        case E.aUe.LOGGING_IN_MFA_SMS:
        case E.aUe.MFA_SMS_STEP:
        case E.aUe.LOGGING_IN_MFA:
        case E.aUe.MFA_STEP:
            return (0, l.jsx)(eE, { loginSource: W, giftCodeSKUId: Q });
        case E.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case E.aUe.ACCOUNT_DISABLED:
            return (0, l.jsx)(N, {
                loginStatus: w,
                authBoxClassName: S ?? "",
                onSubmit: en,
                onCancelAccountDeletion: er,
            });
        case E.aUe.PHONE_IP_AUTHORIZATION:
            return (0, l.jsx)(f.Ay, {
                tag: "form",
                className: S,
                children: (0, l.jsx)(eR.A, {
                    title: A.intl.string(A.t.w55Oco),
                    subtitle: A.intl.format(A.t.CfRZBj, { onResendClick: et }),
                    error: M,
                    onSubmit: X,
                    onCancel: ea,
                }),
            });
        case E.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, l.jsx)(f.Ay, {
                tag: "form",
                className: S,
                children: (0, l.jsx)(eR.A, {
                    title: A.intl.string(A.t["+xqy3d"]),
                    subtitle: A.intl.format(A.t.ef4uZ7, { onResendClick: et }),
                    error: M,
                    onSubmit: Y,
                    onCancel: ea,
                }),
            });
        case E.aUe.LOGGING_IN:
        case E.aUe.NONE:
        default:
            if (null != t && t.state === E.elq.RESOLVING)
                return (0, l.jsx)(eA, {
                    authBoxClassName: S,
                    country: L,
                    login: G,
                    password: D,
                    onLoginChange: es,
                    onPasswordChange: eo,
                    setLoginRef: eu,
                    setPasswordRef: ec,
                });
            if (null != n)
                if (n.state === e2.QB.RESOLVING)
                    return (0, l.jsx)(eA, {
                        authBoxClassName: S,
                        country: L,
                        login: G,
                        password: D,
                        onLoginChange: es,
                        onPasswordChange: eo,
                        setLoginRef: eu,
                        setPasswordRef: ec,
                    });
                else
                    return (0, l.jsx)(e1.A, {
                        onSubmit: $,
                        tag: "form",
                        className: s()(S, p.Sy),
                        children: () => [(0, l.jsx)(ew.A, { guildTemplate: n }, "template"), eg(!1)],
                    });
            if (U && !P) return (0, l.jsx)(eK, { onDismiss: () => F(!0) });
            return (0, l.jsxs)("div", {
                className: p.__invalid_pageContainer,
                children: [
                    (0, l.jsx)(f.Ay, { onSubmit: $, tag: "form", className: S, expanded: !0, children: eg(!0) }),
                    y && (0, l.jsx)(eH, {}),
                ],
            });
    }
}
