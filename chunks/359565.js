n.d(t, {
    q: () => y,
    s: () => b,
});
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(367907),
    c = n(626135),
    u = n(346479),
    d = n(665906),
    p = n(981631),
    f = n(388032),
    h = n(690584);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { channel: t, narrow: n } = e,
        l = (0, d.tc)(t);
    return (
        r.useEffect(() => {
            c.default.track(
                p.rMx.CHANNEL_BANNER_VIEWED,
                g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), { banner_type: "thread" }),
            );
        }, [t]),
        (0, i.jsxs)("div", {
            className: a()(h.chatHeaderBar, { [h.narrow]: n }),
            children: [
                (0, i.jsx)(o.Text, {
                    className: h.chatHeaderBarText,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? f.intl.string(f.t["833FDn"]) : f.intl.string(f.t.rEeodK),
                }),
                l
                    ? (0, i.jsx)(o.Button, {
                          variant: "secondary",
                          text: f.intl.string(f.t["0dvvEi"]),
                          onClick: () => {
                              c.default.track(
                                  p.rMx.CHANNEL_BANNER_CTA_CLICKED,
                                  g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
                                      banner_type: "thread",
                                      cta_type: "unarchive",
                                  }),
                              ),
                                  u.Z.unarchiveThread(t, !1);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
function y(e) {
    let { channel: t, narrow: n } = e,
        l = (0, d.Xb)(t);
    return (
        r.useEffect(() => {
            c.default.track(
                p.rMx.CHANNEL_BANNER_VIEWED,
                g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), { banner_type: "thread" }),
            );
        }, [t]),
        (0, i.jsxs)("div", {
            className: a()(h.chatHeaderBar, { [h.narrow]: n }),
            children: [
                (0, i.jsx)(o.Text, {
                    className: h.chatHeaderBarText,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? f.intl.string(f.t.E7oO8u) : f.intl.string(f.t["V/JF2N"]),
                }),
                l
                    ? (0, i.jsx)(o.Button, {
                          variant: "secondary",
                          text: f.intl.string(f.t.zA9d1J),
                          onClick: () => {
                              c.default.track(
                                  p.rMx.CHANNEL_BANNER_CTA_CLICKED,
                                  g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
                                      banner_type: "thread",
                                      cta_type: "unlock",
                                  }),
                              ),
                                  u.Z.unlockThread(t);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
