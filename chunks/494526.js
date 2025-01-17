n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120),
    n(411104);
var i,
    r,
    s,
    l,
    o = n(200651),
    a = n(192379),
    c = n(533126),
    d = n(261470),
    u = n(399606),
    h = n(544891),
    f = n(481060),
    g = n(893776),
    m = n(99690),
    p = n(937154),
    x = n(448986),
    _ = n(388905),
    E = n(198993),
    I = n(710845),
    v = n(314897),
    N = n(585483),
    C = n(358085),
    b = n(172517),
    T = n(51144),
    Z = n(998502),
    S = n(981631),
    A = n(231338),
    j = n(388032),
    R = n(360860),
    P = n(232186);
((s = i || (i = {}))[(s.INITIALIZING = 0)] = 'INITIALIZING'), (s[(s.PENDING_REMOTE_INIT = 1)] = 'PENDING_REMOTE_INIT'), (s[(s.PENDING_FINISH = 2)] = 'PENDING_FINISH'), (s[(s.PENDING_TICKET = 3)] = 'PENDING_TICKET'), (s[(s.PENDING_LOGIN = 4)] = 'PENDING_LOGIN'), (s[(s.FINISH = 5)] = 'FINISH'), ((l = r || (r = {}))[(l.QR_CODE = 0)] = 'QR_CODE'), (l[(l.CONFIRM = 1)] = 'CONFIRM');
let L = n(515695),
    O = new I.Z('LoginQRSocket');
