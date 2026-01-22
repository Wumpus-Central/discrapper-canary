n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(49229),
    s = n(258367),
    o = n(343328),
    c = n(994500),
    u = n(954571),
    d = n(975571),
    f = n(786051),
    p = n(652215),
    h = n(559868),
    b = n(985018);

function g(e) {
    var t, g;
    let { channel: m, children: A } = e,
        y = (0, l.bG)([c.A], () => c.A.isBlocked(m.getRecipientId()));
    (0, s.A)(m.id);
    let O = (0, o.A)(m.id),
        j = m.isSystemDM(),
        v = y && !j && !m.isMultiUserDM(),
        x = {};
    if (j) {
        let e = O ? b.intl.string(b.t["+KSnWX"]) : b.intl.string(b.t.hvVgAZ);
        (x.message = b.intl.string(b.t.Bt2N7D)),
            (x.subtitle = b.intl.string(b.t["n/Vzkw"])),
            (x.buttonText = e),
            (x.buttonIcon = O ? i.tfB : void 0),
            (x.onButtonClick = () => {
                if (O) {
                    open(h.Do),
                        u.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "chat_blocker",
                            target: h.Do,
                        });
                    return;
                }
                open(d.A.getArticleURL(p.MVz.SYSTEM_DMS));
            }),
            (x.imageSrc = n(388668));
    } else
        v &&
            ((x.message = b.intl.string(b.t["9T6N5/"])),
            (x.buttonText = b.intl.string(b.t.XyHpKH)),
            (x.onButtonClick = () => {
                a.A.unblockUser(m.getRecipientId());
            }));
    return (0, r.jsx)(
        f.A,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, x)),
        (g = g =
            {
                children: A,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(g)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e));
              }),
        t),
    );
}
