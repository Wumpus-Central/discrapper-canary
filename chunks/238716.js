e.d(n, { default: () => h }), e(388685), e(953529);
var i = e(54381),
    l = e(473749),
    a = e(442837),
    s = e(159691),
    r = e(481060),
    o = e(933557),
    c = e(592125),
    u = e(853856),
    d = e(117984),
    x = e(388032),
    p = e(589253);
function h(t) {
    let { channelId: n, onClose: e, transitionState: h, heading: m, formTitle: f, allowReset: v = !1 } = t,
        C = (0, a.e7)([c.Z], () => c.Z.getChannel(n)),
        k = (0, o.ZP)(C),
        g = u.Z.getNickname(n),
        [j, b] = l.useState(null != g ? g : "");
    function _(t) {
        t.preventDefault(), (0, d.UT)(n, j), e();
    }
    return (0, i.jsx)("form", {
        onSubmit: _,
        children: (0, i.jsxs)(s.u_l, {
            title: m,
            actions: [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: e,
                    variant: "secondary",
                },
                {
                    text: m,
                    onClick: _,
                    variant: "primary",
                    type: "submit",
                },
            ],
            onClose: e,
            transitionState: h,
            children: [
                (0, i.jsx)(r.oil, {
                    label: f,
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
                                  (0, d.UT)(n, null), e();
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
