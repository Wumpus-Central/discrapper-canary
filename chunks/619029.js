n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    o = n(793574),
    a = n(688810),
    s = n(206835),
    c = n(961350),
    u = n(696451),
    E = n(229527),
    d = n(81400),
    _ = n(340837),
    T = n(355097),
    A = n(985018);

function I(e) {
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

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function N(e) {
    let { guildId: t, analyticsLocations: n } = e,
        [i, o] = (0, d.j8)({
            guildId: t,
            analyticsLocations: n,
        }),
        a = o ? A.intl.string(A.t["6ndMcq"]) : A.intl.string(A.t["0eiu6J"]),
        s = o ? A.intl.string(A.t.S09nw4) : A.intl.string(A.t.tEttXd);
    return (0, r.jsxs)(l.$Td, {
        color: l.Hv$.DANGER,
        children: [
            a,
            (0, r.jsx)(l.zr9, {
                onClick: i,
                children: s,
            }),
        ],
    });
}

function p() {
    let e = (0, s.A)({
        scrollPosition: T._F.GUILD_TAG,
    });
    return (0, r.jsxs)(l.$Td, {
        color: l.Hv$.DANGER,
        children: [
            A.intl.string(A.t.Zqlecb),
            (0, r.jsx)(l.zr9, {
                onClick: e,
                children: A.intl.string(A.t.SJehVW),
            }),
        ],
    });
}

function R(e) {
    let { analyticsLocations: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["analyticsLocations"]),
        { analyticsLocations: l } = (0, a.Ay)(t, o.A.AUTOMOD_NAGBAR_NOTICE),
        s = (0, i.bG)([c.default, u.Ay], () => {
            if (null == n.guildId) return new Set();
            let e = c.default.getId();
            return (0, E.wj)(u.Ay.getMember(n.guildId, e));
        }, [n.guildId]);
    return s.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || s.has(_.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, r.jsx)(
              N,
              O(I({}, n), {
                  analyticsLocations: l,
              }),
          )
        : s.has(_.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, r.jsx)(p, {})
          : (0, r.jsx)(
                N,
                O(I({}, n), {
                    analyticsLocations: l,
                }),
            );
}
