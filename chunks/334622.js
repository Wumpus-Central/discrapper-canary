n.d(e, { A: () => A }), n(896048);
var a = n(627968),
    r = n(64700),
    i = n(311907),
    l = n(397927),
    s = n(631670),
    o = n(752319),
    c = n(592074),
    u = n(985018),
    E = n(222872);
function A(t) {
    var e, n;
    let { emailToken: A, onClose: _, onBack: C, onNext: d, transitionState: g } = t,
        [N, S] = r.useState(""),
        [k, m] = r.useState(""),
        [h, x] = r.useState(!1),
        p = (0, i.bG)([o.A], () => o.A.getErrors()),
        v = r.useRef(null);
    async function T(t) {
        t.preventDefault(), x(!0);
        let e = await (0, s.yu)({
            email: N,
            emailToken: A,
            password: k,
        });
        if ((x(!1), null == e ? void 0 : e.ok)) d(N);
        else {
            var n, a;
            (null == e || null == (n = e.body) ? void 0 : n.username) != null
                ? (0, c.E)()
                : (null == e || null == (a = e.body) ? void 0 : a.email_token) != null && (null == C || C());
        }
    }
    return (
        r.useEffect(() => {
            var t;
            null == (t = v.current) || t.focus();
        }, []),
        (0, a.jsx)(l.kpP, {
            graphic: {
                type: "image",
                src: E,
            },
            title: u.intl.string(u.t.p3280r),
            subtitle: u.intl.string(u.t["1k44EL"]),
            onClose: _,
            transitionState: g,
            actions: [
                null != C
                    ? {
                          variant: "secondary",
                          text: u.intl.string(u.t["13/7kX"]),
                          onClick: C,
                      }
                    : {
                          variant: "secondary",
                          text: u.intl.string(u.t["ETE/oC"]),
                          onClick: _,
                      },
                {
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    loading: h,
                    onClick: T,
                },
            ],
            children: (0, a.jsxs)(l.BJc, {
                gap: 20,
                children: [
                    (0, a.jsx)(l.ksK, {
                        label: u.intl.string(u.t["w/qqKK"]),
                        error: null == p || null == (e = p.email) ? void 0 : e[0],
                        type: "email",
                        value: N,
                        onChange: S,
                        inputRef: v,
                    }),
                    (0, a.jsx)(l.ksK, {
                        label: u.intl.string(u.t.TmdnJ3),
                        error: null == p || null == (n = p.password) ? void 0 : n[0],
                        type: "password",
                        value: k,
                        onChange: m,
                    }),
                ],
            }),
        })
    );
}
