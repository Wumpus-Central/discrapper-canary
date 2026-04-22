n.d(e, { default: () => c });
var i = n(627968),
    s = n(64700),
    r = n(110259),
    a = n(189213),
    l = n(292666),
    u = n(181658),
    o = n(985018);
let p = RegExp(
    "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$",
    "i",
);
function c(t) {
    let {
            transitionState: e,
            onFormSubmit: n,
            onSuccess: c,
            onClose: d,
            headerText: m,
            confirmButtonText: h,
            confirmButtonVariant: A = "primary",
            subtitle: f,
        } = t,
        [y, g] = s.useState(!1),
        [b, k] = s.useState(""),
        [v, C] = s.useState(null),
        E = s.useRef(null),
        x = async (t) => {
            if ((t.preventDefault(), C(null), g(!0), !1 === p.test(b))) {
                C(o.intl.string(o.t.hML7Gw)), g(!1);
                return;
            }
            try {
                let t = null != n ? await n(b) : void 0;
                null != c && (null != t ? c({ response: t, email: b }) : c(b)), d();
            } catch (t) {
                C(new u.A(t).getAnyErrorMessage());
            } finally {
                g(!1);
            }
        };
    return (0, i.jsx)("form", {
        onSubmit: x,
        children: (0, i.jsx)(a.Modal, {
            transitionState: e,
            trackingProps: {
                impression: { impressionName: r.ImpressionNames.URF_ENTER_EMAIL },
                impressionType: r.ImpressionTypes.MODAL,
            },
            title: m,
            subtitle: f,
            actions: [
                { text: o.intl.string(o.t["ETE/oC"]), onClick: d, variant: "secondary", disabled: y },
                { text: h, variant: A, loading: y, type: "submit" },
            ],
            onClose: d,
            children: (0, i.jsx)(l.k, {
                label: o.intl.string(o.t.hvOfmC),
                error: v,
                value: b,
                onChange: k,
                inputRef: E,
            }),
        }),
    });
}
