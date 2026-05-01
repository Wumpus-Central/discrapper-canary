n.d(t, { A: () => e3 });
var l,
    r = n(627968),
    a = n(64700),
    i = n(935399),
    s = n(17928),
    o = n(289873),
    u = n(830215),
    c = n(6981),
    d = n(475743),
    h = n(503698),
    m = n.n(h),
    g = n(707554),
    f = n(821609),
    p = n(854378),
    _ = n(652215),
    E = n(985018),
    A = n(379154),
    x = n(818050);
function N(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: l, onCancelAccountDeletion: a } = e,
        i = t === _.aUe.ACCOUNT_DISABLED,
        s = i ? E.intl.string(E.t["j3rC+U"]) : E.intl.string(E.t.ZFWofo),
        o = i ? E.intl.string(E.t["6eNTWe"]) : E.intl.string(E.t["pCBti+"]);
    return (0, r.jsx)(p.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        children: (0, r.jsxs)(g.F, {
            component: (0, r.jsx)(p.hE, { className: x.QB, children: s }),
            children: [
                (0, r.jsx)(p.tK, { className: x.SX, children: o }),
                (0, r.jsxs)(p.eB, {
                    children: [
                        (0, r.jsx)(f.$, { text: E.intl.string(E.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, r.jsx)("div", {
                            className: m()(x.Ot, A.Qt),
                            children: E.intl.format(E.t.js2rr5, { onClick: a }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var I = n(492462),
    j = n(607399),
    S = n(921853),
    y = n(123292),
    v = n(331322),
    b = n(161928),
    C = n(504394),
    w = n(702841),
    R = n(765178),
    T = n(834730),
    k = n(778712),
    L = n(685094),
    G = n(730134);
function O() {
    return "u" < typeof document || "visible" === document.visibilityState;
}
var F = n(414121),
    U =
        (((l = {})[(l.INITIALIZING = 0)] = "INITIALIZING"),
        (l[(l.PENDING_REMOTE_INIT = 1)] = "PENDING_REMOTE_INIT"),
        (l[(l.PENDING_TICKET = 2)] = "PENDING_TICKET"),
        (l[(l.PENDING_LOGIN = 3)] = "PENDING_LOGIN"),
        (l[(l.FINISH = 4)] = "FINISH"),
        l),
    P = n(158390),
    D = n(636537),
    B = n(765548),
    M = n(626584),
    V = n(751124),
    H = n(625494);
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
var W = n(284009),
    K = n.n(W),
    Q = n(889227);
async function $(e, t) {
    let n = (t = await J.decryptEncodedCiphertext(e, t)).match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
    if (null == n) throw Error("Invalid encoded user record.");
    let [, l, r, a, i] = n;
    return new Q.A({ id: l, discriminator: r, avatar: "0" === a ? null : a, username: i });
}
function Z(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e)))
        .replace(/\//g, "_")
        .replace(/\+/g, "-")
        .replace(/={1,2}$/, "");
}
function z(e) {
    return Uint8Array.from(atob(e), (e) => e.charCodeAt(0));
}
async function X(e) {
    return Z(await window.crypto.subtle.digest({ name: "SHA-256" }, e));
}
function q(e, t) {
    return (
        K()(null != e.privateKey, "private key cannot be null"),
        window.crypto.subtle.decrypt({ name: "RSA-OAEP", hash: "SHA-256" }, e.privateKey, t)
    );
}
let J = new (class {
        generateRsaKeyPair() {
            return window.crypto.subtle.generateKey(
                { name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
                !0,
                ["decrypt"],
            );
        }
        async serializePublicKey(e) {
            return (
                K()(null != e.publicKey, "public key cannot be null"),
                btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
            );
        }
        async publicKeyFingerprint(e) {
            return (
                K()(null != e.publicKey, "public key cannot be null"),
                X(await window.crypto.subtle.exportKey("spki", e.publicKey))
            );
        }
        async decryptEncodedCiphertext(e, t) {
            let n = new TextDecoder(),
                l = await q(e, z(t));
            return n.decode(l);
        }
        async decryptNonce(e, t) {
            return Z(await q(e, z(t)));
        }
        release() {}
    })(),
    Y = new M.A("useAuthWebsocket");
var ee = n(293731),
    et = n(495544),
    en = n(723702),
    el = n(427262),
    er = n(19575),
    ea = n(818348),
    ei = n(611008);
let es = n(906118);
function eo(e) {
    let { text: t = "" } = e,
        [n, l] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = new Image();
            (e.src = es), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [es]),
        a.useEffect(() => {
            n && R.O.announce(E.intl.string(E.t.j2p125));
        }, [n]),
        (0, r.jsx)("div", {
            className: ei.Ac,
            children:
                "" !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(F.Ay, { className: ei.JB, size: 160, text: t }),
                              (0, r.jsx)("div", {
                                  className: ei.R6,
                                  children: (0, r.jsx)("img", { src: es, alt: "" }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: ei.R6,
                          "aria-label": E.intl.string(E.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(o.y, {
                              className: ei.JB,
                              type: o.y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let eu = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(T.E, { variant: "text-md/normal", color: "text-feedback-critical", className: t, children: n });
};
function ec(e) {
    let { state: t, cancel: n, errorMessage: l, conditionalMediationAbortController: a, isPasswordlessActive: i } = e;
    switch (t.step) {
        case U.INITIALIZING:
        case U.PENDING_REMOTE_INIT:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eo, {
                        text: t.step === U.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                    }),
                    (0, r.jsx)(p.hE, { className: x.QB, children: E.intl.string(E.t.UPiHaL) }),
                    null != l
                        ? (0, r.jsx)(eu, { children: l })
                        : (0, r.jsx)(p.tK, { children: E.intl.format(E.t["Qq+A6i"], {}) }),
                    (0, r.jsx)(v.B, {
                        padding: 8,
                        align: "center",
                        children: (0, r.jsx)(y.Q, {
                            text: E.intl.string(E.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () => {
                                let e;
                                return (
                                    (e =
                                        en.isPlatformEmbedded && er.Ay.supportsFeature(_.BYE.WEBAUTHN)
                                            ? er.Ay.webAuthnAuthenticate
                                            : ee.J),
                                    void u.A.authenticatePasswordless({
                                        authenticateFunc: e,
                                        conditionalMediationAbortController: a,
                                    }).catch(() => {})
                                );
                            },
                            disabled: i,
                        }),
                    }),
                ],
            });
        case U.PENDING_TICKET: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(G.A, {
                        className: ei.b4,
                        user: e,
                        size: k._3.SIZE_120,
                        isMobile: !0,
                        status: ea.cl.ONLINE,
                    }),
                    (0, r.jsx)(p.hE, { className: x.QB, children: E.intl.string(E.t.apGCUT) }),
                    (0, r.jsx)(p.tK, { children: E.intl.format(E.t.Cbl5JK, { username: `${el.Ay.getUserTag(e)}` }) }),
                    (0, r.jsx)("div", {
                        className: ei.Z,
                        children: (0, r.jsx)(y.Q, {
                            text: E.intl.string(E.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case U.PENDING_LOGIN:
        case U.FINISH:
            return (0, r.jsx)(o.y, { type: o.y.Type.WANDERING_CUBES });
    }
}
function ed(e) {
    let { onAuthenticateSuccess: t, conditionalMediationAbortController: n } = e,
        l = (0, w.bG)([et.default], () => et.default.getIsPasswordlessActive()),
        { state: i, cancel: s } = (function (e, t) {
            let [n, l] = a.useState(0),
                [r, i] = a.useState(!1),
                [s, o] = a.useState({ step: U.INITIALIZING }),
                c = a.useRef(null),
                d = a.useMemo(() => new P.A(1500, 3e4), []),
                h = (0, B.A)(() => {
                    o({ step: U.INITIALIZING }),
                        t
                            ? l((e) => e + 1)
                            : (Y.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              i(!0));
                }),
                m = a.useCallback(() => {
                    Y.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                        o({ step: U.INITIALIZING }),
                        d.pending || d.fail(h);
                }, [h, d]);
            return (
                a.useEffect(() => {
                    t &&
                        r &&
                        s.step === U.INITIALIZING &&
                        (Y.info("reconnecting, now that document is visible"), i(!1), l((e) => e + 1));
                }, [s, t, r, i]),
                a.useEffect(() => {
                    let t = Date.now(),
                        n = (e) => `[${Date.now() - t}ms] ${e}`,
                        l = (e) => Y.info(n(e)),
                        r = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
                    r.startsWith("//") && (r = `wss:${r}`);
                    let a = (0, V.A)(r);
                    Y.info(`[0ms] connecting to ${r}`);
                    let i = null,
                        s = null,
                        g = null,
                        f = null,
                        p = !0;
                    function E() {
                        if (null != i) return i;
                        throw Error("No key pair set");
                    }
                    let A = () => {
                            p
                                ? ((p = !1), a.send(JSON.stringify({ op: "heartbeat" })))
                                : (l("heartbeat timeout, reconnecting."), a.close(), m());
                        },
                        x = async (t) => {
                            let { data: r } = t,
                                i = JSON.parse(r);
                            switch (i.op) {
                                case "nonce_proof": {
                                    let e = i.encrypted_nonce,
                                        t = await J.decryptNonce(E(), e);
                                    l("computed nonce proof"), a.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                                    return;
                                }
                                case "pending_remote_init": {
                                    d.succeed(), H._.dispatch(_.jej.WAVE_EMPHASIZE);
                                    let e = await J.publicKeyFingerprint(E());
                                    if (e !== i.fingerprint) throw Error(`bad fingerprint ${e} !== ${i.fingerprint}`);
                                    l("handshake complete awaiting remote auth."),
                                        o({ step: U.PENDING_REMOTE_INIT, fingerprint: e });
                                    return;
                                }
                                case "pending_login": {
                                    let t = i.ticket;
                                    if (null == t) return void m();
                                    o({ step: U.PENDING_LOGIN, ticket: t }),
                                        D.Bo.post({
                                            url: _.Rsh.REMOTE_AUTH_LOGIN,
                                            body: { ticket: t },
                                            oldFormErrors: !0,
                                            rejectWithError: !0,
                                        })
                                            .then(async (t) => {
                                                if (null == c.current) return void m();
                                                let n = await J.decryptEncodedCiphertext(
                                                        c.current,
                                                        t.body.encrypted_token,
                                                    ),
                                                    l = await J.publicKeyFingerprint(c.current);
                                                await u.A.loginToken(n, !1), e(l);
                                            })
                                            .catch(() => m());
                                    return;
                                }
                                case "pending_ticket": {
                                    H._.dispatch(_.jej.WAVE_EMPHASIZE),
                                        l("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = i.encrypted_user_payload,
                                        t = await $(E(), e);
                                    o({ step: U.PENDING_TICKET, user: t });
                                    return;
                                }
                                case "cancel":
                                    l("remote auth handshake cancelled."), h();
                                    return;
                                case "hello": {
                                    l(`got hello, auth timeout=${i.timeout_ms}ms`);
                                    let e = i.heartbeat_interval;
                                    f = setTimeout(
                                        () => {
                                            (f = null), A(), (g = setInterval(A, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    p = !0;
                                    return;
                                default:
                                    Y.warn(n("received unsupported message"));
                            }
                        },
                        N = async () => {
                            (i = await J.generateRsaKeyPair()), (s = await J.serializePublicKey(i));
                            let e = await J.publicKeyFingerprint(i);
                            l(`connected, handshaking with fingerprint: ${e}`),
                                a.send(JSON.stringify({ op: "init", encoded_public_key: s })),
                                (c.current = i);
                        },
                        I = (e) => {
                            l(`disconnected, code: ${e.code} ${e.reason}`), m();
                        },
                        j = (e) => {
                            l(`disconnected, error: ${JSON.stringify(e)}`), m();
                        };
                    return (
                        a.addEventListener("open", N),
                        a.addEventListener("message", x),
                        a.addEventListener("close", I),
                        a.addEventListener("error", j),
                        () => {
                            l("cleaning up"),
                                a.removeEventListener("open", N),
                                a.removeEventListener("message", x),
                                a.removeEventListener("close", I),
                                a.removeEventListener("error", j),
                                a.close(1e3),
                                d.cancel(),
                                J.release(),
                                null != f && clearTimeout(f),
                                null != g && clearInterval(g);
                        }
                    );
                }, [h, e, n, d, m]),
                { state: s, cancel: h }
            );
        })(
            t,
            (function () {
                let [e, t] = (0, a.useState)(O());
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            t(O());
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
                case U.INITIALIZING:
                case U.PENDING_REMOTE_INIT:
                    return 0;
                case U.PENDING_TICKET:
                case U.PENDING_LOGIN:
                case U.FINISH:
                    return 1;
            }
        })(i.step);
    return (0, r.jsx)(g.F, {
        children: (0, r.jsx)(L.Y, {
            fillParent: !0,
            className: ei.ZF,
            step: o,
            steps: [0, 1],
            children: (0, r.jsx)("div", {
                className: ei.vP,
                children: (0, r.jsx)(ec, {
                    state: i,
                    cancel: s,
                    conditionalMediationAbortController: n,
                    isPasswordlessActive: l,
                }),
            }),
        }),
    });
}
var eh = n(538796),
    em = n(895600);
n(323874), n(14289), n(35956);
var eg = n(80703),
    ef = n(506774),
    ep = n(228366),
    e_ = n(954571),
    eE = n(927813),
    eA = n(104798),
    ex = n(1959);
let eN = "mweb_handoff_nonce",
    eI = "mweb_handoff_nonce_expiration",
    ej = +eE.A.Millis.MINUTE,
    eS = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    ey = new Set(["deep_link_failed"]),
    ev = () => {
        ef.w.remove(eN), ef.w.remove(eI);
    },
    eb = () => {
        let e = (0, s.bG)([et.default], () => et.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, I.parse)(window.location.search),
            l = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            i = l ?? (null !== e ? e : void 0);
        a.useEffect(() => {
            null !== l && e !== l && ep.h.dispatch({ type: "FINGERPRINT", fingerprint: l });
        }, [l, e]);
        let [o, c] = a.useState(null),
            d = a.useCallback(
                (e) => {
                    c(e),
                        e_.default.track(
                            _.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, eg.v)(i) },
                            { fingerprint: i },
                        );
                },
                [c, i],
            ),
            h = ef.w.get(eN);
        if (
            ("null" === n && null === o && d("deep_link_failed"),
            null != n && "null" !== n && null == h && null === o && d("nonce_missing"),
            a.useEffect(() => {
                if (null != h) {
                    let e = ef.w.get(eI);
                    (null == e || Date.now() >= e) && (d("nonce_expired"), ev());
                }
            }, [h, d]),
            a.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != h &&
                    null == o &&
                    D.Bo.post({ url: _.Rsh.HANDOFF_EXCHANGE, body: { key: h, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => u.A.loginToken(e.body.token, !1))
                        .then(() => {
                            e_.default.track(_.HAw.LOGIN_SUCCESSFUL, {
                                source: _.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, eg.v)(i),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            d("handoff_exchange");
                        })
                        .finally(() => {
                            ev();
                        });
            }, [n, h, o, i, d]),
            null == i)
        )
            return null;
        let m =
            null == o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [E.intl.string(E.t.uJ1JsY), (0, r.jsx)("br", {}), E.intl.string(E.t.GHVWAs)],
                  })
                : ey.has(o)
                  ? E.intl.string(E.t.EPt55r)
                  : eS.has(o)
                    ? E.intl.string(E.t.g87kTp)
                    : void 0;
        return null != o && ey.has(o)
            ? (0, r.jsx)("div", {
                  className: ex.Un,
                  children: (0, r.jsx)(T.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: m,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: ex.kL,
                  children: [
                      (0, r.jsx)(T.E, { variant: "text-sm/semibold", children: m }),
                      (0, r.jsx)(f.$, {
                          variant: "overlay-primary",
                          text: E.intl.string(E.t.NcC759),
                          onClick: () => {
                              let e = eA.A.generateNonce();
                              ef.w.set(eN, e), ef.w.set(eI, Date.now() + ej);
                              let t = new URL(_.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let l = new URLSearchParams();
                              l.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  l.set("key", e),
                                  l.set("fingerprint", i),
                                  (t.search = l.toString()),
                                  e_.default.track(
                                      _.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, eg.v)(i), source: "mobile_web_handoff", destination: _.J$u },
                                      { fingerprint: i, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var eC = n(274303),
    ew = n(110259),
    eR = n(139286),
    eT = n(970573),
    ek = n(364488);
function eL(e) {
    let { onDismiss: t } = e;
    return (
        (0, eR.A)({ type: ew.ImpressionTypes.MODAL, name: ew.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, r.jsxs)(p.Ay, {
            className: ek.ci,
            children: [
                (0, r.jsx)(p.hE, { children: E.intl.string(E.t.bVbB63) }),
                (0, r.jsx)(T.E, {
                    className: ek.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: E.intl.string(E.t["0M5fN7"]),
                }),
                (0, r.jsx)(eT.A, {
                    actionText: E.intl.string(E.t["DSN+hw"]),
                    onAction: (e) => {
                        e === eT.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, r.jsx)("div", {
                    className: ek.o1,
                    children: (0, r.jsx)(y.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: E.intl.string(E.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
var eG = n(148864),
    eO = n(354948);
function eF(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: l,
        password: a,
        onLoginChange: i,
        onPasswordChange: s,
        loginRef: o,
        passwordRef: u,
    } = e;
    return (0, r.jsxs)(p.Ay, {
        className: t,
        children: [
            (0, r.jsx)(C.M, {}),
            (0, r.jsxs)(p.eB, {
                className: x.QX,
                children: [
                    (0, r.jsx)(eO.A, {
                        className: x.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: E.intl.string(E.t.tUjnxr),
                        onChange: i,
                        setRef: o,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: l,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, r.jsx)(p.pd, {
                        className: x.SX,
                        label: E.intl.string(E.t["CIGa+7"]),
                        onChange: s,
                        type: "password",
                        setRef: u,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: a,
                        required: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: x.QB,
                        children: (0, r.jsx)(f.$, {
                            text: E.intl.string(E.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, r.jsx)(y.Q, { text: E.intl.string(E.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, r.jsx)("div", {
                        className: x.a5,
                        children: (0, r.jsx)(y.Q, {
                            text: E.intl.string(E.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var eU = n(401755);
function eP(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function eD(e) {
    let t,
        {
            invite: n,
            guildTemplate: l,
            giftCode: i,
            authBoxClassName: o,
            disableAutofocusOnDefaultForm: u,
            login: c,
            password: h,
            errors: N,
            loginSource: w,
            dismissedChooseAccount: R,
            setDismissedChooseAccount: T,
            conditionalMediationAbortController: k,
            onLoginChange: L,
            onPasswordChange: G,
            handleLogin: O,
            handleForgotPassword: F,
            handleGotoRegister: U,
        } = e,
        P = (0, s.bG)([eG.A], () => eG.A.getCountryCode()),
        D = (0, s.bG)([et.default], () => et.default.getLoginStatus()),
        B = (0, s.bG)([eC.A], () => eC.A.getHasLoggedInAccounts()),
        M = a.useCallback(
            (e) => {
                e_.default.track(_.HAw.LOGIN_SUCCESSFUL, {
                    source: _.mdB.QR_CODE,
                    login_source: w,
                    gift_code_sku_id: i?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [w, i],
        ),
        { handoff_token: V } = (0, I.parse)(window.location.search),
        H = j.Fr && j.KY && null != V,
        W = null == N.email && null != N.password,
        K = a.useRef(null),
        Q = a.useRef(null),
        $ = (0, d.A)(N);
    a.useEffect(() => {
        let e = (e) => null != N[e];
        null != $ && $ !== N && (e("password") ? Q.current?.focus() : (e("email") || e("login")) && K.current?.focus());
    }, [N, K, Q, $]),
        (t =
            null != n
                ? (0, r.jsx)("div", { className: x.S3, children: (0, r.jsx)(C.A, { invite: n }) })
                : null != i
                  ? (0, r.jsx)(b.A, { giftCode: i })
                  : (0, r.jsxs)("div", {
                        className: A.wx,
                        children: [
                            (0, r.jsx)(p.hE, { className: x.QB, children: E.intl.string(E.t["7fNJgA"]) }, "title"),
                            !1 === (0, en.isAndroidWeb)()
                                ? (0, r.jsx)(p.tK, { children: E.intl.string(E.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let Z = (0, r.jsxs)("div", {
        className: A.Eh,
        children: [
            B &&
                R &&
                (0, r.jsx)("div", {
                    className: A.AX,
                    children: (0, r.jsx)(f.$, {
                        onClick: () => T(!1),
                        variant: "secondary",
                        text: E.intl.string(E.t["1MrpWO"]),
                        icon: S.n,
                    }),
                }),
            t,
            (0, r.jsx)(g.F, {
                children: (0, r.jsxs)(p.eB, {
                    className: x.QX,
                    children: [
                        (0, r.jsx)(eO.A, {
                            alpha2: P.alpha2,
                            countryCode: P.code.split(" ")[0],
                            className: x.SX,
                            label: E.intl.string(E.t.tUjnxr),
                            error: eP("login", N) ?? eP("email", N),
                            onChange: L,
                            setRef: K,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: c,
                            autoFocus: !W && !H && !u,
                            required: !0,
                        }),
                        (0, r.jsx)(p.pd, {
                            label: E.intl.string(E.t["CIGa+7"]),
                            error: eP("password", N),
                            onChange: G,
                            name: "password",
                            type: "password",
                            setRef: Q,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: W && !H && !u,
                            value: h,
                            required: !0,
                        }),
                        (0, r.jsx)("div", {
                            className: m()(x.SX, x.a5),
                            children: (0, r.jsx)(y.Q, {
                                text: E.intl.string(E.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != K.current && K.current.focus(), F();
                                },
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: x.QB,
                            children: (0, r.jsx)(f.$, {
                                text: E.intl.string(E.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: D === _.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: x.a5,
                            children: [
                                (0, r.jsx)("span", { className: A.Qt, children: E.intl.string(E.t.tmE73r) }),
                                (0, r.jsx)("span", {
                                    className: A.Z8,
                                    children: (0, r.jsx)(y.Q, {
                                        text: E.intl.string(E.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: U,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === _.elq.RESOLVING
        ? (0, r.jsx)(eF, {
              authBoxClassName: o,
              country: P,
              login: c,
              password: h,
              onLoginChange: L,
              onPasswordChange: G,
              loginRef: K,
              passwordRef: Q,
          })
        : null != l
          ? l.state === eU.QB.RESOLVING
              ? (0, r.jsx)(eF, {
                    authBoxClassName: o,
                    country: P,
                    login: c,
                    password: h,
                    onLoginChange: L,
                    onPasswordChange: G,
                    loginRef: K,
                    passwordRef: Q,
                })
              : (0, r.jsx)(eh.A, {
                    onSubmit: O,
                    tag: "form",
                    className: m()(o, A.Sy),
                    children: () => [
                        (0, r.jsx)(em.A, { guildTemplate: l }, "template"),
                        (0, r.jsx)(a.Fragment, { children: Z }, "form-wrapper"),
                    ],
                })
          : B && !R
            ? (0, r.jsx)(eL, { onDismiss: () => T(!0) })
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(p.Ay, {
                          onSubmit: O,
                          tag: "form",
                          className: m()(o, { [A.M0]: H }),
                          expanded: !0,
                          children: (0, r.jsxs)(v.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  Z,
                                  (0, r.jsx)(ed, { onAuthenticateSuccess: M, conditionalMediationAbortController: k }),
                              ],
                          }),
                      }),
                      H && (0, r.jsx)(eb, {}),
                  ],
              });
}
var eB = n(572469);
function eM(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        l = (0, s.cf)(
            [et.default],
            () => ({ ticket: et.default.getMFATicket(), methods: et.default.getMFAMethods() }),
            [],
        ),
        i = a.useCallback(
            (e) => {
                let { mfaType: l, data: r, ticket: a } = e;
                return (
                    H._.dispatch(_.jej.WAVE_EMPHASIZE),
                    u.A.loginMFAv2({ code: r, ticket: a, mfaType: l, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, r.jsx)(p.Ay, {
        style: { padding: 0 },
        children: (0, r.jsx)(eB.t, {
            mfaFinish: i,
            mfaChallenge: l,
            onEarlyClose: () => {
                ep.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var eV = n(511815),
    eH = n(189213),
    eW = n(139033),
    eK = n(192308),
    eQ = n(557722),
    e$ = n(351671),
    eZ = n(15552),
    ez = n(212640),
    eX = n(952116),
    eq = n(491509),
    eJ = n(976860),
    eY = n(913612),
    e0 = n(210714),
    e1 = n(933924),
    e5 = n(115036),
    e2 = n(67480);
let e8 = (e) => n.g.location.assign(e);
function e3(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: l,
        location: h,
        redirectTo: m,
        transitionTo: g,
        authBoxClassName: f,
        loginSource: A,
        disableAutofocusOnDefaultForm: j,
    } = e;
    (0, eY.K)();
    let S = (0, s.bG)([et.default], () => et.default.isAuthenticated()),
        y = (0, s.bG)([e5.A], () => e5.A.isHandoffAvailable()),
        v = (0, s.bG)([et.default], () => et.default.getLoginStatus()),
        b = l?.skuId ?? null,
        C = (0, s.bG)([e2.A], () => (null != b ? e2.A.get(b) : null)),
        {
            checkingHandoff: w,
            redirecting: R,
            login: k,
            password: L,
            phoneVerifyError: G,
            dismissedChooseAccount: O,
            setDismissedChooseAccount: F,
            errors: U,
            conditionalMediationAbortController: P,
            loginSource: D,
            loginOrSSO: B,
            handleLogin: M,
            handleIPAuthorize: V,
            handlePasswordReset: W,
            handleForgotPassword: K,
            handleResendCode: Q,
            handleReset: $,
            handleCancelAccountDeletion: Z,
            handleGotoRegister: z,
            loginReset: X,
            onLoginChange: q,
            onPasswordChange: J,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: l,
                    handoffAvailable: i,
                    authenticated: s,
                    transitionTo: o,
                    redirectTo: c,
                    location: d,
                    loginSource: h,
                } = e,
                [m, g] = a.useState(() => i),
                [f, p] = a.useState(() => s),
                [A, x] = a.useState(""),
                [N, j] = a.useState(() => {
                    let e = null != d ? (0, I.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [S, y] = a.useState(""),
                [v, b] = a.useState(!1),
                [C, w] = a.useState(null),
                [R, k] = a.useState(!1),
                [L] = a.useState(() => new AbortController()),
                [G, O] = a.useState({});
            !m || i || s || g(!1);
            let F = a.useMemo(() => {
                    if (null != h) return h;
                    if (null != l) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != c ? (0, e$.Q)(c) : null;
                }, [h, l, n, t, c]),
                U = null != l ? l.skuId : null,
                P = a.useCallback(
                    (e) => {
                        let t = null != e ? (0, I.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != c)) {
                            if ((0, ez.RZ)(c)) return void (0, ez.NY)(c);
                            o(c);
                        } else if (null == t.service) o(_.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.SSO,
                                n = { ...t, token: et.default.getToken() };
                            window.location = `${e}?${(0, I.stringify)(n)}`;
                        }
                    },
                    [c, o],
                ),
                D = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? u.A.verifySSOToken("login").then(() => P(t)) : P(t));
                    },
                    [P],
                ),
                B = a.useCallback(() => {
                    L.abort("Login state reset"), O({}), u.A.loginReset();
                }, [L]),
                M = a.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            L.abort("Starting password login"),
                            H._.dispatch(_.jej.WAVE_EMPHASIZE),
                            O({});
                        try {
                            await u.A.login({
                                login: A + N,
                                password: S,
                                undelete: n ?? v,
                                source: F,
                                giftCodeSKUId: U,
                                invite: t,
                            });
                        } catch (e) {
                            O((0, eZ.p)(e));
                        }
                    },
                    [L, N, A, S, v, F, U, t],
                ),
                V = a.useCallback(
                    async (e) => {
                        let t = A + N;
                        O({});
                        try {
                            let { token: n } = await eQ.A.verifyPhone(t, e, !1);
                            await u.A.authorizeIPAddress(n), M();
                        } catch (e) {
                            null != e.body && null != e.body.message && w(e.body.message);
                        }
                    },
                    [A, N, M],
                ),
                W = a.useCallback(
                    async (e) => {
                        w(null);
                        try {
                            let { token: t } = await eQ.A.verifyPhone(A + N, e, !1);
                            o(_.BVt.RESET, { search: (0, I.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && w(e.body.message);
                        }
                    },
                    [A, N, o],
                ),
                K = a.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + N;
                        O({});
                        try {
                            H._.dispatch(_.jej.WAVE_EMPHASIZE);
                            let e = await u.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === eV.D.ONE_TIME_LOGIN
                                ? (0, eK.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: E.intl.string(E.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, r.jsx)(eH.Modal, {
                                          title: E.intl.string(E.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, r.jsx)(T.E, {
                                              variant: "text-md/normal",
                                              children: E.intl.string(E.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, eW.A)({
                                      title: E.intl.string(E.t.f5Pi7A),
                                      subtitle: E.intl.format(E.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            O((0, eZ.p)(e));
                        }
                    },
                    [A, N],
                ),
                Q = a.useCallback(() => {
                    eQ.A.resendCode(A + N);
                }, [A, N]),
                $ = a.useCallback((e) => {
                    null != e && e.preventDefault(), u.A.loginReset(), y(""), x(""), j(""), b(!1), g(!1), p(!1), O({});
                }, []),
                Z = a.useCallback(() => {
                    b(!0), M(void 0, { undelete: !0 });
                }, [M]),
                z = a.useCallback(() => {
                    let e,
                        r = null != d ? (0, I.parse)(d.search) : {};
                    "" !== N && (r.email = N),
                        null != t
                            ? ((r.mode = "register"), (e = _.BVt.INVITE(t.code)))
                            : null != l
                              ? ((r.mode = "register"), (e = _.BVt.GIFT_CODE(l.code)))
                              : null != n
                                ? (e = _.BVt.GUILD_TEMPLATE(n.code))
                                : null != c
                                  ? ((e = _.BVt.REGISTER), (r.redirect_to = c))
                                  : (e = _.BVt.REGISTER),
                        B(),
                        o(e, { search: (0, I.stringify)(r) }),
                        H._.dispatch(_.jej.WAVE_EMPHASIZE);
                }, [N, t, l, n, c, d, B, o]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: N,
                password: S,
                phoneVerifyError: C,
                dismissedChooseAccount: R,
                setDismissedChooseAccount: k,
                errors: G,
                conditionalMediationAbortController: L,
                loginSource: F,
                loginOrSSO: D,
                handleLogin: M,
                handleIPAuthorize: V,
                handlePasswordReset: W,
                handleForgotPassword: K,
                handleResendCode: Q,
                handleReset: $,
                handleCancelAccountDeletion: Z,
                handleGotoRegister: z,
                loginReset: B,
                onLoginChange: a.useCallback((e, t) => {
                    j(e), x(t);
                }, []),
                onPasswordChange: a.useCallback((e) => {
                    y(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: l,
            handoffAvailable: y,
            authenticated: S,
            transitionTo: g ?? e8,
            redirectTo: m,
            location: h,
            loginSource: A,
        });
    (0, i.Ay)(() => {
        y && !S ? (0, c.ST)() : S && B(S, h, !0),
            e_.default.track(
                _.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: D,
                    authenticated: S,
                    ...(null != C ? (0, eq.A)(C, !1, !1) : {}),
                    source: (0, eJ.PR)(),
                },
                { flush: !0 },
            ),
            S || (0, e1.a)({ abortController: P, loginSource: D, giftCodeSKUId: b }),
            u.A.getLocationMetadata(),
            (0, e0.d)("login");
    });
    let Y = (0, d.A)(S);
    if (
        (a.useEffect(() => {
            let e = w && (y || R);
            S && !1 === Y && !e && (P.abort("Transitioning to authenticated state"), B(S, h));
        }, [S, y, Y, R, w, P, B, h]),
        R || w)
    )
        return (0, r.jsx)(p.Ay, { children: (0, r.jsx)(o.y, {}) });
    if (y)
        return (0, r.jsxs)(p.Ay, {
            className: f,
            children: [
                (0, r.jsx)(p.CK, {}),
                (0, r.jsx)(p.hE, { className: x.QB, children: E.intl.string(E.t.S6RMNA) }),
                (0, r.jsx)(p.tK, { children: E.intl.string(E.t.YZiJbh) }),
            ],
        });
    switch (v) {
        case _.aUe.LOGGING_IN_MFA_SMS:
        case _.aUe.MFA_SMS_STEP:
        case _.aUe.LOGGING_IN_MFA:
        case _.aUe.MFA_STEP:
            return (0, r.jsx)(eM, { loginSource: D, giftCodeSKUId: b });
        case _.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case _.aUe.ACCOUNT_DISABLED:
            return (0, r.jsx)(N, { loginStatus: v, authBoxClassName: f, onSubmit: $, onCancelAccountDeletion: Z });
        case _.aUe.PHONE_IP_AUTHORIZATION:
            return (0, r.jsx)(p.Ay, {
                tag: "form",
                className: f,
                children: (0, r.jsx)(eX.A, {
                    title: E.intl.string(E.t.w55Oco),
                    subtitle: E.intl.format(E.t.CfRZBj, { onResendClick: Q }),
                    error: G,
                    onSubmit: V,
                    onCancel: X,
                }),
            });
        case _.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, r.jsx)(p.Ay, {
                tag: "form",
                className: f,
                children: (0, r.jsx)(eX.A, {
                    title: E.intl.string(E.t["+xqy3d"]),
                    subtitle: E.intl.format(E.t.ef4uZ7, { onResendClick: Q }),
                    error: G,
                    onSubmit: W,
                    onCancel: X,
                }),
            });
        case _.aUe.LOGGING_IN:
        case _.aUe.NONE:
        default:
            return (0, r.jsx)(eD, {
                invite: t,
                guildTemplate: n,
                giftCode: l,
                authBoxClassName: f,
                disableAutofocusOnDefaultForm: j,
                login: k,
                password: L,
                errors: U,
                loginSource: D,
                dismissedChooseAccount: O,
                setDismissedChooseAccount: F,
                conditionalMediationAbortController: P,
                onLoginChange: q,
                onPasswordChange: J,
                handleLogin: M,
                handleForgotPassword: K,
                handleGotoRegister: z,
            });
    }
}
