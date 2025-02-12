n(610138), n(216116), n(78328), n(815648), n(47120), n(724458), n(653041), n(315314), n(309749), n(203651);
var i = n(544891),
    r = n(569611),
    a = n(547010),
    s = n(580189),
    o = n(397550),
    l = n(931619);
n(358085);
var u = n(960048),
    c = n(591759),
    d = n(303850),
    f = n(105713),
    _ = n(981631);
let p = ['https://cdn.discordapp.com/bad-domains/updated_hashes.json', 'https://cdn.discordapp.com/bad-domains/hashes.json'],
    h = new d.R();
function m(e) {
    let t = new URLSearchParams();
    t.append('query', '@http.x_client_trace_id:"'.concat(e, '"')), t.append('showAllSpans', 'true');
    let n = c.Z.toURLSafe('traces?'.concat(t.toString()), 'https://datadog.discord.tools/apm/');
    return null == n ? null : n.toString();
}
let g = /\/api(\/v\d+)?\/science/;
function E(e) {
    let t = 10;
    return e.reduce((e, n) => (10 === t ? e.push(n) : e.push(''.concat(n, ';q=0.').concat(t)), (t = Math.max(t - 1, 1)), e), []).join(',');
}
(0, i.lg)({
    prepareRequest(e) {
        let { default: t } = n(314897),
            { default: a } = n(857192),
            { default: s } = n(706454),
            { default: o } = n(594174),
            { default: l } = n(626135),
            { isPlatformEmbedded: c } = n(358085);
        if ('/' === e.url[0]) {
            var d, _;
            (e.url = (0, i.K0)() + e.url), 'Authorization' in e.header || 'authorization' in e.header || e.set('Authorization', t.getToken());
            let n = l.getSuperPropertiesBase64();
            null != n && e.set('X-Super-Properties', n);
            let r = t.getFingerprint();
            if ((null != r && '' !== r && e.set('X-Fingerprint', r), c)) {
                let t = [];
                null != navigator && (t = d = [...navigator.languages]);
                let n = E(t);
                e.set('Accept-Language', n);
            }
            e.set('X-Discord-Locale', s.locale);
            let u = (0, f.Z)();
            null != u && e.set('X-Discord-Timezone', u);
            let p = a.getDebugOptionsHeaderValue();
            if ((null != p && '' !== p && e.set('X-Debug-Options', p), a.isTracingRequests)) {
                let t = o.getCurrentUser(),
                    n = h.generate(null !== (_ = null == t ? void 0 : t.id) && void 0 !== _ ? _ : '0');
                e.set('x-client-trace-id', n);
                try {
                    let t = new URL(e.url).pathname;
                    if (!g.test(t)) {
                        let i = m(n);
                        null !== i && console.debug('%c[tracing]%c %s %s\n%s', 'font-weight: bold', '', e.method, t, i);
                    }
                } catch (e) {
                    console.error('error while printing tracing log', e);
                }
            }
        }
        r.Hj('Network', 'Sending '.concat(e.method, ' to ').concat(e.url)),
            e.on('response', (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    i = null == n ? '' : 'and body: '.concat(n);
                r.Hj(
                    'Network',
                    'Completed '
                        .concat(e.method, ' to ')
                        .concat(e.url, ' with status: ')
                        .concat(null == t ? void 0 : t.status, ' ')
                        .concat(i)
                );
            }),
            e.on('error', (t, n) => {
                if (
                    (r.Hj(
                        'Network',
                        'Failed '
                            .concat(e.method, ' to ')
                            .concat(e.url, ' with status ')
                            .concat(null == t ? void 0 : t.status, ' and body: ')
                            .concat(null == n ? void 0 : n.text)
                    ),
                    null != t && 'parse' in t && t.parse)
                ) {
                    let n = '[FILTERED]';
                    if (p.includes(e.url)) {
                        var i, a;
                        n = null === (a = e.xhr) || void 0 === a ? void 0 : null === (i = a.responseText) || void 0 === i ? void 0 : i.slice(0, 1000);
                    }
                    u.Z.addBreadcrumb({
                        category: 'superagent',
                        message: 'Failed to parse HTTP response.',
                        data: {
                            method: e.method,
                            url: e.url,
                            responseText: n,
                            status: t.status
                        }
                    });
                }
            });
    },
    interceptResponse(e, t, i) {
        var r, l, u, c, d;
        return 400 === e.statusCode && (null === (r = e.body) || void 0 === r ? void 0 : r.captcha_key)
            ? (Promise.all([n.e('36514').then(n.bind(n, 475271)), n.e('31177').then(n.bind(n, 353250))])
                  .then((t) => {
                      let [{ default: n }, { extractCaptchaPropsFromResponse: i }] = t;
                      return n.showCaptchaAsync(i(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: n, captcha_rqtoken: i } = e,
                          r = { 'X-Captcha-Key': n };
                      null != i && (r['X-Captcha-Rqtoken'] = i), t(r);
                  })
                  .catch(i),
              !0)
            : 401 === e.statusCode && (null === (l = e.body) || void 0 === l ? void 0 : l.code) === _.evJ.MFA_REQUIRED && (null === (u = e.body) || void 0 === u ? void 0 : u.mfa)
              ? (Promise.all([n.e('52030'), n.e('88029')])
                    .then(n.bind(n, 24031))
                    .then((n) => {
                        let { openMFAModal: r } = n;
                        r(e.body.mfa, t, i);
                    })
                    .catch(i),
                !0)
              : ((0, o.b)(e.statusCode, null === (c = e.body) || void 0 === c ? void 0 : c.code)
                    ? Promise.resolve()
                          .then(n.bind(n, 895886))
                          .then((e) => {
                              let { default: t } = e;
                              t();
                          })
                    : (0, a.b)(e.statusCode, null === (d = e.body) || void 0 === d ? void 0 : d.code)
                      ? n
                            .e('76731')
                            .then(n.bind(n, 626892))
                            .then((t) => {
                                var n;
                                let { default: i } = t;
                                i(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id);
                            })
                      : (0, s.X)(e) &&
                        n
                            .e('89715')
                            .then(n.bind(n, 707708))
                            .then((e) => {
                                let { handleBlockedByProxy: t } = e;
                                t();
                            }),
                !1);
    }
}),
    (0, i.Jt)(async (e) => {
        r.Hj('Network', 'Request to '.concat(e, ' failed, will retry.')), !l.Z.isOnline() && (await l.Z.awaitOnline(), r.Hj('Network', 'Network detected online, retrying '.concat(e)));
    });
