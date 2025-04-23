n.d(t, { b: () => u }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(372129),
    a = n(375727),
    o = n(388032);
let c = async (e, t, n) => {
        await (0, a.i)({
            data: e,
            file: t,
            image: n
        });
    },
    u = () => {
        let [e, t] = i.useState(!1);
        return (0, r.jsxs)(l.zxk, {
            tabIndex: -1,
            size: l.zxk.Sizes.MEDIUM,
            disabled: e,
            submitting: e,
            focusProps: { within: !0 },
            children: [
                o.intl.string(o.t.DU0dy8),
                (0, r.jsx)(s.Z, {
                    disabled: e,
                    tabIndex: 0,
                    onChange: c,
                    setLoading: t,
                    multiple: !0
                })
            ]
        });
    };
