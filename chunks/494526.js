n.d(t, { Z: () => w }), n(388685), n(415506), n(49124);
var r = n(255367),
    i = n(73800),
    l = n(533126),
    a = n(261470),
    s = n(399606),
    o = n(544891),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    h = n(99690),
    p = n(937154),
    m = n(448986),
    g = n(388905),
    f = n(198993),
    _ = n(710845),
    x = n(314897),
    b = n(585483),
    v = n(358085),
    E = n(172517),
    j = n(51144),
    I = n(998502),
    y = n(981631),
    O = n(231338),
    N = n(388032),
    S = n(819286),
    C = n(197571);
let T = n(515695),
    A = new _.Z("LoginQRSocket");
function Z(e) {
    let { text: t = "" } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = T), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [T]),
        i.useEffect(() => {
            n && u.uvj.announce(N.intl.string(N.t.j2p129));
        }, [n]),
        (0, r.jsx)("div", {
            className: S.qrCodeContainer,
            children:
                "" !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.ZP, {
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
                          "aria-label": N.intl.string(N.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(u.$jN, {
                              className: S.qrCode,
                              type: u.$jN.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let P = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-danger",
        className: t,
        children: n,
    });
};
function R(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: a, isPasswordlessActive: s } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Z, { text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : "" }),
                    (0, r.jsx)(g.Dx, {
                        className: C.marginBottom8,
                        children: N.intl.string(N.t.UPiHaG),
                    }),
                    null != i
                        ? (0, r.jsx)(P, { children: i })
                        : (0, r.jsx)(g.DK, { children: N.intl.format(N.t["Qq+A6u"], {}) }),
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.LARGE,
                        look: c.iL.LINK,
                        color: c.Tt.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    v.isPlatformEmbedded && I.ZP.supportsFeature(y.eRX.WEBAUTHN)
                                        ? I.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                d.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e,
                                }).catch(() => {});
                            })(a),
                        children: N.intl.string(N.t["/kpMDg"]),
                    }),
                ],
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.Z, {
                        className: S.qrAvatar,
                        user: e,
                        size: u.EFr.SIZE_120,
                        isMobile: !0,
                        status: O.Sk.ONLINE,
                    }),
                    (0, r.jsx)(g.Dx, {
                        className: C.marginBottom8,
                        children: N.intl.string(N.t.apGCUV),
                    }),
                    (0, r.jsx)(g.DK, {
                        children: N.intl.format(N.t.Cbl5JC, { username: "".concat(j.ZP.getUserTag(e)) }),
                    }),
                    (0, r.jsx)(c.zx, {
                        look: c.zx.Looks.BLANK,
                        color: c.zx.Colors.LINK,
                        size: c.zx.Sizes.MIN,
                        onClick: n,
                        className: S.startOverButton,
                        children: N.intl.string(N.t.nOOhws),
                    }),
                ],
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(u.$jN, { type: u.$jN.Type.WANDERING_CUBES });
    }
}
function w(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        l = (0, s.e7)([x.default], () => x.default.getIsPasswordlessActive()),
        {
            state: c,
            rsaKeyPair: d,
            cancel: h,
            handleFailure: g,
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [s, o] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, p.Z)(),
                h = i.useMemo(() => new a.Z(1500, 30000), []),
                g = (0, m.Z)(() => {
                    o({ step: 0 }),
                        d
                            ? n((e) => e + 1)
                            : (A.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                f = i.useCallback(() => {
                    A.error("Could not complete QR code login, trying to restart with a new QR code."),
                        o({ step: 0 }),
                        h.pending || h.fail(g);
                }, [g, h]);
            return (
                i.useEffect(() => {
                    d &&
                        r &&
                        0 === s.step &&
                        (A.info("reconnecting, now that document is visible"), l(!1), n((e) => e + 1));
                }, [s, d, r, l]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                        r = new WebSocket(n);
                    A.info("[0ms] connecting to ".concat(n));
                    let i = (e) => A.info("[".concat("".concat(Date.now() - t, "ms"), "] ").concat(e)),
                        l = null,
                        a = null,
                        s = null,
                        c = null,
                        d = !0;
                    function p() {
                        if (null != l) return l;
                        throw Error("No key pair set");
                    }
                    let m = () => {
                        d
                            ? ((d = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                            : (i("heartbeat timeout, reconnecting."), r.close(), f());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                l = JSON.parse(n);
                            switch (l.op) {
                                case "nonce_proof": {
                                    let e = l.encrypted_nonce,
                                        t = await (0, E.qd)(p(), e);
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
                                    h.succeed(), b.S.dispatch(y.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, E.Pk)(p());
                                    if (e !== l.fingerprint)
                                        throw Error("bad fingerprint ".concat(e, " !== ").concat(l.fingerprint));
                                    i("handshake complete awaiting remote auth."),
                                        o({
                                            step: 1,
                                            fingerprint: e,
                                        });
                                    return;
                                }
                                case "pending_login": {
                                    let e = l.ticket;
                                    null == e && f(),
                                        o({
                                            step: 4,
                                            ticket: e,
                                        });
                                    return;
                                }
                                case "pending_ticket": {
                                    b.S.dispatch(y.CkL.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = l.encrypted_user_payload;
                                    o({
                                        step: 3,
                                        user: await (0, E.Rq)(p(), e),
                                    });
                                    return;
                                }
                                case "pending_finish": {
                                    b.S.dispatch(y.CkL.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting finish/cancel.");
                                    let e = l.encrypted_user_payload;
                                    o({
                                        step: 2,
                                        user: await (0, E.Rq)(p(), e),
                                    });
                                    return;
                                }
                                case "finish": {
                                    b.S.dispatch(y.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                                    let t = l.encrypted_token;
                                    o({ step: 5 }), e(await (0, E.FW)(p(), t));
                                    return;
                                }
                                case "cancel":
                                    i("remote auth handshake cancelled."), g();
                                    return;
                                case "hello": {
                                    i("got hello, auth timeout=".concat(l.timeout_ms, "ms"));
                                    let e = l.heartbeat_interval;
                                    c = setTimeout(
                                        () => {
                                            (c = null), m(), (s = setInterval(m, e));
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
                            (l = await (0, E.W_)()), (a = await (0, E.dK)(l));
                            let e = await (0, E.Pk)(l);
                            i("connected, handshaking with fingerprint: ".concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: "init",
                                        encoded_public_key: a,
                                    }),
                                ),
                                u(l);
                        }),
                        (r.onclose = (e) => {
                            i("disconnected, code: ".concat(e.code, " ").concat(e.reason)), f();
                        }),
                        (r.onerror = (e) => {
                            i("disconnected, error: ".concat(JSON.stringify(e))), f();
                        }),
                        () => {
                            i("cleaning up"),
                                (r.onopen = () => null),
                                (r.onmessage = () => null),
                                (r.onclose = () => null),
                                (r.onerror = () => null),
                                r.close(1000),
                                h.cancel(),
                                null != c && clearTimeout(c),
                                null != s && clearInterval(s);
                        }
                    );
                }, [g, e, t, h, f]),
                {
                    state: s,
                    rsaKeyPair: c,
                    cancel: g,
                    handleFailure: f,
                }
            );
        })(t),
        f = (function (e) {
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
        })(c.step);
    return (
        i.useEffect(() => {
            4 === c.step &&
                null != c.ticket &&
                o.tn
                    .post({
                        url: y.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: c.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, E.FW)(d, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                g();
                            }
                        else g();
                    })
                    .catch(() => {
                        g();
                    });
        }, [c, t, d, g]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { className: S.verticalSeparator }),
                (0, r.jsx)(u.qBt, {
                    fillParent: !0,
                    className: S.qrLogin,
                    step: f,
                    steps: [0, 1],
                    children: (0, r.jsx)("div", {
                        className: S.qrLoginInner,
                        children: (0, r.jsx)(R, {
                            state: c,
                            cancel: h,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: l,
                        }),
                    }),
                }),
            ],
        })
    );
}
