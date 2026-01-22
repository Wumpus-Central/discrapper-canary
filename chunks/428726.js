n.d(e, {
    default: () => o,
}),
    n(896048);
var i = n(627968),
    a = n(64700),
    r = n(189213),
    s = n(397927),
    l = n(917136),
    u = n(985018);

function o(t) {
    let { transitionState: e, onClose: n, credential: o } = t,
        [c, d] = a.useState(!1),
        [g, h] = a.useState(""),
        [p, f] = a.useState(void 0),
        E = a.useRef(null);
    async function y() {
        d(!0);
        try {
            await (0, l.c6)(o.id, g), n();
        } catch (t) {
            f(t.message);
        } finally {
            d(!1);
        }
    }
    return (
        a.useEffect(() => {
            if (e === s.ip4.ENTERED) {
                var t;
                null == (t = E.current) || t.focus();
            }
        }, [e]),
        (0, i.jsx)(r.Modal, {
            transitionState: e,
            title: u.intl.string(u.t.YjuMsf),
            onClose: n,
            input: (0, i.jsx)(s.ksK, {
                label: u.intl.string(u.t["7yEgJY"]),
                inputRef: E,
                "aria-label": u.intl.string(u.t["7yEgJY"]),
                placeholder: o.name,
                value: g,
                minLength: 1,
                maxLength: 32,
                onChange: h,
                autoFocus: !0,
                required: !0,
                error: p,
            }),
            actions: [
                {
                    variant: "secondary",
                    text: u.intl.string(u.t["ETE/oC"]),
                    onClick: n,
                },
                {
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    disabled: 0 === g.length || g.length > 32,
                    loading: c,
                    onClick: y,
                },
            ],
        })
    );
}
