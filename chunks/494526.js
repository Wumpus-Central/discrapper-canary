(n.d(t, { Z: () => R }), n(388685), n(415506), n(49124));
var r = n(255367),
    i = n(73800),
    l = n(533126),
    s = n(261470),
    a = n(399606),
    o = n(544891),
    c = n(481060),
    u = n(893776),
    d = n(99690),
    h = n(937154),
    p = n(448986),
    g = n(388905),
    m = n(198993),
    f = n(710845),
    _ = n(314897),
    x = n(585483),
    b = n(358085),
    E = n(172517),
    v = n(51144),
    I = n(998502),
    j = n(981631),
    O = n(231338),
    y = n(388032),
    S = n(84879),
    N = n(20493);
let C = n(515695),
    A = new f.Z('LoginQRSocket');
function T(e) {
    let { text: t = '' } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            ((e.src = C), (e.onload = () => l(!0)), (e.onerror = () => l(!0)));
        }, [C]),
        i.useEffect(() => {
            n && c.uvj.announce(y.intl.string(y.t.j2p129));
        }, [n]),
        (0, r.jsx)('div', {
            className: S.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.ZP, {
                                  className: S.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, r.jsx)('div', {
                                  className: S.qrCodeOverlay,
                                  children: (0, r.jsx)('img', {
                                      src: C,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: S.qrCodeOverlay,
                          'aria-label': y.intl.string(y.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, r.jsx)(c.$jN, {
                              className: S.qrCode,
                              type: c.$jN.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let P = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function Z(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: s, isPasswordlessActive: a } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(T, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, r.jsx)(g.Dx, {
                        className: N.marginBottom8,
                        children: y.intl.string(y.t.UPiHaG)
                    }),
                    null != i ? (0, r.jsx)(P, { children: i }) : (0, r.jsx)(g.DK, { children: y.intl.format(y.t['Qq+A6u'], {}) }),
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.LARGE,
                        look: c.iLD.LINK,
                        color: c.Ttl.LINK,
                        disabled: a,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    b.isPlatformEmbedded && I.ZP.supportsFeature(j.eRX.WEBAUTHN)
                                        ? I.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                u.Z.authenticatePasswordless({
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
                    (0, r.jsx)(d.Z, {
                        className: S.qrAvatar,
                        user: e,
                        size: c.EFr.SIZE_120,
                        isMobile: !0,
                        status: O.Sk.ONLINE
                    }),
                    (0, r.jsx)(g.Dx, {
                        className: N.marginBottom8,
                        children: y.intl.string(y.t.apGCUV)
                    }),
                    (0, r.jsx)(g.DK, { children: y.intl.format(y.t.Cbl5JC, { username: ''.concat(v.ZP.getUserTag(e)) }) }),
                    (0, r.jsx)(c.zxk, {
                        look: c.zxk.Looks.BLANK,
                        color: c.zxk.Colors.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: n,
                        className: S.startOverButton,
                        children: y.intl.string(y.t.nOOhws)
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
        l = (0, a.e7)([_.default], () => _.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: d,
            cancel: g,
            handleFailure: m
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [a, o] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, h.Z)(),
                g = i.useMemo(() => new s.Z(1500, 30000), []),
                m = (0, p.Z)(() => {
                    (o({ step: 0 }), d ? n((e) => e + 1) : (A.info('document is not visible, will defer reconnection when document becomes visible.'), l(!0)));
                }),
                f = i.useCallback(() => {
                    (A.error('Could not complete QR code login, trying to restart with a new QR code.'), o({ step: 0 }), g.pending || g.fail(m));
                }, [m, g]);
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
                        h = !0;
                    function p() {
                        if (null != s) return s;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        h ? ((h = !1), i.send(JSON.stringify({ op: 'heartbeat' }))) : (l('heartbeat timeout, reconnecting.'), i.close(), f());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case 'nonce_proof': {
                                    let e = r.encrypted_nonce,
                                        t = await (0, E.qd)(p(), e);
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
                                    (g.succeed(), x.S.dispatch(j.CkL.WAVE_EMPHASIZE));
                                    let e = await (0, E.Pk)(p());
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
                                    (x.S.dispatch(j.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting ticket/cancel.'));
                                    let e = r.encrypted_user_payload;
                                    o({
                                        step: 3,
                                        user: await (0, E.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    (x.S.dispatch(j.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting finish/cancel.'));
                                    let e = r.encrypted_user_payload;
                                    o({
                                        step: 2,
                                        user: await (0, E.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    (x.S.dispatch(j.CkL.WAVE_EMPHASIZE), l('remote auth handshake finished.'));
                                    let t = r.encrypted_token;
                                    (o({ step: 5 }), e(await (0, E.FW)(p(), t)));
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
                                    h = !0;
                            }
                        }),
                        (i.onopen = async () => {
                            ((s = await (0, E.W_)()), (a = await (0, E.dK)(s)));
                            let e = await (0, E.Pk)(s);
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
                            (l('cleaning up'), (i.onopen = () => null), (i.onmessage = () => null), (i.onclose = () => null), (i.onerror = () => null), i.close(1000), g.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c));
                        }
                    );
                }, [m, e, t, g, f]),
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
        })(u.step);
    return (
        i.useEffect(() => {
            4 === u.step &&
                null != u.ticket &&
                o.tn
                    .post({
                        url: j.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: u.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, E.FW)(d, e.body.encrypted_token);
                                t(n);
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
                (0, r.jsx)('div', { className: S.verticalSeparator }),
                (0, r.jsx)(c.qBt, {
                    fillParent: !0,
                    className: S.qrLogin,
                    step: f,
                    steps: [0, 1],
                    children: (0, r.jsx)('div', {
                        className: S.qrLoginInner,
                        children: (0, r.jsx)(Z, {
                            state: u,
                            cancel: g,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: l
                        })
                    })
                })
            ]
        })
    );
}
