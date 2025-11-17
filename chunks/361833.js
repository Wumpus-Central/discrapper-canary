n.d(e, { Z: () => _ }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(481060),
    s = n(809206),
    o = n(25990),
    c = n(155433),
    u = n(388032),
    E = n(800010);
function _(t) {
    var e, n;
    let { emailToken: _, onClose: d, onBack: A, onNext: x, transitionState: C } = t,
        [g, p] = r.useState(""),
        [S, f] = r.useState(""),
        [N, m] = r.useState(!1),
        h = (0, i.e7)([o.Z], () => o.Z.getErrors()),
        T = r.useRef(null);
    async function v(t) {
        t.preventDefault(), m(!0);
        let e = await (0, s.Mn)({
            email: g,
            emailToken: _,
            password: S,
        });
        if ((m(!1), null == e ? void 0 : e.ok)) x(g);
        else {
            var n, a;
            (null == e || null == (n = e.body) ? void 0 : n.username) != null
                ? (0, c.P)()
                : (null == e || null == (a = e.body) ? void 0 : a.email_token) != null && (null == A || A());
        }
    }
    return (
        r.useEffect(() => {
            var t;
            null == (t = T.current) || t.focus();
        }, []),
        (0, a.jsx)(l.Ioy, {
            graphic: {
                type: "image",
                src: E,
            },
            title: u.intl.string(u.t.p3280r),
            subtitle: u.intl.string(u.t["1k44EL"]),
            onClose: d,
            transitionState: C,
            actions: [
                null != A
                    ? {
                          variant: "secondary",
                          text: u.intl.string(u.t["13/7kX"]),
                          onClick: A,
                      }
                    : {
                          variant: "secondary",
                          text: u.intl.string(u.t["ETE/oC"]),
                          onClick: d,
                      },
                {
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    loading: N,
                    onClick: v,
                },
            ],
            children: (0, a.jsxs)(l.Kqy, {
                gap: 20,
                children: [
                    (0, a.jsx)(l.oil, {
                        label: u.intl.string(u.t["w/qqKK"]),
                        error: null == h || null == (e = h.email) ? void 0 : e[0],
                        type: "email",
                        value: g,
                        onChange: p,
                        inputRef: T,
                    }),
                    (0, a.jsx)(l.oil, {
                        label: u.intl.string(u.t.TmdnJ3),
                        error: null == h || null == (n = h.password) ? void 0 : n[0],
                        type: "password",
                        value: S,
                        onChange: f,
                    }),
                ],
            }),
        })
    );
}
