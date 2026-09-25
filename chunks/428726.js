n.d(e, { default: () => o });
var i = n(477900),
    a = n(582128),
    r = n(189213),
    s = n(231723),
    l = n(95477),
    u = n(917136),
    c = n(375708);
function o(t) {
    let { transitionState: e, onClose: n, credential: o } = t,
        [d, g] = a.useState(!1),
        [h, p] = a.useState(""),
        [f, E] = a.useState(void 0),
        y = a.useRef(null);
    async function k() {
        g(!0);
        try {
            (await (0, u.c6)(o.id, h), n());
        } catch (t) {
            E(t.message);
        } finally {
            g(!1);
        }
    }
    return (
        a.useEffect(() => {
            e === s.ip.ENTERED && y.current?.focus();
        }, [e]),
        (0, i.jsx)(r.a, {
            transitionState: e,
            title: c.intl.string(c.t.YjuMsf),
            onClose: n,
            input: (0, i.jsx)(l.k, {
                label: c.intl.string(c.t["7yEgJY"]),
                inputRef: y,
                "aria-label": c.intl.string(c.t["7yEgJY"]),
                placeholder: o.name,
                value: h,
                minLength: 1,
                maxLength: 32,
                onChange: p,
                autoFocus: !0,
                required: !0,
                error: f,
            }),
            actions: [
                { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: n },
                {
                    variant: "primary",
                    text: c.intl.string(c.t.i4jeWR),
                    disabled: 0 === h.length || h.length > 32,
                    loading: d,
                    onClick: k,
                },
            ],
        })
    );
}
