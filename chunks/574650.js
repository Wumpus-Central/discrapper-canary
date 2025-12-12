n.d(t, { Z: () => I }), n(539854), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(828700),
    s = n(442837),
    l = n(248514),
    c = n(481060),
    u = n(430824),
    d = n(914010),
    f = n(693546),
    p = n(305325),
    _ = n(246364),
    m = n(983736),
    h = n(937111),
    g = n(981631),
    E = n(176505),
    b = n(388032),
    y = n(360390),
    O = n(99940);
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
function S(e) {
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
let I = () => {
    var e, t;
    let i = (0, s.e7)([d.Z], () => d.Z.getGuildId(), []),
        v = (0, s.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        I = (0, s.e7)([h.Z], () => (null != i ? h.Z.getRequest(i) : null), [i]),
        T = (0, o.TH)(),
        C =
            (null == (e = (0, o.LX)(T.pathname, g.Z5c.CHANNEL(null == v ? void 0 : v.id, E.oC.GUILD_ONBOARDING)))
                ? void 0
                : e.isExact) === !0;
    if (null == v || !(0, m.Dc)(v) || C) return null;
    let A = () => {
            (0, p.hk)(v.id);
        },
        N = () => {
            (0, l.Z)({
                title: b.intl.string(b.t.aIz1oV),
                subtitle: b.intl.string(b.t["13tjTU"]),
                variant: "primary",
                confirmText: b.intl.string(b.t["cY+Oob"]),
                onConfirm: () => f.Z.removeGuildJoinRequest(v.id),
            });
        },
        P = () => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("3378").then(n.bind(n, 76075));
                return (t) => (0, r.jsx)(e, S({ guildId: v.id }, t));
            });
        },
        R = null != (t = null == I ? void 0 : I.applicationStatus) ? t : _.wB.STARTED,
        w = null,
        D = null,
        x = null,
        L = [y.notice, O.notice];
    switch (R) {
        case _.wB.SUBMITTED:
            (w = b.intl.string(b.t["5iLvSx"])), (D = b.intl.string(b.t.mqtdmQ)), (x = N);
            break;
        case _.wB.REJECTED:
            (w = b.intl.string(b.t.lk30cY)), (D = b.intl.string(b.t["8RrsHr"])), (x = P), L.push(y.error);
            break;
        default:
            (w = b.intl.string(b.t.G5YKXP)), (D = b.intl.string(b.t["r8/DT+"])), (x = A);
    }
    return (0, r.jsxs)("div", {
        className: a()(...L),
        children: [
            (0, r.jsx)(c.Text, {
                className: y.header,
                variant: "text-sm/normal",
                children: w,
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
