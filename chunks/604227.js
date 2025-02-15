n.d(t, { Z: () => g }), n(47120), n(757143), n(653041);
var i = n(200651);
n(192379);
var s = n(525654),
    r = n.n(s),
    l = n(481060),
    a = n(579806),
    o = n(304761),
    c = n(320161),
    d = n(998502),
    u = n(388032),
    m = n(357430);
function g() {
    var e, t, n, s, g;
    let h = window.GLOBAL_ENV.RELEASE_CHANNEL,
        x = '369170',
        _ = '93e7acefc712d9b53651dd2783ce5095d75a2fc1'.substring(0, 7),
        p = null === a.Z || void 0 === a.Z ? void 0 : a.Z.remoteApp.getVersion(),
        E = null === a.Z || void 0 === a.Z ? void 0 : null === (e = (t = a.Z.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t),
        C = null === a.Z || void 0 === a.Z ? void 0 : null === (n = (s = a.Z.remoteApp).getAppArch) || void 0 === n ? void 0 : n.call(s),
        f = null === (g = o.C.getCurrentBuildOverride().overrides) || void 0 === g ? void 0 : g.discord_web,
        T = (function () {
            var e;
            let t = null === r() || void 0 === r() ? void 0 : null === (e = r().os) || void 0 === e ? void 0 : e.toString();
            if (null == t || null == a.Z) return null;
            let n = a.Z.os.release,
                [i, s, l] = d.ZP.parsedOSRelease;
            return t.includes('Windows 10') && void 0 !== l && l >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i - 9)), ''.concat(t, ' (').concat(n, ')');
        })(),
        N = [h, x, '('.concat(_, ')')];
    return (
        null != p && (N.push('Host '.concat(p)), null != C && N.push(C.toLowerCase()), null != E && N.push('('.concat(E, ')'))),
        N.push('Build Override: '.concat(null != f ? f.id : 'N/A')),
        null != T && N.push(T),
        (0, i.jsx)(c.Z, {
            copyValue: N.join(' '),
            text: u.intl.string(u.t['9Al4QU']),
            'aria-label': !1,
            children: (e) =>
                (0, i.jsx)(l.P3F, {
                    ...e,
                    'aria-label': u.intl.string(u.t['9Al4QU']),
                    className: m.clickable,
                    children: (0, i.jsxs)('div', {
                        className: m.info,
                        children: [
                            (0, i.jsxs)(l.Text, {
                                tag: 'span',
                                className: m.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    h,
                                    ' ',
                                    x,
                                    ' ',
                                    (0, i.jsxs)('span', {
                                        className: m.versionHash,
                                        children: ['(', _, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != f &&
                                (0, i.jsx)(l.Text, {
                                    tag: 'span',
                                    className: m.line,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: (0, i.jsxs)('span', {
                                        className: m.versionHash,
                                        children: ['Build Override: ', f.id]
                                    })
                                }),
                            null != p
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsxs)(l.Text, {
                                              tag: 'span',
                                              className: m.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  p,
                                                  ' ',
                                                  null != C
                                                      ? (0, i.jsxs)('span', {
                                                            className: m.appArch,
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
                            null != T
                                ? (0, i.jsx)(l.Text, {
                                      tag: 'span',
                                      className: m.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: T
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
