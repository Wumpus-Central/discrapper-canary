n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(749210),
    c = n(168107),
    u = n(480916),
    d = n(622822),
    p = n(986035),
    h = n(388032),
    f = n(118177);
function m(e) {
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
}
function g(e) {
    var t, n;
    let { guild: l, channelId: a } = e,
        o = (0, d.kH)(l),
        { modalType: f } = o,
        g = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(o, ["modalType"]),
        b = i.useCallback(() => {
            null != l && s.Z.nsfwReturnToSafety(l.id);
        }, [l]),
        y = i.useCallback(() => {
            null != l && s.Z.nsfwAgree(l.id);
        }, [l]),
        _ = i.useCallback(() => {
            c.Z.showAgeVerificationGetStartedModal({ entryPoint: u.cU.NSFW_GUILD });
        }, []),
        C =
            ((t = m({}, g)),
            (n = n =
                {
                    guildId: null == l ? void 0 : l.id,
                    channelId: a,
                    disagreement: h.intl.string(h.t["/g10LC"]),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    switch (f) {
        case u.it.NSFW_CHANNEL_AGE_VERIFY:
        case u.it.GUILD_LARGE_SERVER:
            return (0, r.jsx)(
                p.Z,
                m(
                    {
                        onAgree: _,
                        onDisagree: b,
                        modalType: f,
                    },
                    C,
                ),
            );
        default:
            return (0, r.jsx)(
                p.Z,
                m(
                    {
                        onAgree: y,
                        onDisagree: b,
                        modalType: f,
                    },
                    C,
                ),
            );
    }
}
let b = function (e) {
    let { guild: t, channelId: n, className: l } = e,
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = s;
            null == e || e.scrollToBottom();
        }, []),
        (0, r.jsx)(o.Den, {
            ref: s,
            className: f.scroller,
            children: (0, r.jsx)("div", {
                className: a()(l, f.wrapper),
                children: (0, r.jsx)(g, {
                    guild: t,
                    channelId: n,
                }),
            }),
        })
    );
};
