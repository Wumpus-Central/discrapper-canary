n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(194359),
    s = n(631937),
    l = n(702321),
    c = n(377171),
    u = n(699516),
    d = n(626135),
    f = n(63063),
    _ = n(862679),
    p = n(981631),
    h = n(596401),
    m = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { channel: t, children: g } = e,
        b = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.getRecipientId()));
    (0, s.Z)(t.id);
    let O = (0, l.Z)(t.id),
        v = t.isSystemDM(),
        I = b && !v && !t.isMultiUserDM(),
        T = () => {
            o.Z.unblockUser(t.getRecipientId());
        },
        S = {};
    if (v) {
        let e = () => {
                if (O) {
                    (open(h.D2),
                        d.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: 'chat_blocker',
                            target: h.D2
                        }));
                    return;
                }
                open(f.Z.getArticleURL(p.BhN.SYSTEM_DMS));
            },
            t = O
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          m.intl.string(m.t['+KSnWV']),
                          (0, r.jsx)(a.rgF, {
                              size: 'xs',
                              color: c.Z.HEADER_PRIMARY
                          })
                      ]
                  })
                : m.intl.string(m.t.hvVgAQ);
        ((S.message = m.intl.string(m.t.Bt2N7O)), (S.subtitle = m.intl.string(m.t['n/Vzk5'])), (S.buttonText = t), (S.onButtonClick = e), (S.imageSrc = n(780961)));
    } else I && ((S.message = m.intl.string(m.t['9T6N5+'])), (S.buttonText = m.intl.string(m.t.XyHpKC)), (S.onButtonClick = T));
    return (0, r.jsx)(_.Z, y(E({}, S), { children: g }));
}
