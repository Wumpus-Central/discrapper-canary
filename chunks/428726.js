n.d(e, { default: () => c });
var i = n(627968),
    a = n(64700),
    r = n(189213),
    s = n(231723),
    l = n(292666),
    u = n(917136),
    o = n(985018);
function c(t) {
    let { transitionState: e, onClose: n, credential: c } = t,
        [d, g] = a.useState(!1),
        [h, p] = a.useState(""),
        [f, E] = a.useState(void 0),
        y = a.useRef(null);
    async function k() {
        g(!0);
        try {
            await (0, u.c6)(c.id, h), n();
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
        (0, i.jsx)(r.Modal, {
            transitionState: e,
            title: o.intl.string(o.t.YjuMsf),
            onClose: n,
            input: (0, i.jsx)(l.k, {
                label: o.intl.string(o.t["7yEgJY"]),
                inputRef: y,
                "aria-label": o.intl.string(o.t["7yEgJY"]),
                placeholder: c.name,
                value: h,
                minLength: 1,
                maxLength: 32,
                onChange: p,
                autoFocus: !0,
                required: !0,
                error: f,
            }),
            actions: [
                { variant: "secondary", text: o.intl.string(o.t["ETE/oC"]), onClick: n },
                {
                    variant: "primary",
                    text: o.intl.string(o.t.i4jeWR),
                    disabled: 0 === h.length || h.length > 32,
                    loading: d,
                    onClick: k,
                },
            ],
        })
    );
}
