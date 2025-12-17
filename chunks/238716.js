n.d(e, { default: () => f }), n(388685), n(953529);
var i = n(54381),
    a = n(473749),
    l = n(442837),
    s = n(159691),
    r = n(481060),
    o = n(933557),
    c = n(592125),
    u = n(853856),
    d = n(117984),
    x = n(388032),
    p = n(231009);
function f(t) {
    let { channelId: e, onClose: n, transitionState: f, heading: h, formTitle: m, allowReset: v = !1 } = t,
        C = (0, l.e7)([c.Z], () => c.Z.getChannel(e)),
        k = (0, o.ZP)(C),
        g = u.Z.getNickname(e),
        [j, b] = a.useState(null != g ? g : "");
    function y(t) {
        t.preventDefault(), (0, d.UT)(e, j), n();
    }
    return (0, i.jsx)("form", {
        onSubmit: y,
        children: (0, i.jsxs)(s.u_l, {
            title: h,
            actions: [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: h,
                    onClick: y,
                    variant: "primary",
                    type: "submit",
                },
            ],
            onClose: n,
            transitionState: f,
            children: [
                (0, i.jsx)(r.oil, {
                    label: m,
                    value: j,
                    onChange: b,
                    placeholder: null != k ? k : void 0,
                    maxLength: 100,
                    autoFocus: !0,
                }),
                v && null != g
                    ? (0, i.jsx)("div", {
                          className: p.reset,
                          children: (0, i.jsx)(r.Avr, {
                              text: x.intl.string(x.t.aE02Rz),
                              onClick: function () {
                                  (0, d.UT)(e, null), n();
                              },
                              textVariant: "text-sm/normal",
                          }),
                      })
                    : null,
                (0, i.jsx)(r.Text, {
                    className: p.description,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: x.intl.string(x.t["2vyz+N"]),
                }),
            ],
        }),
    });
}
