n.d(t, { A: () => S }), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(960488),
    o = n(311907),
    l = n(314116),
    c = n(397927),
    u = n(71393),
    d = n(967198),
    f = n(624458),
    p = n(202384),
    _ = n(513461),
    h = n(709977),
    m = n(212455),
    g = n(652215),
    E = n(746080),
    b = n(985018),
    y = n(121615),
    O = n(1624);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
let S = () => {
    var e, t;
    let i = (0, o.bG)([d.A], () => d.A.getGuildId(), []),
        A = (0, o.bG)([u.A], () => u.A.getGuild(i), [i]),
        S = (0, o.bG)([m.A], () => (null != i ? m.A.getRequest(i) : null), [i]),
        I = (0, s.zy)(),
        T =
            (null == (t = (0, s.B6)(I.pathname, g.BVt.CHANNEL(null == A ? void 0 : A.id, E.VV.GUILD_ONBOARDING)))
                ? void 0
                : t.isExact) === !0;
    if (null == A || !(0, h.Qd)(A) || T) return null;
    let C = () => {
            (0, p.Ze)(A.id);
        },
        N = () => {
            (0, l.A)({
                title: b.intl.string(b.t.aIz1oV),
                subtitle: b.intl.string(b.t["13tjTU"]),
                variant: "primary",
                confirmText: b.intl.string(b.t["cY+Oob"]),
                onConfirm: () => f.A.removeGuildJoinRequest(A.id),
            });
        },
        R = () => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                return (t) => (0, r.jsx)(e, v({ guildId: A.id }, t));
            });
        },
        w = null != (e = null == S ? void 0 : S.applicationStatus) ? e : _.B5.STARTED,
        P = null,
        D = null,
        x = null,
        L = [y.lm, O.lm];
    switch (w) {
        case _.B5.SUBMITTED:
            (P = b.intl.string(b.t["5iLvSx"])), (D = b.intl.string(b.t.mqtdmQ)), (x = N);
            break;
        case _.B5.REJECTED:
            (P = b.intl.string(b.t.lk30cY)), (D = b.intl.string(b.t["8RrsHr"])), (x = R), L.push(y.z3);
            break;
        default:
            (P = b.intl.string(b.t.G5YKXP)), (D = b.intl.string(b.t["r8/DT+"])), (x = C);
    }
    return (0, r.jsxs)("div", {
        className: a()(...L),
        children: [
            (0, r.jsx)(c.Text, {
                className: y.wx,
                variant: "text-sm/normal",
                children: P,
            }),
            (0, r.jsx)(c.Button, {
                variant: "overlay-primary",
                size: "sm",
                onClick: x,
                text: D,
            }),
        ],
    });
};
