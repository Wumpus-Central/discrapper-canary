e.d(n, { Z: () => A }), e(388685);
var a = e(54381),
    r = e(473749),
    i = e(442837),
    l = e(481060),
    s = e(809206),
    o = e(25990),
    c = e(155433),
    u = e(388032),
    E = e(800010);
function A(t) {
    var n, e;
    let { emailToken: A, onClose: _, onBack: d, onNext: C, transitionState: x } = t,
        [N, S] = r.useState(""),
        [g, p] = r.useState(""),
        [f, m] = r.useState(!1),
        v = (0, i.e7)([o.Z], () => o.Z.getErrors()),
        h = r.useRef(null);
    async function y(t) {
        t.preventDefault(), m(!0);
        let n = await (0, s.Mn)({
            email: N,
            emailToken: A,
            password: g,
        });
        if ((m(!1), null == n ? void 0 : n.ok)) C(N);
        else {
            var e, a;
            (null == n || null == (e = n.body) ? void 0 : e.username) != null
                ? (0, c.P)()
                : (null == n || null == (a = n.body) ? void 0 : a.email_token) != null && (null == d || d());
        }
    }
    return (
        r.useEffect(() => {
            var t;
            null == (t = h.current) || t.focus();
        }, []),
        (0, a.jsx)(l.Ioy, {
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
                    loading: f,
                    onClick: y,
                },
            ],
            children: (0, a.jsxs)(l.Kqy, {
                gap: 20,
                children: [
                    (0, a.jsx)(l.oil, {
                        label: u.intl.string(u.t["w/qqKK"]),
                        error: null == v || null == (n = v.email) ? void 0 : n[0],
                        type: "email",
                        value: N,
                        onChange: S,
                        inputRef: h,
                    }),
                    (0, a.jsx)(l.oil, {
                        label: u.intl.string(u.t.TmdnJ3),
                        error: null == v || null == (e = v.password) ? void 0 : e[0],
                        type: "password",
                        value: g,
                        onChange: p,
                    }),
                ],
            }),
        })
    );
}
