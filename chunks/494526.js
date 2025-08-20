n.d(t, { Z: () => w }), n(388685), n(415506), n(49124);
var r = n(951288),
    i = n(647438),
    l = n(533126),
    o = n(261470),
    s = n(399606),
    a = n(544891),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    h = n(99690),
    f = n(937154),
    p = n(448986),
    g = n(388905),
    m = n(198993),
    _ = n(710845),
    x = n(314897),
    v = n(585483),
    E = n(358085),
    b = n(172517),
    j = n(51144),
    I = n(998502),
    N = n(981631),
    O = n(231338),
    y = n(388032),
    S = n(819286),
    C = n(197571);
let Z = n(515695),
    A = new _.Z("LoginQRSocket");
function T(e) {
    let { text: t = "" } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = Z), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [Z]),
        i.useEffect(() => {
            n && u.uvj.announce(y.intl.string(y.t.j2p129));
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
                                      src: Z,
                                      alt: "",
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: S.qrCodeOverlay,
                          "aria-label": y.intl.string(y.t.BUGkVF),
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
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: o, isPasswordlessActive: s } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(T, { text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : "" }),
                    (0, r.jsx)(g.Dx, {
                        className: C.marginBottom8,
                        children: y.intl.string(y.t.UPiHaG),
                    }),
                    null != i
                        ? (0, r.jsx)(P, { children: i })
                        : (0, r.jsx)(g.DK, { children: y.intl.format(y.t["Qq+A6u"], {}) }),
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.LARGE,
                        look: c.iL.LINK,
                        color: c.Tt.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    E.isPlatformEmbedded && I.ZP.supportsFeature(N.eRX.WEBAUTHN)
                                        ? I.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                d.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e,
                                }).catch(() => {});
                            })(o),
                        children: y.intl.string(y.t["/kpMDg"]),
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
                        children: y.intl.string(y.t.apGCUV),
                    }),
                    (0, r.jsx)(g.DK, {
                        children: y.intl.format(y.t.Cbl5JC, { username: "".concat(j.ZP.getUserTag(e)) }),
                    }),
                    (0, r.jsx)(c.zx, {
                        look: c.zx.Looks.BLANK,
                        color: c.zx.Colors.LINK,
                        size: c.zx.Sizes.MIN,
                        onClick: n,
                        className: S.startOverButton,
                        children: y.intl.string(y.t.nOOhws),
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
                [s, a] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, f.Z)(),
                h = i.useMemo(() => new o.Z(1500, 30000), []),
                g = (0, p.Z)(() => {
                    a({ step: 0 }),
                        d
                            ? n((e) => e + 1)
                            : (A.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                m = i.useCallback(() => {
                    A.error("Could not complete QR code login, trying to restart with a new QR code."),
                        a({ step: 0 }),
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
                        o = null,
                        s = null,
                        c = null,
                        d = !0;
                    function f() {
                        if (null != l) return l;
                        throw Error("No key pair set");
                    }
                    let p = () => {
                        d
                            ? ((d = !1), r.send(JSON.stringify({ op: "heartbeat" })))
                            : (i("heartbeat timeout, reconnecting."), r.close(), m());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                l = JSON.parse(n);
                            switch (l.op) {
                                case "nonce_proof": {
                                    let e = l.encrypted_nonce,
                                        t = await (0, b.qd)(f(), e);
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
                                    h.succeed(), v.S.dispatch(N.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, b.Pk)(f());
                                    if (e !== l.fingerprint)
                                        throw Error("bad fingerprint ".concat(e, " !== ").concat(l.fingerprint));
                                    i("handshake complete awaiting remote auth."),
                                        a({
                                            step: 1,
                                            fingerprint: e,
                                        });
                                    return;
                                }
                                case "pending_login": {
                                    let e = l.ticket;
                                    null == e && m(),
                                        a({
                                            step: 4,
                                            ticket: e,
                                        });
                                    return;
                                }
                                case "pending_ticket": {
                                    v.S.dispatch(N.CkL.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = l.encrypted_user_payload;
                                    a({
                                        step: 3,
                                        user: await (0, b.Rq)(f(), e),
                                    });
                                    return;
                                }
                                case "pending_finish": {
                                    v.S.dispatch(N.CkL.WAVE_EMPHASIZE),
                                        i("remote auth handshake started, awaiting finish/cancel.");
                                    let e = l.encrypted_user_payload;
                                    a({
                                        step: 2,
                                        user: await (0, b.Rq)(f(), e),
                                    });
                                    return;
                                }
                                case "finish": {
                                    v.S.dispatch(N.CkL.WAVE_EMPHASIZE), i("remote auth handshake finished.");
                                    let t = l.encrypted_token;
                                    a({ step: 5 }), e(await (0, b.FW)(f(), t));
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
                                            (c = null), p(), (s = setInterval(p, e));
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
                            (l = await (0, b.W_)()), (o = await (0, b.dK)(l));
                            let e = await (0, b.Pk)(l);
                            i("connected, handshaking with fingerprint: ".concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: "init",
                                        encoded_public_key: o,
                                    }),
                                ),
                                u(l);
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
                                h.cancel(),
                                null != c && clearTimeout(c),
                                null != s && clearInterval(s);
                        }
                    );
                }, [g, e, t, h, m]),
                {
                    state: s,
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
        })(c.step);
    return (
        i.useEffect(() => {
            4 === c.step &&
                null != c.ticket &&
                a.tn
                    .post({
                        url: N.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: c.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, b.FW)(d, e.body.encrypted_token);
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
                    step: m,
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
