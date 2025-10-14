n.d(e, { Z: () => d }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(481060),
    s = n(479531),
    o = n(393869),
    c = n(25990),
    u = n(388032),
    E = n(780187),
    _ = n(800010);
function d(t) {
    var e;
    let { error: n, setEmailToken: d, setError: A, onNext: x, onClose: C, transitionState: g } = t,
        [p, S] = r.useState(!1),
        [N, f] = r.useState(""),
        [m, h] = r.useState(!1),
        T = (0, i.e7)([c.Z], () => c.Z.getErrors()),
        v = r.useRef(null);
    r.useEffect(() => {
        var t;
        null == (t = v.current) || t.focus();
    }, []);
    let y = async (t) => {
            t.preventDefault(), A(null), S(!0);
            try {
                let { token: t } = await (0, o.w)(N);
                d(t), x();
            } catch (t) {
                A(new s.Z(t).getAnyErrorMessage());
            } finally {
                S(!1);
            }
        },
        M = async () => {
            if (!m) {
                h(!0);
                try {
                    await (0, o.i)(!0),
                        (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeo6"]), l.ToastType.SUCCESS));
                } catch (e) {
                    let t = new s.Z(e).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    h(!1);
                }
            }
        };
    return (0, a.jsxs)(l.Ioy, {
        title: u.intl.string(u.t.jMGc4O),
        subtitle: u.intl.string(u.t.SZJow8),
        graphic: {
            type: "image",
            src: _,
        },
        transitionState: g,
        onClose: C,
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.PDTjLC),
                loading: p,
                onClick: y,
            },
        ],
        children: [
            (0, a.jsx)(l.oil, {
                label: u.intl.string(u.t["8mZX6O"]),
                error: null != n ? n : null == T || null == (e = T.email_token) ? void 0 : e[0],
                value: N,
                onChange: f,
                inputRef: v,
            }),
            (0, a.jsx)(l.Text, {
                className: E.help,
                variant: "text-sm/normal",
                children: u.intl.format(u.t.P0sak5, { onResend: M }),
            }),
        ],
    });
}
