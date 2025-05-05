n(65234), n(111804), n(490233), n(97749), n(388685), n(539854), n(190126), n(368063), n(35282), n(203651);
var r = n(544891),
    i = n(844889),
    o = n(569611),
    a = n(547010),
    s = n(580189),
    l = n(397550),
    c = n(931619);
n(358085);
var u = n(960048),
    d = n(591759),
    f = n(303850),
    _ = n(105713),
    p = n(981631);
let h = ['https://cdn.discordapp.com/bad-domains/updated_hashes.json', 'https://cdn.discordapp.com/bad-domains/hashes.json'],
    m = new f.R();
function g(e) {
    let t = new URLSearchParams();
    t.append('query', '@http.x_client_trace_id:"'.concat(e, '"')), t.append('showAllSpans', 'true');
    let n = d.Z.toURLSafe('traces?'.concat(t.toString()), 'https://datadog.discord.tools/apm/');
    return null == n ? null : n.toString();
}
let E = /\/api(\/v\d+)?\/science/;
function b(e) {
    let t = 10;
    return e.reduce((e, n) => (10 === t ? e.push(n) : e.push(''.concat(n, ';q=0.').concat(t)), (t = Math.max(t - 1, 1)), e), []).join(',');
}
(0, r.lg)({
    prepareRequest(e) {
        let { default: t } = n(314897),
            { default: a } = n(857192),
            { default: s } = n(706454),
            { default: l } = n(594174),
            { default: c } = n(626135),
            { isPlatformEmbedded: d } = n(358085);
        if ('/' === e.url[0]) {
            var f, p;
            (e.url = (0, r.K0)() + e.url), 'Authorization' in e.header || 'authorization' in e.header || e.set('Authorization', t.getToken()), (0, i.hn)();
            let n = c.getSuperPropertiesBase64();
            null != n && e.set('X-Super-Properties', n);
            let o = t.getFingerprint();
            if ((null != o && '' !== o && e.set('X-Fingerprint', o), d)) {
                let t = [];
                null != navigator && (t = ((f = [...navigator.languages]), f));
                let n = b(t);
                e.set('Accept-Language', n);
            }
            e.set('X-Discord-Locale', s.locale);
            let u = (0, _.Z)();
            null != u && e.set('X-Discord-Timezone', u);
            let h = a.getDebugOptionsHeaderValue();
            if ((null != h && '' !== h && e.set('X-Debug-Options', h), a.isTracingRequests)) {
                let t = l.getCurrentUser(),
                    n = m.generate(null != (p = null == t ? void 0 : t.id) ? p : '0');
                e.set('x-client-trace-id', n);
                try {
                    let t = new URL(e.url).pathname;
                    if (!E.test(t)) {
                        let r = g(n);
                        null !== r && console.debug('%c[tracing]%c %s %s\n%s', 'font-weight: bold', '', e.method, t, r);
                    }
                } catch (e) {
                    console.error('error while printing tracing log', e);
                }
            }
        }
        o.Hj('Network', 'Sending '.concat(e.method, ' to ').concat(e.url)),
            e.on('response', (t) => {
                let n = null != t && t.status >= 400 ? t.text : null,
                    r = null == n ? '' : 'and body: '.concat(n);
                o.Hj(
                    'Network',
                    'Completed '
                        .concat(e.method, ' to ')
                        .concat(e.url, ' with status: ')
                        .concat(null == t ? void 0 : t.status, ' ')
                        .concat(r)
                );
            }),
            e.on('error', (t, n) => {
                if (
                    (o.Hj(
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
                    if (h.includes(e.url)) {
                        var r, i;
                        n = null == (i = e.xhr) || null == (r = i.responseText) ? void 0 : r.slice(0, 1000);
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
    interceptResponse(e, t, r) {
        var i, o, c, u, d;
        return 400 === e.statusCode && (null == (i = e.body) ? void 0 : i.captcha_key)
            ? (Promise.all([n.e('36514').then(n.bind(n, 475271)), n.e('31177').then(n.bind(n, 353250))])
                  .then((t) => {
                      let [{ default: n }, { extractCaptchaPropsFromResponse: r }] = t;
                      return n.showCaptchaAsync(r(e.body));
                  })
                  .then((e) => {
                      let { captcha_key: n, captcha_rqtoken: r, captcha_session_id: i } = e,
                          o = { 'X-Captcha-Key': n };
                      null != r && (o['X-Captcha-Rqtoken'] = r), null != i && (o['X-Captcha-Session-Id'] = i), t(o);
                  })
                  .catch(r),
              !0)
            : 401 === e.statusCode && (null == (o = e.body) ? void 0 : o.code) === p.evJ.MFA_REQUIRED && (null == (c = e.body) ? void 0 : c.mfa)
              ? (Promise.all([n.e('52030'), n.e('36833')])
                    .then(n.bind(n, 24031))
                    .then((n) => {
                        let { openMFAModal: i } = n;
                        i(e.body.mfa, t, r);
                    })
                    .catch(r),
                !0)
              : ((0, l.b)(e.statusCode, null == (u = e.body) ? void 0 : u.code)
                    ? Promise.resolve()
                          .then(n.bind(n, 895886))
                          .then((e) => {
                              let { default: t } = e;
                              t();
                          })
                    : (0, a.b)(e.statusCode, null == (d = e.body) ? void 0 : d.code)
                      ? n
                            .e('76731')
                            .then(n.bind(n, 626892))
                            .then((t) => {
                                var n;
                                let { default: r } = t;
                                r(null == (n = e.body) ? void 0 : n.guild_id);
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
    (0, r.Jt)(async (e) => {
        o.Hj('Network', 'Request to '.concat(e, ' failed, will retry.')), c.Z.isOnline() || (await c.Z.awaitOnline(), o.Hj('Network', 'Network detected online, retrying '.concat(e)));
    });
