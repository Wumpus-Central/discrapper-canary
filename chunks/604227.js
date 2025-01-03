n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(757143),
    n(653041);
var i = n(200651);
n(192379);
var s = n(525654),
    r = n.n(s),
    l = n(481060),
    a = n(579806),
    o = n(304761),
    c = n(320161),
    d = n(388032),
    u = n(244270);
function m() {
    var e, t, n, s, m, h;
    let g = window.GLOBAL_ENV.RELEASE_CHANNEL,
        p = '356389',
        x = ((e = 'f1320823619c9cbf00e58e295a0170a0c0a02878'), e.substring(0, 7)),
        S = null === a.Z || void 0 === a.Z ? void 0 : a.Z.remoteApp.getVersion(),
        T = null === a.Z || void 0 === a.Z ? void 0 : null === (t = (n = a.Z.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(n),
        E = null === a.Z || void 0 === a.Z ? void 0 : null === (s = (m = a.Z.remoteApp).getAppArch) || void 0 === s ? void 0 : s.call(m),
        C = null === (h = o.C.getCurrentBuildOverride().overrides) || void 0 === h ? void 0 : h.discord_web,
        _ = (function () {
            var e;
            let t = null === r() || void 0 === r() ? void 0 : null === (e = r().os) || void 0 === e ? void 0 : e.toString();
            if (null == t || null == a.Z) return null;
            let n = a.Z.os.release,
                [i, s, l] = n.split('.').map((e) => parseInt(e, 10));
            return t.includes('Windows 10') && void 0 !== l && l >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i - 9)), ''.concat(t, ' (').concat(n, ')');
        })(),
        f = [g, p, '('.concat(x, ')')];
    return (
        null != S && (f.push('Host '.concat(S)), null != E && f.push(E.toLowerCase()), null != T && f.push('('.concat(T, ')'))),
        f.push('Build Override: '.concat(null != C ? C.id : 'N/A')),
        null != _ && f.push(_),
        (0, i.jsx)(c.Z, {
            copyValue: f.join(' '),
            text: d.intl.string(d.t['9Al4QU']),
            'aria-label': !1,
            children: (e) =>
                (0, i.jsx)(l.Clickable, {
                    ...e,
                    'aria-label': d.intl.string(d.t['9Al4QU']),
                    className: u.clickable,
                    children: (0, i.jsxs)('div', {
                        className: u.info,
                        children: [
                            (0, i.jsxs)(l.Text, {
                                tag: 'span',
                                className: u.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    g,
                                    ' ',
                                    p,
                                    ' ',
                                    (0, i.jsxs)('span', {
                                        className: u.versionHash,
                                        children: ['(', x, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != S
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsxs)(l.Text, {
                                              tag: 'span',
                                              className: u.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  S,
                                                  ' ',
                                                  null != E
                                                      ? (0, i.jsxs)('span', {
                                                            className: u.appArch,
                                                            children: [E.toLowerCase(), ' ']
                                                        })
                                                      : null,
                                                  null != T
                                                      ? (0, i.jsxs)('span', {
                                                            children: ['(', T, ')']
                                                        })
                                                      : null
                                              ]
                                          }),
                                          ' '
                                      ]
                                  })
                                : null,
                            null != _
                                ? (0, i.jsx)(l.Text, {
                                      tag: 'span',
                                      className: u.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: _
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
