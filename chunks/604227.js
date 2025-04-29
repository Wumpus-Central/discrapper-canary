n.d(t, { Z: () => p }), n(388685), n(704826), n(35282), n(539854);
var i = n(200651);
n(192379);
var r = n(525654),
    s = n.n(r),
    l = n(481060),
    a = n(579806),
    o = n(304761),
    c = n(320161),
    d = n(998502),
    u = n(388032),
    m = n(980832);
function p() {
    var e, t, n, r, p;
    let g = window.GLOBAL_ENV.RELEASE_CHANNEL,
        h = '394714',
        f = '290efc321dc02864b24ba181c1f959260c852e58'.substring(0, 7),
        b = null === a.Z || void 0 === a.Z ? void 0 : a.Z.remoteApp.getVersion(),
        _ = null === a.Z || void 0 === a.Z || null == (e = (t = a.Z.remoteApp).getBuildNumber) ? void 0 : e.call(t),
        x = null === a.Z || void 0 === a.Z || null == (n = (r = a.Z.remoteApp).getAppArch) ? void 0 : n.call(r),
        E = null == (p = o.C.getCurrentBuildOverride().overrides) ? void 0 : p.discord_web,
        j = (function () {
            var e;
            let t = null === s() || void 0 === s() || null == (e = s().os) ? void 0 : e.toString();
            if (null == t || null == a.Z) return null;
            let n = a.Z.os.release,
                [i, r, l] = d.ZP.parsedOSRelease;
            return t.includes('Windows 10') && void 0 !== l && l >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i - 9)), ''.concat(t, ' (').concat(n, ')');
        })(),
        C = [g, h, '('.concat(f, ')')];
    return (
        null != b && (C.push('Host '.concat(b)), null != x && C.push(x.toLowerCase()), null != _ && C.push('('.concat(_, ')'))),
        C.push('Build Override: '.concat(null != E ? E.id : 'N/A')),
        null != j && C.push(j),
        (0, i.jsx)(c.Z, {
            copyValue: C.join(' '),
            text: u.intl.string(u.t['9Al4QU']),
            'aria-label': !1,
            children: (e) => {
                var t, n;
                return (0, i.jsx)(
                    l.P3F,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            'aria-label': u.intl.string(u.t['9Al4QU']),
                            className: m.clickable,
                            children: (0, i.jsxs)('div', {
                                className: m.info,
                                'data-mtctest-ignore': 'true',
                                children: [
                                    (0, i.jsxs)(l.Text, {
                                        tag: 'span',
                                        className: m.line,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: [
                                            g,
                                            ' ',
                                            h,
                                            ' ',
                                            (0, i.jsxs)('span', {
                                                className: m.versionHash,
                                                children: ['(', f, ')']
                                            })
                                        ]
                                    }),
                                    ' ',
                                    null != E &&
                                        (0, i.jsx)(l.Text, {
                                            tag: 'span',
                                            className: m.line,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: (0, i.jsxs)('span', {
                                                className: m.versionHash,
                                                children: ['Build Override: ', E.id]
                                            })
                                        }),
                                    null != b
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsxs)(l.Text, {
                                                      tag: 'span',
                                                      className: m.line,
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: [
                                                          'Host ',
                                                          b,
                                                          ' ',
                                                          null != x
                                                              ? (0, i.jsxs)('span', {
                                                                    className: m.appArch,
                                                                    children: [x.toLowerCase(), ' ']
                                                                })
                                                              : null,
                                                          null != _
                                                              ? (0, i.jsxs)('span', {
                                                                    children: ['(', _, ')']
                                                                })
                                                              : null
                                                      ]
                                                  }),
                                                  ' '
                                              ]
                                          })
                                        : null,
                                    null != j
                                        ? (0, i.jsx)(l.Text, {
                                              tag: 'span',
                                              className: m.line,
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: j
                                          })
                                        : null
                                ]
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        })
    );
}
