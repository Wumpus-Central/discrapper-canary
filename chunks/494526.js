n.d(t, { Z: () => R }), n(388685), n(415506), n(49124);
var r = n(54381),
    i = n(473749),
    s = n(533126),
    a = n(261470),
    l = n(399606),
    o = n(544891),
    c = n(481060),
    u = n(893776),
    d = n(99690),
    h = n(937154),
    f = n(448986),
    g = n(388905),
    m = n(198993),
    p = n(710845),
    x = n(314897),
    _ = n(585483),
    E = n(358085),
    v = n(172517),
    b = n(51144),
    j = n(998502),
    I = n(981631),
    N = n(231338),
    y = n(388032),
    S = n(246470),
    C = n(478411);
let T = n(515695),
    O = new p.Z("LoginQRSocket");
function A(e) {
    let { text: t = "" } = e,
        [n, s] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = T), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [T]),
        i.useEffect(() => {
            n && c.uvj.announce(y.intl.string(y.t.j2p125));
        }, [n]),
        (0, r.jsx)("div", {
            className: S.qrCodeContainer,
            children:
                "" !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.ZP, {
                                  className: S.qrCode,
                                  size: 160,
                                  text: t,
                              }),
                              (0, r.jsx)("div", {
                                  className: S.qrCodeOverlay,
                                  children: (0, r.jsx)("img", {
                                      src: T,
                                      alt: "",
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: S.qrCodeOverlay,
                          "aria-label": y.intl.string(y.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(c.$jN, {
                              className: S.qrCode,
                              type: c.$jN.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let Z = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-feedback-critical",
        className: t,
        children: n,
    });
};
function P(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: a, isPasswordlessActive: l } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A, { text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : "" }),
                    (0, r.jsx)(g.Dx, {
                        className: C.marginBottom8,
                        children: y.intl.string(y.t.UPiHaL),
                    }),
                    null != i
                        ? (0, r.jsx)(Z, { children: i })
                        : (0, r.jsx)(g.DK, { children: y.intl.format(y.t["Qq+A6i"], {}) }),
                    (0, r.jsx)(c.Kqy, {
                        padding: 8,
                        align: "center",
                        children: (0, r.jsx)(c.Avr, {
                            text: y.intl.string(y.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () =>
                                (function (e) {
                                    let t =
                                        E.isPlatformEmbedded && j.ZP.supportsFeature(I.eRX.WEBAUTHN)
                                            ? j.ZP.webAuthnAuthenticate
                                            : (e) => {
                                                  let t = (0, s.wz)(JSON.parse(e));
                                                  return (0, s.U2)(t).then((e) => JSON.stringify(e));
                                              };
                                    u.Z.authenticatePasswordless({
                                        authenticateFunc: t,
                                        conditionalMediationAbortController: e,
                                    }).catch(() => {});
                                })(a),
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
                    (0, r.jsx)(d.Z, {
                        className: S.qrAvatar,
                        user: e,
                        size: c.EFr.SIZE_120,
                        isMobile: !0,
                        status: N.Sk.ONLINE,
                    }),
                    (0, r.jsx)(g.Dx, {
                        className: C.marginBottom8,
                        children: y.intl.string(y.t.apGCUT),
                    }),
                    (0, r.jsx)(g.DK, {
                        children: y.intl.format(y.t.Cbl5JK, { username: "".concat(b.ZP.getUserTag(e)) }),
                    }),
                    (0, r.jsx)("div", {
                        className: S.startOverButton,
                        children: (0, r.jsx)(c.Avr, {
                            text: y.intl.string(y.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(c.$jN, { type: c.$jN.Type.WANDERING_CUBES });
    }
}
function R(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        s = (0, l.e7)([x.default], () => x.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: d,
            cancel: g,
            handleFailure: m,
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, s] = i.useState(!1),
                [l, o] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, h.Z)(),
                g = i.useMemo(() => new a.Z(1500, 30000), []),
                m = (0, f.Z)(() => {
                    o({ step: 0 }),
                        d
                            ? n((e) => e + 1)
                            : (O.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              s(!0));
                }),
                p = i.useCallback(() => {
                    O.error("Could not complete QR code login, trying to restart with a new QR code."),
                        o({ step: 0 }),
                        g.pending || g.fail(m);
                }, [m, g]);
            return (
                i.useEffect(() => {
                    d &&
                        r &&
                        0 === l.step &&
                        (O.info("reconnecting, now that document is visible"), s(!1), n((e) => e + 1));
                }, [l, d, r, s]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = "".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2");
                    n.startsWith("//") && (n = "wss:".concat(n));
                    let r = new WebSocket(n);
                    O.info("[0ms] connecting to ".concat(n));
                    let i = (e) => O.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
                        s = null,
                        a = null,
                        l = null,
                        c = null,
                        d = !0;
                    function h() {
                        if (null != s) return s;
                        throw Error("No key pair set");
                    }
                    let f = () => {
                        d
                            ? ((d = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                            : (i("heartbeat timeout, reconnecting."), r.close(), p());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                s = JSON.parse(n);
                            switch (s.op) {
                                case "nonce_proof": {
                                    let e = s.encrypted_nonce,
                                        t = await (0, v.qd)(h(), e);
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
                                    g.succeed(), _.S.dispatch(I.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, v.Pk)(h());
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
                                    null == e && p(),
                                        o({
                                            step: 4,
                                            ticket: e,
                                        });
                                    return;
                                }
                                case "pending_ticket": {
                                    _.S.dispatch(I.CkL.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = s.encrypted_user_payload;
                                    o({
                                        step: 3,
                                        user: await (0, v.Rq)(h(), e),
                                    });
                                    return;
                                }
                                case "pending_finish": {
                                    _.S.dispatch(I.CkL.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting finish/cancel.");
                                    let e = s.encrypted_user_payload;
                                    o({
                                        step: 2,
                                        user: await (0, v.Rq)(h(), e),
                                    });
                                    return;
                                }
                                case "finish": {
                                    _.S.dispatch(I.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                                    let t = s.encrypted_token;
                                    o({ step: 5 }), e(await (0, v.FW)(h(), t), await (0, v.Pk)(h()));
                                    return;
                                }
                                case "cancel":
                                    i("remote auth handshake cancelled."), m();
                                    return;
                                case "hello": {
                                    i("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                                    let e = s.heartbeat_interval;
                                    c = setTimeout(
                                        () => {
                                            (c = null), f(), (l = setInterval(f, e));
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
                            (s = await (0, v.W_)()), (a = await (0, v.dK)(s));
                            let e = await (0, v.Pk)(s);
                            i("connected, handshaking with fingerprint: ".concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: "init",
                                        encoded_public_key: a,
                                    }),
                                ),
                                u(s);
                        }),
                        (r.onclose = (e) => {
                            i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), p();
                        }),
                        (r.onerror = (e) => {
                            i("disconnected, error: ".concat(JSON.stringify(e))), p();
                        }),
                        () => {
                            i("cleaning up"),
                                (r.onopen = () => null),
                                (r.onmessage = () => null),
                                (r.onclose = () => null),
                                (r.onerror = () => null),
                                r.close(1000),
                                g.cancel(),
                                null != c && clearTimeout(c),
                                null != l && clearInterval(l);
                        }
                    );
                }, [m, e, t, g, p]),
                {
                    state: l,
                    rsaKeyPair: c,
                    cancel: m,
                    handleFailure: p,
                }
            );
        })(t),
        p = (function (e) {
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
                o.tn
                    .post({
                        url: I.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: u.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, v.FW)(d, e.body.encrypted_token),
                                    r = await (0, v.Pk)(d);
                                t(n, r);
                            } catch (e) {
                                m();
                            }
                        else m();
                    })
                    .catch(() => {
                        m();
                    });
        }, [u, t, d, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { className: S.verticalSeparator }),
                (0, r.jsx)(c.qBt, {
                    fillParent: !0,
                    className: S.qrLogin,
                    step: p,
                    steps: [0, 1],
                    children: (0, r.jsx)("div", {
                        className: S.qrLoginInner,
                        children: (0, r.jsx)(P, {
                            state: u,
                            cancel: g,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: s,
                        }),
                    }),
                }),
            ],
        })
    );
}
