(n.d(t, { Z: () => h }), n(388685), n(704826), n(35282), n(539854));
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(525654),
    a = n.n(l),
    o = n(481060),
    c = n(579806),
    d = n(304761),
    u = n(320161),
    m = n(998502),
    g = n(388032),
    p = n(980832);
function h() {
    var e, t, n, r, l;
    let h = window.GLOBAL_ENV.RELEASE_CHANNEL,
        f = '415719',
        b = '89406c91c6b50e96030d52576fa6e4370bcec984'.substring(0, 7),
        x = null === c.Z || void 0 === c.Z ? void 0 : c.Z.remoteApp.getVersion(),
        _ = null === c.Z || void 0 === c.Z || null == (e = (t = c.Z.remoteApp).getBuildNumber) ? void 0 : e.call(t),
        E = null === c.Z || void 0 === c.Z || null == (n = (r = c.Z.remoteApp).getAppArch) ? void 0 : n.call(r),
        j = null == (l = d.C.getCurrentBuildOverride().overrides) ? void 0 : l.discord_web,
        C = (function () {
            var e;
            let t = null === a() || void 0 === a() || null == (e = a().os) ? void 0 : e.toString();
            if (null == t || null == c.Z) return null;
            let n = c.Z.os.release,
                [i, r, s] = m.ZP.parsedOSRelease;
            return (t.includes('Windows 10') && void 0 !== s && s >= 22000 && (t = t.replace('Windows 10', 'Windows 11')), t.includes('OS X 10.15.7') && void 0 !== i && i >= 20 && (t = 'macOS '.concat(i >= 25 ? i + 1 : i - 9)), ''.concat(t, ' (').concat(n, ')'));
        })(),
        O = [h, f, '('.concat(b, ')')];
    return (
        null != x && (O.push('Host '.concat(x)), null != E && O.push(E.toLowerCase()), null != _ && O.push('('.concat(_, ')'))),
        O.push('Build Override: '.concat(null != j ? j.id : 'N/A')),
        null != C && O.push(C),
        (0, i.jsx)(u.Z, {
            copyValue: O.join(' '),
            text: g.intl.string(g.t['9Al4QU']),
            'aria-label': !1,
            children: (e) => {
                var t, n;
                return (0, i.jsx)(
                    o.P3F,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            'aria-label': g.intl.string(g.t['9Al4QU']),
                            className: p.clickable,
                            children: (0, i.jsxs)('div', {
                                className: p.info,
                                'data-mtctest-ignore': 'true',
                                children: [
                                    (0, i.jsxs)(o.Text, {
                                        tag: 'span',
                                        className: p.line,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: [
                                            h,
                                            ' ',
                                            f,
                                            ' ',
                                            (0, i.jsxs)('span', {
                                                className: p.versionHash,
                                                children: ['(', b, ')']
                                            })
                                        ]
                                    }),
                                    ' ',
                                    null != j &&
                                        (0, i.jsx)(o.Text, {
                                            tag: 'span',
                                            className: p.line,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: (0, i.jsxs)('span', {
                                                className: p.versionHash,
                                                children: ['Build Override: ', j.id]
                                            })
                                        }),
                                    null != x
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsxs)(o.Text, {
                                                      tag: 'span',
                                                      className: p.line,
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: [
                                                          'Host ',
                                                          x,
                                                          ' ',
                                                          null != E
                                                              ? (0, i.jsxs)('span', {
                                                                    className: p.appArch,
                                                                    children: [E.toLowerCase(), ' ']
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
                                    null != C
                                        ? (0, i.jsx)(o.Text, {
                                              tag: 'span',
                                              className: s()(p.line, p.os),
                                              variant: 'text-xs/normal',
                                              color: 'text-muted',
                                              children: C
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
