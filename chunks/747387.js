n.d(t, { Z: () => v }), n(47120);
var a = n(200651),
    r = n(192379),
    i = n(894582),
    c = n(29978),
    o = n(772848),
    s = n(286379),
    p = n(343817),
    d = n(797614),
    l = n(626135),
    h = n(353250),
    u = n(599857),
    f = n(981631);
let v = (e) => {
    let { captchaService: t = p.hP.RECAPTCHA, sitekey: n, rqdata: v, onRender: m, onVerify: y, onError: C, onOpen: E, onClose: _, onChalExpired: b, size: R, userflow: x, ...g } = e,
        w = r.useRef(null),
        A = (0, o.Z)(),
        [k, S] = r.useState(!1),
        j = r.useCallback(
            (e) => {
                l.default.track(f.rMx.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: A
                });
            },
            [A, t, n]
        ),
        I = r.useCallback(
            (e) => {
                d.Z.increment({
                    name: s.V.CAPTCHA_EVENT,
                    tags: ['event_name:'.concat(e), 'captcha_service:'.concat(t)]
                });
            },
            [t]
        ),
        N = r.useCallback(() => {
            if (t === p.hP.HCAPTCHA) {
                var e, n;
                null != v && '' !== v && null != w.current && (null === (e = w.current) || void 0 === e || e.setData({ rqdata: v })), 'invisible' === R && null != w.current && (null === (n = w.current) || void 0 === n || n.execute());
            }
        }, [v, w, R, t]),
        O = r.useCallback(() => {
            k || (j('initial-load'), I('initial-load'), S(!0)), N();
        }, [I, k, j, N]);
    r.useEffect(() => {
        N();
    }, [N]),
        r.useEffect(() => {
            O();
        }, [O]);
    let L = r.useCallback(() => {
            j('error'), I('error'), N(), null == C || C();
        }, [j, I, N, C]),
        P = r.useCallback(
            (e) => {
                j('verify'), I('verify'), y(e);
            },
            [I, y, j]
        ),
        V = r.useCallback(() => {
            j('render'), (0, h.emitCaptchaDistributionMetric)(x), null == m || m();
        }, [m, j, x]),
        T = r.useCallback(() => {
            j('open'), I('open'), (0, h.emitCaptchaDistributionMetric)(x), null == E || E();
        }, [I, E, j, x]),
        Z = r.useCallback(() => {
            j('close'), null == _ || _(), N();
        }, [_, j, N]),
        D = r.useCallback(() => {
            j('chal-expire'), null == b || b();
        }, [b, j]);
    return ((null == n || '' === n) && (n = f.OL7), t === p.hP.RECAPTCHA)
        ? (0, a.jsx)(c.Z, {
              ...g,
              onLoad: O,
              onRender: V,
              onVerify: P,
              onError: L,
              sitekey: n
          })
        : t === p.hP.RECAPTCHA_ENTERPRISE
          ? (0, a.jsx)(u._, {
                ...g,
                onLoad: O,
                onRender: V,
                onVerify: P,
                onError: L,
                sitekey: n,
                action: x
            })
          : t === p.hP.HCAPTCHA
            ? (0, a.jsx)(i.Z, {
                  ref: w,
                  ...g,
                  sitekey: n,
                  onLoad: O,
                  onError: L,
                  onVerify: P,
                  onChalExpired: D,
                  onOpen: T,
                  onClose: Z,
                  size: R,
                  reCaptchaCompat: !1
              })
            : (0, a.jsx)(c.Z, {
                  ...g,
                  sitekey: n,
                  onLoad: O,
                  onRender: V,
                  onVerify: P,
                  onError: L
              });
};
