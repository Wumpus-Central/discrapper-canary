e.d(n, { Z: () => _ }), e(388685);
var a = e(54381),
    r = e(473749),
    i = e(442837),
    l = e(481060),
    s = e(479531),
    o = e(393869),
    c = e(25990),
    u = e(388032),
    E = e(36884),
    A = e(800010);
function _(t) {
    var n;
    let { error: e, setEmailToken: _, setError: d, onNext: C, onClose: x, transitionState: N } = t,
        [S, f] = r.useState(!1),
        [g, p] = r.useState(""),
        [m, v] = r.useState(!1),
        h = (0, i.e7)([c.Z], () => c.Z.getErrors()),
        y = r.useRef(null);
    r.useEffect(() => {
        var t;
        null == (t = y.current) || t.focus();
    }, []);
    let T = async (t) => {
            t.preventDefault(), d(null), f(!0);
            try {
                let { token: t } = await (0, o.w)(g);
                _(t), C();
            } catch (t) {
                d(new s.Z(t).getAnyErrorMessage());
            } finally {
                f(!1);
            }
        },
        M = async () => {
            if (!m) {
                v(!0);
                try {
                    await (0, o.i)(!0),
                        (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS));
                } catch (n) {
                    let t = new s.Z(n).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    v(!1);
                }
            }
        };
    return (0, a.jsxs)(l.Ioy, {
        title: u.intl.string(u.t.jMGc4J),
        subtitle: u.intl.string(u.t.SZJowy),
        graphic: {
            type: "image",
            src: A,
        },
        transitionState: N,
        onClose: x,
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.PDTjLN),
                loading: S,
                onClick: T,
            },
        ],
        children: [
            (0, a.jsx)(l.oil, {
                label: u.intl.string(u.t["8mZX6M"]),
                error: null != e ? e : null == h || null == (n = h.email_token) ? void 0 : n[0],
                value: g,
                onChange: p,
                inputRef: y,
            }),
            (0, a.jsx)(l.Text, {
                className: E.help,
                variant: "text-sm/normal",
                children: u.intl.format(u.t.P0sak5, { onResend: M }),
            }),
        ],
    });
}
