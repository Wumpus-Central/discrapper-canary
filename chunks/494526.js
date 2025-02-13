n.d(t, { Z: () => P }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    l = n(533126),
    a = n(261470),
    o = n(399606),
    s = n(544891),
    c = n(481060),
    d = n(893776),
    u = n(99690),
    h = n(937154),
    _ = n(448986),
    m = n(388905),
    g = n(198993),
    p = n(710845),
    f = n(314897),
    E = n(585483),
    x = n(358085),
    I = n(172517),
    v = n(51144),
    C = n(998502),
    N = n(981631),
    S = n(231338),
    T = n(388032),
    A = n(900838),
    b = n(483938);
let R = n(515695),
    Z = new p.Z('LoginQRSocket');
function O(e) {
    let { text: t = '' } = e,
        [n, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = R), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [R]),
        r.useEffect(() => {
            n && c.uvj.announce(T.intl.string(T.t.j2p129));
        }, [n]),
        (0, i.jsx)('div', {
            className: A.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.ZP, {
                                  className: A.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, i.jsx)('div', {
                                  className: A.qrCodeOverlay,
                                  children: (0, i.jsx)('img', {
                                      src: R,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: A.qrCodeOverlay,
                          'aria-label': T.intl.string(T.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, i.jsx)(c.$jN, {
                              className: A.qrCode,
                              type: c.$jN.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let j = (e) => {
    let { className: t, children: n } = e;
    return (0, i.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function L(e) {
    let { state: t, cancel: n, errorMessage: r, conditionalMediationAbortController: a, isPasswordlessActive: o } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, i.jsx)(m.Dx, {
                        className: b.marginBottom8,
                        children: T.intl.string(T.t.UPiHaG)
                    }),
                    null != r ? (0, i.jsx)(j, { children: r }) : (0, i.jsx)(m.DK, { children: T.intl.format(T.t['Qq+A6u'], {}) }),
                    (0, i.jsx)(c.zxk, {
                        size: c.PhG.LARGE,
                        look: c.iLD.LINK,
                        color: c.Ttl.LINK,
                        disabled: o,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    x.isPlatformEmbedded && C.ZP.supportsFeature(N.eRX.WEBAUTHN)
                                        ? C.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                d.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(a),
                        children: T.intl.string(T.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.Z, {
                        className: A.qrAvatar,
                        user: e,
                        size: c.EFr.SIZE_120,
                        isMobile: !0,
                        status: S.Sk.ONLINE
                    }),
                    (0, i.jsx)(m.Dx, {
                        className: b.marginBottom8,
                        children: T.intl.string(T.t.apGCUV)
                    }),
                    (0, i.jsx)(m.DK, { children: T.intl.format(T.t.Cbl5JC, { username: ''.concat(v.ZP.getUserTag(e)) }) }),
                    (0, i.jsx)(c.zxk, {
                        look: c.zxk.Looks.BLANK,
                        color: c.zxk.Colors.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: n,
                        className: A.startOverButton,
                        children: T.intl.string(T.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, i.jsx)(c.$jN, { type: c.$jN.Type.WANDERING_CUBES });
    }
}
function P(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        l = (0, o.e7)([f.default], () => f.default.getIsPasswordlessActive()),
        {
            state: d,
            rsaKeyPair: u,
            cancel: m,
            handleFailure: g
        } = (function (e) {
            let [t, n] = r.useState(0),
                [i, l] = r.useState(!1),
                [o, s] = r.useState({ step: 0 }),
                [c, d] = r.useState(null),
                u = (0, h.Z)(),
                m = r.useMemo(() => new a.Z(1500, 30000), []),
                g = (0, _.Z)(() => {
                    s({ step: 0 }), u ? n((e) => e + 1) : (Z.info('document is not visible, will defer reconnection when document becomes visible.'), l(!0));
                }),
                p = r.useCallback(() => {
                    Z.error('Could not complete QR code login, trying to restart with a new QR code.'), s({ step: 0 }), m.pending || m.fail(g);
                }, [g, m]);
            return (
                r.useEffect(() => {
                    u && i && 0 === o.step && (Z.info('reconnecting, now that document is visible'), l(!1), n((e) => e + 1));
                }, [o, u, i, l]),
                r.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        i = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        r = new WebSocket(i);
                    Z.info('[0ms] connecting to '.concat(i));
                    let l = (e) => Z.info('['.concat(n(), '] ').concat(e)),
                        a = null,
                        o = null,
                        c = null,
                        u = null,
                        h = !0;
                    function _() {
                        if (null != a) return a;
                        throw Error('No key pair set');
                    }
                    let f = () => {
                        h ? ((h = !1), r.send(JSON.stringify({ op: 'heartbeat' }))) : (l('heartbeat timeout, reconnecting.'), r.close(), p());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                i = JSON.parse(n);
                            switch (i.op) {
                                case 'nonce_proof': {
                                    let e = i.encrypted_nonce,
                                        t = await (0, I.qd)(_(), e);
                                    l('computed nonce proof'),
                                        r.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    m.succeed(), E.S.dispatch(N.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, I.Pk)(_());
                                    if (e !== i.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(i.fingerprint));
                                    l('handshake complete awaiting remote auth.'),
                                        s({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = i.ticket;
                                    null == e && p(),
                                        s({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    E.S.dispatch(N.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = i.encrypted_user_payload;
                                    s({
                                        step: 3,
                                        user: await (0, I.Rq)(_(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    E.S.dispatch(N.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting finish/cancel.');
                                    let e = i.encrypted_user_payload;
                                    s({
                                        step: 2,
                                        user: await (0, I.Rq)(_(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    E.S.dispatch(N.CkL.WAVE_EMPHASIZE), l('remote auth handshake finished.');
                                    let t = i.encrypted_token;
                                    s({ step: 5 }), e(await (0, I.FW)(_(), t));
                                    return;
                                }
                                case 'cancel':
                                    l('remote auth handshake cancelled.'), g();
                                    return;
                                case 'hello': {
                                    l('got hello, auth timeout='.concat(i.timeout_ms, 'ms'));
                                    let e = i.heartbeat_interval;
                                    u = setTimeout(
                                        () => {
                                            (u = null), f(), (c = setInterval(f, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    h = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (a = await (0, I.W_)()), (o = await (0, I.dK)(a));
                            let e = await (0, I.Pk)(a);
                            l('connected, handshaking with fingerprint: '.concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                d(a);
                        }),
                        (r.onclose = (e) => {
                            l('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), p();
                        }),
                        (r.onerror = (e) => {
                            l('disconnected, error: '.concat(JSON.stringify(e))), p();
                        }),
                        () => {
                            l('cleaning up'), (r.onopen = () => null), (r.onmessage = () => null), (r.onclose = () => null), (r.onerror = () => null), r.close(1000), m.cancel(), null != u && clearTimeout(u), null != c && clearInterval(c);
                        }
                    );
                }, [g, e, t, m, p]),
                {
                    state: o,
                    rsaKeyPair: c,
                    cancel: g,
                    handleFailure: p
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
        })(d.step);
    return (
        r.useEffect(() => {
            4 === d.step &&
                null != d.ticket &&
                s.tn
                    .post({
                        url: N.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: d.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != u)
                            try {
                                let n = await (0, I.FW)(u, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                g();
                            }
                        else g();
                    })
                    .catch(() => {
                        g();
                    });
        }, [d, t, u, g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { className: A.verticalSeparator }),
                (0, i.jsx)(c.qBt, {
                    fillParent: !0,
                    className: A.qrLogin,
                    step: p,
                    steps: [0, 1],
                    children: (0, i.jsx)('div', {
                        className: A.qrLoginInner,
                        children: (0, i.jsx)(L, {
                            state: d,
                            cancel: m,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: l
                        })
                    })
                })
            ]
        })
    );
}
