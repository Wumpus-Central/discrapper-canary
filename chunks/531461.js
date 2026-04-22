i.d(e, { A: () => _ });
var l = i(627968),
    a = i(64700),
    n = i(158954),
    r = i(397927),
    s = i(154672),
    o = i(198982),
    c = i(330936),
    d = i(650583),
    u = i(985018);
let _ = (t) => {
    let { email: e, setStep: i, onBack: _, school: I, setSchool: E, ...A } = t,
        [g, h] = a.useState(null),
        [m, S] = a.useState(!1),
        y = async () => {
            h(null), S(!0);
            try {
                await s.A.signup(e, I), i(c.Di.EMAIL_WAITLIST);
            } catch (t) {
                h(new o.LG(t));
            } finally {
                S(!1);
            }
        },
        x = async (t) => {
            null != I && "" !== I && t.key === d.dh.ENTER && (await y());
        };
    return (0, l.jsx)(n.Modal, {
        ...A,
        title: u.intl.string(u.t["2FNWBG"]),
        subtitle: u.intl.string(u.t["/4y6ox"]),
        actions: [
            { variant: "secondary", onClick: _, text: u.intl.string(u.t["13/7kX"]) },
            { variant: "primary", text: u.intl.string(u.t.PDsYAo), onClick: y, loading: m },
        ],
        children: (0, l.jsx)(r.ksK, {
            label: u.intl.string(u.t["L+AfJr"]),
            onKeyPress: x,
            placeholder: u.intl.string(u.t.Y1btJd),
            onChange: (t) => {
                E(t);
            },
            error: g?.getAnyErrorMessage(),
        }),
    });
};
