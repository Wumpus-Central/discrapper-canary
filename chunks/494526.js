n.d(t, { Z: () => R }), n(388685), n(415506), n(49124);
var r = n(200651),
    i = n(192379),
    l = n(533126),
    s = n(261470),
    o = n(399606),
    a = n(544891),
    c = n(481060),
    u = n(893776),
    d = n(99690),
    h = n(937154),
    g = n(448986),
    p = n(388905),
    f = n(198993),
    m = n(710845),
    _ = n(314897),
    x = n(585483),
    E = n(358085),
    b = n(172517),
    v = n(51144),
    j = n(998502),
    I = n(981631),
    O = n(231338),
    S = n(388032),
    N = n(84879),
    y = n(20493);
let C = n(515695),
    P = new m.Z('LoginQRSocket');
function Z(e) {
    let { text: t = '' } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = C), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [C]),
        i.useEffect(() => {
            n && c.uvj.announce(S.intl.string(S.t.j2p129));
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
                                      src: C,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: N.qrCodeOverlay,
                          'aria-label': S.intl.string(S.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, r.jsx)(c.$jN, {
                              className: N.qrCode,
                              type: c.$jN.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let A = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function T(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: s, isPasswordlessActive: o } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(Z, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, r.jsx)(p.Dx, {
                        className: y.marginBottom8,
                        children: S.intl.string(S.t.UPiHaG)
                    }),
                    null != i ? (0, r.jsx)(A, { children: i }) : (0, r.jsx)(p.DK, { children: S.intl.format(S.t['Qq+A6u'], {}) }),
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.LARGE,
                        look: c.iLD.LINK,
                        color: c.Ttl.LINK,
                        disabled: o,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    E.isPlatformEmbedded && j.ZP.supportsFeature(I.eRX.WEBAUTHN)
                                        ? j.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                u.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(s),
                        children: S.intl.string(S.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        className: N.qrAvatar,
                        user: e,
                        size: c.EFr.SIZE_120,
                        isMobile: !0,
                        status: O.Sk.ONLINE
                    }),
                    (0, r.jsx)(p.Dx, {
                        className: y.marginBottom8,
                        children: S.intl.string(S.t.apGCUV)
                    }),
                    (0, r.jsx)(p.DK, { children: S.intl.format(S.t.Cbl5JC, { username: ''.concat(v.ZP.getUserTag(e)) }) }),
                    (0, r.jsx)(c.zxk, {
                        look: c.zxk.Looks.BLANK,
                        color: c.zxk.Colors.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: n,
                        className: N.startOverButton,
                        children: S.intl.string(S.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(c.$jN, { type: c.$jN.Type.WANDERING_CUBES });
    }
}
function R(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        l = (0, o.e7)([_.default], () => _.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: d,
            cancel: p,
            handleFailure: f
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [o, a] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, h.Z)(),
                p = i.useMemo(() => new s.Z(1500, 30000), []),
                f = (0, g.Z)(() => {
                    a({ step: 0 }), d ? n((e) => e + 1) : (P.info('document is not visible, will defer reconnection when document becomes visible.'), l(!0));
                }),
                m = i.useCallback(() => {
                    P.error('Could not complete QR code login, trying to restart with a new QR code.'), a({ step: 0 }), p.pending || p.fail(f);
                }, [f, p]);
            return (
                i.useEffect(() => {
                    d && r && 0 === o.step && (P.info('reconnecting, now that document is visible'), l(!1), n((e) => e + 1));
                }, [o, d, r, l]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        r = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        i = new WebSocket(r);
                    P.info('[0ms] connecting to '.concat(r));
                    let l = (e) => P.info('['.concat(n(), '] ').concat(e)),
                        s = null,
                        o = null,
                        c = null,
                        d = null,
                        h = !0;
                    function g() {
                        if (null != s) return s;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        h ? ((h = !1), i.send(JSON.stringify({ op: 'heartbeat' }))) : (l('heartbeat timeout, reconnecting.'), i.close(), m());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case 'nonce_proof': {
                                    let e = r.encrypted_nonce,
                                        t = await (0, b.qd)(g(), e);
                                    l('computed nonce proof'),
                                        i.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    p.succeed(), x.S.dispatch(I.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, b.Pk)(g());
                                    if (e !== r.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(r.fingerprint));
                                    l('handshake complete awaiting remote auth.'),
                                        a({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = r.ticket;
                                    null == e && m(),
                                        a({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    x.S.dispatch(I.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = r.encrypted_user_payload;
                                    a({
                                        step: 3,
                                        user: await (0, b.Rq)(g(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    x.S.dispatch(I.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting finish/cancel.');
                                    let e = r.encrypted_user_payload;
                                    a({
                                        step: 2,
                                        user: await (0, b.Rq)(g(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    x.S.dispatch(I.CkL.WAVE_EMPHASIZE), l('remote auth handshake finished.');
                                    let t = r.encrypted_token;
                                    a({ step: 5 }), e(await (0, b.FW)(g(), t));
                                    return;
                                }
                                case 'cancel':
                                    l('remote auth handshake cancelled.'), f();
                                    return;
                                case 'hello': {
                                    l('got hello, auth timeout='.concat(r.timeout_ms, 'ms'));
                                    let e = r.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), _(), (c = setInterval(_, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    h = !0;
                            }
                        }),
                        (i.onopen = async () => {
                            (s = await (0, b.W_)()), (o = await (0, b.dK)(s));
                            let e = await (0, b.Pk)(s);
                            l('connected, handshaking with fingerprint: '.concat(e)),
                                i.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                u(s);
                        }),
                        (i.onclose = (e) => {
                            l('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), m();
                        }),
                        (i.onerror = (e) => {
                            l('disconnected, error: '.concat(JSON.stringify(e))), m();
                        }),
                        () => {
                            l('cleaning up'), (i.onopen = () => null), (i.onmessage = () => null), (i.onclose = () => null), (i.onerror = () => null), i.close(1000), p.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c);
                        }
                    );
                }, [f, e, t, p, m]),
                {
                    state: o,
                    rsaKeyPair: c,
                    cancel: f,
                    handleFailure: m
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
        })(u.step);
    return (
        i.useEffect(() => {
            4 === u.step &&
                null != u.ticket &&
                a.tn
                    .post({
                        url: I.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: u.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, b.FW)(d, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                f();
                            }
                        else f();
                    })
                    .catch(() => {
                        f();
                    });
        }, [u, t, d, f]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', { className: N.verticalSeparator }),
                (0, r.jsx)(c.qBt, {
                    fillParent: !0,
                    className: N.qrLogin,
                    step: m,
                    steps: [0, 1],
                    children: (0, r.jsx)('div', {
                        className: N.qrLoginInner,
                        children: (0, r.jsx)(T, {
                            state: u,
                            cancel: p,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: l
                        })
                    })
                })
            ]
        })
    );
}
