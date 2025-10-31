n.d(t, { Z: () => A }), n(539854), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(843611),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(430824),
    d = n(914010),
    f = n(693546),
    _ = n(305325),
    p = n(246364),
    h = n(983736),
    m = n(937111),
    g = n(981631),
    E = n(176505),
    b = n(388032),
    y = n(342891),
    O = n(226910);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = () => {
    var e, t;
    let i = (0, s.e7)([d.Z], () => d.Z.getGuildId(), []),
        v = (0, s.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        T = (0, s.e7)([m.Z], () => (null != i ? m.Z.getRequest(i) : null), [i]),
        A = (0, o.TH)(),
        C =
            (null == (e = (0, o.LX)(A.pathname, g.Z5c.CHANNEL(null == v ? void 0 : v.id, E.oC.GUILD_ONBOARDING)))
                ? void 0
                : e.isExact) === !0;
    if (null == v || !(0, h.Dc)(v) || C) return null;
    let N = () => {
            (0, _.hk)(v.id);
        },
        R = () => {
            (0, c.h7j)((e) =>
                (0, r.jsx)(
                    c.ConfirmModal,
                    S(
                        I(
                            {
                                header: b.intl.string(b.t.aIz1oV),
                                confirmText: b.intl.string(b.t["cY+Oob"]),
                                cancelText: b.intl.string(b.t["ETE/oC"]),
                                onConfirm: () => f.Z.removeGuildJoinRequest(v.id),
                                confirmButtonColor: l.zx.Colors.BRAND,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: b.intl.string(b.t["13tjTU"]),
                            }),
                        },
                    ),
                ),
            );
        },
        P = () => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("3378").then(n.bind(n, 76075));
                return (t) => (0, r.jsx)(e, I({ guildId: v.id }, t));
            });
        },
        w = null != (t = null == T ? void 0 : T.applicationStatus) ? t : p.wB.STARTED,
        D = null,
        x = null,
        L = null,
        M = [y.notice, O.notice];
    switch (w) {
        case p.wB.SUBMITTED:
            (D = b.intl.string(b.t["5iLvSx"])), (x = b.intl.string(b.t.mqtdmQ)), (L = R);
            break;
        case p.wB.REJECTED:
            (D = b.intl.string(b.t.lk30cY)), (x = b.intl.string(b.t["8RrsHr"])), (L = P), M.push(y.error);
            break;
        default:
            (D = b.intl.string(b.t.G5YKXP)), (x = b.intl.string(b.t["r8/DT+"])), (L = N);
    }
    return (0, r.jsxs)("div", {
        className: a()(...M),
        children: [
            (0, r.jsx)(c.Text, {
                className: y.header,
                variant: "text-sm/normal",
                children: D,
            }),
            (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                onClick: L,
                text: x,
            }),
        ],
    });
};
