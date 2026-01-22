n.d(t, { default: () => c }), n(591487), n(727858), n(747238), n(896048);
var s = n(627968),
    i = n(64700),
    r = n(110259),
    a = n(158954),
    l = n(397927),
    o = n(181658),
    u = n(985018);
let p = RegExp(
    "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$",
    "i",
);
function c(e) {
    let {
            transitionState: t,
            onFormSubmit: n,
            onSuccess: c,
            onClose: d,
            headerText: h,
            confirmButtonText: m,
            confirmButtonVariant: A = "primary",
            helperText: f,
        } = e,
        [y, g] = i.useState(!1),
        [k, v] = i.useState(""),
        [x, C] = i.useState(null),
        E = i.useRef(null),
        b = async (e) => {
            if ((e.preventDefault(), C(null), g(!0), !1 === p.test(k))) {
                C(u.intl.string(u.t.hML7Gw)), g(!1);
                return;
            }
            try {
                let e = null != n ? await n(k) : void 0;
                null != c &&
                    (null != e
                        ? c({
                              response: e,
                              email: k,
                          })
                        : c(k)),
                    d();
            } catch (e) {
                C(new o.A(e).getAnyErrorMessage());
            } finally {
                g(!1);
            }
        };
    return (0, s.jsx)("form", {
        onSubmit: b,
        children: (0, s.jsx)(a.Modal, {
            transitionState: t,
            trackingProps: {
                impression: { impressionName: r.ImpressionNames.URF_ENTER_EMAIL },
                impressionType: r.ImpressionTypes.MODAL,
            },
            title: h,
            actions: [
                {
                    text: u.intl.string(u.t["ETE/oC"]),
                    onClick: d,
                    variant: "secondary",
                    disabled: y,
                },
                {
                    text: m,
                    variant: A,
                    loading: y,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, s.jsx)(l.ksK, {
                label: u.intl.string(u.t.hvOfmC),
                error: x,
                value: k,
                onChange: v,
                helperText: f,
                inputRef: E,
            }),
        }),
    });
}
