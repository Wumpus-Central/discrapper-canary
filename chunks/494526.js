n.d(t, { Z: () => w }), n(388685), n(415506), n(49124);
var r = n(255367),
    i = n(73800),
    l = n(533126),
    o = n(261470),
    s = n(399606),
    a = n(544891),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    h = n(99690),
    p = n(937154),
    f = n(448986),
    m = n(388905),
    g = n(198993),
    _ = n(710845),
    x = n(314897),
    b = n(585483),
    E = n(358085),
    v = n(172517),
    j = n(51144),
    I = n(998502),
    O = n(981631),
    S = n(231338),
    N = n(388032),
    y = n(749537),
    C = n(881488);
let A = n(515695),
    T = new _.Z("LoginQRSocket");
function Z(e) {
    let { text: t = "" } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = A), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [A]),
        i.useEffect(() => {
            n && u.uvj.announce(N.intl.string(N.t.j2p129));
        }, [n]),
        (0, r.jsx)("div", {
            className: y.qrCodeContainer,
            children:
                "" !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.ZP, {
                                  className: y.qrCode,
                                  size: 160,
                                  text: t,
                              }),
                              (0, r.jsx)("div", {
                                  className: y.qrCodeOverlay,
                                  children: (0, r.jsx)("img", {
                                      src: A,
                                      alt: "",
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: y.qrCodeOverlay,
                          "aria-label": N.intl.string(N.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, r.jsx)(u.$jN, {
                              className: y.qrCode,
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
                    (0, r.jsx)(Z, { text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : "" }),
                    (0, r.jsx)(m.Dx, {
                        className: C.marginBottom8,
                        children: N.intl.string(N.t.UPiHaG),
                    }),
                    null != i
                        ? (0, r.jsx)(P, { children: i })
                        : (0, r.jsx)(m.DK, { children: N.intl.format(N.t["Qq+A6u"], {}) }),
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.LARGE,
                        look: c.iL.LINK,
                        color: c.Tt.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    E.isPlatformEmbedded && I.ZP.supportsFeature(O.eRX.WEBAUTHN)
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
                        className: y.qrAvatar,
                        user: e,
                        size: u.EFr.SIZE_120,
                        isMobile: !0,
                        status: S.Sk.ONLINE,
                    }),
                    (0, r.jsx)(m.Dx, {
                        className: C.marginBottom8,
                        children: N.intl.string(N.t.apGCUV),
                    }),
                    (0, r.jsx)(m.DK, {
                        children: N.intl.format(N.t.Cbl5JC, { username: "".concat(j.ZP.getUserTag(e)) }),
                    }),
                    (0, r.jsx)(c.zx, {
                        look: c.zx.Looks.BLANK,
                        color: c.zx.Colors.LINK,
                        size: c.zx.Sizes.MIN,
                        onClick: n,
                        className: y.startOverButton,
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
            handleFailure: m,
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [s, a] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, p.Z)(),
                h = i.useMemo(() => new o.Z(1500, 30000), []),
                m = (0, f.Z)(() => {
                    a({ step: 0 }),
                        d
                            ? n((e) => e + 1)
                            : (T.info(
                                  "document is not visible, will defer reconnection when document becomes visible.",
                              ),
                              l(!0));
                }),
                g = i.useCallback(() => {
                    T.error("Could not complete QR code login, trying to restart with a new QR code."),
                        a({ step: 0 }),
                        h.pending || h.fail(m);
                }, [m, h]);
            return (
                i.useEffect(() => {
                    d &&
                        r &&
                        0 === s.step &&
                        (T.info("reconnecting, now that document is visible"), l(!1), n((e) => e + 1));
                }, [s, d, r, l]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = () => "".concat(Date.now() - t, "ms"),
                        r = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                        i = new WebSocket(r);
                    T.info("[0ms] connecting to ".concat(r));
                    let l = (e) => T.info("[".concat(n(), "] ").concat(e)),
                        o = null,
                        s = null,
                        c = null,
                        d = null,
                        p = !0;
                    function f() {
                        if (null != o) return o;
                        throw Error("No key pair set");
                    }
                    let _ = () => {
                        p
                            ? ((p = !1), i.send(JSON.stringify({ op: "heartbeat" })))
                            : (l("heartbeat timeout, reconnecting."), i.close(), g());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case "nonce_proof": {
                                    let e = r.encrypted_nonce,
                                        t = await (0, v.qd)(f(), e);
                                    l("computed nonce proof"),
                                        i.send(
                                            JSON.stringify({
                                                op: "nonce_proof",
                                                nonce: t,
                                            }),
                                        );
                                    return;
                                }
                                case "pending_remote_init": {
                                    h.succeed(), b.S.dispatch(O.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, v.Pk)(f());
                                    if (e !== r.fingerprint)
                                        throw Error("bad fingerprint ".concat(e, " !== ").concat(r.fingerprint));
                                    l("handshake complete awaiting remote auth."),
                                        a({
                                            step: 1,
                                            fingerprint: e,
                                        });
                                    return;
                                }
                                case "pending_login": {
                                    let e = r.ticket;
                                    null == e && g(),
                                        a({
                                            step: 4,
                                            ticket: e,
                                        });
                                    return;
                                }
                                case "pending_ticket": {
                                    b.S.dispatch(O.CkL.WAVE_EMPHASIZE),
                                        l("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = r.encrypted_user_payload;
                                    a({
                                        step: 3,
                                        user: await (0, v.Rq)(f(), e),
                                    });
                                    return;
                                }
                                case "pending_finish": {
                                    b.S.dispatch(O.CkL.WAVE_EMPHASIZE),
                                        l("remote auth handshake started, awaiting finish/cancel.");
                                    let e = r.encrypted_user_payload;
                                    a({
                                        step: 2,
                                        user: await (0, v.Rq)(f(), e),
                                    });
                                    return;
                                }
                                case "finish": {
                                    b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l("remote auth handshake finished.");
                                    let t = r.encrypted_token;
                                    a({ step: 5 }), e(await (0, v.FW)(f(), t));
                                    return;
                                }
                                case "cancel":
                                    l("remote auth handshake cancelled."), m();
                                    return;
                                case "hello": {
                                    l("got hello, auth timeout=".concat(r.timeout_ms, "ms"));
                                    let e = r.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), _(), (c = setInterval(_, e));
                                        },
                                        Math.floor(e * Math.random()),
                                    );
                                    return;
                                }
                                case "heartbeat_ack":
                                    p = !0;
                            }
                        }),
                        (i.onopen = async () => {
                            (o = await (0, v.W_)()), (s = await (0, v.dK)(o));
                            let e = await (0, v.Pk)(o);
                            l("connected, handshaking with fingerprint: ".concat(e)),
                                i.send(
                                    JSON.stringify({
                                        op: "init",
                                        encoded_public_key: s,
                                    }),
                                ),
                                u(o);
                        }),
                        (i.onclose = (e) => {
                            l("disconnected, code: ".concat(e.code, " ").concat(e.reason)), g();
                        }),
                        (i.onerror = (e) => {
                            l("disconnected, error: ".concat(JSON.stringify(e))), g();
                        }),
                        () => {
                            l("cleaning up"),
                                (i.onopen = () => null),
                                (i.onmessage = () => null),
                                (i.onclose = () => null),
                                (i.onerror = () => null),
                                i.close(1000),
                                h.cancel(),
                                null != d && clearTimeout(d),
                                null != c && clearInterval(c);
                        }
                    );
                }, [m, e, t, h, g]),
                {
                    state: s,
                    rsaKeyPair: c,
                    cancel: m,
                    handleFailure: g,
                }
            );
        })(t),
        g = (function (e) {
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
                        url: O.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: c.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, v.FW)(d, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                m();
                            }
                        else m();
                    })
                    .catch(() => {
                        m();
                    });
        }, [c, t, d, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { className: y.verticalSeparator }),
                (0, r.jsx)(u.qBt, {
                    fillParent: !0,
                    className: y.qrLogin,
                    step: g,
                    steps: [0, 1],
                    children: (0, r.jsx)("div", {
                        className: y.qrLoginInner,
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
