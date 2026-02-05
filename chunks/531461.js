i.d(e, { A: () => I });
var l = i(627968),
    n = i(64700),
    a = i(158954),
    r = i(397927),
    s = i(154672),
    o = i(198982),
    d = i(330936),
    c = i(652215),
    u = i(985018);
let I = (t) => {
    let { email: e, setStep: i, onBack: I, school: E, setSchool: A, ..._ } = t,
        [h, g] = n.useState(null),
        [m, S] = n.useState(!1),
        y = async () => {
            g(null), S(!0);
            try {
                await s.A.signup(e, E), i(d.Di.EMAIL_WAITLIST);
            } catch (t) {
                g(new o.LG(t));
            } finally {
                S(!1);
            }
        },
        L = async (t) => {
            null != E && "" !== E && t.charCode === c.Ks6.ENTER && (await y());
        };
    return (0, l.jsx)(a.Modal, {
        ..._,
        title: u.intl.string(u.t["2FNWBG"]),
        subtitle: u.intl.string(u.t["/4y6ox"]),
        actions: [
            { variant: "secondary", onClick: I, text: u.intl.string(u.t["13/7kX"]) },
            { variant: "primary", text: u.intl.string(u.t.PDsYAo), onClick: y, loading: m },
        ],
        children: (0, l.jsx)(r.ksK, {
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
