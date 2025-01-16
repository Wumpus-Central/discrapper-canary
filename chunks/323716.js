var i = r(610138);
var a = r(216116);
var s = r(78328);
var o = r(815648);
var l = r(47120);
var u = r(724458);
var c = r(653041);
var d = r(315314);
var f = r(203651);
var _ = r(544891),
    h = r(569611),
    p = r(547010),
    m = r(580189),
    g = r(397550),
    E = r(931619);
r(358085);
var v = r(960048),
    I = r(591759),
    T = r(303850),
    b = r(981631);
let y = ['https://cdn.discordapp.com/bad-domains/updated_hashes.json', 'https://cdn.discordapp.com/bad-domains/hashes.json'],
    S = new T.R();
function A(e) {
    let n = new URLSearchParams();
    n.append('query', '@http.x_client_trace_id:"'.concat(e, '"')), n.append('showAllSpans', 'true');
    let r = I.Z.toURLSafe('traces?'.concat(n.toString()), 'https://datadog.discord.tools/apm/');
    return null == r ? null : r.toString();
}
function N() {
    if (null == Intl.DateTimeFormat) return null;
    let e = Intl.DateTimeFormat();
    return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone;
}
let C = /\/api(\/v\d+)?\/science/;
function R(e) {
    let n = 10;
    return e.reduce((e, r) => (10 === n ? e.push(r) : e.push(''.concat(r, ';q=0.').concat(n)), (n = Math.max(n - 1, 1)), e), []).join(',');
}
(0, _.lg)({
    prepareRequest(e) {
        let { default: n } = r(314897),
            { default: i } = r(857192),
            { default: a } = r(706454),
            { default: s } = r(594174),
            { default: o } = r(626135),
            { isPlatformEmbedded: l } = r(358085);
        if ('/' === e.url[0]) {
            var u, c;
            (e.url = (0, _.K0)() + e.url), !('Authorization' in e.header) && !('authorization' in e.header) && e.set('Authorization', n.getToken());
            let r = o.getSuperPropertiesBase64();
            null != r && e.set('X-Super-Properties', r);
            let d = n.getFingerprint();
            if ((null != d && '' !== d && e.set('X-Fingerprint', d), l)) {
                let n = [];
                null != navigator && (n = ((u = [...navigator.languages]), u));
                let r = R(n);
                e.set('Accept-Language', r);
            }
            e.set('X-Discord-Locale', a.locale);
            let f = N();
            null != f && e.set('X-Discord-Timezone', f);
            let h = i.getDebugOptionsHeaderValue();
            if ((null != h && '' !== h && e.set('X-Debug-Options', h), i.isTracingRequests)) {
                let n = s.getCurrentUser(),
                    r = S.generate(null !== (c = null == n ? void 0 : n.id) && void 0 !== c ? c : '0');
                e.set('x-client-trace-id', r);
                try {
                    let n = new URL(e.url).pathname;
                    if (!C.test(n)) {
                        let i = A(r);
                        null !== i && console.debug('%c[tracing]%c %s %s\n%s', 'font-weight: bold', '', e.method, n, i);
                    }
                } catch (e) {
                    console.error('error while printing tracing log', e);
                }
            }
        }
        h.Hj('Network', 'Sending '.concat(e.method, ' to ').concat(e.url)),
            e.on('response', (n) => {
                let r = null != n && n.status >= 400 ? n.text : null,
                    i = null == r ? '' : 'and body: '.concat(r);
                h.Hj(
                    'Network',
                    'Completed '
                        .concat(e.method, ' to ')
                        .concat(e.url, ' with status: ')
                        .concat(null == n ? void 0 : n.status, ' ')
                        .concat(i)
                );
            }),
            e.on('error', (n, r) => {
                if (
                    (h.Hj(
                        'Network',
                        'Failed '
                            .concat(e.method, ' to ')
                            .concat(e.url, ' with status ')
                            .concat(null == n ? void 0 : n.status, ' and body: ')
                            .concat(null == r ? void 0 : r.text)
                    ),
                    null != n && 'parse' in n && n.parse)
                ) {
                    let r = '[FILTERED]';
                    if (y.includes(e.url)) {
                        var i, a;
                        r = null === (a = e.xhr) || void 0 === a ? void 0 : null === (i = a.responseText) || void 0 === i ? void 0 : i.slice(0, 1000);
                    }
                    v.Z.addBreadcrumb({
                        category: 'superagent',
                        message: 'Failed to parse HTTP response.',
                        data: {
                            method: e.method,
                            url: e.url,
                            responseText: r,
                            status: n.status
                        }
                    });
                }
            });
    },
    interceptResponse(e, n, i) {
        var a, s, o, l, u;
        return 400 === e.statusCode && (null === (a = e.body) || void 0 === a ? void 0 : a.captcha_key)
            ? (Promise.all([r.e('36514').then(r.bind(r, 475271)), r.e('31177').then(r.bind(r, 353250))])
                  .then((n) => {
                      let [{ default: r }, { extractCaptchaPropsFromResponse: i }] = n;
                      return r.showCaptchaAsync(i(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: r, captcha_rqtoken: i } = e,
                          a = { 'X-Captcha-Key': r };
                      null != i && (a['X-Captcha-Rqtoken'] = i), n(a);
                  })
                  .catch(i),
              !0)
            : 401 === e.statusCode && (null === (s = e.body) || void 0 === s ? void 0 : s.code) === b.evJ.MFA_REQUIRED && (null === (o = e.body) || void 0 === o ? void 0 : o.mfa)
              ? (Promise.all([r.e('52030'), r.e('85665')])
                    .then(r.bind(r, 24031))
                    .then((r) => {
                        let { openMFAModal: a } = r;
                        a(e.body.mfa, n, i);
                    })
                    .catch(i),
                !0)
              : (0, g.b)(e.statusCode, null === (l = e.body) || void 0 === l ? void 0 : l.code)
                ? (Promise.resolve()
                      .then(r.bind(r, 895886))
                      .then((e) => {
                          let { default: n } = e;
                          n();
                      }),
                  !1)
                : (0, p.b)(e.statusCode, null === (u = e.body) || void 0 === u ? void 0 : u.code)
                  ? (r
                        .e('76731')
                        .then(r.bind(r, 626892))
                        .then((n) => {
                            var r;
                            let { default: i } = n;
                            i(null === (r = e.body) || void 0 === r ? void 0 : r.guild_id);
                        }),
                    !1)
                  : ((0, m.X)(e) &&
                        r
                            .e('89715')
                            .then(r.bind(r, 707708))
                            .then((e) => {
                                let { handleBlockedByProxy: n } = e;
                                n();
                            }),
                    !1);
    }
}),
    (0, _.Jt)(async (e) => {
        if ((h.Hj('Network', 'Request to '.concat(e, ' failed, will retry.')), !E.Z.isOnline())) await E.Z.awaitOnline(), h.Hj('Network', 'Network detected online, retrying '.concat(e));
    });
