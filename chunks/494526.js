(n.d(t, { Z: () => w }), n(388685), n(415506), n(49124));
var r = n(255367),
    i = n(73800),
    l = n(533126),
    s = n(261470),
    a = n(399606),
    o = n(544891),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    h = n(99690),
    p = n(937154),
    g = n(448986),
    m = n(388905),
    f = n(198993),
    _ = n(710845),
    x = n(314897),
    b = n(585483),
    E = n(358085),
    v = n(172517),
    I = n(51144),
    j = n(998502),
    O = n(981631),
    S = n(231338),
    y = n(388032),
    N = n(84879),
    C = n(20493);
let T = n(515695),
    A = new _.Z('LoginQRSocket');
function P(e) {
    let { text: t = '' } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            ((e.src = T), (e.onload = () => l(!0)), (e.onerror = () => l(!0)));
        }, [T]),
        i.useEffect(() => {
            n && u.uvj.announce(y.intl.string(y.t.j2p129));
        }, [n]),
        (0, r.jsx)('div', {
            className: N.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.ZP, {
                                  className: N.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, r.jsx)('div', {
                                  className: N.qrCodeOverlay,
                                  children: (0, r.jsx)('img', {
                                      src: T,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: N.qrCodeOverlay,
                          'aria-label': y.intl.string(y.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, r.jsx)(u.$jN, {
                              className: N.qrCode,
                              type: u.$jN.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let Z = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(u.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function R(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: s, isPasswordlessActive: a } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(P, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, r.jsx)(m.Dx, {
                        className: C.marginBottom8,
                        children: y.intl.string(y.t.UPiHaG)
                    }),
                    null != i ? (0, r.jsx)(Z, { children: i }) : (0, r.jsx)(m.DK, { children: y.intl.format(y.t['Qq+A6u'], {}) }),
                    (0, r.jsx)(c.zx, {
                        size: c.Ph.LARGE,
                        look: c.iL.LINK,
                        color: c.Tt.LINK,
                        disabled: a,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    E.isPlatformEmbedded && j.ZP.supportsFeature(O.eRX.WEBAUTHN)
                                        ? j.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                d.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(s),
                        children: y.intl.string(y.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(h.Z, {
                        className: N.qrAvatar,
                        user: e,
                        size: u.EFr.SIZE_120,
                        isMobile: !0,
                        status: S.Sk.ONLINE
                    }),
                    (0, r.jsx)(m.Dx, {
                        className: C.marginBottom8,
                        children: y.intl.string(y.t.apGCUV)
                    }),
                    (0, r.jsx)(m.DK, { children: y.intl.format(y.t.Cbl5JC, { username: ''.concat(I.ZP.getUserTag(e)) }) }),
                    (0, r.jsx)(c.zx, {
                        look: c.zx.Looks.BLANK,
                        color: c.zx.Colors.LINK,
                        size: c.zx.Sizes.MIN,
                        onClick: n,
                        className: N.startOverButton,
                        children: y.intl.string(y.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(u.$jN, { type: u.$jN.Type.WANDERING_CUBES });
    }
}
function w(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        l = (0, a.e7)([x.default], () => x.default.getIsPasswordlessActive()),
        {
            state: c,
            rsaKeyPair: d,
            cancel: h,
            handleFailure: m
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [a, o] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, p.Z)(),
                h = i.useMemo(() => new s.Z(1500, 30000), []),
                m = (0, g.Z)(() => {
                    (o({ step: 0 }), d ? n((e) => e + 1) : (A.info('document is not visible, will defer reconnection when document becomes visible.'), l(!0)));
                }),
                f = i.useCallback(() => {
                    (A.error('Could not complete QR code login, trying to restart with a new QR code.'), o({ step: 0 }), h.pending || h.fail(m));
                }, [m, h]);
            return (
                i.useEffect(() => {
                    d && r && 0 === a.step && (A.info('reconnecting, now that document is visible'), l(!1), n((e) => e + 1));
                }, [a, d, r, l]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        r = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        i = new WebSocket(r);
                    A.info('[0ms] connecting to '.concat(r));
                    let l = (e) => A.info('['.concat(n(), '] ').concat(e)),
                        s = null,
                        a = null,
                        c = null,
                        d = null,
                        p = !0;
                    function g() {
                        if (null != s) return s;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        p ? ((p = !1), i.send(JSON.stringify({ op: 'heartbeat' }))) : (l('heartbeat timeout, reconnecting.'), i.close(), f());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case 'nonce_proof': {
                                    let e = r.encrypted_nonce,
                                        t = await (0, v.qd)(g(), e);
                                    (l('computed nonce proof'),
                                        i.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        ));
                                    return;
                                }
                                case 'pending_remote_init': {
                                    (h.succeed(), b.S.dispatch(O.CkL.WAVE_EMPHASIZE));
                                    let e = await (0, v.Pk)(g());
                                    if (e !== r.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(r.fingerprint));
                                    (l('handshake complete awaiting remote auth.'),
                                        o({
                                            step: 1,
                                            fingerprint: e
                                        }));
                                    return;
                                }
                                case 'pending_login': {
                                    let e = r.ticket;
                                    (null == e && f(),
                                        o({
                                            step: 4,
                                            ticket: e
                                        }));
                                    return;
                                }
                                case 'pending_ticket': {
                                    (b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting ticket/cancel.'));
                                    let e = r.encrypted_user_payload;
                                    o({
                                        step: 3,
                                        user: await (0, v.Rq)(g(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    (b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting finish/cancel.'));
                                    let e = r.encrypted_user_payload;
                                    o({
                                        step: 2,
                                        user: await (0, v.Rq)(g(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    (b.S.dispatch(O.CkL.WAVE_EMPHASIZE), l('remote auth handshake finished.'));
                                    let t = r.encrypted_token;
                                    (o({ step: 5 }), e(await (0, v.FW)(g(), t)));
                                    return;
                                }
                                case 'cancel':
                                    (l('remote auth handshake cancelled.'), m());
                                    return;
                                case 'hello': {
                                    l('got hello, auth timeout='.concat(r.timeout_ms, 'ms'));
                                    let e = r.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            ((d = null), _(), (c = setInterval(_, e)));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    p = !0;
                            }
                        }),
                        (i.onopen = async () => {
                            ((s = await (0, v.W_)()), (a = await (0, v.dK)(s)));
                            let e = await (0, v.Pk)(s);
                            (l('connected, handshaking with fingerprint: '.concat(e)),
                                i.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: a
                                    })
                                ),
                                u(s));
                        }),
                        (i.onclose = (e) => {
                            (l('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), f());
                        }),
                        (i.onerror = (e) => {
                            (l('disconnected, error: '.concat(JSON.stringify(e))), f());
                        }),
                        () => {
                            (l('cleaning up'), (i.onopen = () => null), (i.onmessage = () => null), (i.onclose = () => null), (i.onerror = () => null), i.close(1000), h.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c));
                        }
                    );
                }, [m, e, t, h, f]),
                {
                    state: a,
                    rsaKeyPair: c,
                    cancel: m,
                    handleFailure: f
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
                        url: O.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: c.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
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
                (0, r.jsx)('div', { className: N.verticalSeparator }),
                (0, r.jsx)(u.qBt, {
                    fillParent: !0,
                    className: N.qrLogin,
                    step: f,
                    steps: [0, 1],
                    children: (0, r.jsx)('div', {
                        className: N.qrLoginInner,
                        children: (0, r.jsx)(R, {
                            state: c,
                            cancel: h,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: l
                        })
                    })
                })
            ]
        })
    );
}
