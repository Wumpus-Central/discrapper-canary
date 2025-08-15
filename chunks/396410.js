n.d(e, { default: () => c }), n(413496), n(433524), n(35282), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(990547),
    l = n(82659),
    a = n(481060),
    o = n(479531),
    u = n(388032);
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
            headerText: h,
            confirmButtonText: m,
            confirmButtonVariant: f = "primary",
        } = t,
        [x, y] = s.useState(!1),
        [A, g] = s.useState(""),
        [v, E] = s.useState(null),
        Z = s.useRef(null),
        k = async (t) => {
            if ((t.preventDefault(), E(null), y(!0), !1 === p.test(A))) {
                E(u.intl.string(u.t.hML7Gx)), y(!1);
                return;
            }
            try {
                let t = null != n ? await n(A) : void 0;
                null != c &&
                    (null != t
                        ? c({
                              response: t,
                              email: A,
                          })
                        : c(A)),
                    d();
            } catch (t) {
                E(new o.Z(t).getAnyErrorMessage());
            } finally {
                y(!1);
            }
        };
    return (0, i.jsx)("form", {
        onSubmit: k,
        children: (0, i.jsx)(l.Modal, {
            transitionState: e,
            trackingProps: {
                impression: { impressionName: r.ImpressionNames.URF_ENTER_EMAIL },
                impressionType: r.ImpressionTypes.MODAL,
            },
            title: h,
            actions: [
                {
                    text: u.intl.string(u.t["ETE/oK"]),
                    onClick: d,
                    variant: "secondary",
                    disabled: x,
                },
                {
                    text: m,
                    variant: f,
                    loading: x,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, i.jsx)(a.xJW, {
                title: u.intl.string(u.t.hvOfmJ),
                error: v,
                children: (0, i.jsx)(a.oil, {
                    value: A,
                    onChange: g,
                    inputRef: Z,
                }),
            }),
        }),
    });
}
