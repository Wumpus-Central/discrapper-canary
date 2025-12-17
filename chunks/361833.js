e.d(n, { Z: () => A }), e(388685);
var r = e(54381),
    i = e(473749),
    a = e(442837),
    l = e(481060),
    s = e(809206),
    o = e(25990),
    c = e(155433),
    u = e(388032),
    E = e(800010);
function A(t) {
    var n, e;
    let { emailToken: A, onClose: _, onBack: d, onNext: C, transitionState: x } = t,
        [N, S] = i.useState(""),
        [g, f] = i.useState(""),
        [p, m] = i.useState(!1),
        v = (0, a.e7)([o.Z], () => o.Z.getErrors()),
        y = i.useRef(null);
    async function h(t) {
        t.preventDefault(), m(!0);
        let n = await (0, s.Mn)({
            email: N,
            emailToken: A,
            password: g,
        });
        if ((m(!1), null == n ? void 0 : n.ok)) C(N);
        else {
            var e, r;
            (null == n || null == (e = n.body) ? void 0 : e.username) != null
                ? (0, c.P)()
                : (null == n || null == (r = n.body) ? void 0 : r.email_token) != null && (null == d || d());
        }
    }
    return (
        i.useEffect(() => {
            var t;
            null == (t = y.current) || t.focus();
        }, []),
        (0, r.jsx)(l.Ioy, {
            graphic: {
                type: "image",
                src: E,
            },
            title: u.intl.string(u.t.p3280r),
            subtitle: u.intl.string(u.t["1k44EL"]),
            onClose: _,
            transitionState: x,
            actions: [
                null != d
                    ? {
                          variant: "secondary",
                          text: u.intl.string(u.t["13/7kX"]),
                          onClick: d,
                      }
                    : {
                          variant: "secondary",
                          text: u.intl.string(u.t["ETE/oC"]),
                          onClick: _,
                      },
                {
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    loading: p,
                    onClick: h,
                },
            ],
            children: (0, r.jsxs)(l.Kqy, {
                gap: 20,
                children: [
                    (0, r.jsx)(l.oil, {
                        label: u.intl.string(u.t["w/qqKK"]),
                        error: null == v || null == (n = v.email) ? void 0 : n[0],
                        type: "email",
                        value: N,
                        onChange: S,
                        inputRef: y,
                    }),
                    (0, r.jsx)(l.oil, {
                        label: u.intl.string(u.t.TmdnJ3),
                        error: null == v || null == (e = v.password) ? void 0 : e[0],
                        type: "password",
                        value: g,
                        onChange: f,
                    }),
                ],
            }),
        })
    );
}
