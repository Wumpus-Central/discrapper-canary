n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120),
    n(757143),
    n(653041);
var i = n(200651);
n(192379);
var r = n(525654),
    s = n.n(r),
    a = n(481060),
    l = n(579806),
    o = n(304761),
    c = n(320161),
    d = n(998502),
    u = n(388032),
    m = n(244270);
function g() {
    var e, t, n, r, g, h;
    let p = window.GLOBAL_ENV.RELEASE_CHANNEL,
        x = '360179',
        f = ((e = 'ba75d97b4f736b89058c7900b74f9e5354edcac3'), e.substring(0, 7)),
        _ = null === l.Z || void 0 === l.Z ? void 0 : l.Z.remoteApp.getVersion(),
        E = null === l.Z || void 0 === l.Z ? void 0 : null === (t = (n = l.Z.remoteApp).getBuildNumber) || void 0 === t ? void 0 : t.call(n),
        C = null === l.Z || void 0 === l.Z ? void 0 : null === (r = (g = l.Z.remoteApp).getAppArch) || void 0 === r ? void 0 : r.call(g),
        T = null === (h = o.C.getCurrentBuildOverride().overrides) || void 0 === h ? void 0 : h.discord_web,
        S = (function () {
            var e;
            let t = null === s() || void 0 === s() ? void 0 : null === (e = s().os) || void 0 === e ? void 0 : e.toString();
            if (null == t || null == l.Z) return null;
            let n = l.Z.os.release,
                [i, r, a] = d.ZP.parsedOSRelease;
            return t.includes('Windows 10') && void 0 !== a && a >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i - 9)), ''.concat(t, ' (').concat(n, ')');
        })(),
        b = [p, x, '('.concat(f, ')')];
    return (
        null != _ && (b.push('Host '.concat(_)), null != C && b.push(C.toLowerCase()), null != E && b.push('('.concat(E, ')'))),
        b.push('Build Override: '.concat(null != T ? T.id : 'N/A')),
        null != S && b.push(S),
        (0, i.jsx)(c.Z, {
            copyValue: b.join(' '),
            text: u.intl.string(u.t['9Al4QU']),
            'aria-label': !1,
            children: (e) =>
                (0, i.jsx)(a.Clickable, {
                    ...e,
                    'aria-label': u.intl.string(u.t['9Al4QU']),
                    className: m.clickable,
                    children: (0, i.jsxs)('div', {
                        className: m.info,
                        children: [
                            (0, i.jsxs)(a.Text, {
                                tag: 'span',
                                className: m.line,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: [
                                    p,
                                    ' ',
                                    x,
                                    ' ',
                                    (0, i.jsxs)('span', {
                                        className: m.versionHash,
                                        children: ['(', f, ')']
                                    })
                                ]
                            }),
                            ' ',
                            null != T &&
                                (0, i.jsx)(a.Text, {
                                    tag: 'span',
                                    className: m.line,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: (0, i.jsxs)('span', {
                                        className: m.versionHash,
                                        children: ['Build Override: ', T.id]
                                    })
                                }),
                            null != _
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsxs)(a.Text, {
                                              tag: 'span',
                                              className: m.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: [
                                                  'Host ',
                                                  _,
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
                            null != S
                                ? (0, i.jsx)(a.Text, {
                                      tag: 'span',
                                      className: m.line,
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: S
                                  })
                                : null
                        ]
                    })
                })
        })
    );
}
