n.d(t, { Z: () => m }), n(47120);
var a = n(200651),
    r = n(192379),
    i = n(894582),
    c = n(29978),
    o = n(772848),
    s = n(286379),
    p = n(343817),
    d = n(797614),
    l = n(626135),
    h = n(109167),
    u = n(353250),
    f = n(599857),
    v = n(981631);
let m = (e) => {
    let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: m, onRender: y, onVerify: C, onError: E, onOpen: b, onClose: _, onChalExpired: R, size: x, userflow: g, ...w } = e,
        A = r.useRef(null),
        k = (0, h.H)('captcha'),
        S = (0, o.Z)(),
        [j, I] = r.useState(!1),
        N = r.useCallback(
            (e) => {
                l.default.track(v.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: S
                });
            },
            [S, t, n]
        ),
        O = r.useCallback(
            (e) => {
                d.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        L = r.useCallback(() => {
            if (t === p.hP.HCAPTCHA) {
                var e, n;
                null != m && '' !== m && null != A.current && (null === (e = A.current) || void 0 === e || e.setData({ rqdata: m })), 'invisible' === x && null != A.current && (null === (n = A.current) || void 0 === n || n.execute());
            }
        }, [m, A, x, t]),
        P = r.useCallback(() => {
            j || (N('initial-load'), O('initial-load'), I(!0)), L();
        }, [O, j, N, L]);
    r.useEffect(() => {
        L();
    }, [L]),
        r.useEffect(() => {
            P();
        }, [P]);
    let V = r.useCallback(() => {
            N('error'), O('error'), L(), null == E || E();
        }, [N, O, L, E]),
        T = r.useCallback(
            (e) => {
                N('verify'), O('verify'), C(e);
            },
            [O, C, N]
        ),
        Z = r.useCallback(() => {
            N('render'), (0, u.emitCaptchaDistributionMetric)(k, g), null == y || y();
        }, [k, y, N, g]),
        D = r.useCallback(() => {
            N('open'), O('open'), (0, u.emitCaptchaDistributionMetric)(k, g), null == b || b();
        }, [O, k, b, N, g]),
        M = r.useCallback(() => {
            N('close'), null == _ || _(), L();
        }, [_, N, L]),
        H = r.useCallback(() => {
            N('chal-expire'), null == R || R();
        }, [R, N]);
    return ((null == n || '' === n) && (n = v.OL7), t === p.hP.RECAPTCHA)
        ? (0, a.jsx)(c.Z, {
              ...w,
              onLoad: P,
              onRender: Z,
              onVerify: T,
              onError: V,
              sitekey: n
          })
        : t === p.hP.RECAPTCHA_ENTERPRISE
          ? (0, a.jsx)(f._, {
                ...w,
                onLoad: P,
                onRender: Z,
                onVerify: T,
                onError: V,
                sitekey: n,
                action: g
            })
          : t === p.hP.HCAPTCHA
            ? (0, a.jsx)(i.Z, {
                  ref: A,
                  ...w,
                  sitekey: n,
                  onLoad: P,
                  onError: V,
                  onVerify: T,
                  onChalExpired: H,
                  onOpen: D,
                  onClose: M,
                  size: x,
                  reCaptchaCompat: !1
              })
            : (0, a.jsx)(c.Z, {
                  ...w,
                  sitekey: n,
                  onLoad: P,
                  onRender: Z,
                  onVerify: T,
                  onError: V
              });
};
