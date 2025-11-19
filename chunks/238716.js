e.d(n, { default: () => h }), e(388685), e(953529);
var i = e(54381),
    a = e(473749),
    l = e(442837),
    s = e(159691),
    r = e(481060),
    o = e(933557),
    c = e(592125),
    u = e(853856),
    d = e(117984),
    p = e(388032),
    x = e(380041);
function h(t) {
    let { channelId: n, onClose: e, transitionState: h, heading: m, formTitle: f, allowReset: v = !1 } = t,
        C = (0, l.e7)([c.Z], () => c.Z.getChannel(n)),
        k = (0, o.ZP)(C),
        g = u.Z.getNickname(n),
        [j, b] = a.useState(null != g ? g : "");
    function y(t) {
        t.preventDefault(), (0, d.UT)(n, j), e();
    }
    return (0, i.jsx)("form", {
        onSubmit: y,
        children: (0, i.jsxs)(s.u_l, {
            title: m,
            actions: [
                {
                    text: p.intl.string(p.t["ETE/oC"]),
                    onClick: e,
                    variant: "secondary",
                },
                {
                    text: m,
                    onClick: y,
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
                          className: x.reset,
                          children: (0, i.jsx)(r.Avr, {
                              text: p.intl.string(p.t.aE02Rz),
                              onClick: function () {
                                  (0, d.UT)(n, null), e();
                              },
                              textVariant: "text-sm/normal",
                          }),
                      })
                    : null,
                (0, i.jsx)(r.Text, {
                    className: x.description,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: p.intl.string(p.t["2vyz+N"]),
                }),
            ],
        }),
    });
}
