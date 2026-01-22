n.d(t, {
    Zs: () => b,
    uS: () => O,
}),
    n(896048);
var r = n(311907),
    i = n(600975),
    l = n(428835),
    o = n(961350),
    u = n(994500),
    c = n(652215);

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
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
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let s = (0, i.C)({
    kind: "user",
    id: "2025-11_invite_friend_members",
    label: "Show Friends in Server on Invite Modal",
    defaultConfig: {
        showFriendsInServer: !1,
        showInviter: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Show Friends in Server",
            config: {
                showFriendsInServer: !0,
                showInviter: !1,
            },
        },
        {
            id: 2,
            label: "Show Friends in Server and Inviter",
            config: {
                showFriendsInServer: !0,
                showInviter: !0,
            },
        },
    ],
});

function a(e) {
    if (null == e) return !1;
    let t = e.features;
    return Array.isArray(t)
        ? !t.includes(c.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        : !(t instanceof Set) || !t.has(c.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
}
let f = {
    showFriendsInServer: !1,
    showInviter: !1,
};

function O(e) {
    var t, n;
    let { guild: i } = e,
        c = d(e, ["guild"]),
        O = (0, r.bG)([o.default], () => o.default.isAuthenticated()),
        b = (0, r.bG)([u.A], () => u.A.getFriendCount() > 0),
        g = a(i),
        p = O && b && g,
        y = (0, l.Dr)(
            s,
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
            })({}, c)),
            (n = n =
                {
                    disable: !p,
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
            t),
        );
    return p ? y : f;
}

function b(e) {
    let { guild: t } = e,
        n = d(e, ["guild"]),
        r = o.default.isAuthenticated(),
        i = u.A.getFriendCount() > 0;
    return r && i && a(t) ? (0, l.Kd)(s, n) : f;
}
