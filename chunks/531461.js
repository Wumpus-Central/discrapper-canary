i.d(e, { A: () => E });
var l = i(627968),
    n = i(64700),
    a = i(189213),
    r = i(292666),
    s = i(154672),
    o = i(198982),
    d = i(330936),
    c = i(650583),
    u = i(985018);
let E = (t) => {
    let { email: e, setStep: i, onBack: E, school: I, setSchool: A, ..._ } = t,
        [h, g] = n.useState(null),
        [m, S] = n.useState(!1),
        y = async () => {
            g(null), S(!0);
            try {
                await s.A.signup(e, I), i(d.Di.EMAIL_WAITLIST);
            } catch (t) {
                g(new o.LG(t));
            } finally {
                S(!1);
            }
        },
        L = async (t) => {
            null != I && "" !== I && t.key === c.dh.ENTER && (await y());
        };
    return (0, l.jsx)(a.Modal, {
        ..._,
        title: u.intl.string(u.t["2FNWBG"]),
        subtitle: u.intl.string(u.t["/4y6ox"]),
        actions: [
            { variant: "secondary", onClick: E, text: u.intl.string(u.t["13/7kX"]) },
            { variant: "primary", text: u.intl.string(u.t.PDsYAo), onClick: y, loading: m },
        ],
        children: (0, l.jsx)(r.k, {
            label: u.intl.string(u.t["L+AfJr"]),
            onKeyPress: L,
            placeholder: u.intl.string(u.t.Y1btJd),
            onChange: (t) => {
                A(t);
            },
            error: h?.getAnyErrorMessage(),
        }),
    });
};