function y(e) {
    let { text: t = '' } = e,
        [n, i] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = new Image();
            (e.src = L), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
        }, [L]),
        a.useEffect(() => {
            n && f.AccessibilityAnnouncer.announce(j.intl.string(j.t.j2p129));
        }, [n]),
        (0, o.jsx)('div', {
            className: R.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(E.ZP, {
                                  className: R.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, o.jsx)('div', {
                                  className: R.qrCodeOverlay,
                                  children: (0, o.jsx)('img', {
                                      src: L,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, o.jsx)('div', {
                          className: R.qrCodeOverlay,
                          'aria-label': j.intl.string(j.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, o.jsx)(f.Spinner, {
                              className: R.qrCode,
                              type: f.Spinner.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let D = (e) => {
    let { className: t, children: n } = e;
    return (0, o.jsx)(f.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function k(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: r, isPasswordlessActive: s } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(y, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, o.jsx)(_.Dx, {
                        className: P.marginBottom8,
                        children: j.intl.string(j.t.UPiHaG)
                    }),
                    null != i ? (0, o.jsx)(D, { children: i }) : (0, o.jsx)(_.DK, { children: j.intl.format(j.t['Qq+A6u'], {}) }),
                    (0, o.jsx)(f.Button, {
                        size: f.ButtonSizes.LARGE,
                        look: f.ButtonLooks.LINK,
                        color: f.ButtonColors.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    C.isPlatformEmbedded && Z.ZP.supportsFeature(S.eRX.WEBAUTHN)
                                        ? Z.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, c.wz)(JSON.parse(e));
                                              return (0, c.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                g.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(r),
                        children: j.intl.string(j.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(m.Z, {
                        className: R.qrAvatar,
                        user: e,
                        size: f.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: A.Sk.ONLINE
                    }),
                    (0, o.jsx)(_.Dx, {
                        className: P.marginBottom8,
                        children: j.intl.string(j.t.apGCUV)
                    }),
                    (0, o.jsx)(_.DK, { children: j.intl.format(j.t.Cbl5JC, { username: ''.concat(T.ZP.getUserTag(e)) }) }),
                    (0, o.jsx)(f.Button, {
                        look: f.Button.Looks.BLANK,
                        color: f.Button.Colors.LINK,
                        size: f.Button.Sizes.MIN,
                        onClick: n,
                        className: R.startOverButton,
                        children: j.intl.string(j.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, o.jsx)(f.Spinner, { type: f.Spinner.Type.WANDERING_CUBES });
    }
}
function w(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        i = (0, u.e7)([v.default], () => v.default.getIsPasswordlessActive()),
        {
            state: r,
            rsaKeyPair: s,
            cancel: l,
            handleFailure: c
        } = (function (e) {
            let [t, n] = a.useState(0),
                [i, r] = a.useState(!1),
                [s, l] = a.useState({ step: 0 }),
                [o, c] = a.useState(null),
                u = (0, p.Z)(),
                h = a.useMemo(() => new d.Z(1500, 30000), []),
                f = (0, x.Z)(() => {
                    l({ step: 0 }), u ? n((e) => e + 1) : (O.info('document is not visible, will defer reconnection when document becomes visible.'), r(!0));
                }),
                g = a.useCallback(() => {
                    O.error('Could not complete QR code login, trying to restart with a new QR code.'), l({ step: 0 }), !h.pending && h.fail(f);
                }, [f, h]);
            return (
                a.useEffect(() => {
                    u && i && 0 === s.step && (O.info('reconnecting, now that document is visible'), r(!1), n((e) => e + 1));
                }, [s, u, i, r]),
                a.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        i = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        r = new WebSocket(i);
                    O.info('[0ms] connecting to '.concat(i));
                    let s = (e) => O.info('['.concat(n(), '] ').concat(e)),
                        o = null,
                        a = null,
                        d = null,
                        u = null,
                        m = !0;
                    function p() {
                        if (null != o) return o;
                        throw Error('No key pair set');
                    }
                    let x = () => {
                        m ? ((m = !1), r.send(JSON.stringify({ op: 'heartbeat' }))) : (s('heartbeat timeout, reconnecting.'), r.close(), g());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                i = JSON.parse(n);
                            switch (i.op) {
                                case 'nonce_proof': {
                                    let e = i.encrypted_nonce,
                                        t = await (0, b.qd)(p(), e);
                                    s('computed nonce proof'),
                                        r.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    h.succeed(), N.S.dispatch(S.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, b.Pk)(p());
                                    if (e !== i.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(i.fingerprint));
                                    s('handshake complete awaiting remote auth.'),
                                        l({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = i.ticket;
                                    null == e && g(),
                                        l({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    N.S.dispatch(S.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = i.encrypted_user_payload;
                                    l({
                                        step: 3,
                                        user: await (0, b.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    N.S.dispatch(S.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting finish/cancel.');
                                    let e = i.encrypted_user_payload;
                                    l({
                                        step: 2,
                                        user: await (0, b.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    N.S.dispatch(S.CkL.WAVE_EMPHASIZE), s('remote auth handshake finished.');
                                    let t = i.encrypted_token;
                                    l({ step: 5 }), e(await (0, b.FW)(p(), t));
                                    return;
                                }
                                case 'cancel':
                                    s('remote auth handshake cancelled.'), f();
                                    return;
                                case 'hello': {
                                    s('got hello, auth timeout='.concat(i.timeout_ms, 'ms'));
                                    let e = i.heartbeat_interval;
                                    u = setTimeout(
                                        () => {
                                            (u = null), x(), (d = setInterval(x, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    m = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (o = await (0, b.W_)()), (a = await (0, b.dK)(o));
                            let e = await (0, b.Pk)(o);
                            s('connected, handshaking with fingerprint: '.concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: a
                                    })
                                ),
                                c(o);
                        }),
                        (r.onclose = (e) => {
                            s('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), g();
                        }),
                        (r.onerror = (e) => {
                            s('disconnected, error: '.concat(JSON.stringify(e))), g();
                        }),
                        () => {
                            s('cleaning up'), (r.onopen = () => null), (r.onmessage = () => null), (r.onclose = () => null), (r.onerror = () => null), r.close(1000), h.cancel(), null != u && clearTimeout(u), null != d && clearInterval(d);
                        }
                    );
                }, [f, e, t, h, g]),
                {
                    state: s,
                    rsaKeyPair: o,
                    cancel: f,
                    handleFailure: g
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
        })(r.step);
    return (
        a.useEffect(() => {
            4 === r.step &&
                null != r.ticket &&
                h.tn
                    .post({
                        url: S.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: r.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != s)
                            try {
                                let n = await (0, b.FW)(s, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                c();
                            }
                        else c();
                    })
                    .catch(() => {
                        c();
                    });
        }, [r, t, s, c]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)('div', { className: R.verticalSeparator }),
                (0, o.jsx)(f.Sequencer, {
                    fillParent: !0,
                    className: R.qrLogin,
                    step: g,
                    steps: [0, 1],
                    children: (0, o.jsx)('div', {
                        className: R.qrLoginInner,
                        children: (0, o.jsx)(k, {
                            state: r,
                            cancel: l,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: i
                        })
                    })
                })
            ]
        })
    );
}
