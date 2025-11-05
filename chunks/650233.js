r.d(t, { default: () => j }), r(388685), r(457542);
var n = r(951288),
    i = r(647438),
    l = r(793030),
    o = r(442837),
    a = r(447543),
    c = r(701190),
    s = r(495784),
    u = r(994640),
    d = r(247007),
    f = r(999464),
    O = r(503406),
    p = r(463115),
    y = r(888592),
    b = r(759137);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function j(e) {
    var t,
        r,
        { inviteCode: j } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["inviteCode"]);
    i.useEffect(() => {
        s.Z.hideHubUpsell();
    }, []);
    let [v, h] = i.useState(null != j);
    i.useEffect(() => {
        null != j && a.ZP.resolveInvite(j, "Hub").finally(() => h(!1));
    }, [j]);
    let E = (0, o.e7)([c.Z], () => (null != j ? c.Z.getInvite(j) : null)),
        [S, I] = i.useState([y.tF.VERIFY_EMAIL]),
        [P, _] = i.useState(""),
        [w, x] = i.useState(""),
        [A, L] = i.useState(void 0),
        [C, M] = i.useState([]),
        N = (e) => {
            I(S.concat(e).slice(-4));
        },
        T = S[S.length - 1];
    if (v)
        return (0, n.jsx)(
            l.IX,
            ((t = g({}, m)),
            (r = r = { children: (0, n.jsx)(l.$jN, { className: b.spinner }) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        );
    switch (T) {
        case y.tF.VERIFY_EMAIL:
            return (0, n.jsx)(
                u.Z,
                g(
                    {
                        setGuildsInfo: M,
                        setStep: N,
                        email: P,
                        setEmail: _,
                        setGuildId: L,
                        invite: E,
                    },
                    m,
                ),
            );
        case y.tF.SELECT_SCHOOL:
            return (0, n.jsx)(
                d.Z,
                g(
                    {
                        guildsInfo: C,
                        setStep: N,
                        email: P,
                        setGuildId: L,
                    },
                    m,
                ),
            );
        case y.tF.SUBMIT_SCHOOL:
            return (0, n.jsx)(
                f.Z,
                g(
                    {
                        onBack: () => {
                            S.length > 1 && I(S.slice(0, -1).slice(-4));
                        },
                        setStep: N,
                        email: P,
                        school: w,
                        setSchool: x,
                    },
                    m,
                ),
            );
        case y.tF.VERIFY_PIN:
            return (0, n.jsx)(
                O.Z,
                g(
                    {
                        email: P,
                        guildId: A,
                    },
                    m,
                ),
            );
        case y.tF.EMAIL_WAITLIST:
            return (0, n.jsx)(
                p.Z,
                g(
                    {
                        setStep: N,
                        school: w,
                    },
                    m,
                ),
            );
        default:
            return m.onClose(), null;
    }
}
