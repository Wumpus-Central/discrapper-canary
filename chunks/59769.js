n.d(t, { b: () => d }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    l = n(372129),
    a = n(375727),
    o = n(388032);
let c = async (e, t, n) => {
        await (0, a.i)({
            data: e,
            file: t,
            image: n
        });
    },
    d = () => {
        let [e, t] = i.useState(!1);
        return (0, r.jsxs)(s.zxk, {
            tabIndex: -1,
            size: s.zxk.Sizes.MEDIUM,
            disabled: e,
            submitting: e,
            focusProps: { within: !0 },
            children: [
                o.NW.string(o.t.DU0dy8),
                (0, r.jsx)(l.Z, {
                    disabled: e,
                    tabIndex: 0,
                    onChange: c,
                    setLoading: t,
                    multiple: !0
                })
            ]
        });
    };
