n.d(t, { Z: () => m }), n(47120), n(757143), n(653041);
var i = n(200651);
n(192379);
var s = n(525654),
    l = n.n(s),
    r = n(481060),
    a = n(579806),
    o = n(304761),
    c = n(320161),
    d = n(998502),
    u = n(388032),
    h = n(180056);
function m() {
    var e, t, n, s, m;
    let g = window.GLOBAL_ENV.RELEASE_CHANNEL,
        x = '367944',
        _ = '35f6a926c2e7b29e94f682dc89c41aedcdb558fb'.substring(0, 7),
        p = null === a.Z || void 0 === a.Z ? void 0 : a.Z.remoteApp.getVersion(),
        E = null === a.Z || void 0 === a.Z ? void 0 : null === (e = (t = a.Z.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t),
        C = null === a.Z || void 0 === a.Z ? void 0 : null === (n = (s = a.Z.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(s),
        f = null === (m = o.C.getCurrentBuildOverride().overrides) || void 0 === m ? void 0 : m.discord_web,
        N = (function () {
            var e;
            let t = null === l() || void 0 === l() ? void 0 : null === (e = l().os) || void 0 === e ? void 0 : e.toString();
            if (null == t || null == a.Z) return null;
            let n = a.Z.os.release,
                [i, s, r] = d.ZP.parsedOSRelease;
            return t.includes('Windows 10') && void 0 !== r && r >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i - 9)), ''.concat(t, ' (').concat(n, ')');
        })(),
        I = [g, x, '('.concat(_, ')')];
    return (
        null != p && (I.push('Host '.concat(p)), null != C && I.push(C.toLowerCase()), null != E && I.push('('.concat(E, ')'))),
        I.push('Build Override: '.concat(null != f ? f.id : 'N/A')),
        null != N && I.push(N),
        (0, i.jsx)(c.Z, {
            copyValue: I.join(' '),
            text: u.intl.string(u.t['9Al4QU']),
            'aria-label': !1,
            children: (e) =>
                (0, i.jsx)(r.P3F, {
                    ...e,
                    'aria-label': u.intl.string(u.t['9Al4QU']),
                    className: h.clickable,
                    children: (0, i.jsxs)('div', {
                        className: h.info,
                        children: [
                            (0, i.jsxs)(r.Text, {
                                tag: 'span',
                                className: h.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    g,
                                    ' ',
                                    x,
                                    ' ',
                                    (0, i.jsxs)('span', {
                                        className: h.versionHash,
                                        children: ['(', _, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != f &&
                                (0, i.jsx)(r.Text, {
                                    tag: 'span',
                                    className: h.line,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: (0, i.jsxs)('span', {
                                        className: h.versionHash,
                                        children: ['Build Override: ', f.id]
                                    })
                                }),
                            null != p
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsxs)(r.Text, {
                                              tag: 'span',
                                              className: h.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  p,
                                                  ' ',
                                                  null != C
                                                      ? (0, i.jsxs)('span', {
                                                            className: h.appArch,
                                                            children: [C.toLowerCase(), ' ']
                                                        })
                                                      : null,
                                                  null != E
                                                      ? (0, i.jsxs)('span', {
                                                            children: ['(', E, ')']
                                                        })
                                                      : null
                                              ]
                                          }),
                                          ' '
                                      ]
                                  })
                                : null,
                            null != N
                                ? (0, i.jsx)(r.Text, {
                                      tag: 'span',
                                      className: h.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: N
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
