n.d(e, { A: () => S });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(691540),
    l = n(857250),
    o = n(97483),
    c = n(772707),
    E = n(331322),
    u = n(292666),
    A = n(123292),
    _ = n(181658),
    C = n(836602),
    d = n(780333),
    g = n(985018),
    N = n(37229);
function S(t) {
    let { error: e, setEmailToken: n, setError: S, onNext: k, onClose: m, transitionState: h } = t,
        [f, x] = r.useState(!1),
        [p, R] = r.useState(""),
        [v, y] = r.useState(!1),
        O = (0, i.bG)([C.A], () => C.A.getErrors()),
        I = r.useRef(null);
    r.useEffect(() => {
        I.current?.focus();
    }, []);
    let M = async (t) => {
            t.preventDefault(), S(null), x(!0);
            try {
                let { token: t } = await (0, d.$)(p);
                n(t), k();
            } catch (t) {
                S(new _.A(t).getAnyErrorMessage());
            } finally {
                x(!1);
            }
        },
        L = async () => {
            if (!v) {
                y(!0);
                try {
                    await (0, d.B)(!0), (0, s.P0)((0, l.o)(g.intl.string(g.t["84yeoz"]), o.Ck.SUCCESS));
                } catch (e) {
                    let t = new _.A(e).getAnyErrorMessage();
                    null != t && (0, s.P0)((0, l.o)(t, o.Ck.FAILURE));
                } finally {
                    y(!1);
                }
            }
        };
    return (0, a.jsx)(c.k, {
        title: g.intl.string(g.t.jMGc4J),
        subtitle: g.intl.string(g.t.SZJowy),
        graphic: { type: "image", src: N },
        transitionState: h,
        onClose: m,
        actions: [{ variant: "primary", text: g.intl.string(g.t.PDTjLN), loading: f, onClick: M }],
        children: (0, a.jsxs)(E.B, {
            gap: 8,
            children: [
                (0, a.jsx)(u.k, {
                    label: g.intl.string(g.t["8mZX6M"]),
                    error: e ?? O?.email_token?.[0],
                    value: p,
                    onChange: R,
                    inputRef: I,
                }),
                (0, a.jsx)(A.Q, { textVariant: "text-sm/normal", text: g.intl.string(g.t.K0NPQ6), onClick: L }),
            ],
        }),
    });
}
